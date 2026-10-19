(() => {
  'use strict';
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const intervalAt = (items, ms) => items.findIndex((item) => ms >= item.startMs && ms < item.endMs);
  const formatTime = (ms) => {
    const seconds = Math.max(0, Math.floor(ms / 1000));
    return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  };
  const formatDuration = (ms) => formatTime(Math.ceil(ms / 1000) * 1000);
  const ease = (p) => p * p * (3 - 2 * p);

  function motion(scene, ms) {
    const progress = ease(clamp((ms - scene.startMs) / Math.max(1, scene.endMs - scene.startMs), 0, 1));
    const offset = 1.3 - 2.6 * progress;
    switch (scene.motionType) {
      case 'push': return `scale(${1.035 + progress * 0.025})`;
      case 'pull': return `scale(${1.06 - progress * 0.025})`;
      case 'pan-left': return `translate(${offset}%,0) scale(1.05)`;
      case 'pan-right': return `translate(${-offset}%,0) scale(1.05)`;
      case 'pan-up': return `translate(0,${offset}%) scale(1.05)`;
      case 'pan-down': return `translate(0,${-offset}%) scale(1.05)`;
      case 'diagonal': return `translate(${-0.7 + progress * 1.4}%,${0.5 - progress}%) scale(1.05)`;
      default: return `scale(${1.025 + progress * 0.02})`;
    }
  }

  function stateAt(timeline, requestedMs) {
    const ms = clamp(Math.round(requestedMs), 0, timeline.durationMs);
    const lookupMs = ms === timeline.durationMs ? Math.max(0, ms - 1) : ms;
    const sceneIndex = Math.max(0, intervalAt(timeline.scenes, lookupMs));
    const chapterIndex = Math.max(0, intervalAt(timeline.chapters, lookupMs));
    const scene = timeline.scenes[sceneIndex];
    const chapter = timeline.chapters[chapterIndex];
    const nextScene = timeline.scenes[sceneIndex + 1] || null;
    const transitionMs = nextScene && Math.abs(nextScene.startMs - scene.endMs) < 2 ? 650 : 0;
    const transitionStartMs = scene.endMs - transitionMs;
    const transitioning = transitionMs > 0 && ms >= transitionStartMs && ms < scene.endMs;
    const transitionProgress = transitioning ? ease(clamp((ms - transitionStartMs) / transitionMs, 0, 1)) : 0;
    const subtitle = timeline.subtitles.find((cue) => ms >= cue.startMs && ms < cue.endMs) || null;
    const chapterJumpMs = chapter.jumpStartMs ?? chapter.speechStartMs ?? chapter.startMs;
    const chapterElapsedMs = ms - chapterJumpMs;
    const introActive = chapterElapsedMs >= 0 && chapterElapsedMs < 2000;
    const introOpacity = introActive
      ? Math.min(1, chapterElapsedMs / 320, (2000 - chapterElapsedMs) / 320)
      : 0;
    return {
      ms, sceneIndex, chapterIndex, scene, chapter, subtitle,
      nextScene: transitioning ? nextScene : null,
      transitioning, transitionProgress, introActive, introOpacity,
    };
  }

  window.EpisodeCore = { clamp, formatTime, formatDuration, intervalAt, motion, stateAt };
})();
