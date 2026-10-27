(() => {
  const isMotionPage = document.body.dataset.motionPage === 'true';
  const motionHref = './motion.html';
  const originalHref = './reading.html';
  const ensureLink = (parent, selector, label, href, className) => {
    if (!parent || parent.querySelector(selector)) return;
    const link = document.createElement('a');
    link.href = href;
    link.className = className;
    link.textContent = label;
    parent.append(link);
  };

  const updateNavigation = () => {
    if (!isMotionPage) {
      document.querySelectorAll('.hero-actions').forEach((row) =>
        ensureLink(row, '.motion-version-link', '動畫特效版 ✦', motionHref, 'start-link motion-version-link'));
      return;
    }
    document.body.classList.add('motion-version');
    const header = document.querySelector('.reader-header');
    ensureLink(header, '.original-version-link', '返回原版', originalHref, 'back-link original-version-link');
  };

  const safeReadJson = async () => {
    if (window.MOTION_DATA) return window.MOTION_DATA;
    throw new Error('動畫特效資料未載入');
  };

  const parseRegion = (effect, sceneId) => {
    if (sceneId === '045') return { x: .03, y: .1, w: .54, h: .36 };
    const number = '[0-9]+(?:\\.[0-9]+)?';
    const match = effect.match(new RegExp(`x(${number})[–-](${number})%.*?y(${number})[–-](${number})%`));
    if (!match) return { x: 0.12, y: 0.48, w: 0.76, h: 0.25 };
    const x = Number(match[1]) / 100, right = Number(match[2]) / 100;
    const y = Number(match[3]) / 100, bottom = Number(match[4]) / 100;
    return { x, y, w: Math.max(.04, right - x), h: Math.max(.04, bottom - y) };
  };

  const kindFor = (effect) => {
    if (/霧|雲|煙/.test(effect)) return 'mist';
    if (/水|波|倒影|漣漪|流線/.test(effect)) return 'water';
    if (/影|暗|明暗/.test(effect)) return 'shade';
    return 'glint';
  };

  const quotePosition = (position) => {
    const match = position.match(/x([0-9]+)[–-]([0-9]+)%,\s*y([0-9]+)[–-]([0-9]+)%/);
    if (!match) return { left: '8%', top: '66%', width: '84%' };
    const x = Number(match[1]), right = Number(match[2]), y = Number(match[3]), bottom = Number(match[4]);
    return { left: `${x}%`, top: `${y}%`, width: `${right - x}%`, maxHeight: `${bottom - y + 2}%` };
  };

  const run = async () => {
    updateNavigation();
    const observer = new MutationObserver(updateNavigation);
    observer.observe(document.getElementById('root') || document.body, { childList: true, subtree: true });
    if (!isMotionPage) return;

    let data;
    try { data = await safeReadJson(); }
    catch (error) {
      const note = document.createElement('p');
      note.className = 'motion-load-error';
      note.textContent = '特效資料無法載入，請以網站伺服器方式開啟本頁。';
      document.body.append(note);
      console.error(error);
      return;
    }

    const mount = () => {
      const stage = document.querySelector('.stage-wrap');
      const audio = document.querySelector('.master-audio');
      if (!stage || !audio) return false;
      if (stage.querySelector('.motion-effect-canvas')) return true;
      const canvas = document.createElement('canvas');
      canvas.className = 'motion-effect-canvas';
      canvas.setAttribute('aria-hidden', 'true');
      const overlay = document.createElement('div');
      overlay.className = 'motion-quote-layer';
      overlay.setAttribute('aria-live', 'off');
      stage.append(canvas, overlay);
      const context = canvas.getContext('2d');
      const reduced = matchMedia('(prefers-reduced-motion: reduce)');
      let activeQuoteId = '';
      let activeQuoteCard = null;
      const resize = () => {
        const rect = stage.getBoundingClientRect();
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(rect.width * ratio);
        canvas.height = Math.round(rect.height * ratio);
        context.setTransform(canvas.width / 1920, 0, 0, canvas.height / 1080, 0, 0);
      };
      new ResizeObserver(resize).observe(stage);
      resize();

      const drawEffect = (scene, seconds) => {
        const region = parseRegion(scene.effect, scene.sceneId);
        const x = region.x * 1920, y = region.y * 1080, w = region.w * 1920, h = region.h * 1080;
        const seed = Number(scene.sceneId) || 1;
        const phase = reduced.matches ? .5 : seconds * (.22 + seed % 5 * .025) + seed * .73;
        context.save();
        context.beginPath(); context.rect(x, y, w, h); context.clip();
        if (scene.sceneId === '045') {
          const alternate = Math.sin(phase) >= 0;
          const panes = [{ x: x + w * .04, y: y + h * .08, w: w * .53, h: h * .8, bright: alternate }, { x: x + w * .58, y: y + h * .08, w: w * .39, h: h * .8, bright: !alternate }];
          for (const pane of panes) {
            context.fillStyle = pane.bright ? 'rgba(255,245,211,.035)' : 'rgba(10,24,38,.035)';
            context.fillRect(pane.x, pane.y, pane.w, pane.h);
          }
        } else if (kindFor(scene.effect) === 'mist') {
          for (let i = 0; i < 3; i++) {
            const drift = reduced.matches ? 0 : Math.sin(phase + i * 1.7) * w * .07;
            const gradient = context.createRadialGradient(x + w * (.28 + i * .24) + drift, y + h * (.4 + i * .1), 2, x + w * (.28 + i * .24) + drift, y + h * .4, w * .34);
            gradient.addColorStop(0, `rgba(213,231,238,${.055 + i * .008})`); gradient.addColorStop(1, 'rgba(213,231,238,0)');
            context.fillStyle = gradient; context.fillRect(x, y, w, h);
          }
        } else if (kindFor(scene.effect) === 'water') {
          context.lineWidth = Math.max(2, h * .012);
          for (let i = 0; i < 4; i++) {
            const offset = reduced.matches ? 0 : Math.sin(phase + i) * h * .035;
            const yy = y + h * (.25 + i * .17) + offset;
            const grad = context.createLinearGradient(x, yy, x + w, yy);
            grad.addColorStop(0, 'rgba(255,238,176,0)'); grad.addColorStop(.5, `rgba(255,238,176,${.10 + (seed % 4) * .008})`); grad.addColorStop(1, 'rgba(255,238,176,0)');
            context.strokeStyle = grad; context.beginPath(); context.moveTo(x, yy);
            context.bezierCurveTo(x + w * .28, yy - h * .04, x + w * .72, yy + h * .04, x + w, yy); context.stroke();
          }
        } else if (kindFor(scene.effect) === 'shade') {
          const g = context.createLinearGradient(x, y, x + w, y + h);
          g.addColorStop(0, 'rgba(11,25,36,0)'); g.addColorStop(.5, `rgba(11,25,36,${.045 + seed % 3 * .01})`); g.addColorStop(1, 'rgba(11,25,36,0)');
          context.fillStyle = g; context.fillRect(x, y, w, h);
        } else {
          const travel = reduced.matches ? .5 : ((phase % 5) / 5);
          const gx = x + travel * w;
          const g = context.createLinearGradient(gx - w * .15, y, gx + w * .15, y + h);
          g.addColorStop(0, 'rgba(255,239,185,0)'); g.addColorStop(.5, `rgba(255,239,185,${.10 + seed % 4 * .008})`); g.addColorStop(1, 'rgba(255,239,185,0)');
          context.fillStyle = g; context.fillRect(x, y, w, h);
        }
        context.restore();
      };

      let frame = 0;
      const paint = () => {
        const now = audio.currentTime * 1000;
        context.clearRect(0, 0, 1920, 1080);
        const scene = data.visuals.find((item) => now >= item.startMs && now < item.endMs) || (now >= data.visuals.at(-1).endMs ? data.visuals.at(-1) : null);
        if (scene) drawEffect(scene, audio.currentTime - scene.startMs / 1000);
        const quote = data.quotes.find((item) => now >= item.startMs && now < item.endMs);
        if (quote) {
          if (activeQuoteId !== quote.cueId) {
            overlay.replaceChildren();
            activeQuoteCard = document.createElement('div');
            activeQuoteCard.className = 'motion-quote-card';
            Object.assign(activeQuoteCard.style, quotePosition(quote.position));
            const area = quote.position.match(/x([0-9]+)[–-]([0-9]+)%,\s*y([0-9]+)[–-]([0-9]+)%/);
            const width = area ? (Number(area[2]) - Number(area[1])) * 19.2 : 1500;
            const height = area ? (Number(area[4]) - Number(area[3])) * 10.8 : 180;
            const paragraphs = quote.text.split('\n');
            const wrappedLines = paragraphs.reduce((total, line) => total + Math.max(1, Math.ceil([...line].length * 64 / (width * .92))), 0);
            const fontLimit = Math.max(20, Math.min(64, width * .92 / Math.max(1, ...paragraphs.map((line) => [...line].length)), height / (wrappedLines * 1.5)));
            activeQuoteCard.style.setProperty('--quote-font-limit', `${fontLimit}px`);
            activeQuoteCard.textContent = quote.text;
            overlay.append(activeQuoteCard);
            activeQuoteId = quote.cueId;
          }
          activeQuoteCard.style.setProperty('--quote-progress', reduced.matches ? '1' : String(Math.min(1, (now - quote.startMs) / 220, (quote.endMs - now) / 200)));
        } else if (activeQuoteId) {
          overlay.replaceChildren();
          activeQuoteId = '';
          activeQuoteCard = null;
        }
        if (!audio.paused && !audio.ended) frame = requestAnimationFrame(paint);
      };
      const refresh = () => { cancelAnimationFrame(frame); paint(); };
      ['play', 'pause', 'timeupdate', 'seeked', 'loadedmetadata', 'ended'].forEach((event) => audio.addEventListener(event, refresh));
      reduced.addEventListener?.('change', refresh);
      refresh();
      return true;
    };

    const mountObserver = new MutationObserver(() => { if (mount()) mountObserver.disconnect(); });
    mountObserver.observe(document.getElementById('root') || document.body, { childList: true, subtree: true });
    mount();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, { once: true });
  else run();
})();
