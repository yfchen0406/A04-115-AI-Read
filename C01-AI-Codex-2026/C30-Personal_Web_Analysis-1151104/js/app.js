(()=>{
const warn=m=>{const d=document.createElement('div');d.style.cssText='background:#F4623A;color:#fff;padding:10px 16px;position:sticky;top:0;z-index:9';d.textContent='頁面載入問題：'+m;document.body.prepend(d)};
if(!window.DATA)return warn('找不到 js/data.js，請確認解壓縮後 js 資料夾完整，並與 index.html 放在同一層。');
if(!window.Chart)return warn('找不到 lib/chart.umd.js，請確認 lib 資料夾完整。');
const D=window.DATA,$=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const R=D.rows.map(r=>({d:r[0],c:r[1],t:r[2],l:r[3],g:r[4]})),cats=D.cats,col=D.colors;
const perDay={};R.forEach(r=>perDay[r.d]=(perDay[r.d]||0)+1);
const batch=new Set(Object.keys(perDay).filter(d=>perDay[d]>=10));
const BASE='https://yfchen-115.netlify.app';
const S={y:'all',c:'all',x:false,q:''},years=['all',...new Set(R.map(r=>r.d.slice(0,4)))].sort();
const fil=skipCat=>R.filter(r=>(S.y=='all'||r.d.startsWith(S.y))&&(skipCat||S.c=='all'||r.c==S.c)&&(!S.x||!batch.has(r.d)));
const css=v=>getComputedStyle(document.documentElement).getPropertyValue(v).trim();
const ch={};
function mk(id,cfg){const t=css('--mu');
  Chart.defaults.color=t;Chart.defaults.borderColor=css('--line');Chart.defaults.font.family='"Iansui","BiauKai","DFKai-SB","標楷體","KaiTi",serif';
  Chart.defaults.animation=RM?false:{duration:600};cfg.options.maintainAspectRatio=false;
  const c=ch[id];if(c&&c.canvas&&c.canvas.isConnected){c.data=cfg.data;c.options=cfg.options;c.update();return}
  c?.destroy();ch[id]=new Chart($('#'+id),cfg)}
const shown={};
function count(id,n){const el=$('#'+id);if(RM||shown[id]===n){el.textContent=n;return}
  const a=shown[id]||0,t0=performance.now();shown[id]=n;
  (function f(t){const p=Math.min((t-t0)/700,1);el.textContent=Math.round(a+(n-a)*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)}
const dn=s=>{const[y,m,d]=s.split('.').map(Number);return Date.UTC(y,m-1,d)/864e5};
function chips(){
  const ok=r=>!S.x||!batch.has(r.d),yc=y=>R.filter(r=>ok(r)&&(y=='all'||r.d.startsWith(y))&&(S.c=='all'||r.c==S.c)).length,cc=c=>R.filter(r=>ok(r)&&(S.y=='all'||r.d.startsWith(S.y))&&(c=='all'||r.c==c)).length;
  $('#fy').innerHTML=years.map(y=>{const n=yc(y);return `<button class="chip ${S.y==y?'on':''} ${n?'':'z'}" data-y="${y}">${y=='all'?'全部':y} <small>${n}</small></button>`}).join('');
  $('#fc').innerHTML=['all',...cats].map(c=>{const n=cc(c);return `<button class="chip ${S.c==c?'on':''} ${n?'':'z'}" data-c="${c}">${c=='all'?'全部分類':`<i style="background:${col[c]}"></i>${c}`} <small>${n}</small></button>`}).join('')}
function render(){try{draw()}catch(e){console.error(e);warn('圖表繪製失敗（'+e.message+'）。請按 F12 開啟 Console 並把紅字回報給我。')}}
function draw(){
  chips();const rows=fil();document.querySelectorAll('.cv').forEach(e=>e.classList.toggle('nodata',!rows.length));
  const days=[...new Set(rows.map(r=>r.d))].sort();
  let best=days.length?1:0,cur=1;for(let i=1;i<days.length;i++){cur=dn(days[i])-dn(days[i-1])==1?cur+1:1;best=Math.max(best,cur)}
  const mx=Math.max(0,...days.map(d=>rows.filter(r=>r.d==d).length));
  count('k1',rows.length);count('k2',days.length);count('k3',best);count('k4',mx);
  $('#k5').textContent=days.length?(rows.length/days.length).toFixed(1):0;
  count('hT',rows.length);count('hD',days.length);
  $('#hS').textContent=`目前條件：${S.y=='all'?'2022–2026 全部':S.y+' 年'}／${S.c=='all'?'全部分類':S.c}${S.x?'／已排除批次日':''}`;
  // growth
  const bm={};R.forEach(r=>{if(batch.has(r.d))bm[r.d.slice(0,7)]=(bm[r.d.slice(0,7)]||0)+1});
  const ms=[...new Set(rows.map(r=>r.d.slice(0,7)))].sort(),mc={};
  rows.forEach(r=>{const m=r.d.slice(0,7);(mc[m]??={})[r.c]=(mc[m][r.c]||0)+1});
  mk('cGrowth',{type:'bar',data:{labels:ms,datasets:cats.filter(c=>S.c=='all'||c==S.c).map(c=>({label:c,data:ms.map(m=>mc[m]?.[c]||0),backgroundColor:col[c],stack:'s',borderRadius:2}))},
    options:{scales:{x:{stacked:true,ticks:{callback(v){const l=this.getLabelForValue(v);return bm[l]?l+'★':l}}},y:{stacked:true,beginAtZero:true}},
      plugins:{legend:{position:'bottom'},tooltip:{callbacks:{footer:i=>bm[i[0].label]?`含批次日 ${bm[i[0].label]} 篇`:''}}}}});
  // mix
  const mr=fil(true),cm=cats.map(c=>mr.filter(r=>r.c==c).length);
  mk('cMix',{type:'doughnut',data:{labels:cats,datasets:[{data:cm,backgroundColor:cats.map(c=>col[c]),borderColor:css('--card'),borderWidth:2,offset:cats.map(c=>c==S.c?14:0)}]},
    options:{cutout:'58%',plugins:{legend:{position:'right'}},onClick:(e,a)=>{if(a.length){const c=cats[a[0].index];S.c=S.c==c?'all':c;render()}}}});
  const wk=[0,0,0,0,0,0,0];rows.forEach(r=>wk[new Date(dn(r.d)*864e5).getUTCDay()]++);
  mk('cWeek',{type:'bar',data:{labels:['日','一','二','三','四','五','六'],datasets:[{data:wk,backgroundColor:css('--ac'),borderRadius:4}]},options:{plugins:{legend:{display:false}}}});
  // tags
  const tg={};rows.forEach(r=>r.g.forEach(t=>tg[t]=(tg[t]||0)+1));const top=Object.entries(tg).sort((a,b)=>b[1]-a[1]).slice(0,15);
  mk('cTags',{type:'bar',data:{labels:top.map(t=>t[0]),datasets:[{data:top.map(t=>t[1]),backgroundColor:css('--ac'),borderRadius:4}]},options:{indexAxis:'y',plugins:{legend:{display:false}}}});
  heat();list()}
function heat(){
  const Y=S.y=='all'?'2026':S.y;$('#hy').textContent=Y+' 年';
  const cn={};fil().forEach(r=>{if(r.d.startsWith(Y))cn[r.d]=(cn[r.d]||0)+1});
  const s=Date.UTC(+Y,0,1)/864e5,e=Date.UTC(+Y,11,31)/864e5;let h='';
  for(let i=0;i<new Date(s*864e5).getUTCDay();i++)h+='<i style="visibility:hidden"></i>';
  for(let t=s;t<=e;t++){const dt=new Date(t*864e5),k=`${Y}.${String(dt.getUTCMonth()+1).padStart(2,'0')}.${String(dt.getUTCDate()).padStart(2,'0')}`,n=cn[k]||0;
    h+=`<i title="${k}：${n} 篇" class="${n>=10?'b':''}" ${n?`style="background:${css('--ac')};opacity:${.25+Math.min(n,6)/6*.75}"`:''}></i>`}
  $('#heat').innerHTML=h}
function list(){
  const q=S.q.trim().toLowerCase(),rs=fil().filter(r=>!q||(r.t+r.g.join()).toLowerCase().includes(q)).sort((a,b)=>b.d.localeCompare(a.d));
  $('#cnt').textContent=`符合 ${rs.length} 篇，顯示最新 60 篇`;
  $('#list').innerHTML=rs.slice(0,60).map(r=>`<li><time>${r.d}</time><em style="color:${col[r.c]}">${r.c}</em><a target="_blank" rel="noopener" href="${/^http/.test(r.l)?r.l:BASE+r.l}">${r.t.replace(/</g,'&lt;')}</a></li>`).join('')}
document.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;
  if(b.dataset.y)S.y=b.dataset.y;if(b.dataset.c)S.c=b.dataset.c;if(!fil().length){if(b.dataset.y)S.c='all';else S.y='all'}render()});
$('#fx').onchange=e=>{S.x=e.target.checked;render()};
$('#q').oninput=e=>{S.q=e.target.value;list()};
$('#theme').onclick=()=>{const h=document.documentElement;h.dataset.theme=h.dataset.theme=='dark'?'light':'dark';Object.values(ch).forEach(c=>c.destroy());for(const k in ch)delete ch[k];render()};
let timer;$('#play').onclick=()=>{
  if(timer){clearInterval(timer);timer=0;$('#play').textContent='▶ 播放年度演變';return}
  const ys=years.slice(1);let i=0;$('#play').textContent='⏸ 停止';S.c='all';
  const step=()=>{S.y=ys[i%ys.length];render();i++};step();timer=setInterval(step,1600)};
render();
document.fonts?.ready.then(render);
})();
