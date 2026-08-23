const version="v4-strict",timeline="../analysis/V4-timeline.json",captionFile="../analysis/captions.json";
const state={i:0,c:0,playing:false,data:null,captions:null,raf:0};
const $=s=>document.querySelector(s),frame=$("#frame"),caption=$("#caption"),sectionTitle=$("#sectionTitle"),time=$("#time"),play=$("#play"),speed=$("#speed"),voice=$("#voice"),cover=$("#cover"),startButton=$("#start");
function pad(n){return String(n).padStart(3,"0")}
function imageIndexAt(t){const a=state.data.shots;let i=a.findIndex(s=>t>=s.start_seconds&&t<s.end_seconds);return i<0?(t<a[0].start_seconds?0:a.length-1):i}
function captionIndexAt(t){const a=state.captions;let i=a.findIndex(s=>t>=s.start_seconds&&t<s.end_seconds);return i<0?(t<a[0].start_seconds?0:a.length-1):i}
function formatTime(n){const m=Math.floor(n/60),sec=Math.floor(n%60);return String(m).padStart(2,"0")+":"+String(sec).padStart(2,"0")}
function renderFrame(){const s=state.data.shots[state.i];frame.classList.remove("motion-zoom-in","motion-zoom-out","motion-left","motion-right");void frame.offsetWidth;frame.classList.add("motion-"+["zoom-in","zoom-out","left","right"][state.i%4]);frame.style.setProperty("--shot-duration",Math.max(1.5,s.end_seconds-s.start_seconds)+"s");frame.style.animationPlayState="paused";frame.onload=()=>{frame.style.animationPlayState="running"};frame.src="assets/images/"+version+"-"+pad(state.i+1)+".webp";frame.alt=s.shot_id+" "+s.image_description_zh;sectionTitle.textContent=s.section;time.textContent=formatTime(s.start_seconds)+"–"+formatTime(s.end_seconds)}
function renderCaption(){const c=state.captions[state.c];caption.textContent=c?c.text:""}
function render(){renderFrame();renderCaption()}
function sync(){if(!state.data||!state.captions)return;const ni=imageIndexAt(voice.currentTime),nc=captionIndexAt(voice.currentTime);if(ni!==state.i){state.i=ni;renderFrame()}if(nc!==state.c){state.c=nc;renderCaption()}}
function loop(){sync();if(!voice.paused&&!voice.ended)state.raf=requestAnimationFrame(loop);else state.raf=0}
function playVoice(){voice.play().catch(()=>{});play.textContent="暫停";if(!state.raf)state.raf=requestAnimationFrame(loop)}
function stop(){play.textContent="播放";voice.pause();if(state.raf)cancelAnimationFrame(state.raf);state.raf=0}
function begin(){cover.classList.add("hidden");playVoice()}
function step(n){state.i=(state.i+n+state.data.shots.length)%state.data.shots.length;state.c=captionIndexAt(state.data.shots[state.i].start_seconds);render();voice.currentTime=state.data.shots[state.i].start_seconds}
(window.__timelineData&&window.__captionsData?Promise.resolve([window.__timelineData,window.__captionsData]):Promise.all([fetch(timeline).then(r=>r.json()),fetch(captionFile).then(r=>r.json())])).then(([d,c])=>{state.data=d;state.captions=c;state.i=0;state.c=0;render()});
$("#prev").onclick=()=>step(-1);$("#next").onclick=()=>step(1);play.onclick=()=>voice.paused?playVoice():stop();startButton.onclick=begin;speed.onchange=()=>voice.playbackRate=Number(speed.value);voice.addEventListener("timeupdate",sync);voice.addEventListener("play",()=>{if(!state.raf)state.raf=requestAnimationFrame(loop)});voice.addEventListener("pause",()=>{if(state.raf)cancelAnimationFrame(state.raf);state.raf=0});voice.addEventListener("ended",stop);
