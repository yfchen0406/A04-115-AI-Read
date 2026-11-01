(() => {
  'use strict';
  const root = document.getElementById('historical-map');
  if (!root) return;
  const previewContainer = document.getElementById('global-history-map-preview');
  const previewStatus = document.getElementById('global-history-map-preview-status');
  const previewYear = document.querySelector?.('[data-map-preview-year]') || null;
  const ui = {
    year: root.querySelector('[data-map-year]'), status: root.querySelector('[data-map-status]'),
    features: root.querySelector('[data-map-feature-list]'), boundary: root.querySelector('[data-map-boundary-notice]'),
    sources: root.querySelector('[data-map-source-list]'), country: root.querySelector('[data-map-country]'),
    split: root.querySelector('[data-map-split]'), grid: root.querySelector('[data-map-view-grid]'),
    primaryTitle: root.querySelector('[data-map-primary-title]'), secondary: root.querySelector('[data-map-secondary-view]'), secondaryTitle: root.querySelector('[data-map-secondary-title]'),
  };
  const modes = new Map();
  const maps = [];
  let previewInstance = null;
  const modeButtons = [...root.querySelectorAll('[data-map-mode]')];
  const defaults = { center: [30, 25], zoom: 1.25 };
  let dataIndex, mapData, sources, currentYear = 1750, currentMode = 'polities', selectedCountries = [], maplibre = null, mapLibraryPromise = null, mapStarted = false, previewStarted = false, mapViewObserver = null;
  let polityLoadMessage = '政體範圍圖層載入中。';
  let dataLoadWarnings = [];
  let unsubscribeMap = () => {};
  let unsubTime = () => {};
  let destroyed = false;

  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[ch]);
  const allMapInstances = () => previewInstance ? [...maps, previewInstance] : maps;
  const reduceMotion = () => document.documentElement.classList.contains('qing-motion-off') || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const allFeatures = key => mapData?.[key]?.features || [];
  const rangeMatches = feature => Number(feature.properties.start_year) <= currentYear && Number(feature.properties.end_year) >= currentYear;
  function pairedMode(mode) { return ({polities:'europe',qing:'europe',europe:'americas',americas:'qing',trade:'military',military:'trade'})[mode] || 'polities'; }
  function cameraForMode(mode) {
    return ({qing:{center:[108,36],zoom:2.8},europe:{center:[15,50],zoom:3},americas:{center:[-75,20],zoom:2.2},trade:{center:[30,20],zoom:1.35},military:{center:[30,25],zoom:1.5},polities:defaults})[mode] || defaults;
  }
  function visiblePolities(mode=currentMode) {
    const allowed = mode === 'qing' ? ['qing'] : mode === 'europe' ? ['europe'] : mode === 'americas' ? ['americas'] : mode === 'polities' ? ['qing','europe','americas'] : [];
    return allFeatures('polities').filter(feature => rangeMatches(feature) && feature.properties.display_modes?.some(mode => allowed.includes(mode)));
  }
  const eventMatchesMode = (feature, mode=currentMode) => {
    const region = feature.properties.region;
    if (mode === 'qing') return region === '清朝';
    if (mode === 'europe') return region === '歐洲';
    if (mode === 'americas') return region === '美洲';
    return true;
  };
  function visibleEvents(mode=currentMode) { return allFeatures('events').filter(feature => Number(feature.properties.start_year) === currentYear && eventMatchesMode(feature,mode)); }
  function visibleRoutes(mode=currentMode) {
    if (mode === 'trade') return allFeatures('trade').filter(rangeMatches);
    if (!['military','qing','europe','americas'].includes(mode)) return [];
    return allFeatures('military').filter(feature => {
      if (!rangeMatches(feature)) return false;
      const region = String(feature.properties.region || '');
      if (mode === 'qing') return /清|西北|蒙古|四川|雲南/.test(region);
      if (mode === 'europe') return /歐洲|北歐|東歐/.test(region);
      if (mode === 'americas') return /美洲|北美/.test(region);
      return true;
    });
  }
  function routeCoordinates(feature) {
    if (feature.geometry.type === 'LineString') return feature.geometry.coordinates;
    const lines = feature.geometry.coordinates;
    const points = [];
    for (const line of lines) {
      const adjusted = line.map(([longitude, latitude]) => {
        let lon = longitude;
        const previous = points.at(-1)?.[0];
        if (previous !== undefined) {
          while (lon - previous > 180) lon -= 360;
          while (lon - previous < -180) lon += 360;
        }
        return [lon, latitude];
      });
      points.push(...(points.length ? adjusted.slice(1) : adjusted));
    }
    return points;
  }
  function makeTradePorts(routes) {
    return { type:'FeatureCollection', features:routes.flatMap(route => {
      const names = Array.isArray(route.properties.ports) ? route.properties.ports : [];
      const coordinates = routeCoordinates(route);
      if (!names.length || coordinates.length < 2) return [];
      const stops = names.length === coordinates.length
        ? names.map((name,index) => ({ name, coordinates:coordinates[index] }))
        : [{ name:names[0], coordinates:coordinates[0] }, { name:names.at(-1), coordinates:coordinates.at(-1) }];
      return stops.map((stop,index) => ({
        type:'Feature',
        id:`${route.properties.id}-stop-${index}`,
        properties:{ id:`${route.properties.id}-stop-${index}`, name:stop.name, route_id:route.properties.id, route_name:route.properties.name, start_year:route.properties.start_year, end_year:route.properties.end_year, confidence:route.properties.confidence, source_id:route.properties.source_id, notes:route.properties.notes, kind:/非單一港|沿岸區域|區域/.test(stop.name)?'region':'port' },
        geometry:{ type:'Point', coordinates:[((stop.coordinates[0]+540)%360)-180,stop.coordinates[1]] },
      }));
    }) };
  }
  function routePosition(feature, progress) {
    const coordinates = routeCoordinates(feature);
    if (coordinates.length < 2) return null;
    const segmentLengths = coordinates.slice(1).map(([lon2,lat2],index) => {
      const [lon1,lat1] = coordinates[index];
      return Math.hypot((lon2-lon1)*Math.cos((lat1+lat2)*Math.PI/360),lat2-lat1);
    });
    const total = segmentLengths.reduce((sum,length)=>sum+length,0);
    if (!total) return null;
    let remaining = Math.max(0,Math.min(1,progress))*total;
    let index = segmentLengths.findIndex(length => { if (remaining <= length) return true; remaining -= length; return false; });
    if (index < 0) index = segmentLengths.length-1;
    const fraction = segmentLengths[index] ? remaining/segmentLengths[index] : 0;
    const [lon1,lat1] = coordinates[index]; const [lon2,lat2] = coordinates[index+1];
    const lon = lon1+(lon2-lon1)*fraction; const lat = lat1+(lat2-lat1)*fraction;
    const bearing = (Math.atan2((lon2-lon1)*Math.cos(lat*Math.PI/180),lat2-lat1)*180/Math.PI+360)%360;
    return { coordinates:[((lon+540)%360)-180,lat], bearing };
  }
  function setStatus(message) { ui.status.textContent = message; }
  function setBoundaryNotice() {
    const mode = modes.get(currentMode);
    const yearText = currentYear;
    const layer = dataIndex.layers.find(item => item.id === 'historical-polities');
    const count = visiblePolities().length;
    ui.boundary.textContent = `${yearText}年｜${dataIndex.baseMap.modernBoundariesWarning} ${count ? `目前顯示 ${count} 個來源政體範圍圖形。` : '本年與模式沒有可用的政體範圍圖形。'} ${polityLoadMessage} ${layer?.message || ''}`;
  }
  function renderSources() {
    ui.sources.innerHTML = sources.sources.map(source => `<p><strong>${esc(source.title)}</strong>｜授權：${esc(source.license)}<br>${esc(source.use)} <a href="${esc(source.url)}" target="_blank" rel="noopener">來源與條款</a></p>`).join('');
  }
  function featureMarkup(feature, kind) {
    const p = feature.properties;
    const year = p.start_year === p.end_year ? `${p.start_year}` : `${p.start_year}–${p.end_year}`;
    const place = kind === 'event' || kind === 'polity' ? p.location_name : (p.ports || []).join(' → ') || p.region;
    const placeLabel = kind === 'event' ? '地點' : kind === 'polity' ? '政體範圍' : kind === 'trade' ? '主要港口' : '主要地區';
    const detail = kind === 'event' ? p.background : p.notes;
    const routeSource = kind === 'event' ? null : sources.sources.find(item => item.id === p.source_id);
    const source = kind === 'event' ? `<a href="${esc(p.source_url)}" target="_blank" rel="noopener">${esc(p.source_title || '原始來源')}</a>` : routeSource ? `<a href="${esc(routeSource.url)}" target="_blank" rel="noopener">${esc(routeSource.title)}</a>` : `<a href="./docs/historical-map-methodology.md">地圖資料方法與來源</a>`;
    const person = kind === 'event' && p.people ? `<p>相關人物：${esc(p.people)}</p>` : '';
    const classification = kind === 'event' ? p.category : p.label;
    const id = kind === 'event' ? p.event_id : p.id;
    const selected = selectedCountries.includes(p.economy_country);
    const routeDetails = kind === 'trade'
      ? `<p>貿易組織／網絡：${esc(p.organization || '資料未載')}</p><p>主要商品：${esc(p.commodities || '資料未載')}</p>`
      : kind === 'military'
        ? `<p>主要交戰方：${esc(p.sides || '資料未載')}</p><p>戰事結果：${esc(p.outcome || '資料未載')}</p>`
        : '';
    return `<article class="map-feature-card" data-kind="${kind}" data-selected="${selected}"><h4>${esc(p.name)}</h4><p>${year}｜${placeLabel}：${esc(place)}｜信度：${esc(p.confidence)}</p><p>${esc(classification)}</p><p>${esc(detail)}</p>${routeDetails}${person}<p>來源：${source}</p><button type="button" data-map-focus="${esc(id)}" data-map-kind="${kind}">定位並查看</button></article>`;
  }
  function renderFeatureList() {
    if (!mapData) return;
    const events = visibleEvents();
    const routes = visibleRoutes();
    const polityCards = ['qing','europe','americas','polities'].includes(currentMode) ? visiblePolities().slice(0,60).map(feature => ({...feature,properties:{...feature.properties,location_name:`${feature.properties.name}｜來源所繪政體範圍`,label:feature.properties.category}})) : [];
    ui.features.innerHTML = [...polityCards.map(feature => featureMarkup(feature, 'polity')), ...events.map(feature => featureMarkup(feature, 'event')), ...routes.map(feature => featureMarkup(feature, feature.properties.routeType === 'military' ? 'military' : 'trade'))].join('');
    setStatus(`${currentYear}年｜${modes.get(currentMode)?.label || '世界政權'}｜${visiblePolities().length} 個來源政體範圍、${events.length} 個有來源事件地點、${routes.length} 條概略路線。政體列表最多列出 60 筆。`);
  }
  function basePolityForCountry(name) {
    const pairs = [['People\'s Republic of China','清朝／中國'],['China','清朝／中國'],['United Kingdom','英國'],['France','法國'],['Netherlands','荷蘭'],['Spain','西班牙'],['Russia','俄羅斯'],['United States','美國']];
    const found = pairs.find(([alias]) => name.toLowerCase().includes(alias.toLowerCase()));
    return found?.[1] || null;
  }
  function updateMapSources(instance) {
    const prefix = instance.prefix;
    const mode = instance.mode || currentMode;
    const eventFeatures = visibleEvents(mode);
    const routes = visibleRoutes(mode);
    const polityFeatures = visiblePolities(mode);
    const eventSource = instance.map.getSource(`${prefix}-events`);
    const tradeSource = instance.map.getSource(`${prefix}-trade`);
    const militarySource = instance.map.getSource(`${prefix}-military`);
    const portSource = instance.map.getSource(`${prefix}-trade-ports`);
    const politySource = instance.map.getSource(`${prefix}-polities`);
    if (eventSource) eventSource.setData({ type: 'FeatureCollection', features: eventFeatures });
    if (politySource) politySource.setData({ type: 'FeatureCollection', features: polityFeatures });
    if (tradeSource) tradeSource.setData({ type: 'FeatureCollection', features: mode === 'trade' ? routes : [] });
    if (portSource) portSource.setData(mode === 'trade' ? makeTradePorts(routes) : { type:'FeatureCollection', features:[] });
    if (militarySource) {
      const isMilitaryMode = ['military','qing','europe','americas'].includes(mode);
      militarySource.setData({ type: 'FeatureCollection', features: isMilitaryMode ? routes : [] });
    }
    instance.map.setPaintProperty(`${prefix}-event-circles`, 'circle-color', ['case', ['in', ['get','economy_country'], ['literal', selectedCountries]], '#e1a92d', ['match', ['get','region'], '歐洲', '#42677e', '美洲', '#55784c', '#9f392f']]);
    instance.map.setPaintProperty(`${prefix}-event-circles`, 'circle-stroke-color', ['case', ['in', ['get','economy_country'], ['literal', selectedCountries]], '#6d391b', '#fff4d8']);
    instance.map.setPaintProperty(`${prefix}-event-circles`, 'circle-stroke-width', ['case', ['in', ['get','economy_country'], ['literal', selectedCountries]], 3.5, 1.5]);
    instance.map.setLayoutProperty(`${prefix}-trade-line`, 'visibility', mode === 'trade' ? 'visible' : 'none');
    instance.map.setLayoutProperty(`${prefix}-trade-arrows`, 'visibility', mode === 'trade' ? 'visible' : 'none');
    instance.map.setLayoutProperty(`${prefix}-trade-port-dots`, 'visibility', mode === 'trade' ? 'visible' : 'none');
    instance.map.setLayoutProperty(`${prefix}-trade-port-labels`, 'visibility', mode === 'trade' ? 'visible' : 'none');
    instance.map.setLayoutProperty(`${prefix}-military-line`, 'visibility', ['military','qing','europe','americas'].includes(mode) ? 'visible' : 'none');
    if (mode === 'trade' && !reduceMotion()) animateShips(instance,routes);
    else stopShips(instance);
    if (!reduceMotion()) animateRoutes(instance); else showCompleteLines(instance);
    return { eventFeatures, routes, polityFeatures };
  }
  function lineColorExpression(type) {
    if (type === 'military') return '#a34d29';
    return '#1f7770';
  }
  function showCompleteLines(instance) {
    for (const type of ['trade','military']) {
      const id = `${instance.prefix}-${type}-line`;
      if (instance.map.getLayer(id)) instance.map.setPaintProperty(id, 'line-gradient', ['interpolate',['linear'],['line-progress'],0,lineColorExpression(type),1,lineColorExpression(type)]);
    }
  }
  function animateRoutes(instance) {
    if (!window.gsap || !instance.map.isStyleLoaded()) { showCompleteLines(instance); return; }
    for (const type of ['trade','military']) {
      const id = `${instance.prefix}-${type}-line`;
      if (!instance.map.getLayer(id)) continue;
      const proxy = instance.progress[type] || (instance.progress[type] = { value: 0 });
      window.gsap.killTweensOf(proxy);
      proxy.value = 0;
      const color = lineColorExpression(type);
      const apply = () => {
        if (destroyed || !instance.map.getLayer(id)) return;
        const stop = Math.max(.001, Math.min(.998, proxy.value));
        const tail = Math.min(.999, stop + .001);
        instance.map.setPaintProperty(id, 'line-gradient', ['interpolate',['linear'],['line-progress'],0,color,stop,color,tail,'rgba(0,0,0,0)',1,'rgba(0,0,0,0)']);
      };
      apply();
      window.gsap.to(proxy, { value: 1, duration: 1.8, ease: 'power1.inOut', onUpdate: apply, onComplete: () => showCompleteLines(instance) });
    }
  }
  function stopRouteAnimations(instance) {
    if(!window.gsap)return;
    for(const type of ['trade','military'])if(instance.progress[type])window.gsap.killTweensOf(instance.progress[type]);
  }
  function stopShips(instance) {
    const active=instance.progress.ships||{};
    Object.values(active).forEach(proxy=>{window.gsap?.killTweensOf(proxy);proxy.marker?.remove();});
    instance.progress.ships={};
  }
  function createShipMarker(instance,route,position) {
    const element=document.createElement('div');
    element.className='map-sailboat-marker';
    element.setAttribute('role','button');
    element.setAttribute('tabindex','0');
    element.setAttribute('aria-label',`沿「${route.properties.name}」移動的概略船舶；按 Enter 查看路線`);
    element.title=`概略航行：${route.properties.name}`;
    element.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true"><path d="M22 3v30L7 38h15z" fill="#a43f31" stroke="#fff7e5" stroke-width="1.7"/><path d="M25 10v23l16 5H25z" fill="#e0b95e" stroke="#fff7e5" stroke-width="1.7"/><path d="M4 39h40c-3 6-9 8-20 8S7 45 4 39z" fill="#246d69" stroke="#fff7e5" stroke-width="1.7"/></svg>';
    element.addEventListener('click',()=>focusFeature('trade',route.properties.id,instance.map));
    element.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();focusFeature('trade',route.properties.id,instance.map);}});
    return new maplibre.Marker({element,rotationAlignment:'map',pitchAlignment:'map',anchor:'center'}).setLngLat(position.coordinates).setRotation(position.bearing).addTo(instance.map);
  }
  function animateShips(instance,routes) {
    if(!window.gsap||!maplibre?.Marker||!routes.length||reduceMotion()){stopShips(instance);return;}
    const active=instance.progress.ships||(instance.progress.ships={});
    const ids=new Set(routes.map(route=>route.properties.id));
    Object.entries(active).forEach(([id,proxy])=>{if(!ids.has(id)){window.gsap.killTweensOf(proxy);proxy.marker?.remove();delete active[id];}});
    routes.forEach(route=>{
      const id=route.properties.id;
      if(active[id])return;
      const proxy=active[id]={value:0,route};
      const position=routePosition(route,0);
      if(!position)return;
      proxy.marker=createShipMarker(instance,route,position);
      window.gsap.to(proxy,{value:1,duration:8,ease:'none',repeat:-1,onUpdate:()=>{if(destroyed)return;const next=routePosition(route,proxy.value);if(next)proxy.marker.setLngLat(next.coordinates).setRotation(next.bearing);}});
    });
  }
  function killProgress(progress) {
    if(!window.gsap||!progress)return;
    Object.values(progress).forEach(value=>{
      if(value&&typeof value==='object'&&!('value'in value))killProgress(value);
      else if(value&&typeof value==='object')window.gsap.killTweensOf(value);
    });
  }
  function updateAll() {
    if (!mapData) return;
    maps.forEach((instance,index)=>{ instance.mode=instance.prefix==='map-secondary'?pairedMode(currentMode):currentMode; });
    if (previewInstance) previewInstance.mode='polities';
    ui.year.textContent = String(currentYear);
    if (previewYear) previewYear.textContent = String(currentYear);
    if (previewStatus && previewInstance) previewStatus.textContent = `${currentYear} 年｜已與上方年份、事件及國家篩選同步。`;
    if(ui.primaryTitle)ui.primaryTitle.textContent=modes.get(currentMode)?.label||'世界政權';
    if(ui.secondaryTitle)ui.secondaryTitle.textContent=modes.get(pairedMode(currentMode))?.label||'比較圖層';
    setBoundaryNotice();
    renderFeatureList();
    allMapInstances().forEach(instance => {
      if (instance.map.isStyleLoaded()) updateMapSources(instance);
      else instance.map.once('load', () => updateMapSources(instance));
    });
  }
  function findFeature(kind, id) {
    const list = kind === 'event' ? allFeatures('events') : kind === 'military' ? allFeatures('military') : kind === 'polity' ? allFeatures('polities') : allFeatures('trade');
    return list.find(feature => String(feature.properties.id) === id || String(feature.properties.event_id) === id);
  }
  function relatedChapter(event) {
    if (event.region === '清朝') {
      if (Number(event.start_year) <= 1722) return { href:'#kangxi', label:'前往康熙章節' };
      if (Number(event.start_year) <= 1735) return { href:'#yongzheng', label:'前往雍正章節' };
      return { href:'#qianlong', label:'前往乾隆章節' };
    }
    if (event.region === '歐洲' || event.region === '美洲') return { href:'#world', label:'前往中西文明對照章節' };
    return { href:'#global-history', label:'前往全球同步年表' };
  }
  function focusFeature(kind, id, targetMap) {
    const feature = findFeature(kind, id);
    if (!feature) return;
    const popupTargets = targetMap ? maps.filter(instance=>instance.map===targetMap) : maps.slice(0,1);
    let coords;
    if (feature.geometry.type === 'Point') coords = feature.geometry.coordinates;
    else {
      const line = feature.geometry.type === 'Polygon' ? feature.geometry.coordinates[0] : feature.geometry.type === 'MultiPolygon' ? feature.geometry.coordinates[0][0] : feature.geometry.type === 'MultiLineString' ? feature.geometry.coordinates[0] : feature.geometry.coordinates;
      coords = line[Math.floor(line.length / 2)] || line[0];
    }
    if (targetMap) targetMap.flyTo({ center: coords, zoom: Math.max(targetMap.getZoom(), kind === 'event' ? 4 : 2.3), duration: reduceMotion() ? 0 : 1000 });
    else maps.slice(0,1).forEach(instance => instance.map.flyTo({ center: coords, zoom: Math.max(instance.map.getZoom(), kind === 'event' ? 4 : 2.3), duration: reduceMotion() ? 0 : 1000 }));
    if (kind === 'polity') {
      const p = feature.properties;
      for (const instance of popupTargets) {
        const node = document.createElement('div');
        const title = document.createElement('h3'); title.textContent = p.name;
        const period = document.createElement('p'); period.textContent = `${p.start_year}–${p.end_year}｜${p.region}｜信度：${p.confidence}`;
        const notes = document.createElement('p'); notes.textContent = p.notes;
        const link = document.createElement('a'); link.href = 'https://github.com/Seshat-Global-History-Databank/cliopatria/blob/v0.2.1/README.md'; link.target = '_blank'; link.rel = 'noopener'; link.textContent = 'Cliopatria v0.2.1 資料與方法';
        node.append(title,period,notes,link);
        new maplibre.Popup({closeButton:true,maxWidth:'340px'}).setLngLat(coords).setDOMContent(node).addTo(instance.map);
      }
    } else if (kind === 'event') {
      const event = feature.properties;
      window.HistoricalTimeController?.setSelections({ selectedEvent: event.event_id });
      window.HistoricalTimeController?.setCurrentYear(Number(event.start_year), { source: 'historical-map-event' });
      const item = event;
      for (const instance of popupTargets) {
        if (!instance.map.getLayer(`${instance.prefix}-event-circles`)) continue;
        const popup = new maplibre.Popup({ closeButton: true, maxWidth: '320px' }).setLngLat(coords);
        const node = document.createElement('div');
        const title = document.createElement('h3'); title.textContent = item.name;
        const year = document.createElement('p'); year.textContent = `${item.start_year} 年｜${item.location_name}｜${item.country}`;
        const summary = document.createElement('p'); summary.textContent = item.background;
        const people = document.createElement('p'); people.textContent = `相關人物：${item.people || '資料未載'}`;
        const source = document.createElement('a'); source.href = item.source_url; source.target = '_blank'; source.rel = 'noopener'; source.textContent = item.source_title || '開啟原始來源';
        const related = relatedChapter(item);
        const chapter = document.createElement('a'); chapter.href = related.href; chapter.textContent = related.label; chapter.className = 'map-popup-source'; chapter.addEventListener('click', () => root.querySelector(related.href)?.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' }));
        const timeline = document.createElement('a'); timeline.href = '#global-history'; timeline.textContent = '前往同步歷史事件面板'; timeline.className = 'map-popup-source'; timeline.addEventListener('click', () => root.querySelector('#global-history')?.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' }));
        node.append(title, year, summary, people, source, document.createElement('br'), chapter, document.createElement('br'), timeline);
        popup.setDOMContent(node).addTo(instance.map);
      }
    } else {
      const p = feature.properties;
      window.HistoricalTimeController?.setSelections({ selectedEvent: p.id });
      for (const instance of popupTargets) {
        const popup = new maplibre.Popup({ closeButton: true, maxWidth: '340px' }).setLngLat(coords);
        const node = document.createElement('div');
        const title = document.createElement('h3'); title.textContent = p.name;
        const period = document.createElement('p'); period.textContent = `${p.start_year}–${p.end_year}｜${p.region}｜信度：${p.confidence}`;
        const notes = document.createElement('p'); notes.textContent = p.notes;
        const organization = document.createElement('p'); organization.textContent = `${kind === 'trade' ? '組織／網絡' : '交戰方'}：${p.organization || p.sides}`;
        const commodities = document.createElement('p'); commodities.textContent = kind === 'trade' ? `商品／歷史性質：${p.commodities}` : `結果：${p.outcome}`;
        const source = sources.sources.find(item => item.id === p.source_id);
        const link = document.createElement('a'); link.href = source?.url || './docs/historical-map-methodology.md'; link.target = '_blank'; link.rel = 'noopener'; link.textContent = source?.title || '地圖資料來源及方法';
        node.append(title, period, notes, organization, commodities, link);
        popup.setDOMContent(node).addTo(instance.map);
      }
    }
  }
  function countryFromFeature(feature) {
    const props = feature?.properties || {};
    return basePolityForCountry(String(props['name:en'] || props.name_en || props.name || props.admin || ''));
  }
  function mapEventHandlers(instance) {
    const map = instance.map; const prefix = instance.prefix;
    for (const layer of [`${prefix}-event-circles`, `${prefix}-trade-line`, `${prefix}-trade-port-dots`, `${prefix}-military-line`, `${prefix}-polity-fill`]) {
      if(!map.getLayer(layer))continue;
      map.on('mouseenter', layer, () => { map.getCanvas().style.cursor = 'pointer'; });
      map.on('mouseleave', layer, () => { map.getCanvas().style.cursor = ''; });
    }
    map.on('click', `${prefix}-event-circles`, event => {
      const feature = event.features?.[0]; if (feature) focusFeature('event', String(feature.properties.event_id), map);
    });
    map.on('click', `${prefix}-trade-line`, event => {
      const feature = event.features?.[0]; if (feature) focusFeature('trade', String(feature.properties.id), map);
    });
    map.on('click', `${prefix}-trade-port-dots`, event => {
      const feature = event.features?.[0]; if (feature) focusFeature('trade', String(feature.properties.route_id), map);
    });
    map.on('click', `${prefix}-military-line`, event => {
      const feature = event.features?.[0]; if (feature) focusFeature('military', String(feature.properties.id), map);
    });
    map.on('click', `${prefix}-polity-fill`, event => { const feature=event.features?.[0]; if(feature)focusFeature('polity',String(feature.properties.id),map); });
    map.on('click', event => {
      const hit = map.queryRenderedFeatures(event.point, { layers: [`${prefix}-event-circles`, `${prefix}-trade-line`, `${prefix}-trade-port-dots`, `${prefix}-military-line`, `${prefix}-polity-fill`] });
      if (hit.length) return;
      const base = map.queryRenderedFeatures(event.point).find(feature => countryFromFeature(feature));
      if (!base) return;
      const country = countryFromFeature(base);
      const wasSelected = selectedCountries.includes(country);
      selectedCountries = wasSelected ? selectedCountries.filter(item => item !== country) : [...selectedCountries, country];
      window.HistoricalTimeController?.setSelections({ selectedCountries });
      updateAll();
      setStatus(`${wasSelected ? '已取消' : '已選取'}「${country}」作為經濟比較篩選。底圖國界僅為現代定位資料，不代表歷史疆界。`);
    });
  }
  function createMap(containerId, prefix, mode=currentMode, role='primary') {
    const camera = cameraForMode(mode);
    const map = new maplibre.Map({ container: containerId, style: dataIndex.baseMap.style, center: camera.center, zoom: camera.zoom, minZoom: 1, maxZoom: 12, attributionControl: true, cooperativeGestures: true, touchPitch: false });
    const instance = { map, prefix, mode, role, camera, progress: {}, ready: false };
    if (role === 'preview') previewInstance = instance;
    else maps.push(instance);
    map.addControl(new maplibre.NavigationControl({ showCompass: true, visualizePitch: false }), 'top-right');
    map.once('load', () => {
      if (destroyed) { map.remove(); return; }
      instance.ready = true;
      map.addSource(`${prefix}-events`, { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
      map.addSource(`${prefix}-polities`, { type: 'geojson', data: { type:'FeatureCollection', features:[] } });
      map.addSource(`${prefix}-trade`, { type: 'geojson', data: { type: 'FeatureCollection', features: [] }, lineMetrics: true });
      map.addSource(`${prefix}-trade-ports`, { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
      map.addSource(`${prefix}-military`, { type: 'geojson', data: { type: 'FeatureCollection', features: [] }, lineMetrics: true });
      map.addLayer({ id:`${prefix}-polity-fill`, type:'fill', source:`${prefix}-polities`, paint:{ 'fill-color':['match',['get','region'],'清朝','#a83d32','歐洲','#526f86','美洲','#577c50','#aa8650'], 'fill-opacity':.22, 'fill-outline-color':['match',['get','region'],'清朝','#98392f','歐洲','#405e77','美洲','#466c40','#8a653a'] } });
      map.addLayer({ id:`${prefix}-polity-outline`, type:'line', source:`${prefix}-polities`, paint:{ 'line-color':['match',['get','region'],'清朝','#98392f','歐洲','#405e77','美洲','#466c40','#8a653a'], 'line-width':1.25, 'line-opacity':.82 } });
      map.addLayer({ id:`${prefix}-polity-labels`, type:'symbol', source:`${prefix}-polities`, minzoom:2.5, layout:{ 'text-field':['get','name'], 'text-font':['Open Sans Regular','Arial Unicode MS Regular'], 'text-size':11, 'text-allow-overlap':false }, paint:{ 'text-color':'#33271c','text-halo-color':'#fff6df','text-halo-width':1.3 } });
      map.addLayer({ id: `${prefix}-trade-line`, type: 'line', source: `${prefix}-trade`, layout: { visibility: 'none', 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-width': 3, 'line-opacity': .88, 'line-color': '#1f7770' } });
      map.addLayer({ id: `${prefix}-trade-arrows`, type: 'symbol', source: `${prefix}-trade`, layout: { visibility: 'none', 'symbol-placement': 'line', 'symbol-spacing': 120, 'text-field': '›', 'text-font': ['Open Sans Regular'], 'text-size': 22, 'text-rotation-alignment': 'map', 'text-keep-upright': false, 'text-allow-overlap': true, 'text-ignore-placement': true }, paint: { 'text-color': '#175d58', 'text-halo-color': '#fff8e9', 'text-halo-width': 1.4 } });
      map.addLayer({ id: `${prefix}-trade-port-dots`, type: 'circle', source: `${prefix}-trade-ports`, layout: { visibility: 'none' }, paint: { 'circle-radius': ['case',['==',['get','kind'],'region'],4.5,5.5], 'circle-color': '#f0c66f', 'circle-stroke-color': '#392a1d', 'circle-stroke-width': 1.5 } });
      map.addLayer({ id: `${prefix}-trade-port-labels`, type: 'symbol', source: `${prefix}-trade-ports`, layout: { visibility: 'none', 'text-field': ['get','name'], 'text-font': ['Open Sans Regular','Arial Unicode MS Regular'], 'text-size': 10, 'text-offset': [0,.9], 'text-anchor': 'top', 'text-allow-overlap': false }, paint: { 'text-color': '#35291d', 'text-halo-color': '#fff8e9', 'text-halo-width': 1.5 } });
      map.addLayer({ id: `${prefix}-military-line`, type: 'line', source: `${prefix}-military`, layout: { visibility: 'none', 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-width': 2.6, 'line-opacity': .9, 'line-color': '#a34d29' } });
      map.addLayer({ id: `${prefix}-event-circles`, type: 'circle', source: `${prefix}-events`, paint: { 'circle-radius': ['interpolate',['linear'],['zoom'],1,5,6,8], 'circle-color': ['match',['get','region'],'歐洲','#42677e','美洲','#55784c','#9f392f'], 'circle-stroke-color': '#fff4d8', 'circle-stroke-width': 1.5 } });
      map.addLayer({ id: `${prefix}-event-labels`, type: 'symbol', source: `${prefix}-events`, minzoom: 3.2, layout: { 'text-field': ['get','name'], 'text-font': ['Open Sans Regular','Arial Unicode MS Regular'], 'text-size': 11, 'text-offset': [0,1.15], 'text-anchor': 'top', 'text-allow-overlap': false }, paint: { 'text-color': '#35291d', 'text-halo-color': '#fff9eb', 'text-halo-width': 1.4 } });
      mapEventHandlers(instance);
      updateMapSources(instance);
    });
    map.on('error', event => {
      if (event?.error && !instance.ready && !instance.reportedLoadError) {
        instance.reportedLoadError = true;
        const detail = event.error.message || '底圖樣式或圖磚請求失敗';
        if (instance.role === 'preview') {
          if (previewStatus) previewStatus.textContent = `地圖底圖載入失敗：${detail}`;
        } else setStatus(`底圖服務載入失敗：${detail}。仍可使用下方歷史事件文字列表與來源連結。`);
      }
    });
    return instance;
  }
  function selectMode(id) {
    if (!modes.has(id)) return;
    currentMode = id;
    modeButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mapMode === id)));
    maps.forEach(instance=>{const mode=instance.prefix==='map-secondary'?pairedMode(id):id;instance.mode=mode;instance.camera=cameraForMode(mode);instance.map.flyTo({...instance.camera,duration:reduceMotion()?0:800});});
    setBoundaryNotice(); updateAll();
    if (window.gsap && !reduceMotion()) window.gsap.fromTo(ui.boundary, { opacity: .55, y: 4 }, { opacity: 1, y: 0, duration: .25, overwrite: true });
  }
  function syncSelection(detail) {
    if (!detail) return;
    currentYear = Number(detail.currentYear ?? detail.year ?? currentYear);
    selectedCountries = [...(detail.selectedCountries || [])];
    const match = [...ui.country.options].find(option => option.value && option.value === (selectedCountries[0] || ''));
    ui.country.value = selectedCountries.length === 1 && match ? match.value : '';
    updateAll();
  }
  function bindControls() {
    modeButtons.forEach(button => button.addEventListener('click', () => selectMode(button.dataset.mapMode)));
    ui.split.addEventListener('click', () => {
      const enabled = ui.split.getAttribute('aria-pressed') !== 'true';
      ui.split.setAttribute('aria-pressed', String(enabled));
      ui.split.textContent = enabled ? '關閉雙地圖比較' : '左右雙地圖比較';
      ui.secondary.hidden = !enabled;
      ui.grid.classList.toggle('is-split', enabled);
      if (enabled && maplibre && !maps.some(instance=>instance.prefix==='map-secondary')) createMap('historical-map-secondary', 'map-secondary', pairedMode(currentMode));
      updateAll();
      requestAnimationFrame(() => maps.forEach(instance => instance.map.resize()));
    });
    root.querySelector('[data-map-reset]').addEventListener('click', () => maps.forEach(instance => instance.map.flyTo({ ...(instance.camera||cameraForMode(instance.mode)), duration: reduceMotion() ? 0 : 900 })));
    root.querySelector('[data-map-fullscreen]').addEventListener('click', async () => {
      try { if (!document.fullscreenElement) await ui.grid.requestFullscreen(); else await document.exitFullscreen(); maps.forEach(instance => instance.map.resize()); }
      catch { setStatus('此瀏覽器不允許全螢幕；地圖仍可正常縮放與拖曳。'); }
    });
    ui.country.addEventListener('change', () => {
      selectedCountries = ui.country.value ? [ui.country.value] : [];
      window.HistoricalTimeController?.setSelections({ selectedCountries });
      updateAll();
    });
    ui.features.addEventListener('click', event => {
      const button = event.target.closest('[data-map-focus]'); if (!button) return;
      focusFeature(button.dataset.mapKind, button.dataset.mapFocus);
    });
    const motionObserver = new MutationObserver(() => allMapInstances().forEach(instance => { if (reduceMotion()) { stopRouteAnimations(instance); showCompleteLines(instance); stopShips(instance); } else { animateRoutes(instance); if(instance.mode==='trade')animateShips(instance,visibleRoutes(instance.mode)); } }));
    motionObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motionChanged = () => allMapInstances().forEach(instance => { if (reduceMotion()) { stopRouteAnimations(instance); showCompleteLines(instance); stopShips(instance); } else { animateRoutes(instance); if(instance.mode==='trade')animateShips(instance,visibleRoutes(instance.mode)); } });
    media.addEventListener ? media.addEventListener('change', motionChanged) : media.addListener(motionChanged);
    window.addEventListener('pagehide', () => { motionObserver.disconnect(); mapViewObserver?.disconnect(); media.removeEventListener?.('change', motionChanged); destroyed = true; unsubscribeMap(); unsubTime(); allMapInstances().forEach(instance => { stopShips(instance); killProgress(instance.progress); instance.map.remove(); }); }, { once: true });
  }
  function installCountryOptions(economic) {
    const names = [...new Set(economic.observations.map(row => row.country))].sort((a,b) => a.localeCompare(b,'zh-TW'));
    ui.country.insertAdjacentHTML('beforeend', names.map(name => `<option value="${esc(name)}">${esc(name)}</option>`).join(''));
  }
  async function init() {
    bindControls();
    const loaded = await window.HistoricalMapLibraryLoader.loadResources(async path => {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    });
    dataIndex = loaded.index; sources = loaded.sources; dataLoadWarnings = loaded.warnings;
    dataIndex.modes.forEach(mode => modes.set(mode.id, mode));
    mapData = { events:loaded.events, trade:loaded.trade, military:loaded.military, polities:{type:'FeatureCollection',features:[]} };
    installCountryOptions(loaded.economics);
    renderSources();
    const controller = window.HistoricalTimeController;
    if (controller) {
      syncSelection(controller.getSnapshot());
      unsubscribeMap = window.HistoricalMapAdapter?.subscribe(syncSelection) || (() => {});
      if (typeof controller.subscribe === 'function') unsubTime = controller.subscribe(syncSelection);
    }
    setBoundaryNotice(); updateAll();
    if (dataLoadWarnings.length) setStatus(`地圖已啟動，但有資料未載入：${dataLoadWarnings.join(' ')}`);
    fetch('./data/maps/historical-polities.geojson')
      .then(response => { if(!response.ok)throw new Error(`HTTP ${response.status}`); return response.json(); })
      .then(polityResult => { if(destroyed)return; mapData.polities=polityResult; polityLoadMessage='政體範圍圖層已載入。'; updateAll(); })
      .catch(error => { if(destroyed)return; console.error('Historical polity polygons could not load:',error); polityLoadMessage='政體範圍圖層未能載入；事件與路線地圖仍可使用。'; setBoundaryNotice(); setStatus(`${currentYear}年｜事件與路線已載入；政體多邊形載入失敗，請確認 data/maps/historical-polities.geojson 可讀取。`); });
    const ensureMapLibre = async () => {
      if (maplibre) return maplibre;
      if (!mapLibraryPromise) mapLibraryPromise = window.MapLibreGL ? Promise.resolve(window.MapLibreGL) : window.HistoricalMapLibraryLoader.loadMapLibre();
      maplibre = await mapLibraryPromise;
      return maplibre;
    };
    const startPrimaryMap = async () => {
      if (mapStarted || destroyed) return;
      mapStarted = true;
      try {
        await ensureMapLibre();
        createMap('historical-map-primary','map-primary',currentMode);
        if (!ui.secondary.hidden) createMap('historical-map-secondary','map-secondary',pairedMode(currentMode));
        if (window.gsap && window.ScrollTrigger && !reduceMotion()) {
          window.gsap.registerPlugin(window.ScrollTrigger);
          window.gsap.fromTo(root.querySelector('.map-panel'), { autoAlpha:0, y:18 }, { autoAlpha:1, y:0, duration:.65, ease:'power2.out', scrollTrigger:{ trigger:root, start:'top 86%', once:true } });
        }
      } catch(error) {
        mapStarted = false;
        console.error('MapLibre or basemap failed to load:', error);
        setStatus(`互動底圖服務未能載入：${error?.message || '未知錯誤'}。來源事件文字清單仍可使用。`);
        const detail = esc(error?.message || '未知錯誤');
        root.querySelector('[data-map-primary-view]').insertAdjacentHTML('beforeend',`<div class="map-error-panel"><strong>底圖未載入</strong><p>${detail}</p><p>歷史事件、來源連結與 GeoJSON 資料清單仍可使用；請檢查網路連線後重整。</p></div>`);
      }
    };
    const startPreviewMap = async () => {
      if (!previewContainer || previewStarted || destroyed) return;
      previewStarted = true;
      try {
        await ensureMapLibre();
        createMap('global-history-map-preview','map-preview','polities','preview');
        requestAnimationFrame(()=>previewInstance?.map.resize());
        if (previewStatus) previewStatus.textContent = `${currentYear} 年｜已與上方年份、事件及國家篩選同步。`;
      } catch(error) {
        previewStarted = false;
        console.error('Historical map preview failed to load:',error);
        if (previewStatus) previewStatus.textContent = `地圖預覽載入失敗：${error?.message || '未知錯誤'}`;
        previewContainer.insertAdjacentHTML('afterend',`<div class="map-error-panel"><strong>第三階段地圖預覽未能載入</strong><p>${esc(error?.message || '請檢查 MapLibre CDN 連線。')}</p><p>完整圖層與互動控制仍可在第四階段查看。</p></div>`);
      }
    };
    if ('IntersectionObserver' in window) {
      mapViewObserver = new IntersectionObserver(entries => {
        entries.forEach(entry=>{
          if (!entry.isIntersecting) return;
          mapViewObserver.unobserve(entry.target);
          if (entry.target === previewContainer) startPreviewMap();
          else if (entry.target === root) startPrimaryMap();
        });
      }, { rootMargin:'300px' });
      mapViewObserver.observe(root);
      if (previewContainer) mapViewObserver.observe(previewContainer);
    } else {
      startPrimaryMap();
      startPreviewMap();
    }
  }
  init().catch(error => {
    console.error('Historical map initialization failed:', error);
    const fileProtocol = window.location?.protocol === 'file:';
    const recovery = fileProtocol
      ? '目前以 file:// 開啟，瀏覽器會阻擋 JSON／GeoJSON。請解壓網站後執行 start-local-site.cmd，再用開啟的本機網址進入。'
      : `資料載入失敗：${error?.message || '未知錯誤'}。請確認地圖索引及相對路徑可讀取，且 MapLibre CDN、OpenFreeMap 底圖與網站 CSP 允許連線。`;
    setStatus(`互動地圖或其資料服務未能載入。${recovery}`);
    if (previewStatus) previewStatus.textContent = `互動地圖資料載入失敗：${error?.message || recovery}`;
    if (previewContainer) previewContainer.insertAdjacentHTML('afterend',`<div class="map-error-panel"><strong>第三階段地圖預覽未能載入</strong><p>${esc(recovery)}</p></div>`);
    root.querySelector('.map-view-grid').innerHTML = `<div class="map-error-panel"><strong>互動地圖目前無法載入</strong><p>${esc(recovery)}</p><p>地圖需要 MapLibre GL JS、線上底圖及同資料夾的 GeoJSON。請改用<a href="#global-history">共用歷史事件年表</a>查閱事件、年份與原始來源。</p></div>`;
    if (mapData) renderFeatureList();
  });
  window.HistoricalMap = {
    getState: () => ({ currentYear, mode:currentMode, selectedCountries:[...selectedCountries], views:maps.length, preview:previewInstance?.prefix || null, mapViews:maps.map(instance=>({id:instance.prefix,mode:instance.mode,center:instance.map.getCenter().toArray(),zoom:instance.map.getZoom()})) }),
    setMode: selectMode,
    focusFeature: (kind,id) => focusFeature(kind,String(id)),
    destroy() { destroyed=true; unsubscribeMap(); unsubTime(); allMapInstances().forEach(instance=>{stopShips(instance);killProgress(instance.progress);instance.map.remove();}); maps.length=0; previewInstance=null; },
  };
})();
