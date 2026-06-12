// 日本關西六日旅行程資料
// 每張照片可獨立設定 caption 說明（燈箱左上角會顯示）
const tripData = [
  {
    day: 1,
    title: "星宇啟航・大阪初訪",
    subtitle: "燒肉與拉麵的饗宴",
    summary:
      "從台灣家裡出發，搭乘星宇航空飛往大阪。晚餐力丸燒肉，入住民宿後逛藥妝店，再以神座拉麵完美收尾。",
    cardImg: "./images/JAPDAY1-01.webp",
    galleryImgs: [
      {
        src: "./images/JAPDAY1-01.webp",
        caption: "Day1~Q版紀錄 ",
      },
      {
        src: "./images/JAPDAY1-02.webp",
        caption: "Day1~全紀錄基本款 ",
      },
      {
        src: "./images/JAPDAY1-03.webp",
        caption: "Day1~全紀錄基本款 ",
      },
      {
        src: "./images/JAPDAY1-04.webp",
        caption: "Day1~全紀錄基本款 ",
      },
      {
        src: "./images/JAPDAY1-04X.webp",
        caption: "Day1~全紀錄基本款 ",
      },
      {
        src: "./images/JAPDAY1-05.webp",
        caption: "Day1~全紀錄基本款 ",
      },
    ],
  },

  {
    day: 2,
    title: "黑門市場・牛舌名店與神社",
    subtitle: "大阪廚房大冒險",
    summary: "黑門市場新鮮海鮮，牛舌の檸檬炭火燒，大島神社透明御守祈願。",
    cardImg: "https://picsum.photos/id/130/800/500",
    galleryImgs: [
      {
        src: "https://picsum.photos/id/30/400/300",
        caption: "黑門市場現剖海膽",
      },
      {
        src: "https://picsum.photos/id/31/400/300",
        caption: "牛舌の檸檬 - 厚切牛舌定食",
      },
      {
        src: "https://picsum.photos/id/32/400/300",
        caption: "大島神社透明御守，光線下晶瑩剔透",
      },
    ],
  },
  {
    day: 3,
    title: "京都・伏見稻荷千本鳥居",
    subtitle: "朱紅神話",
    summary: "走進千本鳥居，狐狸祈願，品嚐抹茶甜點，感受古都靈氣。",
    cardImg: "https://picsum.photos/id/96/800/500",
    galleryImgs: [
      {
        src: "https://picsum.photos/id/40/400/300",
        caption: "千本鳥居入口，朱紅隧道",
      },
      {
        src: "https://picsum.photos/id/41/400/300",
        caption: "狐狸繪馬，表情逗趣",
      },
      { src: "https://picsum.photos/id/42/400/300", caption: "抹茶蕨餅與焙茶" },
    ],
  },
  {
    day: 4,
    title: "嵐山竹林與渡月橋",
    subtitle: "風雅嵯峨野",
    summary: "竹林小徑、野宮神社，搭乘復古小火車，保津川峽谷風光。",
    cardImg: "https://picsum.photos/id/15/800/500",
    galleryImgs: [
      {
        src: "https://picsum.photos/id/50/400/300",
        caption: "嵐山竹林小徑，綠意包圍",
      },
      {
        src: "https://picsum.photos/id/51/400/300",
        caption: "嵯峨野小火車，保津川溪谷",
      },
      {
        src: "https://picsum.photos/id/52/400/300",
        caption: "渡月橋畔，秋楓倒影",
      },
    ],
  },
  {
    day: 5,
    title: "奈良・小鹿與大佛",
    subtitle: "春日靈域",
    summary: "東大寺大佛殿，奈良公園鹿群互動，享用柿葉壽司。",
    cardImg: "https://picsum.photos/id/94/800/500",
    galleryImgs: [
      {
        src: "https://picsum.photos/id/60/400/300",
        caption: "奈良公園鹿群，友善討食",
      },
      {
        src: "https://picsum.photos/id/61/400/300",
        caption: "東大寺大佛，震懾人心",
      },
      {
        src: "https://picsum.photos/id/62/400/300",
        caption: "柿葉壽司，奈良名物",
      },
    ],
  },
  {
    day: 6,
    title: "神戶異人館與港口",
    subtitle: "洋風浪漫",
    summary: "北野異人館，神戶港夜景，品嚐神戶牛排洋食。",
    cardImg: "https://picsum.photos/id/79/800/500",
    galleryImgs: [
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
];