/* Source detail, spaced review, and optional Google Sheets sync. */
(function () {
  const DEFAULT_SHEETS_URL = "https://script.google.com/macros/s/AKfycbzeehiANq1WzrT1lHZOfZZCQ6kIFo1A5Du67JL9XMOIEukk0ceiX-PZTwF0kkHKztU/exec";
  const boot = () => {
    const api = window.__learning;
    if (!api || !api.data || !api.state) return window.setTimeout(boot, 80);
    if (!api.state.settings) api.state.settings = {};
    if (!api.state.settings.sheetsUrl) { api.state.settings.sheetsUrl = DEFAULT_SHEETS_URL; api.saveState(); }

    const esc = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
    const today = new Date().toISOString().slice(0, 10);
    const addDays = (date, days) => { const result = new Date(`${date}T00:00:00`); result.setDate(result.getDate() + days); return result.toISOString().slice(0, 10); };

    function modal() {
      if (document.getElementById("word-detail-dialog")) return document.getElementById("word-detail-dialog");
      const dialog = document.createElement("dialog");
      dialog.id = "word-detail-dialog";
      dialog.style.cssText = "max-width:720px;width:calc(100% - 30px);border:3px solid #17324d;border-radius:16px;padding:0;background:#fffdf7;color:#17324d;box-shadow:10px 10px 0 #17324d";
      dialog.innerHTML = `<article style="padding:24px"><div class="section-head"><h3 id="detail-word"></h3><button class="button secondary" id="close-word-detail">關閉</button></div><p id="detail-meta" class="muted"></p><h4>書中原文段落</h4><div id="detail-context" class="reading"></div><h4>書中例句</h4><div id="detail-examples" class="reading"></div><p class="muted" style="margin-top:18px">以上內容均直接取自 EPUB 原文；系統尚未自行補寫中文釋義。</p></article>`;
      document.body.appendChild(dialog);
      dialog.querySelector("#close-word-detail").addEventListener("click", () => dialog.close());
      return dialog;
    }

    function showWord(word) {
      const dialog = modal();
      dialog.querySelector("#detail-word").textContent = word.word;
      dialog.querySelector("#detail-meta").textContent = `${word.category} · ${word.subcategory || "原書分類"} · ${word.pos || "詞性待原書頁面判讀"}`;
      dialog.querySelector("#detail-context").innerHTML = (word.sourceContext || []).map((item) => `<p>${esc(item.text)}<br><small class="muted">${esc(item.sourceFile)}</small></p>`).join("") || `<p class="muted">目前沒有抽取到對應段落。</p>`;
      dialog.querySelector("#detail-examples").innerHTML = (word.examples || []).map((item) => `<p>${esc(item.text)}</p>`).join("") || `<p class="muted">目前沒有抽取到標點完整的例句。</p>`;
      dialog.showModal();
    }

    function ensureQueue() { if (!Array.isArray(api.state.syncQueue)) api.state.syncQueue = []; return api.state.syncQueue; }
    function queue(action, payload) { ensureQueue().push({ action, payload, queuedAt: new Date().toISOString() }); api.saveState(); }
    async function flush() {
      const url = api.state.settings && api.state.settings.sheetsUrl;
      if (!url || !ensureQueue().length) return { sent: 0, pending: ensureQueue().length };
      let sent = 0;
      while (ensureQueue().length) {
        const item = ensureQueue()[0];
        try {
          const response = await fetch(url, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action: item.action, payload: item.payload }) });
          if (response.type !== "opaque" && !response.ok) throw new Error(`HTTP ${response.status}`);
          ensureQueue().shift(); sent += 1; api.saveState();
        } catch { break; }
      }
      return { sent, pending: ensureQueue().length };
    }

    function attachSettings() {
      if (document.body.dataset.page !== "settings" || document.getElementById("sheets-sync-card")) return;
      const card = document.createElement("section");
      card.id = "sheets-sync-card";
      card.className = "card note-blue";
      card.style.maxWidth = "650px";
      card.innerHTML = `<h3>Google Sheets 同步（可選）</h3><p class="muted">填入 Apps Script Web App URL 後，測驗成績會先保存在本機佇列；連線成功時再送出。</p><input class="field" id="sheets-url" style="width:100%;margin:8px 0" placeholder="https://script.google.com/macros/s/.../exec" value="${esc(api.state.settings?.sheetsUrl || "")}"><div class="actions"><button class="button" id="save-sheets">儲存並同步</button><span id="sync-status" class="muted">待同步：${ensureQueue().length} 筆</span></div>`;
      document.getElementById("app").appendChild(card);
      card.querySelector("#save-sheets").addEventListener("click", async () => { api.state.settings.sheetsUrl = card.querySelector("#sheets-url").value.trim(); api.saveState(); const result = await flush(); card.querySelector("#sync-status").textContent = `已送出 ${result.sent} 筆，待同步 ${result.pending} 筆`; });
    }

    function queueLatestScore() {
      if (document.body.dataset.page !== "quiz" || !api.state.scores.length) return;
      const score = api.state.scores[api.state.scores.length - 1];
      const key = `${score.date}:${score.day}`;
      const queueOnce = (action, payload, uniqueKey) => {
        if (!ensureQueue().some((item) => item.action === action && item.payload.key === uniqueKey)) queue(action, { key: uniqueKey, ...payload });
      };
      queueOnce("saveScore", { userName: api.state.settings?.userName || "", chapter: (api.data.days.days.find((item) => item.day === score.day)?.chapterIds || []).join(","), ...score, accuracy: score.correct / 10, completed: score.score >= 80 }, key);
      const day = api.data.days.days.find((item) => item.day === score.day);
      if (!day) return;
      const answers = api.quizAnswers || {};
      day.quizIds.forEach((questionId) => {
        const question = api.data.questions.questions.find((item) => item.id === questionId);
        if (!question) return;
        const sourceWord = api.data.words.words.find((item) => item.id === question.wordIds[0]);
        const detailKey = `${key}:${question.id}`;
        queueOnce("saveQuizDetails", { day: score.day, questionId: question.id, questionType: question.type, question: question.question, userAnswer: answers[question.id] || "未作答", correctAnswer: question.answer, isCorrect: answers[question.id] === question.answer, word: sourceWord?.word || "", category: sourceWord?.subcategory || sourceWord?.category || "" }, detailKey);
      });
      day.wordIds.forEach((wordId) => {
        const sourceWord = api.data.words.words.find((item) => item.id === wordId);
        if (!sourceWord) return;
        const status = api.state.mastered.includes(wordId) ? "mastered" : api.state.uncertain.includes(wordId) ? "uncertain" : "studied";
        queueOnce("saveWordProgress", { word: sourceWord.word, category: sourceWord.subcategory || sourceWord.category, status, correctCount: status === "mastered" ? 1 : 0, wrongCount: status === "uncertain" ? 1 : 0, lastStudy: score.date, nextReview: "", mastered: status === "mastered" }, `${key}:word:${wordId}`);
      });
      queueOnce("saveLearningProgress", { day: score.day, chapter: day.chapterIds.join(","), status: score.score >= 80 ? "completed" : "review", readingProgress: day.readingProgress, practiceCompleted: Boolean(api.state.practiceResults), quizCompleted: true, bestScore: score.score, lastStudy: score.date }, `${key}:learning`);
    }

    function markReviewDates() {
      const intervals = [1, 3, 7, 14, 30];
      let changed = false;
      api.state.mistakes.forEach((mistake) => {
        if (!mistake.nextReview && !mistake.mastered) { mistake.nextReview = addDays(mistake.lastReview || today, intervals[Math.min(Math.max((mistake.wrongCount || 1) - 1, 0), intervals.length - 1)]); changed = true; }
      });
      if (changed) api.saveState();
    }

    document.addEventListener("click", (event) => {
      const card = event.target.closest(".word-card");
      if (card && !event.target.closest("button")) { const word = api.data.words.words.find((item) => item.id === card.dataset.wordId); if (word) showWord(word); }
    });
    const observer = new MutationObserver(() => { attachSettings(); markReviewDates(); queueLatestScore(); });
    observer.observe(document.getElementById("app"), { childList: true, subtree: true });
    attachSettings(); markReviewDates();
    window.addEventListener("online", flush);
    window.setTimeout(flush, 1200);
  };
  boot();
}());
