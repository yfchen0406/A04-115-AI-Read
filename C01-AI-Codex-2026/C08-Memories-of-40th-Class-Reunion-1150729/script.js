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
  { id:'a07', group:'每月同學聚會', date:'115 年 8 月 24 日', short:'八月份第七次聚會', folder:'A07-1150824-八月份第七次聚會', photos:['A01-正芬姐公司的衣服送三件給川董','A02-川董生日小胖也來慶祝-好市多買中餐','A03-公務繁重的川董依然忙碌接電話','A04-簡單採購幾樣餐點','A05-好市多鮭魚壽司和蝦仁炒飯','A06-川董生日開心聚餐'] },
  { id:'a08', group:'每月同學聚會', date:'115 年 9 月 16 日', short:'九月份聚會－今年第八次', folder:'A08-1150916-九月份聚會-今年第八次', photos:['A01-買好午餐準備用餐川董依然忙碌','A02-用餐前合照、壽司和烤雞','A03-加上宜蘭蒜味肉羹，芭樂汁，還有紅豆湯和飯後咖啡','A04-酒足飯堡的小胖，躺在沙發睡著了'] },
  { id:'a09', group:'每月同學聚會', date:'115 年 10 月 6 日', short:'十月份聚會－今年第九次', folder:'A09-1151006-十月份聚會-今年第九次', photos:['A01-今天聚會前有點感冒，結果聚會結束到醫院看診為A流','A02-聚會討論議題一-2026台北市長選舉','A03-討論議題二-五年級和九年級時代不同所得到服利','A04-關廟麵加餛飩','A05-聚餐前先拿乖乖照相，就是要他們乖乖','A06-每人都一大碗關廟麵，不過他們辣椒放太多','A07-看起來我的手藝不錯','A08-正芬姐送的制服，下次都要穿這件來'] },
  { id:'a10', group:'每月同學聚會', date:'115 年 10 月 27 日', short:'十月份聚會－2026 年第十次聚會', folder:'A10-1151027-十月份-第10次聚會', photos:['A01-十月份聚會好市多餐點為主','A02-非常認真的準備用餐，準備沾醬','A03-一起穿著正芬姐發的制服','A04-米其林陳大廚特製玉米濃湯','A05-川董獨照','A06-小胖獨照','A07-今天有陳大廚的特製玉米濃湯','A08-看表情就知道非常的滿足','A09-川董照慣例都要裝忙'] },
  { id:'b04', group:'川哥相聚', date:'115 年 7 月 14 日', short:'川哥七月份到好市多吃熱狗後回家喝咖啡', folder:'B03-1150714-川哥七月份到好市多吃熱夠後回家喝咖啡', photos:['B03-1150714-1','B03-1150714-2','B03-1150714-3'] },
  { id:'b05', group:'川哥相聚', date:'115 年 7 月 24 日', short:'川哥七月份中午買肯德基來家裡享用', folder:'B04-1150724-川哥七月份中午買肯德基來家裡享用', photos:['S__26173455_0','S__26173456_0','S__26173457_0','S__26173458_0','S__26173459_0'] },
  { id:'b06', group:'川哥相聚', date:'115 年 8 月 18 日', short:'川哥到家來品嚐yfc廣東粥', folder:'B05-1150818-川哥到家來品嚐yfc廣東粥', photos:['B05-1-裝忙的川哥','B05-2-進電梯也要裝忙','B05-3-284熱天進門先喝沙士','B05-4-靜靜等待廣東粥完成','B05-5-廣東粥上桌','B05-6-川董認真品嚐','B05A-1-一早的廣東粥菜單','B05A-2-一早的廣東粥菜單','B05A-4-一早的廣東粥菜單','B05A-5-一早的廣東粥菜單','B05A-6-一早的廣東粥菜單','B05A-7-小胖是好市多限定版','B05A-8-小胖是好市多限定版','B05A-9-小胖是好市多限定版'] },
  { id:'b07', group:'川哥相聚', date:'115 年 10 月 21 日', short:'川哥十月份一個人到家裡喝咖啡', folder:'B06-1151021-川哥十月份一個人到家裡喝咖啡', photos:['A01-川董來之前天空因為好天氣又下雨出現彩虹','A02-近距離再拍一張彩虹','A03-今天招待不週，只有咖啡餅乾','A04-川董來二個多小時有一個半小時和客戶講話，並且還很不耐煩','A05-三位老人家第二套制服，下次聚會發放'] },
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
  'A01-正芬姐公司的衣服送三件給川董': '正芬姐公司的衣服送三件給川董',
  'A02-川董生日小胖也來慶祝-好市多買中餐': '川董生日小胖也來慶祝－好市多買中餐',
  'A03-公務繁重的川董依然忙碌接電話': '公務繁重的川董依然忙碌接電話',
  'A04-簡單採購幾樣餐點': '簡單採購幾樣餐點',
  'A05-好市多鮭魚壽司和蝦仁炒飯': '好市多鮭魚壽司和蝦仁炒飯',
  'A06-川董生日開心聚餐': '川董生日開心聚餐',
  'A01-買好午餐準備用餐川董依然忙碌': '買好午餐準備用餐，川董依然忙碌',
  'A02-用餐前合照、壽司和烤雞': '用餐前合照、壽司和烤雞',
  'A03-加上宜蘭蒜味肉羹，芭樂汁，還有紅豆湯和飯後咖啡': '加上宜蘭蒜味肉羹、芭樂汁，還有紅豆湯和飯後咖啡',
  'A04-酒足飯堡的小胖，躺在沙發睡著了': '酒足飯堡的小胖，躺在沙發睡著了',
  'A01-今天聚會前有點感冒，結果聚會結束到醫院看診為A流': '今天聚會前有點感冒，結果聚會結束到醫院看診為A流',
  'A02-聚會討論議題一-2026台北市長選舉': '聚會討論議題一－2026台北市長選舉',
  'A03-討論議題二-五年級和九年級時代不同所得到服利': '討論議題二－五年級和九年級時代不同所得到服利',
  'A04-關廟麵加餛飩': '關廟麵加餛飩',
  'A05-聚餐前先拿乖乖照相，就是要他們乖乖': '聚餐前先拿乖乖照相，就是要他們乖乖',
  'A06-每人都一大碗關廟麵，不過他們辣椒放太多': '每人都一大碗關廟麵，不過他們辣椒放太多',
  'A07-看起來我的手藝不錯': '看起來我的手藝不錯',
  'A08-正芬姐送的制服，下次都要穿這件來': '正芬姐送的制服，下次都要穿這件來',
  'B05-1-裝忙的川哥': '裝忙的川哥',
  'B05-2-進電梯也要裝忙': '進電梯也要裝忙',
  'B05-3-284熱天進門先喝沙士': '284熱天進門先喝沙士',
  'B05-4-靜靜等待廣東粥完成': '靜靜等待廣東粥完成',
  'B05-5-廣東粥上桌': '廣東粥上桌',
  'B05-6-川董認真品嚐': '川董認真品嚐',
  'B05A-1-一早的廣東粥菜單': '一早的廣東粥菜單',
  'B05A-2-一早的廣東粥菜單': '一早的廣東粥菜單',
  'B05A-4-一早的廣東粥菜單': '一早的廣東粥菜單',
  'B05A-5-一早的廣東粥菜單': '一早的廣東粥菜單',
  'B05A-6-一早的廣東粥菜單': '一早的廣東粥菜單',
  'B05A-7-小胖是好市多限定版': '小胖是好市多限定版',
  'B05A-8-小胖是好市多限定版': '小胖是好市多限定版',
  'B05A-9-小胖是好市多限定版': '小胖是好市多限定版',
  'A01-川董來之前天空因為好天氣又下雨出現彩虹': '川董來之前天空因為好天氣又下雨出現彩虹',
  'A02-近距離再拍一張彩虹': '近距離再拍一張彩虹',
  'A03-今天招待不週，只有咖啡餅乾': '今天招待不週，只有咖啡餅乾',
  'A04-川董來二個多小時有一個半小時和客戶講話，並且還很不耐煩': '川董來二個多小時有一個半小時和客戶講話，並且還很不耐煩',
  'A05-三位老人家第二套制服，下次聚會發放': '三位老人家第二套制服，下次聚會發放',
  'A01-十月份聚會好市多餐點為主': '十月份聚會好市多餐點為主',
  'A02-非常認真的準備用餐，準備沾醬': '非常認真的準備用餐，準備沾醬',
  'A03-一起穿著正芬姐發的制服': '一起穿著正芬姐發的制服',
  'A04-米其林陳大廚特製玉米濃湯': '米其林陳大廚特製玉米濃湯',
  'A05-川董獨照': '川董獨照',
  'A06-小胖獨照': '小胖獨照',
  'A07-今天有陳大廚的特製玉米濃湯': '今天有陳大廚的特製玉米濃湯',
  'A08-看表情就知道非常的滿足': '看表情就知道非常的滿足',
  'A09-川董照慣例都要裝忙': '川董照慣例都要裝忙',
};
const photoPath = (activity, photo) => `assets/photos/${activity.folder}/${photo}.webp`;
const timelineList = document.querySelector('#timelineList');
const photoGrid = document.querySelector('#photoGrid');
const filterRow = document.querySelector('#filterRow');
const resultCount = document.querySelector('#resultCount');
const searchInput = document.querySelector('#searchInput');
const journalSection = document.querySelector('#journal');
const journalLink = document.querySelector('#journalLink');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightboxImage');
const lightboxCaption = document.querySelector('#lightboxCaption');
let activeFilter = '全部';
let selectedActivityId = null;

const dateValue = date => {
  const match = date.match(/(\d+) 年 (\d+) 月 (\d+) 日/);
  return match ? Number(`${match[1]}${match[2].padStart(2, '0')}${match[3].padStart(2, '0')}`) : -1;
};
const timelineActivities = [...activities].sort((a, b) => dateValue(b.date) - dateValue(a.date));
timelineList.innerHTML = timelineActivities.map(a => `<li class="timeline-item" data-activity-id="${a.id}" tabindex="0" role="button" aria-label="查看${a.date}的${a.short}照片"><span class="timeline-date">${a.date}</span><span class="timeline-title">${a.short}</span><span class="timeline-count">${a.photos.length} 張照片</span></li>`).join('');
const groups = ['全部', ...new Set(activities.map(a => a.group))];
filterRow.innerHTML = groups.map(g => `<button type="button" data-filter="${g}" aria-pressed="${g === activeFilter}">${g}</button>`).join('');

const journals = {
  a08: { date:'115 年 9 月 16 日', title:'退休後的快樂聚會，<br>四十三年的老友，簡單的幸福。', entries:[
    ['四十三年的情誼，退休生活的最佳解','從今年三月第一次聚會，到九月已經是第八次了。川董和小胖，每月一次，雷打不動。算算從民國72年上光武工專到現在，整整43年了。人生能有幾個43年，讓你還能和老同學坐下來閒聊？到了奔六的年紀，事業差不多到尾聲，孩子也長大獨立了。什麼都別管，好好過自己的生活，就是我的標準答案。'],
    ['阿默月餅搭好市多美食，愜意午後小憩','今天的聚會特別一點。小胖家樓下就是阿默蛋糕，他媽媽是房東，所以買了六盒月餅還打八八折。早上九點半出發去萬華創始店，載了小胖後回關渡好市多，買了綜合壽司、炸雞翅和小雞腿，再加上我煮的魚肉羹和紅豆湯，泡杯咖啡，午餐吃得開開心心。不到十二點小班就來了，聊到一點多小旺想睡覺，沙發一躺就是舒服的一小時，我也小睡半小時，就這樣開心結束一天。'],
    ['AI作伴的閒聊時光，千元內的退休小確幸','聊天沒特別主題，聊聊近況、談談政治。我跟他說我每天都在跟AI互動，語音輸入就像跟真人聊天，不會反抗、不會有情緒，還會乖乖遵守指令，我覺得這樣蠻好的，活在自己的世界裡也玩得蠻久。退休後就這樣，兩個老同學，不用擴展，簡單吃東西聊天，花不到一千塊，聚三個多鐘頭，是很不錯的享受。未來幾年能常常這樣聚會，也是人生不錯的感覺。']
  ]},
  a10: { date:'115 年 10 月 27 日', title:'2026 年第十次聚會，還要再約三次', entries:[
    ['第九次聚會，還要再約三次','2026 年 3 月起，川董和小胖到家裡來聚會，到現在已經九次了。所以我跟他們說，11、12 月這兩個月可以再來三次，湊滿 2026 年的次數。10 月 29 日那天，小胖在月底就已經在約第十次聚會了。其實次數無所謂，一直來常常來當然都可以。同學之間的相聚才是最重要的，聊聊過去，也聊聊未來的發展，我覺得都是很好的事情。'],
    ['好市多買壽司，回家煮玉米湯','這一次的聚會也很隨興。小胖 11 點到關渡捷運站，接著我們一起去好市多買了些東西。這次都買壽司，比較簡單，也不用再煮。回到家裡，我只煮了一鍋玉米湯。'],
    ['聊選舉、孩子、身體與未來','聚會過程當中，大家一樣聊聊現在最熱門的話題：熱門的2026年底選舉、孩子的問題、身體的問題，還有未來的問題。聊到最後得到一個結論：我們五年級生，其實已經享受到這個時代的紅利了。每次聚會大概都蠻開心的，十一月份就可以多聚幾次都無所謂。'],
    ['正芬姐送的衣服','今天還有一件有趣的事。上一次，正芬姐送了小胖和川哥兩件衣服，因為兩個人今天都穿來了，並且今天又發了兩件綠色的。其實還有藍色的，好像下一次可以再拿。'],
    ['快 60 歲了，更要珍惜','總之我覺得，不管是什麼情況，同學聚會都值得珍惜。因為大家都已經快 60 歲了，好友同學能夠相聚，才是最難能可貴的。']
  ]}
};
function renderJournal(activityId) {
  const journal = journals[activityId];
  if (!journal) { journalSection.hidden = true; return; }
  document.querySelector('#journalKicker').textContent = `本次聚會手記・${journal.date}`;
  document.querySelector('#journal-title').innerHTML = journal.title;
  document.querySelector('#journalEntries').innerHTML = journal.entries.map(([heading, body]) => `<section class="journal-entry"><h3>${heading}</h3><p>${body}</p></section>`).join('');
  journalSection.hidden = false;
}

function renderPhotos() {
  const term = searchInput.value.trim().toLowerCase();
  const items = activities.flatMap(a => a.photos.map((p, index) => ({a, p, index}))).filter(({a,p}) => {
    const matchesGroup = activeFilter === '全部' || a.group === activeFilter;
    const text = `${a.date} ${a.short} ${a.group} ${p} ${photoCaptions[p] || ''}`.toLowerCase();
    return matchesGroup && text.includes(term);
  });
  resultCount.textContent = `顯示 ${items.length} 張照片`;
  photoGrid.innerHTML = items.map(({a,p,index}) => { const caption = photoCaptions[p] || `第 ${index+1} 張照片`; return `<button class="photo-card" type="button" data-image="${photoPath(a,p)}" data-caption="${a.date}・${a.short}・${caption}"><figure><img loading="lazy" src="${photoPath(a,p)}" alt="${a.short}：${caption}"><figcaption><strong>${caption}</strong>${a.date}・${a.short}</figcaption></figure></button>`; }).join('');
  renderJournal(selectedActivityId);
}
function showActivity(activityId) {
  const activity = activities.find(a => a.id === activityId);
  if (!activity) return;
  selectedActivityId = activityId;
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
filterRow.addEventListener('click', e => { const button = e.target.closest('button'); if (!button) return; selectedActivityId = null; activeFilter = button.dataset.filter; filterRow.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button))); renderPhotos(); });
searchInput.addEventListener('input', () => { selectedActivityId = null; renderPhotos(); });
journalLink.addEventListener('click', e => { e.preventDefault(); const targetId = selectedActivityId || 'a08'; showActivity(targetId); journalSection.scrollIntoView({behavior:'smooth', block:'start'}); });
photoGrid.addEventListener('click', e => { const button = e.target.closest('.photo-card'); if (!button) return; lightboxImage.src = button.dataset.image; lightboxImage.alt = button.dataset.caption; lightboxCaption.textContent = button.dataset.caption; lightbox.showModal(); });
document.querySelector('#closeLightbox').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
const themes = ['album','magazine','museum','family'];
const themeLabels = { album:'懷舊相簿', magazine:'雜誌專題', museum:'數位博物館', family:'溫暖家庭' };
document.querySelector('#themeButton').addEventListener('click', () => { const body = document.body; const index = themes.indexOf(body.dataset.theme); body.dataset.theme = themes[(index + 1) % themes.length]; document.querySelector('#themeButton').textContent = `風格：${themeLabels[body.dataset.theme]}`; });
renderPhotos();


