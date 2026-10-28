(() => {
  const root = document.getElementById("root");
  if (!root) return;

  const alignControls = () => {
    const row = root.querySelector(".player-panel .control-row");
    if (!row) return;
    const buttons = row.querySelectorAll(":scope > button");
    if (buttons.length >= 8) {
      if (buttons[1].textContent !== "上一鏡") buttons[1].textContent = "上一鏡";
      if (buttons[7].textContent !== "重新播放") buttons[7].textContent = "重新播放";
      buttons[2].classList.add("reference-play-button");
      buttons[6].classList.add("reference-hidden-control");
    }

    let toggle = row.querySelector(":scope > .reference-caption-toggle");
    if (!toggle) {
      toggle = document.createElement("label");
      toggle.className = "reference-caption-toggle";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = true;
      input.setAttribute("aria-label", "顯示字幕");
      input.addEventListener("change", () => {
        root.querySelectorAll(".frame-subtitle").forEach((item) => {
          item.style.visibility = input.checked ? "" : "hidden";
        });
      });
      const text = document.createElement("span");
      text.textContent = "字幕";
      toggle.append(input, text);
      row.append(toggle);
    }
  };

  const observer = new MutationObserver(alignControls);
  observer.observe(root, {childList: true, subtree: true});
  alignControls();
})();
