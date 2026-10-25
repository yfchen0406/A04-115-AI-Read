(() => {
  "use strict";
  const label = "動畫特效版";
  const selector = ".cover-hero-copy .hero-actions";

  function addEffectsButton() {
    document.querySelectorAll(selector).forEach(actions => {
      if (actions.querySelector("[data-effects-entry]")) return;
      const link = document.createElement("a");
      link.className = "effects-entry-cta";
      link.href = window.EPISODE_SETTINGS?.links?.effects || "./effects.html";
      link.dataset.effectsEntry = "true";
      link.setAttribute("aria-label", label);
      const text = document.createElement("span");
      text.textContent = label;
      const star = document.createElement("span");
      star.className = "effects-entry-star";
      star.setAttribute("aria-hidden", "true");
      star.textContent = "✦";
      link.append(text, star);
      actions.appendChild(link);
    });
  }

  const observer = new MutationObserver(addEffectsButton);
  observer.observe(document.documentElement, {childList:true, subtree:true});
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addEffectsButton, {once:true});
  } else {
    addEffectsButton();
  }
})();
