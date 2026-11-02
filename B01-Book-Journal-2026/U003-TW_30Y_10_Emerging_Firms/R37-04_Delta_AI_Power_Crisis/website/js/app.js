(() => {
  'use strict';
  const data = window.TIMELINE_DATA;
  const audio = document.getElementById('audio');
  const images = [document.getElementById('visualA'), document.getElementById('visualB')];
  const caption = document.getElementById('caption');
  const seek = document.getElementById('seek');
  const cc = document.getElementById('cc');
  const fallback = document.getElementById('fallback');
  const center = document.getElementById('chapterCenter');
  const corner = document.getElementById('chapterCorner');
  const clock = document.getElementById('clock');
  const scenes = data.scenes;
  const subtitles = data.subtitles;
  const chapters = data.chapters;
  let activeImage = 0;
  let requestedScene = -1;
  let loadToken = 0;
  let isScrubbing = false;
  let resumeAfterScrub = false;
  let rafId = 0;
  let captionId = -1;
  let captionText = null;
  let lastChapterIndex = -1;
  let chapterFlashStartMs = 0;
  let chapterFlashUntilMs = 0;
  audio.playbackRate = 1;
  audio.defaultPlaybackRate = 1;
  audio.volume = 0.85;

  const formatTime = function(seconds) {
    const value = Math.max(0, seconds || 0);
    const h = Math.floor(value / 3600);
    const m = Math.floor((value % 3600) / 60);
    const s = Math.floor(value % 60);
    return (h ? String(h).padStart(2, '0') + ':' : '') +
      String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  };
  const upperBound = function(items, time, key) {
    let lo = 0, hi = items.length - 1, found = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (items[mid][key] <= time) { found = mid; lo = mid + 1; }
      else hi = mid - 1;
    }
    return found;
  };
  const sceneAt = function(time) {
    return Math.max(0, upperBound(scenes, time, 'startMs'));
  };
  const chapterAt = function(time) {
    return Math.max(0, upperBound(chapters, time, 'startMs'));
  };
  const subtitleAt = function(time) {
    const i = upperBound(subtitles, time, 'startMs');
    if (i < 0) return null;
    const cue = subtitles[i];
    return time >= cue.startMs && time < cue.endMs ? cue : null;
  };
  const secondsFor = function(ms) { return ms / 1000; };

  function showScene(index) {
    if (index === requestedScene || index < 0 || index >= scenes.length) return;
    requestedScene = index;
    const scene = scenes[index];
    const nextImageIndex = 1 - activeImage;
    const image = images[nextImageIndex];
    const token = ++loadToken;
    image.className = 'visual';
    image.style.transform = 'none';
    image.style.objectPosition = 'center';
    image.onload = function() {
      if (token !== loadToken) return;
      fallback.hidden = true;
      image.classList.add('active');
      images[activeImage].classList.remove('active');
      activeImage = nextImageIndex;
      document.getElementById('shotLabel').textContent = scene.id;
      if (index + 1 < scenes.length) {
        const preload = new Image();
        preload.src = 'images/' + scenes[index + 1].id + '.webp';
      }
    };
    image.onerror = function() {
      if (token !== loadToken) return;
      fallback.hidden = false;
      fallback.textContent = '分鏡圖片載入失敗：' + scene.id + '。請檢查 images 資料夾。';
      document.getElementById('shotLabel').textContent = scene.id;
    };
    image.src = 'images/' + scene.id + '.webp';
  }

  function animateImage(scene, timeMs) {
    const image = images[activeImage];
    const progress = Math.max(0, Math.min(1, (timeMs - scene.startMs) / Math.max(1, scene.durationMs)));
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      image.style.transform = 'none';
      return;
    }
    const drift = (1 - 2 * progress) * 2;
    switch (scene.motion) {
      case 'slowZoomIn': image.style.transform = 'scale(' + (1 + 0.07 * progress) + ')'; break;
      case 'slowZoomOut': image.style.transform = 'scale(' + (1.07 - 0.07 * progress) + ')'; break;
      case 'panLeft': image.style.transform = 'scale(1.07) translateX(' + drift + '%)'; break;
      case 'panRight': image.style.transform = 'scale(1.07) translateX(' + (-drift) + '%)'; break;
      case 'driftUp': image.style.transform = 'scale(1.06) translateY(' + drift + '%)'; break;
      default: image.style.transform = 'scale(1.06) translateY(' + (-drift) + '%)';
    }
  }

  function updateCaption(cue, timeMs) {
    if (!cc.checked || !cue) {
      caption.textContent = '';
      captionId = -1;
      captionText = null;
      return;
    }
    const text = cue.text.replace(/\s+/g, ' ').trim();
    if (captionId !== cue.id || captionText !== text) {
      caption.textContent = '';
      const span = document.createElement('span');
      span.className = 'caption-text';
      span.textContent = text;
      caption.appendChild(span);
      captionId = cue.id;
      captionText = text;
    }
    const span = caption.firstElementChild;
    if (!span) return;
    const overflow = Math.max(0, span.scrollWidth - caption.clientWidth + 12);
    if (overflow > 0) {
      caption.classList.add('caption-scrolling');
      const p = Math.max(0, Math.min(1, (timeMs - cue.startMs) / Math.max(1, cue.endMs - cue.startMs)));
      span.style.transform = 'translateX(' + (-overflow * p) + 'px)';
    } else {
      caption.classList.remove('caption-scrolling');
      span.style.transform = 'none';
    }
  }

  function update() {
    const currentMs = Math.max(0, (audio.currentTime || 0) * 1000);
    const sceneIndex = sceneAt(currentMs);
    const scene = scenes[sceneIndex];
    const chapterIndex = chapterAt(currentMs);
    const chapter = chapters[chapterIndex];
    const cue = subtitleAt(currentMs);
    showScene(sceneIndex);
    animateImage(scene, currentMs);
    updateCaption(cue, currentMs);

    const chapterChanged = chapterIndex !== lastChapterIndex;
    if (chapterChanged) {
      const firstChapterOnLoad = lastChapterIndex < 0;
      lastChapterIndex = chapterIndex;
      chapterFlashStartMs = firstChapterOnLoad ? Math.max(currentMs, chapter.startMs) : currentMs;
      chapterFlashUntilMs = chapterFlashStartMs + 2200;
      center.classList.remove('show');
      corner.classList.remove('show');
      center.style.opacity = '';
      corner.style.opacity = '';
      center.style.animation = 'none';
      void center.offsetWidth;
      center.style.animation = '';
    }
    center.textContent = chapter.title;
    center.classList.toggle('show', currentMs >= chapterFlashStartMs && currentMs < chapterFlashUntilMs);
    corner.textContent = chapter.title;
    corner.classList.toggle('show', currentMs >= chapterFlashUntilMs);

    document.querySelectorAll('.chapter-button').forEach(function(button, i) {
      button.classList.toggle('current', i === chapterIndex && currentMs >= chapters[0].startMs);
    });
    document.getElementById('prevScene').disabled = sceneIndex === 0;
    document.getElementById('nextScene').disabled = sceneIndex >= scenes.length - 1;
    document.getElementById('prevChapter').disabled = chapterIndex === 0;
    document.getElementById('nextChapter').disabled = chapterIndex >= chapters.length - 1;
    seek.max = String(audio.duration > 0 ? audio.duration : data.meta.audioDurationMs / 1000);
    if (!isScrubbing) seek.value = String(currentMs / 1000);
    clock.textContent = formatTime(currentMs / 1000) + ' / ' +
      formatTime(audio.duration > 0 ? audio.duration : data.meta.audioDurationMs / 1000);
    document.getElementById('play').textContent = audio.paused ? '▶ 播放' : '❚❚ 暫停';
  }

  function run() {
    rafId = 0;
    update();
    if (!audio.paused && !audio.ended) rafId = requestAnimationFrame(run);
  }
  function sync() {
    update();
    if (!audio.paused && !audio.ended && !rafId) rafId = requestAnimationFrame(run);
    if ((audio.paused || audio.ended) && rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  }
  function jump(seconds, startPlayback) {
    const max = audio.duration || data.meta.audioDurationMs / 1000;
    audio.currentTime = Math.max(0, Math.min(max, seconds));
    sync();
    if (startPlayback) audio.play().catch(function() {});
  }

  function startScrub() {
    if (isScrubbing) return;
    isScrubbing = true;
    resumeAfterScrub = !audio.paused;
    if (resumeAfterScrub) audio.pause();
  }
  function previewScrub() {
    if (!isScrubbing) startScrub();
    const max = audio.duration || data.meta.audioDurationMs / 1000;
    clock.textContent = formatTime(Math.min(max, Number(seek.value))) + ' / ' + formatTime(max);
  }
  function finishScrub() {
    if (!isScrubbing) return;
    const wasPlaying = resumeAfterScrub;
    const target = Number(seek.value);
    isScrubbing = false;
    resumeAfterScrub = false;
    jump(target, false);
    if (wasPlaying) audio.play().catch(function() {});
  }

  document.getElementById('chapters').innerHTML = chapters.map(function(chapter, i) {
    const label = chapter.title.split('｜').slice(1).join('｜') || chapter.title;
    return '<button class="chapter-button" type="button" data-i="' + i + '">' +
      '<span>第 ' + chapter.id + ' 章</span>' + label + '</button>';
  }).join('');
  document.querySelectorAll('.chapter-button').forEach(function(button, i) {
    button.addEventListener('click', function() { jump(secondsFor(chapters[i].startMs), true); });
  });
  document.getElementById('play').addEventListener('click', function() {
    if (audio.paused) audio.play().catch(function() {}); else audio.pause();
  });
  document.getElementById('replay').addEventListener('click', function() { jump(0, true); });
  document.getElementById('prevScene').addEventListener('click', function() {
    const i = sceneAt((audio.currentTime || 0) * 1000);
    jump(secondsFor(scenes[Math.max(0, i - 1)].startMs), false);
  });
  document.getElementById('nextScene').addEventListener('click', function() {
    const i = sceneAt((audio.currentTime || 0) * 1000);
    jump(secondsFor(scenes[Math.min(scenes.length - 1, i + 1)].startMs), false);
  });
  document.getElementById('prevChapter').addEventListener('click', function() {
    const i = chapterAt((audio.currentTime || 0) * 1000);
    jump(secondsFor(chapters[Math.max(0, i - 1)].startMs), false);
  });
  document.getElementById('nextChapter').addEventListener('click', function() {
    const i = chapterAt((audio.currentTime || 0) * 1000);
    jump(secondsFor(chapters[Math.min(chapters.length - 1, i + 1)].startMs), false);
  });
  seek.addEventListener('pointerdown', startScrub);
  seek.addEventListener('input', previewScrub);
  seek.addEventListener('pointerup', finishScrub);
  seek.addEventListener('change', finishScrub);
  seek.addEventListener('keydown', startScrub);
  seek.addEventListener('keyup', finishScrub);
  document.getElementById('volume').addEventListener('input', function(event) {
    audio.volume = Number(event.target.value);
  });
  document.getElementById('mute').addEventListener('click', function(event) {
    audio.muted = !audio.muted;
    event.currentTarget.textContent = audio.muted ? '取消靜音' : '靜音';
  });
  cc.addEventListener('change', sync);
  ['timeupdate', 'seeked', 'seeking', 'play', 'pause', 'ended', 'loadedmetadata', 'ratechange'].forEach(function(name) {
    audio.addEventListener(name, sync);
  });
  document.addEventListener('visibilitychange', sync);
  audio.addEventListener('error', function() {
    fallback.hidden = false;
    fallback.textContent = '音訊載入失敗：請確認 audio/narration.mp3 檔案存在。';
  });
  document.addEventListener('keydown', function(event) {
    if (event.target.matches('input,textarea,select,button,[contenteditable="true"]')) return;
    if (event.code === 'Space') {
      event.preventDefault();
      if (audio.paused) audio.play().catch(function() {}); else audio.pause();
    }
    if (event.code === 'ArrowRight') jump((audio.currentTime || 0) + 5, false);
    if (event.code === 'ArrowLeft') jump((audio.currentTime || 0) - 5, false);
  });
  audio.addEventListener('loadedmetadata', function() { audio.playbackRate = 1; });
  update();
})();
