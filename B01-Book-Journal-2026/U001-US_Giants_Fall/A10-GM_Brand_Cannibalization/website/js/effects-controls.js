(() => {
  const button = document.getElementById('effectsToggle');
  const audio = document.getElementById('audio');
  if (!button || !audio) return;
  let enabled = new URLSearchParams(window.location.search).get('effects') !== 'off';
  function renderCurrent() {
    if (!enabled) {
      window.SemanticAnimationEngine?.clear();
      window.ShotEffectEngine?.clear();
      return;
    }
    const time = audio.currentTime || 0;
    const scenes = window.STORYBOARD || [];
    const scene = scenes.find(item => time >= item.start && time < item.end) || scenes.at(-1);
    const chapterTitleVisible = document.getElementById('chapterCenter')?.classList.contains('show') || false;
    window.SemanticAnimationEngine?.render(time, chapterTitleVisible);
    if (scene) window.ShotEffectEngine?.render(scene.id, time, document.getElementById('fallback')?.hidden !== false, chapterTitleVisible);
  }
  function setEnabled(value) {
    enabled = Boolean(value);
    button.textContent = enabled ? '特效：開' : '特效：關';
    button.setAttribute('aria-pressed', String(enabled));
    renderCurrent();
  }
  window.EffectsControl = { isEnabled: () => enabled, setEnabled };
  button.addEventListener('click', () => setEnabled(!enabled));
  setEnabled(enabled);
})();
