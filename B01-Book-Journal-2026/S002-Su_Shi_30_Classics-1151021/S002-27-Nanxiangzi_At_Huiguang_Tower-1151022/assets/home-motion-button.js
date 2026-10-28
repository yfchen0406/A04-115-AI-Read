(()=>{
  const ensureButton=()=>{
    const actions=document.querySelector('.hero-actions');
    if(!actions||actions.querySelector('[data-motion-home-link]'))return;
    const link=document.createElement('a');
    link.className='start-link motion-home-link';
    link.href='./reading-motion.html';
    link.textContent='動畫特效版 ✦';
    link.setAttribute('data-motion-home-link','true');
    actions.append(link);
  };
  const observer=new MutationObserver(ensureButton);
  observer.observe(document.documentElement,{childList:true,subtree:true});
  ensureButton();
})();
