(() => {
  'use strict';

  const DATA = window.MOTION_TIMELINE_DATA;
  if (!DATA || !document.body?.matches('[data-motion-version="true"]')) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let stage, audio, canvas, ctx, verse, returnLink, raf = 0;
  let mounted = false;
  let lastQuoteKey = '';

  const ensureMounted = () => {
    stage = document.querySelector('.stage-wrap');
    audio = document.querySelector('audio.master-audio');
    if (!stage || !audio) return false;

    if (!stage.querySelector('.motion-effect-layer')) {
      const layer = document.createElement('div');
      layer.className = 'motion-effect-layer';
      canvas = document.createElement('canvas');
      canvas.className = 'motion-effect-canvas';
      canvas.setAttribute('aria-hidden', 'true');
      canvas.width = 960;
      canvas.height = 540;
      verse = document.createElement('div');
      verse.className = 'motion-verse';
      verse.setAttribute('aria-live', 'off');
      layer.append(canvas, verse);
      stage.append(layer);
      ctx = canvas.getContext('2d', { alpha: true });
    } else {
      canvas = stage.querySelector('.motion-effect-canvas');
      verse = stage.querySelector('.motion-verse');
      ctx = canvas?.getContext('2d', { alpha: true });
    }

    const header = document.querySelector('.reader-header');
    if (header && !document.querySelector('.motion-return-link')) {
      returnLink = document.createElement('a');
      returnLink.className = 'motion-return-link';
      returnLink.href = './reading.html';
      returnLink.textContent = '← 返回原版閱讀';
      returnLink.setAttribute('aria-label', '返回原版同步閱讀頁');
      header.insertAdjacentElement('afterend', returnLink);
    }

    if (!mounted) {
      audio.addEventListener('timeupdate', draw, { passive: true });
      audio.addEventListener('seeked', draw, { passive: true });
      audio.addEventListener('play', startLoop, { passive: true });
      audio.addEventListener('pause', draw, { passive: true });
      mounted = true;
    }
    return true;
  };

  const currentScene = (ms) => DATA.scenes.find((s) => ms >= s.start && ms < s.end)
    || (ms >= DATA.duration ? DATA.scenes.at(-1) : null);

  const activeVerses = (ms, sceneId) => DATA.quotes.filter((q) =>
    q.scene === sceneId && ms >= q.start && ms < q.end);

  const paintVerse = (scene, ms) => {
    if (!verse) return;
    const lines = scene ? activeVerses(ms, scene.id) : [];
    if (!lines.length) {
      if (lastQuoteKey) verse.replaceChildren();
      lastQuoteKey = '';
      verse.hidden = true;
      return;
    }
    const quoteKey = `${scene.id}:${lines.map((item) => `${item.cue}:${item.text}`).join('|')}`;
    if (quoteKey === lastQuoteKey) return;
    lastQuoteKey = quoteKey;
    verse.replaceChildren();
    verse.hidden = false;
    const placement = DATA.placements[scene.id] || { x: 28, y: 15, w: 66 };
    verse.style.setProperty('--verse-x', `${placement.x}%`);
    verse.style.setProperty('--verse-y', `${placement.y}%`);
    verse.style.setProperty('--verse-w', `${placement.w}%`);
    for (const item of lines) {
      const span = document.createElement('span');
      span.className = 'motion-verse-line';
      span.textContent = item.text;
      verse.append(span);
    }
  };

  const alphaFor = (scene, p) => {
    const base = scene.strength;
    const pulse = 0.68 + 0.32 * Math.sin(Math.PI * (p * 2.4 + scene.phase));
    return reducedMotion.matches ? base * 0.58 : base * pulse;
  };

  const drawEffect = (scene, p) => {
    if (!ctx) return;
    const c = ctx;
    const w = canvas.width, h = canvas.height;
    const a = alphaFor(scene, p);
    const x = scene.x * w, y = scene.y * h;
    const dx = scene.dx * w, dy = scene.dy * h;
    const tone = scene.tone;
    c.clearRect(0, 0, w, h);
    c.save();
    c.globalCompositeOperation = 'screen';
    c.lineCap = 'round';
    c.lineJoin = 'round';

    if (scene.kind === 'ripple' || scene.kind === 'pearl') {
      for (let i = 0; i < (scene.kind === 'pearl' ? 2 : 3); i++) {
        const q = (p * 0.62 + i / 3 + scene.phase) % 1;
        const radius = 12 + q * (scene.kind === 'pearl' ? 78 : 160);
        c.beginPath(); c.ellipse(x, y, radius * 1.5, radius * 0.56, 0, 0, Math.PI * 2);
        c.strokeStyle = tone; c.lineWidth = scene.kind === 'pearl' ? 2 : 1.4;
        c.globalAlpha = a * (1 - q) * 0.75; c.stroke();
      }
      if (scene.kind === 'pearl') {
        const g = c.createRadialGradient(x, y, 0, x, y, 56);
        g.addColorStop(0, `rgba(255,247,204,${a * 0.9})`); g.addColorStop(1, 'rgba(255,247,204,0)');
        c.fillStyle = g; c.globalAlpha = 1; c.beginPath(); c.arc(x, y, 56, 0, Math.PI * 2); c.fill();
      }
    } else if (scene.kind === 'flash') {
      const pulse = Math.max(0, Math.sin(Math.PI * ((p * 1.7 + scene.phase) % 1)));
      const g = c.createRadialGradient(x, y, 0, x, y, 270);
      g.addColorStop(0, `rgba(232,247,255,${a * pulse * 0.75})`);
      g.addColorStop(1, 'rgba(232,247,255,0)');
      c.fillStyle = g; c.globalAlpha = 1; c.fillRect(0, 0, w, h);
    } else if (scene.kind === 'cloud' || scene.kind === 'haze' || scene.kind === 'myth') {
      const g = c.createLinearGradient(0, y - 90, 0, y + 150);
      g.addColorStop(0, `rgba(212,230,238,${a * 0.6})`);
      g.addColorStop(1, 'rgba(212,230,238,0)');
      c.fillStyle = g; c.globalAlpha = 1;
      const drift = dx * p;
      for (let i = 0; i < 3; i++) {
        c.beginPath(); c.ellipse(x + drift + i * 145 - 130, y + (i % 2) * 17, 210, 64 + i * 8, 0, 0, Math.PI * 2); c.fill();
      }
      if (scene.kind === 'myth') {
        for (let i = 0; i < 7; i++) {
          const px = (x + i * 71 + p * dx * 0.5) % w;
          const py = y + ((i * 83 + p * dy * 0.35) % 180) - 90;
          c.beginPath(); c.arc(px, py, 2.2 + (i % 3), 0, Math.PI * 2); c.fillStyle = `rgba(255,240,181,${a * 0.8})`; c.fill();
        }
      }
    } else if (scene.kind === 'gust' || scene.kind === 'rain' || scene.kind === 'windshield') {
      const count = scene.kind === 'rain' ? 42 : scene.kind === 'windshield' ? 20 : 18;
      c.strokeStyle = tone; c.lineWidth = scene.kind === 'rain' ? 1.25 : 1.8;
      for (let i = 0; i < count; i++) {
        const col = (i * 73 + scene.phase * 211) % w;
        const row = (i * 109 + scene.phase * 173) % h;
        const drift = (p * (scene.kind === 'gust' ? 94 : 150) + i * 11) % 200;
        c.globalAlpha = a * (0.22 + (i % 4) * 0.08);
        c.beginPath(); c.moveTo(col + dx * p + drift * 0.25, row + dy * p + drift * 0.3);
        c.lineTo(col + dx * p + drift * 0.25 + (scene.kind === 'gust' ? 40 : 11), row + dy * p + drift * 0.3 + (scene.kind === 'gust' ? 3 : 24)); c.stroke();
      }
    } else if (scene.kind === 'shine' || scene.kind === 'page' || scene.kind === 'glass') {
      const bandX = -w * 0.42 + (w * 1.65 * p) + dx * scene.phase;
      const g = c.createLinearGradient(bandX, 0, bandX + w * 0.32, 0);
      g.addColorStop(0, 'rgba(255,244,195,0)'); g.addColorStop(0.5, `rgba(255,244,195,${a * 0.55})`); g.addColorStop(1, 'rgba(255,244,195,0)');
      c.fillStyle = g; c.globalAlpha = 1;
      if (scene.kind === 'page') c.fillRect(0, y - 18, w, 46);
      else if (scene.kind === 'glass') { c.save(); c.translate(x, y); c.rotate(-0.18); c.fillRect(-w, -34, w * 2, 68); c.restore(); }
      else c.fillRect(0, y, w, 115);
    } else if (scene.kind === 'wave' || scene.kind === 'ink') {
      c.strokeStyle = tone; c.lineWidth = scene.kind === 'ink' ? 5 : 3;
      for (let i = 0; i < 4; i++) {
        const baseY = y + i * 35;
        c.globalAlpha = a * (0.22 - i * 0.035);
        c.beginPath(); c.moveTo(0, baseY);
        c.bezierCurveTo(w * 0.22, baseY - 46 + p * 22, w * 0.48, baseY + 45 - p * 28, w * 0.72, baseY - 14);
        c.bezierCurveTo(w * 0.84, baseY - 38, w * 0.93, baseY + 18, w, baseY - 10); c.stroke();
      }
    } else if (scene.kind === 'cards' || scene.kind === 'alert' || scene.kind === 'focus') {
      const cards = scene.kind === 'alert' ? [[x, y, 78, 94]] : scene.kind === 'focus' ? [[x, y, 150, 84]] : [[x, y, 138, 78], [x + 158, y + 12, 124, 70]];
      for (let i = 0; i < cards.length; i++) {
        const [cx, cy, cw, ch] = cards[i];
        c.globalAlpha = a * (0.23 + 0.2 * Math.sin(Math.PI * (p + i * 0.28)));
        c.fillStyle = scene.kind === 'alert' ? 'rgba(255,210,128,.45)' : 'rgba(255,235,163,.36)';
        c.strokeStyle = 'rgba(255,247,210,.8)'; c.lineWidth = 2;
        c.beginPath(); c.roundRect(cx + dx * p, cy + dy * p, cw, ch, 10); c.fill(); c.stroke();
      }
    } else if (scene.kind === 'panels') {
      const width = w / 4;
      const current = Math.min(3, Math.floor((p * 4) % 4));
      c.globalAlpha = a * 0.5; c.fillStyle = 'rgba(255,233,164,.28)';
      c.fillRect(current * width + 5, 34, width - 10, h - 68);
      c.globalAlpha = a * 0.48; c.strokeStyle = 'rgba(255,255,255,.72)'; c.lineWidth = 2;
      for (let i = 1; i < 4; i++) { c.beginPath(); c.moveTo(i * width, 0); c.lineTo(i * width, h); c.stroke(); }
    } else if (scene.kind === 'transition' || scene.kind === 'expand') {
      const g = c.createLinearGradient(x - w * p, 0, x + w * (0.35 + p), h);
      g.addColorStop(0, 'rgba(215,238,237,0)'); g.addColorStop(0.5, `rgba(215,238,237,${a * 0.34})`); g.addColorStop(1, 'rgba(215,238,237,0)');
      c.fillStyle = g; c.globalAlpha = 1; c.fillRect(0, 0, w, h);
      if (scene.kind === 'expand') { c.globalAlpha = a * 0.65; c.strokeStyle = 'rgba(255,237,180,.8)'; c.lineWidth = 3 + p * 3; c.strokeRect(22 + p * 30, 22 + p * 25, w - 44 - p * 60, h - 44 - p * 50); }
    } else if (scene.kind === 'cloth') {
      c.globalAlpha = a * 0.7; c.strokeStyle = tone; c.lineWidth = 4;
      c.beginPath(); c.moveTo(x, y); c.bezierCurveTo(x + dx * p, y - 42, x + dx * (0.6 + p), y + 62, x + dx * (0.8 + p), y + 12); c.stroke();
    } else if (scene.kind === 'spark') {
      for (let i = 0; i < 18; i++) {
        const q = (p + i * 0.071 + scene.phase) % 1;
        c.globalAlpha = a * (1 - q) * 0.8; c.fillStyle = tone;
        c.beginPath(); c.arc((x + i * 59 + q * dx) % w, (y + i * 31 + q * dy) % h, 1.5 + (i % 3), 0, Math.PI * 2); c.fill();
      }
    }
    c.restore();
  };

  const draw = () => {
    if (!mounted && !ensureMounted()) return;
    const cover = document.querySelector('.cover-start');
    const covered = cover && cover.getClientRects().length > 0;
    const ms = Math.max(0, audio.currentTime * 1000);
    const scene = currentScene(ms);
    const layer = stage.querySelector('.motion-effect-layer');
    layer.hidden = covered || !scene;
    if (!scene || covered) { verse.hidden = true; lastQuoteKey = ''; ctx?.clearRect(0, 0, canvas.width, canvas.height); return; }
    const p = Math.max(0, Math.min(1, (ms - scene.start) / Math.max(1, scene.end - scene.start)));
    drawEffect(scene, reducedMotion.matches ? 0.5 : p);
    paintVerse(scene, ms);
  };

  const startLoop = () => {
    if (raf) return;
    const tick = () => {
      draw();
      if (audio && !audio.paused) raf = requestAnimationFrame(tick);
      else raf = 0;
    };
    raf = requestAnimationFrame(tick);
  };

  const stopLoop = () => {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    draw();
  };

  const observer = new MutationObserver(() => {
    if (ensureMounted()) {
      observer.disconnect();
      startLoop();
    }
  });
  const boot = () => {
    observer.observe(document.documentElement, { childList: true, subtree: true });
    if (ensureMounted()) {
      observer.disconnect();
      startLoop();
    }
    audio?.addEventListener('pause', stopLoop, { passive: true });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
