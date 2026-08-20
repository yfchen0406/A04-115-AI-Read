/* 《隨他們去》V2 架構版播放控制：旁白、126 張圖片、字幕與段落標題動畫。 */
(() => {
  "use strict";
  const data = window.READING_DATA;
  const voice = document.querySelector("#voice");
  const visualA = document.querySelector("#visualA");
  const visualB = document.querySelector("#visualB");
  const caption = document.querySelector("#caption");
  const sceneBadge = document.querySelector("#sceneBadge");
  const sceneTitle = document.querySelector("#sceneTitle");
  const playButton = document.querySelector("#playButton");
  const status = document.querySelector("#status");
  const currentTime = document.querySelector("#currentTime");
  const progressFill = document.querySelector("#progressFill");
  const chapterStrip = document.querySelector("#chapterStrip");
  const cover = document.querySelector("#cover");
  const readingApp = document.querySelector("#readingApp");
  const startButton = document.querySelector("#startButton");
  let activeBeat = -1;
  let activeLayer = visualA;
  let currentScene = 0;
  let previewTime = 0;
  let started = false;
  let titleTimer = 0;
  const format = value => { const seconds = Math.max(0, Math.floor(value || 0)); return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`; };
  const sceneStart = index => data.sceneStarts[index] || 0;
  const findScene = time => { for (let i = 0; i < data.sceneDurations.length; i += 1) if (time < sceneStart(i) + data.sceneDurations[i]) return i; return data.sceneDurations.length - 1; };
  const findBeat = time => { const found = data.beats.findIndex(beat => time >= beat.start && time < beat.end); return found >= 0 ? found : data.beats.length - 1; };
  function showSceneTitle(scene) { window.clearTimeout(titleTimer); sceneTitle.textContent = data.voiceover[scene].title; sceneTitle.classList.remove("heading-settle"); sceneTitle.classList.add("heading-center"); titleTimer = window.setTimeout(() => { sceneTitle.classList.remove("heading-center"); sceneTitle.classList.add("heading-settle"); }, 1500); }
  function renderBeat(time) { const index = findBeat(time); if (index === activeBeat) return; activeBeat = index; const beat = data.beats[index]; const next = activeLayer === visualA ? visualB : visualA; next.src = beat.image; next.className = `visual ${activeLayer === visualA ? "visual-b" : "visual-a"} visible motion-${beat.motion}`; activeLayer.classList.remove("visible"); activeLayer = next; const scene = Number(beat.scene_id) - 1; sceneBadge.textContent = `SC—${String(beat.scene_id).padStart(2, "0")}`; if (scene !== currentScene || sceneTitle.textContent !== data.voiceover[scene].title) showSceneTitle(scene); currentScene = scene; [...chapterStrip.children].forEach((item, i) => item.classList.toggle("active", i === scene)); }
  function renderCaption(time) { const beat = data.beats.find(item => time >= item.start && time < item.end); caption.textContent = beat ? beat.caption : ""; }
  function globalTime() { return voice.readyState > 0 ? sceneStart(currentScene) + voice.currentTime : previewTime; }
  function update() { const time = Math.min(data.totalDuration, globalTime()); currentTime.textContent = format(time); progressFill.style.width = `${time / data.totalDuration * 100}%`; renderBeat(time); renderCaption(time); }
  function loadScene(index, autoplay = false, offset = 0) { currentScene = Math.max(0, Math.min(data.voiceover.length - 1, index)); voice.src = `audio/${data.voiceover[currentScene].audio}`; voice.load(); voice.addEventListener("loadedmetadata", () => { try { voice.currentTime = offset; } catch (error) { /* 瀏覽器尚未允許定位時維持 0 秒 */ } }, { once: true }); if (autoplay) voice.play().catch(() => { status.textContent = "請在瀏覽器允許播放旁白"; }); }
  function jumpGlobal(time, autoplay = false) { const target = Math.max(0, Math.min(data.totalDuration - 0.01, time)); const scene = findScene(target); previewTime = target; loadScene(scene, autoplay, target - sceneStart(scene)); activeBeat = -1; update(); }
  function togglePlay() { if (!started) return; if (!voice.src) loadScene(currentScene, true, Math.max(0, previewTime - sceneStart(currentScene))); else if (voice.paused) voice.play().catch(() => { status.textContent = "旁白播放需要瀏覽器播放權限"; }); else voice.pause(); }
  function buildChapters() { data.voiceover.forEach((row, index) => { const button = document.createElement("button"); button.type = "button"; button.textContent = String(index + 1).padStart(2, "0"); button.setAttribute("aria-label", `${String(index + 1).padStart(2, "0")} ${row.title}`); button.addEventListener("click", () => jumpGlobal(sceneStart(index), !voice.paused)); chapterStrip.appendChild(button); }); }
  function startReading() { started = true; cover.classList.add("cover-exit"); window.setTimeout(() => { cover.remove(); readingApp.classList.remove("is-hidden"); showSceneTitle(0); loadScene(0, true, 0); update(); }, 550); }
  voice.addEventListener("timeupdate", update); voice.addEventListener("play", () => { playButton.textContent = "暫停旁白"; status.textContent = "男聲旁白播放中｜圖片約每 5 秒切換"; }); voice.addEventListener("pause", () => { playButton.textContent = "播放旁白"; }); voice.addEventListener("ended", () => { if (currentScene < data.voiceover.length - 1) loadScene(currentScene + 1, true, 0); else { playButton.textContent = "重新播放"; status.textContent = "旁白播放完成"; } });
  document.querySelector("#previousButton").addEventListener("click", () => jumpGlobal(sceneStart(Math.max(0, currentScene - 1)))); document.querySelector("#nextButton").addEventListener("click", () => jumpGlobal(sceneStart(Math.min(data.voiceover.length - 1, currentScene + 1)))); document.querySelector("#volume").addEventListener("input", event => { voice.volume = Number(event.target.value); }); document.querySelector(".progress-row").addEventListener("click", event => { const rect = event.currentTarget.getBoundingClientRect(); jumpGlobal(((event.clientX - rect.left) / rect.width) * data.totalDuration, !voice.paused); }); playButton.addEventListener("click", togglePlay); startButton.addEventListener("click", startReading); buildChapters(); document.querySelector("#totalTime").textContent = format(data.totalDuration); visualA.classList.add("visible");
})();
