(() => {
  "use strict";
  const data = window.B24_MOTION_DATA;
  const root = document.getElementById("player-shell");
  if (!data || !root) return;

  const audio = document.getElementById("narration");
  const stage = document.getElementById("stage");
  const art = document.getElementById("stage-art");
  const canvas = document.getElementById("stage-fx");
  const ctx = canvas.getContext("2d", {alpha: true});
  const chapterBadge = document.getElementById("chapter-badge");
  const poemCard = document.getElementById("poem-card");
  const poemText = document.getElementById("poem-text");
  const poemLabel = document.getElementById("poem-label");
  const subtitle = document.getElementById("frame-subtitle");
  const playButton = document.getElementById("play-button");
  const seek = document.getElementById("seek-control");
  const timeRange = document.getElementById("time-range");
  const muteButton = document.getElementById("mute-button");
  const volume = document.getElementById("volume-control");
  const captionToggle = document.getElementById("caption-toggle");
  const previousSceneButton = document.getElementById("previous-scene-button");
  const nextSceneButton = document.getElementById("next-scene-button");
  const previousChapterButton = document.getElementById("previous-chapter-button");
  const nextChapterButton = document.getElementById("next-chapter-button");
  const status = document.getElementById("playback-status");
  const error = document.getElementById("playback-error");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const effectsById = new Map(data.effects.map((effect) => [effect.sceneId, effect]));

  let activeSceneId = "";
  let activeChapterId = "";
  let rafId = 0;
  let seeking = false;
  let captionsVisible = true;
  const durationMs = data.durationMs;
  const durationSeconds = durationMs / 1000;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const lerp = (a, b, p) => a + (b - a) * p;
  const smooth = (p) => p * p * (3 - 2 * p);

  function formatTime(ms) {
    const total = Math.max(0, Math.round(ms));
    const hours = Math.floor(total / 3600000);
    const minutes = Math.floor((total % 3600000) / 60000);
    const seconds = Math.floor((total % 60000) / 1000);
    const millis = total % 1000;
    return String(hours).padStart(2, "0") + ":" +
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0") + "," +
      String(millis).padStart(3, "0");
  }

  function formatClock(ms) {
    const seconds = Math.floor(Math.max(0, ms) / 1000);
    return String(Math.floor(seconds / 60)).padStart(2, "0") + ":" +
      String(seconds % 60).padStart(2, "0");
  }

  function sceneAt(ms) {
    return data.scenes.find((scene) => ms >= scene.startMs && ms < scene.endMs)
      || (ms >= durationMs ? data.scenes[data.scenes.length - 1] : data.scenes[0]);
  }

  function chapterAt(ms, scene) {
    return data.chapters.find((chapter) => ms >= chapter.startMs && ms < chapter.endMs)
      || data.chapters.find((chapter) => chapter.id === scene.chapterId)
      || data.chapters[data.chapters.length - 1];
  }

  function captionAt(ms) {
    return data.captions.find((cue) => ms >= cue.startMs && ms < cue.endMs) || null;
  }

  function overlayAt(ms, sceneId) {
    return data.poemOverlays.find((overlay) =>
      overlay.sceneId === sceneId && ms >= overlay.startMs && ms < overlay.endMs
    ) || null;
  }

  function resizeCanvas() {
    const rect = stage.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(rect.width * ratio));
    const height = Math.max(1, Math.round(rect.height * ratio));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    }
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    return {width: rect.width, height: rect.height};
  }

  function radialGlow(x, y, radius, color, alpha, width, height) {
    const px = x * width;
    const py = y * height;
    const r = radius * Math.max(width, height);
    const gradient = ctx.createRadialGradient(px, py, 0, px, py, r);
    gradient.addColorStop(0, color.replace("ALPHA", String(alpha)));
    gradient.addColorStop(1, color.replace("ALPHA", "0"));
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  function drawEffect(effect, p) {
    const size = resizeCanvas();
    const width = size.width;
    const height = size.height;
    ctx.clearRect(0, 0, width, height);
    if (!effect || reduceMotion.matches) return;

    const pulse = 0.42 + 0.58 * Math.sin(Math.PI * p) ** 2;
    const alpha = effect.intensity * pulse;
    const x = effect.anchor[0];
    const y = effect.anchor[1];
    const region = effect.region;
    const rx = region[0], ry = region[1], rw = region[2], rh = region[3];
    const phase = p * Math.PI * 2 + effect.phase;

    if (effect.family === "glow" || effect.family === "halo" || effect.family === "bokeh") {
      radialGlow(x + Math.sin(phase) * 0.008, y, effect.radius, "rgba(255,211,118,ALPHA)", alpha, width, height);
      if (effect.family === "bokeh") {
        for (let i = 0; i < 4; i += 1) {
          const bx = rx + rw * ((i * 0.271 + 0.13) % 1);
          const by = ry + rh * ((i * 0.337 + 0.22) % 1);
          ctx.beginPath();
          ctx.fillStyle = "rgba(255,224,158," + (alpha * (0.16 + 0.08 * Math.sin(phase + i))) + ")";
          ctx.arc(bx * width, by * height, Math.max(2, width * (0.002 + i * 0.0005)), 0, Math.PI * 2);
          ctx.fill();
        }
      }
      return;
    }

    if (effect.family === "water") {
      for (let i = 0; i < 7; i += 1) {
        const yy = (ry + rh * (i + 0.5) / 7) * height;
        const drift = Math.sin(phase + i * 1.7) * width * 0.012;
        ctx.beginPath();
        ctx.ellipse((x * width) + drift, yy, rw * width * (0.12 + (i % 3) * 0.04), height * 0.003, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,221,147," + (alpha * (0.18 + (i % 2) * 0.08)) + ")";
        ctx.lineWidth = Math.max(1, width * 0.0012);
        ctx.stroke();
      }
      return;
    }

    if (effect.family === "snow") {
      for (let i = 0; i < 18; i += 1) {
        const seedX = ((i * 37 + 11) % 101) / 101;
        const seedY = ((i * 59 + 7) % 97) / 97;
        const px = (rx + ((seedX + p * (0.05 + (i % 4) * 0.012)) % 1) * rw) * width;
        const py = (ry + ((seedY + p * (0.12 + (i % 5) * 0.018)) % 1) * rh) * height;
        ctx.beginPath();
        ctx.fillStyle = "rgba(240,247,255," + (alpha * (0.16 + (i % 3) * 0.07)) + ")";
        ctx.arc(px, py, Math.max(1, width * 0.0012), 0, Math.PI * 2);
        ctx.fill();
      }
      return;
    }

    if (effect.family === "mist" || effect.family === "cloud" || effect.family === "steam") {
      const count = effect.family === "steam" ? 3 : 2;
      for (let i = 0; i < count; i += 1) {
        const mx = (rx + rw * (0.25 + i * 0.31) + Math.sin(phase + i) * 0.016) * width;
        const my = (ry + rh * (0.55 - i * 0.16) - p * 0.03) * height;
        ctx.beginPath();
        ctx.ellipse(mx, my, rw * width * 0.22, rh * height * (effect.family === "steam" ? 0.18 : 0.26), -0.08 + i * 0.05, 0, Math.PI * 2);
        ctx.fillStyle = effect.family === "steam"
          ? "rgba(255,241,218," + (alpha * 0.12) + ")"
          : "rgba(205,222,235," + (alpha * 0.1) + ")";
        ctx.shadowColor = effect.family === "steam" ? "rgba(255,241,218,.24)" : "rgba(205,222,235,.2)";
        ctx.shadowBlur = width * 0.025;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      return;
    }

    if (effect.family === "smoke" || effect.family === "ribbon") {
      ctx.beginPath();
      ctx.moveTo(x * width, (y + 0.1) * height);
      ctx.bezierCurveTo((x - 0.035) * width, (y + 0.02 - p * 0.035) * height, (x + 0.04) * width, (y - 0.035 - p * 0.06) * height, (x + 0.012) * width, (y - 0.11 - p * 0.08) * height);
      ctx.strokeStyle = effect.family === "smoke"
        ? "rgba(239,235,222," + (alpha * 0.22) + ")"
        : "rgba(255,196,105," + (alpha * 0.25) + ")";
      ctx.lineWidth = Math.max(2, width * (effect.family === "smoke" ? 0.004 : 0.002));
      ctx.shadowColor = ctx.strokeStyle;
      ctx.shadowBlur = width * 0.008;
      ctx.stroke();
      ctx.shadowBlur = 0;
      return;
    }

    if (effect.family === "split") {
      const sweep = lerp(rx, rx + rw, smooth(p));
      const gradient = ctx.createLinearGradient(sweep * width - rw * width * 0.22, 0, sweep * width + rw * width * 0.22, 0);
      gradient.addColorStop(0, "rgba(37,83,108," + (alpha * 0.08) + ")");
      gradient.addColorStop(0.5, "rgba(243,190,100," + (alpha * 0.12) + ")");
      gradient.addColorStop(1, "rgba(37,83,108," + (alpha * 0.08) + ")");
      ctx.fillStyle = gradient;
      ctx.fillRect(rx * width, ry * height, rw * width, rh * height);
      return;
    }

    if (effect.family === "shadow") {
      const sweep = lerp(rx - rw * 0.2, rx + rw, smooth(p));
      const gradient = ctx.createLinearGradient(sweep * width - rw * width * 0.2, 0, sweep * width + rw * width * 0.2, height);
      gradient.addColorStop(0, "rgba(15,28,35,0)");
      gradient.addColorStop(0.5, "rgba(15,28,35," + (alpha * 0.13) + ")");
      gradient.addColorStop(1, "rgba(15,28,35,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(rx * width, ry * height, rw * width, rh * height);
      return;
    }

    radialGlow(x, y, effect.radius, "rgba(255,220,145,ALPHA)", alpha * 0.6, width, height);
  }

  function drawScene(scene, ms) {
    const effect = effectsById.get(scene.id);
    const p = clamp((ms - scene.startMs) / Math.max(1, scene.endMs - scene.startMs), 0, 1);
    if (activeSceneId !== scene.id) {
      activeSceneId = scene.id;
      art.src = "./assets/" + scene.imagePath.replace(/^\/+/, "");
      art.alt = "IMG" + scene.id + "，" + scene.chapter + "。" + scene.storyboard;
    }

    if (!effect || reduceMotion.matches) {
      art.style.transform = "translate3d(0,0,0) scale(1)";
      drawEffect(null, p);
      return;
    }

    const eased = smooth(p);
    const x = lerp(effect.from[0], effect.to[0], eased);
    const y = lerp(effect.from[1], effect.to[1], eased);
    const scale = lerp(effect.from[2], effect.to[2], eased);
    art.style.transformOrigin = (effect.focus[0] * 100) + "% " + (effect.focus[1] * 100) + "%";
    art.style.transform = "translate3d(" + x + "%," + y + "%,0) scale(" + scale + ")";
    drawEffect(effect, p);
  }

  function renderChapter(chapter, ms) {
    if (chapter.id !== activeChapterId) {
      activeChapterId = chapter.id;
      chapterBadge.textContent = chapter.title;
    }
    const elapsed = Math.max(0, ms - chapter.startMs);
    const progress = reduceMotion.matches ? 1 : clamp(elapsed / 250, 0, 1);
    chapterBadge.style.opacity = String(progress);
    chapterBadge.style.transform = "translateY(" + ((1 - progress) * -4) + "px)";

    for (const button of document.querySelectorAll(".chapter-button")) {
      const active = button.dataset.chapterId === chapter.id;
      button.classList.toggle("active", active);
      if (active) button.setAttribute("aria-current", "location");
      else button.removeAttribute("aria-current");
    }
  }

  function renderOverlay(overlay, ms) {
    if (!overlay) {
      poemCard.hidden = true;
      return;
    }
    poemCard.hidden = false;
    if (poemCard.dataset.cueId !== overlay.cueId) {
      poemCard.dataset.cueId = overlay.cueId;
      poemText.textContent = overlay.text;
      poemLabel.textContent = overlay.label || "";
      poemLabel.hidden = !overlay.label;
      poemCard.style.left = (overlay.box.x * 100) + "%";
      poemCard.style.top = (overlay.box.y * 100) + "%";
      poemCard.style.width = (overlay.box.width * 100) + "%";
    }
    const length = Math.max(1, overlay.endMs - overlay.startMs);
    const fade = Math.min(240, length * 0.12);
    const envelope = reduceMotion.matches
      ? 1
      : Math.min(1, (ms - overlay.startMs) / fade, (overlay.endMs - ms) / fade);
    const opacity = clamp(envelope, 0, 1);
    poemCard.style.opacity = String(opacity);
    poemCard.style.transform = "translateY(" + ((1 - opacity) * 5) + "px)";
  }

  function render() {
    const ms = clamp(audio.currentTime * 1000, 0, durationMs);
    const scene = sceneAt(ms);
    const chapter = chapterAt(ms, scene);
    const cue = captionAt(ms);
    drawScene(scene, ms);
    renderChapter(chapter, ms);
    subtitle.textContent = captionsVisible && cue ? cue.text : "";
    renderOverlay(overlayAt(ms, scene.id), ms);
    timeRange.textContent = formatClock(ms) + " / " + formatClock(durationMs);
    if (!seeking) seek.value = String(ms / 1000);
    status.textContent = audio.ended ? "播放完成" : audio.paused ? "已暫停" : "旁白播放中";
    playButton.textContent = audio.paused ? "▶ 播放" : "Ⅱ 暫停";
    const sceneIndex = data.scenes.findIndex((item) => item.id === scene.id);
    const chapterIndex = data.chapters.findIndex((item) => item.id === chapter.id);
    previousSceneButton.disabled = sceneIndex <= 0;
    nextSceneButton.disabled = sceneIndex >= data.scenes.length - 1;
    previousChapterButton.disabled = chapterIndex <= 0;
    nextChapterButton.disabled = chapterIndex >= data.chapters.length - 1;
    document.title = chapter.title + "｜《蝶戀花·密州上元》動畫特效版";
  }

  function tick() {
    render();
    rafId = audio.paused ? 0 : requestAnimationFrame(tick);
  }

  function startRendering() {
    if (!rafId) rafId = requestAnimationFrame(tick);
  }

  const chapterList = document.getElementById("chapter-list");
  for (const chapter of data.chapters) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chapter-button";
    button.dataset.chapterId = chapter.id;
    button.innerHTML = '<span class="chapter-number"></span><span class="chapter-name"></span><small></small>';
    button.querySelector(".chapter-number").textContent = chapter.id;
    button.querySelector(".chapter-name").textContent = chapter.title;
    button.querySelector("small").textContent = chapter.sceneCount + " 鏡";
    button.addEventListener("click", () => {
      audio.currentTime = chapter.startMs / 1000;
      render();
      if (!audio.paused) startRendering();
    });
    chapterList.append(button);
  }

  playButton.addEventListener("click", async () => {
    error.hidden = true;
    if (audio.paused) {
      try {
        await audio.play();
        startRendering();
      } catch (err) {
        error.textContent = "瀏覽器未能播放旁白，請再次按播放或檢查音訊檔案。";
        error.hidden = false;
      }
    } else {
      audio.pause();
      render();
    }
  });

  function seekTo(ms) {
    audio.currentTime = clamp(ms, 0, durationMs) / 1000;
    render();
    if (!audio.paused) startRendering();
  }
  previousSceneButton.addEventListener("click", () => {
    const index = data.scenes.findIndex((item) => item.id === sceneAt(audio.currentTime * 1000).id);
    if (index > 0) seekTo(data.scenes[index - 1].startMs);
  });
  nextSceneButton.addEventListener("click", () => {
    const index = data.scenes.findIndex((item) => item.id === sceneAt(audio.currentTime * 1000).id);
    if (index < data.scenes.length - 1) seekTo(data.scenes[index + 1].startMs);
  });
  previousChapterButton.addEventListener("click", () => {
    const index = data.chapters.findIndex((item) => item.id === chapterAt(audio.currentTime * 1000, sceneAt(audio.currentTime * 1000)).id);
    if (index > 0) seekTo(data.chapters[index - 1].startMs);
  });
  nextChapterButton.addEventListener("click", () => {
    const index = data.chapters.findIndex((item) => item.id === chapterAt(audio.currentTime * 1000, sceneAt(audio.currentTime * 1000)).id);
    if (index < data.chapters.length - 1) seekTo(data.chapters[index + 1].startMs);
  });
  captionToggle.addEventListener("change", () => {
    captionsVisible = captionToggle.checked;
    render();
  });

  seek.addEventListener("pointerdown", () => { seeking = true; });
  seek.addEventListener("pointerup", () => { seeking = false; });
  seek.addEventListener("input", () => {
    seeking = true;
    audio.currentTime = clamp(Number(seek.value), 0, durationSeconds);
    render();
  });
  seek.addEventListener("change", () => { seeking = false; render(); });
  seek.addEventListener("blur", () => { seeking = false; render(); });

  volume.addEventListener("input", () => {
    audio.volume = Number(volume.value);
    audio.muted = audio.volume === 0;
    muteButton.textContent = audio.muted ? "取消靜音" : "靜音";
  });
  muteButton.addEventListener("click", () => {
    audio.muted = !audio.muted;
    muteButton.textContent = audio.muted ? "取消靜音" : "靜音";
    if (!audio.muted && audio.volume === 0) {
      audio.volume = 0.7;
      volume.value = "0.7";
    }
  });

  document.getElementById("restart-button").addEventListener("click", () => {
    audio.currentTime = 0;
    render();
    if (!audio.paused) startRendering();
  });

  audio.addEventListener("play", startRendering);
  audio.addEventListener("pause", render);
  audio.addEventListener("timeupdate", render);
  audio.addEventListener("seeked", render);
  audio.addEventListener("ended", render);
  audio.addEventListener("error", () => {
    error.textContent = "找不到旁白 MP3，請確認網站資料夾內 assets/audio/narration.mp3 存在。";
    error.hidden = false;
  });
  window.addEventListener("resize", () => { resizeCanvas(); render(); });
  reduceMotion.addEventListener?.("change", render);

  seek.max = String(durationSeconds);
  timeRange.textContent = formatClock(0) + " / " + formatClock(durationMs);
  audio.volume = 1;
  resizeCanvas();
  render();
})();
