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
          <a class="youtube-link" data-youtube="with" href="${safe(SETTINGS.links.youtubeWithSubtitles || '#')}" target="_blank" rel="noopener">YT連結(有字幕)</a>
          <a class="youtube-link" data-youtube="without" href="${safe(SETTINGS.links.youtubeWithoutSubtitles || '#')}" target="_blank" rel="noopener">YT連結(無字幕)</a>
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
        <a class="back-link" href="${safe(SETTINGS.links.home)}">回到首頁</a>
        <div><p class="eyebrow">蘇東坡詩詞｜第22集</p><h1>《水龍吟·次韻章質夫楊花詞》</h1></div>
        <div class="reader-duration">旁白 ${formatTime(T.durationMs)}</div>
      </header>
      <section class="reader-shell" id="reader-shell" aria-label="動態閱讀播放器">
        <audio id="master-audio" class="master-audio" preload="metadata" src="${safe(SETTINGS.assets.narrationAudio)}"></audio>
        <div class="stage-wrap" id="stage" aria-label="分鏡畫面">
          <div class="scene-layer" id="layer-a"></div><div class="scene-layer" id="layer-b"></div>
          <div class="frame-shade"></div>
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
          <div class="control-row" role="group" aria-label="播放與章節控制">
            <button id="prev-chapter-button" type="button" aria-label="上一章">上一章</button>
            <button class="scene-nav-button" id="prev-scene-button" type="button" aria-label="前一鏡，上一張圖片">前一鏡</button>
            <button class="play-control" id="play-button" type="button" aria-pressed="false">播放</button>
            <button class="scene-nav-button" id="next-scene-button" type="button" aria-label="下一鏡，下一張圖片">下一鏡</button>
            <button id="next-chapter-button" type="button" aria-label="下一章">下一章</button>
            <button id="mute-button" type="button" aria-pressed="false">靜音</button>
            <label class="volume-control"><span>音量</span><input id="volume" type="range" min="0" max="1" step="0.01" value="1" aria-label="音量"></label>
            <button id="fullscreen-button" type="button">全螢幕</button>
            <button id="restart-button" type="button">從頭重播</button>
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
    const state={scrubbing:false,wasPlaying:false,previewMs:0,activeScene:-1,lastCaption:'',lastChapter:'',lastDebug:0};
    const setError=(msg)=>{const e=$('playback-error');e.textContent=msg;e.classList.toggle('is-visible',Boolean(msg));};
    const sceneImageUrl=(scene)=>{let path=String(scene.imagePath||`images/${scene.workbookId}.webp`).replace(/\\/g,'/').replace(/^\.\//,'');if(path.startsWith('assets/'))path=path.slice('assets/'.length);return `./assets/${path}`;};
    const renderPlaceholder=(scene) => `<div class="scene-placeholder"><div class="placeholder-card"><p class="placeholder-kicker">此分鏡尚未提供圖片</p><p class="placeholder-id">${safe(scene.workbookId)}</p><code class="placeholder-filename">${safe(sceneImageUrl(scene))}</code><p class="placeholder-note">此鏡圖片槽位依 Excel 時間碼保留，圖片資料尚未提供。</p></div></div>`;
    const renderImageError=(scene)=>`<div class="scene-placeholder scene-image-error"><div class="placeholder-card"><p class="placeholder-kicker">分鏡圖片載入失敗</p><p class="placeholder-id">${safe(scene.workbookId)}</p><code class="placeholder-filename">${safe(sceneImageUrl(scene))}</code><p class="placeholder-note">時間軸已指定此圖片；請確認解壓後的網站資料夾包含該檔案。</p></div></div>`;
    const stableMotion=(scene,progress)=>{const p=Math.max(0,Math.min(1,progress));switch(scene.motion){case'push':return `scale(${1+p*.045})`;case'pull':return `scale(${1.045-p*.045})`;case'pan-up':return `scale(1.045) translateY(${-2*p}%)`;case'pan-down':return `scale(1.045) translateY(${2*p}%)`;case'pan-left':return `scale(1.045) translateX(${-2*p}%)`;default:return `scale(1.045) translateX(${2*p}%)`;}};
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
    if(location.hash==='#chapter-index')requestAnimationFrame(()=>$('chapter-index').scrollIntoView({block:'start'}));
  }
  isReader?renderReader():renderHome();
})();
