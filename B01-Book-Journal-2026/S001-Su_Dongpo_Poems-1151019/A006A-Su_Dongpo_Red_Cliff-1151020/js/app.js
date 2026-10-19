(() => {
  'use strict';
  const timeline = window.TIMELINE_DATA;
  const config = window.EPISODE_SETTINGS;
  if (!timeline || !config) return;
  const $ = (selector) => document.querySelector(selector);
  const home = $('#home-page'), reader = $('#reader-page'), audio = $('#master-audio');
  const slider = $('#seek-slider'), currentTime = $('#time-current'), totalTime = $('#time-total');
  const artA = $('.frame-art-a'), artB = $('.frame-art-b'), chapterLabel = $('#frame-chapter');
  const intro = $('#frame-intro'), subtitle = $('#frame-subtitle'), coverStart = $('#cover-start');
  const playButton = $('#play-toggle');
  const durationMs = timeline.durationMs;
  let playing = false, started = false, drag = null, rafId = 0, lastRenderMs = -1;

  const fmt = (ms) => {
    const sec = Math.floor(Math.max(0, ms) / 1000);
    return `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;
  };
  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
  const sceneAt = (ms) => timeline.scenes.find((s, i) => ms >= s.startMs && (ms < s.endMs || i === timeline.scenes.length - 1)) || timeline.scenes[0];
  const chapterAt = (ms) => timeline.chapters.find((c, i) => ms >= c.startMs && (ms < c.endMs || i === timeline.chapters.length - 1)) || timeline.chapters[0];
  const cueAt = (ms) => timeline.subtitles.find((c) => ms >= c.startMs && ms < c.endMs) || null;
  const setImg = (img, scene) => {
    const src = new URL(scene.imagePath, document.baseURI).href;
    if (img.dataset.scene !== scene.id) { img.src = src; img.dataset.scene = scene.id; }
  };
  const motion = (img, scene, ms) => {
    const p = clamp((ms - scene.startMs) / (scene.endMs - scene.startMs), 0, 1);
    const n = Number(scene.id.slice(-3));
    const amount = 1.025 + ((n * 17) % 9) / 100;
    let scale = 1.035, x = 0, y = 0;
    if (scene.motionType === 'zoom-in') scale = 1.035 + (amount - 1.035) * p;
    if (scene.motionType === 'zoom-out') scale = amount - (amount - 1.035) * p;
    if (scene.motionType === 'pan-left') { scale = amount; x = 1.2 - 2.4 * p; }
    if (scene.motionType === 'pan-right') { scale = amount; x = -1.2 + 2.4 * p; }
    if (scene.motionType === 'pan-up') { scale = amount; y = 1.2 - 2.4 * p; }
    if (scene.motionType === 'pan-down') { scale = amount; y = -1.2 + 2.4 * p; }
    img.style.transform = `scale(${scale}) translate(${x}%,${y}%)`;
  };
  const render = (ms, force = false) => {
    ms = clamp(Math.round(ms), 0, durationMs);
    if (!force && ms === lastRenderMs) return;
    lastRenderMs = ms;
    const scene = sceneAt(ms), ix = timeline.scenes.indexOf(scene), prev = ix > 0 ? timeline.scenes[ix - 1] : null;
    const fadeMs = 520, into = ms - scene.startMs;
    setImg(artA, scene); motion(artA, scene, ms);
    artA.style.opacity = prev && into < fadeMs ? String(clamp(into / fadeMs, 0, 1)) : '1';
    artA.style.visibility = 'visible';
    if (prev && into < fadeMs) {
      setImg(artB, prev); motion(artB, prev, ms); artB.style.opacity = String(1 - clamp(into / fadeMs, 0, 1)); artB.style.visibility = 'visible';
    } else { artB.style.opacity = '0'; artB.style.visibility = 'hidden'; }
    const chapter = chapterAt(ms);
    chapterLabel.textContent = chapter.title;
    const introAge = ms - chapter.speechStartMs;
    if (introAge >= 0 && introAge < 1900) {
      const alpha = introAge < 350 ? introAge / 350 : introAge > 1450 ? (1900 - introAge) / 450 : 1;
      intro.textContent = chapter.title; intro.style.opacity = String(clamp(alpha, 0, 1));
    } else { intro.textContent = ''; intro.style.opacity = '0'; }
    const cue = cueAt(ms); subtitle.textContent = cue ? cue.text : '';
    subtitle.classList.toggle('poem-subtitle', !!cue?.isVerse);
    slider.value = String(ms); currentTime.textContent = fmt(ms);
    document.querySelectorAll('.chapter-button').forEach((button) => button.classList.toggle('active', button.dataset.chapter === chapter.id));
  };
  const uiState = () => {
    const isPlaying = !audio.paused && !audio.ended;
    playing = isPlaying;
    playButton.textContent = isPlaying ? '暫停' : (audio.ended ? '重播' : '播放');
    playButton.setAttribute('aria-label', isPlaying ? '暫停' : '播放');
  };
  const raf = () => {
    if (!audio.paused && !drag) render(audio.currentTime * 1000);
    if (!audio.paused) rafId = requestAnimationFrame(raf);
  };
  const start = async () => {
    audio.playbackRate = 1;
    if (audio.ended || audio.currentTime >= durationMs / 1000 - 0.02) audio.currentTime = 0;
    try { await audio.play(); started = true; coverStart.hidden = true; uiState(); cancelAnimationFrame(rafId); rafId = requestAnimationFrame(raf); }
    catch { playButton.textContent = '請再按播放'; }
  };
  const seekTo = (ms, resume = !audio.paused) => {
    ms = clamp(Math.round(ms), 0, durationMs);
    audio.currentTime = ms / 1000;
    render(ms, true);
    if (resume) audio.play().then(() => { coverStart.hidden = true; uiState(); cancelAnimationFrame(rafId); rafId = requestAnimationFrame(raf); }).catch(() => uiState());
    else { audio.pause(); uiState(); }
  };
  const chapters = $('#chapter-list');
  timeline.chapters.forEach((chapter, i) => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'chapter-button'; button.dataset.chapter = chapter.id;
    const num = document.createElement('span'); num.className = 'chapter-number'; num.textContent = String(i + 1).padStart(2, '0');
    const title = document.createElement('span'); title.className = 'chapter-name'; title.textContent = chapter.title;
    const stamp = document.createElement('small'); stamp.textContent = fmt(chapter.speechStartMs);
    button.append(num, title, stamp); button.addEventListener('click', () => seekTo(chapter.speechStartMs)); chapters.append(button);
  });
  document.querySelectorAll('[data-youtube="subtitles"]').forEach((a) => a.href = config.links.youtubeWithSubtitles);
  document.querySelectorAll('[data-youtube="clean"]').forEach((a) => a.href = config.links.youtubeWithoutSubtitles);
  audio.src = config.assets.narrationAudio;
  totalTime.textContent = fmt(durationMs);
  const showPage = () => {
    const isReader = location.hash === '#reading'; home.hidden = isReader; reader.hidden = !isReader;
    if (isReader) render(audio.currentTime * 1000, true);
  };
  window.addEventListener('hashchange', showPage); showPage(); render(0, true);
  coverStart.addEventListener('click', start); playButton.addEventListener('click', () => audio.paused ? start() : audio.pause());
  audio.addEventListener('play', uiState); audio.addEventListener('pause', uiState); audio.addEventListener('ended', () => { render(durationMs, true); uiState(); });
  audio.addEventListener('timeupdate', () => { if (!drag) render(audio.currentTime * 1000); });
  audio.addEventListener('seeked', () => { if (!drag) render(audio.currentTime * 1000, true); });
  audio.addEventListener('ratechange', () => { if (audio.playbackRate !== 1) audio.playbackRate = 1; });
  $('#volume-control').addEventListener('input', (e) => { audio.volume = Number(e.target.value); audio.muted = audio.volume === 0; });
  let pointer = null;
  slider.addEventListener('pointerdown', (e) => {
    pointer = e.pointerId; drag = { frozenMs: Math.round(audio.currentTime * 1000), previewMs: Math.round(Number(slider.value)), resume: !audio.paused };
    audio.pause(); slider.setPointerCapture?.(pointer);
  });
  slider.addEventListener('input', () => {
    if (!drag) { seekTo(Number(slider.value)); return; }
    drag.previewMs = clamp(Number(slider.value), 0, durationMs); currentTime.textContent = fmt(drag.previewMs);
  });
  const endDrag = (e) => {
    if (!drag || (pointer !== null && e?.pointerId !== undefined && e.pointerId !== pointer)) return;
    const { previewMs, resume } = drag; drag = null; pointer = null; seekTo(previewMs, resume);
  };
  slider.addEventListener('pointerup', endDrag); slider.addEventListener('pointercancel', endDrag); slider.addEventListener('lostpointercapture', endDrag);
  slider.addEventListener('change', () => { if (!drag) seekTo(Number(slider.value)); });
  const chapterIndexAt = (ms) => Math.max(0, timeline.chapters.findIndex((c, i) => ms >= c.startMs && (ms < c.endMs || i === timeline.chapters.length - 1)));
  const sceneIndexAt = (ms) => Math.max(0, timeline.scenes.findIndex((s, i) => ms >= s.startMs && (ms < s.endMs || i === timeline.scenes.length - 1)));
  $('#prev-chapter').addEventListener('click', () => { const i = chapterIndexAt(audio.currentTime * 1000); seekTo(timeline.chapters[Math.max(0, i - 1)].speechStartMs); });
  $('#next-chapter').addEventListener('click', () => { const i = chapterIndexAt(audio.currentTime * 1000); seekTo(timeline.chapters[Math.min(timeline.chapters.length - 1, i + 1)].speechStartMs); });
  $('#prev-scene').addEventListener('click', () => { const i = sceneIndexAt(audio.currentTime * 1000); seekTo(timeline.scenes[Math.max(0, i - 1)].startMs); });
  $('#next-scene').addEventListener('click', () => { const i = sceneIndexAt(audio.currentTime * 1000); seekTo(timeline.scenes[Math.min(timeline.scenes.length - 1, i + 1)].startMs); });
  if (location.hash === '#reading') showPage();
})();
