/* 《春宵》動畫特效版：所有時間取自 data/timeline.json，影像與原字幕保持不變。 */
(() => {
  "use strict";
  if (document.body.dataset.motionEffects !== "true") return;

  const scenes = [
    {id:"001",startMs:0,endMs:12753,type:"lantern",x:15,y:22,r:18,a:.18},
    {id:"002",startMs:12753,endMs:18380,type:"coin-glint",x:76,y:40,r:13,a:.17},
    {id:"003",startMs:18380,endMs:29661,type:"corridor-mist",x:49,y:41,r:28,a:.12},
    {id:"004",startMs:29661,endMs:41952,type:"branch-shadow",x:51,y:37,r:25,a:.09},
    {id:"005",startMs:41952,endMs:45099,type:"moon-halo",x:77,y:12,r:18,a:.2},
    {id:"006",startMs:45099,endMs:54540,type:"scroll-shadow",x:46,y:39,r:27,a:.09},
    {id:"007",startMs:54540,endMs:61746,type:"paper-divide",x:54,y:36,r:24,a:.12},
    {id:"008",startMs:61746,endMs:72520,type:"book-dust",x:52,y:39,r:25,a:.1},
    {id:"009",startMs:72520,endMs:81440,type:"ink-recede",x:48,y:38,r:28,a:.13},
    {id:"010",startMs:81440,endMs:89260,type:"window-lamp",x:86,y:16,r:13,a:.16},
    {id:"011",startMs:89260,endMs:98534,type:"scroll-ink",x:52,y:39,r:24,a:.11},
    {id:"012",startMs:98534,endMs:109960,type:"blossom-drift",x:48,y:25,r:22,a:.13},
    {id:"013",startMs:109960,endMs:121054,type:"dew-refraction",x:75,y:15,r:14,a:.17},
    {id:"014",startMs:121054,endMs:131168,type:"courtyard-dusk",x:72,y:39,r:35,a:.1},
    {id:"015",startMs:131168,endMs:137562,type:"distant-lanterns",x:83,y:30,r:18,a:.16},
    {id:"016",startMs:137562,endMs:145280,type:"stone-bowl-ripple",x:58,y:42,r:25,a:.13},
    {id:"017",startMs:145280,endMs:156349,type:"eave-moon-shadow",x:28,y:45,r:24,a:.1},
    {id:"018",startMs:156349,endMs:166497,type:"step-shadow",x:48,y:46,r:25,a:.1},
    {id:"019",startMs:166497,endMs:178640,type:"curtain-lantern",x:73,y:31,r:22,a:.12},
    {id:"020",startMs:178640,endMs:191172,type:"swing-shadow",x:50,y:42,r:20,a:.12},
    {id:"021",startMs:191172,endMs:199000,type:"far-lights-fade",x:80,y:29,r:24,a:.12},
    {id:"022",startMs:199000,endMs:208840,type:"petal-shadow",x:45,y:42,r:19,a:.11},
    {id:"023",startMs:208840,endMs:217720,type:"coin-to-blossom",x:65,y:40,r:20,a:.15},
    {id:"024",startMs:217720,endMs:228404,type:"light-boundary",x:57,y:38,r:34,a:.11},
    {id:"025",startMs:228404,endMs:233252,type:"empty-cup-glimmer",x:29,y:42,r:17,a:.14},
    {id:"026",startMs:233252,endMs:242140,type:"robe-rimlight",x:39,y:31,r:22,a:.1},
    {id:"027",startMs:242140,endMs:250475,type:"two-reading-inks",x:53,y:38,r:22,a:.1},
    {id:"028",startMs:250475,endMs:260720,type:"single-window",x:81,y:17,r:13,a:.16},
    {id:"029",startMs:260720,endMs:265623,type:"quill-poollight",x:54,y:43,r:15,a:.14},
    {id:"030",startMs:265623,endMs:274620,type:"dinner-steam",x:49,y:35,r:24,a:.11},
    {id:"031",startMs:274620,endMs:285232,type:"phone-to-warmth",x:51,y:38,r:20,a:.12},
    {id:"032",startMs:285232,endMs:296236,type:"clock-shadow",x:68,y:37,r:20,a:.1},
    {id:"033",startMs:296236,endMs:305248,type:"street-leaflight",x:46,y:33,r:27,a:.11},
    {id:"034",startMs:305248,endMs:309020,type:"morning-teasteam",x:70,y:31,r:17,a:.12},
    {id:"035",startMs:309020,endMs:321476,type:"moving-cloudlight",x:58,y:19,r:32,a:.12},
    {id:"036",startMs:321476,endMs:330420,type:"photo-page-sheen",x:60,y:43,r:21,a:.1},
    {id:"037",startMs:330420,endMs:336389,type:"calendar-sunbeam",x:71,y:27,r:23,a:.12},
    {id:"038",startMs:336389,endMs:347060,type:"work-to-street",x:55,y:36,r:32,a:.11},
    {id:"039",startMs:347060,endMs:353928,type:"family-gathering",x:54,y:34,r:25,a:.1},
    {id:"040",startMs:353928,endMs:362080,type:"open-calendar-glow",x:57,y:38,r:20,a:.12},
    {id:"041",startMs:362080,endMs:373228,type:"lantern-goodnight",x:78,y:29,r:18,a:.13},
    {id:"042",startMs:373228,endMs:385097,type:"empty-courtyard-mist",x:51,y:40,r:32,a:.1},
    {id:"043",startMs:385097,endMs:392000,type:"turning-page-light",x:69,y:39,r:23,a:.13}
  ];

  const poemCues = [
    {cue:"3",startMs:12753,endMs:18380,image:"002",x:60,y:61,w:36,lines:["春宵一刻值千金，"]},
    {cue:"20",startMs:123664,endMs:127460,image:"014",x:57,y:39,w:40,lines:["春宵一刻值千金，","花有清香月有陰。"]},
    {cue:"21",startMs:127640,endMs:131168,image:"014",x:57,y:39,w:40,lines:["歌管樓臺聲細細，","鞦韆院落夜沉沉。"]},
    {cue:"24",startMs:145460,endMs:148127,image:"017",x:5,y:67,w:44,lines:["春宵一刻值千金，"]},
    {cue:"27",startMs:163640,endMs:166497,image:"018",x:55,y:45,w:40,lines:["花有清香月有陰。"]},
    {cue:"30",startMs:178820,endMs:181420,image:"020",x:5,y:68,w:43,lines:["歌管樓臺聲細細，"]},
    {cue:"35",startMs:196120,endMs:199000,image:"021",x:55,y:65,w:40,lines:["鞦韆院落夜沉沉。"]},
    {cue:"63",startMs:362260,endMs:363980,image:"041",x:56,y:56,w:39,lines:["春宵一刻值千金，"]}
  ];

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const rgba = (rgb, alpha) => "rgba(" + rgb + "," + alpha + ")";
  let mounted = false;

  function install(stage, audio) {
    if (mounted || !stage || !audio) return;
    mounted = true;
    stage.dataset.motionEffectsMounted = "true";

    const canvas = document.createElement("canvas");
    canvas.className = "motion-effect-canvas";
    canvas.setAttribute("aria-hidden", "true");
    stage.appendChild(canvas);
    const ctx = canvas.getContext("2d", {alpha:true});
    const poemNodes = poemCues.map(cue => {
      const box = document.createElement("div");
      box.className = "poem-overlay";
      box.setAttribute("aria-hidden", "true");
      box.dataset.cue = cue.cue;
      box.style.left = cue.x + "%";
      box.style.top = cue.y + "%";
      box.style.width = cue.w + "%";
      cue.lines.forEach(line => {
        const span = document.createElement("span");
        span.className = "poem-overlay-line";
        span.textContent = line;
        box.appendChild(span);
      });
      stage.appendChild(box);
      return {cue, box};
    });

    let cssWidth = 0, cssHeight = 0, raf = 0;
    const resize = () => {
      const rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cssWidth = rect.width;
      cssHeight = rect.height;
      canvas.width = Math.round(cssWidth * dpr);
      canvas.height = Math.round(cssHeight * dpr);
      ctx.setTransform(canvas.width / 100, 0, 0, canvas.height / 56.25, 0, 0);
      draw();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(stage);
    window.addEventListener("resize", resize, {passive:true});

    function glow(fx, time, progress, color, strength) {
      const pulse = reducedMotion.matches ? .72 : .58 + .22 * Math.sin(time * 1.15 + fx.x);
      const g = ctx.createRadialGradient(fx.x, fx.y, .1, fx.x, fx.y, fx.r);
      g.addColorStop(0, rgba(color, fx.a * strength * pulse));
      g.addColorStop(.46, rgba(color, fx.a * strength * .38));
      g.addColorStop(1, rgba(color, 0));
      ctx.fillStyle = g;
      ctx.fillRect(fx.x - fx.r, fx.y - fx.r, fx.r * 2, fx.r * 2);
    }

    function ribbon(fx, time, progress, color, width, lift, alpha) {
      ctx.save();
      ctx.strokeStyle = rgba(color, fx.a * alpha);
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.shadowColor = rgba(color, fx.a * alpha);
      ctx.shadowBlur = 7;
      for (let i=0;i<3;i++) {
        const phase = reducedMotion.matches ? .5 : time * .6 + i * 1.6;
        const y = fx.y + i * 1.1;
        ctx.beginPath();
        ctx.moveTo(fx.x - fx.r, y + Math.sin(phase) * .7);
        ctx.bezierCurveTo(fx.x - fx.r*.35, y - lift, fx.x + fx.r*.25, y + lift, fx.x + fx.r, y + Math.cos(phase) * .7);
        ctx.stroke();
      }
      ctx.restore();
    }

    function glint(fx, time, progress, color, strength) {
      const phase = reducedMotion.matches ? .5 : progress;
      const x = fx.x - fx.r + phase * fx.r * 2;
      const g = ctx.createLinearGradient(x - 5, fx.y + 3, x + 5, fx.y - 3);
      g.addColorStop(0, rgba(color, 0));
      g.addColorStop(.5, rgba(color, fx.a * strength));
      g.addColorStop(1, rgba(color, 0));
      ctx.save();
      ctx.strokeStyle = g;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(x - 4, fx.y + 2.2);
      ctx.lineTo(x + 4, fx.y - 2.2);
      ctx.stroke();
      ctx.restore();
    }

    function shade(fx, time, progress, direction) {
      const sweep = reducedMotion.matches ? .5 : progress;
      const x = fx.x - fx.r + sweep * fx.r * 2;
      const grad = ctx.createLinearGradient(x - 7, 0, x + 7, 0);
      grad.addColorStop(0, "rgba(4,17,31,0)");
      grad.addColorStop(.5, "rgba(4,17,31," + (fx.a * .48) + ")");
      grad.addColorStop(1, "rgba(4,17,31,0)");
      ctx.save();
      ctx.globalCompositeOperation = "multiply";
      ctx.fillStyle = grad;
      ctx.beginPath();
      if (direction === "diag") {
        ctx.moveTo(x - fx.r, fx.y - fx.r*.5);
        ctx.lineTo(x + fx.r, fx.y - fx.r*.25);
        ctx.lineTo(x + fx.r, fx.y + fx.r*.25);
        ctx.lineTo(x - fx.r, fx.y + fx.r*.5);
      } else {
        ctx.moveTo(fx.x - fx.r, fx.y - 1);
        ctx.lineTo(fx.x + fx.r, fx.y - 1);
        ctx.lineTo(fx.x + fx.r, fx.y + 2);
        ctx.lineTo(fx.x - fx.r, fx.y + 2);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function dust(fx, time, color) {
      ctx.save();
      ctx.fillStyle = rgba(color, fx.a);
      for (let i=0;i<7;i++) {
        const seed = i * 2.399;
        const motion = reducedMotion.matches ? .5 : time * (.22 + i*.018);
        const x = fx.x + Math.sin(seed + motion) * fx.r * .65;
        const y = fx.y + Math.cos(seed*1.3 + motion) * fx.r * .38;
        ctx.beginPath();
        ctx.arc(x, y, .12 + (i%3)*.06, 0, Math.PI*2);
        ctx.fill();
      }
      ctx.restore();
    }

    function petals(fx, time, color, shadow) {
      ctx.save();
      ctx.fillStyle = rgba(color, fx.a * .62);
      for (let i=0;i<3;i++) {
        const p = reducedMotion.matches ? .5 : (time*.075 + i*.31)%1;
        const x = fx.x + Math.sin(p*6 + i) * fx.r*.55;
        const y = fx.y + p*fx.r*.75 - fx.r*.34;
        ctx.save();
        ctx.translate(x,y);
        ctx.rotate(p*2 + i);
        if (shadow) ctx.globalCompositeOperation = "multiply";
        ctx.beginPath();
        ctx.ellipse(0,0,.42,.18,0,0,Math.PI*2);
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();
    }

    function ripples(fx, time, color) {
      ctx.save();
      ctx.strokeStyle = rgba(color, fx.a*.7);
      ctx.lineWidth = .16;
      for (let i=0;i<3;i++) {
        const p = reducedMotion.matches ? .48 : (time*.18 + i/3)%1;
        ctx.globalAlpha = (1-p)*.8;
        ctx.beginPath();
        ctx.ellipse(fx.x,fx.y,fx.r*(.12+p*.43),.5+p*.18,0,0,Math.PI*2);
        ctx.stroke();
      }
      ctx.restore();
    }

    function steam(fx,time,color) {
      ctx.save();
      ctx.strokeStyle=rgba(color,fx.a*.62);
      ctx.lineWidth=.28;
      ctx.lineCap="round";
      for(let i=0;i<3;i++){
        const drift=reducedMotion.matches?0:Math.sin(time*.7+i)*.5;
        const x=fx.x+(i-1)*1.4;
        ctx.beginPath();
        ctx.moveTo(x,fx.y+2);
        ctx.bezierCurveTo(x-1,fx.y, x+1+drift,fx.y-2, x+drift,fx.y-4);
        ctx.stroke();
      }
      ctx.restore();
    }

    function drawEffect(fx, time, progress) {
      ctx.save();
      let color = "255,226,154";
      switch(fx.type) {
        case "lantern": glow(fx,time,progress,color,1); break;
        case "coin-glint": glint(fx,time,progress,"255,236,164",1); break;
        case "corridor-mist": ribbon(fx,time,progress,"211,231,239",.35,1.8,.7); break;
        case "branch-shadow": shade(fx,time,progress,"diag"); break;
        case "moon-halo": glow(fx,time,progress,"224,237,255",1.2); break;
        case "scroll-shadow": shade(fx,time,progress,"diag"); break;
        case "paper-divide": shade(fx,time,progress,"diag"); glow(fx,time,progress,"255,234,184",.4); break;
        case "book-dust": dust(fx,time,"255,239,199"); break;
        case "ink-recede": glow(fx,time,progress,"151,175,189",.7); break;
        case "window-lamp": glow(fx,time,progress,"255,190,91",1); break;
        case "scroll-ink": glow(fx,time,progress,"180,154,112",.65); break;
        case "blossom-drift": petals(fx,time,"255,221,224",false); break;
        case "dew-refraction": ripples(fx,time,"230,244,255"); glint(fx,time,progress,"255,255,232",.65); break;
        case "courtyard-dusk": shade(fx,time,progress,"diag"); break;
        case "distant-lanterns": for(let i=0;i<3;i++) glow({...fx,x:fx.x+i*2.1-2,y:fx.y+i*.8,r:fx.r*.28},time+i,progress,"255,188,99",.8); break;
        case "stone-bowl-ripple": ripples(fx,time,"213,237,246"); break;
        case "eave-moon-shadow": shade(fx,time,progress,"horizontal"); break;
        case "step-shadow": shade(fx,time,progress,"diag"); break;
        case "curtain-lantern": ribbon(fx,time,progress,"255,207,128",.45,1.1,.62); glow(fx,time,progress,"255,186,98",.35); break;
        case "swing-shadow": shade(fx,time,progress,"horizontal"); break;
        case "far-lights-fade": glow(fx,time,progress,"255,186,103",.9*(1-progress*.5)); break;
        case "petal-shadow": petals(fx,time,"210,183,203",true); break;
        case "coin-to-blossom": glint(fx,time,progress,"255,221,140",.55); glow({...fx,x:fx.x+8},time,progress,"255,217,202",.5); break;
        case "light-boundary": shade(fx,time,progress,"diag"); break;
        case "empty-cup-glimmer": glint(fx,time,progress,"255,228,161",.8); break;
        case "robe-rimlight": glow(fx,time,progress,"197,216,239",.65); break;
        case "two-reading-inks": glow({...fx,x:fx.x-fx.r*.45},time,progress,"188,206,230",.55); glow({...fx,x:fx.x+fx.r*.45},time,progress,"244,210,160",.55); break;
        case "single-window": glow(fx,time,progress,"255,184,93",1); break;
        case "quill-poollight": glow(fx,time,progress,"255,232,180",.8); glint({...fx,x:fx.x+3},time,progress,"255,244,214",.45); break;
        case "dinner-steam": steam(fx,time,"255,239,216"); break;
        case "phone-to-warmth": glow(fx,time,progress,"255,199,130",.7); break;
        case "clock-shadow": shade(fx,time,progress,"horizontal"); break;
        case "street-leaflight": petals(fx,time,"255,221,160",false); break;
        case "morning-teasteam": steam(fx,time,"255,245,222"); glow(fx,time,progress,"255,222,166",.48); break;
        case "moving-cloudlight": ribbon(fx,time,progress,"222,232,248",.35,1.4,.66); break;
        case "photo-page-sheen": glint(fx,time,progress,"255,239,196",.6); break;
        case "calendar-sunbeam": shade(fx,time,progress,"diag"); glow(fx,time,progress,"255,226,166",.48); break;
        case "work-to-street": {
          const p=reducedMotion.matches?.5:progress;
          const g=ctx.createLinearGradient(fx.x-fx.r+p*fx.r*2,0,fx.x-fx.r+p*fx.r*2+12,0);
          g.addColorStop(0,"rgba(26,49,69,0)");g.addColorStop(.5,"rgba(255,178,101,"+(fx.a*.42)+")");g.addColorStop(1,"rgba(255,178,101,0)");
          ctx.fillStyle=g;ctx.fillRect(8,8,84,40);break;
        }
        case "family-gathering": glow(fx,time,progress,"255,213,156",.72); break;
        case "open-calendar-glow": glow(fx,time,progress,"255,231,178",.68); break;
        case "lantern-goodnight": glow(fx,time,progress,"255,191,117",1-progress*.55); break;
        case "empty-courtyard-mist": ribbon(fx,time,progress,"210,226,239",.32,1.4,.58); break;
        case "turning-page-light": {
          const p=reducedMotion.matches?.5:progress;
          const x=fx.x-fx.r+p*fx.r*2;
          const g=ctx.createLinearGradient(x-5,0,x+5,0);
          g.addColorStop(0,"rgba(255,243,210,0)");g.addColorStop(.5,"rgba(255,243,210,"+(fx.a*.78)+")");g.addColorStop(1,"rgba(255,243,210,0)");
          ctx.fillStyle=g;ctx.fillRect(5,10,90,38);break;
        }
        default: glow(fx,time,progress,color,.5);
      }
      ctx.restore();
    }

    function draw() {
      if (!ctx || !cssWidth || !cssHeight) return;
      ctx.clearRect(0,0,100,56.25);
      const ms = Math.max(0,audio.currentTime*1000);
      const scene = scenes.find(item => ms >= item.startMs && ms < item.endMs);
      const cover = stage.querySelector(".cover-start");
      canvas.style.display = cover || !scene ? "none" : "block";
      poemNodes.forEach(({cue,box}) => {
        const active = !cover && scene && scene.id === cue.image && ms >= cue.startMs && ms < cue.endMs;
        box.classList.toggle("is-visible", Boolean(active));
      });
      if (cover || !scene) return;
      const progress = clamp((ms-scene.startMs)/(scene.endMs-scene.startMs),0,1);
      const time = reducedMotion.matches ? 0 : audio.currentTime;
      drawEffect(scene,time,reducedMotion.matches?.5:progress);
    }

    function loop() {
      draw();
      raf = 0;
      if (!audio.paused && !audio.ended) raf = requestAnimationFrame(loop);
    }
    function update() { if (!raf) draw(); }
    audio.addEventListener("timeupdate",update);
    audio.addEventListener("seeking",update);
    audio.addEventListener("seeked",update);
    audio.addEventListener("play",() => { if (!raf) raf=requestAnimationFrame(loop); });
    audio.addEventListener("pause",update);
    audio.addEventListener("ended",update);
    reducedMotion.addEventListener?.("change",update);
    resize();
    update();
  }

  const observer = new MutationObserver(() => {
    const stage = document.querySelector("#stage-wrap");
    const audio = stage?.querySelector("audio.master-audio") || document.querySelector("audio.master-audio");
    if (stage && audio && stage.dataset.motionEffectsMounted !== "true") install(stage,audio);
  });
  observer.observe(document.documentElement,{childList:true,subtree:true});
  const start = () => {
    const stage=document.querySelector("#stage-wrap");
    const audio=stage?.querySelector("audio.master-audio")||document.querySelector("audio.master-audio");
    if(stage&&audio) install(stage,audio);
  };
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",start,{once:true}); else start();
})();
