(() => {
  const addButton = () => {
    const actions = document.querySelector('.hero-actions');
    const start = actions?.querySelector('.start-link');
    if (!actions || !start || actions.querySelector('#motion-effects-link')) return;
    const link = document.createElement('a');
    link.id = 'motion-effects-link';
    link.className = 'start-link motion-effects-link';
    link.href = './effects.html';
    link.textContent = '動畫特效版 ✦';
    link.setAttribute('aria-label', '進入動畫特效版閱讀');
    start.insertAdjacentElement('afterend', link);
  };
  addButton();
  const observer = new MutationObserver(addButton);
  observer.observe(document.getElementById('root') || document.body, { childList: true, subtree: true });
})();
