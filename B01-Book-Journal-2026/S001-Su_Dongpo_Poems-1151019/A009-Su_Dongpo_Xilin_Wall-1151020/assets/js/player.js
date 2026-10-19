(() => {
  'use strict';
  const timeline = window.TIMELINE_DATA;
  const core = window.EpisodeCore;
  const settings = window.EPISODE_SETTINGS || {};
  const base = (settings.assets && settings.assets.base) || './';
  const $ = (id) => document.getElementById(id);
  if (!timeline || !core) {
    const error = $('playback-error');
    if (error) { error.hidden = false; error.textContent = '時間軸未載入，請確認解壓後保留完整資料夾。'; }
    return;
  }

  const audio = $('master-audio');
  const slider = $('seek-slider');
  const stage = $('stage-wrap');
  const shell = $('reader-shell');
  const cover = $('cover-start');
  const layers = [$('current-image'), $('previous-image')];
  const chapterButtons = [];
  const poemLines = [
    '橫看成嶺側成峰，遠近高低各不同。',
    '不識廬山真面目，只緣身在此山中。',
  ];
  let raf = 0;
  let dragging = null;
  let settlingSeek = false;
  let started = false;
  let skipChangeUntil = 0;

  const setError = (message) => { $('playback-error').textContent = message; $('playback-error').hidden = false; };
  const sourceFor = (scene) => `${base}${scene.imagePath.replace(/^\.\//, '')}`;
  const stopFrameLoop = () => { if (raf) cancelAnimationFrame(raf); raf = 0; };

  function createChapters() {
    timeline.chapters.forEach((chapter, index) => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'chapter-button'; button.dataset.chapterId = chapter.id;
      const number = document.createElement('span'); number.className = 'chapter-number'; number.textContent = String(index + 1).padStart(2, '0');
      const name = document.createElement('span'); name.className = 'chapter-name'; name.textContent = chapter.title;
      const meta = document.createElement('small'); meta.textContent = `${chapter.firstSceneId}・${core.formatTime(chapter.jumpStartMs ?? chapter.speechStartMs ?? chapter.startMs)}`;
      button.append(number, name, meta);
      button.addEventListener('click', () => seek(chapter.jumpStartMs ?? chapter.speechStartMs ?? chapter.startMs, true));
      $('chapter-list').append(button); chapterButtons.push(button);
    });
  }

  function preloadImages() {
    let next = 0;
    const worker = () => {
      if (next >= timeline.scenes.length) return;
      const scene = timeline.scenes[next++]; const image = new Image();
      image.onload = image.onerror = worker; image.src = sourceFor(scene);
    };
    for (let i = 0; i < Math.min(4, timeline.scenes.length); i++) worker();
  }

  function setLayer(layer, scene, opacity, ms) {
    if (!scene) { layer.style.opacity = '0'; layer.removeAttribute('data-scene-id'); layer.removeAttribute('src'); return; }
    if (layer.dataset.sceneId !== scene.id) { layer.src = sourceFor(scene); layer.dataset.sceneId = scene.id; layer.alt = `${scene.id} 分鏡`; }
    layer.style.transform = core.motion(scene, ms); layer.style.opacity = String(core.clamp(opacity, 0, 1));
  }

  function fitSubtitle() {
    const line = $('frame-subtitle'); const text = $('subtitle-text');
    if (!text.textContent) { line.style.setProperty('--subtitle-scale', '1'); return; }
    const canvas = fitSubtitle.canvas || (fitSubtitle.canvas = document.createElement('canvas'));
    const context = canvas.getContext('2d'); const width = Math.max(1, stage.clientWidth * .96);
    const fontSize = core.clamp(stage.clientWidth * .027, 14, 36);
    context.font = `900 ${fontSize}px DFKai-SB, BiauKai, KaiTi, serif`;
    const measured = Math.max(1, context.measureText(text.textContent).width);
    line.style.fontSize = `${fontSize}px`;
    line.style.setProperty('--subtitle-scale', String(Math.min(1, width / measured)));
  }

  function subtitleNodes(value) {
    const poem = poemLines.find((line) => value.includes(line));
    if (!poem) return [document.createTextNode(value)];
    const start = value.indexOf(poem);
    const nodes = [];
    if (start > 0) nodes.push(document.createTextNode(value.slice(0, start)));
    const highlight = document.createElement('span');
    highlight.className = 'poetry-highlight';
    highlight.textContent = poem;
    nodes.push(highlight);
    const end = start + poem.length;
    if (end < value.length) nodes.push(document.createTextNode(value.slice(end)));
    return nodes;
  }

  function render(requestedMs) {
    const state = core.stateAt(timeline, requestedMs);
    const frontIndex = state.sceneIndex % 2;
    const front = layers[frontIndex]; const back = layers[1 - frontIndex];
    if (state.transitioning && state.nextScene) {
      front.style.zIndex = '1'; back.style.zIndex = '2';
      setLayer(front, state.scene, 1 - state.transitionProgress, state.ms);
      setLayer(back, state.nextScene, state.transitionProgress, state.ms);
    } else {
      front.style.zIndex = '2'; back.style.zIndex = '0';
      setLayer(front, state.scene, 1, state.ms); setLayer(back, null, 0, state.ms);
    }
    const intro = $('frame-intro');
    intro.textContent = state.introActive ? state.chapter.title : '';
    intro.style.display = state.introActive ? 'block' : 'none'; intro.style.opacity = String(state.introOpacity);
    $('frame-chapter').textContent = state.introActive ? '' : state.chapter.title;
    const subtitle = $('subtitle-text'); const value = state.subtitle ? state.subtitle.text.replace(/\s*\n\s*/g, ' ') : '';
    if (subtitle.textContent !== value) { subtitle.replaceChildren(...subtitleNodes(value)); fitSubtitle(); }
    $('time-now').textContent = core.formatTime(state.ms);
    if (!dragging) slider.value = String(state.ms);
    $('scene-label').textContent = state.scene.id; $('chapter-label').textContent = state.chapter.title;
    chapterButtons.forEach((button, index) => {
      const active = index === state.chapterIndex; button.classList.toggle('active', active);
      if (active) button.setAttribute('aria-current', 'location'); else button.removeAttribute('aria-current');
    });
    $('playback-label').textContent = audio.ended ? '播放完成' : audio.paused ? (started ? '已暫停' : '尚未播放') : '旁白播放中';
    $('play-toggle').textContent = audio.ended ? '重播' : audio.paused ? '播放' : '暫停';
    $('debug-time').textContent = `${state.scene.id}・${state.chapter.id}・${state.subtitle?.subtitleId ?? '無字幕'}・${state.ms} ms・30 FPS 對應第 ${Math.round(state.ms * 30 / 1000)} 格`;
  }

  function frame() {
    if (audio.paused || dragging || settlingSeek) return;
    render(audio.currentTime * 1000); raf = requestAnimationFrame(frame);
  }

  async function play() {
    try { await audio.play(); started = true; cover.hidden = true; stopFrameLoop(); raf = requestAnimationFrame(frame); }
    catch (error) { setError(`無法播放旁白：${error.message}`); }
  }

  function waitForSeek() {
    return new Promise((resolve) => {
      let done = false;
      const finish = () => { if (done) return; done = true; clearTimeout(timer); audio.removeEventListener('seeked', finish); resolve(); };
      const timer = setTimeout(finish, 1200); audio.addEventListener('seeked', finish, { once: true });
    });
  }

  async function seek(targetMs, resume) {
    const target = core.clamp(Math.round(targetMs), 0, timeline.durationMs);
    stopFrameLoop(); audio.pause(); settlingSeek = true;
    try {
      if (audio.readyState < 1) await Promise.race([
        new Promise((resolve) => audio.addEventListener('loadedmetadata', resolve, { once: true })),
        new Promise((resolve) => setTimeout(resolve, 1500)),
      ]);
      if (Math.abs(audio.currentTime * 1000 - target) < 2 && !audio.seeking) {
        audio.currentTime = target / 1000; await Promise.resolve();
      } else {
        const settled = waitForSeek(); audio.currentTime = target / 1000; await settled;
      }
    } catch (error) { setError(`定位音訊失敗：${error.message}`); }
    finally { settlingSeek = false; render(audio.currentTime * 1000); if (resume) await play(); }
  }

  function finishDrag() {
    if (!dragging) return;
    const resume = dragging.wasPlaying; const target = Number(slider.value); dragging = null;
    skipChangeUntil = Date.now() + 250; seek(target, resume);
  }

  function jump(items, direction) {
    const now = Math.min(audio.currentTime * 1000, timeline.durationMs - 1);
    const index = Math.max(0, core.intervalAt(items, now));
    const item = items[core.clamp(index + direction, 0, items.length - 1)];
    const target = items === timeline.chapters ? (item.jumpStartMs ?? item.speechStartMs ?? item.startMs) : item.startMs;
    seek(target, !audio.paused);
  }

  createChapters(); preloadImages();
  $('reader-count').textContent = `${timeline.scenes.length} 鏡・${timeline.chapters.length} 章`;
  $('time-end').textContent = core.formatDuration(timeline.durationMs); slider.max = String(timeline.durationMs);
  audio.playbackRate = 1; audio.volume = Number($('volume-slider').value); render(0);

  cover.addEventListener('click', play);
  $('play-toggle').addEventListener('click', () => audio.paused ? (audio.ended ? seek(0, true) : play()) : audio.pause());
  $('restart-button').addEventListener('click', () => seek(0, true));
  $('previous-chapter').addEventListener('click', () => jump(timeline.chapters, -1));
  $('next-chapter').addEventListener('click', () => jump(timeline.chapters, 1));
  $('previous-scene').addEventListener('click', () => jump(timeline.scenes, -1));
  $('next-scene').addEventListener('click', () => jump(timeline.scenes, 1));
  $('mute-toggle').addEventListener('click', () => { audio.muted = !audio.muted; $('mute-toggle').textContent = audio.muted ? '取消靜音' : '靜音'; });
  $('volume-slider').addEventListener('input', (event) => { audio.volume = Number(event.currentTarget.value); audio.muted = audio.volume === 0; $('mute-toggle').textContent = audio.muted ? '取消靜音' : '靜音'; });
  $('fullscreen-toggle').addEventListener('click', async () => {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else if (shell.requestFullscreen) await shell.requestFullscreen(); }
    catch (error) { setError(`無法切換全螢幕：${error.message}`); }
  });
  $('debug-toggle').addEventListener('click', () => { const panel = $('sync-debug-panel'); panel.hidden = !panel.hidden; $('debug-toggle').setAttribute('aria-expanded', String(!panel.hidden)); });

  slider.addEventListener('pointerdown', (event) => { dragging = { wasPlaying: !audio.paused }; audio.pause(); stopFrameLoop(); try { slider.setPointerCapture(event.pointerId); } catch (_) {} });
  slider.addEventListener('input', () => { $('time-now').textContent = core.formatTime(Number(slider.value)); });
  slider.addEventListener('pointerup', finishDrag); slider.addEventListener('pointercancel', finishDrag); slider.addEventListener('lostpointercapture', finishDrag);
  slider.addEventListener('change', () => { if (!dragging && Date.now() >= skipChangeUntil) seek(Number(slider.value), !audio.paused); });

  audio.addEventListener('play', () => { started = true; cover.hidden = true; if (!dragging && !settlingSeek) { stopFrameLoop(); raf = requestAnimationFrame(frame); } });
  audio.addEventListener('pause', () => { stopFrameLoop(); if (!dragging && !settlingSeek) render(audio.currentTime * 1000); });
  audio.addEventListener('timeupdate', () => { if (audio.paused && !dragging && !settlingSeek) render(audio.currentTime * 1000); });
  audio.addEventListener('seeked', () => { if (!dragging && !settlingSeek) render(audio.currentTime * 1000); });
  audio.addEventListener('ended', () => { stopFrameLoop(); render(timeline.durationMs); });
  audio.addEventListener('ratechange', () => { if (audio.playbackRate !== 1) audio.playbackRate = 1; });
  audio.addEventListener('loadedmetadata', () => {
    if (Math.abs(audio.duration * 1000 - timeline.durationMs) > 250) setError(`時間軸 ${core.formatTime(timeline.durationMs)} 與 MP3 長度 ${core.formatTime(audio.duration * 1000)} 不同；仍保留 Excel 時碼。`);
  });
  audio.addEventListener('error', () => setError('旁白無法載入，請確認 assets/audio/narration.mp3 已隨完整資料夾解壓。'));
  window.addEventListener('resize', fitSubtitle);
  window.__episodeQA = { snapshot: () => ({ timeMs: Math.round(audio.currentTime * 1000), sceneId: timeline.scenes[core.stateAt(timeline, audio.currentTime * 1000).sceneIndex].id, playing: !audio.paused, sliderMs: Number(slider.value) }), seek: (ms) => seek(ms, false), renderAt: render };
})();
