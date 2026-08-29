(() => {
  const d = window.APP_DATA || {},
    cfg = window.PAGE_CONFIG || {},
    voice = document.querySelector("#voice"),
    cover = document.querySelector("#cover"),
    app = document.querySelector("#readingApp"),
    start = document.querySelector("#startButton"),
    play = document.querySelector("#playButton"),
    prev = document.querySelector("#previousButton"),
    next = document.querySelector("#nextButton"),
    fill = document.querySelector("#progressFill"),
    track = document.querySelector("#progressTrack"),
    now = document.querySelector("#currentTime"),
    total = document.querySelector("#totalTime"),
    caption = document.querySelector("#caption"),
    title = document.querySelector("#sceneTitle"),
    status = document.querySelector("#status"),
    strip = document.querySelector("#chapterStrip"),
    volume = document.querySelector("#volume"),
    a = document.querySelector("#visualA"),
    b = document.querySelector("#visualB"),
    segs = Array.isArray(d.segments) ? d.segments : [],
    caps = Array.isArray(d.captions) ? d.captions : [];
  let layer = a,
    active = -1,
    started = false,
    timer = null;
  const motions = [
      "zoom-in",
      "zoom-out",
      "pan-up",
      "pan-down",
      "pan-left",
      "pan-right",
    ],
    fmt = (s) => {
      s = Math.max(0, Math.floor(Number(s) || 0));
      return (
        String(Math.floor(s / 60)).padStart(2, "0") +
        ":" +
        String(s % 60).padStart(2, "0")
      );
    };
  const at = (list, t, keepLast) => {
    if (!list.length) return -1;
    let lo = 0,
      hi = list.length - 1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1,
        x = list[mid];
      if (t < x.start) hi = mid - 1;
      else if (t >= x.end) lo = mid + 1;
      else return mid;
    }
    if (keepLast) return Math.max(0, Math.min(list.length - 1, lo));
    return -1;
  };
  const imageSrc = (i) => {
    const n = String(i + 1).padStart(3, "0");
    if (cfg.kind === "v2") return "assets/images/PA" + n + ".webp";
    if (cfg.kind === "v3")
      return i === 0
        ? "assets/images/generated-v3-P001.webp"
        : "assets/images/generated-v3-P" + n + ".webp";
    return "assets/images/frame-" + String(i + 1).padStart(3, "0") + ".webp";
  };
  const setImage = (i) => {
    if (i < 0 || i >= segs.length || i === active) return;
    const s = segs[i],
      n = layer === a ? b : a;
    n.src = imageSrc(i);
    n.alt = (s.section || "") + "｜" + (s.sourceShot || "");
    n.className =
      "visual visible motion motion-" +
      (s.motion || motions[(i * 17 + 3) % motions.length]);
    n.style.setProperty(
      "--motion-duration",
      Math.max(2, Math.min(5, s.duration || 5)) + "s",
    );
    layer.classList.remove("visible");
    layer = n;
    active = i;
  };
  const sync = () => {
    const t = Math.max(0, Number(voice.currentTime) || 0),
      vi = at(segs, t, true),
      ci = at(caps, t, false),
      s = segs[vi],
      c = caps[ci];
    now.textContent = fmt(t);
    total.textContent = fmt(voice.duration || d.voiceDurationSeconds);
    fill.style.width =
      (voice.duration || d.voiceDurationSeconds
        ? Math.min(100, (t / (voice.duration || d.voiceDurationSeconds)) * 100)
        : 0) + "%";
    if (s) {
      setImage(vi);
      title.textContent = s.section || d.title || "";
    }
    if (c) {
      caption.textContent = c.text;
      caption.hidden = false;
    } else {
      caption.textContent = "";
      caption.hidden = true;
    }
    strip
      .querySelectorAll("button")
      .forEach((x) =>
        x.classList.toggle(
          "active",
          Number(x.dataset.start) <= t && Number(x.dataset.end) > t,
        ),
      );
  };
  const seek = (t) => {
    voice.currentTime = Math.max(
      0,
      Math.min((voice.duration || d.voiceDurationSeconds) - 0.01, t),
    );
    sync();
  };
  const begin = () => {
    if (started) return;
    started = true;
    cover.classList.add("is-exiting");
    setTimeout(() => {
      cover.remove();
      app.classList.remove("is-hidden");
      voice.src = "audio/narration.mp3";
      voice.load();
      voice.addEventListener("loadedmetadata", sync, { once: true });
      const p = voice.play();
      if (p?.catch)
        p.catch(() => (status.textContent = "請按「播放旁白」開始閱讀"));
    }, 560);
  };
  const chapters = [];
  caps.forEach((c) => {
    if (!chapters.length || chapters[chapters.length - 1].section !== c.section)
      chapters.push({ section: c.section, start: c.start, end: c.end });
    else chapters[chapters.length - 1].end = c.end;
  });
  chapters.forEach((ch) => {
    const q = document.createElement("button");
    q.type = "button";
    q.textContent = ch.section;
    q.title = ch.section;
    q.dataset.start = ch.start;
    q.dataset.end = ch.end;
    q.onclick = () => seek(ch.start);
    strip.appendChild(q);
  });
  start.onclick = begin;
  play.onclick = () => {
    if (!started) return begin();
    voice.paused ? voice.play() : voice.pause();
  };
  prev.onclick = () => {
    const i = at(caps, voice.currentTime, false);
    seek((caps[Math.max(0, i - 1)] || caps[0]).start);
  };
  next.onclick = () => {
    const i = at(caps, voice.currentTime, false);
    seek(
      (caps[Math.min(caps.length - 1, i + 1)] || caps[caps.length - 1]).start,
    );
  };
  track.onclick = (e) => {
    const r = track.getBoundingClientRect();
    seek(
      Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) *
        (voice.duration || d.voiceDurationSeconds),
    );
  };
  volume.oninput = () => (voice.volume = Number(volume.value));
  voice.addEventListener("timeupdate", sync);
  voice.addEventListener("seeking", sync);
  voice.addEventListener("play", () => {
    play.textContent = "暫停旁白";
    status.textContent = cfg.voice || "播放中";
    if (!timer) timer = setInterval(sync, 80);
  });
  voice.addEventListener("pause", () => {
    play.textContent = "播放旁白";
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    sync();
  });
  voice.addEventListener("ended", () => {
    play.textContent = "重新播放";
    status.textContent = "本版本閱讀完成";
    sync();
  });
  total.textContent = fmt(d.voiceDurationSeconds);
  sync();
})();
