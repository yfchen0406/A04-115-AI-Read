(()=>{'use strict';
const D=window.EPISODE_DATA,S=window.EPISODE_SETTINGS;
const el=id=>document.getElementById(id);
if(document.body.dataset.page!=='reader'){
  const withLink=el('youtube-with'),withoutLink=el('youtube-without');
  if(withLink)withLink.href=S.links.youtubeWithSubtitles;
  if(withoutLink)withoutLink.href=S.links.youtubeWithoutSubtitles;
  return;
}
const audio=el('audio'),seek=el('seek'),subtitle=el('subtitle'),title=el('chapter-label'),intro=el('chapter-intro'),stage=el('visual-a').parentElement;
const layers=[el('visual-a'),el('visual-b')];let active=0,lastScene=-1,dragging=false,dragWasPlaying=false,raf=0,suppressNextTransition=false;
const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
const poemLines=new Set(['莫聽穿林打葉聲，何妨吟嘯且徐行。','竹杖芒鞋輕勝馬，誰怕？','一蓑煙雨任平生。','料峭春風吹酒醒，微冷，山頭斜照卻相迎。','回首向來蕭瑟處，歸去，也無風雨也無晴。']);
const sec=ms=>{const s=Math.max(0,Math.floor(ms/1000));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')};
const chapterAt=t=>[...D.chapters].reverse().find(c=>t>=c.startMs)||D.chapters[0];
const sceneIndexAt=t=>{const i=D.scenes.findIndex(s=>t>=s.startMs&&t<s.endMs);return i<0?D.scenes.length-1:i};
const cueAt=t=>D.captions.find(c=>t>=c.startMs&&t<c.endMs);
function updateScene(index,instant=false){if(index===lastScene)return;const next=1-active,scene=D.scenes[index],img=layers[next],old=layers[active];img.style.transition=instant?'none':'';old.style.transition=instant?'none':'';img.style.opacity='0';img.src=`./${scene.imagePath}`;img.alt=`${scene.id}｜${scene.chapterTitle}`;if(instant){void img.offsetWidth;img.style.opacity='1';old.style.opacity='0';requestAnimationFrame(()=>{img.style.removeProperty('transition');old.style.removeProperty('transition')})}else{old.style.opacity='0';requestAnimationFrame(()=>{img.style.opacity='1'})}active=next;lastScene=index}
function draw(){raf=0;const t=audio.currentTime*1000,si=sceneIndexAt(t),sc=D.scenes[si],ch=chapterAt(t),cue=cueAt(t);if(dragging)return;
  const instantTransition=suppressNextTransition||audio.seeking;suppressNextTransition=false;updateScene(si,instantTransition);title.textContent=ch.title;subtitle.textContent=cue?.text||'';subtitle.classList.toggle('poem-highlight',poemLines.has(cue?.text||''));
  const chars=[...subtitle.textContent].length;if(chars){const fit=Math.floor(stage.clientWidth*.92/chars);subtitle.style.fontSize=`${clamp(fit,16,42)}px`}else subtitle.style.removeProperty('font-size');
  seek.value=String(Math.round(t/D.durationMs*1000));el('current-time').textContent=sec(t);el('status').textContent=audio.paused?'已暫停':`播放中｜${sc.id}`;
  const delta=t-ch.speechStartMs;intro.textContent=delta>=0&&delta<1900?ch.title:'';intro.style.opacity=delta<0||delta>=1900?'0':String(delta<300?delta/300:delta>1550?(1900-delta)/350:1);
  document.querySelectorAll('.chapter-button').forEach((x,i)=>x.classList.toggle('active',i===ch.id-1));
  const p=clamp((t-sc.startMs)/(sc.endMs-sc.startMs),0,1),dir={ 'pan-left':[-1,0], 'pan-right':[1,0], 'pan-up':[0,-1], 'pan-down':[0,1] }[sc.motionType]||[0,0],zoomOut=sc.motionType==='zoom-out',zoom=zoomOut?1.07-p*.025:1.045+p*.025,layer=layers[active];layer.style.transform=`translate(${dir[0]*p*1.5}%,${dir[1]*p*1.5}%) scale(${zoom})`;layer.style.transformOrigin='center center';
  if(!audio.paused)raf=requestAnimationFrame(draw)
}
function renderNow(){if(!dragging){if(raf)cancelAnimationFrame(raf);draw()}}
function openReader(){renderNow()}
function commitSeek(){if(!dragging)return;const target=clamp(+seek.value/1000*D.durationMs,0,D.durationMs);dragging=false;const resume=dragWasPlaying;let done=false;suppressNextTransition=true;const finish=()=>{if(done)return;done=true;audio.removeEventListener('seeked',finish);renderNow();if(resume)audio.play().catch(()=>{})};audio.addEventListener('seeked',finish,{once:true});audio.currentTime=target/1000;window.setTimeout(()=>{if(!audio.seeking)finish()},500)}
el('play').onclick=()=>audio.paused?audio.play().catch(()=>{}):audio.pause();
audio.addEventListener('play',()=>{el('play').textContent='暫停';renderNow()});audio.addEventListener('pause',()=>{el('play').textContent='播放';renderNow()});
el('back-10').onclick=()=>{suppressNextTransition=true;audio.currentTime=Math.max(0,audio.currentTime-10)};el('forward-10').onclick=()=>{suppressNextTransition=true;audio.currentTime=Math.min(audio.duration||D.durationMs/1000,audio.currentTime+10)};
el('volume').oninput=e=>audio.volume=+e.target.value;el('fullscreen').onclick=()=>document.querySelector('.reader-shell').requestFullscreen?.();
seek.addEventListener('pointerdown',()=>{dragging=true;dragWasPlaying=!audio.paused;if(dragWasPlaying)audio.pause()});
seek.addEventListener('input',()=>{if(dragging){el('current-time').textContent=sec(+seek.value/1000*D.durationMs);return}suppressNextTransition=true;audio.currentTime=+seek.value/1000*D.durationMs/1000});
seek.addEventListener('change',()=>{if(dragging)commitSeek()});window.addEventListener('pointerup',commitSeek);window.addEventListener('pointercancel',commitSeek);
audio.addEventListener('timeupdate',renderNow);audio.addEventListener('seeked',renderNow);
D.chapters.forEach(c=>{const button=document.createElement('button');button.className='chapter-button';button.innerHTML=`<span class="chapter-number">${String(c.id).padStart(2,'0')}</span><span class="chapter-name"></span><small>${c.firstScene} · ${sec(c.speechStartMs)}</small>`;button.querySelector('.chapter-name').textContent=c.title;button.addEventListener('click',()=>{openReader();suppressNextTransition=true;audio.currentTime=c.speechStartMs/1000;audio.play().catch(()=>{});renderNow()});el('chapter-list').append(button)});
audio.addEventListener('loadedmetadata',()=>{el('total-time').textContent=sec(audio.duration*1000);el('status').textContent=`音訊已載入｜${audio.duration.toFixed(3)} 秒｜單聲道 MP3`;renderNow()});audio.addEventListener('error',()=>el('status').textContent='音訊載入失敗；請確認網站資料夾完整');
})();
