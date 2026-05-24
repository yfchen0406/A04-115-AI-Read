/**
 * yfchen 的未來事件預測簿 — Google Apps Script（JSONP 修正版）
 * =============================================================
 * 修正說明：
 *   原版使用 doPost 接收 JSON，從本機 file:// 開啟時會被瀏覽器
 *   CORS 政策阻擋。本版改為：
 *   ✅ 所有動作（讀取、新增、驗證）統一走 doGet
 *   ✅ 支援 JSONP（callback 參數），讓前端用 <script> 標籤繞過 CORS
 *   ✅ doPost 保留但不再使用（向下相容）
 *
 * 【重新部署步驟】（修改程式碼後必須重新部署才生效）
 * 1. 在 Apps Script 編輯器貼上本檔案全部內容
 * 2. 修改下方 SHEET_ID 為你的 Google Sheets 試算表 ID
 * 3. 點「部署」→「管理部署作業」→ 選現有部署 → 點「編輯（鉛筆圖示）」
 *    → 版本選「新增版本」→ 點「部署」
 *    ⚠️ 必須建立「新版本」舊程式碼才會更新，僅儲存不夠
 * 4. 存取權限確認為「所有人（包括匿名）」
 * 5. Web App URL 不變，index.html 不需要再改
 */

// ─── 設定區 ──────────────────────────────────────────────────────
var SHEET_ID   = '【替換為你的 Google Sheets 試算表 ID】';
var SHEET_NAME = '預測記錄';
// ────────────────────────────────────────────────────────────────

/**
 * 試算表欄位（A~I）
 * A: num  B: date  C: time  D: category  E: content
 * F: verifyDate  G: proof  H: timestamp  I: result
 */
var COL = { NUM:1, DATE:2, TIME:3, CATEGORY:4, CONTENT:5,
            VERIFY_DATE:6, PROOF:7, TIMESTAMP:8, RESULT:9 };
var HEADERS = ['序號','日期','時間','分類','預測內容','驗證日期','驗證證明','提交時間戳記','驗證結果'];

// ─── JSONP 回應包裝 ───────────────────────────────────────────────
function buildJsonp(callback, obj) {
  var json = JSON.stringify(obj);
  var body = callback ? callback + '(' + json + ');' : json;
  return ContentService
    .createTextOutput(body)
    .setMimeType(callback
      ? ContentService.MimeType.JAVASCRIPT
      : ContentService.MimeType.JSON);
}

// ─── 取得工作表（首次自動建立表頭）─────────────────────────────────
function getSheet() {
  var ss    = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    var hRange = sheet.getRange(1, 1, 1, HEADERS.length);
    hRange.setValues([HEADERS]);
    hRange.setBackground('#1a237e');
    hRange.setFontColor('#ffffff');
    hRange.setFontWeight('bold');
    sheet.setFrozenRows(1);
    var widths = [60,95,75,100,300,95,220,145,80];
    widths.forEach(function(w,i){ sheet.setColumnWidth(i+1, w); });
  }
  return sheet;
}

// ─── doGet：統一入口（支援 JSONP）────────────────────────────────
function doGet(e) {
  var p        = e && e.parameter ? e.parameter : {};
  var action   = p.action   || 'getAll';
  var callback = p.callback || '';   // JSONP callback 函式名稱

  try {
    // ── 讀取所有記錄 ──────────────────────────────────────────
    if (action === 'getAll') {
      return buildJsonp(callback, getAllRecords());
    }

    // ── 新增記錄（改由 GET 參數傳入）──────────────────────────
    if (action === 'addRecord') {
      var sheet     = getSheet();
      var timestamp = Utilities.formatDate(
        new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');
      var newRow = [
        p.num        || '',
        p.date       || '',
        p.time       || '',
        p.category   || '',
        p.content    || '',
        p.verifyDate || '',
        p.proof      || '',
        timestamp,
        '未驗證'
      ];
      sheet.appendRow(newRow);
      var lastRow  = sheet.getLastRow();
      var rowRange = sheet.getRange(lastRow, 1, 1, HEADERS.length);
      rowRange.setVerticalAlignment('top');
      rowRange.setWrap(true);
      var resCell = sheet.getRange(lastRow, COL.RESULT);
      resCell.setBackground('#fff8e1');
      resCell.setFontColor('#e65100');
      return buildJsonp(callback, { status:'ok', message:'已新增', rowIndex:lastRow });
    }

    // ── 更新驗證結果 ───────────────────────────────────────────
    if (action === 'updateResult') {
      var rowIndex = parseInt(p.rowIndex);
      var result   = p.result;
      if (!rowIndex || rowIndex < 2)
        return buildJsonp(callback, { status:'error', message:'無效的 rowIndex' });
      if (result !== '正確' && result !== '錯誤')
        return buildJsonp(callback, { status:'error', message:'result 須為「正確」或「錯誤」' });
      var sheet2   = getSheet();
      var cell     = sheet2.getRange(rowIndex, COL.RESULT);
      cell.setValue(result);
      cell.setBackground(result==='正確' ? '#e8f5e9' : '#ffebee');
      cell.setFontColor(result==='正確'  ? '#2e7d32' : '#c62828');
      return buildJsonp(callback, { status:'ok', message:'驗證結果已更新' });
    }

    return buildJsonp(callback, { status:'error', message:'未知 action：' + action });

  } catch(err) {
    return buildJsonp(callback, { status:'error', message:err.toString() });
  }
}

// ─── 讀取所有記錄（內部函式）─────────────────────────────────────
function getAllRecords() {
  var sheet   = getSheet();
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) return { status:'ok', records:[] };

  var data    = sheet.getRange(2, 1, lastRow-1, HEADERS.length).getValues();
  var records = [];
  var tz      = Session.getScriptTimeZone();

  data.forEach(function(row, idx) {
    if (!row[COL.NUM-1] && !row[COL.CONTENT-1]) return; // 跳過空列

    function fmtDate(v) {
      if (v instanceof Date) return Utilities.formatDate(v, tz, 'yyyy-MM-dd');
      return String(v);
    }

    records.push({
      rowIndex:   idx + 2,
      num:        String(row[COL.NUM-1]),
      date:       fmtDate(row[COL.DATE-1]),
      time:       String(row[COL.TIME-1]),
      category:   String(row[COL.CATEGORY-1]),
      content:    String(row[COL.CONTENT-1]),
      verifyDate: fmtDate(row[COL.VERIFY_DATE-1]),
      proof:      String(row[COL.PROOF-1]),
      timestamp:  String(row[COL.TIMESTAMP-1]),
      result:     String(row[COL.RESULT-1]) || '未驗證'
    });
  });

  records.sort(function(a,b){ return parseInt(b.num)-parseInt(a.num); });
  return { status:'ok', records:records };
}

// ─── doPost：保留（向下相容，但前端不再呼叫）────────────────────
function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    // 轉交給 doGet 邏輯處理
    var fakeE = { parameter: body };
    return doGet(fakeE);
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status:'error', message:err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ─── 測試函式（在 Apps Script 編輯器中直接執行）────────────────
function testGetAll() {
  Logger.log(JSON.stringify(getAllRecords()));
}

function testAddRecord() {
  var fakeE = { parameter:{
    action:'addRecord', num:'0001', date:'2026-05-16', time:'10:00',
    category:'科技 AI', content:'測試：Claude 4 Opus 今年發布', verifyDate:'2026-12-31', proof:''
  }};
  Logger.log(doGet(fakeE).getContent());
}

function testUpdateResult() {
  var fakeE = { parameter:{ action:'updateResult', rowIndex:'2', result:'正確' }};
  Logger.log(doGet(fakeE).getContent());
}

function testJsonp() {
  var fakeE = { parameter:{ action:'getAll', callback:'myCallback' }};
  Logger.log(doGet(fakeE).getContent());
  // 應輸出：myCallback({...});
}
