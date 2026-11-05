const tabs = document.querySelectorAll('.day-tab');
const panels = document.querySelectorAll('.day-panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.day;
    tabs.forEach((item) => { item.classList.toggle('active', item === tab); item.setAttribute('aria-selected', item === tab ? 'true' : 'false'); });
    panels.forEach((panel) => { const selected = panel.id === target; panel.hidden = !selected; panel.classList.toggle('active', selected); });
    document.getElementById(target).scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  tab.addEventListener('keydown', (event) => {
    const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const current = [...tabs].indexOf(tab);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    tabs[next].focus();
    tabs[next].click();
  });
});

const galleryTabs = [...document.querySelectorAll('.gallery-tab')];
const galleryPanels = [...document.querySelectorAll('.gallery-panel')];

galleryTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('aria-controls');
    galleryTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    galleryPanels.forEach((panel) => { panel.hidden = panel.id !== target; });
  });

  tab.addEventListener('keydown', (event) => {
    const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? galleryTabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + galleryTabs.length) % galleryTabs.length;
    galleryTabs[next].focus();
    galleryTabs[next].click();
  });
});

document.querySelectorAll('.art-slot').forEach((slot) => {
  const image = slot.querySelector('img');
  const showPlaceholder = () => slot.classList.add('is-placeholder');
  image.addEventListener('error', showPlaceholder);
  if (image.complete && !image.naturalWidth) showPlaceholder();
});

document.querySelectorAll('.day-panel').forEach((panel, index) => {
  const journalLink = document.createElement('a');
  journalLink.className = 'journal-link';
  journalLink.href = `day-${index + 1}.html`;
  journalLink.textContent = `開啟第 ${index + 1} 天旅遊紀錄頁 →`;
  panel.querySelector('.day-head > div').append(journalLink);
});
