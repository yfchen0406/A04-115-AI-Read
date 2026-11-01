'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const rootDir=path.join(__dirname,'..');
const window={};
vm.runInNewContext(fs.readFileSync(path.join(rootDir,'js/historical-map-loader.js'),'utf8'),{window,Promise,URL},{filename:'historical-map-loader.js'});
const loader=window.HistoricalMapLibraryLoader;
const fixture={index:{baseMap:{style:'https://example.test/style.json'},modes:[]},events:{type:'FeatureCollection',features:[{id:'event'}]},trade:{type:'FeatureCollection',features:[{id:'trade'}]},military:{type:'FeatureCollection',features:[{id:'military'}]},sources:{sources:[{id:'source'}]},economics:{observations:[{country:'清朝'}]}};

async function main(){
  assert.equal(typeof loader?.loadResources,'function','the loader exposes a testable resource-loading boundary');
  const partial=await loader.loadResources(async path=>{
    if(path.includes('historical-events.geojson'))throw new Error('HTTP 404');
    const key=path.includes('historical-map-index')?'index':path.includes('trade-routes')?'trade':path.includes('military-campaigns')?'military':path.includes('historical-map-sources')?'sources':'economics';
    return fixture[key];
  });
  assert.equal(partial.events.features.length,0,'a missing optional event GeoJSON degrades to an empty collection');
  assert.equal(partial.trade.features.length,1,'other map layers remain available after one data request fails');
  assert.equal(partial.economics.observations.length,1,'successful economic data remains available');
  assert.ok(partial.warnings.some(message=>message.includes('historical-events.geojson')),'the UI can identify which data path failed');
  await assert.rejects(()=>loader.loadResources(async path=>{
    if(path.includes('historical-map-index'))throw new Error('HTTP 404');
    return fixture.events;
  }),/historical-map-index\.json/,'a missing required map index reports the exact path');

  const attempts=[];
  const namespace={Map:class{}};
  const loaded=await loader.loadMapLibre(async url=>{
    attempts.push(url);
    if(attempts.length===1)throw new Error('primary CDN blocked');
    return namespace;
  });
  assert.equal(loaded,namespace,'MapLibre loads from the backup CDN when the first host fails');
  assert.equal(attempts.length,2,'both CDN hosts are attempted in order');
  await assert.rejects(()=>loader.loadMapLibre(async()=>{throw new Error('offline');}),/cdn\.jsdelivr\.net.*unpkg\.com/,'failure from both hosts yields an actionable diagnostic');
  console.log('PASS historical map loader: partial data failures, required index diagnostics, and MapLibre CDN fallback.');
}
main().catch(error=>{console.error(error);process.exitCode=1;});
