(() => {
  const sceneStarts = [1.5,10.913,16.449,22.54,31.021,39.12,47.316,56.02,63.109,70.757,79.64,84.15,90.887,96.42,103.547,111.523,115.64,121.884,127.947,134.46,140.173,147.391,151.24,159.115,167.34,175.259,180.566,187.2,195.045,204.9,209.492,214.095,221,226.954,236.06,242.083,249.44,254.292,260.876,267.46,277.159,283.8,291.415,300.86,308.017,316.24,322.307,331.02,341.479,348.56,357.02,363.46,369.749,376.24,383.614,394.18,403.021,406.702,414.28];
  const effects = [
    ['glint',.72,.30,.70],['focus',.52,.70,.66],['ribbon',.52,.64,.76],['ripple',.70,.55,.78],['depth',.64,.63,.62],
    ['paper',.72,.56,.60],['magnify',.54,.72,.68],['ink',.55,.65,.56],['pond',.52,.78,.60],['sunset',.72,.56,.66],
    ['paper',.52,.76,.52],['magnify',.55,.70,.70],['bamboo',.16,.54,.50],['leaf',.84,.32,.54],['candle',.82,.80,.55],
    ['ribbon',.70,.54,.62],['bamboo',.80,.34,.48],['focus',.60,.57,.52],['ink',.52,.72,.58],['glint',.62,.76,.62],
    ['leaf',.74,.38,.62],['focus',.70,.44,.52],['leaf',.75,.30,.62],['glint',.73,.24,.66],['ribbon',.72,.72,.58],
    ['contrast',.50,.55,.58],['doorway',.52,.52,.54],['glint',.78,.68,.56],['leaf',.18,.28,.56],['focus',.69,.37,.50],
    ['ripple',.52,.67,.78],['mist',.70,.53,.62],['listening',.57,.52,.54],['pond',.54,.61,.58],['paper',.45,.73,.52],
    ['gap',.51,.61,.54],['chalk',.51,.68,.54],['ink',.67,.56,.62],['detail',.54,.62,.68],['ribbon',.60,.60,.70],
    ['mist',.68,.52,.58],['listening',.53,.52,.56],['projector',.25,.35,.50],['listening',.55,.52,.48],['chalk',.70,.38,.58],
    ['paper',.51,.66,.52],['scan',.52,.50,.62],['scan',.50,.48,.58],['timeline',.52,.54,.54],['scan',.54,.56,.60],
    ['timeline',.52,.55,.58],['route',.52,.58,.55],['route',.50,.52,.68],['warmth',.72,.40,.56],['route',.52,.58,.60],
    ['depth',.55,.50,.56],['ripple',.55,.72,.76],['ribbon',.73,.56,.68],['sunset',.55,.48,.60]
  ];
  const poemCues = [
    {start:107.406,end:111.523,image:'015',text:'若言琴上有琴聲，\n放在匣中何不鳴？',placement:'right-text',lines:2},
    {start:111.523,end:115.64,image:'016',text:'若言聲在指頭上，\n何不於君指上聽？',placement:'right-sky',lines:2},
    {start:134.64,end:137.527,image:'020',text:'若言琴上有琴聲，',placement:'upper-right',lines:1},
    {start:147.391,end:151.24,image:'022',text:'放在匣中何不鳴？',placement:'upper-middle',lines:1},
    {start:164.156,end:167.34,image:'024',text:'若言聲在指頭上，',placement:'upper-right',lines:1},
    {start:171.721,end:175.259,image:'025',text:'何不於君指上聽？',placement:'upper-right',lines:1}
  ];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = (v,a,b) => Math.max(a,Math.min(b,v));
  const ensureNav = () => {
    if (document.querySelector('.motion-version-nav')) return;
    const header=document.querySelector('.reader-header');
    if(!header)return;
    const nav=document.createElement('nav');
    nav.className='motion-version-nav';
    nav.setAttribute('aria-label','動畫版本導覽');
    nav.innerHTML='<a class="motion-return-link" href="./reading.html">← 返回原版閱讀</a><span class="motion-version-label">動畫特效版 ✦</span>';
    header.insertAdjacentElement('afterend',nav);
  };
  const waitForReader = () => {
    ensureNav();
    const stage = document.querySelector('.stage-wrap');
    const composition = document.querySelector('.video-composition');
    const audio = document.querySelector('.master-audio');
    if (!stage || !composition || !audio) return false;
    if (composition.dataset.motionEffectsReady === 'true' && composition.querySelector('.motion-effect-canvas') && composition.querySelector('.motion-poem-layer')) return true;
    composition.querySelector('.motion-effect-canvas')?.remove();
    composition.querySelector('.motion-poem-layer')?.remove();
    composition.dataset.motionEffectsReady = 'true';

    const canvas = document.createElement('canvas');
    canvas.className = 'motion-effect-canvas';
    canvas.setAttribute('aria-hidden','true');
    composition.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    const poem = document.createElement('div');
    poem.className = 'motion-poem-layer';
    poem.setAttribute('aria-hidden','true');
    composition.appendChild(poem);

    let width=0,height=0,dpr=1;
    const resize = () => {
      const box=composition.getBoundingClientRect();
      if (!box.width || !box.height) return;
      dpr=Math.min(window.devicePixelRatio||1,2); width=box.width; height=box.height;
      canvas.width=Math.round(width*dpr); canvas.height=Math.round(height*dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);
    };
    new ResizeObserver(resize).observe(composition);
    resize();

    const draw = (kind,x,y,strength,phase) => {
      const px=x*width, py=y*height, radius=Math.min(width,height)*(.09+.025*Math.sin(phase*1.2));
      ctx.save(); ctx.globalCompositeOperation='screen';
      const alpha=strength*(reduceMotion.matches?.18:.34);
      if (kind==='glint'||kind==='pond'||kind==='detail'||kind==='listening') {
        for(let i=0;i<6;i++){const a=phase*.55+i*2.4, r=radius*(.32+(i%3)*.22); const gx=px+Math.cos(a)*r,gy=py+Math.sin(a*.8)*r*.48; ctx.fillStyle=`rgba(255,226,151,${alpha*(.4+.6*Math.sin(a)**2)})`;ctx.beginPath();ctx.ellipse(gx,gy,Math.max(1,width*.0025),Math.max(1,width*.001),a*.2,0,Math.PI*2);ctx.fill();}
      }
      if (kind==='ripple'||kind==='magnify') {
        for(let i=0;i<3;i++){const rr=radius*(.28+i*.24+((phase*.14+i*.18)% .18));ctx.beginPath();ctx.ellipse(px,py,rr*1.55,rr*.54,0,0,Math.PI*2);ctx.strokeStyle=`rgba(255,224,146,${alpha*(1-i*.22)})`;ctx.lineWidth=Math.max(1,width*.0015);ctx.stroke();}
      }
      if (kind==='ribbon'||kind==='mist'||kind==='sunset') {
        const amplitude=kind==='mist'?height*.022:height*.033;
        for(let band=0;band<3;band++){ctx.beginPath();for(let i=0;i<=48;i++){const u=i/48,xx=width*u, yy=py+(u-.5)*height*.20+Math.sin(u*8+phase*.7+band*1.3)*amplitude*(.5+u*.5);i?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy);}ctx.strokeStyle=kind==='sunset'?`rgba(255,218,144,${alpha*.48})`:`rgba(212,237,239,${alpha*.52-band*.08})`;ctx.lineWidth=Math.max(1,height*.0017);ctx.stroke();}
      }
      if (kind==='leaf'||kind==='bamboo') {
        for(let i=0;i<4;i++){const q=(phase*.12+i*.27)%1, lx=(x+(i%2?.16:-.12)+Math.sin(phase+i)*.035)*width, ly=((y-.5+q*.72)%1)*height;ctx.save();ctx.translate(lx,ly);ctx.rotate(Math.sin(phase*.6+i)*.7);ctx.fillStyle=`rgba(228,190,104,${alpha*.75})`;ctx.beginPath();ctx.ellipse(0,0,width*.006,height*.0028,.2,0,Math.PI*2);ctx.fill();ctx.restore();}
      }
      if (kind==='ink'||kind==='paper'||kind==='chalk') {
        const sweep=((phase*.12)%1);ctx.beginPath();ctx.moveTo(width*(sweep-.08),height*.12);ctx.lineTo(width*(sweep+.18),height*.86);ctx.strokeStyle=kind==='chalk'?`rgba(255,255,255,${alpha*.26})`:`rgba(242,214,157,${alpha*.22})`;ctx.lineWidth=Math.max(2,width*.018);ctx.stroke();
      }
      if (kind==='focus'||kind==='contrast'||kind==='gap'||kind==='doorway'||kind==='warmth'||kind==='projector') {
        const g=ctx.createRadialGradient(px,py,1,px,py,radius*1.55);g.addColorStop(0,`rgba(255,221,151,${alpha*.45})`);g.addColorStop(1,'rgba(255,221,151,0)');ctx.fillStyle=g;ctx.fillRect(0,0,width,height);
      }
      if (kind==='scan'||kind==='timeline') {
        const sx=((phase*.18)%1)*width;ctx.fillStyle=`rgba(119,220,224,${alpha*.30})`;ctx.fillRect(sx,0,Math.max(2,width*.002),height);ctx.fillStyle=`rgba(255,226,151,${alpha*.2})`;ctx.fillRect(0,height*.72,width,height*.008);
      }
      if (kind==='route') {
        ctx.beginPath();for(let i=0;i<=36;i++){const u=i/36,xx=width*(.12+.76*u),yy=height*(.53+.17*Math.sin(u*5+phase*.15));i?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy);}ctx.setLineDash([width*.008,width*.007]);ctx.strokeStyle=`rgba(255,199,91,${alpha*.78})`;ctx.lineWidth=Math.max(2,width*.0022);ctx.stroke();ctx.setLineDash([]);const t=(phase*.12)%1;ctx.beginPath();ctx.arc(width*(.12+.76*t),height*(.53+.17*Math.sin(t*5+phase*.15)),Math.max(3,width*.006),0,Math.PI*2);ctx.fillStyle=`rgba(255,230,153,${alpha})`;ctx.fill();
      }
      if (kind==='depth'||kind==='candle'||kind==='manuscript') {
        const g=ctx.createRadialGradient(px,py,1,px,py,radius);g.addColorStop(0,`rgba(255,207,116,${alpha*.48})`);g.addColorStop(1,'rgba(255,207,116,0)');ctx.fillStyle=g;ctx.fillRect(0,0,width,height);
      }
      ctx.restore();
    };

    const imageId = () => {
      const imgs=[...composition.querySelectorAll('img.frame-art')];
      const visible=imgs.map(img=>({img,opacity:Number(img.style.opacity||1)})).sort((a,b)=>b.opacity-a.opacity)[0]?.img;
      const match=visible?.src.match(/\/(\d{3})\.webp(?:[?#]|$)/i);
      return match?.[1]||null;
    };
    let priorCue='';
    const tick = () => {
      if (!composition.isConnected || !canvas.isConnected) return;
      const now=Number(audio.currentTime)||0;
      if (width&&height) {ctx.clearRect(0,0,width,height);const id=imageId();const index=id?Number(id)-1:-1;const cfg=effects[index];if(cfg&&!reduceMotion.matches)draw(cfg[0],cfg[1],cfg[2],cfg[3],Math.max(0,now-(sceneStarts[index]||now)));}
      const cue=poemCues.find(item=>now>=item.start&&now<item.end&&imageId()===item.image);
      const cueId=cue?`${cue.image}-${cue.start}`:'';
      if(cueId!==priorCue){
        priorCue=cueId;
        if(cue){poem.textContent=cue.text;poem.dataset.placement=cue.placement;poem.dataset.lines=String(cue.lines);poem.setAttribute('aria-hidden','false');poem.classList.add('is-visible');}
        else{poem.classList.remove('is-visible');poem.setAttribute('aria-hidden','true');}
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    return true;
  };
  const start=()=>{waitForReader();const observer=new MutationObserver(()=>waitForReader());observer.observe(document.getElementById('root')||document.body,{childList:true,subtree:true});};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
