(() => {
  'use strict';
  const data=window.TIMELINE_DATA,audio=document.getElementById('audio');
  const imgs=[document.getElementById('visualA'),document.getElementById('visualB')];
  const caption=document.getElementById('caption'),seek=document.getElementById('seek'),cc=document.getElementById('cc');
  const fallback=document.getElementById('fallback'),center=document.getElementById('chapterCenter'),corner=document.getElementById('chapterCorner');
  const clock=document.getElementById('clock'),scenes=data.scenes,subs=data.subtitles,chapters=data.chapters;
  let current=-1,active=0,dragging=false,raf=0;
  audio.playbackRate=1;
  const sec=ms=>ms/1000;
  const fmt=value=>{const n=Math.max(0,value||0),m=Math.floor(n/60),s=Math.floor(n%60);return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;};
  function lastAt(items,t){let lo=0,hi=items.length-1,ans=0;while(lo<=hi){const mid=(lo+hi)>>1;if(sec(items[mid].startMs)<=t){ans=mid;lo=mid+1;}else hi=mid-1;}return ans;}
  function sceneAt(t){let i=lastAt(scenes,t);if(t>=sec(scenes[i].endMs)&&i<scenes.length-1)i++;return i;}
  function showScene(i){if(i===current)return;current=i;const s=scenes[i],n=1-active,img=imgs[n];fallback.hidden=true;img.onload=()=>{fallback.hidden=true;};img.onerror=()=>{fallback.hidden=false;};img.className='visual';img.style.objectPosition=s.objectPosition||'50% 50%';img.style.transform='';img.src=`../${s.image}`;img.alt=`${s.id} 分鏡插畫：${s.card}`;img.classList.add('active');imgs[active].classList.remove('active');active=n;if(i+1<scenes.length){const pre=new Image();pre.src=`../${scenes[i+1].image}`;}}
  function animate(img,s,t){if(matchMedia('(prefers-reduced-motion: reduce)').matches){img.style.transform='none';return;}const p=Math.max(0,Math.min(1,(t-sec(s.startMs))/Math.max(.001,sec(s.endMs-s.startMs))));const drift=2-4*p;switch(s.motion){case'slowZoomIn':img.style.transform=`scale(${1+.075*p})`;break;case'slowZoomOut':img.style.transform=`scale(${1.075-.075*p})`;break;case'panLeft':img.style.transform=`scale(1.07) translateX(${drift}%)`;break;case'panRight':img.style.transform=`scale(1.07) translateX(${-drift}%)`;break;case'driftUp':img.style.transform=`scale(1.06) translateY(${drift}%)`;break;default:img.style.transform=`scale(1.06) translateY(${-drift}%)`;}}
  function update(){const t=audio.currentTime||0,si=sceneAt(t),ci=lastAt(chapters,t),qi=lastAt(subs,t),scene=scenes[si],chapter=chapters[ci],sub=subs[qi];showScene(si);animate(imgs[active],scene,t);caption.textContent=cc.checked&&sub&&t>=sec(sub.startMs)&&t<sec(sub.endMs)?sub.text:'';center.textContent=chapter.title;center.classList.toggle('show',t>=sec(chapter.startMs)&&t<sec(chapter.startMs)+1.8);corner.textContent=chapter.title;corner.classList.toggle('show',t>=sec(chapter.startMs)+1.8);document.querySelectorAll('.chapter-button').forEach((b,i)=>b.classList.toggle('current',i===ci));document.getElementById('prevScene').disabled=si===0;document.getElementById('nextScene').disabled=si===scenes.length-1;document.getElementById('prevChapter').disabled=ci===0;document.getElementById('nextChapter').disabled=ci===chapters.length-1;seek.max=String(audio.duration>0?audio.duration:data.duration);if(!dragging)seek.value=String(t);clock.textContent=`${fmt(t)} / ${fmt(audio.duration>0?audio.duration:data.duration)}`;document.getElementById('play').textContent=audio.paused?'▶ 播放':'❚❚ 暫停';}
  function tick(){raf=0;update();if(!audio.paused&&!audio.ended)raf=requestAnimationFrame(tick);}
  function sync(){update();if(!audio.paused&&!audio.ended&&!raf)raf=requestAnimationFrame(tick);else if((audio.paused||audio.ended)&&raf){cancelAnimationFrame(raf);raf=0;}}
  function jump(t,play=false){audio.currentTime=Math.max(0,Math.min(audio.duration||data.duration,t));sync();if(play)audio.play().catch(()=>{});}
  document.getElementById('chapters').innerHTML=chapters.map((c,i)=>`<button class="chapter-button" type="button" data-i="${i}"><span>第 ${i+1} 章</span>${c.title}</button>`).join('');
  document.querySelectorAll('.chapter-button').forEach((b,i)=>b.addEventListener('click',()=>jump(sec(chapters[i].startMs),true)));
  document.getElementById('play').addEventListener('click',()=>audio.paused?audio.play().catch(()=>{}):audio.pause());
  document.getElementById('replay').addEventListener('click',()=>jump(0,true));
  document.getElementById('prevScene').addEventListener('click',()=>{const i=sceneAt(audio.currentTime||0);jump(sec(scenes[Math.max(0,i-1)].startMs));});
  document.getElementById('nextScene').addEventListener('click',()=>{const i=sceneAt(audio.currentTime||0);jump(sec(scenes[Math.min(scenes.length-1,i+1)].startMs));});
  document.getElementById('prevChapter').addEventListener('click',()=>jump(sec(chapters[Math.max(0,lastAt(chapters,audio.currentTime||0)-1)].startMs)));
  document.getElementById('nextChapter').addEventListener('click',()=>jump(sec(chapters[Math.min(chapters.length-1,lastAt(chapters,audio.currentTime||0)+1)].startMs)));
  seek.addEventListener('pointerdown',()=>dragging=true);seek.addEventListener('input',()=>{dragging=true;jump(Number(seek.value));});seek.addEventListener('change',()=>{dragging=false;sync();});
  document.getElementById('volume').addEventListener('input',e=>audio.volume=Number(e.target.value));
  document.getElementById('mute').addEventListener('click',e=>{audio.muted=!audio.muted;e.currentTarget.textContent=audio.muted?'取消靜音':'靜音';});
  cc.addEventListener('change',update);
  ['timeupdate','seeked','play','pause','ended','loadedmetadata','durationchange'].forEach(e=>audio.addEventListener(e,sync));
  audio.addEventListener('error',()=>{fallback.hidden=false;fallback.textContent='音訊載入失敗：請確認 audio/narration.mp3 檔案存在。';});
  document.addEventListener('keydown',e=>{if(e.target.matches('input,textarea,select,button,[contenteditable="true"]'))return;if(e.code==='Space'){e.preventDefault();audio.paused?audio.play().catch(()=>{}):audio.pause();}if(e.code==='ArrowRight')jump((audio.currentTime||0)+5);if(e.code==='ArrowLeft')jump((audio.currentTime||0)-5);});
  const intro=new Image();intro.src=`../${scenes[0].image}`;update();
})();
