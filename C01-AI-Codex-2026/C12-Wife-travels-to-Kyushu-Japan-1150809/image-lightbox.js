function createImageLightbox() {
  if (document.querySelector(".image-lightbox")) return;

  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.hidden = true;
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "放大檢視照片");
  lightbox.innerHTML = `
    <button class="image-lightbox-close" type="button" aria-label="關閉放大圖片">×</button>
    <button class="image-lightbox-arrow image-lightbox-previous" type="button" aria-label="上一張圖片">‹</button>
    <div class="image-lightbox-content">
      <img class="image-lightbox-image" alt="">
      <p class="image-lightbox-caption"></p>
      <p class="image-lightbox-counter" aria-live="polite"></p>
    </div>
    <button class="image-lightbox-arrow image-lightbox-next" type="button" aria-label="下一張圖片">›</button>`;
  document.body.append(lightbox);

  const enlargedImage = lightbox.querySelector(".image-lightbox-image");
  const caption = lightbox.querySelector(".image-lightbox-caption");
  const counter = lightbox.querySelector(".image-lightbox-counter");
  const closeButton = lightbox.querySelector(".image-lightbox-close");
  const previousButton = lightbox.querySelector(".image-lightbox-previous");
  const nextButton = lightbox.querySelector(".image-lightbox-next");
  let lastFocusedImage = null;
  let galleryImages = [];
  let activeIndex = 0;

  const getCaption = (image) => {
    const figure = image.closest("figure");
    const number = figure?.querySelector(".photo-caption-index")?.textContent.trim();
    const title = figure?.querySelector(".photo-caption-title")?.textContent.trim();
    if (number && title) return `${number}｜${title}`;
    return figure?.querySelector("figcaption")?.textContent.trim() || image.alt || "";
  };

  const renderActiveImage = () => {
    const image = galleryImages[activeIndex];
    if (!image) return;
    enlargedImage.src = image.currentSrc || image.src;
    enlargedImage.alt = image.alt || "放大圖片";
    caption.textContent = getCaption(image);
    counter.textContent = `${activeIndex + 1} / ${galleryImages.length}`;
    previousButton.hidden = galleryImages.length < 2;
    nextButton.hidden = galleryImages.length < 2;
    previousButton.disabled = activeIndex === 0;
    nextButton.disabled = activeIndex === galleryImages.length - 1;
  };

  const close = () => {
    lightbox.hidden = true;
    document.body.classList.remove("is-lightbox-open");
    enlargedImage.removeAttribute("src");
    lastFocusedImage?.focus();
  };

  const open = (image) => {
    const panel = image.closest(".photo-panel");
    const panelImages = panel
      ? [...panel.querySelectorAll(".photo-grid img")]
      : [image];
    galleryImages = panelImages.filter((item) => !item.closest(".photo-slot.is-placeholder"));
    if (!galleryImages.includes(image)) galleryImages.push(image);
    activeIndex = galleryImages.indexOf(image);
    lastFocusedImage = image;
    renderActiveImage();
    lightbox.hidden = false;
    document.body.classList.add("is-lightbox-open");
    closeButton.focus();
  };

  const move = (amount) => {
    const nextIndex = activeIndex + amount;
    if (nextIndex < 0 || nextIndex >= galleryImages.length) return;
    activeIndex = nextIndex;
    renderActiveImage();
  };

  const bindImage = (image) => {
    if (image.dataset.lightboxReady === "true" || image.closest(".image-lightbox")) return;
    image.dataset.lightboxReady = "true";
    image.classList.add("is-zoomable");
    image.setAttribute("tabindex", "0");
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `${image.alt || "圖片"}，點擊放大檢視`);
    image.addEventListener("click", () => open(image));
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(image);
      }
    });
  };

  document.querySelectorAll("img").forEach(bindImage);
  const observer = new MutationObserver(() => {
    document.querySelectorAll("img").forEach(bindImage);
  });
  observer.observe(document.body, { childList: true, subtree: true });

  closeButton.addEventListener("click", close);
  previousButton.addEventListener("click", () => move(-1));
  nextButton.addEventListener("click", () => move(1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });
  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  });
}

createImageLightbox();
