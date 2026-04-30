const grid = document.getElementById('cardGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortSelect = document.getElementById('sortSelect');

// 初始化渲染
function renderCards(data) {
  grid.innerHTML = '';
  if (data.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-secondary);">沒有找到符合條件的提示詞。</p>';
    return;
  }

  data.forEach((item) => {
    // 新增：根據是否有 URL 決定 cardSubjectHtml 的內容
    let cardSubjectHtml = '';
    if (item.url) {
      // 有 URL 時，使用 <a> 標籤，並設定 target="_blank" 以在新視窗開啟
      // 外部 class "card-subject-link" 用於設定無底線樣式 (見 HTML style 調整)
      cardSubjectHtml = `<a href="${item.url}" target="_blank" class="card-subject-link"><div class="card-subject">${item.title}</div></a>`;
    } else {
      // 無 URL 時，只使用原本的 <div>
      cardSubjectHtml = `<div class="card-subject">${item.title}</div>`;
    }
    // -------------------------------------------------------------------

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
            <div class="card-header">
                <span class="card-id">#${String(item.id).padStart(3, '0')}</span>
                <span class="card-tag">${item.category}</span>
            </div>
            <div class="card-image-container" onclick="openModal('${item.image}')">
                <img src="${item.image}" alt="${item.category}" class="card-image" loading="lazy">
            </div>
            <div class="card-body">
                ${cardSubjectHtml} <div class="prompt-box" id="prompt-${item.id}">${item.prompt}</div>
            </div>
            <div class="card-footer">
                <span class="card-date">${item.date}</span>
                <button class="btn-copy" onclick="copyText('prompt-${item.id}')">
                    📋 複製提示詞
                </button>
            </div>
        `;
    grid.appendChild(card);
  });
}

// 篩選與搜尋邏輯
function filterCards() {
  const query = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  let filtered = promptsData.filter((item) => {
    // 修正：檢查 item.url 是否存在，如果不存在則使用空字串，防止錯誤
    const itemUrl = item.url ? item.url.toLowerCase() : '';
    const matchSearch = item.prompt.toLowerCase().includes(query) || item.category.toLowerCase().includes(query) || String(item.id).includes(query) || itemUrl.includes(query);
    const matchCategory = category === 'all' || item.category === category;
    return matchSearch && matchCategory;
  });

  sortAndRender(filtered);
}

// 排序邏輯
function sortCards() {
  filterCards(); // 重新觸發篩選，篩選函數內部會呼叫 sortAndRender
}

function sortAndRender(data) {
  const sortType = sortSelect.value;
  const sorted = [...data]; // 複製陣列以免修改原資料

  if (sortType === 'newest') {
    sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortType === 'oldest') {
    sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortType === 'id_asc') {
    sorted.sort((a, b) => a.id - b.id);
  } else if (sortType === 'id_dsc') {
    sorted.sort((a, b) => b.id - a.id);
  }

  renderCards(sorted);
}

// 複製功能
function copyText(elementId) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showToast();
    })
    .catch((err) => {
      console.error('複製失敗:', err);
    });
}

// Toast 提示
function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// 深色模式切換
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('themeIcon');
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    icon.innerText = '🌙'; // 切換到淺色時，圖示變月亮（暗示可切回暗色）
  } else {
    body.setAttribute('data-theme', 'dark');
    icon.innerText = '☀️'; // 切換到暗色時，圖示變太陽（暗示可切回淺色）
  }
}

// 燈箱功能
function openModal(imgSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  modal.classList.add('show'); // 使用 class 控制顯示
  modalImg.src = imgSrc;
}

function closeModal() {
  document.getElementById('imageModal').classList.remove('show');
}

// 初始執行
filterCards(); // 預設執行一次以顯示所有卡片
