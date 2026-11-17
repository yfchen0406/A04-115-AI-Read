const day = Number(document.body.dataset.day);
const days = {
  1: {
    date: "11/14（六）",
    route: "桃園 → 鹿兒島 → 霧島 → 鹿兒島市",
    image: "03-day-1-kagoshima.webp",
    intro: "飛抵鹿兒島後，以酒造、神宮與夜間商店街展開九州旅程。",
    meal: "機上精緻餐食；午餐為豬排御膳或鹿兒島風味定食；晚餐自理。",
    memoryNote:
      "一大早六點半集合，所以四點半就出門。老婆出國已經是2018年的事，恰巧也和這次一樣是九州；不過這次是從南九州開始的行程，一路往上。半小時的車程，很快就抵達人群很多的桃園第二航廈。完成今天的任務後，也預祝他們母子旅途順利！", // 在這裡填入第一天回憶筆記
    timeline: [
      ["05:25", "抵達桃園機場", "團體集合、報到、托運與安檢。"],
      ["08:25", "CI118 飛往鹿兒島", "機上精緻餐食。"],
      ["13:00", "酒造見學與午餐", "豬排御膳或鹿兒島風味定食。"],
      ["15:30", "霧島神宮", "朱紅社殿、山林秋色與參拜時間。"],
      ["18:30", "天文館商店街", "晚餐自理，可找黑豬料理或白熊刨冰。"],
    ],
  },
  2: {
    date: "11/15（日）",
    route: "指宿砂浴 → 長崎鼻 → 仙巖園 → 鹿兒島",
    image: "04-day-2-ibusuki.webp",
    intro: "從地熱砂浴、薩摩半島海岸到以櫻島為借景的日式庭園。",
    meal: "飯店早餐；指宿風味午餐；晚餐自理。",
    memoryNote:
      "今天從清晨一路玩到最南端的龍宮神社，傍晚再晃到永旺購物中心（AEON MALL）逛逛，一整天走下來，從照片就看得出來，這一帶是日本比較鄉下的地方。不過跟團旅遊要的就是這種味道：避開人擠人、人看人的熱門景點，慢慢走、慢慢看，享受悠閒自在的假期。<br><br>所以鄉下地方一點都不差，反而讓心情特別放鬆。交通、餐食、住宿都不用操心，只要帶著輕鬆的心情跟著走就好。再加上遠離都市的純樸日式風情，難怪大家對日本總是一來再來。", // 在這裡填入第二天回憶筆記
    timeline: [
      ["08:00", "前往指宿", "南下薩摩半島，車程較長。"],
      ["09:30", "指宿砂浴", "砂浴本體約 10～20 分鐘，另預留更衣與淋浴。"],
      ["11:15", "長崎鼻與龍宮神社", "海岸步道、燈塔與祈願景點。"],
      ["12:15", "指宿風味午餐", "以旅行社實際餐廳為準。"],
      ["14:45", "仙巖園", "欣賞錦江灣與櫻島借景。"],
      ["16:30", "AEON MALL", "採買與自由逛街，晚餐自理。"],
    ],
  },
  3: {
    date: "11/16（一）",
    route: "鹿兒島 → 櫻島 → 都城 → 青島 → 宮崎",
    image: "05-day-3-sakurajima-miyazaki.webp",
    intro: "渡輪、活火山、黑醋、瀑布與青島海岸的一天。",
    meal: "飯店早餐；日式風味餐或鹿兒島黑醋特色定食；晚餐為飯店和洋自助餐或日式餐。",
    memoryNote:
      "第三天的行程，起床搭渡輪到櫻島，櫻島上有國立公園，有展望所；關之尾瀑布，順序我不清楚，反正離開櫻島到鹿兒島吃黑醋特色定食，下午還有往宮崎的行程", // 在這裡填入第三天回憶筆記
    timeline: [
      ["08:00", "錦江灣渡輪與櫻島", "海上航程約 15 分鐘，甲板風強。"],
      ["09:15", "湯之平展望所", "遠望櫻島火山與錦江灣。"],
      ["10:40", "桷志田黑醋工廠", "參觀醋甕、了解熟成與試飲。"],
      ["14:30", "關之尾瀑布", "吊橋觀瀑，地面濕滑。"],
      ["17:00", "青島神社與鬼之洗衣板", "海蝕岩層受潮汐影響。"],
    ],
  },
  4: {
    date: "11/17（二）",
    route: "宮崎 → 日向岬 → 高千穗峽 → 草千里 → 阿蘇",
    image: "06-day-4-takachiho-aso.webp",
    intro: "從太平洋海崖走入峽谷瀑布，傍晚抵達阿蘇火山草原。",
    meal: "飯店早餐；日式御膳或日式風味午餐；晚餐為飯店和洋料理或日式會席料理。",
    memoryNote:
      "第四天，天氣有點小雨，不過我到覺得沒有多大差別，旅遊天氣都無所謂，心情比較重要,太陽有太陽的好，下雨有下雨的美，我看地圖應該是宮崎一路往上，先到日向岬馬背瞭望台，再往到高千穗和阿蘇，後面二個地方2018年都來過，老婆和詣超要看看有沒有哪些不一樣!", // 在這裡填入第四天回憶筆記
    timeline: [
      ["06:30", "早餐、出發", "景點分散，是全程最需要守時的一天。"],
      ["09:20", "日向岬馬背瞭望台、十字海", "海崖景觀，風大時注意安全。"],
      [
        "11:45",
        "高千穗峽、真名井瀑布與午餐",
        "以峽谷步道為主，遊船營運另依當日公告。",
      ],
      ["15:30", "免稅店", "依需求採買，保留集合時間。"],
      ["17:20", "草千里", "阿蘇火山草原，傍晚降溫快。"],
    ],
  },
  5: {
    date: "11/18（三）",
    route: "阿蘇 → 菊池 → 柳川 → 鳥栖 → 福岡 → 桃園",
    image: "07-day-5-kikuchi-yanagawa.webp",
    intro: "以森林溪谷、水鄉遊船與最後購物，收束為福岡晚班機返台。",
    meal: "飯店早餐；特色鰻魚風味午餐；機上精緻餐食晚餐。",
    memoryNote: "", // 在這裡填入第五天回憶筆記
    timeline: [
      ["08:00", "菊池溪谷", "賞水色、森林與秋葉，穿防滑鞋。"],
      ["11:30", "柳川遊船", "上下傳統木船時注意踏板。"],
      ["12:30", "鰻魚風味午餐", "旅行最後一頓陸上團餐。"],
      ["14:30", "鳥栖 Premium Outlets", "最後購物，留意行李重量與退稅時間。"],
      ["17:30", "福岡機場報到", "預留托運、安檢與登機時間。"],
      ["20:35", "CI117 返回桃園", "22:20 抵達台灣。"],
    ],
  },
};

const info = days[day];
const photoTabName = day === 1
  ? "01-出發和機場"
  : `${["第一", "第二", "第三", "第四", "第五"][day - 1]}天旅遊照片`;
const dayOnePhotoFiles = [
  "01-陽明峰匯一早四點二十分出發.webp",
  "02-出發前爸爸亂入-AI合成.webp",
  "03-機場合照.webp",
  "04-八點二十五華航飛鹿兒島班機.webp",
  "05-帥帥的詣超.webp",
  "06-美美的媽媽.webp",
  "07-一早的滿滿事都是人的機場.webp",
  "08-老婆八年沒出國-發現機場變漂亮.webp",
  "09-免稅店逛逛.webp",
  "10-準備登機-媽媽被兒子出賣.webp",
  "11-媽媽也出賣兒子-昨晚睡不多累了.webp",
];
const dayOneAlbums = [
  { name: "01-出發和機場", folder: "photos/day-1/01-出發和機場", files: dayOnePhotoFiles },
  {
    name: "02-抵達鹿兒島",
    folder: "photos/day-1/02-抵達鹿兒島",
    files: [
      "01-抵達鹿兒島機場.webp",
      "02-一下飛機先到霧島.webp",
      "03-中午鹿兒島風味定食.webp",
      "04-亂入午餐-AI合成所有沒有餐點.webp",
      "05-五餐後採買顯逛.webp",
      "06-AI合成-我也在霧島.webp",
      "07-AI合成-亂入採買.webp",
    ],
  },
  {
    name: "03-霧島神宮",
    folder: "photos/day-1/03-霧島神宮",
    files: [
      "01-霧島神宮合照.webp",
      "02-詣超的御手水.webp",
      "03-老婆也要洗手不過感覺不認真.webp",
      "04-霧島神宮合照.webp",
      "05-霧島神宮合照.webp",
    ],
  },
  {
    name: "04-晚餐及購物",
    folder: "photos/day-1/04-晚餐及購物",
    files: [
      "01-衷心感謝郭哥-感謝有這樣的主管-同事的情誼大於金錢.webp",
      "02-第一天晚餐自理-看行程應該天文館商店街.webp",
      "03-牛肉排吧看起來好好吃.webp",
      "04-有會席料理的樣子.webp",
      "05-第一天採買-藥妝和零食.webp",
    ],
  },
];
const dayTwoAlbums = [
  {
    name: "01-飯店早餐",
    folder: "photos/day-2/01-飯店早餐",
    files: [
      "01-飯店早餐-視覺上就好看.webp",
      "02-這個擺盤差一點.webp",
    ],
  },
  {
    name: "02-龍宮神社",
    folder: "photos/day-2/02-龍宮神社",
    files: [
      "01-龍宮神社~團體照~看得出來大夥得好心得.webp",
      "02-團體照~換個方向~一樣開心.webp",
      "03-龍空神社浦島太郎故事寓意.webp",
      "04-龍空神社浦島太郎故事寓意~3D卡通版.webp",
      "05-龍空神社浦島太郎故事~漫畫版.webp",
      "06-龍空神社圍著浦島太郎的許願.mp4",
      "07-龍宮神社前鳥居.webp",
      "08-鹿兒島縣指宿市的長崎鼻燈塔-2018被選為戀愛燈塔.webp",
      "09-好好一個愛心燈塔被你們拍得很搞笑.webp",
      "11-搞笑母子-風大雨大.webp",
      "12-搞笑母子-有點正常了.webp",
      "13-詣超難得獨照.webp",
      "14-詣超難得獨照-背影-媽媽亂拍.webp",
      "15-詣超難得獨照-太遠.webp",
      "16-詣超獨照-終於正常一點.webp",
      "17-浦島太郎救的烏龜.webp",
    ],
  },
  {
    name: "03-鹿兒島仙巖園",
    folder: "photos/day-2/03-鹿兒島仙巖園",
    files: [
      "01-仙巖園-這張還不錯.webp",
      "02-大夥合照.webp",
      "03-背後櫻島-明天會去.webp",
      "04-指宿沙浴.webp",
    ],
  },
];
const dayThreeAlbums = [
  {
    name: "01-飯店早餐",
    folder: "photos/day-3/01-飯店早餐",
    files: ["00-昨晚採購戰利品.webp","01-飯店海景套房窗外風景.webp","02-房間寬敞.webp","03-早上起床有點亂.webp","04-悠閒美麗的海邊.webp","05-清晨的海邊.webp","06-清晨的海邊-櫻島.webp","07-清晨的海邊-碼頭.webp","08-清晨的海邊-對面應該是櫻島.webp","09-清晨的海邊.webp","10-天亮了.webp","11-看起來像碼頭.webp","12-剛睡醒的詣超-好像在罰站.webp","13-ART 鹿兒島酒店大廳.webp","14-ART 鹿兒島酒店早餐地點.webp","15-早餐配海景-悠閒暇意.webp","16-飯店早餐-熱食區.webp","17-飯店早餐-麵包區.webp","18-飯店早餐.webp","19-飯店早餐.webp","20-詣超看起來在吃冰淇淋.webp","21-這個應該是飲料類.webp","22-飯店早餐.webp","23-悠閒早上麵包咖啡-用餐玩準備出發前往櫻島.webp"],
  },
  {
    name: "02-渡輪",
    folder: "photos/day-3/02-渡輪",
    files: ["01-錦江灣渡輪.webp","02-錦江灣渡輪-鹿兒島出發.webp","03-另一個方向看渡輪.webp","04-錦江灣渡輪.webp","05-渡輪-車子也可以停進去-長崎好像也坐過.webp","06-渡輪上的詣超.webp"],
  },
  {
    name: "03-櫻島火山",
    folder: "photos/day-3/03-櫻島火山",
    files: ["01-霧島錦江灣國立公園(我猜的)-1.webp","02-霧島錦江灣國立公園-和團員合照.webp","03-霧島錦江灣國立公園-和團員合照.webp","04-霧島-有存熔岩展望所-(看牌子上的名字).webp","05-霧島-有存熔岩展望所-母子合照.webp","06-櫻島湯之平展望所.webp","07-櫻島湯之平展望所-5.webp","08-關之尾瀑布-1.webp","09-關之尾瀑布-2.webp","10-關之尾瀑布.webp","11-關之尾瀑布.webp","12-櫻島紅葉-1.webp","13-櫻島紅葉.webp","14-詣超獨照(不知道哪裡).webp","15-詣超獨照-後面是櫻島火山.webp","16-午餐-鹿兒島黑醋特色定食-團體旅遊的好處.webp","17-鹿兒島黑醋特色定食-豐盛.webp","18-鹿兒島黑醋特色定食-3.webp","19-鹿兒島黑醋特色定食-黑醋-當地名產.webp"],
  },
  {
    name: "04-宮崎青島神社",
    folder: "photos/day-3/04-宮崎青島神社",
    files: ["01-要慢慢走進去海邊.webp","02-青島鬼洗衣岩-反正怎麼稱呼都可以.webp","03-青島鬼洗衣岩-宮崎海邊.webp","04-鬼之洗衣板-大夥合照-1.webp","05-鬼之洗衣板-大夥合照-2.webp","06-鬼之洗衣板-母子合照-1.webp","07-鬼之洗衣板-母子合照-2.webp","08-鬼之洗衣板-正常版-1.webp","09-鬼之洗衣板-看海的年輕人.webp","10-青島神社-從外面走蠻進來的有一段距離.webp","11-晚上用餐-日式涮涮鍋.webp","12-一餐六百還吃到飽.webp","13-補一張上午照片-櫻島展望台.webp"],
  },
  {
    name: "05-關之尾瀑布",
    folder: "photos/day-3/05-關之尾瀑布",
    files: ["01-關之尾瀑布-合照-1.webp","02-關之尾瀑布-合照-2.webp","03-關之尾瀑布-合照-3.webp","04-關之尾瀑布-母子合照.webp","05-有村溶岩展望所-1.webp","06-有村溶岩展望所-2.webp","07-不知名平台-也有google不知道的地方.webp","08-不知名平台-也有google不知道的地方.webp","09-不知名平台-也有google不知道的地方.webp","10-年輕人玩的梗-一堆人老人家也玩的開心.mp4","226068_0.webp"],
  },
];
const dayFourAlbums = [
  {
    name: "01-起床",
    folder: "photos/day-4/01-起床",
    files: ["01-飯店起床-感覺沒睡飽.webp","02-飯店起床-感覺沒睡飽.webp"],
  },
  {
    name: "02-日向岬馬背瞭望台",
    folder: "photos/day-4/02-日向岬馬背瞭望台",
    files: ["01-日向岬馬背-九州西側最靠海邊的地方.webp","02-日向岬馬背-九州西側最靠海邊的地方.webp","03-日向岬馬背-風景.webp","04-日向岬-不管風雨多大都要拍.webp","05-日向岬-下雨風大.webp","06-日向岬-下雨風大-再一張.webp","07-日向岬-換成直拍一樣風大雨大.webp","08-來都來了-一定要拍一張.webp","09-換個位置再拍-這次不拿傘.webp","10-詣超帥樣-不拿雨傘.webp","11-母子合照.webp","13-AI協助-立刻變成好天氣-爸爸也加入.webp","14-AI協助-立刻變成好天氣-總是要加入一下.webp","15-帥一下子而已.webp","16-現在開始都拿雨傘.webp","17-現在開始都拿雨傘.webp","18-這是啥，回來告訴我.webp","19-結束這個景點，要去搭車了.webp"],
  },
  {
    name: "03-高千穗",
    folder: "photos/day-4/03-高千穗",
    files: ["01-高千穗-2018自由行來過.webp","02-高千穗-今天一樣沒有划船.webp","03-高千穗-巨石.webp","04-高千穗-雙橋-上次來有拍.webp","05-高千穗-雙橋.webp","06-高千穗-午餐.webp","07-高千穗-團體行就是方便.webp","08-高千穗-流水麵-應該不是.webp","09-高千穗地名打卡-這一張有到此一遊的感覺.webp"],
  },
  {
    name: "04-阿蘇草千里",
    folder: "photos/day-4/04-阿蘇草千里",
    files: ["01-阿蘇草千里.webp","02-阿蘇草千里-冬季就是雪千里.webp","03-阿蘇草千里-很多馬.webp","04-阿蘇草千里-應該要有牛.webp","05-阿蘇草千里.webp","06-阿蘇草千里.webp","07-詣超-應該會冷一點才對.webp","08-詣超-我沒說錯，外套拉鍊都拉上了.webp","09-往飯店路上看到阿蘇的米塚.webp","10-米塚.webp"],
  },
  {
    name: "05-龜之井阿蘇公園度假村",
    folder: "photos/day-4/05-龜之井阿蘇公園度假村",
    files: ["01-今晚住宿飯店-05-龜之井阿蘇公園度假村.webp","02-和洋式套房.webp","03-房間內點心-九州代表玩偶-熊本熊.webp","04-房間內咖啡膠囊-沒喝完也不用帶回來.webp","05-老婆應該換好和服休息.webp","06-房間看起來很大間.webp","07-詣超累了吧-坐著休息.webp","08-換個角度拍.webp","09-雙人床.webp","10-熊本熊太可愛-亂入一下-AI內容.webp","11-房間也要來一下-AI內容.webp","12-詣超穿和服，應該是用餐後回房間才穿的.webp","13-飯店把費-湯品吧.webp","14-飯店把費.webp","15-飯店把費.webp","16-飯店把費-應該是熱食區.webp","17-飯店把費-看不出來.webp","18-飯店把費-現煎牛排-老婆說很軟.webp","19-飯店把費.webp","20-飯店把費-整體空間蠻大的.webp","21-飯店把費-座位安排寬敞.webp","22-老婆今晚餐點.webp","23-九州代表人物-熊本熊.webp","23-飯店熊本熊合照.webp","24-到處都是熊本熊-從行銷角度來看是成功-反觀台灣有啥熊.webp","25-熊本熊-我猜是影片.webp","26-熊本熊-多猜一項動畫.webp","27-熊本熊-動畫.webp","28-熊本熊-動畫.webp","29-熊本熊-也有可能AI動畫.webp","30-熊本熊和熱氣球-佐賀有熱氣球.webp","31-熊本熊-動畫.webp"],
  },
];
const createPhotoSlots = (folder, altPrefix, placeholderText) => Array.from({ length: 6 }, (_, i) => {
  const filename = String(i + 1).padStart(2, "0");
  const imagePath = `${folder}/${filename}.webp`;
  const caption = placeholderText
    ? `<figcaption>${placeholderText}<small>${imagePath}</small></figcaption>`
    : "";
  return `<figure class="photo-slot"><img src="${imagePath}" alt="${altPrefix} ${filename}" />${caption}</figure>`;
}).join("");
const createMemoryCards = (folder, filenames, albumName = photoTabName) => {
  return [...filenames].sort((a, b) => {
    const aNumber = Number(a.match(/^(\d+)-/)?.[1] ?? Number.MAX_SAFE_INTEGER);
    const bNumber = Number(b.match(/^(\d+)-/)?.[1] ?? Number.MAX_SAFE_INTEGER);
    return aNumber - bNumber || a.localeCompare(b, "zh-Hant");
  }).map((filename) => {
    const stem = filename.replace(/\.[^.]+$/, "");
    const match = stem.match(/^(\d+)-(.+)$/);
    const photoNumber = match?.[1] ?? "補充";
    const caption = match?.[2] ?? stem;
    const aiBadge = /AI/i.test(caption)
      ? '<span class="photo-ai-badge">AI協作</span>'
      : "";
    const imagePath = `${folder}/${filename}`;
    if (/\.mp4$/i.test(filename)) {
      const posterPath = imagePath.replace(/\.mp4$/i, ".webp");
      return `<figure class="photo-memory-card photo-video-card"><video class="photo-memory-video" controls playsinline preload="metadata" poster="${posterPath}" aria-label="${albumName}：${caption}"><source src="${imagePath}" type="video/mp4">瀏覽器不支援影片播放。</video><figcaption><span class="photo-caption-index">${photoNumber}</span><span class="photo-caption-title">${caption}</span></figcaption></figure>`;
    }
    return `<figure class="photo-slot photo-memory-card"><div class="photo-memory-image"><img src="${imagePath}" alt="${albumName}：${caption}" loading="lazy" />${aiBadge}</div><figcaption><span class="photo-caption-index">${photoNumber}</span><span class="photo-caption-title">${caption}</span></figcaption></figure>`;
  }).join("");
};
const aiPhotoSlots = createPhotoSlots(
  `photos/day-${day}`,
  `第 ${day} 天 AI 協作照片`,
  "",
);
const currentDayAlbums = day === 1 ? dayOneAlbums : day === 2 ? dayTwoAlbums : day === 3 ? dayThreeAlbums : day === 4 ? dayFourAlbums : null;
const travelPhotoSlots = currentDayAlbums
  ? currentDayAlbums.map((album) => ({
    name: album.name,
    panelId: `panel-album-${album.name.slice(0, 2)}`,
    cards: createMemoryCards(album.folder, album.files, album.name),
  }))
  : createPhotoSlots(
    `photos/day-${day}/travel-photos`,
    photoTabName,
    "放入當天旅遊照片",
  );
const timeline = info.timeline
  .map(
    ([time, title, text]) =>
      `<div><time>${time}</time><p><b>${title}</b>${text}</p></div>`,
  )
  .join("");
const previous =
  day > 1
    ? `<a href="day-${day - 1}.html">← 第 ${day - 1} 天</a>`
    : '<a href="C12-Wife-travels-to-Kyushu-Japan-1150809.html">← 回五日總覽</a>';
const next =
  day < 5
    ? `<a href="day-${day + 1}.html">第 ${day + 1} 天 →</a>`
    : '<a href="C12-Wife-travels-to-Kyushu-Japan-1150809.html">回五日總覽 →</a>';
const photoAlbumTabs = currentDayAlbums
  ? travelPhotoSlots.map((album) => `<button class="photo-tab" id="tab-album-${album.name.slice(0, 2)}" type="button" role="tab" aria-selected="false" aria-controls="${album.panelId}" tabindex="-1">${album.name}</button>`).join("")
  : `<button class="photo-tab" id="tab-travel-photos" type="button" role="tab" aria-selected="false" aria-controls="panel-travel-photos" tabindex="-1">${photoTabName}</button>`;
const photoAlbumPanels = currentDayAlbums
  ? travelPhotoSlots.map((album) => `<div class="photo-panel" id="${album.panelId}" role="tabpanel" aria-labelledby="tab-album-${album.name.slice(0, 2)}" tabindex="0" hidden><div class="photo-grid">${album.cards}</div></div>`).join("")
  : `<div class="photo-panel" id="panel-travel-photos" role="tabpanel" aria-labelledby="tab-travel-photos" tabindex="0" hidden><div class="photo-grid">${travelPhotoSlots}</div></div>`;

document.querySelector("#main-content").innerHTML = `
  <section class="journal-banner"><div><p class="kicker">DAY ${day}｜${info.date}</p><h1>${info.route}</h1><p>${info.intro}</p></div><figure class="art-slot"><img src="images/${info.image}" alt="第 ${day} 天行程插圖" /></figure></section>
  <section class="journal-section journal-timeline"><h2>當日行程時間軸</h2><p class="journal-summary">${info.meal}</p><div class="timeline">${timeline}</div></section>
  <section class="journal-section" id="photos"><div class="photo-heading"><div><h2>旅遊照片</h2></div></div>
    <div class="photo-tabs" role="tablist" aria-label="第 ${day} 天旅遊照片分類">
      <button class="photo-tab active" id="tab-ai-photos" type="button" role="tab" aria-selected="true" aria-controls="panel-ai-photos" tabindex="0">AI協作</button>
      ${photoAlbumTabs}
    </div>
    <div class="photo-panel active" id="panel-ai-photos" role="tabpanel" aria-labelledby="tab-ai-photos" tabindex="0"><div class="photo-grid">${aiPhotoSlots}</div></div>
    ${photoAlbumPanels}
  </section>
  <section class="journal-section journal-notes"><h2>今日回憶筆記</h2><p>${info.memoryNote || "可在日後加入當天最喜歡的景點、餐點、同行家人的一句話，或補上照片說明。"}</p></section>
  <nav class="day-nav" aria-label="切換旅遊日期">${previous}${next}</nav>`;

const photoTabs = [...document.querySelectorAll(".photo-tab")];
const photoPanels = [...document.querySelectorAll(".photo-panel")];
photoTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("aria-controls");
    photoTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    photoPanels.forEach((panel) => { panel.hidden = panel.id !== target; });
  });

  tab.addEventListener("keydown", (event) => {
    const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? photoTabs.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + photoTabs.length) % photoTabs.length;
    photoTabs[nextIndex].focus();
    photoTabs[nextIndex].click();
  });
});

document.querySelectorAll(".photo-slot").forEach((slot) => {
  const image = slot.querySelector("img");
  const formats = ["webp", "jpg", "jpeg", "png"];
  let formatIndex = 0;
  image.addEventListener("error", () => {
    formatIndex += 1;
    if (formatIndex < formats.length) {
      image.src = image.src.replace(
        /\.(webp|jpg|jpeg|png)$/i,
        `.${formats[formatIndex]}`,
      );
    } else {
      slot.classList.add("is-placeholder");
    }
  });
  if (image.complete && !image.naturalWidth)
    image.dispatchEvent(new Event("error"));
});
