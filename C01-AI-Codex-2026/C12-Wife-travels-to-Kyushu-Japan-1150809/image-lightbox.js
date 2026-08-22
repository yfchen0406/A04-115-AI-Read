function createImageLightbox() {
  const images = [...document.querySelectorAll('img')];
  if (!images.length || document.querySelector('.image-lightbox')) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.hidden = true;
  lightbox.innerHTML = '<button class="image-lightbox-close" type="button" aria-label="關閉放大圖片">×</button><img class="image-lightbox-image" alt=""><p class="image-lightbox-caption"></p>';
  document.body.append(lightbox);

  const enlargedImage = lightbox.querySelector('.image-lightbox-image');
  const caption = lightbox.querySelector('.image-lightbox-caption');
  const closeButton = lightbox.querySelector('.image-lightbox-close');
  let lastFocusedImage = null;

  const close = () => {
    lightbox.hidden = true;
    document.body.classList.remove('is-lightbox-open');
    enlargedImage.removeAttribute('src');
    lastFocusedImage?.focus();
  };

  const open = (image) => {
    lastFocusedImage = image;
    enlargedImage.src = image.currentSrc || image.src;
    enlargedImage.alt = image.alt || '放大圖片';
    caption.textContent = image.alt || '';
    lightbox.hidden = false;
    document.body.classList.add('is-lightbox-open');
    closeButton.focus();
  };

  const bindImage = (image) => {
    if (image.dataset.lightboxReady === 'true' || image.closest('.image-lightbox')) return;
    image.dataset.lightboxReady = 'true';
    image.classList.add('is-zoomable');
    image.setAttribute('tabindex', '0');
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `${image.alt || '圖片'}，點擊放大檢視`);
    image.addEventListener('click', () => open(image));
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open(image);
      }
    });
  };

  images.forEach(bindImage);
  const observer = new MutationObserver(() => {
    document.querySelectorAll('img').forEach(bindImage);
  });
  observer.observe(document.body, { childList: true, subtree: true });

  closeButton.addEventListener('click', close);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.hidden) close();
  });
}

createImageLightbox();
