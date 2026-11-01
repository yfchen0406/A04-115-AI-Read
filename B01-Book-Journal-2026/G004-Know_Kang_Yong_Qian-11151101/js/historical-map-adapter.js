/* Stable adapter contract for the phase-four historical map module. */
(() => {
  'use strict';
  let current = { year: 1750, currentYear: 1750, selectedRegions: ['qing','europe','america'], selectedCountries: [], selectedEvent: null, mapLayerVisibility: { borders:true, tradeRoutes:false, events:true } };
  const listeners = new Set();
  let mapUpdateListener = null;
  const controllerAtStart = window.HistoricalTimeController;
  if (controllerAtStart) {
    const initial = controllerAtStart.getSnapshot();
    current = { ...current, ...initial, year: initial.currentYear, currentYear: initial.currentYear, selectedRegions:[...initial.selectedRegions], selectedCountries:[...initial.selectedCountries], mapLayerVisibility:{...initial.mapLayerVisibility} };
  }
  function updateHistoricalMap(year, selectedRegions = current.selectedRegions) {
    const requestedYear = Math.max(1661, Math.min(1799, Math.round(Number(year)||1661)));
    current = { ...current, year: requestedYear, currentYear: requestedYear, selectedRegions: [...new Set(selectedRegions)] };
    const controller = window.HistoricalTimeController;
    if (controller) {
      controller.setCurrentYear(requestedYear, { source: 'map-adapter', selections: { selectedRegions: current.selectedRegions } });
    } else {
      listeners.forEach(callback => callback({ ...current, selectedRegions:[...current.selectedRegions], selectedCountries:[...current.selectedCountries], mapLayerVisibility:{...current.mapLayerVisibility} }));
    }
    return { ...current, selectedRegions:[...current.selectedRegions] };
  }
  mapUpdateListener = event => {
    const currentYear = event.detail.currentYear ?? event.detail.year;
    current = { ...current, ...event.detail, year: currentYear, currentYear, selectedRegions:[...event.detail.selectedRegions], selectedCountries:[...event.detail.selectedCountries], mapLayerVisibility:{...event.detail.mapLayerVisibility} };
    listeners.forEach(callback => callback({ ...current, selectedRegions:[...current.selectedRegions], selectedCountries:[...current.selectedCountries], mapLayerVisibility:{...current.mapLayerVisibility} }));
  };
  window.addEventListener('historicalmapupdate', mapUpdateListener);
  window.HistoricalMapAdapter = { updateHistoricalMap, getState: () => ({ ...current, selectedRegions:[...current.selectedRegions], selectedCountries:[...current.selectedCountries], mapLayerVisibility:{...current.mapLayerVisibility} }), subscribe(callback) { listeners.add(callback); return () => listeners.delete(callback); }, destroy() { window.removeEventListener('historicalmapupdate', mapUpdateListener); listeners.clear(); } };
  window.updateHistoricalMap = updateHistoricalMap;
})();
