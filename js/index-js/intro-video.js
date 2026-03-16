// js/intro-video.js

(function () {
  // 1. 設定資源路徑
  const imgList = [
    "/images/O01-open/A01-1.webp",
    "/images/O01-open/A01-2.webp",
    "/images/O01-open/A01-3.webp",
    "/images/O01-open/A01-4.webp",
  ];

  // 2. 建立 CSS 樣式 (直接透過 JS 注入，這樣您就不必改動 index.html 的 <style>)
  const style = document.createElement("style");
  style.textContent = `
    #yf-intro-overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: #000; z-index: 9999;
      display: flex; justify-content: center; align-items: center;
      transition: opacity 1s ease-out; cursor: pointer;
    }
    #yf-intro-img {
      max-width: 90%; max-height: 80%;
      object-fit: contain; transition: opacity 1s ease-in-out;
      opacity: 0;
    }
    .click-hint {
      position: absolute; bottom: 10%; color: white;
      font-size: 1.2rem; letter-spacing: 2px;
      animation: yf-blink 2s infinite;
    }
    @keyframes yf-blink {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
    body.intro-active { overflow: hidden; }
  `;
  document.head.appendChild(style);

  // 3. 建立遮罩元素
  const overlay = document.createElement("div");
  overlay.id = "yf-intro-overlay";
  overlay.innerHTML = `
    <img id="yf-intro-img" src="${imgList[0]}" alt="Intro Image">
    <div class="click-hint">CLICK TO ENTER</div>
  `;

  // 4. 初始化邏輯
  document.addEventListener("DOMContentLoaded", function () {
    document.body.prepend(overlay);
    document.body.classList.add("intro-active");

    const imgElement = document.getElementById("yf-intro-img");

    // 進入網站的函數
    const enterSite = () => {
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
      setTimeout(() => {
        overlay.remove();
        document.body.classList.remove("intro-active");
      }, 1000);
    };

    overlay.onclick = enterSite;

    // 顯示第一張
    setTimeout(() => {
      imgElement.style.opacity = "1";
    }, 100);

    // 圖片輪播控制
    let currentImgIndex = 0;
    const showNextImage = () => {
      // 修正點：使用 imgList 而不是不存在的 shuffledImgs
      if (currentImgIndex < imgList.length - 1) {
        imgElement.style.opacity = "0";
        setTimeout(() => {
          currentImgIndex++;
          imgElement.src = imgList[currentImgIndex];
          imgElement.style.opacity = "1";
          setTimeout(showNextImage, 3000);
        }, 1000);
      } else {
        // 播完最後一張自動進入，或保留在最後一張等點擊
        setTimeout(enterSite, 3000);
      }
    };

    // 3秒後開始切換到第二張
    setTimeout(showNextImage, 3000);
  });
})();
