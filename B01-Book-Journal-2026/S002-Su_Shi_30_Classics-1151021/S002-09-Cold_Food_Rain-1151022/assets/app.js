(() => {
  'use strict';
  const timeline = window.TIMELINE_DATA;
  const captionData = window.CAPTIONS_DATA;
  const root = document.getElementById('root');
  if (!timeline || !captionData || !root) return;

  const pad = n => String(n).padStart(2, '0');
  const fmt = ms => {
    const s = Math.max(0, Math.floor(ms / 1000));
    return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`;
  };
  const esc = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const activeAt = (items, time, key = 'startMs', end = 'endMs') => {
    let lo = 0, hi = items.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (items[mid][key] <= time) lo = mid + 1; else hi = mid; }
    const found = items[Math.max(0, lo - 1)];
    return found && time < found[end] ? found : null;
  };

  const motionMode = document.body.dataset.page === 'motion';

  if (document.body.dataset.page === 'home') {
    const settings = window.EPISODE_SETTINGS;
    root.innerHTML = `<section class="hero episode-hero">
      <img class="episode-cover" src="${esc(settings.cover)}" alt="《東欄梨花》第09集完整封面圖">
      <div class="episode-cover-shade"></div>
      <div class="episode-hero-copy cover-hero-copy">
        <div class="episode-actions">
          <a class="start-link" href="${esc(settings.links.reading)}">開始閱讀</a>
          <a class="youtube-link" href="${esc(settings.links.youtubeWithSubtitles)}" target="_blank" rel="noopener"><span class="yt-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6z"/></svg></span>YT連結（有字幕）</a>
          <a class="youtube-link" href="${esc(settings.links.youtubeWithoutSubtitles)}" target="_blank" rel="noopener"><span class="yt-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6z"/></svg></span>YT連結（無字幕）</a>
          <a class="motion-link" href="${esc(settings.links.motion)}">動畫特效版 ✦</a>
        </div>
      </div>
    </section>`;
    return;
  }

  if (motionMode) document.body.classList.add('motion-reader');
  root.innerHTML = `<div class="reader-page">
    <header class="reader-header">
      <a class="back-link" href="${motionMode ? './reading.html' : './index.html'}">${motionMode ? '返回原版閱讀' : '回首頁'}</a>
      <div><p class="eyebrow">千年之後，我們仍記得蘇東坡，東坡名作三十，第9集</p><h1>《東欄梨花》</h1></div>
      <span class="reader-duration">${fmt(timeline.durationMs)}</span>
    </header>
    ${motionMode ? '<nav class="motion-page-nav" aria-label="閱讀版本"><a href="./index.html">回首頁</a><span>動畫特效版</span></nav>' : ''}
    <section class="reader-shell" aria-label="動態閱讀播放器">
      <audio id="narration" class="master-audio" preload="metadata" src="./assets/audio/narration.mp3"></audio>
      <div id="stage" class="stage-wrap" aria-label="分鏡播放畫面">
        <div class="scene-layer is-active" id="scene-a"></div><div class="scene-layer" id="scene-b"></div>
        ${motionMode ? '<div id="motion-art" class="motion-art" aria-hidden="true"></div><div id="poem-overlay" class="poem-overlay" aria-hidden="true"></div>' : ''}
        <div id="chapter-corner" class="chapter-corner"></div><div id="chapter-intro" class="chapter-intro" hidden></div>
        <div id="caption-line" class="caption-line" aria-live="off"></div>
      </div>
      <p id="playback-error" class="playback-error" hidden></p>
      <div class="player-panel">
        <div class="seek-row"><span id="time-current" class="time-readout">00:00:00</span><input id="seek" class="seek-slider" type="range" min="0" max="${timeline.durationMs}" step="1" value="0" aria-label="播放進度"><span id="time-total" class="time-readout">${fmt(timeline.durationMs)}</span></div>
        <div class="control-row">
          <button id="previous" type="button">上一鏡</button><button id="play-pause" class="play-control" type="button">播放</button><button id="next" type="button">下一鏡</button>
          <label class="volume-control"><span>音量</span><input id="volume" type="range" min="0" max="1" step="0.01" value="1" aria-label="音量"></label>
          <button id="fullscreen" type="button">全螢幕</button>
        </div>
        <div class="playback-status"><span id="chapter-status">章節載入中</span><span id="shot-status">IMG001</span><span id="clock-status">音訊時鐘 1.0×</span></div>
      </div>
    </section>
    <section class="chapter-section" id="chapter-index"><h2>章節索引</h2><div id="chapter-list" class="chapter-list"></div></section>
    <footer class="reader-footer">圖片與章節起點依 Excel 時碼；字幕保留來源 SRT；MP3 的 audio.currentTime 是唯一播放時鐘。尚未生成的場景以編號占位明確標示。</footer>
  </div>`;

  const audio = document.getElementById('narration');
  const stage = document.getElementById('stage');
  const seek = document.getElementById('seek');
  const currentEl = document.getElementById('time-current');
  const captionEl = document.getElementById('caption-line');
  const cornerEl = document.getElementById('chapter-corner');
  const introEl = document.getElementById('chapter-intro');
  const chapterStatus = document.getElementById('chapter-status');
  const shotStatus = document.getElementById('shot-status');
  const layers = [document.getElementById('scene-a'), document.getElementById('scene-b')];
  const motionArt = motionMode ? document.getElementById('motion-art') : null;
  const poemOverlay = motionMode ? document.getElementById('poem-overlay') : null;
  const readerTitle = motionMode ? document.querySelector('.reader-header h1') : null;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeLayer = 0, shownScene = null, shownCaption = null, dragging = false, wasPlaying = false, lastChapter = null, lastIntro = null, raf = 0;

  const motionFor = id => {
    let hash = 0; for (const ch of id) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
    return hash % 6;
  };
  function showPlaceholder(layer, scene) {
    layer.innerHTML = `<div class="scene-placeholder"><small>圖片待補・${esc(scene.shotId)}</small><strong>${esc(scene.chapterTitle)}</strong><span>${esc(scene.storyboard)}</span></div>`;
  }
  function setScene(layer, scene) {
    layer.innerHTML = ''; layer.dataset.shotId = scene.shotId;
    if (!scene.imagePath) { showPlaceholder(layer, scene); return; }
    const img = new Image(); img.alt = `${scene.shotId} 分鏡畫面`; img.draggable = false;
    img.onerror = () => { if (layer.dataset.shotId === scene.shotId) showPlaceholder(layer, scene); };
    img.src = `./${scene.imagePath}`; layer.appendChild(img);
  }
  function applyMotion(scene, time) {
    const image = layers[activeLayer].querySelector('img'); if (!image) { paintPoem(time); return; }
    const p = Math.max(0, Math.min(1, (time-scene.startMs)/Math.max(1,scene.endMs-scene.startMs)));
    if (motionMode) {
      const config = window.MOTION_EFFECTS?.[scene.shotId];
      if (!config || reducedMotion) {
        image.style.transform = 'scale(1)';
        if (motionArt) motionArt.style.opacity = '0';
        paintPoem(time);
        return;
      }
      image.style.transformOrigin = `${config.focus[0]}% ${config.focus[1]}%`;
      const paths = {
        left: [2.4, 0, 1.045, -2.4, 0, 1.075], right: [-2.4, 0, 1.045, 2.4, 0, 1.075],
        up: [0, 2.1, 1.045, 0, -2.1, 1.075], down: [0, -2.1, 1.045, 0, 2.1, 1.075],
        push: [0, 0, 1.045, 0, 0, 1.105], pull: [0, 0, 1.105, 0, 0, 1.045],
        diagonal: [-1.7, 1.2, 1.05, 1.7, -1.2, 1.08], reveal: [1.8, 1, 1.09, -1.8, -1, 1.045],
        drift: [-1.2, 0.8, 1.05, 1.2, -0.8, 1.075]
      };
      const path = paths[config.move] || paths.push;
      const ease = p * p * (3 - 2 * p);
      const x = path[0] + (path[3] - path[0]) * ease;
      const y = path[1] + (path[4] - path[1]) * ease;
      const zoom = path[2] + (path[5] - path[2]) * ease;
      image.style.transform = `scale(${zoom}) translate(${x}%, ${y}%)`;
      paintVisualEffect(scene.shotId, config, p);
      paintPoem(time);
      return;
    }
    const m = motionFor(scene.shotId), z = 1.075 + 0.045 * p, drift = 1.7 + p * 2.0;
    const transforms = [
      `scale(${z}) translate(0,0)`, `scale(${1.12-.045*p}) translate(0,0)`,
      `scale(1.12) translate(0,${-drift}%)`, `scale(1.12) translate(0,${drift}%)`,
      `scale(1.12) translate(${drift}%,0)`, `scale(1.12) translate(${-drift}%,0)`
    ];
    image.style.transform = transforms[m];
  }
  function paintVisualEffect(shotId, config, p) {
    if (!motionArt) return;
    const alpha = reducedMotion ? 0 : Math.min(0.42, config.strength * 1.8) * (0.72 + 0.28 * Math.sin(Math.PI * p));
    motionArt.style.opacity = String(alpha);
    motionArt.dataset.effect = config.effect;
    if (motionArt.dataset.shotId !== shotId) {
      motionArt.dataset.shotId = shotId;
      if (config.effect === 'petals' || config.effect === 'dust' || config.effect === 'fluff') {
        motionArt.innerHTML = Array.from({length: config.count || 4}, () => '<i class="motion-particle"></i>').join('');
      } else if (config.effect === 'water') {
        motionArt.innerHTML = `<svg class="motion-water" viewBox="0 0 100 56.25" preserveAspectRatio="none">${[0,1,2].map(() => '<ellipse/>').join('')}</svg>`;
      } else motionArt.innerHTML = '';
    }
    motionArt.style.setProperty('--fx-x', `${config.point[0]}%`);
    motionArt.style.setProperty('--fx-y', `${config.point[1]}%`);
    motionArt.style.setProperty('--fx-progress', String(p));
    motionArt.style.setProperty('--fx-position', `${p * 100}%`);
    motionArt.style.setProperty('--fx-tone', config.tone || '255,238,190');
    if (config.effect === 'petals' || config.effect === 'dust' || config.effect === 'fluff') {
      const seed = Number(config.seed || 1);
      motionArt.querySelectorAll('.motion-particle').forEach((particle, i) => {
        const sx = (seed * (i + 17) * 37) % 92 + 4;
        const sy = (seed * (i + 11) * 23) % 72 + 8;
        const drift = ((seed + i * 13) % 2 ? 1 : -1) * (7 + i * 1.5);
        const x = (sx + drift * p + 100) % 100;
        const y = (sy + (18 + i * 2) * p) % 96;
        const fade = Math.sin(Math.PI * Math.min(1, Math.max(0, p * 1.2 + i * 0.12)));
        particle.className = `motion-particle ${config.effect}`;
        particle.style.left = `${x}%`; particle.style.top = `${y}%`;
        particle.style.opacity = String(Math.max(0, fade) * .72);
        particle.style.transform = `rotate(${(seed * 11 + i * 47 + p * 55) % 360}deg)`;
      });
    } else if (config.effect === 'water') {
      const cx = config.point[0], cy = config.point[1];
      motionArt.querySelectorAll('ellipse').forEach((ring, i) => {
        const phase = (p + i / 3) % 1;
        const radius = 2 + phase * (config.radius || 18);
        const opacity = (1 - phase) * .44;
        ring.setAttribute('cx', String(cx)); ring.setAttribute('cy', String(cy));
        ring.setAttribute('rx', String(radius)); ring.setAttribute('ry', String(radius * .34));
        ring.style.opacity = String(opacity);
      });
    }
  }
  function paintPoem(time) {
    if (!poemOverlay) return;
    const cues = window.MOTION_POEM_CUES || [];
    const entry = cues.find(item => {
      const cue = captionData.captions.find(candidate => candidate.id === item.cueId);
      const scene = timeline.scenes.find(candidate => candidate.shotId === item.shotId);
      return cue && scene && time >= cue.startMs && time < cue.endMs && time >= scene.startMs && time < scene.endMs;
    });
    if (!entry) { poemOverlay.textContent = ''; poemOverlay.className = 'poem-overlay'; delete poemOverlay.dataset.cueId; return; }
    const cue = captionData.captions.find(candidate => candidate.id === entry.cueId);
    const progress = (time - cue.startMs) / Math.max(1, cue.endMs - cue.startMs);
    const fadeRatio = Math.min(1, 250 / Math.max(1, cue.endMs - cue.startMs));
    const edge = reducedMotion ? 1 : Math.min(1, progress / fadeRatio, (1 - progress) / fadeRatio);
    const opacity = Math.max(0, Math.min(1, edge));
    const glyphs = Array.from(entry.text);
    const displayText = entry.lineBreakAt
      ? `${glyphs.slice(0, entry.lineBreakAt).join('')}\n${glyphs.slice(entry.lineBreakAt).join('')}`
      : entry.text.replace('，', '，\n');
    if (poemOverlay.dataset.cueId !== String(entry.cueId)) {
      poemOverlay.textContent = displayText;
      poemOverlay.dataset.cueId = String(entry.cueId);
    }
    poemOverlay.className = `poem-overlay ${entry.position}`;
    poemOverlay.style.opacity = String(opacity);
    poemOverlay.style.transform = reducedMotion ? 'none' : `translateY(${(1 - opacity) * 8}px)`;
  }
  function paintMentionedTitle(time) {
    if (!readerTitle) return;
    const cue = captionData.captions.find(candidate => candidate.id === 11);
    if (!cue || time < cue.startMs || time >= cue.endMs) { readerTitle.style.textShadow = ''; return; }
    const elapsed = time - cue.startMs;
    const pulse = reducedMotion ? 0 : Math.max(0, 1 - elapsed / 400);
    readerTitle.style.textShadow = pulse ? `0 0 ${10 * pulse}px rgba(226,169,67,${0.68 * pulse})` : '';
  }
  function paintCaption(time) {
    const cue = activeAt(captionData.captions, time);
    if (!cue) { if (shownCaption !== null) captionEl.textContent = ''; shownCaption = null; return; }
    if (cue.id === shownCaption) return;
    shownCaption = cue.id;
    let text = cue.text.replace(/\s+/g,' ').trim();
    const phrases = [...captionData.poemHighlights].sort((a,b)=>b.length-a.length);
    let html = '', rest = text;
    while (rest) {
      let match = null, pos = Infinity;
      for (const phrase of phrases) { const at = rest.indexOf(phrase); if (at >= 0 && at < pos) { pos = at; match = phrase; } }
      if (!match) { html += esc(rest); break; }
      html += esc(rest.slice(0,pos)) + `<span class="poem-highlight">${esc(match)}</span>`;
      rest = rest.slice(pos + match.length);
    }
    captionEl.innerHTML = html;
    captionEl.style.fontSize = '';
    let px = parseFloat(getComputedStyle(captionEl).fontSize), min = window.innerWidth < 600 ? 11 : 14;
    while (captionEl.scrollWidth > captionEl.clientWidth && px > min) { px -= 1; captionEl.style.fontSize = `${px}px`; }
  }
  function update(timeMs, syncSlider=true) {
    const t = Math.max(0, Math.min(timeline.durationMs, timeMs));
    if (syncSlider && !dragging) seek.value = String(Math.round(t));
    currentEl.textContent = fmt(t);
    const scene = activeAt(timeline.scenes, t) || timeline.scenes.at(-1);
    const chapter = activeAt(timeline.chapters, t) || timeline.chapters.at(-1);
    if (scene && scene.shotId !== shownScene) {
      const nextLayer = 1-activeLayer; setScene(layers[nextLayer], scene);
      layers[nextLayer].classList.add('is-active'); layers[activeLayer].classList.remove('is-active');
      activeLayer = nextLayer; shownScene = scene.shotId; shotStatus.textContent = scene.imageStatus === 'provided' ? scene.shotId : `${scene.shotId}｜圖片待補`;
    }
    if (chapter) {
      cornerEl.textContent = chapter.title; chapterStatus.textContent = chapter.title;
      const showIntro = t >= chapter.startMs && t < chapter.startMs + 1700;
      if (showIntro) {
        introEl.hidden = false; introEl.textContent = chapter.title;
        if (lastIntro !== chapter.id || lastChapter !== chapter.id) { introEl.classList.remove('is-visible'); void introEl.offsetWidth; introEl.classList.add('is-visible'); }
        lastIntro = chapter.id;
      } else { introEl.hidden = true; introEl.classList.remove('is-visible'); if (lastChapter !== chapter.id) lastIntro = null; }
      lastChapter = chapter.id;
    }
    if (scene) applyMotion(scene,t);
    if (motionMode) paintMentionedTitle(t);
    paintCaption(t);
  }
  const playButton=document.getElementById('play-pause');
  function syncPlayButton(){ playButton.textContent=audio.paused?'播放':'暫停'; }
  async function play(){ try { await audio.play(); document.getElementById('playback-error').hidden=true; } catch(e) { const box=document.getElementById('playback-error'); box.textContent='音檔尚未載入或瀏覽器尚未允許播放，請再按一次播放。'; box.hidden=false; } }
  function goTo(ms, restore=false){ audio.currentTime=Math.max(0,Math.min(timeline.durationMs,ms))/1000; update(audio.currentTime*1000); if(restore) play(); }
  document.getElementById('chapter-list').innerHTML=timeline.chapters.map((c,i)=>`<button class="chapter-button" type="button" data-time="${c.startMs}" data-chapter="${esc(c.id)}"><span class="chapter-number">${String(i+1).padStart(2,'0')}</span><span class="chapter-name">${esc(c.title)}</span><small>${fmt(c.startMs)}</small></button>`).join('');
  document.querySelectorAll('.chapter-button').forEach(button=>button.addEventListener('click',()=>{const resume=!audio.paused;audio.pause();goTo(Number(button.dataset.time),resume);}));
  playButton.addEventListener('click',()=>audio.paused?play():audio.pause());
  document.getElementById('previous').addEventListener('click',()=>{const i=timeline.scenes.findIndex(s=>s.shotId===shownScene);goTo(timeline.scenes[Math.max(0,i-1)].startMs,!audio.paused);});
  document.getElementById('next').addEventListener('click',()=>{const i=timeline.scenes.findIndex(s=>s.shotId===shownScene);goTo(timeline.scenes[Math.min(timeline.scenes.length-1,i+1)].startMs,!audio.paused);});
  document.getElementById('volume').addEventListener('input',e=>audio.volume=Number(e.target.value));
  document.getElementById('fullscreen').addEventListener('click',async()=>{try{if(!document.fullscreenElement)await document.querySelector('.reader-shell').requestFullscreen();else await document.exitFullscreen();}catch{}});
  seek.addEventListener('pointerdown',()=>{dragging=true;wasPlaying=!audio.paused;if(wasPlaying)audio.pause();});
  seek.addEventListener('input',()=>{currentEl.textContent=fmt(Number(seek.value));});
  seek.addEventListener('change',()=>{const resume=dragging&&wasPlaying;dragging=false;wasPlaying=false;goTo(Number(seek.value),resume);});
  seek.addEventListener('pointerup',()=>setTimeout(()=>{if(dragging){const resume=wasPlaying;dragging=false;wasPlaying=false;goTo(Number(seek.value),resume);}},0));
  audio.addEventListener('play',syncPlayButton); audio.addEventListener('pause',syncPlayButton);
  audio.addEventListener('loadedmetadata',()=>{document.getElementById('time-total').textContent=fmt(Math.round(audio.duration*1000));update(audio.currentTime*1000);});
  audio.addEventListener('timeupdate',()=>{if(!dragging)update(audio.currentTime*1000);});
  audio.addEventListener('seeked',()=>{if(!dragging)update(audio.currentTime*1000);});
  audio.addEventListener('ended',()=>{audio.pause();update(timeline.durationMs);});
  function tick(){if(!audio.paused&&!dragging)update(audio.currentTime*1000);raf=requestAnimationFrame(tick);}
  document.addEventListener('visibilitychange',()=>{if(!document.hidden&&!dragging)update(audio.currentTime*1000);});
  window.addEventListener('resize',()=>{shownCaption=null;update(audio.currentTime*1000);});
  update(0); syncPlayButton(); cancelAnimationFrame(raf); raf=requestAnimationFrame(tick);
})();
