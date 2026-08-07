(() => {
  const state = { plan: 'first', version: 0, day: 0 };
  const planTabs = document.querySelectorAll('.plan-tab');
  const versionTabs = document.querySelector('#version-tabs');
  const dayTabs = document.querySelector('#day-tabs');
  const dayContent = document.querySelector('#day-content');
  const lightbox = document.querySelector('#image-lightbox');
  const lightboxImage = document.querySelector('#lightbox-image');
  const lightboxCaption = document.querySelector('#lightbox-caption');
  let lightboxIndex = 0;
  let previousFocus = null;
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
  const galleryPlans = {
    nantou1: { title: '南投推薦景點－1', files: ['C01-1.webp','C02-1.webp','C02-2.webp','C02-3.webp','C03-1.webp'] },
    nantou2: { title: '南投推薦景點－2', files: ['D01-1.webp','D02-1.webp','D02-2.webp','D02-3.webp','D03-1.webp'] }
  };
  const isGallery = () => Boolean(galleryPlans[state.plan]);
  function imageInfo(imageIndex) {
    if (isGallery()) {
      const file = galleryPlans[state.plan].files[imageIndex];
      return { src: `P01-journey/${file}`, label: file.replace(/\.webp$/i, '') };
    }
    const file = `${imagePrefixes[state.plan][state.version]}-${imageIndex}.webp`;
    return { src: `images/${file}`, label: imageIndex === 0 ? '旅遊主題封面' : `第 ${imageIndex} 天` };
  }
  function imageName(imageIndex) {
    return imageInfo(imageIndex).src;
  }
  function imageSlot(dayIndex, dayTitle) {
    const image = imageInfo(dayIndex + 1);
    return `<figure class="image-placeholder"><img class="expandable-image" src="${image.src}" alt="${esc(dayTitle)}資訊圖表" data-image-index="${dayIndex + 1}" onerror="this.remove()" /><p>第 ${dayIndex + 1} 天資訊圖表預留位置<small>請將圖片放入 ${image.src}</small></p></figure>`;
  }
  function coverSlot() {
    const image = imageInfo(0);
    return `<figure class="image-placeholder"><img class="expandable-image" src="${image.src}" alt="旅遊主題資訊圖表" data-image-index="0" onerror="this.remove()" /><p>旅遊主題封面資訊圖表預留位置<small>請將圖片放入 ${image.src}</small></p></figure>`;
  }
  function showLightbox(index) {
    lightboxIndex = (index + 5) % 5;
    const image = imageInfo(lightboxIndex);
    const isCover = lightboxIndex === 0;
    const versionName = isGallery() ? galleryPlans[state.plan].title : plans[state.plan].versions[state.version].name;
    lightboxImage.src = image.src;
    lightboxImage.alt = `${versionName}${isGallery() ? image.label : (isCover ? '旅遊主題封面' : `第 ${lightboxIndex} 天資訊圖表`)}`;
    lightboxCaption.textContent = isGallery() ? '' : `${versionName}｜${isCover ? '旅遊主題封面' : `第 ${lightboxIndex} 天`}`;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    lightbox.querySelector('.lightbox-close').focus();
  }
  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    lightboxImage.removeAttribute('src');
    if (previousFocus) previousFocus.focus();
  }
  function render() {
    document.body.dataset.plan = state.plan;
    document.body.dataset.version = state.version;
    if (isGallery()) {
      const gallery = galleryPlans[state.plan];
      document.querySelector('#plan-title').textContent = gallery.title;
      document.querySelector('#plan-period').textContent = '點擊圖片可放大滿版觀看；可使用左右按鈕或鍵盤方向鍵快速切換。';
      document.querySelector('#plan-kicker').textContent = 'P01－最初規劃旅遊地點';
      document.querySelector('#cover-slot').hidden = true;
      versionTabs.hidden = true;
      dayTabs.hidden = true;
      versionTabs.innerHTML = '';
      dayTabs.innerHTML = '';
      dayContent.innerHTML = `<div class="recommend-gallery">${gallery.files.map((file, index) => `<figure class="gallery-card"><img class="expandable-image" src="P01-journey/${file}" alt="南投推薦景點圖片 ${index + 1}" data-image-index="${index}" /></figure>`).join('')}</div>`;
      planTabs.forEach(btn => { const active = btn.dataset.plan===state.plan; btn.classList.toggle('active',active); btn.setAttribute('aria-selected',active); });
      document.querySelector('#plan-panel').setAttribute('aria-labelledby', `plan-${state.plan}`);
      return;
    }
    const plan = plans[state.plan];
    if (state.version >= plan.versions.length) state.version = 0;
    const version = plan.versions[state.version];
    if (state.day >= version.days.length) state.day = 0;
    const day = version.days[state.day];
    document.querySelector('#plan-title').textContent = plan.title;
    document.querySelector('#plan-period').textContent = plan.period;
    document.querySelector('#plan-kicker').textContent = state.plan === 'first' ? '規劃一｜湖景與城市慢遊' : '規劃二｜向山落羽松環湖騎車';
    document.querySelector('#cover-slot').innerHTML = coverSlot();
    document.querySelector('#cover-slot').hidden = false;
    versionTabs.hidden = false;
    dayTabs.hidden = false;
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
  document.addEventListener('click', e => {
    const image = e.target.closest('.expandable-image');
    if (image) { previousFocus = image; showLightbox(Number(image.dataset.imageIndex)); return; }
    if (e.target.closest('[data-lightbox-close]')) { closeLightbox(); return; }
    if (e.target.closest('[data-lightbox-prev]')) { showLightbox(lightboxIndex - 1); return; }
    if (e.target.closest('[data-lightbox-next]')) { showLightbox(lightboxIndex + 1); }
  });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') { e.preventDefault(); closeLightbox(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); showLightbox(lightboxIndex - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); showLightbox(lightboxIndex + 1); }
  });
  render();
})();
