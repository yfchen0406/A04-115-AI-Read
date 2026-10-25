(()=> {
  const config = window.SearsAnimationConfig;
  const dataset = window.SearsAnimationCueData;
  const card = document.getElementById('semanticAnimation');
  if (!config || !dataset || !card) return;

  const labels = {
    'year-timeline': '年份',
    'number-counter': '數值',
    'before-after': '前後對照',
    'capital-flow': '交易步驟',
    'breaking-news': '事件摘要',
    'map-expansion': '地域',
    'product-evolution': '模式演變',
    'decision-fork': '假設情境',
    'reveal-question': '問題',
    'key-phrase': '重點',
    'evidence-card': '來源摘要',
    'emotional-pause': '停頓'
  };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let currentKey = '';
  let lastTime = 0;
  let lastChapterTitle = false;
  let lastImageAvailable = true;

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  function clear() {
    card.hidden = true;
    currentKey = '';
    card.removeAttribute('data-cue');
    card.style.setProperty('--cue-alpha', '0');
    card.style.setProperty('--cue-progress', '0');
  }
  function addText(parent, tag, className, value) {
    if (!value) return null;
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = String(value);
    parent.appendChild(node);
    return node;
  }
  function populate(cue, phase, key) {
    card.replaceChildren();
    card.className = 'semantic-animation';
    card.classList.add('type-' + cue.type);
    if (cue.style) card.classList.add('style-' + cue.style);
    card.dataset.cue = cue.id;
    card.dataset.position = cue.position || 'top-right';

    const label = document.createElement('span');
    label.className = 'cue-type';
    label.textContent = labels[cue.type] || '旁白摘要';
    card.appendChild(label);

    const body = document.createElement('div');
    body.className = 'cue-body';
    card.appendChild(body);
    addText(body, 'strong', 'cue-title', phase.title || cue.title);
    addText(body, 'div', cue.type === 'number-counter' ? 'cue-value' : 'cue-subtitle', phase.subtitle || cue.subtitle);

    if (cue.steps && cue.steps.length) {
      const flow = document.createElement('div');
      flow.className = 'cue-flow';
      cue.steps.forEach((step, index) => {
        const node = document.createElement('span');
        node.className = 'cue-flow-node';
        node.textContent = step;
        flow.appendChild(node);
        if (index < cue.steps.length - 1) {
          const arrow = document.createElement('span');
          arrow.className = 'cue-flow-arrow';
          arrow.setAttribute('aria-hidden', 'true');
          arrow.textContent = '→';
          flow.appendChild(arrow);
        }
      });
      body.appendChild(flow);
    }

    if (cue.verified !== true && cue.sourceNote) {
      addText(card, 'small', 'cue-disclosure', cue.sourceNote);
    }
    const meter = document.createElement('span');
    meter.className = 'cue-meter';
    meter.setAttribute('aria-hidden', 'true');
    const meterFill = document.createElement('i');
    meter.appendChild(meterFill);
    card.appendChild(meter);
    currentKey = key;
  }
  function pickCue(timeMs) {
    return dataset.cues
      .filter(cue => cue.enabled && config.typeEnabled[cue.type] !== false &&
        timeMs >= cue.startMs && timeMs < cue.endMs)
      .sort((a, b) => (b.priority || 0) - (a.priority || 0))[0] || null;
  }
  function pickPhase(cue, timeMs) {
    if (!cue.phases || !cue.phases.length) return cue;
    return cue.phases.find(p => timeMs >= p.startMs && timeMs < p.endMs) || null;
  }
  function render(timeSeconds, chapterTitleVisible, imageAvailable) {
    lastTime = Number.isFinite(timeSeconds) ? timeSeconds : 0;
    lastChapterTitle = Boolean(chapterTitleVisible);
    lastImageAvailable = imageAvailable !== false;
    const globalToggle = document.getElementById('semanticToggle');
    if (globalToggle) config.enabled = globalToggle.checked;
    if (!config.enabled || lastChapterTitle || !lastImageAvailable) {
      clear();
      return;
    }
    const nowMs = Math.floor(lastTime * 1000);
    const cue = pickCue(nowMs);
    if (!cue) {
      clear();
      return;
    }
    const phase = pickPhase(cue, nowMs);
    if (!phase) {
      clear();
      return;
    }
    const key = cue.id + ':' + (phase.sourceSrtIds || cue.sourceSrtIds || []).join(',');
    if (key !== currentKey) populate(cue, phase, key);

    const start = phase.startMs || cue.startMs;
    const end = phase.endMs || cue.endMs;
    const span = Math.max(1, end - start);
    const progress = clamp((nowMs - start) / span, 0, 1);
    const fadeIn = Math.min(config.fadeInMs || 220, span / 2);
    const fadeOut = Math.min(config.fadeOutMs || 220, span / 2);
    let alpha = Math.min(1, (nowMs - start) / fadeIn, (end - nowMs) / fadeOut);
    alpha = clamp(alpha, 0, 1);
    if (reducedMotion.matches) alpha = 1;
    card.style.setProperty('--cue-alpha', String(alpha));
    card.style.setProperty('--cue-lift', reducedMotion.matches ? '0px' : (String((1 - alpha) * 8) + 'px'));
    card.style.setProperty('--cue-progress', String(progress));
    card.hidden = false;
  }

  function collectSuggestions(subtitles) {
    if (dataset.cues.length) return [];
    const suggestions = [];
    for (const sub of subtitles || []) {
      let type = null;
      if (/[?？]/.test(sub.text)) type = 'reveal-question';
      else if (/(一九|二零|19|20)\d{2}年/u.test(sub.text)) type = 'year-timeline';
      else if (/(億|萬|％|%|美元|門市|員工)/u.test(sub.text)) type = 'number-counter';
      if (!type) continue;
      suggestions.push({
        id: 'suggestion-' + sub.number,
        startMs: sub.startMs,
        endMs: sub.endMs,
        type,
        title: sub.text,
        sourceText: sub.text,
        sourceSrtIds: [Number(sub.number)],
        verified: false,
        sourceNote: '字幕原文，尚未外部核實',
        enabled: false
      });
    }
    return suggestions;
  }

  function bindControls() {
    const master = document.getElementById('semanticToggle');
    if (master) {
      master.checked = config.enabled !== false;
      master.addEventListener('change', () => render(lastTime, lastChapterTitle, lastImageAvailable));
    }
    document.querySelectorAll('[data-semantic-type]').forEach(input => {
      const type = input.dataset.semanticType;
      input.checked = config.typeEnabled[type] !== false;
      input.addEventListener('change', () => {
        config.typeEnabled[type] = input.checked;
        render(lastTime, lastChapterTitle, lastImageAvailable);
      });
    });
    reducedMotion.addEventListener?.('change', () => render(lastTime, lastChapterTitle, lastImageAvailable));
  }

  window.SemanticAnimationEngine = {
    render,
    clear,
    collectSuggestions,
    getCueCount: () => dataset.cues.length
  };
  bindControls();
})();