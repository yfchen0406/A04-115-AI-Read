/* Additive GSAP layer for the existing Qing history site. */
(() => {
  'use strict';
  const STORE = 'qing-site-motion-enabled';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  const button = document.getElementById('motionToggle');
  let context = null;
  let eventObserver = null;
  let initialized = false;
  let preferenceOverride = null;
  const gsapReady = () => window.gsap && window.ScrollTrigger;
  const readPreference = () => { try { return localStorage.getItem(STORE); } catch (_) { return preferenceOverride; } };
  const writePreference = value => { preferenceOverride = value; try { localStorage.setItem(STORE, value); } catch (_) {} };
  const enabled = () => readPreference() !== 'false' && !reduced.matches;

  function updateButton() {
    const on = enabled();
    root.classList.toggle('qing-motion-off', !on);
    if (button) {
      button.textContent = reduced.matches ? '動畫效果：系統減少動態' : '動畫效果：' + (on ? '開啟' : '關閉');
      button.disabled = reduced.matches;
      button.setAttribute('aria-pressed', String(on));
      button.setAttribute('aria-label', reduced.matches ? '系統偏好已降低動態效果' : (on ? '關閉動畫效果' : '開啟動畫效果'));
    }
    window.dispatchEvent(new CustomEvent('qingmotionchange', { detail: { enabled: on } }));
  }

  function cleanup() {
    if (context) { context.revert(); context = null; }
    if (eventObserver) { eventObserver.disconnect(); eventObserver = null; }
    if (gsapReady()) window.ScrollTrigger.getAll().filter(t => t.vars && t.vars.qingMotion).forEach(t => t.kill());
  }

  function setupEventMotion() {
    if (!gsapReady()) return;
    const list = document.getElementById('events');
    if (!list) return;
    window.ScrollTrigger.getAll().filter(t => t.vars && t.vars.qingEventMotion).forEach(t => t.kill());
    list.querySelectorAll('.event').forEach((card, i) => {
      const year = card.querySelector('strong');
      if (!year) return;
      let yearLabel = year.querySelector('.qing-year');
      const match = year.textContent.match(/^(\d{4})([\s\S]*)$/);
      if (match && !yearLabel) {
        yearLabel = document.createElement('span');
        yearLabel.className = 'qing-year';
        yearLabel.textContent = match[1];
        year.replaceChildren(yearLabel, document.createTextNode(match[2]));
      }
      const targetYear = match ? Number(match[1]) : null;
      window.gsap.fromTo(card, {opacity:0,y:16}, {opacity:1,y:0,duration:.45,delay:(i%4)*.06,scrollTrigger:{trigger:card,start:'top 88%',once:true,qingMotion:true,qingEventMotion:true,onEnter:()=>{
        if (yearLabel && targetYear) window.gsap.fromTo(yearLabel,{textContent:1600},{textContent:targetYear,duration:.75,snap:{textContent:1},ease:'power1.out',overwrite:true});
      }}});
    });
    window.ScrollTrigger.refresh();
  }
  function prepareVisuals() {
    if (initialized) return;
    const header = document.querySelector('header');
    if (header) {
      if (!header.querySelector('.qing-cover-art')) { const art=document.createElement('i'); art.className='qing-cover-art'; art.setAttribute('aria-hidden','true'); header.insertBefore(art, header.firstChild); }
      if (!header.querySelector('.qing-cloud')) ['one','two'].forEach(name => { const el=document.createElement('i'); el.className=`qing-cloud qing-cloud--${name}`; el.setAttribute('aria-hidden','true'); header.append(el); });
      if (!header.querySelector('.qing-seal')) { const seal=document.createElement('span'); seal.className='qing-seal'; seal.textContent='御\n製'; seal.setAttribute('aria-hidden','true'); header.append(seal); }
    }
    const visuals = [
      ['kangxi','kangxi-portrait-ai.webp','康熙帝宮廷肖像插畫','qing-portrait-figure'],
      ['yongzheng','yongzheng-portrait-ai.webp','雍正帝宮廷肖像插畫','qing-portrait-figure'],
      ['qianlong','qianlong-portrait-ai.webp','乾隆帝宮廷肖像插畫','qing-portrait-figure'],
      ['qianlong','qianlong-landscape-ai.webp','乾隆時代山水長卷插畫','qing-scroll-figure']
    ];
    visuals.forEach(([sectionId,file,alt,kind]) => {
      const section=document.getElementById(sectionId);
      if (!section || section.querySelector(`[data-qing-visual="${file}"]`)) return;
      const figure=document.createElement('figure'); figure.className=`qing-visual ${kind}`; figure.dataset.qingVisual=file;
      const image=document.createElement('img'); image.src=`./images/${file}`; image.alt=alt; image.loading='lazy'; image.decoding='async';
      const caption=document.createElement('figcaption'); caption.textContent='AI 生成歷史意象插畫，供教學視覺參考，非史料原件。';
      figure.append(image,caption);
      const intro=Array.from(section.children).find(el=>el.tagName==='P');
      if (intro) { let cursor=intro; while(cursor.nextElementSibling && cursor.nextElementSibling.matches('[data-qing-visual]')) cursor=cursor.nextElementSibling; cursor.after(figure); }
      else section.prepend(figure);
    });
    document.querySelectorAll('section h2').forEach(h => {
      if (!h.nextElementSibling || !h.nextElementSibling.classList.contains('qing-scroll-line')) {
        const line=document.createElement('div'); line.className='qing-scroll-line'; line.setAttribute('aria-hidden','true'); h.after(line);
      }
    });
    initialized = true;
  }
  function animate() {
    cleanup();
    updateButton();
    prepareVisuals();
    if (!enabled()) return;
    if (!gsapReady()) {
      // Preserve content visibility if CDN access is unavailable; native reveal observer remains in charge.
      return;
    }
    window.gsap.registerPlugin(window.ScrollTrigger);
    context = window.gsap.context(() => {
      const gsap = window.gsap;
      gsap.set('.qing-seal',{opacity:0,scale:.85});
      gsap.timeline({defaults:{ease:'power2.out'}})
        .fromTo('header',{clipPath:'inset(0 48% 0 48% round 2px)'},{clipPath:'inset(0 0% 0 0% round 2px)',duration:1.65})
        .fromTo('header .qing-cover-art',{opacity:0,scale:1},{opacity:.14,scale:1.055,duration:2.2},'<')
        .fromTo('header .hero-inner',{opacity:0,y:18,scale:.98},{opacity:1,y:0,scale:1,duration:.95},'-=.22')
        .fromTo('header .qing-seal',{opacity:0,scale:.85,rotation:5},{opacity:.86,scale:1,rotation:0,duration:.4},'-=.12');
      gsap.utils.toArray('.qing-scroll-line').forEach(line => gsap.fromTo(line,{scaleX:0},{scaleX:1,duration:.8,ease:'power2.out',scrollTrigger:{trigger:line,start:'top 88%',once:true,qingMotion:true}}));
      setupEventMotion();
      const eventList=document.getElementById('events');
      if(eventList && 'MutationObserver' in window){eventObserver=new MutationObserver(()=>setupEventMotion());eventObserver.observe(eventList,{childList:true});}
      const progress=document.querySelector('#timeline .timeline');
      if(progress) window.ScrollTrigger.create({trigger:progress,start:'top 72%',end:'bottom 42%',scrub:.4,qingMotion:true,onUpdate:self=>progress.style.setProperty('--timeline-progress',self.progress)});
      gsap.utils.toArray('#economy .econ-panel,#world .world-panel').forEach((panel,i)=>gsap.fromTo(panel,{opacity:0,y:18},{opacity:1,y:0,duration:.55,delay:(i%3)*.08,scrollTrigger:{trigger:panel,start:'top 88%',once:true,qingMotion:true}}));
      gsap.utils.toArray('#overview .card,#compare .card,#compare article').forEach((card,i)=>{
        const mobile=window.matchMedia('(max-width:720px)').matches;
        gsap.fromTo(card,{opacity:0,x:mobile?0:(i%2?-18:18),y:mobile?12:0},{opacity:1,x:0,y:0,clearProps:'transform',duration:.5,delay:(i%3)*.09,scrollTrigger:{trigger:card,start:'top 88%',once:true,qingMotion:true}});
      });
      gsap.utils.toArray('section h2').forEach(h=>gsap.fromTo(h,{opacity:0,y:h.closest('#yongzheng')?-18:10},{opacity:1,y:0,duration:.5,scrollTrigger:{trigger:h,start:'top 88%',once:true,qingMotion:true}}));
      const compactMotion=window.matchMedia('(max-width:720px)').matches;
      const chapterScenes=[['#kangxi .chapter','left'],['#yongzheng .chapter','top'],['#qianlong .chapter','landscape']];
      chapterScenes.forEach(([selector,style])=>gsap.utils.toArray(selector).forEach((card,i)=>{
        const trigger={trigger:card,start:'top 86%',once:true,qingMotion:true};
        if(compactMotion){gsap.fromTo(card,{opacity:0,y:10},{opacity:1,y:0,duration:.45,clearProps:'transform',scrollTrigger:trigger});return;}
        if(style==='left') gsap.fromTo(card,{clipPath:'inset(0 100% 0 0)',opacity:.65},{clipPath:'inset(0 0 0 0)',opacity:1,duration:.7,delay:(i%3)*.08,ease:'power2.out',clearProps:'transform',scrollTrigger:trigger});
        else if(style==='top') gsap.fromTo(card,{clipPath:'inset(0 0 100% 0)',opacity:.7},{clipPath:'inset(0 0 0 0)',opacity:1,duration:.62,delay:(i%3)*.08,ease:'power2.out',clearProps:'transform',scrollTrigger:trigger});
        else gsap.fromTo(card,{opacity:0,y:16,scale:.99},{opacity:1,y:0,scale:1,duration:.65,delay:(i%3)*.08,ease:'power2.out',clearProps:'transform',scrollTrigger:trigger});
      }));
      gsap.utils.toArray('.qing-portrait-figure').forEach((figure,i)=>gsap.fromTo(figure,{opacity:0,y:18,x:i===0?-10:10},{opacity:1,y:0,x:0,clearProps:'transform',duration:.7,ease:'power2.out',scrollTrigger:{trigger:figure,start:'top 85%',once:true,qingMotion:true}}));
      const landscapeDrift=compactMotion?6:12; const landscapeScale=compactMotion?1.03:1.06;
      gsap.utils.toArray('.qing-scroll-figure img').forEach(img=>gsap.fromTo(img,{y:landscapeDrift,scale:landscapeScale},{y:-landscapeDrift,scale:compactMotion?1.05:1.1,ease:'none',scrollTrigger:{trigger:img,start:'top bottom',end:'bottom top',scrub:.5,qingMotion:true}}));
      gsap.utils.toArray('.econ-section h3,.econ-info,.econ-warning').forEach(el=>gsap.fromTo(el,{opacity:0,y:8},{opacity:1,y:0,duration:.35,scrollTrigger:{trigger:el,start:'top 90%',once:true,qingMotion:true}}));
      gsap.utils.toArray('.dates').forEach(el=>gsap.fromTo(el,{opacity:0},{opacity:1,duration:.55,scrollTrigger:{trigger:el,start:'top 90%',once:true,qingMotion:true}}));
      gsap.to('header .qing-cover-art',{y:-18,ease:'none',scrollTrigger:{trigger:'header',start:'top top',end:'bottom top',scrub:.5,qingMotion:true}});
      window.ScrollTrigger.refresh();
    });
  }

  if (button) button.addEventListener('click', () => {
    const willEnable = !enabled();
    writePreference(String(willEnable));
    const scrollY = window.scrollY;
    animate();
    window.scrollTo({top:scrollY,behavior:'auto'});
  });
  const onMotionPreferenceChange = () => animate();
  if (reduced.addEventListener) reduced.addEventListener('change', onMotionPreferenceChange);
  else reduced.addListener?.(onMotionPreferenceChange);
  window.addEventListener('load', () => { if (!initialized) animate(); }, {once:true});
  window.addEventListener('beforeunload', cleanup, {once:true});
  document.addEventListener('click', event => {
    const card = event.target.closest('#timeline .event');
    if (!card || !gsapReady() || !enabled()) return;
    const year = card.querySelector('strong');
    window.gsap.fromTo(year, {color:'#9b211e',y:-2}, {color:'#832e21',y:0,duration:.55,ease:'power1.out',overwrite:true});
  });
  updateButton();
})();
