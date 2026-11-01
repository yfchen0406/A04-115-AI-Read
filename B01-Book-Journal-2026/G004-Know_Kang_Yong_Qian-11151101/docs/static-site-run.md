# 靜態網站使用說明

本網站是純靜態 HTML、CSS、JavaScript 與 JSON／GeoJSON 檔案，不需要伺服器端程式或建置步驟。

ZIP 根目錄另附 `README-先看這裡.txt`，列出最簡單的本機開啟步驟。

## 在 Windows 本機預覽

1. 解壓網站 ZIP，保留 ZIP 根目錄內的所有資料夾與檔案。
2. 雙擊 `start-local-site.cmd`。它會使用已安裝的 Python 3 啟動本機 HTTP 靜態伺服器並開啟瀏覽器；預設網址為 `http://127.0.0.1:8765/`。如該連接埠已被使用，可將另一個連接埠號碼作為啟動器參數，例如 `start-local-site.cmd 8766`。
3. 預覽結束後，關閉「清代歷史網站本機伺服器」命令視窗即可停止伺服器。

若尚未安裝 Python，可使用 VS Code Live Server，對網站根目錄中的 `index.html` 執行 Open with Live Server。不要直接雙擊 `index.html`：`file://` 會讓瀏覽器封鎖年表、地圖索引與 GeoJSON 的讀取；頁面會顯示提醒，但資料與互動地圖不會完整載入。

## 放到自己的網站

1. 解壓網站 ZIP。
2. 將 ZIP 根目錄中的 `index.html`、`economic_data.json`，以及 `css/`、`js/`、`data/`、`images/` 資料夾一併放到網站主機的同一個目錄。可以放在網域根目錄，也可以放在例如 `/qing-history/` 的子目錄。
3. 保持資料夾名稱與相對路徑不變，然後以 `https://你的網域/` 或 `https://你的網域/qing-history/` 開啟。

網站以相對路徑載入資料，因此支援放在子目錄。

## 網路需求

互動地圖需要連線載入 MapLibre GL JS、GSAP、ECharts、OpenFreeMap 地圖樣式與地圖圖磚。若主機設定內容安全政策（CSP），需允許本頁所引用的 CDN、`tiles.openfreemap.org` 及相關 OpenStreetMap 資源。離線使用時，歷史文字仍在頁面檔案內，但底圖與 CDN 函式庫可能無法顯示。OpenFreeMap 公用底圖目前免費且沒有瀏覽／請求數上限，但服務不保證可用性或 SLA；其離線下載條件為每次最多 3,000 tiles 或 50 MB、最多 4 個並行請求及唯一識別 User-Agent。

## 放置後檢查

- 開啟網站網址，確認主頁和圖片可載入。
- 確認 `data/historical-map-index.json`、`data/maps/historical-events.geojson` 等資料網址回應成功。
- 歷史政體多邊形位於 `data/maps/historical-polities.geojson`，依年份及地圖模式篩選；畫面中的政體範圍標示為低信度且部分覆蓋，需搭配來源註記閱讀。
- 確認瀏覽器未因 CSP、跨來源或 MIME 類型設定阻擋 JavaScript、JSON、GeoJSON 或地圖圖磚。
- 第三階段「全球歷史同步時間軸」同時顯示互動地圖預覽與事件文字年表；第四階段提供完整圖層切換、雙地圖比較及全螢幕控制。兩處地圖共用年份、事件與國家篩選。
- 第五階段的場景資料 `data/historical-scenes.json` 與來源索引 `data/historical-scene-sources.json` 也需與網站同目錄保留。場景按鈕可連動第三階段年份及第四階段事件／路線；Met 原畫影像、MapLibre 圖磚及現有 CDN 套件需要網路。

本網站沒有在本工作中上傳至任何代管平台；以上是供你放入自己網站目錄的靜態檔案說明。

## 畫面寬度

網站主內容隨視窗全寬延伸；第四階段互動地圖面板採左右滿版，地圖畫布依視窗寬度伸展。一般閱讀內容在邊緣保留窄幅間距，避免文字貼齊螢幕。
