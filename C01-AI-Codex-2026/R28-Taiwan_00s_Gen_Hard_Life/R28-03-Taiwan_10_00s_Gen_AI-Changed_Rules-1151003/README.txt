# 台灣九年級生第 3 集｜AI 改掉的規則｜同步劇本網站

此網站沿用 A58 第 1 集已驗證的版型，並以第 3 集 Excel 時間碼為分鏡唯一來源。原始旁白 MP3 完整保存在 source/；播放版以原音等速重新編碼為可精確 seek 的 CBR MP3，沒有裁切或改寫語句，播放速度固定 1.0×；字幕取自原始 SRT，所有圖片、章節、字幕、播放器影格與滑桿都依同一絕對時間定位。

## 直接觀看

開啟 offline-site/index.html。網站資料、音訊、封面與圖片都使用相對路徑，不需安裝套件或啟動伺服器。按「開始同步閱讀」進入播放器。

## 專案建置

建置環境需要 Node.js、Python 3、openpyxl、Pillow、Remotion 與 Playwright。第三集原始 Excel、MP3、SRT 保存在 source/。原始 Excel 共 178 鏡；依使用者指示，播放版排除第 17 章「資料查核備註｜官方資料來源」，因此目前包含 001–167 共 167 鏡。正式分鏡圖來源是 A60 根目錄的 webp_images/Qwen_image_2.1_00001.webp 至 Qwen_image_2.1_00167.webp；執行 python scripts/build_images.py 會依編號轉成 WebP 播放素材，來源圖保持不變。

重新產生 Excel/SRT/MP3 時間軸與來源複本：python scripts/build_timeline.py。結構檢查：python scripts/validate_timeline.py。正式網站建置及離線資料夾打包腳本見 package.json。

## 內容與連結

- 首頁封面使用 R028-03G-cover.webp，維持原始比例。
- 第 3 集播放版有 167 個圖片槽位；正式分鏡美術尚未提供時顯示「圖片待補」。原始 Excel 的第 17 章及其語音、字幕、圖片已從播放版排除。
- 首頁 YouTube 按鈕已連結字幕版（dJWW9MQvCE8）與無字幕版（aCIkGQNz88Y）；網址設定於 src/data/config.json。
- reports/timeline-validation.json 記錄 Excel、字幕、音訊長度及槽位檢查；reports/chapter-index-browser-qa.json 記錄離線章節逐項檢查；reports/scene-image-qa.json 記錄圖片素材狀態。

## 時間軸備註

原始 Excel 與 SRT 共 178 鏡、18 章，原始 MP3 保存在 source/ 且不變更。播放版在第 17 章起點 1,463.789 秒結束，包含 167 鏡、17 章和對應字幕；播放 MP3 在此時間點裁切，固定 1.0×，沒有變速。Excel 中保留鏡頭原有時間碼與間隔。
