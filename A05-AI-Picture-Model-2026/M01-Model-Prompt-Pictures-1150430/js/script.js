const grid = document.getElementById('cardGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortSelect = document.getElementById('sortSelect');

// 初始化渲染，更換新的
// function renderCards(data) {
//   grid.innerHTML = '';
//   if (data.length === 0) {
//     grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-secondary);">沒有找到符合條件的提示詞。</p>';
//     return;
//   }

//   data.forEach((item) => {
//     // 新增：根據是否有 URL 決定 cardSubjectHtml 的內容
//     let cardSubjectHtml = '';
//     if (item.url) {
//       // 有 URL 時，使用 <a> 標籤，並設定 target="_blank" 以在新視窗開啟
//       // 外部 class "card-subject-link" 用於設定無底線樣式 (見 HTML style 調整)
//       cardSubjectHtml = `<a href="${item.url}" target="_blank" class="card-subject-link"><div class="card-subject">${item.title}</div></a>`;
//     } else {
//       // 無 URL 時，只使用原本的 <div>
//       cardSubjectHtml = `<div class="card-subject">${item.title}</div>`;
//     }
//     // -------------------------------------------------------------------

//     const card = document.createElement('div');
//     card.className = 'card';
//     card.innerHTML = `
//             <div class="card-header">
//                 <span class="card-id">#${String(item.id).padStart(3, '0')}</span>
//                 <span class="card-tag">${item.category}</span>
//             </div>
//             <div class="card-image-container" onclick="openModal('${item.image}')">
//                 <img src="${item.image}" alt="${item.category}" class="card-image" loading="lazy">
//             </div>
//             <div class="card-body">
//                 ${cardSubjectHtml} <div class="prompt-box" id="prompt-${item.id}">${item.prompt}</div>
//             </div>
//             <div class="card-footer">
//                 <span class="card-date">${item.date}</span>
//                 <button class="btn-copy" onclick="copyText('prompt-${item.id}')">
//                     📋 複製提示詞
//                 </button>
//             </div>
//         `;
//     grid.appendChild(card);
//   });
// }
function renderCards(data) {
  grid.innerHTML = '';
  if (data.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-secondary);">沒有找到符合條件的提示詞。</p>';
    return;
  }

  data.forEach((item) => {
    // 判斷是否為影片 (檢查副檔名是否為 .mp4, .webm, .mov 等)
    // 這裡簡單判定：如果檔名結尾是 .mp4 就當作影片
    const isVideo = item.image.toLowerCase().endsWith('.mp4');

    // 處理標題連結 (既有邏輯)
    let cardSubjectHtml = '';
    if (item.url) {
      cardSubjectHtml = `<a href="${item.url}" target="_blank" class="card-subject-link"><div class="card-subject">${item.title}</div></a>`;
    } else {
      cardSubjectHtml = `<div class="card-subject">${item.title}</div>`;
    }

    // 建立媒體 HTML (如果是影片顯示 video 標籤，圖片則顯示 img)
    // 影片設定：muted(靜音) loop(循環) playsinline(手機不全螢幕)
    // 滑鼠移過去自動播放效果可選，這裡先做靜態封面或自動輪播
    let mediaHtml = '';
    if (isVideo) {
      mediaHtml = `
        <video class="card-image" muted loop playsinline onmouseover="this.play()" onmouseout="this.pause()">
            <source src="${item.image}" type="video/mp4">
            您的瀏覽器不支援影片標籤。
        </video>
        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); font-size:2rem; pointer-events:none; text-shadow:0 0 5px rgba(0,0,0,0.5);">▶️</div>
      `;
    } else {
      mediaHtml = `<img src="${item.image}" alt="${item.category}" class="card-image" loading="lazy">`;
    }

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
            <div class="card-header">
                <span class="card-id">#${String(item.id).padStart(3, '0')}</span>
                <span class="card-tag">${item.category}</span>
            </div>
            <div class="card-image-container" onclick="openModal('${item.image}', ${isVideo})">
                ${mediaHtml}
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
// function openModal(imgSrc) {
//   const modal = document.getElementById('imageModal');
//   const modalImg = document.getElementById('modalImg');
//   modal.classList.add('show'); // 使用 class 控制顯示
//   modalImg.src = imgSrc;
// }

// function closeModal() {
//   document.getElementById('imageModal').classList.remove('show');
// }

// 修改燈箱功能：支援圖片與影片切換
function openModal(src, isVideo) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalVideo = document.getElementById('modalVideo');

  modal.classList.add('show');

  if (isVideo) {
    // 隱藏圖片，顯示影片
    modalImg.style.display = 'none';
    modalImg.src = ''; 
    
    modalVideo.style.display = 'block';
    modalVideo.src = src;
    modalVideo.play(); // 打開時自動播放
  } else {
    // 隱藏影片，顯示圖片
    modalVideo.style.display = 'none';
    modalVideo.pause(); // 確保影片停止
    modalVideo.src = '';

    modalImg.style.display = 'block';
    modalImg.src = src;
  }
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  const modalVideo = document.getElementById('modalVideo');
  
  modal.classList.remove('show');
  
  // 關閉燈箱時，暫停影片並清空來源，避免背景繼續播放聲音
  modalVideo.pause();
  modalVideo.src = '';
}

// 初始執行
filterCards(); // 預設執行一次以顯示所有卡片
