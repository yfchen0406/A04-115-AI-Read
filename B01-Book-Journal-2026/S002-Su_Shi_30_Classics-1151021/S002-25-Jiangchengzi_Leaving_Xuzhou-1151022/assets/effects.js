(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const loadConfig = async () => {
    if (!window.EFFECTS_CONFIG) throw new Error('特效設定未載入');
    return window.EFFECTS_CONFIG;
  };

  const boot = async () => {
    const stage = document.querySelector('.stage-wrap');
    const audio = stage?.querySelector('.master-audio');
    if (!stage || !audio) return false;
    const config = await loadConfig();
    const canvas = document.createElement('canvas');
    canvas.className = 'effects-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    const poem = document.createElement('div');
    poem.className = 'effect-poem';
    poem.setAttribute('aria-live', 'off');
    poem.setAttribute('aria-label', '本時段詩詞原句');
    stage.append(canvas, poem);

    const ctx = canvas.getContext('2d', { alpha: true });
    const scenes = config.scenes;
    let lastSceneId = '';
    let lastQuoteId = '';
    let lastWidth = 0;
    let lastHeight = 0;
    let raf = 0;

    const clamp = (n, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, n));
    const ease = (n) => { n = clamp(n); return n * n * (3 - 2 * n); };
    const findScene = (ms) => {
      let lo = 0, hi = scenes.length - 1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (ms < scenes[mid].startMs) hi = mid - 1;
        else if (ms >= scenes[mid].endMs) lo = mid + 1;
        else return scenes[mid];
      }
      return null;
    };
    const resize = () => {
      const rect = stage.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));
      if (width === lastWidth && height === lastHeight) return;
      lastWidth = width;
      lastHeight = height;
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const dimensions = () => ({ width: canvas.clientWidth || stage.clientWidth, height: canvas.clientHeight || stage.clientHeight });
    const draw = (scene, progress, width, height) => {
      ctx.clearRect(0, 0, width, height);
      if (!scene) return;
      const i = Number(scene.id);
      const x = width * (0.22 + ((i * 37) % 54) / 100);
      const y = height * (0.27 + ((i * 23) % 30) / 100);
      const waterY = height * (0.57 + (i % 4) * 0.035);
      const motion = reducedMotion.matches ? 0.5 : progress;
      const pulse = reducedMotion.matches ? 0.82 : 0.58 + 0.42 * Math.sin(motion * Math.PI * 2);
      const strength = 0.08 + (i % 5) * 0.012;
      const line = (points, color, alpha, thickness = 2) => {
        ctx.beginPath();
        points.forEach(([px, py], n) => n ? ctx.lineTo(px, py) : ctx.moveTo(px, py));
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = thickness;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.globalAlpha = 1;
      };
      const radial = (cx, cy, radius, alpha, color = '255,224,154') => {
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        gradient.addColorStop(0, `rgba(${color},${alpha})`);
        gradient.addColorStop(1, `rgba(${color},0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);
      };
      const petal = (px, py, angle, alpha = 0.55) => {
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(angle);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#f4a3a1';
        ctx.shadowColor = '#ffe0bc';
        ctx.shadowBlur = Math.max(4, width * 0.008);
        ctx.beginPath();
        ctx.ellipse(0, 0, Math.max(4, width * 0.009), Math.max(2, width * 0.004), 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      };

      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      switch (scene.kind) {
        case 'beam':
          line([[width * 0.08, waterY], [width * (0.2 + motion * 0.5), waterY - height * 0.08], [x, y]], '#ffe7a0', strength * 0.65, Math.max(2, width * 0.004));
          radial(x, y, width * 0.11, strength * 0.23);
          break;
        case 'ripple': {
          const radius = width * (0.018 + motion * 0.1);
          [radius, radius * 1.46].forEach((r, n) => {
            ctx.beginPath(); ctx.ellipse(x, waterY, r, r * 0.28, 0, 0, Math.PI * 2);
            ctx.strokeStyle = '#d7f3ef'; ctx.lineWidth = Math.max(1, width * 0.0012);
            ctx.globalAlpha = strength * (n ? 0.42 : 0.72) * (1 - motion * 0.28); ctx.stroke();
          });
          ctx.globalAlpha = 1;
          break;
        }
        case 'shadow':
          ctx.globalAlpha = strength * 0.36;
          ctx.fillStyle = 'rgba(37,58,42,.7)';
          ctx.beginPath();
          ctx.moveTo(width * (-0.08 + motion * 0.08), height * 0.18);
          ctx.quadraticCurveTo(width * 0.31, height * 0.31, width * (0.48 + motion * 0.18), height * 0.78);
          ctx.lineTo(width * (0.22 + motion * 0.12), height * 0.72);
          ctx.closePath(); ctx.shadowColor = '#52634b'; ctx.shadowBlur = width * 0.035; ctx.fill();
          ctx.globalAlpha = 1;
          radial(x, y, width * 0.12, strength * 0.17);
          break;
        case 'reflection':
          for (let n = 0; n < 3; n++) {
            const yy = waterY + height * (n * 0.024);
            const shift = (motion * width * 0.14 + n * width * 0.09) % (width * 0.42);
            line([[width * 0.16 + shift * 0.2, yy], [width * 0.36 + shift, yy - height * 0.004], [width * 0.58 + shift * 0.5, yy]], '#d8eadb', strength * (0.32 - n * 0.06), Math.max(1, width * 0.0015));
          }
          break;
        case 'petal':
          petal(width * (0.14 + motion * 0.54), height * (0.62 - motion * 0.18), -0.5 + motion * 0.7, strength * 4.6);
          break;
        case 'mist': {
          const gradient = ctx.createLinearGradient(0, height * 0.48, 0, height * 0.83);
          gradient.addColorStop(0, 'rgba(211,230,222,0)'); gradient.addColorStop(1, `rgba(211,230,222,${strength * 0.85})`);
          ctx.fillStyle = gradient; ctx.fillRect(0, height * 0.48, width, height * 0.35);
          radial(width * (0.28 + motion * 0.24), height * 0.63, width * 0.2, strength * 0.22, '215,229,221');
          break;
        }
        case 'wake':
          [-1, 1].forEach((side) => {
            ctx.beginPath(); ctx.moveTo(x, waterY - height * 0.02);
            ctx.quadraticCurveTo(x + width * side * 0.05, waterY + height * 0.05, x + width * side * (0.1 + motion * 0.13), waterY + height * 0.1);
            ctx.strokeStyle = '#d8eee7'; ctx.lineWidth = Math.max(1, width * 0.0018); ctx.globalAlpha = strength * 0.58; ctx.stroke();
          }); ctx.globalAlpha = 1;
          break;
        case 'glow':
          radial(x, y, width * (0.1 + pulse * 0.035), strength * 0.72);
          break;
        case 'warmth':
          radial(x, y, width * 0.13, strength * 0.62, '255,190,105');
          break;
        case 'glint':
          line([[x - width * 0.045, y], [x + width * 0.035, y - height * 0.016]], '#fff0bd', strength * (0.45 + pulse * 0.25), Math.max(1, width * 0.002));
          radial(x, y, width * 0.07, strength * 0.25);
          break;
        case 'pageglow':
          ctx.strokeStyle = `rgba(255,222,155,${strength * 0.45})`; ctx.lineWidth = Math.max(1, width * 0.0015);
          ctx.strokeRect(width * 0.32, height * 0.2, width * 0.4, height * 0.43);
          radial(width * 0.65, height * 0.37, width * 0.13, strength * 0.27);
          break;
        case 'dust':
          for (let n = 0; n < 14; n++) {
            const px = ((i * 17 + n * 71 + motion * width * 0.11) % width);
            const py = height * (0.17 + ((i * 9 + n * 13) % 58) / 100);
            ctx.beginPath(); ctx.arc(px, py, Math.max(1, width * 0.0012), 0, Math.PI * 2);
            ctx.fillStyle = '#fff0c4'; ctx.globalAlpha = strength * (0.4 + ((n % 3) * 0.16)); ctx.fill();
          } ctx.globalAlpha = 1;
          break;
        case 'rain':
          for (let n = 0; n < 18; n++) {
            const px = ((n * width / 18 + motion * width * 0.08) % width);
            const py = height * (0.16 + ((n * 19) % 56) / 100);
            line([[px, py], [px - width * 0.008, py + height * 0.035]], '#d9e6eb', strength * 0.22, Math.max(1, width * 0.0007));
          }
          break;
        case 'ink':
          radial(width * 0.62, height * 0.62, width * 0.17, strength * 0.22, '113,130,116');
          break;
        case 'petalbeam':
          petal(width * (0.17 + motion * 0.48), height * 0.69, motion * 0.55, strength * 4.4);
          line([[width * 0.13, waterY], [width * (0.24 + motion * 0.25), waterY - height * 0.04], [x, y]], '#ffe7a0', strength * 0.45, Math.max(2, width * 0.003));
          break;
        case 'warmthpetal':
          radial(x, y, width * 0.12, strength * 0.58, '255,190,105');
          petal(width * (0.64 + motion * 0.17), height * (0.63 + motion * 0.05), motion * 0.65, strength * 3.7);
          break;
      }
      ctx.restore();
    };
    const updatePoem = (scene, ms) => {
      const quote = config.quotes.find((item) => item.imageId === scene?.id && ms >= item.startMs && ms < item.endMs);
      if (!quote) {
        if (lastQuoteId) { poem.replaceChildren(); poem.classList.remove('is-visible'); lastQuoteId = ''; }
        return;
      }
      if (lastQuoteId !== quote.cueId) {
        poem.replaceChildren(...quote.text.split('\n').map((line) => {
          const span = document.createElement('span'); span.textContent = line; return span;
        }));
        poem.style.left = `${quote.position.x}%`;
        poem.style.top = `${quote.position.y}%`;
        poem.style.width = `${quote.position.width}%`;
        poem.style.minHeight = `${quote.position.height}%`;
        poem.dataset.cueId = quote.cueId;
        poem.classList.add('is-visible');
        lastQuoteId = quote.cueId;
      }
      const fade = reducedMotion.matches ? 1 : clamp((ms - quote.startMs) / 250);
      poem.style.opacity = String(fade);
    };
    const tick = () => {
      resize();
      const ms = Math.round((audio.currentTime || 0) * 1000);
      const scene = findScene(ms);
      const cover = stage.querySelector('.cover-start');
      const activeScene = cover ? null : scene;
      if (activeScene?.id !== lastSceneId) lastSceneId = activeScene?.id || '';
      const { width, height } = dimensions();
      if (activeScene) {
        const progress = clamp((ms - activeScene.startMs) / (activeScene.endMs - activeScene.startMs));
        draw(activeScene, progress, width, height);
      } else ctx.clearRect(0, 0, width, height);
      updatePoem(activeScene, ms);
      raf = requestAnimationFrame(tick);
    };

    const headerLink = document.querySelector('.reader-header .back-link');
    if (headerLink) { headerLink.href = './reading.html'; headerLink.textContent = '← 返回原版閱讀'; }
    const header = document.querySelector('.reader-header');
    if (header) header.dataset.mode = '動畫特效版';
    const observer = new ResizeObserver(resize);
    observer.observe(stage);
    ['seeked', 'timeupdate', 'play', 'pause', 'loadedmetadata'].forEach((eventName) => audio.addEventListener(eventName, resize));
    tick();
    window.addEventListener('pagehide', () => { cancelAnimationFrame(raf); observer.disconnect(); }, { once: true });
    return true;
  };

  const waitForPlayer = () => {
    let attempts = 0;
    const timer = window.setInterval(async () => {
      attempts += 1;
      try {
        if (await boot() || attempts >= 100) window.clearInterval(timer);
      } catch (error) {
        window.clearInterval(timer);
        const status = document.createElement('p');
        status.className = 'effects-error';
        status.textContent = error instanceof Error ? error.message : '動畫特效載入失敗';
        document.querySelector('.reader-shell')?.append(status);
      }
    }, 100);
  };
  waitForPlayer();
})();
