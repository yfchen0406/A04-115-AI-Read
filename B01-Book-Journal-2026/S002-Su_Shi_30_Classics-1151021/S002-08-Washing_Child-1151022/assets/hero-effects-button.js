(function () {
  "use strict";

  function enhanceHome() {
    var hero = document.querySelector(".hero");
    var actions = hero && hero.querySelector(".hero-actions");
    if (!hero || !actions) return false;

    if (!actions.querySelector("[data-animation-effects-link]")) {
      var link = document.createElement("a");
      link.className = "start-link effects-version-button";
      link.href = "./effects.html";
      link.textContent = "動畫特效版 ✦";
      link.setAttribute("data-animation-effects-link", "true");
      link.setAttribute("aria-label", "開啟動畫特效版");
      // Keep the new option at the far right, after reading and both YouTube links.
      actions.appendChild(link);
    }

    if (!hero.querySelector(".cover-home-effect")) {
      var light = document.createElement("div");
      light.className = "cover-home-effect";
      light.setAttribute("aria-hidden", "true");
      var shade = hero.querySelector(".hero-shade");
      if (shade) hero.insertBefore(light, shade);
      else hero.appendChild(light);
      hero.classList.add("has-cover-effects");
    }
    return true;
  }

  function start() {
    if (document.body.dataset.effectsVersion === "true") return;
    var root = document.getElementById("root") || document.body;
    var observer = new MutationObserver(enhanceHome);
    observer.observe(root, { childList: true, subtree: true });
    enhanceHome();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
