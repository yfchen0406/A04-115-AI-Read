(() => {
  'use strict';
  const data=window.TIMELINE_DATA;
  const audio=document.getElementById('audio'), imgs=[document.getElementById('visualA'),document.getElementById('visualB')];
  const caption=document.getElementById('caption'),seek=document.getElementById('seek'),cc=document.getElementById('cc');
  const fallback=document.getElementById('fallback'),center=document.getElementById('chapterCenter'),corner=document.getElementById('chapterCorner'),clock=document.getElementById('clock');
  const scenes=data.scenes,subs=data.subtitles,chapters=data.chapters;
  let active=0,currentScene=-1,scrubbing=false,raf=0,lastSeekTarget=null;
  audio.playbackRate=1;
  const fmt=v=>{const n=Math.max(0,v||0),m=Math.floor(n/60),s=Math.floor(n%60);return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;};
  // Return the latest start <= time. This deterministically resolves Excel's documented overlap rows.
  const find=(arr,t,key='start')=>{let lo=0,hi=arr.length-1,ans=0;while(lo<=hi){const mid=(lo+hi)>>1;if(arr[mid][key]<=t){ans=mid;lo=mid+1;}else hi=mid-1;}return ans;};
  const sceneAt=t=>find(scenes,Math.max(0,Math.round(t*1000)),'displayStartMs');
  function showScene(i){if(i===currentScene||i<0||i>=scenes.length)return;currentScene=i;const s=scenes[i],n=1-active,img=imgs[n];fallback.hidden=true;img.className='visual';img.style.objectPosition=s.objectPosition;img.onload=()=>fallback.hidden=true;img.onerror=()=>{fallback.hidden=false;fallback.textContent=`分鏡 ${s.excelId} 圖片未載入，保留中性預留畫面。`;};img.src=s.image;img.alt=`${s.excelId} 分鏡插畫`;img.classList.add('active');imgs[active].classList.remove('active');active=n;document.getElementById('shotLabel').textContent=s.id;if(i+1<scenes.length){const pre=new Image();pre.src=scenes[i+1].image;}}
  function motion(img,s,t){const start=s.displayStartMs/1000,p=Math.max(0,Math.min(1,(t-start)/Math.max(.001,s.end-start)));if(matchMedia('(prefers-reduced-motion: reduce)').matches){img.style.transform='none';return;}const d=2-4*p;switch(s.motion){case'slowZoomIn':img.style.transform=`scale(${1+.045*p})`;break;case'slowZoomOut':img.style.transform=`scale(${1.045-.045*p})`;break;case'panLeft':img.style.transform=`scale(1.045) translateX(${d/2}%)`;break;case'panRight':img.style.transform=`scale(1.045) translateX(${-d/2}%)`;break;case'driftUp':img.style.transform=`scale(1.045) translateY(${d/2}%)`;break;default:img.style.transform=`scale(1.045) translateY(${-d/2}%)`;}}
  function fitCaption(){if(!caption.textContent)return;const stage=document.getElementById('stage'),width=stage.clientWidth*.9,ctx=document.createElement('canvas').getContext('2d');let size=Math.min(32,Math.max(14,stage.clientWidth*.026));ctx.font=`700 ${size}px DFKai-SB, BiauKai, serif`;while(size>14&&ctx.measureText(caption.textContent.replace(/\s*\n\s*/g,' ')).width>width){size-=1;ctx.font=`700 ${size}px DFKai-SB, BiauKai, serif`;}caption.style.fontSize=`${size}px`;}
  function update(){const t=audio.currentTime||0,ms=Math.round(t*1000),si=sceneAt(t),ci=find(chapters,ms,'audioStartMs'),qi=find(subs,ms,'displayStartMs');const s=scenes[si],ch=chapters[ci],sub=subs[qi];showScene(si);motion(imgs[active],s,t);caption.textContent=cc.checked&&sub&&ms>=sub.displayStartMs&&ms<sub.endMs?sub.text.replace(/\s*\n\s*/g,' '):'';fitCaption();const elapsed=ms-ch.audioStartMs;center.textContent=ch.title;center.classList.toggle('show',elapsed>=0&&elapsed<1900);corner.textContent=ch.title;corner.classList.toggle('show',elapsed>=1900);document.querySelectorAll('.chapter-button').forEach((b,i)=>b.classList.toggle('current',i===ci));document.getElementById('prevScene').disabled=si===0;document.getElementById('nextScene').disabled=si===scenes.length-1;document.getElementById('prevChapter').disabled=ci===0;document.getElementById('nextChapter').disabled=ci===chapters.length-1;const dur=audio.duration>0?audio.duration:data.duration;seek.max=String(dur);if(!scrubbing)seek.value=String(t);clock.textContent=`${fmt(t)} / ${fmt(dur)}`;document.getElementById('play').textContent=audio.paused?'▶ 播放':'❚❚ 暫停';}
  function sync(){update();if(!audio.paused&&!audio.ended){if(!raf)raf=requestAnimationFrame(tick);}else if(raf){cancelAnimationFrame(raf);raf=0;}}
  function tick(){raf=0;update();if(!audio.paused&&!audio.ended)raf=requestAnimationFrame(tick);}
  let seekSequence=0;
  const nextFrame=()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
  async function jump(t,resumeAfterSeek=false){
    const wasPlaying=!audio.paused&&!audio.ended;
    const shouldResume=resumeAfterSeek||wasPlaying;
    const sequence=++seekSequence,target=Math.max(0,Math.min(audio.duration||data.duration,t));audio.playbackRate=1;audio.pause();
    try{
      if(Math.abs((audio.currentTime||0)-target)>.015){
        await new Promise((resolve,reject)=>{const timer=setTimeout(()=>{audio.removeEventListener('seeked',onSeeked);reject(new Error('seeked timeout'));},5000);const onSeeked=()=>{clearTimeout(timer);resolve();};audio.addEventListener('seeked',onSeeked,{once:true});audio.currentTime=target;});
      }else audio.currentTime=target;
      if(sequence!==seekSequence)return;
      const error=Math.abs((audio.currentTime||0)-target);
      if(error>.08)throw new Error(`seek error ${error.toFixed(3)}s`);
      await nextFrame();if(sequence!==seekSequence)return;sync();
      if(shouldResume)await audio.play();
    }catch(error){if(sequence!==seekSequence)return;sync();fallback.hidden=false;fallback.textContent=`跳轉位置未能穩定確認（${error.message}），請再試一次。`;}
  }
  // Scene navigation follows the C01 player: seek in place without pausing active audio.
  function jumpScene(t){const target=Math.max(0,Math.min(audio.duration||data.duration,t));audio.playbackRate=1;audio.currentTime=target;sync();}
  document.getElementById('chapters').innerHTML=chapters.map((c,i)=>`<button class="chapter-button" type="button" data-i="${i}"><span>第 ${c.id.slice(2)} 章</span>${c.title.replace(/^\d+｜\s*/,'')}</button>`).join('');
  document.querySelectorAll('.chapter-button').forEach((b,i)=>b.addEventListener('click',()=>jump(chapters[i].audioStart,true)));
  document.getElementById('play').addEventListener('click',()=>audio.paused?audio.play().catch(()=>{}):audio.pause());
  document.getElementById('replay').addEventListener('click',()=>jump(0,true));
  document.getElementById('prevScene').addEventListener('click',()=>jumpScene(scenes[Math.max(0,sceneAt(audio.currentTime||0)-1)].displayStartMs/1000));
  document.getElementById('nextScene').addEventListener('click',()=>jumpScene(scenes[Math.min(scenes.length-1,sceneAt(audio.currentTime||0)+1)].displayStartMs/1000));
  document.getElementById('prevChapter').addEventListener('click',()=>jump(chapters[Math.max(0,find(chapters,Math.round((audio.currentTime||0)*1000),'audioStartMs')-1)].audioStart));
  document.getElementById('nextChapter').addEventListener('click',()=>jump(chapters[Math.min(chapters.length-1,find(chapters,Math.round((audio.currentTime||0)*1000),'audioStartMs')+1)].audioStart));
  seek.addEventListener('pointerdown',()=>{scrubbing=true;lastSeekTarget=null;});
  seek.addEventListener('input',()=>{scrubbing=true;lastSeekTarget=Number(seek.value);clock.textContent=`${fmt(lastSeekTarget)} / ${fmt(audio.duration||data.duration)}`;});
  const commitSeek=()=>{if(!scrubbing)return;scrubbing=false;const target=lastSeekTarget===null?Number(seek.value):lastSeekTarget;lastSeekTarget=null;jump(target,!audio.paused);};
  seek.addEventListener('pointerup',commitSeek);seek.addEventListener('pointercancel',commitSeek);seek.addEventListener('change',commitSeek);seek.addEventListener('blur',commitSeek);
  document.getElementById('volume').addEventListener('input',e=>audio.volume=Number(e.target.value));
  document.getElementById('mute').addEventListener('click',e=>{audio.muted=!audio.muted;e.currentTarget.textContent=audio.muted?'取消靜音':'靜音';});cc.addEventListener('change',sync);
  ['timeupdate','seeked','play','pause','ended','loadedmetadata','durationchange'].forEach(e=>audio.addEventListener(e,sync));
  audio.addEventListener('error',()=>{fallback.hidden=false;fallback.textContent='音訊載入失敗：請確認 audio/narration.mp3 存在。';});
  document.addEventListener('keydown',e=>{if(e.target.matches('input,textarea,select,button,[contenteditable="true"]'))return;if(e.code==='Space'){e.preventDefault();audio.paused?audio.play().catch(()=>{}):audio.pause();}if(e.code==='ArrowRight')jump((audio.currentTime||0)+5);if(e.code==='ArrowLeft')jump((audio.currentTime||0)-5);});
  const first=new Image();first.src=scenes[0].image;window.addEventListener('resize',fitCaption);update();
})();
