(()=>{
  const install=()=>{
    const row=document.querySelector('.hero-actions');
    if(!row||row.querySelector('[data-motion-entry]'))return;
    const link=document.createElement('a');
    link.className='start-link motion-entry';
    link.href='./motion.html';
    link.dataset.motionEntry='true';
    link.textContent='動畫特效版 ✦';
    row.append(link);
  };
  const root=document.getElementById('root');
  if(!root)return;
  new MutationObserver(install).observe(root,{childList:true,subtree:true});
  install();
})();
