(()=>{
  const audio=document.getElementById('audio');
  const a=document.getElementById('imageA');
  const b=document.getElementById('imageB');
  const layers=[a.parentElement,b.parentElement];
  const sub=document.getElementById('subtitle');
  const center=document.getElementById('chapterCenter');
  const corner=document.getElementById('chapterCorner');
  const status=document.getElementById('status');
  const timeline=document.getElementById('timeline');
  const current=document.getElementById('current');
  const total=document.getElementById('total');
  const playButton=document.getElementById('play');
  const scenePrev=document.getElementById('scenePrev');
  const sceneNext=document.getElementById('sceneNext');
  const chapterPrev=document.getElementById('chapterPrev');
  const chapterNext=document.getElementById('chapterNext');
  const motionButton=document.getElementById('motionToggle');
  const motionEffects=new Map((window.MOTION_EFFECTS||[]).map(x=>[x.id,x]));
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let active=0,visibleScene=-1,currentScene=-1,pending=null,loadToken=0,raf=0,preloadedIndex=-1;
  let motionEnabled=window.MOTION_CONFIG?.enabled!==false;
  const fmt=t=>{
    t=Math.max(0,t||0);
    return `${String(Math.floor(t/60)).padStart(2,'0')}:${String(Math.floor(t%60)).padStart(2,'0')}`;
  };
  const clamp=(v,min=0,max=1)=>Math.max(min,Math.min(max,v));
  function sceneIndexAt(t){
    const found=STORYBOARD.findIndex(s=>t>=s.start&&t<s.end);
    if(found>=0)return found;
    return t>=STORYBOARD.at(-1).end?STORYBOARD.length-1:0;
  }
  function chapterIndexAt(t){
    let index=0;
    for(let i=0;i<CHAPTERS.length;i++)if(CHAPTERS[i].start<=t)index=i;else break;
    return index;
  }
  function motionStyle(s,t){
    const effect=motionEffects.get(s.id);
    const p=clamp((t-s.start)/(s.end-s.start));
    const transform=window.motionTransformAt
      ?window.motionTransformAt(effect?.type||'zoom-in',p,motionEnabled,reducedMotion.matches)
      :{scale:1,x:0,y:0};
    return `translate3d(${transform.x}%,${transform.y}%,0) scale(${transform.scale})`;
  }
  function applyMotion(layerIndex,s,t){
    const img=layers[layerIndex].querySelector('img');
    img.style.transform=motionStyle(s,t);
    img.style.objectPosition=s.objectPosition||'50% 50%';
  }
  function preloadNext(i){
    const next=i+1;
    if(next>=STORYBOARD.length||next===preloadedIndex)return;
    preloadedIndex=next;
    const preloader=new Image();
    preloader.decoding='async';
    preloader.src=STORYBOARD[next].image;
  }
  function beginLoad(i,s){
    const target=1-active,token=++loadToken;
    pending={index:i,layerIndex:target,token};
    const img=layers[target].querySelector('img');
    let completed=false;
    const activate=()=>{
      if(completed)return;
      completed=true;
      if(!pending||pending.token!==token||currentScene!==i)return;
      const now=audio.currentTime||0;
      if(sceneIndexAt(now)!==i){pending=null;return;}
      applyMotion(target,s,now);
      layers[target].classList.add('active');
      layers[active].classList.remove('active');
      active=target;visibleScene=i;pending=null;
      const fallback=document.getElementById('fallback');
      fallback.hidden=true;fallback.style.display='none';
    };
    img.onload=activate;
    img.onerror=()=>{
      if(!pending||pending.token!==token||currentScene!==i)return;
      pending=null;
      status.textContent=`圖片 ${s.id} 載入失敗；請確認 images 資料夾完整。`;
      const fallback=document.getElementById('fallback');
      fallback.hidden=false;fallback.style.display='grid';fallback.textContent=`${s.id} 圖片載入失敗`;
    };
    img.alt=`${s.id}，${s.chapter}，正式分鏡插圖`;
    img.style.transform=motionStyle(s,audio.currentTime||0);
    img.style.objectPosition=s.objectPosition||'50% 50%';
    if(img.src!==new URL(s.image,document.baseURI).href)img.src=s.image;
    if(img.complete&&img.naturalWidth>0)activate();
  }
  function showScene(i,t=audio.currentTime||0){
    if(i<0||i>=STORYBOARD.length)return;
    const s=STORYBOARD[i];
    if(i!==currentScene){
      currentScene=i;
      if(visibleScene===i){
        loadToken++;pending=null;
        applyMotion(active,s,t);
      }else beginLoad(i,s);
    }
    if(visibleScene===i)applyMotion(active,s,t);
    else if(pending?.index===i)applyMotion(pending.layerIndex,s,t);
    preloadNext(i);
    const chapter=CHAPTERS.find(c=>c.id===s.chapterId);
    if(chapter){
      corner.textContent=chapter.title;
      center.textContent=chapter.title;
      center.classList.toggle('show',t>=chapter.start&&t<chapter.start+1.5);
    }
  }
  function syncNavigation(t,sceneIndex){
    const chapterIndex=chapterIndexAt(t);
    scenePrev.disabled=sceneIndex<=0;
    sceneNext.disabled=sceneIndex>=STORYBOARD.length-1;
    chapterPrev.disabled=chapterIndex<=0;
    chapterNext.disabled=chapterIndex>=CHAPTERS.length-1;
  }
  function refreshMotionButton(){
    const reduced=reducedMotion.matches;
    motionButton.textContent=reduced?'運鏡停用':motionEnabled?'運鏡開':'運鏡關';
    motionButton.setAttribute('aria-pressed',String(motionEnabled&&!reduced));
    motionButton.title=reduced?'系統已啟用減少動態；運鏡目前停用':'切換分鏡運鏡效果';
  }
  function stopMotionLoop(){if(raf){cancelAnimationFrame(raf);raf=0;}}
  function motionFrame(){
    raf=0;
    if(audio.paused||audio.ended||document.hidden||!motionEnabled||reducedMotion.matches)return;
    const t=audio.currentTime||0;
    showScene(sceneIndexAt(t),t);
    raf=requestAnimationFrame(motionFrame);
  }
  function startMotionLoop(){
    if(!audio.paused&&!audio.ended&&!document.hidden&&motionEnabled&&!reducedMotion.matches&&!raf)raf=requestAnimationFrame(motionFrame);
  }
  function update(){
    if(!motionEnabled||reducedMotion.matches){
      for(const img of [a,b])img.style.transform='translate3d(0%,0%,0) scale(1)';
    }
    const t=audio.currentTime||0;
    timeline.value=t;
    current.textContent=fmt(t);
    const i=sceneIndexAt(t);
    showScene(i,t);
    syncNavigation(t,i);
    const cue=SUBTITLES.find(c=>t>=c.start&&t<c.end);
    sub.textContent=document.getElementById('subToggle').checked&&cue?cue.text:'';
  }
  function seekTo(t){
    const end=Number.isFinite(audio.duration)?audio.duration:STORYBOARD.at(-1).end;
    audio.currentTime=Math.max(0,Math.min(end,t));
    update();startMotionLoop();
  }
  playButton.onclick=()=>audio.paused?audio.play().catch(()=>status.textContent='請再次點擊播放；瀏覽器尚未允許音訊播放。'):audio.pause();
  audio.onplay=()=>{playButton.textContent='❚❚ 暫停';status.textContent='播放中，畫面、章節與字幕依音訊時間同步。';update();startMotionLoop();};
  audio.onpause=()=>{playButton.textContent='▶ 播放';stopMotionLoop();update();};
  audio.ontimeupdate=()=>{update();startMotionLoop();};
  audio.onseeked=()=>{update();startMotionLoop();};
  audio.onratechange=startMotionLoop;
  audio.onloadedmetadata=()=>{timeline.max=audio.duration;total.textContent=fmt(audio.duration);status.textContent='音訊已載入。點擊播放開始。';update();};
  audio.onerror=()=>status.textContent='音訊載入失敗；請確認 audio/narration.mp3 存在。';
  audio.onended=()=>{stopMotionLoop();update();status.textContent='播放完成。'};
  timeline.oninput=()=>seekTo(Number(timeline.value));
  document.getElementById('restart').onclick=()=>{seekTo(0);audio.play().catch(()=>{});};
  scenePrev.onclick=()=>{const i=sceneIndexAt(audio.currentTime);if(i>0)seekTo(STORYBOARD[i-1].start);};
  sceneNext.onclick=()=>{const i=sceneIndexAt(audio.currentTime);if(i<STORYBOARD.length-1)seekTo(STORYBOARD[i+1].start);};
  chapterPrev.onclick=()=>{const i=chapterIndexAt(audio.currentTime);if(i>0)seekTo(CHAPTERS[i-1].start);};
  chapterNext.onclick=()=>{const i=chapterIndexAt(audio.currentTime);if(i<CHAPTERS.length-1)seekTo(CHAPTERS[i+1].start);};
  document.getElementById('volume').oninput=e=>audio.volume=Number(e.target.value);
  document.getElementById('mute').onclick=()=>{audio.muted=!audio.muted;document.getElementById('mute').textContent=audio.muted?'取消靜音':'靜音';};
  document.getElementById('subToggle').onchange=update;
  motionButton.onclick=()=>{motionEnabled=!motionEnabled;refreshMotionButton();update();if(motionEnabled)startMotionLoop();else stopMotionLoop();};
  const list=document.getElementById('chapters');
  CHAPTERS.forEach(c=>{
    const x=document.createElement('button');
    x.textContent=`${c.id}｜${c.title}`;
    x.onclick=()=>seekTo(c.start);
    list.appendChild(x);
  });
  document.addEventListener('keydown',e=>{
    if(['INPUT','TEXTAREA','SELECT','BUTTON'].includes(document.activeElement.tagName))return;
    if(e.code==='Space'){e.preventDefault();audio.paused?audio.play().catch(()=>{}):audio.pause();}
    else if(e.code==='ArrowLeft')seekTo(Math.max(0,audio.currentTime-5));
    else if(e.code==='ArrowRight')seekTo(Math.min(audio.duration||0,audio.currentTime+5));
  });
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden)stopMotionLoop();
    else{update();startMotionLoop();}
  });
  const motionChange=()=>{refreshMotionButton();update();if(motionEnabled&&!reducedMotion.matches)startMotionLoop();else stopMotionLoop();};
  if(reducedMotion.addEventListener)reducedMotion.addEventListener('change',motionChange);
  else if(reducedMotion.addListener)reducedMotion.addListener(motionChange);
  refreshMotionButton();
  update();
})();
