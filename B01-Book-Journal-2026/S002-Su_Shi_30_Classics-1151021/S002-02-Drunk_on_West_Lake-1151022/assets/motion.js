(()=>{
  'use strict';
  const data=window.MOTION_TIMELINE;
  if(!data){document.body.insertAdjacentHTML('afterbegin','<p>動畫時間資料載入失敗。</p>');return}
  const $=id=>document.getElementById(id);
  const audio=$('motion-audio'),image=$('motion-image'),stage=$('motion-stage'),effect=$('motion-effect'),cover=$('motion-cover');
  const seek=$('motion-seek'),subtitle=$('motion-subtitle'),chapterLabel=$('motion-chapter'),quoteLayer=$('poem-layer');
  const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
  const fmt=t=>{t=Math.max(0,t|0);return `${String(Math.floor(t/60)).padStart(2,'0')}:${String(t%60).padStart(2,'0')}`};

  // Each image has its own camera path, direction, overlay and restrained intensity.
  // Values are normalized to that image's Excel interval and can be recomputed after any seek.
  const plan={
    '001':{a:[1,-1,0],b:[1.045,1,-.5],fx:'water',power:.12},'002':{a:[1.015,0,1],b:[1.06,1,-1],fx:'wind',power:.08},
    '003':{a:[1.015,0,-2],b:[1.06,0,2],fx:'cloud',power:.18},'004':{a:[1.015,1,0],b:[1.055,-1,-1],fx:'rain',power:.2},
    '005':{a:[1.02,3,0],b:[1.05,-2,-1],fx:'water',power:.12},'006':{a:[1,-1,2],b:[1.035,1,-2],fx:'light',power:.1},
    '007':{a:[1.04,-2,0],b:[1.015,2,0],fx:'water',power:.1},'008':{a:[1.01,-2,0],b:[1.045,3,-1],fx:'water',power:.1},
    '009':{a:[1,-2,1],b:[1.04,0,-1],fx:'cloud',power:.16},'010':{a:[1.055,1,-1],b:[1.02,-2,2],fx:'paper',power:.08},
    '011':{a:[1,2,0],b:[1.05,-1,-1],fx:'paper',power:.1},'012':{a:[1.04,2,1],b:[1,-2,-1],fx:'light',power:.1},
    '013':{a:[1.02,1,-2],b:[1.06,-1,2],fx:'cloud',power:.17},'014':{a:[1,-2,0],b:[1.035,2,1],fx:'water',power:.1},
    '015':{a:[1,1,-1],b:[1.04,-1,2],fx:'cloud',power:.17},'016':{a:[1.025,2,0],b:[1.055,-2,0],fx:'water',power:.12},
    '017':{a:[1.04,-2,1],b:[1.02,2,-1],fx:'wind',power:.09},'018':{a:[1.02,2,0],b:[1.05,0,-1],fx:'light',power:.08},
    '019':{a:[1.06,-2,1],b:[1.015,2,-1],fx:'water',power:.1},'020':{a:[1.04,0,1],b:[1.07,-1,-2],fx:'cloud',power:.08},
    '021':{a:[1.04,-2,0],b:[1.07,1,1],fx:'cloud',power:.18},'022':{a:[1.015,1,-1],b:[1.045,-1,1],fx:'rain',power:.19},
    '023':{a:[1.02,-2,0],b:[1.04,2,1],fx:'water',power:.12},'024':{a:[1.05,0,-2],b:[1.015,0,2],fx:'light',power:.12},
    '025':{a:[1.06,2,0],b:[1.02,-2,1],fx:'mist',power:.12},'026':{a:[1.015,0,2],b:[1.05,1,-2],fx:'wind',power:.08},
    '027':{a:[1.02,-2,0],b:[1.055,2,0],fx:'cloud',power:.16},'028':{a:[1.04,2,0],b:[1.025,-1,-1],fx:'light',power:.1},
    '029':{a:[1.02,-1,1],b:[1.045,2,-1],fx:'water',power:.1},'030':{a:[1.04,2,0],b:[1.01,-2,1],fx:'rain',power:.14},
    '031':{a:[1.01,-2,0],b:[1.045,2,-1],fx:'mist',power:.12},'032':{a:[1.035,0,2],b:[1.065,1,-1],fx:'water',power:.08},
    '033':{a:[1,2,0],b:[1.045,-2,1],fx:'cloud',power:.17},'034':{a:[1.02,2,0],b:[1.055,-2,-1],fx:'light',power:.13},
    '035':{a:[1.045,0,-2],b:[1.02,0,1],fx:'light',power:.08},'036':{a:[1.06,-2,0],b:[1.015,2,-1],fx:'water',power:.08},
    '037':{a:[1.02,1,0],b:[1.055,-1,0],fx:'rain',power:.1},'038':{a:[1.04,2,0],b:[1.06,-1,-1],fx:'paper',power:.08},
    '039':{a:[1.05,2,0],b:[1.02,-2,0],fx:'wind',power:.08},'040':{a:[1.055,0,-2],b:[1.02,1,1],fx:'paper',power:.08},
    '041':{a:[1.02,-2,0],b:[1.04,1,0],fx:'light',power:.08},'042':{a:[1.02,-1,0],b:[1.05,1,0],fx:'paper',power:.08},
    '043':{a:[1.02,-2,0],b:[1.04,2,0],fx:'light',power:.07},'044':{a:[1.06,2,1],b:[1.015,-1,-1],fx:'wind',power:.07},
    '045':{a:[1.015,0,0],b:[1.045,0,-1],fx:'light',power:.08},'046':{a:[1.04,1,0],b:[1.02,-2,-1],fx:'light',power:.08},
    '047':{a:[1.06,2,0],b:[1.02,-2,0],fx:'light',power:.07},'048':{a:[1.02,2,0],b:[1.04,-1,0],fx:'light',power:.08},
    '049':{a:[1.015,-2,0],b:[1.045,2,-1],fx:'water',power:.1},'050':{a:[1.02,-1,0],b:[1.04,2,1],fx:'water',power:.1},
    '051':{a:[1.05,0,-1],b:[1.01,1,1],fx:'cloud',power:.12},'052':{a:[1.04,-2,0],b:[1.015,2,-1],fx:'rain',power:.12}
  };

  // Text is copied verbatim from the paired SRT's seven original-poem cues.
  const poem=[
    {cue:20,lines:['黑雲翻墨未遮山，','白雨跳珠亂入船。'],left:55,top:17,width:41},
    {cue:21,lines:['卷地風來忽吹散，','望湖樓下水如天。'],left:58,top:16,width:38},
    {cue:27,lines:['黑雲翻墨未遮山。'],left:58,top:16,width:37},
    {cue:31,lines:['白雨跳珠亂入船。'],left:57,top:19,width:37},
    {cue:39,lines:['卷地風來忽吹散。'],left:58,top:18,width:37},
    {cue:44,lines:['望湖樓下水如天。'],left:59,top:17,width:36},
    {cue:83,lines:['卷地風來忽吹散，','望湖樓下水如天。'],left:57,top:17,width:37}
  ];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const formatSec=(v)=>fmt(Math.floor(v));
  const activeAt=(arr,t,holdLast=false)=>arr.find(x=>t>=x.start&&t<x.end)||(holdLast&&t>=arr[arr.length-1].end?arr[arr.length-1]:null);
  const interpolate=(a,b,p)=>a+(b-a)*p;
  let lastScene='',isSeeking=false,resumeAfterSeek=false,raf=0;

  const setScene=scene=>{
    if(!scene)return;
    if(lastScene!==scene.id){
      lastScene=scene.id;image.src=`./assets/images/${scene.image}`;image.alt=scene.visual;
      const cfg=plan[scene.id];effect.dataset.effect=cfg.fx;
      $('motion-status').dataset.scene=scene.id;
    }
  };
  const render=(t)=>{
    const chapter=activeAt(data.chapters,t,true);
    const scene=activeAt(data.scenes,t,true);if(scene){setScene(scene);const cfg=plan[scene.id];const p=clamp((t-scene.start)/(scene.end-scene.start),0,1);
      if(reduced.matches){image.style.transform='none';effect.style.opacity='0'}else{
        const scale=interpolate(cfg.a[0],cfg.b[0],p),x=interpolate(cfg.a[1],cfg.b[1],p),y=interpolate(cfg.a[2],cfg.b[2],p);
        image.style.transform=`translate3d(${x}%,${y}%,0) scale(${scale})`;
        effect.style.opacity=String(cfg.power*(.58+.42*Math.sin(Math.PI*p)));
        effect.style.backgroundPosition=`${50+(p-.5)*24}% ${50+(p-.5)*30}%`;
        effect.style.transform=`translate3d(${(p-.5)*1.5}%,${(p-.5)*1.2}%,0)`;
      }
      chapterLabel.textContent=chapter?.title||scene.chapter;
    }
    const cue=activeAt(data.subtitles,t);subtitle.textContent=cue?cue.text:'';
    const q=poem.find(x=>x.cue===cue?.id);
    if(q){
      if(quoteLayer.dataset.cue!==String(q.cue)){
        quoteLayer.dataset.cue=String(q.cue);quoteLayer.replaceChildren(...q.lines.map(line=>{const span=document.createElement('span');span.className='poem-line';span.textContent=line;return span}));
        quoteLayer.style.left=q.left+'%';quoteLayer.style.top=q.top+'%';quoteLayer.style.width=q.width+'%';
      }
      const qp=clamp((t-cue.start)/(cue.end-cue.start),0,1),enter=clamp(qp/.13,0,1),leave=clamp((1-qp)/.09,0,1);
      quoteLayer.style.opacity=String(Math.min(enter,leave));quoteLayer.style.transform=`translateY(${(1-enter)*8}px)`;
    }else{quoteLayer.style.opacity='0';quoteLayer.dataset.cue='';quoteLayer.replaceChildren()}
    $('motion-current').textContent=formatSec(t);if(!isSeeking)seek.value=String(t);
    const ch=chapter;document.querySelectorAll('.motion-chapter-button').forEach(b=>b.setAttribute('aria-current',String(b.dataset.chapter===ch?.id)));
    const sceneIndex=data.scenes.findIndex(x=>x.id===scene?.id);$('prev-scene').disabled=sceneIndex<=0;$('next-scene').disabled=sceneIndex>=data.scenes.length-1;
    const chIndex=data.chapters.findIndex(x=>x.id===ch?.id);$('prev-chapter').disabled=chIndex<=0;$('next-chapter').disabled=chIndex>=data.chapters.length-1;
    $('motion-status').textContent=`${audio.paused?(audio.currentTime?'已暫停':'尚未播放'):'旁白播放中'} · 第 ${scene?.id||'001'} 鏡`;
  };
  const loop=()=>{render(audio.currentTime||0);raf=requestAnimationFrame(loop)};
  const seekTo=(t,{resume=false}={})=>{audio.currentTime=clamp(t,0,data.duration);render(audio.currentTime);if(resume)audio.play().catch(()=>{})};
  const sceneIndex=()=>Math.max(0,data.scenes.findIndex(x=>x.id===activeAt(data.scenes,audio.currentTime||0,true)?.id));
  const chapterIndex=()=>Math.max(0,data.chapters.findIndex(x=>x.id===activeAt(data.chapters,audio.currentTime||0,true)?.id));
  const play=()=>audio.play().then(()=>{cover.hidden=true;$('play-pause').textContent='暫停'}).catch(()=>{$('motion-status').textContent='瀏覽器尚未能播放旁白，請再按一次播放。'});
  $('motion-duration').textContent=formatSec(data.duration);seek.max=String(data.duration);
  const list=$('motion-chapter-list');
  for(const ch of data.chapters){const b=document.createElement('button');b.type='button';b.className='motion-chapter-button';b.dataset.chapter=ch.id;b.innerHTML=`<span class="motion-chapter-number">${ch.id}</span><span class="motion-chapter-name"></span><small></small>`;b.querySelector('.motion-chapter-name').textContent=ch.title.replace(/^\d+｜/,'');b.querySelector('small').textContent=`${ch.sceneRange}`;b.addEventListener('click',()=>seekTo(ch.start,{resume:true}));list.appendChild(b)}
  cover.addEventListener('click',()=>{cover.hidden=true;play()});
  $('play-pause').addEventListener('click',()=>audio.paused?play():audio.pause());
  audio.addEventListener('play',()=>{$('play-pause').textContent='暫停';cover.hidden=true});audio.addEventListener('pause',()=>{$('play-pause').textContent=audio.currentTime?'播放':'播放'});
  $('prev-scene').addEventListener('click',()=>seekTo(data.scenes[Math.max(0,sceneIndex()-1)].start));
  $('next-scene').addEventListener('click',()=>seekTo(data.scenes[Math.min(data.scenes.length-1,sceneIndex()+1)].start));
  $('prev-chapter').addEventListener('click',()=>seekTo(data.chapters[Math.max(0,chapterIndex()-1)].start,{resume:true}));
  $('next-chapter').addEventListener('click',()=>seekTo(data.chapters[Math.min(data.chapters.length-1,chapterIndex()+1)].start,{resume:true}));
  seek.addEventListener('pointerdown',()=>{isSeeking=true;resumeAfterSeek=!audio.paused;audio.pause()});
  seek.addEventListener('input',()=>{const t=Number(seek.value);audio.currentTime=t;render(t)});
  const finishSeek=()=>{if(!isSeeking)return;isSeeking=false;if(resumeAfterSeek)audio.play().catch(()=>{});resumeAfterSeek=false};
  seek.addEventListener('pointerup',finishSeek);seek.addEventListener('pointercancel',finishSeek);seek.addEventListener('change',finishSeek);
  $('motion-volume').addEventListener('input',e=>{audio.volume=Number(e.target.value);audio.muted=audio.volume===0;$('mute-toggle').textContent=audio.muted?'取消靜音':'靜音'});
  $('mute-toggle').addEventListener('click',()=>{audio.muted=!audio.muted;$('mute-toggle').textContent=audio.muted?'取消靜音':'靜音'});
  $('fullscreen-toggle').addEventListener('click',async()=>{try{document.fullscreenElement?await document.exitFullscreen():await $('motion-shell').requestFullscreen()}catch{}});
  $('restart').addEventListener('click',()=>seekTo(0));
  audio.addEventListener('ended',()=>{$('play-pause').textContent='重播';render(data.duration)});
  audio.addEventListener('loadedmetadata',()=>{if(Number.isFinite(audio.duration))$('motion-duration').textContent=formatSec(audio.duration)});
  render(0);cancelAnimationFrame(raf);loop();
})();
