// 僅補齊使用者清單中原網站尚未收錄的指令；保留既有版面、樣式及功能。
(function(){
 const groups={decision:'分析與決策',systems:'改善與系統化',learning:'學習與研究',format:'整理與格式'};
 const rows=[
 ['decision','/decision','協助比較選項並作出有依據的決策','請列出可選方案、評估標準、主要取捨及推薦理由。'],
 ['decision','/prioritize','依重要性及急迫性排列任務','請依影響程度、急迫性和投入成本排序，說明前三項優先工作。'],
 ['systems','/planner','制定可以落實的執行計畫','請將目標拆成階段、任務、完成期限與驗收標準。'],
 ['systems','/action','將想法轉成具體行動步驟','請列出今天就能開始的行動，包含負責人、所需資源與成果。'],
 ['decision','/focus','找出最值得投入注意力的重點','請分析目前目標，找出最重要的三件事與優先順序。'],
 ['systems','/productivity','改善工作效率與產出','請檢視工作流程，指出效率瓶頸並提出可執行的改善方法。'],
 ['systems','/time','改善時間安排與管理','請依任務優先順序設計每週時間表，預留休息與緩衝時間。'],
 ['learning','/learn','建立循序漸進的學習計畫','請依我的程度與目標安排四週學習計畫，包含教材、練習和檢核。'],
 ['learning','/study','制定有效的讀書與複習策略','請規劃每日學習、間隔複習、練習測驗及成果追蹤方式。'],
 ['format','/format','將資訊排版成容易掃讀的格式','請使用清楚的標題、段落、表格或條列，整理成方便閱讀的版面。']
 ];
 const grid=document.getElementById('commandsGrid');if(!grid)return;
 const existing=new Set([...grid.querySelectorAll('.command-name')].flatMap(e=>[...(e.textContent.matchAll(/\/[a-z][a-z0-9]*/gi))].map(m=>m[0].toLowerCase())));
 for(const [cat,name,desc,example] of rows){if(existing.has(name.toLowerCase()))continue;
 const card=document.createElement('div');card.className=`command-card ${cat}`;card.dataset.category=cat;
 const nameEl=document.createElement('div');nameEl.className='command-name';nameEl.textContent=name;
 const descEl=document.createElement('div');descEl.className='command-desc';descEl.textContent=desc+'。請補充目標、背景與限制，讓結果更精準；此標籤並非官方功能開關。';
 const usage=document.createElement('div');usage.className='command-usage';const strong=document.createElement('strong');strong.textContent='用法：';usage.append(strong,document.createTextNode(name+' '+example+' 請以繁體中文回答。'));
 const tag=document.createElement('span');tag.className='tag';tag.textContent=groups[cat];card.append(nameEl,descEl,usage,tag);grid.append(card);existing.add(name.toLowerCase());
 }
})();
