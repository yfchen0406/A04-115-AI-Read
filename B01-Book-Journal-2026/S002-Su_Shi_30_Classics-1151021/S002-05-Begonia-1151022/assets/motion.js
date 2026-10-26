(function () {
  "use strict";

  var timeline = window.MOTION_TIMELINE;
  var byId = function (id) { return document.getElementById(id); };
  var stage = byId("motion-stage");
  var frame = byId("motion-frame");
  var previousFrame = byId("motion-previous");
  var effectLayer = byId("motion-effect");
  var chapterTitle = byId("motion-chapter");
  var chapterIntro = byId("motion-intro");
  var poemLayer = byId("motion-poem");
  var subtitleLayer = byId("motion-subtitle");
  var audio = byId("motion-audio");
  var startButton = byId("motion-start");
  var playButton = byId("motion-play");
  var seek = byId("motion-seek");
  var chapterList = byId("motion-chapter-list");
  var errorBox = byId("motion-error");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!timeline || !timeline.scenes || timeline.scenes.length !== 58) {
    errorBox.hidden = false;
    errorBox.textContent = "時間軸資料無法讀取，請回原版閱讀頁。";
    return;
  }
  var sceneCount = timeline.scenes.length;

  var effectRows = [
    ["001","mist",30,25,0.12,"left"],["002","spark",28,62,0.13,"up"],
    ["003","flame",52,59,0.16,"up"],["004","glow",58,43,0.12,"right"],
    ["005","shadow",48,48,0.10,"left"],["006","mist",70,50,0.11,"right"],
    ["007","shadow",55,50,0.10,"right"],["008","water",47,70,0.14,"right"],
    ["009","page",52,44,0.10,"left"],["010","page",47,55,0.10,"right"],
    ["011","shadow",50,50,0.09,"left"],["012","ink",48,60,0.10,"down"],
    ["013","mist",62,35,0.12,"right"],["014","water",51,49,0.12,"left"],
    ["015","glow",75,60,0.12,"up"],["016","mist",48,56,0.11,"left"],
    ["017","wind",58,40,0.09,"right"],["018","glow",38,56,0.12,"up"],
    ["019","wind",53,48,0.10,"right"],["020","moon",61,35,0.11,"up"],
    ["021","mist",59,51,0.10,"right"],["022","mist",46,48,0.11,"right"],
    ["023","water",38,42,0.10,"left"],["024","shadow",68,49,0.10,"down"],
    ["025","page",54,55,0.11,"right"],["026","flame",61,64,0.17,"up"],
    ["027","glow",51,50,0.11,"up"],["028","sunset",52,51,0.10,"right"],
    ["029","flame",44,56,0.12,"up"],["030","spark",74,47,0.10,"left"],
    ["031","glow",52,52,0.10,"up"],["032","page",48,51,0.10,"right"],
    ["033","mist",57,49,0.11,"left"],["034","moon",58,34,0.10,"right"],
    ["035","shadow",49,53,0.10,"left"],["036","flame",66,63,0.13,"up"],
    ["037","glow",55,57,0.12,"up"],["038","glow",52,51,0.14,"up"],
    ["039","glow",48,47,0.09,"up"],["040","page",48,61,0.11,"right"],
    ["041","page",42,66,0.10,"up"],["042","dapple",55,49,0.10,"right"],
    ["043","glow",56,59,0.10,"up"],["044","flame",50,57,0.12,"up"],
    ["045","page",49,53,0.09,"left"],["046","sunset",46,50,0.10,"right"],
    ["047","dapple",55,42,0.11,"left"],["048","steam",40,58,0.09,"up"],
    ["049","screen",59,55,0.10,"right"],["050","sunset",60,42,0.12,"left"],
    ["051","water",55,60,0.09,"left"],["052","page",48,50,0.10,"down"],
    ["053","shadow",52,55,0.10,"left"],["054","glow",68,49,0.09,"right"],
    ["055","page",50,51,0.11,"right"],["056","moon",47,41,0.10,"left"],
    ["057","page",52,61,0.10,"up"],["058","flame",63,55,0.15,"up"]
  ];
  var effects = {};
  effectRows.forEach(function (row) {
    effects[row[0]] = { type: row[1], x: row[2], y: row[3], strength: row[4], direction: row[5] };
  });

  var poemPhrases = ["東風裊裊泛崇光","香霧空濛月轉廊","只恐夜深花睡去","故燒高燭照紅妝"];
  var poemCues = [
    { cueId:"S018", imageId:"014", startMs:100687, endMs:106612, text:"東風裊裊泛崇光，\n香霧空濛月轉廊。", left:36, top:27, width:62 },
    { cueId:"S019", imageId:"015", startMs:106612, endMs:111125, text:"只恐夜深花睡去，\n故燒高燭照紅妝。", left:75, top:27, width:42 },
    { cueId:"S023", imageId:"018", startMs:130704, endMs:133600, text:"東風裊裊泛崇光，", left:69, top:32, width:45 },
    { cueId:"S027", imageId:"021", startMs:150240, endMs:153055, text:"香霧空濛月轉廊。", left:69, top:38, width:48 },
    { cueId:"S030", imageId:"024", startMs:167780, endMs:170805, text:"只恐夜深花睡去，", left:69, top:37, width:48 },
    { cueId:"S034", imageId:"026", startMs:186360, endMs:189175, text:"故燒高燭照紅妝。", left:31, top:37, width:49 }
  ];
  function normalizePoemText(value) {
    return value.replace(/[\s，。？！、；：]/g, "");
  }
  function validatePlan() {
    if (effectRows.length !== sceneCount || Object.keys(effects).length !== sceneCount) {
      throw new Error("逐圖動畫設定數量和分鏡數量不一致");
    }
    poemCues.forEach(function (cue) {
      var segment = timeline.displaySegments.find(function (item) { return item.cueId === cue.cueId; });
      var scene = timeline.scenes[sceneIndexAt(cue.startMs)];
      var quotedText = normalizePoemText(cue.text);
      if (!segment || !scene || scene.id !== cue.imageId ||
          Math.abs(segment.startSeconds * 1000 - cue.startMs) > 1 ||
          Math.abs(segment.endSeconds * 1000 - cue.endMs) > 1 ||
          normalizePoemText(segment.text).indexOf(quotedText) < 0) {
        throw new Error("原句疊字和字幕 cue／圖片的核對未通過：" + cue.cueId);
      }
    });
  }
  try {
    validatePlan();
  } catch (validationError) {
    errorBox.hidden = false;
    errorBox.textContent = "特效資料核對失敗：" + validationError.message;
    return;
  }
  var currentSceneId = null;
  var previousScene = null;
  var sceneChangedAt = 0;
  var hasStarted = false;
  var scrubbing = false;
  function assetUrl(path) {
    if (/^(data:|blob:)/i.test(path)) return path;
    return new URL("./assets/" + path.replace(/^\/+/, ""), document.baseURI).href;
  }
  if (window.MOTION_AUDIO_SOURCE) audio.src = window.MOTION_AUDIO_SOURCE;
  else audio.src = assetUrl("audio/narration.mp3");

  function formatTime(seconds) {
    var value = Math.max(0, Math.floor(seconds));
    var minutes = Math.floor(value / 60);
    var remainder = value % 60;
    return String(minutes).padStart(2, "0") + ":" + String(remainder).padStart(2, "0");
  }

  function sceneIndexAt(ms) {
    var low = 0;
    var high = sceneCount - 1;
    while (low <= high) {
      var middle = (low + high) >> 1;
      var item = timeline.scenes[middle];
      if (ms < item.startMs) high = middle - 1;
      else if (ms >= item.endMs && middle < sceneCount - 1) low = middle + 1;
      else return middle;
    }
    return Math.max(0, Math.min(sceneCount - 1, high));
  }

  function chapterAt(ms) {
    return timeline.chapters.find(function (item, index) {
      return ms >= item.startMs && (ms < item.endMs || index === timeline.chapters.length - 1);
    }) || timeline.chapters[timeline.chapters.length - 1];
  }

  function cameraPose(scene, progress) {
    var p = Math.max(0, Math.min(1, progress));
    var scale = 1;
    var x = 0;
    var y = 0;
    if (scene.motionType === "push") scale = 1 + p * 0.045;
    else if (scene.motionType === "pull") scale = 1.045 - p * 0.045;
    else if (scene.motionType === "pan-left") { scale = 1.045; x = 1.25 - p * 2.5; }
    else if (scene.motionType === "pan-right") { scale = 1.045; x = -1.25 + p * 2.5; }
    else if (scene.motionType === "pan-up") { scale = 1.045; y = 1.25 - p * 2.5; }
    else if (scene.motionType === "pan-down") { scale = 1.045; y = -1.25 + p * 2.5; }
    if (reducedMotion.matches) { scale = 1; x = 0; y = 0; }
    return "translate(" + x + "%," + y + "%) scale(" + scale + ")";
  }

  function setImage(scene, ms) {
    if (scene.id !== currentSceneId) {
      if (currentSceneId !== null) {
        previousScene = timeline.scenes[sceneIndexAt(Math.max(0, scene.startMs - 1))];
        sceneChangedAt = ms;
        previousFrame.src = assetUrl(previousScene.imagePath);
        previousFrame.style.transform = cameraPose(previousScene, 1);
      } else {
        previousScene = null;
      }
      currentSceneId = scene.id;
      frame.src = assetUrl(scene.imagePath);
    }
    var duration = Math.max(1, scene.endMs - scene.startMs);
    frame.style.transform = cameraPose(scene, (ms - scene.startMs) / duration);
    if (previousScene) {
      var blendDuration = previousScene.chapterId !== scene.chapterId ? 900 : 650;
      var alpha = Math.max(0, 1 - (ms - sceneChangedAt) / blendDuration);
      previousFrame.style.opacity = String(alpha);
      if (alpha <= 0) {
        previousScene = null;
        previousFrame.removeAttribute("src");
      }
    }
  }

  function renderSubtitle(text) {
    subtitleLayer.replaceChildren();
    if (!text) return;
    var cursor = 0;
    while (cursor < text.length) {
      var nextIndex = -1;
      var nextPhrase = "";
      poemPhrases.forEach(function (phrase) {
        var index = text.indexOf(phrase, cursor);
        if (index >= 0 && (nextIndex < 0 || index < nextIndex)) {
          nextIndex = index;
          nextPhrase = phrase;
        }
      });
      if (nextIndex < 0) {
        subtitleLayer.appendChild(document.createTextNode(text.slice(cursor)));
        break;
      }
      if (nextIndex > cursor) subtitleLayer.appendChild(document.createTextNode(text.slice(cursor, nextIndex)));
      var mark = document.createElement("span");
      mark.className = "poem-highlight";
      mark.textContent = nextPhrase;
      subtitleLayer.appendChild(mark);
      cursor = nextIndex + nextPhrase.length;
    }
  }

  function showPoem(scene, ms) {
    var activeCaption = currentSegment(ms / 1000);
    var cue = poemCues.find(function (item) {
      return item.imageId === scene.id && activeCaption && activeCaption.cueId === item.cueId &&
        ms >= item.startMs && ms < item.endMs;
    });
    if (!cue || reducedMotion.matches) {
      poemLayer.style.opacity = "0";
      poemLayer.textContent = "";
      return;
    }
    poemLayer.style.setProperty("--poem-left", cue.left + "%");
    poemLayer.style.setProperty("--poem-top", cue.top + "%");
    poemLayer.style.setProperty("--poem-width", cue.width + "%");
    poemLayer.style.opacity = String(Math.min(1, (ms - cue.startMs) / 280, (cue.endMs - ms) / 180));
    poemLayer.replaceChildren();
    cue.text.split("\n").forEach(function (line, index) {
      if (index) poemLayer.appendChild(document.createElement("br"));
      poemLayer.appendChild(document.createTextNode(line));
    });
  }

  function renderEffect(scene, ms) {
    var config = effects[scene.id];
    if (!config || reducedMotion.matches) {
      effectLayer.style.opacity = "0";
      effectLayer.removeAttribute("data-type");
      return;
    }
    var progress = Math.max(0, Math.min(1, (ms - scene.startMs) / Math.max(1, scene.endMs - scene.startMs)));
    var wave = 0.5 + 0.5 * Math.sin((progress * 2.2 + Number(scene.id) * 0.037) * Math.PI * 2);
    var travel = 1.25 + config.strength * 8;
    var shiftX = config.direction === "left" ? -wave * travel : config.direction === "right" ? wave * travel : 0;
    var shiftY = config.direction === "up" ? -wave * travel : config.direction === "down" ? wave * travel : 0;
    effectLayer.dataset.type = config.type;
    effectLayer.style.setProperty("--fx-x", config.x + "%");
    effectLayer.style.setProperty("--fx-y", config.y + "%");
    effectLayer.style.setProperty("--fx-position", config.x + "% " + config.y + "%");
    effectLayer.style.setProperty("--fx-opacity", String(config.strength * (0.62 + wave * 0.38)));
    effectLayer.style.setProperty("--fx-shift-x", shiftX + "%");
    effectLayer.style.setProperty("--fx-shift-y", shiftY + "%");
    effectLayer.style.setProperty("--fx-angle", config.direction === "left" ? "110deg" : "72deg");
    effectLayer.style.opacity = "1";
  }

  function currentSegment(seconds) {
    return timeline.displaySegments.find(function (item) {
      return seconds >= item.startSeconds && seconds < item.endSeconds;
    });
  }

  function render(ms) {
    var seconds = Math.max(0, Math.min(timeline.durationMs, ms)) / 1000;
    var scene = timeline.scenes[sceneIndexAt(ms)];
    if (!scene) return;
    hasStarted = true;
    startButton.hidden = true;
    setImage(scene, ms);
    renderEffect(scene, ms);
    var chapter = chapterAt(ms);
    chapterTitle.textContent = chapter ? chapter.displayTitle || chapter.title : "";
    if (chapter) {
      var chapterAge = seconds - chapter.startSeconds;
      if (chapterAge >= 0 && chapterAge < 3) {
        chapterIntro.textContent = chapter.displayTitle || chapter.title;
        chapterIntro.style.opacity = String(Math.min(1, chapterAge / 0.35, (3 - chapterAge) / 0.5));
      } else {
        chapterIntro.style.opacity = "0";
        chapterIntro.textContent = "";
      }
    }
    var segment = currentSegment(seconds);
    renderSubtitle(segment ? segment.text : "");
    showPoem(scene, ms);
    byId("motion-current-time").textContent = formatTime(seconds);
    byId("motion-scene-status").textContent = "分鏡 " + scene.id + " / " + String(sceneCount).padStart(3, "0");
    if (!scrubbing) seek.value = String(seconds);
    playButton.textContent = audio.paused ? "播放" : "暫停";
    playButton.setAttribute("aria-label", audio.paused ? "播放" : "暫停");
    byId("motion-status").textContent = audio.ended ? "播放完成" : audio.paused ? "已暫停" : "旁白播放中";
    byId("motion-prev-scene").disabled = sceneIndexAt(ms) <= 0;
    byId("motion-next-scene").disabled = sceneIndexAt(ms) >= sceneCount - 1;
    byId("motion-prev-chapter").disabled = !chapter || timeline.chapters[0].id === chapter.id;
    byId("motion-next-chapter").disabled = !chapter || timeline.chapters[timeline.chapters.length - 1].id === chapter.id;
    Array.from(chapterList.querySelectorAll(".chapter-button")).forEach(function (button) {
      var active = button.dataset.chapterId === (chapter && chapter.id);
      button.classList.toggle("active", active);
      if (active) button.setAttribute("aria-current", "location");
      else button.removeAttribute("aria-current");
    });
  }

  function seekTo(seconds) {
    audio.currentTime = Math.max(0, Math.min(timeline.durationMs / 1000, seconds));
    render(audio.currentTime * 1000);
  }

  function togglePlayback() {
    if (audio.paused) {
      if (audio.ended) seekTo(0);
      audio.play().catch(function () {
        errorBox.hidden = false;
        errorBox.textContent = "旁白未能播放，請再按一次播放。";
      });
    } else {
      audio.pause();
    }
  }

  function seekToScene(index) {
    var scene = timeline.scenes[Math.max(0, Math.min(sceneCount - 1, index))];
    seekTo(scene.startMs / 1000);
  }

  function moveChapter(delta) {
    var now = audio.currentTime * 1000;
    var activeChapter = chapterAt(now);
    var index = timeline.chapters.findIndex(function (chapter) { return chapter.id === activeChapter.id; });
    var target = timeline.chapters[Math.max(0, Math.min(timeline.chapters.length - 1, index + delta))];
    if (!target) return;
    seekTo(target.startSeconds);
    if (!audio.paused) audio.play();
  }

  timeline.chapters.forEach(function (chapter) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "chapter-button";
    button.dataset.chapterId = chapter.id;
    var number = document.createElement("span");
    number.className = "chapter-number";
    number.textContent = chapter.id;
    var name = document.createElement("span");
    name.className = "chapter-name";
    name.textContent = chapter.displayTitle || chapter.title;
    var count = document.createElement("small");
    count.textContent = chapter.sceneCount + " 鏡";
    button.append(number, name, count);
    button.addEventListener("click", function () {
      var wasPlaying = !audio.paused;
      seekTo(chapter.startSeconds);
      if (wasPlaying) audio.play();
    });
    chapterList.appendChild(button);
  });

  byId("motion-duration").textContent = formatTime(timeline.durationSeconds);
  seek.max = String(timeline.durationSeconds);
  startButton.addEventListener("click", function () {
    seekTo(0);
    togglePlayback();
  });
  playButton.addEventListener("click", togglePlayback);
  byId("motion-prev-scene").addEventListener("click", function () { seekToScene(sceneIndexAt(audio.currentTime * 1000) - 1); });
  byId("motion-next-scene").addEventListener("click", function () { seekToScene(sceneIndexAt(audio.currentTime * 1000) + 1); });
  byId("motion-prev-chapter").addEventListener("click", function () { moveChapter(-1); });
  byId("motion-next-chapter").addEventListener("click", function () { moveChapter(1); });
  byId("motion-restart").addEventListener("click", function () {
    seekTo(0);
    audio.play().catch(function () {
      errorBox.hidden = false;
      errorBox.textContent = "旁白未能播放，請再按一次播放。";
    });
  });
  byId("motion-mute").addEventListener("click", function () {
    audio.muted = !audio.muted;
    byId("motion-mute").textContent = audio.muted ? "取消靜音" : "靜音";
  });
  byId("motion-volume").addEventListener("input", function (event) { audio.volume = Number(event.currentTarget.value); });
  byId("motion-fullscreen").addEventListener("click", function () {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (byId("motion-shell").requestFullscreen) byId("motion-shell").requestFullscreen();
  });
  seek.addEventListener("pointerdown", function () { scrubbing = true; });
  seek.addEventListener("input", function (event) {
    scrubbing = true;
    seekTo(Number(event.currentTarget.value));
  });
  seek.addEventListener("change", function () { scrubbing = false; render(audio.currentTime * 1000); });
  seek.addEventListener("pointerup", function () { scrubbing = false; render(audio.currentTime * 1000); });
  audio.addEventListener("timeupdate", function () { render(audio.currentTime * 1000); });
  audio.addEventListener("seeked", function () { render(audio.currentTime * 1000); });
  audio.addEventListener("play", function () { render(audio.currentTime * 1000); });
  audio.addEventListener("pause", function () { render(audio.currentTime * 1000); });
  audio.addEventListener("ended", function () { render(audio.currentTime * 1000); });
  audio.addEventListener("ratechange", function () { if (audio.playbackRate !== 1) audio.playbackRate = 1; });
  frame.addEventListener("error", function () {
    errorBox.hidden = false;
    errorBox.textContent = "分鏡圖片無法載入，請確認網站已完整解壓縮，且 assets/images 資料夾仍在。";
  });
  frame.addEventListener("load", function () {
    if (errorBox.textContent.indexOf("分鏡圖片無法載入") === 0) {
      errorBox.hidden = true;
      errorBox.textContent = "";
    }
  });
  audio.addEventListener("error", function () {
    errorBox.hidden = false;
    errorBox.textContent = "旁白檔案無法載入，請返回原版頁面確認音訊。";
  });
  window.addEventListener("keydown", function (event) {
    if (event.code === "Space" && !/INPUT|BUTTON/.test(document.activeElement.tagName)) {
      event.preventDefault();
      togglePlayback();
    }
  });
  function animationFrame() {
    if (hasStarted) render(audio.currentTime * 1000);
    window.requestAnimationFrame(animationFrame);
  }
  window.requestAnimationFrame(animationFrame);
  audio.playbackRate = 1;
  byId("motion-current-time").textContent = "00:00";
  byId("motion-status").textContent = "尚未播放";
  byId("motion-scene-status").textContent = "分鏡 001 / " + String(sceneCount).padStart(3, "0");
  startButton.hidden = false;
})();
