(() => {
  'use strict';
  const emptyCollection = () => ({ type:'FeatureCollection', features:[] });
  const resources = [
    { key:'index', path:'./data/historical-map-index.json', required:true, fallback:null },
    { key:'events', path:'./data/maps/historical-events.geojson', fallback:emptyCollection() },
    { key:'trade', path:'./data/maps/trade-routes.geojson', fallback:emptyCollection() },
    { key:'military', path:'./data/maps/military-campaigns.geojson', fallback:emptyCollection() },
    { key:'sources', path:'./data/historical-map-sources.json', fallback:{ sources:[] } },
    { key:'economics', path:'./economic_data.json', fallback:{ observations:[] } },
  ];
  const mapLibreUrls = [
    'https://cdn.jsdelivr.net/npm/maplibre-gl@6.16.0/dist/maplibre-gl.mjs',
    'https://unpkg.com/maplibre-gl@6.16.0/dist/maplibre-gl.mjs',
  ];
  async function defaultFetchJSON(path) {
    const response = await window.fetch(path);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  }
  async function loadResources(fetchJSON=defaultFetchJSON) {
    const settled = await Promise.allSettled(resources.map(resource => fetchJSON(resource.path)));
    const result = {};
    const warnings = [];
    settled.forEach((entry,index) => {
      const resource = resources[index];
      if (entry.status === 'fulfilled') {
        result[resource.key] = entry.value;
        return;
      }
      if (resource.required) throw new Error(`${resource.path} 載入失敗：${entry.reason?.message || entry.reason}`);
      result[resource.key] = resource.fallback;
      warnings.push(`${resource.path} 載入失敗：${entry.reason?.message || entry.reason}；該資料層將暫時略過。`);
    });
    result.warnings = warnings;
    return result;
  }
  async function loadMapLibre(importModule=url=>import(url)) {
    const errors = [];
    for (const url of mapLibreUrls) {
      try { return await importModule(url); }
      catch (error) { errors.push(`${new URL(url).host}：${error?.message || error}`); }
    }
    throw new Error(`MapLibre GL JS 的兩個 CDN 都無法載入（${errors.join('；')}）。請檢查網路或瀏覽器的內容封鎖設定。`);
  }
  window.HistoricalMapLibraryLoader = { loadResources, loadMapLibre, mapLibreUrls:[...mapLibreUrls] };
})();
