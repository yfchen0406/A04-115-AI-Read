(()=>{
  const root=document.getElementById('root');if(!root)return;
  const add=()=>{const actions=root.querySelector('.hero-actions');if(!actions||actions.querySelector('.motion-entry'))return;const a=document.createElement('a');a.className='motion-entry';a.href='./reading-motion.html';a.textContent='動畫特效版';actions.appendChild(a)};
  new MutationObserver(add).observe(root,{childList:true,subtree:true});add();
})();
