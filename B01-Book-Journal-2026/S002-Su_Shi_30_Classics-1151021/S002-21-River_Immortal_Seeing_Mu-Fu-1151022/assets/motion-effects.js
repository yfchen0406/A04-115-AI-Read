(() => {
  "use strict";
  const data = window.B21_MOTION_DATA;
  if (!data || document.body.dataset.motion !== "true") return;
  const start = () => {
  const root = document.querySelector(".reader-page");
  if (!root || root.dataset.motionReady === "true") return;
  root.dataset.motionReady = "true";
  root.classList.add("motion-reader");
  const back = root.querySelector(".reader-header .back-link");
  if (back) { back.href = "./reading.html"; back.setAttribute("aria-label", "返回原版閱讀"); }
  const stage = root.querySelector(".stage-wrap");
  const audio = root.querySelector(".master-audio");
  if (!stage || !audio) return;
  const layer = document.createElement("div");
  layer.className = "motion-layer";
  layer.setAttribute("aria-hidden", "true");
  const canvas = document.createElement("canvas");
  canvas.className = "motion-canvas";
  layer.append(canvas);
  stage.append(layer);
  const ctx = canvas.getContext("2d");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const verseNodes = new Map();
  let raf = 0, lastTime = -1;
  const imageIdFrom = (el) => {
    const img = el.querySelector("img.frame-art");
    const match = img?.getAttribute("src")?.match(/IMG(\d+)\.webp/i);
    return match ? match[1].padStart(3, "0") : null;
  };
  const getVerse = (v) => {
    if (!verseNodes.has(v.cueId)) {
      const n = document.createElement("div");
      n.className = "motion-verse";
      n.textContent = (v.lines || [v.text]).join("\n");
      n.setAttribute("aria-hidden", "true");
      layer.append(n); verseNodes.set(v.cueId, n);
    }
    return verseNodes.get(v.cueId);
  };
  const layoutVerse = (n, v) => {
    n.style.fontSize = "";
    n.style.left = v.x + "%";
    n.style.top = Math.min(v.y + 17, 69) + "%";
    const maxWidth = Math.max(1, stage.clientWidth * .94);
    const width = n.getBoundingClientRect().width;
    if (width > maxWidth) {
      const size = parseFloat(getComputedStyle(n).fontSize) * maxWidth / width;
      n.style.fontSize = size.toFixed(2) + "px";
    }
    const fittedWidth = Math.min(n.getBoundingClientRect().width, maxWidth);
    const center = Math.max(fittedWidth / 2 + 4, Math.min(stage.clientWidth - fittedWidth / 2 - 4, stage.clientWidth * v.x / 100));
    n.style.left = (center / stage.clientWidth * 100) + "%";
  };
  const draw = (scene, t) => {
    const rect = stage.getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width * devicePixelRatio));
    const h = Math.max(1, Math.round(rect.height * devicePixelRatio));
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
    ctx.clearRect(0, 0, w, h);
    if (!scene) return;
    const p = Math.max(0, Math.min(1, (t - scene.startMs) / (scene.endMs - scene.startMs)));
    const scale = reduced.matches ? 1 : 1 + (scene.zoom - 1) * p;
    ctx.save(); ctx.scale(devicePixelRatio, devicePixelRatio);
    const sw = rect.width, sh = rect.height;
    ctx.translate(sw / 2, sh / 2); ctx.scale(scale, scale); ctx.translate(-sw / 2, -sh / 2);
    const phase = (scene.id.charCodeAt(1) * 0.71 + scene.id.charCodeAt(2) * 0.37 + p * 5.2);
    const alpha = reduced.matches ? scene.strength * .32 : scene.strength;
    const colors = {
      warmth: [255,190,92], dew: [225,241,215], mist: [204,222,222], candle: [255,175,66],
      river: [160,224,236], moon: [223,228,255], leaves: [183,220,137], ink: [35,52,48],
      rain: [196,226,237], sunlight: [255,226,151], paper: [235,218,177], breeze: [219,231,212]
    };
    const c = colors[scene.family] || colors.breeze;
    const gradient = ctx.createRadialGradient(sw * (scene.x / 100), sh * (scene.y / 100), 0, sw * (scene.x / 100), sh * (scene.y / 100), Math.max(sw, sh) * .78);
    gradient.addColorStop(0, `rgba(${c.join(",")},${alpha * .45})`);
    gradient.addColorStop(1, `rgba(${c.join(",")},0)`);
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, sw, sh);
    if (scene.family === "river" || scene.family === "dew" || scene.family === "moon") {
      ctx.strokeStyle = `rgba(255,244,201,${alpha * .52})`; ctx.lineWidth = 1;
      const cx = sw * scene.x / 100, cy = sh * scene.y / 100;
      for (let i = 0; i < 3; i++) {
        const radius = 8 + i * 19 + (reduced.matches ? 0 : (phase * 3 % 13));
        ctx.beginPath(); ctx.ellipse(cx, cy, radius * 1.55, radius * .43, 0, 0, Math.PI * 2); ctx.stroke();
      }
    } else if (scene.family === "leaves" || scene.family === "breeze" || scene.family === "rain") {
      ctx.fillStyle = `rgba(${c.join(",")},${alpha * .62})`;
      for (let i = 0; i < 7; i++) {
        const x = (i * 137 + phase * (reduced.matches ? 0 : 8)) % sw;
        const y = (i * 83 + phase * (reduced.matches ? 0 : 5)) % sh;
        ctx.beginPath(); ctx.ellipse(x, y, 2 + i % 3, 1.4 + i % 2, phase * .08, 0, Math.PI * 2); ctx.fill();
      }
    } else {
      ctx.fillStyle = `rgba(255,247,211,${alpha * .55})`;
      for (let i = 0; i < 5; i++) {
        const x = (i * 179 + 31) % sw, y = (i * 97 + 17) % sh;
        const radius = 1.2 + (i % 2);
        ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill();
      }
    }
    ctx.restore();
  };
  const update = () => {
    const t = Math.max(0, audio.currentTime * 1000);
    if (Math.abs(t - lastTime) < 10 && !audio.paused) return;
    lastTime = t;
    const scene = data.scenes.find(s => t >= s.startMs && t < s.endMs) || (t >= data.scenes.at(-1).endMs ? data.scenes.at(-1) : null);
    draw(scene, t);
    const activeImage = scene?.id || null;
    for (const v of data.verses) {
      const n = getVerse(v);
      const active = t >= v.startMs && t < v.endMs && (!activeImage || activeImage === v.imageId);
      if (active && !n.classList.contains("is-visible")) layoutVerse(n, v);
      n.classList.toggle("is-visible", active);
    }
  };
  const tick = () => { update(); if (!audio.paused && !audio.ended) raf = requestAnimationFrame(tick); };
  const sync = () => { cancelAnimationFrame(raf); update(); if (!audio.paused && !audio.ended) raf = requestAnimationFrame(tick); };
  ["play","pause","timeupdate","seeking","seeked","loadedmetadata","ended"].forEach(e => audio.addEventListener(e, sync));
  new ResizeObserver(() => {
    for (const v of data.verses) {
      const n = verseNodes.get(v.cueId);
      if (n?.classList.contains("is-visible")) layoutVerse(n, v);
    }
    sync();
  }).observe(stage);
  const mutation = new MutationObserver(() => { if (root.isConnected && root.querySelector(".stage-wrap") !== stage) location.reload(); });
  mutation.observe(root, {childList:true,subtree:true});
  sync();
  };
  if (document.querySelector(".reader-page")) start();
  else {
    const mountObserver = new MutationObserver(() => {
      if (document.querySelector(".reader-page")) { mountObserver.disconnect(); start(); }
    });
    mountObserver.observe(document.documentElement, {childList:true,subtree:true});
  }
})();
