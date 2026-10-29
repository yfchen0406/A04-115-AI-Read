(function(){
"use strict";
const data=window.MOTION_EFFECT_DATA;
if(!data)return;function boot(){const root=document.getElementById("stage-wrap");if(!root)return false;
const canvas=document.createElement("canvas"),fx=document.createElement("div"),poemLayer=document.createElement("div"),poem=document.createElement("div");
canvas.setAttribute("aria-hidden","true");fx.className="motion-fx-layer";fx.appendChild(canvas);
poemLayer.className="motion-poem-layer";poemLayer.setAttribute("aria-live","off");poem.className="motion-poem";poemLayer.appendChild(poem);root.append(fx,poemLayer);
const ctx=canvas.getContext("2d"),reduce=window.matchMedia("(prefers-reduced-motion: reduce)");
let canvasWidth=0,canvasHeight=0,raf=0;
function resize(){const r=root.getBoundingClientRect(),d=Math.min(window.devicePixelRatio||1,2),w=Math.round(r.width*d),h=Math.round(r.height*d);if(w&&h&&(w!==canvasWidth||h!==canvasHeight)){canvasWidth=w;canvasHeight=h;canvas.width=w;canvas.height=h;ctx.setTransform(w/1920,0,0,h/1080,0,0)}}
function paint(s,p,sec){
resize();ctx.clearRect(0,0,1920,1080);if(reduce.matches){p=.5;sec=0}
const drift=reduce.matches?0:Math.sin(sec*.5+s.seed)*10,side=s.seed%2?1:-1;ctx.save();
if(s.kind==="tide"||s.kind==="ripple"){ctx.globalAlpha=.12;ctx.strokeStyle="#f4f0d9";ctx.lineWidth=4;for(let j=0;j<3;j++){ctx.beginPath();ctx.ellipse(s.kind==="ripple"?980:960,830+j*45+drift,30+p*120+j*28,12+p*30+j*9,0,0,Math.PI*2);ctx.stroke()}}
else if(s.kind==="window"||s.kind==="sky"||s.kind==="tone"){const g=ctx.createLinearGradient(side>0?0:1920,0,side>0?1100:700,800);g.addColorStop(0,"rgba(255,223,164,0)");g.addColorStop(.5,s.kind==="tone"?"rgba(150,180,211,.05)":"rgba(255,222,159,.12)");g.addColorStop(1,"rgba(255,223,164,0)");ctx.globalAlpha=.7;ctx.fillStyle=g;ctx.fillRect(0,0,1920,1080)}
else if(s.kind==="water"||s.kind==="reflection"||s.kind==="boat"||s.kind==="path"){ctx.globalAlpha=.1;ctx.fillStyle="#fff0c6";for(let j=0;j<8;j++){const xx=(j*255+sec*17*side)%2050-80;ctx.fillRect(xx,700+j*15+drift,100+(j%3)*25,3)}}
else if(s.kind==="leaf"){ctx.globalAlpha=.18;for(let j=0;j<3;j++){const q=reduce.matches?.5:(p*.7+j*.35)%1;ctx.save();ctx.translate((s.seed*107+j*570+q*250)%1900,130+q*680);ctx.rotate(q*2);ctx.fillStyle=j%2?"#dc9b51":"#ead19a";ctx.beginPath();ctx.ellipse(0,0,9,21,0,0,Math.PI*2);ctx.fill();ctx.restore()}}
else if(s.kind==="branch"){ctx.globalAlpha=.09;ctx.strokeStyle="#274537";ctx.lineWidth=13;ctx.lineCap="round";for(let j=0;j<4;j++){ctx.beginPath();ctx.moveTo(-60,35+j*33);ctx.bezierCurveTo(420,95+j*22+drift,700,5+j*52,1120,75+j*22);ctx.stroke()}ctx.fillStyle="#35523e";for(let j=0;j<7;j++){ctx.save();ctx.translate(190+j*135,95+(j%3)*25+drift);ctx.rotate(.55+j*.18);ctx.beginPath();ctx.ellipse(0,0,8,20,0,0,Math.PI*2);ctx.fill();ctx.restore()}}
else if(s.kind==="shore"){ctx.globalAlpha=.12;ctx.strokeStyle="#edf4e8";ctx.lineWidth=5;for(let j=0;j<5;j++){ctx.beginPath();ctx.moveTo(0,770+j*35);ctx.bezierCurveTo(410,735+j*34+drift,890,835+j*28,1330,775+j*32);ctx.quadraticCurveTo(1640,750+j*30,1950,800+j*30);ctx.stroke()}}
else if(s.kind==="mist"||s.kind==="shadow"){ctx.globalAlpha=.1;ctx.filter="blur(26px)";const g=ctx.createRadialGradient(960,590,10,960,590,620);g.addColorStop(0,"rgba(225,237,235,.4)");g.addColorStop(1,"rgba(225,237,235,0)");ctx.fillStyle=g;ctx.fillRect(0,250,1920,700);ctx.filter="none"}
else if(s.kind==="ink"||s.kind==="page"||s.kind==="paper"){ctx.globalAlpha=.1;ctx.strokeStyle=s.kind==="ink"?"#1d3141":"#ffe4ae";ctx.lineWidth=4;ctx.beginPath();ctx.ellipse(960,790+drift,240+p*80,52,0,0,Math.PI*2);ctx.stroke()}
else if(s.kind==="steam"){ctx.globalAlpha=.12;ctx.strokeStyle="#fff0d8";ctx.lineWidth=6;for(let j=0;j<3;j++){ctx.beginPath();ctx.moveTo(850+j*100,760);ctx.bezierCurveTo(820+j*100,680+drift,920+j*100,610,850+j*100,510-p*40);ctx.stroke()}}
else if(s.kind==="glint"||s.kind==="lamp"||s.kind==="device"){const cx=s.kind==="lamp"?1470:s.kind==="device"?1260:960,cy=s.kind==="device"?790:430,g=ctx.createRadialGradient(cx,cy,5,cx,cy,240);g.addColorStop(0,"rgba(255,225,150,.6)");g.addColorStop(1,"rgba(255,225,150,0)");ctx.globalAlpha=s.kind==="lamp"?.12:.1;ctx.fillStyle=g;ctx.fillRect(cx-240,cy-240,480,480)}
ctx.restore();ctx.globalAlpha=1
}
function active(){const yes=!root.querySelector(".cover-start");fx.classList.toggle("is-active",yes);poemLayer.classList.toggle("is-active",yes)}
function update(ms){
active();let s=data.scenes.find(q=>ms>=q.startMs&&ms<q.endMs);if(!s&&ms>=data.scenes[data.scenes.length-1].endMs)s=data.scenes[data.scenes.length-1];
ctx.clearRect(0,0,1920,1080);if(s&&fx.classList.contains("is-active"))paint(s,(ms-s.startMs)/(s.endMs-s.startMs),ms/1000);
const q=s&&data.poems.find(v=>v.sceneId===s.id&&ms>=v.startMs&&ms<v.endMs);
if(!q||!poemLayer.classList.contains("is-active")){poem.style.opacity="0";poem.classList.remove("is-visible");return}
if(poem.dataset.cue!==q.id){poem.dataset.cue=q.id;poem.textContent=q.text;poem.style.left=q.left+"%";poem.style.top=q.top+"%";poem.style.width=q.width+"%"}
const edge=Math.min(ms-q.startMs,q.endMs-ms),fade=Math.min(180,(q.endMs-q.startMs)/5),opacity=reduce.matches?1:Math.max(0,Math.min(1,edge/fade));
poem.style.opacity=String(opacity);poem.classList.toggle("is-visible",opacity>.6)
}
const audio=root.querySelector("audio.master-audio"),slider=document.querySelector(".seek-slider");
function loop(){raf=0;if(audio){update(audio.currentTime*1000);if(!audio.paused&&!reduce.matches)raf=requestAnimationFrame(loop)}}
function sync(){update(audio?audio.currentTime*1000:0)}
if(audio){["timeupdate","seeked","seeking","loadedmetadata","play","pause","ended"].forEach(k=>audio.addEventListener(k,()=>{sync();if(k==="play"&&!reduce.matches&&!raf)raf=requestAnimationFrame(loop)}));if(slider)slider.addEventListener("input",()=>update(Number(slider.value)*1000))}
new MutationObserver(()=>{active();sync()}).observe(root,{childList:true,subtree:true});
new ResizeObserver(()=>{resize();sync()}).observe(root);reduce.addEventListener("change",sync);
sync()
return true}if(!boot()){let watch=new MutationObserver(()=>{if(boot())watch.disconnect()});watch.observe(document.body,{childList:true,subtree:true})}})();




