// js/intro-video.js

(function () {
  // 1. 設定資源路徑~~ 原來放B04.mp4
  // const videoSrc = '/images/A02-Video/P01-2.mp4';

  const imgList = [
    "/images/O01-open/A01-1.webp",
    "/images/O01-open/A01-2.webp",
    "/images/O01-open/A01-3.webp",
    "/images/O01-open/A01-4.webp",
    //'/images/O01-open/G01-1.webp',
    // '/images/O01-open/K02-1.webp',
    //'/images/O01-open/O01-1.webp',
    // '/images/O01-open/O01-2.webp',
    // '/images/O01-open/O01-3.webp',
    // '/images/O01-open/O01-4.webp',
    // '/images/O01-open/O01-5.webp',
    // '/A02-AI-New-World-2025/G04-Nano-Banana-pro-advance-1141127/images/A01-1.webp',
    // '/A02-AI-New-World-2025/G04-Nano-Banana-pro-advance-1141127/images/A01-2.webp',
    // '/A02-AI-New-World-2025/G04-Nano-Banana-pro-advance-1141127/images/A01-4.webp',
    // '/A02-AI-New-World-2025/G04-Nano-Banana-pro-advance-1141127/images/A01-5.webp',
    // '/A02-AI-New-World-2025/G04-Nano-Banana-pro-advance-1141127/images/A01-6.webp',
  ];

  // --- 修改處：隨機選取 3 張 ---
  // 先打亂順序，再取出前三張
  const shuffledImgs = imgList.sort(() => Math.random() - 0.5).slice(0, 5);

  // 2. 動態插入樣式
  const style = document.createElement('style');
  style.innerHTML = `
        #yf-intro-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: #000; z-index: 10000; display: flex;
            justify-content: center; align-items: center; 
            transition: opacity 1s ease;
            cursor: pointer;
        }
        #yf-intro-video, .yf-intro-img-unit { 
            position: absolute; width: 100%; height: 100%; 
            transition: opacity 1s ease; 
        }
        #yf-intro-video { object-fit: cover; }
        
        .yf-intro-img-unit { 
            max-width: 85%; max-height: 80%;
            object-fit: contain; 
            opacity: 0; 
            border-radius: 12px;
            box-shadow: 0 0 30px rgba(255,255,255,0.1);
        }
        
        .click-hint {
            position: absolute; bottom: 50px; left: 50%;
            transform: translateX(-50%);
            color: rgba(255,255,255,0.5);
            font-size: 1rem;
            letter-spacing: 2px;
            pointer-events: none;
            animation: breathe 2s infinite;
            z-index: 10001;
        }
        @keyframes breathe { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        body.intro-active { overflow: hidden !important; }
    `;
  document.head.appendChild(style);

  // 3. 建立結構
  const overlay = document.createElement('div');
  overlay.id = 'yf-intro-overlay';
  overlay.innerHTML = `
        <video id="yf-intro-video" muted playsinline preload="auto">
            <source src="${videoSrc}" type="video/mp4">
        </video>
        <img id="yf-intro-img" class="yf-intro-img-unit" src="${shuffledImgs[0]}" alt="Intro Image">
        <div class="click-hint">CLICK TO ENTER</div>
    `;

  document.addEventListener('DOMContentLoaded', function () {
    document.body.prepend(overlay);
    document.body.classList.add('intro-active');

    const video = document.getElementById('yf-intro-video');
    const imgElement = document.getElementById('yf-intro-img');

    const enterSite = () => {
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
      setTimeout(() => {
        overlay.remove();
        document.body.classList.remove('intro-active');
      }, 1000);
    };

    // 圖片輪播控制
    let currentImgIndex = 0;
    const showNextImage = () => {
      // 判斷是否播完這 3 張
      if (currentImgIndex < shuffledImgs.length - 1) {
        imgElement.style.opacity = '0';
        setTimeout(() => {
          currentImgIndex++;
          imgElement.src = shuffledImgs[currentImgIndex];
          imgElement.style.opacity = '1';
          setTimeout(showNextImage, 3000);
        }, 1000);
      } else {
        enterSite();
      }
    };

    const startVideo = () => {
      video.play().catch(() => {});
    };
    video.addEventListener('canplaythrough', startVideo, { once: true });
    setTimeout(startVideo, 500);

    video.onended = function () {
      video.style.opacity = '0';
      imgElement.style.opacity = '1';
      setTimeout(showNextImage, 3000);
    };

    overlay.onclick = enterSite;
    window.onkeydown = enterSite;
  });
})();
