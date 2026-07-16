// ========================================
// 貼圖資料庫 sticker-db.js
// 繁體中文說明：貼圖包與貼圖結構
// ========================================
const stickerPacks = [
  {
    id: 201,
    name: "個人Q版",
    description: "關渡景點-1",
    category: "退休系列",
    stickers: [
      {
        id: "A03-Retire/GPT0017-1-1",
        img: "./images/A03-Retire/GPT0017-1/split_0_0.webp",
      },
      {
        id: "A03-Retire/GPT0017-1-2",
        img: "./images/A03-Retire/GPT0017-1/split_0_1.webp",
      },
      {
        id: "A03-Retire/GPT0017-1-3",
        img: "./images/A03-Retire/GPT0017-1/split_0_2.webp",
      },
      {
        id: "A03-Retire/GPT0017-1-4",
        img: "./images/A03-Retire/GPT0017-1/split_0_3.webp",
      },
      {
        id: "A03-Retire/GPT0017-1-6",
        img: "./images/A03-Retire/GPT0017-1/split_1_0.webp",
      },
      {
        id: "A03-Retire/GPT0017-1-7",
        img: "./images/A03-Retire/GPT0017-1/split_1_1.webp",
      },
      {
        id: "A03-Retire/GPT0017-1-8",
        img: "./images/A03-Retire/GPT0017-1/split_1_2.webp",
      },
      {
        id: "A03-Retire/GPT0017-1-9",
        img: "./images/A03-Retire/GPT0017-1/split_1_3.webp",
      },
      {
        id: "A03-Retire/GPT0017-1-B",
        img: "./images/A03-Retire/GPT0017-1/split_2_0.webp",
      },
      {
        id: "A03-Retire/GPT0017-1-C",
        img: "./images/A03-Retire/GPT0017-1/split_2_1.webp",
      },
      {
        id: "A03-Retire/GPT0017-1-D",
        img: "./images/A03-Retire/GPT0017-1/split_2_2.webp",
      },
      {
        id: "A03-Retire/GPT0017-1-E",
        img: "./images/A03-Retire/GPT0017-1/split_2_3.webp",
      },
      {
        id: "A03-Retire/GPT0017-1-G",
        img: "./images/A03-Retire/GPT0017-1/split_3_0.webp",
      },
      {
        id: "A03-Retire/GPT0017-1-H",
        img: "./images/A03-Retire/GPT0017-1/split_3_1.webp",
      },
      {
        id: "A03-Retire/GPT0017-1-I",
        img: "./images/A03-Retire/GPT0017-1/split_3_2.webp",
      },
      {
        id: "A03-Retire/GPT0017-1-J",
        img: "./images/A03-Retire/GPT0017-1/split_3_3.webp",
      },
    ],
  },

  {
    id: 199,
    name: "個人Q版",
    description: "沖繩地方-沖繩縣47-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-47-1",
        img: "./images/A02-japan-tour/GPT0016-47/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47-2",
        img: "./images/A02-japan-tour/GPT0016-47/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47-3",
        img: "./images/A02-japan-tour/GPT0016-47/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47-4",
        img: "./images/A02-japan-tour/GPT0016-47/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47-6",
        img: "./images/A02-japan-tour/GPT0016-47/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47-7",
        img: "./images/A02-japan-tour/GPT0016-47/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47-8",
        img: "./images/A02-japan-tour/GPT0016-47/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47-9",
        img: "./images/A02-japan-tour/GPT0016-47/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47-B",
        img: "./images/A02-japan-tour/GPT0016-47/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47-C",
        img: "./images/A02-japan-tour/GPT0016-47/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47-D",
        img: "./images/A02-japan-tour/GPT0016-47/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47-E",
        img: "./images/A02-japan-tour/GPT0016-47/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47-G",
        img: "./images/A02-japan-tour/GPT0016-47/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47-H",
        img: "./images/A02-japan-tour/GPT0016-47/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47-I",
        img: "./images/A02-japan-tour/GPT0016-47/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47-J",
        img: "./images/A02-japan-tour/GPT0016-47/split_3_3.webp",
      },
    ],
  },
  {
    id: 200,
    name: "個人Q版",
    description: "沖繩地方-沖繩縣47-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-47X-1",
        img: "./images/A02-japan-tour/GPT0016-47X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47X-2",
        img: "./images/A02-japan-tour/GPT0016-47X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47X-3",
        img: "./images/A02-japan-tour/GPT0016-47X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47X-4",
        img: "./images/A02-japan-tour/GPT0016-47X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47X-6",
        img: "./images/A02-japan-tour/GPT0016-47X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47X-7",
        img: "./images/A02-japan-tour/GPT0016-47X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47X-8",
        img: "./images/A02-japan-tour/GPT0016-47X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47X-9",
        img: "./images/A02-japan-tour/GPT0016-47X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47X-B",
        img: "./images/A02-japan-tour/GPT0016-47X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47X-C",
        img: "./images/A02-japan-tour/GPT0016-47X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47X-D",
        img: "./images/A02-japan-tour/GPT0016-47X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47X-E",
        img: "./images/A02-japan-tour/GPT0016-47X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47X-G",
        img: "./images/A02-japan-tour/GPT0016-47X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47X-H",
        img: "./images/A02-japan-tour/GPT0016-47X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47X-I",
        img: "./images/A02-japan-tour/GPT0016-47X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-47X-J",
        img: "./images/A02-japan-tour/GPT0016-47X/split_3_3.webp",
      },
    ],
  },
  {
    id: 197,
    name: "個人Q版",
    description: "九州地方-鹿兒島縣46-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-46-1",
        img: "./images/A02-japan-tour/GPT0016-46/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46-2",
        img: "./images/A02-japan-tour/GPT0016-46/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46-3",
        img: "./images/A02-japan-tour/GPT0016-46/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46-4",
        img: "./images/A02-japan-tour/GPT0016-46/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46-6",
        img: "./images/A02-japan-tour/GPT0016-46/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46-7",
        img: "./images/A02-japan-tour/GPT0016-46/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46-8",
        img: "./images/A02-japan-tour/GPT0016-46/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46-9",
        img: "./images/A02-japan-tour/GPT0016-46/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46-B",
        img: "./images/A02-japan-tour/GPT0016-46/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46-C",
        img: "./images/A02-japan-tour/GPT0016-46/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46-D",
        img: "./images/A02-japan-tour/GPT0016-46/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46-E",
        img: "./images/A02-japan-tour/GPT0016-46/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46-G",
        img: "./images/A02-japan-tour/GPT0016-46/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46-H",
        img: "./images/A02-japan-tour/GPT0016-46/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46-I",
        img: "./images/A02-japan-tour/GPT0016-46/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46-J",
        img: "./images/A02-japan-tour/GPT0016-46/split_3_3.webp",
      },
    ],
  },
  {
    id: 198,
    name: "個人Q版",
    description: "九州地方-鹿兒島縣46-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-46X-1",
        img: "./images/A02-japan-tour/GPT0016-46X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46X-2",
        img: "./images/A02-japan-tour/GPT0016-46X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46X-3",
        img: "./images/A02-japan-tour/GPT0016-46X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46X-4",
        img: "./images/A02-japan-tour/GPT0016-46X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46X-6",
        img: "./images/A02-japan-tour/GPT0016-46X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46X-7",
        img: "./images/A02-japan-tour/GPT0016-46X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46X-8",
        img: "./images/A02-japan-tour/GPT0016-46X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46X-9",
        img: "./images/A02-japan-tour/GPT0016-46X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46X-B",
        img: "./images/A02-japan-tour/GPT0016-46X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46X-C",
        img: "./images/A02-japan-tour/GPT0016-46X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46X-D",
        img: "./images/A02-japan-tour/GPT0016-46X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46X-E",
        img: "./images/A02-japan-tour/GPT0016-46X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46X-G",
        img: "./images/A02-japan-tour/GPT0016-46X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46X-H",
        img: "./images/A02-japan-tour/GPT0016-46X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46X-I",
        img: "./images/A02-japan-tour/GPT0016-46X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-46X-J",
        img: "./images/A02-japan-tour/GPT0016-46X/split_3_3.webp",
      },
    ],
  },
  {
    id: 195,
    name: "個人Q版",
    description: "九州地方-宮崎縣45-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-45-1",
        img: "./images/A02-japan-tour/GPT0016-45/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45-2",
        img: "./images/A02-japan-tour/GPT0016-45/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45-3",
        img: "./images/A02-japan-tour/GPT0016-45/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45-4",
        img: "./images/A02-japan-tour/GPT0016-45/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45-6",
        img: "./images/A02-japan-tour/GPT0016-45/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45-7",
        img: "./images/A02-japan-tour/GPT0016-45/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45-8",
        img: "./images/A02-japan-tour/GPT0016-45/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45-9",
        img: "./images/A02-japan-tour/GPT0016-45/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45-B",
        img: "./images/A02-japan-tour/GPT0016-45/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45-C",
        img: "./images/A02-japan-tour/GPT0016-45/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45-D",
        img: "./images/A02-japan-tour/GPT0016-45/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45-E",
        img: "./images/A02-japan-tour/GPT0016-45/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45-G",
        img: "./images/A02-japan-tour/GPT0016-45/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45-H",
        img: "./images/A02-japan-tour/GPT0016-45/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45-I",
        img: "./images/A02-japan-tour/GPT0016-45/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45-J",
        img: "./images/A02-japan-tour/GPT0016-45/split_3_3.webp",
      },
    ],
  },
  {
    id: 196,
    name: "個人Q版",
    description: "九州地方-宮崎縣45-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-45X-1",
        img: "./images/A02-japan-tour/GPT0016-45X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45X-2",
        img: "./images/A02-japan-tour/GPT0016-45X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45X-3",
        img: "./images/A02-japan-tour/GPT0016-45X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45X-4",
        img: "./images/A02-japan-tour/GPT0016-45X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45X-6",
        img: "./images/A02-japan-tour/GPT0016-45X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45X-7",
        img: "./images/A02-japan-tour/GPT0016-45X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45X-8",
        img: "./images/A02-japan-tour/GPT0016-45X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45X-9",
        img: "./images/A02-japan-tour/GPT0016-45X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45X-B",
        img: "./images/A02-japan-tour/GPT0016-45X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45X-C",
        img: "./images/A02-japan-tour/GPT0016-45X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45X-D",
        img: "./images/A02-japan-tour/GPT0016-45X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45X-E",
        img: "./images/A02-japan-tour/GPT0016-45X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45X-G",
        img: "./images/A02-japan-tour/GPT0016-45X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45X-H",
        img: "./images/A02-japan-tour/GPT0016-45X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45X-I",
        img: "./images/A02-japan-tour/GPT0016-45X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-45X-J",
        img: "./images/A02-japan-tour/GPT0016-45X/split_3_3.webp",
      },
    ],
  },
  {
    id: 193,
    name: "個人Q版",
    description: "九州地方-大分縣44-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-44-1",
        img: "./images/A02-japan-tour/GPT0016-44/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44-2",
        img: "./images/A02-japan-tour/GPT0016-44/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44-3",
        img: "./images/A02-japan-tour/GPT0016-44/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44-4",
        img: "./images/A02-japan-tour/GPT0016-44/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44-6",
        img: "./images/A02-japan-tour/GPT0016-44/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44-7",
        img: "./images/A02-japan-tour/GPT0016-44/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44-8",
        img: "./images/A02-japan-tour/GPT0016-44/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44-9",
        img: "./images/A02-japan-tour/GPT0016-44/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44-B",
        img: "./images/A02-japan-tour/GPT0016-44/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44-C",
        img: "./images/A02-japan-tour/GPT0016-44/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44-D",
        img: "./images/A02-japan-tour/GPT0016-44/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44-E",
        img: "./images/A02-japan-tour/GPT0016-44/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44-G",
        img: "./images/A02-japan-tour/GPT0016-44/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44-H",
        img: "./images/A02-japan-tour/GPT0016-44/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44-I",
        img: "./images/A02-japan-tour/GPT0016-44/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44-J",
        img: "./images/A02-japan-tour/GPT0016-44/split_3_3.webp",
      },
    ],
  },
  {
    id: 194,
    name: "個人Q版",
    description: "九州地方-大分縣44-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-44X-1",
        img: "./images/A02-japan-tour/GPT0016-44X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44X-2",
        img: "./images/A02-japan-tour/GPT0016-44X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44X-3",
        img: "./images/A02-japan-tour/GPT0016-44X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44X-4",
        img: "./images/A02-japan-tour/GPT0016-44X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44X-6",
        img: "./images/A02-japan-tour/GPT0016-44X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44X-7",
        img: "./images/A02-japan-tour/GPT0016-44X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44X-8",
        img: "./images/A02-japan-tour/GPT0016-44X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44X-9",
        img: "./images/A02-japan-tour/GPT0016-44X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44X-B",
        img: "./images/A02-japan-tour/GPT0016-44X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44X-C",
        img: "./images/A02-japan-tour/GPT0016-44X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44X-D",
        img: "./images/A02-japan-tour/GPT0016-44X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44X-E",
        img: "./images/A02-japan-tour/GPT0016-44X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44X-G",
        img: "./images/A02-japan-tour/GPT0016-44X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44X-H",
        img: "./images/A02-japan-tour/GPT0016-44X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44X-I",
        img: "./images/A02-japan-tour/GPT0016-44X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-44X-J",
        img: "./images/A02-japan-tour/GPT0016-44X/split_3_3.webp",
      },
    ],
  },
  {
    id: 191,
    name: "個人Q版",
    description: "九州地方-熊本縣43-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-43-1",
        img: "./images/A02-japan-tour/GPT0016-43/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43-2",
        img: "./images/A02-japan-tour/GPT0016-43/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43-3",
        img: "./images/A02-japan-tour/GPT0016-43/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43-4",
        img: "./images/A02-japan-tour/GPT0016-43/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43-6",
        img: "./images/A02-japan-tour/GPT0016-43/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43-7",
        img: "./images/A02-japan-tour/GPT0016-43/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43-8",
        img: "./images/A02-japan-tour/GPT0016-43/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43-9",
        img: "./images/A02-japan-tour/GPT0016-43/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43-B",
        img: "./images/A02-japan-tour/GPT0016-43/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43-C",
        img: "./images/A02-japan-tour/GPT0016-43/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43-D",
        img: "./images/A02-japan-tour/GPT0016-43/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43-E",
        img: "./images/A02-japan-tour/GPT0016-43/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43-G",
        img: "./images/A02-japan-tour/GPT0016-43/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43-H",
        img: "./images/A02-japan-tour/GPT0016-43/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43-I",
        img: "./images/A02-japan-tour/GPT0016-43/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43-J",
        img: "./images/A02-japan-tour/GPT0016-43/split_3_3.webp",
      },
    ],
  },
  {
    id: 192,
    name: "個人Q版",
    description: "九州地方-熊本縣43-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-43X-1",
        img: "./images/A02-japan-tour/GPT0016-43X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43X-2",
        img: "./images/A02-japan-tour/GPT0016-43X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43X-3",
        img: "./images/A02-japan-tour/GPT0016-43X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43X-4",
        img: "./images/A02-japan-tour/GPT0016-43X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43X-6",
        img: "./images/A02-japan-tour/GPT0016-43X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43X-7",
        img: "./images/A02-japan-tour/GPT0016-43X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43X-8",
        img: "./images/A02-japan-tour/GPT0016-43X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43X-9",
        img: "./images/A02-japan-tour/GPT0016-43X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43X-B",
        img: "./images/A02-japan-tour/GPT0016-43X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43X-C",
        img: "./images/A02-japan-tour/GPT0016-43X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43X-D",
        img: "./images/A02-japan-tour/GPT0016-43X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43X-E",
        img: "./images/A02-japan-tour/GPT0016-43X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43X-G",
        img: "./images/A02-japan-tour/GPT0016-43X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43X-H",
        img: "./images/A02-japan-tour/GPT0016-43X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43X-I",
        img: "./images/A02-japan-tour/GPT0016-43X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-43X-J",
        img: "./images/A02-japan-tour/GPT0016-43X/split_3_3.webp",
      },
    ],
  },
  {
    id: 189,
    name: "個人Q版",
    description: "九州地方-長崎縣42-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-42-1",
        img: "./images/A02-japan-tour/GPT0016-42/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42-2",
        img: "./images/A02-japan-tour/GPT0016-42/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42-3",
        img: "./images/A02-japan-tour/GPT0016-42/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42-4",
        img: "./images/A02-japan-tour/GPT0016-42/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42-6",
        img: "./images/A02-japan-tour/GPT0016-42/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42-7",
        img: "./images/A02-japan-tour/GPT0016-42/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42-8",
        img: "./images/A02-japan-tour/GPT0016-42/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42-9",
        img: "./images/A02-japan-tour/GPT0016-42/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42-B",
        img: "./images/A02-japan-tour/GPT0016-42/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42-C",
        img: "./images/A02-japan-tour/GPT0016-42/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42-D",
        img: "./images/A02-japan-tour/GPT0016-42/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42-E",
        img: "./images/A02-japan-tour/GPT0016-42/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42-G",
        img: "./images/A02-japan-tour/GPT0016-42/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42-H",
        img: "./images/A02-japan-tour/GPT0016-42/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42-I",
        img: "./images/A02-japan-tour/GPT0016-42/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42-J",
        img: "./images/A02-japan-tour/GPT0016-42/split_3_3.webp",
      },
    ],
  },
  {
    id: 190,
    name: "個人Q版",
    description: "九州地方-長崎縣42-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-42X-1",
        img: "./images/A02-japan-tour/GPT0016-42X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42X-2",
        img: "./images/A02-japan-tour/GPT0016-42X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42X-3",
        img: "./images/A02-japan-tour/GPT0016-42X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42X-4",
        img: "./images/A02-japan-tour/GPT0016-42X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42X-6",
        img: "./images/A02-japan-tour/GPT0016-42X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42X-7",
        img: "./images/A02-japan-tour/GPT0016-42X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42X-8",
        img: "./images/A02-japan-tour/GPT0016-42X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42X-9",
        img: "./images/A02-japan-tour/GPT0016-42X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42X-B",
        img: "./images/A02-japan-tour/GPT0016-42X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42X-C",
        img: "./images/A02-japan-tour/GPT0016-42X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42X-D",
        img: "./images/A02-japan-tour/GPT0016-42X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42X-E",
        img: "./images/A02-japan-tour/GPT0016-42X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42X-G",
        img: "./images/A02-japan-tour/GPT0016-42X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42X-H",
        img: "./images/A02-japan-tour/GPT0016-42X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42X-I",
        img: "./images/A02-japan-tour/GPT0016-42X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-42X-J",
        img: "./images/A02-japan-tour/GPT0016-42X/split_3_3.webp",
      },
    ],
  },
  {
    id: 187,
    name: "個人Q版",
    description: "九州地方-佐賀縣41-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-41-1",
        img: "./images/A02-japan-tour/GPT0016-41/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41-2",
        img: "./images/A02-japan-tour/GPT0016-41/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41-3",
        img: "./images/A02-japan-tour/GPT0016-41/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41-4",
        img: "./images/A02-japan-tour/GPT0016-41/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41-6",
        img: "./images/A02-japan-tour/GPT0016-41/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41-7",
        img: "./images/A02-japan-tour/GPT0016-41/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41-8",
        img: "./images/A02-japan-tour/GPT0016-41/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41-9",
        img: "./images/A02-japan-tour/GPT0016-41/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41-B",
        img: "./images/A02-japan-tour/GPT0016-41/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41-C",
        img: "./images/A02-japan-tour/GPT0016-41/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41-D",
        img: "./images/A02-japan-tour/GPT0016-41/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41-E",
        img: "./images/A02-japan-tour/GPT0016-41/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41-G",
        img: "./images/A02-japan-tour/GPT0016-41/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41-H",
        img: "./images/A02-japan-tour/GPT0016-41/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41-I",
        img: "./images/A02-japan-tour/GPT0016-41/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41-J",
        img: "./images/A02-japan-tour/GPT0016-41/split_3_3.webp",
      },
    ],
  },
  {
    id: 188,
    name: "個人Q版",
    description: "九州地方-佐賀縣41-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-41X-1",
        img: "./images/A02-japan-tour/GPT0016-41X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41X-2",
        img: "./images/A02-japan-tour/GPT0016-41X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41X-3",
        img: "./images/A02-japan-tour/GPT0016-41X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41X-4",
        img: "./images/A02-japan-tour/GPT0016-41X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41X-6",
        img: "./images/A02-japan-tour/GPT0016-41X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41X-7",
        img: "./images/A02-japan-tour/GPT0016-41X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41X-8",
        img: "./images/A02-japan-tour/GPT0016-41X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41X-9",
        img: "./images/A02-japan-tour/GPT0016-41X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41X-B",
        img: "./images/A02-japan-tour/GPT0016-41X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41X-C",
        img: "./images/A02-japan-tour/GPT0016-41X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41X-D",
        img: "./images/A02-japan-tour/GPT0016-41X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41X-E",
        img: "./images/A02-japan-tour/GPT0016-41X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41X-G",
        img: "./images/A02-japan-tour/GPT0016-41X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41X-H",
        img: "./images/A02-japan-tour/GPT0016-41X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41X-I",
        img: "./images/A02-japan-tour/GPT0016-41X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-41X-J",
        img: "./images/A02-japan-tour/GPT0016-41X/split_3_3.webp",
      },
    ],
  },
  {
    id: 185,
    name: "個人Q版",
    description: "九州地方-福岡縣40-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-40-1",
        img: "./images/A02-japan-tour/GPT0016-40/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40-2",
        img: "./images/A02-japan-tour/GPT0016-40/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40-3",
        img: "./images/A02-japan-tour/GPT0016-40/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40-4",
        img: "./images/A02-japan-tour/GPT0016-40/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40-6",
        img: "./images/A02-japan-tour/GPT0016-40/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40-7",
        img: "./images/A02-japan-tour/GPT0016-40/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40-8",
        img: "./images/A02-japan-tour/GPT0016-40/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40-9",
        img: "./images/A02-japan-tour/GPT0016-40/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40-B",
        img: "./images/A02-japan-tour/GPT0016-40/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40-C",
        img: "./images/A02-japan-tour/GPT0016-40/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40-D",
        img: "./images/A02-japan-tour/GPT0016-40/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40-E",
        img: "./images/A02-japan-tour/GPT0016-40/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40-G",
        img: "./images/A02-japan-tour/GPT0016-40/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40-H",
        img: "./images/A02-japan-tour/GPT0016-40/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40-I",
        img: "./images/A02-japan-tour/GPT0016-40/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40-J",
        img: "./images/A02-japan-tour/GPT0016-40/split_3_3.webp",
      },
    ],
  },
  {
    id: 186,
    name: "個人Q版",
    description: "九州地方-福岡縣40-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-40X-1",
        img: "./images/A02-japan-tour/GPT0016-40X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40X-2",
        img: "./images/A02-japan-tour/GPT0016-40X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40X-3",
        img: "./images/A02-japan-tour/GPT0016-40X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40X-4",
        img: "./images/A02-japan-tour/GPT0016-40X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40X-6",
        img: "./images/A02-japan-tour/GPT0016-40X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40X-7",
        img: "./images/A02-japan-tour/GPT0016-40X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40X-8",
        img: "./images/A02-japan-tour/GPT0016-40X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40X-9",
        img: "./images/A02-japan-tour/GPT0016-40X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40X-B",
        img: "./images/A02-japan-tour/GPT0016-40X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40X-C",
        img: "./images/A02-japan-tour/GPT0016-40X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40X-D",
        img: "./images/A02-japan-tour/GPT0016-40X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40X-E",
        img: "./images/A02-japan-tour/GPT0016-40X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40X-G",
        img: "./images/A02-japan-tour/GPT0016-40X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40X-H",
        img: "./images/A02-japan-tour/GPT0016-40X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40X-I",
        img: "./images/A02-japan-tour/GPT0016-40X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-40X-J",
        img: "./images/A02-japan-tour/GPT0016-40X/split_3_3.webp",
      },
    ],
  },
  {
    id: 183,
    name: "個人Q版",
    description: "四國地方-高知縣39-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-39-1",
        img: "./images/A02-japan-tour/GPT0016-39/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39-2",
        img: "./images/A02-japan-tour/GPT0016-39/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39-3",
        img: "./images/A02-japan-tour/GPT0016-39/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39-4",
        img: "./images/A02-japan-tour/GPT0016-39/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39-6",
        img: "./images/A02-japan-tour/GPT0016-39/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39-7",
        img: "./images/A02-japan-tour/GPT0016-39/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39-8",
        img: "./images/A02-japan-tour/GPT0016-39/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39-9",
        img: "./images/A02-japan-tour/GPT0016-39/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39-B",
        img: "./images/A02-japan-tour/GPT0016-39/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39-C",
        img: "./images/A02-japan-tour/GPT0016-39/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39-D",
        img: "./images/A02-japan-tour/GPT0016-39/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39-E",
        img: "./images/A02-japan-tour/GPT0016-39/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39-G",
        img: "./images/A02-japan-tour/GPT0016-39/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39-H",
        img: "./images/A02-japan-tour/GPT0016-39/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39-I",
        img: "./images/A02-japan-tour/GPT0016-39/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39-J",
        img: "./images/A02-japan-tour/GPT0016-39/split_3_3.webp",
      },
    ],
  },
  {
    id: 184,
    name: "個人Q版",
    description: "四國地方-高知縣39-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-39X-1",
        img: "./images/A02-japan-tour/GPT0016-39X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39X-2",
        img: "./images/A02-japan-tour/GPT0016-39X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39X-3",
        img: "./images/A02-japan-tour/GPT0016-39X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39X-4",
        img: "./images/A02-japan-tour/GPT0016-39X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39X-6",
        img: "./images/A02-japan-tour/GPT0016-39X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39X-7",
        img: "./images/A02-japan-tour/GPT0016-39X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39X-8",
        img: "./images/A02-japan-tour/GPT0016-39X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39X-9",
        img: "./images/A02-japan-tour/GPT0016-39X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39X-B",
        img: "./images/A02-japan-tour/GPT0016-39X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39X-C",
        img: "./images/A02-japan-tour/GPT0016-39X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39X-D",
        img: "./images/A02-japan-tour/GPT0016-39X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39X-E",
        img: "./images/A02-japan-tour/GPT0016-39X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39X-G",
        img: "./images/A02-japan-tour/GPT0016-39X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39X-H",
        img: "./images/A02-japan-tour/GPT0016-39X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39X-I",
        img: "./images/A02-japan-tour/GPT0016-39X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-39X-J",
        img: "./images/A02-japan-tour/GPT0016-39X/split_3_3.webp",
      },
    ],
  },
  {
    id: 181,
    name: "個人Q版",
    description: "四國地方-愛媛縣38-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-38-1",
        img: "./images/A02-japan-tour/GPT0016-38/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38-2",
        img: "./images/A02-japan-tour/GPT0016-38/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38-3",
        img: "./images/A02-japan-tour/GPT0016-38/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38-4",
        img: "./images/A02-japan-tour/GPT0016-38/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38-6",
        img: "./images/A02-japan-tour/GPT0016-38/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38-7",
        img: "./images/A02-japan-tour/GPT0016-38/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38-8",
        img: "./images/A02-japan-tour/GPT0016-38/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38-9",
        img: "./images/A02-japan-tour/GPT0016-38/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38-B",
        img: "./images/A02-japan-tour/GPT0016-38/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38-C",
        img: "./images/A02-japan-tour/GPT0016-38/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38-D",
        img: "./images/A02-japan-tour/GPT0016-38/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38-E",
        img: "./images/A02-japan-tour/GPT0016-38/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38-G",
        img: "./images/A02-japan-tour/GPT0016-38/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38-H",
        img: "./images/A02-japan-tour/GPT0016-38/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38-I",
        img: "./images/A02-japan-tour/GPT0016-38/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38-J",
        img: "./images/A02-japan-tour/GPT0016-38/split_3_3.webp",
      },
    ],
  },
  {
    id: 182,
    name: "個人Q版",
    description: "四國地方-愛媛縣38-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-38X-1",
        img: "./images/A02-japan-tour/GPT0016-38X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38X-2",
        img: "./images/A02-japan-tour/GPT0016-38X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38X-3",
        img: "./images/A02-japan-tour/GPT0016-38X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38X-4",
        img: "./images/A02-japan-tour/GPT0016-38X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38X-6",
        img: "./images/A02-japan-tour/GPT0016-38X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38X-7",
        img: "./images/A02-japan-tour/GPT0016-38X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38X-8",
        img: "./images/A02-japan-tour/GPT0016-38X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38X-9",
        img: "./images/A02-japan-tour/GPT0016-38X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38X-B",
        img: "./images/A02-japan-tour/GPT0016-38X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38X-C",
        img: "./images/A02-japan-tour/GPT0016-38X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38X-D",
        img: "./images/A02-japan-tour/GPT0016-38X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38X-E",
        img: "./images/A02-japan-tour/GPT0016-38X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38X-G",
        img: "./images/A02-japan-tour/GPT0016-38X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38X-H",
        img: "./images/A02-japan-tour/GPT0016-38X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38X-I",
        img: "./images/A02-japan-tour/GPT0016-38X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-38X-J",
        img: "./images/A02-japan-tour/GPT0016-38X/split_3_3.webp",
      },
    ],
  },
  {
    id: 179,
    name: "個人Q版",
    description: "四國地方-香川縣37-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-37-1",
        img: "./images/A02-japan-tour/GPT0016-37/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37-2",
        img: "./images/A02-japan-tour/GPT0016-37/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37-3",
        img: "./images/A02-japan-tour/GPT0016-37/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37-4",
        img: "./images/A02-japan-tour/GPT0016-37/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37-6",
        img: "./images/A02-japan-tour/GPT0016-37/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37-7",
        img: "./images/A02-japan-tour/GPT0016-37/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37-8",
        img: "./images/A02-japan-tour/GPT0016-37/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37-9",
        img: "./images/A02-japan-tour/GPT0016-37/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37-B",
        img: "./images/A02-japan-tour/GPT0016-37/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37-C",
        img: "./images/A02-japan-tour/GPT0016-37/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37-D",
        img: "./images/A02-japan-tour/GPT0016-37/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37-E",
        img: "./images/A02-japan-tour/GPT0016-37/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37-G",
        img: "./images/A02-japan-tour/GPT0016-37/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37-H",
        img: "./images/A02-japan-tour/GPT0016-37/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37-I",
        img: "./images/A02-japan-tour/GPT0016-37/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37-J",
        img: "./images/A02-japan-tour/GPT0016-37/split_3_3.webp",
      },
    ],
  },
  {
    id: 180,
    name: "個人Q版",
    description: "四國地方-香川縣37-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-37X-1",
        img: "./images/A02-japan-tour/GPT0016-37X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37X-2",
        img: "./images/A02-japan-tour/GPT0016-37X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37X-3",
        img: "./images/A02-japan-tour/GPT0016-37X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37X-4",
        img: "./images/A02-japan-tour/GPT0016-37X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37X-6",
        img: "./images/A02-japan-tour/GPT0016-37X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37X-7",
        img: "./images/A02-japan-tour/GPT0016-37X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37X-8",
        img: "./images/A02-japan-tour/GPT0016-37X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37X-9",
        img: "./images/A02-japan-tour/GPT0016-37X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37X-B",
        img: "./images/A02-japan-tour/GPT0016-37X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37X-C",
        img: "./images/A02-japan-tour/GPT0016-37X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37X-D",
        img: "./images/A02-japan-tour/GPT0016-37X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37X-E",
        img: "./images/A02-japan-tour/GPT0016-37X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37X-G",
        img: "./images/A02-japan-tour/GPT0016-37X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37X-H",
        img: "./images/A02-japan-tour/GPT0016-37X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37X-I",
        img: "./images/A02-japan-tour/GPT0016-37X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-37X-J",
        img: "./images/A02-japan-tour/GPT0016-37X/split_3_3.webp",
      },
    ],
  },
  {
    id: 177,
    name: "個人Q版",
    description: "四國地方-德島縣36-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-36-1",
        img: "./images/A02-japan-tour/GPT0016-36/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36-2",
        img: "./images/A02-japan-tour/GPT0016-36/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36-3",
        img: "./images/A02-japan-tour/GPT0016-36/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36-4",
        img: "./images/A02-japan-tour/GPT0016-36/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36-6",
        img: "./images/A02-japan-tour/GPT0016-36/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36-7",
        img: "./images/A02-japan-tour/GPT0016-36/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36-8",
        img: "./images/A02-japan-tour/GPT0016-36/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36-9",
        img: "./images/A02-japan-tour/GPT0016-36/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36-B",
        img: "./images/A02-japan-tour/GPT0016-36/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36-C",
        img: "./images/A02-japan-tour/GPT0016-36/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36-D",
        img: "./images/A02-japan-tour/GPT0016-36/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36-E",
        img: "./images/A02-japan-tour/GPT0016-36/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36-G",
        img: "./images/A02-japan-tour/GPT0016-36/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36-H",
        img: "./images/A02-japan-tour/GPT0016-36/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36-I",
        img: "./images/A02-japan-tour/GPT0016-36/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36-J",
        img: "./images/A02-japan-tour/GPT0016-36/split_3_3.webp",
      },
    ],
  },
  {
    id: 178,
    name: "個人Q版",
    description: "四國地方-德島縣36-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-36X-1",
        img: "./images/A02-japan-tour/GPT0016-36X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36X-2",
        img: "./images/A02-japan-tour/GPT0016-36X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36X-3",
        img: "./images/A02-japan-tour/GPT0016-36X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36X-4",
        img: "./images/A02-japan-tour/GPT0016-36X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36X-6",
        img: "./images/A02-japan-tour/GPT0016-36X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36X-7",
        img: "./images/A02-japan-tour/GPT0016-36X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36X-8",
        img: "./images/A02-japan-tour/GPT0016-36X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36X-9",
        img: "./images/A02-japan-tour/GPT0016-36X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36X-B",
        img: "./images/A02-japan-tour/GPT0016-36X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36X-C",
        img: "./images/A02-japan-tour/GPT0016-36X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36X-D",
        img: "./images/A02-japan-tour/GPT0016-36X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36X-E",
        img: "./images/A02-japan-tour/GPT0016-36X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36X-G",
        img: "./images/A02-japan-tour/GPT0016-36X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36X-H",
        img: "./images/A02-japan-tour/GPT0016-36X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36X-I",
        img: "./images/A02-japan-tour/GPT0016-36X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-36X-J",
        img: "./images/A02-japan-tour/GPT0016-36X/split_3_3.webp",
      },
    ],
  },
  {
    id: 175,
    name: "個人Q版",
    description: "中國地方-山口縣35-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-35-1",
        img: "./images/A02-japan-tour/GPT0016-35/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35-2",
        img: "./images/A02-japan-tour/GPT0016-35/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35-3",
        img: "./images/A02-japan-tour/GPT0016-35/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35-4",
        img: "./images/A02-japan-tour/GPT0016-35/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35-6",
        img: "./images/A02-japan-tour/GPT0016-35/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35-7",
        img: "./images/A02-japan-tour/GPT0016-35/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35-8",
        img: "./images/A02-japan-tour/GPT0016-35/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35-9",
        img: "./images/A02-japan-tour/GPT0016-35/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35-B",
        img: "./images/A02-japan-tour/GPT0016-35/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35-C",
        img: "./images/A02-japan-tour/GPT0016-35/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35-D",
        img: "./images/A02-japan-tour/GPT0016-35/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35-E",
        img: "./images/A02-japan-tour/GPT0016-35/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35-G",
        img: "./images/A02-japan-tour/GPT0016-35/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35-H",
        img: "./images/A02-japan-tour/GPT0016-35/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35-I",
        img: "./images/A02-japan-tour/GPT0016-35/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35-J",
        img: "./images/A02-japan-tour/GPT0016-35/split_3_3.webp",
      },
    ],
  },
  {
    id: 176,
    name: "個人Q版",
    description: "中國地方-山口縣35-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-35X-1",
        img: "./images/A02-japan-tour/GPT0016-35X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35X-2",
        img: "./images/A02-japan-tour/GPT0016-35X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35X-3",
        img: "./images/A02-japan-tour/GPT0016-35X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35X-4",
        img: "./images/A02-japan-tour/GPT0016-35X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35X-6",
        img: "./images/A02-japan-tour/GPT0016-35X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35X-7",
        img: "./images/A02-japan-tour/GPT0016-35X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35X-8",
        img: "./images/A02-japan-tour/GPT0016-35X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35X-9",
        img: "./images/A02-japan-tour/GPT0016-35X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35X-B",
        img: "./images/A02-japan-tour/GPT0016-35X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35X-C",
        img: "./images/A02-japan-tour/GPT0016-35X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35X-D",
        img: "./images/A02-japan-tour/GPT0016-35X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35X-E",
        img: "./images/A02-japan-tour/GPT0016-35X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35X-G",
        img: "./images/A02-japan-tour/GPT0016-35X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35X-H",
        img: "./images/A02-japan-tour/GPT0016-35X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35X-I",
        img: "./images/A02-japan-tour/GPT0016-35X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-35X-J",
        img: "./images/A02-japan-tour/GPT0016-35X/split_3_3.webp",
      },
    ],
  },
  {
    id: 173,
    name: "個人Q版",
    description: "中國地方-廣島縣34-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-34-1",
        img: "./images/A02-japan-tour/GPT0016-34/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34-2",
        img: "./images/A02-japan-tour/GPT0016-34/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34-3",
        img: "./images/A02-japan-tour/GPT0016-34/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34-4",
        img: "./images/A02-japan-tour/GPT0016-34/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34-6",
        img: "./images/A02-japan-tour/GPT0016-34/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34-7",
        img: "./images/A02-japan-tour/GPT0016-34/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34-8",
        img: "./images/A02-japan-tour/GPT0016-34/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34-9",
        img: "./images/A02-japan-tour/GPT0016-34/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34-B",
        img: "./images/A02-japan-tour/GPT0016-34/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34-C",
        img: "./images/A02-japan-tour/GPT0016-34/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34-D",
        img: "./images/A02-japan-tour/GPT0016-34/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34-E",
        img: "./images/A02-japan-tour/GPT0016-34/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34-G",
        img: "./images/A02-japan-tour/GPT0016-34/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34-H",
        img: "./images/A02-japan-tour/GPT0016-34/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34-I",
        img: "./images/A02-japan-tour/GPT0016-34/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34-J",
        img: "./images/A02-japan-tour/GPT0016-34/split_3_3.webp",
      },
    ],
  },
  {
    id: 174,
    name: "個人Q版",
    description: "中國地方-廣島縣34-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-34X-1",
        img: "./images/A02-japan-tour/GPT0016-34X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34X-2",
        img: "./images/A02-japan-tour/GPT0016-34X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34X-3",
        img: "./images/A02-japan-tour/GPT0016-34X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34X-4",
        img: "./images/A02-japan-tour/GPT0016-34X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34X-6",
        img: "./images/A02-japan-tour/GPT0016-34X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34X-7",
        img: "./images/A02-japan-tour/GPT0016-34X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34X-8",
        img: "./images/A02-japan-tour/GPT0016-34X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34X-9",
        img: "./images/A02-japan-tour/GPT0016-34X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34X-B",
        img: "./images/A02-japan-tour/GPT0016-34X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34X-C",
        img: "./images/A02-japan-tour/GPT0016-34X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34X-D",
        img: "./images/A02-japan-tour/GPT0016-34X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34X-E",
        img: "./images/A02-japan-tour/GPT0016-34X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34X-G",
        img: "./images/A02-japan-tour/GPT0016-34X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34X-H",
        img: "./images/A02-japan-tour/GPT0016-34X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34X-I",
        img: "./images/A02-japan-tour/GPT0016-34X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-34X-J",
        img: "./images/A02-japan-tour/GPT0016-34X/split_3_3.webp",
      },
    ],
  },
  {
    id: 171,
    name: "個人Q版",
    description: "中國地方-岡山縣33-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-33-1",
        img: "./images/A02-japan-tour/GPT0016-33/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33-2",
        img: "./images/A02-japan-tour/GPT0016-33/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33-3",
        img: "./images/A02-japan-tour/GPT0016-33/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33-4",
        img: "./images/A02-japan-tour/GPT0016-33/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33-6",
        img: "./images/A02-japan-tour/GPT0016-33/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33-7",
        img: "./images/A02-japan-tour/GPT0016-33/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33-8",
        img: "./images/A02-japan-tour/GPT0016-33/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33-9",
        img: "./images/A02-japan-tour/GPT0016-33/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33-B",
        img: "./images/A02-japan-tour/GPT0016-33/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33-C",
        img: "./images/A02-japan-tour/GPT0016-33/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33-D",
        img: "./images/A02-japan-tour/GPT0016-33/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33-E",
        img: "./images/A02-japan-tour/GPT0016-33/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33-G",
        img: "./images/A02-japan-tour/GPT0016-33/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33-H",
        img: "./images/A02-japan-tour/GPT0016-33/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33-I",
        img: "./images/A02-japan-tour/GPT0016-33/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33-J",
        img: "./images/A02-japan-tour/GPT0016-33/split_3_3.webp",
      },
    ],
  },
  {
    id: 172,
    name: "個人Q版",
    description: "中國地方-岡山縣縣33-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-33X-1",
        img: "./images/A02-japan-tour/GPT0016-33X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33X-2",
        img: "./images/A02-japan-tour/GPT0016-33X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33X-3",
        img: "./images/A02-japan-tour/GPT0016-33X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33X-4",
        img: "./images/A02-japan-tour/GPT0016-33X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33X-6",
        img: "./images/A02-japan-tour/GPT0016-33X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33X-7",
        img: "./images/A02-japan-tour/GPT0016-33X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33X-8",
        img: "./images/A02-japan-tour/GPT0016-33X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33X-9",
        img: "./images/A02-japan-tour/GPT0016-33X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33X-B",
        img: "./images/A02-japan-tour/GPT0016-33X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33X-C",
        img: "./images/A02-japan-tour/GPT0016-33X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33X-D",
        img: "./images/A02-japan-tour/GPT0016-33X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33X-E",
        img: "./images/A02-japan-tour/GPT0016-33X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33X-G",
        img: "./images/A02-japan-tour/GPT0016-33X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33X-H",
        img: "./images/A02-japan-tour/GPT0016-33X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33X-I",
        img: "./images/A02-japan-tour/GPT0016-33X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-33X-J",
        img: "./images/A02-japan-tour/GPT0016-33X/split_3_3.webp",
      },
    ],
  },
  {
    id: 169,
    name: "個人Q版",
    description: "中國地方-島根縣32-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-32-1",
        img: "./images/A02-japan-tour/GPT0016-32/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32-2",
        img: "./images/A02-japan-tour/GPT0016-32/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32-3",
        img: "./images/A02-japan-tour/GPT0016-32/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32-4",
        img: "./images/A02-japan-tour/GPT0016-32/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32-6",
        img: "./images/A02-japan-tour/GPT0016-32/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32-7",
        img: "./images/A02-japan-tour/GPT0016-32/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32-8",
        img: "./images/A02-japan-tour/GPT0016-32/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32-9",
        img: "./images/A02-japan-tour/GPT0016-32/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32-B",
        img: "./images/A02-japan-tour/GPT0016-32/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32-C",
        img: "./images/A02-japan-tour/GPT0016-32/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32-D",
        img: "./images/A02-japan-tour/GPT0016-32/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32-E",
        img: "./images/A02-japan-tour/GPT0016-32/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32-G",
        img: "./images/A02-japan-tour/GPT0016-32/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32-H",
        img: "./images/A02-japan-tour/GPT0016-32/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32-I",
        img: "./images/A02-japan-tour/GPT0016-32/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32-J",
        img: "./images/A02-japan-tour/GPT0016-32/split_3_3.webp",
      },
    ],
  },
  {
    id: 170,
    name: "個人Q版",
    description: "中國地方-島根縣32-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-32X-1",
        img: "./images/A02-japan-tour/GPT0016-32X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32X-2",
        img: "./images/A02-japan-tour/GPT0016-32X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32X-3",
        img: "./images/A02-japan-tour/GPT0016-32X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32X-4",
        img: "./images/A02-japan-tour/GPT0016-32X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32X-6",
        img: "./images/A02-japan-tour/GPT0016-32X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32X-7",
        img: "./images/A02-japan-tour/GPT0016-32X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32X-8",
        img: "./images/A02-japan-tour/GPT0016-32X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32X-9",
        img: "./images/A02-japan-tour/GPT0016-32X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32X-B",
        img: "./images/A02-japan-tour/GPT0016-32X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32X-C",
        img: "./images/A02-japan-tour/GPT0016-32X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32X-D",
        img: "./images/A02-japan-tour/GPT0016-32X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32X-E",
        img: "./images/A02-japan-tour/GPT0016-32X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32X-G",
        img: "./images/A02-japan-tour/GPT0016-32X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32X-H",
        img: "./images/A02-japan-tour/GPT0016-32X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32X-I",
        img: "./images/A02-japan-tour/GPT0016-32X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-32X-J",
        img: "./images/A02-japan-tour/GPT0016-32X/split_3_3.webp",
      },
    ],
  },
  {
    id: 167,
    name: "個人Q版",
    description: "中國地方-鳥取縣31-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-31-1",
        img: "./images/A02-japan-tour/GPT0016-31/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31-2",
        img: "./images/A02-japan-tour/GPT0016-31/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31-3",
        img: "./images/A02-japan-tour/GPT0016-31/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31-4",
        img: "./images/A02-japan-tour/GPT0016-31/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31-6",
        img: "./images/A02-japan-tour/GPT0016-31/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31-7",
        img: "./images/A02-japan-tour/GPT0016-31/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31-8",
        img: "./images/A02-japan-tour/GPT0016-31/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31-9",
        img: "./images/A02-japan-tour/GPT0016-31/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31-B",
        img: "./images/A02-japan-tour/GPT0016-31/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31-C",
        img: "./images/A02-japan-tour/GPT0016-31/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31-D",
        img: "./images/A02-japan-tour/GPT0016-31/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31-E",
        img: "./images/A02-japan-tour/GPT0016-31/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31-G",
        img: "./images/A02-japan-tour/GPT0016-31/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31-H",
        img: "./images/A02-japan-tour/GPT0016-31/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31-I",
        img: "./images/A02-japan-tour/GPT0016-31/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31-J",
        img: "./images/A02-japan-tour/GPT0016-31/split_3_3.webp",
      },
    ],
  },
  {
    id: 168,
    name: "個人Q版",
    description: "中國地方-鳥取縣31-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-31X-1",
        img: "./images/A02-japan-tour/GPT0016-31X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31X-2",
        img: "./images/A02-japan-tour/GPT0016-31X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31X-3",
        img: "./images/A02-japan-tour/GPT0016-31X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31X-4",
        img: "./images/A02-japan-tour/GPT0016-31X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31X-6",
        img: "./images/A02-japan-tour/GPT0016-31X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31X-7",
        img: "./images/A02-japan-tour/GPT0016-31X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31X-8",
        img: "./images/A02-japan-tour/GPT0016-31X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31X-9",
        img: "./images/A02-japan-tour/GPT0016-31X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31X-B",
        img: "./images/A02-japan-tour/GPT0016-31X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31X-C",
        img: "./images/A02-japan-tour/GPT0016-31X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31X-D",
        img: "./images/A02-japan-tour/GPT0016-31X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31X-E",
        img: "./images/A02-japan-tour/GPT0016-31X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31X-G",
        img: "./images/A02-japan-tour/GPT0016-31X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31X-H",
        img: "./images/A02-japan-tour/GPT0016-31X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31X-I",
        img: "./images/A02-japan-tour/GPT0016-31X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-31X-J",
        img: "./images/A02-japan-tour/GPT0016-31X/split_3_3.webp",
      },
    ],
  },
  {
    id: 165,
    name: "個人Q版",
    description: "近畿地方-和歌山縣30-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-30-1",
        img: "./images/A02-japan-tour/GPT0016-30/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30-2",
        img: "./images/A02-japan-tour/GPT0016-30/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30-3",
        img: "./images/A02-japan-tour/GPT0016-30/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30-4",
        img: "./images/A02-japan-tour/GPT0016-30/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30-6",
        img: "./images/A02-japan-tour/GPT0016-30/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30-7",
        img: "./images/A02-japan-tour/GPT0016-30/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30-8",
        img: "./images/A02-japan-tour/GPT0016-30/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30-9",
        img: "./images/A02-japan-tour/GPT0016-30/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30-B",
        img: "./images/A02-japan-tour/GPT0016-30/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30-C",
        img: "./images/A02-japan-tour/GPT0016-30/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30-D",
        img: "./images/A02-japan-tour/GPT0016-30/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30-E",
        img: "./images/A02-japan-tour/GPT0016-30/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30-G",
        img: "./images/A02-japan-tour/GPT0016-30/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30-H",
        img: "./images/A02-japan-tour/GPT0016-30/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30-I",
        img: "./images/A02-japan-tour/GPT0016-30/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30-J",
        img: "./images/A02-japan-tour/GPT0016-30/split_3_3.webp",
      },
    ],
  },
  {
    id: 166,
    name: "個人Q版",
    description: "近畿地方-和歌山縣30-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-30X-1",
        img: "./images/A02-japan-tour/GPT0016-30X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30X-2",
        img: "./images/A02-japan-tour/GPT0016-30X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30X-3",
        img: "./images/A02-japan-tour/GPT0016-30X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30X-4",
        img: "./images/A02-japan-tour/GPT0016-30X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30X-6",
        img: "./images/A02-japan-tour/GPT0016-30X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30X-7",
        img: "./images/A02-japan-tour/GPT0016-30X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30X-8",
        img: "./images/A02-japan-tour/GPT0016-30X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30X-9",
        img: "./images/A02-japan-tour/GPT0016-30X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30X-B",
        img: "./images/A02-japan-tour/GPT0016-30X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30X-C",
        img: "./images/A02-japan-tour/GPT0016-30X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30X-D",
        img: "./images/A02-japan-tour/GPT0016-30X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30X-E",
        img: "./images/A02-japan-tour/GPT0016-30X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30X-G",
        img: "./images/A02-japan-tour/GPT0016-30X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30X-H",
        img: "./images/A02-japan-tour/GPT0016-30X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30X-I",
        img: "./images/A02-japan-tour/GPT0016-30X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-30X-J",
        img: "./images/A02-japan-tour/GPT0016-30X/split_3_3.webp",
      },
    ],
  },
  {
    id: 163,
    name: "個人Q版",
    description: "近畿地方-奈良縣29-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-29-1",
        img: "./images/A02-japan-tour/GPT0016-29/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29-2",
        img: "./images/A02-japan-tour/GPT0016-29/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29-3",
        img: "./images/A02-japan-tour/GPT0016-29/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29-4",
        img: "./images/A02-japan-tour/GPT0016-29/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29-6",
        img: "./images/A02-japan-tour/GPT0016-29/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29-7",
        img: "./images/A02-japan-tour/GPT0016-29/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29-8",
        img: "./images/A02-japan-tour/GPT0016-29/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29-9",
        img: "./images/A02-japan-tour/GPT0016-29/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29-B",
        img: "./images/A02-japan-tour/GPT0016-29/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29-C",
        img: "./images/A02-japan-tour/GPT0016-29/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29-D",
        img: "./images/A02-japan-tour/GPT0016-29/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29-E",
        img: "./images/A02-japan-tour/GPT0016-29/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29-G",
        img: "./images/A02-japan-tour/GPT0016-29/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29-H",
        img: "./images/A02-japan-tour/GPT0016-29/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29-I",
        img: "./images/A02-japan-tour/GPT0016-29/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29-J",
        img: "./images/A02-japan-tour/GPT0016-29/split_3_3.webp",
      },
    ],
  },
  {
    id: 164,
    name: "個人Q版",
    description: "近畿地方-奈良縣29-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-29X-1",
        img: "./images/A02-japan-tour/GPT0016-29X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29X-2",
        img: "./images/A02-japan-tour/GPT0016-29X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29X-3",
        img: "./images/A02-japan-tour/GPT0016-29X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29X-4",
        img: "./images/A02-japan-tour/GPT0016-29X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29X-6",
        img: "./images/A02-japan-tour/GPT0016-29X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29X-7",
        img: "./images/A02-japan-tour/GPT0016-29X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29X-8",
        img: "./images/A02-japan-tour/GPT0016-29X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29X-9",
        img: "./images/A02-japan-tour/GPT0016-29X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29X-B",
        img: "./images/A02-japan-tour/GPT0016-29X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29X-C",
        img: "./images/A02-japan-tour/GPT0016-29X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29X-D",
        img: "./images/A02-japan-tour/GPT0016-29X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29X-E",
        img: "./images/A02-japan-tour/GPT0016-29X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29X-G",
        img: "./images/A02-japan-tour/GPT0016-29X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29X-H",
        img: "./images/A02-japan-tour/GPT0016-29X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29X-I",
        img: "./images/A02-japan-tour/GPT0016-29X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-29X-J",
        img: "./images/A02-japan-tour/GPT0016-29X/split_3_3.webp",
      },
    ],
  },
  {
    id: 161,
    name: "個人Q版",
    description: "近畿地方-兵庫縣28-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-28-1",
        img: "./images/A02-japan-tour/GPT0016-28/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28-2",
        img: "./images/A02-japan-tour/GPT0016-28/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28-3",
        img: "./images/A02-japan-tour/GPT0016-28/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28-4",
        img: "./images/A02-japan-tour/GPT0016-28/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28-6",
        img: "./images/A02-japan-tour/GPT0016-28/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28-7",
        img: "./images/A02-japan-tour/GPT0016-28/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28-8",
        img: "./images/A02-japan-tour/GPT0016-28/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28-9",
        img: "./images/A02-japan-tour/GPT0016-28/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28-B",
        img: "./images/A02-japan-tour/GPT0016-28/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28-C",
        img: "./images/A02-japan-tour/GPT0016-28/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28-D",
        img: "./images/A02-japan-tour/GPT0016-28/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28-E",
        img: "./images/A02-japan-tour/GPT0016-28/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28-G",
        img: "./images/A02-japan-tour/GPT0016-28/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28-H",
        img: "./images/A02-japan-tour/GPT0016-28/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28-I",
        img: "./images/A02-japan-tour/GPT0016-28/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28-J",
        img: "./images/A02-japan-tour/GPT0016-28/split_3_3.webp",
      },
    ],
  },
  {
    id: 162,
    name: "個人Q版",
    description: "近畿地方-兵庫縣28-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-28X-1",
        img: "./images/A02-japan-tour/GPT0016-28X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28X-2",
        img: "./images/A02-japan-tour/GPT0016-28X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28X-3",
        img: "./images/A02-japan-tour/GPT0016-28X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28X-4",
        img: "./images/A02-japan-tour/GPT0016-28X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28X-6",
        img: "./images/A02-japan-tour/GPT0016-28X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28X-7",
        img: "./images/A02-japan-tour/GPT0016-28X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28X-8",
        img: "./images/A02-japan-tour/GPT0016-28X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28X-9",
        img: "./images/A02-japan-tour/GPT0016-28X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28X-B",
        img: "./images/A02-japan-tour/GPT0016-28X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28X-C",
        img: "./images/A02-japan-tour/GPT0016-28X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28X-D",
        img: "./images/A02-japan-tour/GPT0016-28X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28X-E",
        img: "./images/A02-japan-tour/GPT0016-28X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28X-G",
        img: "./images/A02-japan-tour/GPT0016-28X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28X-H",
        img: "./images/A02-japan-tour/GPT0016-28X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28X-I",
        img: "./images/A02-japan-tour/GPT0016-28X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-28X-J",
        img: "./images/A02-japan-tour/GPT0016-28X/split_3_3.webp",
      },
    ],
  },
  {
    id: 159,
    name: "個人Q版",
    description: "近畿地方-大阪府27-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-27-1",
        img: "./images/A02-japan-tour/GPT0016-27/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27-2",
        img: "./images/A02-japan-tour/GPT0016-27/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27-3",
        img: "./images/A02-japan-tour/GPT0016-27/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27-4",
        img: "./images/A02-japan-tour/GPT0016-27/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27-6",
        img: "./images/A02-japan-tour/GPT0016-27/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27-7",
        img: "./images/A02-japan-tour/GPT0016-27/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27-8",
        img: "./images/A02-japan-tour/GPT0016-27/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27-9",
        img: "./images/A02-japan-tour/GPT0016-27/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27-B",
        img: "./images/A02-japan-tour/GPT0016-27/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27-C",
        img: "./images/A02-japan-tour/GPT0016-27/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27-D",
        img: "./images/A02-japan-tour/GPT0016-27/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27-E",
        img: "./images/A02-japan-tour/GPT0016-27/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27-G",
        img: "./images/A02-japan-tour/GPT0016-27/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27-H",
        img: "./images/A02-japan-tour/GPT0016-27/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27-I",
        img: "./images/A02-japan-tour/GPT0016-27/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27-J",
        img: "./images/A02-japan-tour/GPT0016-27/split_3_3.webp",
      },
    ],
  },
  {
    id: 160,
    name: "個人Q版",
    description: "近畿地方-大阪府27-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-27X-1",
        img: "./images/A02-japan-tour/GPT0016-27X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27X-2",
        img: "./images/A02-japan-tour/GPT0016-27X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27X-3",
        img: "./images/A02-japan-tour/GPT0016-27X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27X-4",
        img: "./images/A02-japan-tour/GPT0016-27X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27X-6",
        img: "./images/A02-japan-tour/GPT0016-27X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27X-7",
        img: "./images/A02-japan-tour/GPT0016-27X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27X-8",
        img: "./images/A02-japan-tour/GPT0016-27X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27X-9",
        img: "./images/A02-japan-tour/GPT0016-27X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27X-B",
        img: "./images/A02-japan-tour/GPT0016-27X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27X-C",
        img: "./images/A02-japan-tour/GPT0016-27X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27X-D",
        img: "./images/A02-japan-tour/GPT0016-27X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27X-E",
        img: "./images/A02-japan-tour/GPT0016-27X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27X-G",
        img: "./images/A02-japan-tour/GPT0016-27X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27X-H",
        img: "./images/A02-japan-tour/GPT0016-27X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27X-I",
        img: "./images/A02-japan-tour/GPT0016-27X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-27X-J",
        img: "./images/A02-japan-tour/GPT0016-27X/split_3_3.webp",
      },
    ],
  },
  {
    id: 157,
    name: "個人Q版",
    description: "近畿地方-京都府26-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-26-1",
        img: "./images/A02-japan-tour/GPT0016-26/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26-2",
        img: "./images/A02-japan-tour/GPT0016-26/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26-3",
        img: "./images/A02-japan-tour/GPT0016-26/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26-4",
        img: "./images/A02-japan-tour/GPT0016-26/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26-6",
        img: "./images/A02-japan-tour/GPT0016-26/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26-7",
        img: "./images/A02-japan-tour/GPT0016-26/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26-8",
        img: "./images/A02-japan-tour/GPT0016-26/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26-9",
        img: "./images/A02-japan-tour/GPT0016-26/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26-B",
        img: "./images/A02-japan-tour/GPT0016-26/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26-C",
        img: "./images/A02-japan-tour/GPT0016-26/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26-D",
        img: "./images/A02-japan-tour/GPT0016-26/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26-E",
        img: "./images/A02-japan-tour/GPT0016-26/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26-G",
        img: "./images/A02-japan-tour/GPT0016-26/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26-H",
        img: "./images/A02-japan-tour/GPT0016-26/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26-I",
        img: "./images/A02-japan-tour/GPT0016-26/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26-J",
        img: "./images/A02-japan-tour/GPT0016-26/split_3_3.webp",
      },
    ],
  },
  {
    id: 158,
    name: "個人Q版",
    description: "近畿地方-京都府26-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-26X-1",
        img: "./images/A02-japan-tour/GPT0016-26X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26X-2",
        img: "./images/A02-japan-tour/GPT0016-26X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26X-3",
        img: "./images/A02-japan-tour/GPT0016-26X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26X-4",
        img: "./images/A02-japan-tour/GPT0016-26X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26X-6",
        img: "./images/A02-japan-tour/GPT0016-26X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26X-7",
        img: "./images/A02-japan-tour/GPT0016-26X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26X-8",
        img: "./images/A02-japan-tour/GPT0016-26X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26X-9",
        img: "./images/A02-japan-tour/GPT0016-26X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26X-B",
        img: "./images/A02-japan-tour/GPT0016-26X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26X-C",
        img: "./images/A02-japan-tour/GPT0016-26X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26X-D",
        img: "./images/A02-japan-tour/GPT0016-26X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26X-E",
        img: "./images/A02-japan-tour/GPT0016-26X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26X-G",
        img: "./images/A02-japan-tour/GPT0016-26X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26X-H",
        img: "./images/A02-japan-tour/GPT0016-26X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26X-I",
        img: "./images/A02-japan-tour/GPT0016-26X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-26X-J",
        img: "./images/A02-japan-tour/GPT0016-26X/split_3_3.webp",
      },
    ],
  },
  {
    id: 155,
    name: "個人Q版",
    description: "近畿地方-滋賀縣25-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-25-1",
        img: "./images/A02-japan-tour/GPT0016-25/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25-2",
        img: "./images/A02-japan-tour/GPT0016-25/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25-3",
        img: "./images/A02-japan-tour/GPT0016-25/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25-4",
        img: "./images/A02-japan-tour/GPT0016-25/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25-6",
        img: "./images/A02-japan-tour/GPT0016-25/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25-7",
        img: "./images/A02-japan-tour/GPT0016-25/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25-8",
        img: "./images/A02-japan-tour/GPT0016-25/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25-9",
        img: "./images/A02-japan-tour/GPT0016-25/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25-B",
        img: "./images/A02-japan-tour/GPT0016-25/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25-C",
        img: "./images/A02-japan-tour/GPT0016-25/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25-D",
        img: "./images/A02-japan-tour/GPT0016-25/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25-E",
        img: "./images/A02-japan-tour/GPT0016-25/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25-G",
        img: "./images/A02-japan-tour/GPT0016-25/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25-H",
        img: "./images/A02-japan-tour/GPT0016-25/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25-I",
        img: "./images/A02-japan-tour/GPT0016-25/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25-J",
        img: "./images/A02-japan-tour/GPT0016-25/split_3_3.webp",
      },
    ],
  },
  {
    id: 156,
    name: "個人Q版",
    description: "近畿地方-滋賀縣25-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-25X-1",
        img: "./images/A02-japan-tour/GPT0016-25X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25X-2",
        img: "./images/A02-japan-tour/GPT0016-25X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25X-3",
        img: "./images/A02-japan-tour/GPT0016-25X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25X-4",
        img: "./images/A02-japan-tour/GPT0016-25X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25X-6",
        img: "./images/A02-japan-tour/GPT0016-25X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25X-7",
        img: "./images/A02-japan-tour/GPT0016-25X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25X-8",
        img: "./images/A02-japan-tour/GPT0016-25X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25X-9",
        img: "./images/A02-japan-tour/GPT0016-25X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25X-B",
        img: "./images/A02-japan-tour/GPT0016-25X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25X-C",
        img: "./images/A02-japan-tour/GPT0016-25X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25X-D",
        img: "./images/A02-japan-tour/GPT0016-25X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25X-E",
        img: "./images/A02-japan-tour/GPT0016-25X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25X-G",
        img: "./images/A02-japan-tour/GPT0016-25X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25X-H",
        img: "./images/A02-japan-tour/GPT0016-25X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25X-I",
        img: "./images/A02-japan-tour/GPT0016-25X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-25X-J",
        img: "./images/A02-japan-tour/GPT0016-25X/split_3_3.webp",
      },
    ],
  },
  {
    id: 153,
    name: "個人Q版",
    description: "近畿地方-三重縣24-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-24-1",
        img: "./images/A02-japan-tour/GPT0016-24/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24-2",
        img: "./images/A02-japan-tour/GPT0016-24/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24-3",
        img: "./images/A02-japan-tour/GPT0016-24/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24-4",
        img: "./images/A02-japan-tour/GPT0016-24/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24-6",
        img: "./images/A02-japan-tour/GPT0016-24/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24-7",
        img: "./images/A02-japan-tour/GPT0016-24/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24-8",
        img: "./images/A02-japan-tour/GPT0016-24/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24-9",
        img: "./images/A02-japan-tour/GPT0016-24/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24-B",
        img: "./images/A02-japan-tour/GPT0016-24/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24-C",
        img: "./images/A02-japan-tour/GPT0016-24/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24-D",
        img: "./images/A02-japan-tour/GPT0016-24/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24-E",
        img: "./images/A02-japan-tour/GPT0016-24/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24-G",
        img: "./images/A02-japan-tour/GPT0016-24/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24-H",
        img: "./images/A02-japan-tour/GPT0016-24/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24-I",
        img: "./images/A02-japan-tour/GPT0016-24/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24-J",
        img: "./images/A02-japan-tour/GPT0016-24/split_3_3.webp",
      },
    ],
  },
  {
    id: 154,
    name: "個人Q版",
    description: "近畿地方-三重縣24-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-24X-1",
        img: "./images/A02-japan-tour/GPT0016-24X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24X-2",
        img: "./images/A02-japan-tour/GPT0016-24X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24X-3",
        img: "./images/A02-japan-tour/GPT0016-24X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24X-4",
        img: "./images/A02-japan-tour/GPT0016-24X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24X-6",
        img: "./images/A02-japan-tour/GPT0016-24X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24X-7",
        img: "./images/A02-japan-tour/GPT0016-24X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24X-8",
        img: "./images/A02-japan-tour/GPT0016-24X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24X-9",
        img: "./images/A02-japan-tour/GPT0016-24X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24X-B",
        img: "./images/A02-japan-tour/GPT0016-24X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24X-C",
        img: "./images/A02-japan-tour/GPT0016-24X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24X-D",
        img: "./images/A02-japan-tour/GPT0016-24X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24X-E",
        img: "./images/A02-japan-tour/GPT0016-24X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24X-G",
        img: "./images/A02-japan-tour/GPT0016-24X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24X-H",
        img: "./images/A02-japan-tour/GPT0016-24X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24X-I",
        img: "./images/A02-japan-tour/GPT0016-24X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-24X-J",
        img: "./images/A02-japan-tour/GPT0016-24X/split_3_3.webp",
      },
    ],
  },
  {
    id: 151,
    name: "個人Q版",
    description: "中部地方-愛知縣23-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-23-1",
        img: "./images/A02-japan-tour/GPT0016-23/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23-2",
        img: "./images/A02-japan-tour/GPT0016-23/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23-3",
        img: "./images/A02-japan-tour/GPT0016-23/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23-4",
        img: "./images/A02-japan-tour/GPT0016-23/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23-6",
        img: "./images/A02-japan-tour/GPT0016-23/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23-7",
        img: "./images/A02-japan-tour/GPT0016-23/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23-8",
        img: "./images/A02-japan-tour/GPT0016-23/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23-9",
        img: "./images/A02-japan-tour/GPT0016-23/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23-B",
        img: "./images/A02-japan-tour/GPT0016-23/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23-C",
        img: "./images/A02-japan-tour/GPT0016-23/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23-D",
        img: "./images/A02-japan-tour/GPT0016-23/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23-E",
        img: "./images/A02-japan-tour/GPT0016-23/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23-G",
        img: "./images/A02-japan-tour/GPT0016-23/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23-H",
        img: "./images/A02-japan-tour/GPT0016-23/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23-I",
        img: "./images/A02-japan-tour/GPT0016-23/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23-J",
        img: "./images/A02-japan-tour/GPT0016-23/split_3_3.webp",
      },
    ],
  },
  {
    id: 152,
    name: "個人Q版",
    description: "中部地方-愛知縣23-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-23X-1",
        img: "./images/A02-japan-tour/GPT0016-23X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23X-2",
        img: "./images/A02-japan-tour/GPT0016-23X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23X-3",
        img: "./images/A02-japan-tour/GPT0016-23X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23X-4",
        img: "./images/A02-japan-tour/GPT0016-23X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23X-6",
        img: "./images/A02-japan-tour/GPT0016-23X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23X-7",
        img: "./images/A02-japan-tour/GPT0016-23X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23X-8",
        img: "./images/A02-japan-tour/GPT0016-23X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23X-9",
        img: "./images/A02-japan-tour/GPT0016-23X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23X-B",
        img: "./images/A02-japan-tour/GPT0016-23X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23X-C",
        img: "./images/A02-japan-tour/GPT0016-23X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23X-D",
        img: "./images/A02-japan-tour/GPT0016-23X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23X-E",
        img: "./images/A02-japan-tour/GPT0016-23X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23X-G",
        img: "./images/A02-japan-tour/GPT0016-23X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23X-H",
        img: "./images/A02-japan-tour/GPT0016-23X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23X-I",
        img: "./images/A02-japan-tour/GPT0016-23X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-23X-J",
        img: "./images/A02-japan-tour/GPT0016-23X/split_3_3.webp",
      },
    ],
  },
  {
    id: 149,
    name: "個人Q版",
    description: "中部地方-靜岡縣22-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-22-1",
        img: "./images/A02-japan-tour/GPT0016-22/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22-2",
        img: "./images/A02-japan-tour/GPT0016-22/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22-3",
        img: "./images/A02-japan-tour/GPT0016-22/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22-4",
        img: "./images/A02-japan-tour/GPT0016-22/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22-6",
        img: "./images/A02-japan-tour/GPT0016-22/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22-7",
        img: "./images/A02-japan-tour/GPT0016-22/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22-8",
        img: "./images/A02-japan-tour/GPT0016-22/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22-9",
        img: "./images/A02-japan-tour/GPT0016-22/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22-B",
        img: "./images/A02-japan-tour/GPT0016-22/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22-C",
        img: "./images/A02-japan-tour/GPT0016-22/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22-D",
        img: "./images/A02-japan-tour/GPT0016-22/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22-E",
        img: "./images/A02-japan-tour/GPT0016-22/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22-G",
        img: "./images/A02-japan-tour/GPT0016-22/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22-H",
        img: "./images/A02-japan-tour/GPT0016-22/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22-I",
        img: "./images/A02-japan-tour/GPT0016-22/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22-J",
        img: "./images/A02-japan-tour/GPT0016-22/split_3_3.webp",
      },
    ],
  },
  {
    id: 150,
    name: "個人Q版",
    description: "中部地方-靜岡縣22-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-22X-1",
        img: "./images/A02-japan-tour/GPT0016-22X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22X-2",
        img: "./images/A02-japan-tour/GPT0016-22X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22X-3",
        img: "./images/A02-japan-tour/GPT0016-22X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22X-4",
        img: "./images/A02-japan-tour/GPT0016-22X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22X-6",
        img: "./images/A02-japan-tour/GPT0016-22X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22X-7",
        img: "./images/A02-japan-tour/GPT0016-22X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22X-8",
        img: "./images/A02-japan-tour/GPT0016-22X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22X-9",
        img: "./images/A02-japan-tour/GPT0016-22X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22X-B",
        img: "./images/A02-japan-tour/GPT0016-22X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22X-C",
        img: "./images/A02-japan-tour/GPT0016-22X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22X-D",
        img: "./images/A02-japan-tour/GPT0016-22X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22X-E",
        img: "./images/A02-japan-tour/GPT0016-22X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22X-G",
        img: "./images/A02-japan-tour/GPT0016-22X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22X-H",
        img: "./images/A02-japan-tour/GPT0016-22X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22X-I",
        img: "./images/A02-japan-tour/GPT0016-22X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-22X-J",
        img: "./images/A02-japan-tour/GPT0016-22X/split_3_3.webp",
      },
    ],
  },
  {
    id: 147,
    name: "個人Q版",
    description: "中部地方-岐阜縣21-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-21-1",
        img: "./images/A02-japan-tour/GPT0016-21/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21-2",
        img: "./images/A02-japan-tour/GPT0016-21/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21-3",
        img: "./images/A02-japan-tour/GPT0016-21/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21-4",
        img: "./images/A02-japan-tour/GPT0016-21/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21-6",
        img: "./images/A02-japan-tour/GPT0016-21/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21-7",
        img: "./images/A02-japan-tour/GPT0016-21/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21-8",
        img: "./images/A02-japan-tour/GPT0016-21/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21-9",
        img: "./images/A02-japan-tour/GPT0016-21/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21-B",
        img: "./images/A02-japan-tour/GPT0016-21/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21-C",
        img: "./images/A02-japan-tour/GPT0016-21/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21-D",
        img: "./images/A02-japan-tour/GPT0016-21/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21-E",
        img: "./images/A02-japan-tour/GPT0016-21/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21-G",
        img: "./images/A02-japan-tour/GPT0016-21/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21-H",
        img: "./images/A02-japan-tour/GPT0016-21/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21-I",
        img: "./images/A02-japan-tour/GPT0016-21/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21-J",
        img: "./images/A02-japan-tour/GPT0016-21/split_3_3.webp",
      },
    ],
  },
  {
    id: 148,
    name: "個人Q版",
    description: "中部地方-岐阜縣21-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-21X-1",
        img: "./images/A02-japan-tour/GPT0016-21X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21X-2",
        img: "./images/A02-japan-tour/GPT0016-21X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21X-3",
        img: "./images/A02-japan-tour/GPT0016-21X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21X-4",
        img: "./images/A02-japan-tour/GPT0016-21X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21X-6",
        img: "./images/A02-japan-tour/GPT0016-21X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21X-7",
        img: "./images/A02-japan-tour/GPT0016-21X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21X-8",
        img: "./images/A02-japan-tour/GPT0016-21X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21X-9",
        img: "./images/A02-japan-tour/GPT0016-21X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21X-B",
        img: "./images/A02-japan-tour/GPT0016-21X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21X-C",
        img: "./images/A02-japan-tour/GPT0016-21X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21X-D",
        img: "./images/A02-japan-tour/GPT0016-21X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21X-E",
        img: "./images/A02-japan-tour/GPT0016-21X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21X-G",
        img: "./images/A02-japan-tour/GPT0016-21X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21X-H",
        img: "./images/A02-japan-tour/GPT0016-21X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21X-I",
        img: "./images/A02-japan-tour/GPT0016-21X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-21X-J",
        img: "./images/A02-japan-tour/GPT0016-21X/split_3_3.webp",
      },
    ],
  },
  {
    id: 145,
    name: "個人Q版",
    description: "中部地方-長野縣20-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-20-1",
        img: "./images/A02-japan-tour/GPT0016-20/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20-2",
        img: "./images/A02-japan-tour/GPT0016-20/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20-3",
        img: "./images/A02-japan-tour/GPT0016-20/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20-4",
        img: "./images/A02-japan-tour/GPT0016-20/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20-6",
        img: "./images/A02-japan-tour/GPT0016-20/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20-7",
        img: "./images/A02-japan-tour/GPT0016-20/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20-8",
        img: "./images/A02-japan-tour/GPT0016-20/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20-9",
        img: "./images/A02-japan-tour/GPT0016-20/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20-B",
        img: "./images/A02-japan-tour/GPT0016-20/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20-C",
        img: "./images/A02-japan-tour/GPT0016-20/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20-D",
        img: "./images/A02-japan-tour/GPT0016-20/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20-E",
        img: "./images/A02-japan-tour/GPT0016-20/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20-G",
        img: "./images/A02-japan-tour/GPT0016-20/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20-H",
        img: "./images/A02-japan-tour/GPT0016-20/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20-I",
        img: "./images/A02-japan-tour/GPT0016-20/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20-J",
        img: "./images/A02-japan-tour/GPT0016-20/split_3_3.webp",
      },
    ],
  },
  {
    id: 146,
    name: "個人Q版",
    description: "中部地方-長野縣20-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-20X-1",
        img: "./images/A02-japan-tour/GPT0016-20X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20X-2",
        img: "./images/A02-japan-tour/GPT0016-20X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20X-3",
        img: "./images/A02-japan-tour/GPT0016-20X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20X-4",
        img: "./images/A02-japan-tour/GPT0016-20X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20X-6",
        img: "./images/A02-japan-tour/GPT0016-20X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20X-7",
        img: "./images/A02-japan-tour/GPT0016-20X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20X-8",
        img: "./images/A02-japan-tour/GPT0016-20X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20X-9",
        img: "./images/A02-japan-tour/GPT0016-20X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20X-B",
        img: "./images/A02-japan-tour/GPT0016-20X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20X-C",
        img: "./images/A02-japan-tour/GPT0016-20X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20X-D",
        img: "./images/A02-japan-tour/GPT0016-20X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20X-E",
        img: "./images/A02-japan-tour/GPT0016-20X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20X-G",
        img: "./images/A02-japan-tour/GPT0016-20X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20X-H",
        img: "./images/A02-japan-tour/GPT0016-20X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20X-I",
        img: "./images/A02-japan-tour/GPT0016-20X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-20X-J",
        img: "./images/A02-japan-tour/GPT0016-20X/split_3_3.webp",
      },
    ],
  },
  {
    id: 143,
    name: "個人Q版",
    description: "中部地方-山梨縣19-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-19-1",
        img: "./images/A02-japan-tour/GPT0016-19/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19-2",
        img: "./images/A02-japan-tour/GPT0016-19/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19-3",
        img: "./images/A02-japan-tour/GPT0016-19/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19-4",
        img: "./images/A02-japan-tour/GPT0016-19/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19-6",
        img: "./images/A02-japan-tour/GPT0016-19/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19-7",
        img: "./images/A02-japan-tour/GPT0016-19/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19-8",
        img: "./images/A02-japan-tour/GPT0016-19/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19-9",
        img: "./images/A02-japan-tour/GPT0016-19/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19-B",
        img: "./images/A02-japan-tour/GPT0016-19/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19-C",
        img: "./images/A02-japan-tour/GPT0016-19/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19-D",
        img: "./images/A02-japan-tour/GPT0016-19/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19-E",
        img: "./images/A02-japan-tour/GPT0016-19/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19-G",
        img: "./images/A02-japan-tour/GPT0016-19/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19-H",
        img: "./images/A02-japan-tour/GPT0016-19/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19-I",
        img: "./images/A02-japan-tour/GPT0016-19/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19-J",
        img: "./images/A02-japan-tour/GPT0016-19/split_3_3.webp",
      },
    ],
  },
  {
    id: 144,
    name: "個人Q版",
    description: "中部地方-山梨縣19-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-19X-1",
        img: "./images/A02-japan-tour/GPT0016-19X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19X-2",
        img: "./images/A02-japan-tour/GPT0016-19X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19X-3",
        img: "./images/A02-japan-tour/GPT0016-19X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19X-4",
        img: "./images/A02-japan-tour/GPT0016-19X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19X-6",
        img: "./images/A02-japan-tour/GPT0016-19X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19X-7",
        img: "./images/A02-japan-tour/GPT0016-19X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19X-8",
        img: "./images/A02-japan-tour/GPT0016-19X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19X-9",
        img: "./images/A02-japan-tour/GPT0016-19X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19X-B",
        img: "./images/A02-japan-tour/GPT0016-19X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19X-C",
        img: "./images/A02-japan-tour/GPT0016-19X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19X-D",
        img: "./images/A02-japan-tour/GPT0016-19X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19X-E",
        img: "./images/A02-japan-tour/GPT0016-19X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19X-G",
        img: "./images/A02-japan-tour/GPT0016-19X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19X-H",
        img: "./images/A02-japan-tour/GPT0016-19X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19X-I",
        img: "./images/A02-japan-tour/GPT0016-19X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-19X-J",
        img: "./images/A02-japan-tour/GPT0016-19X/split_3_3.webp",
      },
    ],
  },

  {
    id: 141,
    name: "個人Q版",
    description: "中部地方-福井縣18-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-18-1",
        img: "./images/A02-japan-tour/GPT0016-18/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18-2",
        img: "./images/A02-japan-tour/GPT0016-18/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18-3",
        img: "./images/A02-japan-tour/GPT0016-18/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18-4",
        img: "./images/A02-japan-tour/GPT0016-18/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18-6",
        img: "./images/A02-japan-tour/GPT0016-18/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18-7",
        img: "./images/A02-japan-tour/GPT0016-18/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18-8",
        img: "./images/A02-japan-tour/GPT0016-18/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18-9",
        img: "./images/A02-japan-tour/GPT0016-18/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18-B",
        img: "./images/A02-japan-tour/GPT0016-18/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18-C",
        img: "./images/A02-japan-tour/GPT0016-18/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18-D",
        img: "./images/A02-japan-tour/GPT0016-18/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18-E",
        img: "./images/A02-japan-tour/GPT0016-18/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18-G",
        img: "./images/A02-japan-tour/GPT0016-18/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18-H",
        img: "./images/A02-japan-tour/GPT0016-18/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18-I",
        img: "./images/A02-japan-tour/GPT0016-18/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18-J",
        img: "./images/A02-japan-tour/GPT0016-18/split_3_3.webp",
      },
    ],
  },
  {
    id: 142,
    name: "個人Q版",
    description: "中部地方-福井縣18-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-18X-1",
        img: "./images/A02-japan-tour/GPT0016-18X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18X-2",
        img: "./images/A02-japan-tour/GPT0016-18X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18X-3",
        img: "./images/A02-japan-tour/GPT0016-18X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18X-4",
        img: "./images/A02-japan-tour/GPT0016-18X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18X-6",
        img: "./images/A02-japan-tour/GPT0016-18X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18X-7",
        img: "./images/A02-japan-tour/GPT0016-18X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18X-8",
        img: "./images/A02-japan-tour/GPT0016-18X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18X-9",
        img: "./images/A02-japan-tour/GPT0016-18X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18X-B",
        img: "./images/A02-japan-tour/GPT0016-18X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18X-C",
        img: "./images/A02-japan-tour/GPT0016-18X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18X-D",
        img: "./images/A02-japan-tour/GPT0016-18X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18X-E",
        img: "./images/A02-japan-tour/GPT0016-18X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18X-G",
        img: "./images/A02-japan-tour/GPT0016-18X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18X-H",
        img: "./images/A02-japan-tour/GPT0016-18X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18X-I",
        img: "./images/A02-japan-tour/GPT0016-18X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-18X-J",
        img: "./images/A02-japan-tour/GPT0016-18X/split_3_3.webp",
      },
    ],
  },

  {
    id: 139,
    name: "個人Q版",
    description: "中部地方-石川縣17-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-17-1",
        img: "./images/A02-japan-tour/GPT0016-17/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17-2",
        img: "./images/A02-japan-tour/GPT0016-17/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17-3",
        img: "./images/A02-japan-tour/GPT0016-17/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17-4",
        img: "./images/A02-japan-tour/GPT0016-17/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17-6",
        img: "./images/A02-japan-tour/GPT0016-17/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17-7",
        img: "./images/A02-japan-tour/GPT0016-17/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17-8",
        img: "./images/A02-japan-tour/GPT0016-17/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17-9",
        img: "./images/A02-japan-tour/GPT0016-17/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17-B",
        img: "./images/A02-japan-tour/GPT0016-17/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17-C",
        img: "./images/A02-japan-tour/GPT0016-17/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17-D",
        img: "./images/A02-japan-tour/GPT0016-17/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17-E",
        img: "./images/A02-japan-tour/GPT0016-17/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17-G",
        img: "./images/A02-japan-tour/GPT0016-17/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17-H",
        img: "./images/A02-japan-tour/GPT0016-17/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17-I",
        img: "./images/A02-japan-tour/GPT0016-17/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17-J",
        img: "./images/A02-japan-tour/GPT0016-17/split_3_3.webp",
      },
    ],
  },
  {
    id: 140,
    name: "個人Q版",
    description: "中部地方-石川縣17-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-17X-1",
        img: "./images/A02-japan-tour/GPT0016-17X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17X-2",
        img: "./images/A02-japan-tour/GPT0016-17X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17X-3",
        img: "./images/A02-japan-tour/GPT0016-17X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17X-4",
        img: "./images/A02-japan-tour/GPT0016-17X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17X-6",
        img: "./images/A02-japan-tour/GPT0016-17X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17X-7",
        img: "./images/A02-japan-tour/GPT0016-17X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17X-8",
        img: "./images/A02-japan-tour/GPT0016-17X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17X-9",
        img: "./images/A02-japan-tour/GPT0016-17X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17X-B",
        img: "./images/A02-japan-tour/GPT0016-17X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17X-C",
        img: "./images/A02-japan-tour/GPT0016-17X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17X-D",
        img: "./images/A02-japan-tour/GPT0016-17X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17X-E",
        img: "./images/A02-japan-tour/GPT0016-17X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17X-G",
        img: "./images/A02-japan-tour/GPT0016-17X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17X-H",
        img: "./images/A02-japan-tour/GPT0016-17X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17X-I",
        img: "./images/A02-japan-tour/GPT0016-17X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-17X-J",
        img: "./images/A02-japan-tour/GPT0016-17X/split_3_3.webp",
      },
    ],
  },

  {
    id: 137,
    name: "個人Q版",
    description: "中部地方-富山縣16-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-16-1",
        img: "./images/A02-japan-tour/GPT0016-16/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16-2",
        img: "./images/A02-japan-tour/GPT0016-16/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16-3",
        img: "./images/A02-japan-tour/GPT0016-16/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16-4",
        img: "./images/A02-japan-tour/GPT0016-16/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16-6",
        img: "./images/A02-japan-tour/GPT0016-16/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16-7",
        img: "./images/A02-japan-tour/GPT0016-16/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16-8",
        img: "./images/A02-japan-tour/GPT0016-16/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16-9",
        img: "./images/A02-japan-tour/GPT0016-16/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16-B",
        img: "./images/A02-japan-tour/GPT0016-16/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16-C",
        img: "./images/A02-japan-tour/GPT0016-16/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16-D",
        img: "./images/A02-japan-tour/GPT0016-16/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16-E",
        img: "./images/A02-japan-tour/GPT0016-16/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16-G",
        img: "./images/A02-japan-tour/GPT0016-16/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16-H",
        img: "./images/A02-japan-tour/GPT0016-16/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16-I",
        img: "./images/A02-japan-tour/GPT0016-16/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16-J",
        img: "./images/A02-japan-tour/GPT0016-16/split_3_3.webp",
      },
    ],
  },
  {
    id: 138,
    name: "個人Q版",
    description: "中部地方-富山縣16-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-16X-1",
        img: "./images/A02-japan-tour/GPT0016-16X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16X-2",
        img: "./images/A02-japan-tour/GPT0016-16X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16X-3",
        img: "./images/A02-japan-tour/GPT0016-16X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16X-4",
        img: "./images/A02-japan-tour/GPT0016-16X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16X-6",
        img: "./images/A02-japan-tour/GPT0016-16X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16X-7",
        img: "./images/A02-japan-tour/GPT0016-16X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16X-8",
        img: "./images/A02-japan-tour/GPT0016-16X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16X-9",
        img: "./images/A02-japan-tour/GPT0016-16X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16X-B",
        img: "./images/A02-japan-tour/GPT0016-16X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16X-C",
        img: "./images/A02-japan-tour/GPT0016-16X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16X-D",
        img: "./images/A02-japan-tour/GPT0016-16X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16X-E",
        img: "./images/A02-japan-tour/GPT0016-16X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16X-G",
        img: "./images/A02-japan-tour/GPT0016-16X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16X-H",
        img: "./images/A02-japan-tour/GPT0016-16X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16X-I",
        img: "./images/A02-japan-tour/GPT0016-16X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-16X-J",
        img: "./images/A02-japan-tour/GPT0016-16X/split_3_3.webp",
      },
    ],
  },

  {
    id: 135,
    name: "個人Q版",
    description: "中部地方-新潟縣15-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-15-1",
        img: "./images/A02-japan-tour/GPT0016-15/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15-2",
        img: "./images/A02-japan-tour/GPT0016-15/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15-3",
        img: "./images/A02-japan-tour/GPT0016-15/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15-4",
        img: "./images/A02-japan-tour/GPT0016-15/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15-6",
        img: "./images/A02-japan-tour/GPT0016-15/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15-7",
        img: "./images/A02-japan-tour/GPT0016-15/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15-8",
        img: "./images/A02-japan-tour/GPT0016-15/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15-9",
        img: "./images/A02-japan-tour/GPT0016-15/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15-B",
        img: "./images/A02-japan-tour/GPT0016-15/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15-C",
        img: "./images/A02-japan-tour/GPT0016-15/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15-D",
        img: "./images/A02-japan-tour/GPT0016-15/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15-E",
        img: "./images/A02-japan-tour/GPT0016-15/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15-G",
        img: "./images/A02-japan-tour/GPT0016-15/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15-H",
        img: "./images/A02-japan-tour/GPT0016-15/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15-I",
        img: "./images/A02-japan-tour/GPT0016-15/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15-J",
        img: "./images/A02-japan-tour/GPT0016-15/split_3_3.webp",
      },
    ],
  },
  {
    id: 136,
    name: "個人Q版",
    description: "中部地方-新潟縣15-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-15X-1",
        img: "./images/A02-japan-tour/GPT0016-15X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15X-2",
        img: "./images/A02-japan-tour/GPT0016-15X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15X-3",
        img: "./images/A02-japan-tour/GPT0016-15X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15X-4",
        img: "./images/A02-japan-tour/GPT0016-15X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15X-6",
        img: "./images/A02-japan-tour/GPT0016-15X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15X-7",
        img: "./images/A02-japan-tour/GPT0016-15X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15X-8",
        img: "./images/A02-japan-tour/GPT0016-15X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15X-9",
        img: "./images/A02-japan-tour/GPT0016-15X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15X-B",
        img: "./images/A02-japan-tour/GPT0016-15X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15X-C",
        img: "./images/A02-japan-tour/GPT0016-15X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15X-D",
        img: "./images/A02-japan-tour/GPT0016-15X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15X-E",
        img: "./images/A02-japan-tour/GPT0016-15X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15X-G",
        img: "./images/A02-japan-tour/GPT0016-15X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15X-H",
        img: "./images/A02-japan-tour/GPT0016-15X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15X-I",
        img: "./images/A02-japan-tour/GPT0016-15X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-15X-J",
        img: "./images/A02-japan-tour/GPT0016-15X/split_3_3.webp",
      },
    ],
  },

  {
    id: 133,
    name: "個人Q版",
    description: "東北地方-神奈川縣14-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-14-1",
        img: "./images/A02-japan-tour/GPT0016-14/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14-2",
        img: "./images/A02-japan-tour/GPT0016-14/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14-3",
        img: "./images/A02-japan-tour/GPT0016-14/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14-4",
        img: "./images/A02-japan-tour/GPT0016-14/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14-6",
        img: "./images/A02-japan-tour/GPT0016-14/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14-7",
        img: "./images/A02-japan-tour/GPT0016-14/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14-8",
        img: "./images/A02-japan-tour/GPT0016-14/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14-9",
        img: "./images/A02-japan-tour/GPT0016-14/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14-B",
        img: "./images/A02-japan-tour/GPT0016-14/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14-C",
        img: "./images/A02-japan-tour/GPT0016-14/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14-D",
        img: "./images/A02-japan-tour/GPT0016-14/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14-E",
        img: "./images/A02-japan-tour/GPT0016-14/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14-G",
        img: "./images/A02-japan-tour/GPT0016-14/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14-H",
        img: "./images/A02-japan-tour/GPT0016-14/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14-I",
        img: "./images/A02-japan-tour/GPT0016-14/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14-J",
        img: "./images/A02-japan-tour/GPT0016-14/split_3_3.webp",
      },
    ],
  },
  {
    id: 134,
    name: "個人Q版",
    description: "東北地方-神奈川縣14-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-14X-1",
        img: "./images/A02-japan-tour/GPT0016-14X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14X-2",
        img: "./images/A02-japan-tour/GPT0016-14X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14X-3",
        img: "./images/A02-japan-tour/GPT0016-14X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14X-4",
        img: "./images/A02-japan-tour/GPT0016-14X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14X-6",
        img: "./images/A02-japan-tour/GPT0016-14X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14X-7",
        img: "./images/A02-japan-tour/GPT0016-14X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14X-8",
        img: "./images/A02-japan-tour/GPT0016-14X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14X-9",
        img: "./images/A02-japan-tour/GPT0016-14X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14X-B",
        img: "./images/A02-japan-tour/GPT0016-14X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14X-C",
        img: "./images/A02-japan-tour/GPT0016-14X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14X-D",
        img: "./images/A02-japan-tour/GPT0016-14X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14X-E",
        img: "./images/A02-japan-tour/GPT0016-14X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14X-G",
        img: "./images/A02-japan-tour/GPT0016-14X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14X-H",
        img: "./images/A02-japan-tour/GPT0016-14X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14X-I",
        img: "./images/A02-japan-tour/GPT0016-14X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-14X-J",
        img: "./images/A02-japan-tour/GPT0016-14X/split_3_3.webp",
      },
    ],
  },

  {
    id: 131,
    name: "個人Q版",
    description: "東北地方-東京都13-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-13-1",
        img: "./images/A02-japan-tour/GPT0016-13/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13-2",
        img: "./images/A02-japan-tour/GPT0016-13/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13-3",
        img: "./images/A02-japan-tour/GPT0016-13/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13-4",
        img: "./images/A02-japan-tour/GPT0016-13/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13-6",
        img: "./images/A02-japan-tour/GPT0016-13/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13-7",
        img: "./images/A02-japan-tour/GPT0016-13/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13-8",
        img: "./images/A02-japan-tour/GPT0016-13/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13-9",
        img: "./images/A02-japan-tour/GPT0016-13/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13-B",
        img: "./images/A02-japan-tour/GPT0016-13/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13-C",
        img: "./images/A02-japan-tour/GPT0016-13/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13-D",
        img: "./images/A02-japan-tour/GPT0016-13/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13-E",
        img: "./images/A02-japan-tour/GPT0016-13/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13-G",
        img: "./images/A02-japan-tour/GPT0016-13/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13-H",
        img: "./images/A02-japan-tour/GPT0016-13/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13-I",
        img: "./images/A02-japan-tour/GPT0016-13/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13-J",
        img: "./images/A02-japan-tour/GPT0016-13/split_3_3.webp",
      },
    ],
  },
  {
    id: 132,
    name: "個人Q版",
    description: "東北地方-東京都13-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-13X-1",
        img: "./images/A02-japan-tour/GPT0016-13X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13X-2",
        img: "./images/A02-japan-tour/GPT0016-13X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13X-3",
        img: "./images/A02-japan-tour/GPT0016-13X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13X-4",
        img: "./images/A02-japan-tour/GPT0016-13X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13X-6",
        img: "./images/A02-japan-tour/GPT0016-13X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13X-7",
        img: "./images/A02-japan-tour/GPT0016-13X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13X-8",
        img: "./images/A02-japan-tour/GPT0016-13X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13X-9",
        img: "./images/A02-japan-tour/GPT0016-13X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13X-B",
        img: "./images/A02-japan-tour/GPT0016-13X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13X-C",
        img: "./images/A02-japan-tour/GPT0016-13X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13X-D",
        img: "./images/A02-japan-tour/GPT0016-13X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13X-E",
        img: "./images/A02-japan-tour/GPT0016-13X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13X-G",
        img: "./images/A02-japan-tour/GPT0016-13X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13X-H",
        img: "./images/A02-japan-tour/GPT0016-13X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13X-I",
        img: "./images/A02-japan-tour/GPT0016-13X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-13X-J",
        img: "./images/A02-japan-tour/GPT0016-13X/split_3_3.webp",
      },
    ],
  },

  {
    id: 129,
    name: "個人Q版",
    description: "東北地方-千葉縣12-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-12-1",
        img: "./images/A02-japan-tour/GPT0016-12/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12-2",
        img: "./images/A02-japan-tour/GPT0016-12/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12-3",
        img: "./images/A02-japan-tour/GPT0016-12/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12-4",
        img: "./images/A02-japan-tour/GPT0016-12/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12-6",
        img: "./images/A02-japan-tour/GPT0016-12/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12-7",
        img: "./images/A02-japan-tour/GPT0016-12/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12-8",
        img: "./images/A02-japan-tour/GPT0016-12/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12-9",
        img: "./images/A02-japan-tour/GPT0016-12/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12-B",
        img: "./images/A02-japan-tour/GPT0016-12/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12-C",
        img: "./images/A02-japan-tour/GPT0016-12/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12-D",
        img: "./images/A02-japan-tour/GPT0016-12/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12-E",
        img: "./images/A02-japan-tour/GPT0016-12/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12-G",
        img: "./images/A02-japan-tour/GPT0016-12/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12-H",
        img: "./images/A02-japan-tour/GPT0016-12/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12-I",
        img: "./images/A02-japan-tour/GPT0016-12/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12-J",
        img: "./images/A02-japan-tour/GPT0016-12/split_3_3.webp",
      },
    ],
  },
  {
    id: 130,
    name: "個人Q版",
    description: "東北地方-千葉縣12-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-12X-1",
        img: "./images/A02-japan-tour/GPT0016-12X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12X-2",
        img: "./images/A02-japan-tour/GPT0016-12X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12X-3",
        img: "./images/A02-japan-tour/GPT0016-12X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12X-4",
        img: "./images/A02-japan-tour/GPT0016-12X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12X-6",
        img: "./images/A02-japan-tour/GPT0016-12X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12X-7",
        img: "./images/A02-japan-tour/GPT0016-12X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12X-8",
        img: "./images/A02-japan-tour/GPT0016-12X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12X-9",
        img: "./images/A02-japan-tour/GPT0016-12X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12X-B",
        img: "./images/A02-japan-tour/GPT0016-12X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12X-C",
        img: "./images/A02-japan-tour/GPT0016-12X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12X-D",
        img: "./images/A02-japan-tour/GPT0016-12X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12X-E",
        img: "./images/A02-japan-tour/GPT0016-12X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12X-G",
        img: "./images/A02-japan-tour/GPT0016-12X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12X-H",
        img: "./images/A02-japan-tour/GPT0016-12X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12X-I",
        img: "./images/A02-japan-tour/GPT0016-12X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-12X-J",
        img: "./images/A02-japan-tour/GPT0016-12X/split_3_3.webp",
      },
    ],
  },

  {
    id: 128,
    name: "個人Q版",
    description: "東北地方-埼玉縣11-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-11X-1",
        img: "./images/A02-japan-tour/GPT0016-11X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11X-2",
        img: "./images/A02-japan-tour/GPT0016-11X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11X-3",
        img: "./images/A02-japan-tour/GPT0016-11X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11X-4",
        img: "./images/A02-japan-tour/GPT0016-11X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11X-6",
        img: "./images/A02-japan-tour/GPT0016-11X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11X-7",
        img: "./images/A02-japan-tour/GPT0016-11X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11X-8",
        img: "./images/A02-japan-tour/GPT0016-11X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11X-9",
        img: "./images/A02-japan-tour/GPT0016-11X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11X-B",
        img: "./images/A02-japan-tour/GPT0016-11X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11X-C",
        img: "./images/A02-japan-tour/GPT0016-11X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11X-D",
        img: "./images/A02-japan-tour/GPT0016-11X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11X-E",
        img: "./images/A02-japan-tour/GPT0016-11X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11X-G",
        img: "./images/A02-japan-tour/GPT0016-11X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11X-H",
        img: "./images/A02-japan-tour/GPT0016-11X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11X-I",
        img: "./images/A02-japan-tour/GPT0016-11X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11X-J",
        img: "./images/A02-japan-tour/GPT0016-11X/split_3_3.webp",
      },
    ],
  },
  {
    id: 127,
    name: "個人Q版",
    description: "東北地方-埼玉縣11-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-11-1",
        img: "./images/A02-japan-tour/GPT0016-11/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11-2",
        img: "./images/A02-japan-tour/GPT0016-11/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11-3",
        img: "./images/A02-japan-tour/GPT0016-11/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11-4",
        img: "./images/A02-japan-tour/GPT0016-11/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11-6",
        img: "./images/A02-japan-tour/GPT0016-11/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11-7",
        img: "./images/A02-japan-tour/GPT0016-11/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11-8",
        img: "./images/A02-japan-tour/GPT0016-11/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11-9",
        img: "./images/A02-japan-tour/GPT0016-11/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11-B",
        img: "./images/A02-japan-tour/GPT0016-11/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11-C",
        img: "./images/A02-japan-tour/GPT0016-11/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11-D",
        img: "./images/A02-japan-tour/GPT0016-11/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11-E",
        img: "./images/A02-japan-tour/GPT0016-11/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11-G",
        img: "./images/A02-japan-tour/GPT0016-11/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11-H",
        img: "./images/A02-japan-tour/GPT0016-11/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11-I",
        img: "./images/A02-japan-tour/GPT0016-11/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-11-J",
        img: "./images/A02-japan-tour/GPT0016-11/split_3_3.webp",
      },
    ],
  },
  {
    id: 126,
    name: "個人Q版",
    description: "東北地方-群馬縣10-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-10X-1",
        img: "./images/A02-japan-tour/GPT0016-10X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10X-2",
        img: "./images/A02-japan-tour/GPT0016-10X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10X-3",
        img: "./images/A02-japan-tour/GPT0016-10X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10X-4",
        img: "./images/A02-japan-tour/GPT0016-10X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10X-6",
        img: "./images/A02-japan-tour/GPT0016-10X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10X-7",
        img: "./images/A02-japan-tour/GPT0016-10X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10X-8",
        img: "./images/A02-japan-tour/GPT0016-10X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10X-9",
        img: "./images/A02-japan-tour/GPT0016-10X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10X-B",
        img: "./images/A02-japan-tour/GPT0016-10X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10X-C",
        img: "./images/A02-japan-tour/GPT0016-10X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10X-D",
        img: "./images/A02-japan-tour/GPT0016-10X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10X-E",
        img: "./images/A02-japan-tour/GPT0016-10X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10X-G",
        img: "./images/A02-japan-tour/GPT0016-10X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10X-H",
        img: "./images/A02-japan-tour/GPT0016-10X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10X-I",
        img: "./images/A02-japan-tour/GPT0016-10X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10X-J",
        img: "./images/A02-japan-tour/GPT0016-10X/split_3_3.webp",
      },
    ],
  },
  {
    id: 125,
    name: "個人Q版",
    description: "東北地方-群馬縣10-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-10-1",
        img: "./images/A02-japan-tour/GPT0016-10/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10-2",
        img: "./images/A02-japan-tour/GPT0016-10/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10-3",
        img: "./images/A02-japan-tour/GPT0016-10/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10-4",
        img: "./images/A02-japan-tour/GPT0016-10/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10-6",
        img: "./images/A02-japan-tour/GPT0016-10/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10-7",
        img: "./images/A02-japan-tour/GPT0016-10/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10-8",
        img: "./images/A02-japan-tour/GPT0016-10/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10-9",
        img: "./images/A02-japan-tour/GPT0016-10/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10-B",
        img: "./images/A02-japan-tour/GPT0016-10/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10-C",
        img: "./images/A02-japan-tour/GPT0016-10/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10-D",
        img: "./images/A02-japan-tour/GPT0016-10/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10-E",
        img: "./images/A02-japan-tour/GPT0016-10/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10-G",
        img: "./images/A02-japan-tour/GPT0016-10/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10-H",
        img: "./images/A02-japan-tour/GPT0016-10/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10-I",
        img: "./images/A02-japan-tour/GPT0016-10/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-10-J",
        img: "./images/A02-japan-tour/GPT0016-10/split_3_3.webp",
      },
    ],
  },
  {
    id: 124,
    name: "個人Q版",
    description: "東北地方-栃木縣9-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-9X-1",
        img: "./images/A02-japan-tour/GPT0016-9X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9X-2",
        img: "./images/A02-japan-tour/GPT0016-9X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9X-3",
        img: "./images/A02-japan-tour/GPT0016-9X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9X-4",
        img: "./images/A02-japan-tour/GPT0016-9X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9X-6",
        img: "./images/A02-japan-tour/GPT0016-9X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9X-7",
        img: "./images/A02-japan-tour/GPT0016-9X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9X-8",
        img: "./images/A02-japan-tour/GPT0016-9X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9X-9",
        img: "./images/A02-japan-tour/GPT0016-9X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9X-B",
        img: "./images/A02-japan-tour/GPT0016-9X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9X-C",
        img: "./images/A02-japan-tour/GPT0016-9X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9X-D",
        img: "./images/A02-japan-tour/GPT0016-9X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9X-E",
        img: "./images/A02-japan-tour/GPT0016-9X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9X-G",
        img: "./images/A02-japan-tour/GPT0016-9X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9X-H",
        img: "./images/A02-japan-tour/GPT0016-9X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9X-I",
        img: "./images/A02-japan-tour/GPT0016-9X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9X-J",
        img: "./images/A02-japan-tour/GPT0016-9X/split_3_3.webp",
      },
    ],
  },
  {
    id: 123,
    name: "個人Q版",
    description: "東北地方-栃木縣9-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-9-1",
        img: "./images/A02-japan-tour/GPT0016-9/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9-2",
        img: "./images/A02-japan-tour/GPT0016-9/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9-3",
        img: "./images/A02-japan-tour/GPT0016-9/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9-4",
        img: "./images/A02-japan-tour/GPT0016-9/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9-6",
        img: "./images/A02-japan-tour/GPT0016-9/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9-7",
        img: "./images/A02-japan-tour/GPT0016-9/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9-8",
        img: "./images/A02-japan-tour/GPT0016-9/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9-9",
        img: "./images/A02-japan-tour/GPT0016-9/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9-B",
        img: "./images/A02-japan-tour/GPT0016-9/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9-C",
        img: "./images/A02-japan-tour/GPT0016-9/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9-D",
        img: "./images/A02-japan-tour/GPT0016-9/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9-E",
        img: "./images/A02-japan-tour/GPT0016-9/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9-G",
        img: "./images/A02-japan-tour/GPT0016-9/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9-H",
        img: "./images/A02-japan-tour/GPT0016-9/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9-I",
        img: "./images/A02-japan-tour/GPT0016-9/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-9-J",
        img: "./images/A02-japan-tour/GPT0016-9/split_3_3.webp",
      },
    ],
  },
  {
    id: 122,
    name: "個人Q版",
    description: "東北地方-茨城縣8-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-8X-1",
        img: "./images/A02-japan-tour/GPT0016-8X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8X-2",
        img: "./images/A02-japan-tour/GPT0016-8X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8X-3",
        img: "./images/A02-japan-tour/GPT0016-8X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8X-4",
        img: "./images/A02-japan-tour/GPT0016-8X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8X-6",
        img: "./images/A02-japan-tour/GPT0016-8X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8X-7",
        img: "./images/A02-japan-tour/GPT0016-8X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8X-8",
        img: "./images/A02-japan-tour/GPT0016-8X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8X-9",
        img: "./images/A02-japan-tour/GPT0016-8X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8X-B",
        img: "./images/A02-japan-tour/GPT0016-8X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8X-C",
        img: "./images/A02-japan-tour/GPT0016-8X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8X-D",
        img: "./images/A02-japan-tour/GPT0016-8X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8X-E",
        img: "./images/A02-japan-tour/GPT0016-8X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8X-G",
        img: "./images/A02-japan-tour/GPT0016-8X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8X-H",
        img: "./images/A02-japan-tour/GPT0016-8X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8X-I",
        img: "./images/A02-japan-tour/GPT0016-8X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8X-J",
        img: "./images/A02-japan-tour/GPT0016-8X/split_3_3.webp",
      },
    ],
  },
  {
    id: 121,
    name: "個人Q版",
    description: "東北地方-茨城縣8-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-8-1",
        img: "./images/A02-japan-tour/GPT0016-8/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8-2",
        img: "./images/A02-japan-tour/GPT0016-8/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8-3",
        img: "./images/A02-japan-tour/GPT0016-8/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8-4",
        img: "./images/A02-japan-tour/GPT0016-8/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8-6",
        img: "./images/A02-japan-tour/GPT0016-8/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8-7",
        img: "./images/A02-japan-tour/GPT0016-8/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8-8",
        img: "./images/A02-japan-tour/GPT0016-8/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8-9",
        img: "./images/A02-japan-tour/GPT0016-8/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8-B",
        img: "./images/A02-japan-tour/GPT0016-8/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8-C",
        img: "./images/A02-japan-tour/GPT0016-8/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8-D",
        img: "./images/A02-japan-tour/GPT0016-8/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8-E",
        img: "./images/A02-japan-tour/GPT0016-8/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8-G",
        img: "./images/A02-japan-tour/GPT0016-8/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8-H",
        img: "./images/A02-japan-tour/GPT0016-8/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8-I",
        img: "./images/A02-japan-tour/GPT0016-8/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-8-J",
        img: "./images/A02-japan-tour/GPT0016-8/split_3_3.webp",
      },
    ],
  },
  {
    id: 120,
    name: "個人Q版",
    description: "東北地方-福島縣7-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-7X-1",
        img: "./images/A02-japan-tour/GPT0016-7X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7X-2",
        img: "./images/A02-japan-tour/GPT0016-7X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7X-3",
        img: "./images/A02-japan-tour/GPT0016-7X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7X-4",
        img: "./images/A02-japan-tour/GPT0016-7X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7X-6",
        img: "./images/A02-japan-tour/GPT0016-7X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7X-7",
        img: "./images/A02-japan-tour/GPT0016-7X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7X-8",
        img: "./images/A02-japan-tour/GPT0016-7X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7X-9",
        img: "./images/A02-japan-tour/GPT0016-7X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7X-B",
        img: "./images/A02-japan-tour/GPT0016-7X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7X-C",
        img: "./images/A02-japan-tour/GPT0016-7X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7X-D",
        img: "./images/A02-japan-tour/GPT0016-7X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7X-E",
        img: "./images/A02-japan-tour/GPT0016-7X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7X-G",
        img: "./images/A02-japan-tour/GPT0016-7X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7X-H",
        img: "./images/A02-japan-tour/GPT0016-7X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7X-I",
        img: "./images/A02-japan-tour/GPT0016-7X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7X-J",
        img: "./images/A02-japan-tour/GPT0016-7X/split_3_3.webp",
      },
    ],
  },
  {
    id: 119,
    name: "個人Q版",
    description: "東北地方-福島縣7-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-7-1",
        img: "./images/A02-japan-tour/GPT0016-7/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7-2",
        img: "./images/A02-japan-tour/GPT0016-7/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7-3",
        img: "./images/A02-japan-tour/GPT0016-7/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7-4",
        img: "./images/A02-japan-tour/GPT0016-7/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7-6",
        img: "./images/A02-japan-tour/GPT0016-7/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7-7",
        img: "./images/A02-japan-tour/GPT0016-7/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7-8",
        img: "./images/A02-japan-tour/GPT0016-7/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7-9",
        img: "./images/A02-japan-tour/GPT0016-7/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7-B",
        img: "./images/A02-japan-tour/GPT0016-7/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7-C",
        img: "./images/A02-japan-tour/GPT0016-7/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7-D",
        img: "./images/A02-japan-tour/GPT0016-7/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7-E",
        img: "./images/A02-japan-tour/GPT0016-7/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7-G",
        img: "./images/A02-japan-tour/GPT0016-7/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7-H",
        img: "./images/A02-japan-tour/GPT0016-7/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7-I",
        img: "./images/A02-japan-tour/GPT0016-7/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-7-J",
        img: "./images/A02-japan-tour/GPT0016-7/split_3_3.webp",
      },
    ],
  },
  {
    id: 118,
    name: "個人Q版",
    description: "東北地方-山形縣6-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-6X-1",
        img: "./images/A02-japan-tour/GPT0016-6X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6X-2",
        img: "./images/A02-japan-tour/GPT0016-6X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6X-3",
        img: "./images/A02-japan-tour/GPT0016-6X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6X-4",
        img: "./images/A02-japan-tour/GPT0016-6X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6X-6",
        img: "./images/A02-japan-tour/GPT0016-6X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6X-7",
        img: "./images/A02-japan-tour/GPT0016-6X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6X-8",
        img: "./images/A02-japan-tour/GPT0016-6X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6X-9",
        img: "./images/A02-japan-tour/GPT0016-6X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6X-B",
        img: "./images/A02-japan-tour/GPT0016-6X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6X-C",
        img: "./images/A02-japan-tour/GPT0016-6X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6X-D",
        img: "./images/A02-japan-tour/GPT0016-6X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6X-E",
        img: "./images/A02-japan-tour/GPT0016-6X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6X-G",
        img: "./images/A02-japan-tour/GPT0016-6X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6X-H",
        img: "./images/A02-japan-tour/GPT0016-6X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6X-I",
        img: "./images/A02-japan-tour/GPT0016-6X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6X-J",
        img: "./images/A02-japan-tour/GPT0016-6X/split_3_3.webp",
      },
    ],
  },
  {
    id: 117,
    name: "個人Q版",
    description: "東北地方-山形縣6-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-6-1",
        img: "./images/A02-japan-tour/GPT0016-6/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6-2",
        img: "./images/A02-japan-tour/GPT0016-6/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6-3",
        img: "./images/A02-japan-tour/GPT0016-6/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6-4",
        img: "./images/A02-japan-tour/GPT0016-6/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6-6",
        img: "./images/A02-japan-tour/GPT0016-6/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6-7",
        img: "./images/A02-japan-tour/GPT0016-6/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6-8",
        img: "./images/A02-japan-tour/GPT0016-6/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6-9",
        img: "./images/A02-japan-tour/GPT0016-6/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6-B",
        img: "./images/A02-japan-tour/GPT0016-6/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6-C",
        img: "./images/A02-japan-tour/GPT0016-6/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6-D",
        img: "./images/A02-japan-tour/GPT0016-6/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6-E",
        img: "./images/A02-japan-tour/GPT0016-6/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6-G",
        img: "./images/A02-japan-tour/GPT0016-6/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6-H",
        img: "./images/A02-japan-tour/GPT0016-6/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6-I",
        img: "./images/A02-japan-tour/GPT0016-6/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-6-J",
        img: "./images/A02-japan-tour/GPT0016-6/split_3_3.webp",
      },
    ],
  },
  {
    id: 116,
    name: "個人Q版",
    description: "東北地方-秋田縣5-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-5X-1",
        img: "./images/A02-japan-tour/GPT0016-5X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5X-2",
        img: "./images/A02-japan-tour/GPT0016-5X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5X-3",
        img: "./images/A02-japan-tour/GPT0016-5X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5X-4",
        img: "./images/A02-japan-tour/GPT0016-5X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5X-6",
        img: "./images/A02-japan-tour/GPT0016-5X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5X-7",
        img: "./images/A02-japan-tour/GPT0016-5X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5X-8",
        img: "./images/A02-japan-tour/GPT0016-5X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5X-9",
        img: "./images/A02-japan-tour/GPT0016-5X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5X-B",
        img: "./images/A02-japan-tour/GPT0016-5X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5X-C",
        img: "./images/A02-japan-tour/GPT0016-5X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5X-D",
        img: "./images/A02-japan-tour/GPT0016-5X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5X-E",
        img: "./images/A02-japan-tour/GPT0016-5X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5X-G",
        img: "./images/A02-japan-tour/GPT0016-5X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5X-H",
        img: "./images/A02-japan-tour/GPT0016-5X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5X-I",
        img: "./images/A02-japan-tour/GPT0016-5X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5X-J",
        img: "./images/A02-japan-tour/GPT0016-5X/split_3_3.webp",
      },
    ],
  },
  {
    id: 115,
    name: "個人Q版",
    description: "東北地方-秋田縣5-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-5-1",
        img: "./images/A02-japan-tour/GPT0016-5/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5-2",
        img: "./images/A02-japan-tour/GPT0016-5/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5-3",
        img: "./images/A02-japan-tour/GPT0016-5/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5-4",
        img: "./images/A02-japan-tour/GPT0016-5/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5-6",
        img: "./images/A02-japan-tour/GPT0016-5/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5-7",
        img: "./images/A02-japan-tour/GPT0016-5/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5-8",
        img: "./images/A02-japan-tour/GPT0016-5/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5-9",
        img: "./images/A02-japan-tour/GPT0016-5/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5-B",
        img: "./images/A02-japan-tour/GPT0016-5/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5-C",
        img: "./images/A02-japan-tour/GPT0016-5/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5-D",
        img: "./images/A02-japan-tour/GPT0016-5/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5-E",
        img: "./images/A02-japan-tour/GPT0016-5/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5-G",
        img: "./images/A02-japan-tour/GPT0016-5/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5-H",
        img: "./images/A02-japan-tour/GPT0016-5/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5-I",
        img: "./images/A02-japan-tour/GPT0016-5/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-5-J",
        img: "./images/A02-japan-tour/GPT0016-5/split_3_3.webp",
      },
    ],
  },
  {
    id: 114,
    name: "個人Q版",
    description: "東北地方-宮城縣4-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-4X-1",
        img: "./images/A02-japan-tour/GPT0016-4X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4X-2",
        img: "./images/A02-japan-tour/GPT0016-4X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4X-3",
        img: "./images/A02-japan-tour/GPT0016-4X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4X-4",
        img: "./images/A02-japan-tour/GPT0016-4X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4X-6",
        img: "./images/A02-japan-tour/GPT0016-4X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4X-7",
        img: "./images/A02-japan-tour/GPT0016-4X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4X-8",
        img: "./images/A02-japan-tour/GPT0016-4X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4X-9",
        img: "./images/A02-japan-tour/GPT0016-4X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4X-B",
        img: "./images/A02-japan-tour/GPT0016-4X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4X-C",
        img: "./images/A02-japan-tour/GPT0016-4X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4X-D",
        img: "./images/A02-japan-tour/GPT0016-4X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4X-E",
        img: "./images/A02-japan-tour/GPT0016-4X/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4X-G",
        img: "./images/A02-japan-tour/GPT0016-4X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4X-H",
        img: "./images/A02-japan-tour/GPT0016-4X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4X-I",
        img: "./images/A02-japan-tour/GPT0016-4X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4X-J",
        img: "./images/A02-japan-tour/GPT0016-4X/split_3_3.webp",
      },
    ],
  },
  {
    id: 113,
    name: "個人Q版",
    description: "東北地方-宮城縣4-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-4-1",
        img: "./images/A02-japan-tour/GPT0016-4/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4-2",
        img: "./images/A02-japan-tour/GPT0016-4/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4-3",
        img: "./images/A02-japan-tour/GPT0016-4/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4-4",
        img: "./images/A02-japan-tour/GPT0016-4/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4-6",
        img: "./images/A02-japan-tour/GPT0016-4/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4-7",
        img: "./images/A02-japan-tour/GPT0016-4/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4-8",
        img: "./images/A02-japan-tour/GPT0016-4/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4-9",
        img: "./images/A02-japan-tour/GPT0016-4/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4-B",
        img: "./images/A02-japan-tour/GPT0016-4/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4-C",
        img: "./images/A02-japan-tour/GPT0016-4/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4-D",
        img: "./images/A02-japan-tour/GPT0016-4/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4-E",
        img: "./images/A02-japan-tour/GPT0016-4/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4-G",
        img: "./images/A02-japan-tour/GPT0016-4/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4-H",
        img: "./images/A02-japan-tour/GPT0016-4/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4-I",
        img: "./images/A02-japan-tour/GPT0016-4/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-4-J",
        img: "./images/A02-japan-tour/GPT0016-4/split_3_3.webp",
      },
    ],
  },
  {
    id: 112,
    name: "個人Q版",
    description: "東北地方-岩手縣3-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-3X-1",
        img: "./images/A02-japan-tour/GPT0016-3X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3X-2",
        img: "./images/A02-japan-tour/GPT0016-3X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3X-3",
        img: "./images/A02-japan-tour/GPT0016-3X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3X-4",
        img: "./images/A02-japan-tour/GPT0016-3X/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3X-6",
        img: "./images/A02-japan-tour/GPT0016-3X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3X-7",
        img: "./images/A02-japan-tour/GPT0016-3X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3X-8",
        img: "./images/A02-japan-tour/GPT0016-3X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3X-9",
        img: "./images/A02-japan-tour/GPT0016-3X/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3X-B",
        img: "./images/A02-japan-tour/GPT0016-3X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3X-C",
        img: "./images/A02-japan-tour/GPT0016-3X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3X-D",
        img: "./images/A02-japan-tour/GPT0016-3X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3X-E",
        img: "./images/A02-japan-tour/GPT0016-3X/split_2_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-3X-G",
        img: "./images/A02-japan-tour/GPT0016-3X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3X-H",
        img: "./images/A02-japan-tour/GPT0016-3X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3X-I",
        img: "./images/A02-japan-tour/GPT0016-3X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3X-J",
        img: "./images/A02-japan-tour/GPT0016-3X/split_3_3.webp",
      },
    ],
  },
  {
    id: 111,
    name: "個人Q版",
    description: "東北地方-岩手縣3-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-3-1",
        img: "./images/A02-japan-tour/GPT0016-3/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3-2",
        img: "./images/A02-japan-tour/GPT0016-3/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3-3",
        img: "./images/A02-japan-tour/GPT0016-3/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3-4",
        img: "./images/A02-japan-tour/GPT0016-3/split_0_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-3-6",
        img: "./images/A02-japan-tour/GPT0016-3/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3-7",
        img: "./images/A02-japan-tour/GPT0016-3/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3-8",
        img: "./images/A02-japan-tour/GPT0016-3/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3-9",
        img: "./images/A02-japan-tour/GPT0016-3/split_1_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-3-B",
        img: "./images/A02-japan-tour/GPT0016-3/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3-C",
        img: "./images/A02-japan-tour/GPT0016-3/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3-D",
        img: "./images/A02-japan-tour/GPT0016-3/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3-E",
        img: "./images/A02-japan-tour/GPT0016-3/split_2_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-3-G",
        img: "./images/A02-japan-tour/GPT0016-3/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3-H",
        img: "./images/A02-japan-tour/GPT0016-3/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3-I",
        img: "./images/A02-japan-tour/GPT0016-3/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-3-J",
        img: "./images/A02-japan-tour/GPT0016-3/split_3_3.webp",
      },
    ],
  },
  {
    id: 110,
    name: "個人Q版",
    description: "東北地方-青森縣2-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-2X-1",
        img: "./images/A02-japan-tour/GPT0016-2X/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2X-2",
        img: "./images/A02-japan-tour/GPT0016-2X/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2X-3",
        img: "./images/A02-japan-tour/GPT0016-2X/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2X-4",
        img: "./images/A02-japan-tour/GPT0016-2X/split_0_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-2X-6",
        img: "./images/A02-japan-tour/GPT0016-2X/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2X-7",
        img: "./images/A02-japan-tour/GPT0016-2X/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2X-8",
        img: "./images/A02-japan-tour/GPT0016-2X/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2X-9",
        img: "./images/A02-japan-tour/GPT0016-2X/split_1_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-2X-B",
        img: "./images/A02-japan-tour/GPT0016-2X/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2X-C",
        img: "./images/A02-japan-tour/GPT0016-2X/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2X-D",
        img: "./images/A02-japan-tour/GPT0016-2X/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2X-E",
        img: "./images/A02-japan-tour/GPT0016-2X/split_2_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-2X-G",
        img: "./images/A02-japan-tour/GPT0016-2X/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2X-H",
        img: "./images/A02-japan-tour/GPT0016-2X/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2X-I",
        img: "./images/A02-japan-tour/GPT0016-2X/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2X-J",
        img: "./images/A02-japan-tour/GPT0016-2X/split_3_3.webp",
      },
    ],
  },
  {
    id: 109,
    name: "個人Q版",
    description: "東北地方-青森縣2-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-2-1",
        img: "./images/A02-japan-tour/GPT0016-2/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2-2",
        img: "./images/A02-japan-tour/GPT0016-2/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2-3",
        img: "./images/A02-japan-tour/GPT0016-2/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2-4",
        img: "./images/A02-japan-tour/GPT0016-2/split_0_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-2-6",
        img: "./images/A02-japan-tour/GPT0016-2/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2-7",
        img: "./images/A02-japan-tour/GPT0016-2/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2-8",
        img: "./images/A02-japan-tour/GPT0016-2/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2-9",
        img: "./images/A02-japan-tour/GPT0016-2/split_1_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-2-B",
        img: "./images/A02-japan-tour/GPT0016-2/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2-C",
        img: "./images/A02-japan-tour/GPT0016-2/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2-D",
        img: "./images/A02-japan-tour/GPT0016-2/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2-E",
        img: "./images/A02-japan-tour/GPT0016-2/split_2_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-2-G",
        img: "./images/A02-japan-tour/GPT0016-2/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2-H",
        img: "./images/A02-japan-tour/GPT0016-2/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2-I",
        img: "./images/A02-japan-tour/GPT0016-2/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-2-J",
        img: "./images/A02-japan-tour/GPT0016-2/split_3_3.webp",
      },
    ],
  },
  {
    id: 108,
    name: "個人Q版",
    description: "北海道道東-1EX-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-1EX-1",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1EX-2",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1EX-3",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1EX-4",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_0_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1EX-6",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1EX-7",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1EX-8",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1EX-9",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_1_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1EX-B",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1EX-C",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1EX-D",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1EX-E",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_2_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1EX-G",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1EX-H",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1EX-I",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1EX-J",
        img: "./images/A02-japan-tour/GPT0016-1EX/split_3_3.webp",
      },
    ],
  },
  {
    id: 107,
    name: "個人Q版",
    description: "北海道道東-1E-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-1E-1",
        img: "./images/A02-japan-tour/GPT0016-1E/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1E-2",
        img: "./images/A02-japan-tour/GPT0016-1E/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1E-3",
        img: "./images/A02-japan-tour/GPT0016-1E/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1E-4",
        img: "./images/A02-japan-tour/GPT0016-1E/split_0_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1E-6",
        img: "./images/A02-japan-tour/GPT0016-1E/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1E-7",
        img: "./images/A02-japan-tour/GPT0016-1E/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1E-8",
        img: "./images/A02-japan-tour/GPT0016-1E/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1E-9",
        img: "./images/A02-japan-tour/GPT0016-1E/split_1_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1E-B",
        img: "./images/A02-japan-tour/GPT0016-1E/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1E-C",
        img: "./images/A02-japan-tour/GPT0016-1E/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1E-D",
        img: "./images/A02-japan-tour/GPT0016-1E/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1E-E",
        img: "./images/A02-japan-tour/GPT0016-1E/split_2_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1E-G",
        img: "./images/A02-japan-tour/GPT0016-1E/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1E-H",
        img: "./images/A02-japan-tour/GPT0016-1E/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1E-I",
        img: "./images/A02-japan-tour/GPT0016-1E/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1E-J",
        img: "./images/A02-japan-tour/GPT0016-1E/split_3_3.webp",
      },
    ],
  },
  {
    id: 106,
    name: "個人Q版",
    description: "北海道道南-1SX-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-1SX-1",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1SX-2",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1SX-3",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1SX-4",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_0_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1SX-6",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1SX-7",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1SX-8",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1SX-9",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_1_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1SX-B",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1SX-C",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1SX-D",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1SX-E",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_2_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1SX-G",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1SX-H",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1SX-I",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1SX-J",
        img: "./images/A02-japan-tour/GPT0016-1SX/split_3_3.webp",
      },
    ],
  },
  {
    id: 105,
    name: "個人Q版",
    description: "北海道道南-1S-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-1S-1",
        img: "./images/A02-japan-tour/GPT0016-1S/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1S-2",
        img: "./images/A02-japan-tour/GPT0016-1S/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1S-3",
        img: "./images/A02-japan-tour/GPT0016-1S/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1S-4",
        img: "./images/A02-japan-tour/GPT0016-1S/split_0_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1S-6",
        img: "./images/A02-japan-tour/GPT0016-1S/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1S-7",
        img: "./images/A02-japan-tour/GPT0016-1S/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1S-8",
        img: "./images/A02-japan-tour/GPT0016-1S/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1S-9",
        img: "./images/A02-japan-tour/GPT0016-1S/split_1_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1S-B",
        img: "./images/A02-japan-tour/GPT0016-1S/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1S-C",
        img: "./images/A02-japan-tour/GPT0016-1S/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1S-D",
        img: "./images/A02-japan-tour/GPT0016-1S/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1S-E",
        img: "./images/A02-japan-tour/GPT0016-1S/split_2_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1S-G",
        img: "./images/A02-japan-tour/GPT0016-1S/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1S-H",
        img: "./images/A02-japan-tour/GPT0016-1S/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1S-I",
        img: "./images/A02-japan-tour/GPT0016-1S/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1S-J",
        img: "./images/A02-japan-tour/GPT0016-1S/split_3_3.webp",
      },
    ],
  },
  {
    id: 104,
    name: "個人Q版",
    description: "北海道道北央-1WX-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-1WX-1",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-2",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-3",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-4",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-5",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-6",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-7",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-8",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-9",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-A",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-B",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-C",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-D",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-E",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-F",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-G",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_3_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-H",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_4_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-I",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_4_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-J",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_4_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1WX-K",
        img: "./images/A02-japan-tour/GPT0016-1WX/split_4_3.webp",
      },
    ],
  },
  {
    id: 103,
    name: "個人Q版",
    description: "北海道道北央-1W-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-1W-1",
        img: "./images/A02-japan-tour/GPT0016-1W/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-2",
        img: "./images/A02-japan-tour/GPT0016-1W/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-3",
        img: "./images/A02-japan-tour/GPT0016-1W/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-4",
        img: "./images/A02-japan-tour/GPT0016-1W/split_0_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-5",
        img: "./images/A02-japan-tour/GPT0016-1W/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-6",
        img: "./images/A02-japan-tour/GPT0016-1W/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-7",
        img: "./images/A02-japan-tour/GPT0016-1W/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-8",
        img: "./images/A02-japan-tour/GPT0016-1W/split_1_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-9",
        img: "./images/A02-japan-tour/GPT0016-1W/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-A",
        img: "./images/A02-japan-tour/GPT0016-1W/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-B",
        img: "./images/A02-japan-tour/GPT0016-1W/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-C",
        img: "./images/A02-japan-tour/GPT0016-1W/split_2_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-D",
        img: "./images/A02-japan-tour/GPT0016-1W/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-E",
        img: "./images/A02-japan-tour/GPT0016-1W/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-F",
        img: "./images/A02-japan-tour/GPT0016-1W/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-G",
        img: "./images/A02-japan-tour/GPT0016-1W/split_3_3.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-H",
        img: "./images/A02-japan-tour/GPT0016-1W/split_4_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-I",
        img: "./images/A02-japan-tour/GPT0016-1W/split_4_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-J",
        img: "./images/A02-japan-tour/GPT0016-1W/split_4_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1W-K",
        img: "./images/A02-japan-tour/GPT0016-1W/split_4_3.webp",
      },
    ],
  },
  {
    id: 102,
    name: "個人Q版",
    description: "北海道道北-1NX-2",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-1NX-1",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1NX-2",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1NX-3",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1NX-4",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_0_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1NX-6",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1NX-7",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1NX-8",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1NX-9",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_1_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1NX-B",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1NX-C",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1NX-D",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1NX-E",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_2_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1NX-G",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1NX-H",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1NX-I",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1NX-J",
        img: "./images/A02-japan-tour/GPT0016-1NX/split_3_3.webp",
      },
    ],
  },
  {
    id: 101,
    name: "個人Q版",
    description: "北海道道北-1N-1",
    category: "日本景點系列",
    stickers: [
      {
        id: "A02-japan-tour/GPT0016-1N-1",
        img: "./images/A02-japan-tour/GPT0016-1N/split_0_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1N-2",
        img: "./images/A02-japan-tour/GPT0016-1N/split_0_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1N-3",
        img: "./images/A02-japan-tour/GPT0016-1N/split_0_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1N-4",
        img: "./images/A02-japan-tour/GPT0016-1N/split_0_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1N-6",
        img: "./images/A02-japan-tour/GPT0016-1N/split_1_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1N-7",
        img: "./images/A02-japan-tour/GPT0016-1N/split_1_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1N-8",
        img: "./images/A02-japan-tour/GPT0016-1N/split_1_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1N-9",
        img: "./images/A02-japan-tour/GPT0016-1N/split_1_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1N-B",
        img: "./images/A02-japan-tour/GPT0016-1N/split_2_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1N-C",
        img: "./images/A02-japan-tour/GPT0016-1N/split_2_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1N-D",
        img: "./images/A02-japan-tour/GPT0016-1N/split_2_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1N-E",
        img: "./images/A02-japan-tour/GPT0016-1N/split_2_3.webp",
      },

      {
        id: "A02-japan-tour/GPT0016-1N-G",
        img: "./images/A02-japan-tour/GPT0016-1N/split_3_0.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1N-H",
        img: "./images/A02-japan-tour/GPT0016-1N/split_3_1.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1N-I",
        img: "./images/A02-japan-tour/GPT0016-1N/split_3_2.webp",
      },
      {
        id: "A02-japan-tour/GPT0016-1N-J",
        img: "./images/A02-japan-tour/GPT0016-1N/split_3_3.webp",
      },
    ],
  },
  {
    id: 100,
    name: "個人Q版",
    description: "地震潭風-2",
    category: "天氣系列",
    stickers: [
      {
        id: "GPT0015-4-1",
        img: "./images/GPT0015-4/split_0_0.webp",
      },
      {
        id: "GPT0015-4-2",
        img: "./images/GPT0015-4/split_0_1.webp",
      },
      {
        id: "GPT0015-4-3",
        img: "./images/GPT0015-4/split_0_2.webp",
      },
      {
        id: "GPT0015-4-4",
        img: "./images/GPT0015-4/split_0_3.webp",
      },

      {
        id: "GPT0015-4-6",
        img: "./images/GPT0015-4/split_1_0.webp",
      },
      {
        id: "GPT0015-4-7",
        img: "./images/GPT0015-4/split_1_1.webp",
      },
      {
        id: "GPT0015-4-8",
        img: "./images/GPT0015-4/split_1_2.webp",
      },
      {
        id: "GPT0015-4-9",
        img: "./images/GPT0015-4/split_1_3.webp",
      },

      {
        id: "GPT0015-4-B",
        img: "./images/GPT0015-4/split_2_0.webp",
      },
      {
        id: "GPT0015-4-C",
        img: "./images/GPT0015-4/split_2_1.webp",
      },
      {
        id: "GPT0015-4-D",
        img: "./images/GPT0015-4/split_2_2.webp",
      },
      {
        id: "GPT0015-4-E",
        img: "./images/GPT0015-4/split_2_3.webp",
      },

      {
        id: "GPT0015-4-G",
        img: "./images/GPT0015-4/split_3_0.webp",
      },
      {
        id: "GPT0015-4-H",
        img: "./images/GPT0015-4/split_3_1.webp",
      },
      {
        id: "GPT0015-4-I",
        img: "./images/GPT0015-4/split_3_2.webp",
      },
      {
        id: "GPT0015-4-J",
        img: "./images/GPT0015-4/split_3_3.webp",
      },
    ],
  },
  {
    id: 99,
    name: "個人Q版",
    description: "地震潭風-1",
    category: "天氣系列",
    stickers: [
      {
        id: "GPT0015-3-1",
        img: "./images/GPT0015-3/split_0_0.webp",
      },
      {
        id: "GPT0015-3-2",
        img: "./images/GPT0015-3/split_0_1.webp",
      },
      {
        id: "GPT0015-3-3",
        img: "./images/GPT0015-3/split_0_2.webp",
      },
      {
        id: "GPT0015-3-4",
        img: "./images/GPT0015-3/split_0_3.webp",
      },

      {
        id: "GPT0015-3-6",
        img: "./images/GPT0015-3/split_1_0.webp",
      },
      {
        id: "GPT0015-3-7",
        img: "./images/GPT0015-3/split_1_1.webp",
      },
      {
        id: "GPT0015-3-8",
        img: "./images/GPT0015-3/split_1_2.webp",
      },
      {
        id: "GPT0015-3-9",
        img: "./images/GPT0015-3/split_1_3.webp",
      },

      {
        id: "GPT0015-3-B",
        img: "./images/GPT0015-3/split_2_0.webp",
      },
      {
        id: "GPT0015-3-C",
        img: "./images/GPT0015-3/split_2_1.webp",
      },
      {
        id: "GPT0015-3-D",
        img: "./images/GPT0015-3/split_2_2.webp",
      },
      {
        id: "GPT0015-3-E",
        img: "./images/GPT0015-3/split_2_3.webp",
      },

      {
        id: "GPT0015-3-G",
        img: "./images/GPT0015-3/split_3_0.webp",
      },
      {
        id: "GPT0015-3-H",
        img: "./images/GPT0015-3/split_3_1.webp",
      },
      {
        id: "GPT0015-3-I",
        img: "./images/GPT0015-3/split_3_2.webp",
      },
      {
        id: "GPT0015-3-J",
        img: "./images/GPT0015-3/split_3_3.webp",
      },
    ],
  },
  {
    id: 98,
    name: "個人Q版",
    description: "颱風相關貼圖",
    category: "天氣系列",
    stickers: [
      {
        id: "GPT0015-2-1",
        img: "./images/GPT0015-2/split_0_0.webp",
      },
      {
        id: "GPT0015-2-2",
        img: "./images/GPT0015-2/split_0_1.webp",
      },
      {
        id: "GPT0015-2-3",
        img: "./images/GPT0015-2/split_0_2.webp",
      },
      {
        id: "GPT0015-2-4",
        img: "./images/GPT0015-2/split_0_3.webp",
      },
      {
        id: "GPT0015-2-5",
        img: "./images/GPT0015-2/split_0_4.webp",
      },
      {
        id: "GPT0015-2-6",
        img: "./images/GPT0015-2/split_1_0.webp",
      },
      {
        id: "GPT0015-2-7",
        img: "./images/GPT0015-2/split_1_1.webp",
      },
      {
        id: "GPT0015-2-8",
        img: "./images/GPT0015-2/split_1_2.webp",
      },
      {
        id: "GPT0015-2-9",
        img: "./images/GPT0015-2/split_1_3.webp",
      },
      {
        id: "GPT0015-2-A",
        img: "./images/GPT0015-2/split_1_4.webp",
      },
      {
        id: "GPT0015-2-B",
        img: "./images/GPT0015-2/split_2_0.webp",
      },
      {
        id: "GPT0015-2-C",
        img: "./images/GPT0015-2/split_2_1.webp",
      },
      {
        id: "GPT0015-2-D",
        img: "./images/GPT0015-2/split_2_2.webp",
      },
      {
        id: "GPT0015-2-E",
        img: "./images/GPT0015-2/split_2_3.webp",
      },
      {
        id: "GPT0015-2-F",
        img: "./images/GPT0015-2/split_2_4.webp",
      },
      {
        id: "GPT0015-2-G",
        img: "./images/GPT0015-2/split_3_0.webp",
      },
      {
        id: "GPT0015-2-H",
        img: "./images/GPT0015-2/split_3_1.webp",
      },
      {
        id: "GPT0015-2-I",
        img: "./images/GPT0015-2/split_3_2.webp",
      },
      {
        id: "GPT0015-2-J",
        img: "./images/GPT0015-2/split_3_3.webp",
      },
      {
        id: "GPT0015-2-K",
        img: "./images/GPT0015-2/split_3_4.webp",
      },
    ],
  },
  {
    id: 97,
    name: "個人Q版",
    description: "颱風相關貼圖",
    category: "天氣系列",
    stickers: [
      {
        id: "GPT0015-1-1",
        img: "./images/GPT0015-1/split_0_0.webp",
      },
      {
        id: "GPT0015-1-2",
        img: "./images/GPT0015-1/split_0_1.webp",
      },
      {
        id: "GPT0015-1-3",
        img: "./images/GPT0015-1/split_0_2.webp",
      },
      {
        id: "GPT0015-1-4",
        img: "./images/GPT0015-1/split_0_3.webp",
      },
      {
        id: "GPT0015-1-5",
        img: "./images/GPT0015-1/split_1_0.webp",
      },
      {
        id: "GPT0015-1-6",
        img: "./images/GPT0015-1/split_1_1.webp",
      },
      {
        id: "GPT0015-1-7",
        img: "./images/GPT0015-1/split_1_2.webp",
      },
      {
        id: "GPT0015-1-8",
        img: "./images/GPT0015-1/split_1_3.webp",
      },
      {
        id: "GPT0015-1-9",
        img: "./images/GPT0015-1/split_2_0.webp",
      },
      {
        id: "GPT0015-1-A",
        img: "./images/GPT0015-1/split_2_1.webp",
      },
      {
        id: "GPT0015-1-B",
        img: "./images/GPT0015-1/split_2_2.webp",
      },
      {
        id: "GPT0015-1-C",
        img: "./images/GPT0015-1/split_2_3.webp",
      },
      {
        id: "GPT0015-1-D",
        img: "./images/GPT0015-1/split_3_0.webp",
      },
      {
        id: "GPT0015-1-E",
        img: "./images/GPT0015-1/split_3_1.webp",
      },
      {
        id: "GPT0015-1-F",
        img: "./images/GPT0015-1/split_3_2.webp",
      },
      {
        id: "GPT0015-1-G",
        img: "./images/GPT0015-1/split_3_3.webp",
      },
    ],
  },
  {
    id: 96,
    name: "個人Q版",
    description: "世界盃足球賽~第六版(這組也不錯，不過只做16隊)~A-D組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A06-1-1",
        img: "./images/GPT0014-A06-1/split_0_0.webp",
      },
      {
        id: "GPT0014-A06-1-2",
        img: "./images/GPT0014-A06-1/split_0_1.webp",
      },
      {
        id: "GPT0014-A06-1-3",
        img: "./images/GPT0014-A06-1/split_0_2.webp",
      },
      {
        id: "GPT0014-A06-1-4",
        img: "./images/GPT0014-A06-1/split_0_3.webp",
      },
      {
        id: "GPT0014-A06-1-5",
        img: "./images/GPT0014-A06-1/split_1_0.webp",
      },
      {
        id: "GPT0014-A06-1-6",
        img: "./images/GPT0014-A06-1/split_1_1.webp",
      },
      {
        id: "GPT0014-A06-1-7",
        img: "./images/GPT0014-A06-1/split_1_2.webp",
      },
      {
        id: "GPT0014-A06-1-8",
        img: "./images/GPT0014-A06-1/split_1_3.webp",
      },
      {
        id: "GPT0014-A06-1-9",
        img: "./images/GPT0014-A06-1/split_2_0.webp",
      },
      {
        id: "GPT0014-A06-1-A",
        img: "./images/GPT0014-A06-1/split_2_1.webp",
      },
      {
        id: "GPT0014-A06-1-B",
        img: "./images/GPT0014-A06-1/split_2_2.webp",
      },
      {
        id: "GPT0014-A06-1-C",
        img: "./images/GPT0014-A06-1/split_2_3.webp",
      },
      {
        id: "GPT0014-A06-1-D",
        img: "./images/GPT0014-A06-1/split_3_0.webp",
      },
      {
        id: "GPT0014-A06-1-E",
        img: "./images/GPT0014-A06-1/split_3_1.webp",
      },
      {
        id: "GPT0014-A06-1-F",
        img: "./images/GPT0014-A06-1/split_3_2.webp",
      },
      {
        id: "GPT0014-A06-1-G",
        img: "./images/GPT0014-A06-1/split_3_3.webp",
      },
    ],
  },
  {
    id: 95,
    name: "個人Q版",
    description: "世界盃足球賽~第五版(各國隊服)~I-L組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A05-3-1",
        img: "./images/GPT0014-A05-3/split_0_0.webp",
      },
      {
        id: "GPT0014-A05-3-2",
        img: "./images/GPT0014-A05-3/split_0_1.webp",
      },
      {
        id: "GPT0014-A05-3-3",
        img: "./images/GPT0014-A05-3/split_0_2.webp",
      },
      {
        id: "GPT0014-A05-3-4",
        img: "./images/GPT0014-A05-3/split_0_3.webp",
      },
      {
        id: "GPT0014-A05-3-5",
        img: "./images/GPT0014-A05-3/split_1_0.webp",
      },
      {
        id: "GPT0014-A05-3-6",
        img: "./images/GPT0014-A05-3/split_1_1.webp",
      },
      {
        id: "GPT0014-A05-3-7",
        img: "./images/GPT0014-A05-3/split_1_2.webp",
      },
      {
        id: "GPT0014-A05-3-8",
        img: "./images/GPT0014-A05-3/split_1_3.webp",
      },
      {
        id: "GPT0014-A05-3-9",
        img: "./images/GPT0014-A05-3/split_2_0.webp",
      },
      {
        id: "GPT0014-A05-3-A",
        img: "./images/GPT0014-A05-3/split_2_1.webp",
      },
      {
        id: "GPT0014-A05-3-B",
        img: "./images/GPT0014-A05-3/split_2_2.webp",
      },
      {
        id: "GPT0014-A05-3-C",
        img: "./images/GPT0014-A05-3/split_2_3.webp",
      },
      {
        id: "GPT0014-A05-3-D",
        img: "./images/GPT0014-A05-3/split_3_0.webp",
      },
      {
        id: "GPT0014-A05-3-E",
        img: "./images/GPT0014-A05-3/split_3_1.webp",
      },
      {
        id: "GPT0014-A05-3-F",
        img: "./images/GPT0014-A05-3/split_3_2.webp",
      },
      {
        id: "GPT0014-A05-3-G",
        img: "./images/GPT0014-A05-3/split_3_3.webp",
      },
    ],
  },
  {
    id: 94,
    name: "個人Q版",
    description: "世界盃足球賽~第五版(各國隊服)~E-HD組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A05-2-1",
        img: "./images/GPT0014-A05-2/split_0_0.webp",
      },
      {
        id: "GPT0014-A05-2-2",
        img: "./images/GPT0014-A05-2/split_0_1.webp",
      },
      {
        id: "GPT0014-A05-2-3",
        img: "./images/GPT0014-A05-2/split_0_2.webp",
      },
      {
        id: "GPT0014-A05-2-4",
        img: "./images/GPT0014-A05-2/split_0_3.webp",
      },
      {
        id: "GPT0014-A05-2-5",
        img: "./images/GPT0014-A05-2/split_1_0.webp",
      },
      {
        id: "GPT0014-A05-2-6",
        img: "./images/GPT0014-A05-2/split_1_1.webp",
      },
      {
        id: "GPT0014-A05-2-7",
        img: "./images/GPT0014-A05-2/split_1_2.webp",
      },
      {
        id: "GPT0014-A05-2-8",
        img: "./images/GPT0014-A05-2/split_1_3.webp",
      },
      {
        id: "GPT0014-A05-2-9",
        img: "./images/GPT0014-A05-2/split_2_0.webp",
      },
      {
        id: "GPT0014-A05-2-A",
        img: "./images/GPT0014-A05-2/split_2_1.webp",
      },
      {
        id: "GPT0014-A05-2-B",
        img: "./images/GPT0014-A05-2/split_2_2.webp",
      },
      {
        id: "GPT0014-A05-2-C",
        img: "./images/GPT0014-A05-2/split_2_3.webp",
      },
      {
        id: "GPT0014-A05-2-D",
        img: "./images/GPT0014-A05-2/split_3_0.webp",
      },
      {
        id: "GPT0014-A05-2-E",
        img: "./images/GPT0014-A05-2/split_3_1.webp",
      },
      {
        id: "GPT0014-A05-2-F",
        img: "./images/GPT0014-A05-2/split_3_2.webp",
      },
      {
        id: "GPT0014-A05-2-G",
        img: "./images/GPT0014-A05-2/split_3_3.webp",
      },
    ],
  },
  {
    id: 93,
    name: "個人Q版",
    description: "世界盃足球賽~第五版(各國隊服)~A-D組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A05-1-1",
        img: "./images/GPT0014-A05-1/split_0_0.webp",
      },
      {
        id: "GPT0014-A05-1-2",
        img: "./images/GPT0014-A05-1/split_0_1.webp",
      },
      {
        id: "GPT0014-A05-1-3",
        img: "./images/GPT0014-A05-1/split_0_2.webp",
      },
      {
        id: "GPT0014-A05-1-4",
        img: "./images/GPT0014-A05-1/split_0_3.webp",
      },
      {
        id: "GPT0014-A05-1-5",
        img: "./images/GPT0014-A05-1/split_1_0.webp",
      },
      {
        id: "GPT0014-A05-1-6",
        img: "./images/GPT0014-A05-1/split_1_1.webp",
      },
      {
        id: "GPT0014-A05-1-7",
        img: "./images/GPT0014-A05-1/split_1_2.webp",
      },
      {
        id: "GPT0014-A05-1-8",
        img: "./images/GPT0014-A05-1/split_1_3.webp",
      },
      {
        id: "GPT0014-A05-1-9",
        img: "./images/GPT0014-A05-1/split_2_0.webp",
      },
      {
        id: "GPT0014-A05-1-A",
        img: "./images/GPT0014-A05-1/split_2_1.webp",
      },
      {
        id: "GPT0014-A05-1-B",
        img: "./images/GPT0014-A05-1/split_2_2.webp",
      },
      {
        id: "GPT0014-A05-1-C",
        img: "./images/GPT0014-A05-1/split_2_3.webp",
      },
      {
        id: "GPT0014-A05-1-D",
        img: "./images/GPT0014-A05-1/split_3_0.webp",
      },
      {
        id: "GPT0014-A05-1-E",
        img: "./images/GPT0014-A05-1/split_3_1.webp",
      },
      {
        id: "GPT0014-A05-1-F",
        img: "./images/GPT0014-A05-1/split_3_2.webp",
      },
      {
        id: "GPT0014-A05-1-G",
        img: "./images/GPT0014-A05-1/split_3_3.webp",
      },
    ],
  },
  {
    id: 92,
    name: "個人Q版",
    description: "世界盃足球賽~第四版~I-L組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A04-3-1",
        img: "./images/GPT0014-A04-3/split_0_0.webp",
      },
      {
        id: "GPT0014-A04-3-2",
        img: "./images/GPT0014-A04-3/split_0_1.webp",
      },
      {
        id: "GPT0014-A04-3-3",
        img: "./images/GPT0014-A04-3/split_0_2.webp",
      },
      {
        id: "GPT0014-A04-3-4",
        img: "./images/GPT0014-A04-3/split_0_3.webp",
      },
      {
        id: "GPT0014-A04-3-5",
        img: "./images/GPT0014-A04-3/split_1_0.webp",
      },
      {
        id: "GPT0014-A04-3-6",
        img: "./images/GPT0014-A04-3/split_1_1.webp",
      },
      {
        id: "GPT0014-A04-3-7",
        img: "./images/GPT0014-A04-3/split_1_2.webp",
      },
      {
        id: "GPT0014-A04-3-8",
        img: "./images/GPT0014-A04-3/split_1_3.webp",
      },
      {
        id: "GPT0014-A04-3-9",
        img: "./images/GPT0014-A04-3/split_2_0.webp",
      },
      {
        id: "GPT0014-A04-3-A",
        img: "./images/GPT0014-A04-3/split_2_1.webp",
      },
      {
        id: "GPT0014-A04-3-B",
        img: "./images/GPT0014-A04-3/split_2_2.webp",
      },
      {
        id: "GPT0014-A04-3-C",
        img: "./images/GPT0014-A04-3/split_2_3.webp",
      },
      {
        id: "GPT0014-A04-3-D",
        img: "./images/GPT0014-A04-3/split_3_0.webp",
      },
      {
        id: "GPT0014-A04-3-E",
        img: "./images/GPT0014-A04-3/split_3_1.webp",
      },
      {
        id: "GPT0014-A04-3-F",
        img: "./images/GPT0014-A04-3/split_3_2.webp",
      },
      {
        id: "GPT0014-A04-3-G",
        img: "./images/GPT0014-A04-3/split_3_3.webp",
      },
    ],
  },
  {
    id: 91,
    name: "個人Q版",
    description: "世界盃足球賽~第四版~E-HD組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A04-2-1",
        img: "./images/GPT0014-A04-2/split_0_0.webp",
      },
      {
        id: "GPT0014-A04-2-2",
        img: "./images/GPT0014-A04-2/split_0_1.webp",
      },
      {
        id: "GPT0014-A04-2-3",
        img: "./images/GPT0014-A04-2/split_0_2.webp",
      },
      {
        id: "GPT0014-A04-2-4",
        img: "./images/GPT0014-A04-2/split_0_3.webp",
      },
      {
        id: "GPT0014-A04-2-5",
        img: "./images/GPT0014-A04-2/split_1_0.webp",
      },
      {
        id: "GPT0014-A04-2-6",
        img: "./images/GPT0014-A04-2/split_1_1.webp",
      },
      {
        id: "GPT0014-A04-2-7",
        img: "./images/GPT0014-A04-2/split_1_2.webp",
      },
      {
        id: "GPT0014-A04-2-8",
        img: "./images/GPT0014-A04-2/split_1_3.webp",
      },
      {
        id: "GPT0014-A04-2-9",
        img: "./images/GPT0014-A04-2/split_2_0.webp",
      },
      {
        id: "GPT0014-A04-2-A",
        img: "./images/GPT0014-A04-2/split_2_1.webp",
      },
      {
        id: "GPT0014-A04-2-B",
        img: "./images/GPT0014-A04-2/split_2_2.webp",
      },
      {
        id: "GPT0014-A04-2-C",
        img: "./images/GPT0014-A04-2/split_2_3.webp",
      },
      {
        id: "GPT0014-A04-2-D",
        img: "./images/GPT0014-A04-2/split_3_0.webp",
      },
      {
        id: "GPT0014-A04-2-E",
        img: "./images/GPT0014-A04-2/split_3_1.webp",
      },
      {
        id: "GPT0014-A04-2-F",
        img: "./images/GPT0014-A04-2/split_3_2.webp",
      },
      {
        id: "GPT0014-A04-2-G",
        img: "./images/GPT0014-A04-2/split_3_3.webp",
      },
    ],
  },
  {
    id: 90,
    name: "個人Q版",
    description: "世界盃足球賽~第四版~A-D組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A04-1-1",
        img: "./images/GPT0014-A04-1/split_0_0.webp",
      },
      {
        id: "GPT0014-A04-1-2",
        img: "./images/GPT0014-A04-1/split_0_1.webp",
      },
      {
        id: "GPT0014-A04-1-3",
        img: "./images/GPT0014-A04-1/split_0_2.webp",
      },
      {
        id: "GPT0014-A04-1-4",
        img: "./images/GPT0014-A04-1/split_0_3.webp",
      },
      {
        id: "GPT0014-A04-1-5",
        img: "./images/GPT0014-A04-1/split_1_0.webp",
      },
      {
        id: "GPT0014-A04-1-6",
        img: "./images/GPT0014-A04-1/split_1_1.webp",
      },
      {
        id: "GPT0014-A04-1-7",
        img: "./images/GPT0014-A04-1/split_1_2.webp",
      },
      {
        id: "GPT0014-A04-1-8",
        img: "./images/GPT0014-A04-1/split_1_3.webp",
      },
      {
        id: "GPT0014-A04-1-9",
        img: "./images/GPT0014-A04-1/split_2_0.webp",
      },
      {
        id: "GPT0014-A04-1-A",
        img: "./images/GPT0014-A04-1/split_2_1.webp",
      },
      {
        id: "GPT0014-A04-1-B",
        img: "./images/GPT0014-A04-1/split_2_2.webp",
      },
      {
        id: "GPT0014-A04-1-C",
        img: "./images/GPT0014-A04-1/split_2_3.webp",
      },
      {
        id: "GPT0014-A04-1-D",
        img: "./images/GPT0014-A04-1/split_3_0.webp",
      },
      {
        id: "GPT0014-A04-1-E",
        img: "./images/GPT0014-A04-1/split_3_1.webp",
      },
      {
        id: "GPT0014-A04-1-F",
        img: "./images/GPT0014-A04-1/split_3_2.webp",
      },
      {
        id: "GPT0014-A04-1-G",
        img: "./images/GPT0014-A04-1/split_3_3.webp",
      },
    ],
  },
  {
    id: 89,
    name: "個人Q版",
    description: "世界盃足球賽~第三版有足球~I-L組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A03-3-1",
        img: "./images/GPT0014-A03-3/split_0_0.webp",
      },
      {
        id: "GPT0014-A03-3-2",
        img: "./images/GPT0014-A03-3/split_0_1.webp",
      },
      {
        id: "GPT0014-A03-3-3",
        img: "./images/GPT0014-A03-3/split_0_2.webp",
      },
      {
        id: "GPT0014-A03-3-4",
        img: "./images/GPT0014-A03-3/split_0_3.webp",
      },
      {
        id: "GPT0014-A03-3-5",
        img: "./images/GPT0014-A03-3/split_1_0.webp",
      },
      {
        id: "GPT0014-A03-3-6",
        img: "./images/GPT0014-A03-3/split_1_1.webp",
      },
      {
        id: "GPT0014-A03-3-7",
        img: "./images/GPT0014-A03-3/split_1_2.webp",
      },
      {
        id: "GPT0014-A03-3-8",
        img: "./images/GPT0014-A03-3/split_1_3.webp",
      },
      {
        id: "GPT0014-A03-3-9",
        img: "./images/GPT0014-A03-3/split_2_0.webp",
      },
      {
        id: "GPT0014-A03-3-A",
        img: "./images/GPT0014-A03-3/split_2_1.webp",
      },
      {
        id: "GPT0014-A03-3-B",
        img: "./images/GPT0014-A03-3/split_2_2.webp",
      },
      {
        id: "GPT0014-A03-3-C",
        img: "./images/GPT0014-A03-3/split_2_3.webp",
      },
      {
        id: "GPT0014-A03-3-D",
        img: "./images/GPT0014-A03-3/split_3_0.webp",
      },
      {
        id: "GPT0014-A03-3-E",
        img: "./images/GPT0014-A03-3/split_3_1.webp",
      },
      {
        id: "GPT0014-A03-3-F",
        img: "./images/GPT0014-A03-3/split_3_2.webp",
      },
      {
        id: "GPT0014-A03-3-G",
        img: "./images/GPT0014-A03-3/split_3_3.webp",
      },
    ],
  },
  {
    id: 88,
    name: "個人Q版",
    description: "世界盃足球賽~第三版有足球~E-H組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A03-2-1",
        img: "./images/GPT0014-A03-2/split_0_0.webp",
      },
      {
        id: "GPT0014-A03-2-2",
        img: "./images/GPT0014-A03-2/split_0_1.webp",
      },
      {
        id: "GPT0014-A03-2-3",
        img: "./images/GPT0014-A03-2/split_0_2.webp",
      },
      {
        id: "GPT0014-A03-2-4",
        img: "./images/GPT0014-A03-2/split_0_3.webp",
      },
      {
        id: "GPT0014-A03-2-5",
        img: "./images/GPT0014-A03-2/split_1_0.webp",
      },
      {
        id: "GPT0014-A03-2-6",
        img: "./images/GPT0014-A03-2/split_1_1.webp",
      },
      {
        id: "GPT0014-A03-2-7",
        img: "./images/GPT0014-A03-2/split_1_2.webp",
      },
      {
        id: "GPT0014-A03-2-8",
        img: "./images/GPT0014-A03-2/split_1_3.webp",
      },
      {
        id: "GPT0014-A03-2-9",
        img: "./images/GPT0014-A03-2/split_2_0.webp",
      },
      {
        id: "GPT0014-A03-2-A",
        img: "./images/GPT0014-A03-2/split_2_1.webp",
      },
      {
        id: "GPT0014-A03-2-B",
        img: "./images/GPT0014-A03-2/split_2_2.webp",
      },
      {
        id: "GPT0014-A03-2-C",
        img: "./images/GPT0014-A03-2/split_2_3.webp",
      },
      {
        id: "GPT0014-A03-2-D",
        img: "./images/GPT0014-A03-2/split_3_0.webp",
      },
      {
        id: "GPT0014-A03-2-E",
        img: "./images/GPT0014-A03-2/split_3_1.webp",
      },
      {
        id: "GPT0014-A03-2-F",
        img: "./images/GPT0014-A03-2/split_3_2.webp",
      },
      {
        id: "GPT0014-A03-2-G",
        img: "./images/GPT0014-A03-2/split_3_3.webp",
      },
    ],
  },

  {
    id: 87,
    name: "個人Q版",
    description: "世界盃足球賽~第三版有足球~A-D組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A03-1-1",
        img: "./images/GPT0014-A03-1/split_0_0.webp",
      },
      {
        id: "GPT0014-A03-1-2",
        img: "./images/GPT0014-A03-1/split_0_1.webp",
      },
      {
        id: "GPT0014-A03-1-3",
        img: "./images/GPT0014-A03-1/split_0_2.webp",
      },
      {
        id: "GPT0014-A03-1-4",
        img: "./images/GPT0014-A03-1/split_0_3.webp",
      },
      {
        id: "GPT0014-A03-1-5",
        img: "./images/GPT0014-A03-1/split_1_0.webp",
      },
      {
        id: "GPT0014-A03-1-6",
        img: "./images/GPT0014-A03-1/split_1_1.webp",
      },
      {
        id: "GPT0014-A03-1-7",
        img: "./images/GPT0014-A03-1/split_1_2.webp",
      },
      {
        id: "GPT0014-A03-1-8",
        img: "./images/GPT0014-A03-1/split_1_3.webp",
      },
      {
        id: "GPT0014-A03-1-9",
        img: "./images/GPT0014-A03-1/split_2_0.webp",
      },
      {
        id: "GPT0014-A03-1-A",
        img: "./images/GPT0014-A03-1/split_2_1.webp",
      },
      {
        id: "GPT0014-A03-1-B",
        img: "./images/GPT0014-A03-1/split_2_2.webp",
      },
      {
        id: "GPT0014-A03-1-C",
        img: "./images/GPT0014-A03-1/split_2_3.webp",
      },
      {
        id: "GPT0014-A03-1-D",
        img: "./images/GPT0014-A03-1/split_3_0.webp",
      },
      {
        id: "GPT0014-A03-1-E",
        img: "./images/GPT0014-A03-1/split_3_1.webp",
      },
      {
        id: "GPT0014-A03-1-F",
        img: "./images/GPT0014-A03-1/split_3_2.webp",
      },
      {
        id: "GPT0014-A03-1-G",
        img: "./images/GPT0014-A03-1/split_3_3.webp",
      },
    ],
  },
  {
    id: 86,
    name: "個人Q版",
    description: "世界盃足球賽~第二版無背景~I-組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A02-3-1",
        img: "./images/GPT0014-A02-3/split_0_0.webp",
      },
      {
        id: "GPT0014-A02-3-2",
        img: "./images/GPT0014-A02-3/split_0_1.webp",
      },
      {
        id: "GPT0014-A02-3-3",
        img: "./images/GPT0014-A02-3/split_0_2.webp",
      },
      {
        id: "GPT0014-A02-3-4",
        img: "./images/GPT0014-A02-3/split_0_3.webp",
      },
      {
        id: "GPT0014-A02-3-5",
        img: "./images/GPT0014-A02-3/split_1_0.webp",
      },
      {
        id: "GPT0014-A02-3-6",
        img: "./images/GPT0014-A02-3/split_1_1.webp",
      },
      {
        id: "GPT0014-A02-3-7",
        img: "./images/GPT0014-A02-3/split_1_2.webp",
      },
      {
        id: "GPT0014-A02-3-8",
        img: "./images/GPT0014-A02-3/split_1_3.webp",
      },
      {
        id: "GPT0014-A02-3-9",
        img: "./images/GPT0014-A02-3/split_2_0.webp",
      },
      {
        id: "GPT0014-A02-3-A",
        img: "./images/GPT0014-A02-3/split_2_1.webp",
      },
      {
        id: "GPT0014-A02-3-B",
        img: "./images/GPT0014-A02-3/split_2_2.webp",
      },
      {
        id: "GPT0014-A02-3-C",
        img: "./images/GPT0014-A02-3/split_2_3.webp",
      },
      {
        id: "GPT0014-A02-3-D",
        img: "./images/GPT0014-A02-3/split_3_0.webp",
      },
      {
        id: "GPT0014-A02-3-E",
        img: "./images/GPT0014-A02-3/split_3_1.webp",
      },
      {
        id: "GPT0014-A02-3-F",
        img: "./images/GPT0014-A02-3/split_3_2.webp",
      },
      {
        id: "GPT0014-A02-3-G",
        img: "./images/GPT0014-A02-3/split_3_3.webp",
      },
    ],
  },
  {
    id: 85,
    name: "個人Q版",
    description: "世界盃足球賽~第二版無背景~E-H組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A02-2-1",
        img: "./images/GPT0014-A02-2/split_0_0.webp",
      },
      {
        id: "GPT0014-A02-2-2",
        img: "./images/GPT0014-A02-2/split_0_1.webp",
      },
      {
        id: "GPT0014-A02-2-3",
        img: "./images/GPT0014-A02-2/split_0_2.webp",
      },
      {
        id: "GPT0014-A02-2-4",
        img: "./images/GPT0014-A02-2/split_0_3.webp",
      },
      {
        id: "GPT0014-A02-2-5",
        img: "./images/GPT0014-A02-2/split_1_0.webp",
      },
      {
        id: "GPT0014-A02-2-6",
        img: "./images/GPT0014-A02-2/split_1_1.webp",
      },
      {
        id: "GPT0014-A02-2-7",
        img: "./images/GPT0014-A02-2/split_1_2.webp",
      },
      {
        id: "GPT0014-A02-2-8",
        img: "./images/GPT0014-A02-2/split_1_3.webp",
      },
      {
        id: "GPT0014-A02-2-9",
        img: "./images/GPT0014-A02-2/split_2_0.webp",
      },
      {
        id: "GPT0014-A02-2-A",
        img: "./images/GPT0014-A02-2/split_2_1.webp",
      },
      {
        id: "GPT0014-A02-2-B",
        img: "./images/GPT0014-A02-2/split_2_2.webp",
      },
      {
        id: "GPT0014-A02-2-C",
        img: "./images/GPT0014-A02-2/split_2_3.webp",
      },
      {
        id: "GPT0014-A02-2-D",
        img: "./images/GPT0014-A02-2/split_3_0.webp",
      },
      {
        id: "GPT0014-A02-2-E",
        img: "./images/GPT0014-A02-2/split_3_1.webp",
      },
      {
        id: "GPT0014-A02-2-F",
        img: "./images/GPT0014-A02-2/split_3_2.webp",
      },
      {
        id: "GPT0014-A02-2-G",
        img: "./images/GPT0014-A02-2/split_3_3.webp",
      },
    ],
  },
  {
    id: 84,
    name: "個人Q版",
    description: "世界盃足球賽~第二版無背景~A-D組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A02-1-1",
        img: "./images/GPT0014-A02-1/split_0_0.webp",
      },
      {
        id: "GPT0014-A02-1-2",
        img: "./images/GPT0014-A02-1/split_0_1.webp",
      },
      {
        id: "GPT0014-A02-1-3",
        img: "./images/GPT0014-A02-1/split_0_2.webp",
      },
      {
        id: "GPT0014-A02-1-4",
        img: "./images/GPT0014-A02-1/split_0_3.webp",
      },
      {
        id: "GPT0014-A02-1-5",
        img: "./images/GPT0014-A02-1/split_1_0.webp",
      },
      {
        id: "GPT0014-A02-1-6",
        img: "./images/GPT0014-A02-1/split_1_1.webp",
      },
      {
        id: "GPT0014-A02-1-7",
        img: "./images/GPT0014-A02-1/split_1_2.webp",
      },
      {
        id: "GPT0014-A02-1-8",
        img: "./images/GPT0014-A02-1/split_1_3.webp",
      },
      {
        id: "GPT0014-A02-1-9",
        img: "./images/GPT0014-A02-1/split_2_0.webp",
      },
      {
        id: "GPT0014-A02-1-A",
        img: "./images/GPT0014-A02-1/split_2_1.webp",
      },
      {
        id: "GPT0014-A02-1-B",
        img: "./images/GPT0014-A02-1/split_2_2.webp",
      },
      {
        id: "GPT0014-A02-1-C",
        img: "./images/GPT0014-A02-1/split_2_3.webp",
      },
      {
        id: "GPT0014-A02-1-D",
        img: "./images/GPT0014-A02-1/split_3_0.webp",
      },
      {
        id: "GPT0014-A02-1-E",
        img: "./images/GPT0014-A02-1/split_3_1.webp",
      },
      {
        id: "GPT0014-A02-1-F",
        img: "./images/GPT0014-A02-1/split_3_2.webp",
      },
      {
        id: "GPT0014-A02-1-G",
        img: "./images/GPT0014-A02-1/split_3_3.webp",
      },
    ],
  },
  {
    id: 83,
    name: "個人Q版",
    description: "世界盃足球賽~第一版有背景~I-L組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A01-3-1",
        img: "./images/GPT0014-A01-3/split_0_0.webp",
      },
      {
        id: "GPT0014-A01-3-2",
        img: "./images/GPT0014-A01-3/split_0_1.webp",
      },
      {
        id: "GPT0014-A01-3-3",
        img: "./images/GPT0014-A01-3/split_0_2.webp",
      },
      {
        id: "GPT0014-A01-3-4",
        img: "./images/GPT0014-A01-3/split_0_3.webp",
      },
      {
        id: "GPT0014-A01-3-5",
        img: "./images/GPT0014-A01-3/split_1_0.webp",
      },
      {
        id: "GPT0014-A01-3-6",
        img: "./images/GPT0014-A01-3/split_1_1.webp",
      },
      {
        id: "GPT0014-A01-3-7",
        img: "./images/GPT0014-A01-3/split_1_2.webp",
      },
      {
        id: "GPT0014-A01-3-8",
        img: "./images/GPT0014-A01-3/split_1_3.webp",
      },
      {
        id: "GPT0014-A01-3-9",
        img: "./images/GPT0014-A01-3/split_2_0.webp",
      },
      {
        id: "GPT0014-A01-3-A",
        img: "./images/GPT0014-A01-3/split_2_1.webp",
      },
      {
        id: "GPT0014-A01-3-B",
        img: "./images/GPT0014-A01-3/split_2_2.webp",
      },
      {
        id: "GPT0014-A01-3-C",
        img: "./images/GPT0014-A01-3/split_2_3.webp",
      },
      {
        id: "GPT0014-A01-3-D",
        img: "./images/GPT0014-A01-3/split_3_0.webp",
      },
      {
        id: "GPT0014-A01-3-E",
        img: "./images/GPT0014-A01-3/split_3_1.webp",
      },
      {
        id: "GPT0014-A01-3-F",
        img: "./images/GPT0014-A01-3/split_3_2.webp",
      },
      {
        id: "GPT0014-A01-3-G",
        img: "./images/GPT0014-A01-3/split_3_3.webp",
      },
    ],
  },

  {
    id: 82,
    name: "個人Q版",
    description: "世界盃足球賽~第一版有背景~E-H組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A01-2-1",
        img: "./images/GPT0014-A01-2/split_0_0.webp",
      },
      {
        id: "GPT0014-A01-2-2",
        img: "./images/GPT0014-A01-2/split_0_1.webp",
      },
      {
        id: "GPT0014-A01-2-3",
        img: "./images/GPT0014-A01-2/split_0_2.webp",
      },
      {
        id: "GPT0014-A01-2-4",
        img: "./images/GPT0014-A01-2/split_0_3.webp",
      },
      {
        id: "GPT0014-A01-2-5",
        img: "./images/GPT0014-A01-2/split_1_0.webp",
      },
      {
        id: "GPT0014-A01-2-6",
        img: "./images/GPT0014-A01-2/split_1_1.webp",
      },
      {
        id: "GPT0014-A01-2-7",
        img: "./images/GPT0014-A01-2/split_1_2.webp",
      },
      {
        id: "GPT0014-A01-2-8",
        img: "./images/GPT0014-A01-2/split_1_3.webp",
      },
      {
        id: "GPT0014-A01-2-9",
        img: "./images/GPT0014-A01-2/split_2_0.webp",
      },
      {
        id: "GPT0014-A01-2-A",
        img: "./images/GPT0014-A01-2/split_2_1.webp",
      },
      {
        id: "GPT0014-A01-2-B",
        img: "./images/GPT0014-A01-2/split_2_2.webp",
      },
      {
        id: "GPT0014-A01-2-C",
        img: "./images/GPT0014-A01-2/split_2_3.webp",
      },
      {
        id: "GPT0014-A01-2-D",
        img: "./images/GPT0014-A01-2/split_3_0.webp",
      },
      {
        id: "GPT0014-A01-2-E",
        img: "./images/GPT0014-A01-2/split_3_1.webp",
      },
      {
        id: "GPT0014-A01-2-F",
        img: "./images/GPT0014-A01-2/split_3_2.webp",
      },
      {
        id: "GPT0014-A01-2-G",
        img: "./images/GPT0014-A01-2/split_3_3.webp",
      },
    ],
  },

  {
    id: 81,
    name: "個人Q版",
    description: "世界盃足球賽~第一版有背景~A-D組",
    category: "世足系列",
    stickers: [
      {
        id: "GPT0014-A01-1-1",
        img: "./images/GPT0014-A01-1/split_0_0.webp",
      },
      {
        id: "GPT0014-A01-1-2",
        img: "./images/GPT0014-A01-1/split_0_1.webp",
      },
      {
        id: "GPT0014-A01-1-3",
        img: "./images/GPT0014-A01-1/split_0_2.webp",
      },
      {
        id: "GPT0014-A01-1-4",
        img: "./images/GPT0014-A01-1/split_0_3.webp",
      },
      {
        id: "GPT0014-A01-1-5",
        img: "./images/GPT0014-A01-1/split_1_0.webp",
      },
      {
        id: "GPT0014-A01-1-6",
        img: "./images/GPT0014-A01-1/split_1_1.webp",
      },
      {
        id: "GPT0014-A01-1-7",
        img: "./images/GPT0014-A01-1/split_1_2.webp",
      },
      {
        id: "GPT0014-A01-1-8",
        img: "./images/GPT0014-A01-1/split_1_3.webp",
      },
      {
        id: "GPT0014-A01-1-9",
        img: "./images/GPT0014-A01-1/split_2_0.webp",
      },
      {
        id: "GPT0014-A01-1-A",
        img: "./images/GPT0014-A01-1/split_2_1.webp",
      },
      {
        id: "GPT0014-A01-1-B",
        img: "./images/GPT0014-A01-1/split_2_2.webp",
      },
      {
        id: "GPT0014-A01-1-C",
        img: "./images/GPT0014-A01-1/split_2_3.webp",
      },
      {
        id: "GPT0014-A01-1-D",
        img: "./images/GPT0014-A01-1/split_3_0.webp",
      },
      {
        id: "GPT0014-A01-1-E",
        img: "./images/GPT0014-A01-1/split_3_1.webp",
      },
      {
        id: "GPT0014-A01-1-F",
        img: "./images/GPT0014-A01-1/split_3_2.webp",
      },
      {
        id: "GPT0014-A01-1-G",
        img: "./images/GPT0014-A01-1/split_3_3.webp",
      },
    ],
  },

  {
    id: 77,
    name: "個人Q版",
    description: "端午節祝賀詞",
    category: "年節系列",
    stickers: [
      {
        id: "GPT0013-1-端午節-1",
        img: "./images/GPT0013-1-端午節/split_0_0.webp",
      },
      {
        id: "GPT0013-1-端午節-2",
        img: "./images/GPT0013-1-端午節/split_0_1.webp",
      },
      {
        id: "GPT0013-1-端午節-3",
        img: "./images/GPT0013-1-端午節/split_0_2.webp",
      },
      {
        id: "GPT0013-1-端午節-4",
        img: "./images/GPT0013-1-端午節/split_0_3.webp",
      },
      {
        id: "GPT0013-1-端午節-5",
        img: "./images/GPT0013-1-端午節/split_1_0.webp",
      },
      {
        id: "GPT0013-1-端午節-6",
        img: "./images/GPT0013-1-端午節/split_1_1.webp",
      },
      {
        id: "GPT0013-1-端午節-7",
        img: "./images/GPT0013-1-端午節/split_1_2.webp",
      },
      {
        id: "GPT0013-1-端午節-8",
        img: "./images/GPT0013-1-端午節/split_1_3.webp",
      },
      {
        id: "GPT0013-1-端午節-9",
        img: "./images/GPT0013-1-端午節/split_2_0.webp",
      },
      {
        id: "GPT0013-1-端午節-A",
        img: "./images/GPT0013-1-端午節/split_2_1.webp",
      },
      {
        id: "GPT0013-1-端午節-B",
        img: "./images/GPT0013-1-端午節/split_2_2.webp",
      },
      {
        id: "GPT0013-1-端午節-C",
        img: "./images/GPT0013-1-端午節/split_2_3.webp",
      },
      {
        id: "GPT0013-1-端午節-D",
        img: "./images/GPT0013-1-端午節/split_3_0.webp",
      },
      {
        id: "GPT0013-1-端午節-E",
        img: "./images/GPT0013-1-端午節/split_3_1.webp",
      },
      {
        id: "GPT0013-1-端午節-F",
        img: "./images/GPT0013-1-端午節/split_3_2.webp",
      },
      {
        id: "GPT0013-1-端午節-G",
        img: "./images/GPT0013-1-端午節/split_3_3.webp",
      },
    ],
  },
  {
    id: 78,
    name: "個人Q版",
    description: "端午節祝賀詞",
    category: "年節系列",
    stickers: [
      {
        id: "GPT0013-2-端午節-1",
        img: "./images/GPT0013-2-端午節/split_0_0.webp",
      },
      {
        id: "GPT0013-2-端午節-2",
        img: "./images/GPT0013-2-端午節/split_0_1.webp",
      },
      {
        id: "GPT0013-2-端午節-3",
        img: "./images/GPT0013-2-端午節/split_0_2.webp",
      },
      {
        id: "GPT0013-2-端午節-4",
        img: "./images/GPT0013-2-端午節/split_0_3.webp",
      },
      {
        id: "GPT0013-2-端午節-5",
        img: "./images/GPT0013-2-端午節/split_1_0.webp",
      },
      {
        id: "GPT0013-2-端午節-6",
        img: "./images/GPT0013-2-端午節/split_1_1.webp",
      },
      {
        id: "GPT0013-2-端午節-7",
        img: "./images/GPT0013-2-端午節/split_1_2.webp",
      },
      {
        id: "GPT0013-2-端午節-8",
        img: "./images/GPT0013-2-端午節/split_1_3.webp",
      },
      {
        id: "GPT0013-2-端午節-9",
        img: "./images/GPT0013-2-端午節/split_2_0.webp",
      },
      {
        id: "GPT0013-2-端午節-A",
        img: "./images/GPT0013-2-端午節/split_2_1.webp",
      },
      {
        id: "GPT0013-2-端午節-B",
        img: "./images/GPT0013-2-端午節/split_2_2.webp",
      },
      {
        id: "GPT0013-2-端午節-C",
        img: "./images/GPT0013-2-端午節/split_2_3.webp",
      },
      {
        id: "GPT0013-2-端午節-D",
        img: "./images/GPT0013-2-端午節/split_3_0.webp",
      },
      {
        id: "GPT0013-2-端午節-E",
        img: "./images/GPT0013-2-端午節/split_3_1.webp",
      },
      {
        id: "GPT0013-2-端午節-F",
        img: "./images/GPT0013-2-端午節/split_3_2.webp",
      },
      {
        id: "GPT0013-2-端午節-G",
        img: "./images/GPT0013-2-端午節/split_3_3.webp",
      },
    ],
  },
  {
    id: 79,
    name: "個人Q版",
    description: "端午節祝賀詞",
    category: "年節系列",
    stickers: [
      {
        id: "GPT0013-3-端午節-1",
        img: "./images/GPT0013-3-端午節/split_0_0.webp",
      },
      {
        id: "GPT0013-3-端午節-2",
        img: "./images/GPT0013-3-端午節/split_0_1.webp",
      },
      {
        id: "GPT0013-3-端午節-3",
        img: "./images/GPT0013-3-端午節/split_0_2.webp",
      },
      {
        id: "GPT0013-3-端午節-4",
        img: "./images/GPT0013-3-端午節/split_0_3.webp",
      },
      {
        id: "GPT0013-3-端午節-5",
        img: "./images/GPT0013-3-端午節/split_1_0.webp",
      },
      {
        id: "GPT0013-3-端午節-6",
        img: "./images/GPT0013-3-端午節/split_1_1.webp",
      },
      {
        id: "GPT0013-3-端午節-7",
        img: "./images/GPT0013-3-端午節/split_1_2.webp",
      },
      {
        id: "GPT0013-3-端午節-8",
        img: "./images/GPT0013-3-端午節/split_1_3.webp",
      },
      {
        id: "GPT0013-3-端午節-9",
        img: "./images/GPT0013-3-端午節/split_2_0.webp",
      },
      {
        id: "GPT0013-3-端午節-A",
        img: "./images/GPT0013-3-端午節/split_2_1.webp",
      },
      {
        id: "GPT0013-3-端午節-B",
        img: "./images/GPT0013-3-端午節/split_2_2.webp",
      },
      {
        id: "GPT0013-3-端午節-C",
        img: "./images/GPT0013-3-端午節/split_2_3.webp",
      },
    ],
  },
  {
    id: 80,
    name: "個人Q版",
    description: "端午節祝賀詞",
    category: "年節系列",
    stickers: [
      {
        id: "GPT0013-4-端午節-1",
        img: "./images/GPT0013-4-端午節/split_0_0.webp",
      },
      {
        id: "GPT0013-4-端午節-2",
        img: "./images/GPT0013-4-端午節/split_0_1.webp",
      },
      {
        id: "GPT0013-4-端午節-3",
        img: "./images/GPT0013-4-端午節/split_0_2.webp",
      },
      {
        id: "GPT0013-4-端午節-4",
        img: "./images/GPT0013-4-端午節/split_0_3.webp",
      },
      {
        id: "GPT0013-4-端午節-5",
        img: "./images/GPT0013-4-端午節/split_1_0.webp",
      },
      {
        id: "GPT0013-4-端午節-6",
        img: "./images/GPT0013-4-端午節/split_1_1.webp",
      },
      {
        id: "GPT0013-4-端午節-7",
        img: "./images/GPT0013-4-端午節/split_1_2.webp",
      },
      {
        id: "GPT0013-4-端午節-8",
        img: "./images/GPT0013-4-端午節/split_1_3.webp",
      },
      {
        id: "GPT0013-4-端午節-9",
        img: "./images/GPT0013-4-端午節/split_2_0.webp",
      },
      {
        id: "GPT0013-4-端午節-A",
        img: "./images/GPT0013-4-端午節/split_2_1.webp",
      },
      {
        id: "GPT0013-4-端午節-B",
        img: "./images/GPT0013-4-端午節/split_2_2.webp",
      },
      {
        id: "GPT0013-4-端午節-C",
        img: "./images/GPT0013-4-端午節/split_2_3.webp",
      },
    ],
  },
  {
    id: 1,
    name: "個人Q版",
    description: "仿貓爪抓-特效爪抓",
    category: "特效系列",
    stickers: [
      { id: "GPT009-1-1", img: "./images/GPT009-1/split_0_0.webp" },
      { id: "GPT009-1-2", img: "./images/GPT009-1/split_0_1.webp" },
      { id: "GPT009-1-3", img: "./images/GPT009-1/split_0_2.webp" },
      { id: "GPT009-1-4", img: "./images/GPT009-1/split_0_3.webp" },
      { id: "GPT009-1-5", img: "./images/GPT009-1/split_1_0.webp" },
      { id: "GPT009-1-6", img: "./images/GPT009-1/split_1_1.webp" },
      { id: "GPT009-1-7", img: "./images/GPT009-1/split_1_2.webp" },
      { id: "GPT009-1-8", img: "./images/GPT009-1/split_1_3.webp" },
      { id: "GPT009-1-9", img: "./images/GPT009-1/split_2_0.webp" },
      { id: "GPT009-1-A", img: "./images/GPT009-1/split_2_1.webp" },
      { id: "GPT009-1-B", img: "./images/GPT009-1/split_2_2.webp" },
      { id: "GPT009-1-C", img: "./images/GPT009-1/split_2_3.webp" },
    ],
  },
  {
    id: 2,
    name: "個人Q版",
    description: "仿貓爪抓-特效爪抓",
    category: "特效系列",
    stickers: [
      { id: "GPT009-2-1", img: "./images/GPT009-2/split_0_0.webp" },
      { id: "GPT009-2-2", img: "./images/GPT009-2/split_0_1.webp" },
      { id: "GPT009-2-3", img: "./images/GPT009-2/split_0_2.webp" },
      { id: "GPT009-2-4", img: "./images/GPT009-2/split_0_3.webp" },
      { id: "GPT009-2-5", img: "./images/GPT009-2/split_1_0.webp" },
      { id: "GPT009-2-6", img: "./images/GPT009-2/split_1_1.webp" },
      { id: "GPT009-2-7", img: "./images/GPT009-2/split_1_2.webp" },
      { id: "GPT009-2-8", img: "./images/GPT009-2/split_1_3.webp" },
      { id: "GPT009-2-9", img: "./images/GPT009-2/split_2_0.webp" },
      { id: "GPT009-2-A", img: "./images/GPT009-2/split_2_1.webp" },
      { id: "GPT009-2-B", img: "./images/GPT009-2/split_2_2.webp" },
      { id: "GPT009-2-C", img: "./images/GPT009-2/split_2_3.webp" },
    ],
  },
  {
    id: 3,
    name: "個人Q版",
    description: "仿貓爪抓 -禮貌大字抓",
    category: "大字系列",
    stickers: [
      { id: "GPT009-3-1", img: "./images/GPT009-3/split_0_0.webp" },
      { id: "GPT009-3-2", img: "./images/GPT009-3/split_0_1.webp" },
      { id: "GPT009-3-3", img: "./images/GPT009-3/split_0_2.webp" },
      { id: "GPT009-3-4", img: "./images/GPT009-3/split_0_3.webp" },
      { id: "GPT009-3-5", img: "./images/GPT009-3/split_1_0.webp" },
      { id: "GPT009-3-6", img: "./images/GPT009-3/split_1_1.webp" },
      { id: "GPT009-3-7", img: "./images/GPT009-3/split_1_2.webp" },
      { id: "GPT009-3-8", img: "./images/GPT009-3/split_1_3.webp" },
      { id: "GPT009-3-9", img: "./images/GPT009-3/split_2_0.webp" },
      { id: "GPT009-3-A", img: "./images/GPT009-3/split_2_1.webp" },
      { id: "GPT009-3-B", img: "./images/GPT009-3/split_2_2.webp" },
      { id: "GPT009-3-C", img: "./images/GPT009-3/split_2_3.webp" },
    ],
  },
  {
    id: 4,
    name: "個人Q版",
    description: "仿貓爪抓 -禮貌大字抓",
    category: "大字系列",
    stickers: [
      { id: "GPT009-4-1", img: "./images/GPT009-4/split_0_0.webp" },
      { id: "GPT009-4-2", img: "./images/GPT009-4/split_0_1.webp" },
      { id: "GPT009-4-3", img: "./images/GPT009-4/split_0_2.webp" },
      { id: "GPT009-4-4", img: "./images/GPT009-4/split_0_3.webp" },
      { id: "GPT009-4-5", img: "./images/GPT009-4/split_1_0.webp" },
      { id: "GPT009-4-6", img: "./images/GPT009-4/split_1_1.webp" },
      { id: "GPT009-4-7", img: "./images/GPT009-4/split_1_2.webp" },
      { id: "GPT009-4-8", img: "./images/GPT009-4/split_1_3.webp" },
      { id: "GPT009-4-9", img: "./images/GPT009-4/split_2_0.webp" },
      { id: "GPT009-4-A", img: "./images/GPT009-4/split_2_1.webp" },
      { id: "GPT009-4-B", img: "./images/GPT009-4/split_2_2.webp" },
      { id: "GPT009-4-C", img: "./images/GPT009-4/split_2_3.webp" },
    ],
  },
  {
    id: 5,
    name: "個人Q版",
    description: "仿貓爪抓 -爪抓人生",
    category: "人生系列",
    stickers: [
      { id: "GPT009-5-1", img: "./images/GPT009-5/split_0_0.webp" },
      { id: "GPT009-5-2", img: "./images/GPT009-5/split_0_1.webp" },
      { id: "GPT009-5-3", img: "./images/GPT009-5/split_0_2.webp" },
      { id: "GPT009-5-4", img: "./images/GPT009-5/split_0_3.webp" },
      { id: "GPT009-5-5", img: "./images/GPT009-5/split_1_0.webp" },
      { id: "GPT009-5-6", img: "./images/GPT009-5/split_1_1.webp" },
      { id: "GPT009-5-7", img: "./images/GPT009-5/split_1_2.webp" },
      { id: "GPT009-5-8", img: "./images/GPT009-5/split_1_3.webp" },
      { id: "GPT009-5-9", img: "./images/GPT009-5/split_2_0.webp" },
      { id: "GPT009-5-A", img: "./images/GPT009-5/split_2_1.webp" },
      { id: "GPT009-5-B", img: "./images/GPT009-5/split_2_2.webp" },
      { id: "GPT009-5-C", img: "./images/GPT009-5/split_2_3.webp" },
    ],
  },
  {
    id: 6,
    name: "個人Q版",
    description: "仿貓爪抓 -爪抓人生",
    category: "人生系列",
    stickers: [
      { id: "GPT009-6-1", img: "./images/GPT009-6/split_0_0.webp" },
      { id: "GPT009-6-2", img: "./images/GPT009-6/split_0_1.webp" },
      { id: "GPT009-6-3", img: "./images/GPT009-6/split_0_2.webp" },
      { id: "GPT009-6-4", img: "./images/GPT009-6/split_0_3.webp" },
      { id: "GPT009-6-5", img: "./images/GPT009-6/split_1_0.webp" },
      { id: "GPT009-6-6", img: "./images/GPT009-6/split_1_1.webp" },
      { id: "GPT009-6-7", img: "./images/GPT009-6/split_1_2.webp" },
      { id: "GPT009-6-8", img: "./images/GPT009-6/split_1_3.webp" },
      { id: "GPT009-6-9", img: "./images/GPT009-6/split_2_0.webp" },
      { id: "GPT009-6-A", img: "./images/GPT009-6/split_2_1.webp" },
      { id: "GPT009-6-B", img: "./images/GPT009-6/split_2_2.webp" },
      { id: "GPT009-6-C", img: "./images/GPT009-6/split_2_3.webp" },
    ],
  },
  {
    id: 7,
    name: "小小兵系列",
    description: "仿貓爪抓-禮貌大字抓",
    category: "大字系列",
    stickers: [
      { id: "GPT009-7-1", img: "./images/GPT009-7/split_0_0.webp" },
      { id: "GPT009-7-2", img: "./images/GPT009-7/split_0_1.webp" },
      { id: "GPT009-7-3", img: "./images/GPT009-7/split_0_2.webp" },
      { id: "GPT009-7-4", img: "./images/GPT009-7/split_0_3.webp" },
      { id: "GPT009-7-5", img: "./images/GPT009-7/split_1_0.webp" },
      { id: "GPT009-7-6", img: "./images/GPT009-7/split_1_1.webp" },
      { id: "GPT009-7-7", img: "./images/GPT009-7/split_1_2.webp" },
      { id: "GPT009-7-8", img: "./images/GPT009-7/split_1_3.webp" },
      { id: "GPT009-7-9", img: "./images/GPT009-7/split_2_0.webp" },
      { id: "GPT009-7-A", img: "./images/GPT009-7/split_2_1.webp" },
      { id: "GPT009-7-B", img: "./images/GPT009-7/split_2_2.webp" },
      { id: "GPT009-7-C", img: "./images/GPT009-7/split_2_3.webp" },
    ],
  },
  {
    id: 8,
    name: "小小兵系列-2",
    description: "仿貓爪抓-禮貌大字抓",
    category: "大字系列",
    stickers: [
      { id: "GPT009-8-1", img: "./images/GPT009-8/split_0_0.webp" },
      { id: "GPT009-8-2", img: "./images/GPT009-8/split_0_1.webp" },
      { id: "GPT009-8-3", img: "./images/GPT009-8/split_0_2.webp" },
      { id: "GPT009-8-4", img: "./images/GPT009-8/split_0_3.webp" },
      { id: "GPT009-8-5", img: "./images/GPT009-8/split_1_0.webp" },
      { id: "GPT009-8-6", img: "./images/GPT009-8/split_1_1.webp" },
      { id: "GPT009-8-7", img: "./images/GPT009-8/split_1_2.webp" },
      { id: "GPT009-8-8", img: "./images/GPT009-8/split_1_3.webp" },
      { id: "GPT009-8-9", img: "./images/GPT009-8/split_2_0.webp" },
      { id: "GPT009-8-A", img: "./images/GPT009-8/split_2_1.webp" },
      { id: "GPT009-8-B", img: "./images/GPT009-8/split_2_2.webp" },
      { id: "GPT009-8-C", img: "./images/GPT009-8/split_2_3.webp" },
    ],
  },

  {
    id: 9,
    name: "個人Q版",
    description: "仿貓爪抓-散步抓-1",
    category: "散步系列",
    stickers: [
      { id: "GPT007-1-1", img: "./images/GPT007-1/split_0_0.webp" },
      { id: "GPT007-1-2", img: "./images/GPT007-1/split_0_1.webp" },
      { id: "GPT007-1-3", img: "./images/GPT007-1/split_0_2.webp" },
      { id: "GPT007-1-4", img: "./images/GPT007-1/split_0_3.webp" },
      { id: "GPT007-1-5", img: "./images/GPT007-1/split_1_0.webp" },
      { id: "GPT007-1-6", img: "./images/GPT007-1/split_1_1.webp" },
      { id: "GPT007-1-7", img: "./images/GPT007-1/split_1_2.webp" },
      { id: "GPT007-1-8", img: "./images/GPT007-1/split_1_3.webp" },
      { id: "GPT007-1-9", img: "./images/GPT007-1/split_2_0.webp" },
      { id: "GPT007-1-A", img: "./images/GPT007-1/split_2_1.webp" },
      { id: "GPT007-1-B", img: "./images/GPT007-1/split_2_2.webp" },
      { id: "GPT007-1-C", img: "./images/GPT007-1/split_2_3.webp" },
      { id: "GPT007-1-D", img: "./images/GPT007-1/split_3_0.webp" },
      { id: "GPT007-1-E", img: "./images/GPT007-1/split_3_1.webp" },
      { id: "GPT007-1-F", img: "./images/GPT007-1/split_3_2.webp" },
      { id: "GPT007-1-G", img: "./images/GPT007-1/split_3_3.webp" },
      { id: "GPT007-1-H", img: "./images/GPT007-1/split_4_0.webp" },
      { id: "GPT007-1-I", img: "./images/GPT007-1/split_4_1.webp" },
      { id: "GPT007-1-J", img: "./images/GPT007-1/split_4_2.webp" },
      { id: "GPT007-1-K", img: "./images/GPT007-1/split_4_3.webp" },
    ],
  },
  {
    id: 10,
    name: "個人Q版",
    description: "仿貓爪抓-散步抓-2",
    category: "散步系列",
    stickers: [
      { id: "GPT007-2-1", img: "./images/GPT007-2/split_0_0.webp" },
      { id: "GPT007-2-2", img: "./images/GPT007-2/split_0_1.webp" },
      { id: "GPT007-2-3", img: "./images/GPT007-2/split_0_2.webp" },
      { id: "GPT007-2-4", img: "./images/GPT007-2/split_0_3.webp" },
      { id: "GPT007-2-5", img: "./images/GPT007-2/split_1_0.webp" },
      { id: "GPT007-2-6", img: "./images/GPT007-2/split_1_1.webp" },
      { id: "GPT007-2-7", img: "./images/GPT007-2/split_1_2.webp" },
      { id: "GPT007-2-8", img: "./images/GPT007-2/split_1_3.webp" },
      { id: "GPT007-2-9", img: "./images/GPT007-2/split_2_0.webp" },
      { id: "GPT007-2-A", img: "./images/GPT007-2/split_2_1.webp" },
      { id: "GPT007-2-B", img: "./images/GPT007-2/split_2_2.webp" },
      { id: "GPT007-2-C", img: "./images/GPT007-2/split_2_3.webp" },
      { id: "GPT007-2-D", img: "./images/GPT007-2/split_3_0.webp" },
      { id: "GPT007-2-E", img: "./images/GPT007-2/split_3_1.webp" },
      { id: "GPT007-2-F", img: "./images/GPT007-2/split_3_2.webp" },
      { id: "GPT007-2-G", img: "./images/GPT007-2/split_3_3.webp" },
      { id: "GPT007-2-H", img: "./images/GPT007-2/split_4_0.webp" },
      { id: "GPT007-2-I", img: "./images/GPT007-2/split_4_1.webp" },
      { id: "GPT007-2-J", img: "./images/GPT007-2/split_4_2.webp" },
      { id: "GPT007-2-K", img: "./images/GPT007-2/split_4_3.webp" },
    ],
  },

  {
    id: 11,
    name: "個人Q版",
    description: "仿貓爪抓-散步抓-3",
    category: "散步系列",
    stickers: [
      { id: "GPT007-3-1", img: "./images/GPT007-3/split_0_0.webp" },
      { id: "GPT007-3-2", img: "./images/GPT007-3/split_0_1.webp" },
      { id: "GPT007-3-3", img: "./images/GPT007-3/split_0_2.webp" },
      { id: "GPT007-3-4", img: "./images/GPT007-3/split_0_3.webp" },
      { id: "GPT007-3-5", img: "./images/GPT007-3/split_1_0.webp" },
      { id: "GPT007-3-6", img: "./images/GPT007-3/split_1_1.webp" },
      { id: "GPT007-3-7", img: "./images/GPT007-3/split_1_2.webp" },
      { id: "GPT007-3-8", img: "./images/GPT007-3/split_1_3.webp" },
      { id: "GPT007-3-9", img: "./images/GPT007-3/split_2_0.webp" },
      { id: "GPT007-3-A", img: "./images/GPT007-3/split_2_1.webp" },
      { id: "GPT007-3-B", img: "./images/GPT007-3/split_2_2.webp" },
      { id: "GPT007-3-C", img: "./images/GPT007-3/split_2_3.webp" },
      { id: "GPT007-3-D", img: "./images/GPT007-3/split_3_0.webp" },
      { id: "GPT007-3-E", img: "./images/GPT007-3/split_3_1.webp" },
      { id: "GPT007-3-F", img: "./images/GPT007-3/split_3_2.webp" },
      { id: "GPT007-3-G", img: "./images/GPT007-3/split_3_3.webp" },
      { id: "GPT007-3-H", img: "./images/GPT007-3/split_4_0.webp" },
      { id: "GPT007-3-I", img: "./images/GPT007-3/split_4_1.webp" },
      { id: "GPT007-3-J", img: "./images/GPT007-3/split_4_2.webp" },
      { id: "GPT007-3-K", img: "./images/GPT007-3/split_4_3.webp" },
    ],
  },
  {
    id: 12,
    name: "個人Q版",
    description: "仿胸毛公寓的猴子朋友",
    category: "日常系列",
    stickers: [
      { id: "GPT007-4-1", img: "./images/GPT007-4/split_0_0.webp" },
      { id: "GPT007-4-2", img: "./images/GPT007-4/split_0_1.webp" },
      { id: "GPT007-4-3", img: "./images/GPT007-4/split_0_2.webp" },
      { id: "GPT007-4-4", img: "./images/GPT007-4/split_0_3.webp" },
      { id: "GPT007-4-5", img: "./images/GPT007-4/split_1_0.webp" },
      { id: "GPT007-4-6", img: "./images/GPT007-4/split_1_1.webp" },
      { id: "GPT007-4-7", img: "./images/GPT007-4/split_1_2.webp" },
      { id: "GPT007-4-8", img: "./images/GPT007-4/split_1_3.webp" },
      { id: "GPT007-4-9", img: "./images/GPT007-4/split_2_0.webp" },
      { id: "GPT007-4-A", img: "./images/GPT007-4/split_2_1.webp" },
      { id: "GPT007-4-B", img: "./images/GPT007-4/split_2_2.webp" },
      { id: "GPT007-4-C", img: "./images/GPT007-4/split_2_3.webp" },
      { id: "GPT007-4-D", img: "./images/GPT007-4/split_3_0.webp" },
      { id: "GPT007-4-E", img: "./images/GPT007-4/split_3_1.webp" },
      { id: "GPT007-4-F", img: "./images/GPT007-4/split_3_2.webp" },
      { id: "GPT007-4-G", img: "./images/GPT007-4/split_3_3.webp" },
      { id: "GPT007-4-H", img: "./images/GPT007-4/split_4_0.webp" },
      { id: "GPT007-4-I", img: "./images/GPT007-4/split_4_1.webp" },
      { id: "GPT007-4-J", img: "./images/GPT007-4/split_4_2.webp" },
      { id: "GPT007-4-K", img: "./images/GPT007-4/split_4_3.webp" },
      { id: "GPT007-4-H", img: "./images/GPT007-4/split_5_0.webp" },
      { id: "GPT007-4-I", img: "./images/GPT007-4/split_5_1.webp" },
      { id: "GPT007-4-J", img: "./images/GPT007-4/split_5_2.webp" },
      { id: "GPT007-4-K", img: "./images/GPT007-4/split_5_3.webp" },
    ],
  },

  {
    id: 13,
    name: "個人Q版",
    description: "仿仿貓爪抓-大字好好抓-1",
    category: "大字系列",
    stickers: [
      { id: "GPT007-5-1", img: "./images/GPT007-5/split_0_0.webp" },
      { id: "GPT007-5-2", img: "./images/GPT007-5/split_0_1.webp" },
      { id: "GPT007-5-3", img: "./images/GPT007-5/split_0_2.webp" },
      { id: "GPT007-5-4", img: "./images/GPT007-5/split_0_3.webp" },
      { id: "GPT007-5-5", img: "./images/GPT007-5/split_1_0.webp" },
      { id: "GPT007-5-6", img: "./images/GPT007-5/split_1_1.webp" },
      { id: "GPT007-5-7", img: "./images/GPT007-5/split_1_2.webp" },
      { id: "GPT007-5-8", img: "./images/GPT007-5/split_1_3.webp" },
      { id: "GPT007-5-9", img: "./images/GPT007-5/split_2_0.webp" },
      { id: "GPT007-5-A", img: "./images/GPT007-5/split_2_1.webp" },
      { id: "GPT007-5-B", img: "./images/GPT007-5/split_2_2.webp" },
      { id: "GPT007-5-C", img: "./images/GPT007-5/split_2_3.webp" },
    ],
  },
  {
    id: 14,
    name: "個人Q版",
    description: "仿仿貓爪抓-大字好好抓-2",
    category: "大字系列",
    stickers: [
      { id: "GPT007-6-1", img: "./images/GPT007-6/split_0_0.webp" },
      { id: "GPT007-6-2", img: "./images/GPT007-6/split_0_1.webp" },
      { id: "GPT007-6-3", img: "./images/GPT007-6/split_0_2.webp" },
      { id: "GPT007-6-4", img: "./images/GPT007-6/split_0_3.webp" },
      { id: "GPT007-6-5", img: "./images/GPT007-6/split_1_0.webp" },
      { id: "GPT007-6-6", img: "./images/GPT007-6/split_1_1.webp" },
      { id: "GPT007-6-7", img: "./images/GPT007-6/split_1_2.webp" },
      { id: "GPT007-6-8", img: "./images/GPT007-6/split_1_3.webp" },
      { id: "GPT007-6-9", img: "./images/GPT007-6/split_2_0.webp" },
      { id: "GPT007-6-A", img: "./images/GPT007-6/split_2_1.webp" },
      { id: "GPT007-6-B", img: "./images/GPT007-6/split_2_2.webp" },
      { id: "GPT007-6-C", img: "./images/GPT007-6/split_2_3.webp" },
    ],
  },
  {
    id: 15,
    name: "個人Q版",
    description: "退休我還在~1",
    category: "退休系列",
    stickers: [
      { id: "B01-1", img: "./images/B01/A01-我還在.webp" },
      { id: "B01-2", img: "./images/B01/A02-人在江湖偶爾上線.webp" },
      { id: "B01-3", img: "./images/B01/A03-想您們LINE一下報平安.webp" },
      { id: "B01-4", img: "./images/B01/A04-想您們LINE一下報平安.webp" },
      { id: "B01-5", img: "./images/B01/A05-我過的好好的.webp" },
      { id: "B01-6", img: "./images/B01/A06-雖然退休但還沒有退場.webp" },
      { id: "B01-7", img: "./images/B01/A07-雖然退休但還沒有退場.webp" },
      { id: "B01-8", img: "./images/B01/A08-忙完一回神好久沒聯絡.webp" },
      { id: "B01-9", img: "./images/B01/A09-退休了還是想你們.webp" },
      { id: "B01-A", img: "./images/B01/A10-我在享受人生也祝你順利.webp" },
      { id: "B01-B", img: "./images/B01/A11-我在享受人生也祝你順利.webp" },
      { id: "B01-C", img: "./images/B01/A12.webp" },
      { id: "B01-D", img: "./images/B01/A13.webp" },
      { id: "B01-E", img: "./images/B01/A14.webp" },
      { id: "B01-F", img: "./images/B01/A15.webp" },
      { id: "B01-G", img: "./images/B01/A16.webp" },
    ],
  },
  {
    id: 16,
    name: "個人Q版",
    description: "新年慶祝-有墨鏡-帥度破表",
    category: "年節系列",
    stickers: [
      { id: "B03-1", img: "./images/B03/B01-01.webp" },
      { id: "B03-2", img: "./images/B03/B01-02.webp" },
      { id: "B03-3", img: "./images/B03/B01-03.webp" },
      { id: "B03-4", img: "./images/B03/B01-04.webp" },
      { id: "B03-5", img: "./images/B03/B01-05.webp" },
      { id: "B03-6", img: "./images/B03/B01-06.webp" },
      { id: "B03-7", img: "./images/B03/B01-07.webp" },
      { id: "B03-8", img: "./images/B03/B01-08.webp" },
      { id: "B03-9", img: "./images/B03/B01-09.webp" },
      { id: "B03-A", img: "./images/B03/B01-10.webp" },
      { id: "B03-B", img: "./images/B03/B01-11.webp" },
      { id: "B03-C", img: "./images/B03/B01-12.webp" },
      { id: "B03-D", img: "./images/B03/B01-13.webp" },
      { id: "B03-E", img: "./images/B03/B01-14.webp" },
      { id: "B03-F", img: "./images/B03/B01-15.webp" },
      { id: "B03-G", img: "./images/B03/B01-16.webp" },
    ],
  },
  {
    id: 17,
    name: "個人Q版",
    description: "新年慶祝-沒有墨鏡",
    category: "年節系列",
    stickers: [
      { id: "B04-1", img: "./images/B04/B02-01 (1).jpg" },
      { id: "B04-2", img: "./images/B04/B02-01 (2).jpg" },
      { id: "B04-3", img: "./images/B04/B02-01 (3).jpg" },
      { id: "B04-4", img: "./images/B04/B02-01 (4).jpg" },
      { id: "B04-5", img: "./images/B04/B02-01 (5).jpg" },
      { id: "B04-6", img: "./images/B04/B02-01 (6).jpg" },
      { id: "B04-7", img: "./images/B04/B02-01 (7).jpg" },
      { id: "B04-8", img: "./images/B04/B02-01 (8).jpg" },
      { id: "B04-9", img: "./images/B04/B02-01 (9).jpg" },
      { id: "B04-A", img: "./images/B04/B02-01 (10).jpg" },
      { id: "B04-B", img: "./images/B04/B02-01 (11).jpg" },
      { id: "B04-C", img: "./images/B04/B02-01 (12).jpg" },
      { id: "B04-D", img: "./images/B04/B02-01 (13).jpg" },
      { id: "B04-E", img: "./images/B04/B02-01 (14).jpg" },
      { id: "B04-F", img: "./images/B04/B02-01 (15).jpg" },
      { id: "B04-G", img: "./images/B04/B02-01 (16).jpg" },
    ],
  },
  {
    id: 18,
    name: "個人Q版",
    description: "退休-悠閒自在篇",
    category: "退休系列",
    stickers: [
      { id: "B05-1", img: "./images/B05/B03- (1).webp" },
      { id: "B05-2", img: "./images/B05/B03- (2).webp" },
      { id: "B05-3", img: "./images/B05/B03- (3).webp" },
      { id: "B05-4", img: "./images/B05/B03- (4).webp" },
      { id: "B05-5", img: "./images/B05/B03- (5).webp" },
      { id: "B05-6", img: "./images/B05/B03- (6).webp" },
      { id: "B05-7", img: "./images/B05/B03- (7).webp" },
      { id: "B05-8", img: "./images/B05/B03- (8).webp" },
      { id: "B05-9", img: "./images/B05/B03- (9).webp" },
      { id: "B05-A", img: "./images/B05/B03- (10).webp" },
      { id: "B05-B", img: "./images/B05/B03- (11).webp" },
      { id: "B05-C", img: "./images/B05/B03- (12).webp" },
      { id: "B05-D", img: "./images/B05/B03- (13).webp" },
      { id: "B05-E", img: "./images/B05/B03- (14).webp" },
      { id: "B05-F", img: "./images/B05/B03- (15).webp" },
      { id: "B05-G", img: "./images/B05/B03- (16).webp" },
    ],
  },
  {
    id: 19,
    name: "個人Q版",
    description: "認真學習和做家事篇",
    category: "家事系列",
    stickers: [
      { id: "B06-1", img: "./images/B06/B04- (1).webp" },
      { id: "B06-2", img: "./images/B06/B04- (2).webp" },
      { id: "B06-3", img: "./images/B06/B04- (3).webp" },
      { id: "B06-4", img: "./images/B06/B04- (4).webp" },
      { id: "B06-5", img: "./images/B06/B04- (5).webp" },
      { id: "B06-6", img: "./images/B06/B04- (6).webp" },
      { id: "B06-7", img: "./images/B06/B04- (7).webp" },
      { id: "B06-8", img: "./images/B06/B04- (8).webp" },
      { id: "B06-9", img: "./images/B06/B04- (9).webp" },
      { id: "B06-A", img: "./images/B06/B04- (10).webp" },
      { id: "B06-B", img: "./images/B06/B04- (11).webp" },
      { id: "B06-C", img: "./images/B06/B04- (12).webp" },
      { id: "B06-D", img: "./images/B06/B04- (13).webp" },
      { id: "B06-E", img: "./images/B06/B04- (14).webp" },
      { id: "B06-F", img: "./images/B06/B04- (15).webp" },
      { id: "B06-G", img: "./images/B06/B04- (16).webp" },
    ],
  },
  {
    id: 20,
    name: "個人Q版",
    description: "日本旅遊篇",
    category: "旅遊系列",
    stickers: [
      { id: "B07-1", img: "./images/B07/B05- (1).webp" },
      { id: "B07-2", img: "./images/B07/B05- (2).webp" },
      { id: "B07-3", img: "./images/B07/B05- (3).webp" },
      { id: "B07-4", img: "./images/B07/B05- (4).webp" },
      { id: "B07-5", img: "./images/B07/B05- (5).webp" },
      { id: "B07-6", img: "./images/B07/B05- (6).webp" },
      { id: "B07-7", img: "./images/B07/B05- (7).webp" },
      { id: "B07-8", img: "./images/B07/B05- (8).webp" },
      { id: "B07-9", img: "./images/B07/B05- (9).webp" },
      { id: "B07-A", img: "./images/B07/B05- (10).webp" },
      { id: "B07-B", img: "./images/B07/B05- (11).webp" },
      { id: "B07-C", img: "./images/B07/B05- (12).webp" },
      { id: "B07-D", img: "./images/B07/B05- (13).webp" },
      { id: "B07-E", img: "./images/B07/B05- (14).webp" },
      { id: "B07-F", img: "./images/B07/B05- (15).webp" },
      { id: "B07-G", img: "./images/B07/B05- (16).webp" },
    ],
  },
  {
    id: 21,
    name: "個人Q版",
    description: "健身系列",
    category: "運動系列",
    stickers: [
      { id: "B08-1", img: "./images/B08/B08- (1).webp" },
      { id: "B08-2", img: "./images/B08/B08- (2).webp" },
      { id: "B08-3", img: "./images/B08/B08- (3).webp" },
      { id: "B08-4", img: "./images/B08/B08- (4).webp" },
      { id: "B08-5", img: "./images/B08/B08- (5).webp" },
      { id: "B08-6", img: "./images/B08/B08- (6).webp" },
      { id: "B08-7", img: "./images/B08/B08- (7).webp" },
      { id: "B08-8", img: "./images/B08/B08- (8).webp" },
      { id: "B08-9", img: "./images/B08/B08- (9).webp" },
      { id: "B08-A", img: "./images/B08/B08- (10).webp" },
      { id: "B08-B", img: "./images/B08/B08- (11).webp" },
      { id: "B08-C", img: "./images/B08/B08- (12).webp" },
      { id: "B08-D", img: "./images/B08/B08- (13).webp" },
      { id: "B08-E", img: "./images/B08/B08- (14).webp" },
      { id: "B08-F", img: "./images/B08/B08- (15).webp" },
      { id: "B08-G", img: "./images/B08/B08- (16).webp" },
    ],
  },
  {
    id: 22,
    name: "個人Q版",
    description: "農曆買馬年系列",
    category: "年節系列",
    stickers: [
      { id: "B09-1", img: "./images/B09/B09- (1).webp" },
      { id: "B09-2", img: "./images/B09/B09- (2).webp" },
      { id: "B09-3", img: "./images/B09/B09- (3).webp" },
      { id: "B09-4", img: "./images/B09/B09- (4).webp" },
      { id: "B09-5", img: "./images/B09/B09- (5).webp" },
      { id: "B09-6", img: "./images/B09/B09- (6).webp" },
      { id: "B09-7", img: "./images/B09/B09- (7).webp" },
      { id: "B09-8", img: "./images/B09/B09- (8).webp" },
      { id: "B09-9", img: "./images/B09/B09- (9).webp" },
      { id: "B09-A", img: "./images/B09/B09- (10).webp" },
      { id: "B09-B", img: "./images/B09/B09- (11).webp" },
      { id: "B09-C", img: "./images/B09/B09- (12).webp" },
      { id: "B09-D", img: "./images/B09/B09- (13).webp" },
      { id: "B09-E", img: "./images/B09/B09- (14).webp" },
      { id: "B09-F", img: "./images/B09/B09- (15).webp" },
      { id: "B09-G", img: "./images/B09/B09- (16).webp" },
    ],
  },
  {
    id: 23,
    name: "個人Q版",
    description: "好市多購物篇",
    category: "生活系列",
    stickers: [
      { id: "B10-1", img: "./images/B10/L01-10_1_512x512.webp" },
      { id: "B10-2", img: "./images/B10/L01-10_2_512x512.webp" },
      { id: "B10-3", img: "./images/B10/L01-10_3_512x512.webp" },
      { id: "B10-4", img: "./images/B10/L01-10_4_512x512.webp" },
      { id: "B10-5", img: "./images/B10/L01-10_5_512x512.webp" },
      { id: "B10-6", img: "./images/B10/L01-10_6_512x512.webp" },
      { id: "B10-7", img: "./images/B10/L01-10_7_512x512.webp" },
      { id: "B10-8", img: "./images/B10/L01-10_8_512x512.webp" },
      { id: "B10-9", img: "./images/B10/L01-10_9_512x512.webp" },
      { id: "B10-A", img: "./images/B10/L01-10_10_512x512.webp" },
      { id: "B10-B", img: "./images/B10/L01-10_11_512x512.webp" },
      { id: "B10-C", img: "./images/B10/L01-10_12_512x512.webp" },
      { id: "B10-D", img: "./images/B10/L01-10_13_512x512.webp" },
      { id: "B10-E", img: "./images/B10/L01-10_14_512x512.webp" },
      { id: "B10-F", img: "./images/B10/L01-10_15_512x512.webp" },
      { id: "B10-G", img: "./images/B10/L01-10_16_512x512.webp" },
    ],
  },
  {
    id: 24,
    name: "個人Q版",
    description: "退休悲慘系列",
    category: "退休系列",
    stickers: [
      { id: "B11-1", img: "./images/B11/B11- (1).webp" },
      { id: "B11-2", img: "./images/B11/B11- (2).webp" },
      { id: "B11-3", img: "./images/B11/B11- (3).webp" },
      { id: "B11-4", img: "./images/B11/B11- (4).webp" },
      { id: "B11-5", img: "./images/B11/B11- (5).webp" },
      { id: "B11-6", img: "./images/B11/B11- (6).webp" },
      { id: "B11-7", img: "./images/B11/B11- (7).webp" },
      { id: "B11-8", img: "./images/B11/B11- (8).webp" },
      { id: "B11-9", img: "./images/B11/B11- (9).webp" },
      { id: "B11-A", img: "./images/B11/B11- (10).webp" },
      { id: "B11-B", img: "./images/B11/B11- (11).webp" },
      { id: "B11-C", img: "./images/B11/B11- (12).webp" },
      { id: "B11-D", img: "./images/B11/B11- (13).webp" },
      { id: "B11-E", img: "./images/B11/B11- (14).webp" },
      { id: "B11-F", img: "./images/B11/B11- (15).webp" },
      { id: "B11-G", img: "./images/B11/B11- (16).webp" },
    ],
  },
  {
    id: 25,
    name: "個人Q版",
    description: "早安問候系列",
    category: "早安系列",
    stickers: [
      { id: "B12-1", img: "./images/B12/L01-12_1_512x512.webp" },
      { id: "B12-2", img: "./images/B12/L01-12_2_512x512.webp" },
      { id: "B12-3", img: "./images/B12/L01-12_3_512x512.webp" },
      { id: "B12-4", img: "./images/B12/L01-12_4_512x512.webp" },
      { id: "B12-5", img: "./images/B12/L01-12_5_512x512.webp" },
      { id: "B12-6", img: "./images/B12/L01-12_6_512x512.webp" },
      { id: "B12-7", img: "./images/B12/L01-12_7_512x512.webp" },
      { id: "B12-8", img: "./images/B12/L01-12_8_512x512.webp" },
      { id: "B12-9", img: "./images/B12/L01-12_9_512x512.webp" },
      { id: "B12-A", img: "./images/B12/L01-12_10_512x512.webp" },
      { id: "B12-B", img: "./images/B12/L01-12_11_512x512.webp" },
      { id: "B12-C", img: "./images/B12/L01-12_12_512x512.webp" },
      { id: "B12-D", img: "./images/B12/L01-12_13_512x512.webp" },
      { id: "B12-E", img: "./images/B12/L01-12_14_512x512.webp" },
      { id: "B12-F", img: "./images/B12/L01-12_15_512x512.webp" },
      { id: "B12-G", img: "./images/B12/L01-12_16_512x512.webp" },
    ],
  },
  {
    id: 26,
    name: "個人Q版",
    description: "北投風景系列",
    category: "旅遊系列",
    stickers: [
      { id: "B13-1", img: "./images/B13/L01-13_1_512x512.webp" },
      { id: "B13-2", img: "./images/B13/L01-13_2_512x512.webp" },
      { id: "B13-3", img: "./images/B13/L01-13_3_512x512.webp" },
      { id: "B13-4", img: "./images/B13/L01-13_4_512x512.webp" },
      { id: "B13-5", img: "./images/B13/L01-13_5_512x512.webp" },
      { id: "B13-6", img: "./images/B13/L01-13_6_512x512.webp" },
      { id: "B13-7", img: "./images/B13/L01-13_7_512x512.webp" },
      { id: "B13-8", img: "./images/B13/L01-13_8_512x512.webp" },
      { id: "B13-9", img: "./images/B13/L01-13_9_512x512.webp" },
      { id: "B13-A", img: "./images/B13/L01-13_10_512x512.webp" },
      { id: "B13-B", img: "./images/B13/L01-13_11_512x512.webp" },
      { id: "B13-C", img: "./images/B13/L01-13_12_512x512.webp" },
      { id: "B13-D", img: "./images/B13/L01-13_13_512x512.webp" },
      { id: "B13-E", img: "./images/B13/L01-13_14_512x512.webp" },
      { id: "B13-F", img: "./images/B13/L01-13_15_512x512.webp" },
      { id: "B13-G", img: "./images/B13/L01-13_16_512x512.webp" },
    ],
  },
  {
    id: 27,
    name: "個人Q版",
    description: "上海風景系列",
    category: "旅遊系列",
    stickers: [
      { id: "B14-1", img: "./images/B14/L01-14_1_512x512.webp" },
      { id: "B14-2", img: "./images/B14/L01-14_2_512x512.webp" },
      { id: "B14-3", img: "./images/B14/L01-14_3_512x512.webp" },
      { id: "B14-4", img: "./images/B14/L01-14_4_512x512.webp" },
      { id: "B14-5", img: "./images/B14/L01-14_5_512x512.webp" },
      { id: "B14-6", img: "./images/B14/L01-14_6_512x512.webp" },
      { id: "B14-7", img: "./images/B14/L01-14_7_512x512.webp" },
      { id: "B14-8", img: "./images/B14/L01-14_8_512x512.webp" },
      { id: "B14-9", img: "./images/B14/L01-14_9_512x512.webp" },
      { id: "B14-A", img: "./images/B14/L01-14_10_512x512.webp" },
      { id: "B14-B", img: "./images/B14/L01-14_11_512x512.webp" },
      { id: "B14-C", img: "./images/B14/L01-14_12_512x512.webp" },
      { id: "B14-D", img: "./images/B14/L01-14_13_512x512.webp" },
      { id: "B14-E", img: "./images/B14/L01-14_14_512x512.webp" },
      { id: "B14-F", img: "./images/B14/L01-14_15_512x512.webp" },
      { id: "B14-G", img: "./images/B14/L01-14_16_512x512.webp" },
    ],
  },
  {
    id: 28,
    name: "個人Q版",
    description: "鼓勵他人篇",
    category: "勵志系列",
    stickers: [
      { id: "B15-1", img: "./images/B15/L01-15_1_512x512.webp" },
      { id: "B15-2", img: "./images/B15/L01-15_2_512x512.webp" },
      { id: "B15-3", img: "./images/B15/L01-15_3_512x512.webp" },
      { id: "B15-4", img: "./images/B15/L01-15_4_512x512.webp" },
      { id: "B15-5", img: "./images/B15/L01-15_5_512x512.webp" },
      { id: "B15-6", img: "./images/B15/L01-15_6_512x512.webp" },
      { id: "B15-7", img: "./images/B15/L01-15_7_512x512.webp" },
      { id: "B15-8", img: "./images/B15/L01-15_8_512x512.webp" },
      { id: "B15-9", img: "./images/B15/L01-15_9_512x512.webp" },
      { id: "B15-A", img: "./images/B15/L01-15_10_512x512.webp" },
      { id: "B15-B", img: "./images/B15/L01-15_11_512x512.webp" },
      { id: "B15-C", img: "./images/B15/L01-15_12_512x512.webp" },
      { id: "B15-D", img: "./images/B15/L01-15_13_512x512.webp" },
      { id: "B15-E", img: "./images/B15/L01-15_14_512x512.webp" },
      { id: "B15-F", img: "./images/B15/L01-15_15_512x512.webp" },
      { id: "B15-G", img: "./images/B15/L01-15_16_512x512.webp" },
    ],
  },
  {
    id: 29,
    name: "個人Q版",
    description: "浮誇系列篇",
    category: "浮誇系列",
    stickers: [
      { id: "B16-1", img: "./images/B16/L01-16_1_512x512.webp" },
      { id: "B16-2", img: "./images/B16/L01-16_2_512x512.webp" },
      { id: "B16-3", img: "./images/B16/L01-16_3_512x512.webp" },
      { id: "B16-4", img: "./images/B16/L01-16_4_512x512.webp" },
      { id: "B16-5", img: "./images/B16/L01-16_5_512x512.webp" },
      { id: "B16-6", img: "./images/B16/L01-16_6_512x512.webp" },
      { id: "B16-7", img: "./images/B16/L01-16_7_512x512.webp" },
      { id: "B16-8", img: "./images/B16/L01-16_8_512x512.webp" },
      { id: "B16-9", img: "./images/B16/L01-16_9_512x512.webp" },
      { id: "B16-A", img: "./images/B16/L01-16_10_512x512.webp" },
      { id: "B16-B", img: "./images/B16/L01-16_11_512x512.webp" },
      { id: "B16-C", img: "./images/B16/L01-16_12_512x512.webp" },
      { id: "B16-D", img: "./images/B16/L01-16_13_512x512.webp" },
      { id: "B16-E", img: "./images/B16/L01-16_14_512x512.webp" },
      { id: "B16-F", img: "./images/B16/L01-16_15_512x512.webp" },
      { id: "B16-G", img: "./images/B16/L01-16_16_512x512.webp" },
    ],
  },
  {
    id: 30,
    name: "個人Q版",
    description: "料理達人篇",
    category: "生活系列",
    stickers: [
      { id: "B17-1", img: "./images/B17/L01-17_1_512x512.webp" },
      { id: "B17-2", img: "./images/B17/L01-17_2_512x512.webp" },
      { id: "B17-3", img: "./images/B17/L01-17_3_512x512.webp" },
      { id: "B17-4", img: "./images/B17/L01-17_4_512x512.webp" },
      { id: "B17-5", img: "./images/B17/L01-17_5_512x512.webp" },
      { id: "B17-6", img: "./images/B17/L01-17_6_512x512.webp" },
      { id: "B17-7", img: "./images/B17/L01-17_7_512x512.webp" },
      { id: "B17-8", img: "./images/B17/L01-17_8_512x512.webp" },
      { id: "B17-9", img: "./images/B17/L01-17_9_512x512.webp" },
      { id: "B17-A", img: "./images/B17/L01-17_10_512x512.webp" },
      { id: "B17-B", img: "./images/B17/L01-17_11_512x512.webp" },
      { id: "B17-C", img: "./images/B17/L01-17_12_512x512.webp" },
      { id: "B17-D", img: "./images/B17/L01-17_13_512x512.webp" },
      { id: "B17-E", img: "./images/B17/L01-17_14_512x512.webp" },
      { id: "B17-F", img: "./images/B17/L01-17_15_512x512.webp" },
      { id: "B17-G", img: "./images/B17/L01-17_16_512x512.webp" },
    ],
  },
  {
    id: 31,
    name: "個人Q版",
    description: "石牌整理篇",
    category: "生活系列",
    stickers: [
      { id: "B18-1", img: "./images/B18/L01-18_1_512x512.webp" },
      { id: "B18-2", img: "./images/B18/L01-18_2_512x512.webp" },
      { id: "B18-3", img: "./images/B18/L01-18_3_512x512.webp" },
      { id: "B18-4", img: "./images/B18/L01-18_4_512x512.webp" },
      { id: "B18-5", img: "./images/B18/L01-18_5_512x512.webp" },
      { id: "B18-6", img: "./images/B18/L01-18_6_512x512.webp" },
      { id: "B18-7", img: "./images/B18/L01-18_7_512x512.webp" },
      { id: "B18-8", img: "./images/B18/L01-18_8_512x512.webp" },
      { id: "B18-9", img: "./images/B18/L01-18_9_512x512.webp" },
      { id: "B18-A", img: "./images/B18/L01-18_10_512x512.webp" },
      { id: "B18-B", img: "./images/B18/L01-18_11_512x512.webp" },
      { id: "B18-C", img: "./images/B18/L01-18_12_512x512.webp" },
      { id: "B18-D", img: "./images/B18/L01-18_13_512x512.webp" },
      { id: "B18-E", img: "./images/B18/L01-18_14_512x512.webp" },
      { id: "B18-F", img: "./images/B18/L01-18_15_512x512.webp" },
      { id: "B18-G", img: "./images/B18/L01-18_16_512x512.webp" },
    ],
  },
  {
    id: 32,
    name: "個人Q版",
    description: "發財想錢數鈔票系列",
    category: "生活系列",
    stickers: [
      { id: "B19-1", img: "./images/B19/L01-19_1_512x512.webp" },
      { id: "B19-2", img: "./images/B19/L01-19_2_512x512.webp" },
      { id: "B19-3", img: "./images/B19/L01-19_3_512x512.webp" },
      { id: "B19-4", img: "./images/B19/L01-19_4_512x512.webp" },
      { id: "B19-5", img: "./images/B19/L01-19_5_512x512.webp" },
      { id: "B19-6", img: "./images/B19/L01-19_6_512x512.webp" },
      { id: "B19-7", img: "./images/B19/L01-19_7_512x512.webp" },
      { id: "B19-8", img: "./images/B19/L01-19_8_512x512.webp" },
      { id: "B19-9", img: "./images/B19/L01-19_9_512x512.webp" },
      { id: "B19-A", img: "./images/B19/L01-19_10_512x512.webp" },
      { id: "B19-B", img: "./images/B19/L01-19_11_512x512.webp" },
      { id: "B19-C", img: "./images/B19/L01-19_12_512x512.webp" },
      { id: "B19-D", img: "./images/B19/L01-19_13_512x512.webp" },
      { id: "B19-E", img: "./images/B19/L01-19_14_512x512.webp" },
      { id: "B19-F", img: "./images/B19/L01-19_15_512x512.webp" },
      { id: "B19-G", img: "./images/B19/L01-19_16_512x512.webp" },
    ],
  },
  {
    id: 33,
    name: "個人Q版",
    description: "愛理不理系列",
    category: "浮誇系列",
    stickers: [
      { id: "B20-1", img: "./images/B20/L01-20_1_512x512.webp" },
      { id: "B20-2", img: "./images/B20/L01-20_2_512x512.webp" },
      { id: "B20-3", img: "./images/B20/L01-20_3_512x512.webp" },
      { id: "B20-4", img: "./images/B20/L01-20_4_512x512.webp" },
      { id: "B20-5", img: "./images/B20/L01-20_5_512x512.webp" },
      { id: "B20-6", img: "./images/B20/L01-20_6_512x512.webp" },
      { id: "B20-7", img: "./images/B20/L01-20_7_512x512.webp" },
      { id: "B20-8", img: "./images/B20/L01-20_8_512x512.webp" },
      { id: "B20-9", img: "./images/B20/L01-20_9_512x512.webp" },
      { id: "B20-A", img: "./images/B20/L01-20_10_512x512.webp" },
      { id: "B20-B", img: "./images/B20/L01-20_11_512x512.webp" },
      { id: "B20-C", img: "./images/B20/L01-20_12_512x512.webp" },
      { id: "B20-D", img: "./images/B20/L01-20_13_512x512.webp" },
      { id: "B20-E", img: "./images/B20/L01-20_14_512x512.webp" },
      { id: "B20-F", img: "./images/B20/L01-20_15_512x512.webp" },
      { id: "B20-G", img: "./images/B20/L01-20_16_512x512.webp" },
    ],
  },
  {
    id: 34,
    name: "個人Q版",
    description: "生平無大志系列",
    category: "浮誇系列",
    stickers: [
      { id: "B21-1", img: "./images/B21/L01-21_1_512x512.webp" },
      { id: "B21-2", img: "./images/B21/L01-21_2_512x512.webp" },
      { id: "B21-3", img: "./images/B21/L01-21_3_512x512.webp" },
      { id: "B21-4", img: "./images/B21/L01-21_4_512x512.webp" },
      { id: "B21-5", img: "./images/B21/L01-21_5_512x512.webp" },
      { id: "B21-6", img: "./images/B21/L01-21_6_512x512.webp" },
      { id: "B21-7", img: "./images/B21/L01-21_7_512x512.webp" },
      { id: "B21-8", img: "./images/B21/L01-21_8_512x512.webp" },
      { id: "B21-9", img: "./images/B21/L01-21_9_512x512.webp" },
      { id: "B21-A", img: "./images/B21/L01-21_10_512x512.webp" },
      { id: "B21-B", img: "./images/B21/L01-21_11_512x512.webp" },
      { id: "B21-C", img: "./images/B21/L01-21_12_512x512.webp" },
      { id: "B21-D", img: "./images/B21/L01-21_13_512x512.webp" },
      { id: "B21-E", img: "./images/B21/L01-21_14_512x512.webp" },
      { id: "B21-F", img: "./images/B21/L01-21_15_512x512.webp" },
      { id: "B21-G", img: "./images/B21/L01-21_16_512x512.webp" },
    ],
  },
  {
    id: 35,
    name: "個人Q版",
    description: "名車系列",
    category: "浮誇系列",
    stickers: [
      { id: "B22-1", img: "./images/B22/L01-22_1_512x512.webp" },
      { id: "B22-2", img: "./images/B22/L01-22_2_512x512.webp" },
      { id: "B22-3", img: "./images/B22/L01-22_3_512x512.webp" },
      { id: "B22-4", img: "./images/B22/L01-22_4_512x512.webp" },
      { id: "B22-5", img: "./images/B22/L01-22_5_512x512.webp" },
      { id: "B22-6", img: "./images/B22/L01-22_6_512x512.webp" },
      { id: "B22-7", img: "./images/B22/L01-22_7_512x512.webp" },
      { id: "B22-8", img: "./images/B22/L01-22_8_512x512.webp" },
      { id: "B22-9", img: "./images/B22/L01-22_9_512x512.webp" },
      { id: "B22-A", img: "./images/B22/L01-22_10_512x512.webp" },
      { id: "B22-B", img: "./images/B22/L01-22_11_512x512.webp" },
      { id: "B22-C", img: "./images/B22/L01-22_12_512x512.webp" },
      { id: "B22-D", img: "./images/B22/L01-22_13_512x512.webp" },
      { id: "B22-E", img: "./images/B22/L01-22_14_512x512.webp" },
      { id: "B22-F", img: "./images/B22/L01-22_15_512x512.webp" },
      { id: "B22-G", img: "./images/B22/L01-22_16_512x512.webp" },
    ],
  },
  {
    id: 36,
    name: "個人Q版",
    description: "準備好了系列-軍裝",
    category: "準備好了系列",
    stickers: [
      { id: "B23-1", img: "./images/B23/L01-23_1_448x600.webp" },
      { id: "B23-2", img: "./images/B23/L01-23_2_448x600.webp" },
      { id: "B23-3", img: "./images/B23/L01-23_3_448x600.webp" },
      { id: "B23-4", img: "./images/B23/L01-23_4_448x600.webp" },
      { id: "B23-5", img: "./images/B23/L01-23_5_448x600.webp" },
      { id: "B23-6", img: "./images/B23/L01-23_6_448x600.webp" },
      { id: "B23-7", img: "./images/B23/L01-23_7_448x600.webp" },
      { id: "B23-8", img: "./images/B23/L01-23_8_448x600.webp" },
      { id: "B23-9", img: "./images/B23/L01-23_9_448x600.webp" },
      { id: "B23-A", img: "./images/B23/L01-23_10_448x600.webp" },
      { id: "B23-B", img: "./images/B23/L01-23_11_448x600.webp" },
      { id: "B23-C", img: "./images/B23/L01-23_12_448x600.webp" },
      { id: "B23-D", img: "./images/B23/L01-23_13_448x600.webp" },
      { id: "B23-E", img: "./images/B23/L01-23_14_448x600.webp" },
      { id: "B23-F", img: "./images/B23/L01-23_15_448x600.webp" },
      { id: "B23-G", img: "./images/B23/L01-23_16_448x600.webp" },
    ],
  },
  {
    id: 37,
    name: "個人Q版",
    description: "準備好了系列-藍色工作服",
    category: "準備好了系列",
    stickers: [
      { id: "B24-1", img: "./images/B24/L01-24_1_512x512.webp" },
      { id: "B24-2", img: "./images/B24/L01-24_2_512x512.webp" },
      { id: "B24-3", img: "./images/B24/L01-24_3_512x512.webp" },
      { id: "B24-4", img: "./images/B24/L01-24_4_512x512.webp" },
      { id: "B24-5", img: "./images/B24/L01-24_5_512x512.webp" },
      { id: "B24-6", img: "./images/B24/L01-24_6_512x512.webp" },
      { id: "B24-7", img: "./images/B24/L01-24_7_512x512.webp" },
      { id: "B24-8", img: "./images/B24/L01-24_8_512x512.webp" },
      { id: "B24-9", img: "./images/B24/L01-24_9_512x512.webp" },
      { id: "B24-A", img: "./images/B24/L01-24_10_512x512.webp" },
      { id: "B24-B", img: "./images/B24/L01-24_11_512x512.webp" },
      { id: "B24-C", img: "./images/B24/L01-24_12_512x512.webp" },
      { id: "B24-D", img: "./images/B24/L01-24_13_512x512.webp" },
      { id: "B24-E", img: "./images/B24/L01-24_14_512x512.webp" },
      { id: "B24-F", img: "./images/B24/L01-24_15_512x512.webp" },
      { id: "B24-G", img: "./images/B24/L01-24_16_512x512.webp" },
    ],
  },
  {
    id: 38,
    name: "個人Q版",
    description: "老婆最棒系列",
    category: "老婆系列",
    stickers: [
      { id: "B25-1", img: "./images/B25/L01-25_1_512x512.webp" },
      { id: "B25-2", img: "./images/B25/L01-25_2_512x512.webp" },
      { id: "B25-3", img: "./images/B25/L01-25_3_512x512.webp" },
      { id: "B25-4", img: "./images/B25/L01-25_4_512x512.webp" },
      { id: "B25-5", img: "./images/B25/L01-25_5_512x512.webp" },
      { id: "B25-6", img: "./images/B25/L01-25_6_512x512.webp" },
      { id: "B25-7", img: "./images/B25/L01-25_7_512x512.webp" },
      { id: "B25-8", img: "./images/B25/L01-25_8_512x512.webp" },
      { id: "B25-9", img: "./images/B25/L01-25_9_512x512.webp" },
      { id: "B25-A", img: "./images/B25/L01-25_10_512x512.webp" },
      { id: "B25-B", img: "./images/B25/L01-25_11_512x512.webp" },
      { id: "B25-C", img: "./images/B25/L01-25_12_512x512.webp" },
      { id: "B25-D", img: "./images/B25/L01-25_13_512x512.webp" },
      { id: "B25-E", img: "./images/B25/L01-25_14_512x512.webp" },
      { id: "B25-F", img: "./images/B25/L01-25_15_512x512.webp" },
      { id: "B25-G", img: "./images/B25/L01-25_16_512x512.webp" },
    ],
  },
  {
    id: 39,
    name: "個人Q版",
    description: "全力以赴",
    category: "全力以赴系列",
    stickers: [
      { id: "B26-1", img: "./images/B26/L01-26_1_440x608.webp" },
      { id: "B26-2", img: "./images/B26/L01-26_2_440x608.webp" },
      { id: "B26-3", img: "./images/B26/L01-26_3_440x608.webp" },
      { id: "B26-4", img: "./images/B26/L01-26_4_440x608.webp" },
      { id: "B26-5", img: "./images/B26/L01-26_5_440x608.webp" },
      { id: "B26-6", img: "./images/B26/L01-26_6_440x608.webp" },
      { id: "B26-7", img: "./images/B26/L01-26_7_440x608.webp" },
      { id: "B26-8", img: "./images/B26/L01-26_8_440x608.webp" },
      { id: "B26-9", img: "./images/B26/L01-26_9_440x608.webp" },
      { id: "B26-A", img: "./images/B26/L01-26_10_440x608.webp" },
      { id: "B26-B", img: "./images/B26/L01-26_11_440x608.webp" },
      { id: "B26-C", img: "./images/B26/L01-26_12_440x608.webp" },
      { id: "B26-D", img: "./images/B26/L01-26_13_440x608.webp" },
      { id: "B26-E", img: "./images/B26/L01-26_14_440x608.webp" },
      { id: "B26-F", img: "./images/B26/L01-26_15_440x608.webp" },
      { id: "B26-G", img: "./images/B26/L01-26_16_440x608.webp" },
    ],
  },
  {
    id: 40,
    name: "個人Q版",
    description: "老婆兒子工作工作我認真在家做後盾-1",
    category: "認真系列",
    stickers: [
      { id: "B27-1", img: "./images/B27/L01-27_1_512x512.webp" },
      { id: "B27-2", img: "./images/B27/L01-27_2_512x512.webp" },
      { id: "B27-3", img: "./images/B27/L01-27_3_512x512.webp" },
      { id: "B27-4", img: "./images/B27/L01-27_4_512x512.webp" },
      { id: "B27-5", img: "./images/B27/L01-27_5_512x512.webp" },
      { id: "B27-6", img: "./images/B27/L01-27_6_512x512.webp" },
      { id: "B27-7", img: "./images/B27/L01-27_7_512x512.webp" },
      { id: "B27-8", img: "./images/B27/L01-27_8_512x512.webp" },
      { id: "B27-9", img: "./images/B27/L01-27_9_512x512.webp" },
      { id: "B27-A", img: "./images/B27/L01-27_10_512x512.webp" },
      { id: "B27-B", img: "./images/B27/L01-27_11_512x512.webp" },
      { id: "B27-C", img: "./images/B27/L01-27_12_512x512.webp" },
      { id: "B27-D", img: "./images/B27/L01-27_13_512x512.webp" },
      { id: "B27-E", img: "./images/B27/L01-27_14_512x512.webp" },
      { id: "B27-F", img: "./images/B27/L01-27_15_512x512.webp" },
      { id: "B27-G", img: "./images/B27/L01-27_16_512x512.webp" },
    ],
  },
  {
    id: 41,
    name: "個人Q版",
    description: "老婆兒子工作工作我認真在家做後盾-2",
    category: "認真系列",
    stickers: [
      { id: "B28-1", img: "./images/B28/L01-28_1_512x512.webp" },
      { id: "B28-2", img: "./images/B28/L01-28_2_512x512.webp" },
      { id: "B28-3", img: "./images/B28/L01-28_3_512x512.webp" },
      { id: "B28-4", img: "./images/B28/L01-28_4_512x512.webp" },
      { id: "B28-5", img: "./images/B28/L01-28_5_512x512.webp" },
      { id: "B28-6", img: "./images/B28/L01-28_6_512x512.webp" },
      { id: "B28-7", img: "./images/B28/L01-28_7_512x512.webp" },
      { id: "B28-8", img: "./images/B28/L01-28_8_512x512.webp" },
      { id: "B28-9", img: "./images/B28/L01-28_9_512x512.webp" },
      { id: "B28-A", img: "./images/B28/L01-28_10_512x512.webp" },
      { id: "B28-B", img: "./images/B28/L01-28_11_512x512.webp" },
      { id: "B28-C", img: "./images/B28/L01-28_12_512x512.webp" },
      { id: "B28-D", img: "./images/B28/L01-28_13_512x512.webp" },
      { id: "B28-E", img: "./images/B28/L01-28_14_512x512.webp" },
      { id: "B28-F", img: "./images/B28/L01-28_15_512x512.webp" },
      { id: "B28-G", img: "./images/B28/L01-28_16_512x512.webp" },
    ],
  },
  {
    id: 42,
    name: "個人Q版",
    description: "下班接送篇",
    category: "生活系列",
    stickers: [
      { id: "B29-1", img: "./images/B29/L01-29_1_512x512.webp" },
      { id: "B29-2", img: "./images/B29/L01-29_2_512x512.webp" },
      { id: "B29-3", img: "./images/B29/L01-29_3_512x512.webp" },
      { id: "B29-4", img: "./images/B29/L01-29_4_512x512.webp" },
      { id: "B29-5", img: "./images/B29/L01-29_5_512x512.webp" },
      { id: "B29-6", img: "./images/B29/L01-29_6_512x512.webp" },
      { id: "B29-7", img: "./images/B29/L01-29_7_512x512.webp" },
      { id: "B29-8", img: "./images/B29/L01-29_8_512x512.webp" },
      { id: "B29-9", img: "./images/B29/L01-29_9_512x512.webp" },
      { id: "B29-A", img: "./images/B29/L01-29_10_512x512.webp" },
      { id: "B29-B", img: "./images/B29/L01-29_11_512x512.webp" },
      { id: "B29-C", img: "./images/B29/L01-29_12_512x512.webp" },
      { id: "B29-D", img: "./images/B29/L01-29_13_512x512.webp" },
      { id: "B29-E", img: "./images/B29/L01-29_14_512x512.webp" },
      { id: "B29-F", img: "./images/B29/L01-29_15_512x512.webp" },
      { id: "B29-G", img: "./images/B29/L01-29_16_512x512.webp" },
    ],
  },
  {
    id: 43,
    name: "個人Q版",
    description: "農曆馬年賀詞",
    category: "年節系列",
    stickers: [
      { id: "B30-1", img: "./images/B30/L01-30_1_256x256.webp" },
      { id: "B30-2", img: "./images/B30/L01-30_2_256x256.webp" },
      { id: "B30-3", img: "./images/B30/L01-30_3_256x256.webp" },
      { id: "B30-4", img: "./images/B30/L01-30_4_256x256.webp" },
      { id: "B30-5", img: "./images/B30/L01-30_5_256x256.webp" },
      { id: "B30-6", img: "./images/B30/L01-30_6_256x256.webp" },
      { id: "B30-7", img: "./images/B30/L01-30_7_256x256.webp" },
      { id: "B30-8", img: "./images/B30/L01-30_8_256x256.webp" },
      { id: "B30-9", img: "./images/B30/L01-30_9_256x256.webp" },
      { id: "B30-A", img: "./images/B30/L01-30_10_256x256.webp" },
      { id: "B30-B", img: "./images/B30/L01-30_11_256x256.webp" },
      { id: "B30-C", img: "./images/B30/L01-30_12_256x256.webp" },
      { id: "B30-D", img: "./images/B30/L01-30_13_256x256.webp" },
      { id: "B30-E", img: "./images/B30/L01-30_14_256x256.webp" },
      { id: "B30-F", img: "./images/B30/L01-30_15_256x256.webp" },
      { id: "B30-G", img: "./images/B30/L01-30_16_256x256.webp" },
    ],
  },
  {
    id: 44,
    name: "個人Q版",
    description: "過年大掃除系列-字體有點模糊",
    category: "年節系列",
    stickers: [
      { id: "B31-1", img: "./images/B31/L01-31_1_220x243.webp" },
      { id: "B31-2", img: "./images/B31/L01-31_2_220x243.webp" },
      { id: "B31-3", img: "./images/B31/L01-31_3_220x243.webp" },
      { id: "B31-4", img: "./images/B31/L01-31_4_220x243.webp" },
      { id: "B31-5", img: "./images/B31/L01-31_5_220x243.webp" },
      { id: "B31-6", img: "./images/B31/L01-31_6_220x243.webp" },
      { id: "B31-7", img: "./images/B31/L01-31_7_220x243.webp" },
      { id: "B31-8", img: "./images/B31/L01-31_8_220x243.webp" },
      { id: "B31-9", img: "./images/B31/L01-31_9_220x243.webp" },
      { id: "B31-A", img: "./images/B31/L01-31_10_220x243.webp" },
      { id: "B31-B", img: "./images/B31/L01-31_11_220x243.webp" },
      { id: "B31-C", img: "./images/B31/L01-31_12_220x243.webp" },
      { id: "B31-D", img: "./images/B31/L01-31_13_220x243.webp" },
      { id: "B31-E", img: "./images/B31/L01-31_14_220x243.webp" },
      { id: "B31-F", img: "./images/B31/L01-31_15_220x243.webp" },
      { id: "B31-G", img: "./images/B31/L01-31_16_220x243.webp" },
      { id: "B31-H", img: "./images/B31/L01-31_17_220x243.webp" },
      { id: "B31-I", img: "./images/B31/L01-31_18_220x243.webp" },
      { id: "B31-J", img: "./images/B31/L01-31_19_220x243.webp" },
      { id: "B31-K", img: "./images/B31/L01-31_20_220x243.webp" },
    ],
  },
  {
    id: 45,
    name: "個人Q版",
    description: "好市多購物篇",
    category: "生活系列",
    stickers: [
      { id: "B32-1", img: "./images/B32/split_0_0.webp" },
      { id: "B32-2", img: "./images/B32/split_0_1.webp" },
      { id: "B32-3", img: "./images/B32/split_0_2.webp" },
      { id: "B32-4", img: "./images/B32/split_0_3.webp" },
      { id: "B32-5", img: "./images/B32/split_1_0.webp" },
      { id: "B32-6", img: "./images/B32/split_1_1.webp" },
      { id: "B32-7", img: "./images/B32/split_1_2.webp" },
      { id: "B32-8", img: "./images/B32/split_1_3.webp" },
      { id: "B32-9", img: "./images/B32/split_2_0.webp" },
      { id: "B32-A", img: "./images/B32/split_2_1.webp" },
      { id: "B32-B", img: "./images/B32/split_2_2.webp" },
      { id: "B32-C", img: "./images/B32/split_2_3.webp" },
      { id: "B32-D", img: "./images/B32/split_3_0.webp" },
      { id: "B32-E", img: "./images/B32/split_3_1.webp" },
      { id: "B32-F", img: "./images/B32/split_3_2.webp" },
      { id: "B32-G", img: "./images/B32/split_3_3.webp" },
      { id: "B32-H", img: "./images/B32/split_4_0.webp" },
      { id: "B32-I", img: "./images/B32/split_4_1.webp" },
      { id: "B32-J", img: "./images/B32/split_4_2.webp" },
      { id: "B32-K", img: "./images/B32/split_4_3.webp" },
    ],
  },
  {
    id: 46,
    name: "個人Q版",
    description: "農曆春節馬年賀詞-有幾個不適用",
    category: "年節系列",
    stickers: [
      { id: "B33-1", img: "./images/B33/L01-33_1_256x256.webp" },
      { id: "B33-2", img: "./images/B33/L01-33_2_256x256.webp" },
      { id: "B33-3", img: "./images/B33/L01-33_3_256x256.webp" },
      { id: "B33-4", img: "./images/B33/L01-33_4_256x256.webp" },
      { id: "B33-5", img: "./images/B33/L01-33_5_256x256.webp" },
      { id: "B33-6", img: "./images/B33/L01-33_6_256x256.webp" },
      { id: "B33-7", img: "./images/B33/L01-33_7_256x256.webp" },
      { id: "B33-8", img: "./images/B33/L01-33_8_256x256.webp" },
      { id: "B33-9", img: "./images/B33/L01-33_9_256x256.webp" },
      { id: "B33-A", img: "./images/B33/L01-33_10_256x256.webp" },
      { id: "B33-B", img: "./images/B33/L01-33_11_256x256.webp" },
      { id: "B33-C", img: "./images/B33/L01-33_12_256x256.webp" },
      { id: "B33-D", img: "./images/B33/L01-33_13_256x256.webp" },
      { id: "B33-E", img: "./images/B33/L01-33_14_256x256.webp" },
      { id: "B33-F", img: "./images/B33/L01-33_15_256x256.webp" },
      { id: "B33-G", img: "./images/B33/L01-33_16_256x256.webp" },
    ],
  },
  {
    id: 47,
    name: "個人Q版",
    description: "登頂攀爬101-1",
    category: "跟風系列",
    stickers: [
      { id: "B34-1", img: "./images/B34/L01-34_1_256x256.webp" },
      { id: "B34-2", img: "./images/B34/L01-34_2_256x256.webp" },
      { id: "B34-3", img: "./images/B34/L01-34_3_256x256.webp" },
      { id: "B34-4", img: "./images/B34/L01-34_4_256x256.webp" },
      { id: "B34-5", img: "./images/B34/L01-34_5_256x256.webp" },
      { id: "B34-6", img: "./images/B34/L01-34_6_256x256.webp" },
      { id: "B34-7", img: "./images/B34/L01-34_7_256x256.webp" },
      { id: "B34-8", img: "./images/B34/L01-34_8_256x256.webp" },
      { id: "B34-9", img: "./images/B34/L01-34_9_256x256.webp" },
      { id: "B34-A", img: "./images/B34/L01-34_10_256x256.webp" },
      { id: "B34-B", img: "./images/B34/L01-34_11_256x256.webp" },
      { id: "B34-C", img: "./images/B34/L01-34_12_256x256.webp" },
      { id: "B34-D", img: "./images/B34/L01-34_13_256x256.webp" },
      { id: "B34-E", img: "./images/B34/L01-34_14_256x256.webp" },
      { id: "B34-F", img: "./images/B34/L01-34_15_256x256.webp" },
      { id: "B34-G", img: "./images/B34/L01-34_16_256x256.webp" },
    ],
  },
  {
    id: 48,
    name: "個人Q版",
    description: "登頂攀爬101黑夜版",
    category: "跟風系列",
    stickers: [
      { id: "B35-1", img: "./images/B35/L01-35_1_220x304.webp" },
      { id: "B35-2", img: "./images/B35/L01-35_2_220x304.webp" },
      { id: "B35-3", img: "./images/B35/L01-35_3_220x304.webp" },
      { id: "B35-4", img: "./images/B35/L01-35_4_220x304.webp" },
      { id: "B35-5", img: "./images/B35/L01-35_5_220x304.webp" },
      { id: "B35-6", img: "./images/B35/L01-35_6_220x304.webp" },
      { id: "B35-7", img: "./images/B35/L01-35_7_220x304.webp" },
      { id: "B35-8", img: "./images/B35/L01-35_8_220x304.webp" },
      { id: "B35-9", img: "./images/B35/L01-35_9_220x304.webp" },
      { id: "B35-A", img: "./images/B35/L01-35_10_220x304.webp" },
      { id: "B35-B", img: "./images/B35/L01-35_11_220x304.webp" },
      { id: "B35-C", img: "./images/B35/L01-35_12_220x304.webp" },
      { id: "B35-D", img: "./images/B35/L01-35_13_220x304.webp" },
      { id: "B35-E", img: "./images/B35/L01-35_14_220x304.webp" },
      { id: "B35-F", img: "./images/B35/L01-35_15_220x304.webp" },
      { id: "B35-G", img: "./images/B35/L01-35_16_220x304.webp" },
    ],
  },
  {
    id: 49,
    name: "老婆Q版",
    description: "早安圖-1",
    category: "老婆系列",
    stickers: [
      { id: "GPT008-1-1", img: "./images/GPT008-1/split_0_0.webp" },
      { id: "GPT008-1-2", img: "./images/GPT008-1/split_0_1.webp" },
      { id: "GPT008-1-3", img: "./images/GPT008-1/split_0_2.webp" },
      { id: "GPT008-1-4", img: "./images/GPT008-1/split_0_3.webp" },
      { id: "GPT008-1-5", img: "./images/GPT008-1/split_1_0.webp" },
      { id: "GPT008-1-6", img: "./images/GPT008-1/split_1_1.webp" },
      { id: "GPT008-1-7", img: "./images/GPT008-1/split_1_2.webp" },
      { id: "GPT008-1-8", img: "./images/GPT008-1/split_1_3.webp" },
      { id: "GPT008-1-9", img: "./images/GPT008-1/split_2_0.webp" },
      { id: "GPT008-1-A", img: "./images/GPT008-1/split_2_1.webp" },
      { id: "GPT008-1-B", img: "./images/GPT008-1/split_2_2.webp" },
      { id: "GPT008-1-C", img: "./images/GPT008-1/split_2_3.webp" },
    ],
  },
  {
    id: 50,
    name: "老婆Q版",
    description: "早安圖-2",
    category: "老婆系列",
    stickers: [
      { id: "GPT008-2-1", img: "./images/GPT008-2/split_0_0.webp" },
      { id: "GPT008-2-2", img: "./images/GPT008-2/split_0_1.webp" },
      { id: "GPT008-2-3", img: "./images/GPT008-2/split_0_2.webp" },
      { id: "GPT008-2-4", img: "./images/GPT008-2/split_0_3.webp" },
      { id: "GPT008-2-5", img: "./images/GPT008-2/split_1_0.webp" },
      { id: "GPT008-2-6", img: "./images/GPT008-2/split_1_1.webp" },
      { id: "GPT008-2-7", img: "./images/GPT008-2/split_1_2.webp" },
      { id: "GPT008-2-8", img: "./images/GPT008-2/split_1_3.webp" },
      { id: "GPT008-2-9", img: "./images/GPT008-2/split_2_0.webp" },
      { id: "GPT008-2-A", img: "./images/GPT008-2/split_2_1.webp" },
      { id: "GPT008-2-B", img: "./images/GPT008-2/split_2_2.webp" },
      { id: "GPT008-2-C", img: "./images/GPT008-2/split_2_3.webp" },
    ],
  },
  {
    id: 51,
    name: "老婆Q版",
    description: "早安圖-3",
    category: "老婆系列",
    stickers: [
      { id: "GPT008-3-1", img: "./images/GPT008-3/split_0_0.webp" },
      { id: "GPT008-3-2", img: "./images/GPT008-3/split_0_1.webp" },
      { id: "GPT008-3-3", img: "./images/GPT008-3/split_0_2.webp" },
      { id: "GPT008-3-4", img: "./images/GPT008-3/split_0_3.webp" },
      { id: "GPT008-3-5", img: "./images/GPT008-3/split_1_0.webp" },
      { id: "GPT008-3-6", img: "./images/GPT008-3/split_1_1.webp" },
      { id: "GPT008-3-7", img: "./images/GPT008-3/split_1_2.webp" },
      { id: "GPT008-3-8", img: "./images/GPT008-3/split_1_3.webp" },
      { id: "GPT008-3-9", img: "./images/GPT008-3/split_2_0.webp" },
      { id: "GPT008-3-A", img: "./images/GPT008-3/split_2_1.webp" },
      { id: "GPT008-3-B", img: "./images/GPT008-3/split_2_2.webp" },
      { id: "GPT008-3-C", img: "./images/GPT008-3/split_2_3.webp" },
    ],
  },
  {
    id: 52,
    name: "老婆Q版",
    description: "早安圖-3",
    category: "老婆系列",
    stickers: [
      { id: "GPT008-4-1", img: "./images/GPT008-4/split_0_0.webp" },
      { id: "GPT008-4-2", img: "./images/GPT008-4/split_0_1.webp" },
      { id: "GPT008-4-3", img: "./images/GPT008-4/split_0_2.webp" },
      { id: "GPT008-4-4", img: "./images/GPT008-4/split_0_3.webp" },
      { id: "GPT008-4-5", img: "./images/GPT008-4/split_1_0.webp" },
      { id: "GPT008-4-6", img: "./images/GPT008-4/split_1_1.webp" },
      { id: "GPT008-4-7", img: "./images/GPT008-4/split_1_2.webp" },
      { id: "GPT008-4-8", img: "./images/GPT008-4/split_1_3.webp" },
      { id: "GPT008-4-9", img: "./images/GPT008-4/split_2_0.webp" },
      { id: "GPT008-4-A", img: "./images/GPT008-4/split_2_1.webp" },
      { id: "GPT008-4-B", img: "./images/GPT008-4/split_2_2.webp" },
      { id: "GPT008-4-C", img: "./images/GPT008-4/split_2_3.webp" },
    ],
  },
  {
    id: 53,
    name: "老婆Q版",
    description: "早安圖-3",
    category: "老婆系列",
    stickers: [
      { id: "GPT008-5-1", img: "./images/GPT008-5/split_0_0.webp" },
      { id: "GPT008-5-2", img: "./images/GPT008-5/split_0_1.webp" },
      { id: "GPT008-5-3", img: "./images/GPT008-5/split_0_2.webp" },
      { id: "GPT008-5-4", img: "./images/GPT008-5/split_0_3.webp" },
      { id: "GPT008-5-5", img: "./images/GPT008-5/split_1_0.webp" },
      { id: "GPT008-5-6", img: "./images/GPT008-5/split_1_1.webp" },
      { id: "GPT008-5-7", img: "./images/GPT008-5/split_1_2.webp" },
      { id: "GPT008-5-8", img: "./images/GPT008-5/split_1_3.webp" },
      { id: "GPT008-5-9", img: "./images/GPT008-5/split_2_0.webp" },
      { id: "GPT008-5-A", img: "./images/GPT008-5/split_2_1.webp" },
      { id: "GPT008-5-B", img: "./images/GPT008-5/split_2_2.webp" },
      { id: "GPT008-5-C", img: "./images/GPT008-5/split_2_3.webp" },
    ],
  },
  {
    id: 54,
    name: "詣超Q版",
    description: "日本關西旅遊第一天-大阪",
    category: "旅遊系列",
    stickers: [
      { id: "GPT0010-1-1", img: "./images/GPT0010-1/split_0_0.webp" },
      { id: "GPT0010-1-2", img: "./images/GPT0010-1/split_0_1.webp" },
      { id: "GPT0010-1-3", img: "./images/GPT0010-1/split_0_2.webp" },
      { id: "GPT0010-1-4", img: "./images/GPT0010-1/split_0_3.webp" },
      { id: "GPT0010-1-5", img: "./images/GPT0010-1/split_1_0.webp" },
      { id: "GPT0010-1-6", img: "./images/GPT0010-1/split_1_1.webp" },
      { id: "GPT0010-1-7", img: "./images/GPT0010-1/split_1_2.webp" },
      { id: "GPT0010-1-8", img: "./images/GPT0010-1/split_1_3.webp" },
      { id: "GPT0010-1-9", img: "./images/GPT0010-1/split_2_0.webp" },
      { id: "GPT0010-1-A", img: "./images/GPT0010-1/split_2_1.webp" },
      { id: "GPT0010-1-B", img: "./images/GPT0010-1/split_2_2.webp" },
      { id: "GPT0010-1-C", img: "./images/GPT0010-1/split_2_3.webp" },
      { id: "GPT0010-1-D", img: "./images/GPT0010-1/split_3_0.webp" },
      { id: "GPT0010-1-E", img: "./images/GPT0010-1/split_3_1.webp" },
      { id: "GPT0010-1-F", img: "./images/GPT0010-1/split_3_2.webp" },
      { id: "GPT0010-1-G", img: "./images/GPT0010-1/split_3_3.webp" },
    ],
  },
  {
    id: 55,
    name: "詣超Q版",
    description: "日本關西旅遊第二天-大阪",
    category: "旅遊系列",
    stickers: [
      { id: "GPT0010-2-1", img: "./images/GPT0010-2/split_0_0.webp" },
      { id: "GPT0010-2-2", img: "./images/GPT0010-2/split_0_1.webp" },
      { id: "GPT0010-2-3", img: "./images/GPT0010-2/split_0_2.webp" },
      { id: "GPT0010-2-4", img: "./images/GPT0010-2/split_0_3.webp" },
      { id: "GPT0010-2-5", img: "./images/GPT0010-2/split_1_0.webp" },
      { id: "GPT0010-2-6", img: "./images/GPT0010-2/split_1_1.webp" },
      { id: "GPT0010-2-7", img: "./images/GPT0010-2/split_1_2.webp" },
      { id: "GPT0010-2-8", img: "./images/GPT0010-2/split_1_3.webp" },
      { id: "GPT0010-2-9", img: "./images/GPT0010-2/split_2_0.webp" },
      { id: "GPT0010-2-A", img: "./images/GPT0010-2/split_2_1.webp" },
      { id: "GPT0010-2-B", img: "./images/GPT0010-2/split_2_2.webp" },
      { id: "GPT0010-2-C", img: "./images/GPT0010-2/split_2_3.webp" },
      { id: "GPT0010-2-D", img: "./images/GPT0010-2/split_3_0.webp" },
      { id: "GPT0010-2-E", img: "./images/GPT0010-2/split_3_1.webp" },
      { id: "GPT0010-2-F", img: "./images/GPT0010-2/split_3_2.webp" },
      { id: "GPT0010-2-G", img: "./images/GPT0010-2/split_3_3.webp" },
    ],
  },
  {
    id: 56,
    name: "詣超Q版",
    description: "日本關西旅遊第三天-神戶",
    category: "旅遊系列",
    stickers: [
      { id: "GPT0010-3-1", img: "./images/GPT0010-3/split_0_0.webp" },
      { id: "GPT0010-3-2", img: "./images/GPT0010-3/split_0_1.webp" },
      { id: "GPT0010-3-3", img: "./images/GPT0010-3/split_0_2.webp" },
      { id: "GPT0010-3-4", img: "./images/GPT0010-3/split_0_3.webp" },
      { id: "GPT0010-3-5", img: "./images/GPT0010-3/split_1_0.webp" },
      { id: "GPT0010-3-6", img: "./images/GPT0010-3/split_1_1.webp" },
      { id: "GPT0010-3-7", img: "./images/GPT0010-3/split_1_2.webp" },
      { id: "GPT0010-3-8", img: "./images/GPT0010-3/split_1_3.webp" },
      { id: "GPT0010-3-9", img: "./images/GPT0010-3/split_2_0.webp" },
      { id: "GPT0010-3-A", img: "./images/GPT0010-3/split_2_1.webp" },
      { id: "GPT0010-3-B", img: "./images/GPT0010-3/split_2_2.webp" },
      { id: "GPT0010-3-C", img: "./images/GPT0010-3/split_2_3.webp" },
      { id: "GPT0010-3-D", img: "./images/GPT0010-3/split_3_0.webp" },
      { id: "GPT0010-3-E", img: "./images/GPT0010-3/split_3_1.webp" },
      { id: "GPT0010-3-F", img: "./images/GPT0010-3/split_3_2.webp" },
      { id: "GPT0010-3-G", img: "./images/GPT0010-3/split_3_3.webp" },
    ],
  },
  {
    id: 57,
    name: "詣超Q版",
    description: "日本關西旅遊第四天-京都~伏見稻荷大社",
    category: "旅遊系列",
    stickers: [
      { id: "GPT0010-4-1", img: "./images/GPT0010-4/split_0_0.webp" },
      { id: "GPT0010-4-2", img: "./images/GPT0010-4/split_0_1.webp" },
      { id: "GPT0010-4-3", img: "./images/GPT0010-4/split_0_2.webp" },
      { id: "GPT0010-4-4", img: "./images/GPT0010-4/split_0_3.webp" },
      { id: "GPT0010-4-5", img: "./images/GPT0010-4/split_1_0.webp" },
      { id: "GPT0010-4-6", img: "./images/GPT0010-4/split_1_1.webp" },
      { id: "GPT0010-4-7", img: "./images/GPT0010-4/split_1_2.webp" },
      { id: "GPT0010-4-8", img: "./images/GPT0010-4/split_1_3.webp" },
      { id: "GPT0010-4-9", img: "./images/GPT0010-4/split_2_0.webp" },
      { id: "GPT0010-4-A", img: "./images/GPT0010-4/split_2_1.webp" },
      { id: "GPT0010-4-B", img: "./images/GPT0010-4/split_2_2.webp" },
      { id: "GPT0010-4-C", img: "./images/GPT0010-4/split_2_3.webp" },
      { id: "GPT0010-4-D", img: "./images/GPT0010-4/split_3_0.webp" },
      { id: "GPT0010-4-E", img: "./images/GPT0010-4/split_3_1.webp" },
      { id: "GPT0010-4-F", img: "./images/GPT0010-4/split_3_2.webp" },
      { id: "GPT0010-4-G", img: "./images/GPT0010-4/split_3_3.webp" },
    ],
  },
  {
    id: 58,
    name: "詣超Q版",
    description: "日本關西旅遊第五天-京都~宇治平等院鳳凰堂",
    category: "旅遊系列",
    stickers: [
      { id: "GPT0010-5-1", img: "./images/GPT0010-5/split_0_0.webp" },
      { id: "GPT0010-5-2", img: "./images/GPT0010-5/split_0_1.webp" },
      { id: "GPT0010-5-3", img: "./images/GPT0010-5/split_0_2.webp" },
      { id: "GPT0010-5-4", img: "./images/GPT0010-5/split_0_3.webp" },
      { id: "GPT0010-5-5", img: "./images/GPT0010-5/split_1_0.webp" },
      { id: "GPT0010-5-6", img: "./images/GPT0010-5/split_1_1.webp" },
      { id: "GPT0010-5-7", img: "./images/GPT0010-5/split_1_2.webp" },
      { id: "GPT0010-5-8", img: "./images/GPT0010-5/split_1_3.webp" },
      { id: "GPT0010-5-9", img: "./images/GPT0010-5/split_2_0.webp" },
      { id: "GPT0010-5-A", img: "./images/GPT0010-5/split_2_1.webp" },
      { id: "GPT0010-5-B", img: "./images/GPT0010-5/split_2_2.webp" },
      { id: "GPT0010-5-C", img: "./images/GPT0010-5/split_2_3.webp" },
      { id: "GPT0010-5-D", img: "./images/GPT0010-5/split_3_0.webp" },
      { id: "GPT0010-5-E", img: "./images/GPT0010-5/split_3_1.webp" },
      { id: "GPT0010-5-F", img: "./images/GPT0010-5/split_3_2.webp" },
      { id: "GPT0010-5-G", img: "./images/GPT0010-5/split_3_3.webp" },
    ],
  },
  {
    id: 59,
    name: "個人Q版",
    description: "早安大字貼-1",
    category: "早安系列",
    stickers: [
      { id: "GPT0011-1-1", img: "./images/GPT0011-1/split_0_0.webp" },
      { id: "GPT0011-1-2", img: "./images/GPT0011-1/split_0_1.webp" },
      { id: "GPT0011-1-3", img: "./images/GPT0011-1/split_0_2.webp" },
      { id: "GPT0011-1-4", img: "./images/GPT0011-1/split_0_3.webp" },
      { id: "GPT0011-1-5", img: "./images/GPT0011-1/split_1_0.webp" },
      { id: "GPT0011-1-6", img: "./images/GPT0011-1/split_1_1.webp" },
      { id: "GPT0011-1-7", img: "./images/GPT0011-1/split_1_2.webp" },
      { id: "GPT0011-1-8", img: "./images/GPT0011-1/split_1_3.webp" },
      { id: "GPT0011-1-9", img: "./images/GPT0011-1/split_2_0.webp" },
      { id: "GPT0011-1-A", img: "./images/GPT0011-1/split_2_1.webp" },
      { id: "GPT0011-1-B", img: "./images/GPT0011-1/split_2_2.webp" },
      { id: "GPT0011-1-C", img: "./images/GPT0011-1/split_2_3.webp" },
    ],
  },
  {
    id: 60,
    name: "個人Q版",
    description: "早安大字貼-2",
    category: "早安系列",
    stickers: [
      { id: "GPT0011-2-1", img: "./images/GPT0011-2/split_0_0.webp" },
      { id: "GPT0011-2-2", img: "./images/GPT0011-2/split_0_1.webp" },
      { id: "GPT0011-2-3", img: "./images/GPT0011-2/split_0_2.webp" },
      { id: "GPT0011-2-4", img: "./images/GPT0011-2/split_0_3.webp" },
      { id: "GPT0011-2-5", img: "./images/GPT0011-2/split_1_0.webp" },
      { id: "GPT0011-2-6", img: "./images/GPT0011-2/split_1_1.webp" },
      { id: "GPT0011-2-7", img: "./images/GPT0011-2/split_1_2.webp" },
      { id: "GPT0011-2-8", img: "./images/GPT0011-2/split_1_3.webp" },
      { id: "GPT0011-2-9", img: "./images/GPT0011-2/split_2_0.webp" },
      { id: "GPT0011-2-A", img: "./images/GPT0011-2/split_2_1.webp" },
      { id: "GPT0011-2-B", img: "./images/GPT0011-2/split_2_2.webp" },
      { id: "GPT0011-2-C", img: "./images/GPT0011-2/split_2_3.webp" },
    ],
  },
  {
    id: 61,
    name: "個人Q版",
    description: "早安大字貼-3",
    category: "早安系列",
    stickers: [
      { id: "GPT0011-3-1", img: "./images/GPT0011-3/split_0_0.webp" },
      { id: "GPT0011-3-2", img: "./images/GPT0011-3/split_0_1.webp" },
      { id: "GPT0011-3-3", img: "./images/GPT0011-3/split_0_2.webp" },
      { id: "GPT0011-3-4", img: "./images/GPT0011-3/split_0_3.webp" },
      { id: "GPT0011-3-5", img: "./images/GPT0011-3/split_1_0.webp" },
      { id: "GPT0011-3-6", img: "./images/GPT0011-3/split_1_1.webp" },
      { id: "GPT0011-3-7", img: "./images/GPT0011-3/split_1_2.webp" },
      { id: "GPT0011-3-8", img: "./images/GPT0011-3/split_1_3.webp" },
      { id: "GPT0011-3-9", img: "./images/GPT0011-3/split_2_0.webp" },
      { id: "GPT0011-3-A", img: "./images/GPT0011-3/split_2_1.webp" },
      { id: "GPT0011-3-B", img: "./images/GPT0011-3/split_2_2.webp" },
      { id: "GPT0011-3-C", img: "./images/GPT0011-3/split_2_3.webp" },
      { id: "GPT0011-3-D", img: "./images/GPT0011-3/split_3_0.webp" },
      { id: "GPT0011-3-E", img: "./images/GPT0011-3/split_3_1.webp" },
      { id: "GPT0011-3-F", img: "./images/GPT0011-3/split_3_2.webp" },
      { id: "GPT0011-3-G", img: "./images/GPT0011-3/split_3_3.webp" },
    ],
  },
  {
    id: 62,
    name: "老婆Q版",
    description: "早安大字貼-1",
    category: "早安系列",
    stickers: [
      { id: "GPT0011-4-1", img: "./images/GPT0011-4/split_0_0.webp" },
      { id: "GPT0011-4-2", img: "./images/GPT0011-4/split_0_1.webp" },
      { id: "GPT0011-4-3", img: "./images/GPT0011-4/split_0_2.webp" },
      { id: "GPT0011-4-4", img: "./images/GPT0011-4/split_0_3.webp" },
      { id: "GPT0011-4-5", img: "./images/GPT0011-4/split_1_0.webp" },
      { id: "GPT0011-4-6", img: "./images/GPT0011-4/split_1_1.webp" },
      { id: "GPT0011-4-7", img: "./images/GPT0011-4/split_1_2.webp" },
      { id: "GPT0011-4-8", img: "./images/GPT0011-4/split_1_3.webp" },
      { id: "GPT0011-4-9", img: "./images/GPT0011-4/split_2_0.webp" },
      { id: "GPT0011-4-A", img: "./images/GPT0011-4/split_2_1.webp" },
      { id: "GPT0011-4-B", img: "./images/GPT0011-4/split_2_2.webp" },
      { id: "GPT0011-4-C", img: "./images/GPT0011-4/split_2_3.webp" },
    ],
  },
  {
    id: 63,
    name: "老婆Q版",
    description: "早安大字貼-2",
    category: "早安系列",
    stickers: [
      { id: "GPT0011-5-1", img: "./images/GPT0011-5/split_0_0.webp" },
      { id: "GPT0011-5-2", img: "./images/GPT0011-5/split_0_1.webp" },
      { id: "GPT0011-5-3", img: "./images/GPT0011-5/split_0_2.webp" },
      { id: "GPT0011-5-4", img: "./images/GPT0011-5/split_0_3.webp" },
      { id: "GPT0011-5-5", img: "./images/GPT0011-5/split_1_0.webp" },
      { id: "GPT0011-5-6", img: "./images/GPT0011-5/split_1_1.webp" },
      { id: "GPT0011-5-7", img: "./images/GPT0011-5/split_1_2.webp" },
      { id: "GPT0011-5-8", img: "./images/GPT0011-5/split_1_3.webp" },
      { id: "GPT0011-5-9", img: "./images/GPT0011-5/split_2_0.webp" },
      { id: "GPT0011-5-A", img: "./images/GPT0011-5/split_2_1.webp" },
      { id: "GPT0011-5-B", img: "./images/GPT0011-5/split_2_2.webp" },
      { id: "GPT0011-5-C", img: "./images/GPT0011-5/split_2_3.webp" },
    ],
  },
  {
    id: 64,
    name: "老婆Q版",
    description: "早安大字貼-3",
    category: "早安系列",
    stickers: [
      { id: "GPT0011-6-1", img: "./images/GPT0011-6/split_0_0.webp" },
      { id: "GPT0011-6-2", img: "./images/GPT0011-6/split_0_1.webp" },
      { id: "GPT0011-6-3", img: "./images/GPT0011-6/split_0_2.webp" },
      { id: "GPT0011-6-4", img: "./images/GPT0011-6/split_0_3.webp" },
      { id: "GPT0011-6-5", img: "./images/GPT0011-6/split_1_0.webp" },
      { id: "GPT0011-6-6", img: "./images/GPT0011-6/split_1_1.webp" },
      { id: "GPT0011-6-7", img: "./images/GPT0011-6/split_1_2.webp" },
      { id: "GPT0011-6-8", img: "./images/GPT0011-6/split_1_3.webp" },
      { id: "GPT0011-6-9", img: "./images/GPT0011-6/split_2_0.webp" },
      { id: "GPT0011-6-A", img: "./images/GPT0011-6/split_2_1.webp" },
      { id: "GPT0011-6-B", img: "./images/GPT0011-6/split_2_2.webp" },
      { id: "GPT0011-6-C", img: "./images/GPT0011-6/split_2_3.webp" },
      { id: "GPT0011-6-D", img: "./images/GPT0011-6/split_3_0.webp" },
      { id: "GPT0011-6-E", img: "./images/GPT0011-6/split_3_1.webp" },
      { id: "GPT0011-6-F", img: "./images/GPT0011-6/split_3_2.webp" },
      { id: "GPT0011-6-G", img: "./images/GPT0011-6/split_3_3.webp" },
    ],
  },
  {
    id: 65,
    name: "詣超Q版",
    description: "關西六日遊~Q版",
    category: "旅遊系列",
    stickers: [
      { id: "GPT0012-01-Q版-1", img: "./images/GPT0012-01-Q版/split_0_0.webp" },
      { id: "GPT0012-01-Q版-2", img: "./images/GPT0012-01-Q版/split_0_1.webp" },
      { id: "GPT0012-01-Q版-3", img: "./images/GPT0012-01-Q版/split_0_2.webp" },
      { id: "GPT0012-01-Q版-4", img: "./images/GPT0012-01-Q版/split_0_3.webp" },
      { id: "GPT0012-01-Q版-5", img: "./images/GPT0012-01-Q版/split_1_0.webp" },
      { id: "GPT0012-01-Q版-6", img: "./images/GPT0012-01-Q版/split_1_1.webp" },
      { id: "GPT0012-01-Q版-7", img: "./images/GPT0012-01-Q版/split_1_2.webp" },
      { id: "GPT0012-01-Q版-8", img: "./images/GPT0012-01-Q版/split_1_3.webp" },
      { id: "GPT0012-01-Q版-9", img: "./images/GPT0012-01-Q版/split_2_0.webp" },
      { id: "GPT0012-01-Q版-A", img: "./images/GPT0012-01-Q版/split_2_1.webp" },
      { id: "GPT0012-01-Q版-B", img: "./images/GPT0012-01-Q版/split_2_2.webp" },
      { id: "GPT0012-01-Q版-C", img: "./images/GPT0012-01-Q版/split_2_3.webp" },
      { id: "GPT0012-01-Q版-D", img: "./images/GPT0012-01-Q版/split_3_0.webp" },
      { id: "GPT0012-01-Q版-E", img: "./images/GPT0012-01-Q版/split_3_1.webp" },
      { id: "GPT0012-01-Q版-F", img: "./images/GPT0012-01-Q版/split_3_2.webp" },
      { id: "GPT0012-01-Q版-G", img: "./images/GPT0012-01-Q版/split_3_3.webp" },
    ],
  },
  {
    id: 66,
    name: "詣超Q版",
    description: "關西六日遊~手繪插畫風",
    category: "旅遊系列",
    stickers: [
      {
        id: "GPT0012-02-手繪插畫風-1",
        img: "./images/GPT0012-02-手繪插畫風/split_0_0.webp",
      },
      {
        id: "GPT0012-02-手繪插畫風-2",
        img: "./images/GPT0012-02-手繪插畫風/split_0_1.webp",
      },
      {
        id: "GPT0012-02-手繪插畫風-3",
        img: "./images/GPT0012-02-手繪插畫風/split_0_2.webp",
      },
      {
        id: "GPT0012-02-手繪插畫風-4",
        img: "./images/GPT0012-02-手繪插畫風/split_0_3.webp",
      },
      {
        id: "GPT0012-02-手繪插畫風-5",
        img: "./images/GPT0012-02-手繪插畫風/split_1_0.webp",
      },
      {
        id: "GPT0012-02-手繪插畫風-6",
        img: "./images/GPT0012-02-手繪插畫風/split_1_1.webp",
      },
      {
        id: "GPT0012-02-手繪插畫風-7",
        img: "./images/GPT0012-02-手繪插畫風/split_1_2.webp",
      },
      {
        id: "GPT0012-02-手繪插畫風-8",
        img: "./images/GPT0012-02-手繪插畫風/split_1_3.webp",
      },
      {
        id: "GPT0012-02-手繪插畫風-9",
        img: "./images/GPT0012-02-手繪插畫風/split_2_0.webp",
      },
      {
        id: "GPT0012-02-手繪插畫風-A",
        img: "./images/GPT0012-02-手繪插畫風/split_2_1.webp",
      },
      {
        id: "GPT0012-02-手繪插畫風-B",
        img: "./images/GPT0012-02-手繪插畫風/split_2_2.webp",
      },
      {
        id: "GPT0012-02-手繪插畫風-C",
        img: "./images/GPT0012-02-手繪插畫風/split_2_3.webp",
      },
      {
        id: "GPT0012-02-手繪插畫風-D",
        img: "./images/GPT0012-02-手繪插畫風/split_3_0.webp",
      },
      {
        id: "GPT0012-02-手繪插畫風-E",
        img: "./images/GPT0012-02-手繪插畫風/split_3_1.webp",
      },
      {
        id: "GPT0012-02-手繪插畫風-F",
        img: "./images/GPT0012-02-手繪插畫風/split_3_2.webp",
      },
      {
        id: "GPT0012-02-手繪插畫風-G",
        img: "./images/GPT0012-02-手繪插畫風/split_3_3.webp",
      },
    ],
  },
  {
    id: 67,
    name: "詣超Q版",
    description: "關西六日遊~韓系ins風",
    category: "旅遊系列",
    stickers: [
      {
        id: "GPT0012-03-韓系 ins風-1",
        img: "./images/GPT0012-03-韓系 ins風/split_0_0.webp",
      },
      {
        id: "GPT0012-03-韓系 ins風-2",
        img: "./images/GPT0012-03-韓系 ins風/split_0_1.webp",
      },
      {
        id: "GPT0012-03-韓系 ins風-3",
        img: "./images/GPT0012-03-韓系 ins風/split_0_2.webp",
      },
      {
        id: "GPT0012-03-韓系 ins風-4",
        img: "./images/GPT0012-03-韓系 ins風/split_0_3.webp",
      },
      {
        id: "GPT0012-03-韓系 ins風-5",
        img: "./images/GPT0012-03-韓系 ins風/split_1_0.webp",
      },
      {
        id: "GPT0012-03-韓系 ins風-6",
        img: "./images/GPT0012-03-韓系 ins風/split_1_1.webp",
      },
      {
        id: "GPT0012-03-韓系 ins風-7",
        img: "./images/GPT0012-03-韓系 ins風/split_1_2.webp",
      },
      {
        id: "GPT0012-03-韓系 ins風-8",
        img: "./images/GPT0012-03-韓系 ins風/split_1_3.webp",
      },
      {
        id: "GPT0012-03-韓系 ins風-9",
        img: "./images/GPT0012-03-韓系 ins風/split_2_0.webp",
      },
      {
        id: "GPT0012-03-韓系 ins風-A",
        img: "./images/GPT0012-03-韓系 ins風/split_2_1.webp",
      },
      {
        id: "GPT0012-03-韓系 ins風-B",
        img: "./images/GPT0012-03-韓系 ins風/split_2_2.webp",
      },
      {
        id: "GPT0012-03-韓系 ins風-C",
        img: "./images/GPT0012-03-韓系 ins風/split_2_3.webp",
      },
      {
        id: "GPT0012-03-韓系 ins風-D",
        img: "./images/GPT0012-03-韓系 ins風/split_3_0.webp",
      },
      {
        id: "GPT0012-03-韓系 ins風-E",
        img: "./images/GPT0012-03-韓系 ins風/split_3_1.webp",
      },
      {
        id: "GPT0012-03-韓系 ins風-F",
        img: "./images/GPT0012-03-韓系 ins風/split_3_2.webp",
      },
      {
        id: "GPT0012-03-韓系 ins風-G",
        img: "./images/GPT0012-03-韓系 ins風/split_3_3.webp",
      },
    ],
  },
  {
    id: 68,
    name: "詣超Q版",
    description: "關西六日遊~浮世繪旅圖風-20",
    category: "旅遊系列",
    stickers: [
      {
        id: "GPT0012-04-浮世繪旅圖風-20-1",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_0_0.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-2",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_0_1.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-3",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_0_2.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-4",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_0_3.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-5",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_1_0.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-6",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_1_1.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-7",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_1_2.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-8",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_1_3.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-9",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_2_0.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-A",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_2_1.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-B",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_2_2.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-C",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_2_3.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-D",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_3_0.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-E",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_3_1.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-F",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_3_2.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-G",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_3_3.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-H",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_4_0.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-I",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_4_1.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-J",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_4_2.webp",
      },
      {
        id: "GPT0012-04-浮世繪旅圖風-20-K",
        img: "./images/GPT0012-04-浮世繪旅圖風-20/split_4_3.webp",
      },
    ],
  },
  {
    id: 69,
    name: "詣超Q版",
    description: "關西六日遊~簡約現代 flat風-20",
    category: "旅遊系列",
    stickers: [
      {
        id: "GPT0012-05-簡約現代 flat風-20-1",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_0_0.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-2",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_0_1.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-3",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_0_2.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-4",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_0_3.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-5",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_1_0.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-6",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_1_1.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-7",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_1_2.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-8",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_1_3.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-9",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_2_0.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-A",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_2_1.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-B",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_2_2.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-C",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_2_3.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-D",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_3_0.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-E",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_3_1.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-F",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_3_2.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-G",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_3_3.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-H",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_4_0.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-I",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_4_1.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-J",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_4_2.webp",
      },
      {
        id: "GPT0012-05-簡約現代 flat風-20-K",
        img: "./images/GPT0012-05-簡約現代 flat風-20/split_4_3.webp",
      },
    ],
  },
  {
    id: 70,
    name: "詣超Q版",
    description: "關西六日遊~歐美復古航海地圖風",
    category: "旅遊系列",
    stickers: [
      {
        id: "GPT0012-06-歐美復古航海地圖風-1",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_0_0.webp",
      },
      {
        id: "GPT0012-06-歐美復古航海地圖風-2",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_0_1.webp",
      },
      {
        id: "GPT0012-06-歐美復古航海地圖風-3",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_0_2.webp",
      },
      {
        id: "GPT0012-06-歐美復古航海地圖風-4",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_0_3.webp",
      },
      {
        id: "GPT0012-06-歐美復古航海地圖風-5",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_1_0.webp",
      },
      {
        id: "GPT0012-06-歐美復古航海地圖風-6",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_1_1.webp",
      },
      {
        id: "GPT0012-06-歐美復古航海地圖風-7",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_1_2.webp",
      },
      {
        id: "GPT0012-06-歐美復古航海地圖風-8",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_1_3.webp",
      },
      {
        id: "GPT0012-06-歐美復古航海地圖風-9",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_2_0.webp",
      },
      {
        id: "GPT0012-06-歐美復古航海地圖風-A",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_2_1.webp",
      },
      {
        id: "GPT0012-06-歐美復古航海地圖風-B",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_2_2.webp",
      },
      {
        id: "GPT0012-06-歐美復古航海地圖風-C",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_2_3.webp",
      },
      {
        id: "GPT0012-06-歐美復古航海地圖風-D",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_3_0.webp",
      },
      {
        id: "GPT0012-06-歐美復古航海地圖風-E",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_3_1.webp",
      },
      {
        id: "GPT0012-06-歐美復古航海地圖風-F",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_3_2.webp",
      },
      {
        id: "GPT0012-06-歐美復古航海地圖風-G",
        img: "./images/GPT0012-06-歐美復古航海地圖風/split_3_3.webp",
      },
    ],
  },
  {
    id: 71,
    name: "詣超Q版",
    description: "關西六日遊~京都古都地圖風",
    category: "旅遊系列",
    stickers: [
      {
        id: "GPT0012-07- 京都古都地圖風-1",
        img: "./images/GPT0012-07- 京都古都地圖風/split_0_0.webp",
      },
      {
        id: "GPT0012-07- 京都古都地圖風-2",
        img: "./images/GPT0012-07- 京都古都地圖風/split_0_1.webp",
      },
      {
        id: "GPT0012-07- 京都古都地圖風-3",
        img: "./images/GPT0012-07- 京都古都地圖風/split_0_2.webp",
      },
      {
        id: "GPT0012-07- 京都古都地圖風-4",
        img: "./images/GPT0012-07- 京都古都地圖風/split_0_3.webp",
      },
      {
        id: "GPT0012-07- 京都古都地圖風-5",
        img: "./images/GPT0012-07- 京都古都地圖風/split_1_0.webp",
      },
      {
        id: "GPT0012-07- 京都古都地圖風-6",
        img: "./images/GPT0012-07- 京都古都地圖風/split_1_1.webp",
      },
      {
        id: "GPT0012-07- 京都古都地圖風-7",
        img: "./images/GPT0012-07- 京都古都地圖風/split_1_2.webp",
      },
      {
        id: "GPT0012-07- 京都古都地圖風-8",
        img: "./images/GPT0012-07- 京都古都地圖風/split_1_3.webp",
      },
      {
        id: "GPT0012-07- 京都古都地圖風-9",
        img: "./images/GPT0012-07- 京都古都地圖風/split_2_0.webp",
      },
      {
        id: "GPT0012-07- 京都古都地圖風-A",
        img: "./images/GPT0012-07- 京都古都地圖風/split_2_1.webp",
      },
      {
        id: "GPT0012-07- 京都古都地圖風-B",
        img: "./images/GPT0012-07- 京都古都地圖風/split_2_2.webp",
      },
      {
        id: "GPT0012-07- 京都古都地圖風-C",
        img: "./images/GPT0012-07- 京都古都地圖風/split_2_3.webp",
      },
      {
        id: "GPT0012-07- 京都古都地圖風-D",
        img: "./images/GPT0012-07- 京都古都地圖風/split_3_0.webp",
      },
      {
        id: "GPT0012-07- 京都古都地圖風-E",
        img: "./images/GPT0012-07- 京都古都地圖風/split_3_1.webp",
      },
      {
        id: "GPT0012-07- 京都古都地圖風-F",
        img: "./images/GPT0012-07- 京都古都地圖風/split_3_2.webp",
      },
      {
        id: "GPT0012-07- 京都古都地圖風-G",
        img: "./images/GPT0012-07- 京都古都地圖風/split_3_3.webp",
      },
    ],
  },
  {
    id: 72,
    name: "詣超Q版",
    description: "關西六日遊~動漫風",
    category: "旅遊系列",
    stickers: [
      {
        id: "GPT0012-08- 動漫風-1",
        img: "./images/GPT0012-08- 動漫風/split_0_0.webp",
      },
      {
        id: "GPT0012-08- 動漫風-2",
        img: "./images/GPT0012-08- 動漫風/split_0_1.webp",
      },
      {
        id: "GPT0012-08- 動漫風-3",
        img: "./images/GPT0012-08- 動漫風/split_0_2.webp",
      },
      {
        id: "GPT0012-08- 動漫風-4",
        img: "./images/GPT0012-08- 動漫風/split_0_3.webp",
      },
      {
        id: "GPT0012-08- 動漫風-5",
        img: "./images/GPT0012-08- 動漫風/split_1_0.webp",
      },
      {
        id: "GPT0012-08- 動漫風-6",
        img: "./images/GPT0012-08- 動漫風/split_1_1.webp",
      },
      {
        id: "GPT0012-08- 動漫風-7",
        img: "./images/GPT0012-08- 動漫風/split_1_2.webp",
      },
      {
        id: "GPT0012-08- 動漫風-8",
        img: "./images/GPT0012-08- 動漫風/split_1_3.webp",
      },
      {
        id: "GPT0012-08- 動漫風-9",
        img: "./images/GPT0012-08- 動漫風/split_2_0.webp",
      },
      {
        id: "GPT0012-08- 動漫風-A",
        img: "./images/GPT0012-08- 動漫風/split_2_1.webp",
      },
      {
        id: "GPT0012-08- 動漫風-B",
        img: "./images/GPT0012-08- 動漫風/split_2_2.webp",
      },
      {
        id: "GPT0012-08- 動漫風-C",
        img: "./images/GPT0012-08- 動漫風/split_2_3.webp",
      },
      {
        id: "GPT0012-08- 動漫風-D",
        img: "./images/GPT0012-08- 動漫風/split_3_0.webp",
      },
      {
        id: "GPT0012-08- 動漫風-E",
        img: "./images/GPT0012-08- 動漫風/split_3_1.webp",
      },
      {
        id: "GPT0012-08- 動漫風-F",
        img: "./images/GPT0012-08- 動漫風/split_3_2.webp",
      },
      {
        id: "GPT0012-08- 動漫風-G",
        img: "./images/GPT0012-08- 動漫風/split_3_3.webp",
      },
      {
        id: "GPT0012-08- 動漫風-H",
        img: "./images/GPT0012-08- 動漫風/split_4_0.webp",
      },
      {
        id: "GPT0012-08- 動漫風-I",
        img: "./images/GPT0012-08- 動漫風/split_4_1.webp",
      },
      {
        id: "GPT0012-08- 動漫風-J",
        img: "./images/GPT0012-08- 動漫風/split_4_2.webp",
      },
      {
        id: "GPT0012-08- 動漫風-K",
        img: "./images/GPT0012-08- 動漫風/split_4_3.webp",
      },
      {
        id: "GPT0012-08- 動漫風-L",
        img: "./images/GPT0012-08- 動漫風/split_4_4.webp",
      },
    ],
  },
  {
    id: 73,
    name: "詣超Q版",
    description: "關西六日遊~3D 卡通風",
    category: "旅遊系列",
    stickers: [
      {
        id: "GPT0012-09-3D 卡通風-1",
        img: "./images/GPT0012-09-3D 卡通風/split_0_0.webp",
      },
      {
        id: "GPT0012-09-3D 卡通風-2",
        img: "./images/GPT0012-09-3D 卡通風/split_0_1.webp",
      },
      {
        id: "GPT0012-09-3D 卡通風-3",
        img: "./images/GPT0012-09-3D 卡通風/split_0_2.webp",
      },
      {
        id: "GPT0012-09-3D 卡通風-4",
        img: "./images/GPT0012-09-3D 卡通風/split_0_3.webp",
      },
      {
        id: "GPT0012-09-3D 卡通風-5",
        img: "./images/GPT0012-09-3D 卡通風/split_1_0.webp",
      },
      {
        id: "GPT0012-09-3D 卡通風-6",
        img: "./images/GPT0012-09-3D 卡通風/split_1_1.webp",
      },
      {
        id: "GPT0012-09-3D 卡通風-7",
        img: "./images/GPT0012-09-3D 卡通風/split_1_2.webp",
      },
      {
        id: "GPT0012-09-3D 卡通風-8",
        img: "./images/GPT0012-09-3D 卡通風/split_1_3.webp",
      },
      {
        id: "GPT0012-09-3D 卡通風-9",
        img: "./images/GPT0012-09-3D 卡通風/split_2_0.webp",
      },
      {
        id: "GPT0012-09-3D 卡通風-A",
        img: "./images/GPT0012-09-3D 卡通風/split_2_1.webp",
      },
      {
        id: "GPT0012-09-3D 卡通風-B",
        img: "./images/GPT0012-09-3D 卡通風/split_2_2.webp",
      },
      {
        id: "GPT0012-09-3D 卡通風-C",
        img: "./images/GPT0012-09-3D 卡通風/split_2_3.webp",
      },
      {
        id: "GPT0012-09-3D 卡通風-D",
        img: "./images/GPT0012-09-3D 卡通風/split_3_0.webp",
      },
      {
        id: "GPT0012-09-3D 卡通風-E",
        img: "./images/GPT0012-09-3D 卡通風/split_3_1.webp",
      },
      {
        id: "GPT0012-09-3D 卡通風-F",
        img: "./images/GPT0012-09-3D 卡通風/split_3_2.webp",
      },
      {
        id: "GPT0012-09-3D 卡通風-G",
        img: "./images/GPT0012-09-3D 卡通風/split_3_3.webp",
      },
    ],
  },
  {
    id: 74,
    name: "詣超Q版",
    description: "關西六日遊~吉卜力水彩風",
    category: "旅遊系列",
    stickers: [
      {
        id: "GPT0012-10-吉卜力水彩風-1",
        img: "./images/GPT0012-10-吉卜力水彩風/split_0_0.webp",
      },
      {
        id: "GPT0012-10-吉卜力水彩風-2",
        img: "./images/GPT0012-10-吉卜力水彩風/split_0_1.webp",
      },
      {
        id: "GPT0012-10-吉卜力水彩風-3",
        img: "./images/GPT0012-10-吉卜力水彩風/split_0_2.webp",
      },
      {
        id: "GPT0012-10-吉卜力水彩風-4",
        img: "./images/GPT0012-10-吉卜力水彩風/split_0_3.webp",
      },
      {
        id: "GPT0012-10-吉卜力水彩風-5",
        img: "./images/GPT0012-10-吉卜力水彩風/split_1_0.webp",
      },
      {
        id: "GPT0012-10-吉卜力水彩風-6",
        img: "./images/GPT0012-10-吉卜力水彩風/split_1_1.webp",
      },
      {
        id: "GPT0012-10-吉卜力水彩風-7",
        img: "./images/GPT0012-10-吉卜力水彩風/split_1_2.webp",
      },
      {
        id: "GPT0012-10-吉卜力水彩風-8",
        img: "./images/GPT0012-10-吉卜力水彩風/split_1_3.webp",
      },
      {
        id: "GPT0012-10-吉卜力水彩風-9",
        img: "./images/GPT0012-10-吉卜力水彩風/split_2_0.webp",
      },
      {
        id: "GPT0012-10-吉卜力水彩風-A",
        img: "./images/GPT0012-10-吉卜力水彩風/split_2_1.webp",
      },
      {
        id: "GPT0012-10-吉卜力水彩風-B",
        img: "./images/GPT0012-10-吉卜力水彩風/split_2_2.webp",
      },
      {
        id: "GPT0012-10-吉卜力水彩風-C",
        img: "./images/GPT0012-10-吉卜力水彩風/split_2_3.webp",
      },
      {
        id: "GPT0012-10-吉卜力水彩風-D",
        img: "./images/GPT0012-10-吉卜力水彩風/split_3_0.webp",
      },
      {
        id: "GPT0012-10-吉卜力水彩風-E",
        img: "./images/GPT0012-10-吉卜力水彩風/split_3_1.webp",
      },
      {
        id: "GPT0012-10-吉卜力水彩風-F",
        img: "./images/GPT0012-10-吉卜力水彩風/split_3_2.webp",
      },
      {
        id: "GPT0012-10-吉卜力水彩風-G",
        img: "./images/GPT0012-10-吉卜力水彩風/split_3_3.webp",
      },
    ],
  },
  {
    id: 75,
    name: "詣超Q版",
    description: "關西六日遊~吉卜力手繪風",
    category: "旅遊系列",
    stickers: [
      {
        id: "GPT0012-11-吉卜力手繪風-1",
        img: "./images/GPT0012-11-吉卜力手繪風/split_0_0.webp",
      },
      {
        id: "GPT0012-11-吉卜力手繪風-2",
        img: "./images/GPT0012-11-吉卜力手繪風/split_0_1.webp",
      },
      {
        id: "GPT0012-11-吉卜力手繪風-3",
        img: "./images/GPT0012-11-吉卜力手繪風/split_0_2.webp",
      },
      {
        id: "GPT0012-11-吉卜力手繪風-4",
        img: "./images/GPT0012-11-吉卜力手繪風/split_0_3.webp",
      },
      {
        id: "GPT0012-11-吉卜力手繪風-5",
        img: "./images/GPT0012-11-吉卜力手繪風/split_1_0.webp",
      },
      {
        id: "GPT0012-11-吉卜力手繪風-6",
        img: "./images/GPT0012-11-吉卜力手繪風/split_1_1.webp",
      },
      {
        id: "GPT0012-11-吉卜力手繪風-7",
        img: "./images/GPT0012-11-吉卜力手繪風/split_1_2.webp",
      },
      {
        id: "GPT0012-11-吉卜力手繪風-8",
        img: "./images/GPT0012-11-吉卜力手繪風/split_1_3.webp",
      },
      {
        id: "GPT0012-11-吉卜力手繪風-9",
        img: "./images/GPT0012-11-吉卜力手繪風/split_2_0.webp",
      },
      {
        id: "GPT0012-11-吉卜力手繪風-A",
        img: "./images/GPT0012-11-吉卜力手繪風/split_2_1.webp",
      },
      {
        id: "GPT0012-11-吉卜力手繪風-B",
        img: "./images/GPT0012-11-吉卜力手繪風/split_2_2.webp",
      },
      {
        id: "GPT0012-11-吉卜力手繪風-C",
        img: "./images/GPT0012-11-吉卜力手繪風/split_2_3.webp",
      },
      {
        id: "GPT0012-11-吉卜力手繪風-D",
        img: "./images/GPT0012-11-吉卜力手繪風/split_3_0.webp",
      },
      {
        id: "GPT0012-11-吉卜力手繪風-E",
        img: "./images/GPT0012-11-吉卜力手繪風/split_3_1.webp",
      },
      {
        id: "GPT0012-11-吉卜力手繪風-F",
        img: "./images/GPT0012-11-吉卜力手繪風/split_3_2.webp",
      },
      {
        id: "GPT0012-11-吉卜力手繪風-G",
        img: "./images/GPT0012-11-吉卜力手繪風/split_3_3.webp",
      },
    ],
  },
  {
    id: 76,
    name: "詣超Q版",
    description: "關西六日遊~吉卜力動畫風",
    category: "旅遊系列",
    stickers: [
      {
        id: "GPT0012-12-吉卜力動畫風-1",
        img: "./images/GPT0012-12-吉卜力動畫風/split_0_0.webp",
      },
      {
        id: "GPT0012-12-吉卜力動畫風-2",
        img: "./images/GPT0012-12-吉卜力動畫風/split_0_1.webp",
      },
      {
        id: "GPT0012-12-吉卜力動畫風-3",
        img: "./images/GPT0012-12-吉卜力動畫風/split_0_2.webp",
      },
      {
        id: "GPT0012-12-吉卜力動畫風-4",
        img: "./images/GPT0012-12-吉卜力動畫風/split_0_3.webp",
      },
      {
        id: "GPT0012-12-吉卜力動畫風-5",
        img: "./images/GPT0012-12-吉卜力動畫風/split_1_0.webp",
      },
      {
        id: "GPT0012-12-吉卜力動畫風-6",
        img: "./images/GPT0012-12-吉卜力動畫風/split_1_1.webp",
      },
      {
        id: "GPT0012-12-吉卜力動畫風-7",
        img: "./images/GPT0012-12-吉卜力動畫風/split_1_2.webp",
      },
      {
        id: "GPT0012-12-吉卜力動畫風-8",
        img: "./images/GPT0012-12-吉卜力動畫風/split_1_3.webp",
      },
      {
        id: "GPT0012-12-吉卜力動畫風-9",
        img: "./images/GPT0012-12-吉卜力動畫風/split_2_0.webp",
      },
      {
        id: "GPT0012-12-吉卜力動畫風-A",
        img: "./images/GPT0012-12-吉卜力動畫風/split_2_1.webp",
      },
      {
        id: "GPT0012-12-吉卜力動畫風-B",
        img: "./images/GPT0012-12-吉卜力動畫風/split_2_2.webp",
      },
      {
        id: "GPT0012-12-吉卜力動畫風-C",
        img: "./images/GPT0012-12-吉卜力動畫風/split_2_3.webp",
      },
      {
        id: "GPT0012-12-吉卜力動畫風-D",
        img: "./images/GPT0012-12-吉卜力動畫風/split_3_0.webp",
      },
      {
        id: "GPT0012-12-吉卜力動畫風-E",
        img: "./images/GPT0012-12-吉卜力動畫風/split_3_1.webp",
      },
      {
        id: "GPT0012-12-吉卜力動畫風-F",
        img: "./images/GPT0012-12-吉卜力動畫風/split_3_2.webp",
      },
      {
        id: "GPT0012-12-吉卜力動畫風-G",
        img: "./images/GPT0012-12-吉卜力動畫風/split_3_3.webp",
      },
    ],
  },
];
