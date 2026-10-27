(() => {
  'use strict';
  const data = window.B11_MOTION_DATA;
  if (!data || !Array.isArray(data.scenes) || !Array.isArray(data.verses)) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const byId = new Map(data.scenes.map((scene) => [scene.id, scene]));
  const bakedText = new Set(data.bakedTextImageIds);
  const clamp = (n, min = 0, max = 1) => Math.max(min, Math.min(max, n));
  const smooth = (n) => { const x = clamp(n); return x * x * (3 - 2 * x); };
  const lerp = (a, b, p) => a + (b - a) * p;
  const gradients = {
    mist: ['linear-gradient(112deg,transparent 18%,rgba(235,248,247,.26) 42%,transparent 72%)', 'screen'],
    'water-glint': ['linear-gradient(119deg,transparent 37%,rgba(255,255,255,.42) 47%,rgba(248,225,161,.18) 51%,transparent 60%)', 'screen'],
    'bend-vignette': ['radial-gradient(ellipse at 70% 48%,transparent 28%,rgba(8,21,30,.28) 100%)', 'multiply'],
    'face-light': ['radial-gradient(ellipse 35% 32% at var(--focus-x) var(--focus-y),rgba(255,231,172,.22),transparent 90%)', 'screen'],
    'reflection-sweep': ['linear-gradient(165deg,transparent 35%,rgba(248,220,156,.28) 52%,transparent 69%)', 'screen'],
    'gorge-mist': ['linear-gradient(90deg,rgba(13,24,30,.34),transparent 26%,transparent 74%,rgba(13,24,30,.34))', 'soft-light'],
    'map-ink': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(56,80,62,.20),transparent 64%)', 'multiply'],
    'map-glow': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(255,226,165,.24),transparent 70%)', 'screen'],
    'lantern-glow': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(255,175,78,.32),transparent 55%)', 'screen'],
    'moon-glow': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(207,224,255,.28),transparent 54%)', 'screen'],
    'morning-mist': ['linear-gradient(120deg,rgba(255,245,218,.12),transparent 48%,rgba(255,255,255,.18))', 'screen'],
    'reflection-shift': ['linear-gradient(180deg,transparent 38%,rgba(244,195,107,.24) 68%,transparent 100%)', 'screen'],
    'split-times': ['linear-gradient(90deg,rgba(95,136,177,.12) 0 48%,rgba(255,224,164,.14) 52% 100%)', 'soft-light'],
    'wide-water': ['linear-gradient(180deg,transparent 30%,rgba(230,244,240,.12) 65%,transparent)', 'screen'],
    'falling-wave': ['linear-gradient(165deg,transparent 20%,rgba(255,255,255,.36) 48%,transparent 64%)', 'screen'],
    'bird-lift': ['linear-gradient(0deg,transparent 25%,rgba(255,244,200,.20) 72%,transparent)', 'screen'],
    'speed-sweep': ['linear-gradient(112deg,transparent 33%,rgba(255,229,159,.30) 46%,transparent 55%)', 'screen'],
    'retreat-water': ['linear-gradient(180deg,transparent 48%,rgba(215,234,238,.20) 72%,transparent)', 'screen'],
    'market-fade': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),transparent 12%,rgba(36,31,25,.26) 90%)', 'multiply'],
    'stone-scan': ['linear-gradient(115deg,transparent 42%,rgba(255,231,169,.30) 50%,transparent 58%)', 'screen'],
    'shore-settle': ['linear-gradient(0deg,rgba(242,204,136,.14),transparent 48%)', 'soft-light'],
    'paper-scan': ['linear-gradient(110deg,transparent 42%,rgba(255,238,190,.28) 50%,transparent 58%)', 'screen'],
    'montage-sweep': ['linear-gradient(110deg,transparent 27%,rgba(255,255,255,.24) 45%,transparent 57%)', 'screen'],
    'ink-vision': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(234,240,226,.28),transparent 57%)', 'screen'],
    'vortex-flow': ['conic-gradient(from 40deg at var(--focus-x) var(--focus-y),transparent 0 72%,rgba(244,250,252,.25) 82%,transparent 91%)', 'screen'],
    'spirit-fade': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(216,231,234,.28),transparent 58%)', 'screen'],
    'depth-light': ['linear-gradient(110deg,rgba(232,208,159,.18),transparent 58%)', 'soft-light'],
    'thorns-history': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(191,135,73,.24),transparent 56%)', 'soft-light'],
    horizon: ['linear-gradient(90deg,rgba(248,202,133,.18),transparent 60%)', 'screen'],
    'island-haze': ['linear-gradient(90deg,transparent,rgba(226,235,231,.20) 60%,transparent)', 'screen'],
    'calm-pause': ['radial-gradient(ellipse at 50% 55%,rgba(237,236,213,.12),transparent 70%)', 'soft-light'],
    'reverse-calm': ['linear-gradient(180deg,rgba(226,236,229,.15),transparent 64%)', 'soft-light'],
    'time-layers': ['linear-gradient(90deg,rgba(255,229,170,.14),transparent 44%,rgba(204,226,232,.12))', 'soft-light'],
    'water-still': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(255,237,186,.17),transparent 68%)', 'screen'],
    'path-light': ['linear-gradient(90deg,transparent 35%,rgba(255,226,157,.26) 58%,transparent 75%)', 'screen'],
    'leaf-track': ['linear-gradient(135deg,transparent 30%,rgba(255,203,101,.24) 49%,transparent 61%)', 'screen'],
    balance: ['linear-gradient(90deg,rgba(236,226,197,.12),transparent 50%,rgba(236,226,197,.12))', 'soft-light'],
    'archive-pages': ['linear-gradient(110deg,rgba(255,235,185,.12),transparent 52%,rgba(255,235,185,.18))', 'soft-light'],
    'task-piles': ['linear-gradient(90deg,rgba(255,206,112,.12),transparent 31% 64%,rgba(133,180,157,.14))', 'soft-light'],
    'pause-gesture': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(255,222,156,.22),transparent 58%)', 'screen'],
    'priority-lines': ['linear-gradient(90deg,rgba(255,218,143,.20),transparent 34% 66%,rgba(179,210,197,.18))', 'soft-light'],
    'safer-route': ['linear-gradient(110deg,transparent 35%,rgba(255,224,151,.24) 55%,transparent 75%)', 'screen'],
    'storyboard-cards': ['linear-gradient(90deg,rgba(255,221,145,.16),transparent 46%,rgba(180,208,198,.18))', 'soft-light'],
    'error-signal': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(255,99,84,.24),transparent 48%)', 'screen'],
    'compare-panels': ['linear-gradient(90deg,rgba(255,226,150,.16) 0 48%,transparent 50%,rgba(156,203,186,.18) 52% 100%)', 'soft-light'],
    checkpoint: ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(255,224,133,.30),transparent 24%)', 'screen'],
    'reading-warmth': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(255,218,153,.25),transparent 60%)', 'screen'],
    'calendar-space': ['linear-gradient(90deg,rgba(118,135,131,.18),transparent 55%,rgba(255,226,158,.18))', 'soft-light'],
    'life-quadrants': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(255,225,153,.22),transparent 65%)', 'screen'],
    'window-light': ['linear-gradient(110deg,transparent 30%,rgba(255,229,170,.24) 62%,transparent)', 'screen'],
    'scene-frames': ['linear-gradient(90deg,rgba(255,219,146,.16) 0 32%,transparent 34% 65%,rgba(178,211,199,.16) 68%)', 'soft-light'],
    'focus-question': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(255,230,168,.26),transparent 48%)', 'screen'],
    'monitor-glow': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(101,169,208,.26),transparent 56%)', 'screen'],
    'return-shore': ['linear-gradient(90deg,rgba(247,213,158,.16),transparent 60%)', 'soft-light'],
    'smile-warmth': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(255,218,143,.25),transparent 50%)', 'screen'],
    'trail-follow': ['linear-gradient(115deg,transparent,rgba(255,220,151,.23) 55%,transparent)', 'screen'],
    'river-long': ['linear-gradient(180deg,transparent 30%,rgba(210,233,233,.18) 70%,transparent)', 'screen'],
    'turn-to-path': ['linear-gradient(90deg,transparent 34%,rgba(255,222,157,.25) 60%,transparent)', 'screen'],
    'fork-reveal': ['radial-gradient(ellipse at var(--focus-x) var(--focus-y),rgba(255,229,165,.22),transparent 55%)', 'screen'],
    'closing-fade': ['linear-gradient(180deg,rgba(254,195,112,.16),transparent 60%)', 'soft-light'],
    default: ['none', 'normal']
  };
  const focalFx = new Set(['map-ink','map-glow','lantern-glow','moon-glow','market-fade','stone-scan','ink-vision','vortex-flow','spirit-fade','thorns-history','island-haze','error-signal','checkpoint','reading-warmth','calendar-space','life-quadrants','focus-question','monitor-glow','smile-warmth','fork-reveal']);
  const runtime = document.createElement('div');
  runtime.className = 'motion-runtime';
  runtime.setAttribute('aria-hidden', 'true');
  const fx = document.createElement('div'); fx.className = 'motion-fx';
  const wash = document.createElement('div'); wash.className = 'motion-wash';
  const sweep = document.createElement('div'); sweep.className = 'motion-sweep';
  const focus = document.createElement('div'); focus.className = 'motion-focus';
  const veil = document.createElement('div'); veil.className = 'motion-veil';
  fx.append(wash, sweep, focus, veil);
  const card = document.createElement('div'); card.className = 'motion-poem-card';
  const firstLine = document.createElement('span'); firstLine.className = 'motion-poem-line';
  const secondLine = document.createElement('span'); secondLine.className = 'motion-poem-line';
  card.append(firstLine, secondLine);
  runtime.append(fx, card);

  let observer;
  let audio = null;
  let stage = null;
  let raf = 0;
  let lastScene = '';
  let lastVerse = '';
  const sceneFor = (ms) => {
    let low = 0, high = data.scenes.length - 1;
    while (low <= high) {
      const mid = (low + high) >> 1;
      const scene = data.scenes[mid];
      if (ms < scene.startMs) high = mid - 1;
      else if (ms >= scene.endMs && mid < data.scenes.length - 1) low = mid + 1;
      else return scene;
    }
    return data.scenes[data.scenes.length - 1];
  };
  const verseFor = (ms) => data.verses.find((verse) => ms >= verse.startMs && ms < verse.endMs) || null;
  const imageId = (img) => img.currentSrc.match(/IMG(\d{3})\.webp(?:[?#]|$)/i)?.[1]
    || img.src.match(/IMG(\d{3})\.webp(?:[?#]|$)/i)?.[1];
  const styleImage = (img, now) => {
    const id = imageId(img);
    const scene = id && byId.get(id);
    if (!scene) return;
    const p = smooth((now - scene.startMs) / Math.max(1, scene.endMs - scene.startMs));
    if (reducedMotion.matches) {
      img.style.setProperty('--motion-scale', '1.012');
      img.style.setProperty('--motion-x', '0%');
      img.style.setProperty('--motion-y', '0%');
      img.style.setProperty('--motion-origin', `${scene.focusX}% ${scene.focusY}%`);
      return;
    }
    img.style.setProperty('--motion-scale', lerp(scene.fromScale, scene.toScale, p).toFixed(4));
    img.style.setProperty('--motion-x', `${lerp(scene.fromX, scene.toX, p).toFixed(3)}%`);
    img.style.setProperty('--motion-y', `${lerp(scene.fromY, scene.toY, p).toFixed(3)}%`);
    img.style.setProperty('--motion-origin', `${scene.focusX}% ${scene.focusY}%`);
  };
  const paint = () => {
    if (!audio || !stage) return;
    const now = Math.max(0, audio.currentTime * 1000);
    const covered = !!stage.querySelector('.cover-start');
    runtime.classList.toggle('is-covered', covered && now < 1);
    document.body.classList.toggle('motion-started', !covered);
    stage.querySelectorAll('.frame-art').forEach((img) => styleImage(img, now));
    const scene = sceneFor(now);
    const p = clamp((now - scene.startMs) / Math.max(1, scene.endMs - scene.startMs));
    if (lastScene !== scene.id) {
      fx.dataset.scene = scene.id;
      fx.dataset.fx = scene.effect;
      fx.style.setProperty('--focus-x', `${scene.focusX}%`);
      fx.style.setProperty('--focus-y', `${scene.focusY}%`);
      const [gradient, blend] = gradients[scene.effect] || gradients.default;
      fx.style.setProperty('--motion-wash', gradient);
      fx.style.setProperty('--motion-blend', blend);
      lastScene = scene.id;
    }
    const wave = reducedMotion.matches ? 0 : Math.sin(Math.PI * p);
    const alpha = reducedMotion.matches ? 0 : scene.strength * (0.24 + 0.76 * wave);
    fx.style.setProperty('--wash-alpha', alpha.toFixed(3));
    fx.style.setProperty('--sweep-alpha', (alpha * (scene.effect.includes('sweep') || scene.effect.includes('scan') || scene.effect.includes('glint') ? 1 : 0.18)).toFixed(3));
    fx.style.setProperty('--fx-x', `${((p - 0.5) * 6).toFixed(2)}%`);
    fx.style.setProperty('--fx-y', `${((0.5 - p) * 3).toFixed(2)}%`);
    fx.style.setProperty('--focus-left', `${(scene.focusX + Math.sin(Math.PI * p) * 4).toFixed(2)}%`);
    fx.style.setProperty('--focus-top', `${scene.focusY}%`);
    fx.style.setProperty('--focus-alpha', (focalFx.has(scene.effect) && !reducedMotion.matches ? alpha * 0.72 : 0).toFixed(3));
    const closing = scene.id === '061' && !reducedMotion.matches ? clamp((now - (scene.endMs - 1000)) / 1000) * 0.92 : 0;
    fx.style.setProperty('--veil-alpha', closing.toFixed(3));

    const verse = verseFor(now);
    const key = verse ? `${verse.cueId}-${verse.imageId}-${verse.startMs}` : '';
    if (key !== lastVerse) {
      if (verse) {
        firstLine.textContent = verse.line1;
        secondLine.textContent = verse.line2;
        card.dataset.imageId = verse.imageId;
        card.dataset.cueId = verse.cueId;
        card.classList.add('is-active');
        card.classList.toggle('is-baked-text', bakedText.has(verse.imageId));
      } else {
        card.classList.remove('is-active', 'is-baked-text');
        card.removeAttribute('data-cue-id');
        card.removeAttribute('data-image-id');
      }
      lastVerse = key;
    }
  };
  const stop = () => { if (raf) cancelAnimationFrame(raf); raf = 0; };
  const frame = () => { paint(); if (audio && !audio.paused && !audio.ended) raf = requestAnimationFrame(frame); else raf = 0; };
  const start = () => { if (!raf) raf = requestAnimationFrame(frame); };
  const install = () => {
    stage = document.getElementById('stage-wrap');
    audio = stage?.querySelector('audio.master-audio');
    if (!stage || !audio) return false;
    if (!stage.contains(runtime)) stage.append(runtime);
    stage.classList.add('has-motion-runtime');
    const back = document.querySelector('.reader-header .back-link');
    if (back) {
      back.href = './reading.html';
      back.textContent = '← 返回原版閱讀';
      back.setAttribute('aria-label', '返回原版閱讀');
    }
    audio.addEventListener('timeupdate', paint);
    audio.addEventListener('seeked', paint);
    audio.addEventListener('loadedmetadata', paint);
    audio.addEventListener('play', start);
    audio.addEventListener('pause', () => { stop(); paint(); });
    audio.addEventListener('ended', () => { stop(); paint(); });
    reducedMotion.addEventListener?.('change', paint);
    paint();
    return true;
  };
  const boot = () => {
    if (install()) return;
    const root = document.getElementById('root') || document.body;
    observer = new MutationObserver(() => {
      if (install()) observer.disconnect();
    });
    observer.observe(root, { childList: true, subtree: true });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
