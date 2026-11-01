# 歷史地圖資料方法與授權說明

## 地圖如何表達

地圖只使用現代底圖作地理辨識；現代國界不表示 1661–1799 年疆域。可取得的事件位置以來源事件資料與位置索引連結。所有 GeoJSON 幾何依 WGS 84 經度、緯度順序記錄；資料檢查另以事件所屬區域核對座標是否落在合理的地理範圍。點位的信心分級說明定位尺度，不等於歷史邊界可信度。貿易及軍事 GeoJSON 是專案自行整理的示意連線，只用於概覽路線涉及的區域與港口，不是原始歷史 GIS 航跡、控制區或行軍路徑。

## 未提供的歷史疆界

本站現在隨附 Cliopatria v0.2.1 的精選政體多邊形，並依年份及模式顯示。這些圖形是來源所描述的政體範圍，均標為低信度；不可視為精確國界、法律主權或行政界線。資料的時間步長及尺度不一，來源幾何也有不確定性。資料索引只挑選部分目標政體，未選中的政權並不代表當年不存在。清朝來源形狀未覆蓋全部歷史疆域（例如西藏、蒙古、新疆等區域不完整）。本版本的已挑選來源要素沒有蘇格蘭政體圖形；英格蘭王國／大不列顛也有年度資料間隔，因此不能據此解讀 1707 年政權變化的精確國界。美洲模式含部分殖民帝國／政體範圍及豪德諾索尼聯盟，並非十三殖民地行政界線或完整原住民族領域。詳細逐政體覆蓋與年份可查 `data/maps/historical-polities.geojson`。

CHGIS Version 6 有中國行政地理時間序列，但官方限制為學術研究使用且禁止再散布；其說明並指出內蒙古、青海、新疆、西藏不在該時間序列範圍。Euratlas 提供 1700、1800 世紀交界歐洲快照，但 Duke 資料頁限制取得對象並要求遵守 Euratlas 授權，快照也不能冒充 1661–1799 逐年邊界。

另稽核 OpenHistoricalMap（OHM）：官方資料採 CC0 公有領域奉獻（貢獻者另有標示者除外），Overpass 可依 `start_date`／`end_date` 查詢特定年代。這是可再散布候選來源，但並不保證目標年代的清代政體、歐洲政權、美洲殖民行政區或原住民族治理領域均有完整要素；每筆仍需核對貢獻來源、名稱、時間範圍、幾何與分類。本次研究工具無法存取 OHM Overpass 查詢端點，未取得可供逐筆稽核的回應，所以沒有匯入幾何或把候選來源標為已完成。參考：[OHM Overpass 時間查詢文件](https://wiki.openstreetmap.org/wiki/OpenHistoricalMap/Overpass)、[OHM 匯出與授權說明](https://api.openhistoricalmap.org/export)。

Cliopatria 官方 `FromYear` 與 `ToYear` 表示該筆要素的有效年代區間（含首尾年）；此處按來源區間篩選，不把稀疏資料插值為新邊界。資料為 CC BY 4.0。本站固定使用 v0.2.1（commit `5f433377139a6eeaeacbdc894b70f8805b72c8b5`），來源壓縮檔 SHA-256 為 `E10A4E429FCA708788FF9E7572A95FCE801FAE55852D217CFFABC1C59CD4EED4`。匯入時僅選取程式列名的政體、把有效年代裁切到 1661–1799，附上中文名稱、模式與來源欄位；來源幾何未移動或重畫。可在 `scripts/compile-historical-polities.py` 以原始壓縮檔重建本站衍生 GeoJSON。圖層標籤及本節即為來源署名和修改說明。參考：[Cliopatria 官方 README](https://github.com/Seshat-Global-History-Databank/cliopatria/blob/v0.2.1/README.md)、[CC BY 4.0 授權](https://github.com/Seshat-Global-History-Databank/cliopatria/blob/5f433377139a6eeaeacbdc894b70f8805b72c8b5/LICENSE.md)。

## 貿易與強迫人口販運

貿易圖層列出路線名稱、年份、起訖及中途港口、組織、商品、來源和研究限制。它表達的是歷史網絡的概略連線，不聲稱每艘船都沿線航行。跨大西洋奴隸販運另列為強迫人口販運圖層，不與一般商品貿易混為一談；本專案不重散布 SlaveVoyages 的個別航次資料。

## 軍事圖層

軍事圖層列出衝突名稱、起訖年份、交戰方、結果、參考來源及位置解讀限制。多場戰役或廣泛戰區用簡化線條標示時，標籤明確指出這不是實際行軍路線。線條不呈現控制權隨時間的精細變化。

1757–1759 年大小和卓相關戰事以喀什噶爾、葉爾羌一帶作南疆區域索引，參考 Oxford Research Encyclopedia〈Xinjiang Under the Qing〉。端點僅供區域定位；不可解讀為軍隊進軍順序、清軍控制邊界或當地居民一致的政治立場。

金川軍事資料分成第一次戰事（1747–1749）與第二次戰事（1771–1776），參考 Oxford Research Encyclopedia〈The Qing Empire and Its Military〉及其中引用的金川戰爭研究。兩筆各自按有效年份篩選；地圖示意不延伸至兩場戰事之間的 1750–1770 年，也不作精確行軍路線解讀。

## 底圖服務條款核對（2026-11-01）

OpenFreeMap 官方 FAQ 表示公用實例免費、沒有地圖瀏覽或請求數上限，並要求地圖署名；官方服務條款同時聲明服務按現況提供，不保證準確性或可用性，且服務可能停止。它不是具 SLA 的長期託管承諾。本網站以 MapLibre 顯示由樣式提供的署名控制項，另在來源清單列出 OpenFreeMap 與 OpenStreetMap。若未來加入離線下載，每次下載須限制在 3,000 tiles 或 50 MB 內、最多四個並行請求，並使用識別應用程式的唯一 User-Agent；超過範圍須聯絡服務方。

官方頁面：[OpenFreeMap FAQ](https://openfreemap.org/)、[Terms of Service](https://openfreemap.org/tos/)、[OpenStreetMap copyright 與授權](https://www.openstreetmap.org/copyright)。OpenStreetMap 資料依 ODbL 開放，公開使用需提供署名並讓使用者可查閱授權資訊。
## 來源與授權

逐筆來源記錄在 `data/historical-map-sources.json`。Natural Earth 僅供現代定位參考；OpenStreetMap 資料依其 ODbL 署名要求標示，底圖服務為 OpenFreeMap 公開服務。World Historical Gazetteer 是候選歷史地名來源，但其聚合紀錄各自保有上游授權，因此未批次匯入。CHGIS 與 Euratlas 的授權／取得限制及時間覆蓋範圍記錄於來源索引；兩者的資料均未複製進本站。美國國會圖書館圖像依單件 Rights Advisory 核對；SlaveVoyages 資料庫受其 consortium 條款約束，未將其航次資料複製進本站。原創示意線以相關研究作歷史背景依據，不複製受授權保護的 GIS 幾何。

## 可重建資料

`scripts/compile-historical-map-events.js` 將 `data/historical-events.json` 與 `data/historical-map-event-locations.json` 依事件 ID 合併，產生 `data/maps/historical-events.geojson`。貿易和軍事示意線以 GeoJSON 隨站提供；每個 feature 都包含年份、控制類型、信心、來源 ID 與限制註記。
