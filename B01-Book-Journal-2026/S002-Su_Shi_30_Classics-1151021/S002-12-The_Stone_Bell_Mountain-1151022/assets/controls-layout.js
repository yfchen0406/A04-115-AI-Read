(()=>{
  const root=document.getElementById('root');
  if(!root||document.body.dataset.page!=='reader')return;
  const attach=()=>{
    const row=root.querySelector('.player-panel .control-row');
    if(!row||row.querySelector('[data-subtitle-toggle]'))return;
    const label=document.createElement('label');
    label.className='subtitle-control';
    label.dataset.subtitleToggle='true';
    const input=document.createElement('input');
    input.type='checkbox';input.checked=!document.body.classList.contains('subtitles-hidden');
    input.setAttribute('aria-label','顯示字幕');
    const text=document.createElement('span');text.textContent='字幕';
    input.addEventListener('change',()=>document.body.classList.toggle('subtitles-hidden',!input.checked));
    label.append(input,text);row.append(label);
  };
  new MutationObserver(attach).observe(root,{childList:true,subtree:true});
  attach();
})();
