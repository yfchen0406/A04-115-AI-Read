(function(){
  const data=window.READING_DATA;
  const version=document.body.dataset.version;
  const audio=document.querySelector('#audio'), image=document.querySelector('#shotImage'), caption=document.querySelector('#caption'), sectionTitle=document.querySelector('#sectionTitle'), cover=document.querySelector('#begin'), begin=document.querySelector('#begin'), seek=document.querySelector('#seek'), clock=document.querySelector('#clock'), label=document.querySelector('#shotLabel'), play=document.querySelector('#play'), nav=document.querySelector('#sectionNav');
  const base=version==='A'?'../assets/A/A':'../assets/B/shot-';
  const ext=version==='A'?'.webp':'-generated-fullbleed.webp';
  const motions=['move-in','move-out','move-up','move-down','move-left','move-right'];
  const fmt=t=>{const m=Math.floor(t/60),s=Math.floor(t%60);return `${m}:${String(s).padStart(2,'0')}`};
  function sectionFor(id){let current=data.sections[0]?.title||'';for(const s of data.sections){if(id>=s.start)current=s.title}return current}
  function shotFor(t){return data.shots.find(s=>t>=s.start&&t<s.end)||data.shots[data.shots.length-1]}
  const captions=(data.captionsByVersion&&data.captionsByVersion[version])||data.captions||[];
  function captionFor(t){return captions.filter(c=>t>=c.start&&t<c.end).map(c=>c.text).join('')}
  function paint(){const t=audio.currentTime||0,s=shotFor(t);if(!s)return;const file=version==='A'?`${base}${String(s.id).padStart(3,'0')}${ext}`:`${base}${String(s.id).padStart(4,'0')}${ext}`;if(image.dataset.id!==String(s.id)){image.dataset.id=s.id;image.src=file;image.className=motions[(s.id*7+3)%motions.length]}caption.textContent=captionFor(t);sectionTitle.textContent=sectionFor(s.id);label.textContent=`畫面 ${s.id}／426｜${s.start.toFixed(1)}–${s.end.toFixed(1)} 秒`;seek.value=t;clock.textContent=fmt(t);nav.querySelectorAll('button').forEach(b=>b.classList.toggle('active',Number(b.dataset.start)<=s.id&&(!b.nextElementSibling||Number(b.nextElementSibling.dataset.start)>s.id)))}
  data.sections.forEach((s,i)=>{const b=document.createElement('button');b.type='button';b.textContent=s.title;b.dataset.start=s.start;b.addEventListener('click',()=>{const wasPlaying=!audio.paused;const shot=data.shots.find(x=>x.id===s.start)||data.shots[0];audio.currentTime=shot.start;paint();if(wasPlaying){audio.play().catch(()=>{});}});nav.appendChild(b)});
  audio.autoplay=false;audio.pause();let raf=0;const syncLoop=()=>{paint();if(!audio.paused&&!audio.ended)raf=requestAnimationFrame(syncLoop)};const startReading=()=>{cover.classList.add('is-hidden');audio.pause();audio.currentTime=0;paint();play.focus()};play.addEventListener('click',()=>{if(!cover.classList.contains('is-hidden'))startReading();if(audio.paused){audio.play().then(()=>{play.textContent='暫停';cancelAnimationFrame(raf);raf=requestAnimationFrame(syncLoop)}).catch(()=>{play.textContent='播放'})}else{audio.pause();cancelAnimationFrame(raf);play.textContent='播放'}});audio.addEventListener('pause',()=>{cancelAnimationFrame(raf);play.textContent='播放';paint()});audio.addEventListener('play',()=>{play.textContent='暫停';cancelAnimationFrame(raf);raf=requestAnimationFrame(syncLoop)});audio.addEventListener('timeupdate',paint);audio.addEventListener('loadedmetadata',()=>{seek.max=audio.duration;paint()});seek.addEventListener('input',()=>{audio.currentTime=Number(seek.value);paint()});begin.addEventListener('click',startReading);begin.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();startReading()}});paint();
})();



