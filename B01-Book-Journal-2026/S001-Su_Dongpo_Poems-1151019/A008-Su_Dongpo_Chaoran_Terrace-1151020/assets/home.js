(() => {
  const settings = window.SHOW_SETTINGS || {};
  const subtitles = document.getElementById("youtube-subtitles");
  const clean = document.getElementById("youtube-no-subtitles");
  if (subtitles) subtitles.href = settings.youtubeWithSubtitles || "";
  if (clean) clean.href = settings.youtubeWithoutSubtitles || "";
})();
