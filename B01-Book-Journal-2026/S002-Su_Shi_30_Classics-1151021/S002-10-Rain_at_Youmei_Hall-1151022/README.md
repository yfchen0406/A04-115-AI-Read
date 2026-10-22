# 《千古東坡》第10集｜有美堂暴雨 動態劇本網站

## 離線閱讀

解壓縮後，直接雙擊本資料夾的 `index.html`，再按「開始閱讀」。網頁程式、時間軸、旁白及圖片採相對路徑；字幕與章節資料已打包於 `assets/main.js`，不需在執行時讀取 JSON 或 SRT。

首頁的「YT連結(有字幕)」和「YT連結(無字幕)」目前依要求都暫指 YouTube 首頁。之後只需在 `index.html` 的 `window.EPISODE_SETTINGS.links` 修改 `youtubeWithSubtitles` 和 `youtubeWithoutSubtitles`。

## 時間軸與來源

`data/timeline.json` 是網站與 Remotion 共用的時間軸資料。分鏡、章節名稱、字幕原文與時間、MP3 原音分別保留於 `source/` 及 `assets/audio/`。Excel 時間碼作為圖片與章節排程依據；MP3 使用原速 1.0。

## 圖片替換

圖片槽位為 `assets/images/IMG001.webp` 至 `IMG057.webp`。IMG001–IMG057 共 57 張皆已生成，WebP 成品同步放在 `assets/images/` 和 `remotion-src/public/images/`。原始 PNG 存於 `source/generated-png/`。`assets/images/cover.webp` 暫以 IMG001 作封面，收到專用封面後可直接替換。

已生成圖片 PNG 原檔保存在 `source/generated-png/`。待補編號記錄於 `source/待補圖片編號.txt`；目前已全部完成。

## 更新時間軸

需要重建時間軸時，在網站根目錄執行：

```powershell
python tools\build_timeline.py
node tools\update-bundled-timeline.mjs
node tools\patch-bundle.mjs
```

Python 端需安裝 `openpyxl`，並可使用 `ffprobe` 讀取 MP3 長度。新增圖片完成後，更新兩個 WebP 圖片目錄、原始 PNG 與 `source/待補圖片編號.txt`，再重建共用時間軸。

## Remotion

可編輯原始專案在 `remotion-src/`，composition 直接讀取上層 `data/timeline.json`，旁白與 WebP 存於 `remotion-src/public/`。在該資料夾執行：

```powershell
npm install
npm run studio
npm run render:preview30
```

`render:preview30` 僅輸出前 30 秒；完整影片輸出指令為 `npm run render`。此專案的輸出規格為 1920×1080、30 fps。

## 目錄

- `index.html`、`reading.html`：首頁與同步閱讀頁。
- `assets/`：離線網站程式、圖片、MP3。
- `data/timeline.json`：共用時間軸。
- `source/`：分鏡 Excel、研究旁白稿、原始 SRT、已生成 PNG 和待補圖片編號。
- `remotion-src/`：Remotion 專案和供其播放的資產。
- `QA_REPORT.md`：資料檢查、實測結果與尚未驗證項目。

