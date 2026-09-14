const d = window.READER_DATA;
const audio = document.querySelector("#audio");
const image = document.querySelector("#sceneImage");
const subtitle = document.querySelector("#subtitle");
const stageTitle = document.querySelector("#stageTitle");
const chapterIntro = document.querySelector("#chapterIntro");
const metrics = document.querySelector("#metrics");
const timeline = document.querySelector("#timeline");
const playButton = document.querySelector("#play");
const chapterList = document.querySelector("#chapterList");
const pad = (value) => String(value).padStart(3, "0");
const motionNames = ["push", "pull", "up", "down", "left", "right"];
const motionFor = (id) => motionNames[((id * 9301 + 49297) % 233280) % motionNames.length];
const formatSeconds = (value) => Number(value).toFixed(2) + " 秒";
let pendingSeek = null;
let seekSequence = 0;
const findCaptionAt = (time) => {
  for (let index = d.captions.length - 1; index >= 0; index -= 1) {
    if (time >= d.captions[index].start) return index;
  }
  return 0;
};
const findAt = (items, time) => {
  const index = items.findIndex((item) => time >= item.start && time < item.end);
  if (index >= 0) return index;
  for (let index = items.length - 1; index >= 0; index -= 1) {
    if (time >= items[index].start) return index;
  }
  return 0;
};
let sceneIndex = -1;
let captionIndex = -1;
let previousChapter = "";
function renderAt(time, force = false) {
  const safeTime = Math.max(0, Math.min(d.totalDuration, Number(time) || 0));
  const scene = d.visualScenes[findAt(d.visualScenes, safeTime)];
  const caption = d.captions[findCaptionAt(safeTime)];
  const sceneNumber = scene.id - 1;
  const currentCaptionIndex = d.captions.indexOf(caption);
  timeline.value = safeTime.toFixed(2);
  const timeLabel = "畫面 " + pad(scene.id) + "｜" + formatSeconds(safeTime) + " / " + formatSeconds(d.totalDuration);
  if (force || sceneNumber !== sceneIndex) {
    sceneIndex = sceneNumber;
    const motion = motionFor(scene.id);
    const motionDuration = Math.max(0.1, scene.end - scene.start);
    image.className = "motion-" + motion;
    image.style.setProperty("--motion-duration", motionDuration + "s");
    image.style.animationDelay = (-Math.max(0, safeTime - scene.start)) + "s";
    image.src = scene.image;
    image.alt = "Frame " + pad(scene.id);
    stageTitle.textContent = scene.chapter;
    metrics.textContent = timeLabel;
    if (scene.chapter !== previousChapter) {
      previousChapter = scene.chapter;
      chapterIntro.textContent = scene.chapter;
      chapterIntro.classList.remove("show");
      void chapterIntro.offsetWidth;
      chapterIntro.classList.add("show");
    }
  } else {
    metrics.textContent = timeLabel;
  }
  if (force || currentCaptionIndex !== captionIndex) {
    captionIndex = currentCaptionIndex;
    subtitle.textContent = caption.text;
  }
  [...chapterList.children].forEach((button) => {
    button.classList.toggle("active", button.dataset.range === String(scene.id) ||
      (+button.dataset.start <= scene.id && scene.id <= +button.dataset.end));
  });
}
function render(force = false) { renderAt(audio.currentTime || 0, force); }
function go(time, shouldPlay = false) {
  const target = Math.max(0, Math.min(d.totalDuration, Number(time) || 0));
  const request = ++seekSequence;
  pendingSeek = { target, shouldPlay, request };
  renderAt(target, true);
  audio.currentTime = target;
  if (!audio.seeking && Math.abs((audio.currentTime || 0) - target) < 0.05) {
    pendingSeek = null;
    if (shouldPlay) audio.play().catch(() => {});
  }
}
playButton.onclick = () => audio.paused ? audio.play() : audio.pause();
audio.onplay = () => { playButton.textContent = "暫停"; };
audio.onpause = () => { playButton.textContent = "播放"; };
audio.onended = () => { playButton.textContent = "播放"; renderAt(d.totalDuration, true); };
document.querySelector("#back").onclick = () => go(d.captions[Math.max(0, captionIndex - 1)].start, true);
document.querySelector("#next").onclick = () => go(d.captions[Math.min(d.captions.length - 1, captionIndex + 1)].start, true);
audio.ontimeupdate = () => {
  if (pendingSeek && Math.abs((audio.currentTime || 0) - pendingSeek.target) > 0.05) return;
  render();
};
audio.onloadedmetadata = () => { timeline.max = String(d.totalDuration); render(true); };
audio.onseeking = () => { if (!pendingSeek) render(true); };
audio.onseeked = () => {
  if (!pendingSeek) { render(true); return; }
  const request = pendingSeek;
  if (Math.abs((audio.currentTime || 0) - request.target) > 0.05) {
    renderAt(request.target, true);
    return;
  }
  pendingSeek = null;
  renderAt(audio.currentTime || request.target, true);
  if (request.shouldPlay) audio.play().catch(() => {});
};
timeline.max = String(d.totalDuration);
timeline.oninput = (event) => go(Number(event.target.value), false);
d.chapters.forEach((chapter) => {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.start = chapter.start;
  button.dataset.end = chapter.sceneId + chapter.count - 1;
  button.dataset.range = String(chapter.sceneId);
  const lastScene = d.visualScenes[chapter.sceneId + chapter.count - 2];
  button.innerHTML = '<span class="chapter-name">' + chapter.title +
    '</span><span class="chapter-time">' + formatSeconds(chapter.start) + "～" +
    formatSeconds(lastScene ? lastScene.end : chapter.start) + "</span>";
  button.onclick = () => go(chapter.start, true);
  chapterList.appendChild(button);
});
render(true);


