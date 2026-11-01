'use strict';
// Dependency-free interaction smoke harness for the dashboard controller.
// It exercises DOM state and ECharts options with a small browser-shaped test double.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const rootDir=path.resolve(__dirname,'..');
const documentListeners={};
const fixture={
  'economic_data.json':JSON.parse(fs.readFileSync(path.join(rootDir,'economic_data.json'),'utf8')),
  './economic_data.json':JSON.parse(fs.readFileSync(path.join(rootDir,'economic_data.json'),'utf8')),
  './data/economic-indicator-metadata.json':JSON.parse(fs.readFileSync(path.join(rootDir,'data/economic-indicator-metadata.json'),'utf8')),
  './data/economic-sources.json':JSON.parse(fs.readFileSync(path.join(rootDir,'data/economic-sources.json'),'utf8')),
  './data/economic-extensions.json':JSON.parse(fs.readFileSync(path.join(rootDir,'data/economic-extensions.json'),'utf8'))
};
const elements=new Map();
class Element {
  constructor(selector,dataset={}){this.selector=selector;this.dataset=dataset;this.value='';this.checked=false;this.disabled=false;this.hidden=false;this.textContent='';this.innerHTML='';this.children=[];this.listeners={};this.attributes={};this.clientWidth=760;this.style={};}
  addEventListener(type,fn){(this.listeners[type]??=[]).push(fn);}
  dispatchEvent(event){event.target ||= this;for(const fn of this.listeners[event.type]||[])fn(event);if(event.bubbles)for(const fn of documentListeners[event.type]||[])fn(event);return true;}
  setAttribute(key,value){this.attributes[key]=value;}
  closest(selector){if(selector==='details')return details;return this;}
  querySelectorAll(selector){if(selector==='[data-ed-country]')return countryInputs;return [];}
  setCustomValidity(){} reportValidity(){return true;}
}
const get=selector=>{if(!elements.has(selector))elements.set(selector,new Element(selector));return elements.get(selector);};
const root=get('root');
const selectors=['[data-ed-status]','[data-ed-chart]','[data-ed-metrics]','[data-ed-countries]','[data-ed-year]','[data-ed-year-label]','[data-ed-jump]','[data-ed-jump-button]','[data-ed-play]','[data-ed-replay]','[data-ed-speed]','[data-ed-reset]','[data-ed-era]','[data-ed-select]','[data-ed-compare]','[data-ed-compare-summary]','[data-ed-snapshot]','[data-ed-limit]','[data-ed-availability]','[data-ed-sources]','[data-ed-event-list]','[data-ed-event-detail]','[data-ed-fiscal-views]','[data-ed-pair="a"]','[data-ed-pair="b"]'];
root.querySelector=selector=>get(selector);
const details=new Element('details');
const modeButtons=['line','race','compare'].map(mode=>new Element('mode',{edMode:mode}));
const fiscalButtons=['perCapita','total'].map(mode=>new Element('fiscal',{edFiscalView:mode}));
const selectButtons=['all','clear','single','compare','multi'].map(mode=>new Element('select',{edSelect:mode}));
let metricButtons=[];let countryInputs=[];let eventButtons=[];
root.querySelectorAll=selector=>{
  if(selector==='[data-ed-mode]')return modeButtons;
  if(selector==='[data-ed-fiscal-view]')return fiscalButtons;
  if(selector==='[data-ed-select]')return selectButtons;
  if(selector==='[data-ed-metric]')return metricButtons;
  if(selector==='[data-ed-country]')return countryInputs;
  if(selector==='[data-ed-year]')return [get('[data-ed-year]')];
  return [];
};
const hostCountries=get('[data-ed-countries]');
Object.defineProperty(hostCountries,'innerHTML',{get(){return this._html||'';},set(value){this._html=value;countryInputs=[...value.matchAll(/<input type="checkbox" data-ed-country="([^"]+)" data-members="([^"]*)"([^>]*)>/g)].map(match=>{const input=new Element('country',{edCountry:match[1],members:match[2]});input.checked=/\schecked(?:\s|>)/.test(match[3]);input.disabled=match[3].includes('disabled');return input;});}});
const hostMetrics=get('[data-ed-metrics]');
Object.defineProperty(hostMetrics,'innerHTML',{get(){return this._html||'';},set(value){this._html=value;metricButtons=[...value.matchAll(/<button type="button" data-ed-metric="([^"]+)"/g)].map(match=>new Element('metric',{edMetric:match[1]}));}});
const hostEvents=get('[data-ed-event-list]');
Object.defineProperty(hostEvents,'innerHTML',{get(){return this._html||'';},set(value){this._html=value;eventButtons=[...value.matchAll(/data-ed-event="(\d+)"/g)].map(match=>new Element('event',{edEvent:match[1]}));}});
const worldYear=new Element('worldYear');worldYear.id='worldYear';worldYear.value='1750';
const chart={options:null,calls:0,handlers:{},disposed:false,setOption(option){this.options=option;this.calls++;},on(name,fn){this.handlers[name]=fn;},resize(){},dispose(){this.disposed=true;}};
let chartInitCount=0;const echarts={init(){chartInitCount++;return chart;}};
const htmlClasses={contains(){return false;}};
const fakeDocument={getElementById(id){if(id==='economic-dashboard')return root;if(id==='worldYear')return worldYear;return null;},querySelector(selector){if(selector.startsWith('[data-ed-'))return root.querySelector(selector);return null;},querySelectorAll(selector){if(selector==='[data-ed-year]')return root.querySelectorAll(selector);return [];},addEventListener(type,fn){(documentListeners[type] ||= []).push(fn);},removeEventListener(type,fn){documentListeners[type]=(documentListeners[type]||[]).filter(item=>item!==fn);},documentElement:{classList:htmlClasses}};
let nextTimer=1;const intervals=new Map();
const windowListeners={};
const fakeWindow={echarts,matchMedia(){return {matches:false,addEventListener(){},addListener(){}};},setInterval(fn){const id=nextTimer++;intervals.set(id,fn);return id;},clearInterval(id){intervals.delete(id);},addEventListener(type,fn){(windowListeners[type] ||= []).push(fn);},removeEventListener(){},dispatchEvent(event){for(const fn of windowListeners[event.type]||[])fn(event);},CustomEvent:class{constructor(type,init){this.type=type;this.detail=init.detail;}},requestAnimationFrame(fn){return setTimeout(fn,0);},cancelAnimationFrame:clearTimeout};
class MutationObserver{observe(){}disconnect(){}}
class ResizeObserver{observe(){}disconnect(){}}
class BrowserEvent{constructor(type,options={}){this.type=type;this.bubbles=options.bubbles||false;}}
const context={document:fakeDocument,window:fakeWindow,fetch:async url=>({ok:true,json:async()=>fixture[url]}),MutationObserver,ResizeObserver,Event:BrowserEvent,CustomEvent:fakeWindow.CustomEvent,requestAnimationFrame:fn=>setTimeout(fn,0),cancelAnimationFrame:clearTimeout,console,setTimeout,clearTimeout};
vm.runInNewContext(fs.readFileSync(path.join(rootDir,'js/historical-time-controller.js'),'utf8'),context,{filename:'historical-time-controller.js'});
const script=fs.readFileSync(path.join(rootDir,'js/economic-dashboard.js'),'utf8');
vm.runInNewContext(script,context,{filename:'economic-dashboard.js'});

function click(button){button.onclick({target:{closest:selector=>selector==='[data-year]'?button:null}});}
function clickMetric(button){get('[data-ed-metrics]').onclick({target:{closest:selector=>selector==='[data-ed-metric]'?button:null}});}
async function main(){
  await new Promise(resolve=>setTimeout(resolve,0));
  assert.equal(chart.calls>0,true,'initial chart rendered');
  assert.equal(chartInitCount,1,'dashboard creates one ECharts instance');
  assert.equal(metricButtons.length,6,'six indicator tabs rendered');
  assert.equal(countryInputs.length,7,'seven region filter rows rendered');
  assert.equal(countryInputs.some(input=>input.disabled),true,'unavailable regions clearly disabled');
  assert.equal(typeof fakeWindow.HistoricalTimeController.getCurrentYear,'function','shared year controller is loaded before the dashboard');
  assert.equal(fakeWindow.HistoricalTimeController.getCurrentYear(),1750,'dashboard initializes from the shared year state');
  assert.equal(chart.options.series.length,6,'GDP chart starts with six observed country series');
  const dataMode=get('[data-ed-data-mode]');dataMode.value='nearest';dataMode.listeners.change[0]();
  assert.equal(chart.options.series.every(series=>series.data.length===1),true,'nearest-known mode shows one actual observation per selected country');
  assert.equal(get('[data-ed-snapshot]').innerHTML.includes('距游標'),true,'nearest-known values show distance from the selected year');
  dataMode.value='raw';dataMode.listeners.change[0]();

  clickMetric(metricButtons.find(button=>button.dataset.edMetric==='fiscal'));
  click(fiscalButtons.find(button=>button.dataset.edFiscalView==='total'));
  assert.equal(chart.options.yAxis.name,'噸白銀／年（50年區間均值）','fiscal total view uses its own unit');
  assert.equal(chart.options.series[0].type,'line','fiscal total view is a time series');
  assert.equal(get('[data-ed-snapshot]').innerHTML.includes('1,304'),true,'fiscal total uses source-checked amount');

  click(modeButtons.find(button=>button.dataset.edMode==='race'));
  assert.equal(chart.options.series[0].type,'bar','rankable common-year data renders as bars');
  assert.equal(chart.options.yAxis.type,'category','bar-race ranks categories');

  click(modeButtons.find(button=>button.dataset.edMode==='compare'));
  assert.equal(get('[data-ed-compare]').hidden,false,'two-country selectors appear in compare mode');
  assert.equal(get('[data-ed-compare-summary]').innerHTML.includes('差距'),true,'paired common-year values calculate a difference');
  assert.deepEqual(Array.from(chart.options.series,series=>series.name).sort(),['清朝／中國','英國'].sort(),'compare chart displays both selected comparison series');
  const qingFilter=countryInputs.find(input=>input.dataset.edCountry==='qing');qingFilter.checked=false;
  hostCountries.onchange({target:{closest:()=>qingFilter}});
  assert.deepEqual(Array.from(chart.options.series,series=>series.name).sort(),['清朝／中國','英國'].sort(),'two-country comparison remains visible when its regions are unchecked in the multi-country filter');

  const slider=get('[data-ed-year]');slider.value='1722';slider.oninput({target:slider});
  assert.equal(Number(worldYear.value),1722,'dashboard slider publishes its year to the original site controller');
  assert.equal(fakeWindow.HistoricalTimeController.getCurrentYear(),1722,'dashboard range updates the one shared year state');
  await new Promise(resolve=>setTimeout(resolve,0));
  assert.equal(chart.options.series.every(series=>series.data.every(point=>point.value[0]<=1722)),true,'year playback cursor filters chart points to the selected year');
  worldYear.value='1776';worldYear.dispatchEvent(new BrowserEvent('input',{bubbles:true}));
  assert.equal(Number(slider.value),1776,'original site year controller updates the dashboard');
  await new Promise(resolve=>setTimeout(resolve,0));

  get('[data-ed-jump]').value='1740';get('[data-ed-jump-button]').onclick();
  assert.equal(Number(worldYear.value),1740,'year jump updates the shared year controller');
  fakeWindow.HistoricalTimeController.setPlaybackSpeed(4);
  get('[data-ed-replay]').onclick();
  assert.equal(Number(worldYear.value),1661,'replay resets the shared year to the beginning');
  assert.equal(fakeWindow.HistoricalTimeController.getSnapshot().speed,4,'dashboard replay preserves a speed chosen in the global controller');
  const interval=[...intervals.values()][0];interval();
  assert.equal(Number(worldYear.value),1665,'dashboard playback uses the global four-year step');
  get('[data-ed-play]').onclick();
  assert.equal(intervals.size,0,'play/pause button stops the playback timer');

  const eventGraphic=chart.options.graphic[0].children.find(item=>typeof item.onclick==='function');
  eventGraphic.onclick();
  assert.equal(Number(worldYear.value),1661,'event marker synchronizes the common year');
  assert.equal(get('[data-ed-event-detail]').innerHTML.includes('康熙即位'),true,'event click expands historical context');
  chart.handlers.click({data:{event:{year:1776,label:'美國《獨立宣言》'}}});
  assert.equal(fakeWindow.HistoricalTimeController.getCurrentYear(),1776,'direct chart event clicks update the shared year controller');
  assert.equal(Number(slider.value),1776,'direct chart event clicks synchronize the dashboard range control');
  assert.equal(get('[data-ed-jump]').value,1776,'direct chart event clicks synchronize the year entry control');
  assert.equal(chartInitCount,1,'year and event changes update the existing chart instance without reinitializing it');
  const spainLabel='西班牙加勒比貿易改革';
  const spainIndex=Number([...hostEvents.innerHTML.matchAll(/<button[^>]*data-ed-event="(\d+)"[^>]*>(.*?)<\/button>/g)].find(match=>match[2].includes(spainLabel))[1]);
  hostEvents.onclick({target:{closest:()=>eventButtons[spainIndex]}});
  assert.equal(get('[data-ed-event-detail]').innerHTML.includes(spainLabel),true,'event list opens its selected historical event');
  assert.equal(get('[data-ed-event-detail]').innerHTML.includes('cambridge.org'),true,'Spanish trade reform event exposes a verifiable academic source link');
  assert.equal(get('[data-ed-event-detail]').innerHTML.includes('不代表對圖表數值的因果解釋'),true,'event detail keeps the non-causal interpretation warning');

  clickMetric(metricButtons.find(button=>button.dataset.edMetric==='population'));
  click(modeButtons.find(button=>button.dataset.edMode==='race'));
  assert.equal(chart.options.series.length,0,'incomparable population rows are not ranked');
  assert.equal(chart.options.graphic.some(item=>item.style&&String(item.style.text).includes('不能跨系列排名')),true,'population ranking state explains the restriction');
  const callsBeforePageHide=chart.calls;
  fakeWindow.dispatchEvent({type:'pagehide'});
  assert.equal(intervals.size,0,'pagehide clears shared playback timers');
  assert.equal(chart.disposed,true,'pagehide disposes the existing chart instance');
  fakeWindow.HistoricalTimeController.setCurrentYear(1798);
  assert.equal(chart.calls,callsBeforePageHide,'pagehide removes the dashboard year subscription');
  console.log('PASS dashboard smoke: six indicators, seven region controls, fiscal totals, ranking, independent two-country chart, year-filtered points, bidirectional sync, direct chart-event sync, global playback speed, pagehide timer/chart/subscription cleanup, sourced Spanish/Dutch events, population no-rank state.');
}
main().catch(error=>{console.error(error);process.exitCode=1;});

