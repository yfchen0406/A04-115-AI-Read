# 《念奴嬌·赤壁懷古》動態劇本閱讀

## 直接開啟

1. 將 ZIP 解壓到任意資料夾。
2. 雙擊根目錄的 `index.html`，即可開啟首頁。
3. 按「開始閱讀」進入播放器；再按播放器封面上的播放鈕開始唯一的 MP3 旁白。
4. 章節索引、滑桿、字幕、圖片與章節標題都從 Excel 產生的共同時間軸讀取。播放速度固定為 1.0 倍。

網站使用傳統相對路徑 JavaScript，不呼叫本機 JSON `fetch`、外部 CDN 或網路字型。首頁封面、MP3、圖片與樣式都在 ZIP 內。

## 替換圖片

- 首頁封面：以同尺寸比例的 WEBP 覆蓋 `assets/images/cover.webp`。
- 分鏡圖：以新的 WEBP 覆蓋 `assets/images/IMG001.webp` 至 `IMG022.webp` 中對應檔案。
- 保留原檔名與相對路徑，時間軸與程式不需修改。正式插圖的內容與提示詞吻合度仍應另行人工檢視。

## 修改 YouTube 連結

根目錄 `index.html` 的 `window.EPISODE_SETTINGS.links` 區塊集中設定兩個 YouTube 網址；目前是暫時入口 `https://www.youtube.com/`，各有 TODO 註記。替換網址時保留兩個欄位名稱。

## 時間軸與字幕來源

- `source/念奴嬌·赤壁懷古_12至15秒_日式卡通中國山水_完整分鏡.xlsx` 是鏡頭與章節時間的核定來源。
- `source/narration.srt` 是原字幕文字及字幕起訖來源。
- `assets/audio/narration.mp3` 是唯一播放器音訊。
- `data/timeline.json` 為統一結構；`data/timeline-data.js` 是同資料的靜態頁面載入版，讓 `file://` 不需讀取 JSON。
- 原詞字幕（SRT001、SRT011–018、SRT028、SRT033）以亮黃色顯示；解說字幕仍為白色。
- 章節按鈕目前依 SRT 該章第一個字幕起點定位；第一章 SRT 起點比 Excel 第一鏡晚 1.500 秒。這是依字幕時碼的暫定定位，不代表已聽辨實際第一個字。

## 重新產生資料與圖片

此精簡 ZIP 不包含原始 Excel、SRT 或 PNG。若要重建時間軸，請在原始 A103 製作資料夾使用 `tools/build_data.py`，再將更新後的 `data/timeline.json` 與 `data/timeline-data.js` 放回網站。MP3 或來源字幕變更後，需重新核對時長與逐句同步。

## Remotion 原始專案

`remotion-src/src/ReadingComposition.tsx` 是可編輯的畫面、Ken Burns、章節提示與字幕組合；它引用根目錄的同一份 `data/timeline.json`，並從 `../assets` 共用網站的圖片與 MP3，不重複封裝媒體。Remotion 固定 30 fps，幀轉毫秒採 `Math.round(frame * 1000 / fps)`。

需先在可連網的建置環境安裝 Remotion 套件：

```powershell
cd remotion-src
npm install
npm run studio
npm run render
```

網站的雙擊播放不需要安裝 Node、Remotion 或啟動伺服器。MP4 不包含在本包內。
