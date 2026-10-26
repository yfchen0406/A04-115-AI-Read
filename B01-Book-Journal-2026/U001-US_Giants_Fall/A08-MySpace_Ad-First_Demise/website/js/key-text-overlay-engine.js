(() => {
  const root = document.getElementById('keyTextOverlays');
  const stage = document.getElementById('stage');
  const mobileHost = document.getElementById('keyTextMobileHost');
  const cues = Array.isArray(window.KEY_TEXT_OVERLAYS) ? window.KEY_TEXT_OVERLAYS : [];
  if (!root || !stage) return;

  const nodes = new Map();
  const clamp = (n) => Math.max(0, Math.min(1, n));
  const mobileQuery = window.matchMedia('(max-width: 1024px)');
  const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let lastRender = null;

  cues.forEach((cue) => {
    const node = document.createElement('div');
    node.className = 'key-text-overlay';
    node.dataset.textId = cue.id;
    node.textContent = cue.text;
    node.style.left = `${cue.x}%`;
    node.style.top = `${cue.y}%`;
    node.style.maxWidth = `${cue.maxWidth}%`;
    node.style.fontSize = `clamp(16px, 2.3vw, ${cue.fontSize}px)`;
    node.style.color = cue.color;
    node.hidden = true;
    root.append(node);
    nodes.set(cue.id, node);
  });

  function place(enabled) {
    const mobile = mobileQuery.matches && Boolean(mobileHost);
    const parent = mobile ? mobileHost : stage;
    if (root.parentElement !== parent) parent.append(root);
    if (mobileHost) mobileHost.hidden = !mobile || !enabled;
    return mobile;
  }

  function clear() {
    root.hidden = true;
    nodes.forEach((node) => { node.hidden = true; });
    place(Boolean(window.KEY_TEXT_OVERLAYS_CONFIG?.enabled));
  }

  function render(sceneId, time, fallbackHidden = true) {
    lastRender = [sceneId, time, fallbackHidden];
    const config = window.KEY_TEXT_OVERLAYS_CONFIG || {};
    const mobile = place(Boolean(config.enabled));
    if (!config.enabled || !fallbackHidden) { clear(); return; }

    let visible = false;
    cues.forEach((cue) => {
      const node = nodes.get(cue.id);
      const active = cue.sceneId === sceneId && time >= cue.start && time < cue.end;
      if (!active) { node.hidden = true; return; }
      const elapsed = (time - cue.start) * 1000;
      const remaining = (cue.end - time) * 1000;
      const fadeIn = cue.fadeInMs ? clamp(elapsed / cue.fadeInMs) : 1;
      const fadeOut = cue.fadeOutMs ? clamp(remaining / cue.fadeOutMs) : 1;
      const reduced = config.respectReducedMotion !== false && reducedQuery.matches;
      const alpha = reduced ? 1 : Math.min(fadeIn, fadeOut);
      node.hidden = false;
      node.style.opacity = String(alpha);
      node.style.transform = mobile ? 'none' : `translate(-50%, calc(-50% + ${(1 - alpha) * 6}px))`;
      visible = true;
    });
    root.hidden = !visible;
  }

  const rerender = () => { if (lastRender) render(...lastRender); else place(Boolean(window.KEY_TEXT_OVERLAYS_CONFIG?.enabled)); };
  mobileQuery.addEventListener('change', rerender);
  reducedQuery.addEventListener('change', rerender);
  window.KeyTextOverlayEngine = { render, clear };
})();
