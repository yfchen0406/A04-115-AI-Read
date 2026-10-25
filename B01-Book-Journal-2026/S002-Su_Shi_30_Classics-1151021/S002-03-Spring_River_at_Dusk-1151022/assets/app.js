(() => {
  'use strict';
  const timeline = window.EPISODE_TIMELINE;
  const settings = window.EPISODE_SETTINGS || {links:{},assets:{}};
  const page = document.body.dataset.page;
  const msToTime = (ms) => {
    const total = Math.max(0, Math.floor(ms / 1000));
    return `${String(Math.floor(total / 3600)).padStart(2,'0')}:${String(Math.floor(total / 60) % 60).padStart(2,'0')}:${String(total % 60).padStart(2,'0')}`;
  };
  const assetUrl = (path) => {
    const base = new URL(settings.assets.base || './', window.location.href);
    const relative = String(path || '').replace(/^\/+/, '').replace(/^assets\//, '');
    const url = new URL(`assets/${relative}`, base);
    url.searchParams.set('v', '20261021-images');
    return url.href;
  };
  const coverUrl = assetUrl(settings.assets.coverImage || 'assets/images/cover.webp');
  if (!timeline) {
    document.body.innerHTML = '<main style="padding:2rem;font-family:sans-serif">時間軸資料載入失敗，請確認 ZIP 內含 assets/timeline-bundle.js。</main>';
    return;
  }

  function renderHome() {
    const root = document.getElementById('home-root');
    const readHref = settings.links.reading || './reading.html';
    const effectsHref = settings.links.effects || './reading-effects.html';
    const withSubs = settings.links.youtubeWithSubtitles || '#';
    const withoutSubs = settings.links.youtubeWithoutSubtitles || '#';
    const episodeTitle = timeline.title.replace(/^《|》$/g, '');
    root.className = 'home-page';
    root.innerHTML = `
      <section class="hero cover-hero" aria-labelledby="main-title">
        <img class="cover-image" src="${coverUrl}" alt="《${episodeTitle}》第 03 集封面：蘇東坡與早春江景。">
        <div class="hero-fallback" hidden aria-live="polite"><div><p>千年之後，我們仍記得蘇東坡・東坡名作三十・第 03 集</p><h2>${episodeTitle}</h2><span>封面圖片暫時無法載入，仍可從下方入口開始閱讀。</span></div></div>
        <div class="hero-shade cover-hero-shade"></div>
        <div class="hero-copy cover-hero-copy">
          <h1 id="main-title">${episodeTitle}</h1>
          <div class="hero-actions" aria-label="本集入口">
            <a class="start-link" href="${readHref}">開始閱讀 <b aria-hidden="true">→</b></a>
            <a class="youtube-link" href="${withSubs}" target="_blank" rel="noopener noreferrer" aria-label="YT連結（有字幕）"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#ff0000" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8Z"/><path fill="#fff" d="m9.6 15.9 6.3-3.9-6.3-3.9z"/></svg> YT連結（有字幕）</a>
            <a class="youtube-link" href="${withoutSubs}" target="_blank" rel="noopener noreferrer" aria-label="YT連結（無字幕）"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#ff0000" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8Z"/><path fill="#fff" d="m9.6 15.9 6.3-3.9-6.3-3.9z"/></svg> YT連結（無字幕）</a>
            <a class="motion-entry" href="${effectsHref}">動畫特效版 <span aria-hidden="true">✦</span></a>
          </div>
          <p class="hero-meta">${timeline.scenes.length} 個分鏡 · ${timeline.chapters.length} 個章節 · 原速旁白 · 共用時間軸同步播放</p>
        </div>
      </section>`;
    const coverImage = root.querySelector('.cover-image');
    coverImage.addEventListener('error', () => {
      coverImage.classList.add('cover-image-failed');
      root.querySelector('.hero-fallback').hidden = false;
    }, {once:true});
  }

  const chapterAt = (ms) => [...timeline.chapters].reverse().find((chapter) => ms >= chapter.startMs) || timeline.chapters[0];
  const sceneAt = (ms) => { const found = timeline.scenes.findIndex((scene) => ms >= scene.startMs && ms < scene.endMs); return found >= 0 ? found : ms >= timeline.scenes[timeline.scenes.length - 1].endMs ? timeline.scenes.length - 1 : 0; };
  const cueAt = (ms) => timeline.subtitles.find((cue) => ms >= cue.startMs && ms < cue.endMs);
  const sceneMotion = (scene, ms) => {
    const progress = Math.max(0, Math.min(1, (ms-scene.startMs)/Math.max(1,scene.endMs-scene.startMs)));
    const smooth = progress * progress * (3 - 2 * progress);
    const moves = {
      'zoom-in':[1,0,0,1.06,0,0], 'zoom-out':[1.06,0,0,1,0,0],
      'pan-left':[1.055,1,0,1.055,-1,0], 'pan-right':[1.055,-1,0,1.055,1,0],
      'pan-up':[1.055,0,1,1.055,0,-1], 'pan-down':[1.055,0,-1,1.055,0,1]
    };
    const [scaleStart,x1,y1,scaleEnd,x2,y2] = moves[scene.motion] || moves['zoom-in'];
    const scale = scaleStart + (scaleEnd - scaleStart) * smooth;
    const x = x1 + (x2 - x1) * smooth, y = y1 + (y2 - y1) * smooth;
    return `translate(${x}%,${y}%) scale(${scale})`;
  };  const poemParts = (text) => {
    const hits = [];
    for (const phrase of timeline.poemPhrases) {
      let at = text.indexOf(phrase);
      while (at >= 0) { hits.push([at,at+phrase.length]); at=text.indexOf(phrase,at+phrase.length); }
    }
    hits.sort((a,b)=>a[0]-b[0]);
    const merged=[];
    for (const range of hits) {
      const last=merged[merged.length-1];
      if (last && range[0] <= last[1]) last[1]=Math.max(last[1],range[1]);
      else merged.push([...range]);
    }
    const parts=[]; let pos=0;
    for (const [start,end] of merged) {
      if(start>pos) parts.push({text:text.slice(pos,start),poem:false});
      parts.push({text:text.slice(start,end),poem:true}); pos=end;
    }
    if(pos<text.length) parts.push({text:text.slice(pos),poem:false});
    return parts.length ? parts : [{text,poem:false}];
  };

  function renderReader() {
    const root=document.getElementById('reader-root');
    root.innerHTML=`
      <main class="reader-page">
        <header class="reader-header">
          <a class="back-link" href="${settings.links.home||'./index.html'}">← 系列首頁</a>
          <div><p class="eyebrow">千年之後，我們仍記得蘇東坡，東坡名作三十，第3集</p><h1>${timeline.title}</h1></div>
          <span class="reader-duration">${timeline.scenes.length} 鏡・${timeline.chapters.length} 章</span>
        </header>
        <section class="reader-shell" aria-label="旁白與分鏡同步播放器">
          <div class="stage-wrap" id="stage-wrap" aria-label="同步分鏡畫面">
            <img class="scene-layer scene-current" id="scene-current" alt="">
            <img class="scene-layer scene-next" id="scene-next" alt="" aria-hidden="true">
            <div class="stage-vignette"></div>
            <div class="frame-chapter" id="frame-chapter"></div>
            <div class="frame-intro" id="frame-intro" aria-live="polite"></div>
            <div class="frame-subtitle" id="frame-subtitle" aria-live="polite"></div>
            <div class="placeholder-badge" id="placeholder-badge" hidden></div>
            <audio id="master-audio" preload="metadata" src="${settings.assets.audio||'assets/audio/narration.mp3'}"></audio>
          </div>
          <div class="player-panel">
            <div class="seek-row"><span class="time-readout" id="current-readout">00:00:00</span><input class="seek-slider" id="seek-slider" type="range" min="0" max="${timeline.durationMs}" step="1" value="0" aria-label="旁白時間滑桿"><span class="time-readout" id="duration-readout">${msToTime(timeline.durationMs)}</span></div>
            <div class="control-row">
              <button type="button" id="prev-chapter">上一章</button><button type="button" id="prev-scene">前一鏡</button>
              <button type="button" id="play-control" class="play-control">播放</button>
              <button type="button" id="next-scene">下一鏡</button><button type="button" id="next-chapter">下一章</button>
              <button type="button" id="mute-control">靜音</button>
              <label class="volume-control"><span>音量</span><input id="volume-control" type="range" min="0" max="1" step=".01" value="1" aria-label="音量"></label>
              <button type="button" id="fullscreen-control">全螢幕</button><button type="button" id="replay-control">從頭重播</button>
            </div>
            <div class="playback-status"><span id="playback-status">尚未播放</span><span>播放速度 1.0×</span><span id="scene-status"></span></div>
            <p role="status" class="playback-error" id="playback-error" hidden></p>
          </div>
        </section>
        <section class="chapter-section" id="chapter-index" aria-labelledby="chapter-heading">
          <p class="eyebrow">CHAPTER INDEX</p><h2 id="chapter-heading">章節索引</h2>
          <div class="chapter-list" id="chapter-list"></div>
        </section>
        <button class="sync-debug-toggle" id="sync-debug-toggle" type="button" aria-expanded="false" aria-controls="sync-debug-panel">查看同步資訊</button>
        <section id="sync-debug-panel" class="sync-debug" aria-label="同步資訊" hidden>
          <p class="debug-explainer">MP3 的 audio.currentTime 是播放時鐘；畫面與字幕依同一個毫秒時間選取。拖曳時先預覽位置，放開後才 seek 並同步畫面。</p>
          <dl class="debug-grid"><div><dt>Audio Time</dt><dd id="debug-time">0.000 秒</dd></div><div><dt>Scene ID / Image</dt><dd id="debug-scene">—</dd></div><div><dt>Chapter</dt><dd id="debug-chapter">—</dd></div><div><dt>Subtitle ID</dt><dd id="debug-cue">—</dd></div><div><dt>目前字幕</dt><dd id="debug-text">（此刻沒有字幕）</dd></div><div><dt>時間軸來源</dt><dd>分鏡：Excel；字幕：原始 SRT；旁白：MP3，1.0×</dd></div><div><dt>圖片資產</dt><dd>${timeline.imageAssets.providedSceneCount} 張現有圖；${timeline.imageAssets.placeholderSceneCount} 張待補圖</dd></div><div><dt>總長</dt><dd>${msToTime(timeline.durationMs)}</dd></div></dl>
        </section>
        <footer class="reader-footer">分鏡時間與章節起點依 Excel；字幕文字與 Cue 時間保留原始 SRT；旁白使用原始 MP3，播放速度固定 1.0×。分鏡插圖缺圖時顯示編號占位圖。</footer>
      </main>`;
    const audio=document.getElementById('master-audio'), slider=document.getElementById('seek-slider');
    const requestedSceneId=new URLSearchParams(window.location.search).get('scene');
    const initialScene=timeline.scenes.find((scene)=>String(scene.id).padStart(3,'0')===requestedSceneId||String(scene.id)===requestedSceneId);
    const initialMs=initialScene?.startMs||0;
    const currentImage=document.getElementById('scene-current'), nextImage=document.getElementById('scene-next');
    const titleBox=document.getElementById('frame-chapter'), introBox=document.getElementById('frame-intro');
    const subtitleBox=document.getElementById('frame-subtitle');
    const placeholderBadge=document.getElementById('placeholder-badge');
    const refs={time:document.getElementById('current-readout'),status:document.getElementById('playback-status'),scene:document.getElementById('scene-status'),error:document.getElementById('playback-error')};
    let dragging=false,wasPlaying=false,lastScene=-1,failedSrc='',rafId=0,runtimeDurationMs=timeline.durationMs;
    const displaySrc=(scene)=>assetUrl(scene.imagePath);
    const putImage=(el,scene,opacity,ms)=>{
      const url=displaySrc(scene);
      if(el.dataset.src!==url){el.dataset.src=url;el.style.visibility='visible';el.onerror=()=>{failedSrc=url;el.onerror=null;el.style.visibility='hidden';syncAt(Math.round(audio.currentTime*1000));};el.src=url;}
      el.style.opacity=String(opacity);el.style.transform=sceneMotion(scene,ms);
    };
    const syncAt=(ms)=>{
      const index=Math.max(0,sceneAt(Math.min(ms,runtimeDurationMs-1)));
      const scene=timeline.scenes[index],next=timeline.scenes[index+1];
      if(scene){putImage(currentImage,scene,1,ms);lastScene=index;}
      const fade=scene&&next?Math.max(0,Math.min(1,(ms-(scene.endMs-700))/700)):0;
      if(next&&fade>0){putImage(nextImage,next,fade,ms);nextImage.hidden=false;}else{nextImage.style.opacity='0';nextImage.hidden=true;}
      const chapter=chapterAt(ms),chapterElapsed=ms-chapter.startMs;
      titleBox.textContent=chapter.title;titleBox.style.opacity=chapterElapsed>=1200?'1':'0';
      titleBox.hidden=chapterElapsed<1200;
      const fadeIn=Math.max(0,Math.min(1,chapterElapsed/220));
      const fadeOut=Math.max(0,Math.min(1,(1650-chapterElapsed)/280));
      const introOpacity=chapterElapsed<1650?Math.min(fadeIn,fadeOut):0;
      introBox.textContent=chapter.title;introBox.style.opacity=String(introOpacity);introBox.hidden=introOpacity<=0;
      const cue=cueAt(ms); subtitleBox.replaceChildren();
      if(cue){for(const part of poemParts(cue.text)){const span=document.createElement('span');span.textContent=part.text;if(part.poem)span.className='poem-highlight';subtitleBox.append(span);}subtitleBox.hidden=false;const chars=[...cue.text].length;subtitleBox.style.fontSize=`${Math.max(14,Math.min(34,Math.floor(1680/(Math.max(1,chars)*.94))))}px`;}
      else subtitleBox.hidden=true;
      const missing=scene?.imageStatus==='placeholder'||failedSrc===displaySrc(scene||{});
      placeholderBadge.hidden=!missing;placeholderBadge.textContent=missing?`待補插圖・IMG${scene.id}`:'';
      refs.scene.textContent=scene?`第 ${scene.id} 鏡`:'—';
      document.querySelectorAll('.chapter-button').forEach((button)=>{const isActive=button.dataset.id===chapter.id;button.classList.toggle('active',isActive);if(isActive)button.setAttribute('aria-current','location');else button.removeAttribute('aria-current');});
      document.getElementById('debug-time').textContent=`${(ms/1000).toFixed(3)} 秒`;
      document.getElementById('debug-scene').textContent=scene?`${scene.id} / ${scene.imageStatus==='provided'?'已提供':'待補占位'}`:'—';
      document.getElementById('debug-chapter').textContent=chapter.title;
      document.getElementById('debug-cue').textContent=cue?String(cue.id):'—';
      document.getElementById('debug-text').textContent=cue?.text||'（此刻沒有字幕）';
      refs.time.textContent=msToTime(ms);slider.value=String(Math.min(ms,runtimeDurationMs));
      document.getElementById('prev-chapter').disabled=timeline.chapters[0].id===chapter.id;
      document.getElementById('next-chapter').disabled=timeline.chapters[timeline.chapters.length-1].id===chapter.id;
      document.getElementById('prev-scene').disabled=index===0;
      document.getElementById('next-scene').disabled=index>=timeline.scenes.length-1;
    };
    const seek=(ms,resume=false)=>{
      const target=Math.max(0,Math.min(runtimeDurationMs-1,Math.round(ms)))/1000;
      syncAt(target*1000);
      if(!Number.isFinite(audio.duration)||audio.readyState===0){audio.addEventListener('loadedmetadata',()=>{audio.currentTime=target;syncAt(target*1000);if(resume)audio.play().catch(()=>showError('瀏覽器未能播放旁白，請確認 MP3 檔案可讀取。'));},{once:true});audio.load();return;}
      audio.currentTime=target;syncAt(target*1000);if(resume)audio.play().catch(()=>showError('瀏覽器未能播放旁白，請確認 MP3 檔案可讀取。'));
    };
    const showError=(message)=>{refs.error.textContent=message;refs.error.hidden=false;};
    const updateStatus=()=>{const button=document.getElementById('play-control');button.textContent=audio.ended?'重播':audio.paused?'播放':'暫停';refs.status.textContent=audio.ended?'播放完成':audio.paused?(audio.currentTime>0?'已暫停':'尚未播放'):'旁白播放中';};
    const updateRuntimeDuration=()=>{if(!Number.isFinite(audio.duration)||audio.duration<=0)return;const next=Math.round(audio.duration*1000);if(next===runtimeDurationMs)return;runtimeDurationMs=next;slider.max=String(next);document.getElementById('duration-readout').textContent=msToTime(next);syncAt(Math.round(audio.currentTime*1000));};
    const renderFromAudio=()=>{if(!dragging)syncAt(Math.min(runtimeDurationMs,Math.round((audio.currentTime||0)*1000)));};
    const drawWhilePlaying=()=>{renderFromAudio();if(!audio.paused&&!audio.ended)rafId=requestAnimationFrame(drawWhilePlaying);};
    audio.addEventListener('timeupdate',renderFromAudio);audio.addEventListener('seeked',renderFromAudio);audio.addEventListener('loadedmetadata',updateRuntimeDuration);audio.addEventListener('durationchange',updateRuntimeDuration);
    audio.addEventListener('play',()=>{cancelAnimationFrame(rafId);rafId=requestAnimationFrame(drawWhilePlaying);updateStatus();});audio.addEventListener('pause',()=>{cancelAnimationFrame(rafId);renderFromAudio();updateStatus();});audio.addEventListener('ended',()=>{renderFromAudio();updateStatus();});
    document.getElementById('play-control').addEventListener('click',()=>audio.paused?(audio.ended?seek(0,true):audio.play().catch(()=>showError('瀏覽器未能播放旁白，請確認 MP3 檔案可讀取。'))):audio.pause());
    document.getElementById('prev-scene').addEventListener('click',()=>seek(timeline.scenes[Math.max(0,lastScene-1)].startMs));
    document.getElementById('next-scene').addEventListener('click',()=>seek(timeline.scenes[Math.min(timeline.scenes.length-1,lastScene+1)].startMs));
    const jumpChapter=(direction)=>{const chapter=chapterAt(Math.round(audio.currentTime*1000));const index=timeline.chapters.findIndex((item)=>item.id===chapter.id);const next=timeline.chapters[Math.max(0,Math.min(timeline.chapters.length-1,index+direction))];seek(next.startMs,true);};
    document.getElementById('prev-chapter').addEventListener('click',()=>jumpChapter(-1));document.getElementById('next-chapter').addEventListener('click',()=>jumpChapter(1));
    document.getElementById('replay-control').addEventListener('click',()=>seek(0));
    const volume=document.getElementById('volume-control');volume.addEventListener('input',()=>{audio.volume=Number(volume.value);audio.muted=audio.volume===0;document.getElementById('mute-control').textContent=audio.muted?'取消靜音':'靜音';});
    document.getElementById('mute-control').addEventListener('click',(event)=>{audio.muted=!audio.muted;event.currentTarget.textContent=audio.muted?'取消靜音':'靜音';});
    document.getElementById('fullscreen-control').addEventListener('click',async()=>{const stage=document.getElementById('stage-wrap');try{if(document.fullscreenElement)await document.exitFullscreen();else await stage.requestFullscreen();}catch{showError('此瀏覽器不支援全螢幕播放。');}});
    slider.addEventListener('pointerdown',(event)=>{dragging=true;wasPlaying=!audio.paused;audio.pause();slider.setPointerCapture?.(event.pointerId);});
    slider.addEventListener('input',()=>{if(dragging){refs.time.textContent=msToTime(Number(slider.value));return;}seek(Number(slider.value));});
    const finishDrag=()=>{if(!dragging)return;dragging=false;seek(Number(slider.value),wasPlaying);wasPlaying=false;};
    slider.addEventListener('pointerup',finishDrag);slider.addEventListener('pointercancel',finishDrag);slider.addEventListener('lostpointercapture',finishDrag);
    const chapterList=document.getElementById('chapter-list');
    for(const chapter of timeline.chapters){const button=document.createElement('button');button.type='button';button.className='chapter-button';button.dataset.id=chapter.id;button.innerHTML=`<span class="chapter-number">${chapter.id}</span><span class="chapter-name"></span><small></small>`;button.querySelector('.chapter-name').textContent=chapter.title;button.querySelector('small').textContent=`${timeline.scenes.filter((scene)=>scene.chapterId===chapter.id).length} 鏡`;button.addEventListener('click',()=>seek(chapter.startMs,true));chapterList.append(button);}
    const toggle=document.getElementById('sync-debug-toggle');toggle.addEventListener('click',()=>{const panel=document.getElementById('sync-debug-panel');panel.hidden=!panel.hidden;toggle.setAttribute('aria-expanded',String(!panel.hidden));toggle.textContent=panel.hidden?'查看同步資訊':'收合同步資訊';});
    syncAt(initialMs);updateStatus();audio.playbackRate=1;
  }

  if(page==='reader')renderReader();else renderHome();
})();



