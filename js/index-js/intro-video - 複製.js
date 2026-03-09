// js/intro-video.js

(function () {
  // 1. 設定影片路徑
  const videoSrc = '/images/A02-Video/B04.mp4';

  // 2. 動態插入樣式
  const style = document.createElement('style');
  style.innerHTML = `
        #yf-intro-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: #000; z-index: 10000; display: flex;
            justify-content: center; align-items: center; 
            transition: opacity 1s ease;
            cursor: pointer; /* 讓滑鼠變成手指形狀，提示可以點擊 */
        }
        #yf-intro-video { width: 100%; height: 100%; object-fit: cover; }
        
        /* 提示字樣（選配）：提示使用者點擊進入 */
        .click-hint {
            position: absolute; bottom: 50px; left: 50%;
            transform: translateX(-50%);
            color: rgba(255,255,255,0.7);
            font-size: 1.2rem;
            letter-spacing: 2px;
            pointer-events: none; /* 讓點擊穿透到 overlay */
            animation: breathe 2s infinite;
        }
        @keyframes breathe {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
        
        body.intro-active { overflow: hidden !important; }
    `;
  document.head.appendChild(style);

  // 3. 建立結構 (加入 loop 屬性，並移除原本的跳過按鈕)
  const overlay = document.createElement('div');
  overlay.id = 'yf-intro-overlay';
  overlay.innerHTML = `
        <video id="yf-intro-video" muted playsinline preload="auto" loop>
            <source src="${videoSrc}" type="video/mp4">
        </video>
        <div class="click-hint">CLICK TO ENTER</div>
    `;

  document.addEventListener('DOMContentLoaded', function () {
    document.body.prepend(overlay);
    document.body.classList.add('intro-active');

    const video = document.getElementById('yf-intro-video');

    // --- 播放邏輯 ---
    const startVideo = () => {
      video.play().catch((error) => {
        console.log('自動播放被攔截，等待點擊或滑動觸發');
      });
    };

    video.addEventListener('canplaythrough', startVideo, { once: true });
    setTimeout(startVideo, 500);

    // --- 進入主頁函式 (淡出並移除) ---
    const enterSite = () => {
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none'; // 防止重疊點擊
      setTimeout(() => {
        overlay.remove();
        document.body.classList.remove('intro-active');
      }, 1000);
    };

    // 點擊整個背景或影片就進入主頁
    overlay.onclick = enterSite;
  });
})();
