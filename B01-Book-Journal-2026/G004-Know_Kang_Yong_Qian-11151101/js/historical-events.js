(() => {
  'use strict';
  const root = document.getElementById('global-history');
  const time = window.HistoricalTimeController;
  if (!root || !time) return;
  const host = root.querySelector('[data-history-regions]');
  const categoriesHost = root.querySelector('[data-history-categories]');
  const search = root.querySelector('[data-history-search]');
  const adjacent = root.querySelector('[data-history-adjacent]');
  const status = root.querySelector('[data-history-status]');
  const selectedCategories = new Set();
  let records = [];
  let allCategoryCount = 0;
  let selectedRegions = [...time.getSnapshot().selectedRegions];
  let selectedCountries = [...time.getSnapshot().selectedCountries];
  let unsubscribe = () => {};
  let destroyed = false;
  let mapUpdateListener = null;
  let motionChangeListener = null;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[char]);
  const regions = [{id:'qing',label:'清朝'},{id:'europe',label:'歐洲'},{id:'america',label:'美洲'}];
  const jumpYears = [1661,1669,1673,1683,1688,1689,1713,1722,1729,1735,1756,1759,1763,1769,1776,1783,1787,1789,1793,1796,1799];
  function animateCards() {
    if (!window.gsap || document.documentElement.classList.contains('qing-motion-off') || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cards = root.querySelectorAll('.ht-card');
    if (cards.length) window.gsap.fromTo(cards, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .24, stagger: .035, ease: 'power1.out', overwrite: true, clearProps: 'transform' });
  }
  motionChangeListener = event => {
    const cards = root.querySelectorAll('.ht-card');
    if (!event.detail?.enabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (window.gsap && cards.length) { window.gsap.killTweensOf(cards); window.gsap.set(cards, { clearProps: 'opacity,transform' }); }
      return;
    }
    animateCards();
  };
  window.addEventListener('qingmotionchange', motionChangeListener);
  mapUpdateListener = event => {
    const next = event.detail.selectedRegions || [];
    const nextCountries = event.detail.selectedCountries || [];
    const countriesChanged = JSON.stringify(nextCountries) !== JSON.stringify(selectedCountries);
    if (countriesChanged) selectedCountries = [...nextCountries];
    if (JSON.stringify(next) !== JSON.stringify(selectedRegions)) {
      selectedRegions = [...next];
      render();
    } else if (countriesChanged) render();
  };
  window.addEventListener('historicalmapupdate', mapUpdateListener);
  function destroy() {
    if (destroyed) return;
    destroyed = true;
    unsubscribe(); unsubscribe = () => {};
    if (mapUpdateListener) window.removeEventListener('historicalmapupdate', mapUpdateListener);
    if (motionChangeListener) window.removeEventListener('qingmotionchange', motionChangeListener);
    mapUpdateListener = null; motionChangeListener = null;
    window.removeEventListener('pagehide', onPageHide);
  }
  function onPageHide() { destroy(); }
  function matches(event, year) { return event.year === year || (adjacent.checked && Math.abs(event.year - year) <= 1); }
  function matchesCountries(event) {
    if (!selectedCountries.length) return true;
    const aliases = {
      '清朝／中國': ['清朝','清'],
      '英國': ['英格蘭','大不列顛','英屬北美十三殖民地'],
      '法國': ['法蘭西','法國','歐洲列強'],
      '荷蘭': ['荷蘭','歐洲列強'],
      '西班牙': ['西班牙','歐洲列強'],
      '西班牙／烏拉圭': ['西班牙','歐洲列強'],
      '俄羅斯': ['俄羅斯','清與俄羅斯沙皇國','歐洲列強'],
      '美國': ['美利堅合眾國','英屬北美十三殖民地'],
      '北美／美國（多族群估計）': ['英屬北美十三殖民地','美利堅合眾國'],
      '北美／美國旗國': ['英屬北美十三殖民地','美利堅合眾國']
    };
    return selectedCountries.some(country => {
      const candidates = aliases[country] || [country];
      return candidates.some(candidate => event.country.includes(candidate) || event.region.includes(candidate));
    });
  }
  function render() {
    if (!records.length) return;
    const year = time.getCurrentYear();
    const query = search.value.trim().toLocaleLowerCase('zh-TW');
    const categoryEnabled = event => selectedCategories.size === 0 || selectedCategories.has(event.category);
    host.innerHTML = regions.map(region => {
      const list = records.filter(event => event.region === region.label && selectedRegions.includes(region.id) && matches(event, year) && matchesCountries(event) && categoryEnabled(event) && (!query || `${event.year} ${event.date||''} ${event.region} ${event.country} ${event.category} ${event.title} ${event.background} ${event.people.join(' ')}`.toLocaleLowerCase('zh-TW').includes(query)))
        .sort((a,b) => (a.date||`${a.year}-99-99`).localeCompare(b.date||`${b.year}-99-99`) || a.category.localeCompare(b.category,'zh-TW') || a.title.localeCompare(b.title,'zh-TW'));
      const cards = list.map(event => `<article class="ht-card" data-event-id="${esc(event.id)}"><time datetime="${esc(event.date||String(event.year))}">${event.date ? esc(event.date) : `${event.year} 年`}</time> <strong>${esc(event.title)}</strong><p>${esc(event.country)}｜${esc(event.category)}</p>${event.dateNote?`<p class="ht-date-note">日期說明：${esc(event.dateNote)}</p>`:''}<p>${esc(event.background)}</p><details><summary>人物與史料</summary><p>重要人物：${event.people.map(esc).join('、')||'未註明'}</p><p>來源：<a href="${esc(event.sourceUrl)}" target="_blank" rel="noopener">${esc(event.sourceTitle)}</a>${event.relatedSourceUrl?`；<a href="${esc(event.relatedSourceUrl)}" target="_blank" rel="noopener">補充日期來源</a>`:''}</p></details><button type="button" data-select-event="${esc(event.id)}">定位至 ${event.year} 年</button></article>`).join('');
      const empty = selectedRegions.includes(region.id) ? `<p class="ht-empty">本資料庫目前沒有收錄${region.label}此年份的事件。</p>` : '<p class="ht-empty">此地區目前已隱藏。</p>';
      return `<section class="ht-region" data-region="${region.id}"><h3>${region.label}<label class="ht-region-toggle"><input type="checkbox" data-region-toggle="${region.id}" ${selectedRegions.includes(region.id)?'checked':''}> 顯示</label></h3>${cards||empty}</section>`;
    }).join('');
    animateCards();
    const snap = time.getSnapshot();
    const eraClass = snap.currentYear === 1722 || snap.currentYear === 1735 ? 'transition' : snap.currentYear <= 1721 ? 'kangxi' : snap.currentYear <= 1734 ? 'yongzheng' : snap.currentYear <= 1795 ? 'qianlong' : 'jiaqing';
    document.documentElement.classList.remove('qing-era-kangxi','qing-era-yongzheng','qing-era-qianlong','qing-era-jiaqing','qing-era-transition');
    document.documentElement.classList.add(`qing-era-${eraClass}`);
    const active = records.filter(event => event.year === year).length;
    status.textContent = `${year} 年｜${snap.currentYear === 1722 || snap.currentYear === 1735 ? '皇位交替年' : snap.currentYear <= 1721 ? '康熙帝時期' : snap.currentYear <= 1734 ? '雍正帝時期' : snap.currentYear <= 1795 ? '乾隆帝時期' : '嘉慶帝在位、乾隆為太上皇'}｜資料庫收錄 ${active} 件當年事件${selectedCountries.length ? `｜國家篩選：${selectedCountries.join('、')}` : ''}。`;
    root.querySelectorAll('[data-time-year]').forEach(button => button.setAttribute('aria-current', String(Number(button.dataset.timeYear) === year)));
  }
  function updateRegions() {
    selectedRegions = [...host.querySelectorAll('[data-region-toggle]:checked')].map(input => input.dataset.regionToggle);
    time.setSelections({ selectedRegions });
    render();
  }
  function syncAllEventsButton() {
    const button = categoriesHost.querySelector?.('[data-history-category-all]');
    if (button) { const all = selectedCategories.size === 0 || selectedCategories.size >= allCategoryCount; button.setAttribute('aria-pressed', String(all)); button.setAttribute('aria-selected', String(all)); }
  }
  categoriesHost.addEventListener('click', event => {
    const button = event.target.closest('[data-history-category-all]');
    if (!button) return;
    selectedCategories.clear();
    categoriesHost.querySelectorAll('input').forEach(input => { input.checked = false; });
    syncAllEventsButton();
    render();
  });
  categoriesHost.addEventListener('change', event => {
    const input = event.target.closest('[data-history-category]');
    if (!input) return;
    input.checked ? selectedCategories.add(input.value) : selectedCategories.delete(input.value);
    syncAllEventsButton();
    render();
  });
  root.querySelector('[data-history-clear-categories]').addEventListener('click', () => { selectedCategories.clear(); categoriesHost.querySelectorAll('input').forEach(input => { input.checked = false; }); syncAllEventsButton(); render(); });
  root.addEventListener('change', event => { if (event.target.matches('[data-region-toggle]')) updateRegions(); if (event.target === adjacent) render(); });
  root.addEventListener('input', event => { if (event.target === search) render(); });
  root.addEventListener('click', event => {
    const jump=event.target.closest('[data-time-year]');
    if(jump){time.setCurrentYear(jump.dataset.timeYear,{source:'important-year'});return;}
    const button = event.target.closest('[data-select-event]'); if (!button) return; const item = records.find(record => record.id === button.dataset.selectEvent); if (!item) return; time.setSelections({ selectedEvent: item.id }); time.setCurrentYear(item.year, { source: 'historical-event' }); render();
  });
  fetch('./data/historical-events.json').then(response => { if (!response.ok) throw new Error('historical-events.json'); return response.json(); }).then(data => {
    if (destroyed) return;
    records = data.events;
    allCategoryCount = data.categories.length;
    categoriesHost.innerHTML = `<button type="button" class="ht-category-all" data-history-category-all aria-pressed="true" role="tab" aria-selected="true" title="清除分類限制，顯示目前年份的所有類別事件">所有事件</button>${data.categories.map(category => `<label><input type="checkbox" data-history-category value="${esc(category)}"> ${esc(category)}</label>`).join('')}<span class="ht-category-hint">需要時再選分類縮小範圍；「所有事件」會清除分類限制。</span>`;
    root.querySelector('[data-history-jumps]').innerHTML = jumpYears.map(year => { const item = records.find(event => event.year === year); return `<button type="button" data-time-year="${year}" title="${item ? esc(item.title) : ''}">${year}</button>`; }).join('');
    render();
    unsubscribe = time.subscribe(render);
    window.HistoricalEvents = { getEvents: () => records.map(record => ({...record,people:[...record.people]})), render, destroy };
  }).catch(error => { console.error('Historical events could not load:', error); status.textContent = window.location?.protocol === 'file:' ? '歷史事件資料無法由 file:// 載入。請解壓網站後執行 start-local-site.cmd，或改用 HTTP(S) 網址開啟。' : '歷史事件資料載入失敗。請確認網站與 data/historical-events.json 位於正確相對路徑，且以 HTTP(S) 開啟。'; });
  window.addEventListener('pagehide', onPageHide, { once:true });
})();
