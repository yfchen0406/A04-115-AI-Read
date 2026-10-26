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
    marks = (config.regions || []).map((region) => {
      const mark = document.createElement('span');
      const kind = config.kind === 'sweep' ? 'sweep' : 'pulse';
      mark.className = `shot-effect-mark ${kind}`;
      mark.style.left = `${region.x}%`;
      mark.style.top = `${region.y}%`;
      mark.style.width = `${region.width}%`;
      mark.style.height = `${region.height}%`;
      mark.style.setProperty('--fx-color', `rgb(${config.rgb || '227 187 87'} / 0.78)`);
      mark.style.setProperty('--fx-angle', config.direction === 'rtl' ? '70deg' : '110deg');
      root.append(mark);
      return mark;
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
    const from = config.activeFrom ?? 0;
    const to = config.activeTo ?? 1;
    if (progress < from || progress > to) {
      clear();
      return;
    }

    if (activeId !== id) mount({ ...config, id });
    root.hidden = false;
    const local = clamp((progress - from) / Math.max(0.001, to - from));
    const envelope = Math.sin(Math.PI * local);

    marks.forEach((mark) => {
      mark.style.opacity = String(config.peakOpacity * Math.max(0, envelope));
      if (config.kind === 'sweep') {
        const position = config.direction === 'rtl' ? local * 100 : 100 - local * 100;
        mark.style.setProperty('--fx-shift', `${position}%`);
      }
    });
  }

  window.ShotEffectEngine = { render, clear };
})();
