(() => {
  const audio = document.getElementById("audio");
  const stage = document.getElementById("stage");
  const layers = [document.querySelector(".visual-a"), document.querySelector(".visual-b")];
  const caption = document.getElementById("caption");
  const center = document.getElementById("chapterCenter");
  const corner = document.getElementById("chapterCorner");
  const seek = document.getElementById("seek");
  const clock = document.getElementById("clock");
  const play = document.getElementById("play");
  const fallback = document.getElementById("fallback");
  const shotLabel = document.getElementById("shotLabel");
  const cc = document.getElementById("cc");
  const prevScene = document.getElementById("prevScene");
  const nextScene = document.getElementById("nextScene");
  const prevChapter = document.getElementById("prevChapter");
  const nextChapter = document.getElementById("nextChapter");
  const scenes = window.STORYBOARD || [];
  const subtitles = window.SUBTITLES || [];
  const chapters = window.CHAPTERS || [];
  const duration = scenes.length ? scenes[scenes.length - 1].end : 0;
  let activeLayer = 0;
  let displayedScene = -1;
  let requestedScene = -1;
  let requestedInstant = false;
  let loadToken = 0;
  let scrubbing = false;
  let scrubWasPlaying = false;
  let raf = 0;

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const find = (items, time, key = "start") => {
    let low = 0;
    let high = items.length - 1;
    let answer = 0;
    while (low <= high) {
      const middle = (low + high) >> 1;
      if (items[middle][key] <= time) {
        answer = middle;
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }
    return answer;
  };
  const format = (seconds) => {
    const value = Math.max(0, seconds || 0);
    const minutes = Math.floor(value / 60);
    const wholeSeconds = Math.floor(value % 60);
    return `${String(minutes).padStart(2, "0")}:${String(wholeSeconds).padStart(2, "0")}`;
  };
  const reducedMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  function sceneAt(time) {
    if (!scenes.length) return 0;
    let index = find(scenes, time);
    if (time >= scenes[index].end && index < scenes.length - 1) index += 1;
    return index;
  }

  function applyMotion(image, scene, time) {
    if (!image || !scene) return;
    if (reducedMotion()) {
      image.style.transform = "none";
      return;
    }
    const progress = clamp((time - scene.start) / Math.max(0.001, scene.end - scene.start), 0, 1);
    const offset = 2 - 4 * progress;
    switch (scene.motion) {
      case "slowZoomIn": image.style.transform = `scale(${1 + 0.08 * progress})`; break;
      case "slowZoomOut": image.style.transform = `scale(${1.08 - 0.08 * progress})`; break;
      case "panLeft": image.style.transform = `scale(1.08) translateX(${offset}%)`; break;
      case "panRight": image.style.transform = `scale(1.08) translateX(${-offset}%)`; break;
      case "driftUp": image.style.transform = `scale(1.06) translateY(${offset}%)`; break;
      case "driftDown": image.style.transform = `scale(1.06) translateY(${-offset}%)`; break;
      default: image.style.transform = "none";
    }
  }

  function preload(index) {
    if (index < 0 || index >= scenes.length) return;
    const image = new Image();
    image.src = scenes[index].image;
  }

  function showScene(index, time, instant = false) {
    if (index < 0 || index >= scenes.length) return;
    const scene = scenes[index];
    if (index === displayedScene) {
      if (index === displayedScene) applyMotion(layers[activeLayer], scene, time);
      return;
    }
    if (index === requestedScene) {
      requestedInstant = requestedInstant || instant;
      return;
    }
    requestedScene = index;
    requestedInstant = instant;
    const token = ++loadToken;
    const nextLayer = 1 - activeLayer;
    const image = layers[nextLayer];
    image.className = "visual";
    image.style.objectPosition = scene.objectPosition || "50% 50%";
    image.alt = `${scene.id} 分鏡插畫；${scene.card || ""}`;
    image.onload = () => {
      if (token !== loadToken || requestedScene !== index) return;
      fallback.hidden = true;
      const skipCrossfade = requestedInstant;
      if (skipCrossfade) stage.classList.add("instant-transition");
      image.classList.add("active");
      if (displayedScene >= 0) layers[activeLayer].classList.remove("active");
      activeLayer = nextLayer;
      displayedScene = index;
      requestedScene = -1;
      requestedInstant = false;
      applyMotion(image, scene, audio.currentTime || time);
      shotLabel.textContent = scene.id;
      if (skipCrossfade) {
        requestAnimationFrame(() => requestAnimationFrame(() => stage.classList.remove("instant-transition")));
      }
      preload(index - 1);
      preload(index + 1);
    };
    image.onerror = () => {
      if (token !== loadToken) return;
      fallback.hidden = false;
      fallback.textContent = `圖片載入失敗：${scene.id}；請確認 ${scene.image} 存在。`;
    };
    image.src = scene.image;
    if (image.complete && image.naturalWidth > 0) image.onload();
  }

  function fitCaption() {
    if (!caption.textContent) {
      caption.style.removeProperty("font-size");
      return;
    }
    const style = window.getComputedStyle(caption);
    const base = Number.parseFloat(style.fontSize) || 22;
    const maxWidth = Math.max(1, caption.parentElement.clientWidth * 0.9);
    const canvas = fitCaption.canvas || (fitCaption.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    if (!context) return;
    const fontFamily = style.fontFamily || "serif";
    let size = base;
    context.font = `800 ${size}px ${fontFamily}`;
    const measured = context.measureText(caption.textContent).width;
    if (measured > maxWidth) size = Math.max(11, base * maxWidth / measured);
    caption.style.fontSize = `${size}px`;
  }

  function update(instant = false) {
    if (!scenes.length || !chapters.length) return;
    const time = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
    const sceneIndex = sceneAt(time);
    const scene = scenes[sceneIndex];
    showScene(sceneIndex, time, instant);
    if (sceneIndex === displayedScene) applyMotion(layers[activeLayer], scene, time);

    const subtitleIndex = find(subtitles, time);
    const subtitle = subtitles[subtitleIndex];
    const visibleSubtitle = Boolean(cc.checked && subtitle && time >= subtitle.start && time < subtitle.end);
    caption.textContent = visibleSubtitle ? subtitle.text.replace(/\s*\n\s*/g, " ") : "";
    caption.classList.toggle("poetry", Boolean(visibleSubtitle && subtitle.highlight));
    fitCaption();

    const chapterIndex = find(chapters, time);
    const chapter = chapters[chapterIndex];
    const elapsed = time - chapter.start;
    center.textContent = chapter.title;
    center.classList.toggle("show", elapsed >= 0 && elapsed < 1.8);
    corner.textContent = chapter.title;
    corner.classList.toggle("show", elapsed >= 1.8);
    document.querySelectorAll(".chapter-button").forEach((button, index) => {
      button.classList.toggle("current", index === chapterIndex);
      button.setAttribute("aria-current", index === chapterIndex ? "true" : "false");
    });
    prevScene.disabled = sceneIndex === 0;
    nextScene.disabled = sceneIndex >= scenes.length - 1;
    prevChapter.disabled = chapterIndex === 0;
    nextChapter.disabled = chapterIndex >= chapters.length - 1;
    seek.max = String(Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : duration);
    if (!scrubbing) seek.value = String(time);
    clock.textContent = `${format(scrubbing ? Number(seek.value) : time)} / ${format(Number.isFinite(audio.duration) ? audio.duration : duration)}`;
    play.textContent = audio.paused ? "▶ 播放" : "❚❚ 暫停";
    window.SemanticAnimationEngine?.render(time * 1000, center.classList.contains("show"));
    window.ShotEffectEngine?.render(scene.id, time, fallback.hidden, center.classList.contains("show"));
  }

  function sync(instant = false) {
    update(instant);
    if (!audio.paused && !audio.ended && !raf) raf = requestAnimationFrame(tick);
    else if ((audio.paused || audio.ended) && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  }

  function tick() {
    raf = 0;
    update(false);
    if (!audio.paused && !audio.ended) raf = requestAnimationFrame(tick);
  }

  function commitScrub() {
    if (!scrubbing) return;
    const wasPlaying = scrubWasPlaying;
    const target = clamp(Number(seek.value) || 0, 0, Number.isFinite(audio.duration) ? audio.duration : duration);
    scrubbing = false;
    audio.currentTime = target;
    sync(true);
    if (wasPlaying && audio.paused) audio.play().catch(() => {});
  }

  function cancelScrub() {
    if (!scrubbing) return;
    scrubbing = false;
    seek.value = String(Number.isFinite(audio.currentTime) ? audio.currentTime : 0);
    sync();
  }

  function goTo(time, playAfter = false) {
    audio.currentTime = clamp(time, 0, Number.isFinite(audio.duration) ? audio.duration : duration);
    sync(true);
    if (playAfter) audio.play().catch(() => {});
  }

  function goScene(delta) {
    const index = sceneAt(audio.currentTime || 0);
    const target = clamp(index + delta, 0, scenes.length - 1);
    goTo(scenes[target].start, !audio.paused);
  }

  function goChapter(delta) {
    const index = find(chapters, audio.currentTime || 0);
    const target = clamp(index + delta, 0, chapters.length - 1);
    goTo(chapters[target].start, !audio.paused);
  }

  const chapterNav = document.getElementById("chapters");
  for (const chapter of chapters) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chapter-button";
    const label = document.createElement("span");
    label.textContent = `第 ${chapter.id} 章`;
    button.append(label, document.createTextNode(chapter.title));
    button.addEventListener("click", () => goTo(chapter.start, !audio.paused));
    chapterNav.append(button);
  }

  prevScene.addEventListener("click", () => goScene(-1));
  nextScene.addEventListener("click", () => goScene(1));
  prevChapter.addEventListener("click", () => goChapter(-1));
  nextChapter.addEventListener("click", () => goChapter(1));
  play.addEventListener("click", () => audio.paused ? audio.play().catch(() => {}) : audio.pause());
  document.getElementById("replay").addEventListener("click", () => { goTo(0); audio.play().catch(() => {}); });
  seek.addEventListener("pointerdown", () => {
    if (!scrubbing) scrubWasPlaying = !audio.paused;
    scrubbing = true;
  });
  seek.addEventListener("input", () => {
    if (!scrubbing) scrubWasPlaying = !audio.paused;
    scrubbing = true;
    clock.textContent = `${format(Number(seek.value))} / ${format(Number.isFinite(audio.duration) ? audio.duration : duration)}`;
  });
  seek.addEventListener("change", commitScrub);
  seek.addEventListener("pointerup", commitScrub);
  seek.addEventListener("pointercancel", cancelScrub);
  seek.addEventListener("keyup", commitScrub);
  document.getElementById("volume").addEventListener("input", (event) => { audio.volume = Number(event.target.value); });
  document.getElementById("mute").addEventListener("click", (event) => {
    audio.muted = !audio.muted;
    event.currentTarget.textContent = audio.muted ? "取消靜音" : "靜音";
  });
  cc.addEventListener("change", sync);
  for (const eventName of ["timeupdate", "play", "pause", "ended", "loadedmetadata", "durationchange"]) audio.addEventListener(eventName, () => sync());
  for (const eventName of ["seeking", "seeked"]) audio.addEventListener(eventName, () => sync(true));
  audio.addEventListener("loadedmetadata", () => { audio.playbackRate = 1; sync(); });
  audio.addEventListener("error", () => {
    fallback.hidden = false;
    fallback.textContent = "音訊載入失敗：請確認 audio/narration.mp3 檔案存在。";
  });
  document.addEventListener("keydown", (event) => {
    if (event.target.matches("input,textarea,select,button,[contenteditable=\"true\"]")) return;
    if (event.code === "Space") {
      event.preventDefault();
      audio.paused ? audio.play().catch(() => {}) : audio.pause();
    }
    if (event.code === "ArrowRight") goTo((audio.currentTime || 0) + 5, !audio.paused);
    if (event.code === "ArrowLeft") goTo((audio.currentTime || 0) - 5, !audio.paused);
  });
  window.addEventListener("resize", fitCaption);
  preload(0);
  update(true);
})();
