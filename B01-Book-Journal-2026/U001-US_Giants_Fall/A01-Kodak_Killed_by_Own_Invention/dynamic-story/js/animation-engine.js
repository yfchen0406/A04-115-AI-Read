(()=>{
  const cfg=window.ANIMATION_CONFIG||{}, cues=(window.ANIMATION_CUES||[]).filter(c=>c.enabled).slice().sort((a,b)=>a.startMs-b.startMs);
  const audio=document.getElementById('audio'),stage=document.querySelector('.stage'),host=document.getElementById('animationOverlay');
  if(!audio||!stage||!host)return;
  const card=document.createElement('article');card.className='animation-card';card.setAttribute('aria-live','polite');host.append(card);
  const kinds=['year-timeline','number-counter','before-after','capital-flow','breaking-news','map-expansion','product-evolution','decision-fork','reveal-question','key-phrase','evidence-card','emotional-pause'];
  const captions={'year-timeline':'時間節點','number-counter':'關鍵數字','before-after':'前後對照','capital-flow':'價值流向示意','breaking-news':'重大事件','map-expansion':'地域示意','product-evolution':'產品演進','decision-fork':'假設情境','reveal-question':'關鍵提問','key-phrase':'旁白觀點','evidence-card':'資料核對','emotional-pause':'留白'};
  let visibleId='',raf=0;
  const enabled=()=>cfg.enabled!==false;
  function activeCue(t){if(!enabled())return null;return cues.find(c=>c.startMs<=t*1000&&t*1000<c.endMs&&cfg.types?.[c.type]!==false)||null;}
  function node(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n;}
  function content(c){card.replaceChildren();
    const kicker=node('p','animation-kicker',captions[c.type]||'旁白提示');card.append(kicker);
    if(c.layout==='quote'){
      card.append(node('h3','animation-title',c.title));
    }else if(c.type==='before-after'){
      card.append(node('h3','animation-title',c.title));const cols=node('div','animation-columns');
      const left=node('div','animation-column');left.append(node('small','','可能的改變'));left.append(node('strong','',c.subtitle.split('｜')[0]||c.subtitle));
      const right=node('div','animation-column');right.append(node('small','','旁白提出的另一面'));right.append(node('strong','',c.subtitle.split('｜')[1]||'情境推演'));
      cols.append(left,right);card.append(cols);
    }else if(c.type==='capital-flow'||c.type==='product-evolution'||c.type==='map-expansion'||c.type==='decision-fork'){
      card.append(node('h3','animation-title',c.title));const steps=node('div','animation-steps');
      const sep=c.type==='decision-fork'?'｜':'→';c.subtitle.split(sep).forEach((part,i)=>{if(i)steps.append(node('span','animation-step-arrow',sep));steps.append(node('span','animation-step',part.trim()));});card.append(steps);
    }else{
      card.append(node('h3','animation-title',c.title));if(c.subtitle)card.append(node('p','animation-subtitle',c.subtitle));
    }
    if(c.verified){card.append(node('span','animation-badge','已核對來源'));}else if(c.type!=='emotional-pause'){
      card.append(node('span','animation-badge',c.type==='reveal-question'?'旁白提問':'旁白整理／示意'));
    }
    if(c.type==='evidence-card'||c.type==='breaking-news')card.append(node('p','animation-source',c.sourceNote));
    const track=node('div','animation-track');track.append(node('span'));card.append(track);
  }
  function render(){raf=0;const t=audio.currentTime||0,ms=t*1000,c=activeCue(t),chapter=window.CHAPTERS?.reduce((found,ch)=>ch.start<=t?ch:found,null),chapterTitleVisible=!!chapter&&t>=chapter.start&&t<chapter.start+1.5;
    const show=!!c&&!chapterTitleVisible;
    stage.classList.toggle('animation-paused',audio.paused);
    stage.classList.toggle('animation-low-motion',window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if(!show){card.classList.remove('is-visible');host.setAttribute('aria-hidden','true');host.hidden=true;visibleId='';if(!audio.paused&&!audio.ended)raf=requestAnimationFrame(render);return;}
    host.hidden=false;host.setAttribute('aria-hidden','false');host.className='animation-overlay '+(c.position==='top-left'?'position-left':c.position==='center'?'position-center':'');
    if(visibleId!==c.id){content(c);visibleId=c.id;}
    const p=Math.max(0,Math.min(1,(ms-c.startMs)/(c.endMs-c.startMs)));const track=card.querySelector('.animation-track span');if(track)track.style.transform='scaleX('+p+')';
    card.classList.add('is-visible');if(!audio.paused&&!audio.ended)raf=requestAnimationFrame(render);
  }
  function queue(){if(!raf)raf=requestAnimationFrame(render);}
  audio.addEventListener('timeupdate',queue);audio.addEventListener('seeked',queue);audio.addEventListener('play',queue);audio.addEventListener('pause',queue);audio.addEventListener('ended',queue);audio.addEventListener('ratechange',queue);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)queue();});
  document.addEventListener('change',e=>{if(e.target.matches('[data-animation-type],#animationMaster')){if(e.target.id==='animationMaster')cfg.enabled=e.target.checked;else cfg.types[e.target.dataset.animationType]=e.target.checked;queue();}});
  document.querySelectorAll('[data-animation-type]').forEach(input=>input.checked=cfg.types?.[input.dataset.animationType]!==false);
  const master=document.getElementById('animationMaster');if(master)master.checked=cfg.enabled!==false;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener)window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',queue);
  render();
})();
