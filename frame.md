# **Claude 初體驗：免費版基本功能整理**

## **為何選擇 Claude？**

- 最近生成式 AI 話題不斷，其中 Claude 是許多人熱議的工具之一。
- 雖然 Claude 的進階版本（Claude Pro）採用訂閱制收費，但對我來說，先從免費版入手已經足夠應付初步需求，也能在不花費的情況下熟悉這套系統。

## **多 AI 協作的可能性**

- 我打算先把目前進行中的 Project 紀錄彙整到網頁上，這樣不僅便於回顧，也方便未來整合不同生成式 AI 的輸出內容。
- 畢竟現在各家 AI 各有所長，若能靈活切換、互相補強，應該能大幅提升工作效率。

## **先認識 Claude 的基本功能**

- 由於我實際使用 Claude 的時間還不算長，因此想趁這個機會花一點篇幅，好好整理一下 Claude 免費版的核心功能與操作方式。
- 這不僅有助於自己日後快速上手，也能作為團隊或他人參考的簡易指南。

# 基本~Claude 側邊欄功能完整解析

- **基本操作區（上方三項）**
    
    
    | 功能名稱 | 圖示 | 核心用途 | 使用技巧 |
    | --- | --- | --- | --- |
    | **＋ New Chat** | ＋ | 開啟全新對話，每次都是獨立的新上下文，不繼承前次記憶 | 臨時問問題、快速查詢，適合一次性任務 |
    | **Search** | 🔍 | 搜尋你過去所有對話紀錄，輸入關鍵字即可找回歷史內容 | 累積大量對話後，快速找回某次學習筆記或程式碼 |
    | **Customize** | ✏️ | 設定個人偏好指令（相當於 Custom Instructions），設定語氣、語言、回答風格 | 可設定「請用繁體中文回答，我是退休教師」，讓每次對話都符合個人習慣 [tech.yahoo](https://tech.yahoo.com/ai/claude/articles/claude-just-made-two-best-100300345.html) |
- **內容管理區（下方三項）**
    
    
    | 功能名稱 | 圖示 | 核心用途 | 進階功能 | 適合場景 |
    | --- | --- | --- | --- | --- |
    | **Chats** | 💬 | 列出所有歷史對話清單，點擊可直接繼續任何一段對話 | 可依時間排序，快速找回未完成的討論 | 日常問答、短期任務追蹤 |
    | **Projects** | 📁 | 建立主題式工作區，可上傳文件並設定專屬指令，該專案內所有對話自動套用設定 [blocktempo](https://www.blocktempo.com/what-is-claude-complete-guide/) | 支援上傳 PDF、筆記、程式碼，最多 200K tokens 知識庫；**2026 年免費版也已開放** [tech.yahoo](https://tech.yahoo.com/ai/claude/articles/claude-just-made-two-best-100300345.html) | AI學苑建置、每日英文學習、兒子職涯建議等長期專案 |
    | **Artifacts** | 🔧 | 生成程式碼、網頁、圖表等成品時，顯示於右側獨立預覽面板，可即時預覽、編輯、下載 [albato](https://albato.com/blog/publications/how-to-use-claude-artifacts-guide) | 支援 HTML/CSS/JS 網頁、React 元件、SVG 圖表、Mermaid 流程圖、Python 腳本、Markdown 長文 [blocktempo](https://www.blocktempo.com/what-is-claude-complete-guide/) | 製作英文測驗互動工具、資訊圖表、AI學苑網頁元件 |
- 三項核心功能比較
    
    
    | 比較維度 | Chats | Projects | Artifacts |
    | --- | --- | --- | --- |
    | **使用期間** | 短期 / 單次 | 長期 / 持續 | 當下生成 |
    | **記憶範圍** | 僅限該次對話 | 跨對話共用文件與指令 [blocktempo](https://www.blocktempo.com/what-is-claude-complete-guide/) | 不適用（產出成品） |
    | **免費版可用** | ✅ | ✅（2026/2 起開放）[tech.yahoo](https://tech.yahoo.com/ai/claude/articles/claude-just-made-two-best-100300345.html) | ✅ |
    | **最佳搭配** | 單次問答 | Projects + Chats 結合使用 | Projects + Artifacts 最強組合 |

# 進階~Customize 個人化設定區

- Customize 是 Claude 的核心自訂中心，包含兩大子功能：**Skills（技能）** 和 **Connectors（連接器）**。
- **Skills 技能功能詳解**
    - Skills 是 Claude 最強大但最被忽略的功能，本質上是一組**可攜式指令檔案（.md 格式）**，讓 Claude 在特定情境下自動執行預設的工作流程 。[xda-developers](https://www.xda-developers.com/claude-skills-changed-how-i-use-claude/)
- **Skills 結構組成**
    
    
    | 資料夾/檔案 | 說明 | 功能 |
    | --- | --- | --- |
    | **SKILL.md** | 技能核心描述檔 | 定義技能的觸發時機與執行邏輯，是整個技能的「大腦」[github](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md) |
    | **agents/** | 代理人資料夾 | 存放可自動執行多步驟任務的 AI 代理設定 [anthropic](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf) |
    | **assets/** | 素材資料夾 | 存放圖片、範本、參考素材等靜態資源 |
    | **eval-viewer/** | 評估檢視器 | 用來測試與評估技能的執行效果是否符合預期 |
    | **references/** | 參考資料夾 | 存放技能執行時所需的背景知識與參考文件 [anthropic](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf) |
    | **scripts/** | 腳本資料夾 | 存放 Python 或 JS 自動化腳本，讓技能可執行程式 [claude](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills) |
    | **LICENSE.txt** | 授權說明 | 技能的版權與使用授權說明 |
- **Skill Creator（技能創建器）**
    - **skill-creator** 是一個 **「元技能（meta skill）」**，專門用來協助你**自動創建其他新技能** 。操作流程如下：[youtube](https://www.youtube.com/watch?v=rihf3-mpNG4)
        - 在對話框輸入「manage plugins」或「create skill」
        1. 描述你想要的技能功能
        2. skill-creator 自動生成完整的 SKILL.md 結構
        3. 安裝後即可於日後對話中自動觸發[youtube](https://www.youtube.com/watch?v=rihf3-mpNG4)
- **Connectors 連接器**
    - Connectors 讓 Claude 直接連結外部應用程式，透過 **MCP（Model Context Protocol）** 協定進行雙向資料存取 。[anthropic](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf)
        
        
        | 類型 | 可連接工具 |
        | --- | --- |
        | 生產力工具 | Gmail、Google Drive、Notion、Asana |
        | 開發工具 | GitHub、Figma、Linear |
        | 辦公軟體 | Excel、PowerPoint、Slack [youtube](https://www.youtube.com/watch?v=6EFOT6hjvAU) |

# **免費版 vs 付費版完整差異**

- 免費版和付費版比較
    
    
    | 比較項目 | 🆓 免費版 | 💰 Pro（$20/月） | 💎 Max 5x（$100/月） | 💎 Max 20x（$200/月） |
    | --- | --- | --- | --- | --- |
    | **模型版本** | Sonnet 4.5 | Sonnet + **Opus 4.6**（最強模型）[freeacademy](https://freeacademy.ai/blog/claude-free-vs-pro-vs-max-comparison-2026) | 同 Pro | 同 Pro |
    | **每日訊息量** | 約 50–100 則/天 [gamsgo](https://www.gamsgo.com/blog/is-claude-ai-free) | 約 100 則/5小時（5倍用量）[gamsgo](https://www.gamsgo.com/blog/is-claude-ai-free) | Pro 的 5 倍 [claude](https://support.claude.com/en/articles/11049762-choosing-a-claude-plan) | Pro 的 20 倍 [claude](https://support.claude.com/en/articles/11049762-choosing-a-claude-plan) |
    | **Context 視窗** | 100K tokens | 200K tokens [gamsgo](https://www.gamsgo.com/blog/is-claude-ai-free) | 1M tokens（beta） | 1M tokens（beta） |
    | **Skills 功能** | ✅ 可用 | ✅ 可用 | ✅ 可用 | ✅ 可用 |
    | **Projects** | ✅ 可用 | ✅ 可用 | ✅ 可用 | ✅ 可用 |
    | **Artifacts** | ✅ 可用 | ✅ 可用 | ✅ 可用 | ✅ 可用 |
    | **Connectors** | ✅ 可用 | ✅ 可用 | ✅ 可用 | ✅ 可用 |
    | **Claude Code** | ❌ | ✅ [aionx](https://aionx.co/claude-ai-reviews/claude-pro-free-claude/) | ✅ | ✅ |
    | **Cowork 協作** | ❌ | ✅ [aionx](https://aionx.co/claude-ai-reviews/claude-pro-free-claude/) | ✅ | ✅ |
    | **檔案上傳分析** | 有限制 | ✅ 完整支援（PDF、試算表、圖片）[freeacademy](https://freeacademy.ai/blog/claude-free-vs-pro-vs-max-comparison-2026) | ✅ | ✅ |
    | **尖峰時段速度** | 45–60 秒 [aionx](https://aionx.co/claude-ai-reviews/claude-pro-free-claude/) | 3–8 秒 [aionx](https://aionx.co/claude-ai-reviews/claude-pro-free-claude/) | 優先 | 最優先 |
    | **優先佇列** | ❌ | ✅ 尖峰時段不排隊 [freeacademy](https://freeacademy.ai/blog/claude-free-vs-pro-vs-max-comparison-2026) | ✅ | ✅ |

# 💡 退休學習者AI建議

- **免費版已非常夠用**，特別是 Skills、Projects、Artifacts、Connectors 全都開放 。
- **每日英文學習**、**AI學苑內容創作**、**網頁設計練習** → 免費版完全足夠
- 若需要大量長文件分析（例如多份 PDF 同時比對）或高頻使用 → 再考慮升級 Pro $20/月