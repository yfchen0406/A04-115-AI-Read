(() => {
  const state = { plan: 'first', version: 0, day: 0 };
  const planTabs = document.querySelectorAll('.plan-tab');
  const versionTabs = document.querySelector('#version-tabs');
  const dayTabs = document.querySelector('#day-tabs');
  const dayContent = document.querySelector('#day-content');
  const lightbox = document.querySelector('#image-lightbox');
  const lightboxImage = document.querySelector('#lightbox-image');
  const lightboxCaption = document.querySelector('#lightbox-caption');
  const lightboxCount = document.querySelector('#lightbox-count');
  const breadcrumb = document.querySelector('#journey-breadcrumb');
  const journeyActions = document.querySelector('#journey-actions');
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
  const verifiedInfo = {
    '向山遊客中心': '官方補充：地址為南投縣魚池鄉中山路599號，常態 09:00–17:00；停車位有限，建議早到。',
    '水社碼頭': '官方補充：水社是環潭交通轉運點，可購買遊湖船票、搭遊湖巴士與租借自行車。',
    '日月潭遊湖': '官方補充：航線為水社→玄光寺→伊達邵→水社；常態首班 09:00、末班 17:00，約每 15–20 分鐘一班。',
    '向山落羽松': '行前提醒：樹色與落葉狀況受天候影響，12月中旬僅作賞景期待，不保證全紅。',
    '水蛙頭步道': '行前提醒：戶外步道請留意雨後濕滑；以防滑鞋底與白天行走為原則。'
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
    return `<figure class="image-placeholder"><img class="expandable-image" src="${image.src}" alt="${esc(dayTitle)}資訊圖表" data-image-index="${dayIndex + 1}" tabindex="0" role="button" aria-label="放大查看${esc(dayTitle)}資訊圖表" loading="lazy" onerror="this.remove()" /><p>第 ${dayIndex + 1} 天資訊圖表預留位置<small>請將圖片放入 ${image.src}</small></p></figure>`;
  }
  function coverSlot() {
    const image = imageInfo(0);
    return `<figure class="image-placeholder"><img class="expandable-image" src="${image.src}" alt="旅遊主題資訊圖表" data-image-index="0" tabindex="0" role="button" aria-label="放大查看旅遊主題資訊圖表" loading="lazy" onerror="this.remove()" /><p>旅遊主題封面資訊圖表預留位置<small>請將圖片放入 ${image.src}</small></p></figure>`;
  }
  function showLightbox(index) {
    lightboxIndex = (index + 5) % 5;
    const image = imageInfo(lightboxIndex);
    const isCover = lightboxIndex === 0;
    const versionName = isGallery() ? galleryPlans[state.plan].title : plans[state.plan].versions[state.version].name;
    lightboxImage.src = image.src;
    lightboxImage.alt = `${versionName}${isGallery() ? image.label : (isCover ? '旅遊主題封面' : `第 ${lightboxIndex} 天資訊圖表`)}`;
    lightboxCaption.textContent = isGallery() ? '' : `${versionName}｜${isCover ? '旅遊主題封面' : `第 ${lightboxIndex} 天`}`;
    lightboxCount.textContent = `第 ${lightboxIndex + 1}／5 張`;
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
      breadcrumb.innerHTML = `<span>旅遊靈感庫</span><span>${gallery.title}</span>`;
      journeyActions.hidden = true;
      document.querySelector('#cover-slot').hidden = true;
      versionTabs.hidden = true;
      dayTabs.hidden = true;
      versionTabs.innerHTML = '';
      dayTabs.innerHTML = '';
      dayContent.innerHTML = `<div class="recommend-gallery">${gallery.files.map((file, index) => `<figure class="gallery-card"><img class="expandable-image" src="P01-journey/${file}" alt="南投推薦景點圖片 ${index + 1}" data-image-index="${index}" tabindex="0" role="button" aria-label="放大查看南投推薦景點圖片 ${index + 1}" loading="lazy" /></figure>`).join('')}</div>`;
      planTabs.forEach(btn => { const active = btn.dataset.plan===state.plan; btn.classList.toggle('active',active); btn.setAttribute('aria-selected',active); });
      document.querySelector('#plan-panel').setAttribute('aria-labelledby', `plan-${state.plan}`);
      return;
    }
    const plan = plans[state.plan];
    journeyActions.hidden = false;
    if (state.version >= plan.versions.length) state.version = 0;
    const version = plan.versions[state.version];
    if (state.day >= version.days.length) state.day = 0;
    const day = version.days[state.day];
    breadcrumb.innerHTML = `<span>${state.plan === 'first' ? '第一次規劃' : '第二次規劃'}</span><span>${esc(version.name)}</span><span>${esc(day.title.split('｜')[0])}</span>`;
    document.querySelector('#plan-title').textContent = plan.title;
    document.querySelector('#plan-period').textContent = plan.period;
    document.querySelector('#plan-kicker').textContent = state.plan === 'first' ? '規劃一｜湖景與城市慢遊' : '規劃二｜向山落羽松環湖騎車';
    document.querySelector('#cover-slot').innerHTML = coverSlot();
    document.querySelector('#cover-slot').hidden = false;
    versionTabs.hidden = false;
    dayTabs.hidden = false;
    versionTabs.innerHTML = plan.versions.map((v, i) => `<button class="${i===state.version?'active':''}" type="button" data-version="${i}">${esc(v.name)}</button>`).join('');
    dayTabs.innerHTML = version.days.map((d, i) => `<button class="${i===state.day?'active':''}" type="button" data-day="${i}">${esc(d.title.replace('2026/','').replace('（',' （'))}</button>`).join('');
    const arrival = day.schedule ? day.schedule.split('；')[0].replace(/^\d{2}:\d{2}\s*/, '') : '依當日行程安排';
    const focus = day.spots.slice(0, 3).map(s => s.name).join('、');
    const travel = state.plan === 'cycle' && state.day === 1 ? '水社租車與向山自行車道' : state.day === 1 ? '遊船、碼頭與湖區交通' : '自駕與景點間緩衝';
    const summary = `<section class="journey-summary" aria-label="今日關鍵資訊"><div class="summary-item"><b>今日出發與範圍</b><span>${esc(arrival)}</span></div><div class="summary-item"><b>優先查閱</b><span>${esc(focus)}</span></div><div class="summary-item"><b>交通提醒</b><span>${esc(travel)}</span></div></section>`;
    const notes = day.notes.map(n => `<div class="day-note">${esc(n)}</div>`).join('');
    const stops = day.spots.map((s, i) => {
      const time = s.details.find(([k]) => k === '預估到離時間')?.[1] || '依每日行程安排';
      const highlight = s.details.find(([k]) => k === '最值得欣賞／品嚐')?.[1] || s.details.find(([k]) => k === '詳細介紹')?.[1] || '';
      const next = day.spots[i + 1] ? `下一站：${day.spots[i + 1].name}` : '完成今日行程後，保留彈性休息時間';
      const full = s.details.filter(([k]) => k !== '預估到離時間' && k !== '最值得欣賞／品嚐');
      return `<li class="journey-stop"><div class="journey-stop-head"><h4>${esc(s.name)}</h4><span class="time-chip">${esc(time.replace('（依原行程與建議停留推估）',''))}</span></div><p class="stop-highlight">${esc(highlight)}</p><p class="stop-next">${esc(next)}</p><details><summary>查看完整景點資料</summary><dl>${full.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>${verifiedInfo[s.name] ? `<p class="official-note">${esc(verifiedInfo[s.name])} 出發前請再確認官方公告。</p>` : ''}</details></li>`;
    }).join('');
    dayContent.innerHTML = `${imageSlot(state.day, day.title)}<div class="day-heading"><span>行程日期</span><h3>${esc(day.title)}</h3></div>${summary}${day.schedule?`<div class="timeline">時間安排｜${esc(day.schedule)}</div>`:''}${notes}<ol class="journey-timeline">${stops}</ol>${day.extras.length?`<div class="other-notes">${day.extras.map(esc).join('\n')}</div>`:''}`;
    journeyActions.innerHTML = `<button type="button" data-prev-day ${state.day===0?'disabled':''}>上一天</button><button type="button" data-next-day ${state.day===version.days.length-1?'disabled':''}>下一天</button><button type="button" data-top>回到當日頂端</button>`;
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
    const action = e.target.closest('[data-prev-day],[data-next-day],[data-top]');
    if (action) {
      if (action.matches('[data-prev-day]')) { state.day=Math.max(0,state.day-1); render(); }
      if (action.matches('[data-next-day]')) { state.day=Math.min(plans[state.plan].versions[state.version].days.length-1,state.day+1); render(); }
      if (action.matches('[data-top]')) document.querySelector('#plan-panel').scrollIntoView({ behavior:'smooth', block:'start' });
    }
  });
  document.addEventListener('keydown', e => {
    const image = e.target.closest?.('.expandable-image');
    if (image && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); previousFocus=image; showLightbox(Number(image.dataset.imageIndex)); return; }
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') { e.preventDefault(); closeLightbox(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); showLightbox(lightboxIndex - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); showLightbox(lightboxIndex + 1); }
    if (e.key === 'Tab') {
      const focusable = [...lightbox.querySelectorAll('button:not([disabled])')];
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  function tabKeyboard(e, selector, callback) {
    const items = [...document.querySelectorAll(selector)];
    const current = items.indexOf(e.target);
    if (current < 0) return;
    let next = null;
    if (e.key === 'ArrowRight') next = (current + 1) % items.length;
    if (e.key === 'ArrowLeft') next = (current - 1 + items.length) % items.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = items.length - 1;
    if (next !== null) { e.preventDefault(); items[next].focus(); callback(items[next]); }
  }
  planTabs.forEach(btn => btn.addEventListener('keydown', e => tabKeyboard(e,'.plan-tab', target => { state.plan=target.dataset.plan; state.version=0; state.day=0; render(); })));
  versionTabs.addEventListener('keydown', e => tabKeyboard(e,'#version-tabs button', target => { state.version=Number(target.dataset.version); state.day=0; render(); }));
  dayTabs.addEventListener('keydown', e => tabKeyboard(e,'#day-tabs button', target => { state.day=Number(target.dataset.day); render(); }));
  if (!document.querySelector('#plan-third')?.classList.contains('active')) render();
})();
