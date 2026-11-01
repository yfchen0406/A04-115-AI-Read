'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');

let resolveFetch;let subscribeCalls=0;let unsubscribeCalls=0;
const listeners={};
class Element{constructor(){this.innerHTML='';this.textContent='';this.value='';this.checked=false;this.dataset={};this.handlers={};}addEventListener(type,fn){(this.handlers[type]??=[]).push(fn);}removeEventListener(type,fn){this.handlers[type]=(this.handlers[type]||[]).filter(item=>item!==fn);}querySelectorAll(){return [];}setAttribute(){}}
const host=new Element(),categories=new Element(),search=new Element(),adjacent=new Element(),status=new Element(),jumps=new Element(),clear=new Element();
const root=new Element();root.querySelector=selector=>({'[data-history-regions]':host,'[data-history-categories]':categories,'[data-history-search]':search,'[data-history-adjacent]':adjacent,'[data-history-status]':status,'[data-history-clear-categories]':clear,'[data-history-jumps]':jumps})[selector]||null;
const document={getElementById:id=>id==='global-history'?root:null,documentElement:{classList:{add(){},remove(){},contains(){return true;}}}};
const time={getCurrentYear:()=>1689,getSnapshot:()=>({currentYear:1689,selectedRegions:['qing','europe','america'],selectedCountries:[]}),subscribe(){subscribeCalls++;return()=>{unsubscribeCalls++;};},setSelections(){},setCurrentYear(){}};
const window={HistoricalTimeController:time,matchMedia:()=>({matches:true}),addEventListener(type,fn){(listeners[type]??=[]).push(fn);},removeEventListener(type,fn){listeners[type]=(listeners[type]||[]).filter(item=>item!==fn);}};
const context={window,document,fetch:()=>new Promise(resolve=>{resolveFetch=resolve;}),console};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../js/historical-events.js'),'utf8'),context,{filename:'historical-events.js'});

async function main(){
  assert.equal((listeners.historicalmapupdate||[]).length,1,'map listener is installed while data loads');
  listeners.pagehide[0]();
  assert.equal((listeners.historicalmapupdate||[]).length,0,'pagehide removes the map listener');
  assert.equal((listeners.qingmotionchange||[]).length,0,'pagehide removes the motion listener');
  resolveFetch({ok:true,json:async()=>({events:[],categories:[]})});
  await new Promise(resolve=>setTimeout(resolve,0));
  assert.equal(subscribeCalls,0,'late data does not create a subscription after destroy');
  assert.equal(unsubscribeCalls,0,'no nonexistent subscription is unsubscribed');
  assert.equal(window.HistoricalEvents,undefined,'late data does not publish a destroyed module');
  assert.equal(host.innerHTML,'','late data does not render into a departed page');
  console.log('PASS historical events lifecycle: pagehide during pending data fetch prevents late rendering, subscriptions, and leaked listeners.');
}
main().catch(error=>{console.error(error);process.exitCode=1;});
