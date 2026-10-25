(()=>{
  const cfg=window.ANIMATION_CONFIG||{}, cues=Array.isArray(window.ANIMATION_CUES)?window.ANIMATION_CUES:[];
  const root=document.getElementById('semanticAnimation');
  if(!root)return;
  const typeLabel={"year-timeline":"年份","number-counter":"數值","before-after":"前後對照","capital-flow":"資金流向","breaking-news":"重大消息","map-expansion":"地域變化","product-evolution":"產品演進","decision-fork":"決策岔路","reveal-question":"問題揭露","key-phrase":"核心句","evidence-card":"資料卡","emotional-pause":"情緒留白"};
  const allowed=new Set(Object.keys(typeLabel)),safePositions=new Set(cfg.safePositions||[]);
  let activeId=null,nodes=null;
  function text(tag,cls,value){const el=document.createElement(tag);if(cls)el.className=cls;el.textContent=value||'';return el}
  function addPanels(cue,body){if(!Array.isArray(cue.panels)||!cue.panels.length)return;const box=document.createElement('div');box.className='cue-panels';cue.panels.forEach(item=>{const panel=document.createElement('div');panel.className='cue-panel';panel.append(text('span','cue-panel-label',item.label),text('strong','cue-panel-text',item.text));box.append(panel)});body.append(box)}
  function addFlows(cue,body){if(!Array.isArray(cue.flows)||!cue.flows.length)return;const box=document.createElement('div');box.className='cue-flow';cue.flows.forEach((flow,i)=>{if(i)box.append(text('span','cue-flow-arrow','→'));box.append(text('span','cue-flow-node',flow.from||''),text('span','cue-flow-label',flow.label||''),text('span','cue-flow-node',flow.to||''))});body.append(box)}
  function addMapPoints(cue,body){if(!Array.isArray(cue.mapPoints)||!cue.mapPoints.length)return;const box=document.createElement('div');box.className='cue-map-points';cue.mapPoints.forEach(point=>{const item=text('span','cue-map-point',point.label);item.title=`${point.lat}, ${point.lon}`;box.append(item)});body.append(box)}
  function build(cue){
    const position=safePositions.has(cue.position)?cue.position:(cfg.defaultPosition||'top-right');
    root.className=`semantic-animation type-${cue.type} position-${position} style-${cue.style||'documentary'}`;
    root.replaceChildren();
    const badge=text('span','cue-type',typeLabel[cue.type]||'重點提示'),body=document.createElement('div');body.className='cue-body';
    if(cue.type==='number-counter'&&cue.valueText)body.append(text('strong','cue-value',cue.valueText));else body.append(text('strong','cue-title',cue.title));
    if(cue.subtitle)body.append(text('span','cue-subtitle',cue.subtitle));
    addPanels(cue,body);addFlows(cue,body);addMapPoints(cue,body);
    const sources=Array.isArray(cue.sources)?cue.sources.filter(item=>item&&typeof item.url==='string'&&/^https:\/\//i.test(item.url)):cue.sourceUrl?[{label:'來源',url:cue.sourceUrl}]:[];
    let disclosure=cue.disclosure||cue.sourceNote;
    if(!disclosure&&cue.type==='evidence-card'&&!sources.length)disclosure='資料示意｜沒有原始文件連結';
    if(!disclosure)disclosure=cue.verified&&sources.length?'來源已核對':'字幕提及｜尚未外部核實';
    const note=text('small','cue-disclosure',disclosure),meter=document.createElement('span');meter.className='cue-meter';meter.setAttribute('aria-hidden','true');meter.append(document.createElement('i'));
    root.append(badge,body,note,meter);
    if(sources.length){const links=document.createElement('div');links.className='cue-source-links';sources.forEach(source=>{const a=text('a','cue-source',source.label||'來源');a.href=source.url;a.target='_blank';a.rel='noopener noreferrer';links.append(a)});root.append(links)}
    root.dataset.cueId=cue.id;root.setAttribute('aria-label',[cue.title,cue.subtitle,disclosure].filter(Boolean).join('，'));
    nodes={note};activeId=cue.id;
    const colors=cfg.themeColors||{};root.style.setProperty('--semantic-accent',colors.accent||'#e3bb57');root.style.setProperty('--semantic-text',colors.text||'#f7f6ef');root.style.setProperty('--semantic-muted',colors.muted||'#b5c0c1');root.style.setProperty('--semantic-danger',colors.danger||'#d47b63');
  }
  function render(timeSeconds,chapterTitleVisible=false){
    const ms=Math.round(Math.max(0,Number(timeSeconds)||0)*1000);
    if(!cfg.enabled||(cfg.hideDuringChapterTitle&&chapterTitleVisible)){clear();return}
    const candidates=cues.filter(c=>c&&c.enabled&&allowed.has(c.type)&&cfg.types?.[c.type]!==false&&Number.isFinite(c.startMs)&&Number.isFinite(c.endMs)&&c.endMs>c.startMs&&ms>=c.startMs&&ms<c.endMs&&!(c.type==='map-expansion'&&(!c.verified||!Array.isArray(c.mapPoints)||!c.mapPoints.length||!c.mapPoints.every(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lon)))));
    candidates.sort((a,b)=>(b.priority||0)-(a.priority||0)||a.startMs-b.startMs);
    const cue=candidates[0];if(!cue){clear();return}
    if(activeId!==cue.id)build(cue);
    const p=Math.max(0,Math.min(1,(ms-cue.startMs)/Math.max(1,cue.endMs-cue.startMs))),reduced=cfg.respectReducedMotion&&window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,fadeIn=.14,fadeOut=.2;
    const alpha=reduced?1:(p<fadeIn?p/fadeIn:(p>1-fadeOut?(1-p)/fadeOut:1));root.hidden=false;root.style.setProperty('--cue-alpha',String(Math.max(0,Math.min(1,alpha))));root.style.setProperty('--cue-lift',reduced?'0px':`${(1-p)*7}px`);root.style.setProperty('--cue-progress',String(p));
    if(nodes?.note)nodes.note.dataset.verified=String(Boolean(cue.verified));
  }
  function clear(){if(activeId===null&&root.hidden)return;root.hidden=true;root.className='semantic-animation';root.removeAttribute('data-cue-id');root.removeAttribute('aria-label');for(const name of ['--cue-alpha','--cue-lift','--cue-progress','--semantic-accent','--semantic-text','--semantic-muted','--semantic-danger'])root.style.removeProperty(name);root.replaceChildren();activeId=null;nodes=null}
  window.SemanticAnimationEngine={render,clear,types:[...allowed]};
})();
