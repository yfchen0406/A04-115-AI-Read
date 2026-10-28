(() => {
  const root = document.getElementById("root");
  if (!root) return;

  const addMotionLink = () => {
    const actions = root.querySelector(".hero-actions");
    if (!actions || actions.querySelector(".motion-edition-link")) return;

    const link = document.createElement("a");
    link.className = "start-link motion-edition-link";
    link.href = "./motion.html";
    link.textContent = "動畫特效版 ✦";
    link.setAttribute("aria-label", "開啟動畫特效版");

    // Keep the three established home actions in their reference order;
    // the animation edition is the fourth and final action.
    actions.append(link);
  };

  const observer = new MutationObserver(addMotionLink);
  observer.observe(root, {childList: true, subtree: true});
  addMotionLink();
})();
