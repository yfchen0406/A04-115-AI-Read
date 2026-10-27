(()=>{
  const root=document.getElementById('root');
  if(!root)return;
  const addButton=()=>{
    const actions=root.querySelector('.hero-actions');
    if(!actions||actions.querySelector('[data-effects-link]'))return;
    const link=document.createElement('a');
    link.className='youtube-link effects-home-link';
    link.href='./reading-effects.html';
    link.dataset.effectsLink='true';
    link.textContent='動畫特效版 ✦';
    actions.append(link);
  };
  new MutationObserver(addButton).observe(root,{childList:true,subtree:true});
  addButton();
})();
