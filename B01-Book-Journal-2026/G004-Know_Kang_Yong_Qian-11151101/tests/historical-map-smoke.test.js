'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const rootDir=path.join(__dirname,'..');
const fixtures={
  './data/historical-map-index.json':JSON.parse(fs.readFileSync(path.join(rootDir,'data/historical-map-index.json'),'utf8')),
  './data/maps/historical-events.geojson':JSON.parse(fs.readFileSync(path.join(rootDir,'data/maps/historical-events.geojson'),'utf8')),
  './data/maps/trade-routes.geojson':JSON.parse(fs.readFileSync(path.join(rootDir,'data/maps/trade-routes.geojson'),'utf8')),
  './data/maps/military-campaigns.geojson':JSON.parse(fs.readFileSync(path.join(rootDir,'data/maps/military-campaigns.geojson'),'utf8')),
  './data/maps/historical-polities.geojson':JSON.parse(fs.readFileSync(path.join(rootDir,'data/maps/historical-polities.geojson'),'utf8')),
  './data/historical-map-sources.json':JSON.parse(fs.readFileSync(path.join(rootDir,'data/historical-map-sources.json'),'utf8')),
  './economic_data.json':JSON.parse(fs.readFileSync(path.join(rootDir,'economic_data.json'),'utf8')),
};
class Element{
  constructor(dataset={}){this.dataset=dataset;this.handlers={};this.attributes={};this.innerHTML='';this.textContent='';this.value='';this.hidden=false;this.options=[];this.selectedIndex=0;this.classList={toggle(){}};}
  addEventListener(type,fn){(this.handlers[type]??=[]).push(fn);}
  removeEventListener(type,fn){this.handlers[type]=(this.handlers[type]||[]).filter(item=>item!==fn);}
  fire(type,event={}){for(const fn of this.handlers[type]||[])fn({target:this,...event});}
  setAttribute(key,value){this.attributes[key]=value;}
  getAttribute(key){return this.attributes[key]??null;}
  insertAdjacentHTML(_where,html){this.innerHTML+=html;this.options.push(...[...html.matchAll(/<option value="([^"]*)">([^<]*)<\/option>/g)].map(match=>({value:match[1],text:match[2]})));}
  querySelectorAll(){return [];}
  closest(){return null;}
  requestFullscreen(){return Promise.resolve();}
  scrollIntoView(){}
  append(...nodes){this.children=(this.children||[]).concat(nodes);}
}
const selectors=['[data-map-year]','[data-map-status]','[data-map-feature-list]','[data-map-boundary-notice]','[data-map-source-list]','[data-map-country]','[data-map-split]','[data-map-view-grid]','[data-map-secondary-view]','[data-map-primary-title]','[data-map-secondary-title]','[data-map-reset]','[data-map-fullscreen]','[data-map-primary-view]'];
const elements=new Map(selectors.map(selector=>[selector,new Element()]));
const previewContainer=new Element();
const previewStatus=new Element();
const previewYear=new Element();
elements.get('[data-map-secondary-view]').hidden=true;
elements.get('[data-map-split]').setAttribute('aria-pressed','false');
const modes=['polities','qing','europe','americas','trade','military'].map(mapMode=>new Element({mapMode}));
const root=new Element();root.querySelector=selector=>elements.get(selector)||null;root.querySelectorAll=selector=>selector==='[data-map-mode]'?modes:[];
const eventListeners={};
const timeListeners=new Set();
const lineExpressions=[];
const timeState={currentYear:1750,selectedCountries:[],selectedRegions:['qing','europe','america'],mapLayerVisibility:{},selectedEvent:null};
const controller={getSnapshot:()=>({...timeState,selectedCountries:[...timeState.selectedCountries],selectedRegions:[...timeState.selectedRegions]}),subscribe(fn){timeListeners.add(fn);return()=>timeListeners.delete(fn);},setSelections(patch){Object.assign(timeState,patch);for(const fn of timeListeners)fn(controller.getSnapshot());},setCurrentYear(value){timeState.currentYear=Number(value);for(const fn of timeListeners)fn(controller.getSnapshot());}};
class FakeMap{
  constructor(options){this.options=options;this.handlers={};this.sources={};this.layers={};this.paint={};this.layout={};this.onceHandlers={};this.removed=false;this.zoom=1;this.markers=[];queueMicrotask(()=>this.fire('load'));}
  once(name,fn){(this.onceHandlers[name]??=[]).push(fn);}
  on(name,layerOrFn,maybeFn){if(typeof layerOrFn==='function')this.handlers[name]=layerOrFn;else this.handlers[`${name}:${layerOrFn}`]=maybeFn;}
  fire(name,value={}){for(const fn of this.onceHandlers[name]||[])fn(value);this.onceHandlers[name]=[];this.handlers[name]?.(value);}
  addControl(){}
  addSource(id,source){this.sources[id]={...source,setData(data){this.data=data;},data:source.data};}
  getSource(id){return this.sources[id];}
  addLayer(layer){this.layers[layer.id]=layer;}
  hasImage(){return false;}
  addImage(){}
  getLayer(id){return this.layers[id];}
  setPaintProperty(id,key,value){this.paint[`${id}:${key}`]=value;if(key==='line-gradient')lineExpressions.push(value);}
  setLayoutProperty(id,key,value){this.layout[`${id}:${key}`]=value;}
  isStyleLoaded(){return true;}
  flyTo(options){this.lastFlyTo=options;this.zoom=options.zoom;}
  getZoom(){return this.zoom;}
  getCenter(){return {toArray:()=>this.center||this.options.center};}
  resize(){this.didResize=true;}
  remove(){this.removed=true;}
  getCanvas(){return {style:{}};}
  queryRenderedFeatures(_point,options){return options?.layers?[]:(this.baseFeatures||[]);}
}
const mapInstances=[];
class FakeMapClass extends FakeMap{constructor(options){super(options);mapInstances.push(this);}}
class FakeMarker{constructor(options){this.options=options;this.removed=false;}setLngLat(value){this.lngLat=value;return this;}setRotation(value){this.rotation=value;return this;}addTo(map){this.map=map;map.markers.push(this);return this;}remove(){this.removed=true;this.map.markers=this.map.markers.filter(marker=>marker!==this);return this;}}
const popupNodes=[];
const popupInstances=[];
class Popup{setLngLat(){return this;}setDOMContent(node){popupNodes.push(node);return this;}addTo(map){this.map=map;popupInstances.push(this);return this;}}
class IntersectionObserver{constructor(callback){this.callback=callback;globalThis.observer=this;}observe(){}unobserve(){}disconnect(){}}
const motionObservers=[];class MutationObserver{constructor(callback){this.callback=callback;motionObservers.push(this);}observe(){}disconnect(){}}
let motionDisabled=false;
const document={getElementById:id=>id==='historical-map'?root:id==='global-history-map-preview'?previewContainer:id==='global-history-map-preview-status'?previewStatus:null,querySelector:selector=>selector==='[data-map-preview-year]'?previewYear:null,documentElement:{classList:{contains:()=>motionDisabled}},fullscreenElement:null,createElement:()=>new Element(),exitFullscreen:()=>Promise.resolve()};
const gsap={killTweensOf(){},fromTo(){},to(proxy,config){proxy.value=.45;config.onUpdate();proxy.value=1;config.onUpdate();config.onComplete?.();}};
const window={HistoricalTimeController:controller,MapLibreGL:{Map:FakeMapClass,Popup,Marker:FakeMarker,NavigationControl:class{}},IntersectionObserver,gsap,matchMedia:()=>({matches:false,addEventListener(){},removeEventListener(){}}),addEventListener(type,fn){(eventListeners[type]??=[]).push(fn);},removeEventListener(type,fn){eventListeners[type]=(eventListeners[type]||[]).filter(item=>item!==fn);},requestAnimationFrame(fn){fn();}};
const context={window,document,fetch:async url=>({ok:true,json:async()=>fixtures[url]}),IntersectionObserver,MutationObserver,console,requestAnimationFrame:fn=>fn()};
vm.runInNewContext(fs.readFileSync(path.join(rootDir,'js/historical-map-loader.js'),'utf8'),context,{filename:'historical-map-loader.js'});
vm.runInNewContext(fs.readFileSync(path.join(rootDir,'js/historical-map.js'),'utf8'),context,{filename:'historical-map.js'});
const tick=()=>new Promise(resolve=>setImmediate(resolve));
async function main(){
  await tick();await tick();
  assert.equal(elements.get('[data-map-year]').textContent,'1750','map initializes from shared year');
  globalThis.observer.callback([{isIntersecting:true,target:root}]);await tick();await tick();
  assert.equal(mapInstances.length,1,'primary map initializes lazily when its section enters view');
  const primary=mapInstances[0];
  assert.equal(primary.options.style,fixtures['./data/historical-map-index.json'].baseMap.style,'map uses the registered basemap');
  assert.equal(primary.options.cooperativeGestures,true,'map uses cooperative mouse and touch gestures');
  assert.notEqual(primary.options.scrollZoom,false,'wheel zoom remains enabled');
  assert.equal(primary.sources['map-primary-trade'].lineMetrics,true,'trade source enables line progress metrics');
  assert.ok(primary.getLayer('map-primary-trade-arrows'),'trade routes include direction arrows');
  assert.ok(primary.getLayer('map-primary-polity-fill'),'historical polity polygons have a visible map layer');
  const qingPolity=fixtures['./data/maps/historical-polities.geojson'].features.find(feature=>feature.properties.polity==='Qing Dynasty'&&feature.properties.start_year<=1750&&feature.properties.end_year>=1750);
  assert.ok(primary.getSource('map-primary-polities').data.features.some(feature=>feature.properties.polity==='Qing Dynasty'),'world polity mode shows the dated Qing extent');
  assert.ok(elements.get('[data-map-feature-list]').innerHTML.includes('清朝｜來源所繪政體範圍'),'the accessible text list includes the dated polity and its data type');
  modes.find(button=>button.dataset.mapMode==='qing').fire('click');
  assert.ok(primary.getSource('map-primary-polities').data.features.every(feature=>feature.properties.region==='清朝'),'Qing mode filters historical polygons by region');
  primary.handlers['click:map-primary-polity-fill']({features:[qingPolity]});
  assert.ok(popupNodes.at(-1).children.some(child=>child.textContent==='Cliopatria v0.2.1 資料與方法'),'clicking a historical polity opens its source and caveat popup');
  assert.ok(primary.getLayer('map-primary-trade-port-dots')&&primary.getLayer('map-primary-trade-port-labels'),'trade map includes port and harbor-area markers');
  assert.equal(primary.sources['map-primary-military'].lineMetrics,true,'military source enables line progress metrics');
  assert.equal(primary.getLayer('map-primary-military-line').paint['line-dasharray'],undefined,'military gradient line is not disabled by a dash pattern');
  assert.ok(lineExpressions.some(expression=>expression[0]==='interpolate'&&expression.some(value=>typeof value==='number'&&value>.4&&value<.6)),'GSAP route draw uses a valid interpolation expression at partial progress');
  for(const expression of lineExpressions){const stops=expression.filter(value=>typeof value==='number');assert.equal(stops[0],0);assert.equal(stops.at(-1),1);assert.ok(stops.every((stop,index)=>index===0||stop>stops[index-1]),'animated line-gradient stops remain strictly increasing even at tween completion');}
  controller.setCurrentYear(1750);
  modes.find(button=>button.dataset.mapMode==='trade').fire('click');
  assert.equal(elements.get('[data-map-status]').textContent.includes('全球貿易航線'),true,'mode switch updates accessible status');
  assert.ok(primary.getSource('map-primary-trade').data.features.length>0,'trade mode displays time-valid trade GeoJSON');
  assert.ok(primary.getSource('map-primary-trade-ports').data.features.length>=20,'trade mode shows named source-backed ports and regional endpoints');
  assert.equal(primary.markers.length,7,'each active trade route has a moving sailboat marker');
  assert.ok(primary.markers.every(marker=>Array.isArray(marker.lngLat)&&Number.isFinite(marker.rotation)),'moving ship markers receive route positions and headings');
  const keyboardBoat=primary.markers[0].options.element;
  assert.equal(keyboardBoat.getAttribute('role'),'button','sailboat markers expose button semantics');
  assert.equal(keyboardBoat.getAttribute('tabindex'),'0','sailboat markers can receive keyboard focus');
  assert.match(keyboardBoat.getAttribute('aria-label'),/按 Enter 查看路線/,'sailboat marker explains its keyboard action');
  const popupsBeforeKeyboard=popupNodes.length;
  keyboardBoat.fire('keydown',{key:'Enter',preventDefault(){}});
  assert.ok(popupNodes.length>popupsBeforeKeyboard,'Enter opens the focused sailboat route details');
  assert.ok(popupNodes.at(-1).children.some(child=>child.textContent.includes('商品／歷史性質：')),'keyboard-opened route detail includes trade information');
  const popupsBeforeSpace=popupNodes.length;
  keyboardBoat.fire('keydown',{key:' ',preventDefault(){}});
  assert.ok(popupNodes.length>popupsBeforeSpace,'Space also opens the focused sailboat route details');
  motionDisabled=true;motionObservers[0].callback();assert.equal(primary.markers.length,0,'reduced-motion setting removes moving sailboat markers');
  motionDisabled=false;motionObservers[0].callback();assert.equal(primary.markers.length,7,'reenabling motion resumes the moving sailboat markers');
  assert.equal(primary.paint['map-primary-trade-line:line-gradient'][0],'interpolate','route animation uses a supported line-gradient expression');
  assert.ok(elements.get('[data-map-feature-list]').innerHTML.includes('主要商品：'),'trade cards display their commodities');
  assert.ok(elements.get('[data-map-feature-list]').innerHTML.includes('貿易組織／網絡：'),'trade cards display organizations');
  const clickedTrade=primary.getSource('map-primary-trade').data.features[0];
  primary.handlers['click:map-primary-trade-line']({features:[clickedTrade]});
  const tradePopup=popupNodes.find(node=>node.children?.some(child=>child.textContent===clickedTrade.properties.name));
  assert.ok(tradePopup,'clicking a trade route opens its detail popup');
  assert.ok(tradePopup.children.some(child=>child.textContent.includes('商品／歷史性質：')),'trade route popup explains its commodities or historical nature');
  assert.ok(tradePopup.children.some(child=>child.href===fixtures['./data/historical-map-sources.json'].sources.find(source=>source.id===clickedTrade.properties.source_id).url),'trade route popup links its registered source');
  modes.find(button=>button.dataset.mapMode==='qing').fire('click');
  assert.equal(primary.markers.length,0,'sailboat markers are removed when leaving trade mode');
  controller.setCurrentYear(1675);
  assert.equal(elements.get('[data-map-year]').textContent,'1675','shared controller year updates map label');
  assert.ok(primary.getSource('map-primary-military').data.features.some(feature=>feature.properties.id==='war-three-feudatories'),'Qing military layer filters by year and mode');
  modes.find(button=>button.dataset.mapMode==='military').fire('click');
  controller.setCurrentYear(1776);
  const clickedMilitary=primary.getSource('map-primary-military').data.features[0];
  primary.handlers['click:map-primary-military-line']({features:[clickedMilitary]});
  const militaryPopup=popupNodes.find(node=>node.children?.some(child=>child.textContent===clickedMilitary.properties.name));
  assert.ok(militaryPopup,'clicking a military route opens its detail popup');
  assert.ok(militaryPopup.children.some(child=>child.textContent.includes('交戰方：')),'military popup names the opposing sides');
  assert.ok(militaryPopup.children.some(child=>child.textContent.includes('結果：')),'military popup explains the outcome');
  for(const [mode,region] of [['qing','清朝'],['europe','歐洲'],['americas','美洲']]){
    const sample=fixtures['./data/maps/historical-events.geojson'].features.find(feature=>feature.properties.region===region);
    modes.find(button=>button.dataset.mapMode===mode).fire('click');
    controller.setCurrentYear(sample.properties.start_year);
    const visible=primary.getSource('map-primary-events').data.features;
    assert.ok(visible.length>0&&visible.every(feature=>feature.properties.region===region),`${mode} mode shows only its corresponding event region`);
    const polity=fixtures['./data/maps/historical-polities.geojson'].features.find(feature=>feature.properties.region===region);
    modes.find(button=>button.dataset.mapMode===mode).fire('click');
    controller.setCurrentYear(polity.properties.start_year);
    const visiblePolities=primary.getSource('map-primary-polities').data.features;
    assert.ok(visiblePolities.length>0&&visiblePolities.every(feature=>feature.properties.region===region),`${mode} mode shows only its dated historical polity polygons`);
  }
  modes.find(button=>button.dataset.mapMode==='military').fire('click');
  controller.setCurrentYear(1776);
  assert.ok(primary.getSource('map-primary-military').data.features.length>0,'military mode displays conflicts active in the selected year');
  assert.equal(primary.paint['map-primary-military-line:line-gradient'][0],'interpolate','military route animation uses a supported line-gradient expression');
  assert.ok(elements.get('[data-map-feature-list]').innerHTML.includes('主要交戰方：'),'military cards display opposing parties');
  assert.ok(elements.get('[data-map-feature-list]').innerHTML.includes('戰事結果：'),'military cards display outcomes');
  elements.get('[data-map-country]').value='英國';
  elements.get('[data-map-country]').fire('change');
  assert.equal(JSON.stringify(timeState.selectedCountries),JSON.stringify(['英國']),'country selector publishes the shared country filter');
  assert.ok(JSON.stringify(primary.paint['map-primary-event-circles:circle-color']).includes('英國'),'country selection highlights matching event points');
  elements.get('[data-map-country]').value='';
  elements.get('[data-map-country]').fire('change');
  for(const [englishName,economyName] of [['China','清朝／中國'],['United Kingdom','英國'],['France','法國'],['Netherlands','荷蘭'],['Spain','西班牙'],['Russia','俄羅斯'],['United States','美國']]){
    primary.baseFeatures=[{properties:{name:englishName}}];
    primary.fire('click',{point:{x:12,y:18}});
    assert.equal(JSON.stringify(timeState.selectedCountries),JSON.stringify([economyName]),`clicking ${englishName} selects its matching economic country`);
    assert.match(elements.get('[data-map-status]').textContent,new RegExp(`已選取「${economyName}」.*底圖國界僅為現代定位資料`),`${englishName} selection explains the modern-basemap limitation`);
    primary.fire('click',{point:{x:12,y:18}});
    assert.equal(JSON.stringify(timeState.selectedCountries),JSON.stringify([]),`clicking ${englishName} again clears its shared filter`);
    assert.match(elements.get('[data-map-status]').textContent,new RegExp(`已取消「${economyName}」`),`${englishName} deselection is announced accurately`);
  }
  primary.baseFeatures=[];
  const treaty=fixtures['./data/maps/historical-events.geojson'].features.find(feature=>feature.properties.event_id==='hist-1683-04');
  modes.find(button=>button.dataset.mapMode==='qing').fire('click');
  primary.handlers['click:map-primary-event-circles']({features:[treaty]});
  assert.equal(timeState.currentYear,1683,'clicking a map marker updates the shared year');
  assert.equal(timeState.selectedEvent,'hist-1683-04','clicking a map marker publishes the selected event ID');
  assert.ok(elements.get('[data-map-feature-list]').innerHTML.includes('清軍攻取臺灣'),'map event selection renders its synchronized event detail');
  const eventPopup=popupNodes.at(-1);
  assert.ok(eventPopup.children.some(child=>child.href==='#kangxi'&&child.textContent==='前往康熙章節'),'Qing event popup links directly to the relevant emperor chapter');
  assert.ok(eventPopup.children.some(child=>child.href==='#global-history'&&child.textContent==='前往同步歷史事件面板'),'Qing event popup also links to the synchronized timeline');
  elements.get('[data-map-split]').fire('click');await tick();await tick();
  assert.equal(mapInstances.length,2,'split comparison creates an independent second map');
  assert.equal(elements.get('[data-map-secondary-view]').hidden,false,'split comparison view is revealed');
  assert.equal(mapInstances[1].options.center.join(','),'15,50','comparison map starts at the paired European view for Qing mode');
  assert.notEqual(mapInstances[1].options.center.join(','),mapInstances[0].options.center.join(','),'comparison maps use different regional camera views');
  assert.equal(mapInstances[1].options.style,mapInstances[0].options.style,'both maps share the basemap while keeping independent data modes');
  assert.equal(elements.get('[data-map-primary-title]').textContent,'清朝疆域（來源概略範圍）','primary title names the selected mode');
  assert.equal(elements.get('[data-map-secondary-title]').textContent,'歐洲政權（來源概略範圍）','secondary title names its comparison mode');
  assert.ok(mapInstances[0].getSource('map-primary-polities').data.features.every(feature=>feature.properties.region==='清朝'),'primary comparison map keeps its Qing mode');
  assert.ok(mapInstances[1].getSource('map-secondary-polities').data.features.every(feature=>feature.properties.region==='歐洲'),'secondary comparison map shows the paired Europe mode');
  assert.ok(mapInstances[0].getSource('map-primary-events').data.features.every(feature=>feature.properties.region==='清朝'),'primary comparison events are filtered to Qing');
  assert.ok(mapInstances[1].getSource('map-secondary-events').data.features.every(feature=>feature.properties.region==='歐洲'),'secondary comparison events are filtered to Europe');
  elements.get('[data-map-country]').value='英國';
  elements.get('[data-map-country]').fire('change');
  assert.equal(JSON.stringify(timeState.selectedCountries),JSON.stringify(['英國']),'a country selection remains shared across both comparison maps');
  assert.ok(mapInstances.every(map=>JSON.stringify(map.paint[`${map.options.container==='historical-map-primary'?'map-primary':'map-secondary'}-event-circles:circle-color`]).includes('英國')),'both comparison maps highlight the synchronized country');
  elements.get('[data-map-country]').value='';
  elements.get('[data-map-country]').fire('change');
  const beforeSecondaryPopup=popupInstances.length;
  const secondaryEuropePolity=mapInstances[1].getSource('map-secondary-polities').data.features[0];
  mapInstances[1].handlers['click:map-secondary-polity-fill']({features:[secondaryEuropePolity]});
  assert.equal(popupInstances.length,beforeSecondaryPopup+1,'a click on the comparison map opens only one popup');
  assert.equal(popupInstances.at(-1).map,mapInstances[1],'a comparison-map popup stays on the map that was clicked');
  controller.setCurrentYear(1750);
  modes.find(button=>button.dataset.mapMode==='trade').fire('click');
  assert.deepEqual(mapInstances.map(map=>map.markers.length),[7,0],'trade comparison displays animated ships only on the trade view');
  assert.ok(mapInstances[1].getSource('map-secondary-military').data.features.length>0,'paired military map displays its own dated route layer');
  modes.find(button=>button.dataset.mapMode==='europe').fire('click');
  assert.equal(window.HistoricalMap.getState().mapViews[1].mode,'americas','Europe mode pairs with an Americas comparison view');
  assert.ok(mapInstances[1].getSource('map-secondary-polities').data.features.every(feature=>feature.properties.region==='美洲'),'paired Americas map filters its own polity features');
  modes.find(button=>button.dataset.mapMode==='americas').fire('click');
  assert.equal(window.HistoricalMap.getState().mapViews[1].mode,'qing','Americas mode pairs with a Qing comparison view');
  modes.find(button=>button.dataset.mapMode==='military').fire('click');
  assert.equal(window.HistoricalMap.getState().mapViews[1].mode,'trade','military mode pairs with a trade comparison view');
  assert.equal(mapInstances[1].markers.length,7,'paired trade view animates ships independently from the military view');
  globalThis.observer.callback([{isIntersecting:true,target:previewContainer}]);await tick();await tick();
  const preview=mapInstances[2];
  assert.equal(preview.options.container,'global-history-map-preview','third-stage preview map initializes when scrolled into view');
  assert.equal(window.HistoricalMap.getState().preview,'map-preview','public map state reports the synchronized third-stage preview');
  controller.setCurrentYear(1683);
  assert.equal(previewYear.textContent,'1683','third-stage preview year follows the shared controller');
  assert.ok(preview.getSource('map-preview-events').data.features.some(feature=>feature.properties.start_year===1683),'third-stage preview filters event locations by the shared year');
  assert.match(previewStatus.textContent,/已與上方年份/,'third-stage preview reports its synchronization state');
  window.HistoricalMap.destroy();
  assert.ok(mapInstances.every(map=>map.removed),'destroy releases both map instances');
  assert.ok(mapInstances.every(map=>map.markers.length===0),'destroy removes every animated sailboat marker');
  console.log('PASS historical map smoke: lazy initialization, six modes, trade arrows/ports/moving ships, reduced-motion changes, military filtering, shared year/country sync, split comparison, and marker cleanup.');
}
main().catch(error=>{console.error(error);process.exitCode=1;});

