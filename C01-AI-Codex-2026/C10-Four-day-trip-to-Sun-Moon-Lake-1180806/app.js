(() => {
  const state = { plan: 'first', version: 0, day: 0 };
  const planTabs = document.querySelectorAll('.plan-tab');
  const versionTabs = document.querySelector('#version-tabs');
  const dayTabs = document.querySelector('#day-tabs');
  const dayContent = document.querySelector('#day-content');
  const esc = (value) => String(value || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function parsePlan(raw) {
    const lines = raw.split(/\r?\n/);
    const title = lines.find(x => x.startsWith('# '))?.slice(2) || '';
    const period = lines.find(x => x.includes('2026/12/14')) || '';
    const versions = [];
    let version, day, spot;
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (line.startsWith('## ')) { version = { name: line.slice(3), intro: '', days: [] }; versions.push(version); day = null; spot = null; continue; }
      if (line.startsWith('### ') && version) { day = { title: line.slice(4), schedule: '', notes: [], spots: [], extras: [] }; version.days.push(day); spot = null; continue; }
      if (line.startsWith('#### ') && day) { spot = { name: line.slice(5), details: [] }; day.spots.push(spot); continue; }
      if (!line || !version) continue;
      if (!day) { version.intro += (version.intro ? '\n' : '') + line; continue; }
      const sep = line.indexOf('｜');
      if (spot && sep > 0) { spot.details.push([line.slice(0, sep), line.slice(sep + 1)]); continue; }
      if (line.startsWith('時間安排｜')) { day.schedule = line.slice(5); continue; }
      if (line.includes('提醒｜') || line.includes('安排｜')) { day.notes.push(line); continue; }
      day.extras.push(line);
    }
    return { title, period, versions };
  }
  const plans = { first: parsePlan(TRIP_SOURCES.first), cycle: parsePlan(TRIP_SOURCES.cycle) };
  const imagePrefixes = { first: ['A01', 'A02', 'A03'], cycle: ['B01', 'B02', 'B03'] };
  function imageName(imageIndex) {
    return `${imagePrefixes[state.plan][state.version]}-${imageIndex}.webp`;
  }
  function imageSlot(dayIndex, dayTitle) {
    const file = imageName(dayIndex + 1);
    return `<figure class="image-placeholder"><img src="images/${file}" alt="${esc(dayTitle)}資訊圖表" onerror="this.remove()" /><p>第 ${dayIndex + 1} 天資訊圖表預留位置<small>請將圖片放入 images/${file}</small></p></figure>`;
  }
  function coverSlot() {
    const file = imageName(0);
    return `<figure class="image-placeholder"><img src="images/${file}" alt="旅遊主題資訊圖表" onerror="this.remove()" /><p>旅遊主題封面資訊圖表預留位置<small>請將圖片放入 images/${file}</small></p></figure>`;
  }
  function render() {
    const plan = plans[state.plan];
    document.body.dataset.plan = state.plan;
    document.body.dataset.version = state.version;
    if (state.version >= plan.versions.length) state.version = 0;
    const version = plan.versions[state.version];
    if (state.day >= version.days.length) state.day = 0;
    const day = version.days[state.day];
    document.querySelector('#plan-title').textContent = plan.title;
    document.querySelector('#plan-period').textContent = plan.period;
    document.querySelector('#plan-kicker').textContent = state.plan === 'first' ? '規劃一｜湖景與城市慢遊' : '規劃二｜向山落羽松環湖騎車';
    document.querySelector('#cover-slot').innerHTML = coverSlot();
    versionTabs.innerHTML = plan.versions.map((v, i) => `<button class="${i===state.version?'active':''}" type="button" data-version="${i}">${esc(v.name)}</button>`).join('');
    dayTabs.innerHTML = version.days.map((d, i) => `<button class="${i===state.day?'active':''}" type="button" data-day="${i}">${esc(d.title.replace('2026/','').replace('（',' （'))}</button>`).join('');
    const notes = day.notes.map(n => `<div class="day-note">${esc(n)}</div>`).join('');
    const spots = day.spots.map(s => `<section class="spot-card"><h4>${esc(s.name)}</h4><dl>${s.details.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></section>`).join('');
    dayContent.innerHTML = `${imageSlot(state.day, day.title)}<div class="day-heading"><span>行程日期</span><h3>${esc(day.title)}</h3></div>${day.schedule?`<div class="timeline">時間安排｜${esc(day.schedule)}</div>`:''}${notes}<div class="spot-grid">${spots}</div>${day.extras.length?`<div class="other-notes">${day.extras.map(esc).join('\n')}</div>`:''}`;
    planTabs.forEach(btn => { const active = btn.dataset.plan===state.plan; btn.classList.toggle('active',active); btn.setAttribute('aria-selected',active); });
    document.querySelector('#plan-panel').setAttribute('aria-labelledby', state.plan === 'first' ? 'plan-first' : 'plan-cycle');
  }
  planTabs.forEach(btn => btn.addEventListener('click', () => { state.plan=btn.dataset.plan; state.version=0; state.day=0; render(); }));
  versionTabs.addEventListener('click', e => { const btn=e.target.closest('[data-version]'); if(btn){state.version=Number(btn.dataset.version);state.day=0;render();} });
  dayTabs.addEventListener('click', e => { const btn=e.target.closest('[data-day]'); if(btn){state.day=Number(btn.dataset.day);render();} });
  render();
})();
