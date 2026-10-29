(() => {
  const addEffectLink = () => {
    document.querySelectorAll(".hero-actions").forEach((actions) => {
      if (actions.querySelector(".effect-version-link")) return;
      const link = document.createElement("a");
      link.className = "start-link effect-version-link";
      link.href = "./effect.html";
      link.textContent = "動畫特效版 ✦";
      link.setAttribute("aria-label", "開啟動畫特效版同步閱讀");
      actions.append(link);
    });
  };

  const start = () => {
    addEffectLink();
    const root = document.getElementById("root") || document.body;
    new MutationObserver(addEffectLink).observe(root, { childList: true, subtree: true });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();
})();
