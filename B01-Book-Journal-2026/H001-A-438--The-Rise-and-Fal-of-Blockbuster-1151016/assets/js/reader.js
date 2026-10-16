(() => {
  'use strict';
  const {React:R,createRoot,Player,Html5Audio,AbsoluteFill,useCurrentFrame,Img}=window.A70Runtime;
  const h=R.createElement,T=window.A02_TIMELINE;
  const C={
    links:window.EPISODE_SETTINGS.links,
    assets:{
      coverImage:'assets/cover/cover.webp',
      narrationAudio:'assets/audio/narration.mp3',
      subtitles:'assets/subtitles/aligned.srt',
      sceneImagePattern:'assets/images/{id}.webp'
    }
  };
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const toFrame=ms=>Math.floor(ms*T.fps/1000+.5);
  const asset=p=>new URL(p,document.baseURI).href;
  const fmt=t=>`${Math.floor(t/60).toString().padStart(2,'0')}:${Math.floor(t%60).toString().padStart(2,'0')}`;
  const decoded=new Map();
  function prepareImage(path){
    if(decoded.has(path))return decoded.get(path);
    const image=new Image();image.src=asset(path);
    const ready=image.decode().catch(()=>{});decoded.set(path,ready);
    if(decoded.size>8)decoded.delete(decoded.keys().next().value);
    return ready;
  }
  function at(items,f){
    let lo=0,hi=items.length-1,best=-1;
    while(lo<=hi){const m=(lo+hi)>>1;if(items[m].startFrame<=f){best=m;lo=m+1;}else hi=m-1;}
    return best>=0&&f<items[best].endFrame?items[best]:null;
  }
  const chapterNavigation=T.chapters.map((chapter,index)=>{
    const endRow=T.chapters[index+1]?.firstExcelRow??Infinity;
    const subtitleIndex=T.subtitles.findIndex(sub=>(sub.sourceExcelRows||[]).some(row=>row>=chapter.firstExcelRow&&row<endRow));
    const subtitle=T.subtitles[subtitleIndex];
    if(!subtitle)throw new Error('章節 '+chapter.id+' 缺少第一句字幕的對照資料。');
    return {chapter,frame:subtitle.startFrame,startMs:subtitle.startMs,subtitleId:subtitle.id,subtitleIndex};
  });
  function chapterAt(f){
    const sub=at(T.subtitles,f);
    // A spoken sentence can begin just before its Excel image boundary.
    // Show that chapter immediately while the scene images retain Excel timing.
    const early=chapterNavigation.find(nav=>nav.subtitleId===sub?.id&&f>=nav.frame&&f<nav.chapter.startFrame);
    return early?.chapter||at(T.chapters,f);
  }
  function ReadingComposition(){
    const f=useCurrentFrame(),scene=at(T.scenes,f),chapter=chapterAt(f),sub=at(T.subtitles,f);
    const index=scene?Number(scene.id)-1:-1;
    const prior=index>0&&T.scenes[index-1].endFrame===scene.startFrame?T.scenes[index-1]:null;
    const blendFrames=scene?Math.max(1,Math.min(10,Math.floor((scene.endFrame-scene.startFrame)/3))):1;
    const blend=scene&&prior?clamp((f-scene.startFrame+1)/blendFrames,0,1):1;
    function art(s,opacity,role){
      const p=clamp((f-s.startFrame)/Math.max(1,s.endFrame-s.startFrame),0,1),u=p*p*(3-2*p),m=s.motion;
      const scale=m===0?1.008+.032*u:m===1?1.04-.032*u:1.04;
      const x=m===2?-1.2+2.4*u:m===3?1.2-2.4*u:0;
      const y=m===4?-.8+1.6*u:m===5?.8-1.6*u:0;
      return h(Img,{key:s.id,src:asset(s.image),alt:`第 ${s.id} 鏡`,className:'frame-art',
        'data-scene':role==='current'?s.id:undefined,'data-image-layer':role,
        style:{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain',opacity,transform:`translate(${x}%,${y}%) scale(${scale})`}});
    }
    const age=chapter?(f-chapter.startFrame)/T.fps:-1;
    const intro=age>=0&&age<1.8;
    const alpha=intro?clamp(Math.min((age+.033)/.2,(1.8-age)/.3),0,1):0;
    return h(AbsoluteFill,{className:'video-composition','data-current-frame':f,'data-scene-id':scene?.id||'gap','data-chapter-id':chapter?.id||'',style:{background:'#171b1a',overflow:'hidden'}},
      h(Html5Audio,{src:asset(C.assets.narrationAudio),playbackRate:1,pauseWhenBuffering:true,acceptableTimeShiftInSeconds:.12,showInTimeline:true,preload:'auto'}),
      scene?h(R.Fragment,null,prior&&blend<1?art(prior,1,'outgoing'):null,art(scene,blend,'current')):h('div',{className:'frame-neutral'}),
      scene&&h('div',{className:'frame-shade'}),
      chapter&&h('div',{className:'frame-chapter','data-chapter-title':chapter.id},chapter.title.replace(/^章節\d+｜/,'')),
      intro&&h('div',{className:'frame-intro','data-center-chapter':chapter.id,style:{opacity:alpha}},chapter.title.replace(/^章節\d+｜/,'')),
      sub&&scene&&h('div',{className:'frame-subtitle','data-subtitle-id':sub.id,'data-subtitle-index':T.subtitles.indexOf(sub),'data-excel-rows':(sub.sourceExcelRows||[]).join(',')},sub.text)
    );
  }
  const Canvas=R.memo(R.forwardRef(function Canvas(_,ref){return h(Player,{
    ref,component:ReadingComposition,durationInFrames:T.durationFrames,fps:T.fps,compositionWidth:1920,compositionHeight:1080,
    playbackRate:1,controls:false,clickToPlay:false,spaceKeyToPlayOrPause:false,moveToBeginningWhenEnded:false,
    numberOfSharedAudioTags:0,showVolumeControls:false,style:{width:'100%',aspectRatio:'16 / 9'},className:'remotion-player',
    errorFallback:({error})=>h('p',{role:'alert'},'播放失敗：'+error.message)
  });}));
  function App(){
    const [page,setPage]=R.useState(location.hash==='#reading'?'reader':'home');
    const [f,setF]=R.useState(toFrame(T.startMs)),[playing,setPlaying]=R.useState(false),[vol,setVol]=R.useState(1),[muted,setMuted]=R.useState(false);
    const [drag,setDrag]=R.useState(null),[theater,setTheater]=R.useState(false),[error,setError]=R.useState(''),[seeking,setSeeking]=R.useState(false);
    const player=R.useRef(null),shell=R.useRef(null),dragState=R.useRef(null),autoStart=R.useRef(false),seekVersion=R.useRef(0),seekPlaybackIntent=R.useRef(null);
    const current=f/T.fps,chapter=chapterAt(f),scene=at(T.scenes,f);
    R.useEffect(()=>{const fn=()=>setPage(location.hash==='#reading'?'reader':'home');window.addEventListener('hashchange',fn);return()=>window.removeEventListener('hashchange',fn);},[]);
    const seek=R.useCallback(async(target,resume=false)=>{
      const p=player.current;if(!p)return false;
      const version=++seekVersion.current,sf=clamp(Math.round(target),0,T.durationFrames-1),seconds=sf/T.fps;
      seekPlaybackIntent.current=resume;
      p.pause();setSeeking(true);setError('');
      const targetScene=at(T.scenes,sf),targetIndex=targetScene?Number(targetScene.id)-1:-1;
      const prepare=targetScene?[targetScene.image]:[];
      if(targetIndex>0&&sf-targetScene.startFrame<10)prepare.push(T.scenes[targetIndex-1].image);
      await Promise.all(prepare.map(prepareImage));
      if(version!==seekVersion.current)return false;
      p.seekTo(sf);setF(sf);
      // One Player owns both clock and MP3. Wait for its real audio seek before resuming.
      const settled=await new Promise(resolve=>{
        const begin=performance.now();let stable=0,issued=false;
        function check(){
          if(version!==seekVersion.current){resolve(false);return;}
          const a=shell.current?.querySelector('audio');
          const nearEnd=seconds>=T.audioDurationMs/1000;
          // Html5Audio can defer paused seeks until play. Seek the same sole MP3
          // element as part of this Player frame transaction, before resuming it.
          if(!issued&&a&&Number.isFinite(a.duration)){
            a.currentTime=Math.min(seconds,a.duration);issued=true;
          }
          const ok=a&&!a.seeking&&a.readyState>=2&&(nearEnd||Math.abs(a.currentTime-seconds)<.14);
          if(ok&&++stable>=2){resolve(true);return;}
          if(!ok)stable=0;
          if(performance.now()-begin>8000){resolve(false);return;}
          requestAnimationFrame(check);
        }
        requestAnimationFrame(check);
      });
      if(version!==seekVersion.current)return false;
      setSeeking(false);
      seekPlaybackIntent.current=null;
      if(!settled){setError('音訊定位尚未完成，請稍候再按播放。');return false;}
      if(resume)p.play();return true;
    },[]);
    R.useEffect(()=>{
      if(page!=='reader'||!player.current)return;
      const p=player.current;
      const onFrame=e=>{if(!dragState.current)setF(e.detail.frame);};
      const onPlay=()=>setPlaying(true),onPause=()=>setPlaying(false),onEnded=()=>setPlaying(false),onError=e=>setError(e.detail?.error?.message||'播放器發生錯誤');
      const handlers=[['frameupdate',onFrame],['play',onPlay],['pause',onPause],['ended',onEnded],['error',onError]];
      handlers.forEach(([n,fn])=>p.addEventListener(n,fn));
      seek(toFrame(T.startMs),autoStart.current);autoStart.current=false;
      window.A02_READER={seekSeconds:(s,resume=false)=>seek(s*T.fps,resume),getState:()=>({frame:p.getCurrentFrame(),playing:p.isPlaying(),fps:T.fps}),timeline:T};
      return()=>{seekVersion.current++;handlers.forEach(([n,fn])=>p.removeEventListener(n,fn));delete window.A02_READER;};
    },[page,seek]);
    R.useEffect(()=>{
      if(!scene)return;
      const next=T.scenes[Number(scene.id)];if(!next)return;
      prepareImage(next.image);
    },[scene?.id]);
    R.useEffect(()=>{
      if(page!=='reader')return;
      const fn=e=>{
        if(['INPUT','BUTTON','A','TEXTAREA'].includes(document.activeElement?.tagName))return;
        if(e.code==='Space'){e.preventDefault();toggle();}
        if(e.code==='ArrowRight'){e.preventDefault();seek(player.current.getCurrentFrame()+5*T.fps,player.current.isPlaying());}
        if(e.code==='ArrowLeft'){e.preventDefault();seek(player.current.getCurrentFrame()-5*T.fps,player.current.isPlaying());}
      };
      window.addEventListener('keydown',fn);return()=>window.removeEventListener('keydown',fn);
    },[page]);
    function start(){autoStart.current=true;location.hash='reading';setPage('reader');window.scrollTo(0,0);}
    function toggle(){const p=player.current;if(!p)return;if(p.isPlaying())p.pause();else if(p.getCurrentFrame()>=T.durationFrames-1)seek(toFrame(T.startMs),true);else p.play();}
    function beginDrag(e){const p=player.current;dragState.current={resume:p?.isPlaying()||false,value:p?.getCurrentFrame()??f};p?.pause();setDrag(dragState.current.value);e.currentTarget.setPointerCapture?.(e.pointerId);}
    function updateDrag(e){const value=Number(e.currentTarget.value);if(dragState.current){dragState.current.value=value;setDrag(value);}else seek(value,player.current?.isPlaying()||false);}
    function endDrag(){const d=dragState.current;if(!d)return;dragState.current=null;setDrag(null);seek(d.value,d.resume);}
    function seekChapter(target){
      const nav=chapterNavigation.find(item=>item.chapter.id===target.id),p=player.current;
      if(!nav||!p)return false;
      return seek(nav.frame,seekPlaybackIntent.current??p.isPlaying());
    }
    function chapterStep(delta){const index=Math.max(0,T.chapters.findIndex(c=>c.id===chapter?.id));return seekChapter(T.chapters[clamp(index+delta,0,T.chapters.length-1)]);}
    function sceneStep(delta){let i=T.scenes.findIndex(s=>s.id===scene?.id);if(i<0)i=T.scenes.findIndex(s=>s.startMs>current*1000)-1;seek(T.scenes[clamp(i+delta,0,T.scenes.length-1)].startFrame,player.current?.isPlaying()||false);}
    async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await shell.current.requestFullscreen();}catch{setTheater(v=>!v);}}
    const button=(text,fn,props={})=>h('button',{type:'button',onClick:fn,...props},text);
    const youtube=(label,key)=>h('a',{className:'youtube-link',href:C.links[key],target:'_blank',rel:'noopener noreferrer'},h('span',{'aria-hidden':true},'▶'),label);
    if(page==='home')return h('main',{className:'home-page'},h('section',{className:'hero','aria-labelledby':'main-title'},
      h('h1',{id:'main-title',className:'visually-hidden'},T.title),
      h('img',{src:asset(C.assets.coverImage),alt:'百視達：拒絕收購 Netflix 的代價 封面'}),
      h('div',{className:'hero-copy cover-hero-copy'},h('div',{className:'hero-actions'},button(h(R.Fragment,null,h('span',{'aria-hidden':true},'▶'),'開始閱讀'),start,{className:'start-link'}),youtube('YT連結(有字幕)','youtubeWithSubtitles'),youtube('YT連結(無字幕)','youtubeWithoutSubtitles'),youtube('YT連結(動畫)有字幕_','youtubeAnimatedWithSubtitles'),youtube('YT連結(動畫)無字幕_','youtubeAnimatedWithoutSubtitles')),
        h('p',{className:'hero-meta'},`${T.scenes.length} 鏡・${T.chapters.length} 章・${fmt(T.duration)}・動態閱讀`))));
    return h('main',{className:'reader-page'+(theater?' theater':'')},
      h('header',{className:'reader-header'},h('a',{className:'back-link',href:'#home'},'← 首頁'),h('div',null,h('p',{className:'eyebrow'},'巨人的黃昏・企業轉型'),h('h1',null,T.title)),h('span',{className:'reader-duration'},`${T.scenes.length} 鏡 · ${T.chapters.length} 章`)),
      h('section',{className:'reader-shell',ref:shell,'aria-label':'百視達動態閱讀播放器'},h('div',{className:'stage-wrap'},h(Canvas,{ref:player})),
        h('div',{className:'player-panel'},
          h('div',{className:'seek-row'},h('span',{className:'time-readout'},fmt((drag??f)/T.fps)),
            h('input',{type:'range',className:'seek-slider','aria-label':'影片時間滑桿',min:0,max:T.durationFrames-1,step:1,value:drag??f,
              onPointerDown:beginDrag,onInput:updateDrag,onChange:()=>{},onPointerUp:endDrag,onPointerCancel:endDrag,onLostPointerCapture:endDrag}),
            h('span',{className:'time-readout'},fmt(T.duration))),
          h('div',{className:'control-row'},button('上一章',()=>chapterStep(-1)),button('前一鏡',()=>sceneStep(-1)),button(playing?'暫停':'播放',toggle,{className:'play-control','aria-label':playing?'暫停':'播放'}),button('下一鏡',()=>sceneStep(1)),button('下一章',()=>chapterStep(1)),
            button(muted?'取消靜音':'靜音',()=>{player.current?.[muted?'unmute':'mute']();setMuted(!muted);}),
            h('label',{className:'volume-control'},h('span',null,'音量'),h('input',{type:'range',min:0,max:1,step:.01,value:vol,'aria-label':'音量',onChange:e=>{const v=Number(e.target.value);setVol(v);player.current?.setVolume(v);}})),
            button('全螢幕',fullscreen),button(theater?'退出劇院':'劇院模式',()=>setTheater(v=>!v)),button('從頭重播',()=>seek(toFrame(T.startMs),true))),
          h('div',{className:'playback-status'},h('span',null,seeking?'定位中':drag!==null?'拖曳預覽':playing?'播放中':'已暫停'),h('span',null,'1.0×'),h('span',null,scene?'第 '+scene.id+' 鏡':'場景間歇')),
          error&&h('p',{role:'alert',className:'playback-error'},error))),
      h('section',{className:'chapter-section',id:'chapter-index'},h('p',{className:'eyebrow'},'CHAPTER INDEX'),h('h2',null,'章節索引'),
        h('div',{className:'chapter-list'},T.chapters.map(c=>button(h(R.Fragment,null,h('span',{className:'chapter-number'},c.id),h('span',{className:'chapter-name'},c.title.replace(/^章節\d+｜/,'')),h('small',null,c.count+' 鏡')),()=>seekChapter(c),{
          key:c.id,className:'chapter-button'+(c.id===chapter?.id?' active':''),'aria-current':c.id===chapter?.id?'location':undefined,'data-chapter':c.id}))))
    );
  }
  createRoot(document.getElementById('root')).render(h(App));
})();
