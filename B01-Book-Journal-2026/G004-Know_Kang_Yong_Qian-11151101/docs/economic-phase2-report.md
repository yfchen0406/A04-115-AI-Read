# 第二階段｜歷史經濟資料互動儀表板成果報告

日期：2026-10-31

## 完成內容

- 在原經濟資料庫中新增互動儀表板，六指標切換、國家選取、1661–1799 共用年份控制、播放/速度及時期捷徑。
- 使用 Apache ECharts 6.1.0 折線、快照排名長條與兩國比較；人口以來源錨點呈現。排名和差距只在中繼資料允許、同來源與共同觀測年份成立時提供，不插值、不補零。
- 加入歷史事件年代帶，點選可移動年份游標；年代標記不與經濟數據共用尺度，也不暗示事件因果。
- Tooltip 顯示數值、來源、估計性質與原觀測註解；新增六指標方法限制及來源連結。
- 使用清代宮廷金線、宣紙色底與朱紅強調；行動版採單欄控制，尊重 prefers-reduced-motion 與第一階段動畫關閉狀態。
- 完整保留原 SVG 經濟互動、資料檔、時間軸、測驗與第一階段動畫模組。

## 修改檔案

- `index.html`：載入 ECharts、樣式、JS 並加入新儀表板區塊。
- `css/economic-dashboard.css`：新增版面與響應式樣式。
- `js/economic-dashboard.js`：新增圖表與控制功能。
- `data/economic-indicator-metadata.json`：新增每項指標的圖示規則、單位與限制。
- `data/economic-extensions.json`、`data/economic-sources.json`、`data/economic-observations-v2.json`：新增財政總額及 OWID/HYDE 人口來源列、來源登錄及正規化鏡像。
- `js/economic-data-validator.js`、`docs/economic-data-quality-report.md`：可重跑資料檢核及品質報告。
- `tests/economic-dashboard-smoke.test.js`：免外掛互動狀態驗證。
- `docs/economic-phase2-audit.md`：修改前網站盤點與驗收限制。
- `docs/economic-data-methodology.md`：來源、口徑與視覺化方法。
- `docs/economic-phase2-report.md`：本成果報告。

原始 `economic_data.json` 未修改；修改前完整副本位於 `backup-phase2-before-20261031-204707/`。

## 驗收結果

- 新 JavaScript 通過 `node --check` 語法檢查；資料驗證器與互動 smoke test 通過。
- 核對新增 HTML 引用皆對應存在檔案。
- 原始資料為 78 筆觀測、9 個來源，且 `economic_data.json` SHA-256 與修改前備份相同。
- 保留原網站既有六指標程式，新增模組載入失敗時顯示提示並讓原圖仍可用。
- 尚未完成真實瀏覽器與手機人工互動驗收；目前環境缺少瀏覽器自動化套件。Netlify 預覽時應檢查圖表、滑桿播放、選國、tooltip 與行動版排版。

### 第二階段結案補充（2026-10-31）

- Node.js 免外掛 smoke test 通過六指標、七地區選項、財政總額切換、Bar Chart Race、兩國差距、原站年份雙向同步、事件展開，以及人口不可排名狀態。
- 擴充 smoke test 另驗證年份游標裁切圖表點、指定年份跳轉、從頭播放、每步推進及暫停。
- 修正兩國比較圖線原先受多國篩選狀態影響的缺陷；加入取消區域選取後兩條比較線仍保留的回歸檢查。
- 補入西班牙與荷蘭經濟史節點（1765、1772、1795），事件詳情附可追溯來源連結和非因果解讀提示。
- 來源清單增加 Clio Infra 歷史人口候選資料的正式方法與疆界注意事項；下載表格在本次研究工具回應 HTTP 403，故人口沒有未核對地擴充。
- 另記錄 OWID 洲際貿易人均代理與 LSE WP210 的底層來源及覆蓋限制；CSV 不可取得，故保留為候選而不臆測補值。
- 補充 OWID 長期人口資料中繼與現代邊界限制：1799年前採 HYDE 3.3，但本次不能讀取下載檔，未擴充觀測值。
- 資料品質檢查最終為78筆原始列、82筆有來源的擴充列、160筆正規化觀測、0重複鍵、0其他錯誤；11筆1800年觀測超出網站1661–1799範圍，保留並排除於目標時段顯示。
- 移除本次新增標籤後，首頁 HTML 與修改前版本逐字相同；原始經濟 JSON SHA-256 與備份一致。
- 真實瀏覽器、行動裝置及 Netlify 預覽仍待人工驗收；本次未宣稱已完成部署或實機驗收。

## Netlify 部署

將本資料夾根目錄設為 Netlify 發布目錄，保留 `index.html`、`economic_data.json`、`data/`、`images/`、`css/`、`js/`。不需建置指令。新版依賴網路載入 ECharts 6.1.0 CDN，資料使用相對路徑 fetch；以 Netlify URL 或本機 HTTP 預覽。若需離線使用，須將 ECharts 發行檔放入站內並改為相對引用。

## ZIP

部署 ZIP：`qing-web-phase2.zip`。壓縮內容不含兩份備份資料夾，以免把備份部署上站。

## 後續完整性補充

### OWID/HYDE 人口序列增補（2026-10-31）

- 從 OWID 官方指標 API 953903 配對 `entities`、`years`、`values`，新增70筆人口重建估計：中國及英國、法國、荷蘭、西班牙、俄羅斯、美國，以1700–1790每十年錨點呈現。
- HYDE 3.3 估計以現代國家疆界回溯；中國資料不代表清朝疆域，美國資料不代表十三殖民地。原有1776殖民地估計和1790美國普查保留，三種口徑皆不跨系列連線、排名、算差距或成長率。1661–1699維持缺值。
- 原始 `economic_data.json` 未改動，SHA-256 仍為 `c5aed2572648af134a0734df68f9c08ec2e799475c99f1893e87c29872c4e503`；擴充側錄總數從12筆增加至82筆，正規化資料共160筆，0重複鍵、0缺來源／單位／無效值，11筆原始1800資料仍標為超出期段。
- 更新人口指標說明、來源登錄、品質報告及儀表板國家篩選；人口 Bar Chart Race 維持關閉。人口回歸 smoke test 與 dashboard smoke test 通過，兩個 JS 模組通過語法檢查。
- 真實瀏覽器人工互動、手機裝置及 Netlify 預覽仍待驗收；本機預覽頁在目前瀏覽器環境無法連線，故未宣稱完成畫面驗收。

- 財政指標增添可切換的12筆中央政府總收入估計（LSE WP152/11 表一），人均收入原始12筆仍留存；新增序列在 `data/economic-extensions.json`，未改動 `economic_data.json`。
- 新增 `data/economic-sources.json`（作者、版本、地理範圍、估算方法與候選未匯入研究）、`data/economic-observations-v2.json`（90筆正規化鏡像）及可重跑的 `js/economic-data-validator.js`。
- 儀表板支援七個目標地區控制、缺資料禁用狀態、折線/Bar Chart Race/兩國比較、同口徑差距與成長率限制、歷史事件細節與事件清單、指定年份跳轉和從頭播放。
- 儀表板與原站 `worldYear` 雙向同步；既有世界年表與新圖共用1661–1799年份值。
- 新增 MPD 2023 與 TOFLIT18 來源紀錄，但未把未存檔或未核對的數列當作已觀測資料；一般商品進出口值仍缺失，SlaveVoyages 保留為獨立奴隸貿易人數專題。
