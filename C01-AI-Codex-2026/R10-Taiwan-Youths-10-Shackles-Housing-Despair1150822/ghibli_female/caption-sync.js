(() => {
  "use strict";
  const audio = document.querySelector("#voice");
  const caption = document.querySelector("#caption");
  const data = window.APP_DATA || {};
  function captionAt(time) {
    const cue = (data.captions || []).find((item) => time >= item.start && time < item.end);
    return cue ? (cue.text || "") : "";
  }
  function syncCaption() {
    if (!audio || !caption) return;
    const next = captionAt(audio.currentTime || 0);
    if (caption.textContent !== next) caption.textContent = next;
  }
  ["loadedmetadata", "timeupdate", "seeked", "playing", "pause"].forEach((eventName) => audio.addEventListener(eventName, syncCaption));
  window.setInterval(syncCaption, 100);
  syncCaption();
})();
