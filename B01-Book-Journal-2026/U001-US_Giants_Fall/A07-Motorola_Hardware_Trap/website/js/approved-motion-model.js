(function (scope) {
  'use strict';
  const clamp = (n, a = 0, b = 1) => Math.max(a, Math.min(b, n));
  const smooth = n => { n = clamp(n); return n * n * (3 - 2 * n); };
  const envelope = (ms, start, end, fadeIn, fadeOut) =>
    smooth((ms - start) / fadeIn) * smooth((end - ms) / fadeOut);

  function visual(config, ms, options = {}) {
    if (!config || !options.enabled || options.mobile || options.reduced || options.chapterVisible || options.fallback || ms < config.effectStartMs || ms >= config.effectEndMs) return null;
    const p = clamp((ms - config.effectStartMs) / (config.effectEndMs - config.effectStartMs));
    const fade = envelope(ms, config.effectStartMs, config.effectEndMs, 800, 800);
    const [x, y, w, h] = config.mask;
    const marks = Array.from({ length: config.count }, (_, i) => {
      const phase = config.count === 1 ? p : clamp(p * config.count - i);
      const sequential = config.count === 1 ? 1 : Math.sin(Math.PI * phase);
      const dx = config.vector[0] * config.travel * (p - 0.5);
      const dy = config.vector[1] * config.travel * (p - 0.5);
      const target = config.targets?.[i];
      return {
        x: target ? target.x : x + (config.count > 1 ? (i + 0.5 - config.count / 2) * w / config.count : 0) + dx,
        y: target ? target.y : y + dy, width: target ? target.width : w / config.count, height: target ? target.height : h,
        opacity: config.maxOpacityPercent / 100 * fade * Math.max(0, sequential)
      };
    });
    return { id: config.id, sceneId: config.sceneId, progress: p, kind: config.kind, rgb: config.rgb, marks };
  }

  function text(items, ms, options = {}) {
    if (!options.enabled || options.chapterVisible || options.fallback) return null;
    const item = items.find(c => ms >= c.startMs && ms < c.endMs && c.visibleWindows.some(([a, b]) => ms >= a && ms < b));
    if (!item) return null;
    const duration = item.endMs - item.startMs;
    const enter = Math.min(400, duration * 0.18);
    const exit = Math.min(350, duration * 0.18);
    return {
      id: item.id, text: item.text, side: item.positionSide,
      opacity: options.reduced ? 1 : envelope(ms, item.startMs, item.endMs, enter, exit),
      lift: options.reduced ? 0 : 6 * (1 - smooth((ms - item.startMs) / enter)),
      progress: clamp((ms - item.startMs) / duration)
    };
  }

  scope.ApprovedMotionModel = { visual, text, envelope };
})(typeof window === 'object' ? window : globalThis);
