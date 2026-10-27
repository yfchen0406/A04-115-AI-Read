(() => {
  const addMotionLink = () => {
    const actions = document.querySelector('.hero-actions');
    if (!actions || actions.querySelector('.motion-link')) return;
    const link = document.createElement('a');
    link.className = 'start-link motion-link';
    link.href = './motion.html';
    link.textContent = '動畫特效版 ✦';
    link.setAttribute('aria-label', '開啟動畫特效版');
    actions.append(link);
  };

  addMotionLink();
  new MutationObserver(addMotionLink).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
