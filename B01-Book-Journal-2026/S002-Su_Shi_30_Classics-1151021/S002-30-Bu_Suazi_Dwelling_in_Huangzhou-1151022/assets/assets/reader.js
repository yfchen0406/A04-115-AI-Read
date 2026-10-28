(() => {
  const T=window.TIMELINE, audio=document.querySelector('#audio'), seek=document.querySelector('#seek');
  const imgs=[document.querySelector('#scene-a'),document.querySelector('#scene-b')];
  const motionLayers=[document.querySelector('#motion-a'),document.querySelector('#motion-b')];
  const motionMode=document.body.dataset.motionMode==='true'&&motionLayers.every(Boolean);
  const poemOverlay=document.querySelector('#poem-overlay');
  const reducedMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches||false;
  const caption=document.querySelector('#caption'), intro=document.querySelector('#chapter-title'), corner=document.querySelector('#chapter-corner');
  const current=document.querySelector('#current-time'), total=document.querySelector('#total-time'), status=document.querySelector('#playback-status');
  const error=document.querySelector('#playback-error'), splash=document.querySelector('#cover-start'), debug=document.querySelector('#debug-grid');
  const poem=['羅浮山下四時春','盧橘楊梅次第新','日啖荔枝三百顆','不辭長作嶺南人'];
  const clamp=n=>Math.max(0,Math.min(1,n));
  const ease=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;
  const fmt=n=>{const s=Math.max(0,Math.floor(n||0));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')};
  let activeChapter=-1,activeScene=-1,scrubbing=false,resumeAfterSeek=false,debugSecond=-1,lastVolume=1;
  const motion=id=>['push','pull','up','down','left','right'][(Number(id)||0)%6];
  const interpolate=(a,b,p)=>a+(b-a)*p;
  const fitCaption=text=>{const width=document.querySelector('#stage').clientWidth,available=width*.88;caption.style.fontSize=Math.max(18,Math.min(34,available/(Math.max(1,[...text].length)*1.04)))+'px'};
  function renderHighlighted(text){
    caption.replaceChildren();const ranges=[];
    for(const phrase of poem){let at=0;while((at=text.indexOf(phrase,at))!==-1){ranges.push([at,at+phrase.length]);at+=phrase.length}}
    ranges.sort((a,b)=>a[0]-b[0]);let cursor=0;
    for(const [start,end] of ranges){if(start<cursor)continue;if(start>cursor)caption.append(document.createTextNode(text.slice(cursor,start)));const mark=document.createElement('span');mark.className='poem-highlight';mark.textContent=text.slice(start,end);caption.append(mark);cursor=end}
    if(cursor<text.length)caption.append(document.createTextNode(text.slice(cursor)));
    if(!ranges.length)caption.textContent=text;
    fitCaption(text);
  }
  function setImage(el,scene,time,opacity,z){
    if(el.dataset.scene!==scene.id){el.dataset.scene=scene.id;el.src='./assets/images/'+scene.image;el.alt=`IMG${scene.id} 正式分鏡插圖`}
    const p=ease(clamp((time-scene.startMs)/Math.max(1,scene.endMs-scene.startMs)));
    let x,y,scale,layerZ;
    if(motionMode){
      const shot=window.MOTION_EFFECTS?.[scene.id]||{from:[0,0,1.03],to:[0,0,1.05]};
      x=reducedMotion?0:interpolate(shot.from[0],shot.to[0],p);
      y=reducedMotion?0:interpolate(shot.from[1],shot.to[1],p);
      scale=reducedMotion?1:interpolate(shot.from[2],shot.to[2],p);
      layerZ=z*2+1;
    }else{
      const m=motion(scene.id);
      scale=m==='push'?1+.05*p:m==='pull'?1.05-.05*p:1.045;
      x=m==='left'?1.2-2.4*p:m==='right'?-1.2+2.4*p:0;
      y=m==='up'?1.2-2.4*p:m==='down'?-1.2+2.4*p:0;
      layerZ=z;
    }
    Object.assign(el.style,{position:'absolute',inset:'0',width:'100%',height:'100%',objectFit:'cover',opacity:String(opacity),zIndex:String(layerZ),transform:`translate(${x}%,${y}%) scale(${scale})`,transformOrigin:'center'});
  }
  function setMotionLayer(el,scene,time,opacity,z){
    if(!motionMode||!el)return;
    const shot=window.MOTION_EFFECTS?.[scene.id];
    if(!shot||opacity<=0){el.style.opacity='0';el.dataset.effect='';return}
    const p=clamp((time-scene.startMs)/Math.max(1,scene.endMs-scene.startMs));
    const pulse=reducedMotion?1:.78+.22*Math.sin(p*Math.PI*2);
    el.dataset.effect=shot.effect;
    el.style.setProperty('--focus-x',`${shot.focus?.[0]??50}%`);
    el.style.setProperty('--focus-y',`${shot.focus?.[1]??50}%`);
    el.style.setProperty('--effect-progress',String(p));
    el.style.opacity=String(opacity*shot.strength*pulse);
    el.style.zIndex=String(z*2+2);
  }
  function renderPoemOverlay(ms){
    if(!motionMode||!poemOverlay)return;
    const cue=window.POEM_IMAGE_CUES?.find(item=>ms>=item.startMs&&ms<item.endMs);
    if(!cue){poemOverlay.hidden=true;poemOverlay.textContent='';return}
    if(poemOverlay.dataset.cue!==`${cue.sceneId}-${cue.startMs}`){
      poemOverlay.dataset.cue=`${cue.sceneId}-${cue.startMs}`;
      poemOverlay.textContent=cue.text;
      poemOverlay.dataset.position=cue.position;
    }
    poemOverlay.hidden=false;
  }
  function updateDebug(scene,chapter,subtitle,ms){
    if(document.querySelector('#sync-debug').hidden||Math.floor(ms/500)===debugSecond)return;
    debugSecond=Math.floor(ms/500);
    const fields=[['音訊時間',fmt(ms/1000)],['目前鏡頭','IMG'+scene.id],['目前章節',chapter.name],['目前字幕',subtitle?subtitle.text:'（目前無字幕）']];
    debug.replaceChildren();for(const [label,value] of fields){const box=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=value;box.append(dt,dd);debug.append(box)}
  }
  function render(){
    const ms=audio.currentTime*1000;
    if(!scrubbing){
      let i=T.scenes.findIndex(s=>ms>=s.startMs&&ms<s.endMs);if(i<0)i=T.scenes.length-1;
      const scene=T.scenes[i],next=T.scenes[i+1],baseSlot=i%2;
      if(i!==activeScene){activeScene=i;document.querySelector('#previous-scene').disabled=i===0;document.querySelector('#next-scene').disabled=i===T.scenes.length-1;document.querySelector('#scene-status').textContent='第 '+scene.id+' 鏡'}
      const transition=next?(scene.chapter===next.chapter?650:900):0;
      const mix=next?clamp((ms-(scene.endMs-transition))/transition):0;
      setImage(imgs[baseSlot],scene,ms,1-mix,1);
      setMotionLayer(motionLayers[baseSlot],scene,ms,1-mix,1);
      if(next&&mix>0){setImage(imgs[(i+1)%2],next,ms,mix,2);setMotionLayer(motionLayers[(i+1)%2],next,ms,mix,2)}else{imgs[(i+1)%2].style.opacity='0';if(motionLayers[(i+1)%2])motionLayers[(i+1)%2].style.opacity='0'}
      let chapterIndex=T.chapters.findIndex(ch=>ms>=ch.startMs&&ms<ch.endMs);if(chapterIndex<0)chapterIndex=T.chapters.length-1;
      const chapter=T.chapters[chapterIndex],elapsed=ms-chapter.startMs;
      document.querySelector('#previous-chapter').disabled=chapterIndex===0;document.querySelector('#next-chapter').disabled=chapterIndex===T.chapters.length-1;
      const center=elapsed<0||elapsed>=2700?0:elapsed<400?elapsed/400:elapsed<2200?1:(2700-elapsed)/500;
      intro.textContent=chapter.name;intro.style.opacity=String(center);
      corner.textContent=chapter.name;corner.style.opacity=String(elapsed<2400?0:clamp((elapsed-2400)/300));
      if(chapterIndex!==activeChapter){activeChapter=chapterIndex;document.querySelectorAll('.chapter-button').forEach((b,j)=>{const selected=j===chapterIndex;b.classList.toggle('active',selected);if(selected)b.setAttribute('aria-current','location');else b.removeAttribute('aria-current')})}
      const subtitle=T.subtitles.find(cue=>ms>=cue.startMs&&ms<cue.endMs);
      if(subtitle){const text=subtitle.text.replace(/\n/g,' ');if(caption.dataset.text!==text){caption.dataset.text=text;renderHighlighted(text)}caption.hidden=false}else{caption.hidden=true;caption.dataset.text=''}
      renderPoemOverlay(ms);
      updateDebug(scene,chapter,subtitle,ms);seek.value=audio.currentTime;current.textContent=fmt(audio.currentTime);
    }
    if(!audio.paused)requestAnimationFrame(render);
  }
  function seekCommit(){if(!scrubbing)return;const value=Number(seek.value);scrubbing=false;audio.currentTime=value;if(resumeAfterSeek)audio.play().catch(showError);else audio.pause();render();}
  function showError(e){error.hidden=false;error.textContent='無法播放旁白：'+(e?.message||'請確認音檔可讀取。')}
  function startPlayback(){if(audio.ended)audio.currentTime=0;audio.play().catch(showError)}
  function jumpTo(milliseconds){audio.currentTime=milliseconds/1000;startPlayback()}
  seek.addEventListener('pointerdown',()=>{scrubbing=true;resumeAfterSeek=!audio.paused});
  seek.addEventListener('input',()=>{current.textContent=fmt(Number(seek.value))});
  seek.addEventListener('pointerup',seekCommit);seek.addEventListener('pointercancel',seekCommit);
  seek.addEventListener('change',()=>{if(scrubbing)seekCommit();else{const wasPlaying=!audio.paused;audio.currentTime=Number(seek.value);if(wasPlaying)audio.play().catch(showError);render()}});
  document.querySelector('#play').addEventListener('click',()=>audio.paused?startPlayback():audio.pause());
  splash.addEventListener('click',startPlayback);
  audio.addEventListener('play',()=>{splash.hidden=true;status.textContent='旁白播放中';document.querySelector('#play').textContent='暫停';document.querySelector('#play').setAttribute('aria-label','暫停');requestAnimationFrame(render)});
  audio.addEventListener('pause',()=>{status.textContent=audio.ended?'播放完成':audio.currentTime?'已暫停':'尚未播放';document.querySelector('#play').textContent=audio.ended?'重新播放':'播放';document.querySelector('#play').setAttribute('aria-label',audio.ended?'重新播放':'播放');render()});
  audio.addEventListener('loadedmetadata',()=>{seek.max=audio.duration;total.textContent=fmt(audio.duration);document.querySelector('#duration-label').textContent=fmt(audio.duration)});
  window.addEventListener('resize',()=>{if(caption.dataset.text)fitCaption(caption.dataset.text)});
  audio.addEventListener('error',()=>showError(new Error('無法載入旁白；請確認 assets/audio/narration.mp3。')));
  const volume=document.querySelector('#volume'),mute=document.querySelector('#mute');
  function updateMute(){const muted=audio.muted||audio.volume===0;mute.textContent=muted?'取消靜音':'靜音';volume.value=muted?'0':String(audio.volume)}
  volume.addEventListener('input',e=>{audio.muted=false;audio.volume=Number(e.target.value);if(audio.volume>0)lastVolume=audio.volume;updateMute()});
  mute.addEventListener('click',()=>{if(audio.muted||audio.volume===0){audio.muted=false;audio.volume=lastVolume||1}else{lastVolume=audio.volume;audio.volume=0}updateMute()});
  document.querySelector('#previous-scene').addEventListener('click',()=>{if(activeScene>0)jumpTo(T.scenes[activeScene-1].startMs)});
  document.querySelector('#next-scene').addEventListener('click',()=>{if(activeScene<T.scenes.length-1)jumpTo(T.scenes[activeScene+1].startMs)});
  document.querySelector('#previous-chapter').addEventListener('click',()=>{if(activeChapter>0)jumpTo(T.chapters[activeChapter-1].startMs)});
  document.querySelector('#next-chapter').addEventListener('click',()=>{if(activeChapter<T.chapters.length-1)jumpTo(T.chapters[activeChapter+1].startMs)});
  document.querySelector('#restart').addEventListener('click',()=>jumpTo(0));
  document.querySelector('#fullscreen').addEventListener('click',()=>document.querySelector('#reader-shell').requestFullscreen?.());
  document.querySelector('#sync-debug-toggle').addEventListener('click',e=>{const box=document.querySelector('#sync-debug');box.hidden=!box.hidden;e.currentTarget.setAttribute('aria-expanded',String(!box.hidden));e.currentTarget.textContent=box.hidden?'查看同步資訊':'收合同步資訊';if(!box.hidden){debugSecond=-1;render()}});
  document.querySelector('#cover-meta').textContent=`${T.scenes.length} 個分鏡 · ${T.chapters.length} 個章節 · 原速旁白`;
  T.chapters.forEach((chapter,index)=>{const button=document.createElement('button');button.type='button';button.className='chapter-button';button.innerHTML=`<span class="chapter-number">${String(index+1).padStart(2,'0')}</span><span class="chapter-name"></span><small>${chapter.sceneIds.length} 鏡</small>`;button.querySelector('.chapter-name').textContent=chapter.name;button.setAttribute('aria-label',`${chapter.name}，從 ${fmt(chapter.startMs/1000)} 開始`);button.addEventListener('click',()=>{scrubbing=false;jumpTo(chapter.startMs)});document.querySelector('#chapter-list').append(button)});
  render();
})();
