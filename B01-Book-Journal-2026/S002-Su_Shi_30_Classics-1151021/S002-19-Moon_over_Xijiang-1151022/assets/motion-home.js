(() => {
  "use strict";
  const install = () => {
    const actions = document.querySelector(".hero-actions");
    if (!actions || actions.querySelector('[data-motion-home-link="true"]')) return;
    const link = document.createElement("a");
    link.className = "start-link";
    link.href = "./motion.html";
    link.dataset.motionHomeLink = "true";
    link.textContent = "動畫特效版 ✦";
    actions.append(link);
  };
  const root = document.getElementById("root");
  if (!root) return;
  const observer = new MutationObserver(install);
  observer.observe(root, { childList: true, subtree: true });
  install();
})();
