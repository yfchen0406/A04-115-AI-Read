(() => {
  const warnings = new Map();
  const intersects = (a, b) => a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
  function suppress(root, cue, reason, sceneId) {
    root.hidden = true;
    root.dataset.suppressedReason = reason;
    const key = `${cue.id}:${sceneId}:${reason}`;
    warnings.set(key, { cueId: cue.id, sceneId, reason });
    return false;
  }
  function placeText(root, cue, time) {
    const stage = document.getElementById('stage');
    if (!stage) return true;
    const bounds = stage.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return suppress(root, cue, 'stage-not-visible', '');
    const mobile = window.matchMedia('(max-width:760px)').matches;
    const left = cue.position === 'top-left';
    const baseTop = mobile ? (left ? 42 : 9) : (left ? Math.min(58, Math.max(48, bounds.width * .05)) : Math.min(26, Math.max(12, bounds.width * .022)));
    root.style.top = `${baseTop}px`;
    let card = root.getBoundingClientRect();
    const corner = document.getElementById('chapterCorner');
    if (corner?.classList.contains('show')) {
      const title = corner.getBoundingClientRect();
      if (card.left < title.right + 12 && card.right > title.left - 12) {
        root.style.top = `${Math.max(baseTop, title.bottom - bounds.top + 12)}px`;
        card = root.getBoundingClientRect();
      }
    }
    const scenes = window.STORYBOARD || [];
    const scene = scenes.find(item => time >= item.start && time < item.end) || scenes.at(-1);
    if (mobile && card.height > bounds.height * .28) return suppress(root, cue, 'mobile-height-limit', scene?.id || '');
    let safeBottom = bounds.bottom - bounds.height * .28;
    const caption = document.getElementById('caption');
    if (caption?.textContent.trim()) safeBottom = Math.min(safeBottom, caption.getBoundingClientRect().top - 12);
    if (card.bottom > safeBottom || card.left < bounds.left || card.right > bounds.right) return suppress(root, cue, 'caption-or-stage-boundary', scene?.id || '');
    const effect = (window.SHOT_EFFECTS || []).find(item => item.id === scene?.id);
    if (effect) {
      for (const target of effect.targets) {
        const x = bounds.left + bounds.width * target.x / 100;
        const y = bounds.top + bounds.height * target.y / 100;
        const focus = { left: x - bounds.width * .06, right: x + bounds.width * .06, top: y - bounds.height * .07, bottom: y + bounds.height * .07 };
        if (intersects(card, focus)) return suppress(root, cue, 'primary-focus-clearance', scene?.id || '');
      }
    }
    delete root.dataset.suppressedReason;
    return true;
  }
  function clipVisual(root) {
    const stage = document.getElementById('stage');
    if (!stage) return;
    const bounds = stage.getBoundingClientRect();
    let bottom = bounds.height * .16;
    const caption = document.getElementById('caption');
    if (caption?.textContent.trim()) bottom = Math.max(bottom, bounds.bottom - caption.getBoundingClientRect().top + 12);
    root.style.clipPath = `inset(0 0 ${Math.max(0, Math.min(bounds.height, bottom))}px 0)`;
  }
  function refreshCurrent() {
    const audio = document.getElementById('audio');
    if (!audio) return;
    const time = audio.currentTime || 0;
    const scenes = window.STORYBOARD || [];
    const scene = scenes.find(item => time >= item.start && time < item.end) || scenes.at(-1);
    const chapter = (window.CHAPTERS || []).find(item => time >= item.start && time < item.end);
    const chapterTitleVisible = Boolean(chapter && time - chapter.start < 1.8);
    window.SemanticAnimationEngine?.render(time, chapterTitleVisible);
    if (scene) window.ShotEffectEngine?.render(scene.id, time, document.getElementById('fallback')?.hidden !== false, chapterTitleVisible);
  }
  window.EffectsLayout = { placeText, clipVisual, getWarnings: () => [...warnings.values()] };
  window.addEventListener?.('resize', refreshCurrent, { passive: true });
  document.addEventListener?.('visibilitychange', () => { if (!document.hidden) refreshCurrent(); });
})();
