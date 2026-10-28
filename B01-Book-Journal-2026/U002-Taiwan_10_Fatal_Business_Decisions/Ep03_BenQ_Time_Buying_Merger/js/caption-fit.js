(() => {
  const caption = document.getElementById('caption');
  if (!caption || !document.createElement('canvas').getContext) return;

  const context = document.createElement('canvas').getContext('2d');
  const fit = () => {
    if (!caption.textContent) return;
    caption.style.fontSize = '';
    const style = getComputedStyle(caption);
    const maximum = Number.parseFloat(style.fontSize);
    const text = caption.textContent.replace(/\s+/g, ' ').trim();
    context.font = `${style.fontWeight} ${maximum}px ${style.fontFamily}`;
    const measured = context.measureText(text).width;
    if (measured > 0 && caption.clientWidth > 0) {
      caption.style.fontSize = `${maximum * Math.min(1, caption.clientWidth * 0.96 / measured)}px`;
    }
  };

  window.fitEpisodeCaption = fit;
  if ('ResizeObserver' in window) new ResizeObserver(fit).observe(caption);
  else window.addEventListener('resize', fit);
})();
