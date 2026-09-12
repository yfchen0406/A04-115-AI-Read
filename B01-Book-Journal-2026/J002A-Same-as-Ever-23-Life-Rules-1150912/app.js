
const rules = window.RULES_DATA;
const categories = window.CATEGORIES;
let currentView = 'infographic';

const labelMap = {
  infographic: '資訊圖表',
  concept: '意象圖表',
  simpleConcept: '簡單意象',
  handdrawn: '手繪插畫'
};

const folderMap = {
  infographic: 'assets/images/infographic/',
  concept: 'assets/images/concept/',
  simpleConcept: 'assets/images/simple-concept/',
  handdrawn: 'assets/images/handdrawn/'
};

const catBox = document.querySelector('#categoryCards');
categories.forEach((c,i)=>{
  const list=c.laws.map(n=>rules.find(r=>r.num===n)).filter(Boolean);
  const el=document.createElement('article');
  el.className='category-card';
  el.innerHTML=`<p class="kicker">0${i+1}</p><h3>${c.title}</h3><p>${c.subtitle}</p>
    <p>${list.map(x=>`${x.num} ${x.title}`).join(' · ')}</p>
    <a href="#law-${c.laws[0]}">從這類開始閱讀 →</a>`;
  catBox.appendChild(el);
});

const grid=document.querySelector('#ruleGrid');
function renderGrid(filter='all'){
  grid.innerHTML='';
  rules.filter(r=>filter==='all'||r.categoryId===filter).forEach(r=>{
    const a=document.createElement('a');
    a.href=`#law-${r.num}`; a.className='rule-card';
    a.innerHTML=`<div class="card-topline"><span class="rule-num">${r.num}</span><span class="card-category">${r.category}</span></div><h3>${r.title}</h3><p>${r.sentence}</p><div class="card-keywords">${(r.keywords||[]).slice(0,3).map(k=>`<span>${k}</span>`).join('')}</div><div class="card-read">閱讀法則 <b>→</b></div>`;
    grid.appendChild(a);
  });
}
renderGrid();

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active'); renderGrid(btn.dataset.filter);
}));

function getImagePath(rule, view){
  if(view === 'concept') return rule.imageConcept;
  if(view === 'simpleConcept') return rule.imageSimpleConcept;
  if(view === 'handdrawn') return rule.imageHanddrawn;
  return rule.imageInfographic;
}

window.handleImageError = function(img){
  img.style.display='none';
  const box = img.parentElement;
  const placeholder = box.querySelector('[data-placeholder]');
  const num = img.dataset.num;
  const view = box.dataset.view || currentView;
  placeholder.style.display='block';
  placeholder.querySelector('[data-placeholder-title]').textContent = `圖片待置入：law-${num}.webp`;
  placeholder.querySelector('[data-placeholder-text]').textContent = `目前顯示：${labelMap[view]}｜請將圖片放入 ${folderMap[view]}`;
};

function closeAllLocalPanels(exceptWrap = null){
  document.querySelectorAll('.local-switch-wrap').forEach(wrap=>{
    if(exceptWrap && wrap === exceptWrap) return;
    wrap.classList.remove('open');
    const panel = wrap.querySelector('.local-switch-panel');
    const toggle = wrap.querySelector('.local-switch-toggle');
    if(panel) panel.hidden = true;
    if(toggle) toggle.setAttribute('aria-expanded','false');
  });
}

function updateLocalSummary(section, view){
  const summary = section.querySelector('[data-current-view]');
  if(summary) summary.textContent = labelMap[view];
}

function applyViewToSection(section, view){
  const num = section.id.replace('law-','');
  const rule = rules.find(r=>r.num===num);
  const box = section.querySelector('.infographic');
  const img = section.querySelector('img[data-num]');
  const placeholder = section.querySelector('[data-placeholder]');
  const badge = section.querySelector('[data-badge]');
  box.dataset.view = view;
  badge.textContent = labelMap[view];
  placeholder.style.display='none';
  img.style.display='block';
  img.src = getImagePath(rule, view);
  img.alt = `法則 ${rule.num} ${rule.title} ${labelMap[view]}`;
  section.querySelectorAll('.local-switch').forEach(btn=>btn.classList.toggle('active', btn.dataset.view===view));
  updateLocalSummary(section, view);
}

function updateGlobalButtons(view){
  document.querySelectorAll('.image-switch').forEach(btn=>btn.classList.toggle('active', btn.dataset.view===view));
}

function updateView(view){
  currentView = view;
  updateGlobalButtons(view);
  document.querySelectorAll('.rule-section').forEach(section=>applyViewToSection(section, view));
}

const detail=document.querySelector('#ruleDetails');
rules.forEach(r=>{
  const sec=document.createElement('section');
  sec.id=`law-${r.num}`; sec.className='rule-section';
  const actionHtml=(r.actions||[]).map(x=>`<li>${x}</li>`).join('');
  const pitHtml=(r.pitfalls||[]).map(x=>`<li>${x}</li>`).join('');
  const chips=(r.keywords||[]).map(x=>`<span class="chip">${x}</span>`).join('');
  sec.innerHTML=`<div class="rule-wrap">
    <div class="rule-heading">
      <div class="rule-title-box"><div class="num">${r.num}</div><div>
        <span class="category-tag">${r.category}</span><h2>${r.title}</h2>
      </div></div>
    </div>
    <div class="infographic" data-view="infographic">
      <span class="image-mode-badge" data-badge>${labelMap[currentView]}</span>
      <img data-num="${r.num}" src="${r.imageInfographic}" alt="法則 ${r.num} ${r.title} 圖片"
        onerror="window.handleImageError && window.handleImageError(this)">
      <div class="placeholder" style="display:none" data-placeholder>
        <strong data-placeholder-title>圖片待置入：law-${r.num}.webp</strong>
        <span data-placeholder-text>目前顯示：資訊圖表｜請將圖片放入 assets/images/infographic/</span>
      </div>
    </div>
    <div class="local-switch-wrap" aria-label="單張圖片版本切換">
      <button class="local-switch-toggle" type="button" aria-expanded="false">
        <span>切換圖片版本</span>
        <b data-current-view>${labelMap[currentView]}</b>
        <i aria-hidden="true">▾</i>
      </button>
      <div class="local-switch-panel" hidden>
        <div class="local-switch-group">
          <button class="local-switch active" data-view="infographic" type="button">資訊圖表</button>
          <button class="local-switch" data-view="concept" type="button">意象圖表</button>
          <button class="local-switch" data-view="simpleConcept" type="button">簡單意象</button>
          <button class="local-switch" data-view="handdrawn" type="button">手繪插畫</button>
        </div>
      </div>
    </div>
    <div class="one-liner">${r.sentence}</div>
    <div class="text-grid">
      <article class="text-card"><h3>核心解釋</h3><p>${r.explanation}</p></article>
      <article class="text-card"><h3>書中案例</h3><p>${r.case}</p></article>
      <article class="text-card"><h3>生活情境</h3><p>${r.life}</p></article>
      <article class="text-card actions"><h3>我可以怎麼做</h3><ol>${actionHtml}</ol></article>
      <article class="text-card pitfalls"><h3>避免的陷阱</h3><ul>${pitHtml}</ul></article>
      <article class="text-card"><h3>法則分類</h3><p>${r.categorySubtitle}</p><div class="keywords">${chips}</div></article>
    </div>
    <div class="question"><strong>一句自我提問：</strong>${r.question}</div>
  </div>`;
  detail.appendChild(sec);
});

document.querySelectorAll('.image-switch').forEach(btn=>btn.addEventListener('click',()=>updateView(btn.dataset.view)));

document.querySelectorAll('.rule-section').forEach(section=>{
  const wrap = section.querySelector('.local-switch-wrap');
  const toggle = wrap.querySelector('.local-switch-toggle');
  const panel = wrap.querySelector('.local-switch-panel');
  toggle.addEventListener('click', (e)=>{
    e.stopPropagation();
    const isOpen = wrap.classList.contains('open');
    closeAllLocalPanels(wrap);
    wrap.classList.toggle('open', !isOpen);
    panel.hidden = isOpen;
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
  section.querySelectorAll('.local-switch').forEach(btn=>btn.addEventListener('click',()=>{
    applyViewToSection(section, btn.dataset.view);
    wrap.classList.remove('open');
    panel.hidden = true;
    toggle.setAttribute('aria-expanded','false');
  }));
});

document.addEventListener('click', (e)=>{
  if(!e.target.closest('.local-switch-wrap')) closeAllLocalPanels();
});

document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') closeAllLocalPanels();
});

updateView('infographic');

// 章節側邊導覽
const sideNav = document.querySelector('#sideNav');
const sideNavList = document.querySelector('#sideNavList');
const sideNavToggle = document.querySelector('#sideNavToggle');
const sideNavClose = document.querySelector('#sideNavClose');

categories.forEach((cat, idx)=>{
  const group=document.createElement('div');
  group.className='side-group';
  group.innerHTML=`<a class="side-category" href="#law-${cat.laws[0]}"><span>0${idx+1}</span>${cat.title}</a>`;
  const ul=document.createElement('div');
  ul.className='side-laws';
  cat.laws.forEach(num=>{
    const rule=rules.find(r=>r.num===num);
    if(!rule) return;
    const a=document.createElement('a');
    a.href=`#law-${num}`;
    a.dataset.target=`law-${num}`;
    a.innerHTML=`<b>${num}</b><span>${rule.title}</span>`;
    ul.appendChild(a);
  });
  group.appendChild(ul);
  sideNavList.appendChild(group);
});

const sideBackdrop=document.createElement('div');
sideBackdrop.className='side-nav-backdrop';
document.body.appendChild(sideBackdrop);

function openSideNav(){
  sideNav.classList.add('open');
  if(innerWidth<1280){
    sideBackdrop.classList.add('show');
    document.body.style.overflow='hidden';
  }
}
function closeSideNav(){
  sideNav.classList.remove('open');
  sideBackdrop.classList.remove('show');
  document.body.style.overflow='';
}
sideNavToggle?.addEventListener('click',openSideNav);
sideNavClose?.addEventListener('click',closeSideNav);
sideBackdrop.addEventListener('click',closeSideNav);
sideNavList?.addEventListener('click',e=>{if(e.target.closest('a') && innerWidth<1280) closeSideNav()});
window.addEventListener('resize',()=>{if(innerWidth>=1280){sideBackdrop.classList.remove('show');document.body.style.overflow='';}});

const sideLinks=[...document.querySelectorAll('.side-laws a')];
const sections=[...document.querySelectorAll('.rule-section')];
const observer=new IntersectionObserver(entries=>{
  const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!visible) return;
  sideLinks.forEach(a=>a.classList.toggle('active',a.dataset.target===visible.target.id));
},{rootMargin:'-20% 0px -65% 0px',threshold:[0,.15,.4]});
sections.forEach(s=>observer.observe(s));
