# 歷史經濟資料品質與缺值檢查報告

檢查日期：2026-10-31（依目前工作區來源檔重跑）

## 檢查範圍與結果

- 原始觀測：78 筆；另有 82 筆擴充觀測（財政總額與 OWID/HYDE 人口估計）；來源登錄：9 筆。
- 衍生資料格式：160 筆，寫入 data/economic-observations-v2.json；每筆含 country、indicator、year、value、unit、source、source_url、source_version、estimate_type、uncertainty、notes。
- 原始 economic_data.json SHA-256：c5aed2572648af134a0734df68f9c08ec2e799475c99f1893e87c29872c4e503。檢查器不會改寫此原始檔。
- 重複觀測鍵：0 筆。
- 缺來源／單位／無效數值：0 筆。
- 來源登錄欄位／網址差異：0 項。
- 超出1661–1799範圍：11 筆；1800年資料保留作原始期末參照，但不應在目標時段動畫中當成1799年觀測。

## 指標覆蓋與可比較性

| 指標 | 筆數 | 地區列 | 觀測年份 | 資料狀態與用途 |
|---|---:|---|---|---|
| 人均 GDP | 18 | 北美／美國（多族群估計）、西班牙、法國、英國、清朝／中國、荷蘭 | 1700、1750、1800 | 歷史國民所得為研究者重建值，數值高度依賴人口與產出假設；不同版本及購買力基準不能混接。 |
| 城市化率 | 15 | 西班牙、法國、俄羅斯、英國、荷蘭 | 1700、1750、1800 | 採人口至少5,000人的城市口徑；清朝缺同口徑數據，各地史料與區間範圍不同，適合看來源內部錨點，不作跨文明排名。 |
| 人均中央政府收入 | 12 | 西班牙、法國、俄羅斯、英國、清朝／中國、荷蘭 | 1725、1775 | 並非單年收入或完整地方稅負。研究對不同政體採用的史料序列及人口分母存在差異。 |
| 跨大西洋強迫運奴估計 | 20 | 北美／美國旗國、西班牙／烏拉圭、法國、英國、荷蘭 | 1713、1738、1763、1788 | 此指標記錄奴隸貿易造成的暴力與強迫遷徙。區間總量是估算；旗國不等同殖民地歸屬。零值依來源保留。一般進出口資料尚未匯入。 |
| 英國生棉進口代理指標 | 11 | 英國、英國（後期生棉進口） | 1705、1715、1725、1735、1745、1773、1778、1783、1788、1793、1798 | 進口原棉不等於工業產值、總生產力或工業化綜合指數；其他國家沒有同口徑序列。 |
| 歷史人口 | 72 | 中國（現代疆界回溯）、西班牙（現代疆界回溯）、法國（現代疆界回溯）、俄羅斯（現代疆界回溯）、美國、美國（現代疆界回溯）、英國（現代疆界回溯）、英屬北美十三殖民地、荷蘭（現代疆界回溯） | 1700、1710、1720、1730、1740、1750、1760、1770、1776、1780、1790 | HYDE為人口重建估計，OWID依現代國家地理疆界回溯呈現，不能代表清朝或當時歐洲國家的歷史疆界；United States系列亦不能代表十三殖民地。資料僅每十年提供錨點。普查、殖民地估計和模型重建不可視為同口徑或互相驗證。 |
| 中央政府收入總額 | 12 | 西班牙、法國、俄羅斯、英國、清朝／中國、荷蘭 | 1725、1775 | 原表以 tons of silver 記錄；中國銀兩按1 tael=37g換算。年份1725與1775是區間中心，不是單年。區域按原表歷史政體，例如 England、Dutch Republic。 |

### 七個目標區域缺值表

| 目標地區 | 人口 | 人均 GDP | 城市化 | 財政人均 | 財政總額 | 貿易專題 | 工業代理 |
|---|---|---|---|---|---|---|---|
| 清朝／中國 | 10筆（1700、1710、1720、1730、1740、1750、1760、1770、1780、1790） | 3筆（1700、1750、1800） | 缺值 | 2筆（1725、1775） | 2筆（1725、1775） | 缺值 | 缺值 |
| 英國 | 10筆（1700、1710、1720、1730、1740、1750、1760、1770、1780、1790） | 3筆（1700、1750、1800） | 3筆（1700、1750、1800） | 2筆（1725、1775） | 2筆（1725、1775） | 4筆（1713、1738、1763、1788） | 11筆（1705、1715、1725、1735、1745、1773、1778、1783、1788、1793、1798） |
| 法國 | 10筆（1700、1710、1720、1730、1740、1750、1760、1770、1780、1790） | 3筆（1700、1750、1800） | 3筆（1700、1750、1800） | 2筆（1725、1775） | 2筆（1725、1775） | 4筆（1713、1738、1763、1788） | 缺值 |
| 荷蘭 | 10筆（1700、1710、1720、1730、1740、1750、1760、1770、1780、1790） | 3筆（1700、1750、1800） | 3筆（1700、1750、1800） | 2筆（1725、1775） | 2筆（1725、1775） | 4筆（1713、1738、1763、1788） | 缺值 |
| 西班牙 | 10筆（1700、1710、1720、1730、1740、1750、1760、1770、1780、1790） | 3筆（1700、1750、1800） | 3筆（1700、1750、1800） | 2筆（1725、1775） | 2筆（1725、1775） | 4筆（1713、1738、1763、1788） | 缺值 |
| 俄羅斯 | 10筆（1700、1710、1720、1730、1740、1750、1760、1770、1780、1790） | 缺值 | 3筆（1700、1750、1800） | 2筆（1725、1775） | 2筆（1725、1775） | 缺值 | 缺值 |
| 北美／美國 | 12筆（1700、1710、1720、1730、1740、1750、1760、1770、1776、1780、1790） | 3筆（1700、1750、1800） | 缺值 | 缺值 | 缺值 | 4筆（1713、1738、1763、1788） | 缺值 |

## 逐項資料品質判讀

- **人口**：原始資料保留1776英屬北美十三殖民地估計與1790美國普查；另新增 OWID/HYDE 3.3 現代疆界回溯序列70筆，涵蓋中國及六個歐洲／美洲國家，1700–1790每十年一點。HYDE估計與殖民地估計／普查疆域及方法不同，故維持點狀呈現、不跨系列連線、不排名、不算差距或成長率。1661–1699缺值；美國現代疆界序列不能替代十三殖民地。
- **人均 GDP**：18筆；六個地區在1700、1750、1800均有共同錨點，單位同為1990國際元。可作同研究表的描述性同年排名及兩地差距，但屬模型重建值；此版不是Maddison Project Database 2023，不混用2011國際元序列。1800超出目標時段。
- **城市化**：15筆；五個歐洲國家於1700、1750、1800有資料。原值是≥5,000人城市估計範圍中點，清朝及北美缺值。只可在相同來源和城市門檻下描述排序，須同時閱讀原始區間。
- **政府財政人均值**：原始12筆；清朝與五個歐洲國家在1700–1749及1750–1799兩個50年區間有資料。克白銀／人單位相同但國別原始史料、人口分母存在差異；屬中央政府收入，不代表居民完整稅負。
- **政府財政總額擴充**：另核對 LSE WP152/11 表一新增12筆，單位為噸白銀／年，對應同一兩個50年均值，並與人均收入分開切換。原表明示1中國銀兩=37克白銀；比較國原始資料由 Karaman、Pamuk等系列提供。不得把總額和人均值放在同一軸；總額較大可能源自人口規模。
- **原站「trade」**：20筆；實為SlaveVoyages旗國的25年被強迫登船人數估算。不可稱商品貿易額；可以同旗國分類、同區間排序數量，但需明確標成奴隸貿易暴力專題。中國與俄羅斯無此系列。
- **一般國際商品貿易**：此版無已匯入的進出口金額或商品結構資料。TOFLIT18 法國雙邊貿易資料是候選來源，保留連結與未匯入原因；SlaveVoyages 另列專題，沒有替代一般貿易額。
- **工業化代理**：11筆；英國生棉留存進口前期與後期分屬不同編纂（CFR/Wadsworth–Mann vs. Britannica所引數列），單位相同但來源斷裂。應分線顯示；其他國家缺值，不排名、不跨斷點計算成長率。

## 異常與結構限制

- 超出研究範圍：gdp|清朝／中國|1800|cambridge（1800）
- 超出研究範圍：gdp|英國|1800|cambridge（1800）
- 超出研究範圍：gdp|法國|1800|cambridge（1800）
- 超出研究範圍：gdp|荷蘭|1800|cambridge（1800）
- 超出研究範圍：gdp|西班牙|1800|cambridge（1800）
- 超出研究範圍：gdp|北美／美國（多族群估計）|1800|cambridge（1800）
- 超出研究範圍：urban|英國|1800|bairoch（1800）
- 超出研究範圍：urban|法國|1800|bairoch（1800）
- 超出研究範圍：urban|荷蘭|1800|bairoch（1800）
- 超出研究範圍：urban|西班牙|1800|bairoch（1800）
- 超出研究範圍：urban|俄羅斯|1800|bairoch（1800）
- 原始檔未在觀測列逐筆提供 unit、source_url、source_version、estimate_type 名稱欄位與量化 uncertainty 欄位；新版由獨立 sidecar 依來源登錄與原始 kind/note 正規化，不覆蓋原始檔。量化信賴區間仍缺少的列維持未提供。
- OWID/HYDE人口資料僅匯入1661–1799目標期內實際提供的七國十年錨點；沒有插值。OWID使用現代國家疆界回溯，不能代表清朝疆域或當時十三殖民地。
- 國家名在部分指標表示歷史政治單位或旗國群組，不等同固定現代疆界。比較介面依各指標實際資料列提供選項，缺值原因在方法區逐項揭示。

## 來源

- **The Cambridge Economic History of the Modern World, Volume I, Table I.1**（Stephen Broadberry、Kyoji Fukao（編）；表中各國數值依該書註記之學術重建系列；Volume I, Table I.1 excerpt; 1990 international dollars）：[原始來源](https://assets.cambridge.org/97811071/59457/excerpt/9781107159457_excerpt.pdf)。範圍：1500–1870 的部分錨點；本網站取1700、1750、1800。限制：國界與地區定義隨研究系列而異；1800 超出本網站1661–1799時段。此表不等於 Maddison Project Database 2023，版本與基準不可混接。
- **Cities and Economic Development: From the Dawn of History to the Present**（Paul Bairoch；英文譯本 Christopher Braider 譯；Table 13.1; urbanization estimates with cities of 5,000 or more）：[原始來源](https://www.bibliovault.org/BV.book.epl?ISBN=9780226034652)。範圍：1700、1750、1800 錨點。限制：城市門檻為人口至少5,000；區間中點非精確值。清朝與北美缺少本表同口徑列。
- **Qing Central Government Revenue in International Comparison / International comparison of per capita tax revenue**（Debin Ma；比較研究另據 Karaman、Pamuk 等財政史資料；LSE Working Paper 152, Table 2; 50-year averages）：[原始來源](https://www.lse.ac.uk/asset-library/information/wp152.pdf)。範圍：1700–1749、1750–1799區間；原站以1725、1775標示區間中心。限制：不是單年資料、地方政府全部收入或居民總稅負；各國史料與人口分母由不同研究重建。
- **SlaveVoyages: Trans-Atlantic Slave Trade Estimates**（SlaveVoyages research database contributors；Estimates table; 25-year periods grouped by carrier flag）：[原始來源](https://www.slavevoyages.org/assessment/estimates)。範圍：1701–1800 分四個25年區間；本網站用代表年1713、1738、1763、1788。限制：反映跨大西洋奴隸貿易暴力，不代表經濟績效；旗國不等同殖民地歸屬；區間估值具不確定性。
- **Great Britain retained raw-cotton imports, 1697–1849**（Wadsworth and Mann (1931), Appendix G, as transcribed by CFR Project；CFR Project dataset; underlying historical compilations）：[原始來源](https://www.cfrproject.com/en/datasets/dataset%3Agb-raw-cotton-retained-imports-1697-1849)。範圍：1697–1779 decadal period averages in the underlying compilation。限制：Single-country proxy, not industrial output; excludes other industrial sectors and nations.
- **Cotton Manufacture, Encyclopaedia Britannica, 8th edition**（Encyclopaedia Britannica editors; figures compiled from nineteenth-century historical reports；Five-year average series cited by the original project）：[原始來源](https://jimclifford.ca/britannica-articles-4/a/EB.16/193109114/838.html)。範圍：1771–1800 reported five-year period averages; original chart uses 1773–1798 representative years。限制：Different compiler than the earlier CFR/Wadsworth–Mann points. Keep as a separate series; do not join across the source break or treat as industrial output.
- **1790 United States Census**（United States Census Bureau / original federal enumeration；First decennial census; returned total 3,929,214）：[原始來源](https://www.census.gov/library/publications/1793/dec/number-of-persons.html)。範圍：1790。限制：Political territory and enumeration categories differ from 1776 colonial estimates and modern population concepts.
- **Colonial-era population estimate for the thirteen colonies**（U.S. Census Bureau historical article summarizing colonial population estimates；Approximate 1776 estimate used in original project）：[原始來源](https://www.census.gov/library/stories/2023/12/boston-tea-party.html)。範圍：1776 estimate。限制：Territorial boundaries, Indigenous populations and enumeration methods differ from the 1790 U.S. census.
- **Population – HYDE, Gapminder, UN – Long-run data**（Our World in Data; source datasets: PBL Netherlands Environmental Assessment Agency (HYDE 3.3), Gapminder v7, United Nations WPP 2024；OWID indicator 953903; 10,000 BCE–1799 HYDE 3.3; imported only 1700–1790 decade anchors for seven present-day countries）：[原始來源](https://ourworldindata.org/grapher/population)。範圍：1700–1790, decade anchors; 70 extracted observations across China and six current-border country series。限制：Current-border historical mapping cannot represent period-specific polity boundaries. The US series cannot stand for the thirteen colonies. Decade anchors omit 1661–1699; values are estimates, not census observations. Do not mix with colonial-era estimate or census rows for rankings, differences, or growth rates.

### 已核對的其他候選資料集

- **World Countries Population Size ratio / Clio Infra Total Population**（Jonathan Fink-Jensen; Clio Infra，2015 (production date shown by source) ；Compact and Broad population workbooks; 50-year intervals 1500–1800）：[資料頁](https://clio-infra.eu/Indicators/TotalPopulation.html)。狀態：candidate dataset not imported。The official metadata describes current-country boundaries for the main series and 50-year estimates before 1800; a separate England historical-boundary series is listed. The compact workbook request returned HTTP 403 in the available research tool, so regional mapping and values have not been independently checked. It cannot yet be merged with thirteen-colony or 1790 US census observations.
- **Population – HYDE, Gapminder, UN – Long-run data**（Our World in Data; source datasets: PBL Netherlands Environmental Assessment Agency (HYDE 3.3), Gapminder v7, United Nations WPP 2024，Last updated 2024-07-15; metadata observed 2026-10-31；OWID indicator 953903; HYDE 3.3 for 10,000 BCE–1799; Gapminder 7 for 1800–1949; UN WPP 2024 thereafter）：[資料頁](https://ourworldindata.org/grapher/population)。狀態：partially imported: seven labelled historical current-border series。Official OWID indicator 953903 metadata and data API were read on 2026-10-31. Imported the 1700–1790 decade anchors only. HYDE v3.3 is used through 1799; the historical series maps modern national borders and cannot represent Qing territory or the thirteen colonies. Population rankings and cross-method comparisons remain disabled.
- **Historical intercontinental trade per capita, 1500–1800**（Allen (2003); Costa, Palma and Reis (2015); France and Netherlands estimates credited separately in the supporting literature，Underlying estimates span 1500–1800; some terminal values represent France 1788 and Netherlands 1780；Our World in Data chart; pounds sterling per capita at 1700 prices; colonial/intercontinental trade proxy）：[資料頁](https://ourworldindata.org/grapher/intercontinental-trade-per-capita-1500-1800)。狀態：candidate dataset not imported。The series is per-capita colonial trade rather than complete imports plus exports, covers only selected European trading states, and does not provide matching Qing, Russia, or American-colony series. The chart's CSV endpoint was inaccessible to the available research tool, so no values were extracted. See also LSE Economic History Working Paper 210 for the figure's country-specific sources and exchange-rate conversions.
- **Maddison Project Database 2023**（Jutta Bolt and Jan Luiten van Zanden，2024 paper introducing the 2023 update；MPD 2023; Dataverse DOI 10.34894/INZBF2; CC BY 4.0）：[資料頁](https://www.rug.nl/ggdc/historicaldevelopment/maddison/releases/maddison-project-database-2023?lang=en)。狀態：alternate version not imported。Original economic_data.json GDP observations use a separate 1990 international-dollar Cambridge table. MPD 2023 is not blended with it; an independently archived, checked extract and series-specific attribution list are needed before adding its 2011 PPP USD values.
- **TOFLIT18 French foreign trade database, 1716–1821**（Sciences Po Médialab / ANR TOFLIT18 project，Project database；Bilateral trade values by partner and product category）：[資料頁](https://toflit18.medialab.sciences-po.fr/)。狀態：candidate dataset not imported。The current source JSON contains no verified export/import amount rows from this project; the dashboard therefore does not label the SlaveVoyages counts as general trade values.

## 重跑方式

在專案根目錄執行 `node js/economic-data-validator.js`。此命令從 `economic_data.json`、`data/economic-indicator-metadata.json` 與 `data/economic-sources.json` 重新產生正規化 sidecar 與本報告。
