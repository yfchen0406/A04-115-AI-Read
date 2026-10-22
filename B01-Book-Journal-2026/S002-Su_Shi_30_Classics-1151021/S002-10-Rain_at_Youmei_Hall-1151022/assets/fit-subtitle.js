(() => {
  const fit = () => {
    const element = document.querySelector(".frame-subtitle");
    if (!element) return;
    const text = (element.textContent || "").replace(/\s+/g, " ").trim();
    if (!text) return;
    const available = Math.max(120, element.clientWidth || element.parentElement?.clientWidth * 0.92 || innerWidth * 0.92);
    const fontSize = Math.min(44, available / Math.max(1, [...text].length * 1.08));
    element.style.fontSize = `${Math.max(9, fontSize)}px`;
    element.style.whiteSpace = "nowrap";
    element.style.maxWidth = "92%";
    element.style.overflow = "visible";
  };

  const observe = () => {
    fit();
    const root = document.getElementById("root");
    if (root) new MutationObserver(fit).observe(root, {childList: true, characterData: true, subtree: true});
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", observe, {once: true});
  else observe();
  addEventListener("resize", fit, {passive: true});
  addEventListener("orientationchange", fit, {passive: true});
})();
