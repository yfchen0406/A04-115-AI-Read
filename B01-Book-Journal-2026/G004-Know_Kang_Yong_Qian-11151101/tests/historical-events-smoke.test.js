'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const data=JSON.parse(fs.readFileSync(path.join(__dirname,'../data/historical-events.json'),'utf8'));
const listeners={};
class Element{
  constructor(){this.innerHTML='';this.textContent='';this.value='';this.checked=false;this.dataset={};this.handlers={};}
  addEventListener(type,fn){(this.handlers[type]??=[]).push(fn);}
  fire(type,event){for(const fn of this.handlers[type]||[])fn(event);}
  matches(){return false;}
  querySelectorAll(){return [];}
}
const host=new Element(),categories=new Element(),search=new Element(),adjacent=new Element(),status=new Element(),jumps=new Element(),clear=new Element();
let categoryInputs=[];
Object.defineProperty(categories,'innerHTML',{get(){return this._html||'';},set(value){this._html=value;categoryInputs=[...value.matchAll(/data-history-category value="([^"]+)"/g)].map(match=>{const input=new Element();input.value=match[1];return input;});}});
categories.querySelectorAll=selector=>selector==='input'?categoryInputs:[];
const root=new Element();root.handlers={};root.querySelector=selector=>({'[data-history-regions]':host,'[data-history-categories]':categories,'[data-history-search]':search,'[data-history-adjacent]':adjacent,'[data-history-status]':status,'[data-history-clear-categories]':clear,'[data-history-jumps]':jumps})[selector]||null;root.querySelectorAll=()=>[];root.addEventListener=Element.prototype.addEventListener;root.fire=Element.prototype.fire;
const classes=new Set();
const document={getElementById:id=>id==='global-history'?root:null,documentElement:{classList:{remove(...names){names.forEach(n=>classes.delete(n));},add(name){classes.add(name);},contains(name){return classes.has(name);}}}};
let year=1689;let callback=null;const selectionPatches=[];let selectedRegions=['qing','europe','america'];let resolveFetch;
const time={getCurrentYear:()=>year,getSnapshot:()=>({currentYear:year,selectedRegions:[...selectedRegions],selectedCountries:[]}),subscribe(fn){callback=fn;return()=>{callback=null;}},setSelections(patch){selectionPatches.push(patch);if(patch.selectedRegions)selectedRegions=[...patch.selectedRegions];},setCurrentYear(value){year=Number(value);callback?.();}};
const window={HistoricalTimeController:time,matchMedia:()=>({matches:true}),addEventListener(type,fn){(listeners[type]??=[]).push(fn);},removeEventListener(type,fn){listeners[type]=(listeners[type]||[]).filter(item=>item!==fn);}};
const context={window,document,fetch:()=>new Promise(resolve=>{resolveFetch=resolve;}),console};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../js/historical-events.js'),'utf8'),context,{filename:'historical-events.js'});
async function main(){
  selectedRegions=['qing'];
  listeners.historicalmapupdate[0]({detail:{selectedRegions:['qing']}});
  resolveFetch({ok:true,json:async()=>data});
  await new Promise(resolve=>setTimeout(resolve,0));
  assert.doesNotMatch(host.innerHTML,/《權利法案》成為法律/,'region selection received before JSON finishes loading is retained');
  assert.match(host.innerHTML,/此地區目前已隱藏/,'pre-load map selection hides other regions after events load');
  selectedRegions=['qing','europe','america'];
  listeners.historicalmapupdate[0]({detail:{selectedRegions:[...selectedRegions]}});
  assert.match(host.innerHTML,/《尼布楚條約》簽訂/,'Qing event appears in its region panel');
  assert.match(host.innerHTML,/《權利法案》成為法律/,'European same-year event appears in its region panel');
  assert.match(host.innerHTML,/本資料庫目前沒有收錄美洲此年份的事件/,'empty region states that the event database has no entry');
  assert.equal((jumps.innerHTML.match(/data-time-year=/g)||[]).length,21,'all important-year quick jumps render');
  adjacent.checked=true;root.fire('change',{target:adjacent});
  assert.match(host.innerHTML,/光榮革命/,'adjacent-year event is included when enabled');
  assert.match(host.innerHTML,/1688 年/,'adjacent event keeps its actual year visible');
  const categoryInput=categoryInputs.find(input=>input.value==='政治制度');categoryInput.checked=true;
  categories.fire('change',{target:{closest:()=>categoryInput}});
  assert.match(host.innerHTML,/《權利法案》成為法律/,'selected category retains matching event');
  assert.doesNotMatch(host.innerHTML,/《尼布楚條約》簽訂/,'selected category filters out unrelated event category');
  const diplomacyInput=categoryInputs.find(input=>input.value==='重大外交事件');diplomacyInput.checked=true;
  categories.fire('change',{target:{closest:()=>diplomacyInput}});
  assert.match(host.innerHTML,/《權利法案》成為法律/,'multi-category filter retains political events');
  assert.match(host.innerHTML,/《尼布楚條約》簽訂/,'multi-category filter also retains diplomatic events');
  clear.fire('click');
  assert.match(host.innerHTML,/《權利法案》成為法律/,'clearing categories restores political events');
  assert.match(host.innerHTML,/《尼布楚條約》簽訂/,'clearing categories restores diplomatic events');
  assert.equal(categoryInputs.some(input=>input.checked),false,'clear button unchecks every category');
  search.value='光榮革命';root.fire('input',{target:search});
  assert.match(host.innerHTML,/光榮革命/,'search matches event title and background');
  assert.doesNotMatch(host.innerHTML,/《權利法案》成為法律/,'search removes non-matching events');
  const jump={dataset:{timeYear:'1722'}};root.fire('click',{target:{closest:selector=>selector==='[data-time-year]'?jump:null}});
  assert.equal(year,1722,'quick jump sets the shared year');
  assert.equal(typeof window.HistoricalEvents.getEvents,'function','event records are available through the public read API');
  window.HistoricalEvents.destroy();assert.equal(callback,null,'destroy unsubscribes from the shared year');
  console.log('PASS historical events smoke: three-region rendering, empty-state message, 21 jumps, adjacent-year labeling, single/multiple category filtering and clear, search, shared-year jump, and unsubscribe.');
}
main().catch(error=>{console.error(error);process.exitCode=1;});

