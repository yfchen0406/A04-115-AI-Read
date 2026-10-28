(() => {
  const addEffectsLink = () => {
    const actions = document.querySelector('.hero-actions');
    if (!actions || actions.querySelector('.effects-link')) return Boolean(actions);
    const link = document.createElement('a');
    link.className = 'effects-link';
    link.href = './effects.html';
    link.textContent = '動畫特效版 ✦';
    actions.append(link);
    return true;
  };

  if (addEffectsLink()) return;
  const observer = new MutationObserver(() => {
    if (addEffectsLink()) observer.disconnect();
  });
  observer.observe(document.getElementById('root') || document.body, { childList: true, subtree: true });
})();
