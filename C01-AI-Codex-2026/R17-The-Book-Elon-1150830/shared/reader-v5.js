(function () {
  const cfg = window.READING_CONFIG;
  const stageImage = document.querySelector("[data-stage-image]");
  const caption = document.querySelector("[data-caption]");
  const audio = document.querySelector("audio");
  const progress = document.querySelector("[data-progress]");
  const timeLabel = document.querySelector("[data-time]");
  const durationLabel = document.querySelector("[data-duration]");
  const cueList = window.CAPTION_CUES || [];
  const motions = ["reader-zoom-in", "reader-zoom-out", "reader-pan-up", "reader-pan-down", "reader-pan-left", "reader-pan-right"];
  let lastFrame = -1;
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  const formatTime = seconds => { if (!Number.isFinite(seconds)) return "00:00"; const s = Math.floor(seconds); return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`; };
  const findCaption = time => { const cue = cueList.find(item => time >= item.start && time < item.end); return cue ? cue.text : ""; };
  const motionForFrame = frame => motions[Math.floor(Math.abs(Math.sin((frame + 1) * 12.9898) * 43758.5453)) % motions.length];
  function render() {
    const time = audio.currentTime || 0;
    const frame = clamp(Math.floor(time / cfg.frameDuration), 0, cfg.frameCount - 1);
    if (frame !== lastFrame) {
      stageImage.src = `images/frame-${String(frame + 1).padStart(3, "0")}.webp`;
      stageImage.alt = `${cfg.title} 第 ${frame + 1} 張畫面`;
      stageImage.style.animation = "none";
      void stageImage.offsetWidth;
      stageImage.style.animation = `${motionForFrame(frame)} ${cfg.frameDuration}s ease both`;
      lastFrame = frame;
    }
    const currentCaption = findCaption(time);
    if (currentCaption) caption.textContent = currentCaption;
    progress.value = time;
    if (timeLabel) timeLabel.textContent = formatTime(time);
    requestAnimationFrame(render);
  }
  audio.addEventListener("loadedmetadata", () => { progress.max = audio.duration || cfg.duration; if (durationLabel) durationLabel.textContent = formatTime(audio.duration || cfg.duration); });
  audio.addEventListener("timeupdate", () => { progress.value = audio.currentTime; });
  progress.addEventListener("input", () => { audio.currentTime = Number(progress.value); });
  document.querySelectorAll("[data-seek]").forEach(button => button.addEventListener("click", () => { audio.currentTime = Number(button.dataset.seek) || 0; audio.play(); }));
  progress.max = cfg.duration;
  if (durationLabel) durationLabel.textContent = formatTime(cfg.duration);
  render();
}());
