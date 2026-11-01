# 第三階段｜時間軸資料與同步方法

更新日期：2026-11-01

## 年份狀態與資料呈現

`HistoricalTimeController` 是頁面唯一的年份狀態來源，整數範圍為1661–1799。原有 `#worldYear`、舊圖 `#econYear`、ECharts `data-ed-year` 與第三階段滑桿只作為輸入／顯示介面，不各自推進時間。時鐘透過 `historicalyearchange` 更新事件、經濟模組和時期標籤，並透過 `historicalmapupdate` 發送地圖介面狀態。

播放以每秒一次為基本節拍，1、2、4倍分別每節拍加1、2、4年。預設播至1799停止，可切換為從1661重新播放。所有年份輸入都裁切在目標範圍。

經濟資料模式：

1. **原始資料點（預設）**：只呈現資料庫已有且不晚於游標年份的實際觀測。
2. **最近已知資料**：每個所選國家／資料系列各取不晚於游標年份的最新觀測；資料點仍放在實際觀測年份，並明示距游標年數。
3. **研究估計／插值**：目前停用。現存資料沒有提供一致、可核對的逐年估計方法及不確定區間；不以線性插值或複製數值補缺。

歷史事件年份標記不代表事件造成經濟數據變化。事件與經濟資料仍各自保留來源、單位及估算限制。

## 皇帝時期判定

年資料分段為：康熙1661–1721、雍正1723–1734、乾隆1736–1795、嘉慶1796–1799（乾隆仍為太上皇）。1722和1735顯示「皇位交替年」。年號改元年另有說明：康熙即位年1661與康熙元年1662不同；雍正、乾隆改元亦非即位同年。無日級資料時，系統不判斷交替年內哪一天屬於哪位皇帝。

## 事件資料結構

`data/historical-events.json` 每筆事件包含：`id`、`year`、`date`、`datePrecision`、`dateNote`（有需要時）、`region`、`country`、`title`、`background`、`category`、`people`、`sourceTitle`、`sourceUrl`。`date` 儲存可核日期；若歷史來源有不同曆法或日期涵義，使用 `dateNote` 解釋，沒有足夠依據時只記年份。

俄清《尼布楚條約》日期尤其需註明曆法：俄羅斯總統圖書館將日期並列為俄曆1689年8月27日與格里曆9月6日，資料採格里曆日期並保留俄曆說明。英格蘭《權利法案》標為1689年12月，而非虛構單一日。美國《獨立宣言》採美國國家檔案館所述1776年7月4日通過日；《巴黎和約》採1783年9月3日簽署日。

1722年拆分為康熙帝於12月20日去世、雍正帝於12月27日發布即位詔告；後者記的是詔告日期，資料不把它錯寫成康熙去世日。1735年依清曆與公曆日期拆分雍正去世（雍正十三年八月二十三日／公曆10月8日）及弘曆即位（九月初三日／公曆10月18日）；乾隆年號元年仍是1736年。1796年禪位日期採公曆2月9日（嘉慶元年正月初一）；1799年乾隆去世採2月7日。瓦特專利卡片以專利說明書日期1769年1月5日為事件日期，另註登記日期為4月29日。鰲拜逮捕日期目前只標到1669年6月，不推定日。

事件覆蓋著重目標列出的19個快速跳轉年份，目前有23筆事件。空白年份或地區顯示資料庫未收錄提示，並提供 ±1 年相鄰事件切換；卡片仍顯示實際發生年份。此資料不是完整的1661–1799全球事件全集。

## 分類

政治制度、戰爭與軍事、科學技術、工業發展、財政經濟、國際貿易、文化教育、社會變遷、殖民與獨立、重大外交事件。分類以單一主類標記，便於多選篩選；分類不表示事件只有一種歷史影響。

## 主要日期核對來源

- 俄羅斯總統圖書館《尼布楚條約》日期記載：[Presidential Library](https://www.prlib.ru/node/619514)
- 英國議會《權利法案》與1689年憲政節點：[UK Parliament](https://www.parliament.uk/about/living-heritage/evolutionofparliament/parliamentaryauthority/revolution/overview/billofrights/)
- 美國《獨立宣言》採納日：[U.S. National Archives](https://www.archives.gov/milestone-documents/declaration-of-independence)
- 《巴黎和約》簽署及結束美國獨立戰爭：[U.S. National Archives](https://www.archives.gov/milestone-documents/treaty-of-paris)
- 康熙親政與擒鰲拜研究摘要：[Journal of Asian Studies / Cambridge Core](https://www.cambridge.org/core/journals/journal-of-asian-studies/article/abs/policies-and-institutions-of-the-oboi-regency-16611669/2BBA176346E6E488D83F06C6FD9D27A8)
- 康熙皇帝即位、親政文物說明：[中央研究院歷史語言研究所歷史文物陳列館](https://museum.sinica.edu.tw/en/collection/17/item/444/)
- 康熙遺詔日期與雍正即位詔告：[中央研究院藏康熙遺詔](https://museum.sinica.edu.tw/en/collection/3/item/125/)、[雍正即位詔告](https://museum.sinica.edu.tw/en/collection/17/item/447/)
- 雍正十三年逝世與乾隆即位日期：[故宮博物院雍正帝年表](https://www.dpm.org.cn/court/lineage/226259.html)、[中央研究院乾隆登極詔書](https://ihp.openmuseum.tw/muse/digi_object/2304b27fe89b094f73050a67a67e8639)、[中研院研究所刊載雍正去世公曆日期](https://www11.ihp.sinica.edu.tw/storage/w2_file/1467nJcfKKT.pdf)
- 乾隆禪位文物與嘉慶元年日期：[中央研究院乾隆禪位詔](https://museum.sinica.edu.tw/en/collection/3/item/146/)、[《乾隆》條目及日期註](https://ctext.org/datawiki.pl?if=en&res=901967)
- 乾隆去世日期：[Oxford Art Online, Grove Art](https://doi.org/10.1093/gao/9781884446054.article.T070272)
- 瓦特專利說明書日期及登記日期：[Powerhouse Collection](https://collection.powerhouse.com.au/object/119115)
- 鰲拜被捕月份：[Journal of Asian Studies / Cambridge Core](https://www.cambridge.org/core/journals/journal-of-asian-studies/article/abs/policies-and-institutions-of-the-oboi-regency-16611669/2BBA176346E6E488D83F06C6FD9D27A8)
- 其餘事件逐筆連到 `historical-events.json` 的來源欄；一般背景參考大英百科全書、英國議會、學術出版品及博物館資料。

## 地圖介面

`HistoricalMapAdapter.getState()` 可讀取標準欄位 `currentYear`、`selectedCountries`、`selectedRegions`、`selectedEvent`、`mapLayerVisibility`，並保留 `year` 相容別名；`subscribe(callback)` 訂閱變更；`updateHistoricalMap(year, selectedRegions)` 可把地圖操作回送共用年份核心。本階段不提供虛構疆域邊界或貿易航線資料。
