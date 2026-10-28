(() => {
  'use strict';

  const timeline = window.B17_TIMELINE;
  if (!timeline) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const formatTime = (milliseconds) => {
    const seconds = Math.max(0, Math.floor(milliseconds / 1000));
    const minutes = Math.floor(seconds / 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  };
  const poemLines = [
    '山下蘭芽短浸溪', '松間沙路淨無泥', '蕭蕭暮雨子規啼',
    '誰道人生無再少？', '門前流水尚能西！', '休將白髮唱黃雞。'
  ];
  const scenes = timeline.scenes;
  const chapters = timeline.chapters;
  const settings = window.EPISODE_SETTINGS || {};
  const isEffectsReader = document.body.dataset.page === 'reader-effects';
  const isReader = document.body.dataset.page === 'reader' || isEffectsReader;

  function youtubeButton(url, label) {
    const icon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#ff0033" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>';
    let href = '';
    try {
      const parsed = new URL(String(url || '').trim());
      if (parsed.protocol === 'https:' && ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be', 'www.youtube-nocookie.com'].includes(parsed.hostname)) href = parsed.href;
    } catch {}
    const content = `${icon}<span>${label}</span>`;
    return href
      ? `<a class="youtube-link" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${content}</a>`
      : `<span class="youtube-link is-unset" aria-disabled="true" title="請先在 index.html 填入有效的 YouTube 網址">${content}</span>`;
  }

  function renderHome() {
    return `<main class="home-page">
      <section class="hero" aria-labelledby="main-title">
        <img src="${escapeHtml(settings.assets.coverImage)}" alt="蘇軾《浣溪沙·遊蘄水清泉寺》封面">
        <div class="hero-shade cover-hero-shade"></div>
        <div class="hero-copy cover-hero-copy">
          <h1 id="main-title" class="visually-hidden">千年後，我們仍記得蘇東坡</h1>
          <div class="hero-actions">
            <a class="start-link" href="${escapeHtml(settings.links.reading)}">開始閱讀 <b aria-hidden="true">→</b></a>
            ${youtubeButton(settings.links.youtubeWithSubtitles, 'YT連結（有字幕）')}
            ${youtubeButton(settings.links.youtubeWithoutSubtitles, 'YT連結（無字幕）')}
            <a class="effects-link" href="${escapeHtml(settings.links.effects)}">動畫特效版 <b aria-hidden="true">✦</b></a>
          </div>
          <p class="hero-meta">${scenes.length} 個分鏡 · ${chapters.length} 個章節 · 原速旁白 · 動態同步播放</p>
        </div>
      </section>
    </main>`;
  }

  function renderReader() {
    return `<main class="reader-page" id="reading">
      <header class="reader-header">
        <a class="back-link" href="${isEffectsReader ? './reading.html' : './index.html'}">${isEffectsReader ? '← 返回原版閱讀' : '← 系列首頁'}</a>
        <div><p class="eyebrow">千年後，我們仍記得蘇東坡</p><h1>${escapeHtml(timeline.title)}</h1></div>
        <span class="reader-duration">${scenes.length} 鏡 · ${chapters.length} 章</span>
      </header>
      <section class="reader-shell" aria-label="旁白與分鏡同步播放器">
        <div class="stage-wrap" id="stage-wrap">
          <div class="video-composition" id="stage">
            <div class="frame-art">
              <img id="art-a" alt=""><img id="art-b" alt="">
              <div class="art-missing" id="art-fallback" hidden>正式分鏡插圖待補</div>
              <div class="frame-shade"></div>
              ${isEffectsReader ? '<div class="frame-effects" id="frame-effects" aria-hidden="true"></div><div class="poem-overlay" id="poem-overlay" aria-hidden="true"><span id="poem-overlay-text"></span></div>' : ''}
              <div class="frame-chapter" id="chapter-title"></div>
              <div class="frame-subtitle" id="caption"></div>
            </div>
            <audio id="audio" class="master-audio" preload="auto" src="${escapeHtml(settings.assets.narrationAudio)}"></audio>
            <button class="cover-start" id="cover-start" type="button" aria-label="開始播放旁白與同步閱讀">
              <img src="${escapeHtml(settings.assets.coverImage)}" alt="浣溪沙詩詞封面">
              <span class="cover-shade"></span>
              <span class="cover-start-copy"><b aria-hidden="true">▶</b><strong>開始閱讀</strong><small>${scenes.length} 個分鏡 · ${chapters.length} 個章節 · 原速旁白</small></span>
            </button>
          </div>
        </div>
        <div class="player-panel">
          <div class="seek-row">
            <span class="time-readout" id="current-time">00:00</span>
            <input id="seek" class="seek-slider" type="range" min="0" max="${timeline.durationMs}" step="1" value="0" aria-label="影片時間滑桿">
            <span class="time-readout" id="total-time">${formatTime(timeline.durationMs)}</span>
          </div>
          <div class="control-row">
            <button id="chapter-prev" type="button">上一章</button><button id="scene-prev" type="button">前一鏡</button>
            <button id="play" class="play-control" type="button">播放</button>
            <button id="scene-next" type="button">下一鏡</button><button id="chapter-next" type="button">下一章</button>
            <button id="mute" type="button">靜音</button>
            <label class="volume-control"><span>音量</span><input id="volume" type="range" min="0" max="1" step="0.01" value="1" aria-label="音量"></label>
            <button id="fullscreen" type="button">全螢幕</button><button id="restart" type="button">從頭重播</button>
          </div>
          <div class="playback-status"><span id="play-state">尚未播放</span><span>播放速度 1.0×</span><span id="scene-label">Excel 分鏡空檔</span></div>
        </div>
      </section>
      <section class="chapter-section" id="chapter-index" aria-labelledby="chapter-heading">
        <p class="eyebrow">CHAPTER INDEX</p><h2 id="chapter-heading">章節索引</h2>
        <div class="chapter-list">${chapters.map((chapter) => `<button class="chapter-button" data-time="${chapter.startMs}" type="button">
          <span class="chapter-number">${escapeHtml(chapter.id)}</span>
          <span class="chapter-name">${escapeHtml(chapter.title.replace(/^\d+｜/, ''))}</span>
          <small>${scenes.filter((scene) => scene.chapterId === chapter.id).length} 鏡</small>
        </button>`).join('')}</div>
      </section>
      <button class="sync-debug-toggle" id="debug-toggle" type="button" aria-expanded="false" aria-controls="sync-debug-panel">查看同步資訊</button>
      <section id="sync-debug-panel" class="sync-debug" aria-label="同步資訊" hidden>
        <p class="debug-explainer">旁白音檔是播放主時鐘；分鏡與章節起點依 Excel 時間軸，字幕依整理後的字幕時間。</p>
        <dl class="debug-grid"><div><dt>旁白時間</dt><dd id="debug-time">00:00.000</dd></div><div><dt>目前分鏡</dt><dd id="debug-scene">—</dd></div><div><dt>目前章節</dt><dd id="debug-chapter">—</dd></div><div><dt>字幕</dt><dd id="debug-caption">（此刻沒有字幕）</dd></div><div><dt>圖片數量</dt><dd>${scenes.length} 張正式圖片</dd></div></dl>
      </section>
      <footer class="reader-footer">${isEffectsReader ? '動畫特效版沿用原始旁白、字幕、圖片與時間軸；所有動態依播放時間同步。' : '分鏡與章節起點依 Excel；旁白以原始 MP3 原速播放。每鏡圖片皆有隨機推拉與平移動畫。'}</footer>
    </main>`;
  }

  const root = $('#root');
  root.innerHTML = isReader ? renderReader() : renderHome();
  if (!isReader) return;

  const audio = $('#audio');
  const slider = $('#seek');
  const caption = $('#caption');
  const chapterTitle = $('#chapter-title');
  const cover = $('#cover-start');
  const imageA = $('#art-a');
  const imageB = $('#art-b');
  const fallback = $('#art-fallback');
  let activeImage = imageA;
  let lastSceneIndex = -1;
  let lastChapterIndex = -1;
  let dragging = false;
  let resumeAfterDrag = false;
  let previousVolume = 1;
  let activeMotion = null;

  const sceneAt = (time) => {
    let low = 0;
    let high = scenes.length - 1;
    while (low < high) {
      const middle = (low + high + 1) >> 1;
      if (scenes[middle].startMs <= time) low = middle;
      else high = middle - 1;
    }
    return scenes[low];
  };
  const chapterAt = (time) => [...chapters].reverse().find((chapter) => chapter.startMs <= time) || chapters[0];
  const subtitleAt = (time) => timeline.subtitles.find((cue) => time >= cue.startMs && time < cue.endMs);
  const imageUrl = (scene) => `./assets/${scene.imagePath}`;

  function updateScene(scene, index) {
    if (index === lastSceneIndex) return;
    lastSceneIndex = index;
    const nextImage = activeImage === imageA ? imageB : imageA;
    activeMotion?.cancel();
    const plannedMotion = isEffectsReader ? window.B17_EFFECTS?.imageEffects?.[scene.id]?.motion : null;
    const sceneSeed = Number(scene.id) || 1;
    const axis = isEffectsReader ? (sceneSeed % 2 ? 'x' : 'y') : (Math.random() < 0.5 ? 'x' : 'y');
    const direction = isEffectsReader ? (sceneSeed % 4 < 2 ? -1 : 1) : (Math.random() < 0.5 ? -1 : 1);
    const zoomIn = isEffectsReader ? sceneSeed % 3 !== 0 : Math.random() < 0.5;
    const fromScale = plannedMotion?.fromScale ?? (zoomIn ? 1.025 : 1.115);
    const toScale = plannedMotion?.toScale ?? (zoomIn ? 1.115 : 1.025);
    const startX = plannedMotion?.fromX ?? (axis === 'x' ? -direction * 3.2 : (isEffectsReader ? (sceneSeed % 5 - 2) * 0.3 : (Math.random() - 0.5) * 1.2));
    const startY = plannedMotion?.fromY ?? (axis === 'y' ? -direction * 3.2 : (isEffectsReader ? (sceneSeed % 5 - 2) * 0.3 : (Math.random() - 0.5) * 1.2));
    const endX = plannedMotion?.toX ?? (axis === 'x' ? direction * 3.2 : startX);
    const endY = plannedMotion?.toY ?? (axis === 'y' ? direction * 3.2 : startY);
    nextImage.onload = () => { fallback.hidden = true; nextImage.style.opacity = '1'; };
    nextImage.onerror = () => { nextImage.style.opacity = '0'; fallback.hidden = false; fallback.textContent = `正式分鏡插圖待補｜IMG${scene.id}`; };
    nextImage.style.transition = 'opacity .48s ease';
    nextImage.style.transform = `scale(${fromScale}) translate(${startX}%,${startY}%)`;
    nextImage.src = imageUrl(scene);
    nextImage.style.opacity = '1';
    activeImage.style.opacity = '0';
    activeImage = nextImage;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (isEffectsReader && reduceMotion) {
      nextImage.style.transform = 'scale(1.015)';
      activeMotion = null;
    } else {
      activeMotion = nextImage.animate([
        { transform: `scale(${fromScale}) translate(${startX}%,${startY}%)` },
        { transform: `scale(${toScale}) translate(${endX}%,${endY}%)` }
      ], { duration: scene.durationMs, fill: 'forwards', easing: 'linear' });
      activeMotion.currentTime = Math.max(0, audio.currentTime * 1000 - scene.startMs);
      if (audio.paused) activeMotion.pause();
    }
    $('#scene-label').textContent = `第 ${scene.id} 鏡｜${scene.shot}`;
    $('#debug-scene').textContent = `${scene.id}｜${scene.shot}`;
  }

  function update() {
    const time = audio.currentTime * 1000;
    if (!dragging) slider.value = String(Math.min(timeline.durationMs, time));
    $('#current-time').textContent = formatTime(time);
    const scene = sceneAt(time);
    updateScene(scene, scenes.indexOf(scene));
    if (activeMotion) {
      activeMotion.currentTime = Math.max(0, Math.min(scene.durationMs, time - scene.startMs));
      if (audio.paused) activeMotion.pause(); else activeMotion.play();
    }

    const chapter = chapterAt(time);
    const chapterIndex = chapters.indexOf(chapter);
    if (chapterIndex !== lastChapterIndex) {
      lastChapterIndex = chapterIndex;
      chapterTitle.textContent = chapter.title.replace(/^\d+｜/, '');
    }
    const chapterOffset = time - chapter.startMs;
    chapterTitle.classList.toggle('is-centered', chapterOffset < 2000);
    chapterTitle.classList.toggle('is-corner', chapterOffset >= 2000);
    cover.classList.toggle('is-hidden', !(time < 700 && audio.paused));

    const cue = subtitleAt(time);
    if (cue) {
      caption.innerHTML = poemLines.some((line) => cue.text.includes(line))
        ? `<span class="poem">${escapeHtml(cue.text)}</span>` : escapeHtml(cue.text);
      caption.style.opacity = '1';
    } else {
      caption.textContent = '';
      caption.style.opacity = '0';
    }

    $('#play').textContent = audio.paused ? (audio.ended ? '重播' : '播放') : '暫停';
    $('#play-state').textContent = audio.paused ? (audio.ended ? '播放完成' : time > 0 ? '已暫停' : '尚未播放') : '旁白播放中';
    $('#debug-time').textContent = `${(time / 1000).toFixed(3)} 秒`;
    $('#debug-chapter').textContent = chapter.title;
    const cueText = cue?.text || '（此刻沒有字幕）';
    $('#debug-caption').textContent = cueText;
    document.querySelectorAll('.chapter-button').forEach((button) => {
      button.classList.toggle('active', Number(button.dataset.time) === chapter.startMs);
    });
  }

  function seekTo(milliseconds, resume = false) {
    audio.currentTime = Math.max(0, Math.min(timeline.durationMs, milliseconds)) / 1000;
    lastSceneIndex = -1;
    lastChapterIndex = -1;
    update();
    if (resume) audio.play();
  }
  function currentSceneIndex() { return scenes.indexOf(sceneAt(audio.currentTime * 1000)); }
  function changeChapter(delta) {
    const index = chapters.indexOf(chapterAt(audio.currentTime * 1000));
    seekTo(chapters[Math.max(0, Math.min(chapters.length - 1, index + delta))].startMs, true);
  }

  audio.addEventListener('timeupdate', update);
  audio.addEventListener('seeked', update);
  audio.addEventListener('loadedmetadata', update);
  audio.addEventListener('play', update);
  audio.addEventListener('pause', update);
  audio.addEventListener('ended', update);
  $('#play').addEventListener('click', () => audio.paused ? audio.play() : audio.pause());
  cover.addEventListener('click', () => audio.play());
  $('#restart').addEventListener('click', () => seekTo(0, true));
  $('#chapter-prev').addEventListener('click', () => changeChapter(-1));
  $('#chapter-next').addEventListener('click', () => changeChapter(1));
  $('#scene-prev').addEventListener('click', () => {
    const index = currentSceneIndex();
    const target = audio.currentTime * 1000 <= scenes[index].startMs + 100 ? index - 1 : index;
    seekTo(scenes[Math.max(0, target)].startMs, true);
  });
  $('#scene-next').addEventListener('click', () => seekTo(scenes[Math.min(scenes.length - 1, currentSceneIndex() + 1)].startMs, true));
  $('#volume').addEventListener('input', (event) => { audio.volume = Number(event.currentTarget.value); });
  $('#mute').addEventListener('click', () => {
    if (audio.muted || audio.volume === 0) {
      audio.muted = false; audio.volume = previousVolume; $('#volume').value = String(previousVolume); $('#mute').textContent = '靜音';
    } else {
      previousVolume = audio.volume; audio.muted = true; $('#volume').value = '0'; $('#mute').textContent = '取消靜音';
    }
  });
  $('#fullscreen').addEventListener('click', () => {
    const shell = $('.reader-shell');
    document.fullscreenElement ? document.exitFullscreen?.() : shell.requestFullscreen?.();
  });
  slider.addEventListener('pointerdown', () => { dragging = true; resumeAfterDrag = !audio.paused; if (resumeAfterDrag) audio.pause(); });
  slider.addEventListener('input', () => { $('#current-time').textContent = formatTime(Number(slider.value)); });
  function commitSeek() {
    if (!dragging) return;
    audio.currentTime = Number(slider.value) / 1000;
    dragging = false;
    if (resumeAfterDrag) audio.play();
    window.setTimeout(update, 80);
  }
  slider.addEventListener('pointerup', commitSeek);
  slider.addEventListener('pointercancel', commitSeek);
  slider.addEventListener('change', commitSeek);
  slider.addEventListener('keydown', (event) => {
    if (event.key.startsWith('Arrow')) window.setTimeout(() => { audio.currentTime = Number(slider.value) / 1000; }, 0);
  });
  document.querySelectorAll('.chapter-button').forEach((button) => {
    button.addEventListener('click', () => seekTo(Number(button.dataset.time), true));
  });
  $('#debug-toggle').addEventListener('click', (event) => {
    const panel = $('#sync-debug-panel');
    const expanded = event.currentTarget.getAttribute('aria-expanded') === 'true';
    event.currentTarget.setAttribute('aria-expanded', String(!expanded));
    event.currentTarget.textContent = expanded ? '查看同步資訊' : '收合同步資訊';
    panel.hidden = expanded;
  });
  if (location.hash === '#chapter-index') $('#chapter-index').scrollIntoView();
  update();
})();
