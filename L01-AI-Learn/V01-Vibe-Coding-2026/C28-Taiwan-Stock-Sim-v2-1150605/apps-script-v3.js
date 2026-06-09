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
    if (action === 'ping')        return jsonResp({ status: 'ok', version: 'v3-quote-twse-yahoo', updatedAt: nowTW() });
    if (action === 'getAll')      return jsonResp(getAllRows());
    if (action === 'getByNick')   return jsonResp(getByNick(e.parameter.nick));
    if (action === 'getStockQuote') return jsonResp(getStockQuote(e.parameter.code));
    if (action === 'getStockQuotes') return jsonResp(getStockQuotes((e.parameter.codes || '').split(',')));
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
  refreshBuyRowsCurrentPrices(sheet);
  const data  = sheet.getDataRange().getValues();
  data.shift();
  return { status: 'ok', rows: appendSheetRowNumbers(data, 2) };
}

// ── getByNick ────────────────────────────────────────────────────
function getByNick(nick) {
  const sheet = getSheet();
  refreshBuyRowsCurrentPrices(sheet, nick);
  const data  = sheet.getDataRange().getValues();
  data.shift();
  const rows = appendSheetRowNumbers(data, 2).filter(r => r[1] === nick);
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

  let buyRef = null;
  const buySheetRow = parseInt(p.buySheetRow, 10);
  if (buySheetRow > 1 && buySheetRow <= data.length && data[buySheetRow - 1][1] === p.nick && data[buySheetRow - 1][14] === 'buy') {
    buyRef = { sheetRow: buySheetRow, rowData: data[buySheetRow - 1] };
  } else {
    const idx = parseInt(p.buyRowIndex, 10) - 1;
    if (idx < 0 || idx >= nickRows.length) {
      return { status: 'error', message: `序號超出範圍，共有 ${nickRows.length} 筆買入記錄` };
    }
    buyRef = nickRows[idx];
  }

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

function appendSheetRowNumbers(rows, firstSheetRow) {
  return rows.map((r, i) => {
    const row = r.slice();
    row.push(firstSheetRow + i);
    return row;
  });
}

// ── 台股報價：優先抓證交所 MIS 即時/收盤報價，Yahoo 僅當備援 ──
function getStockQuote(code) {
  code = normalizeStockCode(code);
  if (!code) return { status: 'error', message: '缺少股票代號' };

  const session = getMarketSessionTW();
  const cacheSeconds = session === 'open' ? 8 : 60;
  const cached = CacheService.getScriptCache().get('quote_' + code);
  if (cached) return JSON.parse(cached);

  const googleQuotes = fetchGoogleFinanceQuotes([code]);
  const quote = fetchTwseQuote(code) ||
    fetchYahooQuoteV7(code, 'TW') ||
    fetchYahooQuoteV7(code, 'TWO') ||
    fetchYahooQuote(code, 'TW') ||
    fetchYahooQuote(code, 'TWO') ||
    googleQuotes[code];
  if (!quote) return { status: 'error', message: '查無股票或報價暫不可用', code };

  const payload = Object.assign({ status: 'ok' }, quote, {
    marketSession: session,
    updatedAt: nowTW()
  });
  CacheService.getScriptCache().put('quote_' + code, JSON.stringify(payload), cacheSeconds);
  return payload;
}

function getStockQuotes(codes) {
  const rows = [];
  const seen = {};
  const normalized = codes
    .map(normalizeStockCode)
    .filter(code => code && !seen[code] && (seen[code] = true));

  const twseQuotes = fetchTwseQuotes(normalized);
  const yahooTwQuotes = fetchYahooQuotesV7(normalized, 'TW');
  const yahooTwoQuotes = fetchYahooQuotesV7(normalized, 'TWO');
  const googleQuotes = fetchGoogleFinanceQuotes(normalized);
  normalized.forEach(code => {
    const quote = twseQuotes[code] || yahooTwQuotes[code] || yahooTwoQuotes[code] || googleQuotes[code] || getStockQuote(code);
    if (quote.status === 'ok') rows.push(quote);
  });
  return { status: 'ok', rows, requested: normalized.length };
}

function fetchGoogleFinanceQuotes(codes) {
  const result = {};
  if (!codes || !codes.length) return result;
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName('_quote_cache');
    if (!sheet) {
      sheet = ss.insertSheet('_quote_cache');
      sheet.hideSheet();
    }
    sheet.clear();
    sheet.getRange(1, 1, 1, 4).setValues([['code', 'price', 'prev', 'name']]);
    const formulas = codes.map(code => ([
      code,
      `=IFERROR(GOOGLEFINANCE("TPE:${code}","price"),)`,
      `=IFERROR(GOOGLEFINANCE("TPE:${code}","closeyest"),)`,
      `=IFERROR(GOOGLEFINANCE("TPE:${code}","name"),)`
    ]));
    if (formulas.length) sheet.getRange(2, 1, formulas.length, 4).setValues(formulas);
    SpreadsheetApp.flush();

    let values = [];
    for (let i = 0; i < 4; i++) {
      Utilities.sleep(900);
      SpreadsheetApp.flush();
      values = sheet.getRange(2, 1, formulas.length, 4).getValues();
      if (values.some(r => parseQuoteNumber(r[1]) > 0)) break;
    }

    values.forEach(r => {
      const code = normalizeStockCode(r[0]);
      const price = parseQuoteNumber(r[1]);
      const prev = parseQuoteNumber(r[2]) || price;
      if (!code || !price) return;
      result[code] = {
        status: 'ok',
        code,
        symbol: 'TPE:' + code,
        name: String(r[3] || code),
        price: roundPrice(price),
        prev: roundPrice(prev),
        prevDate: previousTradingDayTW(),
        change: roundPrice(price - prev),
        source: 'googlefinance'
      };
    });
  } catch (err) {
    return result;
  }
  return result;
}

function fetchTwseQuote(code) {
  const quotes = fetchTwseQuotes([code]);
  return quotes[code] || null;
}

function fetchTwseQuotes(codes) {
  const result = {};
  if (!codes || !codes.length) return result;

  const channels = [];
  codes.forEach(code => {
    channels.push('tse_' + code + '.tw');
    channels.push('otc_' + code + '.tw');
  });

  const url = 'https://mis.twse.com.tw/stock/api/getStockInfo.jsp?json=1&delay=0&ex_ch=' +
    channels.join('|') +
    '&_=' + Date.now();

  try {
    const cookie = getTwseSessionCookie();
    const resp = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true,
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json,text/plain,*/*',
        'Accept-Language': 'zh-TW,zh;q=0.9,en;q=0.8',
        'Referer': 'https://mis.twse.com.tw/stock/index.jsp',
        'Cookie': cookie
      }
    });
    if (resp.getResponseCode() !== 200) return result;
    const data = JSON.parse(resp.getContentText());
    const rows = data.msgArray || [];

    rows.forEach(row => {
      const code = normalizeStockCode(row.c);
      const prev = parseQuoteNumber(row.y);
      const current = parseQuoteNumber(row.z) || parseQuoteNumber(row.o) || parseQuoteNumber(row.y);
      if (!code || !current || !prev) return;
      result[code] = {
        status: 'ok',
        code,
        symbol: row.ch || code,
        name: row.n || code,
        price: roundPrice(current),
        prev: roundPrice(prev),
        prevDate: previousTradingDayTW(row.d),
        change: roundPrice(current - prev),
        source: 'twse-mis',
        quoteTime: [row.d, row.t].filter(Boolean).join(' ')
      };
    });
  } catch (err) {
    return result;
  }
  return result;
}

function getTwseSessionCookie() {
  try {
    const resp = UrlFetchApp.fetch('https://mis.twse.com.tw/stock/index.jsp', {
      muteHttpExceptions: true,
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const headers = resp.getAllHeaders();
    const raw = headers['Set-Cookie'] || headers['set-cookie'] || '';
    const cookies = Array.isArray(raw) ? raw : [raw];
    return cookies.map(c => String(c).split(';')[0]).filter(Boolean).join('; ');
  } catch (err) {
    return '';
  }
}

function fetchYahooQuoteV7(code, suffix) {
  const quotes = fetchYahooQuotesV7([code], suffix);
  return quotes[code] || null;
}

function fetchYahooQuotesV7(codes, suffix) {
  const result = {};
  if (!codes || !codes.length) return result;
  const symbols = codes.map(code => code + '.' + suffix).join(',');
  const url = 'https://query1.finance.yahoo.com/v7/finance/quote?symbols=' + encodeURIComponent(symbols);
  try {
    const resp = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true,
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    if (resp.getResponseCode() !== 200) return result;
    const data = JSON.parse(resp.getContentText());
    const rows = data.quoteResponse && data.quoteResponse.result ? data.quoteResponse.result : [];
    rows.forEach(row => {
      const symbol = String(row.symbol || '');
      const code = normalizeStockCode(symbol.split('.')[0]);
      const price = Number(row.regularMarketPrice || row.postMarketPrice || row.ask || row.bid || 0);
      const prev = Number(row.regularMarketPreviousClose || row.regularMarketOpen || price || 0);
      if (!code || !price || !prev) return;
      result[code] = {
        status: 'ok',
        code,
        symbol,
        name: row.shortName || row.longName || code,
        price: roundPrice(price),
        prev: roundPrice(prev),
        prevDate: previousTradingDayTW(),
        change: roundPrice(price - prev),
        source: 'yahoo-quote'
      };
    });
  } catch (err) {
    return result;
  }
  return result;
}

function fetchYahooQuote(code, suffix) {
  const url = 'https://query1.finance.yahoo.com/v8/finance/chart/' +
    encodeURIComponent(code + '.' + suffix) +
    '?range=1d&interval=1m&includePrePost=false';
  try {
    const resp = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true,
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    if (resp.getResponseCode() !== 200) return null;
    const data = JSON.parse(resp.getContentText());
    const result = data.chart && data.chart.result && data.chart.result[0];
    if (!result || !result.meta) return null;

    const meta = result.meta;
    const quote = result.indicators && result.indicators.quote && result.indicators.quote[0];
    const closes = quote && quote.close ? quote.close.filter(v => v !== null && v !== undefined) : [];
    const lastClose = closes.length ? Number(closes[closes.length - 1]) : 0;
    const prevClose = Number(meta.chartPreviousClose || meta.previousClose || meta.regularMarketPreviousClose || 0);
    const price = Number(meta.regularMarketPrice || lastClose);
    if (!price) return null;

    return {
      code,
      symbol: code + '.' + suffix,
      name: meta.longName || meta.shortName || code,
      price: roundPrice(price),
      prev: roundPrice(prevClose || price),
      prevDate: previousTradingDayTW(),
      change: roundPrice(price - (prevClose || price)),
      source: 'yahoo'
    };
  } catch (err) {
    return null;
  }
}

function parseQuoteNumber(value) {
  if (value === null || value === undefined) return 0;
  const first = String(value).split('_')[0].replace(/,/g, '').trim();
  if (!first || first === '-' || first === '--') return 0;
  const num = Number(first);
  return isNaN(num) ? 0 : num;
}

function previousTradingDayTW(yyyymmdd) {
  const raw = String(yyyymmdd || Utilities.formatDate(new Date(), 'Asia/Taipei', 'yyyyMMdd'));
  const y = Number(raw.slice(0, 4));
  const m = Number(raw.slice(4, 6));
  const d = Number(raw.slice(6, 8));
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() - 1);
  while (date.getDay() === 0 || date.getDay() === 6) date.setDate(date.getDate() - 1);
  return Utilities.formatDate(date, 'Asia/Taipei', 'yyyy-MM-dd');
}

function refreshBuyRowsCurrentPrices(sheet, nick) {
  const data = sheet.getDataRange().getValues();
  const quoteByCode = {};
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const status = row[10];
    if (row[14] !== 'buy') continue;
    if (nick && row[1] !== nick) continue;
    if (status !== 'matched' && status !== 'after-hours') continue;
    const code = normalizeStockCode(row[2]);
    if (!code) continue;
    if (!quoteByCode[code]) quoteByCode[code] = getStockQuote(code);
    const quote = quoteByCode[code];
    if (quote.status !== 'ok' || !quote.price) continue;
    const shares = parseFloat(row[8]) || 0;
    sheet.getRange(i + 1, 16).setValue(quote.price);
    sheet.getRange(i + 1, 17).setValue(quote.price * shares);
  }
}

function getMarketSessionTW() {
  const now = new Date();
  const h = Number(Utilities.formatDate(now, 'Asia/Taipei', 'H'));
  const m = Number(Utilities.formatDate(now, 'Asia/Taipei', 'm'));
  const mins = h * 60 + m;
  if (mins >= 9 * 60 && mins < 13 * 60 + 30) return 'open';
  if (mins >= 13 * 60 + 30) return 'after';
  return 'close';
}

function normalizeStockCode(code) {
  return String(code || '').trim().toUpperCase().replace(/[^0-9A-Z]/g, '');
}

function roundPrice(price) {
  return Math.round(Number(price) * 100) / 100;
}
