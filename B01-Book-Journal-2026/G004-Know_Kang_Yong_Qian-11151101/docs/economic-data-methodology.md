# 經濟指標資料與視覺化方法

版本日期：2026-10-31

## 資料原則

新增互動圖直接讀取原站 `economic_data.json` 的 78 筆觀測，不改變數值或逐筆來源。`data/economic-indicator-metadata.json` 是供新版呈現使用的描述性中繼資料，記錄單位、圖形規則、來源鍵與解讀限制。

- 只呈現來源檔中的觀測年份，不插值、不外推、不把缺值當零。
- tooltip 顯示來源名稱、資料性質、逐筆註解及原始連結。
- 共同年份滑桿與播放器是閱讀定位工具，不代表每一項指標都有逐年資料。
- 歷史事件定位年代，不表示事件與數值間存在因果關係。
- 排名僅在同一資料版本、地理定義、單位、時期定義與共同觀測年份可比時提供；否則顯示不可排名，並保留各自資料序列。

Apache ECharts 官方網站在改版日期標示 6.1 已發布；官方手冊列出 jsDelivr、unpkg 與 cdnjs 為可用 CDN，本版採官方建議的 CDN 引用方式：[Apache ECharts 官方首頁](https://echarts.apache.org/en/index.html)、[CDN 安裝說明](https://echarts.apache.org/handbook/en/basics/download/)。

## 六項指標

### 人口

原檔僅有 1776 年英屬北美十三殖民地估計與 1790 年美國普查。兩者的疆域定義與資料收集方法不同，圖上按地區顯示兩個獨立點，不連線、不排名。1790 普查包含被奴役人口；普查數並非今日人口概念下完整的社會人口記錄。美國人口普查局的殖民地人口敘述與首次普查歷史頁提供脈絡：[1790 年首次普查](https://www.census.gov/about/history/historical-censuses-and-surveys/decade-facts.1790.html)、[殖民時期人口估計](https://www.census.gov/library/stories/2023/12/boston-tea-party.html)。

### 人均 GDP

採原檔 Cambridge 表 i.1 中 1700、1750、1800 的 1990 國際元錨點。該資料是回溯重建值，1800 年超過本網站 1799 年終點。新版不併入 Maddison Project Database 2023 等其他版本，避免購買力基準、國界與估算方法混用。原始表格可見 [Cambridge Economic History of the Modern World 卷一摘錄](https://assets.cambridge.org/97811071/59457/excerpt/9781107159457_excerpt.pdf)。中國早期 GDP 研究存在學術爭論，應將數值視為研究估計，而非精確普查：[Broadberry、Guan、Li 的修訂研究](https://www.cambridge.org/core/journals/journal-of-economic-history/article/china-europe-and-the-great-divergence-a-restatement/CFE6E6B70578ECF5BD22A17617FC73C8)。

### 城市化

採 Bairoch 所列至少 5,000 人城市估計區間的中點。資料只包含英國、法國、荷蘭、西班牙及俄羅斯，沒有清朝同口徑列；不作中西跨文明排名。點的註解保留原估計範圍。原始書目連結由原站資料列提供。

### 財政

採 Ma 等研究表 2 的每人中央政府收入克白銀值，對應 1700–1749 和 1750–1799 兩個 50 年平均。原檔以 1725 和 1775 作區間中心標記，圖面標明為區間資料；不能解讀為單年觀測、地方全部稅負或福利指標。來源：[LSE Working Paper 152](https://www.lse.ac.uk/asset-library/information/wp152.pdf)。

### 跨大西洋強迫運奴專題

原檔 trade 類列實為 SlaveVoyages 按旗國整理的 25 年區間強迫登船人數估計。新儀表板以描述性標題清楚揭示其性質，保留零值，且不稱為貨物貿易總額或經濟發展成績。旗國不等於美洲殖民地所有權。來源：[SlaveVoyages Estimates](https://www.slavevoyages.org/assessment/estimates)。

OWID 另有「Historical intercontinental trade per capita, 1500–1800」殖民／洲際貿易人均代理，單位為1700年價格英鎊；底層來源包括 Allen、Costa/Palma/Reis，以及法國與荷蘭另行換算的終點估值。它不是完整進出口總額，且不覆蓋清朝、俄羅斯及美洲殖民地。圖表 CSV 在本次研究工具回應不可存取，因此列為候選來源，未擷取數值；參考[OWID 圖表](https://ourworldindata.org/grapher/intercontinental-trade-per-capita-1500-1800)及[LSE Economic History WP210](https://www.lse.ac.uk/Economic-History/Assets/Documents/WorkingPapers/Economic-History/2014/WP210.pdf)。

### 工業化代理

原檔記錄英國生棉留存進口量，早期與後期來自不同歷史編纂。新圖將兩個 country 標籤視為獨立線，明示後期虛線，不跨兩種來源連線。原料進口量是紡織需求代理，不是產值、勞動生產力或工業化綜合指數。來源：[CFR Project 歷史資料集](https://www.cfrproject.com/en/datasets/dataset%3Agb-raw-cotton-retained-imports-1697-1849)；[Encyclopaedia Britannica 8th ed. Cotton Manufacture](https://jimclifford.ca/britannica-articles-4/a/EB.16/193109114/838.html)。

## 技術

- Apache ECharts 6.1.0 從 jsDelivr CDN 載入；資料以 JSON `fetch` 讀取，因此 Netlify 靜態站可直接部署，`file://` 直接開啟不支援 fetch。
- 原本經濟 SVG 與其 inline 腳本完整保留；新版使用 `js/economic-dashboard.js`、`css/economic-dashboard.css`、`data/economic-indicator-metadata.json`。
- 圖表使用 canvas、內建縮放、resize 監聽、切換指標重繪及 pagehide 銷毀；支援系統 prefers-reduced-motion 與第一階段 HTML `qing-motion-off` class。
- ECharts CDN 無法載入或 JSON fetch 失敗時，新區塊顯示錯誤訊息，原有經濟互動不依賴此模組，仍可使用。

## 來源待辦

原始檔內的 HYDE/OWID 來源登錄目前沒有對應完整人口觀測。Clio Infra 官方 Total Population 頁提供 1500–1800 年每50年資料，主要採現代國界回溯，另列 England 歷史疆界序列；下載 Compact workbook 回應 HTTP 403。OWID 長期人口頁說明1799年前採 HYDE 3.3，資料頁則明確標示國家人口依現代地理疆界；其資料下載端點在本次研究工具不可讀。兩者均列為候選，不將現代中國疆界等同清朝疆界，也不將現代美國疆界等同十三殖民地。須取得並存檔版本化原檔、核對國界與研究版本、記錄授權及欄位對照後，才可新增獨立人口版本。來源：[Clio Infra](https://clio-infra.eu/Indicators/TotalPopulation.html)、[OWID Population data](https://ourworldindata.org/grapher/population)。

## 第二階段完整互動補充（2026-10-31）

- 原本六指標之外，依 LSE WP152/11 表一單獨匯入12筆中央政府年度收入總額估計，存放在 `data/economic-extensions.json`；財政頁可切換「人均收入」與「中央收入總額」，兩種單位不共用同一序列。表一列出1700–1749與1750–1799均值、英格蘭及荷蘭共和國地理，以及中國銀兩換算備註：[Debin Ma, LSE WP152/11 表一與表二](https://www.lse.ac.uk/asset-library/information/wp152.pdf)。
- 國家控制器顯示七個目標地區；來源缺資料的地區顯示為停用並附原因。美洲殖民地、1790美國、英格蘭、大不列顛與旗國類別仍依來源定義分開顯示。
- 歷史事件包含清朝、英國、法國、俄羅斯及北美重要政治與經濟節點；圓點與可讀事件清單皆可點選，並同步共用年份控制器。
- 網站既有 `worldYear` 與新儀表板年份採雙向同步。年度滑桿、播放/暫停、從頭播放、1/2/4年每步、輸入年份、帝王時期捷徑和事件點選皆以1661–1799同一年度值更新兩個介面。
- 新增折線、Bar Chart Race 快照及兩國比較模式。只有中繼資料標明同版本、同單位及共同觀測年份的指標才會計算差距；50年財政均值和25年 SlaveVoyages 區間總數不提供年均複合成長率。人口及跨來源工業代理不會顯示誤導性的兩國差距。
- 未匯入的 MPD 2023 GDP 或一般法國商品進出口額列為 research references。MPD 官方資料頁提供資料下載、版本及歸因條件；TOFLIT18 為候選交易資料。沒有存檔和複核的序列不會被填成圖表數值。

