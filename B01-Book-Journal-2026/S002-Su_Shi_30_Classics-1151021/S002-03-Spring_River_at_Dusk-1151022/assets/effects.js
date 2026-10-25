(() => {
  'use strict';
  const timeline = window.EPISODE_TIMELINE;
  const stage = document.getElementById('stage-wrap');
  const audio = document.getElementById('master-audio');
  if (!timeline || !stage || !audio) return;

  const sceneEffects = {
    '001': {kind:'water',x:.76,y:.72,level:.10,accent:'#f3d58d'}, '002': {kind:'warmSplit',x:.63,y:.58,level:.08,accent:'#f1cc75'},
    '003': {kind:'ripple',x:.64,y:.68,level:.11,accent:'#ffe7a2'}, '004': {kind:'inkRipple',x:.66,y:.72,level:.09,accent:'#b7d5d0'},
    '005': {kind:'scrollLight',x:.53,y:.77,level:.08,accent:'#f3d58d'}, '006': {kind:'inkBloom',x:.57,y:.82,level:.08,accent:'#d7bd82'},
    '007': {kind:'paperAura',x:.55,y:.58,level:.07,accent:'#e9d5a7'}, '008': {kind:'latticeLight',x:.69,y:.53,level:.08,accent:'#f4d99b'},
    '009': {kind:'mapPulse',x:.56,y:.60,level:.08,accent:'#d9a16c'}, '010': {kind:'dust',x:.47,y:.56,level:.08,accent:'#f0d8a2'},
    '011': {kind:'inkWash',x:.56,y:.57,level:.08,accent:'#d7c99f'}, '012': {kind:'petals',x:.73,y:.36,level:.08,accent:'#f6a9a1'},
    '013': {kind:'riverRipples',x:.53,y:.67,level:.12,accent:'#fff0b8'}, '014': {kind:'brushGlow',x:.58,y:.64,level:.08,accent:'#e9c77d'},
    '015': {kind:'waterPetals',x:.64,y:.67,level:.11,accent:'#f7d686'}, '016': {kind:'inkPath',x:.55,y:.73,level:.09,accent:'#e0c58b'},
    '017': {kind:'leafLight',x:.72,y:.32,level:.08,accent:'#fff0ae'}, '018': {kind:'blossom',x:.72,y:.39,level:.10,accent:'#ffc4ba'},
    '019': {kind:'duckWater',x:.55,y:.68,level:.12,accent:'#fff3c4'}, '020': {kind:'inkDrop',x:.59,y:.76,level:.08,accent:'#d8c28d'},
    '021': {kind:'rippleTrail',x:.51,y:.74,level:.09,accent:'#f4d88c'}, '022': {kind:'dew',x:.64,y:.63,level:.08,accent:'#fff3ba'},
    '023': {kind:'foregroundDew',x:.73,y:.70,level:.08,accent:'#f1e6ae'}, '024': {kind:'brushInk',x:.61,y:.75,level:.08,accent:'#d5bc82'},
    '025': {kind:'windowGlow',x:.72,y:.46,level:.08,accent:'#f8d18a'}, '026': {kind:'pointRipple',x:.73,y:.68,level:.10,accent:'#ffe9a3'},
    '027': {kind:'mountainMist',x:.72,y:.48,level:.08,accent:'#d8e8dc'}, '028': {kind:'riverPetals',x:.47,y:.42,level:.08,accent:'#f8b7aa'},
    '029': {kind:'faceGlow',x:.67,y:.42,level:.07,accent:'#edcb8b'}, '030': {kind:'layeredMist',x:.66,y:.46,level:.08,accent:'#d6e6d4'},
    '031': {kind:'classroomLight',x:.50,y:.55,level:.07,accent:'#f5d79c'}, '032': {kind:'focusHalo',x:.56,y:.64,level:.08,accent:'#f4dda8'},
    '033': {kind:'bookLight',x:.54,y:.70,level:.08,accent:'#f7dfa3'}, '034': {kind:'pageSweep',x:.66,y:.66,level:.07,accent:'#f3d899'},
    '035': {kind:'tableGlow',x:.54,y:.78,level:.07,accent:'#f5c775'}, '036': {kind:'sharedLight',x:.54,y:.63,level:.07,accent:'#f3ce86'},
    '037': {kind:'listenerLight',x:.68,y:.52,level:.07,accent:'#f6d798'}, '038': {kind:'bambooShadow',x:.58,y:.68,level:.08,accent:'#d8d4a0'},
    '039': {kind:'dawnRays',x:.68,y:.38,level:.08,accent:'#ffe2a0'}, '040': {kind:'readingPage',x:.46,y:.68,level:.08,accent:'#f5d693'},
    '041': {kind:'lensGlint',x:.75,y:.62,level:.08,accent:'#fff1be'}, '042': {kind:'leafDapple',x:.51,y:.57,level:.07,accent:'#f2d992'},
    '043': {kind:'sunsetFade',x:.72,y:.35,level:.08,accent:'#f2bb79'}, '044': {kind:'wideMist',x:.58,y:.52,level:.08,accent:'#dbe9dc'},
    '045': {kind:'pathGlints',x:.51,y:.63,level:.08,accent:'#f8e1a8'}, '046': {kind:'closingInk',x:.61,y:.77,level:.08,accent:'#f2d08c'}
  };

  const poemLines={first:'竹外桃花三兩枝，',second:'春江水暖鴨先知。',third:'蔞蒿滿地蘆芽短，',fourth:'正是河豚欲上時。'};
  const poemCues={
    '5':{scenes:{'003':{left:57,top:18,width:39},'004':{left:56,top:17,width:40}},lines:[poemLines.second]},
    '23':{scene:'015',lines:[poemLines.first,poemLines.second],left:54,top:15,width:43},
    '24':{scenes:{'015':{left:54,top:15,width:43},'016':{left:52,top:16,width:45}},lines:[poemLines.third,poemLines.fourth]},
    '26':{scene:'017',lines:[poemLines.first],left:53,top:62,width:43},
    '30':{scenes:{'018':{left:55,top:20,width:41},'019':{left:53,top:19,width:43}},lines:[poemLines.second]},
    '35':{scenes:{'021':{left:53,top:18,width:43},'022':{left:51,top:17,width:45}},lines:[poemLines.third]},
    '38':{scene:'023',lines:[poemLines.fourth],left:55,top:18,width:41},
    '43':{scenes:{'025':{left:55,top:19,width:42},'026':{left:53,top:18,width:44}},lines:[poemLines.second]}
  };

  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const canvas=document.createElement('canvas');canvas.className='motion-canvas';canvas.width=1920;canvas.height=1080;canvas.setAttribute('aria-hidden','true');
  stage.insertBefore(canvas,stage.querySelector('.stage-vignette'));
  const ctx=canvas.getContext('2d');
  const verse=document.createElement('div');verse.className='poem-overlay';verse.hidden=true;verse.setAttribute('aria-label','蘇軾原詩圖片文字層');stage.append(verse);
  const nav=document.createElement('nav');nav.className='motion-version-nav';nav.setAttribute('aria-label','版本切換');
  nav.innerHTML='<span>動畫特效版｜原圖、旁白、字幕與時間軸沿用原版</span><a href="./reading.html">← 返回原版閱讀</a>';
  const readerHeader=document.querySelector('.reader-header');if(readerHeader)readerHeader.insertAdjacentElement('afterend',nav);

  const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
  const sceneAt=(ms)=>{let low=0,high=timeline.scenes.length-1;while(low<=high){const mid=(low+high)>>1,scene=timeline.scenes[mid];if(ms<scene.startMs)high=mid-1;else if(ms>=scene.endMs)low=mid+1;else return mid;}return Math.max(0,Math.min(timeline.scenes.length-1,low));};
  const rgba=(hex,alpha)=>{const value=hex.replace('#','');const n=parseInt(value.length===3?value.split('').map((c)=>c+c).join(''):value,16);return `rgba(${(n>>16)&255},${(n>>8)&255},${n&255},${alpha})`;};
  const glow=(x,y,radius,color,alpha)=>{const g=ctx.createRadialGradient(x,y,0,x,y,radius);g.addColorStop(0,rgba(color,alpha));g.addColorStop(1,rgba(color,0));ctx.fillStyle=g;ctx.fillRect(x-radius,y-radius,radius*2,radius*2);};
  const ellipse=(x,y,rx,ry,rotation,color,alpha)=>{ctx.save();ctx.translate(x,y);ctx.rotate(rotation);ctx.fillStyle=rgba(color,alpha);ctx.beginPath();ctx.ellipse(0,0,rx,ry,0,0,Math.PI*2);ctx.fill();ctx.restore();};
  const drawRings=(fx,p,ms,multiple=3)=>{ctx.lineWidth=3;for(let i=0;i<multiple;i++){const phase=(p*1.8+i/multiple)%1,r=32+phase*188;ctx.strokeStyle=rgba(fx.accent,fx.level*(1-phase)*.72);ctx.beginPath();ctx.ellipse(fx.x*1920,fx.y*1080,r,r*.38,0,0,Math.PI*2);ctx.stroke();}glow((fx.x+.03*Math.sin(ms/1400))*1920,fx.y*1080,150,fx.accent,fx.level*.18);};
  const drawParticles=(fx,p,ms,count=8,petal=false)=>{for(let i=0;i<count;i++){const seed=(i*.61803398875)%1,drift=(p*(petal ? .42 : .12)+seed)%1;const x=(fx.x-.28+drift*.56)*1920+Math.sin(ms/850+i*2.1)*24;const y=(fx.y-.22+((seed+p*(petal ? .55 : .2))%1)*.48)*1080;const alpha=fx.level*(.42+.35*Math.sin(ms/520+i));if(petal)ellipse(x,y,11,5,ms/900+i,fx.accent,alpha);else{ctx.fillStyle=rgba(fx.accent,alpha);ctx.beginPath();ctx.arc(x,y,2+(i%3),0,Math.PI*2);ctx.fill();}}};
  const drawSweep=(fx,p,ms,vertical=false)=>{const pos=(vertical?fx.x:fx.y)+(p-.5)*.12;const g=vertical?ctx.createLinearGradient((pos-.08)*1920,0,(pos+.08)*1920,0):ctx.createLinearGradient(0,(pos-.1)*1080,0,(pos+.1)*1080);g.addColorStop(0,rgba(fx.accent,0));g.addColorStop(.5,rgba(fx.accent,fx.level*.68));g.addColorStop(1,rgba(fx.accent,0));ctx.fillStyle=g;if(vertical)ctx.fillRect((pos-.08)*1920,0,1920*.16,1080);else ctx.fillRect(0,(pos-.1)*1080,1920,1080*.2);glow(fx.x*1920,fx.y*1080,280,fx.accent,fx.level*.14*Math.sin(ms/1600)**2);};
  const drawLeaves=(fx,p,ms)=>{for(let i=0;i<7;i++){const x=(fx.x-.38+((i*.19+p*.035)%1)*.76)*1920,y=(fx.y-.35+((i*.27)%1)*.7)*1080;ellipse(x+Math.sin(ms/1800+i)*10,y,60+(i%3)*18,18,Math.sin(i*2)*.45,fx.accent,fx.level*.13);}};
  const drawInk=(fx,p,ms)=>{const r=110+Math.sin((reducedMotion.matches?0:ms/1400)+p*2)*34;glow(fx.x*1920,fx.y*1080,r,fx.accent,fx.level*.7);ctx.strokeStyle=rgba(fx.accent,fx.level*.4);ctx.lineWidth=5;ctx.beginPath();ctx.arc(fx.x*1920,fx.y*1080,r*.65,Math.PI*.08,Math.PI*(1.52+p*.3));ctx.stroke();};
  const drawMist=(fx,p,ms)=>{for(let i=0;i<3;i++){const y=(fx.y-.08+i*.07+Math.sin(ms/2200+i)*.012)*1080;ctx.strokeStyle=rgba(fx.accent,fx.level*.32);ctx.lineWidth=24+i*8;ctx.beginPath();ctx.moveTo(0,y);ctx.bezierCurveTo(480,y-38,1180,y+40,1920,y-10);ctx.stroke();}};
  const drawEffect=(scene,ms,opacity=1)=>{
    const fx=sceneEffects[String(scene.id).padStart(3,'0')];if(!fx)return;
    const progress=clamp((ms-scene.startMs)/Math.max(1,scene.endMs-scene.startMs),0,1),p=reducedMotion.matches ? .5 : progress,t=reducedMotion.matches?0:ms;
    ctx.save();ctx.globalAlpha=opacity;
    switch(fx.kind){
      case 'water':case 'ripple':case 'riverRipples':case 'duckWater':case 'rippleTrail':case 'pointRipple':case 'waterPetals':drawRings(fx,p,t,fx.kind==='riverRipples'?4:3);if(fx.kind==='waterPetals')drawParticles(fx,p,t,4,true);break;
      case 'petals':case 'riverPetals':case 'blossom':drawParticles(fx,p,t,fx.kind==='blossom'?6:8,true);glow(fx.x*1920,fx.y*1080,190,fx.accent,fx.level*.16);break;
      case 'dust':drawParticles(fx,p,t,12,false);break;
      case 'mapPulse':drawRings(fx,p,t,2);glow(fx.x*1920,fx.y*1080,230,fx.accent,fx.level*.2);break;
      case 'inkBloom':case 'inkRipple':case 'inkDrop':case 'brushInk':case 'closingInk':case 'inkWash':case 'inkPath':drawInk(fx,p,t);break;
      case 'mountainMist':case 'layeredMist':case 'wideMist':drawMist(fx,p,t);break;
      case 'leafLight':case 'latticeLight':case 'bambooShadow':case 'leafDapple':drawLeaves(fx,p,t);break;
      case 'warmSplit':case 'paperAura':case 'windowGlow':case 'faceGlow':case 'focusHalo':case 'tableGlow':case 'sharedLight':case 'listenerLight':case 'dawnRays':case 'sunsetFade':glow(fx.x*1920,fx.y*1080,360,fx.accent,fx.level*(.5+.22*Math.sin(t/1700)**2));break;
      case 'scrollLight':case 'brushGlow':case 'pageSweep':case 'classroomLight':case 'bookLight':case 'readingPage':case 'lensGlint':case 'pathGlints':drawSweep(fx,p,t,fx.kind==='lensGlint');break;
      case 'foregroundDew':case 'dew':drawParticles(fx,p,t,7,false);glow(fx.x*1920,fx.y*1080,190,fx.accent,fx.level*.18);break;
      default:glow(fx.x*1920,fx.y*1080,240,fx.accent,fx.level*.5);
    }
    ctx.restore();
  };
  const renderPoem=(ms)=>{
    const cue=(timeline.subtitles||[]).find((item)=>ms>=item.startMs&&ms<item.endMs),item=cue?poemCues[String(cue.id)]:null;
    if(!item){verse.hidden=true;verse.replaceChildren();return;}
    const scene=timeline.scenes[sceneAt(ms)],sceneId=String(scene.id).padStart(3,'0');
    const position=item.scenes?.[sceneId]||(item.scene===sceneId?item:null);
    if(!position){verse.hidden=true;verse.replaceChildren();return;}
    if(verse.dataset.cue!==String(cue.id)){verse.replaceChildren();for(const line of item.lines){const span=document.createElement('span');span.textContent=line;verse.append(span);}verse.dataset.cue=String(cue.id);}
    verse.style.left=`${position.left}%`;verse.style.top=`${position.top}%`;verse.style.width=`${position.width}%`;
    const fade=clamp(Math.min((ms-cue.startMs)/180,(cue.endMs-ms)/180),0,1);
    verse.style.opacity=reducedMotion.matches?'1':String(fade);verse.style.transform=reducedMotion.matches?'none':`translateY(${(1-fade)*5}px) scale(${.985+fade*.015})`;verse.hidden=false;
  };
  let raf=0;
  const renderAt=()=>{
    cancelAnimationFrame(raf);
    const ms=clamp(Math.round((audio.currentTime||0)*1000),0,timeline.durationMs);
    ctx.clearRect(0,0,1920,1080);
    const index=sceneAt(Math.min(ms,timeline.durationMs-1)),scene=timeline.scenes[index],next=timeline.scenes[index+1];
    if(scene)drawEffect(scene,ms,1);
    if(scene&&next){const fade=clamp((ms-(scene.endMs-700))/700,0,1);if(fade>0)drawEffect(next,ms,fade);}
    renderPoem(ms);
    if(!audio.paused&&!audio.ended)raf=requestAnimationFrame(renderAt);
  };
  for(const event of ['timeupdate','seeked','loadedmetadata','durationchange','pause','ended'])audio.addEventListener(event,renderAt);
  audio.addEventListener('play',renderAt);window.addEventListener('resize',renderAt,{passive:true});reducedMotion.addEventListener?.('change',renderAt);
  renderAt();
})();
