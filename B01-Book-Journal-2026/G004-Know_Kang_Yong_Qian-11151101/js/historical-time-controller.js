/* Shared year state for the Qing global-history timeline and every connected module. */
(() => {
  'use strict';
  if (window.HistoricalTimeController) return;
  const MIN_YEAR = 1661;
  const MAX_YEAR = 1799;
  const state = {
    currentYear: 1750,
    speed: 1,
    playbackEnd: 'stop',
    selectedCountries: [],
    selectedRegions: ['qing', 'europe', 'america'],
    selectedEvent: null,
    mapLayerVisibility: { borders: true, tradeRoutes: false, events: true }
  };
  const subscribers = new Set();
  let timer = null;
  let destroyed = false;
  let controls = null;
  let controlClick = null;
  let controlChange = null;
  let controlInput = null;
  let jumpChange = null;
  const clampYear = value => Math.max(MIN_YEAR, Math.min(MAX_YEAR, Math.round(Number(value) || MIN_YEAR)));
  const snapshot = () => ({ ...state, playing: Boolean(timer), selectedCountries: [...state.selectedCountries], selectedRegions: [...state.selectedRegions], mapLayerVisibility: { ...state.mapLayerVisibility } });
  function emperorFor(year) {
    if (year === 1722 || year === 1735) return '皇位交替年';
    if (year <= 1721) return '康熙帝';
    if (year <= 1734) return '雍正帝';
    if (year <= 1795) return '乾隆帝';
    return '嘉慶帝在位・乾隆太上皇';
  }
  function syncControls() {
    const year = String(state.currentYear);
    const range = document.getElementById('worldYear');
    const legacy = document.getElementById('econYear');
    const jump = document.querySelector('[data-time-jump]');
    const sharedRanges = document.querySelectorAll('[data-time-year-range]');
    const label = document.getElementById('worldYearLabel');
    if (range && range.value !== year) { range.value = year; range.dispatchEvent(new Event('input', { bubbles: true })); }
    sharedRanges.forEach(input => { input.min = MIN_YEAR; input.max = MAX_YEAR; input.value = year; });
    if (legacy) legacy.value = year;
    document.querySelectorAll('[data-ed-year]').forEach(input => { input.min = MIN_YEAR; input.max = MAX_YEAR; input.value = year; });
    if (jump) jump.value = year;
    if (label) label.value = year;
    const emperor = document.querySelector('[data-current-emperor]');
    if (emperor) emperor.textContent = emperorFor(state.currentYear);
    const timelineLabel = document.querySelector('[data-time-year-label]');
    if (timelineLabel) timelineLabel.textContent = `${year} 年`;
    const play = document.querySelector('[data-time-play]');
    if (play) { play.textContent = timer ? '⏸ 暫停' : '▶ 播放'; play.setAttribute('aria-pressed', String(Boolean(timer))); }
    const legacyPlay = document.getElementById('worldPlay');
    if (legacyPlay) legacyPlay.textContent = timer ? '■ 停止播放' : '▶ 自動播放';
    const oldEconomyPlay = document.getElementById('econPlay');
    if (oldEconomyPlay) oldEconomyPlay.textContent = timer ? '■ 暫停' : '▶ 播放';
    const dashboardPlay = document.querySelector('[data-ed-play]');
    if (dashboardPlay) dashboardPlay.textContent = timer ? '■ 暫停' : '▶ 播放';
    const speedSelect = document.querySelector('[data-ed-speed]');
    if (speedSelect) speedSelect.value = String(state.speed);
    if (window.gsap && !document.documentElement.classList.contains('qing-motion-off') && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const yearLabel = document.querySelector('[data-time-year-label]');
      if (yearLabel) window.gsap.fromTo(yearLabel, { opacity: .68, y: 3 }, { opacity: 1, y: 0, duration: .2, overwrite: true });
    }
  }
  function emit(source, yearChanged = true) {
    const detail = { ...snapshot(), source };
    syncControls();
    if (yearChanged) {
      subscribers.forEach(callback => callback(detail));
      window.dispatchEvent(new CustomEvent('historicalyearchange', { detail }));
    }
    window.dispatchEvent(new CustomEvent('historicalmapupdate', { detail: { ...detail, year: state.currentYear, selectedRegions: [...state.selectedRegions], selectedCountries: [...state.selectedCountries], mapLayerVisibility: { ...state.mapLayerVisibility } } }));
  }
  function setCurrentYear(value, options = {}) {
    const year = clampYear(value);
    const selectionChanged = options.selections ? applySelections(options.selections) : false;
    const yearChanged = year !== state.currentYear;
    if (!yearChanged && !selectionChanged) { syncControls(); return year; }
    state.currentYear = year;
    emit(options.source || 'api', yearChanged);
    return year;
  }
  function onYearInput(event) {
    if (event.target && ['worldYear', 'econYear'].includes(event.target.id)) setCurrentYear(event.target.value, { source: event.target.id });
    if (event.target && event.target.matches && event.target.matches('[data-ed-year],[data-time-year-range]')) setCurrentYear(event.target.value, { source: 'shared-slider' });
  }
  function play() {
    if (timer || destroyed) return;
    timer = window.setInterval(() => {
      if (state.currentYear >= MAX_YEAR) {
        if (state.playbackEnd === 'restart') { setCurrentYear(MIN_YEAR, { source: 'playback-restart' }); return; }
        else { pause(); return; }
      }
      if (state.currentYear >= MAX_YEAR) return;
      setCurrentYear(Math.min(MAX_YEAR, state.currentYear + state.speed), { source: 'playback' });
    }, 1000);
    syncControls();
  }
  function pause() { if (timer) window.clearInterval(timer); timer = null; syncControls(); }
  function setPlaybackSpeed(speed) {
    const n = Number(speed); if ([1, 2, 4].includes(n)) state.speed = n;
    document.querySelectorAll('[data-time-speed],[data-ed-speed]').forEach(select => { select.value = String(state.speed); });
    return state.speed;
  }
  function setPlaybackEndBehavior(value) {
    if (value === 'stop' || value === 'restart') state.playbackEnd = value;
    document.querySelectorAll('[data-time-end]').forEach(select => { select.value = state.playbackEnd; });
    return state.playbackEnd;
  }
  function applySelections(patch = {}) {
    let changed = false;
    if (Array.isArray(patch.selectedCountries)) { const next=[...new Set(patch.selectedCountries.map(String))]; if(JSON.stringify(next)!==JSON.stringify(state.selectedCountries)){state.selectedCountries=next;changed=true;} }
    if (Array.isArray(patch.selectedRegions)) { const next=[...new Set(patch.selectedRegions.map(String))]; if(JSON.stringify(next)!==JSON.stringify(state.selectedRegions)){state.selectedRegions=next;changed=true;} }
    if ('selectedEvent' in patch && patch.selectedEvent!==state.selectedEvent) { state.selectedEvent=patch.selectedEvent;changed=true; }
    if (patch.mapLayerVisibility && typeof patch.mapLayerVisibility === 'object') { const next={...state.mapLayerVisibility,...patch.mapLayerVisibility};if(JSON.stringify(next)!==JSON.stringify(state.mapLayerVisibility)){state.mapLayerVisibility=next;changed=true;} }
    return changed;
  }
  function setSelections(patch = {}) {
    if (applySelections(patch)) emit('selection', false);
    return snapshot();
  }
  function subscribe(callback) { if (typeof callback !== 'function') throw new TypeError('callback must be a function'); subscribers.add(callback); return () => unsubscribe(callback); }
  function unsubscribe(callback) { subscribers.delete(callback); }
  function destroy() {
    pause(); destroyed = true; document.removeEventListener('input', onYearInput);
    if (controls) {
      controls.removeEventListener('click', controlClick);
      controls.removeEventListener('change', controlChange);
      controls.removeEventListener('input', controlInput);
      const jump = controls.querySelector('[data-time-jump]');
      if (jump && jumpChange) jump.removeEventListener('change', jumpChange);
    }
    subscribers.clear(); window.removeEventListener('pagehide', destroy);
  }
  const api = { MIN_YEAR, MAX_YEAR, getCurrentYear: () => state.currentYear, getSnapshot: snapshot, getEmperorForYear: emperorFor, setCurrentYear, play, pause, setPlaybackSpeed, setPlaybackEndBehavior, subscribe, unsubscribe, setSelections, destroy };
  window.HistoricalTimeController = api;
  document.addEventListener('input', onYearInput);
  const initial = document.getElementById('worldYear') || document.querySelector('[data-ed-year]');
  if (initial) state.currentYear = clampYear(initial.value);
  syncControls();
  controls = document.querySelector('[data-global-time-controls]');
  if (controls) {
    controlClick = event => {
      const button = event.target.closest('[data-time-action],[data-time-year]');
      if (!button) return;
      if (button.dataset.timeYear) { setCurrentYear(button.dataset.timeYear, { source: 'quick-jump' }); return; }
      switch (button.dataset.timeAction) {
        case 'previous': setCurrentYear(state.currentYear - 1, { source: 'step' }); break;
        case 'next': setCurrentYear(state.currentYear + 1, { source: 'step' }); break;
        case 'first': pause(); setCurrentYear(MIN_YEAR, { source: 'endpoint' }); break;
        case 'last': pause(); setCurrentYear(MAX_YEAR, { source: 'endpoint' }); break;
        case 'restart': pause(); setCurrentYear(MIN_YEAR, { source: 'replay' }); play(); break;
        case 'play': timer ? pause() : play(); break;
        case 'jump': { const input = controls.querySelector('[data-time-jump]'); if (input && input.reportValidity()) setCurrentYear(input.value, { source: 'jump' }); break; }
      }
    };
    controlChange = event => { if (event.target.matches('[data-time-speed]')) setPlaybackSpeed(event.target.value); if (event.target.matches('[data-time-end]')) setPlaybackEndBehavior(event.target.value); };
    controlInput = event => { if (event.target.matches('[data-time-jump]')) event.target.setCustomValidity(''); };
    controls.addEventListener('click', controlClick);
    controls.addEventListener('change', controlChange);
    controls.addEventListener('input', controlInput);
    const jump = controls.querySelector('[data-time-jump]');
    const jumpButton = controls.querySelector('[data-time-action="jump"]');
    if (jump && jumpButton) { jumpChange = () => jump.setCustomValidity(Number.isInteger(Number(jump.value)) && Number(jump.value) >= MIN_YEAR && Number(jump.value) <= MAX_YEAR ? '' : `請輸入 ${MIN_YEAR} 至 ${MAX_YEAR} 之間的年份。`); jump.addEventListener('change', jumpChange); }
  }
  window.addEventListener('pagehide', destroy, { once: true });
})();
