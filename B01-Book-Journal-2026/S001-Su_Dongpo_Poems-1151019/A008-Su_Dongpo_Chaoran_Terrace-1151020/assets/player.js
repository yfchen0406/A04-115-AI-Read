(() => {
  "use strict";
  const timeline = window.SHOW_TIMELINE;
  if (!timeline || !timeline.scenes || !timeline.scenes.length) return;
  const $ = (id) => document.getElementById(id);
  const audio = $("master-audio"), currentImage = $("scene-current"), nextImage = $("scene-next");
  const slider = $("seek-slider"), subtitle = $("subtitle"), corner = $("chapter-corner");
  const center = $("chapter-center"), cover = $("cover-start"), playButton = $("play-toggle");
  const status = $("playback-status"), errorBox = $("playback-error"), duration = timeline.durationMs;
  slider.max = String(duration);
  $("time-total").textContent = formatTime(duration);
  $("duration-label").textContent = formatTime(duration);
  let isDragging = false, wasPlaying = false, rafId = 0;

  function formatTime(ms) {
    const total = Math.max(0, Math.floor(ms / 1000));
    const hours = Math.floor(total / 3600), minutes = Math.floor((total % 3600) / 60), seconds = total % 60;
    return hours ? hours + ":" + String(minutes).padStart(2,"0") + ":" + String(seconds).padStart(2,"0") :
      String(minutes).padStart(2,"0") + ":" + String(seconds).padStart(2,"0");
  }
  function showError(message) { errorBox.hidden = !message; errorBox.textContent = message || ""; }
  function setTimeLabel(ms) { $("time-current").textContent = formatTime(ms); }
  function activeSceneAt(ms) {
    let i = timeline.scenes.findIndex((s) => ms >= s.startMs && ms < s.endMs);
    if (i < 0 && ms >= duration) i = timeline.scenes.length - 1;
    if (i < 0) i = timeline.scenes.findIndex((s) => s.startMs > ms);
    return i < 0 ? timeline.scenes.length - 1 : i;
  }
  function activeChapterAt(ms) {
    let found = timeline.chapters[0];
    for (const chapter of timeline.chapters) { if (ms >= chapter.startMs) found = chapter; else break; }
    return found;
  }
  function camera(scene, p) {
    const e = p * p * (3 - 2 * p);
    if (scene.motion === "push") return "scale(" + (1 + e * .045) + ")";
    if (scene.motion === "pull") return "scale(" + (1.045 - e * .045) + ")";
    if (scene.motion === "pan-left") return "scale(1.04) translateX(" + (.9 - e * 1.8) + "%)";
    if (scene.motion === "pan-right") return "scale(1.04) translateX(" + (-.9 + e * 1.8) + "%)";
    if (scene.motion === "diagonal") return "scale(1.04) translate(" + (-.5 + e) + "%," + (.4 - e * .8) + "%)";
    return "scale(" + (1.02 + e * .015) + ")";
  }
  function fitSubtitle() {
    if (!subtitle.textContent) return;
    const count = [...subtitle.textContent].length, small = window.innerWidth <= 760;
    const max = small ? 18 : 36;
    subtitle.style.fontSize = Math.max(small ? 10 : 12, Math.min(max, window.innerWidth * .86 / Math.max(1,count*.98))) + "px";
  }
  function setImage(img, scene, opacity, progress) {
    if (!scene) { img.style.opacity = "0"; return; }
    if (img.dataset.sceneId !== scene.id) {
      img.src = "./assets/" + scene.imagePath;
      img.dataset.sceneId = scene.id;
      img.alt = scene.id + "，" + scene.chapter;
    }
    img.style.opacity = String(Math.max(0,Math.min(1,opacity)));
    img.style.transform = camera(scene,Math.max(0,Math.min(1,progress)));
  }
  function paint(ms) {
    const t = Math.max(0,Math.min(duration,ms));
    slider.value = String(Math.round(t)); setTimeLabel(t);
    const i = activeSceneAt(t), scene = timeline.scenes[i], next = timeline.scenes[i+1];
    const progress = (t-scene.startMs)/Math.max(1,scene.endMs-scene.startMs);
    const transition = next && next.startMs === scene.endMs ? (next.chapterId !== scene.chapterId ? 900 : 650) : 0;
    const start = scene.endMs-transition;
    const blend = transition && t >= start ? Math.max(0,Math.min(1,(t-start)/transition)) : 0;
    setImage(currentImage,scene,1-blend,progress);
    if (blend && next) setImage(nextImage,next,blend,(t-next.startMs)/Math.max(1,next.endMs-next.startMs));
    else setImage(nextImage,null,0,0);
    const chapter = activeChapterAt(t), elapsed = t-chapter.startMs;
    corner.textContent = chapter.title; center.textContent = chapter.title;
    let opacity = 0;
    if (elapsed >= 0 && elapsed < 2500) opacity = elapsed < 350 ? elapsed/350 : elapsed < 1900 ? 1 : (2500-elapsed)/600;
    center.style.opacity = String(Math.max(0,Math.min(1,opacity)));
    const cue = timeline.subtitles.find((item) => t >= item.startMs && t < item.endMs);
    subtitle.textContent = cue ? cue.text.replace(/\s*\n\s*/g," ") : "";
    fitSubtitle();
    document.querySelectorAll(".chapter-button").forEach((button) => button.classList.toggle("active",button.dataset.chapterId===chapter.id));
  }
  function tick() {
    if (!isDragging) paint(audio.currentTime*1000);
    if (!audio.paused && !audio.ended) rafId=requestAnimationFrame(tick);
  }
  function schedulePaint() { cancelAnimationFrame(rafId); rafId=requestAnimationFrame(tick); }
  function updateState() {
    const playing = !audio.paused && !audio.ended;
    playButton.textContent = playing ? "暫停" : "播放";
    status.textContent = playing ? "播放中" : (audio.ended ? "播放完畢" : "已暫停");
    if (playing) { cover.hidden=true; schedulePaint(); }
  }
  async function play() {
    try {
      showError("");
      if (audio.ended || audio.currentTime >= duration/1000) audio.currentTime=0;
      await audio.play();
    } catch (error) {
      showError("瀏覽器尚未開始播放音訊。請再按一次「開始播放」或「播放」。");
      console.warn("Audio playback did not start:",error);
    }
  }
  function seek(ms) {
    const target=Math.max(0,Math.min(duration,Math.round(ms)));
    audio.currentTime=target/1000; paint(target);
    if (target>0) cover.hidden=true;
    if (audio.paused && target===0) cover.hidden=false;
    if (!audio.paused) schedulePaint();
  }
  function makeChapterIndex() {
    const list=$("chapter-list"); list.replaceChildren();
    timeline.chapters.forEach((chapter,index)=>{
      const button=document.createElement("button"); button.type="button"; button.className="chapter-button";
      button.dataset.chapterId=chapter.id;
      button.innerHTML='<span class="chapter-number">'+String(index+1).padStart(2,"0")+'</span><span class="chapter-name"></span><small class="chapter-start"></small>';
      button.querySelector(".chapter-name").textContent=chapter.title;
      button.querySelector(".chapter-start").textContent=chapter.firstSceneId+"・"+formatTime(chapter.startMs);
      button.addEventListener("click",()=>seek(chapter.speechCueStartMs));
      list.append(button);
    });
  }
  playButton.addEventListener("click",()=>audio.paused?play():audio.pause());
  cover.addEventListener("click",play);
  $("restart").addEventListener("click",()=>{seek(0);play();});
  $("volume").addEventListener("input",(event)=>{audio.volume=Number(event.target.value);});
  $("fullscreen").addEventListener("click",async()=>{
    try {
      if (!document.fullscreenElement) await $("stage").closest(".reader-shell").requestFullscreen();
      else await document.exitFullscreen();
    } catch (_) { showError("目前瀏覽器未允許全螢幕顯示。"); }
  });
  slider.addEventListener("pointerdown",(event)=>{isDragging=true;wasPlaying=!audio.paused;slider.setPointerCapture?.(event.pointerId);});
  slider.addEventListener("input",()=>{setTimeLabel(Number(slider.value));status.textContent="拖曳定位中；放開後同步";});
  function finishDrag() {
    if (!isDragging) return;
    isDragging=false; seek(Number(slider.value));
    status.textContent=wasPlaying?"播放中":"已暫停"; wasPlaying=false;
  }
  slider.addEventListener("pointerup",finishDrag); slider.addEventListener("pointercancel",finishDrag);
  slider.addEventListener("change",()=>{if(!isDragging&&Math.abs(Number(slider.value)-audio.currentTime*1000)>30)seek(Number(slider.value));});
  audio.addEventListener("play",updateState);
  audio.addEventListener("pause",()=>{updateState();paint(audio.currentTime*1000);});
  audio.addEventListener("ended",()=>{updateState();paint(duration);});
  audio.addEventListener("loadedmetadata",()=>{
    if(Math.abs(audio.duration*1000-duration)>25)showError("MP3 時長 "+formatTime(audio.duration*1000)+" 與分鏡時間軸 "+formatTime(duration)+" 有差異，已保留 Excel 時間碼。");
  });
  audio.addEventListener("error",()=>showError("音訊載入失敗；請確認 assets/audio/narration.mp3 與此頁放在同一專案。"));
  window.addEventListener("resize",fitSubtitle);
  makeChapterIndex(); paint(0);
  if(new URLSearchParams(location.search).get("autoplay")==="1")play();
})();
