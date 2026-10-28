// C03 final-site structure adapted for this episode. Runtime never fetches local data:
// timeline-data.js embeds the Excel/SRT-derived timeline for file:// compatibility.
(() => {
  'use strict';
  const T = window.EPISODE_TIMELINE;
  const SETTINGS = window.EPISODE_SETTINGS || {links:{home:'./index.html',reading:'./reading.html',chapters:'./reading.html#chapter-index'},assets:{coverImage:'./assets/images/cover.webp',narrationAudio:'./assets/audio/narration.mp3'}};
  const root = document.getElementById('root');
  if (!T || !root) { if (root) root.textContent = '網站時間軸資料尚未載入。'; return; }
  const poemPhrases = ['似花還似非花','也無人惜從教墜','拋家傍路','思量卻是','無情有思','縈損柔腸','困酣嬌眼','欲開還閉','夢隨風萬里','尋郎去處','又還被','鶯呼起','不恨此花飛盡','恨西園','落紅難綴','曉來雨過','遺蹤何在','一池萍碎','春色三分','二分塵土','一分流水','細看來','不是楊花','點點是離人淚'];
  const safe = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const formatTime = (ms) => { const s=Math.max(0,Math.floor(ms/1000)); return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`; };
  const formatPrecise = (ms) => `${(Math.max(0,ms)/1000).toFixed(3)} 秒`;
  const isReader = document.body.dataset.page === 'reader';
  const isMotionPage = document.body.dataset.motion === 'true';

  function renderHome() {
    const duration = formatTime(T.durationMs);
    root.innerHTML = `<main class="hero">
      <img class="cover-image" src="${safe(SETTINGS.assets.coverImage)}" alt="《水龍吟·次韻章質夫楊花詞》本集封面">
      <div class="hero-shade cover-hero-shade"></div>
      <div class="hero-copy cover-hero-copy">
        <p class="eyebrow">蘇東坡詩詞｜第22集｜動態閱讀</p>
        <h1>細看來，不是楊花，<em>點點是離人淚</em></h1>
        <p class="hero-summary">《水龍吟·次韻章質夫楊花詞》<br>離別情緒，如何寄託於景物？</p>
        <div class="hero-actions">
          <a class="start-link" href="${safe(SETTINGS.links.reading)}">開始閱讀</a>
          <a class="youtube-link" data-youtube="with" href="${safe(SETTINGS.links.youtubeWithSubtitles || "#")}" target="_blank" rel="noopener">YT連結(有字幕)</a>
          <a class="youtube-link" data-youtube="without" href="${safe(SETTINGS.links.youtubeWithoutSubtitles || "#")}" target="_blank" rel="noopener">YT～動畫特效版</a>
          <a class="motion-link" href="${safe(SETTINGS.links.motion || "./reading-motion.html")}">動畫特效版 ✦</a>
        </div>
        <p class="hero-meta">旁白 ${duration}｜${T.chapters.length} 個章節｜${T.scenes.length} 個分鏡｜${T.placeholderCount ? `分鏡圖待補 ${T.placeholderCount} 張` : `分鏡圖片載入中…`}</p>
      </div>
      <span class="cover-caption">本集封面素材：原始封面轉製 WebP</span>
    </main>`;
    const cover = root.querySelector('.cover-image');
    cover.addEventListener('error', () => { cover.classList.add('cover-image-failed'); const shade=root.querySelector('.hero-shade'); shade.insertAdjacentHTML('afterend',`<div class="hero-fallback"><div><p>蘇東坡詩詞｜第22集</p><h2>《水龍吟·次韻章質夫楊花詞》</h2><span>細看來，不是楊花，點點是離人淚</span></div></div>`); }, {once:true});
  }

  function renderReader() {
    root.innerHTML = `<main class="reader-page">
      <header class="reader-header">
        <a class="back-link" href="${safe(isMotionPage ? (SETTINGS.links.reading || './reading.html') : SETTINGS.links.home)}">${isMotionPage ? '返回原版閱讀' : '回到首頁'}</a>
        <div><p class="eyebrow">${isMotionPage ? '動畫特效版｜' : ''}蘇東坡詩詞｜第22集</p><h1>《水龍吟·次韻章質夫楊花詞》</h1></div>
        <div class="reader-duration">旁白 ${formatTime(T.durationMs)}</div>
      </header>
      <section class="reader-shell" id="reader-shell" aria-label="動態閱讀播放器">
        <audio id="master-audio" class="master-audio" preload="metadata" src="${safe(SETTINGS.assets.narrationAudio)}"></audio>
        <div class="stage-wrap" id="stage" aria-label="分鏡畫面">
          <div class="scene-layer" id="layer-a"></div><div class="scene-layer" id="layer-b"></div>
          <div class="frame-shade"></div>
          ${isMotionPage ? '<canvas class="motion-canvas" id="motion-canvas" aria-hidden="true"></canvas><div class="poem-overlay" id="poem-overlay" hidden aria-hidden="true"></div>' : ''}
          <div class="frame-chapter" id="corner-chapter"></div>
          <div class="frame-intro" id="center-chapter"></div>
          <div class="frame-subtitle" id="subtitle" aria-live="off"></div>
        </div>
        <div class="player-panel">
          <div class="seek-row">
            <output class="time-readout" id="current-time">0:00</output>
            <input class="seek-slider" id="seek-slider" type="range" min="0" max="${T.durationMs}" step="1" value="0" aria-label="播放進度">
            <output class="time-readout" id="total-time">${formatTime(T.durationMs)}</output>
          </div>
                    <div class="control-row" role="group" aria-label="播放、分鏡與章節控制">
            <button id="prev-chapter-button" type="button" aria-label="上一章">上一章</button>
            <button id="prev-scene-button" type="button" aria-label="前一鏡，上一張圖片">前一鏡</button>
            <button class="play-control" id="play-button" type="button" aria-pressed="false">播放</button>
            <button id="next-scene-button" type="button" aria-label="下一鏡，下一張圖片">下一鏡</button>
            <button id="next-chapter-button" type="button" aria-label="下一章">下一章</button>
            <button id="mute-button" type="button" aria-pressed="false">靜音</button>
            <label class="volume-control"><span>音量</span><input id="volume" type="range" min="0" max="1" step="0.01" value="1" aria-label="音量"></label>
            <button id="fullscreen-button" type="button">全螢幕</button>
            <button id="restart-button" type="button">從頭播放</button>
          </div>
          <div class="playback-status" aria-live="polite"><span id="playback-state">已暫停</span><span id="sync-state">分鏡圖片依時間軸逐鏡載入，字幕與章節依MP3同步</span><span id="image-state">${T.placeholderCount ? `分鏡圖待補 ${T.placeholderCount} 張` : `${T.scenes.length} 張新生成分鏡圖已整合`}</span></div>
          <p class="playback-error" id="playback-error" role="alert"></p>
        </div>
        <section class="scene-notes" id="scene-notes" aria-live="polite">
          <h2 id="scene-heading">目前分鏡</h2><p id="scene-description"></p><p class="scene-note-meta" id="scene-meta"></p>
        </section>
        <section class="chapter-section" id="chapter-index">
          <h2>章節索引</h2><div class="chapter-list" id="chapter-list"></div>
        </section>
      </section>
      <button class="sync-debug-toggle" id="debug-toggle" type="button" aria-expanded="false" aria-controls="sync-debug-panel">查看同步資訊</button>
      <section class="sync-debug" id="sync-debug-panel" hidden>
        <p class="debug-explainer">MP3的 audio.currentTime 是唯一執行時鐘；分鏡時間取Excel，字幕區間取原始SRT。拖動進度列時先暫停主畫面，放開後才執行一次seek，並依拖動前狀態恢復播放。</p>
        <dl class="debug-grid" id="debug-grid"></dl>
      </section>
      <footer class="reader-footer">畫面分鏡與章節起點依完整分鏡表 Excel；字幕文字與時間依原始 SRT；旁白使用原始 MP3，播放速度固定 1.0×。分鏡圖片依 IMG 編號對應提示詞與時間軸。</footer>
    </main>`;
    const $ = (id) => document.getElementById(id);
    const audio=$('master-audio'), slider=$('seek-slider'), stage=$('stage'), layerA=$('layer-a'), layerB=$('layer-b');
    const motion=window.EPISODE_MOTION;
    const motionScenes=new Map((motion?.scenes||[]).map(item=>[item.id,item]));
    const poemCues=new Map((motion?.poems||[]).map(item=>[item.cueId,item]));
    const motionCanvas=isMotionPage?$('motion-canvas'):null;
    const motionCtx=motionCanvas?.getContext('2d')||null;
    const poemOverlay=isMotionPage?$('poem-overlay'):null;
    const state={scrubbing:false,wasPlaying:false,previewMs:0,activeScene:-1,lastCaption:'',lastChapter:'',lastDebug:0};
    const setError=(msg)=>{const e=$('playback-error');e.textContent=msg;e.classList.toggle('is-visible',Boolean(msg));};
    const sceneImageUrl=(scene)=>{let path=String(scene.imagePath||`images/${scene.workbookId}.webp`).replace(/\\/g,'/').replace(/^\.\//,'');if(path.startsWith('assets/'))path=path.slice('assets/'.length);return `./assets/${path}`;};
    const renderPlaceholder=(scene) => `<div class="scene-placeholder"><div class="placeholder-card"><p class="placeholder-kicker">此分鏡尚未提供圖片</p><p class="placeholder-id">${safe(scene.workbookId)}</p><code class="placeholder-filename">${safe(sceneImageUrl(scene))}</code><p class="placeholder-note">此鏡圖片槽位依 Excel 時間碼保留，圖片資料尚未提供。</p></div></div>`;
    const renderImageError=(scene)=>`<div class="scene-placeholder scene-image-error"><div class="placeholder-card"><p class="placeholder-kicker">分鏡圖片載入失敗</p><p class="placeholder-id">${safe(scene.workbookId)}</p><code class="placeholder-filename">${safe(sceneImageUrl(scene))}</code><p class="placeholder-note">時間軸已指定此圖片；請確認解壓後的網站資料夾包含該檔案。</p></div></div>`;
    const stableMotion=(scene,progress)=>{const p=Math.max(0,Math.min(1,progress));switch(scene.motion){case'push':return `scale(${1+p*.045})`;case'pull':return `scale(${1.045-p*.045})`;case'pan-up':return `scale(1.045) translateY(${-2*p}%)`;case'pan-down':return `scale(1.045) translateY(${2*p}%)`;case'pan-left':return `scale(1.045) translateX(${-2*p}%)`;default:return `scale(1.045) translateX(${2*p}%)`;}};
    const resizeMotionCanvas=()=>{if(!motionCanvas)return;const rect=stage.getBoundingClientRect(),dpr=Math.min(2,window.devicePixelRatio||1);motionCanvas.width=Math.max(1,Math.round(rect.width*dpr));motionCanvas.height=Math.max(1,Math.round(rect.height*dpr));motionCanvas.style.width=`${rect.width}px`;motionCanvas.style.height=`${rect.height}px`;motionCtx.setTransform(dpr,0,0,dpr,0,0);};
    const seeded=(seed,index)=>{const x=Math.sin((seed+1)*127.1+(index+1)*311.7)*43758.5453;return x-Math.floor(x);};
    const drawEffect=(scene,progress,alpha,ms)=>{
      if(!motionCtx||alpha<=.001)return;const cfg=motionScenes.get(scene.id);if(!cfg)return;
      const ctx=motionCtx,w=stage.clientWidth,h=stage.clientHeight,p=Math.max(0,Math.min(1,progress)),q=window.matchMedia('(prefers-reduced-motion: reduce)').matches?0:1;
      ctx.save();ctx.globalAlpha=alpha;ctx.lineCap='round';ctx.lineJoin='round';
      const wash=(x0,y0,x1,y1,colorA,colorB)=>{const g=ctx.createLinearGradient(x0,y0,x1,y1);g.addColorStop(0,colorA);g.addColorStop(.55,'rgba(255,239,192,0)');g.addColorStop(1,colorB);ctx.fillStyle=g;ctx.fillRect(0,0,w,h);};
      const ellipse=(x,y,rx,ry,color,rotation=0)=>{ctx.save();ctx.translate(x,y);ctx.rotate(rotation);ctx.fillStyle=color;ctx.beginPath();ctx.ellipse(0,0,rx,ry,0,0,Math.PI*2);ctx.fill();ctx.restore();};
      const line=(x1,y1,x2,y2,color,width)=>{ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(x1,y1);ctx.quadraticCurveTo((x1+x2)/2,(y1+y2)/2+Math.sin((p+cfg.seed)*6)*h*.01,x2,y2);ctx.stroke();};
      const kind=cfg.kind, phase=(p*q+cfg.seed*.173)%1, lum=cfg.strength;
      if(kind==='fluff'||kind==='petal'||kind==='wind'||kind==='dew'){
        for(let i=0;i<(kind==='dew'?6:9);i++){const r=seeded(cfg.seed,i),x=((r*.92+phase*(kind==='petal'?.12:.22))%1)*w,y=((seeded(cfg.seed,i+19)*.65+phase*(kind==='petal'?.3:.18))%1)*h;
          if(kind==='dew'){ctx.shadowColor='rgba(255,244,194,.9)';ctx.shadowBlur=8*lum;ellipse(x,y,2+lum*2,2+lum*2,'rgba(255,250,225,.8)');}
          else if(kind==='petal'){ellipse(x,y,6+lum*3,2.6+lum,`rgba(255,217,185,${.30*lum})`,.3+phase*2);}
          else {ellipse(x,y,5+lum*2,2.2+lum,`rgba(255,250,226,${.4*lum})`,-.35+phase*1.5);line(x-5,y,x+7,y-2,`rgba(255,255,240,${.17*lum})`,1);}
        }
        if(kind==='wind')for(let i=0;i<4;i++){const y=h*(.28+i*.13);line(w*.58,y,w*.96,y-h*.035,`rgba(244,236,198,${.07*lum})`,1.2);}
      } else if(kind==='water'||kind==='reflection'){
        const cy=h*(kind==='water'?.70:.63),cx=w*(.42+phase*.12);for(let i=0;i<4;i++){const radius=(.06+i*.055+phase*.05)*w;ctx.beginPath();ctx.ellipse(cx,cy,radius,radius*.14,0,Math.PI*1.08,Math.PI*1.92);ctx.strokeStyle=`rgba(255,239,189,${(.11-i*.018)*lum})`;ctx.lineWidth=1.2;ctx.stroke();}
        wash(w*.36,cy,w*.75,cy+h*.02,`rgba(255,231,169,${.10*lum})`,'rgba(255,240,192,0)');
      } else if(kind==='sunlight'||kind==='warm'||kind==='paper'||kind==='scroll'||kind==='ink'){
        const x=w*(phase*.9-.15),g=ctx.createLinearGradient(x,0,x+w*.28,h);g.addColorStop(0,'rgba(255,231,174,0)');g.addColorStop(.48,`rgba(255,225,155,${(kind==='ink'?.12:.17)*lum})`);g.addColorStop(1,'rgba(255,232,181,0)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
        if(kind==='paper'||kind==='scroll'||kind==='ink'){ctx.strokeStyle=`rgba(244,226,184,${.08*lum})`;ctx.lineWidth=1;for(let i=0;i<3;i++){const y=h*(.34+i*.11);ctx.beginPath();ctx.moveTo(w*.25,y);ctx.lineTo(w*.75,y+Math.sin(p*4+i)*2);ctx.stroke();}}
      } else if(kind==='shadow'||kind==='leaf-shadow'){
        const x=w*(.12+p*.24);ctx.save();ctx.translate(x,h*.42);ctx.rotate(-.48);for(let i=0;i<6;i++)ellipse(i*w*.055,Math.sin(i*1.4)*h*.08,w*.06,h*.018,`rgba(7,24,24,${.11*lum})`,.16);ctx.restore();
      } else if(kind==='mist'){
        for(let i=0;i<3;i++){const y=h*(.42+i*.13)+Math.sin(p*5+i)*h*.025;const g=ctx.createLinearGradient(0,y,w,y);g.addColorStop(0,'rgba(239,246,235,0)');g.addColorStop(.5,`rgba(226,238,230,${.12*lum})`);g.addColorStop(1,'rgba(239,246,235,0)');ctx.fillStyle=g;ctx.fillRect(0,y-h*.035,w,h*.07);}
      } else if(kind==='dream'){
        const g=ctx.createRadialGradient(w*(.3+p*.38),h*.45,2,w*(.3+p*.38),h*.45,w*.45);g.addColorStop(0,`rgba(255,234,180,${.14*lum})`);g.addColorStop(1,'rgba(255,234,180,0)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
      } else if(kind==='soft-glint'){
        const x=w*(.22+p*.58),y=h*(.25+Math.sin(p*Math.PI)*.18);ctx.shadowColor='rgba(255,236,184,.8)';ctx.shadowBlur=12;ellipse(x,y,2.2,2.2,`rgba(255,250,224,${.72*lum})`);
      } else {wash(0,h*.3,w,h*.8,`rgba(255,235,187,${.1*lum})`,'rgba(255,240,192,0)');}
      ctx.restore();
    };
    const paintMotion=(ms)=>{
      if(!motionCtx)return;if(!motionCanvas.width||!motionCanvas.height)resizeMotionCanvas();const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;
      motionCtx.clearRect(0,0,w,h);const idx=findScene(ms),scene=T.scenes[idx],duration=Math.max(1,scene.endMs-scene.startMs),progress=(ms-scene.startMs)/duration;let transition=0,next=null;
      if(idx<T.scenes.length-1){next=T.scenes[idx+1];const fadeMs=Math.min(650,Math.max(0,duration*.22)),fadeStart=scene.endMs-fadeMs;if(ms>=fadeStart)transition=Math.max(0,Math.min(1,(ms-fadeStart)/fadeMs));}
      drawEffect(scene,progress,1-transition,ms);if(transition&&next)drawEffect(next,Math.max(0,(ms-next.startMs)/Math.max(1,next.endMs-next.startMs)),transition,ms);
    };
    const setPoemOverlay=(cue,ms)=>{if(!poemOverlay)return;const item=cue?poemCues.get(cue.id):null,scene=item?T.scenes[findScene(ms)]:null;if(!item||scene?.workbookId!==item.imageId){poemOverlay.hidden=true;poemOverlay.textContent='';poemOverlay.removeAttribute('data-cue');return;}if(poemOverlay.dataset.cue!==item.cueId){poemOverlay.textContent=item.text;poemOverlay.dataset.cue=item.cueId;poemOverlay.dataset.position=item.position||'upper-right';}const span=Math.max(1,item.endMs-item.startMs),p=Math.max(0,Math.min(1,(ms-item.startMs)/span)),fade=Math.min(1,p/.13,(1-p)/.11);poemOverlay.hidden=false;poemOverlay.style.setProperty('--poem-opacity',String(Math.max(.1,fade)));poemOverlay.setAttribute('aria-label',item.text);};
    const putScene=(layer,scene,progress,opacity)=>{if(!scene){layer.replaceChildren();layer.dataset.scene='';layer.style.opacity=String(opacity);return;}if(layer.dataset.scene!==scene.id){layer.dataset.scene=scene.id;if(scene.placeholder){layer.innerHTML=renderPlaceholder(scene);}else{const img=document.createElement('img');img.className='scene-visual';img.alt=scene.workbookId+' 分鏡圖';img.decoding='sync';img.loading='eager';img.addEventListener('load',()=>{if(layer.dataset.scene===scene.id&&opacity>0.5){$('image-state').textContent='已顯示 '+scene.workbookId;}},{once:true});img.addEventListener('error',()=>{if(layer.dataset.scene===scene.id){layer.innerHTML=renderImageError(scene);layer.dataset.scene=scene.id;$('image-state').textContent='載入失敗 '+scene.workbookId;}},{once:true});layer.replaceChildren(img);img.src=sceneImageUrl(scene);}}layer.style.opacity=String(opacity);const visual=layer.querySelector('.scene-visual')||layer.querySelector('.scene-placeholder');if(visual)visual.style.transform=stableMotion(scene,progress);};
    const textNodes=(text)=>{const marks=[];for(const phrase of poemPhrases){let from=0;while(true){const at=text.indexOf(phrase,from);if(at<0)break;marks.push([at,at+phrase.length]);from=at+phrase.length;}}marks.sort((a,b)=>a[0]-b[0]||b[1]-a[1]);const out=[];let cursor=0;for(const [a,b] of marks){if(a<cursor)continue;if(a>cursor)out.push(document.createTextNode(text.slice(cursor,a)));const span=document.createElement('span');span.className='poem-highlight';span.textContent=text.slice(a,b);out.push(span);cursor=b;}if(cursor<text.length)out.push(document.createTextNode(text.slice(cursor)));return out;};
    const setCaption=(cue)=>{const el=$('subtitle'),id=cue?cue.id:'';if(id===state.lastCaption)return;state.lastCaption=id;el.replaceChildren();if(!cue)return;el.append(...textNodes(cue.text.replace(/\r?\n/g,' ')));requestAnimationFrame(()=>{const width=el.clientWidth;const content=el.scrollWidth;const current=parseFloat(getComputedStyle(el).fontSize);if(content>width&&content>0)el.style.fontSize=`${Math.max(12,current*width/content)}px`;else el.style.fontSize='';});};
    const findScene=(ms)=>{let lo=0,hi=T.scenes.length-1;while(lo<=hi){const mid=(lo+hi)>>1,s=T.scenes[mid];if(ms<s.startMs)hi=mid-1;else if(ms>=s.endMs)lo=mid+1;else return mid;}return Math.min(T.scenes.length-1,Math.max(0,lo-1));};
    const findCue=(ms)=>T.subtitles.find(c=>ms>=c.startMs&&ms<c.endMs)||null;
    const findChapterIndex=(ms)=>{const index=T.chapters.findIndex(c=>ms>=c.startMs&&ms<c.endMs);return index<0?(ms>=T.durationMs?T.chapters.length-1:0):index;};
    const setChapter=(chapter,elapsed)=>{if(!chapter)return;const center=$('center-chapter'),corner=$('corner-chapter');if(state.lastChapter!==chapter.id){state.lastChapter=chapter.id;center.textContent=chapter.title;corner.textContent=chapter.title;}const fadeIn=Math.min(1,elapsed/240),fadeOut=Math.max(0,Math.min(1,(1900-elapsed)/300));center.style.opacity=String(Math.max(0,fadeIn*fadeOut));corner.style.opacity=String(Math.max(0,Math.min(1,(elapsed-1650)/250)));};
    const updateNotes=(scene)=>{$('scene-heading').textContent=`${scene.workbookId}｜${scene.chapterTitle}`;$('scene-description').textContent=scene.storyboard;$('scene-meta').textContent=`${scene.startTimecode} → ${scene.endTimecode}｜${scene.durationSeconds.toFixed(2)} 秒｜${scene.placeholder?'待補圖':'載入中：'+scene.imagePath}`;};
    const updateDebug=(ms,scene,chapter,cue)=>{if(Math.abs(ms-state.lastDebug)<70)return;state.lastDebug=ms;const items=[['Audio Time',formatPrecise(ms)],['Master Time',formatPrecise(ms)],['Remotion Frame',`${Math.round(ms*T.fps/1000)} / ${T.durationFrames-1}（${T.fps} fps）`],['Subtitle ID',cue?.id||'—'],['目前字幕',cue?.text||'（此刻沒有字幕）'],['Scene / Image ID',scene?`${scene.id} / ${scene.workbookId}`:'—'],['Chapter ID / 名稱',chapter?`${chapter.id} / ${chapter.title}`:'—'],['時間軸來源','Excel分鏡；原始SRT；原始MP3（1.0×）'],['圖片槽位',`${T.scenes.length}個；已提供${T.scenes.length-T.placeholderCount}張，待補${T.placeholderCount}張`]];$('debug-grid').innerHTML=items.map(([k,v])=>`<div><dt>${safe(k)}</dt><dd>${safe(v)}</dd></div>`).join('');};
    const sync=(ms)=>{
      ms=Math.max(0,Math.min(T.durationMs,ms));slider.value=String(ms);$('current-time').textContent=formatTime(ms);
      const idx=findScene(ms),scene=T.scenes[idx],chapterIndex=findChapterIndex(ms),chapter=T.chapters[chapterIndex],cue=findCue(ms);
      if(idx!==state.activeScene){state.activeScene=idx;updateNotes(scene);}
      $('prev-scene-button').disabled=idx<=0;$('next-scene-button').disabled=idx>=T.scenes.length-1;
      $('prev-chapter-button').disabled=chapterIndex<=0;$('next-chapter-button').disabled=chapterIndex>=T.chapters.length-1;
      const duration=Math.max(1,scene.endMs-scene.startMs),progress=(ms-scene.startMs)/duration;let transition=0,next=null;
      if(idx<T.scenes.length-1){next=T.scenes[idx+1];const fadeMs=Math.min(650,Math.max(0,duration*.22));const fadeStart=scene.endMs-fadeMs;if(ms>=fadeStart){transition=Math.max(0,Math.min(1,(ms-fadeStart)/fadeMs));}}
      putScene(layerA,scene,progress,1-transition);putScene(layerB,transition?next:null,transition?Math.max(0,(ms-next.startMs)/Math.max(1,next.endMs-next.startMs)):0,transition);
      paintMotion(ms);setPoemOverlay(cue,ms);
      setChapter(chapter,ms-chapter.startMs);setCaption(cue);
      $('playback-state').textContent=audio.paused?'已暫停':'播放中';const pos=Math.max(0,Math.min(100,ms/T.durationMs*100));slider.style.setProperty('--seek-progress',`${pos}%`);updateDebug(ms,scene,chapter,cue);
    };
    const commitSeek=(target,resume)=>{const ms=Math.max(0,Math.min(T.durationMs,Math.round(target)));slider.value=String(ms);state.scrubbing=false;state.previewMs=ms;audio.currentTime=ms/1000;sync(ms);audio.addEventListener('seeked',()=>sync(audio.currentTime*1000),{once:true});if(resume)audio.play().catch(()=>setError('瀏覽器未允許播放。請先按播放，或確認 MP3 檔案存在。'));};
    const jumpToScene=(offset)=>{const current=findScene(audio.currentTime*1000),target=T.scenes[current+offset];if(!target)return;const wasPlaying=!audio.paused;audio.pause();commitSeek(target.startMs,wasPlaying);};
    const jumpToChapter=(offset)=>{const current=findChapterIndex(audio.currentTime*1000),target=T.chapters[current+offset];if(!target)return;const wasPlaying=!audio.paused;audio.pause();commitSeek(target.startMs,wasPlaying);};
    $('play-button').addEventListener('click',()=>{if(audio.paused){if(audio.ended)audio.currentTime=0;audio.play().catch(()=>setError('無法播放旁白。請確認 MP3 載入完成並允許本機音訊播放。'));}else audio.pause();});
    $('prev-scene-button').addEventListener('click',()=>jumpToScene(-1));$('next-scene-button').addEventListener('click',()=>jumpToScene(1));
    $('prev-chapter-button').addEventListener('click',()=>jumpToChapter(-1));$('next-chapter-button').addEventListener('click',()=>jumpToChapter(1));
    $('restart-button').addEventListener('click',()=>{const was=!audio.paused;audio.pause();commitSeek(0,was);});
    $('mute-button').addEventListener('click',()=>{audio.muted=!audio.muted;$('mute-button').textContent=audio.muted?'取消靜音':'靜音';$('mute-button').setAttribute('aria-pressed',String(audio.muted));});
    $('volume').addEventListener('input',e=>{audio.volume=Number(e.target.value);if(audio.muted&&audio.volume>0){audio.muted=false;$('mute-button').textContent='靜音';$('mute-button').setAttribute('aria-pressed','false');}});
    $('fullscreen-button').addEventListener('click',()=>{if(document.fullscreenElement)document.exitFullscreen?.();else $('reader-shell').requestFullscreen?.();});
    slider.addEventListener('pointerdown',e=>{state.scrubbing=true;state.wasPlaying=!audio.paused;state.previewMs=Number(slider.value);audio.pause();try{slider.setPointerCapture(e.pointerId);}catch{}});
    slider.addEventListener('input',()=>{const ms=Number(slider.value);if(state.scrubbing){state.previewMs=ms;$('current-time').textContent=formatTime(ms);}else commitSeek(ms,!audio.paused);});
    slider.addEventListener('pointerup',()=>{if(state.scrubbing)commitSeek(state.previewMs,state.wasPlaying);});
    slider.addEventListener('pointercancel',()=>{if(state.scrubbing)commitSeek(state.previewMs,state.wasPlaying);});
    slider.addEventListener('change',()=>{if(state.scrubbing)commitSeek(Number(slider.value),state.wasPlaying);});
    $('chapter-list').innerHTML=T.chapters.map(c=>`<button class="chapter-button" type="button" data-chapter="${safe(c.id)}"><span class="chapter-number">${safe(c.id)}</span><span class="chapter-name">${safe(c.title)}<small>${safe(c.startTimecode)}｜${c.sceneCount}鏡</small></span><span class="chapter-count">前往</span></button>`).join('');
    $('chapter-list').addEventListener('click',e=>{const button=e.target.closest('[data-chapter]');if(!button)return;const c=T.chapters.find(x=>x.id===button.dataset.chapter);if(!c)return;const was=!audio.paused;audio.pause();commitSeek(c.startMs,was);});
    $('debug-toggle').addEventListener('click',e=>{const panel=$('sync-debug-panel');panel.hidden=!panel.hidden;e.currentTarget.setAttribute('aria-expanded',String(!panel.hidden));e.currentTarget.textContent=panel.hidden?'查看同步資訊':'收合同步資訊';});
    audio.addEventListener('timeupdate',()=>{if(!state.scrubbing)sync(audio.currentTime*1000);});audio.addEventListener('seeked',()=>{if(!state.scrubbing)sync(audio.currentTime*1000);});audio.addEventListener('play',()=>{$('play-button').textContent='暫停';$('play-button').setAttribute('aria-pressed','true');$('playback-state').textContent='播放中';setError('');});audio.addEventListener('pause',()=>{$('play-button').textContent='播放';$('play-button').setAttribute('aria-pressed','false');$('playback-state').textContent=audio.ended?'已播放完畢':'已暫停';});audio.addEventListener('ended',()=>sync(T.durationMs));audio.addEventListener('loadedmetadata',()=>{const actual=Math.round(audio.duration*1000);$('total-time').textContent=formatTime(actual);if(Math.abs(actual-T.durationMs)>5){$('sync-state').textContent=`音檔${actual}ms，分鏡${T.durationMs}ms；請檢查素材時長差`;setError('MP3時長與Excel最後一鏡時間不同，請檢查校對報告。');}});audio.addEventListener('error',()=>setError('找不到或無法載入 narration.mp3。請確認assets/audio/narration.mp3存在。'));document.addEventListener('keydown',e=>{if(e.code==='Space'&&!['INPUT','BUTTON','A'].includes(document.activeElement.tagName)){e.preventDefault();$('play-button').click();}});
    $('total-time').textContent=formatTime(T.durationMs);sync(0);
    if(isMotionPage){resizeMotionCanvas();window.addEventListener('resize',resizeMotionCanvas,{passive:true});let motionFrame=0,motionTick=0;const frame=(now)=>{if(audio.paused){motionFrame=0;paintMotion(audio.currentTime*1000);return;}if(now-motionTick>=32){paintMotion(audio.currentTime*1000);motionTick=now;}motionFrame=requestAnimationFrame(frame);};const startMotion=()=>{if(!motionFrame)motionFrame=requestAnimationFrame(frame);};const stopMotion=()=>{if(motionFrame){cancelAnimationFrame(motionFrame);motionFrame=0;}paintMotion(audio.currentTime*1000);};audio.addEventListener('play',startMotion);audio.addEventListener('pause',stopMotion);if(!audio.paused)startMotion();}
    if(location.hash==='#chapter-index')requestAnimationFrame(()=>$('chapter-index').scrollIntoView({block:'start'}));
  }
  isReader?renderReader():renderHome();
})();


