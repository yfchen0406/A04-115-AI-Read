(() => {
  const d = window.READER_DATA,
    a = document.querySelector("#audio"),
    img = document.querySelector("#sceneImage"),
    stage = document.querySelector("#stage"),
    subtitle = document.querySelector("#subtitle"),
    title = document.querySelector("#stageChapter"),
    seek = document.querySelector("#seek"),
    play = document.querySelector("#play"),
    status = document.querySelector("#status"),
    metrics = document.querySelector("#metrics"),
    list = document.querySelector("#chapterList");
  let vi = -1,
    ci = -1,
    raf = 0;
  const fmt = (x) => {
    x = Math.floor(Math.max(0, x || 0));
    return (
      String(Math.floor(x / 60)).padStart(2, "0") +
      ":" +
      String(x % 60).padStart(2, "0")
    );
  };
  const at = (xs, t) => {
    let l = 0,
      h = xs.length - 1;
    while (l <= h) {
      const m = (l + h) >> 1,
        s = xs[m];
      if (t < s.start) h = m - 1;
      else if (t >= s.end) l = m + 1;
      else return m;
    }
    return Math.min(xs.length - 1, Math.max(0, l));
  };
  function visual(i, f = false) {
    if (!f && i === vi) return;
    const s = d.visualScenes[i];
    vi = i;
    img.src = s.image;
    img.alt = "第 " + s.id + " 鏡：" + s.chapter;
    stage.className = "stage motion-" + s.motion;
    stage.style.setProperty(
      "--scene-duration",
      Math.max(0.1, s.end - s.start) + "s",
    );
    title.textContent = s.chapter;
    [...list.children].forEach((b) =>
      b.classList.toggle("active", b.dataset.chapter === s.chapter),
    );
  }
  function caption(i, f = false) {
    if (!f && i === ci) return;
    ci = i;
    subtitle.textContent = d.captions[i].text;
  }
  function render() {
    const t = Math.min(d.totalDuration, a.currentTime || 0);
    visual(at(d.visualScenes, t));
    caption(at(d.captions, t));
    seek.value = t;
    status.textContent = a.ended
      ? "旁白播放完成"
      : a.paused
        ? "已暫停"
        : "旁白播放中";
    metrics.textContent =
      fmt(t) +
      " / " +
      fmt(d.totalDuration) +
      " · 第 " +
      String(ci + 1).padStart(2, "0") +
      " 段 / " +
      d.captions.length;
  }
  function loop() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      render();
      if (!a.paused && !a.ended) loop();
    });
  }
  function go(t, resume) {
    const x = Math.max(0, Math.min(d.totalDuration - 0.01, t)),
      on = resume ?? !a.paused;
    a.currentTime = x;
    visual(at(d.visualScenes, x), true);
    caption(at(d.captions, x), true);
    render();
    if (on)
      a.play()
        .then(loop)
        .catch(() => (status.textContent = "播放需要使用者點選"));
  }
  play.onclick = () => (a.paused ? a.play().then(loop) : a.pause());
  document.querySelector("#back").onclick = () =>
    go(d.captions[Math.max(0, at(d.captions, a.currentTime) - 1)].start, true);
  document.querySelector("#forward").onclick = () =>
    go(
      d.captions[
        Math.min(d.captions.length - 1, at(d.captions, a.currentTime) + 1)
      ].start,
      true,
    );
  seek.oninput = (e) => go(Number(e.target.value), false);
  a.ontimeupdate = render;
  a.onplay = () => {
    play.textContent = "暫停旁白";
    loop();
  };
  a.onpause = () => {
    play.textContent = "播放旁白";
    cancelAnimationFrame(raf);
    render();
  };
  a.onended = render;
  seek.max = d.totalDuration;
  d.chapters.forEach((c) => {
    const b = document.createElement("button");
    b.dataset.chapter = c.title;
    b.textContent = c.title + " · " + c.count + " 鏡";
    b.onclick = () => {
      go(c.start, true);
      document.querySelector(".reader").scrollIntoView({ behavior: "smooth" });
    };
    list.appendChild(b);
  });
  visual(0, true);
  caption(0, true);
  render();
})();
