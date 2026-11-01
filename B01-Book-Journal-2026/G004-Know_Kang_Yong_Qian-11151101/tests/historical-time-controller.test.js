'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

class Element {
  constructor(id, value='') { this.id=id; this.value=String(value); this.min=''; this.max=''; this.textContent=''; this.text=''; this.attributes={}; this.handlers={}; this.disabled=false; }
  setAttribute(key,value){this.attributes[key]=String(value);}
  dispatchEvent(event){this.handlers[event.type]?.forEach(fn=>fn(event)); return true;}
  addEventListener(type,fn){(this.handlers[type] ||= []).push(fn);}
  removeEventListener(type,fn){this.handlers[type]=(this.handlers[type]||[]).filter(item=>item!==fn);}
  matches(selector){return (selector==='[data-ed-year]'&&this.id==='edYear')||(selector==='[data-time-speed]'&&this.id==='speed');}
}
class BrowserEvent { constructor(type,options={}){this.type=type;this.bubbles=Boolean(options.bubbles);this.target=options.target||null;} }

const worldYear=new Element('worldYear',1750);
const econYear=new Element('econYear',1750);
const edYear=new Element('edYear',1750);
const worldLabel=new Element('worldYearLabel');
const jump=new Element('jump',1750);
const yearLabel=new Element('yearLabel');
const emperor=new Element('emperor');
const playButton=new Element('play');
const dashboardPlay=new Element('dashboardPlay');
const worldPlay=new Element('worldPlay');
const oldEconomyPlay=new Element('econPlay');
const speed=new Element('speed',1);
const controls={handlers:{},addEventListener(type,fn){(this.handlers[type] ||= []).push(fn);},removeEventListener(type,fn){this.handlers[type]=(this.handlers[type]||[]).filter(item=>item!==fn);},querySelector(selector){if(selector==='[data-time-jump]')return jump;return null;}};
const docHandlers={};
const elements={'worldYear':worldYear,'econYear':econYear,'worldYearLabel':worldLabel,'worldPlay':worldPlay,'econPlay':oldEconomyPlay};
const sharedRanges=[new Element('sharedRange')];
const document={
  getElementById(id){return elements[id]||null;},
  querySelector(selector){return ({'[data-time-jump]':jump,'[data-time-year-label]':yearLabel,'[data-current-emperor]':emperor,'[data-time-play]':playButton,'[data-ed-play]':dashboardPlay,'[data-ed-speed]':speed,'[data-global-time-controls]':controls})[selector]||null;},
  querySelectorAll(selector){if(selector==='[data-time-year-range]')return sharedRanges;if(selector==='[data-ed-year]')return [edYear];return [];},
  addEventListener(type,fn){(docHandlers[type] ||= []).push(fn);},
  removeEventListener(type,fn){docHandlers[type]=(docHandlers[type]||[]).filter(item=>item!==fn);},
  documentElement:{classList:{contains:()=>false}}
};
let intervalCallback=null;let intervalId=0;let cleared=new Set();
const windowListeners={};
const window={
  setInterval(fn){intervalCallback=fn;return ++intervalId;},clearInterval(id){cleared.add(id);intervalCallback=null;},
  addEventListener(type,fn){(windowListeners[type] ||= []).push(fn);},removeEventListener(type,fn){windowListeners[type]=(windowListeners[type]||[]).filter(item=>item!==fn);},
  dispatchEvent(event){(windowListeners[event.type]||[]).forEach(fn=>fn(event));},matchMedia:()=>({matches:true}),
  CustomEvent:class {constructor(type,init){this.type=type;this.detail=init.detail;}}
};
const context={window,document,Event:BrowserEvent,CustomEvent:window.CustomEvent,console};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../js/historical-time-controller.js'),'utf8'),context,{filename:'historical-time-controller.js'});
const time=window.HistoricalTimeController;
assert.equal(time.getCurrentYear(),1750,'shared clock initializes from the existing world timeline');
assert.equal(String(sharedRanges[0].min),'1661');assert.equal(String(sharedRanges[0].max),'1799');
assert.equal(time.getEmperorForYear(1721),'康熙帝');
assert.equal(time.getEmperorForYear(1722),'皇位交替年');
assert.equal(time.getEmperorForYear(1735),'皇位交替年');
assert.equal(time.getEmperorForYear(1796),'嘉慶帝在位・乾隆太上皇');
let changes=[];time.subscribe(change=>changes.push(change));
time.setCurrentYear(1661);assert.equal(Number(worldYear.value),1661);assert.equal(Number(econYear.value),1661);assert.equal(Number(edYear.value),1661);
worldYear.value='1665';docHandlers.input[0]({target:worldYear});assert.equal(time.getCurrentYear(),1665,'legacy year slider updates the shared clock');
econYear.value='1776';docHandlers.input[0]({target:econYear});assert.equal(time.getCurrentYear(),1776,'original economic chart slider updates the shared clock');assert.equal(Number(worldYear.value),1776);assert.equal(Number(edYear.value),1776);
controls.handlers.click[0]({target:{closest:()=>({dataset:{timeYear:'1689'}})}});assert.equal(time.getCurrentYear(),1689,'global important-year jump updates the shared clock');assert.equal(Number(econYear.value),1689);
controls.handlers.click[0]({target:{closest:()=>({dataset:{timeAction:'next'}})}});assert.equal(time.getCurrentYear(),1690,'global next-year control advances the shared clock');
speed.value='2';controls.handlers.change[0]({target:speed});assert.equal(time.getSnapshot().speed,2,'visible speed selector updates playback pace');
time.setPlaybackSpeed(4);
time.setCurrentYear(1802);assert.equal(time.getCurrentYear(),1799,'year requests clamp to the shared period');
time.setPlaybackSpeed(4);time.play();assert.equal(time.getSnapshot().playing,true);assert.equal(playButton.attributes['aria-pressed'],'true');assert.equal(playButton.textContent,'⏸ 暫停');assert.equal(dashboardPlay.textContent,'■ 暫停');assert.equal(worldPlay.textContent,'■ 停止播放');assert.equal(oldEconomyPlay.textContent,'■ 暫停');intervalCallback();assert.equal(time.getCurrentYear(),1799,'playback stops at the final year');assert.equal(time.getSnapshot().playing,false);assert.equal(playButton.attributes['aria-pressed'],'false');assert.equal(playButton.textContent,'▶ 播放');assert.equal(dashboardPlay.textContent,'▶ 播放');assert.equal(worldPlay.textContent,'▶ 自動播放');assert.equal(oldEconomyPlay.textContent,'▶ 播放');
time.setCurrentYear(1700);controls.handlers.click[0]({target:{closest:()=>({dataset:{timeAction:'play'}})}});assert.equal(time.getSnapshot().playing,true,'global play button starts the shared timer');controls.handlers.click[0]({target:{closest:()=>({dataset:{timeAction:'play'}})}});assert.equal(time.getSnapshot().playing,false,'global play button pauses the shared timer');
time.setCurrentYear(1700);time.play();intervalCallback();assert.equal(time.getCurrentYear(),1704,'speed setting advances four years per tick');time.pause();assert.equal(time.getSnapshot().playing,false);
time.setCurrentYear(1799);time.setPlaybackEndBehavior('restart');time.play();intervalCallback();assert.equal(time.getCurrentYear(),1661,'restart-on-end returns to the first year');assert.equal(time.getSnapshot().playing,true);time.pause();time.setPlaybackEndBehavior('stop');
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../js/historical-map-adapter.js'),'utf8'),context,{filename:'historical-map-adapter.js'});
assert.equal(window.HistoricalMapAdapter.getState().currentYear,1661,'map adapter initializes from the shared clock instead of its fallback year');
let mapNotifications=0;window.HistoricalMapAdapter.subscribe(()=>mapNotifications++);
window.updateHistoricalMap(1740,['qing']);
assert.equal(mapNotifications,1,'one map update produces one subscriber notification');
window.updateHistoricalMap(1740,['qing']);
assert.equal(mapNotifications,1,'an unchanged map state produces no duplicate notification');
assert.equal(time.getCurrentYear(),1740,'map adapter sends a year back to the shared clock');
assert.deepEqual(Array.from(time.getSnapshot().selectedRegions),['qing'],'map adapter synchronizes selected regions');
assert.equal(window.HistoricalMapAdapter.getState().currentYear,1740,'map adapter exposes the canonical currentYear field');
assert.equal(window.HistoricalMapAdapter.getState().year,1740,'map adapter keeps the legacy year alias');
time.setSelections({selectedCountries:['英國'],selectedRegions:['europe'],selectedEvent:'hist-1689-01',mapLayerVisibility:{tradeRoutes:true}});
const snapshot=time.getSnapshot();assert.deepEqual(Array.from(snapshot.selectedCountries),['英國']);assert.deepEqual(Array.from(snapshot.selectedRegions),['europe']);assert.equal(snapshot.selectedEvent,'hist-1689-01');assert.equal(snapshot.mapLayerVisibility.tradeRoutes,true);
assert.equal(window.HistoricalMapAdapter.getState().currentYear,1740,'map adapter keeps currentYear synchronized after shared-state updates');
assert.equal(changes.length>=7,true,'subscribers receive year changes across API, sliders, buttons, playback, and map updates');
time.destroy();window.HistoricalMapAdapter.destroy();assert.equal((docHandlers.input||[]).length,0,'destroy removes the document slider listener');assert.equal((controls.handlers.click||[]).length,0,'destroy removes global control listeners');
console.log('PASS historical time controller: range, imperial transitions, synchronized controls, speed, playback boundary, subscriptions, and map state.');
