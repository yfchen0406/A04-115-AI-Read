# yfchen 的未來事件預測簿

> 個人預測事件記錄應用，資料存於 Google Sheets，純靜態前端 + Google Apps Script 無後端方案。

---

## 檔案清單

| 檔案 | 說明 |
|------|------|
| `index.html` | 主應用程式（含 CSS、JS，可直接在瀏覽器開啟） |
| `apps-script.gs` | Google Apps Script 後端程式碼 |
| `README.md` | 本部署說明文件 |
| `logo.png` | *(自備)* 個人 Logo PNG 版，放於 index.html 同目錄 |
| `logo.svg` | *(自備)* 個人 Logo SVG 版，放於 index.html 同目錄 |

---

## 五步驟完整部署流程

### 步驟一：建立 Google 試算表

1. 前往 [Google Sheets](https://sheets.google.com) → 建立新試算表
2. 將試算表命名，例如「yfchen 未來事件預測簿」
3. 複製試算表網址列中的 **試算表 ID**（位於 `/d/` 與 `/edit` 之間的一串文字）  
   範例網址：`https://docs.google.com/spreadsheets/d/`**`1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms`**`/edit`  
   → ID 即為粗體部分
4. 工作表名稱保持預設「工作表1」，或改為「預測記錄」（需與 apps-script.gs 的 `SHEET_NAME` 一致）

> 💡 **免設定表頭**：首次送出資料時，Apps Script 會自動建立欄位標題列並套用樣式。

---

### 步驟二：部署 Google Apps Script

1. 前往 [Google Apps Script](https://script.google.com) → 「新增專案」
2. 刪除預設空白程式碼，將 `apps-script.gs` 的全部內容貼上
3. 修改第 **33 行** 的 `SHEET_ID`：  
   ```javascript
   var SHEET_ID = '【貼上步驟一複製的試算表 ID】';
   ```
4. 修改第 **34 行** 的 `SHEET_NAME`（若工作表名稱非「預測記錄」請一併更改）：  
   ```javascript
   var SHEET_NAME = '預測記錄';
   ```
5. 點選上方工具列「💾 儲存」（或 `Ctrl+S`），為專案命名

---

### 步驟三：部署為 Web App

1. 點選右上角「**部署**」→「**新增部署作業**」
2. 點選「類型」旁的齒輪圖示 ⚙️ → 選擇「**網頁應用程式**」
3. 填寫部署設定：
   - **說明**：yfchen 預測簿 v1（任意填寫）
   - **執行身份**：「**我**」
   - **存取權限**：「**所有人（包括匿名）**」← ⚠️ 此項必須選這個，否則網頁無法存取
4. 點「**部署**」→ Google 會要求授權，點「授予存取權」→ 選擇你的 Google 帳號 → 點「允許」
5. 部署完成後，複製顯示的 **Web 應用程式 URL**  
   格式類似：`https://script.google.com/macros/s/AKfycb.../exec`

---

### 步驟四：將 Web App URL 填入 index.html

1. 用文字編輯器（記事本、VS Code 皆可）開啟 `index.html`
2. 搜尋以下這行（約第 300 行附近）：
   ```javascript
   const GAS_URL = 'https://script.google.com/macros/s/【替換為你的 Web App URL】/exec';
   ```
3. 將 `【替換為你的 Web App URL】` 整段（含方括號）替換為步驟三複製的 URL，例如：
   ```javascript
   const GAS_URL = 'https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxx/exec';
   ```
4. 儲存 `index.html`

---

### 步驟五：開啟應用程式 & 測試

1. 直接用瀏覽器開啟 `index.html`（雙擊檔案即可，無需伺服器）
2. 填寫一筆測試預測資料，點「送出預測」
3. 確認：
   - ✅ 網頁顯示「預測已成功記錄！」通知
   - ✅ 記錄出現在下方列表
   - ✅ 開啟 Google Sheets，確認資料已寫入
4. 點擊某筆記錄的「驗證」按鈕，選「正確」或「錯誤」，確認 Sheets 中對應儲存格顏色已更新

---

## 替換 Logo 說明

開啟 `index.html`，搜尋 `Logo 替換說明` 區塊（約第 100 行）：

```html
<!-- 目前為預設文字 Logo，替換方式如下：
  PNG 版本：<img src="logo.png" alt="yfchen Logo" class="logo-img">
  SVG 版本：<img src="logo.svg" alt="yfchen Logo" class="logo-img">
  將 div.logo-placeholder 整個元素替換成上面的 img 標籤即可。
-->
<div class="logo-placeholder">Y</div>
```

將 `<div class="logo-placeholder">Y</div>` 替換為：
```html
<img src="logo.png" alt="yfchen Logo" class="logo-img">
```

Logo 圖檔請放於與 `index.html` **同一目錄**。建議尺寸：寬高各 80px 以上，透明背景。

---

## 常見問題

| 問題 | 解決方式 |
|------|---------|
| 點「送出」後出現「無法連接」 | 確認 GAS_URL 已正確填入且 Apps Script 已部署為「任何人包括匿名」 |
| 資料送出成功但 Sheets 無資料 | 確認 SHEET_ID 正確，且帳號有該 Sheets 的編輯權限 |
| 修改 Apps Script 後無效 | Apps Script 有修改時需重新「部署」→「管理部署作業」→「編輯」→「版本」選「新增版本」 |
| 手機版看不到表格 | 正常現象，手機版自動切換為卡片堆疊顯示 |
| 深色模式無法記憶 | 確認瀏覽器未封鎖 localStorage（無痕模式下可能失效） |

---

## 技術規格

- **前端**：純 HTML5 / CSS3 / 原生 JavaScript（ES6+），無框架依賴
- **圖示**：Font Awesome 6 Free CDN
- **字型**：Google Fonts（Noto Serif TC / Noto Sans TC）
- **後端**：Google Apps Script Web App（免費方案）
- **資料庫**：Google Sheets（個人帳號免費方案即可）
- **費用**：完全免費，無需任何付費 API 或伺服器

---

*yfchen 的未來事件預測簿 | 個人自用記錄工具 | 2026*
