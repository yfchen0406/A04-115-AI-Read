# 每日照片

每日紀錄頁分成「AI協作」和旅遊照片分頁。第一天已加入「01-出發和機場」照片，依檔名數字排序，並把數字後方的文字顯示為圖片說明。

- `photos/day-1/`：第一天「AI協作」分頁的照片。
- `photos/day-1/01-出發和機場/`：第一天出發與機場照片。
- `photos/day-2/`：指宿、長崎鼻、仙巖園的 AI 協作照片。
- `photos/day-2/travel-photos/`：第二天實際旅遊照片預留位置。
- `photos/day-3/`：櫻島、關之尾瀑布、青島的 AI 協作照片。
- `photos/day-3/travel-photos/`：第三天實際旅遊照片預留位置。
- `photos/day-4/`：日向岬、高千穗、阿蘇的 AI 協作照片。
- `photos/day-4/travel-photos/`：第四天實際旅遊照片預留位置。
- `photos/day-5/`：菊池溪谷、柳川、鳥栖、福岡的 AI 協作照片。
- `photos/day-5/travel-photos/`：第五天實際旅遊照片預留位置。

第一天新增照片請放入 `photos/day-1/01-出發和機場/`。檔名使用「數字-照片說明」，例如 `12-抵達鹿兒島.jpg`；再將完整檔名加入 `day-page.js` 的 `dayOnePhotoFiles` 清單。頁面會依編號順序排列，並在照片下方顯示編號和說明。其他天的照片位置各保留 6 格；網站會依序辨識 WebP、JPG、JPEG、PNG，建議優先使用 WebP。
