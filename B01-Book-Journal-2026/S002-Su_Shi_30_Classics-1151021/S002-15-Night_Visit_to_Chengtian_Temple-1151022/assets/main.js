(() => {
  'use strict';
  const timeline = window.TIMELINE;
  const settings = window.EPISODE_SETTINGS || {};
  const app = document.getElementById('root');
  if (!timeline || !app) return;

  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const poemPhrases = [
    '元豐六年十月十二日夜','解衣欲睡','月色入戶','欣然起行','念無與為樂者','遂至承天寺尋張懷民',
    '懷民亦未寢','相與步於中庭','庭下如積水空明','水中藻荇交橫','蓋竹柏影也','何夜無月','何處無竹柏','但少閑人如吾兩人者耳'
  ];
  const fmt = (ms) => {
    const seconds = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(seconds / 3600), m = Math.floor(seconds % 3600 / 60), s = seconds % 60;
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  };
  const homePath = settings.links?.home || './index.html';
  const readingPath = settings.links?.reading || './reading.html';
  const coverPath = settings.assets?.coverImage || 'assets/images/cover.webp';
  const audioPath = settings.assets?.narrationAudio || 'assets/audio/narration.mp3';
  const isReader = document.body.dataset.page === 'reader' || location.hash === '#reading';

  function renderHome() {
    const chapters = timeline.chapters.length;
    app.innerHTML = `
      <main class="home-page">
        <section class="hero" aria-labelledby="home-title">
          <img src="${esc(coverPath)}" alt="《記承天寺夜遊》封面">
          <div class="hero-shade cover-hero-shade"></div>
          <div class="hero-copy cover-hero-copy">
            <p class="eyebrow">千古東坡・第15集</p>
            <h1 id="home-title">《記承天寺夜遊》</h1>
            <p class="hero-summary">從一束入戶月光，到兩位夜遊者眼中的空明庭院。沿著原速旁白與原始字幕，重新讀見蘇軾筆下平凡夜色的深意。</p>
            <div class="hero-actions">
              <a class="start-link" href="${esc(readingPath)}" aria-label="開始閱讀《記承天寺夜遊》">開始閱讀 <span aria-hidden="true">→</span></a>
              <a class="youtube-link" href="${esc(settings.links?.youtubeWithSubtitles || 'https://www.youtube.com/')}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#ff0000" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8Z"/><path fill="#fff" d="m9.6 15.6 6.3-3.6-6.3-3.6z"/></svg>YT連結（有字幕）</a>
              <a class="youtube-link" href="${esc(settings.links?.youtubeWithoutSubtitles || 'https://www.youtube.com/')}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#ff0000" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8Z"/><path fill="#fff" d="m9.6 15.6 6.3-3.6-6.3-3.6z"/></svg>YT連結（無字幕）</a>
              <a class="start-link effect-link" href="./reading-effects.html" aria-label="開啟《記承天寺夜遊》動畫特效版">動畫特效版 ✦</a>
            </div>
            <p class="hero-meta">${timeline.scenes.length} 鏡・${chapters} 章・原速旁白・離線可讀</p>
          </div>
          <p class="cover-caption">封面採本集提供圖檔轉製 WebP</p>
        </section>
      </main>`;
  }

  function highlighted(text) {
    const ranges = [];
    for (const phrase of poemPhrases) {
      let from = 0, at;
      while ((at = text.indexOf(phrase, from)) !== -1) { ranges.push([at, at + phrase.length]); from = at + phrase.length; }
    }
    ranges.sort((a,b) => a[0]-b[0]);
    let cursor = 0, html = '';
    for (const [start,end] of ranges) {
      if (start < cursor) continue;
      html += esc(text.slice(cursor,start)) + `<span class="poem-highlight">${esc(text.slice(start,end))}</span>`;
      cursor = end;
    }
    return html + esc(text.slice(cursor));
  }

  function renderReader() {
    app.innerHTML = `
      <main class="reader-page">
        <header class="reader-header">
          <a class="back-link" href="${esc(homePath)}">← 系列首頁</a>
          <div><p class="eyebrow">千年後，我們仍記得蘇東坡</p><h1>${esc(timeline.title)}</h1></div>
          <span class="reader-duration">${timeline.scenes.length} 鏡・${timeline.chapters.length} 章</span>
          ${settings.effectsMode ? '<a class="back-link effect-return" href="./reading.html">返回原版閱讀</a>' : ''}
        </header>
        <section class="reader-shell" ${settings.effectsMode ? 'id="reader-shell"' : ''} aria-label="旁白與分鏡同步播放器">
          <div class="stage-wrap" id="stage-wrap" aria-label="16:9 分鏡畫面">
            <img class="scene-layer" id="scene-layer-a" alt="">
            <img class="scene-layer" id="scene-layer-b" alt="">
            ${settings.effectsMode ? '<div class="effect-layer" id="effect-layer-a" aria-hidden="true"></div><div class="effect-layer" id="effect-layer-b" aria-hidden="true"></div><div class="quote-overlay" id="quote-overlay" aria-hidden="true"></div>' : ''}
            <div class="frame-chapter" id="chapter-corner" aria-live="polite"></div>
            <div class="frame-intro" id="chapter-intro" aria-live="polite"></div>
            <div class="frame-subtitle" id="caption-line" aria-live="polite"></div>
            <span class="scene-placeholder-tag" id="placeholder-tag" hidden>圖片占位・尚未生成</span>
            <button class="cover-start" id="cover-start" type="button" aria-label="開始播放原速旁白">
              <img src="${esc(coverPath)}" alt=""><span class="cover-shade"></span>
              <span class="cover-start-copy"><b aria-hidden="true">▶</b><strong>開始閱讀</strong><small>${timeline.scenes.length} 個分鏡・${timeline.chapters.length} 個章節・原速旁白</small></span>
            </button>
            <audio class="master-audio" id="master-audio" src="${esc(audioPath)}" preload="metadata"></audio>
          </div>
          <div class="player-panel">
            <div class="seek-row"><span class="time-readout" id="time-current">00:00:00</span><input class="seek-slider" id="seek-slider" type="range" min="0" max="${timeline.durationMs}" step="20" value="0" aria-label="旁白時間進度"><span class="time-readout" id="time-total">${fmt(timeline.durationMs)}</span></div>
            <div class="control-row">
              <button id="chapter-prev" type="button">上一章</button><button id="scene-prev" type="button">前一鏡</button>
              <button class="play-control" id="play-toggle" type="button" aria-label="播放旁白">播放</button>
              <button id="scene-next" type="button">下一鏡</button><button id="chapter-next" type="button">下一章</button>
              <button id="mute-toggle" type="button">靜音</button>
              <label class="volume-control"><span>音量</span><input id="volume-slider" type="range" min="0" max="1" step="0.01" value="1" aria-label="音量"></label>
              <button id="fullscreen-toggle" type="button">全螢幕</button><button id="restart-toggle" type="button">從頭重播</button>
            </div>
            <div class="playback-status"><span id="play-status">尚未播放</span><span>播放速度 1.0×</span><span id="scene-status"></span></div>
            <p class="playback-error" id="playback-error" role="status" hidden></p>
          </div>
        </section>
        <section class="chapter-section" id="chapter-index" aria-labelledby="chapter-heading">
          <p class="eyebrow">CHAPTER INDEX</p><h2 id="chapter-heading">章節索引</h2><div class="chapter-list" id="chapter-list"></div>
        </section>
        <button class="sync-debug-toggle" id="debug-toggle" type="button" aria-expanded="false" aria-controls="sync-debug-panel">查看同步資訊</button>
        <section class="sync-debug" id="sync-debug-panel" aria-label="時間軸同步資訊" hidden>
          <p class="debug-explainer">網頁以 MP3 的 audio.currentTime 作唯一播放時鐘；分鏡與章節起點依 Excel，字幕依原始 SRT。拖曳期間只預覽時間，放開後才完成定位。</p>
          <dl class="debug-grid"><div><dt>Audio Time</dt><dd id="debug-audio">0.000 秒</dd></div><div><dt>Excel 分鏡</dt><dd id="debug-scene">—</dd></div><div><dt>原始 SRT</dt><dd id="debug-caption">此刻無字幕</dd></div><div><dt>章節</dt><dd id="debug-chapter">—</dd></div><div><dt>圖片狀態</dt><dd id="debug-image">—</dd></div><div><dt>音訊長度</dt><dd>${fmt(timeline.durationMs)}・${timeline.durationMs} ms</dd></div></dl>
        </section>
        <footer class="reader-footer">時間碼依 Excel 分鏡；字幕文字與時間依原始 SRT；MP3 以原速 1.0× 播放。帶有「圖片占位」標記的鏡頭仍待替換正式插圖。</footer>
      </main>`;

    const audio = document.getElementById('master-audio');
    const layerEls = [document.getElementById('scene-layer-a'),document.getElementById('scene-layer-b')];
    const effectLayers = settings.effectsMode ? [document.getElementById('effect-layer-a'),document.getElementById('effect-layer-b')] : [];
    const quoteOverlay = settings.effectsMode ? document.getElementById('quote-overlay') : null;
    const reducedMotion = settings.effectsMode && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(settings.effectsMode) document.body.classList.add('effect-mode');
    const intro = document.getElementById('chapter-intro'), corner = document.getElementById('chapter-corner');
    const caption = document.getElementById('caption-line'), placeholderTag = document.getElementById('placeholder-tag');
    const slider = document.getElementById('seek-slider'), currentTime = document.getElementById('time-current');
    const error = document.getElementById('playback-error'), playButton = document.getElementById('play-toggle');
    const chapterButtons = document.getElementById('chapter-list');
    chapterButtons.innerHTML = timeline.chapters.map((chapter,index)=>`<button class="chapter-button" type="button" data-chapter="${index}"><span class="chapter-number">${esc(chapter.id)}</span><span class="chapter-name">${esc(chapter.displayTitle)}</span><small>${chapter.sceneCount} 鏡</small></button>`).join('');

    let activeLayer = 0, shownSceneId = '', shownChapterId = '', dragging = false, resumeAfterSeek = false, previewMs = 0, userStarted = false, raf = 0;
    const base = settings.assets?.base || './';
    const assetUrl = (path) => new URL(base + path, location.href).href;
    const setLayer = (index,scene,opacity,ms) => {
      const el=layerEls[index];
      if(el.dataset.sceneId!==scene.id){el.dataset.sceneId=scene.id;el.dataset.imageStatus=scene.imageStatus||'generated';el.src=assetUrl(`assets/${scene.imagePath}`);el.onerror=()=>{el.onerror=null;el.dataset.imageStatus='error';el.src=assetUrl('assets/images/placeholder-error.webp');placeholderTag.hidden=false;placeholderTag.textContent=`圖片載入失敗・IMG${scene.id}`;};}
      if(settings.effectsMode){
        const effect=window.SCENE_EFFECTS?.find((item)=>item.sceneId===scene.id);
        const field=effectLayers[index];
        if(effect&&field){
          const duration=Math.max(1,scene.endMs-scene.startMs), progress=Math.max(0,Math.min(1,(ms-scene.startMs)/duration));
          const phase=progress*Math.PI*2*effect.direction;
          field.dataset.sceneId=scene.id;field.dataset.kind=effect.kind;
          field.style.setProperty('--fx-x',`${Math.max(4,Math.min(96,effect.x+Math.sin(phase)*5))}%`);
          field.style.setProperty('--fx-y',`${Math.max(6,Math.min(94,effect.y+Math.cos(phase*.7)*3))}%`);
          field.style.setProperty('--fx-rx',`${effect.radius}%`);field.style.setProperty('--fx-rx-wide',`${effect.radius*1.25}%`);field.style.setProperty('--fx-ry',`${effect.radius*.72}%`);field.style.setProperty('--fx-ry-wide',`${effect.radius*.9}%`);field.style.setProperty('--fx-ry-narrow',`${effect.radius*.55}%`);
          field.style.setProperty('--fx-alpha',String(reducedMotion?0:effect.strength));
          field.style.opacity=String(reducedMotion?0:opacity);field.style.display=opacity>0.001&&!reducedMotion?'block':'none';
        }
      }
      const duration=Math.max(1,scene.endMs-scene.startMs), p=Math.max(0,Math.min(1,(ms-scene.startMs)/duration));
      const eased=p*p*(3-2*p); let scale=reducedMotion?1:1.025,x=0,y=0;
      if(!reducedMotion)switch(scene.motion){case'push':scale=1+eased*.055;break;case'pull':scale=1.055-eased*.055;break;case'pan-left':scale=1.045;x=-2+eased*4;break;case'pan-right':scale=1.045;x=2-eased*4;break;case'diagonal':scale=1.05;x=-1.5+eased*3;y=.8-eased*1.6;break;case'settle':scale=1.02+eased*.02;break;}
      el.style.opacity=String(opacity);el.style.transform=`translate(${x}%,${y}%) scale(${scale})`;el.style.display=opacity>0.001?'block':'none';
    };
    const activeAt=(ms)=>timeline.scenes.findIndex((scene)=>ms>=scene.startMs&&ms<scene.endMs);
    function update(ms){
      const time=Math.max(0,Math.min(timeline.durationMs,ms));
      const idx=Math.max(0,activeAt(Math.min(time,timeline.durationMs-1)));
      const scene=timeline.scenes[idx], next=timeline.scenes[idx+1];
      if(!scene)return;
      const transitionMs=next?(scene.chapterId===next.chapterId?650:900):0;
      const transitionStart=scene.endMs-transitionMs;
      if(next&&time>=transitionStart&&time<scene.endMs){const p=(time-transitionStart)/transitionMs;setLayer(activeLayer,scene,1-p,time);setLayer(1-activeLayer,next,p,time);const visual=p>.42?next:scene;const visualLayer=p>.42?layerEls[1-activeLayer]:layerEls[activeLayer];const failed=visualLayer.dataset.imageStatus==='error';placeholderTag.hidden=!(visual.placeholder||failed);placeholderTag.textContent=failed?`圖片載入失敗・IMG${visual.id}`:`圖片占位・IMG${visual.id} 尚未生成`;}
      else {setLayer(activeLayer,scene,1,time);layerEls[1-activeLayer].style.opacity='0';layerEls[1-activeLayer].style.display='none';const failed=layerEls[activeLayer].dataset.imageStatus==='error';placeholderTag.hidden=!(scene.placeholder||failed);placeholderTag.textContent=failed?`圖片載入失敗・IMG${scene.id}`:`圖片占位・IMG${scene.id} 尚未生成`;}
      if(scene.id!==shownSceneId){shownSceneId=scene.id;document.getElementById('scene-status').textContent=`第 ${scene.id} 鏡${scene.placeholder?'・占位圖':''}`;document.getElementById('debug-scene').textContent=`IMG${scene.id}・${scene.startTimecode} → ${scene.endTimecode}`;document.getElementById('debug-image').textContent=scene.placeholder?'圖片尚未生成（中性占位）':'已生成 WebP';}
      const chapter=timeline.chapters.find((item)=>time>=item.startMs&&time<item.endMs)||timeline.chapters[timeline.chapters.length-1];
      const elapsed=time-chapter.startMs;
      const introOpacity=elapsed<0||elapsed>=2500?0:elapsed<350?elapsed/350:elapsed>2100?(2500-elapsed)/400:1;
      intro.textContent=chapter.title;intro.style.opacity=String(Math.max(0,introOpacity));
      const cornerOpacity=elapsed<2100?0:elapsed<2450?(elapsed-2100)/350:1;
      corner.textContent=chapter.title;corner.style.opacity=String(Math.max(0,cornerOpacity));
      if(chapter.id!==shownChapterId){shownChapterId=chapter.id;document.querySelectorAll('.chapter-button').forEach((button)=>{const on=button.dataset.chapter===String(timeline.chapters.indexOf(chapter));button.classList.toggle('active',on);if(on)button.setAttribute('aria-current','location');else button.removeAttribute('aria-current');});document.getElementById('debug-chapter').textContent=`${chapter.id}・${chapter.title}・Excel ${chapter.startMs} ms`;}
      const cue=timeline.subtitles.find((item)=>time>=item.startMs&&time<item.endMs);
      caption.innerHTML=cue?highlighted(cue.displayText||cue.text.replace(/\n/g,' ')):'';
      if(quoteOverlay){
        const quote=(window.QUOTE_OVERLAYS||[]).find((item)=>item.sceneId===scene.id&&time>=item.startMs&&time<item.endMs);
        if(quote){
          const age=time-quote.startMs;const fade=Math.min(1,age/(quote.text.length<=7?80:160));
          quoteOverlay.textContent=quote.text;quoteOverlay.dataset.cueId=quote.cueId;quoteOverlay.dataset.short=String(quote.text.length<=7);
          quoteOverlay.style.left=`${quote.left}%`;quoteOverlay.style.top=`${quote.top}%`;quoteOverlay.style.width=`${quote.width}%`;quoteOverlay.style.height=`${quote.height}%`;
          quoteOverlay.style.opacity=String(Math.max(0,Math.min(1,fade)));quoteOverlay.classList.toggle('is-visible',fade>.01);
        }else{quoteOverlay.textContent='';quoteOverlay.removeAttribute('data-cue-id');quoteOverlay.style.opacity='0';quoteOverlay.classList.remove('is-visible');}
      }
      if(cue){document.getElementById('debug-caption').textContent=`${cue.id}・${cue.startTimecode} → ${cue.endTimecode}・${cue.text}`;const width=document.getElementById('stage-wrap').clientWidth;const font=Math.max(18,Math.min(34,width*.9/Math.max(1,(cue.displayText||cue.text).length)*1.55));caption.style.fontSize=`${font}px`;}
      else {document.getElementById('debug-caption').textContent='此刻無字幕';caption.style.fontSize='';}
      document.getElementById('debug-audio').textContent=`${(time/1000).toFixed(3)} 秒`;
      if(!dragging){slider.value=String(time);currentTime.textContent=fmt(time);}
      playButton.textContent=audio.ended?'重播':audio.paused?'播放':'暫停';playButton.setAttribute('aria-label',audio.ended?'重播旁白':audio.paused?'播放旁白':'暫停旁白');
      document.getElementById('play-status').textContent=audio.ended?'播放完成':userStarted?(audio.paused?'已暫停':'旁白播放中'):'尚未播放';
      document.getElementById('scene-prev').disabled=idx<=0;document.getElementById('scene-next').disabled=idx>=timeline.scenes.length-1;
      document.getElementById('chapter-prev').disabled=timeline.chapters.indexOf(chapter)<=0;document.getElementById('chapter-next').disabled=timeline.chapters.indexOf(chapter)>=timeline.chapters.length-1;
    }
    function loop(){if(!audio.paused&&!audio.ended){update(audio.currentTime*1000);raf=requestAnimationFrame(loop);}}
    function syncLoop(){cancelAnimationFrame(raf);update(audio.currentTime*1000);if(!audio.paused&&!audio.ended)raf=requestAnimationFrame(loop);}
    async function seekTo(ms,options={}){
      const resume=options.resume??(!audio.paused&&!audio.ended);audio.pause();userStarted=true;document.getElementById('cover-start').hidden=true;
      const target=Math.max(0,Math.min(timeline.durationMs,Math.round(ms)));audio.currentTime=target/1000;
      await new Promise((resolve)=>{if(!audio.seeking){resolve();return;}const done=()=>{audio.removeEventListener('seeked',done);resolve();};audio.addEventListener('seeked',done,{once:true});setTimeout(done,1500);});
      syncLoop();if(resume)await play();
    }
    async function play(){userStarted=true;document.getElementById('cover-start').hidden=true;error.hidden=true;if(audio.ended||audio.currentTime>=timeline.durationSeconds-.03){audio.currentTime=0;}audio.playbackRate=1;try{await audio.play();syncLoop();}catch(e){error.textContent='無法播放旁白，請確認 narration.mp3 已完整解壓且瀏覽器允許播放。';error.hidden=false;}}
    document.getElementById('cover-start').addEventListener('click',play);
    playButton.addEventListener('click',()=>audio.paused?play():audio.pause());
    document.getElementById('restart-toggle').addEventListener('click',()=>seekTo(0,{resume:false}));
    document.getElementById('mute-toggle').addEventListener('click',(e)=>{audio.muted=!audio.muted;e.currentTarget.textContent=audio.muted?'取消靜音':'靜音';});
    document.getElementById('volume-slider').addEventListener('input',(e)=>{audio.volume=Number(e.currentTarget.value);audio.muted=audio.volume===0;document.getElementById('mute-toggle').textContent=audio.muted?'取消靜音':'靜音';});
    document.getElementById('fullscreen-toggle').addEventListener('click',async()=>{const target=document.getElementById('reader-shell');try{if(document.fullscreenElement)await document.exitFullscreen();else await target.requestFullscreen();}catch{error.textContent='此瀏覽器未允許全螢幕顯示。';error.hidden=false;}});
    document.getElementById('scene-prev').addEventListener('click',()=>{const i=Math.max(0,activeAt(audio.currentTime*1000)-1);seekTo(timeline.scenes[i].startMs);});
    document.getElementById('scene-next').addEventListener('click',()=>{const i=Math.min(timeline.scenes.length-1,activeAt(audio.currentTime*1000)+1);seekTo(timeline.scenes[i].startMs);});
    document.getElementById('chapter-prev').addEventListener('click',()=>{const i=timeline.chapters.findIndex((c)=>audio.currentTime*1000>=c.startMs&&audio.currentTime*1000<c.endMs);if(i>0)seekTo(timeline.chapters[i-1].startMs);});
    document.getElementById('chapter-next').addEventListener('click',()=>{const i=timeline.chapters.findIndex((c)=>audio.currentTime*1000>=c.startMs&&audio.currentTime*1000<c.endMs);if(i>=0&&i<timeline.chapters.length-1)seekTo(timeline.chapters[i+1].startMs);});
    chapterButtons.addEventListener('click',(e)=>{const button=e.target.closest('[data-chapter]');if(button)seekTo(timeline.chapters[Number(button.dataset.chapter)].startMs);});
    slider.addEventListener('pointerdown',(e)=>{dragging=true;resumeAfterSeek=!audio.paused&&!audio.ended;audio.pause();previewMs=Number(slider.value);slider.setPointerCapture?.(e.pointerId);});
    slider.addEventListener('input',()=>{if(dragging){previewMs=Number(slider.value);currentTime.textContent=fmt(previewMs);}});
    const finishDrag=async(e)=>{if(!dragging)return;if(e?.pointerId!==undefined&&slider.hasPointerCapture?.(e.pointerId))slider.releasePointerCapture(e.pointerId);dragging=false;const resume=resumeAfterSeek;resumeAfterSeek=false;await seekTo(previewMs,{resume});};
    slider.addEventListener('pointerup',finishDrag);slider.addEventListener('pointercancel',finishDrag);slider.addEventListener('lostpointercapture',finishDrag);
    slider.addEventListener('change',()=>{if(!dragging)seekTo(Number(slider.value),{resume:false});});
    document.getElementById('debug-toggle').addEventListener('click',(e)=>{const panel=document.getElementById('sync-debug-panel');panel.hidden=!panel.hidden;e.currentTarget.textContent=panel.hidden?'查看同步資訊':'收合同步資訊';e.currentTarget.setAttribute('aria-expanded',String(!panel.hidden));});
    audio.addEventListener('timeupdate',syncLoop);audio.addEventListener('play',syncLoop);audio.addEventListener('pause',()=>{cancelAnimationFrame(raf);syncLoop();});audio.addEventListener('ended',()=>{cancelAnimationFrame(raf);syncLoop();});audio.addEventListener('ratechange',()=>{if(audio.playbackRate!==1)audio.playbackRate=1;});
    audio.addEventListener('error',()=>{error.textContent='旁白載入失敗：請確認網站資料夾中的 assets/audio/narration.mp3。';error.hidden=false;});
    audio.addEventListener('loadedmetadata',()=>{if(Math.abs(audio.duration*1000-timeline.durationMs)>80){error.textContent=`音訊長度差異：MP3 ${Math.round(audio.duration*1000)} ms；Excel 時間軸 ${timeline.durationMs} ms。`;error.hidden=false;}});
    document.getElementById('cover-start').hidden=false;
    update(0);
  }

  if (isReader) renderReader(); else renderHome();
})();


