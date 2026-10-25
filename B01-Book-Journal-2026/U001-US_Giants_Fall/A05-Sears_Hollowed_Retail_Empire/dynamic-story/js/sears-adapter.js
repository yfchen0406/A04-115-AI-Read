(()=>{
 const motion={
  '由右向左平移':'panLeft','由左向右平移':'panRight','由前景推向主體':'slowZoomIn',
  '固定鏡位後輕微推近':'slowZoomIn','微幅拉遠':'slowZoomOut','慢速推近':'slowZoomIn',
  '緩慢上移':'driftUp','緩慢向左移動':'panLeft'
 };
 window.STORYBOARD=(window.SEARS_STORYBOARD||[]).map(s=>({
  id:s.id,start:s.start,end:s.end,chapterId:s.chapterId,
  image:`images/${s.id}.webp`,motion:motion[s.motion]||'slowZoomIn',
  objectPosition:s.objectPosition||'50% 50%',
  card:[s.title,s.coreEvent,s.subject,s.setting,s.action].filter(Boolean).join('；')
 }));
 window.CHAPTERS=(window.SEARS_CHAPTERS||[]).map(c=>({
  id:c.id,title:String(c.title||'').replace(/^\d+\s*[｜|]\s*/u,''),start:c.start
 }));
 window.SUBTITLES=(window.SEARS_SUBTITLES||[]).map(s=>({
  start:Number.isFinite(s.start)?s.start:s.startMs/1000,
  end:Number.isFinite(s.end)?s.end:s.endMs/1000,text:s.text
 }));
})();
