# 第三階段｜全球歷史同步時間軸成果報告

日期：2026-11-01

## 原專案功能盤點與驗收邊界

| 項目 | 實際盤點 | 本階段處理／驗收證據 |
|---|---|---|
| 第一階段原首頁 | 單頁 HTML；內嵌三帝章節、16筆舊事件、測驗、世界比較與舊 SVG 經濟圖；`#timeline`、`#events`、`#eraTabs` 保留 | 原有事件卡點擊、Enter／空白鍵展開及三帝篩選以 VM DOM 模擬回歸，見 `tests/original-timeline-smoke.test.js`；原始內容另以第三階段備份比對 |
| 第一階段動畫 | `css/qing-animations.css`、`js/qing-animations.js`；GSAP 3.12.5 與 ScrollTrigger 由 CDN 載入 | 模組與切換偏好 smoke test 通過；本次未完成實際瀏覽器畫面驗收 |
| 第二階段儀表板 | `js/economic-dashboard.js`、`css/economic-dashboard.css`、Apache ECharts CDN；資料及來源在 `economic_data.json`、`data/` | 六指標、國家控制、圖表重用及清理由儀表板 smoke test 覆蓋；原始 `economic_data.json` 未修改 |
| 第三階段同步模組 | `js/historical-time-controller.js`、`js/historical-events.js`、`js/historical-map-adapter.js` 及三地事件 JSON | 控制器、事件生命週期、資料、舊時間軸相容與經濟儀表板各有自動檢查 |
| 行動版與部署 | 靜態單頁架構、viewport meta、三個 CSS 樣式表；CDN 函式庫需網路 | 靜態斷點與 ZIP 內容已檢；未部署 Netlify，且電腦／平板／手機實際版面未驗收 |

本目錄沒有 Git repository，故開發前以完整檔案副本 `backup-phase3-before-20261101-090000/` 保存基線。上述 VM smoke test 是互動程式回歸證據，不代表實際瀏覽器渲染或觸控裝置驗收。

## 開發前盤點與保護

| 現有模組 | 修改前實作 | 第三階段整合 |
|---|---|---|
| 第一階段歷史時間軸 | `#timeline`、`#events`，原有皇帝分頁和點開事件 | 保留 DOM 與內容；新增全站年份控制和獨立的三地年表 |
| 中西世界比較 | inline `world-interactive` 使用 `#worldYear`、本地計時器及前後十年事件卡 | `#worldYear` 保留為相容輸入鏡像，停止自有計時器，接入共用時鐘 |
| 第二階段經濟圖表 | ECharts 實例、`data-ed-year`、跳轉、排名、比較、來源與限制 | 原實例及互動保留；年份改訂閱共用狀態，國家篩選送入共用狀態 |
| 第一階段舊經濟圖 | inline SVG、獨立 1700–1800 年滑桿與播放計時器 | 保留圖表及資料，只把年份範圍改為 1661–1799 並由共用時鐘更新 |
| GSAP／ScrollTrigger | `qing-animations.js` 與動畫開關 | 保留；新增年份標籤 GSAP 強調、事件卡柔和進場及降低動態支援 |

修改前副本：`backup-phase3-before-20261101-090000/`，包括首頁、原始資料、CSS、資料、圖片、JavaScript、文件與測試。專案無 Git repository，故採完整檔案備份。

## 完成內容

- 新增唯一 `currentYear` 核心，範圍 1661–1799、逐年精度、前後一年、端點跳轉、指定年份、播放／暫停、1/2/4 倍速度，以及播放結束停止或重新播放。
- 新增公開 `window.HistoricalTimeController`：`getCurrentYear()`、`setCurrentYear(year)`、`play()`、`pause()`、`setPlaybackSpeed(speed)`、`subscribe(callback)`、`unsubscribe(callback)`、`destroy()`、`getSnapshot()` 與篩選狀態介面。年份與地圖更新事件為 `historicalyearchange`、`historicalmapupdate`。
- 原世界年表、舊經濟 SVG、新 ECharts 儀表板及第三階段控制台共用年份。改變任一現有年份滑桿、世界年表快速跳轉、經濟圖表事件標記或重要年份事件時，其他模組同步更新。
- 新增清朝、歐洲、美洲三欄事件卡，提供精確年度、可核日期、地區／政權、背景、分類、人物和可點來源；支援十類多選篩選、搜尋、清除篩選、相鄰一年顯示與19個重要年份跳轉。1722、1735兩次交替均分別記錄去世及即位／詔告日期，另記年號元年，避免混成同一日期。
- 1722、1735 標示皇位交替年；1661–1721為康熙、1723–1734為雍正、1736–1795為乾隆、1796–1799為嘉慶在位且乾隆為太上皇。年度資料不假裝可判斷交替日。
- 經濟資料新增「原始資料點」預設模式及「最近已知資料」模式。後者只取所選年份以前每個資料系列的最近一個實際記錄點，保留圖上原年份並顯示與游標距離。估計／插值選項目前停用，因現有來源未提供可重現的逐年模型；不虛構插值值。
- 新增 `HistoricalMapAdapter` 與全域 `updateHistoricalMap(year, selectedRegions)`；載入時以共用控制器快照初始化，可讀取、訂閱並更新標準 `currentYear`、選取國家／地區、事件及圖層顯示狀態，並保留 `year` 相容別名。本階段只提供接線介面，不繪製疆界。
- 年份標籤與同步事件卡以 GSAP 的 transform／opacity 做短暫進場；動畫切換事件會立即清除事件卡動畫狀態；依康熙、雍正、乾隆、嘉慶和交替年切換柔和配色。尊重第一階段動畫開關與 `prefers-reduced-motion`。
- 舊經濟 SVG 的年份軸已改對應 1661–1799；修正頁面原有人口說明，使其符合已加入的 OWID/HYDE 序列與統計疆界限制。

## 新增與修改檔案

- `js/historical-time-controller.js`：共用時鐘、播放、狀態 API 與對舊滑桿的相容接線。
- `js/historical-events.js`、`data/historical-events.json`：三地事件面板與23筆有來源事件資料。
- `js/historical-map-adapter.js`：第四階段地圖更新介面與狀態訂閱器。
- `css/historical-timeline.css`：宮廷風格、時期色彩與行動版三欄佈局。
- `js/economic-dashboard.js`：改訂閱共用年份、同步國家選擇、最近已知資料顯示。
- `index.html`：加入同步年表、導航項目和資料模式選擇；保留原章節及圖表資料。
- `tests/historical-time-controller.test.js`、`tests/qing-animations-smoke.test.js`、`tests/historical-events-data.test.js`、`tests/historical-events-smoke.test.js`、`tests/historical-events-lifecycle.test.js`；擴充 `tests/economic-dashboard-smoke.test.js` 驗證共用控制器、動畫偏好、事件面板與儀表板連動。
- `tests/original-timeline-smoke.test.js`：執行舊首頁 inline 腳本，驗證原16筆事件、滑鼠與鍵盤展開，以及三帝篩選和 ARIA 選取狀態。
- `docs/timeline-data-methodology.md`：事件、日期與經濟資料顯示口徑。

## 驗收結果

- `node tests/historical-time-controller.test.js` 通過：年份上下界、1722／1735交替年、嘉慶時期、世界與舊經濟滑桿、重要年份按鈕及前後一年同步、1/2/4速度、終點停止／循環、播放／暫停後全域與舊模組按鈕文字及 ARIA 狀態同步、地圖介面由非預設共用年份初始化、年份／區域同步，以及每次地圖狀態變更只通知訂閱者一次。
- `node tests/qing-animations-smoke.test.js` 通過：動畫預設值與已儲存設定、開關持久化、捲動位置保留、ARIA 狀態及系統降低動態即時變更。
- `node tests/historical-events-data.test.js` 通過：23筆事件、三地分類、10種事件類別、來源連結、日期年份一致、19個指定重要年份、頁面載入檔案及原世界年表快速跳轉接入共用年份。
- `node tests/original-timeline-smoke.test.js` 通過：舊首頁16張事件卡全數產生；點擊、Enter、空白鍵可切換明細；康熙6筆、雍正3筆、乾隆7筆篩選正確，且更新 `aria-expanded`／`aria-selected`。此為舊功能程式回歸，不替代實際瀏覽器測試。
- `node tests/historical-events-smoke.test.js` 通過：三欄事件渲染、空資料提示、19個跳轉、相鄰年實際年份標示、單類／多類篩選與清除、搜尋、跳轉共用年份與取消訂閱；另以延遲載入重現地圖先切換地區、事件 JSON 後載入的時序，確認地區狀態保留。
- `node tests/historical-events-lifecycle.test.js` 通過：資料尚在載入時觸發離頁銷毀，確認晚到資料不渲染、不建立年份訂閱，地圖及動畫監聽器也已移除。
- `node tests/original-timeline-smoke.test.js` 通過：舊首頁16筆事件卡正常產生，點擊、Enter、空白鍵可切換詳細內容；康熙6筆、雍正3筆、乾隆7筆篩選與 ARIA 狀態皆正確。
- `node tests/economic-dashboard-smoke.test.js` 通過：原有六指標、七地區篩選、財政序列、排名、兩國比較、年份雙向同步、全域4倍速度由儀表板播放／重播沿用、圖表直接點選事件同步共用年份，以及年份變更沿用單一 ECharts 實例；另驗證最近已知資料限制、事件來源與人口不可排名狀態。
- 新增 JavaScript 模組及經濟儀表板通過 `node --check`。
- 第一、二階段完整副本已建立；原始 `economic_data.json` 未修改。
- 事件面板依選取年份顯示當年事件；使用者可選擇納入前後各一年，卡片保留實際年份。這是可切換年份視窗，不是完整事件檔案列表。
- 以第三階段備份逐檔比對22個原始檔案：只有首頁、經濟儀表板、動畫模組與對應 smoke test 按本階段需求變更；原始56個 HTML `id` 全保留，五張原始圖片 SHA-256 均相同。
- 靜態行動版檢視確認首頁含 viewport meta；主頁、全球年表、經濟儀表板分別有 720px、760px、650px 斷點，三地年表改單欄，既有比較表可橫向捲動，五張原圖檔案簽章有效。這些是原始碼及檔案檢查，不等同手機、平板瀏覽器實機驗收。
- 共用時鐘、事件面板與地圖介面均提供清理訂閱／監聽器的銷毀流程；地圖介面回推年份與地區篩選採單次狀態更新。
- 實際瀏覽器畫面、觸控裝置與版面驗收尚未完成：目前工作環境未提供可用桌面瀏覽器、Playwright／Puppeteer，且沒有可用的本機預覽監聽服務；先前 `127.0.0.1:5501` 是另一個網站且此專案路徑回應404。`file://` 預覽受瀏覽器政策限制，未以其他途徑繞過。使用者已說明目前不需要 Netlify 預覽或部署，本階段未部署。

## 驗收狀態總表

| 驗收範圍 | 狀態 | 證據與界線 |
|---|---|---|
| 1661–1799逐年、端點、播放、暫停、速度與重播 | 自動測試通過 | `historical-time-controller.test.js` 驗證範圍、控制器、播放邊界及訂閱更新。 |
| 皇帝時期及1722／1735交替年 | 自動測試通過 | 控制器時期對照及事件資料日期斷言；年精度交替年明確標示。 |
| 清朝、歐洲、美洲事件、篩選、搜尋與跳轉 | 自動測試通過 | 資料完整性與 smoke test；涵蓋延遲 JSON 載入時的地圖區域狀態同步。 |
| 六項經濟指標、國家選擇、比較、最近值及事件連動 | 自動測試通過 | 儀表板 smoke test 驗證控制器連動、全域播放速度沿用、資料顯示、圖表事件跳轉及單一 ECharts 實例更新。 |
| 未來地圖狀態介面 | 自動測試通過 | 控制器測試驗證以共用快照初始化、年份與地區回推、狀態讀寫及變更通知去重。 |
| 動畫開關與系統降低動態 | 自動測試通過 | 動畫 smoke test 驗證儲存偏好、即時切換、捲動位置保留及作業系統動態偏好變更。 |
| 事件面板非同步載入與銷毀 | 自動測試通過 | 延遲 JSON 測試驗證離頁後忽略晚到回應，並清理事件面板監聽器。 |
| 第一、二階段原始內容保護 | 檔案比對通過 | 備份核對：56個既有 HTML id 全保留、5張圖片 SHA-256 相同、原始 `economic_data.json` 未變。 |
| 網頁載入與行動版呈現 | 尚未完成實機驗收 | 原始碼含 viewport、響應式斷點及窄版三欄轉單欄規則；此項靜態檢視不能證明桌機或手機瀏覽器實際呈現。 |
| 靜態網站 HTTP 資產交付 | ZIP 逐檔比對通過；HTTP 實際載入未驗證 | ZIP 內靜態檔案與工作目錄逐項 SHA-256 相同；因沒有可用本機 HTTP 驗收服務，不能宣稱瀏覽器成功載入入口與 fetch 資料。 |
| Netlify 部署 | 依使用者指示未執行 | 使用者目前不需要部署或預覽網址；部署成功不在本次已驗收結果內。 |

因此，程式與資料自動驗收通過，交付包與原始資料保護檢查通過；瀏覽器實際畫面驗收仍是整體階段結案前的未完成項目。

## 靜態網站使用方式

網站仍是無建置步驟的靜態頁面。本機預覽請以 HTTP(S) 方式提供網站；經濟與事件 JSON 使用相對路徑 `fetch`，直接開啟 `file://` 無法載入。若日後部署 Netlify，將本專案根目錄作為發布目錄，不需建置指令，並保留 `index.html`、`economic_data.json`、`data/`、`css/`、`js/`、`images/`。GSAP、ScrollTrigger、ECharts 使用 CDN，載入時需要網路。部署 ZIP 為 `qing-web-phase3.zip`。目前只產生可部署套件，不代表已部署或完成人工畫面驗收。
