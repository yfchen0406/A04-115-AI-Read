(()=>{
 const field=document.querySelector('#taskNeed'),button=document.querySelector('#recommendBtn'),target=document.querySelector('#recommendResults');
 if(!field||!button||!target)return;
 const records=JSON.parse(document.querySelector('#skill-data').textContent);
 const stop=new Set(['請','幫我','協助','可以','如何','一個','我的','完成','做成','想要','需要','進行','使用','把','幫','我','的','和','與','是','要','為','從','中','上','下','new','please','help','make','create','the','and','for']);
 const intents=[
  {re:/錯誤|問題|故障|除錯|debug|error|bug|失敗|效能/i, ids:['diagnosing-bugs','code-review','site-audit'], terms:['debug','review','audit','問題','錯誤','bug','效能']},
  {re:/網站|網頁|介面|前端|頁面/i, ids:['hallmark','sites','site-audit','impeccable','ui-ux-pro-max'], terms:['website','web','site','interface','網站','網頁','介面']},
  {re:/動畫|影片|影片製作|字幕|轉場|分鏡|短片/i, ids:['hyperframes','hyperframes-animation','hyperframes-cli','dynamic-reading-video','remotion','remotion-best-practices','ai-animation-storyboard','directing-stickman-videos'], terms:['video','animation','remotion','影片','動畫','分鏡','字幕']},
  {re:/簡報|投影片|ppt/i, ids:['article-to-slides','google-slides','presentations'], terms:['slides','presentation','簡報','投影片']},
  {re:/圖片|生圖|提示詞|插圖|繪圖/i, ids:['imagegen','image-prompt-style-selector','article-handdrawn-illustration-prompts','article-infographic-prompts'], terms:['image','prompt','illustration','圖片','生圖','提示詞']},
  {re:/試算表|excel|表格|資料分析/i, ids:['spreadsheets','excel-live-control','google-sheets'], terms:['spreadsheet','excel','sheet','試算表','資料分析']},
  {re:/文件|pdf|word|報告|整理文章/i, ids:['documents','pdf','article-to-slides','research'], terms:['document','report','pdf','文件','報告']},
  {re:/搜尋|研究|查證|資料蒐集/i, ids:['research','find-skills','agent-reach'], terms:['research','search','查證','搜尋','研究']}
 ];
 function tokens(s){const t=s.toLowerCase();const out=t.match(/[a-z0-9_-]{2,}/g)||[];for(const m of t.matchAll(/[\u3400-\u9fff]+/g)){const run=m[0];if(run.length<=4)out.push(run);for(let i=0;i<run.length-1;i++)out.push(run.slice(i,i+2));}return [...new Set(out.filter(w=>!stop.has(w)))];}
 function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
 function run(){const q=field.value.trim();if(!q){target.innerHTML='<p>請先輸入任務描述。</p>';return}const words=tokens(q),matched=intents.filter(i=>i.re.test(q));const ranked=records.map(x=>{const hay=(x.name+' '+x.description+' '+x.useWhen+' '+(x.categoryLabel||'')+' '+(x.tags||[]).join(' ')).toLowerCase();const hits=words.filter(w=>hay.includes(w));let score=hits.length;for(const i of matched){if(i.ids.some(id=>x.name.toLowerCase().includes(id)))score+=50;if(i.terms.some(t=>hay.includes(t.toLowerCase())))score+=2}return{x,hits,score}}).filter(v=>v.score>0).sort((a,b)=>b.score-a.score||a.x.name.localeCompare(b.x.name)).slice(0,5);for(const i of [...matched].reverse())for(const id of [...i.ids].reverse()){const pick=records.find(x=>x.name.toLowerCase()===id);if(pick&&!ranked.some(r=>r.x.path===pick.path))ranked.unshift({x:pick,hits:[],score:999})}ranked.splice(5);target.innerHTML=ranked.length?ranked.map(({x,hits})=>`<article class="recommend-card"><strong>${esc(x.name)}</strong><span>${esc(x.categoryLabel||'')}</span><p>${esc(x.description||x.useWhen||'')}</p><small>推薦理由：符合${hits.length?'「'+esc(hits.slice(0,5).join('、'))+'」等關鍵字及任務類型':'此任務類型'}。</small><div><code>${esc('$'+x.name+' '+q)}</code><button type="button" class="copyRec">複製指令</button></div></article>`).join(''):'<p>目前找不到明確匹配的 Skill；可改用上方完整清單搜尋。</p>';target.querySelectorAll('.copyRec').forEach((b,i)=>b.onclick=async()=>{try{await navigator.clipboard.writeText(target.querySelectorAll('code')[i].innerText);b.textContent='已複製'}catch{b.textContent='請手動複製'}})}
 button.addEventListener('click',run);field.addEventListener('keydown',e=>{if(e.key==='Enter')run()});
})();



