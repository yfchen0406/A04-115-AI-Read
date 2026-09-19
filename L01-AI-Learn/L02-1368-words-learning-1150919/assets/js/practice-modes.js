/* Six lightweight practice modes grounded in source word records. */
(function () {
  const boot = () => {
    const api = window.__learning;
    if (!api || !api.data || !api.state) return window.setTimeout(boot, 80);
    if (document.body.dataset.page !== "practice" || document.getElementById("practice-modes")) return;
    const esc = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
    const day = api.data.days.days.find((item) => item.day === Number(api.state.lastDay)) || api.data.days.days[0];
    const byId = (id) => api.data.words.words.find((word) => word.id === id);
    const words = day.wordIds.map(byId).filter(Boolean);
    const modes = ["英翻分類", "分類找詞", "情境選字", "原文填空", "來源辨識", "重新表達"];
    let mode = 0;
    let index = 0;
    let feedback = "";
    let answered = false;

    const section = document.createElement("section");
    section.id = "practice-modes";
    section.className = "card note-green";
    document.getElementById("app").appendChild(section);

    function question() {
      const word = words[index % words.length] || api.data.words.words[0];
      const group = word.subcategory || word.category;
      const distractors = api.data.words.words.filter((item) => item.id !== word.id && item.subcategory !== word.subcategory).slice(0, 3);
      let prompt = "";
      let answer = group;
      let options = [group, ...distractors.map((item) => item.subcategory || item.category)];
      if (mode === 0) prompt = `原書將「${word.word}」放在哪個細分類？`;
      if (mode === 1) { prompt = `哪一個詞項屬於「${group}」？`; answer = word.word; options = [word.word, ...distractors.map((item) => item.word)]; }
      if (mode === 2) { const source = word.examples?.[0]?.text || `The source word is ${word.word}.`; prompt = `情境選字：${source.replace(new RegExp(word.word, "i"), "____")}`; answer = word.word; options = [word.word, ...distractors.map((item) => item.word)]; }
      if (mode === 3) { prompt = "句子填空：請從選項選出今天的原書詞項。"; answer = word.word; options = [word.word, ...distractors.map((item) => item.word)]; }
      if (mode === 4) { const source = word.sourceContext?.[0]?.text || ""; prompt = `哪個詞項出現在這段原文？「${source.slice(0, 180)}」`; answer = word.word; options = [word.word, ...distractors.map((item) => item.word)]; }
      if (mode === 5) prompt = `不確定「${word.word}」時，先辨認它的原書細分類。`;
      options = [...new Set(options)].slice(0, 4);
      return { word, prompt, answer, options };
    }

    function render() {
      const item = question();
      section.innerHTML = `<div class="section-head"><div><h3>每日練習</h3><p class="muted">以原書分類與來源段落練習，不自行加入中文釋義。</p></div><span class="tag">generated practice</span></div><div class="toolbar">${modes.map((label, i) => `<button class="button ${i === mode ? "blue" : "secondary"}" data-mode="${i}">${label}</button>`).join("")}</div><p class="quiz-question">${esc(item.prompt)}</p><div id="practice-options">${item.options.map((option) => `<button class="quiz-option" data-option="${esc(option)}">${esc(option)}</button>`).join("")}</div>${feedback ? `<p class="card ${feedback === "答對" ? "note-green" : "note-orange"}" style="margin-top:15px">${feedback}</p>` : ""}<div class="actions" style="margin-top:15px"><button class="button" id="practice-next-mode">下一題 →</button><span class="muted">第 ${(index % words.length) + 1} / ${words.length} 題</span></div>`;
      section.querySelectorAll("[data-mode]").forEach((button) => button.addEventListener("click", () => { mode = Number(button.dataset.mode); feedback = ""; answered = false; render(); }));
      section.querySelectorAll("[data-option]").forEach((button) => button.addEventListener("click", () => { if (answered) return; answered = true; feedback = button.dataset.option === item.answer ? "答對！這個答案來自原書詞項資料。" : `再想一下。正確答案是：${item.answer}`; if (button.dataset.option === item.answer && !api.state.practiceResults) api.state.practiceResults = {}; api.state.practiceResults = { ...(api.state.practiceResults || {}), [item.word.id]: true }; api.saveState(); render(); }));
      section.querySelector("#practice-next-mode").addEventListener("click", () => { index += 1; feedback = ""; answered = false; render(); });
    }
    render();
  };
  boot();
}());
