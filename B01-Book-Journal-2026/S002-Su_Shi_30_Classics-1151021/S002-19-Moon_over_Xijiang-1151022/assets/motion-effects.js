(() => {
  "use strict";

  const SCENES = [
    [0,12565],[12565,23656],[23656,30200],[30200,39362],[39362,44620],[44620,52202],
    [52202,60560],[60560,70408],[70408,80820],[80820,91989],[91989,103184],[103184,115860],
    [115860,120039],[120039,128880],[128880,140377],[140377,149142],[149142,157720],[157720,164255],
    [164255,174780],[174780,178760],[178760,187529],[187529,195713],[195713,205822],[205822,216907],
    [216907,226707],[226707,237548],[237548,241012],[241012,252278],[252278,260920],[260920,267004],
    [267004,278673],[278673,289480],[289480,296710],[296710,307700],[307700,316764],[316764,324393],
    [324393,332280],[332280,341620],[341620,350877],[350877,363501],[363501,375620],[375620,382160],
    [382160,390640],[390640,397433],[397433,405700],[405700,415896],[415896,423255],[423255,430000]
  ];

  // Each scene has one original, restrained overlay effect. Coordinates are normalized to 1920x1080.
  const EFFECTS = {
    "001":{type:"leaves",x:.16,y:.16,dx:.66,dy:.62,count:4,color:"#c88239"},
    "002":{type:"ripple",x:.22,y:.72,rx:.21,ry:.14,color:"#f3d795"},
    "003":{type:"leaves",x:.74,y:.12,dx:-.42,dy:.63,count:1,color:"#c9823d"},
    "004":{type:"page",x:.28,y:.61,dx:.12,dy:.02,color:"#f3dda8"},
    "005":{type:"lamp",x:.09,y:.35,r:.2,color:"#ffc76f"},
    "006":{type:"ink",x:.66,y:.76,r:.13,color:"#24313a"},
    "007":{type:"split",x:.5,y:.55,color:"#d5c6a0"},
    "008":{type:"water",x:.68,y:.72,w:.48,color:"#d8dfda"},
    "009":{type:"cloud",x:.55,y:.25,w:.32,dir:-1,color:"#aebccc"},
    "010":{type:"page",x:.52,y:.42,dx:.1,dy:.06,color:"#e6d5ae"},
    "011":{type:"water",x:.57,y:.72,w:.62,color:"#d8e3df"},
    "012":{type:"cloud",x:.52,y:.3,w:.35,dir:1,color:"#bac8d1"},
    "013":{type:"leaves",x:.8,y:.55,dx:-.1,dy:.28,count:1,color:"#d08b45"},
    "014":{type:"leaves",x:.92,y:.43,dx:-.72,dy:.24,count:3,color:"#d99042"},
    "015":{type:"leaves",x:.5,y:.08,dx:.15,dy:.54,count:4,color:"#cf8540"},
    "016":{type:"shadow",x:.65,y:.3,w:.22,h:.5,color:"#17212b"},
    "017":{type:"shadow",x:.48,y:.55,w:.24,h:.2,color:"#24313b"},
    "018":{type:"ink",x:.52,y:.67,r:.28,color:"#384752"},
    "019":{type:"page",x:.31,y:.34,dx:.08,dy:.1,color:"#f2e4c5"},
    "020":{type:"lamp",x:.23,y:.55,r:.26,color:"#ffd28b"},
    "021":{type:"ink",x:.66,y:.73,r:.12,color:"#263744"},
    "022":{type:"cloud",x:.75,y:.43,w:.25,dir:-1,color:"#b7c7d8"},
    "023":{type:"glint",x:.55,y:.8,w:.22,color:"#f7d58b"},
    "024":{type:"cloud",x:.77,y:.27,w:.2,dir:1,color:"#b7c5d2"},
    "025":{type:"cloud",x:.31,y:.24,w:.23,dir:-1,color:"#aab9c9"},
    "026":{type:"lamp",x:.84,y:.75,r:.16,color:"#ffd38d"},
    "027":{type:"ripple",x:.79,y:.83,rx:.15,ry:.045,color:"#f3d994"},
    "028":{type:"cloud",x:.78,y:.45,w:.25,dir:-1,color:"#b8c8d8"},
    "029":{type:"ripple",x:.42,y:.82,rx:.11,ry:.08,color:"#e8d194"},
    "030":{type:"water",x:.5,y:.76,w:.54,color:"#d8e4df"},
    "031":{type:"page",x:.57,y:.77,dx:.2,dy:.02,color:"#e8d8b8"},
    "032":{type:"cloud",x:.42,y:.25,w:.29,dir:1,color:"#aebdcb"},
    "033":{type:"glint",x:.56,y:.78,w:.17,color:"#f0cf84"},
    "034":{type:"rain",x:.52,y:.43,w:.4,color:"#b8d1dc"},
    "035":{type:"cards",x:.31,y:.68,w:.4,color:"#f2d58b"},
    "036":{type:"route",x:.16,y:.78,w:.72,color:"#ffd76d"},
    "037":{type:"playhead",x:.77,y:.77,w:.28,color:"#ffd66e"},
    "038":{type:"lamp",x:.83,y:.43,r:.075,color:"#78d7d2"},
    "039":{type:"glint",x:.75,y:.64,w:.18,color:"#75d6db"},
    "040":{type:"signal",x:.83,y:.58,r:.13,color:"#f6d79c"},
    "041":{type:"lamp",x:.2,y:.66,r:.24,color:"#ffcf82"},
    "042":{type:"drop",x:.35,y:.72,r:.06,color:"#a9d5dc"},
    "043":{type:"leaves",x:.1,y:.22,dx:.36,dy:.34,count:3,color:"#d28b42"},
    "044":{type:"cloud",x:.52,y:.34,w:.28,dir:1,color:"#bdc4ca"},
    "045":{type:"lights",x:.12,y:.5,w:.75,color:"#ffd083"},
    "046":{type:"page",x:.48,y:.68,dx:.16,dy:.01,color:"#e8d6ae"},
    "047":{type:"leaves",x:.32,y:.24,dx:.06,dy:.55,count:1,color:"#d18a42"},
    "048":{type:"lamp",x:.51,y:.48,r:.19,color:"#ffd28a"}
  };

  const VERSES = [
    {id:"S003",start:12565,end:16740,text:"世事一場大夢，人生幾度秋涼？",x:52,y:67},
    {id:"S022",start:120039,end:123197,text:"夜來風葉已鳴廊。",x:74,y:62},
    {id:"S023",start:123197,end:124670,text:"看取眉頭鬢上。",x:74,y:62},
    {id:"S034",start:178760,end:183145,text:"世事一場大夢，人生幾度秋涼？",x:70,y:60},
    {id:"S035",start:183145,end:185483,text:"夜來風葉已鳴廊。",x:74,y:60},
    {id:"S036",start:185483,end:187529,text:"看取眉頭鬢上。",x:74,y:60},
    {id:"S037",start:187529,end:191622,text:"酒賤常愁客少，月明多被雲妨。",x:66,y:70},
    {id:"S038",start:191622,end:193960,text:"中秋誰與共孤光？",x:74,y:70},
    {id:"S039",start:194140,end:195713,text:"把盞淒然北望。",x:74,y:70},
    {id:"S049",start:241012,end:244260,text:"中秋誰與共孤光？",x:74,y:64}
  ];

  const clamp = (n, lo=0, hi=1) => Math.max(lo, Math.min(hi, n));
  const rgba = (hex, alpha) => {
    const value = hex.replace("#", "");
    const num = parseInt(value, 16);
    return `rgba(${(num>>16)&255},${(num>>8)&255},${num&255},${clamp(alpha)})`;
  };
  const ellipse = (ctx,x,y,rx,ry,stroke,alpha,width=3) => {
    ctx.beginPath(); ctx.ellipse(x,y,Math.max(1,rx),Math.max(1,ry),0,0,Math.PI*2);
    ctx.strokeStyle=rgba(stroke,alpha); ctx.lineWidth=width; ctx.stroke();
  };

  function drawEffect(ctx, cfg, p, alpha, reduced) {
    const x=cfg.x*1920, y=cfg.y*1080, color=cfg.color;
    const drift=reduced?0.5:p;
    ctx.save();
    switch(cfg.type){
      case "leaves": {
        const count=cfg.count||3;
        for(let i=0;i<count;i++){
          const phase=(drift+i/count)%1, seed=i*1.71;
          const px=(cfg.x+cfg.dx*phase+Math.sin(phase*6.283+seed)*.025)*1920;
          const py=(cfg.y+cfg.dy*phase)*1080;
          ctx.save();ctx.translate(px,py);ctx.rotate((cfg.angle||.55)+phase*1.4);
          ctx.fillStyle=rgba(color,alpha*(.58+(i%2)*.12));
          ctx.beginPath();ctx.moveTo(0,-15);ctx.bezierCurveTo(18,-9,18,8,0,16);ctx.bezierCurveTo(-17,8,-17,-8,0,-15);ctx.fill();
          ctx.strokeStyle=rgba("#f4d7a6",alpha*.48);ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(0,-12);ctx.lineTo(0,13);ctx.stroke();ctx.restore();
        } break;
      }
      case "ripple": {
        const cycles=2.2, phase=(drift*cycles)%1;
        for(let i=0;i<3;i++){
          const r=((phase+i/3)%1);
          ellipse(ctx,x,y,(cfg.rx||.12)*1920*r,(cfg.ry||.06)*1080*r,color,alpha*(1-r)*.55,2.2);
        } break;
      }
      case "water": {
        for(let i=0;i<7;i++){
          const yy=(cfg.y+(i-3)*.027)*1080;
          const shift=((drift*.18+i*.13)%1)*70*(i%2?1:-1);
          ctx.beginPath();ctx.moveTo(x-(cfg.w||.4)*960+shift,yy);ctx.quadraticCurveTo(x+shift,yy-3-i%3,x+(cfg.w||.4)*960+shift,yy);
          ctx.strokeStyle=rgba(color,alpha*(.18+(i%3)*.035));ctx.lineWidth=1.5+i%2;ctx.stroke();
        } break;
      }
      case "cloud": {
        const off=(drift-.5)*(cfg.dir||1)*(cfg.w||.2)*1920;
        const grad=ctx.createRadialGradient(x+off,y,4,x+off,y,Math.max(60,(cfg.w||.2)*900));
        grad.addColorStop(0,rgba(color,alpha*.22));grad.addColorStop(1,rgba(color,0));
        ctx.fillStyle=grad;ctx.beginPath();ctx.ellipse(x+off,y,(cfg.w||.2)*720,100,0,0,Math.PI*2);ctx.fill();
        ctx.fillStyle=rgba(color,alpha*.045);ctx.beginPath();ctx.ellipse(x+off*.7,y+42,(cfg.w||.2)*530,55,0,0,Math.PI*2);ctx.fill();break;
      }
      case "lamp": {
        const pulse=reduced?.5:(.5+.5*Math.sin(p*6.283));
        const radius=(cfg.r||.18)*1080*(.88+pulse*.12);
        const grad=ctx.createRadialGradient(x,y,3,x,y,radius);
        grad.addColorStop(0,rgba(color,alpha*.25));grad.addColorStop(.42,rgba(color,alpha*.11));grad.addColorStop(1,rgba(color,0));
        ctx.fillStyle=grad;ctx.fillRect(x-radius,y-radius,radius*2,radius*2);break;
      }
      case "ink": {
        const radius=(cfg.r||.16)*1080*(.45+drift*.55);
        const grad=ctx.createRadialGradient(x,y,2,x,y,radius);
        grad.addColorStop(0,rgba(color,alpha*.13));grad.addColorStop(.66,rgba(color,alpha*.08));grad.addColorStop(1,rgba(color,0));
        ctx.fillStyle=grad;ctx.beginPath();ctx.arc(x,y,radius,0,Math.PI*2);ctx.fill();break;
      }
      case "split": {
        for(let i=0;i<4;i++){
          const side=i%2?-1:1, yy=(cfg.y+(i-1.5)*.11)*1080;
          const xx=960+side*(120+drift*260);
          const grad=ctx.createLinearGradient(xx-170,yy,xx+170,yy);
          grad.addColorStop(0,rgba(color,0));grad.addColorStop(.5,rgba(color,alpha*.19));grad.addColorStop(1,rgba(color,0));
          ctx.strokeStyle=grad;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(xx-170,yy);ctx.lineTo(xx+170,yy);ctx.stroke();
        } break;
      }
      case "page": {
        const q=(reduced?.45:drift), px=x+q*(cfg.dx||.08)*1920, py=y+q*(cfg.dy||.05)*1080;
        ctx.globalAlpha=alpha*.38;ctx.fillStyle=color;ctx.strokeStyle=rgba("#fff3d2",alpha*.42);ctx.lineWidth=1.5;
        ctx.beginPath();ctx.moveTo(px,py);ctx.quadraticCurveTo(px+55,py-22,px+120,py+8);ctx.lineTo(px+100,py+52);ctx.quadraticCurveTo(px+54,py+24,px,py);ctx.fill();ctx.stroke();break;
      }
      case "shadow": {
        const slide=reduced?0:(drift-.5)*90;
        ctx.fillStyle=rgba(color,alpha*.16);ctx.beginPath();ctx.moveTo(x+slide,y);ctx.lineTo(x+slide+cfg.w*1920,y-40);ctx.lineTo(x+slide+cfg.w*1920,y+cfg.h*1080);ctx.lineTo(x+slide,y+cfg.h*1080);ctx.closePath();ctx.fill();break;
      }
      case "glint": {
        const sweep=(reduced?.5:drift), xx=(cfg.x+(sweep-.5)*(cfg.w||.18))*1920;
        const grad=ctx.createLinearGradient(xx-26,0,xx+26,0);grad.addColorStop(0,rgba(color,0));grad.addColorStop(.5,rgba(color,alpha*.42));grad.addColorStop(1,rgba(color,0));
        ctx.fillStyle=grad;ctx.fillRect(xx-26,y-14,52,28);break;
      }
      case "rain": {
        for(let i=0;i<9;i++){
          const xx=(cfg.x+(i-4)*.045)*1920, yy=((cfg.y+(drift*.55+i*.117)%1)*1080);
          ctx.strokeStyle=rgba(color,alpha*.45);ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(xx,yy);ctx.lineTo(xx-7,yy+22);ctx.stroke();
        } break;
      }
      case "cards": {
        const index=Math.min(2,Math.floor(drift*3));
        for(let i=0;i<3;i++){
          const bx=(cfg.x+i*(cfg.w/3))*1920, by=y+(i%2)*42;
          ctx.strokeStyle=rgba(color,alpha*(i===index?.55:.18));ctx.lineWidth=i===index?3:1.5;
          ctx.strokeRect(bx,by,Math.max(80,cfg.w*1920/3-16),94);
        } break;
      }
      case "route": {
        const grad=ctx.createLinearGradient(x-250,y,x+600,y-90);grad.addColorStop(0,rgba(color,0));grad.addColorStop(.55,rgba(color,alpha*.42));grad.addColorStop(1,rgba(color,0));
        ctx.strokeStyle=grad;ctx.lineWidth=5;ctx.setLineDash([18,13]);ctx.lineDashOffset=-(reduced?0:drift*125);
        ctx.beginPath();ctx.moveTo(x-250,y);ctx.bezierCurveTo(x-40,y-110,x+160,y+54,x+610,y-100);ctx.stroke();ctx.setLineDash([]);break;
      }
      case "playhead": {
        const xx=(cfg.x-cfg.w/2+drift*cfg.w)*1920;
        ctx.strokeStyle=rgba(color,alpha*.7);ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(xx,y-55);ctx.lineTo(xx,y+55);ctx.stroke();break;
      }
      case "signal": {
        const phase=reduced?.55:drift;
        for(let i=0;i<3;i++){const r=((phase+i/3)%1)*cfg.r*1080;ellipse(ctx,x,y,r,r,color,alpha*(1-r/(cfg.r*1080))*.38,2);}
        break;
      }
      case "drop": {
        const yy=y+(reduced?.08:drift*.24)*1080;
        ctx.fillStyle=rgba(color,alpha*.6);ctx.beginPath();ctx.ellipse(x,yy,5,9,0,0,Math.PI*2);ctx.fill();
        if(drift>.24||reduced)ellipse(ctx,x,yy+15,(drift-.2)*cfg.r*900,(drift-.2)*cfg.r*450,color,alpha*.35,2);break;
      }
      case "lights": {
        for(let i=0;i<5;i++){
          const q=reduced?.55:clamp((drift-i*.12)*2.5);
          const lx=(cfg.x+i*cfg.w/4)*1920, ly=y+(i%2)*70;
          const rad=18+q*20, grad=ctx.createRadialGradient(lx,ly,1,lx,ly,rad);
          grad.addColorStop(0,rgba(color,alpha*.38*q));grad.addColorStop(1,rgba(color,0));ctx.fillStyle=grad;ctx.fillRect(lx-rad,ly-rad,rad*2,rad*2);
        } break;
      }
    }
    ctx.restore();
  }

  function mount(player) {
    if (player.dataset.motionEffectsMounted === "true") return;
    player.dataset.motionEffectsMounted = "true";
    player.classList.add("motion-effects-host");
    const layer=document.createElement("div");layer.className="motion-effects-layer";layer.setAttribute("aria-hidden","true");
    const canvas=document.createElement("canvas");canvas.className="motion-effects-canvas";layer.append(canvas);player.append(layer);
    const verse=document.createElement("div");verse.className="motion-original-verse";verse.setAttribute("aria-live","off");verse.setAttribute("role","note");verse.hidden=true;player.append(verse);
    const ctx=canvas.getContext("2d");
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
    const fit=()=>{const rect=player.getBoundingClientRect(),dpr=Math.min(2,window.devicePixelRatio||1);canvas.width=Math.max(1,Math.round(rect.width*dpr));canvas.height=Math.max(1,Math.round(rect.height*dpr));};
    new ResizeObserver(fit).observe(player);fit();
    const setReturnLink=()=>{
      const back=document.querySelector(".reader-header a.back-link");
      if(!back)return;
      if(back.getAttribute("href")!=="./reading.html")back.href="./reading.html";
      if(back.textContent!=="← 返回原版閱讀")back.textContent="← 返回原版閱讀";
      back.setAttribute("aria-label","返回原版閱讀");
      back.classList.add("motion-back-link");
    };
    setReturnLink();
    const header=document.querySelector(".reader-header");
    if(header){const navObserver=new MutationObserver(setReturnLink);navObserver.observe(header,{childList:true,subtree:true,attributes:true,attributeFilter:["href"]});}
    const slider=document.querySelector(".seek-slider");
    const frame=()=>{
      if(!player.isConnected)return;
      const nowMs=slider?Number(slider.value)*1000:0;
      const sceneIndex=SCENES.findIndex(([start,end])=>nowMs>=start&&nowMs<end);
      ctx.setTransform(canvas.width/1920,0,0,canvas.height/1080,0,0);ctx.clearRect(0,0,1920,1080);
      if(sceneIndex>=0){
        const [start,end]=SCENES[sceneIndex],id=String(sceneIndex+1).padStart(3,"0"),cfg=EFFECTS[id];
        const progress=clamp((nowMs-start)/(end-start));
        const edge=Math.min(1,progress*1000/650,(1-progress)*1000/650);
        const alpha=reduced.matches?.62:.78*edge;
        if(cfg&&alpha>0)drawEffect(ctx,cfg,reduced.matches?.5:progress,alpha,reduced.matches);
      }
      const cue=VERSES.find(v=>nowMs>=v.start&&nowMs<v.end);
      if(cue){
        if(verse.textContent!==cue.text)verse.textContent=cue.text;
        verse.style.left=`${cue.x}%`;verse.style.top=`${cue.y}%`;
        const safeWidth=Math.max(40,Math.min(82,2*Math.min(cue.x,100-cue.x)-6));
        verse.style.maxWidth=`${safeWidth}%`;
        const cueProgress=(nowMs-cue.start)/1000,remaining=(cue.end-nowMs)/1000;
        const reveal=clamp(cueProgress/.18),fade=clamp(Math.min(cueProgress/.18,remaining/.18));
        const easedReveal=1-Math.pow(1-reveal,3);
        verse.style.opacity=reduced.matches?"1":String(fade);
        verse.style.transform=`translate(-50%,calc(-50% + ${reduced.matches?0:(1-easedReveal)*7}px))`;
        verse.hidden=false;
      }else{verse.style.opacity="0";verse.hidden=true;}
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  const start=()=>{
    if(document.body.dataset.motionEffects!=="true")return;
    const root=document.getElementById("root");if(!root)return;
    const observer=new MutationObserver(()=>{const player=root.querySelector(".remotion-player");if(player){observer.disconnect();mount(player);}});
    observer.observe(root,{childList:true,subtree:true});
    const player=root.querySelector(".remotion-player");if(player){observer.disconnect();mount(player);}
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();
