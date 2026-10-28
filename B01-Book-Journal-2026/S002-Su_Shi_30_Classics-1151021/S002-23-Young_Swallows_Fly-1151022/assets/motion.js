(() => {
  const effects = [
    '湖面金色微光緩緩流動，鏡頭輕推向庭院中的花影', '燕影掠過屋簷，鏡頭由簷角向上輕移', '日晷與梧桐影子慢慢偏移，光線由午前轉向午後',
    '窗格光影滑過室內，視線由前景轉向人物側影', '團扇絹面泛起柔光，細節緩慢推近', '繡簾微動，鏡頭向門口平穩拉近',
    '鏡頭沿著廊下移向門扉，前景木柱形成視差', '竹影在牆面輕晃，墨色由淡轉濃', '石榴花瓣邊緣映出暖光，微風帶動枝葉',
    '少量花瓣掠過前景，鏡頭轉向人物所在的庭院', '花枝前景與人物形成柔和視差，緩慢推近', '鏡頭由手中物件移焦至池中蓮葉',
    '雲影掠過庭院，雙人身後光線稍暗', '茶煙輕旋上升，鏡頭沿桌面滑行', '花影落在簾幕上，光線輕柔呼吸',
    '鏡頭由室內桌案平移至門邊人物', '墨跡在紙面暈開，鏡頭緩慢靠近筆尖', '桌案前景、人物與遠窗形成三層視差',
    '書頁與人物緩慢推近，保留畫面內既有字形不變', '沿著長廊向遠處人影緩慢推進', '紙卷在兩人之間輕移，水面反光微閃',
    '鏡頭從男子平移至女子，桌面暖光逐漸浮現', '少量榴花瓣緩緩飄落，人物與枝葉保持清晰', '由女子肩後轉向男子抬手方向',
    '窗邊月色輕柔變化，屏風邊緣形成深度', '緩慢推近兩人共同注視的方向，背景微光流轉', '茶盞蒸氣盤旋上升，托盤暖光微微閃動',
    '沿著庭院人物作小幅弧形運鏡，水面泛起柔光', '夕照由金轉淡，背影輪廓清晰浮現', '花瓣緩落至石階，前後景呈現細微視差',
    '鏡頭由人物站姿緩緩下移至腳邊落花', '鏡頭平穩拉遠，呈現夕陽下相對的兩人', '雙人與庭園分層移動，暖色光影微微流轉',
    '山間薄霧緩緩舒展，紙頁隨風輕動', '由書本移焦至讀者手部，近景光線柔和', '鏡頭從室內向庭院留白處平移',
    '書頁邊緣泛起暖光，慢慢推近閱讀者', '燕子掠過畫面上方，鏡頭順勢輕移', '隔著簾幕由女子緩慢推向遠處男子',
    '門環映出一線冷光，鏡頭向門扉輕推', '竹影掃過窗紙，光暗緩慢交替', '花瓣落在青石上，近景焦點逐漸清晰',
    '俯視人物與花瓣作極緩小幅環移', '沿石徑在女子身後平穩前行', '露珠閃光後移焦至遠處人物',
    '沿庭園跟隨兩人緩慢移動，花枝作前景視差', '碗中映光泛起細微漣漪，再移焦至人物', '鏡頭由團扇平移至兩人面容',
    '逐步拉遠端坐人物與庭園，保留大片詩意留白', '書頁邊光滑過紙面，鏡頭推近手部', '由牆上畫幅平移至聆聽者',
    '鏡頭沿人物背後緩慢後退，葉影在地面移動', '兩人與茶盞一同留在畫面，熱氣輕柔上升'
  ];
  const kinds = ['water','light','light','focus','glow','breeze','light','breeze','glow','petals','breeze','focus','mist','mist','light','focus','light','focus','light','mist','ripple','focus','petals','focus','glow','glow','mist','ripple','glow','petals','focus','glow','light','mist','focus','mist','light','light','focus','glow','breeze','petals','ripple','breeze','glow','breeze','ripple','light','focus','light','focus','breeze','mist'];
  const poems = [
    [1500,4888,'待浮花、浪蕊都盡，伴君幽獨。','lower'],
    [155891,160225,'乳燕飛華屋，悄無人、桐陰轉午，晚涼新浴。','upper'],
    [160225,163476,'手弄生綃白團扇，扇手一時似玉。','upper'],
    [163476,165426,'漸困倚、孤眠清熟。','upper'],
    [165426,167160,'簾外誰來推繡戶？','upper'],
    [167340,169559,'枉教人、夢斷瑤臺曲。','upper'],
    [169559,171334,'又卻是、風敲竹。','upper'],
    [171334,173109,'石榴半吐紅巾蹙。','upper'],
    [173109,176215,'待浮花、浪蕊都盡，伴君幽獨。','upper'],
    [176215,179543,'穠豔一枝細看取，芳心千重似束。','upper'],
    [179543,181540,'又恐被、秋風驚綠。','upper'],
    [181720,185586,'若待得君來向此，花前對酒不忍觸。','upper'],
    [185586,187519,'共粉淚，兩蔌蔌。','upper'],
    [220120,223392,'穠豔一枝細看取，芳心千重似束。','lower']
  ];
  const pruneMotionPageExtras = () => {
    document.querySelectorAll('.motion-return-row,.reader-footer,.sync-debug-toggle,.reader-duration,.motion-caption').forEach((node) => node.remove());
  };
  const setup = () => {
    const stage = document.querySelector('.stage-wrap');
    const audio = document.querySelector('.master-audio');
    if (!stage || !audio || !window.MOTION_SCENES?.length) return false;
    if (stage.dataset.motionReady) return true;
    stage.dataset.motionReady = 'true'; stage.classList.add('motion-ready');
    const fx = document.createElement('div'); fx.className = 'motion-effects'; fx.setAttribute('aria-hidden','true');
    const lyric = document.createElement('div'); lyric.className = 'poem-overlay'; lyric.setAttribute('aria-hidden','true');
    const label = document.createElement('span'); label.className = 'motion-effect-label'; label.setAttribute('aria-live','off');
    stage.append(fx, lyric, label);
    let lastScene = '', lastPoem = -1;
    const render = () => {
      const ms = Math.max(0, Math.min(audio.currentTime * 1000, 410280));
      let lo=0, hi=window.MOTION_SCENES.length-1;
      while(lo<hi){const mid=(lo+hi+1)>>1;if(window.MOTION_SCENES[mid].startMs<=ms)lo=mid;else hi=mid-1;}
      const scene=window.MOTION_SCENES[lo];
      if(scene && ms < scene.endMs){
        const idx=Number(scene.id)-1;
        if(lastScene!==scene.id){lastScene=scene.id;fx.dataset.scene=scene.id;fx.dataset.fx=kinds[idx];fx.style.setProperty('--fx-x',`${22+(idx*37)%62}%`);fx.style.setProperty('--fx-y',`${22+(idx*19)%52}%`);label.textContent=`IMG${scene.id}｜${effects[idx]}`;}
        const p=Math.max(0,Math.min(1,(ms-scene.startMs)/(scene.endMs-scene.startMs)));
        const progress=window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0.5 : p;
        const phase=Math.sin(progress*Math.PI*2), fade=0.5+0.5*phase;
        fx.style.setProperty('--fx-progress',progress.toFixed(3));
        fx.style.setProperty('--fx-alpha',(0.20+0.24*fade).toFixed(3));
        fx.style.setProperty('--fx-dx',(phase*2.4).toFixed(2)+'%');
        fx.style.setProperty('--fx-dy',(-phase*1.5).toFixed(2)+'%');
        fx.style.setProperty('--fx-scale',(1+0.025*fade).toFixed(3));
        fx.style.setProperty('--fx-sheen-alpha',(0.08+0.20*fade).toFixed(3));
        fx.style.setProperty('--fx-sheen-x',(-80+progress*160).toFixed(1)+'%');
        fx.style.setProperty('--fx-bg-position',(progress*48).toFixed(1)+'px '+(progress*220).toFixed(1)+'px');
      }
      let active=-1; for(let i=0;i<poems.length;i++){if(ms>=poems[i][0]&&ms<poems[i][1]){active=i;break;}}
      if(active!==lastPoem){lastPoem=active;if(active<0){lyric.classList.remove('is-visible');lyric.textContent='';}else{lyric.textContent=poems[active][2];lyric.dataset.placement=poems[active][3];lyric.classList.add('is-visible');}}
    };
    audio.addEventListener('timeupdate',render);audio.addEventListener('seeked',render);audio.addEventListener('loadedmetadata',render);
    let rafId=0; const tick=()=>{render(); if(!audio.paused&&!audio.ended)rafId=requestAnimationFrame(tick); else rafId=0;}; audio.addEventListener('play',()=>{if(!rafId)rafId=requestAnimationFrame(tick);}); audio.addEventListener('pause',()=>{if(rafId){cancelAnimationFrame(rafId);rafId=0;}render();}); requestAnimationFrame(()=>{if(!audio.paused)tick();});render();
    window.__motionStoryboard = { sceneCount:effects.length, poemCount:poems.length, effects, poems, render };
    return true;
  };
  const observer = new MutationObserver(() => { pruneMotionPageExtras(); setup(); });
  observer.observe(document.getElementById('root') || document.body,{childList:true,subtree:true});
  pruneMotionPageExtras(); setup();
})();





