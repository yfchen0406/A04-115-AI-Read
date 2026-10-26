(() => {
  const root = document.getElementById('shotEffect');
  const configurations = new Map((window.SHOT_EFFECTS || []).map((effect) => [effect.id, effect]));
  let activeId = null;
  let marks = [];

  if (!root) return;

  const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(max, value));
  const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  function clear() {
    root.hidden = true;
    root.replaceChildren();
    root.removeAttribute('data-effect-id');
    activeId = null;
    marks = [];
  }

  function mount(config) {
    root.replaceChildren();
    marks = config.targets.map((target, index) => {
      const mark = document.createElement('span');
      const kind = config.kind === 'sweep' ? 'sweep' : 'pulse';
      const radius = config.radii[index] || config.radii[0] || 22;
      const width = kind === 'sweep' ? Math.max(38, radius * 2.2) : radius * 2;
      const height = kind === 'sweep' ? Math.max(19, radius * 1.1) : radius * 1.45;
      mark.className = `shot-effect-mark ${kind}`;
      mark.style.left = `${target.x - width / 2}%`;
      mark.style.top = `${target.y - height / 2}%`;
      mark.style.width = `${width}%`;
      mark.style.height = `${height}%`;
      mark.style.setProperty('--fx-color', `rgb(${config.rgb} / 0.78)`);
      mark.style.setProperty('--fx-angle', config.direction === 'rtl' ? '70deg' : '110deg');
      root.append(mark);
      return { element: mark, index };
    });
    root.dataset.effectId = config.id;
    activeId = config.id;
  }

  function render(id, time, fallbackHidden = true, chapterTitleVisible = false) {
    const config = configurations.get(id);
    if (!config || !window.SHOT_EFFECTS_CONFIG?.enabled || !fallbackHidden || chapterTitleVisible || (window.SHOT_EFFECTS_CONFIG?.respectReducedMotion !== false && reducedMotion())) {
      clear();
      return;
    }

    const progress = clamp((time - config.start) / Math.max(0.001, config.end - config.start));
    const from = config.activeFrom ?? 0.18;
    const to = config.activeTo ?? 0.82;
    if (progress < from || progress > to) {
      clear();
      return;
    }

    if (activeId !== id) mount(config);
    root.hidden = false;
    const local = clamp((progress - from) / Math.max(0.001, to - from));

    marks.forEach(({ element, index }) => {
      let envelope;
      if (config.kind === 'multi') {
        const phase = local * marks.length - index;
        envelope = phase >= 0 && phase <= 1 ? Math.sin(Math.PI * phase) : 0;
      } else {
        envelope = Math.sin(Math.PI * local);
      }
      element.style.opacity = String(config.peakOpacity * Math.max(0, envelope));
      if (config.kind === 'sweep') {
        const position = config.direction === 'rtl' ? local * 100 : 100 - local * 100;
        element.style.setProperty('--fx-shift', `${position}%`);
      }
    });
  }

  window.ShotEffectEngine = { render, clear };
})();
