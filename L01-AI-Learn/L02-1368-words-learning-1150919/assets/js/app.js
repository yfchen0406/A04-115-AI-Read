const DATA_URLS = {
  book: "data/book.json",
  skills: "data/skills.json",
  chapters: "data/chapters.json",
  words: "data/words.json",
  days: "data/days.json",
  questions: "data/questions.json",
};

const STORAGE_KEY = "1368-learning-journey-state-v1";
const page = document.body.dataset.page || "dashboard";
let data;
let state;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const esc = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
const todayKey = () => new Date().toISOString().slice(0, 10);

function loadState() {
  const fallback = { lastDay: 1, mastered: [], uncertain: [], favorites: [], mistakes: [], scores: [], completedDays: [], settings: { userName: "我的學習" }, studyDates: [], lastCard: 0, readingPositions: {}, lastChapter: "" };
  try { return { ...fallback, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") }; } catch { return fallback; }
}

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function wordById(id) { return data.words.words.find((word) => word.id === id); }
function dayByNumber(day) { return data.days.days.find((item) => item.day === Number(day)) || data.days.days[0]; }
function chapterByFile(file) { return data.chapters.chapters.find((chapter) => chapter.sourceFile === file); }
function currentDay() { return dayByNumber(state.lastDay); }
function recordStudy() { state.studyDates = [...new Set([...(state.studyDates || []), todayKey()])].sort(); saveState(); }
function currentStreak() { const dates = new Set(state.studyDates || []); const cursor = new Date(); let count = 0; while (dates.has(cursor.toISOString().slice(0, 10))) { count += 1; cursor.setDate(cursor.getDate() - 1); } return count; }
function savedReadingProgress(day) { const blocks = day.readingSections.reduce((total, section) => { const chapter = chapterByFile(section.sourceFile); return total + (chapter ? chapter.blocks.filter((block) => block.type === "heading" || block.type === "paragraph").length : 0); }, 0); const position = state.readingPositions?.[day.day] || 0; return blocks ? Math.round((Math.min(position + 6, blocks) / blocks) * 100) : 0; }
function averageScore() { return state.scores.length ? Math.round(state.scores.reduce((sum, item) => sum + item.score, 0) / state.scores.length) : 0; }
function percent(value, total) { return total ? Math.round((value / total) * 100) : 0; }
function markWord(wordId, status) {
  state.mastered = state.mastered.filter((id) => id !== wordId);
  state.uncertain = state.uncertain.filter((id) => id !== wordId);
  if (status === "mastered") state.mastered.push(wordId);
  if (status === "uncertain") state.uncertain.push(wordId);
  saveState();
}
function speak(text) { if ("speechSynthesis" in window) { window.speechSynthesis.cancel(); window.speechSynthesis.speak(new SpeechSynthesisUtterance(text)); } }

function nav() {
  const links = [
    ["index.html", "⌂", "首頁", "dashboard"], ["learn.html", "✎", "每日學習", "learn"], ["book.html", "▤", "閱讀全書", "book"],
    ["words.html", "A", "單字庫", "words"], ["skills.html", "✦", "四大技巧", "skills"], ["practice.html", "◇", "單字卡", "practice"], ["quiz.html", "✓", "每日測驗", "quiz"],
    ["review.html", "↺", "錯題複習", "review"], ["progress.html", "▥", "學習成果", "progress"], ["settings.html", "⚙", "設定", "settings"],
  ];
  $$(".nav a, .mobile-nav a").forEach((link) => link.classList.toggle("active", link.dataset.page === page));
  const sidebar = $(".nav");
  if (sidebar) sidebar.innerHTML = links.map(([href, icon, label, id]) => `<a href="${href}" data-page="${id}" class="${page === id ? "active" : ""}">${icon}　${label}</a>`).join("");
  const mobile = $(".mobile-nav");
  if (mobile) mobile.innerHTML = links.slice(0, 5).map(([href, icon, label, id]) => `<a href="${href}" data-page="${id}" class="${page === id ? "active" : ""}"><span>${icon}</span><br>${label}</a>`).join("");
}

function statCard(label, value, noteClass = "note-blue") { return `<article class="card ${noteClass}"><span class="stat-label">${esc(label)}</span><strong class="stat-value">${esc(value)}</strong></article>`; }
function wordCard(word, interactive = true) {
  const mastered = state.mastered.includes(word.id);
  const favorite = state.favorites.includes(word.id);
  return `<article class="word-card" data-word-id="${word.id}"><strong>${esc(word.word)}</strong><span class="tag">${esc(word.subcategory || word.category || "原書詞彙")}</span><small>${mastered ? "✓ 已會" : "尚未標記"}${favorite ? "　★ 收藏" : ""}</small>${interactive ? `<div class="actions" style="margin-top:10px"><button class="button secondary tiny" data-action="speak" data-word="${esc(word.word)}">發音</button><button class="button blue tiny" data-action="master" data-id="${word.id}">${mastered ? "取消已會" : "已會"}</button><button class="button secondary tiny" data-action="favorite" data-id="${word.id}">${favorite ? "取消收藏" : "收藏"}</button></div>` : ""}</article>`;
}

function renderDashboard() {
  const learned = state.mastered.length;
  const day = currentDay();
  $("#app").innerHTML = `
    <div class="topbar"><div><p class="eyebrow">1368 WORDS LEARNING JOURNEY</p><h2>今天，學一點就很好。</h2><p class="muted">${esc(state.settings.userName || "我的學習")}，目前進行到第 ${day.day} 天。</p></div><div class="actions"><a class="button" href="learn.html">繼續第 ${day.day} 天 →</a></div></div>
    <section class="grid grid-4">${statCard("全書完成率", `${percent(learned, data.words.words.length)}%`, "note-blue")}${statCard("已掌握單字", `${learned} / ${data.words.words.length}`, "note-green")}${statCard("待複習錯題", `${state.mistakes.filter((item) => !item.mastered && (!item.nextReview || item.nextReview <= todayKey())).length} 題`, "note-orange")}${statCard("平均測驗成績", `${averageScore()} 分`, "note-yellow")}${statCard("連續學習", `${currentStreak()} 天`, "note-orange")}</section>
    <section class="grid grid-2" style="margin-top:20px"><article class="card"><div class="section-head"><h3>今日學習</h3><span class="tag">Day ${String(day.day).padStart(2, "0")}</span></div><h3>${esc(day.title)}</h3><p class="muted">${esc(day.objective)}</p><div class="progress-track"><div class="progress-fill" style="width:${savedReadingProgress(day)}%"></div></div><p class="muted">${day.wordIds.length} 個今日詞項 · 閱讀進度 ${savedReadingProgress(day)}%</p><a class="button blue" href="learn.html">打開今日課程</a></article><article class="card note-yellow"><h3>今天需要複習</h3><p style="font-size:2.2rem;font-weight:900;margin:15px 0">${state.mistakes.filter((item) => !item.mastered && (!item.nextReview || item.nextReview <= todayKey())).length} <span style="font-size:1rem">道錯題</span></p><p>完成今日課程後，回到錯題筆記本重新練習。</p><a class="button secondary" href="review.html">查看錯題</a></article></section>
    <section class="card" style="margin-top:20px"><div class="section-head"><h3>學習旅程</h3><a class="button secondary" href="progress.html">查看成果</a></div><div class="progress-track"><div class="progress-fill" style="width:${percent(learned, data.words.words.length)}%"></div></div><p class="muted">已完成 ${state.completedDays.length} / ${data.days.days.length} 天</p><div class="actions"><span class="tag">上篇：表達觀念</span><span class="tag">中篇：1368 個核心單字</span><span class="tag">下篇：學習與練習</span></div></section>`;
}

function renderLearn() {
  const day = currentDay();
  const chapters = day.readingSections.map((section) => chapterByFile(section.sourceFile)).filter(Boolean);
  const words = day.wordIds.map(wordById).filter(Boolean);
  const readingBlocks = chapters.flatMap((chapter) => chapter.blocks.filter((block) => block.type === "heading" || block.type === "paragraph").map((block) => ({ ...block, chapterTitle: chapter.title, chapterId: chapter.id })));
  const savedPosition = state.readingPositions?.[day.day] || 0;
  const position = Math.min(savedPosition, Math.max(readingBlocks.length - 1, 0));
  const pageSize = 6;
  const visibleBlocks = readingBlocks.slice(position, position + pageSize);
  const readingPercent = readingBlocks.length ? Math.round((Math.min(position + pageSize, readingBlocks.length) / readingBlocks.length) * 100) : 0;
  const readingHtml = visibleBlocks.map((block) => block.type === "heading" ? `<h4>${esc(block.text)}</h4>` : `<p>${esc(block.text)}</p>`).join("") || `<div class="empty">今天的閱讀內容來自原書單字附錄。</div>`;
  $("#app").innerHTML = `<div class="topbar"><div><p class="eyebrow">DAILY LEARNING JOURNEY</p><h2>第 ${String(day.day).padStart(2, "0")} 天</h2><p class="muted">${esc(day.title)} · ${esc(day.objective)}</p></div><div class="actions"><button class="button secondary" id="prev-day" ${day.day <= 1 ? "disabled" : ""}>← 上一課</button><select class="field" id="day-select" aria-label="選擇學習日">${data.days.days.map((item) => `<option value="${item.day}" ${item.day === day.day ? "selected" : ""}>Day ${String(item.day).padStart(2, "0")}｜${esc(item.title.replace(/^第 \d+ 天｜/, ""))}</option>`).join("")}</select><button class="button secondary" id="next-day" ${day.day >= data.days.days.length ? "disabled" : ""}>下一課 →</button></div></div><section class="grid grid-2"><article class="card reading"><div class="section-head"><h3>今日閱讀</h3><span class="tag">第 ${readingBlocks.length ? position + 1 : 0} / ${readingBlocks.length} 段</span></div>${readingHtml}<div class="progress-track"><div class="progress-fill" style="width:${readingPercent}%"></div></div><p class="muted">今日閱讀進度 ${readingPercent}%</p><div class="actions"><button class="button secondary" id="prev-reading" ${position <= 0 ? "disabled" : ""}>← 上一段</button><button class="button blue" id="next-reading" ${position + pageSize >= readingBlocks.length ? "disabled" : ""}>下一段 →</button></div></article><aside class="card note-blue"><h3>今日核心觀念</h3><p>先看原書分類，再用單字卡熟悉今天的詞項。</p><div class="progress-track"><div class="progress-fill" style="width:${readingPercent}%"></div></div><p class="muted">${day.wordIds.length} 個核心詞項</p><div class="actions"><button class="button" id="mark-day">標記今日完成</button><a class="button secondary" href="practice.html">開始單字卡</a></div></aside></section><section class="card" style="margin-top:20px"><div class="section-head"><h3>今日單字</h3><span class="tag">${words.length} 個</span></div><div class="word-grid">${words.map((word) => wordCard(word)).join("")}</div></section>`;
  const moveDay = (delta) => { const next = Math.min(Math.max(day.day + delta, 1), data.days.days.length); state.lastDay = next; saveState(); renderLearn(); };
  const moveReading = (delta) => { state.readingPositions = state.readingPositions || {}; state.readingPositions[day.day] = Math.min(Math.max(position + delta, 0), Math.max(readingBlocks.length - 1, 0)); state.lastChapter = chapters[0]?.id || ""; saveState(); renderLearn(); };
  $("#day-select").addEventListener("change", (event) => { state.lastDay = Number(event.target.value); saveState(); renderLearn(); });
  $("#prev-day").addEventListener("click", () => moveDay(-1));
  $("#next-day").addEventListener("click", () => moveDay(1));
  $("#prev-reading").addEventListener("click", () => moveReading(-pageSize));
  $("#next-reading").addEventListener("click", () => moveReading(pageSize));
  $("#mark-day").addEventListener("click", () => { if (!state.completedDays.includes(day.day)) state.completedDays.push(day.day); recordStudy(); renderLearn(); });
  bindWordActions();
}

function bindWordActions() {
  $$('[data-action="speak"]').forEach((button) => button.addEventListener("click", () => speak(button.dataset.word)));
  $$('[data-action="master"]').forEach((button) => button.addEventListener("click", () => { const id = button.dataset.id; markWord(id, state.mastered.includes(id) ? "" : "mastered"); renderPage(); }));
  $$(`[data-action="favorite"]`).forEach((button) => button.addEventListener("click", () => { const id = button.dataset.id; state.favorites = state.favorites.includes(id) ? state.favorites.filter((item) => item !== id) : [...state.favorites, id]; saveState(); renderPage(); }));
}

function renderSkills() {
  const skills = data.skills.skills;
  const completed = state.skillsCompleted || [];
  $("#app").innerHTML = `<div class="topbar"><div><p class="eyebrow">SOURCE EXPRESSION SKILLS</p><h2>四大表達技巧</h2><p class="muted">每個單元都保留 EPUB 原書的標題、案例與說明，再進入互動練習。</p></div></div><section class="grid grid-2">${skills.map((skill) => `<article class="card ${completed.includes(skill.id) ? "note-green" : "note-blue"}"><div class="section-head"><h3>${esc(skill.title)}</h3><span class="tag">${completed.includes(skill.id) ? "已完成" : "未完成"}</span></div>${skill.sourceBlocks.map((block) => block.type === "heading" ? `<h4>${esc(block.text)}</h4>` : block.type === "paragraph" ? `<p class="reading">${esc(block.text)}</p>` : "").join("")}<div class="actions"><button class="button" data-skill-done="${skill.id}">${completed.includes(skill.id) ? "取消完成" : "標記完成"}</button><span class="muted">${esc(skill.practice.prompt)}</span></div></article>`).join("")}</section>`;
  $$('[data-skill-done]').forEach((button) => button.addEventListener("click", () => { state.skillsCompleted = state.skillsCompleted || []; const id = button.dataset.skillDone; state.skillsCompleted = state.skillsCompleted.includes(id) ? state.skillsCompleted.filter((item) => item !== id) : [...state.skillsCompleted, id]; saveState(); renderSkills(); }));
}

function renderBook() {
  const first = data.chapters.chapters[0];
  $("#app").innerHTML = `<div class="topbar"><div><p class="eyebrow">READ THE SOURCE</p><h2>完整閱讀</h2><p class="muted">保留原書章節順序與來源文字。</p></div></div><section class="grid grid-2"><aside class="card"><h3>章節目錄</h3><div class="toc">${data.chapters.chapters.map((chapter) => `<button data-file="${esc(chapter.sourceFile)}">${esc(chapter.title)}</button>`).join("")}</div></aside><article class="card reading" id="book-reader"></article></section>`;
  const show = (chapter) => { const reader = $("#book-reader"); reader.innerHTML = `<p class="eyebrow">${esc(chapter.sourceFile)}</p><h3>${esc(chapter.title)}</h3>${chapter.blocks.map((block) => block.type === "heading" ? `<h4>${esc(block.text)}</h4>` : block.type === "image" ? `<figure><img class="source-image" src="assets/images/${esc(block.src.split("/").pop())}" alt="${esc(block.alt || "原書圖片")}"><figcaption class="muted">原書圖片：${esc(block.src)}</figcaption></figure>` : `<p>${esc(block.text)}</p>`).join("")}`; $$(".toc button").forEach((button) => button.classList.toggle("selected", button.dataset.file === chapter.sourceFile)); };
  $$(".toc button").forEach((button) => button.addEventListener("click", () => show(chapterByFile(button.dataset.file))));
  show(first);
}

function renderWords() {
  const categories = [...new Set(data.words.words.map((word) => word.subcategory || word.category))].sort((a, b) => a.localeCompare(b, "zh-Hant"));
  $("#app").innerHTML = `<div class="topbar"><div><p class="eyebrow">1368 WORDS DICTIONARY</p><h2>單字庫</h2><p class="muted">搜尋英文、分類與學習狀態。</p></div></div><section class="card"><div class="toolbar"><input class="field search" id="word-search" placeholder="搜尋英文單字或來源分類" aria-label="搜尋單字"><select class="field" id="category-filter"><option value="">全部分類</option>${categories.map((category) => `<option>${esc(category)}</option>`).join("")}</select><select class="field" id="status-filter"><option value="">全部狀態</option><option value="mastered">已會</option><option value="unlearned">尚未標記</option></select></div><p class="muted" id="word-count"></p><div class="word-grid" id="word-results"></div></section>`;
  const update = () => { const query = $("#word-search").value.trim().toLowerCase(); const category = $("#category-filter").value; const status = $("#status-filter").value; const result = data.words.words.filter((word) => (!query || `${word.word} ${word.category} ${word.subcategory || ""} ${word.pos || ""}`.toLowerCase().includes(query)) && (!category || (word.subcategory || word.category) === category) && (!status || (status === "mastered" ? state.mastered.includes(word.id) : !state.mastered.includes(word.id)))); $("#word-count").textContent = `顯示 ${result.length} / ${data.words.words.length} 個詞項`; $("#word-results").innerHTML = result.slice(0, 240).map((word) => wordCard(word)).join("") || `<div class="empty">找不到符合條件的詞項。</div>`; bindWordActions(); };
  ["#word-search", "#category-filter", "#status-filter"].forEach((selector) => $(selector).addEventListener("input", update)); update();
}

let practiceIndex = 0;
let practiceFlipped = false;
function renderPractice() {
  if (state.lastCard && practiceIndex === 0) practiceIndex = state.lastCard;
  const day = currentDay(); const words = day.wordIds.map(wordById).filter(Boolean); const word = words[practiceIndex % Math.max(words.length, 1)] || data.words.words[0]; const known = state.mastered.includes(word.id); const sourceExample = word.examples?.[0]?.text || word.sourceContext?.[0]?.text || "目前沒有抽取到完整例句。";
  $("#app").innerHTML = `<div class="topbar"><div><p class="eyebrow">FLASH CARD</p><h2>今日單字卡</h2><p class="muted">Day ${day.day} · 第 ${(practiceIndex % words.length) + 1} / ${words.length} 張</p></div><div class="actions"><button class="button secondary" id="practice-speak">🔊 發音</button><button class="button secondary" id="practice-flip">翻牌 ${practiceFlipped ? "回單字" : "看例句"}</button></div></div><section class="card"><div class="flashcard ${practiceFlipped ? "is-flipped" : ""}"><div><strong>${practiceFlipped ? esc(sourceExample) : esc(word.word)}</strong><small>${practiceFlipped ? "來源例句" : (known ? "✓ 已標記為熟悉" : "翻看原書分類，再決定是否標記")}</small><span class="tag" style="margin-top:15px">${esc(practiceFlipped ? `${word.word} · 來源內容` : (word.subcategory || word.category))}</span></div></div><div class="actions" style="justify-content:center"><button class="button blue" id="practice-known">${known ? "取消已會" : "我會了"}</button><button class="button" id="practice-again">再複習一次</button><button class="button secondary" id="practice-next">下一張 →</button></div></section>`;
  $("#practice-speak").addEventListener("click", () => speak(word.word)); $("#practice-flip").addEventListener("click", () => { practiceFlipped = !practiceFlipped; renderPractice(); }); $("#practice-known").addEventListener("click", () => { markWord(word.id, known ? "" : "mastered"); recordStudy(); renderPractice(); }); $("#practice-again").addEventListener("click", () => { markWord(word.id, "uncertain"); recordStudy(); renderPractice(); }); $("#practice-next").addEventListener("click", () => { practiceIndex += 1; practiceFlipped = false; state.lastCard = practiceIndex; saveState(); renderPractice(); });
}

let quizAnswers = {};
let quizStartedAt = Date.now();
function renderQuiz() {
  const day = currentDay(); const questions = day.quizIds.map((id) => data.questions.questions.find((question) => question.id === id)).filter(Boolean).slice(0, 10); const submitted = Boolean(window.quizSubmitted);
  $("#app").innerHTML = `<div class="topbar"><div><p class="eyebrow">DAILY QUIZ</p><h2>第 ${String(day.day).padStart(2, "0")} 天測驗</h2><p class="muted">10 題 · 每題 10 分 · ${esc(day.title)}</p></div></div><section class="card">${questions.map((question, index) => `<div class="quiz-item" data-question="${question.id}" style="margin-bottom:24px"><p class="quiz-question">${index + 1}. ${esc(question.question)}</p>${question.options.map((option) => `<button class="quiz-option ${quizAnswers[question.id] === option ? "selected" : ""} ${submitted && option === question.answer ? "correct" : ""} ${submitted && quizAnswers[question.id] === option && option !== question.answer ? "wrong" : ""}" data-question="${question.id}" data-option="${esc(option)}">${esc(option)}</button>`).join("")}${submitted ? `<p class="muted">解析：${esc(question.explanation)}</p>` : ""}</div>`).join("")}<div class="actions"><button class="button" id="submit-quiz">${submitted ? "重新作答" : "提交測驗"}</button>${submitted ? `<a class="button secondary" href="review.html">查看錯題</a>` : ""}</div>${submitted ? `<div class="card note-green" style="margin-top:20px"><h3>本次成績：${window.quizScore} 分</h3><p>答對 ${window.quizCorrect} / ${questions.length} 題 · 正確率 ${window.quizCorrect * 10}% · 花費 ${window.quizDuration} 秒。</p><p><strong>${window.quizScore >= 80 ? "今日學習完成" : window.quizScore >= 60 ? "建議複習後再測" : "回到今日重點"}</strong></p></div>` : ""}</section>`;
  $$(".quiz-option").forEach((button) => button.addEventListener("click", () => { if (submitted) return; quizAnswers[button.dataset.question] = button.dataset.option; renderQuiz(); }));
  $("#submit-quiz").addEventListener("click", () => { if (submitted) { window.quizSubmitted = false; quizAnswers = {}; quizStartedAt = Date.now(); renderQuiz(); return; } const correct = questions.filter((question) => quizAnswers[question.id] === question.answer); window.quizCorrect = correct.length; window.quizScore = correct.length * 10; window.quizSubmitted = true; window.quizDuration = Math.max(1, Math.round((Date.now() - quizStartedAt) / 1000)); const record = { date: todayKey(), day: day.day, score: window.quizScore, correct: correct.length, wrong: questions.length - correct.length, duration: window.quizDuration }; state.scores = state.scores.filter((item) => item.day !== day.day || item.date !== todayKey()); state.scores.push(record); recordStudy(); questions.filter((question) => quizAnswers[question.id] !== question.answer).forEach((question) => { const existing = state.mistakes.find((item) => item.questionId === question.id); if (existing) { existing.wrongCount += 1; existing.lastReview = todayKey(); } else state.mistakes.push({ date: todayKey(), day: day.day, questionId: question.id, question: question.question, userAnswer: quizAnswers[question.id] || "未作答", correctAnswer: question.answer, word: wordById(question.wordIds[0])?.word || "", category: wordById(question.wordIds[0])?.subcategory || wordById(question.wordIds[0])?.category || "", explanation: question.explanation, wrongCount: 1, lastReview: todayKey(), mastered: false }); }); saveState(); renderQuiz(); });
}

function renderReview() {
  const mistakes = state.mistakes.filter((item) => !item.mastered);
  $("#app").innerHTML = `<div class="topbar"><div><p class="eyebrow">MISTAKE NOTEBOOK</p><h2>錯題複習</h2><p class="muted">錯題會保存在本機，方便之後重新回看。</p></div></div><section class="card">${mistakes.length ? `<div class="table-wrap"><table><thead><tr><th>Day</th><th>題目</th><th>你的答案</th><th>正確答案</th><th>次數</th><th>下次複習</th><th></th></tr></thead><tbody>${mistakes.map((item) => `<tr><td>${item.day}</td><td>${esc(item.question)}<br><span class="tag">${esc(item.category)}</span></td><td>${esc(item.userAnswer)}</td><td>${esc(item.correctAnswer)}</td><td>${item.wrongCount}</td><td>${item.nextReview || "今日"}</td><td><button class="button blue" data-review="${item.questionId}">標記已掌握</button></td></tr>`).join("")}</tbody></table></div>` : `<div class="empty">目前沒有未掌握的錯題。完成每日測驗後，錯題會出現在這裡。</div>`}</section>`;
  $$('[data-review]').forEach((button) => button.addEventListener("click", () => { const item = state.mistakes.find((mistake) => mistake.questionId === button.dataset.review); if (item) item.mastered = true; saveState(); renderReview(); }));
}

function renderProgress() {
  const learned = state.mastered.length; const categoryCount = {}; data.words.words.forEach((word) => { categoryCount[word.category] = (categoryCount[word.category] || 0) + 1; });
  $("#app").innerHTML = `<div class="topbar"><div><p class="eyebrow">MY LEARNING DASHBOARD</p><h2>學習成果</h2><p class="muted">看見自己每天累積的足跡。</p></div></div><section class="grid grid-4">${statCard("已掌握單字", learned, "note-green")}${statCard("完成天數", state.completedDays.length, "note-blue")}${statCard("最高成績", state.scores.length ? Math.max(...state.scores.map((score) => score.score)) : 0, "note-yellow")}${statCard("錯題總數", state.mistakes.length, "note-orange")}</section><section class="grid grid-2" style="margin-top:20px"><article class="card"><h3>全書進度</h3><div class="progress-track"><div class="progress-fill" style="width:${percent(learned, data.words.words.length)}%"></div></div><p>${learned} / ${data.words.words.length} 個詞項</p><h3 style="margin-top:25px">分類分布</h3>${Object.entries(categoryCount).slice(0, 12).map(([category, count]) => `<p style="display:flex;justify-content:space-between;margin:8px 0"><span>${esc(category)}</span><span>${count}</span></p>`).join("")}</article><article class="card note-yellow"><h3>測驗紀錄</h3>${state.scores.length ? `<div class="table-wrap"><table><thead><tr><th>日期</th><th>Day</th><th>分數</th></tr></thead><tbody>${state.scores.slice().reverse().slice(0, 12).map((score) => `<tr><td>${score.date}</td><td>${score.day}</td><td>${score.score}</td></tr>`).join("")}</tbody></table></div>` : `<div class="empty">完成第一次每日測驗後，成績會出現在這裡。</div>`}</article></section>`;
}

function renderSettings() {
  $("#app").innerHTML = `<div class="topbar"><div><p class="eyebrow">SETTINGS</p><h2>學習設定</h2><p class="muted">資料目前保存在這台裝置的瀏覽器。</p></div></div><section class="card" style="max-width:650px"><label for="user-name"><strong>學習者名稱</strong></label><input class="field" style="width:100%;margin:10px 0 20px" id="user-name" value="${esc(state.settings.userName || "")}" placeholder="例如：我的學習"><div class="actions"><button class="button" id="save-settings">儲存設定</button><button class="button danger" id="clear-settings">清除本機學習紀錄</button></div><p class="muted" style="margin-top:20px">清除只會刪除本機進度，不會影響 EPUB 與網站內容資料。</p></section>`;
  $("#save-settings").addEventListener("click", () => { state.settings.userName = $("#user-name").value.trim() || "我的學習"; saveState(); renderSettings(); }); $("#clear-settings").addEventListener("click", () => { if (confirm("確定要清除本機學習紀錄嗎？")) { localStorage.removeItem(STORAGE_KEY); state = loadState(); renderSettings(); } });
}

function renderPage() { nav(); ({ dashboard: renderDashboard, learn: renderLearn, book: renderBook, words: renderWords, practice: renderPractice, skills: renderSkills, quiz: renderQuiz, review: renderReview, progress: renderProgress, settings: renderSettings }[page] || renderDashboard)(); }

async function init() {
  try { const values = await Promise.all(Object.values(DATA_URLS).map((url) => fetch(url).then((response) => { if (!response.ok) throw new Error(url); return response.json(); }))); data = Object.fromEntries(Object.keys(DATA_URLS).map((key, index) => [key, values[index]])); state = loadState(); renderPage(); }
  catch (error) { $("#app").innerHTML = `<div class="card note-orange"><h2>資料載入失敗</h2><p>請用本機網站伺服器開啟，而不是直接雙擊 HTML 檔案。</p><p class="muted">${esc(error.message)}</p></div>`; }
}

window.__learning = {
  get data() { return data; },
  get state() { return state; },
  get quizAnswers() { return quizAnswers; },
  saveState,
};
const enhancementScript = document.createElement("script");
enhancementScript.src = "assets/js/feature-enhancements.js";
document.head.appendChild(enhancementScript);
const practiceScript = document.createElement("script");
practiceScript.src = "assets/js/practice-modes.js";
document.head.appendChild(practiceScript);

init();
