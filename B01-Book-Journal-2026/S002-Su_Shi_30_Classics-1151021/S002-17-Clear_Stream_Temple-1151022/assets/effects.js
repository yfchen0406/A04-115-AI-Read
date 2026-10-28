(() => {
  'use strict';
  const timeline = window.B17_TIMELINE;
  const plan = window.B17_EFFECTS;
  const audio = document.querySelector('#audio');
  const sceneLayer = document.querySelector('#frame-effects');
  const poemLayer = document.querySelector('#poem-overlay');
  const poemText = document.querySelector('#poem-overlay-text');
  if (!timeline || !plan || !audio || !sceneLayer || !poemLayer || !poemText) return;

  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;
  let activeSceneId = '';
  let activeQuoteCue = '';
  let frameRequest = 0;

  function currentScene(milliseconds) {
    let low = 0;
    let high = timeline.scenes.length - 1;
    while (low < high) {
      const middle = (low + high + 1) >> 1;
      if (timeline.scenes[middle].startMs <= milliseconds) low = middle;
      else high = middle - 1;
    }
    return timeline.scenes[low];
  }

  function setQuote(quote) {
    const nextCue = quote?.cue || '';
    if (nextCue === activeQuoteCue) return;
    activeQuoteCue = nextCue;
    poemLayer.classList.remove('is-visible');
    if (!quote) {
      poemLayer.setAttribute('aria-hidden', 'true');
      poemLayer.removeAttribute('data-cue');
      poemText.textContent = '';
      poemLayer.classList.remove('is-mobile-wide');
      return;
    }

    poemText.textContent = quote.text;
    poemLayer.dataset.cue = quote.cue;
    poemLayer.dataset.tone = quote.tone;
    poemLayer.setAttribute('aria-hidden', 'false');
    poemLayer.classList.toggle('is-mobile-wide', quote.mobileWide);
    poemLayer.style.top = `${quote.position.top}%`;
    poemLayer.style.setProperty('--poem-width', `${quote.position.width}%`);
    if (quote.position.left !== undefined) {
      poemLayer.style.left = `${quote.position.left}%`;
      poemLayer.style.right = 'auto';
    } else {
      poemLayer.style.right = `${quote.position.right}%`;
      poemLayer.style.left = 'auto';
    }
    requestAnimationFrame(() => poemLayer.classList.add('is-visible'));
  }

  function renderAtCurrentTime() {
    const milliseconds = Math.round(audio.currentTime * 1000);
    const scene = currentScene(milliseconds);
    const config = plan.imageEffects[scene.id];
    if (config) {
      if (activeSceneId !== scene.id) {
        activeSceneId = scene.id;
        sceneLayer.dataset.kind = config.kind;
        sceneLayer.dataset.effectLabel = config.label;
      }
      const progress = Math.max(0, Math.min(1, (milliseconds - scene.startMs) / scene.durationMs));
      const envelope = reduceMotion ? .42 : .58 + .42 * Math.sin(Math.PI * progress);
      sceneLayer.style.opacity = String(config.strength * envelope);
      sceneLayer.style.setProperty('--effect-angle', `${config.angle}deg`);
      sceneLayer.style.transform = reduceMotion
        ? 'translate3d(0,0,0)'
        : `translate3d(${(config.motion.toX - config.motion.fromX) * progress}%,${(config.motion.toY - config.motion.fromY) * progress}%,0)`;
      sceneLayer.style.backgroundPosition = `${Math.round(progress * 100)}% ${Math.round((1 - progress) * 100)}%`;
      sceneLayer.style.backgroundSize = config.kind === 'rain' ? '145% 145%' : '125% 125%';
    }

    const quote = plan.poemLayers.find((item) => milliseconds >= item.startMs && milliseconds < item.endMs && item.imageId === scene.id);
    setQuote(quote);
  }

  function animate() {
    renderAtCurrentTime();
    if (!audio.paused && !reduceMotion) frameRequest = requestAnimationFrame(animate);
  }

  function start() {
    if (frameRequest) cancelAnimationFrame(frameRequest);
    animate();
  }

  ['timeupdate', 'seeking', 'seeked', 'loadedmetadata', 'pause', 'ended'].forEach((name) => {
    audio.addEventListener(name, renderAtCurrentTime);
  });
  audio.addEventListener('play', start);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (frameRequest) cancelAnimationFrame(frameRequest);
      frameRequest = 0;
    } else if (!audio.paused && !reduceMotion) start();
    else renderAtCurrentTime();
  });
  renderAtCurrentTime();
})();

