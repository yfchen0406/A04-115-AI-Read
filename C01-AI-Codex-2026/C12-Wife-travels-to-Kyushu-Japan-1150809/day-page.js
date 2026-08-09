const day = Number(document.body.dataset.day);
const days = {
  1: { date: '11/14（六）', route: '桃園 → 鹿兒島 → 霧島 → 鹿兒島市', image: '03-day-1-kagoshima.webp', intro: '飛抵鹿兒島後，以酒造、神宮與夜間商店街展開九州旅程。', meal: '機上精緻餐食；午餐為豬排御膳或鹿兒島風味定食；晚餐自理。', timeline: [['05:25','抵達桃園機場','團體集合、報到、托運與安檢。'],['08:25','CI118 飛往鹿兒島','機上精緻餐食。'],['13:00','酒造見學與午餐','豬排御膳或鹿兒島風味定食。'],['15:30','霧島神宮','朱紅社殿、山林秋色與參拜時間。'],['18:30','天文館商店街','晚餐自理，可找黑豬料理或白熊刨冰。']] },
  2: { date: '11/15（日）', route: '指宿砂浴 → 長崎鼻 → 仙巖園 → 鹿兒島', image: '04-day-2-ibusuki.webp', intro: '從地熱砂浴、薩摩半島海岸到以櫻島為借景的日式庭園。', meal: '飯店早餐；指宿風味午餐；晚餐自理。', timeline: [['08:00','前往指宿','南下薩摩半島，車程較長。'],['09:30','指宿砂浴','砂浴本體約 10～20 分鐘，另預留更衣與淋浴。'],['11:15','長崎鼻與龍宮神社','海岸步道、燈塔與祈願景點。'],['12:15','指宿風味午餐','以旅行社實際餐廳為準。'],['14:45','仙巖園','欣賞錦江灣與櫻島借景。'],['16:30','AEON MALL','採買與自由逛街，晚餐自理。']] },
  3: { date: '11/16（一）', route: '鹿兒島 → 櫻島 → 都城 → 青島 → 宮崎', image: '05-day-3-sakurajima-miyazaki.webp', intro: '渡輪、活火山、黑醋、瀑布與青島海岸的一天。', meal: '飯店早餐；日式風味餐或鹿兒島黑醋特色定食；晚餐為飯店和洋自助餐或日式餐。', timeline: [['08:00','錦江灣渡輪與櫻島','海上航程約 15 分鐘，甲板風強。'],['09:15','湯之平展望所','遠望櫻島火山與錦江灣。'],['10:40','桷志田黑醋工廠','參觀醋甕、了解熟成與試飲。'],['14:30','關之尾瀑布','吊橋觀瀑，地面濕滑。'],['17:00','青島神社與鬼之洗衣板','海蝕岩層受潮汐影響。']] },
  4: { date: '11/17（二）', route: '宮崎 → 日向岬 → 高千穗峽 → 草千里 → 阿蘇', image: '06-day-4-takachiho-aso.webp', intro: '從太平洋海崖走入峽谷瀑布，傍晚抵達阿蘇火山草原。', meal: '飯店早餐；日式御膳或日式風味午餐；晚餐為飯店和洋料理或日式會席料理。', timeline: [['06:30','早餐、出發','景點分散，是全程最需要守時的一天。'],['09:20','日向岬馬背瞭望台、十字海','海崖景觀，風大時注意安全。'],['11:45','高千穗峽、真名井瀑布與午餐','以峽谷步道為主，遊船營運另依當日公告。'],['15:30','免稅店','依需求採買，保留集合時間。'],['17:20','草千里','阿蘇火山草原，傍晚降溫快。']] },
  5: { date: '11/18（三）', route: '阿蘇 → 菊池 → 柳川 → 鳥栖 → 福岡 → 桃園', image: '07-day-5-kikuchi-yanagawa.webp', intro: '以森林溪谷、水鄉遊船與最後購物，收束為福岡晚班機返台。', meal: '飯店早餐；特色鰻魚風味午餐；機上精緻餐食晚餐。', timeline: [['08:00','菊池溪谷','賞水色、森林與秋葉，穿防滑鞋。'],['11:30','柳川遊船','上下傳統木船時注意踏板。'],['12:30','鰻魚風味午餐','旅行最後一頓陸上團餐。'],['14:30','鳥栖 Premium Outlets','最後購物，留意行李重量與退稅時間。'],['17:30','福岡機場報到','預留托運、安檢與登機時間。'],['20:35','CI117 返回桃園','22:20 抵達台灣。']] }
};

const info = days[day];
const photoSlots = Array.from({ length: 6 }, (_, i) => {
  const filename = String(i + 1).padStart(2, '0');
  return `<figure class="photo-slot"><img src="photos/day-${day}/${filename}.webp" alt="第 ${day} 天旅遊照片 ${filename}" /><figcaption>放入旅遊照片<small>photos/day-${day}/${filename}.webp</small></figcaption></figure>`;
}).join('');
const timeline = info.timeline.map(([time, title, text]) => `<div><time>${time}</time><p><b>${title}</b>${text}</p></div>`).join('');
const previous = day > 1 ? `<a href="day-${day - 1}.html">← 第 ${day - 1} 天</a>` : '<a href="index.html">← 回五日總覽</a>';
const next = day < 5 ? `<a href="day-${day + 1}.html">第 ${day + 1} 天 →</a>` : '<a href="index.html">回五日總覽 →</a>';

document.querySelector('#main-content').innerHTML = `
  <section class="journal-banner"><div><p class="kicker">DAY ${day}｜${info.date}</p><h1>${info.route}</h1><p>${info.intro}</p></div><figure class="art-slot"><img src="images/${info.image}" alt="第 ${day} 天行程插圖" /></figure></section>
  <section class="journal-section journal-timeline"><h2>當日行程時間軸</h2><p class="journal-summary">${info.meal}</p><div class="timeline">${timeline}</div></section>
  <section class="journal-section" id="photos"><div class="photo-heading"><div><h2>今天的旅遊照片</h2><p>先保留六個位置；拍攝後只要把照片依序放入指定資料夾。</p></div></div><div class="photo-grid">${photoSlots}</div></section>
  <section class="journal-section journal-notes"><h2>今日回憶筆記</h2><p>可在日後加入當天最喜歡的景點、餐點、同行家人的一句話，或補上照片說明。</p></section>
  <nav class="day-nav" aria-label="切換旅遊日期">${previous}${next}</nav>`;

document.querySelectorAll('.photo-slot').forEach((slot) => {
  const image = slot.querySelector('img');
  const formats = ['webp', 'jpg', 'jpeg', 'png'];
  let formatIndex = 0;
  image.addEventListener('error', () => {
    formatIndex += 1;
    if (formatIndex < formats.length) {
      image.src = image.src.replace(/\.(webp|jpg|jpeg|png)$/i, `.${formats[formatIndex]}`);
    } else {
      slot.classList.add('is-placeholder');
    }
  });
  if (image.complete && !image.naturalWidth) image.dispatchEvent(new Event('error'));
});
