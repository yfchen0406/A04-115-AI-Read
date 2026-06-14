// 日本關西六日旅行程資料
// 每張照片可獨立設定 caption 說明（燈箱左上角會顯示）
const tripData = [
  {
    day: 1,
    title: "星宇敞航 · 大阪初訪 / 燒肉與拉麺的餐宴",
    subtitle: "力丸燒肉與神座拉麵的雙重饗宴",
    summary: "逛當地超市與菜市場，深夜大阪風情",
    cardImg: "./images/Day1-S/JAPDAY1-01.webp",
    // 行程日誌點擊卡片主圖時顯示的圖庫（與回憶寫真館不同）
    galleryImgs: [
      { src: "./images/Day1-S/JAPDAY0-01.webp", caption: "出發前爸爸胡亂規劃" },
      { src: "./images/Day1-S/JAPDAY0-02.webp", caption: "出發前爸爸胡亂規劃" },
      { src: "./images/Day1-S/JAPDAY1-01.webp", caption: "Q版紀錄" },
      {
        src: "./images/Day1-S/JAPDAY1-02.webp",
        caption: "簡潔清單式，無具體時間點",
      },
      {
        src: "./images/Day1-S/JAPDAY1-03.webp",
        caption: "散亂筆記/草稿風格，含個人化標注",
      },
      {
        src: "./images/Day1-S/JAPDAY1-04X.webp",
        caption: "結構化編號清單~藥盒錯了",
      },
      {
        src: "./images/Day1-S/JAPDAY1-04.webp",
        caption: "結構化編號清單-藥盒太大",
      },
      { src: "./images/Day1-S/JAPDAY1-05.webp", caption: "時間軸/地圖式" },
    ],
    // 回憶寫真館專用照片牆（可與 galleryImgs 不同）
    memoryWallImgs: [
      { src: "./images/Day1-S/JAPDAY0-01.webp", caption: "出發前爸爸胡亂規劃" },
      { src: "./images/Day1-S/JAPDAY0-02.webp", caption: "出發前爸爸胡亂規劃" },
      { src: "./images/Day1-S/JAPDAY1-01.webp", caption: "Q版紀錄" },
      {
        src: "./images/Day1-S/JAPDAY1-02.webp",
        caption: "簡潔清單式，無具體時間點",
      },
      {
        src: "./images/Day1-S/JAPDAY1-03.webp",
        caption: "散亂筆記/草稿風格，含個人化標注",
      },
      {
        src: "./images/Day1-S/JAPDAY1-04X.webp",
        caption: "結構化編號清單~藥盒錯了",
      },
      {
        src: "./images/Day1-S/JAPDAY1-04.webp",
        caption: "結構化編號清單-藥盒太大",
      },
      { src: "./images/Day1-S/JAPDAY1-05.webp", caption: "時間軸/地圖式" },
      {
        src: "./images/LINE/GPT0010-1.webp",
        caption: "第一天~出發到大阪旅遊貼圖",
      },
      { src: "./images/Day1-M/day1-01.webp", caption: "家中五點出發" },
      { src: "./images/Day1-M/day1-02.webp", caption: "家中五點出發" },
      { src: "./images/Day1-M/day1-02A.webp", caption: "星與飛航軌跡" },
      { src: "./images/Day1-M/day1-03.webp", caption: "力丸燒肉" },
      { src: "./images/Day1-M/day1-04.webp", caption: "藥妝店~合力他命" },
      { src: "./images/Day1-M/day1-05.webp", caption: "合力他命二盒裝" },
      {
        src: "./images/Day1-M/day1-06.webp",
        caption: "Airbnb住宿地方~心齋橋五號店",
      },
      { src: "./images/Day1-M/day1-07.webp", caption: "神座拉麵" },
      {
        src: "./images/Day1-M/day1-07A.webp",
        caption: "大阪道頓堀的經典江崎固力果（Glico）跑跑人看板",
      },
      { src: "./images/Day1-M/day1-08.webp", caption: "神座拉麵~google" },
      { src: "./images/Day1-M/day1-09.webp", caption: "18年前我也來過道頓堀" },
      { src: "./images/Day1-M/day1-10.webp", caption: "18年前和大螃蟹合照" },
      { src: "./images/Day1-M/day1-11.webp", caption: "18年前照片" },
      { src: "./images/Day1-M/day1-11A.webp", caption: "復刻舊照片" },
      { src: "./images/Day1-M/day1-11B.webp", caption: "復刻舊照片" },
      {
        src: "./images/Day1-M/day1-12.webp",
        caption: "18年前照片~剛到關西機場",
      },
      { src: "./images/Day1-M/day1-13.webp", caption: "18年前照片" },
    ],
  },
  {
    day: 2,
    title: "黑門市場・牛舌名店與神社",
    subtitle: "大阪廚房大冒險",
    summary: "黑門市場新鮮海鮮，牛舌の檸檬炭火燒，大島神社透明御守祈願。",
    cardImg: "./images/Day2-S/JAPDAY2-2-Q.webp",
    galleryImgs: [
      {
        src: "./images/Day2-S/JAPDAY2-1-全紀錄.webp",
        caption: "寫實全紀錄",
      },
      {
        src: "./images/Day2-S/JAPDAY2-2-Q.webp",
        caption: "Q版可愛風",
      },
      {
        src: "./images/Day2-S/JAPDAY2-3-雜誌風.webp",
        caption: "雜誌旅行風",
      },
      {
        src: "./images/Day2-S/JAPDAY2-4-地圖風.webp",
        caption: "地圖路線風",
      },
      {
        src: "./images/Day2-S/JAPDAY2-5-日記手帳風.webp",
        caption: "日記手帳風",
      },

      {
        src: "./images/Day2-S/JAPDAY2-6-社群 Instagram風.webp",
        caption: "社群 Instagram風",
      },
      {
        src: "./images/Day2-S/JAPDAY2-7-視覺時間軸風.webp",
        caption: "視覺時間軸風",
      },
      {
        src: "./images/Day2-S/JAPDAY2-8-照片拼圖.webp",
        caption: "照片拼圖風",
      },
      {
        src: "./images/Day2-S/JAPDAY2-9-影片腳本.webp",
        caption: "影片腳本風",
      },
    ],
    memoryWallImgs: [
      {
        src: "./images/Day2-S/JAPDAY2-1-全紀錄.webp",
        caption: "寫實全紀錄",
      },
      {
        src: "./images/Day2-S/JAPDAY2-2-Q.webp",
        caption: "Q版可愛風",
      },
      {
        src: "./images/Day2-S/JAPDAY2-3-雜誌風.webp",
        caption: "雜誌旅行風",
      },
      {
        src: "./images/Day2-S/JAPDAY2-4-地圖風.webp",
        caption: "地圖路線風",
      },
      {
        src: "./images/Day2-S/JAPDAY2-5-日記手帳風.webp",
        caption: "日記手帳風",
      },

      {
        src: "./images/Day2-S/JAPDAY2-6-社群 Instagram風.webp",
        caption: "社群 Instagram風",
      },
      {
        src: "./images/Day2-S/JAPDAY2-7-視覺時間軸風.webp",
        caption: "視覺時間軸風",
      },
      {
        src: "./images/Day2-S/JAPDAY2-8-照片拼圖.webp",
        caption: "照片拼圖風",
      },
      {
        src: "./images/Day2-S/JAPDAY2-9-影片腳本.webp",
        caption: "影片腳本風",
      },
      {
        src: "./images/LINE/GPT0010-2.webp",
        caption: "第二天~大阪地區旅遊貼圖",
      },
      { src: "./images/Day2-M/Day2-01.webp", caption: "小七早餐" },
      { src: "./images/Day2-M/Day2-02.webp", caption: "小七早餐~內餡用" },
      { src: "./images/Day2-M/Day2-03.webp", caption: "小七早餐~合起來吃" },
      { src: "./images/Day2-M/Day2-04.webp", caption: "黑門市場" },
      { src: "./images/Day2-M/Day2-05.webp", caption: "黑門市場~觀光客很多" },
      { src: "./images/Day2-M/Day2-06.webp", caption: "牛舌の檸檬炭火燒" },
      { src: "./images/Day2-M/Day2-07.webp", caption: "牛舌の檸檬炭火燒" },
      { src: "./images/Day2-M/Day2-08.webp", caption: "大鳥神社透明御守" },
      {
        src: "./images/Day2-M/Day2-09.webp",
        caption: "路邊大阪燒~在大阪吃大阪燒(前後都對上了)",
      },
      { src: "./images/Day2-M/Day2-10.webp", caption: "PARCO買的拖鞋" },
    ],
  },
  {
    day: 3,
    title: "神戶燒肉 · 北野異人館星巴克、魚鱗之家 / 洋風浪漫",
    subtitle: "神戶WASSIA燒肉，異人館與星巴克巡禮",
    summary: "限定「神戶原味」餅乾棒，懷舊洋館漫步",
    cardImg: "./images/Day3-S/JAPDAY3-05.webp",
    galleryImgs: [
      { src: "./images/Day3-S/JAPDAY3-01.webp", caption: "事先預告~Q版" },
      {
        src: "./images/Day3-S/JAPDAY3-02.webp",
        caption: "事先預告~雜誌旅行版",
      },
      {
        src: "./images/Day3-S/JAPDAY3-03.webp",
        caption: "事先預告~地圖路線版",
      },
      {
        src: "./images/Day3-S/JAPDAY3-04.webp",
        caption: "事先預告~地圖路線版~換件衣服",
      },
      {
        src: "./images/Day3-S/JAPDAY3-05.webp",
        caption: "Q 版手繪插畫風",
      },
      {
        src: "./images/Day3-S/JAPDAY3-06.webp",
        caption: "雜誌旅行版",
      },
      {
        src: "./images/Day3-S/JAPDAY3-07.webp",
        caption: "地圖路線版",
      },
      {
        src: "./images/Day3-S/JAPDAY3-08.webp",
        caption: "神戶美食雙星",
      },
      {
        src: "./images/Day3-S/JAPDAY3-09.webp",
        caption: "神戶異國探險",
      },
      {
        src: "./images/Day3-S/JAPDAY3-10.webp",
        caption: "VIP 等級享受風",
      },
      {
        src: "./images/Day3-S/JAPDAY3-11.webp",
        caption: "時間情緒曲線風",
      },
      {
        src: "./images/Day3-S/JAPDAY3-12.webp",
        caption: "神戶局長推薦",
      },
    ],
    memoryWallImgs: [
      { src: "./images/Day3-S/JAPDAY3-01.webp", caption: "事先預告~Q版" },
      {
        src: "./images/Day3-S/JAPDAY3-02.webp",
        caption: "事先預告~雜誌旅行版",
      },
      {
        src: "./images/Day3-S/JAPDAY3-03.webp",
        caption: "事先預告~地圖路線版",
      },
      {
        src: "./images/Day3-S/JAPDAY3-04.webp",
        caption: "事先預告~地圖路線版~換件衣服",
      },
      {
        src: "./images/Day3-S/JAPDAY3-05.webp",
        caption: "Q 版手繪插畫風",
      },
      {
        src: "./images/Day3-S/JAPDAY3-06.webp",
        caption: "雜誌旅行版",
      },
      {
        src: "./images/Day3-S/JAPDAY3-07.webp",
        caption: "地圖路線版",
      },
      {
        src: "./images/Day3-S/JAPDAY3-08.webp",
        caption: "神戶美食雙星",
      },
      {
        src: "./images/Day3-S/JAPDAY3-09.webp",
        caption: "神戶異國探險",
      },
      {
        src: "./images/Day3-S/JAPDAY3-10.webp",
        caption: "VIP 等級享受風",
      },
      {
        src: "./images/Day3-S/JAPDAY3-11.webp",
        caption: "時間情緒曲線風",
      },
      {
        src: "./images/Day3-S/JAPDAY3-12.webp",
        caption: "神戶局長推薦",
      },
      {
        src: "./images/LINE/GPT0010-3.webp",
        caption: "第三天~神戶地區旅遊貼圖",
      },
      {
        src: "./images/Day3-M/Day3-01.webp",
        caption: "神戶牛 WASSIA 現場照",
      },
      {
        src: "./images/Day3-M/Day3-02.webp",
        caption: "神戶牛 WASSIA 現場照",
      },
      {
        src: "./images/Day3-M/Day3-02A.webp",
        caption: "神戶牛 WASSIA 網路照",
      },
      {
        src: "./images/Day3-M/Day3-03.webp",
        caption: "神戶牛 WASSIA 網路照~詣超那張應該吃掉盤子下面部分",
      },
      {
        src: "./images/Day3-M/Day3-04.webp",
        caption: "神戶牛 WASSIA 網路照~門口",
      },
      {
        src: "./images/Day3-M/Day3-05.webp",
        caption: "神戶牛 WASSIA 網路照~菜單",
      },
      {
        src: "./images/Day3-M/Day3-05A.webp",
        caption: "神戶牛 WASSIA 網路照~店門口",
      },
      {
        src: "./images/Day3-M/Day3-06.webp",
        caption: "Google地圖~神戶牛 WASSIA -> 北野異人館星巴克",
      },
      {
        src: "./images/Day3-M/Day3-07.webp",
        caption: "北野異人星巴克",
      },
      {
        src: "./images/Day3-M/Day3-08.webp",
        caption: "日本神戶的星冰樂",
      },
      {
        src: "./images/Day3-M/Day3-09.webp",
        caption:
          "這是位於日本神戶北野異人館街的著名景點「魚鱗之家」~建於明治時代後期，原為外國人的住宅，是神戶最早對外公開的異人館",
      },
      {
        src: "./images/Day3-M/Day3-10.webp",
        caption:
          "固力果（Glico）推出的高端品牌 Bâton d'or，被譽為「Pocky界的LV」。",
      },
      {
        src: "./images/Day3-M/Day3-11.webp",
        caption:
          "晚餐大阪燒~大阪心齋橋巷弄內的人氣隱藏版名店——お好み鉄板酒場 どら十（Dorajyu）。它在社群平台上非常受到歡迎，被許多老饕譽為「大阪燒天花板」。",
      },
      {
        src: "./images/Day3-M/Day3-10A.webp",
        caption: "網路照~Bâton d'or~詣超晚上的零食",
      },
      {
        src: "./images/Day3-M/Day3-10B.webp",
        caption: "網路照~Bâton d'or ~ 店家應該在阪集百貨",
      },
      {
        src: "./images/Day3-M/Day3-O-1.webp",
        caption:
          "18年前~神戶港的中突堤前端眺望神戶美利堅公園東方酒店，其獨特的郵輪造型與坐擁神戶港 270 度海景聞名",
      },
      {
        src: "./images/Day3-M/Day3-O-2.webp",
        caption: "18年前~背景為著名的地標是位於日本兵庫縣的神戶港塔",
      },
      {
        src: "./images/Day3-M/Day3-O-3.webp",
        caption: "復刻當年舊照片",
      },
      {
        src: "./images/Day3-M/Day3-O-3A.webp",
        caption: "18年前~背景為當年著名的地標是位於日本兵庫縣的神戶港塔",
      },
      {
        src: "./images/Day3-M/Day3-O-4.webp",
        caption: "18年前~當年詣超手裡拿著龍貓公車和小白",
      },
      {
        src: "./images/Day3-M/Day3-O-5.webp",
        caption: "18年前~當年詣超手裡拿著龍貓公車和小白",
      },
      {
        src: "./images/Day3-M/Day3-O-6.webp",
        caption: "18年前~一直拿著龍貓公車",
      },
      {
        src: "./images/Day3-M/Day3-O-7.webp",
        caption: "18年前~背景為神戶塔",
      },
    ],
  },
  {
    day: 4,
    title: "京都、伏見稻荷、千本鳥居、土井活鰻、空蟬亭熟成豚炸豬排",
    subtitle: "穿梭千本朱紅鳥居，祈願稻荷之神",
    summary: "午嚐土井活鰻的炭火香氣，晚品空蟬亭熟成豚炸豬排的酥脆軟嫩",

    cardImg: "./images/Day4-S/JAPDAY4-B1-Q 版手繪插畫風.webp",
    galleryImgs: [
      {
        src: "./images/Day4-S/JAPDAY4-01-Q 版手繪插畫風.webp",
        caption: "爸爸胡亂規劃~Q 版手繪插畫風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-02-雜誌旅行版.webp",
        caption: "爸爸胡亂規劃~雜誌旅行版",
      },
      {
        src: "./images/Day4-S/JAPDAY4-03-地圖路線版.webp",
        caption: "地圖路線版",
      },
      {
        src: "./images/Day4-S/JAPDAY4-04-世界遺產地圖風.webp",
        caption: "爸爸胡亂規劃~世界遺產地圖風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-05-攝影打卡指南風.webp",
        caption: "爸爸胡亂規劃~攝影打卡指南風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-07-藝伎文化探訪風.webp",
        caption: "爸爸胡亂規劃~藝伎文化探訪風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-08-季節賞櫻賞楓風.webp",
        caption: "爸爸胡亂規劃~季節賞櫻賞楓",
      },
      {
        src: "./images/Day4-S/JAPDAY4-09-時間效率攻略風.webp",
        caption: "爸爸胡亂規劃~時間效率攻略風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B1-Q 版手繪插畫風.webp",
        caption: "正式行程~Q 版手繪插畫風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B2-雜誌旅行版.webp",
        caption: "正式行程~雜誌旅行版",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B3-地圖路線版.webp",
        caption: "正式行程~地圖路線版",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B4-美食三星評鑑風.webp",
        caption: "正式行程~美食三星評鑑風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B5-電影分鏡故事風.webp",
        caption: "正式行程~電影分鏡故事風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B6-行程手帳日記風.webp",
        caption: "正式行程~行程手帳日記風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B7-時間順序清單版.webp",
        caption: "正式行程~時間順序清單版",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B8-推薦打卡清單風.webp",
        caption: "正式行程~推薦打卡清單風",
      },
    ],
    memoryWallImgs: [
      {
        src: "./images/Day4-S/JAPDAY4-01-Q 版手繪插畫風.webp",
        caption: "爸爸胡亂規劃~Q 版手繪插畫風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-02-雜誌旅行版.webp",
        caption: "爸爸胡亂規劃~雜誌旅行版",
      },
      {
        src: "./images/Day4-S/JAPDAY4-03-地圖路線版.webp",
        caption: "地圖路線版",
      },
      {
        src: "./images/Day4-S/JAPDAY4-04-世界遺產地圖風.webp",
        caption: "爸爸胡亂規劃~世界遺產地圖風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-05-攝影打卡指南風.webp",
        caption: "爸爸胡亂規劃~攝影打卡指南風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-07-藝伎文化探訪風.webp",
        caption: "爸爸胡亂規劃~藝伎文化探訪風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-08-季節賞櫻賞楓風.webp",
        caption: "爸爸胡亂規劃~季節賞櫻賞楓",
      },
      {
        src: "./images/Day4-S/JAPDAY4-09-時間效率攻略風.webp",
        caption: "爸爸胡亂規劃~時間效率攻略風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B1-Q 版手繪插畫風.webp",
        caption: "正式行程~Q 版手繪插畫風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B2-雜誌旅行版.webp",
        caption: "正式行程~雜誌旅行版",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B3-地圖路線版.webp",
        caption: "正式行程~地圖路線版",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B4-美食三星評鑑風.webp",
        caption: "正式行程~美食三星評鑑風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B5-電影分鏡故事風.webp",
        caption: "正式行程~電影分鏡故事風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B6-行程手帳日記風.webp",
        caption: "正式行程~行程手帳日記風",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B7-時間順序清單版.webp",
        caption: "正式行程~時間順序清單版",
      },
      {
        src: "./images/Day4-S/JAPDAY4-B8-推薦打卡清單風.webp",
        caption: "正式行程~推薦打卡清單風",
      },
      {
        src: "./images/LINE/GPT0010-4.webp",
        caption: "第二天~伏見稻荷地區旅遊貼圖",
      },
      {
        src: "./images/Day4-M/Day4-00.webp",
        caption: "AI~第四天先換件衣服",
      },
      {
        src: "./images/Day4-M/Day4-01A.webp",
        caption: "網路照~千本鳥居",
      },
      {
        src: "./images/Day4-M/Day4-02.webp",
        caption: "土井活鰻",
      },
      {
        src: "./images/Day4-M/Day4-03.webp",
        caption: "土井活鰻~打開",
      },
      {
        src: "./images/Day4-M/Day4-03A.webp",
        caption: "吃飽準備前往伏見稻荷大社",
      },
      {
        src: "./images/Day4-M/Day4-04.webp",
        caption: "伏見稻荷大社~入口",
      },
      {
        src: "./images/Day4-M/Day4-05.webp",
        caption: "伏見稻荷大社",
      },
      {
        src: "./images/Day4-M/Day4-06.webp",
        caption: "千本鳥居~不知道走到多高",
      },
      {
        src: "./images/Day4-M/Day4-07.webp",
        caption: "很熱~吃冰!當然是巧克力!",
      },
      {
        src: "./images/Day4-M/Day4-08.webp",
        caption: "卡比獸鑰匙圈~買三個",
      },
      {
        src: "./images/Day4-M/Day4-08A.webp",
        caption: "google照~新京極商店街",
      },
      {
        src: "./images/Day4-M/Day4-09.webp",
        caption: "空蟬亭 熟成豚炸豬排~配菜",
      },
      {
        src: "./images/Day4-M/Day4-10.webp",
        caption: "空蟬亭 熟成豚炸豬排~套餐",
      },
      {
        src: "./images/Day4-M/Day4-11.webp",
        caption: "空蟬亭 熟成豚炸豬排，米其林推薦(京都No.1炸豬排)~很厚的豬排",
      },
      {
        src: "./images/Day4-M/Day4-12.webp",
        caption: "宵夜~金龍拉麵",
      },
    ],
  },
  {
    day: 5,
    title:
      "宇治平等院鳳凰堂、宇治洋食屋咖哩、日本京都宇治的知名百年抹茶老店「中村藤吉本店」",
    subtitle: "走進千年鳳凰堂，感受平安時代的極樂淨土",
    summary: "午後享用以日式咖哩為招牌的洋食屋，為宇治之旅添一抹溫暖滋味",
    cardImg: "./images/Day5-S/JAPDAY5-A01-Q 版手繪插畫風.webp",
    galleryImgs: [
      {
        src: "./images/Day5-S/JAPDAY5-01.webp",
        caption: "爸爸胡亂規劃~Q 版手繪插畫風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-02.webp",
        caption: "爸爸胡亂規劃~雜誌旅行版",
      },
      {
        src: "./images/Day5-S/JAPDAY5-03.webp",
        caption: "爸爸胡亂規劃~地圖路線版",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A01-Q 版手繪插畫風.webp",
        caption: "正確版本~Q 版手繪插畫風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A02-雜誌旅行風.webp",
        caption: "正確版本~雜誌旅行風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A03-美食路線風.webp",
        caption: "正確版本~美食路線風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A04-美食三星評鑑風.webp",
        caption: "正確版本~美食三星評鑑風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A05-電影分鏡故事風.webp",
        caption: "正確版本~電影分鏡故事風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A06-行程手帳日記風.webp",
        caption: "正確版本~行程手帳日記風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A07-時間順序清單風.webp",
        caption: "正確版本~時間順序清單風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A08-推薦打卡清單風.webp",
        caption: "正確版本~推薦打卡清單風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A09-韓系ins風地圖.webp",
        caption: "正確版本~韓系ins風地",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A10-京都古都水墨風地圖.webp",
        caption: "正確版本~京都古都水墨風地圖",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A11-日系暖色手繪風地圖.webp",
        caption: "正確版本~日系暖色手繪風地圖",
      },
    ],
    memoryWallImgs: [
      {
        src: "./images/Day5-S/JAPDAY5-A01-Q 版手繪插畫風.webp",
        caption: "正確版本~Q 版手繪插畫風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A02-雜誌旅行風.webp",
        caption: "正確版本~雜誌旅行風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A03-美食路線風.webp",
        caption: "正確版本~美食路線風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A04-美食三星評鑑風.webp",
        caption: "正確版本~美食三星評鑑風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A05-電影分鏡故事風.webp",
        caption: "正確版本~電影分鏡故事風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A06-行程手帳日記風.webp",
        caption: "正確版本~行程手帳日記風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A07-時間順序清單風.webp",
        caption: "正確版本~時間順序清單風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A08-推薦打卡清單風.webp",
        caption: "正確版本~推薦打卡清單風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A09-韓系ins風地圖.webp",
        caption: "正確版本~韓系ins風地",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A10-京都古都水墨風地圖.webp",
        caption: "正確版本~京都古都水墨風地圖",
      },
      {
        src: "./images/Day5-S/JAPDAY5-A11-日系暖色手繪風地圖.webp",
        caption: "正確版本~日系暖色手繪風地圖",
      },

      {
        src: "./images/Day5-S/JAPDAY5-01.webp",
        caption: "爸爸胡亂規劃~Q 版手繪插畫風",
      },
      {
        src: "./images/Day5-S/JAPDAY5-02.webp",
        caption: "爸爸胡亂規劃~雜誌旅行版",
      },
      {
        src: "./images/Day5-S/JAPDAY5-03.webp",
        caption: "爸爸胡亂規劃~地圖路線版",
      },
      {
        src: "./images/LINE/GPT0010-4.webp",
        caption: "第二天~宇治地區旅遊貼圖",
      },

      {
        src: "./images/Day5-M/Day5-00.webp",
        caption: "換一件衣服",
      },
      {
        src: "./images/Day5-M/Day5-01.webp",
        caption: "平等院表參道石碑",
      },
      {
        src: "./images/Day5-M/Day5-02.webp",
        caption: "平等院入口鳥居",
      },
      {
        src: "./images/Day5-M/Day5-03.webp",
        caption: "京都宇治的復古咖哩專門店~宇治洋食屋咖哩",
      },
      {
        src: "./images/Day5-M/Day5-03A.webp",
        caption: "網路照~宇治洋食屋咖哩門口",
      },
      {
        src: "./images/Day5-M/Day5-03B.webp",
        caption: "網路照~宇治洋食屋咖哩菜單",
      },
      {
        src: "./images/Day5-M/Day5-03C.webp",
        caption: "網路照~宇治洋食屋咖哩~人氣第一名",
      },
      {
        src: "./images/Day5-M/Day5-04A.webp",
        caption: "網路照~平等院街道~就是鳥居入口",
      },
      {
        src: "./images/Day5-M/Day5-04B.webp",
        caption: "網路照~平等院表參道石碑位置",
      },
      {
        src: "./images/Day5-M/Day5-05.webp",
        caption: "百年抹茶老店「中村藤吉本店」",
      },
      {
        src: "./images/Day5-M/Day5-05A.webp",
        caption: "百年抹茶老店「中村藤吉本店",
      },
      {
        src: "./images/Day5-M/Day5-04C.webp",
        caption: "google地圖~平等院->宇治洋食屋咖哩->「中村藤吉本店」",
      },
      {
        src: "./images/Day5-M/Day5-06.webp",
        caption: "平等院鳳凰堂",
      },
      {
        src: "./images/Day5-M/Day5-06A.webp",
        caption: "日幣十元銅板上的圖案~就是平等院鳳凰堂",
      },
    ],
  },

  {
    day: 6,
    title: "結束六天行程，搭機回台",
    subtitle: "",
    summary: "",
    cardImg: "https://picsum.photos/id/79/800/500",
    galleryImgs: [
      { src: "https://picsum.photos/id/70/400/300", caption: "風見雞館" },
      { src: "https://picsum.photos/id/71/400/300", caption: "神戶港夜景" },
      { src: "https://picsum.photos/id/72/400/300", caption: "神戶牛排" },
    ],
    memoryWallImgs: [
      { src: "https://picsum.photos/id/70/400/300", caption: "異人館" },
      { src: "https://picsum.photos/id/71/400/300", caption: "港灣夜景" },
      { src: "https://picsum.photos/id/72/400/300", caption: "神戶牛排" },
      { src: "https://picsum.photos/id/73/400/300", caption: "北野街道" },
    ],
  },
];
