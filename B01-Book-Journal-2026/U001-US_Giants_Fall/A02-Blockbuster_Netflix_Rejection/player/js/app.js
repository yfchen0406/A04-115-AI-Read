(() => {
  "use strict";

  const audio = document.getElementById("audio");
  const images = [document.querySelector(".visual-a"), document.querySelector(".visual-b")];
  const caption = document.getElementById("caption");
  const center = document.getElementById("chapterCenter");
  const corner = document.getElementById("chapterCorner");
  const seek = document.getElementById("seek");
  const clock = document.getElementById("clock");
  const play = document.getElementById("play");
  const fallback = document.getElementById("fallback");
  const shotLabel = document.getElementById("shotLabel");
  const cc = document.getElementById("cc");
  const effectsEnabled = document.getElementById("effectsEnabled");
  const scenes = window.STORYBOARD;
  const subtitles = window.SUBTITLES;
  const chapters = window.CHAPTERS;

  if (!audio || !Array.isArray(scenes) || !Array.isArray(subtitles) || !Array.isArray(chapters)) {
    throw new Error("播放資料未載入；請確認 js/storyboard.js、chapters.js 與 subtitles.js。");
  }

  const sceneEndMs = scenes[scenes.length - 1].endMs;
  let activeImage = 0;
  let activeScene = -1;
  let rafId = 0;
  let scrubbing = false;
  let resumeAfterScrub = false;

  const reducedMotion = function() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };
  const durationMs = function() {
    return Number.isFinite(audio.duration) ? Math.round(audio.duration * 1000) : sceneEndMs;
  };
  const clamp = function(value, min, max) {
    return Math.max(min, Math.min(max, value));
  };
  const formatTime = function(ms) {
    const seconds = Math.max(0, Math.floor(ms / 1000));
    return String(Math.floor(seconds / 60)).padStart(2, "0") + ":" + String(seconds % 60).padStart(2, "0");
  };

  function findAtTime(list, ms) {
    let low = 0;
    let high = list.length - 1;
    let answer = -1;
    while (low <= high) {
      const mid = (low + high) >> 1;
      if (list[mid].startMs <= ms) {
        answer = mid;
        low = mid + 1;
      } else high = mid - 1;
    }
    return answer;
  }

  function applyMotion(image, scene, ms) {
    if (!scene || reducedMotion()) {
      image.style.transform = "none";
      return;
    }
    const progress = clamp((ms - scene.startMs) / Math.max(1, scene.endMs - scene.startMs), 0, 1);
    const pan = 2 - 4 * progress;
    switch (scene.motion) {
      case "slowZoomIn": image.style.transform = "scale(" + (1 + 0.065 * progress) + ")"; break;
      case "slowZoomOut": image.style.transform = "scale(" + (1.065 - 0.065 * progress) + ")"; break;
      case "panLeft": image.style.transform = "scale(1.07) translateX(" + pan + "%)"; break;
      case "panRight": image.style.transform = "scale(1.07) translateX(" + (-pan) + "%)"; break;
      case "driftUp": image.style.transform = "scale(1.06) translateY(" + pan + "%)"; break;
      case "driftDown": image.style.transform = "scale(1.06) translateY(" + (-pan) + "%)"; break;
      default: image.style.transform = "scale(1.02)";
    }
  }

  function preload(index) {
    if (index < 0 || index >= scenes.length) return;
    const image = new Image();
    image.src = new URL(scenes[index].image, document.baseURI).href;
  }

  function showScene(index) {
    if (index < 0 || index >= scenes.length || index === activeScene) return;
    const scene = scenes[index];
    const nextIndex = 1 - activeImage;
    const nextImage = images[nextIndex];
    const previousImage = images[activeImage];
    let settled = false;

    nextImage.className = "visual";
    nextImage.style.objectPosition = scene.objectPosition || "50% 50%";
    nextImage.alt = scene.id + "｜" + scene.chapterTitle + "｜" + scene.card.split("。")[0];
    nextImage.onload = function() {
      if (settled) return;
      settled = true;
      fallback.hidden = true;
      applyMotion(nextImage, scene, Math.round(audio.currentTime * 1000));
      nextImage.classList.add("active");
      previousImage.classList.remove("active");
      activeImage = nextIndex;
      activeScene = index;
      shotLabel.textContent = scene.id;
    };
    nextImage.onerror = function() {
      if (settled) return;
      settled = true;
      fallback.textContent = "圖片 " + scene.id + " 載入失敗，請確認 images/" + scene.id + ".webp。";
      fallback.hidden = false;
    };
    nextImage.src = scene.image;
    if (nextImage.complete && nextImage.naturalWidth > 0) nextImage.onload();
    preload(index + 1);
  }

  function fitCaption() {
    caption.style.fontSize = "";
    const availableWidth = Math.max(0, caption.parentElement.clientWidth * 0.92);
    const base = parseFloat(getComputedStyle(caption).fontSize) || 24;
    const measuredWidth = caption.scrollWidth;
    if (measuredWidth > availableWidth && measuredWidth > 0) {
      caption.style.fontSize = Math.max(10, base * (availableWidth / measuredWidth)) + "px";
    }
  }

  function update() {
    const timeMs = clamp(Math.round((audio.currentTime || 0) * 1000), 0, durationMs());
    let sceneIndex = findAtTime(scenes, timeMs);
    if (sceneIndex < 0) sceneIndex = 0;
    if (timeMs >= sceneEndMs) sceneIndex = scenes.length - 1;
    const scene = scenes[sceneIndex];

    showScene(sceneIndex);
    applyMotion(images[activeImage], scene, timeMs);

    const subtitleIndex = findAtTime(subtitles, timeMs);
    const subtitle = subtitleIndex >= 0 ? subtitles[subtitleIndex] : null;
    const visibleText = cc.checked && subtitle && timeMs < subtitle.endMs ? subtitle.text : "";
    if (caption.textContent !== visibleText) {
      caption.textContent = visibleText;
      fitCaption();
    }

    const chapterIndex = Math.max(0, findAtTime(chapters, timeMs));
    const chapter = chapters[chapterIndex];
    const chapterElapsed = timeMs - chapter.startMs;
    center.textContent = chapter.title;
    center.classList.toggle("show", chapterElapsed >= 0 && chapterElapsed < 1800);
    corner.textContent = chapter.title;
    corner.classList.toggle("show", chapterElapsed >= 1800);

    document.querySelectorAll(".chapter-button").forEach(function(button, index) {
      button.classList.toggle("current", index === chapterIndex);
      if (index === chapterIndex) button.setAttribute("aria-current", "location");
      else button.removeAttribute("aria-current");
    });

    if (!scrubbing) seek.value = String(timeMs / 1000);
    clock.textContent = formatTime(timeMs) + " / " + formatTime(durationMs());
    play.textContent = audio.paused ? "▶ 播放" : "❚❚ 暫停";
    document.getElementById("prevScene").disabled = sceneIndex === 0;
    document.getElementById("nextScene").disabled = sceneIndex >= scenes.length - 1;
    document.getElementById("prevChapter").disabled = chapterIndex === 0;
    document.getElementById("nextChapter").disabled = chapterIndex >= chapters.length - 1;
    if (window.SemanticAnimationEngine) window.SemanticAnimationEngine.render(timeMs / 1000, center.classList.contains("show"));
    if (window.SceneEffectEngine) window.SceneEffectEngine.render(timeMs, scene.id, center.classList.contains("show"), effectsEnabled.checked);
    if (window.TextEffectEngine) window.TextEffectEngine.render(timeMs, scene.id, center.classList.contains("show"), effectsEnabled.checked);
  }

  function stopFrameLoop() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
  }

  function frameLoop() {
    update();
    if (!audio.paused && !audio.ended) rafId = requestAnimationFrame(frameLoop);
    else rafId = 0;
  }

  function sync() {
    update();
    if (!audio.paused && !audio.ended && !rafId) rafId = requestAnimationFrame(frameLoop);
    if (audio.paused || audio.ended) stopFrameLoop();
  }

  function goTo(ms, preservePlayback) {
    const wasPlaying = !audio.paused;
    audio.currentTime = clamp(ms, 0, durationMs()) / 1000;
    sync();
    if (preservePlayback !== false && wasPlaying) audio.play().catch(function() {});
  }

  function beginScrub() {
    if (scrubbing) return;
    scrubbing = true;
    resumeAfterScrub = !audio.paused;
    if (resumeAfterScrub) audio.pause();
  }

  function previewScrub() {
    if (!scrubbing) beginScrub();
    const previewMs = clamp(Math.round(Number(seek.value) * 1000), 0, durationMs());
    clock.textContent = "預覽 " + formatTime(previewMs) + " / " + formatTime(durationMs());
  }

  function commitScrub() {
    if (!scrubbing) return;
    const targetMs = clamp(Math.round(Number(seek.value) * 1000), 0, durationMs());
    const shouldResume = resumeAfterScrub;
    scrubbing = false;
    audio.currentTime = targetMs / 1000;
    sync();
    if (shouldResume && targetMs < durationMs()) audio.play().catch(function() {});
  }

  function navigateScene(delta) {
    const timeMs = Math.round((audio.currentTime || 0) * 1000);
    let index = Math.max(0, findAtTime(scenes, timeMs));
    if (timeMs >= scenes[index].endMs && index < scenes.length - 1) index += 1;
    goTo(scenes[clamp(index + delta, 0, scenes.length - 1)].startMs);
  }

  function navigateChapter(delta) {
    const index = Math.max(0, findAtTime(chapters, Math.round((audio.currentTime || 0) * 1000)));
    goTo(chapters[clamp(index + delta, 0, chapters.length - 1)].startMs);
  }

  const chapterList = document.getElementById("chapters");
  chapters.forEach(function(chapter) {
    const button = document.createElement("button");
    const number = document.createElement("span");
    button.className = "chapter-button";
    button.type = "button";
    number.textContent = "第 " + chapter.number + " 章";
    button.append(number, document.createTextNode(chapter.title));
    button.addEventListener("click", function() { goTo(chapter.startMs); });
    chapterList.append(button);
  });

  play.addEventListener("click", function() {
    if (audio.paused) {
      if (audio.ended) audio.currentTime = 0;
      audio.play().catch(function() {
        fallback.textContent = "音訊載入失敗，請確認 audio/narration.mp3。";
        fallback.hidden = false;
      });
    } else audio.pause();
  });
  document.getElementById("replay").addEventListener("click", function() {
    goTo(0, false);
    audio.play().catch(function() {});
  });
  document.getElementById("prevScene").addEventListener("click", function() { navigateScene(-1); });
  document.getElementById("nextScene").addEventListener("click", function() { navigateScene(1); });
  document.getElementById("prevChapter").addEventListener("click", function() { navigateChapter(-1); });
  document.getElementById("nextChapter").addEventListener("click", function() { navigateChapter(1); });

  seek.max = String(sceneEndMs / 1000);
  seek.addEventListener("pointerdown", beginScrub);
  seek.addEventListener("input", previewScrub);
  window.addEventListener("pointerup", commitScrub);
  seek.addEventListener("change", commitScrub);
  seek.addEventListener("blur", commitScrub);

  document.getElementById("volume").addEventListener("input", function(event) {
    audio.volume = Number(event.target.value);
  });
  document.getElementById("mute").addEventListener("click", function() {
    audio.muted = !audio.muted;
    document.getElementById("mute").textContent = audio.muted ? "取消靜音" : "靜音";
  });
  cc.addEventListener("change", sync);
  effectsEnabled.addEventListener("change", sync);

  ["timeupdate", "seeked", "play", "pause", "ended", "loadedmetadata", "seeking"].forEach(function(eventName) {
    audio.addEventListener(eventName, sync);
  });
  audio.addEventListener("error", function() {
    fallback.textContent = "音訊載入失敗，請確認 audio/narration.mp3。";
    fallback.hidden = false;
  });

  document.addEventListener("keydown", function(event) {
    if (event.target.matches("input, textarea, select, button, [contenteditable='true']")) return;
    if (event.code === "Space") {
      event.preventDefault();
      play.click();
    } else if (event.code === "ArrowRight") {
      goTo(Math.round((audio.currentTime || 0) * 1000) + 5000);
    } else if (event.code === "ArrowLeft") {
      goTo(Math.round((audio.currentTime || 0) * 1000) - 5000);
    }
  });

  preload(0);
  sync();
})();
