// 日本關西六日旅行程資料
// 每張照片可獨立設定 caption 說明（燈箱左上角會顯示）
const tripData = [
  {
    day: 1,
    title: "星宇啟航・大阪初訪",
    subtitle: "燒肉與拉麵的饗宴",
    summary:
      "出發，搭乘星宇航空飛往大阪。晚餐力丸燒肉，入住民宿後逛藥妝店，再以神座拉麵完美收尾。",
    cardImg: "./images/Day1-S/JAPDAY1-01.webp",
    // 行程日誌點擊卡片主圖時顯示的圖庫（與回憶寫真館不同）
    galleryImgs: [
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
    title: "神戶異人館與港口",
    subtitle: "洋風浪漫",
    summary: "北野異人館，神戶港夜景，品嚐神戶牛排洋食。",
    cardImg: "./images/Day3-S/JAPDAY3-01.webp",
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
    ],
    memoryWallImgs: [
      {
        src: "https://picsum.photos/id/70/400/300",
        caption: "風見雞館，異國風情",
      },
      {
        src: "https://picsum.photos/id/71/400/300",
        caption: "神戶港夜景，絢爛燈光",
      },
      {
        src: "https://picsum.photos/id/72/400/300",
        caption: "神戶牛排，軟嫩多汁",
      },
    ],
  },
  {
    day: 4,
    title: "嵐山竹林與渡月橋",
    subtitle: "風雅嵯峨野",
    summary: "竹林小徑、野宮神社，搭乘復古小火車，保津川峽谷風光。",
    cardImg: "https://picsum.photos/id/15/800/500",
    galleryImgs: [
      { src: "https://picsum.photos/id/50/400/300", caption: "竹林小徑" },
      { src: "https://picsum.photos/id/51/400/300", caption: "嵯峨野小火車" },
      { src: "https://picsum.photos/id/52/400/300", caption: "渡月橋" },
    ],
    memoryWallImgs: [
      { src: "https://picsum.photos/id/50/400/300", caption: "嵐山竹林" },
      { src: "https://picsum.photos/id/51/400/300", caption: "小火車" },
      { src: "https://picsum.photos/id/52/400/300", caption: "渡月橋" },
      { src: "https://picsum.photos/id/53/400/300", caption: "野宮神社" },
    ],
  },
  {
    day: 5,
    title: "奈良・小鹿與大佛",
    subtitle: "春日靈域",
    summary: "東大寺大佛殿，奈良公園鹿群互動，享用柿葉壽司。",
    cardImg: "https://picsum.photos/id/94/800/500",
    galleryImgs: [
      { src: "https://picsum.photos/id/60/400/300", caption: "奈良公園鹿群" },
      { src: "https://picsum.photos/id/61/400/300", caption: "東大寺大佛" },
      { src: "https://picsum.photos/id/62/400/300", caption: "柿葉壽司" },
    ],
    memoryWallImgs: [
      { src: "https://picsum.photos/id/60/400/300", caption: "小鹿討食" },
      { src: "https://picsum.photos/id/61/400/300", caption: "大佛殿" },
      { src: "https://picsum.photos/id/62/400/300", caption: "柿葉壽司" },
      { src: "https://picsum.photos/id/63/400/300", caption: "春日大社" },
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
