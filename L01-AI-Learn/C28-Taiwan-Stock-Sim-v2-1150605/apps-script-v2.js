// ════════════════════════════════════════════════════════════════
// 台股模擬競技場 v2 ── Google Apps Script 後端
// 工作表：investment_log
// 欄位 A~S（19欄）
// A:時間戳記  B:暱稱  C:股票代號  D:股票名稱  E:交易日期
// F:前日收盤  G:掛單價  H:收盤價(確認用)  I:股數  J:投入金額
// K:成交狀態  L:成交價  M:成交量(漲跌停)  N:交易時段
// O:交易類型(buy/sell)  P:現在股價  Q:現值  R:已實現損益  S:關聯買入列
// ════════════════════════════════════════════════════════════════

const SHEET_NAME = 'investment_log';
const HEADERS = [
  '時間戳記','暱稱','股票代號','股票名稱','交易日期',
  '前日收盤','掛單價','收盤價','股數','投入金額',
  '成交狀態','成交價','成交量','交易時段',
  '交易類型','現在股價','現值','已實現損益','關聯買入列'
];

// ── 取得工作表 ───────────────────────────────────────────────────
function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    // 基本格式
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

// ── doGet ────────────────────────────────────────────────────────
function doGet(e) {
  try {
    const action = e.parameter.action || '';
    if (action === 'getAll')      return jsonResp(getAllRows());
    if (action === 'getByNick')   return jsonResp(getByNick(e.parameter.nick));
    return jsonResp({ status: 'error', message: '未知 action' });
  } catch (err) {
    return jsonResp({ status: 'error', message: err.toString() });
  }
}

// ── doPost ───────────────────────────────────────────────────────
function doPost(e) {
  try {
    const p = JSON.parse(e.postData.contents);
    if (p.action === 'addBuy')     return jsonResp(addBuy(p));
    if (p.action === 'addSell')    return jsonResp(addSell(p));
    if (p.action === 'updatePrice')return jsonResp(updatePrice(p));
    return jsonResp({ status: 'error', message: '未知 action' });
  } catch (err) {
    return jsonResp({ status: 'error', message: err.toString() });
  }
}

// ── getAllRows ───────────────────────────────────────────────────
function getAllRows() {
  const sheet = getSheet();
  const data  = sheet.getDataRange().getValues();
  data.shift();
  return { status: 'ok', rows: data };
}

// ── getByNick ────────────────────────────────────────────────────
function getByNick(nick) {
  const sheet = getSheet();
  const data  = sheet.getDataRange().getValues();
  data.shift();
  const rows = data.filter(r => r[1] === nick);
  return { status: 'ok', rows };
}

// ── addBuy ───────────────────────────────────────────────────────
// p: nick, code, name, date, prevClose, orderPrice, closePrice,
//    shares, total, tradeStatus, tradePrice, vol, marketSession
function addBuy(p) {
  const sheet     = getSheet();
  const ts        = nowTW();
  const shares    = parseFloat(p.shares)     || 0;
  const orderP    = parseFloat(p.orderPrice) || 0;
  const closeP    = parseFloat(p.closePrice) || 0;
  const tradeP    = parseFloat(p.tradePrice) || orderP;
  const total     = tradeP * shares;
  const nowVal    = total; // 初始現值 = 投入

  sheet.appendRow([
    ts,                          // A 時間戳記
    p.nick,                      // B 暱稱
    p.code,                      // C 股票代號
    p.name,                      // D 股票名稱
    p.date,                      // E 交易日期
    parseFloat(p.prevClose)||0,  // F 前日收盤
    orderP,                      // G 掛單價
    closeP,                      // H 收盤價
    shares,                      // I 股數
    total,                       // J 投入金額
    p.tradeStatus,               // K 成交狀態
    tradeP,                      // L 成交價
    parseFloat(p.vol)||0,        // M 成交量
    p.marketSession||'',         // N 交易時段
    'buy',                       // O 交易類型
    tradeP,                      // P 現在股價（初始=成交價）
    nowVal,                      // Q 現值
    0,                           // R 已實現損益（買入為0）
    ''                           // S 關聯買入列（買入不填）
  ]);

  return { status: 'ok', message: '買入掛單已記錄', tradeStatus: p.tradeStatus };
}

// ── addSell ──────────────────────────────────────────────────────
// p: nick, buyRowIndex, date, prevClose, orderPrice, closePrice,
//    tradeStatus, tradePrice, vol, marketSession
function addSell(p) {
  const sheet    = getSheet();
  const data     = sheet.getDataRange().getValues();
  // data[0] = header, data[1..] = rows
  const nickRows = [];
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] === p.nick && data[i][14] === 'buy') {
      nickRows.push({ sheetRow: i + 1, rowData: data[i] });
    }
  }

  const idx = parseInt(p.buyRowIndex) - 1;
  if (idx < 0 || idx >= nickRows.length) {
    return { status: 'error', message: `序號超出範圍，共有 ${nickRows.length} 筆買入記錄` };
  }

  const buyRef  = nickRows[idx];
  const buyData = buyRef.rowData;
  const shares  = parseFloat(buyData[8]) || 0;
  const buyCost = parseFloat(buyData[9]) || 0;  // 原始投入金額
  const tradeP  = parseFloat(p.tradePrice) || parseFloat(p.orderPrice) || 0;
  const sellVal = tradeP * shares;
  const realPnl = sellVal - buyCost;

  const ts = nowTW();
  sheet.appendRow([
    ts,                          // A
    p.nick,                      // B
    buyData[2],                  // C 股票代號（從買入取）
    buyData[3],                  // D 股票名稱
    p.date,                      // E
    parseFloat(p.prevClose)||0,  // F
    parseFloat(p.orderPrice)||0, // G 掛單賣出價
    parseFloat(p.closePrice)||0, // H
    shares,                      // I 股數（從買入取）
    sellVal,                     // J 賣出金額
    p.tradeStatus,               // K
    tradeP,                      // L 成交價
    parseFloat(p.vol)||0,        // M
    p.marketSession||'',         // N
    'sell',                      // O
    tradeP,                      // P
    sellVal,                     // Q
    realPnl,                     // R 已實現損益
    buyRef.sheetRow              // S 關聯買入列（Sheet 列號）
  ]);

  // 同步更新對應買入列的「已實現損益」欄位（R欄=第18欄）
  sheet.getRange(buyRef.sheetRow, 18).setValue(realPnl);
  // 更新買入列成交狀態為 sold
  sheet.getRange(buyRef.sheetRow, 11).setValue('sold');

  return { status: 'ok', message: '賣出掛單已記錄', realizedPnl: realPnl };
}

// ── updatePrice ──────────────────────────────────────────────────
// p: nick, rowIndex（暱稱的第N筆買入記錄，1-based）, curPrice
function updatePrice(p) {
  const sheet    = getSheet();
  const data     = sheet.getDataRange().getValues();
  const nickRows = [];

  for (let i = 1; i < data.length; i++) {
    if (data[i][1] === p.nick && data[i][14] === 'buy') {
      nickRows.push(i + 1); // 1-based sheet row
    }
  }

  const idx = parseInt(p.rowIndex) - 1;
  if (idx < 0 || idx >= nickRows.length) {
    return { status: 'error', message: `序號超出範圍，共 ${nickRows.length} 筆買入記錄` };
  }

  const sheetRow = nickRows[idx];
  const rowData  = data[sheetRow - 1];
  const shares   = parseFloat(rowData[8]) || 0;
  const newP     = parseFloat(p.curPrice) || 0;
  const newVal   = newP * shares;

  sheet.getRange(sheetRow, 16).setValue(newP);   // P 現在股價
  sheet.getRange(sheetRow, 17).setValue(newVal);  // Q 現值

  return { status: 'ok', message: '股價已更新' };
}

// ── 自動判斷成交（排程用，選用） ──────────────────────────────────
// 可在 Apps Script 設定每日13:30後的觸發器執行此函式
// 自動掃描所有「pending」的掛單並比對當日收盤價
function autoMatchOrders() {
  const sheet = getSheet();
  const data  = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    const row     = data[i];
    const status  = row[10]; // K 成交狀態
    if (status !== 'pending') continue;

    const type    = row[14]; // O buy/sell
    const orderP  = parseFloat(row[6])  || 0; // G 掛單價
    const closeP  = parseFloat(row[7])  || 0; // H 收盤價

    if (closeP <= 0) continue; // 收盤價未填，跳過

    let matched = false;
    if (type === 'buy')  matched = closeP <= orderP; // 買單：收盤≤掛單
    if (type === 'sell') matched = closeP >= orderP; // 賣單：收盤≥掛單

    if (matched) {
      const sheetRow = i + 1;
      sheet.getRange(sheetRow, 11).setValue('matched');
    }
  }
}

// ── Helpers ───────────────────────────────────────────────────────
function nowTW() {
  return new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
}

function jsonResp(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
