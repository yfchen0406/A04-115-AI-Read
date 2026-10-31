'use strict';
// Rebuilds the normalized sidecar and data-quality report from the untouched source JSON.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const readJson = relative => JSON.parse(fs.readFileSync(path.join(root, relative), 'utf8'));
const raw = readJson('economic_data.json');
const metadata = readJson('data/economic-indicator-metadata.json');
const registry = readJson('data/economic-sources.json').sources;
const extensions = readJson('data/economic-extensions.json').observations;
const digest = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, 'economic_data.json'))).digest('hex');
const units = Object.fromEntries(Object.entries(metadata.indicators).map(([key, value]) => [key, value.unit]));
units.fiscal_total=metadata.indicators.fiscal.totalSeries.unit;
const allObservations=raw.observations.concat(extensions);
const normalized = allObservations.map(row => {
  const source = registry[row.source];
  return {
    country: row.country,
    indicator: row.metric,
    year: row.year,
    value: row.value,
    unit: row.unit || units[row.metric] || null,
    source: row.source,
    source_url: row.source_url || (source ? source.url : null),
    source_version: row.source_version || (source ? source.version : null),
    estimate_type: row.kind,
    uncertainty: row.note || '原觀測沒有另列量化不確定區間；請參閱指標方法限制。',
    notes: row.note || '',
    source_author: source ? source.author : null,
    source_geography: source ? source.geography : null,
    source_coverage: source ? source.coverage : null,
    source_method: source ? source.method : null,
    raw_source_sha256: digest
  };
});
fs.writeFileSync(path.join(root, 'data/economic-observations-v2.json'), JSON.stringify({ schemaVersion: 2, generatedFrom: 'economic_data.json', sourceSha256: digest, observations: normalized }, null, 2) + '\n', 'utf8');

const issues = [];
const sourceFields=['title','author','year','version','url','geography','coverage','method','unit','limitations'];
for(const [key,source] of Object.entries(registry)){
  for(const field of sourceFields) if(!source[field]) issues.push(`來源欄位缺漏：${key}.${field}`);
  if(source.url&&!/^https:\/\//.test(source.url)) issues.push(`來源網址非 HTTPS：${key}`);
  if(raw.sources[key]&&raw.sources[key].url!==source.url&&raw.sources[key].url!==source.rawUrl) issues.push(`原始／擴充來源網址未有對應：${key}`);
}
const seen = new Set();
const byMetric = new Map();
const unitsSeen = new Map();
for (const row of allObservations) {
  const key = `${row.metric}|${row.country}|${row.year}|${row.source}`;
  if (seen.has(key)) issues.push(`重複觀測鍵：${key}`);
  seen.add(key);
  if (!Number.isInteger(row.year)) issues.push(`年份非整數：${key}`);
  if (row.year < metadata.period[0] || row.year > metadata.period[1]) issues.push(`超出研究範圍：${key}（${row.year}）`);
  if (!Number.isFinite(row.value) || row.value < 0) issues.push(`數值無效或負數：${key}`);
  if (!registry[row.source]) issues.push(`來源未登錄：${key}`);
  if (!units[row.metric]) issues.push(`指標沒有單位：${key}`);
  if (!byMetric.has(row.metric)) byMetric.set(row.metric, []);
  byMetric.get(row.metric).push(row);
  if (!unitsSeen.has(row.metric)) unitsSeen.set(row.metric, new Set());
  unitsSeen.get(row.metric).add(units[row.metric]);
}
const targetCountries = ['清朝／中國','英國','法國','荷蘭','西班牙','俄羅斯','北美／美國'];
const countryAliases={
  '清朝／中國':['清朝','中國','China'],
  '英國':['英國','英格蘭','United Kingdom'],
  '法國':['法國','France'],
  '荷蘭':['荷蘭','Dutch Republic','Netherlands'],
  '西班牙':['西班牙','Spain'],
  '俄羅斯':['俄羅斯','Russia'],
  '北美／美國':['北美','殖民地','美國','United States']
};
const fmtYears = values => [...new Set(values)].sort((a,b)=>a-b).join('、');
const lines = [
  '# 歷史經濟資料品質與缺值檢查報告',
  '',
  '檢查日期：2026-10-31（依目前工作區來源檔重跑）',
  '',
  '## 檢查範圍與結果',
  '',
  `- 原始觀測：${raw.observations.length} 筆；另有 ${extensions.length} 筆擴充觀測（財政總額與 OWID/HYDE 人口估計）；來源登錄：${Object.keys(raw.sources).length} 筆。`,
  `- 衍生資料格式：${normalized.length} 筆，寫入 data/economic-observations-v2.json；每筆含 country、indicator、year、value、unit、source、source_url、source_version、estimate_type、uncertainty、notes。`,
  `- 原始 economic_data.json SHA-256：${digest}。檢查器不會改寫此原始檔。`,
  `- 重複觀測鍵：${issues.filter(item=>item.startsWith('重複')).length} 筆。`,
  `- 缺來源／單位／無效數值：${issues.filter(item=>/來源未登錄|指標沒有單位|無效/.test(item)).length} 筆。`,
  `- 來源登錄欄位／網址差異：${issues.filter(item=>item.startsWith('來源欄位')||item.startsWith('來源網址')||item.startsWith('原始／擴充')).length} 項。`,
  `- 超出1661–1799範圍：${issues.filter(item=>item.startsWith('超出')).length} 筆；1800年資料保留作原始期末參照，但不應在目標時段動畫中當成1799年觀測。`,
  '',
  '## 指標覆蓋與可比較性',
  '',
  '| 指標 | 筆數 | 地區列 | 觀測年份 | 資料狀態與用途 |',
  '|---|---:|---|---|---|'
];
for (const [metric, rows] of byMetric) {
  const countries=[...new Set(rows.map(row=>row.country))].sort((a,b)=>a.localeCompare(b,'zh-TW'));
  const yearLabels=fmtYears(rows.map(row=>row.year));
  const description=metadata.indicators[metric]||(metric==='fiscal_total'?metadata.indicators.fiscal.totalSeries:null);
  lines.push(`| ${description?description.label:metric} | ${rows.length} | ${countries.join('、')} | ${yearLabels} | ${description?description.limitation:'擴充資料列'} |`);
}
lines.push('', '### 七個目標區域缺值表', '', '| 目標地區 | 人口 | 人均 GDP | 城市化 | 財政人均 | 財政總額 | 貿易專題 | 工業代理 |', '|---|---|---|---|---|---|---|---|');
const matrix={};
for (const country of targetCountries) {
  matrix[country]={};
  for (const metric of [...Object.keys(metadata.indicators),'fiscal_total']) {
    const rows=byMetric.get(metric)||[];
    const aliases=countryAliases[country]||[country];
    const matches=rows.filter(row=>aliases.some(alias=>row.country.includes(alias)||alias.includes(row.country)));
    matrix[country][metric]=matches.length?`${matches.length}筆（${fmtYears(matches.map(row=>row.year))}）`:'缺值';
  }
  lines.push(`| ${country} | ${matrix[country].population} | ${matrix[country].gdp} | ${matrix[country].urban} | ${matrix[country].fiscal} | ${matrix[country].fiscal_total} | ${matrix[country].trade} | ${matrix[country].industrial} |`);
}
lines.push('', '## 逐項資料品質判讀', '');
lines.push('- **人口**：原始資料保留1776英屬北美十三殖民地估計與1790美國普查；另新增 OWID/HYDE 3.3 現代疆界回溯序列70筆，涵蓋中國及六個歐洲／美洲國家，1700–1790每十年一點。HYDE估計與殖民地估計／普查疆域及方法不同，故維持點狀呈現、不跨系列連線、不排名、不算差距或成長率。1661–1699缺值；美國現代疆界序列不能替代十三殖民地。');
lines.push('- **人均 GDP**：18筆；六個地區在1700、1750、1800均有共同錨點，單位同為1990國際元。可作同研究表的描述性同年排名及兩地差距，但屬模型重建值；此版不是Maddison Project Database 2023，不混用2011國際元序列。1800超出目標時段。');
lines.push('- **城市化**：15筆；五個歐洲國家於1700、1750、1800有資料。原值是≥5,000人城市估計範圍中點，清朝及北美缺值。只可在相同來源和城市門檻下描述排序，須同時閱讀原始區間。');
lines.push('- **政府財政人均值**：原始12筆；清朝與五個歐洲國家在1700–1749及1750–1799兩個50年區間有資料。克白銀／人單位相同但國別原始史料、人口分母存在差異；屬中央政府收入，不代表居民完整稅負。');
lines.push('- **政府財政總額擴充**：另核對 LSE WP152/11 表一新增12筆，單位為噸白銀／年，對應同一兩個50年均值，並與人均收入分開切換。原表明示1中國銀兩=37克白銀；比較國原始資料由 Karaman、Pamuk等系列提供。不得把總額和人均值放在同一軸；總額較大可能源自人口規模。');
lines.push('- **原站「trade」**：20筆；實為SlaveVoyages旗國的25年被強迫登船人數估算。不可稱商品貿易額；可以同旗國分類、同區間排序數量，但需明確標成奴隸貿易暴力專題。中國與俄羅斯無此系列。');
lines.push('- **一般國際商品貿易**：此版無已匯入的進出口金額或商品結構資料。TOFLIT18 法國雙邊貿易資料是候選來源，保留連結與未匯入原因；SlaveVoyages 另列專題，沒有替代一般貿易額。');
lines.push('- **工業化代理**：11筆；英國生棉留存進口前期與後期分屬不同編纂（CFR/Wadsworth–Mann vs. Britannica所引數列），單位相同但來源斷裂。應分線顯示；其他國家缺值，不排名、不跨斷點計算成長率。');
lines.push('', '## 異常與結構限制', '');
if (!issues.length) lines.push('- 未發現重複鍵、非整數年份、負值、來源鍵遺失或指標單位缺漏。');
else for (const issue of issues) lines.push(`- ${issue}`);
lines.push('- 原始檔未在觀測列逐筆提供 unit、source_url、source_version、estimate_type 名稱欄位與量化 uncertainty 欄位；新版由獨立 sidecar 依來源登錄與原始 kind/note 正規化，不覆蓋原始檔。量化信賴區間仍缺少的列維持未提供。');
lines.push('- OWID/HYDE人口資料僅匯入1661–1799目標期內實際提供的七國十年錨點；沒有插值。OWID使用現代國家疆界回溯，不能代表清朝疆域或當時十三殖民地。');
lines.push('- 國家名在部分指標表示歷史政治單位或旗國群組，不等同固定現代疆界。比較介面依各指標實際資料列提供選項，缺值原因在方法區逐項揭示。');
lines.push('', '## 來源', '');
for (const [key, source] of Object.entries(registry)) lines.push(`- **${source.title}**（${source.author}；${source.version}）：[原始來源](${source.url})。範圍：${source.coverage}。限制：${source.limitations}`);
lines.push('', '### 已核對的其他候選資料集', '');
for(const reference of readJson('data/economic-sources.json').researchReferences||[]) lines.push(`- **${reference.title}**（${reference.authors}，${reference.year}；${reference.version}）：[資料頁](${reference.url})。狀態：${reference.status}。${reference.reason}`);
lines.push('', '## 重跑方式', '', '在專案根目錄執行 `node js/economic-data-validator.js`。此命令從 `economic_data.json`、`data/economic-indicator-metadata.json` 與 `data/economic-sources.json` 重新產生正規化 sidecar 與本報告。');
fs.writeFileSync(path.join(root, 'docs/economic-data-quality-report.md'), lines.join('\n') + '\n', 'utf8');
console.log(JSON.stringify({observations:raw.observations.length,sources:Object.keys(raw.sources).length,duplicateKeys:issues.filter(item=>item.startsWith('重複')).length,outOfRange:issues.filter(item=>item.startsWith('超出')).length,otherIssues:issues.filter(item=>!item.startsWith('超出')).length,normalized:normalized.length,sha256:digest},null,2));
