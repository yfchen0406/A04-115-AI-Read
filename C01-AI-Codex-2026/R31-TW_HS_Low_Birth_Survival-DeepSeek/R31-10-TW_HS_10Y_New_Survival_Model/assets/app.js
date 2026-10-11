(()=>{'use strict';
const settings=window.EPISODE_SETTINGS||{};
const withSubtitles=document.getElementById('with-subtitles'),withoutSubtitles=document.getElementById('without-subtitles');
if(withSubtitles&&settings.youtubeWithSubtitles)withSubtitles.href=settings.youtubeWithSubtitles;
if(withoutSubtitles&&settings.youtubeWithoutSubtitles)withoutSubtitles.href=settings.youtubeWithoutSubtitles;
const E=document.getElementById('audio');if(!E)return;
const D=window.TIMELINE_DATA,$=id=>document.getElementById(id),seek=$('seek'),caption=$('caption'),img=$('scene-image'),title=$('chapter-title'),toast=$('chapter-toast'),list=$('chapter-list'),stage=document.querySelector('.stage'),stageChapter=$('stage-chapter'),volume=$('volume'),fullscreen=$('fullscreen');
let dragging=false,resumeAfterDrag=false,lastScene=null,lastChapter=null,requestId=0,seekBusy=false,requestedResume=null;
const fmt=ms=>{ms=Math.max(0,Math.round(ms));const h=Math.floor(ms/3600000),m=Math.floor(ms%3600000/60000),s=Math.floor(ms%60000/1000),x=ms%1000;return `${h?String(h).padStart(2,'0')+':':''}${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.${String(x).padStart(3,'0')}`};
const fmtShort=ms=>`${Math.floor(ms/60000)}:${String(Math.floor(ms%60000/1000)).padStart(2,'0')}`;
const raf=()=>new Promise(resolve=>requestAnimationFrame(()=>resolve()));
function sceneAt(ms){return D.scenes.find(x=>x.startMs<=ms&&ms<x.endMs)||D.scenes.at(-1)}
function chapterAt(ms){return D.chapters.find(x=>x.startMs<=ms&&ms<x.endMs)||D.chapters.at(-1)}
function render(ms,force=false){
 const scene=sceneAt(ms),chapter=chapterAt(ms),q=D.subtitles.find(x=>x.startMs<=ms&&ms<x.endMs);
 if(scene&&(force||scene.id!==lastScene)){img.classList.add('fade');setTimeout(()=>{img.src='./images/'+scene.id+'.webp';img.alt=`分鏡 ${scene.id} 插圖`;img.dataset.motion=String(Number(scene.id)%6);img.style.animationDuration=Math.max(1,scene.durationMs/1000)+'s';img.classList.remove('fade')},120);lastScene=scene.id}
 if(chapter&&(force||chapter.title!==lastChapter)){const chapterIndex=D.chapters.indexOf(chapter)+1;title.textContent=`第 ${String(chapterIndex).padStart(2,'0')} 章｜${chapter.title}`;stageChapter.textContent=`${String(chapterIndex).padStart(2,'0')}｜${chapter.title}`;toast.textContent=chapter.title;toast.classList.remove('show');void toast.offsetWidth;toast.classList.add('show');lastChapter=chapter.title;for(const b of list.children){const active=b.dataset.title===chapter.title;b.classList.toggle('active',active);if(active)b.setAttribute('aria-current','location');else b.removeAttribute('aria-current')}}
 caption.textContent=q?q.text:'';caption.dataset.cueId=q?String(q.id):'';caption.dataset.cueIndex=q?String(q.index):'';
 if(!dragging){seek.value=String(Math.min(ms,D.meta.durationMs));$('elapsed').textContent=fmt(ms)}
}
function waitForSeeked(target,token){return new Promise((resolve,reject)=>{
 let done=false,timer;const finish=(ok,error)=>{if(done)return;done=true;clearTimeout(timer);E.removeEventListener('seeked',onSeeked);E.removeEventListener('error',onError);ok?resolve():reject(error||new Error('音訊定位未完成'))};
 const onSeeked=()=>finish(true),onError=()=>finish(false,new Error('音訊載入或定位失敗'));
 E.addEventListener('seeked',onSeeked);E.addEventListener('error',onError);timer=setTimeout(()=>finish(false,new Error('等待音訊定位逾時')),2500);
 if(token!==requestId){finish(false,new Error('定位已被較新的章節選擇取代'));return}
 try{E.currentTime=target/1000}catch(err){finish(false,err)}
 })}
async function seekTo(ms,{resume=!E.paused&&!E.ended,chapter=null}={}){
 const token=++requestId,target=Math.max(0,Math.min(Math.round(ms),D.meta.audioDurationMs));requestedResume=!!resume;
 E.pause();seekBusy=true;const playButton=$('play');playButton.disabled=true;
 try{
  if(E.readyState<1)await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(new Error('音訊中繼資料載入逾時')),4000);E.addEventListener('loadedmetadata',()=>{clearTimeout(timer);resolve()},{once:true});E.addEventListener('error',()=>{clearTimeout(timer);reject(new Error('音訊載入失敗'))},{once:true})});
  for(let attempt=0;attempt<3;attempt++){
   if(token!==requestId)return;
   if(Math.abs(E.currentTime*1000-target)>0.25)await waitForSeeked(target,token);
   await raf();await raf();
   if(token!==requestId)return;
   if(Math.abs(E.currentTime*1000-target)<=25)break;
   if(attempt===2)throw new Error('音訊定位誤差超過 25 毫秒');
  }
  render(Math.round(E.currentTime*1000),true);
  const cue=D.subtitles.find(x=>x.startMs<=target&&target<x.endMs);
  if(chapter&&(!cue||cue.id!==chapter.firstSubtitleCueId))throw new Error('章節字幕 cue 與索引設定不一致');
  if(resume)await E.play();
 }catch(err){if(token===requestId)$('timeline-status').textContent=err.message}
 finally{if(token===requestId){seekBusy=false;requestedResume=null;playButton.disabled=false}}
}
for(const [i,ch] of D.chapters.entries()){
 const b=document.createElement('button');b.type='button';b.className='chapter-button';b.dataset.title=ch.title;b.setAttribute('aria-label',`${i+1}. ${ch.title}`);
 const num=document.createElement('span');num.className='chapter-number';num.textContent=String(i+1).padStart(2,'0');
 const name=document.createElement('span');name.className='chapter-name';name.textContent=ch.title;const time=document.createElement('span');time.className='chapter-time';time.textContent=fmtShort(ch.startMs);b.append(num,name,time);
 b.addEventListener('click',()=>{const wasPlaying=seekBusy?requestedResume:!E.paused&&!E.ended;seekTo(ch.firstSubtitleStartMs,{resume:!!wasPlaying,chapter:ch})});list.appendChild(b)
}
$('duration').textContent=fmt(D.meta.durationMs);$('play').addEventListener('click',()=>{if(seekBusy)return;E.paused?E.play():E.pause()});$('restart').addEventListener('click',()=>seekTo(0,{resume:true}));E.volume=Number(volume.value);volume.addEventListener('input',()=>{E.volume=Number(volume.value)});fullscreen.addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await stage.requestFullscreen()}catch{$('timeline-status').textContent='此瀏覽器不支援全螢幕播放'}});document.addEventListener?.('fullscreenchange',()=>{fullscreen.textContent=document.fullscreenElement?'退出全螢幕':'全螢幕'});
E.addEventListener('play',()=>$('play').textContent='暫停');E.addEventListener('pause',()=>$('play').textContent='播放');E.addEventListener('timeupdate',()=>{if(!dragging)render(Math.round(E.currentTime*1000))});
seek.addEventListener('pointerdown',()=>{dragging=true;resumeAfterDrag=!E.paused&&!E.ended});seek.addEventListener('input',()=>{dragging=true;$('elapsed').textContent=fmt(Number(seek.value))});
const commit=()=>{if(!dragging)return;const v=Number(seek.value),resume=resumeAfterDrag;dragging=false;seekTo(v,{resume})};seek.addEventListener('change',commit);seek.addEventListener('pointerup',commit);seek.addEventListener('pointercancel',commit);
$('toggle-index').addEventListener('click',()=>{const collapsed=list.classList.toggle('collapsed');$('toggle-index').textContent=collapsed?'展開章節':'收合章節';$('toggle-index').setAttribute('aria-expanded',String(!collapsed))});
render(Math.round(E.currentTime*1000),true)
})();
