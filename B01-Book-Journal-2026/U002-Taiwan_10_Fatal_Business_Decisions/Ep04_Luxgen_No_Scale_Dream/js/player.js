(()=>{"use strict";
const timeline=window.LUXGEN_TIMELINE;
if(!timeline||!Array.isArray(timeline.scenes)||!Array.isArray(timeline.subtitles))throw new Error("時間軸資料未載入");
const audio=document.getElementById("audio"), images=[...document.querySelectorAll(".visual")], caption=document.getElementById("caption"), stageCover=document.getElementById("stageCover");
const center=document.getElementById("chapterCenter"), corner=document.getElementById("chapterCorner"), seek=document.getElementById("seek");
const clock=document.getElementById("clock"), play=document.getElementById("play"), placeholder=document.getElementById("placeholder");
const placeholderId=document.getElementById("placeholderId"), shotLabel=document.getElementById("shotLabel"), cc=document.getElementById("cc");
const headerCurrent=document.getElementById("headerCurrent"), chaptersEl=document.getElementById("chapters");
const scenes=timeline.scenes, subs=timeline.subtitles, chapters=timeline.chapters;
let activeImage=0,lastScene=-2,lastSub=-2,lastChapter=-2,raf=0,pointerScrub=false,pendingSeek=false,seekPreview=0;
const durationMs=timeline.project.durationMs; audio.playbackRate=1; seek.max=String(durationMs/1000); seek.value="0";
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
function findIndex(arr,t,key){let lo=0,hi=arr.length-1,ans=-1;while(lo<=hi){const mid=(lo+hi)>>1;if(arr[mid][key]<=t){ans=mid;lo=mid+1}else hi=mid-1}return ans}
function activeSceneIndex(t){return findIndex(scenes,t,"startMs")}
function activeSubIndex(t){const i=findIndex(subs,t,"startMs");return i>=0&&t<subs[i].endMs?i:-1}
function activeChapterIndex(t){return findIndex(chapters,t,"chapterStartMs")}
function fmt(ms){ms=Math.max(0,Math.floor(ms));const sec=Math.floor(ms/1000),h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60),s=sec%60;return h?String(h).padStart(2,"0")+":"+String(m).padStart(2,"0")+":"+String(s).padStart(2,"0"):String(m).padStart(2,"0")+":"+String(s).padStart(2,"0")}
function preload(i){if(i<0||i>=scenes.length)return;const im=new Image();im.src=new URL(scenes[i].imagePath,document.baseURI).href}
function setPlaceholder(scene,loading){placeholderId.textContent=scene?scene.sceneId:"";placeholder.lastElementChild.textContent=scene?(loading?"正式圖片載入中":"正式圖片載入失敗，請檢查 images 檔案"):"等待旁白開始";placeholder.hidden=false}
function showScene(i,t){
 if(i<0){if(lastScene!==-1){lastScene=-1;images.forEach(x=>x.classList.remove("active"));placeholder.hidden=true;stageCover.hidden=false;shotLabel.textContent="";}return}
 if(i!==lastScene){
   lastScene=i;const scene=scenes[i],target=i%images.length,img=images[target];stageCover.hidden=true;setPlaceholder(scene,true);if(activeImage!==target)img.classList.remove("active");img.style.transform="scale(1.025)";img.style.objectPosition="50% 50%";
   const commit=()=>{if(lastScene!==i)return;const previous=activeImage;img.classList.add("active");if(previous!==target)images[previous].classList.remove("active");activeImage=target;placeholder.hidden=true;stageCover.hidden=true};
   img.onload=commit;img.onerror=()=>{if(lastScene===i){images.forEach(x=>x.classList.remove("active"));setPlaceholder(scene,false)}};
   img.alt=scene.sceneId+"正式分鏡圖";img.src=new URL(scene.imagePath,document.baseURI).href;if(img.complete&&img.naturalWidth>0)commit();shotLabel.textContent=scene.sceneId;preload(i+1);
 }
 const s=scenes[i],p=clamp((t-s.startMs)/Math.max(1,s.endMs-s.startMs),0,1),img=images[activeImage];
 let scale=1.025,x=0,y=0;
 if(s.animationType==="zoomIn")scale=1.025+.035*p;
 else if(s.animationType==="zoomOut")scale=1.06-.035*p;
 else if(s.animationType==="panLeft"){scale=1.06;x=1.2-2.4*p}
 else if(s.animationType==="panRight"){scale=1.06;x=-1.2+2.4*p}
 else if(s.animationType==="panUp"){scale=1.06;y=1.2-2.4*p}
 else if(s.animationType==="panDown"){scale=1.06;y=-1.2+2.4*p}
 if(matchMedia("(prefers-reduced-motion: reduce)").matches){scale=1.025;x=0;y=0}
 img.style.transform="scale("+scale+") translate("+x+"%, "+y+"%)";
}
function renderChapter(i,t){
 if(i<0){center.classList.remove("show");corner.classList.remove("show");headerCurrent.textContent="等待旁白開始";return}
 const c=chapters[i],elapsed=t-c.chapterStartMs;headerCurrent.textContent=c.title;
 if(i!==lastChapter){lastChapter=i;center.textContent=c.title;corner.textContent=c.title;center.classList.remove("show");void center.offsetWidth}
 const show=elapsed>=0&&elapsed<1800;
 if(show){if(!center.classList.contains("show")){center.textContent=c.title;center.style.animationDelay=(-Math.max(0,elapsed)/1000)+"s";void center.offsetWidth;center.classList.add("show")}corner.classList.remove("show")}
 else{center.classList.remove("show");center.style.animationDelay="0s";corner.classList.toggle("show",elapsed>=1800)}
 [...chaptersEl.querySelectorAll(".chapter-button")].forEach((b,n)=>{b.classList.toggle("current",n===i);b.setAttribute("aria-current",n===i?"step":"false")});
}
function fitCaption(){if(!caption.textContent)return;let size=Math.min(36,Math.max(14,window.innerWidth*.026));caption.style.fontSize=size+"px";while(caption.scrollHeight>size*3.9&&size>12){size-=.5;caption.style.fontSize=size+"px"}}
function update(){
 const t=Math.round((Number.isFinite(audio.currentTime)?audio.currentTime:0)*1000);
 const si=activeSceneIndex(t);showScene(si,t);const ci=activeChapterIndex(t);renderChapter(ci,t);
 const ui=activeSubIndex(t);if(ui!==lastSub){lastSub=ui;caption.textContent=cc.checked&&ui>=0?subs[ui].text:"";fitCaption()}else if(!cc.checked&&caption.textContent)caption.textContent="";
 if(!pointerScrub){seek.value=String(t/1000);clock.textContent=fmt(t)+" / "+fmt(Number.isFinite(audio.duration)?audio.duration*1000:durationMs)}
 play.textContent=audio.paused?"▶ 播放":"❚❚ 暫停";
 const scene=si>=0?si:(t>=scenes[scenes.length-1].endMs?scenes.length-1:-1);
 document.getElementById("prevScene").disabled=scene<=0;document.getElementById("nextScene").disabled=scene<0||scene>=scenes.length-1;
 document.getElementById("prevChapter").disabled=ci<=0;document.getElementById("nextChapter").disabled=ci<0||ci>=chapters.length-1;
}
function tick(){raf=0;update();if(!audio.paused&&!audio.ended)raf=requestAnimationFrame(tick)}
function sync(){update();if(!audio.paused&&!audio.ended&&!raf)raf=requestAnimationFrame(tick);else if((audio.paused||audio.ended)&&raf){cancelAnimationFrame(raf);raf=0}}
function commitSeek(seconds,shouldPlay){const target=clamp(Number(seconds)||0,0,Number.isFinite(audio.duration)?audio.duration:durationMs/1000);audio.playbackRate=1;if(!Number.isFinite(audio.duration)){pendingSeek=true;seekPreview=target;if(shouldPlay)audio.play().catch(()=>{});return}audio.currentTime=target;sync();if(shouldPlay)audio.play().catch(()=>{})}
function finishPointerSeek(){if(!pointerScrub)return;pointerScrub=false;const v=Number(seek.value);pendingSeek=true;seekPreview=v;commitSeek(v,false);setTimeout(()=>{pendingSeek=false},0)}
chaptersEl.innerHTML=chapters.map((c,i)=>'<button class="chapter-button" type="button" data-index="'+i+'"><span>第 '+c.chapterId.replace("ch-","")+' 章｜'+fmt(c.chapterStartMs)+'</span>'+c.title+'</button>').join("");
chaptersEl.querySelectorAll(".chapter-button").forEach((b,i)=>b.addEventListener("click",()=>commitSeek(chapters[i].chapterStartMs/1000,true)));
document.getElementById("play").addEventListener("click",()=>audio.paused?audio.play().catch(()=>{}):audio.pause());
document.getElementById("replay").addEventListener("click",()=>{audio.playbackRate=1;commitSeek(0,true)});
document.getElementById("prevScene").addEventListener("click",()=>{const t=Math.round(audio.currentTime*1000),i=activeSceneIndex(t);commitSeek(scenes[Math.max(0,(i<0?0:i)-1)].startMs/1000,false)});
document.getElementById("nextScene").addEventListener("click",()=>{const t=Math.round(audio.currentTime*1000),i=activeSceneIndex(t);commitSeek(scenes[Math.min(scenes.length-1,(i<0?0:i)+1)].startMs/1000,false)});
document.getElementById("prevChapter").addEventListener("click",()=>{const i=activeChapterIndex(Math.round(audio.currentTime*1000));commitSeek(chapters[Math.max(0,i-1)].chapterStartMs/1000,false)});
document.getElementById("nextChapter").addEventListener("click",()=>{const i=activeChapterIndex(Math.round(audio.currentTime*1000));commitSeek(chapters[Math.min(chapters.length-1,i+1)].chapterStartMs/1000,false)});
seek.addEventListener("pointerdown",()=>{pointerScrub=true;seekPreview=Number(seek.value)});
seek.addEventListener("input",()=>{if(pointerScrub){seekPreview=Number(seek.value);clock.textContent="預覽 "+fmt(seekPreview*1000)+" / "+fmt(Number.isFinite(audio.duration)?audio.duration*1000:durationMs)}});
seek.addEventListener("pointerup",finishPointerSeek);seek.addEventListener("pointercancel",()=>{pointerScrub=false;sync()});
seek.addEventListener("change",()=>{if(!pointerScrub&&!pendingSeek)commitSeek(Number(seek.value),false)});
document.getElementById("volume").addEventListener("input",e=>audio.volume=Number(e.target.value));
document.getElementById("mute").addEventListener("click",e=>{audio.muted=!audio.muted;e.currentTarget.textContent=audio.muted?"取消靜音":"靜音"});
cc.addEventListener("change",()=>{lastSub=-2;update()});
["timeupdate","seeked","play","pause","ended","loadedmetadata"].forEach(n=>audio.addEventListener(n,sync));
audio.addEventListener("loadedmetadata",()=>{if(pendingSeek){const t=seekPreview;pendingSeek=false;commitSeek(t,false)}});
audio.addEventListener("error",()=>{setPlaceholder(null,false);placeholder.lastElementChild.textContent="音訊載入失敗，請確認 audio/narration.mp3"});
document.addEventListener("keydown",e=>{if(e.target.matches("input,textarea,select,button,[contenteditable=true]"))return;if(e.code==="Space"){e.preventDefault();audio.paused?audio.play().catch(()=>{}):audio.pause()}if(e.code==="ArrowRight")commitSeek(audio.currentTime+5,false);if(e.code==="ArrowLeft")commitSeek(audio.currentTime-5,false)});
window.addEventListener("resize",fitCaption);preload(0);setPlaceholder(scenes[0],false);update();
})();
