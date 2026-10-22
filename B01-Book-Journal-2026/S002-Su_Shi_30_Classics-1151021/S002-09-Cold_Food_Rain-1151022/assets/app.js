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
        </div>
      </div>
    </section>`;
    return;
  }

  root.innerHTML = `<div class="reader-page">
    <header class="reader-header">
      <a class="back-link" href="./index.html">回首頁</a>
      <div><p class="eyebrow">千年之後，我們仍記得蘇東坡，東坡名作三十，第9集</p><h1>《東欄梨花》</h1></div>
      <span class="reader-duration">${fmt(timeline.durationMs)}</span>
    </header>
    <section class="reader-shell" aria-label="動態閱讀播放器">
      <audio id="narration" class="master-audio" preload="metadata" src="./assets/audio/narration.mp3"></audio>
      <div id="stage" class="stage-wrap" aria-label="分鏡播放畫面">
        <div class="scene-layer is-active" id="scene-a"></div><div class="scene-layer" id="scene-b"></div>
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
    const image = layers[activeLayer].querySelector('img'); if (!image) return;
    const p = Math.max(0, Math.min(1, (time-scene.startMs)/Math.max(1,scene.endMs-scene.startMs)));
    const m = motionFor(scene.shotId), z = 1.075 + 0.045 * p, drift = 1.7 + p * 2.0;
    const transforms = [
      `scale(${z}) translate(0,0)`, `scale(${1.12-.045*p}) translate(0,0)`,
      `scale(1.12) translate(0,${-drift}%)`, `scale(1.12) translate(0,${drift}%)`,
      `scale(1.12) translate(${drift}%,0)`, `scale(1.12) translate(${-drift}%,0)`
    ];
    image.style.transform = transforms[m];
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
