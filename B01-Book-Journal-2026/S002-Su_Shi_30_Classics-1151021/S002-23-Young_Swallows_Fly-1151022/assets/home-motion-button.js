(() => {
  const add = () => {
    const actions = document.querySelector('.hero-actions');
    if (!actions || actions.querySelector('.motion-link')) return;
    const link = document.createElement('a');
    link.className = 'start-link motion-link';
    link.href = './motion.html';
    link.textContent = '動畫特效版 ✦';
    link.setAttribute('aria-label', '開啟動畫特效版');
    actions.append(link);
  };
  add();
  new MutationObserver(add).observe(document.getElementById('root') || document.body, { childList: true, subtree: true });
})();
