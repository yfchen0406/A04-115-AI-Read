'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'data/historical-events.json'),'utf8'));
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert.deepEqual(data.period,[1661,1799]);
assert.equal(data.categories.length,10,'all ten required event categories exist');
assert.equal(new Set(data.events.map(event=>event.id)).size,data.events.length,'event identifiers are unique');
for(const event of data.events){
  assert.ok(Number.isInteger(event.year)&&event.year>=1661&&event.year<=1799,`year range: ${event.id}`);
  assert.ok(['清朝','歐洲','美洲'].includes(event.region),`region: ${event.id}`);
  assert.ok(data.categories.includes(event.category),`category: ${event.id}`);
  assert.ok(event.title&&event.background&&event.country&&event.people.length,`event content: ${event.id}`);
  assert.ok(/^https:\/\//.test(event.sourceUrl),`source link: ${event.id}`);
  if(event.date)assert.equal(Number(event.date.slice(0,4)),event.year,`event date aligns with year: ${event.id}`);
}
for(const [id,date,titlePart,sourceUrl] of [
  ['hist-1763-22','1763-02-10','巴黎和約','https://history.state.gov/milestones/1750-1775/treaty-of-paris'],
  ['hist-1787-23','1787-09-17','制憲會議','https://www.archives.gov/milestone-documents/constitution'],
  ['hist-1789-24','1789-03-04','依法運作','https://www.archives.gov/founding-docs/constitution-q-and-a'],
]){const event=data.events.find(item=>item.id===id);assert.ok(event,`required American event ${id}`);assert.equal(event.date,date,`official date ${id}`);assert.ok(event.title.includes(titlePart),`clear historical distinction ${id}`);assert.equal(event.sourceUrl,sourceUrl,`primary source ${id}`);}
for(const [id,date,precision] of [['hist-1722-09a','1722-12-20','day'],['hist-1722-09b','1722-12-27','day'],['hist-1669-02','1669-06','month'],['hist-1735-11a','1735-10-08','day'],['hist-1735-11b','1735-10-18','day'],['hist-1796-20','1796-02-09','day'],['hist-1799-21','1799-02-07','day']]){const event=data.events.find(item=>item.id===id);assert.ok(event,`dated transition event ${id} exists`);assert.equal(event.date,date,`verified event date ${id}`);assert.equal(event.datePrecision,precision,`date precision ${id}`);}
assert.ok(data.events.some(event=>event.relatedSourceUrl),'secondary evidence links are retained where needed');
for(const year of [1661,1669,1673,1683,1688,1689,1713,1722,1729,1735,1756,1759,1763,1769,1776,1783,1787,1789,1793,1796,1799])assert.ok(data.events.some(event=>event.year===year),`required quick-jump year ${year} is populated`);
for(const selector of ['id="global-history"','data-global-time-controls','data-history-regions','data-time-year-range','js/historical-time-controller.js','js/historical-events.js','js/historical-map-adapter.js'])assert.ok(html.includes(selector),`page integration ${selector}`);
assert.ok(html.includes("HistoricalTimeController.setCurrentYear(b.dataset.worldYear,{source:'world-quick-jump'})"),'legacy world quick-jump buttons publish the shared year');
for(const file of ['js/historical-time-controller.js','js/historical-events.js','js/historical-map-adapter.js','css/historical-timeline.css'])assert.ok(fs.existsSync(path.join(root,file)),`asset ${file} exists`);
for(const match of html.matchAll(/(?:href|src)="(\.\/[^"#?]+)"/g))assert.ok(fs.existsSync(path.join(root,match[1].slice(2))),`local page asset ${match[1]} exists`);
for(const match of html.matchAll(/<script(?:\s+[^>]*)?>([\s\S]*?)<\/script>/gi)){if(match[1].trim())assert.doesNotThrow(()=>new Function(match[1]),'inline page script parses');}
console.log(`PASS historical event data: ${data.events.length} sourced events, three regions, ten categories, 21 quick-jump years.`);
