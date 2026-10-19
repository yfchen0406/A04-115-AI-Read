(() => {
  'use strict';
  const t = window.EPISODE_TIMELINE;
  if (!t) { document.body.textContent = '時間軸資料未載入'; return; }
  const poemSubtitleIds = new Set(['SRT001','SRT018','SRT019','SRT020','SRT021','SRT022','SRT031']);
  const $ = id => document.getElementById(id);
  const audio=$('master-audio'),slider=$('seek-slider'),stage=$('stage-wrap');
  const current=$('current-image'),previous=$('previous-image');
  const intro=$('frame-intro'),subtitle=$('frame-subtitle'),chapterLabel=$('frame-chapter');
  const cover=$('cover-start'),playButton=$('play-toggle'),status=$('playback-label');
  const ms=() => Math.max(0,Math.min(t.durationMs,Math.round(audio.currentTime*1000)));
  const clamp=x=>Math.max(0,Math.min(t.durationMs,Math.round(x)));
  const find=(items,time)=>{
    let lo=0,hi=items.length-1;
    while(lo<=hi){let mid=(lo+hi)>>1,item=items[mid];if(time<item.startMs)hi=mid-1;else if(time>=item.endMs)lo=mid+1;else return mid;}
    return Math.max(0,Math.min(items.length-1,hi));
  };
  const chapterIndex=time=>{
    let i=0;for(let k=0;k<t.chapters.length;k++)if(time>=t.chapters[k].startMs)i=k;return i;
  };
  const subtitleAt=time=>{
    const i=find(t.captionEvents,time),s=t.captionEvents[i];
    return s && s.startMs<=time && time<s.endMs?s:null;
  };
  const clock=v=>{let n=Math.floor(v/1000);return `${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;};
  const motion=(name,p)=>{
    const q=Math.max(0,Math.min(1,p));
    const x=name==='pan-right'?-1.5+3*q:name==='pan-left'?1.5-3*q:0;
    const y=name==='pan-up'?1.2-2.4*q:name==='pan-down'?-1.2+2.4*q:0;
    const scale=name==='zoom-in'?1.045+0.045*q:name==='zoom-out'?1.09-0.045*q:1.07;
    return `translate(${x}%,${y}%) scale(${scale})`;
  };
  let shownScene=-1,shownChapter=-1,raf=0,drag=null,settling=false,started=false,skipChangeOnce=false;
  const chapterButtons=[];
  for(const [i,c] of t.chapters.entries()){
    const button=document.createElement('button');button.type='button';button.className='chapter-button';
    button.innerHTML=`<span class="chapter-number">${String(i+1).padStart(2,'0')}</span><span class="chapter-name"></span><small></small>`;
    button.querySelector('.chapter-name').textContent=c.title;
    button.querySelector('small').textContent=c.firstSceneId;
    button.addEventListener('click',()=>seek(c.startMs,true));
    $('chapter-list').append(button);chapterButtons.push(button);
  }
  $('reader-count').textContent=`${t.scenes.length} 鏡 · ${t.chapters.length} 章`;
  $('time-end').textContent=clock(t.durationMs);
  slider.max=String(t.durationMs);
  function fitSubtitle(){
    if(!subtitle.textContent)return;
    const width=stage.getBoundingClientRect().width*.98;
    const canvas=fitSubtitle.canvas||(fitSubtitle.canvas=document.createElement('canvas'));
    const ctx=canvas.getContext('2d');
    const font=Math.max(15,Math.min(36,stage.getBoundingClientRect().width*.027));
    ctx.font=`900 ${font}px DFKai-SB, BiauKai, KaiTi, serif`;
    const measured=ctx.measureText(subtitle.textContent).width;
    subtitle.style.fontSize=`${Math.max(14,Math.min(font,font*width/Math.max(width,measured)))}px`;
  }
  function render(time,freeze=false){
    const pos=clamp(time),idx=find(t.scenes,pos===t.durationMs?pos-1:pos),scene=t.scenes[idx];
    const ci=chapterIndex(pos),ch=t.chapters[ci];
    if(idx!==shownScene){
      current.src=scene.imagePath;
      current.alt=`${scene.id} 分鏡圖片`;
      shownScene=idx;
    }
    const progress=(pos-scene.startMs)/(scene.endMs-scene.startMs);
    current.style.transform=motion(scene.motionType,progress);
    const newChapterAtCut=t.chapters.some(c=>c.startMs===scene.startMs);
    const fade=idx>0&&!newChapterAtCut?Math.max(0,Math.min(1,(pos-scene.startMs)/360)):1;
    current.style.opacity=String(fade);
    if(idx>0 && fade<1){
      const old=t.scenes[idx-1];previous.src=old.imagePath;
      previous.style.opacity=String(1-fade);
      previous.style.transform=motion(old.motionType,1);
    }else{previous.style.opacity='0';previous.removeAttribute('src');}
    if(ci!==shownChapter){
      chapterLabel.textContent=ch.title;
      chapterButtons.forEach((b,k)=>{b.classList.toggle('active',k===ci);if(k===ci)b.setAttribute('aria-current','location');else b.removeAttribute('aria-current');});
      shownChapter=ci;
    }
    const age=pos-ch.startMs;
    if(age>=0&&age<1800){
      intro.style.display='block';intro.textContent=ch.title;
      intro.style.opacity=String(Math.min(1,age/260,(1800-age)/300));
    }else{intro.style.display='none';intro.textContent='';}
    const cue=subtitleAt(pos);
    const text=cue?cue.text:'';
    if(subtitle.textContent!==text){subtitle.textContent=text;fitSubtitle();}
    subtitle.classList.toggle('poem-highlight',Boolean(cue&&poemSubtitleIds.has(cue.subtitleId)));
    if(!drag){slider.value=String(pos);$('time-now').textContent=clock(pos);}
    $('scene-label').textContent=scene.id;
    $('debug-time').textContent=`${scene.id} · ${ch.id} · ${cue?.subtitleId||'無字幕'} · ${pos} ms · 30 FPS 對應第 ${Math.round(pos*30/1000)} 格`;
    playButton.textContent=audio.ended?'重播':audio.paused?'播放':'暫停';
    status.textContent=audio.ended?'播放完成':audio.paused?started?'已暫停':'尚未播放':'旁白播放中';
  }
  function tick(){if(drag||settling)return;render(ms());if(!audio.paused&&!audio.ended)raf=requestAnimationFrame(tick);}
  async function play(){
    try{await audio.play();started=true;cover.hidden=true;cover.style.display='none';cancelAnimationFrame(raf);raf=requestAnimationFrame(tick);}
    catch(e){$('playback-error').hidden=false;$('playback-error').textContent=`無法播放音訊：${e.message}`;}
  }
  function pause(){audio.pause();cancelAnimationFrame(raf);render(ms());}
  function seek(target,resume){
    const goal=clamp(target);cancelAnimationFrame(raf);audio.pause();settling=true;
    const done=()=>{settling=false;render(ms());if(resume)play();};
    if(Math.abs(ms()-goal)<=2){audio.currentTime=goal/1000;done();return;}
    audio.addEventListener('seeked',done,{once:true});
    audio.currentTime=goal/1000;
  }
  function endDrag(){
    if(!drag)return;
    const target=Number(slider.value),resume=drag.wasPlaying;drag=null;
    skipChangeOnce=true;
    seek(target,resume);
  }
  slider.addEventListener('pointerdown',e=>{
    skipChangeOnce=false;
    drag={wasPlaying:!audio.paused};audio.pause();cancelAnimationFrame(raf);
    try{slider.setPointerCapture(e.pointerId);}catch(_e){}
  });
  slider.addEventListener('input',()=>{
    $('time-now').textContent=clock(Number(slider.value));
    if(!drag)seek(Number(slider.value),false);
  });
  slider.addEventListener('pointerup',endDrag);
  slider.addEventListener('pointercancel',endDrag);
  slider.addEventListener('lostpointercapture',endDrag);
  slider.addEventListener('keydown',()=>{skipChangeOnce=false;});
  slider.addEventListener('change',()=>{
    if(skipChangeOnce){skipChangeOnce=false;return;}
    if(!drag)seek(Number(slider.value),false);
  });
  cover.addEventListener('click',()=>{cover.hidden=true;cover.style.display='none';play();});
  playButton.addEventListener('click',()=>audio.paused?audio.ended?seek(0,true):play():pause());
  $('previous-chapter').addEventListener('click',()=>seek(t.chapters[Math.max(0,chapterIndex(ms())-1)].startMs,!audio.paused));
  $('next-chapter').addEventListener('click',()=>seek(t.chapters[Math.min(t.chapters.length-1,chapterIndex(ms())+1)].startMs,!audio.paused));
  $('previous-scene').addEventListener('click',()=>seek(t.scenes[Math.max(0,find(t.scenes,ms())-1)].startMs,!audio.paused));
  $('next-scene').addEventListener('click',()=>seek(t.scenes[Math.min(t.scenes.length-1,find(t.scenes,ms())+1)].startMs,!audio.paused));
  $('mute-toggle').addEventListener('click',()=>{audio.muted=!audio.muted;$('mute-toggle').textContent=audio.muted?'取消靜音':'靜音';});
  $('volume-slider').addEventListener('input',e=>{audio.volume=Number(e.target.value);audio.muted=audio.volume===0;});
  $('fullscreen-toggle').addEventListener('click',()=>document.fullscreenElement?document.exitFullscreen():stage.requestFullscreen());
  $('restart-button').addEventListener('click',()=>seek(0,true));
  $('debug-toggle').addEventListener('click',()=>{const hidden=!$('sync-debug-panel').hidden;$('sync-debug-panel').hidden=hidden;$('debug-toggle').setAttribute('aria-expanded',String(!hidden));});
  audio.addEventListener('timeupdate',()=>{if(!drag&&!settling)render(ms());});
  audio.addEventListener('play',()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(tick);});
  audio.addEventListener('pause',()=>{cancelAnimationFrame(raf);if(!drag&&!settling)render(ms());});
  audio.addEventListener('ended',()=>{cancelAnimationFrame(raf);render(t.durationMs);});
  audio.addEventListener('ratechange',()=>{if(audio.playbackRate!==1)audio.playbackRate=1;});
  audio.addEventListener('error',()=>{$('playback-error').hidden=false;$('playback-error').textContent='音訊檔案載入失敗。請保留 ZIP 原有目錄結構。';});
  window.addEventListener('resize',fitSubtitle);
  window.__episodeQA={snapshot:()=>({timeMs:ms(),sceneId:t.scenes[find(t.scenes,ms())].id,chapterId:t.chapters[chapterIndex(ms())].id,subtitle:subtitle.textContent,sliderMs:Number(slider.value),previousImageVisible:Number(previous.style.opacity)>0,playing:!audio.paused}),seek:(x)=>seek(x,false),renderAt:render};
  render(0);
})();
