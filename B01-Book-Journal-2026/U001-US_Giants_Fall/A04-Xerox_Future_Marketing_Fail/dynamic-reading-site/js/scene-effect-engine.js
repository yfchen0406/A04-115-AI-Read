(()=>{
  const effects=Array.isArray(window.SCENE_EFFECTS)?window.SCENE_EFFECTS:[];
  const highlights=Array.isArray(window.TEXT_HIGHLIGHTS)?window.TEXT_HIGHLIGHTS:[];
  const effectById=new Map(effects.map(x=>[x.id,x]));
  const treatment=document.getElementById('sceneTreatment');
  const quote=document.getElementById('sceneQuote');
  const quoteText=document.getElementById('sceneQuoteText');
  let activeQuote=null;
  const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
  const smooth=x=>{x=clamp(x);return x*x*(3-2*x)};
  const reduced=()=>window.matchMedia?.('(prefers-reduced-motion: reduce)').matches||false;
  function clearQuote(){if(quote&&!quote.hidden){quote.hidden=true;quote.className='scene-quote';quote.removeAttribute('data-highlight-id');quoteText.textContent='';activeQuote=null}}
  function render(timeSeconds,scene,enabled=true){
    const t=Math.max(0,Number(timeSeconds)||0),id=scene?.id,fx=effectById.get(id),motionReduced=reduced();
    if(!enabled||!scene||!fx){if(treatment)treatment.hidden=true;clearQuote();return}
    if(treatment){
      const p=clamp((t-scene.start)/Math.max(.001,scene.end-scene.start));
      const envelope=motionReduced ? .42 : Math.min(smooth((t-scene.start-.35)/.35),smooth((scene.end-.45-t)/.45));
      const move=motionReduced?0:(p-.5)*2;
      treatment.hidden=false;
      treatment.className=`scene-treatment effect-${fx.mode||'glow'}`;
      const alpha=fx.alpha*envelope;
      treatment.style.setProperty('--fx-alpha',String(alpha));
      treatment.style.setProperty('--fx-soft-alpha',String(alpha*.45));
      treatment.style.setProperty('--fx-mid-alpha',String(alpha*.38));
      treatment.style.setProperty('--fx-bg-x',`${clamp(p)*100}%`);
      treatment.style.setProperty('--fx-x',`${clamp(fx.x+fx.dx*move,.08,.92)*100}%`);
      treatment.style.setProperty('--fx-y',`${clamp(fx.y+fx.dy*move,.08,.92)*100}%`);
      treatment.style.setProperty('--fx-rx',`${Math.max(9,fx.radius*190)}%`);
      treatment.style.setProperty('--fx-ry',`${Math.max(7,fx.radius*125)}%`);
      treatment.style.setProperty('--fx-progress',String(motionReduced ? .5 : p));
      const angle=Math.atan2(fx.dy,fx.dx)*180/Math.PI+90;
      treatment.style.setProperty('--fx-angle',`${angle}deg`);
    }
    const cue=highlights.find(x=>x.sceneId===id&&t>=x.start&&t<x.end);
    if(!cue){clearQuote();return}
    if(activeQuote!==cue.id){
      quote.className=`scene-quote quote-${cue.position||'upper-center'} entrance-${cue.entrance||'rise'}`;
      quote.dataset.highlightId=cue.id;
      quoteText.textContent=cue.text;
      activeQuote=cue.id;
    }
    const duration=cue.end-cue.start,p=clamp((t-cue.start)/duration),reducedNow=motionReduced;
    const fadeIn=reducedNow?0:.34,fadeOut=reducedNow?0:.32;
    const alpha=reducedNow ? .92 : Math.min(fadeIn?smooth((t-cue.start)/fadeIn):1,fadeOut?smooth((cue.end-t)/fadeOut):1);
    const textStart=cue.entrance==='underline'&&!reducedNow?cue.start+.32:cue.start;
    const textAlpha=reducedNow ? .92 : Math.min(fadeIn?smooth((t-textStart)/fadeIn):1,fadeOut?smooth((cue.end-t)/fadeOut):1);
    const shift=reducedNow?0:(1-smooth((t-cue.start)/Math.max(.001,fadeIn||.001)))*8;
    quote.hidden=false;
    quote.style.setProperty('--quote-alpha',String(alpha));
    quote.style.setProperty('--quote-text-alpha',String(textAlpha));
    quote.style.setProperty('--quote-shift',`${shift}px`);
    const rule=reducedNow?1:clamp((t-cue.start)/.42);
    quote.style.setProperty('--quote-rule',String(rule));
    quote.style.setProperty('--quote-rule-width',`${rule*36}px`);
  }
  function clear(){if(treatment)treatment.hidden=true;clearQuote()}
  window.SceneEffectEngine={render,clear,effectCount:effects.length,textCount:highlights.length};
})();
