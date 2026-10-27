(() => {
  'use strict';
  const profiles = new Map((window.YAHOO_MOTION_PROFILES || []).map(p => [p.id, p]));
  const toggle = document.getElementById('motionToggle');
  const mobile = window.matchMedia('(max-width: 760px)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let enabled = true;
  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
  const lerp = (a, b, p) => a + (b - a) * p;
  const milliseconds = seconds => Math.round(Math.max(0, Number(seconds) || 0) * 1000000) / 1000;
  function computeMotion(sceneId, seconds, options = {}) {
    const profile = profiles.get(sceneId);
    if (!profile) return null;
    const p = clamp((milliseconds(seconds) - profile.startMs) / (profile.endMs - profile.startMs));
    const amplitude = options.mobile ? 0.5 : 1;
    if (options.reducedMotion) return { profileId: profile.planId, progress: p, transform: 'none' };
    const scale = 1 + (lerp(profile.scale[0], profile.scale[1], p) - 1) * amplitude;
    const x = lerp(profile.x[0], profile.x[1], p) * amplitude;
    const y = lerp(profile.y[0], profile.y[1], p) * amplitude;
    return { profileId: profile.planId, progress: p, transform: `scale(${scale}) translate(${x}%, ${y}%)` };
  }
  function applyMotion(image, scene, seconds) {
    if (!enabled) { image.removeAttribute('data-motion-profile'); return false; }
    const state = computeMotion(scene.id, seconds, { mobile: mobile.matches, reducedMotion: reduced.matches });
    if (!state) return false;
    image.style.transformOrigin = '50% 50%';
    image.style.transform = state.transform;
    image.dataset.motionProfile = state.profileId;
    return true;
  }
  function render() {}
  function sync() { document.dispatchEvent(new Event('yahoo-motion-change')); }
  toggle.addEventListener('click', () => {
    enabled = !enabled;
    toggle.textContent = enabled ? '運鏡：開' : '運鏡：關';
    toggle.setAttribute('aria-pressed', String(enabled));
    sync();
  });
  toggle.disabled = !window.TIMELINE_READY;
  mobile.addEventListener('change', sync);
  reduced.addEventListener('change', sync);
  window.YahooMotionUpgrade = { applyMotion, render, computeMotion, get enabled() { return enabled; } };
})();
