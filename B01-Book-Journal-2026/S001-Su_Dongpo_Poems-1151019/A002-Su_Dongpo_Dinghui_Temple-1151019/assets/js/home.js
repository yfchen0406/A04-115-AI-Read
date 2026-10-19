(() => {
  const settings=window.EPISODE_SETTINGS;
  const timeline=window.EPISODE_TIMELINE;
  if (!settings || !timeline) return;
  document.getElementById('youtube-with').href=settings.youtubeWithSubtitles;
  document.getElementById('youtube-without').href=settings.youtubeWithoutSubtitles;
  document.getElementById('hero-meta').textContent=`${timeline.scenes.length} 個分鏡 · ${timeline.chapters.length} 個章節 · 原速旁白`;
})();
