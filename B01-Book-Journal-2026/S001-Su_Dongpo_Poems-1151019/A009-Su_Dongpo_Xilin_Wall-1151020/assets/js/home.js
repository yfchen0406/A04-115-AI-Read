(() => {
  'use strict';
  const settings = window.EPISODE_SETTINGS;
  const timeline = window.TIMELINE_DATA;
  if (!settings) return;
  const withCaptions = document.getElementById('youtube-with');
  const withoutCaptions = document.getElementById('youtube-without');
  if (withCaptions) withCaptions.href = settings.links.youtubeWithSubtitles;
  if (withoutCaptions) withoutCaptions.href = settings.links.youtubeWithoutSubtitles;
  if (timeline) {
    const meta = document.getElementById('hero-meta');
    if (meta && window.EpisodeCore) {
      const duration = window.EpisodeCore.formatDuration(timeline.durationMs);
      meta.textContent = `旁白 ${duration}・${timeline.scenes.length} 張分鏡・${timeline.chapters.length} 個章節`;
    }
    // Warm four local scene files at a time so the first transitions have decoded images ready.
    let index = 0;
    const loadNext = () => {
      if (index >= timeline.scenes.length) return;
      const scene = timeline.scenes[index++];
      const image = new Image();
      image.onload = image.onerror = loadNext;
      image.src = `./${scene.imagePath}`;
    };
    for (let slot = 0; slot < Math.min(4, timeline.scenes.length); slot++) loadNext();
  }
})();
