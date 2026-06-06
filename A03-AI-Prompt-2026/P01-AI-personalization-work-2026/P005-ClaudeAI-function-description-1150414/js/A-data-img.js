export const arr_article = [
  {
    title_id: "n1",
    title: "Claude 初體驗：免費版基本功能整理",
    t1: [],
    c1s: [
      {
        id2: "n1-1",
        d1: "為何選擇 Claude？",
        c2s: [
          {
            d1: "最近生成式 AI 話題不斷，其中 Claude 是許多人熱議的工具之一。",
          },
          {
            d1: "雖然 Claude 的進階版本（Claude Pro）採用訂閱制收費，但對我來說，先從免費版入手已經足夠應付初步需求，也能在不花費的情況下熟悉這套系統。",
          },
        ],
      },
      {
        id2: "n1-2",
        d1: "多 AI 協作的可能性",
        c2s: [
          {
            d1: "我打算先把目前進行中的 Project 紀錄彙整到網頁上，這樣不僅便於回顧，也方便未來整合不同生成式 AI 的輸出內容。",
          },
          {
            d1: "畢竟現在各家 AI 各有所長，若能靈活切換、互相補強，應該能大幅提升工作效率。",
          },
        ],
      },
      {
        id2: "n1-3",
        d1: "先認識 Claude 的基本功能",
        c2s: [
          {
            d1: "由於我實際使用 Claude 的時間還不算長，因此想趁這個機會花一點篇幅，好好整理一下 Claude 免費版的核心功能與操作方式。",
          },
          {
            d1: "這不僅有助於自己日後快速上手，也能作為團隊或他人參考的簡易指南。",
            col: "col-sm-6",
            p2: [{ pic1: "./images/P005-1-1.webp", dec2: "" }],
          },
        ],
      },
    ],
  },
  {
    title_id: "n2",
    title: "基本~Claude 側邊欄功能完整解析",
    t1: [
      {
        d1: "<b>基本操作區（上方三項）",
        headers: [
          { label: "功能名稱", width: "10%" },
          { label: "圖示", width: "10%" },
          { label: "核心用途", width: "40%" },
          { label: "使用技巧", width: "40%" },
        ],
        rows: [
          [
            "<strong>＋ New Chat</strong>",
            "＋",
            "開啟全新對話，每次都是獨立的新上下文，不繼承前次記憶",
            "臨時問問題、快速查詢，適合一次性任務",
          ],
          [
            "<strong>Search</strong>",
            "🔍",
            "搜尋你過去所有對話紀錄，輸入關鍵字即可找回歷史內容",
            "累積大量對話後，快速找回某次學習筆記或程式碼",
          ],
          [
            "<strong>Customize</strong>",
            "✏️",
            "設定個人偏好指令（相當於 Custom Instructions），設定語氣、語言、回答風格",
            '可設定「請用繁體中文回答，我是退休教師」，讓每次對話都符合個人習慣 <a href="https://tech.yahoo.com/ai/claude/articles/claude-just-made-two-best-100300345.html" target="_blank">[tech.yahoo]</a>',
          ],
        ],
      },
      {
        d1: "<b>內容管理區（下方三項）",
        headers: [
          { label: "功能名稱", width: "5%" },
          { label: "圖示", width: "5%" },
          { label: "核心用途", width: "30%" },
          { label: "進階功能", width: "35%" },
          { label: "適合場景", width: "25%" },
        ],
        rows: [
          [
            "<strong>Chats</strong>",
            "💬",
            "列出所有歷史對話清單，點擊可直接繼續任何一段對話",
            "可依時間排序，快速找回未完成的討論",
            "日常問答、短期任務追蹤",
          ],
          [
            "<strong>Projects</strong>",
            "📁",
            '建立主題式工作區，可上傳文件並設定專屬指令 <a href="https://www.blocktempo.com/what-is-claude-complete-guide/" target="_blank">[blocktempo]</a>',
            '支援上傳 PDF、筆記、程式碼，最多 200K tokens 知識庫；<strong>2026 年免費版也已開放</strong> <a href="https://tech.yahoo.com/ai/claude/articles/claude-just-made-two-best-100300345.html" target="_blank">[tech.yahoo]</a>',
            "AI學苑建置、每日英文學習、兒子職涯建議等長期專案",
          ],
          [
            "<strong>Artifacts</strong>",
            "🔧",
            '生成程式碼、網頁、圖表等成品時，顯示於右側獨立預覽面板 <a href="https://albato.com/blog/publications/how-to-use-claude-artifacts-guide" target="_blank">[albato]</a>',
            '支援 HTML/CSS/JS 網頁、React 元件、SVG 圖表、Mermaid 流程圖、Python 腳本、Markdown 長文 <a href="https://www.blocktempo.com/what-is-claude-complete-guide/" target="_blank">[blocktempo]</a>',
            "製作英文測驗互動工具、資訊圖表、AI學苑網頁元件",
          ],
        ],
      },
      {
        d1: "三項核心功能比較",
        headers: [
          { label: "比較維度", width: "25%" },
          { label: "Chats", width: "25%" },
          { label: "Projects", width: "25%" },
          { label: "Artifacts", width: "25%" },
        ],
        rows: [
          [
            "<strong>使用期間</strong>",
            "短期 / 單次",
            "長期 / 持續",
            "當下生成",
          ],
          [
            "<strong>記憶範圍</strong>",
            "僅限該次對話",
            '跨對話共用文件與指令 <a href="https://www.blocktempo.com/what-is-claude-complete-guide/" target="_blank">[blocktempo]</a>',
            "不適用（產出成品）",
          ],
          [
            "<strong>免費版可用</strong>",
            "✅",
            '✅（2026/2 起開放） <a href="https://tech.yahoo.com/ai/claude/articles/claude-just-made-two-best-100300345.html" target="_blank">[tech.yahoo]</a>',
            "✅",
          ],
          [
            "<strong>最佳搭配</strong>",
            "單次問答",
            "Projects + Chats 結合使用",
            "Projects + Artifacts 最強組合",
          ],
        ],
      },
      {
        d1: "<br>",
        col: "col-sm-4",
        p2: [
          { pic1: "./images/P005-2-1.webp", dec2: "" },
          { pic1: "./images/P005-2-2.webp", dec2: "" },
          { pic1: "./images/P005-2-3.webp", dec2: "" },
        ],
      },
    ],
  },
  {
    title_id: "n3",
    title: "進階~Customize 個人化設定區",
    t1: [
      {
        d1: "Customize 是 Claude 的核心自訂中心，包含兩大子功能：<strong>Skills（技能）</strong> 和 <strong>Connectors（連接器）</strong>。",
      },
      {
        d1: "Skills 技能功能詳解",
        c2s: [
          {
            d1: 'Skills 是 Claude 最強大但最被忽略的功能，本質上是一組<strong>可攜式指令檔案（.md 格式）</strong>，讓 Claude 在特定情境下自動執行預設的工作流程 。<a href="https://www.xda-developers.com/claude-skills-changed-how-i-use-claude/" target="_blank">[xda-developers]</a>',
          },
        ],
      },
      {
        d1: "Skills 結構組成",
        headers: [
          { label: "資料夾/檔案", width: "30%" },
          { label: "說明", width: "30%" },
          { label: "功能", width: "40%" },
        ],
        rows: [
          [
            "<strong>SKILL.md</strong>",
            "技能核心描述檔",
            '定義技能的觸發時機與執行邏輯，是整個技能的「大腦」 <a href="https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md" target="_blank">[github]</a>',
          ],
          [
            "<strong>agents/</strong>",
            "代理人資料夾",
            '存放可自動執行多步驟任務的 AI 代理設定 <a href="https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf" target="_blank">[anthropic]</a>',
          ],
          [
            "<strong>assets/</strong>",
            "素材資料夾",
            "存放圖片、範本、參考素材等靜態資源",
          ],
          [
            "<strong>eval-viewer/</strong>",
            "評估檢視器",
            "用來測試與評估技能的執行效果是否符合預期",
          ],
          [
            "<strong>references/</strong>",
            "參考資料夾",
            '存放技能執行時所需的背景知識與參考文件 <a href="https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf" target="_blank">[anthropic]</a>',
          ],
          [
            "<strong>scripts/</strong>",
            "腳本資料夾",
            '存放 Python 或 JS 自動化腳本，讓技能可執行程式 <a href="https://support.claude.com/en/articles/12512198-how-to-create-custom-skills" target="_blank">[claude]</a>',
          ],
          [
            "<strong>LICENSE.txt</strong>",
            "授權說明",
            "技能的版權與使用授權說明",
          ],
        ],
      },
      {
        d1: "Skill Creator（技能創建器）",
        c2s: [
          {
            d1: '<strong>skill-creator</strong> 是一個 <strong>「元技能（meta skill）」</strong>，專門用來協助你<strong>自動創建其他新技能</strong> 。操作流程如下：<a href="https://www.youtube.com/watch?v=rihf3-mpNG4" target="_blank">[youtube]</a>',
            c3s: [
              { d1: "在對話框輸入「manage plugins」或「create skill」" },
              { d1: "1. 描述你想要的技能功能" },
              { d1: "2. skill-creator 自動生成完整的 SKILL.md 結構" },
              {
                d1: '3. 安裝後即可於日後對話中自動觸發 <a href="https://www.youtube.com/watch?v=rihf3-mpNG4" target="_blank">[youtube]</a>',
              },
            ],
          },
        ],
      },
      {
        d1: "Connectors 連接器",
        c2s: [
          {
            d1: 'Connectors 讓 Claude 直接連結外部應用程式，透過 <strong>MCP（Model Context Protocol）</strong> 協定進行雙向資料存取 。<a href="https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf" target="_blank">[anthropic]</a>',
          },
        ],
        headers: [
          { label: "類型", width: "30%" },
          { label: "可連接工具", width: "70%" },
        ],
        rows: [
          ["生產力工具", "Gmail、Google Drive、Notion、Asana"],
          ["開發工具", "GitHub、Figma、Linear"],
          [
            "辦公軟體",
            'Excel、PowerPoint、Slack <a href="https://www.youtube.com/watch?v=6EFOT6hjvAU" target="_blank">[youtube]</a>',
          ],
        ],
      },
    ],
  },
  {
    title_id: "n4",
    title: "免費版 vs 付費版完整差異",
    t1: [
      {
        d1: "免費版和付費版比較",
        headers: [
          { label: "比較項目", width: "20%" },
          { label: "🆓 免費版", width: "20%" },
          { label: "💰 Pro（$20/月）", width: "20%" },
          { label: "💎 Max 5x", width: "20%" },
          { label: "💎 Max 20x", width: "20%" },
        ],
        rows: [
          [
            "<strong>模型版本</strong>",
            "Sonnet 4.5",
            'Sonnet + <strong>Opus 4.6</strong> <a href="https://freeacademy.ai/blog/claude-free-vs-pro-vs-max-comparison-2026" target="_blank">[freeacademy]</a>',
            "同 Pro",
            "同 Pro",
          ],
          [
            "<strong>每日訊息量</strong>",
            '約 50–100 則/天 <a href="https://www.gamsgo.com/blog/is-claude-ai-free" target="_blank">[gamsgo]</a>',
            '約 100 則/5小時 <a href="https://www.gamsgo.com/blog/is-claude-ai-free" target="_blank">[gamsgo]</a>',
            "Pro 的 5 倍",
            "Pro 的 20 倍",
          ],
          [
            "<strong>Context 視窗</strong>",
            "100K tokens",
            '200K tokens <a href="https://www.gamsgo.com/blog/is-claude-ai-free" target="_blank">[gamsgo]</a>',
            "1M tokens",
            "1M tokens",
          ],
          [
            "<strong>Skills 功能</strong>",
            "✅ 可用",
            "✅ 可用",
            "✅ 可用",
            "✅ 可用",
          ],
          [
            "<strong>Projects</strong>",
            "✅ 可用",
            "✅ 可用",
            "✅ 可用",
            "✅ 可用",
          ],
          [
            "<strong>Artifacts</strong>",
            "✅ 可用",
            "✅ 可用",
            "✅ 可用",
            "✅ 可用",
          ],
          [
            "<strong>Connectors</strong>",
            "✅ 可用",
            "✅ 可用",
            "✅ 可用",
            "✅ 可用",
          ],
          [
            "<strong>Claude Code</strong>",
            "❌",
            '✅ <a href="https://aionx.co/claude-ai-reviews/claude-pro-free-claude/" target="_blank">[aionx]</a>',
            "✅",
            "✅",
          ],
          [
            "<strong>Cowork 協作</strong>",
            "❌",
            '✅ <a href="https://aionx.co/claude-ai-reviews/claude-pro-free-claude/" target="_blank">[aionx]</a>',
            "✅",
            "✅",
          ],
          [
            "<strong>檔案上傳分析</strong>",
            "有限制",
            '✅ 完整支援 <a href="https://freeacademy.ai/blog/claude-free-vs-pro-vs-max-comparison-2026" target="_blank">[freeacademy]</a>',
            "✅",
            "✅",
          ],
          [
            "<strong>尖峰時段速度</strong>",
            "45–60 秒",
            "3–8 秒",
            "優先",
            "最優先",
          ],
          [
            "<strong>優先佇列</strong>",
            "❌",
            '✅ <a href="https://freeacademy.ai/blog/claude-free-vs-pro-vs-max-comparison-2026" target="_blank">[freeacademy]</a>',
            "✅",
            "✅",
          ],
        ],
      },
      {
        d1: "<br>",
        col: "col-sm-12",
        p2: [
          { pic1: "./images/P005-4-1.webp", dec2: "" },
         
        ],
      },
    ],
  },
  {
    title_id: "n5",
    title: "💡 退休學習者AI建議",
    t1: [
      {
        d1: "<strong>免費版已非常夠用</strong>，特別是 Skills、Projects、Artifacts、Connectors 全都開放 。",
      },
      {
        d1: "<strong>每日英文學習</strong>、<strong>AI學苑內容創作</strong>、<strong>網頁設計練習</strong> → 免費版完全足夠",
      },
      {
        d1: "若需要大量長文件分析（例如多份 PDF 同時比對）或高頻使用 → 再考慮升級 Pro $20/月",
      },
    ],
  },
];
