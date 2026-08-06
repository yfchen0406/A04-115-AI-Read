const activities = [
  { id:'a01', group:'每月同學聚會', date:'115 年 3 月 4 日', short:'三月第一次聚會', folder:'A01-1150304-三月第一次聚會', photos:['A01-1150304-1','A01-1150304-2','A01-1150304-3','A01-1150304-4','A01-1150304-5'] },
  { id:'b01', group:'川哥相聚', date:'115 年 4 月 13 日', short:'川哥四月來家裡喝咖啡', folder:'B01-1150413-川哥四月來家裡喝咖啡', photos:['B01-1150413-1','B01-1150413-2'] },
  { id:'a02', group:'每月同學聚會', date:'115 年 4 月 21 日', short:'四月第二次聚會', folder:'A02-1150421-四月第二次聚會', photos:['A02-1150421-1','A02-1150421-2','A02-1150421-3'] },
  { id:'a03', group:'每月同學聚會', date:'115 年 5 月 29 日', short:'五月第三次聚會', folder:'A03-1150529-五月第三次聚會', photos:['A03-1150529-1'] },
  { id:'b02', group:'川哥相聚', date:'115 年 6 月 5 日', short:'川哥六月關渡小吃店午餐', folder:'B02-1150605-川哥六月關渡小吃店午餐', photos:['B02-1150605-','B02-1150605-1'] },
  { id:'b03', group:'川哥相聚', date:'115 年 6 月 11 日', short:'川哥六月份第二次來家裡喝咖啡', folder:'B02-1150611-川哥六月份第二次來家裡喝咖啡', photos:['S__24903703_0'] },
  { id:'a04', group:'每月同學聚會', date:'115 年 6 月 19 日', short:'六月第四次聚會', folder:'A04-1150619-六月第四次聚會', photos:['A04-1150619-1'] },
  { id:'a05', group:'每月同學聚會', date:'115 年 7 月 8 日', short:'七月第五次聚會', folder:'A05-1150708-七月五次聚會', photos:['A05-1150708-1','A05-1150708-2'] },
  { id:'a06', group:'每月同學聚會', date:'115 年 8 月 5 日', short:'八月份第六次聚會~川哥、小胖加上我自己', folder:'A06-1150805-八月份第六次聚餐', photos:['A06-1150805-1','A06-1150805-2','A06-1--準備午餐','A06-2-專業煎餃','A06-3-精心調配醬汁5','A06-4-獨立門醬汁','A06-5-飯後甜點','A06-6-原本週一菜單','A06-7-預計週三開心聚餐','A06-8-週二更換聚餐菜單','A06-9-因為更換菜單我變成詐騙師','A06-10-另外一位詐騙師','A06-11-貨真價實的詐騙師'] },
  { id:'b04', group:'川哥相聚', date:'115 年 7 月 14 日', short:'川哥七月份到好市多吃熱狗後回家喝咖啡', folder:'B03-1150714-川哥七月份到好市多吃熱夠後回家喝咖啡', photos:['B03-1150714-1','B03-1150714-2','B03-1150714-3'] },
  { id:'b05', group:'川哥相聚', date:'115 年 7 月 24 日', short:'川哥七月份中午買肯德基來家裡享用', folder:'B04-1150724-川哥七月份中午買肯德基來家裡享用', photos:['S__26173455_0','S__26173456_0','S__26173457_0','S__26173458_0','S__26173459_0'] },
  { id:'axx', group:'其他同學', date:'日期待確認', short:'還有其他同學也會來聚會', folder:'AXX-還有其他同學也會來聚會', photos:['AXX-神秘時間'] },
];
const photoCaptions = {
  'A06-1--準備午餐': '準備午餐',
  'A06-2-專業煎餃': '專業煎餃',
  'A06-3-精心調配醬汁5': '精心調配醬汁5',
  'A06-4-獨立門醬汁': '獨立門醬汁',
  'A06-5-飯後甜點': '飯後甜點',
  'A06-6-原本週一菜單': '原本週一菜單',
  'A06-7-預計週三開心聚餐': '預計週三開心聚餐',
  'A06-8-週二更換聚餐菜單': '週二更換聚餐菜單',
  'A06-9-因為更換菜單我變成詐騙師': '因為更換菜單我變成詐騙師',
  'A06-10-另外一位詐騙師': '另外一位詐騙師',
  'A06-11-貨真價實的詐騙師': '貨真價實的詐騙師',
};
const photoPath = (activity, photo) => `assets/photos/${activity.folder}/${photo}.webp`;
const timelineList = document.querySelector('#timelineList');
const photoGrid = document.querySelector('#photoGrid');
const filterRow = document.querySelector('#filterRow');
const resultCount = document.querySelector('#resultCount');
const searchInput = document.querySelector('#searchInput');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightboxImage');
const lightboxCaption = document.querySelector('#lightboxCaption');
let activeFilter = '全部';

const dateValue = date => {
  const match = date.match(/(\d+) 年 (\d+) 月 (\d+) 日/);
  return match ? Number(`${match[1]}${match[2].padStart(2, '0')}${match[3].padStart(2, '0')}`) : -1;
};
const timelineActivities = [...activities].sort((a, b) => dateValue(b.date) - dateValue(a.date));
timelineList.innerHTML = timelineActivities.map(a => `<li class="timeline-item" data-activity-id="${a.id}" tabindex="0" role="button" aria-label="查看${a.date}的${a.short}照片"><span class="timeline-date">${a.date}</span><span class="timeline-title">${a.short}</span><span class="timeline-count">${a.photos.length} 張照片</span></li>`).join('');
const groups = ['全部', ...new Set(activities.map(a => a.group))];
filterRow.innerHTML = groups.map(g => `<button type="button" data-filter="${g}" aria-pressed="${g === activeFilter}">${g}</button>`).join('');

function renderPhotos() {
  const term = searchInput.value.trim().toLowerCase();
  const items = activities.flatMap(a => a.photos.map((p, index) => ({a, p, index}))).filter(({a,p}) => {
    const matchesGroup = activeFilter === '全部' || a.group === activeFilter;
    const text = `${a.date} ${a.short} ${a.group} ${p} ${photoCaptions[p] || ''}`.toLowerCase();
    return matchesGroup && text.includes(term);
  });
  resultCount.textContent = `顯示 ${items.length} 張照片`;
  photoGrid.innerHTML = items.map(({a,p,index}) => { const caption = photoCaptions[p] || `第 ${index+1} 張照片`; return `<button class="photo-card" type="button" data-image="${photoPath(a,p)}" data-caption="${a.date}・${a.short}・${caption}"><figure><img loading="lazy" src="${photoPath(a,p)}" alt="${a.short}：${caption}"><figcaption><strong>${caption}</strong>${a.date}・${a.short}</figcaption></figure></button>`; }).join('');
}
function showActivity(activityId) {
  const activity = activities.find(a => a.id === activityId);
  if (!activity) return;
  activeFilter = '全部';
  searchInput.value = activity.short;
  filterRow.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === activeFilter)));
  renderPhotos();
  document.querySelector('#gallery').scrollIntoView({behavior:'smooth', block:'start'});
}
timelineList.addEventListener('click', e => {
  const item = e.target.closest('.timeline-item');
  if (item) showActivity(item.dataset.activityId);
});
timelineList.addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  e.preventDefault();
  const item = e.target.closest('.timeline-item');
  if (item) showActivity(item.dataset.activityId);
});
filterRow.addEventListener('click', e => { const button = e.target.closest('button'); if (!button) return; activeFilter = button.dataset.filter; filterRow.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button))); renderPhotos(); });
searchInput.addEventListener('input', renderPhotos);
photoGrid.addEventListener('click', e => { const button = e.target.closest('.photo-card'); if (!button) return; lightboxImage.src = button.dataset.image; lightboxImage.alt = button.dataset.caption; lightboxCaption.textContent = button.dataset.caption; lightbox.showModal(); });
document.querySelector('#closeLightbox').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
const themes = ['album','magazine','museum','family'];
const themeLabels = { album:'懷舊相簿', magazine:'雜誌專題', museum:'數位博物館', family:'溫暖家庭' };
document.querySelector('#themeButton').addEventListener('click', () => { const body = document.body; const index = themes.indexOf(body.dataset.theme); body.dataset.theme = themes[(index + 1) % themes.length]; document.querySelector('#themeButton').textContent = `風格：${themeLabels[body.dataset.theme]}`; });
renderPhotos();
