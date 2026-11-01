(() => {
  'use strict';
  const root = document.getElementById('historical-scenes');
  if (!root) return;
  const $ = (selector, scope = root) => scope.querySelector(selector);
  const $$ = (selector, scope = root) => [...scope.querySelectorAll(selector)];
  const state = { scenes: [], sources: {}, scene: null, step: 0, speed: 1, playing: false, timer: null, scrollFrame: 0, sceneContext: null, revealContext: null, unsubscribe: null, reduced: false, activeCategory: '全部場景', zoom: 1 };
  let dragState = null;
  const controller = window.HistoricalTimeController;
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
  const yearNow = () => controller?.getCurrentYear?.() ?? 1750;
  const isReduced = () => state.reduced || document.documentElement.classList.contains('qing-motion-off') || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  function machineSvg(type) {
    const commonStart = '<svg class="machine-svg" viewBox="0 0 800 420" role="img" aria-label="互動機械原理示意"><defs><marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#87352b"/></marker></defs>';
    const foot = '<path d="M120 350H680M180 350V375M620 350V375" fill="none" stroke="#4d3828" stroke-width="13" stroke-linecap="round"/><text x="400" y="405" text-anchor="middle" font-size="18" fill="#46362b">技術示意重建｜非原件影像</text></svg>';
    const parts = {
      newcomen: '<text x="400" y="34" text-anchor="middle" font-size="22" fill="#58392d">紐科門大氣式抽水機｜約1712</text><rect class="glass" x="285" y="65" width="130" height="205" rx="20"/><rect class="part piston" x="300" y="145" width="100" height="25" rx="8"/><path d="M350 145V88" stroke="#6e4c31" stroke-width="10"/><path d="M355 89Q500 30 660 82" fill="none" stroke="#563b29" stroke-width="18"/><path d="M650 82V245" stroke="#59402c" stroke-width="10"/><rect class="part" x="610" y="245" width="80" height="45"/><path d="M610 270H540V320" fill="none" stroke="#547b82" stroke-width="8"/><path class="steam-puff steam" d="M315 115q-25-30 0-50q25 20 0 50M365 115q-25-30 0-50q25 20 0 50"/><path d="M230 220H285" stroke="#87352b" stroke-width="4" marker-end="url(#arrowhead)"/><text x="230" y="205" font-size="18">蒸汽／缸內冷凝</text><text x="500" y="112" font-size="18">搖樑</text><text x="615" y="318" font-size="18">泵桿抽水</text><text x="289" y="295" font-size="16">汽缸</text>',
      watt: '<text x="400" y="34" text-anchor="middle" font-size="22" fill="#58392d">瓦特分離冷凝器｜1765原理模型</text><rect class="glass" x="270" y="80" width="115" height="190" rx="18"/><rect class="part piston" x="284" y="150" width="87" height="22" rx="8"/><path d="M327 150V92" stroke="#6e4c31" stroke-width="9"/><path d="M330 92Q495 32 660 80" fill="none" stroke="#563b29" stroke-width="16"/><path d="M650 80V245" stroke="#59402c" stroke-width="9"/><rect class="part" x="610" y="245" width="80" height="42"/><rect class="glass" x="430" y="212" width="84" height="105" rx="18"/><path d="M385 235H430M385 112H470V212" fill="none" stroke="#b75536" stroke-width="8" marker-end="url(#arrowhead)"/><path d="M455 256q-18-22 0-37q18 15 0 37" class="steam-puff steam"/><text x="250" y="300" font-size="17">保持汽缸較熱</text><text x="424" y="342" font-size="18">分離冷凝器</text><text x="500" y="110" font-size="18">往復搖樑輸出</text>',
      jenny: '<text x="400" y="34" text-anchor="middle" font-size="22" fill="#58392d">珍妮紡紗機｜手動多錠示意</text><rect class="part" x="140" y="270" width="510" height="35"/><path d="M190 270V130M590 270V130" stroke="#55402e" stroke-width="12"/><path d="M240 130H560" stroke="#71573c" stroke-width="13"/><g class="motion-part"><circle cx="205" cy="220" r="54" fill="none" stroke="#55402e" stroke-width="9"/><circle cx="205" cy="220" r="9" fill="#87352b"/><path d="M205 166V274M151 220H259M167 182L243 258M243 182L167 258" stroke="#55402e" stroke-width="5"/><path d="M205 220L150 265" stroke="#87352b" stroke-width="8"/></g><g stroke="#7f5e37" stroke-width="4">' + Array.from({length:8},(_,i)=>`<path d="M${390+i*25} 123V260"/>`).join('') + '</g><path d="M267 206H370" stroke="#87352b" stroke-width="4" marker-end="url(#arrowhead)"/><text x="400" y="330" text-anchor="middle" font-size="18">手搖輸入 → 滑動車架牽伸 → 多錠加捻</text>',
      waterframe: '<text x="400" y="34" text-anchor="middle" font-size="22" fill="#58392d">阿克萊水力紡紗機｜1767</text><circle class="part wheel" cx="170" cy="240" r="80" fill="none" stroke="#765735" stroke-width="12"/><path d="M170 160V320M90 240H250M113 183L227 297M227 183L113 297" stroke="#765735" stroke-width="8"/><path d="M250 240H350" stroke="#8c6d42" stroke-width="8"/><g class="motion-part">' + Array.from({length:5},(_,i)=>`<rect class="part" x="345" y="${130+i*32}" width="105" height="16" rx="8"/>`).join('') + '</g><g stroke="#8d603b" stroke-width="3">' + Array.from({length:7},(_,i)=>`<path d="M480 ${125+i*28}L650 ${110+i*28}"/>`).join('') + '</g><path d="M258 217H330" stroke="#87352b" stroke-width="4" marker-end="url(#arrowhead)"/><text x="164" y="355" text-anchor="middle" font-size="16">水輪</text><text x="390" y="330" text-anchor="middle" font-size="16">滾筒牽伸</text><text x="570" y="345" text-anchor="middle" font-size="16">紡錠加捻</text>',
      loom: '<text x="400" y="34" text-anchor="middle" font-size="22" fill="#58392d">卡特萊特動力織機｜1780年代示意</text><path d="M180 80V310M620 80V310M180 100H620M180 300H620" stroke="#59412d" stroke-width="12"/><g stroke="#b6a17c" stroke-width="4">' + Array.from({length:12},(_,i)=>`<path d="M${285+i*24} 110V285"/>`).join('') + '</g><path class="loom-shuttle part" d="M260 190H545L560 204L545 218H260L245 204Z"/><path d="M250 270H560" stroke="#87352b" stroke-width="7"/><path d="M230 145L280 255M580 145L530 255" stroke="#92744e" stroke-width="5"/><text x="400" y="345" text-anchor="middle" font-size="18">經紗開口＋梭子往返＋打緯</text>',
      port: '<text x="400" y="34" text-anchor="middle" font-size="22" fill="#58392d">廣州港與商館｜歷史情境重建</text><path d="M0 270Q170 245 330 270T800 260V420H0Z" fill="#7fa6a0"/><path d="M65 275L150 275L130 315L75 315ZM410 270L510 270L490 310L425 310Z" fill="#d1b17a"/><path d="M160 230L255 230L280 270L140 270Z" fill="#65482f"/><path d="M190 118V232M228 130V232M177 144Q202 110 225 144Z" fill="#efe3c9" stroke="#694d31" stroke-width="5"/><path d="M530 210L735 210L695 260H555Z" fill="#584232"/><path d="M620 210V85M623 98Q694 130 688 200Z" fill="#f3e8d3" stroke="#6e4d30" stroke-width="5"/><path d="M570 211Q630 187 694 208" fill="none" stroke="#402e21" stroke-width="9"/><text x="200" y="300" font-size="17">商館示意</text><text x="595" y="300" font-size="17">商船示意</text>',
      court: '<text x="400" y="34" text-anchor="middle" font-size="22" fill="#58392d">宮廷場景｜歷史情境重建</text><path d="M60 270L400 120L740 270Z" fill="#8e3e31" stroke="#e0bd6f" stroke-width="8"/><path d="M110 270V365M690 270V365M250 250V365M550 250V365" stroke="#7e3028" stroke-width="23"/><path d="M145 290H655M210 310H590" stroke="#cfad66" stroke-width="8"/><rect x="295" y="245" width="210" height="120" fill="#e8d3a2" stroke="#583c2d" stroke-width="5"/><path d="M80 365H720" stroke="#735d44" stroke-width="20"/><text x="400" y="405" text-anchor="middle" font-size="17">建築比例與器物為視覺示意，請依文字史料閱讀</text>'
    };
    return commonStart + (parts[type] || parts.court) + foot;
  }

  function setReduced(value) {
    state.reduced = Boolean(value) || Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
    root.classList.toggle('scene-reduced', isReduced());
    if (isReduced()) { pause(); state.sceneContext?.revert(); state.sceneContext=null; state.revealContext?.revert(); state.revealContext=null; }
  }
  function renderSceneList() {
    const filtered = state.activeCategory === '全部場景' ? state.scenes : state.scenes.filter(scene => scene.category === state.activeCategory);
    const list = $('[data-scene-rail]');
    list.innerHTML = filtered.map(scene => `<button type="button" data-scene-id="${escapeHTML(scene.id)}" aria-current="${scene.id === state.scene?.id}"><strong>${escapeHTML(scene.title)}</strong><br><small>${scene.start_year}–${scene.end_year}｜${escapeHTML(scene.region)}</small></button>`).join('');
    $$('[data-scene-category]').forEach(button => {
      const selected = button.dataset.sceneCategory === state.activeCategory;
      button.setAttribute('aria-selected', String(selected));
    });
  }
  function renderMachine(scene) {
    const stage = $('[data-scene-stage]');
    stage.classList.add('machine');
    $('[data-scene-art]', stage)?.remove();
    $('[data-scene-art-label]', stage)?.remove();
    $('[data-scene-art-toggle]', stage)?.remove();
    if (scene.illustration) {
      const artwork = document.createElement('img'); artwork.className='scene-art scene-generated-art'; artwork.dataset.sceneArt='true'; artwork.src=scene.illustration; artwork.alt=`${scene.title}｜AI手繪歷史情境重建`; artwork.loading='lazy'; artwork.decoding='async';
      stage.append(artwork);
    }
    $('.scene-sky', stage)?.remove(); $('.scene-layers', stage)?.remove(); $('.scene-figure', stage)?.remove(); $('.scene-scroll-viewport', stage)?.remove();
    let svg = $('.machine-svg', stage);
    if (svg) svg.remove();
    stage.insertAdjacentHTML('beforeend', machineSvg(scene.machine));
    const partNames = {
      newcomen:['汽缸','活塞','蒸汽與冷凝示意','抽水泵'], watt:['汽缸','活塞','搖樑','分離冷凝器','蒸汽流向','抽水泵'],
      jenny:['機架','多錠紡錘','手搖輪'], waterframe:['水輪','滾筒牽伸機構','紡錠'], loom:['機架','梭子','經紗與打緯機構'],
    }[scene.machine] || [];
    const components = $$('.machine-svg .part,.machine-svg .glass,.machine-svg .wheel,.machine-svg .steam-puff,.machine-svg .loom-shuttle',stage);
    components.forEach((node,index) => {
      const name = partNames[index] || `機械部件 ${index+1}`;
      node.dataset.machinePart = name; node.setAttribute('tabindex','0'); node.setAttribute('role','button'); node.setAttribute('aria-label',`查看零件：${name}`); node.style.cursor='help';
      const title = document.createElementNS('http://www.w3.org/2000/svg','title'); title.textContent = `${name}｜點選查看作用`; node.prepend(title);
    });
  }
  function renderScroll(scene) {
    const stage = $('[data-scene-stage]');
    stage.classList.remove('machine');
    $('[data-scene-art]', stage)?.remove();
    $('[data-scene-art-label]', stage)?.remove();
    $('[data-scene-art-toggle]', stage)?.remove();
    $('.machine-svg', stage)?.remove(); $('.scene-sky', stage)?.remove(); $('.scene-layers', stage)?.remove(); $('.scene-figure', stage)?.remove(); $('.scene-scroll-viewport', stage)?.remove();
    const viewport = document.createElement('div'); viewport.className = 'scene-scroll-viewport'; viewport.setAttribute('aria-label','古畫長卷橫向探索區'); viewport.tabIndex = 0;
    if (scene.art) {
      const image = document.createElement('img'); image.className='scene-original-art'; image.src = scene.art; image.alt = `${scene.title}｜博物館典藏原畫`; image.loading = 'lazy'; image.decoding = 'async'; image.referrerPolicy = 'no-referrer';
      const fallback = document.createElement('div'); fallback.className = 'scene-scroll-track'; fallback.innerHTML = '<span class="scroll-mark">皇帝儀仗｜示意標記</span><span class="scroll-mark">河道與橋梁｜示意標記</span><span class="scroll-mark">城郭與商業活動｜示意標記</span><span class="scroll-mark">遠山與行旅｜示意標記</span>';
      fallback.hidden = true;
      image.addEventListener('error', () => {
        image.remove(); fallback.hidden = true; viewport.hidden = true;
        const reconstruction=$('.scene-generated-art',stage); const label=$('.scene-art-label',stage); const toggle=$('[data-scene-art-toggle]',stage);
        if(reconstruction) reconstruction.hidden=false;
        if(label) label.hidden=false;
        if(toggle){toggle.setAttribute('aria-pressed','true');toggle.textContent='博物館原畫載入失敗｜查看情境重建';}
        $('.scene-seal',stage)?.replaceChildren(document.createTextNode('AI情境重建'));
      }, { once:true });
      viewport.append(image, fallback);
      if (scene.illustration) {
        const reconstruction=document.createElement('img'); reconstruction.className='scene-art scene-generated-art'; reconstruction.dataset.sceneArt='true'; reconstruction.src=scene.illustration; reconstruction.alt=`${scene.title}｜AI手繪歷史情境重建，非博物館原畫`; reconstruction.loading='lazy'; reconstruction.decoding='async'; reconstruction.hidden=true;
        const label=document.createElement('span'); label.className='scene-art-label'; label.textContent='AI 手繪｜歷史情境重建'; label.hidden=true;
        const toggle=document.createElement('button'); toggle.type='button'; toggle.className='scene-art-toggle'; toggle.dataset.sceneArtToggle='true'; toggle.textContent='查看情境重建插畫'; toggle.setAttribute('aria-pressed','false');
        toggle.dataset.sceneArtToggle='true';
        label.dataset.sceneArtLabel='true';
        stage.append(reconstruction,label,toggle);
      }
    } else viewport.innerHTML = '<div class="scene-scroll-track"><span class="scroll-mark">宮廷人物｜概略重建</span><span class="scroll-mark">山川道路｜概略重建</span><span class="scroll-mark">城鎮與橋梁｜概略重建</span><span class="scroll-mark">山水遠景｜概略重建</span></div>';
    stage.append(viewport);
  }
  function renderBackdrop(scene) {
    const stage = $('[data-scene-stage]');
    stage.classList.remove('machine');
    $('[data-scene-art]', stage)?.remove();
    $('[data-scene-art-label]', stage)?.remove();
    $('[data-scene-art-toggle]', stage)?.remove();
    $('.machine-svg', stage)?.remove(); $('.scene-sky', stage)?.remove(); $('.scene-layers', stage)?.remove(); $('.scene-figure', stage)?.remove(); $('.scene-scroll-viewport', stage)?.remove();
    if (scene.illustration) {
      const artwork=document.createElement('img'); artwork.className='scene-art scene-generated-art'; artwork.dataset.sceneArt='true'; artwork.src=scene.illustration; artwork.alt=`${scene.title}｜AI手繪歷史情境重建`; artwork.loading='lazy'; artwork.decoding='async';
      stage.append(artwork);
      return;
    }
    if (scene.scene_type === 'trade') { stage.insertAdjacentHTML('beforeend', machineSvg('port')); return; }
    stage.insertAdjacentHTML('beforeend', '<div class="scene-sky"></div><div class="scene-layers"><div class="scene-layer far"></div><div class="scene-layer mid"></div><div class="scene-layer fore"></div></div><div class="scene-figure" aria-hidden="true"></div>');
    if (scene.scene_type === 'military') {
      $('.scene-figure', stage).style.left = '62%';
      $('.scene-figure', stage).style.filter = 'drop-shadow(0 0 1px #8b3028) saturate(.6)';
    }
  }
  function animateScene() {
    const stage = $('[data-scene-stage]');
    state.sceneContext?.revert(); state.sceneContext = null;
    if (isReduced()) { stage.classList.remove('is-playing'); return; }
    if (window.gsap && !stage.classList.contains('machine')) {
      state.sceneContext = window.gsap.context(() => {
        window.gsap.fromTo($('.scene-titleplate', stage), { opacity:0, y:-12 }, { opacity:1, y:0, duration:.55, ease:'power2.out' });
        window.gsap.fromTo($('.scene-caption', stage), { opacity:0, y:12 }, { opacity:1, y:0, duration:.5, delay:.18, ease:'power2.out' });
        window.gsap.fromTo($$('.scene-hotspot', stage), { opacity:0, scale:.75 }, { opacity:1, scale:1, duration:.35, stagger:.12, delay:.2, ease:'back.out(1.4)' });
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      }, stage);
    }
  }
  function renderStep(sceneChanged = false) {
    const scene = state.scene; if (!scene) return;
    const step = scene.steps[state.step];
    $('[data-scene-step-count]').textContent = `${state.step+1} / ${scene.steps.length}`;
    $('[data-scene-step-title]').textContent = step.title;
    $('[data-scene-step-text]').textContent = step.text;
    $('[data-scene-current-year]').textContent = `${yearNow()} 年`;
    $('[data-scene-step-year]').textContent = `${step.year} 年`;
    const inRange = yearNow() >= scene.start_year && yearNow() <= scene.end_year;
    $('[data-scene-year-status]').textContent = inRange ? `目前年份 ${yearNow()} 年｜場景適用期間` : `目前年份 ${yearNow()} 年｜場景年代 ${scene.start_year}–${scene.end_year} 年`;
    const goYear = $('[data-scene-go-year]'); goYear.hidden = inRange; goYear.textContent = `前往 ${step.year} 年`;
    const eventJump = step.event_id || scene.event_id;
    const jump = $('[data-scene-event-jump]'); jump.hidden = !eventJump; if (eventJump) jump.dataset.eventId = eventJump;
    const mapButton = $('[data-scene-map]'); mapButton.hidden = !scene.map_mode; mapButton.textContent = `在第四階段地圖查看${scene.map_mode === 'trade' ? '貿易' : scene.map_mode === 'military' ? '戰事' : '相關區域'}`;
    const mapYear = scene.scene_type === 'trade' ? null : step.year;
    if (scene.scene_type === 'trade') mapButton.dataset.preserveYear = 'true'; else delete mapButton.dataset.preserveYear;
    const hotspots = $$('.scene-hotspot');
    hotspots.forEach((button,index) => { const related = scene.steps[(state.step+index)%scene.steps.length]; button.title = related.title; button.setAttribute('aria-label',`查看熱點：${related.title}`); button.dataset.hotspot = String(index); button.hidden = index >= Math.min(3,scene.steps.length); });
    $('[data-scene-schematic-note]').hidden = !['court','military','trade','machine','culture','comparison'].includes(scene.scene_type);
    $('[data-scene-map]').dataset.mapYear = mapYear || '';
    const source = state.sources[scene.source_id];
    const relatedSource = state.sources[scene.related_source_id];
    $('[data-scene-source]').innerHTML = source ? `<strong>${escapeHTML(source.title)}</strong><br>${escapeHTML(source.publisher)}${source.creator ? `｜${escapeHTML(source.creator)}` : ''}${source.date ? `｜${escapeHTML(source.date)}` : ''}<br><a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">查看原始史料／收藏機構</a>${source.rights ? `<br>${escapeHTML(source.rights)}` : ''}<br><small>${escapeHTML(source.use)}</small>${relatedSource ? `<hr><strong>${escapeHTML(relatedSource.title)}</strong><br>${escapeHTML(relatedSource.publisher)}<br><a href="${escapeHTML(relatedSource.url)}" target="_blank" rel="noopener noreferrer">查看補充研究</a><br><small>${escapeHTML(relatedSource.use)}</small>` : ''}` : '目前場景來源資料待補。';
    const compare = $('[data-scene-comparison]');
    compare.hidden = scene.scene_type !== 'comparison';
    if (!compare.hidden) compare.innerHTML = `<article><strong>清朝｜${escapeHTML(scene.title)}</strong><p>${escapeHTML(scene.steps[0].text)}</p></article><article><strong>歐洲｜同年知識傳播</strong><p>${escapeHTML(scene.steps[1].text)}</p></article>`;
    if (!sceneChanged) return;
    const stage = $('[data-scene-stage]'); stage.classList.remove('is-playing');
    stage.classList.toggle('scene-full-art', Boolean(scene.illustration));
    $('.scene-titleplate strong',stage).textContent = scene.title;
    $('.scene-titleplate span',stage).textContent = `${scene.category}｜${scene.start_year}–${scene.end_year}｜${scene.scene_type === 'scroll' ? '博物館原畫長卷' : '歷史情境重建／技術示意'}`;
    $('.scene-seal',stage).textContent = scene.scene_type === 'scroll' ? '博物館原畫' : scene.illustration ? 'AI情境重建' : '史料示意';
    if (scene.scene_type === 'machine') renderMachine(scene); else if (scene.scene_type === 'scroll') renderScroll(scene); else renderBackdrop(scene);
    renderSceneList(); animateScene();
  }
  function showScene(scene) { pause(); state.scene = scene; state.step = 0; state.zoom = 1; renderStep(true); }
  function goStep(index) { if (!state.scene) return; pause(); state.step = (index + state.scene.steps.length) % state.scene.steps.length; renderStep(false); }
  function nextStep() { goStep(state.step + 1); }
  function play() {
    if (!state.scene || isReduced() || state.playing) return;
    state.playing = true; $('[data-scene-stage]').classList.add('is-playing');
    const scroll = $('.scene-scroll-viewport');
    if (scroll && scroll.scrollWidth > scroll.clientWidth) {
      const end = scroll.scrollWidth - scroll.clientWidth;
      let direction = 1;
      const tick = () => { if (!state.playing) return; if (scroll.scrollLeft >= end - 2) direction = -1; if (scroll.scrollLeft <= 2) direction = 1; scroll.scrollLeft += direction * Math.max(1, 1.2 * state.speed); state.scrollFrame = requestAnimationFrame(tick); };
      state.scrollFrame = requestAnimationFrame(tick);
    }
    state.timer = window.setInterval(() => { state.step=(state.step+1)%state.scene.steps.length; renderStep(false); }, 5200 / state.speed);
    $('[data-scene-play]').textContent = '暫停'; $('[data-scene-play]').setAttribute('aria-pressed','true');
  }
  function pause() {
    state.playing = false; if (state.timer) clearInterval(state.timer); state.timer = null; cancelAnimationFrame(state.scrollFrame); state.scrollFrame = 0;
    $('[data-scene-stage]')?.classList.remove('is-playing');
    const button = $('[data-scene-play]'); if (button) { button.textContent = '播放'; button.setAttribute('aria-pressed','false'); }
  }
  function setupScrollReveal() {
    state.revealContext?.revert(); state.revealContext=null;
    if (!window.gsap || !window.ScrollTrigger || isReduced()) return;
    window.gsap.registerPlugin(window.ScrollTrigger);
    state.revealContext = window.gsap.context(() => window.gsap.fromTo($('.scene-shell'), { autoAlpha:0, y:18 }, { autoAlpha:1, y:0, duration:.7, ease:'power2.out', scrollTrigger:{ trigger:root, start:'top 84%', once:true } }),root);
  }
  function reloadAnimations() { if (isReduced()) pause(); else { animateScene(); setupScrollReveal(); } }
  async function showMap() {
    const button = $('[data-scene-map]'); const section = document.getElementById('historical-map');
    if (!section) return;
    if (!button.dataset.preserveYear && button.dataset.mapYear) controller?.setCurrentYear?.(button.dataset.mapYear,{source:'historical-scene-map'});
    section.scrollIntoView({behavior:isReduced()?'auto':'smooth',block:'start'});
    const mode = state.scene.map_mode;
    const apply = () => { const modeButton = section.querySelector(`[data-map-mode="${mode}"]`); if (modeButton) modeButton.click(); else window.HistoricalMap?.setMode?.(mode); };
    const focusLinkedFeature = () => {
      const routeId = state.scene.steps[state.step].route_id || state.scene.route_id;
      const eventId = state.scene.steps[state.step].event_id || state.scene.event_id;
      if (routeId) window.HistoricalMap?.focusFeature?.(state.scene.scene_type === 'trade' ? 'trade' : 'military',routeId);
      else if (eventId) window.HistoricalMap?.focusFeature?.('event',eventId);
    };
    const waitForMapView = async () => {
      for (let attempt=0;attempt<40;attempt++) {
        if (window.HistoricalMap?.getState?.().views) {
          const modeButton=section.querySelector(`[data-map-mode="${mode}"]`);
          if (modeButton?.getAttribute('aria-pressed')==='true') { focusLinkedFeature(); return; }
          apply();
        }
        await new Promise(resolve=>setTimeout(resolve,250));
      }
    };
    if (window.HistoricalMap) { apply(); await waitForMapView(); return; }
    const waitForMap = () => new Promise(resolve => {
      let attempts = 0;
      const timer = setInterval(() => { attempts++; if (window.HistoricalMap || attempts >= 40) { clearInterval(timer); resolve(Boolean(window.HistoricalMap)); } }, 250);
    });
    if (await waitForMap()) { apply(); await waitForMapView(); } else $('[data-map-status]')?.scrollIntoView({behavior:'smooth',block:'center'});
  }
  function handleClick(event) {
    const machinePart = event.target.closest('[data-machine-part]');
    if (machinePart) { const model=({newcomen:'紐科門大氣式蒸汽機',watt:'瓦特分離冷凝器模型',jenny:'珍妮紡紗機',waterframe:'阿克萊水力紡紗機',loom:'卡特萊特動力織機'})[state.scene.machine]; $('[data-scene-step-title]').textContent = machinePart.dataset.machinePart; $('[data-scene-step-text]').textContent = `此為${model}示意的「${machinePart.dataset.machinePart}」部件。圖形用於說明作用，未按特定藏品精確比例復原。`; $('[data-scene-step-year]').textContent = `${state.scene.steps[state.step].year} 年`; return; }
    const target = event.target.closest('button'); if (!target) return;
    if (target.matches('[data-scene-category]')) { state.activeCategory = target.dataset.sceneCategory; renderSceneList(); return; }
    if (target.matches('[data-scene-id]')) { const scene = state.scenes.find(item => item.id === target.dataset.sceneId); if (scene) showScene(scene); return; }
    if (target.matches('[data-scene-art-toggle]')) { const stage=$('[data-scene-stage]'); const viewport=$('.scene-scroll-viewport',stage); const original=$('.scene-original-art',viewport); const fallback=$('.scene-scroll-track',viewport); const reconstruction=$('.scene-generated-art',stage); const label=$('.scene-art-label',stage); const showReconstruction=target.getAttribute('aria-pressed')!=='true'; if(original) original.hidden=showReconstruction; if(fallback) fallback.hidden=showReconstruction || Boolean(original && !original.isConnected); if(viewport) viewport.hidden=showReconstruction || Boolean(original && !original.isConnected); if(reconstruction) reconstruction.hidden=!showReconstruction; if(label) label.hidden=!showReconstruction; target.setAttribute('aria-pressed',String(showReconstruction)); target.textContent=showReconstruction?'返回博物館原畫':'查看情境重建插畫'; if(viewport) viewport.setAttribute('aria-label',showReconstruction?'博物館典藏原畫長卷':'博物館典藏原畫長卷'); $('.scene-seal')?.replaceChildren(document.createTextNode(showReconstruction?'AI情境重建':'博物館原畫')); return; }
    if (target.matches('[data-scene-play]')) { state.playing ? pause() : play(); return; }
    if (target.matches('[data-scene-replay]')) { showScene(state.scene); if (!isReduced()) play(); return; }
    if (target.matches('[data-scene-prev]')) { goStep(state.step - 1); return; }
    if (target.matches('[data-scene-next]')) { nextStep(); return; }
    if (target.matches('[data-scene-fullscreen]')) { const stage = $('[data-scene-stage]'); if (!document.fullscreenElement) stage.requestFullscreen?.(); else document.exitFullscreen?.(); return; }
    if (target.matches('[data-scene-go-year]')) { controller?.setCurrentYear?.(state.scene.steps[state.step].year,{source:'historical-scene'}); renderStep(); return; }
    if (target.matches('[data-scene-event-jump]')) { const eventId = target.dataset.eventId; document.querySelector(`[data-select-event="${CSS.escape(eventId)}"]`)?.click(); document.getElementById('global-history')?.scrollIntoView({behavior:isReduced()?'auto':'smooth'}); return; }
    if (target.matches('[data-scene-map]')) { showMap(); return; }
    if (target.matches('[data-hotspot]')) { const index = Number(target.dataset.hotspot); const step = state.scene.steps[(state.step + index) % state.scene.steps.length]; $('[data-scene-step-title]').textContent = step.title; $('[data-scene-step-text]').textContent = step.text; $('[data-scene-step-year]').textContent = `${step.year} 年`; return; }
    if (target.matches('[data-scene-scroll-left]')) { $('.scene-scroll-viewport')?.scrollBy({left:-220,behavior:isReduced()?'auto':'smooth'}); return; }
    if (target.matches('[data-scene-scroll-right]')) { $('.scene-scroll-viewport')?.scrollBy({left:220,behavior:isReduced()?'auto':'smooth'}); return; }
  }
  function onChange(event) {
    const select = event.target.closest('[data-scene-speed]'); if (select) { state.speed = Number(select.value) || 1; if (state.playing) { pause(); play(); } return; }
    if (event.target.matches('[data-scene-zoom]')) { state.zoom = Number(event.target.value); const viewport = $('.scene-scroll-viewport'); const track = $('.scene-scroll-track',viewport); $$('img',viewport).forEach(image=>image.style.height=`${100*state.zoom}%`); if (track) track.style.width = `${210*state.zoom}%`; }
  }
  function onKeyDown(event) { const part=event.target.closest('[data-machine-part]'); if(part && ['Enter',' '].includes(event.key)){event.preventDefault();const model=({newcomen:'紐科門大氣式蒸汽機',watt:'瓦特分離冷凝器模型',jenny:'珍妮紡紗機',waterframe:'阿克萊水力紡紗機',loom:'卡特萊特動力織機'})[state.scene.machine];$('[data-scene-step-title]').textContent=part.dataset.machinePart;$('[data-scene-step-text]').textContent=`此為${model}示意的「${part.dataset.machinePart}」部件。圖形用於說明作用，未按特定藏品精確比例復原。`; } }
  function dragStart(event) {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    const viewport = event.target.closest('.scene-scroll-viewport'); if (!viewport) return;
    dragState = { viewport, pointerId:event.pointerId, x:event.clientX, left:viewport.scrollLeft };
    viewport.classList.add('is-dragging'); viewport.setPointerCapture?.(event.pointerId); event.preventDefault();
  }
  function dragMove(event) { if (!dragState || event.pointerId !== dragState.pointerId) return; dragState.viewport.scrollLeft = dragState.left - (event.clientX - dragState.x); }
  function dragEnd(event) { if (!dragState || (event?.pointerId != null && event.pointerId !== dragState.pointerId)) return; dragState.viewport.classList.remove('is-dragging'); dragState = null; }
  function attachYearSync() {
    if (!controller?.subscribe) return;
    state.unsubscribe = controller.subscribe(() => { $('[data-scene-current-year]').textContent = `${yearNow()} 年`; if (state.scene) renderStep(false); });
  }
  async function init() {
    try {
      const [sceneResponse, sourceResponse] = await Promise.all([fetch('./data/historical-scenes.json'),fetch('./data/historical-scene-sources.json')]);
      if (!sceneResponse.ok || !sourceResponse.ok) throw new Error('場景資料檔載入失敗，請用 start-local-site.cmd 開啟靜態網站。');
      const sceneData = await sceneResponse.json(); const sourceData = await sourceResponse.json();
      state.scenes = sceneData.scenes; state.sources = sourceData.sources;
      const categories = ['全部場景', ...new Set(state.scenes.map(scene => scene.category))];
      $('[data-scene-tabs]').innerHTML = categories.map(category => `<button type="button" class="scene-tab" role="tab" aria-selected="${category==='全部場景'}" data-scene-category="${escapeHTML(category)}">${escapeHTML(category)}</button>`).join('');
      $('[data-scene-stage]').insertAdjacentHTML('beforeend','<div class="scene-titleplate"><strong></strong><span></span></div><div class="scene-caption" aria-live="polite"><strong data-scene-step-title></strong><div data-scene-step-text></div></div><button class="scene-hotspot" data-hotspot="0" type="button">＋</button><button class="scene-hotspot" data-hotspot="1" type="button">＋</button><button class="scene-hotspot" data-hotspot="2" type="button">＋</button><span class="scene-seal" aria-label="歷史場景示意">史料示意</span>');
      root.addEventListener('click',handleClick); root.addEventListener('change',onChange); root.addEventListener('input',onChange); root.addEventListener('keydown',onKeyDown); root.addEventListener('pointerdown',dragStart); root.addEventListener('pointermove',dragMove); root.addEventListener('pointerup',dragEnd); root.addEventListener('pointercancel',dragEnd);
      window.addEventListener('qingmotionchange',event=>{setReduced(!event.detail?.enabled);reloadAnimations();});
      const motion = window.matchMedia?.('(prefers-reduced-motion: reduce)'); motion?.addEventListener?.('change',event=>{ state.reduced = event.matches; reloadAnimations(); });
      attachYearSync(); setReduced(false); state.activeCategory='全部場景'; showScene(state.scenes[0]);
      setupScrollReveal();
    } catch(error) {
      console.error('Historical scene engine failed:',error);
      $('[data-scene-error]').hidden = false; $('[data-scene-error]').textContent = `${error.message}｜本階段以 HTTP 靜態網站方式開啟。`;
    }
  }
  window.HistoricalSceneEngine = { getState: () => ({ sceneId:state.scene?.id, step:state.step, playing:state.playing, year:yearNow(), sceneCount:state.scenes.length }), selectScene:id=>{const scene=state.scenes.find(item=>item.id===id);if(scene)showScene(scene);}, play, pause, destroy(){pause();state.unsubscribe?.();state.sceneContext?.revert();state.revealContext?.revert();root.removeEventListener('click',handleClick);root.removeEventListener('change',onChange);root.removeEventListener('input',onChange);root.removeEventListener('keydown',onKeyDown);root.removeEventListener('pointerdown',dragStart);root.removeEventListener('pointermove',dragMove);root.removeEventListener('pointerup',dragEnd);root.removeEventListener('pointercancel',dragEnd);} };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();

