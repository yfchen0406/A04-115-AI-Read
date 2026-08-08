(() => {
  const thirdTab = document.querySelector('#plan-third');
  const standardPanel = document.querySelector('#plan-panel');
  const thirdPanel = document.querySelector('#third-plan-panel');
  const content = document.querySelector('#third-plan-content');
  const tabs = [...document.querySelectorAll('.plan-tab')];
  if (!thirdTab || !standardPanel || !thirdPanel || !content || typeof THIRD_PLAN_HTML === 'undefined') return;

  const esc = value => String(value || '').replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
  const imageFiles = {
    1: 'A00-1.webp', 2: 'A00-2.webp',
    3: 'A01-0.webp', 4: 'A01-1.webp', 5: 'A01-2.webp', 6: 'A01-3.webp', 7: 'A01-4.webp',
    8: 'A02-0.webp', 9: 'A02-1.webp', 10: 'A02-2.webp', 11: 'A02-3.webp', 12: 'A02-4.webp',
    13: 'A03-0.webp', 14: 'A03-1.webp', 15: 'A03-2.webp', 16: 'A03-3.webp', 17: 'A03-4.webp'
  };
  let currentStyle = 'q-version';
  const imagePath = number => `third-plan-images/${currentStyle}/${String(number).padStart(2, '0')}.webp`;
  content.innerHTML = THIRD_PLAN_HTML;
  const rawNodes = [...content.children];
  const versions = [];
  let currentVersion = null;

  rawNodes.forEach(node => {
    const isVersion = node.tagName === 'H2' && /^版本[一二三]｜/.test(node.textContent.trim());
    const isDay = node.tagName === 'H3' && /^Day\s*\d+/.test(node.textContent.trim());
    if (isVersion) {
      currentVersion = { name: node.textContent.trim().replace('版本三｜雲品慢遊・日月潭完整第一天版', '版本三｜雲品慢遊，日月潭完整版'), header: node, nodes: [node], days: [] };
      versions.push(currentVersion);
      return;
    }
    if (!currentVersion) return;
    currentVersion.nodes.push(node);
    if (isDay) currentVersion.days.push({ title: node.textContent.trim(), heading: node, nodes: [node] });
    else if (currentVersion.days.length) currentVersion.days.at(-1).nodes.push(node);
  });
  if (!versions.length) return;

  const fieldsFromTable = tableWrap => {
    const table = tableWrap?.querySelector('table');
    if (!table) return {};
    return Object.fromEntries([...table.rows].slice(1).map(row => [row.cells[0]?.textContent.trim(), row.cells[1]?.textContent.trim()]));
  };
  const scheduleRows = day => {
    const tableWrap = day.nodes.find(node => node.classList?.contains('third-table-wrap'));
    const table = tableWrap?.querySelector('table');
    return table ? [...table.rows].slice(1).map(row => ({
      time: row.cells[0]?.textContent.trim() || '',
      name: row.cells[1]?.textContent.trim() || '',
      focus: row.cells[2]?.textContent.trim() || ''
    })) : [];
  };
  const detailsForDay = day => {
    const detailMap = [];
    day.nodes.forEach((node, index) => {
      if (node.tagName !== 'P') return;
      const following = day.nodes.slice(index + 1).find(next => next.classList?.contains('third-table-wrap'));
      if (following) detailMap.push({ name: node.textContent.trim(), fields: fieldsFromTable(following) });
    });
    return detailMap;
  };
  versions.forEach(version => version.days.forEach(day => {
    const rows = scheduleRows(day);
    const details = detailsForDay(day);
    day.stops = rows.map(row => {
      const match = details.find(item => item.name.includes(row.name) || row.name.includes(item.name));
      const fields = match?.fields || {};
      return {
        name: row.name,
        time: fields['出發／離開時間'] || row.time,
        highlight: fields['最值得欣賞／品嚐'] || row.focus,
        description: fields['景點詳細介紹'] || row.focus,
        stay: fields['建議停留時間'] || '依當日行程安排',
        price: fields['票價／費用'] || '依現場或行程安排',
        reminder: fields['重要提醒'] || ''
      };
    });
  }));

  const navigator = document.createElement('section');
  navigator.className = 'third-journey-navigator';
  navigator.setAttribute('aria-label', '第三次規劃行程選擇');
  const renderHost = document.createElement('article');
  renderHost.className = 'day-content third-day-content';
  renderHost.setAttribute('aria-live', 'polite');
  const actionBar = document.createElement('nav');
  actionBar.className = 'third-journey-actions journey-actions';
  actionBar.setAttribute('aria-label', '當日快速操作');
  // 原始 A10 內容已用於建立每日行程；不再在頁尾重複呈現版本選擇與全文資料。
  content.replaceChildren(navigator, renderHost, actionBar);
  const styleSwitcher = document.createElement('nav');
  styleSwitcher.className = 'third-style-switcher';
  styleSwitcher.setAttribute('aria-label', '插圖風格切換');
  styleSwitcher.innerHTML = '<span>插圖風格</span><button type="button" data-style="q-version" class="active">Q版</button><button type="button" data-style="doraemon">多啦A夢</button><button type="button" data-style="totoro">龍貓</button>';
  content.insertBefore(styleSwitcher, navigator);
  document.body.dataset.thirdStyle = currentStyle;
  styleSwitcher.addEventListener('click', event => {
    const button = event.target.closest('[data-style]');
    if (!button) return;
    currentStyle = button.dataset.style;
    document.body.dataset.thirdStyle = currentStyle;
    styleSwitcher.querySelectorAll('[data-style]').forEach(item => item.classList.toggle('active', item === button));
    renderJourney();
  });

  const coverNumbers = [3, 4, 5];
  const dayNumbers = [[6, 7, 8, 9], [10, 11, 12, 13], [14, 15, 16, 17]];
  const imageSlot = (number, label) => `<figure class="third-image-slot third-image-asset" data-image-slot="${number}"><img src="${imagePath(number)}" alt="${esc(label)}資訊圖表" loading="eager"></figure>`;
  const commonMarkup = () => `${imageSlot(1, '共同固定條件與最佳化路線原則')}${imageSlot(2, '票價、用餐與重要資訊')}<section class="third-common-information"><h3>旅遊重要資訊</h3><p>四人同行、雲品住宿、12/14 雲品午餐後送詣超與阿嬤至台中高鐵，12/16 18:00 前返回台北。</p><p>路線採國 3 接國 6，日月潭完成遊船與纜車後順向前往台中；高美濕地安排於 12/15，避免北返日海線折返。</p><div class="third-table-wrap"><table class="third-table"><tbody><tr><td>雲品・丹彤（2F）</td><td>早餐 07:00–12:00；晚餐 17:00–19:00 或 19:30–21:30。早餐成人 NT$980+10%；晚餐成人 NT$1,680+10%。</td></tr><tr><td>日月潭纜車</td><td>全票 NT$420；65 歲以上 NT$330；營運與天候停駛依公告。</td></tr><tr><td>日月潭遊船</td><td>水社→玄光寺→伊達邵→水社；票種、末班與停航資訊於碼頭確認。</td></tr><tr><td>高美濕地</td><td>免費；出發前確認潮汐、日落時間、風速與木棧道管制。</td></tr></tbody></table></div></section>`;
  let state = { version: 0, day: 0 };

  const setTabs = active => tabs.forEach(tab => {
    const isActive = tab === active;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });
  const renderJourney = () => {
    if (state.version === 3) {
      renderHost.innerHTML = commonMarkup();
      navigator.innerHTML = `<div class="version-tabs third-version-tabs" role="tablist" aria-label="第三次規劃版本"><button type="button" role="tab" aria-selected="false" data-third-version-button="0">版本一｜夫妻日月潭騎車版</button><button type="button" role="tab" aria-selected="false" data-third-version-button="1">版本二｜遊船第二天備援版</button><button type="button" role="tab" aria-selected="false" data-third-version-button="2">版本三｜雲品慢遊・日月潭完整第一天版</button><button type="button" role="tab" aria-selected="true" class="active" data-third-common-button>旅遊重要資訊</button></div>`;
      actionBar.innerHTML = '<button type="button" data-third-top>回到旅遊重要資訊頂端</button>';
      return;
    }
    const version = versions[state.version];
    if (state.day >= version.days.length) state.day = 0;
    const day = version.days[state.day];
    const focus = day.stops.slice(0, 3).map(stop => stop.name).filter(Boolean).join('、') || '依當日行程安排';
    const travel = day.stops.find(stop => stop.reminder)?.reminder || '依當日行程與天候彈性調整';
    const stops = day.stops.map((stop, index) => {
      const next = day.stops[index + 1]?.name ? `下一站：${day.stops[index + 1].name}` : '完成今日行程後，保留彈性休息時間';
      return `<li class="journey-stop"><div class="journey-stop-head"><h4>${esc(stop.name)}</h4><span class="time-chip">${esc(stop.time)}</span></div><p class="stop-highlight">${esc(stop.highlight)}</p><p class="stop-next">${esc(next)}</p><details><summary>查看完整景點資料</summary><dl><div><dt>景點詳細介紹</dt><dd>${esc(stop.description)}</dd></div><div><dt>建議停留時間</dt><dd>${esc(stop.stay)}</dd></div><div><dt>最值得欣賞／品嚐</dt><dd>${esc(stop.highlight)}</dd></div><div><dt>票價／費用</dt><dd>${esc(stop.price)}</dd></div>${stop.reminder ? `<div><dt>重要提醒</dt><dd>${esc(stop.reminder)}</dd></div>` : ''}</dl></details></li>`;
    }).join('');
    renderHost.innerHTML = `${imageSlot(coverNumbers[state.version], version.name)}${imageSlot(dayNumbers[state.version][state.day], day.title)}<div class="day-heading"><span>行程日期</span><h3>${esc(day.title)}</h3></div><section class="journey-summary" aria-label="今日關鍵資訊"><div class="summary-item"><b>今日出發與範圍</b><span>${esc(day.stops[0]?.time || '依當日行程安排')}</span></div><div class="summary-item"><b>優先查閱</b><span>${esc(focus)}</span></div><div class="summary-item"><b>交通提醒</b><span>${esc(travel)}</span></div></section><div class="timeline">時間安排｜${esc(day.stops.map(stop => `${stop.time} ${stop.name}`).join('；'))}</div><ol class="journey-timeline">${stops}</ol>`;
    navigator.innerHTML = `<div class="version-tabs third-version-tabs" role="tablist" aria-label="第三次規劃版本">${versions.map((item, index) => `<button type="button" role="tab" aria-selected="${index === state.version}" class="${index === state.version ? 'active' : ''}" data-third-version-button="${index}">${esc(item.name)}</button>`).join('')}</div><div class="day-tabs third-day-tabs" role="tablist" aria-label="當日行程">${version.days.map((item, index) => `<button type="button" role="tab" aria-selected="${index === state.day}" class="${index === state.day ? 'active' : ''}" data-third-day-button="${index}">${esc(item.title.replace(/^Day\s*\d+｜/, ''))}</button>`).join('')}</div>`;
    navigator.querySelector('.version-tabs').insertAdjacentHTML('beforeend', '<button type="button" role="tab" aria-selected="false" data-third-common-button>旅遊重要資訊</button>');
    actionBar.innerHTML = `<button type="button" data-third-prev ${state.day === 0 ? 'disabled' : ''}>上一天</button><button type="button" data-third-next ${state.day === version.days.length - 1 ? 'disabled' : ''}>下一天</button><button type="button" data-third-top>回到當日頂端</button>`;
  };
  navigator.addEventListener('click', event => {
    const commonButton = event.target.closest('[data-third-common-button]');
    const versionButton = event.target.closest('[data-third-version-button]');
    const dayButton = event.target.closest('[data-third-day-button]');
    if (commonButton) { state = { version: 3, day: 0 }; renderJourney(); }
    if (versionButton) { state = { version: Number(versionButton.dataset.thirdVersionButton), day: 0 }; renderJourney(); }
    if (dayButton) { state.day = Number(dayButton.dataset.thirdDayButton); renderJourney(); }
  });
  actionBar.addEventListener('click', event => {
    if (event.target.closest('[data-third-prev]')) { state.day = Math.max(0, state.day - 1); renderJourney(); }
    if (event.target.closest('[data-third-next]')) { state.day = Math.min(versions[state.version].days.length - 1, state.day + 1); renderJourney(); }
    if (event.target.closest('[data-third-top]')) navigator.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  renderJourney();

  thirdTab.addEventListener('click', event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    standardPanel.hidden = true;
    thirdPanel.hidden = false;
    setTabs(thirdTab);
    thirdPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, true);
  tabs.filter(tab => tab !== thirdTab).forEach(tab => tab.addEventListener('click', () => {
    thirdPanel.hidden = true;
    standardPanel.hidden = false;
  }, true));
})();
