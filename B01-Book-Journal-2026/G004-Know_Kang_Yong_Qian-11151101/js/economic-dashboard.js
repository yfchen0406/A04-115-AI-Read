(() => {
  'use strict';
  const root = document.getElementById('economic-dashboard');
  if (!root) return;
  const status = root.querySelector('[data-ed-status]');
  const chartNode = root.querySelector('[data-ed-chart]');
  const state = { metric: 'gdp', mode: 'line', fiscalView:'perCapita', year: 1750, selected: new Set(), pair: { a: '', b: '' }, speed: 1, timer: null, chart: null, data: null, extensions:[], meta: null, sources: null, sourceDetails: null, redraw: 0, resizeObserver: null };
  const $ = selector => root.querySelector(selector);
  const fmt = value => Number(value).toLocaleString('zh-TW', { maximumFractionDigits: 2 });
  const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[char]);
  const sourceLabel = key => state.sources[key] ? state.sources[key].name : key;
  const metricMeta = () => state.metric==='fiscal'&&state.fiscalView==='total'?state.meta.indicators.fiscal.totalSeries:state.meta.indicators[state.metric];
  const regions = [
    { id:'qing', label:'清朝／中國', matches:name=>name.includes('清朝')||name.includes('中國') },
    { id:'britain', label:'英國（注意英格蘭／大不列顛口徑）', matches:name=>name.includes('英國')||name.includes('英格蘭')||name==='United Kingdom' },
    { id:'france', label:'法國', matches:name=>name.includes('法國')||name==='France' },
    { id:'netherlands', label:'荷蘭', matches:name=>name.includes('荷蘭')||name==='Netherlands' },
    { id:'spain', label:'西班牙／烏拉圭旗國類別', matches:name=>name.includes('西班牙')||name==='Spain' },
    { id:'russia', label:'俄羅斯', matches:name=>name.includes('俄羅斯')||name==='Russia' },
    { id:'america', label:'北美／美洲（按資料列定義）', matches:name=>name.includes('北美')||name.includes('殖民地')||name==='美國'||name==='United States' }
  ];
  const events = [
    { year: 1661, label: '康熙即位', region: '清朝', detail: '康熙帝即位，清初政權進入新的統治階段。這是本網站經濟比較時間框架的起點。' },
    { year: 1683, label: '清廷統一臺灣', region: '清朝', detail: '清軍攻取臺灣，清廷將統治範圍延伸至臺灣。此事件作為政治疆域背景，不直接代表經濟數值變化。' },
    { year: 1688, label: '英國光榮革命', region: '英國', detail: '英格蘭發生政權更替，後續確立議會與君主權力安排。事件背景與財政制度史相關，圖表不作單一因果判讀。' },
    { year: 1689, label: '《尼布楚條約》', region: '清朝／俄羅斯', detail: '清與俄羅斯簽訂邊界條約，成為兩國外交與邊疆史的重要節點。' },
    { year: 1700, label: '世紀之交', region: '歐洲／美洲', detail: '本圖所列人均 GDP 研究包含 1700 年錨點；這是跨研究資料標記，不是一個單獨的歷史事件。' },
    { year: 1707, label: '英格蘭與蘇格蘭合併', region: '英國', detail: '《聯合法案》建立大不列顛王國。解讀人口與經濟資料時須留意英格蘭、大不列顛等領土口徑差異。' },
    { year: 1713, label: '烏特勒支和約', region: '歐洲／美洲', detail: '西班牙王位繼承戰爭後簽訂的一系列條約重整歐洲權力與殖民權益。' },
    { year: 1721, label: '俄羅斯帝國成立', region: '俄羅斯', detail: '彼得一世改革後俄羅斯改稱帝國，國家制度與對外擴張進入新階段。' },
    { year: 1722, label: '雍正即位', region: '清朝', detail: '雍正帝即位，推動財政整頓、密摺制度與軍機處等政治制度變化。' },
    { year: 1738, label: '貿易區間中心年', region: '大西洋世界', detail: 'SlaveVoyages 的 1726–1750 年區間以 1738 作代表中心年。此系列記錄被強迫登船人數估計，不是商品貿易額。' },
    { year: 1750, label: 'GDP 估計錨點', region: '跨國', detail: '多國人均 GDP 研究列有 1750 年估計錨點。不同國家數值來自同一研究表，但仍具歷史重建不確定性。' },
    { year: 1757, label: '廣州一口通商', region: '清朝', detail: '清廷限制西洋商船主要經廣州進行貿易。此為制度脈絡，不能將其直接等同於清朝全部對外貿易。' },
    { year: 1763, label: '七年戰爭結束', region: '歐洲／美洲', detail: '巴黎和約結束七年戰爭，歐洲列強在北美及其他地區的殖民勢力重新調整。' },
    { year: 1765, label: '西班牙加勒比貿易改革', region: '西班牙', detail: '敕令允許古巴、聖多明各、波多黎各、瑪格麗塔與特立尼達等加勒比島嶼，與指定西班牙港口直接貿易；改革分階段推進，不代表全面自由貿易。', source: { label: 'Cambridge《西班牙美洲帝國經濟史》第9章', url: 'https://www.cambridge.org/core/books/economic-aspects-of-spanish-imperialism-in-america-14921810/free-trade-and-the-peninsular-economy/936CC1F946340BA68FBDD43AFD26BCF7' } },
    { year: 1769, label: '瓦特蒸汽機專利', region: '英國', detail: '詹姆斯・瓦特取得蒸汽機改良專利，是英國工業化技術史常見節點；專利年份不代表技術立即普及。' },
    { year: 1772, label: '阿姆斯特丹信貸危機', region: '荷蘭', detail: '1772–1773年阿姆斯特丹信貸市場出現危機，與英荷金融連結及擔保融資風險有關；事件標記不代表本圖任何單筆數值的變化原因。', source: { label: 'Berre & Kosmetatos, Economic History Review', url: 'https://onlinelibrary.wiley.com/doi/full/10.1111/ehr.13345' } },
    { year: 1776, label: '美國獨立宣言', region: '北美殖民地', detail: '北美十三殖民地宣布獨立。獨立前後人口及經濟數據的政治疆域必須分開處理。' },
    { year: 1783, label: '巴黎和約', region: '北美／英國', detail: '巴黎和約承認美國獨立，改變北美殖民地的政治疆域。' },
    { year: 1789, label: '法國大革命', region: '法國', detail: '法國革命爆發並引發重大政治制度變革。事件標記供歷史定位，不表示它直接造成某筆財政數據變動。' },
    { year: 1795, label: '巴達維亞共和國成立', region: '荷蘭', detail: '荷蘭愛國者在法軍進入後建立巴達維亞共和國，荷蘭共和國的舊政治體制告終。', source: { label: '荷蘭國家博物館 Rijksmuseum', url: 'https://www.rijksmuseum.nl/en/collection/node/Batavian-Republic--95fc6c7312c04ee4a38083f2a4626258' } },
    { year: 1796, label: '乾隆禪位', region: '清朝', detail: '乾隆帝禪位予嘉慶帝，仍以太上皇身分掌握重要權力。' },
    { year: 1799, label: '乾隆逝世', region: '清朝', detail: '乾隆帝逝世，清代盛世時期的政治脈絡告一段落。'
    }
  ];
  const availableRows = () => state.metric==='fiscal'&&state.fiscalView==='total'?state.extensions.filter(row=>row.metric==='fiscal_total').map(row=>({...row,metric:'fiscal'})):state.metric==='population'?state.data.observations.filter(row=>row.metric==='population').concat(state.extensions.filter(row=>row.metric==='population')):state.data.observations.filter(row => row.metric === state.metric);
  const availableCountries = () => [...new Set(availableRows().map(row => row.country))];
  function currentYearRows() {
    return availableRows().filter(row => row.year <= state.year && state.selected.has(row.country));
  }
  function setStatus(message) { if (status) status.textContent = message; }
  function publishYear() {
    const worldYear=document.getElementById('worldYear');
    if(worldYear&&Number(worldYear.value)!==state.year){worldYear.value=state.year;worldYear.dispatchEvent(new Event('input',{bubbles:true}));}
  }
  function selectEvent(event) {
    state.year=event.year; $('[data-ed-year]').value=state.year; $('[data-ed-jump]').value=state.year; publishYear();
    const source=event.source?`<br><a href="${esc(event.source.url)}" target="_blank" rel="noopener">史料／研究來源：${esc(event.source.label)}</a>`:'';
    $('[data-ed-event-detail]').innerHTML=`<strong>${event.year}｜${esc(event.label)}｜${esc(event.region)}</strong><br>${esc(event.detail)}${source}<br><span class="ed-note">事件標記協助定位年代，不代表對圖表數值的因果解釋。</span>`;
    $('[data-ed-event-detail]').closest('details').open=true; render(); setStatus(`${event.year} 年｜${event.label}`);
  }
  function buildEventList() {
    const host=$('[data-ed-event-list]');
    host.innerHTML=events.map((event,index)=>`<button type="button" data-ed-event="${index}">${event.year}｜${esc(event.region)}：${esc(event.label)}</button>`).join('');
    host.onclick=event=>{const button=event.target.closest('[data-ed-event]');if(button)selectEvent(events[Number(button.dataset.edEvent)]);};
  }
  function buildControls() {
    const tabs = $('[data-ed-metrics]');
    tabs.innerHTML = Object.entries(state.meta.indicators).map(([key, meta]) => `<button type="button" data-ed-metric="${key}" aria-pressed="${key === state.metric}">${esc(meta.label)}</button>`).join('');
    state.selected = new Set(availableCountries());
    const countries = $('[data-ed-countries]');
    countries.innerHTML = regions.map(region=>{const members=availableCountries().filter(region.matches);const checked=members.length&&members.some(name=>state.selected.has(name));const missing=members.length?'':`（本指標缺值：${esc(region.label)}）`;return `<label title="${members.length?`包含：${esc(members.join('、'))}`:'目前資料庫無同口徑觀測'}"><input type="checkbox" data-ed-country="${region.id}" data-members="${encodeURIComponent(JSON.stringify(members))}" ${checked?'checked':''} ${members.length?'':'disabled'}> ${esc(region.label)}${missing}</label>`;}).join('');
    if (!availableCountries().includes(state.pair.a)) state.pair.a = availableCountries()[0] || '';
    if (!availableCountries().includes(state.pair.b) || state.pair.a === state.pair.b) state.pair.b = availableCountries()[1] || '';
    for (const side of ['a','b']) {
      const select = $(`[data-ed-pair="${side}"]`);
      select.innerHTML = availableCountries().map(name => `<option value="${esc(name)}" ${name === state.pair[side] ? 'selected' : ''}>${esc(name)}</option>`).join('');
      select.onchange = event => { state.pair[side] = event.target.value; if(state.pair.a===state.pair.b){const other=availableCountries().find(name=>name!==state.pair[side]);if(other){const opposite=side==='a'?'b':'a';state.pair[opposite]=other;$(`[data-ed-pair="${opposite}"]`).value=other;}} render(); };
    }
    root.querySelectorAll('[data-ed-mode]').forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.edMode === state.mode)); button.onclick = () => { state.mode = button.dataset.edMode; render(); }; });
    $('[data-ed-fiscal-views]').hidden=state.metric!=='fiscal';
    root.querySelectorAll('[data-ed-fiscal-view]').forEach(button=>{button.setAttribute('aria-pressed',String(button.dataset.edFiscalView===state.fiscalView));button.onclick=()=>{state.fiscalView=button.dataset.edFiscalView;buildControls();buildSources();render();};});
    $('[data-ed-year]').oninput = event => { state.year = Number(event.target.value); $('[data-ed-jump]').value=state.year; publishYear(); scheduleRender(); };
    $('[data-ed-metrics]').onclick = event => {
      const button = event.target.closest('[data-ed-metric]'); if (!button) return;
      state.metric = button.dataset.edMetric; state.selected = new Set(availableCountries()); buildControls(); render();
    };
    $('[data-ed-countries]').onchange = event => {
      const input = event.target.closest('[data-ed-country]'); if (!input) return;
      const members=JSON.parse(decodeURIComponent(input.dataset.members||'%5B%5D'));
      members.forEach(name=>input.checked?state.selected.add(name):state.selected.delete(name));
      render();
    };
    $('[data-ed-reset]').onclick = () => { state.selected = new Set(availableCountries()); buildControls(); render(); };
    $('[data-ed-play]').onclick = togglePlay;
    $('[data-ed-replay]').onclick = () => { stopPlay(); state.year=Number(state.meta.period[0]); $('[data-ed-year]').value=state.year; $('[data-ed-jump]').value=state.year; publishYear(); render(); startPlay(); };
    $('[data-ed-speed]').onchange = event => { state.speed = Number(event.target.value); if (state.timer) { stopPlay(); startPlay(); } };
    $('[data-ed-jump-button]').onclick = () => { const input=$('[data-ed-jump]'); const year=Number(input.value); if(Number.isInteger(year)&&year>=1661&&year<=1799){state.year=year;$('[data-ed-year]').value=year;publishYear();render();setStatus(`年份已移至 ${year} 年。`);}else{input.setCustomValidity('請輸入1661至1799之間的整數年份。');input.reportValidity();input.setCustomValidity('');} };
    root.querySelectorAll('[data-ed-select]').forEach(button=>{button.onclick=()=>{const names=availableCountries();if(button.dataset.edSelect==='all')state.selected=new Set(names);if(button.dataset.edSelect==='clear')state.selected.clear();if(button.dataset.edSelect==='single'){const first=[...state.selected][0]||names[0];state.selected=new Set(first?[first]:[]);state.mode='line';}if(button.dataset.edSelect==='multi')state.mode='line';if(button.dataset.edSelect==='compare')state.mode='compare';$('[data-ed-countries]').querySelectorAll('[data-ed-country]').forEach(input=>{const members=JSON.parse(decodeURIComponent(input.dataset.members||'%5B%5D'));input.checked=members.some(name=>state.selected.has(name));});render();};});
    $('[data-ed-era]').onclick = event => {
      const button = event.target.closest('[data-year]'); if (!button) return;
      state.year = Number(button.dataset.year); $('[data-ed-year]').value = state.year; publishYear(); render();
    };
    root.querySelectorAll('[data-ed-year]').forEach(input => { input.min = state.meta.period[0]; input.max = state.meta.period[1]; });
  }
  function buildSources() {
    const host = $('[data-ed-sources]');
    const indicatorCards = Object.entries(state.meta.indicators).map(([key, meta]) => {
      const links = meta.sourceKeys.map(sourceKey => {
        const source = state.sources[sourceKey];
        const details = state.sourceDetails[sourceKey];
        const info = details ? `<div class="ed-note">${esc(details.author)}；${esc(details.year)}。版本：${esc(details.version)}。地理：${esc(details.geography)}。範圍：${esc(details.coverage)}。方法：${esc(details.method)}</div>` : '';
        const limitation = details ? details.limitations : meta.limitation;
        return source ? `<article class="ed-source"><a href="${esc(details ? details.url : source.url)}" target="_blank" rel="noopener">${esc(details ? details.title : source.name)}</a>${info}<div class="ed-note">資料限制：${esc(limitation)}</div></article>` : `<span>${esc(sourceKey)}</span>`;
      }).join('、');
      const unavailable=meta.unavailableRegions&&meta.unavailableRegions.length?`目前缺值：${meta.unavailableRegions.map(esc).join('、')}。缺值不以零或推估線補上。`:'目前列出的資料地區均以原觀測顯示。';
      return `<article class="ed-source"><strong>${esc(meta.label)}｜${esc(meta.unit)}</strong><div class="ed-note">${esc(meta.description)}</div><div>${links}</div><div class="ed-note">${esc(unavailable)}</div><div class="ed-note">指標限制：${esc(meta.limitation)}</div></article>`;
    }).join('');
    const references=(state.sourceDetails.researchReferences||[]).map(reference=>`<article class="ed-source"><strong>${esc(reference.title)}</strong><div>${esc(reference.authors)}；${esc(reference.year)}；${esc(reference.version)}</div><a href="${esc(reference.url)}" target="_blank" rel="noopener">原始研究／資料頁</a><div class="ed-note">${esc(reference.status)}：${esc(reference.reason)}</div></article>`).join('');
    const fiscalTotal=state.sourceDetails.fiscal;
    const fiscalTotalCard=state.metric==='fiscal'?`<article class="ed-source"><strong>中央政府收入總額｜${esc(state.meta.indicators.fiscal.totalSeries.unit)}</strong><div>Debin Ma, LSE WP152/11, Table 1，1700–1749及1750–1799年度平均。</div><div>資料按研究表格的原單位錄入；中國銀兩按原文1兩=37克換算為噸白銀。</div><a href="${esc(fiscalTotal.url)}" target="_blank" rel="noopener">${esc(fiscalTotal.title)}｜表一</a><div class="ed-note">50年區間平均，不是單年實測。總額受國家人口規模影響，不代表人均負擔。英國列依原文稱 England，荷蘭列為 Dutch Republic。</div></article>`:'';
    host.innerHTML=indicatorCards+fiscalTotalCard+references;
  }
  function seriesRows(countries=[...state.selected]) {
    const included=new Set(countries);
    const rows = availableRows().filter(row => included.has(row.country));
    const isSplit = state.metric === 'industrial';
    const groups = new Map();
    rows.forEach(row => {
      const seriesName = isSplit ? row.country : row.country;
      if (!groups.has(seriesName)) groups.set(seriesName, []);
      groups.get(seriesName).push(row);
    });
    return [...groups.entries()].map(([name, items]) => ({
      name,
      type: state.metric === 'population' ? 'scatter' : 'line',
      smooth: false,
      connectNulls: false,
      showSymbol: true,
      symbolSize: 9,
      lineStyle: { width: 2.5, type: isSplit ? (name.includes('後期') ? 'dashed' : 'solid') : 'solid' },
      itemStyle: { borderColor: '#fff8e8', borderWidth: 1.5 },
      data: items.map(row => ({ value: [row.year, row.value], row }))
    }));
  }
  function tooltip(params) {
    if (!params.length) return '';
    const row = params[0].data.row;
    return `<strong>${esc(row.country)}｜${row.year} 年／區間中心</strong><br>${esc(metricMeta().label)}：${fmt(row.value)} ${esc(metricMeta().unit)}<br>${esc(row.kind)}<br>${esc(row.note || '')}<br><span>${esc(sourceLabel(row.source))}</span>`;
  }
  const palette = ['#356b59','#315d8a','#a24835','#98702f','#6e5180','#328184','#865d3e','#607845'];
  function scheduleRender() { if(state.redraw) return; state.redraw=requestAnimationFrame(()=>{state.redraw=0;render();}); }
  const stableColor = name => {
    if(name.includes('清朝')||name.includes('中國'))return '#7a3930';
    if(name.includes('英國')||name.includes('英格蘭'))return '#315d8a';
    if(name.includes('法國'))return '#6e5180';
    if(name.includes('荷蘭'))return '#356b59';
    if(name.includes('西班牙'))return '#a24835';
    if(name.includes('俄羅斯'))return '#865d3e';
    if(name.includes('北美')||name.includes('美國')||name.includes('殖民地'))return '#328184';
    const names = [...new Set(availableRows().map(row => row.country))].sort((a,b) => a.localeCompare(b,'zh-TW'));
    return palette[names.indexOf(name) % palette.length] || palette[0];
  };
  function commonSnapshot(countries) {
    if (countries.length < 2) return null;
    const grouped = countries.map(country => availableRows().filter(row => row.country === country && row.year <= state.year));
    const sharedYears = grouped[0].map(row => row.year).filter(year => {
      const matched=grouped.map(rows=>rows.find(row=>row.year===year));
      return matched.every(Boolean) && matched.every(row=>row.source===matched[0].source && row.metric===matched[0].metric);
    });
    if (!sharedYears.length) return null;
    const year = Math.max(...sharedYears);
    return { year, rows: countries.map((country,index) => grouped[index].find(row => row.year === year)) };
  }
  function cagr(first,last) {
    if (!first || !last || first.value <= 0 || last.value <= 0 || last.year <= first.year) return null;
    return (Math.pow(last.value/first.value,1/(last.year-first.year))-1)*100;
  }
  function compareSummary() {
    const box = $('[data-ed-compare-summary]');
    const meta = metricMeta();
    const a=state.pair.a,b=state.pair.b;
    const allowed=Boolean(meta.comparison && meta.comparison.enabled);
    const snap=allowed ? commonSnapshot([a,b]) : null;
    if (!allowed) { box.textContent=(meta.comparison ? meta.comparison.reason : '此指標目前不提供跨國差距計算。')+' '+meta.limitation; return; }
    if (!snap) { box.textContent=`${a} 與 ${b} 在 ${state.year} 年以前沒有相同來源、相同年份的配對觀測；差距與成長率暫不計算。`; return; }
    const [ra,rb]=snap.rows; const gap=rb.value-ra.value; const relative=ra.value===0?null:gap/Math.abs(ra.value)*100;
    const pairRows=availableRows().filter(row=>row.year<=snap.year&&[a,b].includes(row.country));
    const shared=[...new Set(pairRows.filter(row=>row.country===a).map(row=>row.year))].filter(year=>pairRows.some(row=>row.country===b&&row.year===year)).sort((x,y)=>x-y);
    const rowAt=(country,year)=>pairRows.find(row=>row.country===country&&row.year===year);
    const ga=shared.length>1?cagr(rowAt(a,shared[0]),rowAt(a,shared.at(-1))):null;
    const gb=shared.length>1?cagr(rowAt(b,shared[0]),rowAt(b,shared.at(-1))):null;
    const growth=meta.comparison.growthMode==='none'?'此指標為區間總數或區間均值，不計算年均成長率。':ga===null||gb===null?'共同觀測期不足以計算年均複合成長率':`年均複合成長率（${shared[0]}–${shared.at(-1)}）：${esc(a)} ${fmt(ga)}%；${esc(b)} ${fmt(gb)}%`;
    box.innerHTML=`共同觀測 ${snap.year} 年｜${esc(a)}：${fmt(ra.value)} ${esc(meta.unit)}；${esc(b)}：${fmt(rb.value)} ${esc(meta.unit)}。<br>差距（乙−甲）：${fmt(gap)} ${esc(meta.unit)}${relative===null?'':`；相對甲：${fmt(relative)}%`}。<br>${growth}<br><span class="ed-note">${esc(meta.comparison.caveat)}</span>`;
  }
  function buildEventGraphic(pointsExist) {
    const width=Math.max(100,chartNode.clientWidth-120);
    return [{type:'group',left:74,top:21,children:[{type:'text',left:0,top:0,silent:true,style:{text:'歷史事件（點選圓點展開背景）',fill:'#7a392b',font:'bold 11px sans-serif'}},...events.map((event,index)=>({type:'text',left:((event.year-1661)/138)*width,top:index%2?30:14,silent:false,style:{text:'●',fill:event.year===state.year?'#c49a3a':event.year<state.year?'#9a3827':'#b69b6b',font:'14px sans-serif',textShadowBlur:event.year===state.year?5:0,textShadowColor:'#c19648'},onclick:()=>selectEvent(event)}))]},{type:'text',left:'center',top:'middle',silent:true,style:{text:pointsExist?'':'所選年份以前沒有已記錄觀測',fill:'#796b59',font:'16px sans-serif'}}];
  }
  function render() {
    if (!state.chart) return;
    const meta=metricMeta(); const countries=[...state.selected];
    const rows=availableRows().filter(row=>state.selected.has(row.country)&&row.year<=state.year);
    const latest=[...state.selected].map(country=>rows.filter(row=>row.country===country).sort((x,y)=>y.year-x.year)[0]).filter(Boolean);
    $('[data-ed-year-label]').textContent=`${state.year} 年`;
    $('[data-ed-jump]').value=state.year;
    $('[data-ed-limit]').textContent=`${meta.limitation} 圖面只呈現原始記錄點，不連接不同研究版本、不補值或補零。`;
    $('[data-ed-availability]').textContent=meta.unavailableRegions&&meta.unavailableRegions.length?`本指標缺少同口徑觀測：${meta.unavailableRegions.join('、')}。國家選項只列出來源檔實際有資料的地區。`:'本指標的來源資料未標記目標地區缺值；仍請以每筆來源註解為準。';
    $('[data-ed-snapshot]').innerHTML=latest.length?`截至 ${state.year} 年，各已選系列最近記錄：${latest.map(row=>`<strong>${esc(row.country)} ${row.year}：${fmt(row.value)} ${esc(meta.unit)}（${esc(row.kind)}）</strong>`).join('；')}`:`截至 ${state.year} 年，所選系列尚無已記錄資料點。年份滑桿只作年代定位，不代表逐年資料。`;
    root.querySelectorAll('[data-ed-metric]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.edMetric===state.metric)));
    root.querySelectorAll('[data-ed-mode]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.edMode===state.mode)));
    $('[data-ed-compare]').hidden=state.mode!=='compare';
    $('[data-ed-countries]').hidden=state.mode==='compare';
    $('[data-ed-availability]').hidden=state.mode==='compare';
    if(state.mode==='compare') compareSummary();
    let series=[]; let xAxis,yAxis; let legend={show:true,type:'scroll',top:6,textStyle:{color:'#463a2e'}};
    let zoom=[]; let grid={left:76,right:30,top:62,bottom:35,containLabel:true}; let chartCaption='';
    const lineRows=seriesRows().map(item=>({...item,itemStyle:{...item.itemStyle,color:stableColor(item.name)},lineStyle:{...item.lineStyle,color:stableColor(item.name)},data:item.data.filter(point=>point.value[0]<=state.year)}));
    if(state.mode==='race') {
      if(!meta.rankable) chartCaption=meta.rankMessage||'資料口徑不適合排名，請改看折線或點位。';
      else {
        const snap=commonSnapshot(countries);
        if(!snap||countries.length<2) chartCaption='至少選取兩個國家，且須有同來源、同單位、同觀測年份的資料，才能顯示此指標的橫向排名。';
        else {
          const ranked=snap.rows.slice().sort((x,y)=>y.value-x.value);
          series=[{id:'ed-rank',name:'跨國排名',type:'bar',barMaxWidth:34,showBackground:true,backgroundStyle:{color:'#c8b58b22'},label:{show:true,position:'right',formatter:params=>fmt(params.value),color:'#423527'},itemStyle:{borderRadius:[0,5,5,0],color:params=>stableColor(ranked[params.dataIndex].country)},data:ranked.map(row=>({value:row.value,row}))}];
          xAxis={type:'value',name:meta.unit,axisLabel:{color:'#594b3b'},splitLine:{lineStyle:{color:'#bca77d55',type:'dashed'}}};
          yAxis={type:'category',inverse:true,data:ranked.map(row=>row.country),axisLabel:{color:'#413429'},axisLine:{lineStyle:{color:'#9c7c4b'}}};
          legend={show:false};grid={left:130,right:65,top:54,bottom:40,containLabel:true};
          chartCaption=`長條排名快照：共同資料年份 ${snap.year}。${meta.rankMessage||meta.limitation}`;
        }
      }
    } else if(state.mode==='compare') {
      if(state.pair.a===state.pair.b)chartCaption='請選擇兩個不同國家或資料系列。';
      else if(meta.comparison&&meta.comparison.enabled) series=seriesRows([state.pair.a,state.pair.b]).map(item=>({...item,itemStyle:{...item.itemStyle,color:stableColor(item.name)},lineStyle:{...item.lineStyle,color:stableColor(item.name)},data:item.data.filter(point=>point.value[0]<=state.year)}));
      else chartCaption=meta.comparison?meta.comparison.reason:'此指標尚無可比較的共同資料口徑。';
      xAxis={type:'value',min:1661,max:1799,interval:20,name:'年份',nameLocation:'middle',nameGap:30,axisLabel:{color:'#594b3b'},splitLine:{lineStyle:{color:'#d8c9ab55'}},axisLine:{lineStyle:{color:'#9c7c4b'}}};
      yAxis={type:'value',name:meta.unit,nameLocation:'middle',nameGap:52,axisLabel:{color:'#594b3b'},splitLine:{lineStyle:{color:'#bca77d55',type:'dashed'}},axisLine:{show:true,lineStyle:{color:'#9c7c4b'}}};
      zoom=[{type:'inside',xAxisIndex:0,filterMode:'none'},{type:'slider',xAxisIndex:0,height:18,bottom:8,borderColor:'#ceb98e'}];
    } else {
      series=lineRows;
      xAxis={type:'value',min:1661,max:1799,interval:20,name:'年份',nameLocation:'middle',nameGap:30,axisLabel:{color:'#594b3b'},splitLine:{lineStyle:{color:'#d8c9ab55'}},axisLine:{lineStyle:{color:'#9c7c4b'}}};
      yAxis={type:'value',name:meta.unit,nameLocation:'middle',nameGap:52,axisLabel:{color:'#594b3b'},splitLine:{lineStyle:{color:'#bca77d55',type:'dashed'}},axisLine:{show:true,lineStyle:{color:'#9c7c4b'}}};
      zoom=[{type:'inside',xAxisIndex:0,filterMode:'none'},{type:'slider',xAxisIndex:0,height:18,bottom:8,borderColor:'#ceb98e'}];
    }
    const graphic=buildEventGraphic(rows.length>0);
    if(chartCaption) graphic.push({type:'text',left:78,top:44,silent:true,style:{text:chartCaption,width:Math.max(100,chartNode.clientWidth-130),overflow:'break',fill:'#70583b',font:'12px sans-serif'}});
    state.chart.setOption({animation:!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&!document.documentElement.classList.contains('qing-motion-off'),animationDuration:450,animationDurationUpdate:320,color:palette,tooltip:{trigger:'item',confine:true,formatter:params=>{const row=params.data&&params.data.row;return row?`<strong>${esc(row.country)}｜${row.year} 年｜${esc(row.kind)}</strong><br>${esc(meta.label)}：${fmt(row.value)} ${esc(meta.unit)}<br>${esc(row.kind)}<br>${esc(row.note||'')}<br>${esc(sourceLabel(row.source))}`:''},backgroundColor:'#fffaf0',borderColor:'#ad8a50',textStyle:{color:'#34281e'}},legend,grid,xAxis,yAxis,dataZoom:zoom,series,graphic},{lazyUpdate:true,replaceMerge:['series','xAxis','yAxis','dataZoom','graphic','legend']});
  }
  function startPlay() {
    if (state.timer) return;
    $('[data-ed-play]').textContent = '■ 暫停';
    state.timer = window.setInterval(() => {
      if (state.year >= 1799) { stopPlay(); setStatus('已播放至 1799 年。可按「從頭播放」重新播放。'); return; }
      state.year = Math.min(1799, state.year + state.speed);
      $('[data-ed-year]').value = state.year;
      $('[data-ed-jump]').value = state.year;
      publishYear();
      scheduleRender();
    }, 500);
  }
  function stopPlay() { window.clearInterval(state.timer); state.timer = null; $('[data-ed-play]').textContent = '▶ 播放'; }
  function togglePlay() { if (state.timer) stopPlay(); else startPlay(); }
  function resize() { if (state.chart) state.chart.resize(); }
  function init(data, metadata, sourceDetails, extensions) {
    state.data = data; state.meta = metadata;
    state.sources = data.sources;
    state.sourceDetails = sourceDetails.sources;
    state.extensions=extensions.observations;
    state.chart = window.echarts.init(chartNode, null, { renderer: 'canvas', useDirtyRect: true });
    const worldYear=document.getElementById('worldYear');
    state.year = Number(worldYear ? worldYear.value : $('[data-ed-year]').value);
    $('[data-ed-year]').value=state.year;
    buildControls(); buildSources(); buildEventList(); render();
    state.chart.on('click', event => {
      if (!event.data || !event.data.event) return;
      state.year = event.data.event.year; $('[data-ed-year]').value = state.year; render();
      setStatus(`${event.data.event.year} 年｜${event.data.event.label}`);
    });
    if(worldYear)worldYear.addEventListener('input',()=>{const year=Number(worldYear.value);if(year!==state.year){state.year=year;$('[data-ed-year]').value=year;$('[data-ed-jump]').value=year;scheduleRender();}});
    window.addEventListener('resize', resize, { passive: true });
    if(window.ResizeObserver){state.resizeObserver=new ResizeObserver(resize);state.resizeObserver.observe(chartNode);}
    if (window.gsap && window.ScrollTrigger && !document.documentElement.classList.contains('qing-motion-off') && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.gsap.fromTo(root, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: .7, ease: 'power2.out', scrollTrigger: { trigger: root, start: 'top 88%', once: true } });
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => { if (state.chart) { state.chart.setOption({ animation: !reduced.matches && !document.documentElement.classList.contains('qing-motion-off') }); } };
    reduced.addEventListener ? reduced.addEventListener('change', updateMotion) : reduced.addListener(updateMotion);
    const observer = new MutationObserver(updateMotion); observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('pagehide', () => { stopPlay(); if(state.redraw)cancelAnimationFrame(state.redraw); if(state.resizeObserver)state.resizeObserver.disconnect(); observer.disconnect(); window.removeEventListener('resize', resize); state.chart.dispose(); }, { once: true });
    setStatus('儀表板已載入；圖表只呈現來源記錄的年份。');
  }
  if (!window.echarts) { setStatus('圖表函式庫未能載入；原有經濟圖表仍可使用。'); return; }
  Promise.all([fetch('./economic_data.json').then(response => { if (!response.ok) throw new Error('economic_data.json'); return response.json(); }), fetch('./data/economic-indicator-metadata.json').then(response => { if (!response.ok) throw new Error('metadata'); return response.json(); }), fetch('./data/economic-sources.json').then(response => { if (!response.ok) throw new Error('source registry'); return response.json(); }), fetch('./data/economic-extensions.json').then(response => { if (!response.ok) throw new Error('economic extensions'); return response.json(); })])
    .then(([data, metadata, sourceDetails, extensions]) => init(data, metadata, sourceDetails, extensions))
    .catch(error => { console.error('Economic dashboard could not initialize:', error); setStatus('新儀表板資料載入失敗；請確認網站以 Netlify 或本機 HTTP 預覽方式開啟。原有頁面與經濟圖表未受影響。'); });
})();
