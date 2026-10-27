(() => {
  const insertMotionLink = () => {
    const actions = document.querySelector('.hero-actions');
    const start = actions?.querySelector('.start-link');
    if (!actions || !start || actions.querySelector('.motion-entry-link')) return false;
    const link = document.createElement('a');
    link.className = 'motion-entry-link';
    link.href = './motion.html';
    link.setAttribute('aria-label', '開啟動畫特效版');
    link.textContent = '動畫特效版 ✦';
    actions.append(link);
    return true;
  };
  if (insertMotionLink()) return;
  const root = document.getElementById('root') || document.body;
  const observer = new MutationObserver(() => {
    if (insertMotionLink()) observer.disconnect();
  });
  observer.observe(root, { childList: true, subtree: true });
})();

