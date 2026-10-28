(()=>{
'use strict';
const T=window.EPISODE_TIMELINE;
if(!T)return;
const $=id=>document.getElementById(id),audio=$('audio'),layer=$('visualEffects'),chapter=$('effectsChapterTitle'),poem=$('poemOverlay');
if(!audio||!layer||!chapter||!poem)return;
const V={1:'清夜無塵，月色如銀。',2:'酒斟時，須滿十分。',3:'浮名浮利，休苦勞神。',4:'嘆隙中駒，石中火，夢中身。',5:'雖抱文章，開口誰親。',6:'且陶陶，樂盡天真。',7:'幾時歸去，作個閒人。',8:'對一張琴，一壺酒，一溪雲。'};
const Q={1:[7],4:[7],5:[7],6:[7],8:[1],9:[1],10:[2],11:[3],15:[1,3],16:[1],18:[4],19:[4],20:[4],21:[4],22:[4],23:[4],24:[4],25:[4],26:[4],28:[1],29:[2],30:[3],31:[4],32:[5],33:[6],34:[7],35:[8],36:[4,5],37:[5],38:[5],39:[5],40:[5],41:[6],42:[6],43:[6],44:[6],45:[7,8],46:[8],47:[8],48:[7],49:[7],50:[7],51:[7],67:[7],68:[7],70:[7],71:[8],72:[7]};
const P={1:'upper-right',4:'center-top',5:'center-top',6:'upper-right',8:'upper-right',9:'upper-right',10:'upper-left',11:'upper-right',15:'upper-right',16:'upper-right',18:'upper-right',19:'upper-center',20:'upper-center',21:'upper-left',22:'upper-left',23:'upper-center',24:'upper-center',25:'upper-center',26:'upper-center',28:'upper-right',29:'upper-right',30:'upper-right',31:'upper-center',32:'upper-right',33:'upper-center',34:'upper-center',35:'upper-left',36:'upper-center',37:'upper-right',38:'upper-right',39:'upper-center',40:'upper-right',41:'upper-right',42:'upper-center',43:'upper-right',44:'upper-right',45:'upper-center',46:'upper-right',47:'upper-right',48:'upper-right',49:'upper-center',50:'upper-center',51:'upper-center',67:'upper-right',68:'upper-right',70:'upper-center',71:'upper-left',72:'upper-center'};
const F={
IMG001:['moon-gate-rim','glow',78,36],IMG002:['agenda-relief','sweep',53,54],IMG003:['threshold-path','mist',67,58],IMG004:['unrealized-return','glow',75,31],IMG005:['curtain-lantern','glow',24,28],IMG006:['moon-pool-ripple','ripple',49,65],IMG007:['document-pressure','shadow',68,50],IMG008:['timeline-scroll','sweep',62,57],IMG009:['blank-date-emphasis','glow',68,55],IMG010:['paper-shadow-advance','shadow',49,63],IMG011:['bamboo-layered-mist','mist',49,47],IMG012:['horse-through-slit','sweep',55,37],IMG013:['single-flint-spark','spark',52,48],IMG014:['three-image-depth','mist',57,55],IMG015:['moon-reflection-dissolve','mist',61,66],IMG016:['delayed-wishes-pages','sweep',65,41],IMG017:['moon-on-water','ripple',53,68],IMG018:['study-shadow','shadow',64,57],IMG019:['moonlit-doorway','sweep',69,45],IMG020:['reflection-to-distance','ripple',63,59],IMG021:['bamboo-stream-mist','mist',55,57],IMG022:['paper-turn-breeze','sweep',63,50],IMG023:['dawn-across-courtyard','glow',72,42],IMG024:['qin-string-glint','sweep',42,59],IMG025:['path-through-haze','mist',64,52],IMG026:['three-columns-light','glow',52,68],IMG027:['reading-walk-still-life','sweep',46,60],IMG028:['schedule-shadow-clear','shadow',62,55],IMG029:['resting-curtain-warmth','glow',57,41],IMG030:['reader-to-page-focus','glow',43,54],IMG031:['task-category-focus','glow',61,70],IMG032:['rest-time-card-glow','glow',58,58],IMG033:['ai-work-cool-warm-shift','sweep',64,54],IMG034:['timeline-stop-marker','sweep',51,52],IMG035:['render-cards-complete','glow',66,56],IMG036:['family-table-warmth','glow',53,48],IMG037:['shared-task-balance','glow',52,68],IMG038:['commuter-morning-sweep','sweep',68,53],IMG039:['today-column-return','glow',48,62],IMG040:['return-to-moonlit-yard','glow',66,60],IMG041:['screen-to-family-warmth','sweep',62,54],IMG042:['drawer-and-kept-things','glow',49,64],IMG043:['wine-and-moon-reflection','sweep',47,64],IMG044:['calendar-day-light','glow',55,59],IMG045:['cloud-and-water-finale','mist',66,56]
};
const sceneAt=ms=>T.scenes.find(s=>ms>=s.startMs&&ms<s.endMs)||T.scenes[T.scenes.length-1];
const rows=[];
for(const cueId of Object.keys(Q).map(Number)){
 const cap=T.captions.find(c=>Number(c.id)===cueId);if(!cap)continue;
 for(const scene of T.scenes){const a=Math.max(cap.startMs,scene.startMs),b=Math.min(cap.endMs,scene.endMs);if(a>=b)continue;
  for(const verseId of Q[cueId])rows.push({cueId,verseId,text:V[verseId],sceneId:scene.id,startMs:a,endMs:b,position:P[cueId]||'upper-center'});
 }
}
const prefersReduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lastScene='',lastChapter='',lastPoemKey='';
function putVar(el,key,val){el.style.setProperty(key,val)}
function positionPoem(layout){
 const pos={
  'upper-left':['8%','auto','14%','auto','25%','0%'],'upper-right':['auto','8%','14%','auto','25%','0%'],
  'upper-center':['50%','auto','16%','auto','27%','-50%'],'center-top':['50%','auto','21%','auto','31%','-50%']
 }[layout]||['50%','auto','18%','auto','28%','-50%'];
 poem.style.left=pos[0];poem.style.right=pos[1];poem.style.top=pos[2];poem.style.bottom=pos[3];poem.style.setProperty('--poem-mobile-top',pos[4]);poem.style.setProperty('--poem-x-shift',pos[5]);
}
function tick(){
 const ms=Math.max(0,Math.min(T.meta.durationMs,Math.round(audio.currentTime*1000)));
 const s=sceneAt(ms),fx=F[s.id];
 if(s.id!==lastScene){lastScene=s.id;layer.dataset.scene=s.id;layer.dataset.label=fx?.[0]||'none';layer.dataset.kind=fx?.[1]||'glow';}
 const p=Math.max(0,Math.min(1,(ms-s.startMs)/(s.endMs-s.startMs)));
 const fade=Math.min(1,p*5,(1-p)*5);
 const wave=prefersReduced ? .5 : (.24+.76*Math.sin(Math.PI*p));
 const flash=prefersReduced ? 0 : Math.exp(-Math.pow((p-.54)/.095,2));
 putVar(layer,'--fx-fade',String(fade));putVar(layer,'--fx-progress',String(p));
 putVar(layer,'--fx-wave',String(wave));putVar(layer,'--fx-flash',String(flash));const strength=prefersReduced ? .12 : .42;putVar(layer,'--fx-glow-opacity',String(strength*wave));putVar(layer,'--fx-mist-opacity',String(strength*.55*wave));putVar(layer,'--fx-ripple-opacity',String(strength*.42*wave));putVar(layer,'--fx-ripple-secondary-opacity',String(strength*.28*wave));putVar(layer,'--fx-spark-opacity',String(strength*flash));putVar(layer,'--fx-spark-secondary-opacity',String(strength*.7*flash));
 if(fx){putVar(layer,'--fx-x',fx[2]+'%');putVar(layer,'--fx-y',fx[3]+'%');putVar(layer,'--fx-strength',prefersReduced?'.12':'.42');putVar(layer,'--fx-sweep-pos',(-110+220*p)+'%');putVar(layer,'--fx-shift',((p-.5)*2.2)+'%');putVar(layer,'--fx-ripple-x',((p-.5)*1.4)+'%');putVar(layer,'--fx-ripple-y',((p-.5)*.7)+'%');putVar(layer,'--fx-ripple-scale',String(.92+.18*p));}
 const ch=T.chapters.find(c=>ms>=c.startMs&&ms<c.endMs)||T.chapters[T.chapters.length-1];
 if(ch.id!==lastChapter){lastChapter=ch.id;chapter.textContent=ch.title;}
 const cp=Math.max(0,Math.min(1,(ms-ch.startMs)/1250));
 chapter.style.setProperty('--chapter-progress',String(cp));chapter.style.setProperty('--chapter-clip',prefersReduced?'0%':((1-cp)*100)+'%');chapter.style.setProperty('--chapter-opacity',String(prefersReduced?0:(cp<1?Math.sin(Math.PI*cp):0)));
 const active=rows.filter(r=>ms>=r.startMs&&ms<r.endMs);
 const unique=[];for(const row of active)if(!unique.some(x=>x.text===row.text))unique.push(row);
 const key=unique.map(x=>x.position+':'+x.text).join('|');
 if(key!==lastPoemKey){lastPoemKey=key;poem.replaceChildren();if(unique.length){positionPoem(unique[0].position);for(const row of unique){const line=document.createElement('span');line.textContent=row.text;poem.append(line)}poem.hidden=false}else poem.hidden=true;}
 if(unique.length){const first=active[0],span=Math.min(...active.map(r=>r.startMs)),end=Math.max(...active.map(r=>r.endMs));const q=Math.min(1,(ms-span)/180,(end-ms)/180);poem.style.setProperty('--poem-opacity',String(prefersReduced?.96:Math.max(0,q)));poem.style.setProperty('--poem-shift',prefersReduced?'0px':((1-q)*3)+'px');poem.dataset.scene=s.id;poem.dataset.cues=[...new Set(active.map(r=>r.cueId))].join(',');}
 requestAnimationFrame(tick);
}
poem.hidden=true;requestAnimationFrame(tick);
})();



