(() => {
  'use strict';
  const data = window.B16_EFFECTS_DATA;
  if (!data || document.body.dataset.mode !== 'effects') return;
  const rows = data.imageEffects;
  const quotes = data.quoteEvents;
  let stage, canvas, ctx, quoteBox, quoteText, ending, raf = 0, lastScene = '', lastQuote = '';
  const audio = () => document.querySelector('audio.master-audio');
  const findScene = (t) => rows.findIndex((r) => t >= r.startMs / 1000 && t < r.endMs / 1000);
  const resize = () => { if (!canvas || !stage) return; const r=stage.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2); canvas.width=Math.max(1,Math.round(r.width*dpr));canvas.height=Math.max(1,Math.round(r.height*dpr));ctx.setTransform(dpr,0,0,dpr,0,0); };
  const ensure = () => {
    stage=document.querySelector('.stage-wrap');
    if(!stage) return false;
    if(!canvas){stage.classList.add('b16-effects-active');canvas=document.createElement('canvas');canvas.className='b16-effects-canvas';canvas.setAttribute('aria-hidden','true');stage.append(canvas);ctx=canvas.getContext('2d');quoteBox=document.createElement('div');quoteBox.className='b16-quote-layer';quoteBox.setAttribute('aria-live','off');quoteText=document.createElement('div');quoteText.className='b16-quote-text';quoteBox.append(quoteText);stage.append(quoteBox);ending=document.createElement('div');ending.className='b16-ending-text';ending.style.left='44%';ending.style.top='26%';ending.style.width='52%';ending.style.right='auto';ending.style.minHeight='43%';ending.textContent=data.originalClosingTextEffect.text;ending.setAttribute('aria-live','off');stage.append(ending);resize();new ResizeObserver(resize).observe(stage);}
    return true;
  };
  const bounds=(row,w,h)=>{const m=row.action.match(/x\s*(\d+(?:\.\d+)?)\s*[–-]\s*(\d+(?:\.\d+)?)%[^\n]*?y\s*(\d+(?:\.\d+)?)\s*[–-]\s*(\d+(?:\.\d+)?)%/i);if(!m)return{x:w*.12,y:h*.42,w:w*.76,h:h*.34};return{x:w*+m[1]/100,y:h*+m[3]/100,w:w*(+m[2]-+m[1])/100,h:h*(+m[4]-+m[3])/100};};
  function fitVerseText(text,maxWidth){
    const style=getComputedStyle(quoteText),base=parseFloat(style.fontSize)||20,weight=style.fontWeight||700,family=style.fontFamily||'serif',spacing=parseFloat(style.letterSpacing)||0;
    const measure=(value,size)=>{ctx.font=`${weight} ${size}px ${family}`;return ctx.measureText(value).width+Math.max(0,Array.from(value).length-1)*spacing;};
    quoteText.style.fontSize='';quoteText.style.whiteSpace='nowrap';quoteText.textContent=text;
    if(measure(text,base)<=maxWidth)return;
    const chars=Array.from(text),mid=Math.ceil(chars.length/2),first=chars.slice(0,mid).join(''),second=chars.slice(mid).join('');
    const halfWidth=Math.max(measure(first,base),measure(second,base)),size=Math.max(14,Math.min(base,base*maxWidth/Math.max(1,halfWidth)));
    quoteText.style.fontSize=`${size}px`;quoteText.style.whiteSpace='normal';quoteText.textContent='';quoteText.append(document.createTextNode(first),document.createElement('br'),document.createTextNode(second));
  }
  function draw(row,t,w,h){ctx.clearRect(0,0,w,h);if(!row)return;const b=bounds(row,w,h),phase=t*2*Math.PI/(Number((row.strength.match(/週期([\d.]+)/)||[])[1])||5.4),wave=Math.sin(phase),name=row.mainEffect;ctx.save();ctx.beginPath();ctx.rect(b.x,b.y,b.w,b.h);ctx.clip();
    const gold=/燈|暖|焰|窗|門縫/.test(name),steam=/蒸氣|熱氣|煙/.test(name),mist=/霧/.test(name),paper=/紙|卷|字|畫/.test(name),shadow=/影/.test(name),water=/水|波|漣|月光/.test(name);
    if(steam){for(let i=0;i<4;i++){const x=b.x+b.w*(.25+i*.16)+Math.sin(phase+i)*b.w*.025,y=b.y+b.h*(.76-(phase/(2*Math.PI)+i*.11)%1*.48);ctx.beginPath();ctx.ellipse(x,y,Math.max(2,b.w*.018),Math.max(3,b.h*.16),-.12,0,Math.PI*2);ctx.fillStyle=`rgba(255,239,199,${.035+.035*(wave+1)/2})`;ctx.fill();}}
    else if(water){for(let i=0;i<5;i++){const yy=b.y+b.h*(.2+i*.15)+Math.sin(phase+i)*b.h*.018;ctx.beginPath();ctx.ellipse(b.x+b.w*(.18+i*.17)+Math.sin(phase*.55+i)*b.w*.08,yy,b.w*(.10+(i%2)*.04),Math.max(1,b.h*.014),0,0,Math.PI*2);ctx.fillStyle=`rgba(${gold?'255,207,120':'210,235,231'},${.055+.04*(wave+1)/2})`;ctx.fill();}}
    else if(mist){const x=b.x+b.w*((t*0.035)%1);const g=ctx.createLinearGradient(x,0,x+b.w*.48,0);g.addColorStop(0,'rgba(220,235,226,0)');g.addColorStop(.5,'rgba(220,235,226,.075)');g.addColorStop(1,'rgba(220,235,226,0)');ctx.fillStyle=g;ctx.fillRect(b.x,b.y,b.w,b.h);}
    else if(shadow){for(let i=0;i<3;i++){const x=b.x+b.w*((.16+i*.32+(t*.025)%1)%1);ctx.beginPath();ctx.ellipse(x,b.y+b.h*.5,b.w*.12,b.h*.52,.12,0,Math.PI*2);ctx.fillStyle=`rgba(20,28,22,${.035+.02*(wave+1)/2})`;ctx.fill();}}
    else if(paper){const x=b.x+b.w*((.15+(t*.11)%1));const g=ctx.createLinearGradient(x,0,x+b.w*.22,0);g.addColorStop(0,'rgba(255,245,208,0)');g.addColorStop(.5,'rgba(255,245,208,.09)');g.addColorStop(1,'rgba(255,245,208,0)');ctx.fillStyle=g;ctx.fillRect(b.x,b.y,b.w,b.h);}
    else {const gx=b.x+b.w*.5,gy=b.y+b.h*.5,r=Math.max(b.w,b.h)*(.28+.035*wave),g=ctx.createRadialGradient(gx,gy,0,gx,gy,r);g.addColorStop(0,`rgba(${gold?'255,215,144':'219,235,226'},${.075+.035*(wave+1)/2})`);g.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=g;ctx.fillRect(b.x,b.y,b.w,b.h);}
    ctx.restore();
  }
  function tick(){raf=0;if(!ensure())return;const a=audio();if(!a){raf=requestAnimationFrame(tick);return;}const t=a.currentTime,idx=findScene(t),row=rows[idx],id=row?.id||'';if(id!==lastScene){lastScene=id;canvas.dataset.effectId=id;canvas.dataset.effectName=row?.mainEffect||'';}
    const seeking=a.seeking||document.querySelector('.seek-slider')?.matches(':active');canvas.style.opacity=seeking?'0':'1';const rect=stage.getBoundingClientRect();if(!seeking&&row)draw(row,t,rect.width,rect.height);else ctx.clearRect(0,0,canvas.width,canvas.height);
    const q=quotes.find(v=>t*1000>=v.cueStartMs&&t*1000<v.cueEndMs);if(q&&!seeking){const key=q.cueId+'|'+q.displayText;if(key!==lastQuote){const carrier=q.carriers?.[0];quoteText.dataset.cueId=q.cueId;quoteText.dataset.imageId=carrier?.imageId||rows[findScene(t)]?.id||'';const pos=carrier?.desktopPosition||{xPercent:7,yPercent:23,widthPercent:86,heightPercent:18};quoteBox.style.left=pos.xPercent+'%';quoteBox.style.top=pos.yPercent+'%';quoteBox.style.right='auto';quoteBox.style.width=pos.widthPercent+'%';quoteBox.style.minHeight=pos.heightPercent+'%';quoteBox.style.alignItems='center';fitVerseText(q.displayText,Math.max(40,rect.width*pos.widthPercent/100-8));lastQuote=key;}quoteBox.classList.add('is-visible');quoteBox.dataset.activeCue=q.cueId;}else{quoteBox.classList.remove('is-visible');quoteBox.dataset.activeCue='';lastQuote='';}
    const c=data.originalClosingTextEffect,active=t*1000>=c.startMs&&t*1000<c.endMs&&!seeking;ending.classList.toggle('is-visible',active);ending.dataset.active=active?'true':'false';
    const intro=document.querySelector('.frame-intro');if(intro){const ch=data.chapterTextEffects.find(x=>x.text===intro.textContent?.trim());if(ch&&t*1000>=ch.startMs&&t*1000<ch.startMs+130)intro.classList.add('b16-title-glow');else intro.classList.remove('b16-title-glow');}
    raf=requestAnimationFrame(tick);
  }
  const start=()=>{if(!raf)raf=requestAnimationFrame(tick);};new MutationObserver(start).observe(document.getElementById('root')||document.body,{childList:true,subtree:true});window.addEventListener('resize',resize);start();
})();

