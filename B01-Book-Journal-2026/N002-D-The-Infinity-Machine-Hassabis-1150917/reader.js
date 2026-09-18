
(() => {
  const d = window.READER_DATA, cfg = window.READER_CONFIG;
  const audio = document.querySelector('#audio'), img = document.querySelector('#sceneImage');
  const caption = document.querySelector('#subtitle'), chapter = document.querySelector('#stageChapter');
  const seek = document.querySelector('#seek'), status = document.querySelector('#status');
  const play = document.querySelector('#play'), back = document.querySelector('#back'), forward = document.querySelector('#forward');
  const list = document.querySelector('#chapterList');
  let current = 0, seeking = false;
  const fmt = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(Math.floor(s%60)).padStart(2,'0')}`;
  const sceneAt = t => { let i=d.scenes.findIndex(s=>t>=s.start && t<s.end); return i<0 ? (t>=d.scenes.at(-1).start ? d.scenes.length-1 : 0) : i; };
  const render = (i, t = audio.currentTime || d.scenes[i].start) => { current=i; const s=d.scenes[i]; img.src=s.image; chapter.textContent=d.chapters.find(c=>i+1>=c.sceneId&&i+1<c.sceneId+c.count)?.title || ''; const cue=d.captions.find(c=>t>=c.start&&t<c.end)||d.captions[i]; caption.textContent=cue?.text||s.subtitle||''; document.querySelectorAll('.chapter-list button').forEach((b,n)=>b.classList.toggle('active',d.chapters[n].sceneId<=s.id&&s.id<d.chapters[n].sceneId+d.chapters[n].count)); };
  d.chapters.forEach((c,n)=>{const b=document.createElement('button');b.textContent=`${c.title}・${c.count} 鏡`;b.onclick=()=>seekTo(c.start);list.appendChild(b)});
  function seekTo(t){audio.currentTime=Math.max(0,Math.min(t,audio.duration||d.totalDuration));render(sceneAt(t),t);}
  const syncDuration = () => { const duration = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : d.totalDuration; seek.max = duration; render(current, audio.currentTime || 0); };
  audio.addEventListener('loadedmetadata', syncDuration);
  audio.addEventListener('durationchange', syncDuration);
  syncDuration();
  audio.addEventListener('timeupdate',()=>{if(seeking)return;const t=audio.currentTime;seek.value=t;render(sceneAt(t),t);status.textContent=`${cfg.label}・${fmt(t)} / ${fmt(audio.duration||d.totalDuration)}・第 ${current+1} 鏡 / 93`;});
  audio.addEventListener('ended',()=>{play.textContent='重新播放';render(92,d.scenes[92].end)});
  play.onclick=()=>audio.paused?(audio.play(),play.textContent='暫停旁白'):(audio.pause(),play.textContent='播放旁白');
  back.onclick=()=>seekTo(d.scenes[Math.max(0,current-1)].start); forward.onclick=()=>seekTo(d.scenes[Math.min(92,current+1)].start);
  seek.oninput=()=>{seeking=true;seekTo(Number(seek.value));}; seek.onchange=()=>{seeking=false;};
  render(0,0);
})();
