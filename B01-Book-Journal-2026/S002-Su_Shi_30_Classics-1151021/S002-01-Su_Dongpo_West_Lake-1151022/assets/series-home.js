(() => {
  const grid = document.querySelector('#cover-grid');
  const dialog = document.querySelector('.cover-dialog');
  const image = dialog.querySelector('.dialog-image');
  const caption = dialog.querySelector('.dialog-caption');
  const reading = dialog.querySelector('.dialog-reading');
  const cards = [];
  let active = 0;

  for (let episode = 1; episode <= 30; episode += 1) {
    const number = String(episode).padStart(2, '0');
    const card = document.createElement('article');
    card.className = 'cover-card';
    card.innerHTML = `<button class="cover-open" type="button" data-index="${episode - 1}" aria-label="放大查看第${number}集封面"><img src="./assets/series-covers/cover-${number}.webp" alt="蘇東坡名作三十第${number}集封面" loading="${episode <= 8 ? 'eager' : 'lazy'}"><span class="cover-badge">第 ${number} 集</span></button><div class="cover-card-caption"><span class="episode-number">EPISODE ${number}</span><span class="cover-card-hint">點擊放大</span></div>`;
    grid.append(card);
    cards.push(card.querySelector('button'));
  }

  const show = (index) => {
    active = (index + cards.length) % cards.length;
    const number = String(active + 1).padStart(2, '0');
    image.src = `./assets/series-covers/cover-${number}.webp`;
    image.alt = `蘇東坡名作三十第${number}集封面`;
    caption.textContent = `蘇東坡名作三十・第 ${number} 集`;
    reading.hidden = active !== 0;
  };

  cards.forEach((button) => button.addEventListener('click', () => {
    show(Number(button.dataset.index));
    dialog.showModal();
  }));
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.dialog-prev').addEventListener('click', () => show(active - 1));
  dialog.querySelector('.dialog-next').addEventListener('click', () => show(active + 1));
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(active - 1);
    if (event.key === 'ArrowRight') show(active + 1);
  });
})();
