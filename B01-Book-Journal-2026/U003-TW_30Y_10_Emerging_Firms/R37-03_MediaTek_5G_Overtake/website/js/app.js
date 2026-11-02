(() => {
  const data = window.TIMELINE_DATA;
  const audio = document.getElementById('audio');
  const imgs = [document.getElementById('visualA'), document.getElementById('visualB')];
  const caption = document.getElementById('caption');
  const captionText = document.getElementById('captionText');
  captionText.style.color = '#FFFFFF';
  captionText.style.webkitTextFillColor = '#FFFFFF';
  captionText.style.webkitTextStroke = '0';
  captionText.style.fontFamily = '"DFKai-SB","BiauKai","標楷體","KaiTi","STKaiti",serif';
  captionText.style.fontWeight = '900';
  captionText.style.textShadow = '0 0 5px #fff,0 0 12px #ffffffcc,0 2px 5px #000';
  const seek = document.getElementById('seek');
  const cc = document.getElementById('cc');
  const fallback = document.getElementById('fallback');
  const center = document.getElementById('chapterCenter');
  const corner = document.getElementById('chapterCorner');
  const clock = document.getElementById('clock');
  const scenes = data.scenes, subs = data.subtitles, chapters = data.chapters;
  let currentScene = -1, active = 0, scrubbing = false, frame = 0;
  audio.playbackRate = 1;

  const fmt = value => { const n=Math.max(0,value||0),m=Math.floor(n/60),s=Math.floor(n%60);return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; };
  const find = (items,t,key='startMs') => { let lo=0,hi=items.length-1,ans=0;while(lo<=hi){const mid=(lo+hi)>>1;if(items[mid][key]<=t){ans=mid;lo=mid+1;}else hi=mid-1;}return ans; };
  const sceneAt = t => { if(t<scenes[0].startMs)return -1;let i=find(scenes,t);if(t>=scenes[i].endMs&&i<scenes.length-1)i++;return i; };
  let imageToken=0;
  const stage=document.getElementById('stage');
  function fitCaption(t,sub){captionText.style.transform='translateX(0px)';captionText.style.display='inline-block';caption.style.textAlign='center';caption.style.overflow='hidden';caption.style.fontSize='';if(!captionText.textContent)return;const max=stage.clientWidth*.94;let size=parseFloat(getComputedStyle(caption).fontSize);while(captionText.scrollWidth>max*1.2&&size>16){size-=1;caption.style.fontSize=size+'px';}const overflow=captionText.scrollWidth-max;if(overflow>0&&sub){caption.style.textAlign='left';const p=Math.max(0,Math.min(1,(t*1000-sub.startMs)/Math.max(1,sub.endMs-sub.startMs)));captionText.style.transform=`translateX(${-overflow*p}px)`;}}
  function showScene(i) {
    if(i===currentScene||i<0||i>=scenes.length)return;
    currentScene=i; const s=scenes[i],next=1-active,img=imgs[next],token=++imageToken; fallback.hidden=true;
    img.className='visual';img.style.objectPosition='50% 50%';img.style.transform='none';img.onload=()=>{if(token!==imageToken)return;fallback.hidden=true;img.classList.add('active');imgs[active].classList.remove('active');active=next;};img.onerror=()=>{if(token!==imageToken)return;fallback.hidden=false;};
    img.src=`../${s.image}`;img.alt=`${s.id} 分鏡插畫`;
    document.getElementById('shotLabel').textContent=s.id;
    if(i+1<scenes.length){const pre=new Image();pre.src=`../${scenes[i+1].image}`;}
  }
  function animate(img,s,t) {
    const p=Math.max(0,Math.min(1,(t*1000-s.startMs)/Math.max(1,s.endMs-s.startMs)));
    if(matchMedia('(prefers-reduced-motion: reduce)').matches){img.style.transform='none';return;}
    const x=2-4*p,y=2-4*p;
    switch(s.motion){case'slowZoomIn':img.style.transform=`scale(${1+.08*p})`;break;case'slowZoomOut':img.style.transform=`scale(${1.08-.08*p})`;break;case'panLeft':img.style.transform=`scale(1.08) translateX(${x}%)`;break;case'panRight':img.style.transform=`scale(1.08) translateX(${-x}%)`;break;case'driftUp':img.style.transform=`scale(1.06) translateY(${y}%)`;break;default:img.style.transform=`scale(1.06) translateY(${-y}%)`;}
  }
  function update() {
    const t=audio.currentTime||0,tm=t*1000,si=sceneAt(tm),ci=find(chapters,tm,'startMs'),qi=find(subs,tm,'startMs');
    const scene=si>=0?scenes[si]:null,chapter=chapters[ci],sub=subs[qi];
    if(scene){showScene(si);animate(imgs[active],scene,t);}else{currentScene=-1;imageToken++;imgs.forEach(img=>img.classList.remove('active'));document.getElementById('shotLabel').textContent='—';}
    captionText.textContent=cc.checked&&sub&&tm>=sub.startMs&&tm<sub.endMs?sub.text.replace(/\s+/g,' '):''; fitCaption(t,captionText.textContent?sub:null);
    center.textContent=chapter.title;center.classList.toggle('show',tm>=chapter.startMs&&tm<chapter.startMs+1800);
    corner.textContent=chapter.title;corner.classList.toggle('show',tm>=chapter.startMs+1800);
    document.querySelectorAll('.chapter-button').forEach((b,i)=>b.classList.toggle('current',i===ci));
    document.getElementById('prevScene').disabled=si<=0;
    document.getElementById('nextScene').disabled=si>=scenes.length-1;
    document.getElementById('prevChapter').disabled=ci===0;
    document.getElementById('nextChapter').disabled=ci>=chapters.length-1;
    seek.max=String(audio.duration>0?audio.duration:data.durationMs/1000);if(!scrubbing)seek.value=String(t);
    clock.textContent=`${fmt(t)} / ${fmt(audio.duration>0?audio.duration:data.durationMs/1000)}`;
    document.getElementById('play').textContent=audio.paused?'▶ 播放':'❚❚ 暫停';
  }
  function sync() { update();if(!audio.paused&&!audio.ended){if(!frame)frame=requestAnimationFrame(tick);}else if(frame){cancelAnimationFrame(frame);frame=0;} }
  function tick(){frame=0;update();if(!audio.paused&&!audio.ended)frame=requestAnimationFrame(tick);}
  function jump(t,play=false){audio.currentTime=Math.max(0,Math.min(audio.duration||data.durationMs/1000,t));sync();if(play)audio.play().catch(()=>{});}
  document.getElementById('chapters').innerHTML=chapters.map((c,i)=>`<button class="chapter-button" type="button" data-i="${i}"><span>第 ${c.id} 章</span>${c.title}</button>`).join('');
  document.querySelectorAll('.chapter-button').forEach((b,i)=>b.addEventListener('click',()=>jump(chapters[i].startMs/1000,true)));
  document.getElementById('play').addEventListener('click',()=>audio.paused?audio.play().catch(()=>{}):audio.pause());
  document.getElementById('replay').addEventListener('click',()=>jump(0,true));
  document.getElementById('prevScene').addEventListener('click',()=>{const i=sceneAt((audio.currentTime||0)*1000);jump(scenes[Math.max(0,i-1)].startMs/1000);});
  document.getElementById('nextScene').addEventListener('click',()=>{const i=sceneAt((audio.currentTime||0)*1000);jump(scenes[Math.min(scenes.length-1,i+1)].startMs/1000);});
  document.getElementById('prevChapter').addEventListener('click',()=>jump(chapters[Math.max(0,find(chapters,(audio.currentTime||0)*1000)-1)].startMs/1000));
  document.getElementById('nextChapter').addEventListener('click',()=>jump(chapters[Math.min(chapters.length-1,find(chapters,(audio.currentTime||0)*1000)+1)].startMs/1000));
  const previewClock=document.getElementById('previewClock');
  seek.addEventListener('pointerdown',()=>{scrubbing=true;previewClock.textContent=`預覽 ${fmt(Number(seek.value))}`;});
  seek.addEventListener('input',()=>{scrubbing=true;previewClock.textContent=`預覽 ${fmt(Number(seek.value))}`;});
  function commitSeek(){if(!scrubbing)return;const t=Number(seek.value);scrubbing=false;previewClock.textContent='';jump(t);}
  seek.addEventListener('change',commitSeek);seek.addEventListener('pointerup',commitSeek);seek.addEventListener('keyup',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key))commitSeek();});
  document.getElementById('volume').addEventListener('input',e=>audio.volume=Number(e.target.value));
  document.getElementById('mute').addEventListener('click',e=>{audio.muted=!audio.muted;e.currentTarget.textContent=audio.muted?'取消靜音':'靜音';});
  cc.addEventListener('change',sync);
  ['timeupdate','seeked','play','pause','ended','loadedmetadata','durationchange'].forEach(e=>audio.addEventListener(e,sync));
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)sync();});
  window.addEventListener('resize',fitCaption);
  audio.addEventListener('error',()=>{fallback.hidden=false;fallback.textContent='音訊載入失敗：請確認 audio/narration.mp3 檔案存在。';});
  document.addEventListener('keydown',e=>{if(e.target.matches('input,textarea,select,button,[contenteditable="true"]'))return;if(e.code==='Space'){e.preventDefault();audio.paused?audio.play().catch(()=>{}):audio.pause();}if(e.code==='ArrowRight')jump((audio.currentTime||0)+5);if(e.code==='ArrowLeft')jump((audio.currentTime||0)-5);});
  const intro=new Image();intro.src=`../${scenes[0].image}`;update();
})();
