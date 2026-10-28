(()=>{
  const manifest=window.MOTION_EFFECTS_MANIFEST;
  if(!manifest||document.body.dataset.motionEffects!=='true')return;
  const $=(selector,root=document)=>root.querySelector(selector);
  const start=()=>{
  const stage=$('#stage-wrap');
  const audio=$('.master-audio');
  if(!stage||!audio){requestAnimationFrame(start);return;}

  const layer=document.createElement('div');
  layer.className='motion-effects-layer';
  layer.hidden=true;
  layer.setAttribute('aria-hidden','true');
  const field=document.createElement('div');
  field.className='motion-effect-field';
  const poem=document.createElement('div');
  poem.className='motion-poem-layer';
  poem.setAttribute('aria-live','off');
  layer.append(field,poem);
  stage.append(layer);

  let currentImage='';
  let currentQuoteKey='';
  let reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  layer.classList.toggle('is-reduced',reduced);
  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener?.('change',event=>{
    reduced=event.matches;
    layer.classList.toggle('is-reduced',reduced);
  });

  const smooth=value=>{const x=Math.max(0,Math.min(1,value));return x*x*(3-2*x)};
  const envelope=(now,start,end)=>Math.min(1,smooth((now-start)/180),smooth((end-now)/180));
  const scenes=manifest.scenes;
  const findScene=now=>{
    let lo=0,hi=scenes.length-1;
    while(lo<=hi){const mid=(lo+hi)>>1,scene=scenes[mid];
      if(now<scene.startMs)hi=mid-1;
      else if(now>=scene.endMs)lo=mid+1;
      else return scene;
    }
    return null;
  };
  const renderQuotes=(active,now)=>{
    const unique=[];
    for(const item of active){if(!unique.some(row=>row.text===item.text))unique.push(item);}
    const key=unique.map(item=>`${item.cueId}:${item.sceneId}:${item.text}`).join('|');
    if(key!==currentQuoteKey){
      poem.replaceChildren();
      for(const item of unique){const line=document.createElement('p');line.textContent=item.text;poem.append(line);}
      currentQuoteKey=key;
      poem.dataset.position=unique[0]?.position?.key||'upper-center';
      poem.dataset.cueIds=[...new Set(unique.map(item=>item.cueId))].join(' ');
    }
    if(!unique.length){poem.style.opacity='0';return;}
    const alpha=Math.max(...unique.map(item=>envelope(now,item.startMs,item.endMs)));
    poem.style.opacity=String(alpha);
  };
  const update=()=>{
    const now=audio.currentTime*1000;
    const scene=findScene(now);
    const cover=$('.cover-start',stage);
    if(!scene||cover){layer.hidden=true;currentImage='';currentQuoteKey='';requestAnimationFrame(update);return;}
    layer.hidden=false;
    if(currentImage!==scene.id){
      currentImage=scene.id;
      field.dataset.family=scene.effectType;
      field.dataset.variant=String(scene.variant);
      poem.dataset.position=scene.quotePosition?.key||'upper-center';
      layer.dataset.image=scene.id;
      layer.dataset.chapter=scene.chapter||'';
    }
    const duration=Math.max(1,scene.endMs-scene.startMs);
    const rawProgress=Math.max(0,Math.min(1,(now-scene.startMs)/duration));
    const progress=reduced?0.5:rawProgress;
    const fade=envelope(now,scene.startMs,scene.endMs);
    field.style.setProperty('--motion-progress',reduced?'0.5':String(progress));
    field.style.setProperty('--effect-alpha',String(scene.intensity*fade));
    field.style.setProperty('--focus-x',`${scene.effectFocusX*100}%`);
    const direction=scene.variant%2===0?1:-1;
    const strength=[.72,1,1.22,.86,1.1][scene.variant%5];
    const shiftX=scene.effectType==='water'?direction*(progress-.5)*10*strength:scene.effectType==='architecture'?direction*(progress-.5)*38*strength:scene.effectType==='wind'?direction*(progress-.5)*7*strength:scene.effectType==='paper'?direction*(progress-.5)*28*strength:scene.effectType==='sky'?direction*(progress-.5)*3*strength:0;
    const shiftY=scene.effectType==='water'?-progress*.8*strength:scene.effectType==='flower'?direction*(progress-.5)*2*strength:scene.effectType==='sky'?direction*(.5-progress)*1.2*strength:0;
    const scale=scene.effectType==='wine'?1+progress*.035*strength:scene.effectType==='flower'?1+progress*.035*strength:scene.effectType==='general'?1+progress*.03*strength:1;
    field.style.setProperty('--motion-shift-x',`${shiftX}%`);
    field.style.setProperty('--motion-shift-y',`${shiftY}%`);
    field.style.setProperty('--motion-scale',String(reduced?1:scale));
    const active=manifest.poemOverlays.filter(item=>item.sceneId===scene.id&&now>=item.startMs&&now<item.endMs);
    renderQuotes(active,now);
    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
  };
  start();
})();
