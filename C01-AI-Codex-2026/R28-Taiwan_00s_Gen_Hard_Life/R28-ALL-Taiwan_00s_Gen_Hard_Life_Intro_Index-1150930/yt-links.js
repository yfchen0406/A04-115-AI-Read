/* YT buttons: href is the only configuration required. */
(function () {
  function refreshLinks() {
    document.querySelectorAll('a.episode-action.yt-caption, a.episode-action.yt-no-caption').forEach(function (a) {
      var href = (a.getAttribute('href') || '').trim();
      var valid = false;
      try {
        var url = new URL(href);
        valid = url.protocol === 'https:' && (url.hostname === 'youtu.be' || url.hostname === 'youtube.com' || url.hostname === 'www.youtube.com' || url.hostname === 'm.youtube.com' || url.hostname === 'music.youtube.com');
      } catch (_) {}
      if (valid) {
        a.removeAttribute('data-url-placeholder');
        a.removeAttribute('aria-disabled');
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
        a.title = '開啟 YouTube';
      } else {
        a.setAttribute('data-url-placeholder', 'true');
        a.setAttribute('aria-disabled', 'true');
        a.removeAttribute('target');
        a.title = '尚未填入 YouTube 網址';
      }
    });
  }
  document.addEventListener('click', function (event) {
    var a = event.target.closest('a.episode-action.yt-caption, a.episode-action.yt-no-caption');
    if (!a) return;
    var href = (a.getAttribute('href') || '').trim();
    if (!/^https:\/\/(youtu\.be|(?:www\.|m\.|music\.)?youtube\.com)(?:\/|\?|#|$)/i.test(href)) {
      event.preventDefault();
    }
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', refreshLinks);
  else refreshLinks();
})();
