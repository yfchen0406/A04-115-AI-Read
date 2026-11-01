'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const source=fs.readFileSync(path.join(__dirname,'../js/qing-animations.js'),'utf8');

function makeHarness(savedPreference=null){
  const storage=new Map();if(savedPreference!==null)storage.set('qing-site-motion-enabled',savedPreference);
  const classes=new Set();const attrs={};const button={textContent:'',disabled:false,handlers:{},addEventListener(type,fn){(this.handlers[type]??=[]).push(fn);},setAttribute(name,value){attrs[name]=String(value);}};
  const root={classList:{toggle(name,force){force?classes.add(name):classes.delete(name);},contains(name){return classes.has(name);}}};
  const worldYear={id:'worldYear',value:'1750',dispatchEvent(){return true;}};let nextTimer=0;const timers=new Set();
  let reduceMotion=false;let preferenceListener=null;const emitted=[];let scrollPosition=null;
  const media={get matches(){return reduceMotion;},addEventListener(type,fn){if(type==='change')preferenceListener=fn;},addListener(fn){preferenceListener=fn;}};
  const document={documentElement:root,getElementById(id){return id==='motionToggle'?button:id==='worldYear'?worldYear:null;},querySelector(){return null;},querySelectorAll(){return [];},addEventListener(){},removeEventListener(){}};
  const window={scrollY:137,matchMedia(){return media;},dispatchEvent(event){emitted.push(event);},addEventListener(){},removeEventListener(){},setInterval(){const id=++nextTimer;timers.add(id);return id;},clearInterval(id){timers.delete(id);},scrollTo(options){scrollPosition=options;},CustomEvent:class{constructor(type,init){this.type=type;this.detail=init.detail;}}};
  class BrowserEvent{constructor(type,options={}){this.type=type;this.bubbles=Boolean(options.bubbles);}}
  const context={window,document,Event:BrowserEvent,localStorage:{getItem(key){return storage.has(key)?storage.get(key):null;},setItem(key,value){storage.set(key,String(value));}},CustomEvent:window.CustomEvent,console};
  vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../js/historical-time-controller.js'),'utf8'),context,{filename:'historical-time-controller.js'});
  vm.runInNewContext(source,context,{filename:'qing-animations.js'});
  return {button,attrs,classes,storage,emitted,media,time:window.HistoricalTimeController,timers,setReduced(value){reduceMotion=value;preferenceListener?.({matches:value});},getScroll(){return scrollPosition;}};
}

const h=makeHarness();
assert.equal(h.button.textContent,'動畫效果：開啟','motion is enabled by default');
assert.equal(h.attrs['aria-pressed'],'true','enabled state is exposed to assistive technology');
h.time.setCurrentYear(1776);h.time.setPlaybackSpeed(4);h.time.play();
h.button.handlers.click[0]();
assert.equal(h.button.textContent,'動畫效果：關閉','toggle immediately updates its label');
assert.equal(h.storage.get('qing-site-motion-enabled'),'false','off preference is stored');
assert.equal(h.classes.has('qing-motion-off'),true,'off preference disables the page motion class');
assert.equal(h.getScroll().top,137,'toggling preserves the current scroll position');
assert.equal(h.time.getCurrentYear(),1776,'turning motion off preserves the shared history year');
assert.equal(h.time.getSnapshot().speed,4,'turning motion off preserves shared playback speed');
assert.equal(h.time.getSnapshot().playing,true,'turning motion off leaves year playback unchanged');
assert.equal(h.timers.size,1,'motion toggle does not restart or cancel the shared timer');
h.button.handlers.click[0]();
assert.equal(h.storage.get('qing-site-motion-enabled'),'true','on preference is stored');
assert.equal(h.classes.has('qing-motion-off'),false,'turning motion back on restores the page class');
h.setReduced(true);
assert.equal(h.button.textContent,'動畫效果：系統減少動態','system preference is reflected in the control');
assert.equal(h.button.disabled,true,'the manual control is disabled while reduced motion is active');
assert.equal(h.classes.has('qing-motion-off'),true,'system preference immediately disables motion');
assert.equal(h.time.getCurrentYear(),1776,'system reduced-motion change preserves the shared history year');
assert.equal(h.time.getSnapshot().speed,4,'system reduced-motion change preserves playback speed');
assert.equal(h.time.getSnapshot().playing,true,'system reduced-motion change leaves playback unchanged');
h.setReduced(false);
assert.equal(h.button.disabled,false,'manual control returns when system preference allows motion');
assert.equal(h.classes.has('qing-motion-off'),false,'saved enabled choice returns when reduced motion is cleared');

const off=makeHarness('false');
assert.equal(off.classes.has('qing-motion-off'),true,'saved off preference applies at page initialization');
assert.equal(off.button.textContent,'動畫效果：關閉','saved preference initializes the visible control');
console.log('PASS Qing animation smoke: default and saved settings, persistent toggle, scroll retention, ARIA state, live reduced-motion changes, and unchanged shared year/playback state.');
