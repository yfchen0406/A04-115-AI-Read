(()=>{
  const timeline=window.EFFECTS_TIMELINE, config=window.EFFECTS_CONFIG, quotes=window.EFFECTS_QUOTES;
  if(!timeline||!config)throw new Error('動畫特效資料未載入。');
  const $=id=>document.getElementById(id), audio=$('narration-audio'), img=$('scene-image'), layer=$('motion-layer'), svg=$('visual-effect'), title=$('chapter-title'), subtitle=$('subtitle-text'), quote=$('poem-quote'), slider=$('seek-slider');
  const scenes=timeline.scenes, chapters=timeline.chapters, cues=timeline.displaySegments||timeline.subtitles;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const renderMode=new URLSearchParams(location.search).has('render');
  if(renderMode)document.documentElement.classList.add('render-mode');
  const ns='http://www.w3.org/2000/svg';
  let sceneIndex=-1, nodes=[];
  const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
  const smooth=p=>p*p*(3-2*p);
  const el=(name,attrs={})=>{const node=document.createElementNS(ns,name);for(const [k,v] of Object.entries(attrs))node.setAttribute(k,String(v));return node;};
  const makeEffect=(c)=>{
    svg.replaceChildren();
    const defs=el('defs');
    const blur=el('filter',{id:'soft-glow',x:'-30%',y:'-30%',width:'160%',height:'160%'});blur.append(el('feGaussianBlur',{stdDeviation:'1.25'}));defs.append(blur);
    const grad=el('linearGradient',{id:'gold-glint',x1:'0%',y1:'0%',x2:'100%',y2:'0%'});grad.append(el('stop',{offset:'0%','stop-color':'#fff7c8','stop-opacity':'0'}),el('stop',{offset:'50%','stop-color':'#ffe8a0','stop-opacity':'.85'}),el('stop',{offset:'100%','stop-color':'#fff7c8','stop-opacity':'0'}));defs.append(grad);svg.append(defs);
    const group=el('g');svg.append(group);nodes=[];
    const add=(node,cls='fx-stroke')=>{if(cls)node.setAttribute('class',cls);group.append(node);nodes.push(node);return node;};
    const x=c.x,y=c.y;
    if(c.kind.includes('ripple')){
      const centers=c.kind==='dual-ripple'?[[x-9,y+3],[x+8,y-1]]:[[x,y]];
      centers.forEach(([cx,cy])=>{for(let i=0;i<3;i++)add(el('circle',{cx,cy,r:1.5+i*3,'data-ring':i}));});
    }else if(c.kind==='path'||c.kind==='ink'||c.kind==='sweep'){
      const path=add(el('path',{d:`M ${x-22} ${y+8} C ${x-9} ${y-8}, ${x+7} ${y+10}, ${x+22} ${y-9}`,pathLength:'100'}));
      path.setAttribute('stroke-dasharray','100');path.setAttribute('stroke-dashoffset','100');
      if(c.kind==='ink')path.setAttribute('stroke','#d9cfaa');
    }else if(c.kind==='fog'||c.kind==='fog-ripple'||c.kind==='fog-wave'){
      add(el('ellipse',{cx:x,cy:y,rx:17,ry:5}), 'fx-fog');add(el('ellipse',{cx:x+13,cy:y+5,rx:20,ry:4}), 'fx-fog');
      if(c.kind!=='fog')for(let i=0;i<2;i++)add(el('circle',{cx:x+8,cy:y+4,r:2+i*4}));
      if(c.kind==='fog-wave')add(el('path',{d:`M ${x-22} ${y+8} Q ${x} ${y-1} ${x+22} ${y+8}`,pathLength:'100'}));
    }else if(c.kind==='glint'||c.kind==='beam'){
      add(el('path',{d:c.kind==='beam'?`M ${x-25} ${y+13} L ${x+22} ${y-12}`:`M ${x-20} ${y} L ${x+20} ${y}`,pathLength:'100'}),'fx-stroke');
    }else if(c.kind==='pulse'||c.kind==='focus'){
      for(let i=0;i<3;i++)add(el('circle',{cx:x,cy:y,r:3+i*5}));
    }else if(c.kind==='spiral'){
      add(el('path',{d:`M ${x} ${y} c 2 -2 5 1 3 3 c -3 4 -9 0 -7 -4 c 3 -6 13 -3 13 4`,pathLength:'100'}));
    }else if(c.kind==='screen'||c.kind==='screen-glitch'){
      add(el('rect',{x:x-16,y:y-11,width:32,height:22,rx:1}),'fx-screen');
      if(c.kind==='screen-glitch')for(let i=0;i<3;i++)add(el('line',{x1:x-15,x2:x+15,y1:y-5+i*5,y2:y-5+i*5}));
    }else if(c.kind==='edge'){
      add(el('rect',{x:x-17,y:y-11,width:34,height:22,rx:1}));
    }else if(c.kind==='wash'||c.kind==='warm-up'){
      add(el('rect',{x:0,y:0,width:100,height:56.25}),c.kind==='warm-up'?'fx-glow':'fx-fill');
    }else{
      add(el('ellipse',{cx:x,cy:y,rx:17,ry:12}),'fx-glow');
    }
  };
  const setScene=(index)=>{
    if(index===sceneIndex)return;
    sceneIndex=index;
    const scene=scenes[index], id=String(scene.id).padStart(3,'0'), c=config[id];
    img.src='./assets/images/IMG'+id+'.webp';img.alt='IMG'+id+'｜'+(scene.narration||scene.chapterTitle||'石鐘山記分鏡');
    title.textContent=scene.chapterTitle||scene.chapter||'';
    $('scene-status').textContent='IMG'+id+'｜'+(c?.label||'分鏡特效');
    makeEffect(c||{kind:'glow',x:50,y:28});
  };
  const updateQuote=(ms,sceneId)=>{
    const q=quotes.find(item=>item.scene===sceneId&&ms>=item.startMs&&ms<item.endMs);
    if(!q){quote.classList.remove('is-visible');quote.textContent='';return;}
    quote.textContent=q.text;quote.style.left=q.left+'%';quote.style.top=q.top+'%';quote.style.maxWidth=q.width+'%';quote.classList.add('is-visible');
    const opacity=Math.min(1,(ms-q.startMs)/360,(q.endMs-ms)/360);
    quote.style.opacity=String(clamp(opacity,0,1));
  };
  const renderAt=(seconds)=>{
    const ms=clamp(seconds*1000,0,timeline.durationMs-1);
    let lo=0,hi=scenes.length-1;
    while(lo<hi){const mid=(lo+hi)>>1;if(ms<scenes[mid].endMs)hi=mid;else lo=mid+1;}
    setScene(lo);
    const scene=scenes[lo], id=String(scene.id).padStart(3,'0'), c=config[id]||{x:50,y:28,dx:0,dy:0,zoom:1.04,strength:.5};
    let p=clamp((ms-scene.startMs)/(scene.endMs-scene.startMs),0,1);if(reduce)p=0;
    const e=smooth(p), sx=1+(c.zoom-1)*e, tx=(c.dx||0)*e, ty=(c.dy||0)*e;
    layer.style.transform=`translate(${tx}%,${ty}%) scale(${sx})`;
    const amount=c.strength*(.35+.65*Math.sin(Math.PI*p));
    nodes.forEach((node,i)=>{
      const ring=Number(node.getAttribute('data-ring')||0);
      if(node.tagName==='circle'){
        const base=Number(node.getAttribute('r'));
        node.setAttribute('r',String(base+(c.kind.includes('ripple')?p*4:Math.sin(p*Math.PI)*2)));
        node.style.opacity=String(clamp(amount*(.48-ring*.09),0,.68));
      }else if(node.tagName==='path'){
        node.setAttribute('stroke-dashoffset',String(100*(1-p)));
        node.style.opacity=String(clamp(amount*(.36+.24*Math.sin(p*Math.PI)),0,.58));
      }else if(node.tagName==='ellipse'){
        node.setAttribute('cx',String(c.x+(p-.5)*(c.dx||1)*4+i*9));
        node.style.opacity=String(clamp(amount*.22,0,.2));
      }else if(node.tagName==='line'){
        node.style.opacity=String(clamp(p<.18?0:amount*.55,0,.5));
      }else if(node.tagName==='rect'){
        node.style.opacity=String(clamp((c.kind.includes('screen')?(.25+.22*Math.sin(p*4*Math.PI)):amount*.17),0,.3));
      }
    });
    const activeCue=cues.find(cue=>ms>=cue.startSeconds*1000&&ms<cue.endSeconds*1000);
    subtitle.textContent=activeCue?.text||'';
    updateQuote(ms,id);
    $('current-time').textContent=formatTime(ms/1000);
    $('duration-time').textContent='/ '+formatTime(timeline.durationSeconds);
    if(document.activeElement!==slider)slider.value=String(ms/1000);
    const activeChapter=chapters.findIndex(ch=>ms>=(ch.indexStartMs??ch.startMs??0)&&ms<(ch.endMs??timeline.durationMs));
    document.querySelectorAll('.chapter-button').forEach((button,i)=>button.classList.toggle('active',i===activeChapter));
  };
  function formatTime(seconds){const s=Math.floor(seconds);return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;}
  const chapterStart=chapter=>chapter.indexStartMs??chapter.startMs??0;
  const chapterList=$('chapter-list');
  chapters.forEach((chapter,i)=>{const b=document.createElement('button');b.type='button';b.className='chapter-button';b.innerHTML=`<span class="chapter-number">${String(i+1).padStart(2,'0')}</span><span class="chapter-name"></span><small></small>`;b.querySelector('.chapter-name').textContent=chapter.title||chapter.displayTitle;b.querySelector('small').textContent=formatTime(chapterStart(chapter)/1000);b.addEventListener('click',()=>{audio.currentTime=chapterStart(chapter)/1000;audio.play().catch(()=>{});});chapterList.append(b);});
  $('play-control').addEventListener('click',()=>audio.paused?audio.play().catch(()=>{}):audio.pause());
  audio.addEventListener('play',()=>{$('play-control').textContent='暫停';});
  audio.addEventListener('pause',()=>{$('play-control').textContent='播放';});
  audio.addEventListener('ended',()=>{$('play-control').textContent='重播';});
  const jumpScene=direction=>{
    const ms=audio.currentTime*1000;
    let index=scenes.findIndex(scene=>ms<scene.endMs);
    if(index<0)index=scenes.length-1;
    const target=clamp(index+direction,0,scenes.length-1);
    audio.currentTime=scenes[target].startMs/1000;
  };
  const jumpChapter=direction=>{
    const ms=audio.currentTime*1000;
    let index=chapters.findIndex(ch=>ms<(ch.endMs??timeline.durationMs));
    if(index<0)index=chapters.length-1;
    const target=clamp(index+direction,0,chapters.length-1);
    audio.currentTime=chapterStart(chapters[target])/1000;
  };
  $('restart-control').addEventListener('click',()=>{audio.currentTime=0;});
  $('previous-scene-control').addEventListener('click',()=>jumpScene(-1));
  $('next-scene-control').addEventListener('click',()=>jumpScene(1));
  $('previous-chapter-control').addEventListener('click',()=>jumpChapter(-1));
  $('next-chapter-control').addEventListener('click',()=>jumpChapter(1));
  $('mute-control').addEventListener('click',()=>{audio.muted=!audio.muted;$('mute-control').textContent=audio.muted?'取消靜音':'靜音';});
  $('subtitles-toggle').addEventListener('change',event=>document.body.classList.toggle('subtitles-hidden',!event.target.checked));
  slider.addEventListener('input',()=>renderAt(Number(slider.value)));
  slider.addEventListener('change',()=>{audio.currentTime=Number(slider.value);});
  $('volume-control').addEventListener('input',event=>{audio.volume=Number(event.target.value);});
  audio.addEventListener('seeked',()=>renderAt(audio.currentTime));
  audio.addEventListener('timeupdate',()=>renderAt(audio.currentTime));
  audio.addEventListener('error',()=>{const m=document.createElement('p');m.className='playback-error';m.textContent='旁白音檔目前無法載入，請確認網站資料夾內的 MP3 檔案。';document.querySelector('.effects-panel').append(m);});
  let raf=0;const tick=()=>{if(!audio.paused)renderAt(audio.currentTime);raf=requestAnimationFrame(tick);};requestAnimationFrame(tick);
  window.renderEffectsAt=async seconds=>{renderAt(seconds);try{await img.decode();}catch{}await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));};
  window.EFFECTS_RENDER_READY=true;
  renderAt(0);
})();
