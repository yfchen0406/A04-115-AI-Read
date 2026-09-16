(() => {
  const d = window.READER_DATA;
  const a = document.querySelector('#audio');
  const img = document.querySelector('#sceneImage');
  const stage = document.querySelector('#stage');
  const subtitle = document.querySelector('#subtitle');
  const title = document.querySelector('#stageChapter');
  const intro = document.querySelector('#chapterIntro');
  const missing = document.querySelector('#missingNote');
  const seek = document.querySelector('#seek');
  const play = document.querySelector('#play');
  const status = document.querySelector('#status');
  const metrics = document.querySelector('#metrics');
  const list = document.querySelector('#chapterList');
  let visualIndex = -1, captionIndex = -1, raf = 0, lastChapter = '', lastImage = '', introTimer = 0;
  let seekToken = 0, sliderPending = null, isSeeking = false;
  const qidMap = new Map(d.captions.map((cue, index) => [cue.id, index]));
  const DEBUG = Boolean(window.READER_DEBUG);
  function debug(event, extra = {}) {
    if (!DEBUG) return;
    const time = now();
    const subtitleIndex = at(d.captions, time);
    const sceneIndex = at(d.scenes, time);
    console.table([{ event, currentTime: time, qid: subtitleIndex >= 0 ? d.captions[subtitleIndex].id : null, subtitleIndex, imageIndex: sceneIndex >= 0 ? d.scenes[sceneIndex].id : null, sceneIndex, chapter: sceneIndex >= 0 ? d.scenes[sceneIndex].chapter : null, ...extra }]);
  }

  const fmt = (x) => {
    x = Math.floor(Math.max(0, x || 0));
    return String(Math.floor(x / 60)).padStart(2, '0') + ':' + String(x % 60).padStart(2, '0');
  };
  const at = (items, t) => {
    let lo = 0, hi = items.length - 1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1, item = items[mid];
      if (t < item.start) hi = mid - 1;
      else if (t >= item.end) lo = mid + 1;
      else return mid;
    }
    return -1;
  };
  const now = () => Math.max(0, Math.min(d.totalDuration, Number(a.currentTime) || 0));
  const cueById = (id) => { const index = qidMap.get(id); return index === undefined ? null : d.captions[index]; };
  const imageForCue = (cue, fallback) => {
    const source = cue?.imageSource || fallback;
    if (!source) return '';
    const file = source.split('/').pop().replace(/\.png$/i, '.webp');
    return '../assets/images/' + file;
  };

  function showChapterIntro(chapter) {
    clearTimeout(introTimer);
    intro.textContent = chapter;
    intro.classList.remove('is-visible');
    void intro.offsetWidth;
    intro.classList.add('is-visible');
    introTimer = setTimeout(() => intro.classList.remove('is-visible'), 2600);
  }
  function renderVisual(index, force = false, imageOverride = null) {
    if (index < 0) return;
    const scene = d.scenes[index];
    const image = imageOverride || scene.image;
    if (!force && index === visualIndex && image === lastImage) return;
    const chapterChanged = scene.chapter !== lastChapter;
    visualIndex = index;
    lastChapter = scene.chapter;
    lastImage = image;
    img.src = image;
    img.alt = '第 ' + scene.id + ' 鏡：' + scene.chapter;
    stage.className = 'stage motion-' + ['push', 'pull', 'pan-left', 'pan-right', 'rise', 'settle'][scene.id % 6];
    stage.style.setProperty('--scene-duration', Math.max(.1, scene.end - scene.start) + 's');
    title.textContent = scene.chapter;
    missing.hidden = !scene.missingImage;
    if (chapterChanged) showChapterIntro(scene.chapter);
    [1, 2].forEach((offset) => { if (d.scenes[index + offset]) new Image().src = imageForCue(null, d.scenes[index + offset].image); });
    [...list.children].forEach((button) => button.classList.toggle('active', Number(button.dataset.sceneId) <= scene.id && Number(button.dataset.nextSceneId) > scene.id));
  }
  function renderCaption(index, force = false) {
    if (!force && index === captionIndex) return;
    captionIndex = index;
    if (index < 0) {
      subtitle.textContent = '';
      subtitle.hidden = true;
      return;
    }
    const cue = d.captions[index];
    subtitle.hidden = false;
    subtitle.textContent = cue.text;
    subtitle.style.fontSize = '30px';
  }
  function syncByTime(event = 'sync') {
    const time = now();
    const sceneIndex = at(d.scenes, time);
    const currentCaptionIndex = at(d.captions, time);
    const currentCue = currentCaptionIndex >= 0 ? d.captions[currentCaptionIndex] : null;
    renderVisual(sceneIndex, false, imageForCue(currentCue, sceneIndex >= 0 ? d.scenes[sceneIndex].image : null));
    renderCaption(currentCaptionIndex);
    if (sliderPending === null) seek.value = String(time);
    status.textContent = a.ended ? '旁白播放完成' : (isSeeking ? '正在定位旁白' : (a.paused ? '已暫停' : '旁白播放中'));
    const cueId = captionIndex >= 0 ? d.captions[captionIndex].id : '無字幕';
    const sceneId = visualIndex >= 0 ? d.scenes[visualIndex].id : '-';
    metrics.textContent = fmt(time) + ' / ' + fmt(d.totalDuration) + ' · ' + cueId + ' · 第 ' + sceneId + ' 鏡';
  }
  function loop() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      syncByTime();
      if (!a.paused && !a.ended) loop();
    });
  }
  function commitSeek(time, playAfter = true) {
    const requestedTime = Math.max(0, Math.min(d.totalDuration - .01, Number(time) || 0));
    const target = Math.ceil(requestedTime * 1000000) / 1000000;
    const token = ++seekToken;
    isSeeking = true;
    const targetIndex = at(d.captions, target);
    debug('target', { targetQID: targetIndex >= 0 ? d.captions[targetIndex].id : null, targetTime: target });
    sliderPending = null;
    a.pause();
    const finish = () => {
      if (token !== seekToken) return;
      seekToken = 0;
      isSeeking = false;
      const actualIndex = at(d.captions, now());
      debug('after seek', { actualQID: actualIndex >= 0 ? d.captions[actualIndex].id : null, actualTime: now() });
      syncByTime();
      if (playAfter) a.play().then(loop).catch(() => { status.textContent = '播放需要使用者點選'; });
    };
    if (Math.abs(now() - target) < .002) {
      finish();
      return;
    }
    a.addEventListener('seeked', finish, { once: true });
    a.currentTime = target;
    syncByTime();
  }
  function commitCue(cueId, playAfter = true) {
    const cue = cueById(cueId);
    if (cue) commitSeek(cue.start, playAfter);
  }

  play.onclick = () => a.paused ? a.play().then(loop) : a.pause();
  document.querySelector('#back').onclick = () => {
    const index = at(d.captions, now());
    commitSeek(d.captions[Math.max(0, index - 1)].start, true);
  };
  document.querySelector('#forward').onclick = () => {
    const index = at(d.captions, now());
    commitSeek(d.captions[Math.min(d.captions.length - 1, Math.max(0, index) + 1)].start, true);
  };
  seek.oninput = (event) => {
    debug('slider input', { targetTime: Number(event.target.value) });
    sliderPending = Number(event.target.value);
    a.pause();
    status.textContent = '放開滑桿後定位播放';
  };
  seek.onchange = (event) => { debug('slider change', { targetTime: Number(event.target.value) }); commitSeek(Number(event.target.value), true); };
  // Map pointer coordinates across the full track so the native thumb width
  // does not create a visible percentage-to-time offset during dragging.
  let pointerSeeking = false;
  let pointerId = null;
  const pointerTime = (clientX) => {
    const rect = seek.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    return ratio * Number(seek.max || d.totalDuration);
  };
  const updatePointerSeek = (event) => {
    const time = pointerTime(event.clientX);
    seek.value = String(time);
    sliderPending = time;
    a.pause();
    syncByTime('pointer-seek');
    status.textContent = '放開滑桿後定位播放';
  };
  seek.addEventListener('pointerdown', (event) => {
    pointerSeeking = true;
    pointerId = event.pointerId;
    seek.setPointerCapture(pointerId);
    event.preventDefault();
    updatePointerSeek(event);
  });
  seek.addEventListener('pointermove', (event) => {
    if (!pointerSeeking || event.pointerId !== pointerId) return;
    event.preventDefault();
    updatePointerSeek(event);
  });
  const finishPointerSeek = (event) => {
    if (!pointerSeeking || event.pointerId !== pointerId) return;
    event.preventDefault();
    updatePointerSeek(event);
    pointerSeeking = false;
    pointerId = null;
    commitSeek(sliderPending, true);
  };
  seek.addEventListener('pointerup', finishPointerSeek);
  seek.addEventListener('pointercancel', finishPointerSeek);  a.ontimeupdate = () => syncByTime('timeupdate');
  a.onseeking = () => { isSeeking = true; debug('seeking'); syncByTime('seeking'); };
  a.onseeked = () => { debug('seeked'); syncByTime('seeked'); };
  a.onplay = () => { debug('play'); play.textContent = '暫停旁白'; loop(); };
  a.onpause = () => { play.textContent = '播放旁白'; cancelAnimationFrame(raf); syncByTime(); };
  a.onended = () => syncByTime('ended');
  seek.min = '0';
  seek.step = '0.01';
  seek.max = String(d.totalDuration);
  a.onloadedmetadata = () => { seek.max = String(Number.isFinite(a.duration) ? a.duration : d.totalDuration); syncByTime('loadedmetadata'); };
  d.chapters.forEach((chapter, index) => {
    const button = document.createElement('button');
    button.dataset.sceneId = String(chapter.sceneId);
    button.dataset.cueId = String(chapter.firstCueId || '');
    button.dataset.nextSceneId = String(d.chapters[index + 1]?.sceneId ?? 246);
    button.textContent = chapter.title + ' · ' + chapter.count + ' 鏡';
    button.title = '第' + chapter.sceneId + '鏡 · ' + (chapter.firstCueId || '') + ' · ' + fmt(chapter.start);
    button.onclick = () => { debug('chapter click', { targetQID: chapter.firstCueId }); commitCue(chapter.firstCueId, true); };
    list.appendChild(button);
  });
  renderVisual(0, true, imageForCue(null, d.scenes[0].image));
  renderCaption(0, true);
  syncByTime();
})();














