const searchForm = document.getElementById('site-search-form');
const keywordInput = document.getElementById('keyword');
const resultSummary = document.getElementById('result-summary');
const resultsContainer = document.getElementById('results');
let searchIndex;

function normalize(value) {
  return value.toLocaleLowerCase('zh-Hant').replace(/\s+/g, ' ').trim();
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[char]);
}

function createSnippet(content, keyword) {
  const position = normalize(content).indexOf(keyword);
  const start = Math.max(0, position - 55);
  const end = Math.min(content.length, position + keyword.length + 110);
  const before = content.slice(start, position);
  const matched = content.slice(position, position + keyword.length);
  const after = content.slice(position + keyword.length, end);
  return `${start > 0 ? '…' : ''}${escapeHtml(before)}<mark>${escapeHtml(matched)}</mark>${escapeHtml(after)}${end < content.length ? '…' : ''}`;
}

async function loadIndex() {
  if (searchIndex) return searchIndex;
  resultSummary.textContent = '正在載入全站搜尋索引…';
  const response = await fetch('/data/site-search-index.json');
  if (!response.ok) throw new Error('找不到搜尋索引');
  searchIndex = await response.json();
  return searchIndex;
}

function scorePage(page, terms) {
  const title = normalize(page.title);
  const path = normalize(page.path);
  const content = normalize(page.content);
  let score = 0;

  for (const term of terms) {
    const titleMatches = title.split(term).length - 1;
    const pathMatches = path.split(term).length - 1;
    const contentMatches = content.split(term).length - 1;
    if (titleMatches + pathMatches + contentMatches === 0) return -1;
    score += titleMatches * 20 + pathMatches * 8 + Math.min(contentMatches, 10);
  }
  return score;
}

function renderResults(pages, query) {
  const terms = normalize(query).split(' ').filter(Boolean);
  const matchedPages = pages
    .map(page => ({ page, score: scorePage(page, terms) }))
    .filter(item => item.score >= 0)
    .sort((a, b) => b.score - a.score || a.page.title.localeCompare(b.page.title, 'zh-Hant'));

  resultSummary.textContent = `「${query}」共有 ${matchedPages.length} 筆結果`;
  if (!matchedPages.length) {
    resultsContainer.innerHTML = '<p class="empty">找不到結果。請嘗試較短的關鍵字，或使用不同詞彙。</p>';
    return;
  }

  resultsContainer.innerHTML = matchedPages.map(({ page }) => `
    <article class="result-card">
      <a class="result-title" href="/${encodeURI(page.path)}">${escapeHtml(page.title)}</a>
      <p class="result-path">/${escapeHtml(page.path)}</p>
      <p class="result-snippet">${createSnippet(page.content, terms[0])}</p>
    </article>
  `).join('');
}

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  const query = keywordInput.value.trim();
  if (!query) return;

  try {
    const { pages } = await loadIndex();
    renderResults(pages, query);
  } catch (error) {
    resultSummary.textContent = '搜尋索引尚未建立。請在網站根目錄執行 node tools/build-search-index.mjs。';
    resultsContainer.innerHTML = '';
  }
});
