(() => {
  'use strict';
  const data = window.APPROVED_MOTION_DATA;
  const model = window.ApprovedMotionModel;
  const audio = document.getElementById('audio');
  const stage = document.getElementById('stage');
  const toggle = document.getElementById('approvedEffectsToggle');
  const light = document.getElementById('approvedLight');
  const space = light?.firstElementChild;
  const card = document.getElementById('approvedText');
  const fallback = document.getElementById('fallback');
  if (!data || !model || !audio || !stage || !toggle || !space || !card) return;
  const configs = new Map(data.visuals.map(v => [v.sceneId, v]));
  const mobile = window.matchMedia('(max-width: 760px)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let marks = [], mounted = null;
  let lastState = { visual: null, text: null, textHiddenReason: null };

  function options(chapterVisible) {
    return { enabled: toggle.checked, mobile: mobile.matches, reduced: reduced.matches, chapterVisible, fallback: !fallback.hidden };
  }

  function clearVisual() {
    light.hidden = true;
    light.removeAttribute('data-effect-id');
    lastState.visual = null;
  }

  function clearText(reason = null) {
    card.hidden = true;
    card.removeAttribute('data-text-id');
    card.removeAttribute('data-placement');
    card.textContent = '';
    lastState.text = null;
    lastState.textHiddenReason = reason;
  }

  function renderVisual(sceneId, seconds, fallbackHidden = true, chapterVisible = false) {
    const config = configs.get(sceneId);
    const state = model.visual(config, seconds * 1000, { ...options(chapterVisible), fallback: !fallbackHidden });
    const image = stage.querySelector('.visual.active');
    if (!state || !image || !image.complete || !image.naturalWidth || !image.getAttribute('src')?.endsWith(config.image)) {
      clearVisual();
      return;
    }
    if (mounted !== state.id) {
      marks = state.marks.map(() => {
        const mark = document.createElement('span');
        mark.className = 'approved-light-mark';
        return mark;
      });
      space.replaceChildren(...marks);
      mounted = state.id;
    }
    // The mask follows exactly the displayed image's original, time-derived transform.
    space.style.transform = image.style.transform || 'none';
    state.marks.forEach((m, i) => {
      const el = marks[i];
      el.style.opacity = String(m.opacity);
      if (state.kind === 'vignette') {
        el.style.cssText = `position:absolute;inset:0;opacity:${m.opacity};background:radial-gradient(ellipse ${m.width / 2}% ${m.height / 2}% at ${m.x}% ${m.y}%,transparent 45%,#000 100%);`;
      } else {
        el.style.left = `${m.x - m.width / 2}%`;
        el.style.top = `${m.y - m.height / 2}%`;
        el.style.width = `${m.width}%`;
        el.style.height = `${m.height}%`;
        el.style.background = `radial-gradient(ellipse,rgb(${state.rgb}) 0%,rgba(${state.rgb},0.48) 32%,rgba(${state.rgb},0) 72%)`;
      }
    });
    light.dataset.effectId = state.id;
    light.hidden = false;
    lastState.visual = state;
  }

  function renderText(ms, chapterVisible = false) {
    const state = model.text(data.texts, ms, options(chapterVisible));
    if (!state) { clearText(); return; }
    const placement = data.placements.find(p => p.textId === state.id && ms >= p.startMs && ms < p.endMs);
    const image = stage.querySelector('.visual.active');
    const config = placement && configs.get(placement.sceneId);
    if (!placement || !image || !image.complete || !image.naturalWidth || !image.getAttribute('src')?.endsWith(config.image)) {
      clearText('image-not-ready'); return;
    }
    if (card.dataset.textId !== state.id) card.textContent = state.text;
    card.dataset.textId = state.id;
    card.dataset.placement = `${state.id}-${placement.sceneId}`;
    card.style.left = `${placement.xPercent}%`;
    card.style.top = `${placement.yPercent}%`;
    card.style.width = `${placement.widthPercent}%`;
    const stageBox = stage.getBoundingClientRect();
    const scale = stageBox.width / 1150;
    if (!scale || !stageBox.height) { clearText('stage-not-ready'); return; }
    card.style.padding = `${8 * scale}px ${10 * scale}px`;
    card.style.fontSize = `${Math.max(18, Math.min(28, placement.referenceFontPx * scale))}px`;
    card.style.opacity = String(state.opacity);
    const lift = mobile.matches ? 0 : state.lift;
    card.style.transform = `translateY(${lift}px)`;
    card.style.visibility = 'hidden';
    card.hidden = false;
    const fits = () => card.scrollHeight <= stageBox.height * placement.heightPercent / 100 + 2;
    // Font metrics can differ between installed Kai fonts. Stay inside the approved
    // frame, never truncate the quote, and never shrink below the confirmed 18px.
    for (let size = Number.parseFloat(card.style.fontSize); !fits() && size > 18;) {
      size = Math.max(18, size - 0.5);
      card.style.fontSize = `${size}px`;
    }
    if (!fits()) { clearText('safe-frame-too-small'); return; }
    const box = card.getBoundingClientRect();
    const corner = document.getElementById('chapterCorner');
    const cornerBox = corner.classList.contains('show') ? corner.getBoundingClientRect() : null;
    const intersects = cornerBox && box.left < cornerBox.right && box.right > cornerBox.left && box.top < cornerBox.bottom && box.bottom > cornerBox.top;
    if (intersects || box.bottom > stageBox.top + stageBox.height * .74 + 1 || box.left < stageBox.left - 1 || box.right > stageBox.right + 1) {
      clearText(intersects ? 'chapter-corner-protection' : 'caption-area-protection'); return;
    }
    card.style.visibility = 'visible';
    lastState.textHiddenReason = null;
    lastState.text = { ...state, lift, placement: `${state.id}-${placement.sceneId}`, fontSize: Number.parseFloat(card.style.fontSize) };
  }

  function refresh() {
    const ms = Math.max(0, audio.currentTime || 0) * 1000;
    const config = data.visuals.find(v => ms >= v.sceneStartMs && ms < v.sceneEndMs) || data.visuals.at(-1);
    const chapterVisible = data.chapters.some(c => ms >= c.startMs && ms < c.startMs + 1800);
    renderText(ms, chapterVisible);
    renderVisual(config.sceneId, ms / 1000, fallback.hidden, chapterVisible);
  }

  window.ShotEffectEngine?.clear();
  window.SemanticAnimationEngine?.clear();
  window.ShotEffectEngine = { render: renderVisual, clear: clearVisual };
  window.SemanticAnimationEngine = { render: renderText, clear: clearText };
  window.ApprovedMotionEngine = { refresh, inspect: () => structuredClone(lastState) };
  toggle.addEventListener('change', refresh);
  mobile.addEventListener('change', refresh);
  reduced.addEventListener('change', refresh);
  window.addEventListener('resize', refresh);
  document.addEventListener('visibilitychange', refresh);
  stage.querySelectorAll('.visual').forEach(img => img.addEventListener('load', () => queueMicrotask(refresh)));
})();
