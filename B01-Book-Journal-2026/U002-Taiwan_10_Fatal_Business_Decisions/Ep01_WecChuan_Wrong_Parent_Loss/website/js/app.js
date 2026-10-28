(() => {
  const data = window.TIMELINE_DATA;
  const audio = document.getElementById('audio');
  const imgs = [document.getElementById('visualA'), document.getElementById('visualB')];
  const caption = document.getElementById('caption');
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
  const find = (items,t,key='start') => { let lo=0,hi=items.length-1,ans=0;while(lo<=hi){const mid=(lo+hi)>>1;if(items[mid][key]<=t){ans=mid;lo=mid+1;}else hi=mid-1;}return ans; };
  const sceneAt = t => { let i=find(scenes,t);if(t>=scenes[i].end&&i<scenes.length-1)i++;return i; };
  function showScene(i) {
    if(i===currentScene||i<0||i>=scenes.length)return;
    currentScene=i; const s=scenes[i],next=1-active,img=imgs[next]; fallback.hidden=true;
    img.className='visual';img.style.objectPosition=s.objectPosition;img.onload=()=>fallback.hidden=true;img.onerror=()=>fallback.hidden=false;
    img.src=s.image;img.alt=`${s.id} 分鏡插畫；${s.card}`;img.classList.add('active');imgs[active].classList.remove('active');active=next;
    document.getElementById('shotLabel').textContent=s.id;
    if(i+1<scenes.length){const pre=new Image();pre.src=scenes[i+1].image;}
  }
  function animate(img,s,t) {
    const p=Math.max(0,Math.min(1,(t-s.start)/Math.max(.001,s.end-s.start)));
    if(matchMedia('(prefers-reduced-motion: reduce)').matches){img.style.transform='none';return;}
    const x=2-4*p,y=2-4*p;
    switch(s.motion){case'slowZoomIn':img.style.transform=`scale(${1+.08*p})`;break;case'slowZoomOut':img.style.transform=`scale(${1.08-.08*p})`;break;case'panLeft':img.style.transform=`scale(1.08) translateX(${x}%)`;break;case'panRight':img.style.transform=`scale(1.08) translateX(${-x}%)`;break;case'driftUp':img.style.transform=`scale(1.06) translateY(${y}%)`;break;default:img.style.transform=`scale(1.06) translateY(${-y}%)`;}
  }
  function update() {
    const t=audio.currentTime||0,si=sceneAt(t),ci=find(chapters,t),qi=find(subs,t);
    const scene=scenes[si],chapter=chapters[ci],sub=subs[qi];
    showScene(si);animate(imgs[active],scene,t);
    caption.textContent=cc.checked&&sub&&t>=sub.start&&t<sub.end?sub.text:'';
    center.textContent=chapter.title;center.classList.toggle('show',t>=chapter.start&&t<chapter.start+1.8);
    corner.textContent=chapter.title;corner.classList.toggle('show',t>=chapter.start+1.8);
    document.querySelectorAll('.chapter-button').forEach((b,i)=>b.classList.toggle('current',i===ci));
    document.getElementById('prevScene').disabled=si===0;
    document.getElementById('nextScene').disabled=si>=scenes.length-1;
    document.getElementById('prevChapter').disabled=ci===0;
    document.getElementById('nextChapter').disabled=ci>=chapters.length-1;
    seek.max=String(audio.duration>0?audio.duration:data.duration);if(!scrubbing)seek.value=String(t);
    clock.textContent=`${fmt(t)} / ${fmt(audio.duration>0?audio.duration:data.duration)}`;
    document.getElementById('play').textContent=audio.paused?'▶ 播放':'❚❚ 暫停';
  }
  function sync() { update();if(!audio.paused&&!audio.ended){if(!frame)frame=requestAnimationFrame(tick);}else if(frame){cancelAnimationFrame(frame);frame=0;} }
  function tick(){frame=0;update();if(!audio.paused&&!audio.ended)frame=requestAnimationFrame(tick);}
  function jump(t,play=false){audio.currentTime=Math.max(0,Math.min(audio.duration||data.duration,t));sync();if(play)audio.play().catch(()=>{});}
  document.getElementById('chapters').innerHTML=chapters.map((c,i)=>`<button class="chapter-button" type="button" data-i="${i}"><span>第 ${c.id} 章</span>${c.title.slice(4)}</button>`).join('');
  document.querySelectorAll('.chapter-button').forEach((b,i)=>b.addEventListener('click',()=>jump(chapters[i].start,true)));
  document.getElementById('play').addEventListener('click',()=>audio.paused?audio.play().catch(()=>{}):audio.pause());
  document.getElementById('replay').addEventListener('click',()=>jump(0,true));
  document.getElementById('prevScene').addEventListener('click',()=>{const i=sceneAt(audio.currentTime||0);jump(scenes[Math.max(0,i-1)].start);});
  document.getElementById('nextScene').addEventListener('click',()=>{const i=sceneAt(audio.currentTime||0);jump(scenes[Math.min(scenes.length-1,i+1)].start);});
  document.getElementById('prevChapter').addEventListener('click',()=>jump(chapters[Math.max(0,find(chapters,audio.currentTime||0)-1)].start));
  document.getElementById('nextChapter').addEventListener('click',()=>jump(chapters[Math.min(chapters.length-1,find(chapters,audio.currentTime||0)+1)].start));
  seek.addEventListener('pointerdown',()=>scrubbing=true);seek.addEventListener('input',()=>{scrubbing=true;jump(Number(seek.value));});seek.addEventListener('change',()=>{scrubbing=false;sync();});
  document.getElementById('volume').addEventListener('input',e=>audio.volume=Number(e.target.value));
  document.getElementById('mute').addEventListener('click',e=>{audio.muted=!audio.muted;e.currentTarget.textContent=audio.muted?'取消靜音':'靜音';});
  cc.addEventListener('change',sync);
  ['timeupdate','seeked','play','pause','ended','loadedmetadata'].forEach(e=>audio.addEventListener(e,sync));
  audio.addEventListener('error',()=>{fallback.hidden=false;fallback.textContent='音訊載入失敗：請確認 audio/narration.mp3 檔案存在。';});
  document.addEventListener('keydown',e=>{if(e.target.matches('input,textarea,select,button,[contenteditable="true"]'))return;if(e.code==='Space'){e.preventDefault();audio.paused?audio.play().catch(()=>{}):audio.pause();}if(e.code==='ArrowRight')jump((audio.currentTime||0)+5);if(e.code==='ArrowLeft')jump((audio.currentTime||0)-5);});
  const intro=new Image();intro.src=scenes[0].image;update();
})();
