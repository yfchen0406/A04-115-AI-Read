(function () {
  "use strict";

  // All intervals below come from the existing Excel storyboard timeline.
  // Times are milliseconds from the original narration start.
  var SCENE_EFFECTS = [
    ["001", 0, 10369, "warm-glow", 27, 62, 0.15, 10, 0],
    ["002", 10369, 17720, "leaf-shadow", 50, 40, 0.12, 12, 3],
    ["003", 17720, 22967, "moon-shift", 79, 28, 0.10, -9, 2],
    ["004", 22967, 31463, "leaf-shadow", 49, 48, 0.10, 8, 0],
    ["005", 31463, 37140, "sunbeam", 67, 67, 0.12, 0, -10],
    ["006", 37140, 42442, "water", 50, 75, 0.13, 8, 0],
    ["007", 42442, 48665, "river-glint", 53, 53, 0.12, 9, 0],
    ["008", 48665, 55760, "rain", 48, 35, 0.17, -8, 12],
    ["009", 55760, 62418, "page-light", 63, 57, 0.10, -6, 0],
    ["010", 62418, 69076, "water", 58, 61, 0.14, 9, 0],
    ["011", 69076, 73060, "ink-halo", 35, 47, 0.09, 0, -4],
    ["012", 73060, 79745, "screen-shadow", 47, 42, 0.10, 5, 0],
    ["013", 79745, 88520, "cloud-shadow", 57, 49, 0.10, -7, 2],
    ["014", 88520, 96220, "water-glint", 53, 62, 0.12, 7, 1],
    ["015", 96220, 106180, "curtain-shadow", 67, 32, 0.11, 6, 0],
    ["016", 106180, 112707, "water-shadow", 50, 52, 0.13, -7, 1],
    ["017", 112707, 121440, "warm-cool", 59, 45, 0.11, 7, 0],
    ["018", 121440, 130009, "leaf-shadow", 35, 52, 0.09, 6, -2],
    ["019", 130009, 133926, "dust-light", 61, 45, 0.10, 0, -5],
    ["020", 133926, 141940, "threshold-beam", 62, 69, 0.11, -8, 0],
    ["021", 141940, 148585, "dawn-glow", 72, 56, 0.12, -4, 0],
    ["022", 148585, 156960, "leaf-drift", 72, 27, 0.12, -7, 1],
    ["023", 156960, 159440, "page-glow", 44, 64, 0.10, 5, -2],
    ["024", 159440, 167376, "ink-bloom", 52, 56, 0.11, 0, -4],
    ["025", 167376, 176458, "sunset-ripple", 47, 59, 0.15, 10, 0],
    ["026", 176458, 180675, "window-mist", 76, 34, 0.13, -6, 1],
    ["027", 180675, 188400, "walkway-beam", 60, 70, 0.10, 0, -9],
    ["028", 188400, 199926, "snowfall", 76, 31, 0.12, -4, 8],
    ["029", 199926, 209180, "leaf-drift", 76, 30, 0.10, 8, 1],
    ["030", 209180, 217801, "page-light", 50, 58, 0.11, 9, 0],
    ["031", 217801, 224960, "lamp-glow", 70, 58, 0.09, -4, 0],
    ["032", 224960, 238970, "snow-mist", 51, 38, 0.12, -6, 3],
    ["033", 238970, 245540, "warm-glow", 62, 71, 0.13, -5, 0],
    ["034", 245540, 253327, "paper-beam", 52, 50, 0.10, 7, 0],
    ["035", 253327, 262160, "stair-light", 53, 28, 0.12, 0, 9],
    ["036", 262160, 270810, "doorway-beam", 57, 51, 0.12, 8, 0],
    ["037", 270810, 283380, "curtain-shadow", 73, 35, 0.10, -6, 0],
    ["038", 283380, 288625, "balance-glint", 50, 50, 0.10, 5, 0],
    ["039", 288625, 294555, "ink-bloom", 52, 59, 0.10, 4, -2],
    ["040", 294555, 298840, "seal-glint", 74, 62, 0.11, 0, -4],
    ["041", 298840, 307637, "lamp-pool", 51, 75, 0.11, 0, -3],
    ["042", 307637, 317540, "family-glow", 50, 61, 0.10, -3, 0],
    ["043", 317540, 321265, "city-glow", 77, 39, 0.12, 6, 0],
    ["044", 321265, 331920, "steam", 60, 71, 0.10, 0, -10],
    ["045", 331920, 338824, "document-beam", 55, 59, 0.10, 8, 0],
    ["046", 338824, 342045, "book-beam", 55, 62, 0.10, 6, -2],
    ["047", 342045, 351660, "lake-ripple", 59, 72, 0.13, 9, 0],
    ["048", 351660, 356667, "screen-glow", 51, 62, 0.10, -3, 0],
    ["049", 356667, 365120, "lamp-pool", 47, 67, 0.10, 0, -3],
    ["050", 365120, 374193, "paper-shadow", 55, 58, 0.10, -7, 1],
    ["051", 374193, 384500, "lamp-fade", 68, 55, 0.12, -4, 0],
    ["052", 384500, 390484, "steam", 65, 58, 0.10, 0, -9],
    ["053", 390484, 400000, "document-beam", 55, 58, 0.10, 7, 0],
    ["054", 400000, 413780, "sunbeam", 64, 63, 0.12, -8, 0],
    ["055", 413780, 417159, "lake-glint", 69, 69, 0.11, 7, 0],
    ["056", 417159, 427080, "screen-glow", 48, 56, 0.12, 3, 0],
    ["057", 427080, 433156, "candle-glow", 75, 29, 0.12, -4, 0],
    ["058", 433156, 440020, "river-wake", 56, 66, 0.13, 9, 0],
    ["059", 440020, 443955, "paper-beam", 76, 56, 0.10, -8, 0],
    ["060", 443955, 453690, "candle-glow", 40, 65, 0.12, 5, 0],
    ["061", 453690, 460940, "morning-mist", 54, 55, 0.13, -5, -2]
  ];

  // Cue intervals come from the original A03 SRT. Text remains a separate layer.
  var POEM_CUES = [
    { start: 22967, end: 31463, id: "S005", scene: "004", lines: ["惟願孩兒愚且魯，", "無災無難到公卿。"], left: "43%", top: "58%", width: "52%" },
    { start: 126092, end: 130009, id: "S021", scene: "018", lines: ["人皆養子望聰明，", "我被聰明誤一生。"], left: "24%", top: "49%", width: "53%" },
    { start: 130009, end: 133926, id: "S022", scene: "019", lines: ["惟願孩兒愚且魯，", "無災無難到公卿。"], left: "25%", top: "29%", width: "51%" },
    { start: 148585, end: 151243, id: "S025", scene: "022", lines: ["人皆養子望聰明，"], left: "59%", top: "15%", width: "37%" },
    { start: 167376, end: 171840, id: "S029", scene: "025", lines: ["我被聰明誤一生。"], left: "53%", top: "15%", width: "43%" },
    { start: 199926, end: 209000, id: "S034", scene: "029", lines: ["我被聰明誤一生。"], left: "59%", top: "15%", width: "37%" },
    { start: 238970, end: 245360, id: "S039", scene: "033", lines: ["惟願孩兒愚且魯，"], left: "59%", top: "15%", width: "37%" },
    { start: 256356, end: 261980, id: "S043", scene: "035", lines: ["無災無難到公卿。"], left: "55%", top: "15%", width: "40%" },
    { start: 427080, end: 433156, id: "S067", scene: "057", lines: ["惟願孩兒愚且魯，", "無災無難到公卿。"], left: "58%", top: "14%", width: "39%" }
  ];

  var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lastSceneId = "";
  var lastCueId = "";

  function createOverlay(parent, className) {
    var node = document.createElement("div");
    node.className = className;
    node.setAttribute("aria-hidden", "true");
    return node;
  }

  function ensureLayers(composition) {
    if (!composition) return null;
    var effectLayer = composition.querySelector(".scene-effects-layer");
    var poemLayer = composition.querySelector(".poem-image-overlay");
    var title = composition.querySelector(".frame-intro");
    var subtitle = composition.querySelector(".frame-subtitle");
    var anchor = title || subtitle;
    if (!effectLayer) {
      effectLayer = createOverlay(composition, "scene-effects-layer");
      if (anchor) composition.insertBefore(effectLayer, anchor);
      else composition.appendChild(effectLayer);
    }
    if (!poemLayer) {
      poemLayer = createOverlay(composition, "poem-image-overlay");
      if (anchor) composition.insertBefore(poemLayer, anchor);
      else composition.appendChild(poemLayer);
    }
    return { effectLayer: effectLayer, poemLayer: poemLayer };
  }

  function getScene(ms) {
    for (var i = 0; i < SCENE_EFFECTS.length; i += 1) {
      var item = SCENE_EFFECTS[i];
      if (ms >= item[1] && ms < item[2]) return item;
    }
    return ms >= 460940 ? SCENE_EFFECTS[SCENE_EFFECTS.length - 1] : null;
  }

  function renderPoem(layer, cue, ms) {
    if (!cue) {
      if (lastCueId) {
        layer.replaceChildren();
        layer.removeAttribute("style");
        layer.removeAttribute("data-cue");
        lastCueId = "";
      }
      return;
    }
    var progress = Math.max(0, Math.min(1, (ms - cue.start) / Math.max(1, cue.end - cue.start)));
    var fade = reducedMotion ? 1 : Math.min(1, progress / 0.045, (1 - progress) / 0.045);
    if (lastCueId !== cue.id) {
      layer.replaceChildren();
      cue.lines.forEach(function (line) {
        var row = document.createElement("span");
        row.className = "poem-image-line";
        row.textContent = line;
        layer.appendChild(row);
      });
      layer.dataset.cue = cue.id;
      lastCueId = cue.id;
    }
    layer.style.left = cue.left;
    layer.style.top = cue.top;
    layer.style.width = "max-content";
    layer.style.maxWidth = "calc(96% - " + cue.left + ")";
    layer.style.opacity = String(Math.max(0, fade));
    layer.style.setProperty("--poem-rise", reducedMotion ? "0px" : (6 * (1 - fade)) + "px");
  }

  function updateFrame(stage, audio) {
    var composition = stage.querySelector(".video-composition");
    var layers = ensureLayers(composition);
    if (!layers) return;
    var waiting = !!stage.querySelector(".cover-start");
    var ms = Math.max(0, audio.currentTime * 1000);
    var scene = getScene(ms);
    var cue = null;
    for (var i = 0; i < POEM_CUES.length; i += 1) {
      var candidate = POEM_CUES[i];
      if (ms >= candidate.start && ms < candidate.end) {
        cue = candidate;
        break;
      }
    }

    if (waiting || !scene) {
      layers.effectLayer.hidden = true;
      layers.poemLayer.hidden = true;
      return;
    }
    layers.effectLayer.hidden = false;
    layers.effectLayer.dataset.kind = scene[3];
    layers.effectLayer.dataset.scene = scene[0];
    layers.poemLayer.hidden = !cue;

    var progress = Math.max(0, Math.min(1, (ms - scene[1]) / Math.max(1, scene[2] - scene[1])));
    var animationProgress = reducedMotion ? 0.5 : progress;
    var alpha = Math.min(0.3, scene[6] * 1.65 * (reducedMotion ? 0.8 : 0.8 + 0.2 * Math.sin(progress * Math.PI * 2)));
    layers.effectLayer.style.setProperty("--fx-x", scene[4] + "%");
    layers.effectLayer.style.setProperty("--fx-y", scene[5] + "%");
    layers.effectLayer.style.setProperty("--fx-alpha", String(alpha));
    layers.effectLayer.style.setProperty("--fx-dx", reducedMotion ? "0px" : ((animationProgress - 0.5) * scene[7] * 3) + "px");
    layers.effectLayer.style.setProperty("--fx-dy", reducedMotion ? "0px" : ((animationProgress - 0.5) * scene[8] * 3) + "px");
    layers.effectLayer.style.setProperty("--fx-scale", reducedMotion ? "1" : String(1 + 0.035 * Math.sin(progress * Math.PI)));
    layers.effectLayer.style.setProperty("--fx-progress", String(animationProgress));

    if (cue) renderPoem(layers.poemLayer, cue, ms);
    else renderPoem(layers.poemLayer, null, ms);

    if (scene[0] !== lastSceneId) {
      layers.effectLayer.dataset.scene = scene[0];
      lastSceneId = scene[0];
    }
  }

  function start() {
    if (document.body.dataset.effectsVersion !== "true") return;
    var root = document.getElementById("root") || document.body;
    var rootObserver = null;
    var started = false;

    function initializeWhenReady() {
      if (started) return true;
      var stage = document.getElementById("stage-wrap");
      var audio = stage && stage.querySelector(".master-audio");
      if (!stage || !audio) return false;
      started = true;
      if (rootObserver) rootObserver.disconnect();

    var scheduled = false;
    function schedule() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(function () {
        scheduled = false;
        updateFrame(stage, audio);
      });
    }
    var observer = new MutationObserver(schedule);
    observer.observe(stage, { childList: true, subtree: true });
    audio.addEventListener("timeupdate", schedule);
    audio.addEventListener("seeking", schedule);
    audio.addEventListener("seeked", schedule);
    audio.addEventListener("play", schedule);
    audio.addEventListener("pause", schedule);

    var back = document.querySelector(".reader-header .back-link");
    if (back) {
      back.href = "./reading.html";
      back.textContent = "← 返回原版閱讀";
      back.setAttribute("aria-label", "返回原版閱讀頁");
    }
    var eyebrow = document.querySelector(".reader-header .eyebrow");
    if (eyebrow && !eyebrow.textContent.includes("動畫特效版")) {
      eyebrow.textContent += " · 動畫特效版 ✦";
    }

    function frame() {
      updateFrame(stage, audio);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
      return true;
    }

    if (!initializeWhenReady()) {
      rootObserver = new MutationObserver(initializeWhenReady);
      rootObserver.observe(root, { childList: true, subtree: true });
      // React may commit between the first lookup and observer registration.
      initializeWhenReady();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
