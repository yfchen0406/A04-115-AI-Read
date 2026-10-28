/* Add the confirmed independent edition beside the existing Hero actions. */
(() => {
  'use strict';

  const root = document.getElementById('root');
  if (!root) return;

  let pending = false;
  const ensureHeroEntry = () => {
    pending = false;
    const actions = root.querySelector('.hero .hero-actions');
    const original = actions?.querySelector('a.start-link');
    if (!actions || !original) return;

    let link = actions.querySelector('[data-effects-entry="true"]');
    if (!link) {
      link = document.createElement('a');
      link.className = 'start-link effects-entry-link';
      link.dataset.effectsEntry = 'true';
      link.href = './effects.html';
      link.textContent = '動畫特效版 ✦';
      actions.append(link);
    }

    // React can recreate the Hero; retain exactly one correctly placed link.
    const entries = actions.querySelectorAll('[data-effects-entry="true"]');
    for (let index = 1; index < entries.length; index += 1) entries[index].remove();
    if (actions.lastElementChild !== link) actions.append(link);
  };

  const schedule = () => {
    if (!pending) {
      pending = true;
      requestAnimationFrame(ensureHeroEntry);
    }
  };

  new MutationObserver(schedule).observe(root, { childList: true, subtree: true });
  window.addEventListener('hashchange', schedule);
  schedule();
})();
