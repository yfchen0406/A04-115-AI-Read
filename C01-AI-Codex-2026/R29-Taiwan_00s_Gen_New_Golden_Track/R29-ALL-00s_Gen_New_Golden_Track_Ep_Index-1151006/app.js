(() => {
  const toast = document.getElementById('toast');
  let toastTimer;
  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  };
  document.querySelectorAll('[data-url-placeholder="true"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const url = link.getAttribute('href');
      if (!url || url === '#') {
        event.preventDefault();
        showToast('這個連結網址將於後續補上');
      }
    });
  });
  const links = window.SERIES_LINKS || {};
  const cards = [...document.querySelectorAll('.episode-card[id^="episode-"]')];
  cards.forEach((card) => {
    const key = card.id === 'episode-00' ? 'overview' : `episode${card.id.slice(-2)}`;
    const urls = links[key] || {};
    const buttons = card.querySelectorAll('.card-actions a[data-url-placeholder="true"]');
    const values = [urls.webpage, urls.withSubtitles, urls.withoutSubtitles];
    buttons.forEach((button, index) => {
      const value = values[index] || '';
      if (value.trim()) {
        button.href = value.trim();
        button.target = '_blank';
        button.rel = 'noopener noreferrer';
        button.removeAttribute('data-url-placeholder');
      }
    });
  });
  const navLinks = [...document.querySelectorAll('.nav-pill')];
  const targets = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === id));
      });
    }, { rootMargin: '-22% 0px -68% 0px', threshold: 0 });
    targets.forEach((target) => observer.observe(target));
  }
})();
