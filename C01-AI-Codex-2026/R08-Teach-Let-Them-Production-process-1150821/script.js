const tabs = [...document.querySelectorAll("[data-tab]")];
const panels = [...document.querySelectorAll("[data-panel]")];

function activateTab(name, updateHash = true) {
  const tab = tabs.find((item) => item.dataset.tab === name) || tabs[0];
  const activeName = tab.dataset.tab;
  tabs.forEach((item) => {
    const active = item === tab;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-selected", String(active));
    item.tabIndex = active ? 0 : -1;
  });
  panels.forEach((panel) => {
    const active = panel.dataset.panel === activeName;
    panel.classList.toggle("is-active", active);
    panel.hidden = !active;
  });
  if (updateHash) history.replaceState(null, "", `#${activeName}`);
  document.querySelector(".tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab.dataset.tab));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
    activateTab(tabs[nextIndex].dataset.tab);
  });
});

const requestedTab = window.location.hash.slice(1);
if (requestedTab && tabs.some((tab) => tab.dataset.tab === requestedTab)) activateTab(requestedTab, false);
