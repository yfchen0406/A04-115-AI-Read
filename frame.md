# 一、報告總覽與核心定義

- 「**個人化情境工作區**」（Personalized AI Context Workspace）是指 AI 平台能夠**跨對話持久保存用戶偏好、知識文件與任務背景**，讓每次互動不需從零開始的功能集合。
- 這是目前 AI 工具進化最快的核心競爭領域之一。
- 本報告針對七大主流 AI 平台，從功能本質、免費與付費差異、限制數據、費用效益四個維度進行系統性比對。

# 二、七大平台功能本質速覽

- 各平台功能
    
    
    | 平台 | 功能名稱 | 功能核心定位 | 技術機制 |
    | --- | --- | --- | --- |
    | ChatGPT | 記憶功能 | 長期個人化記憶累積 | 儲存記憶 + 聊天歷程雙軌學習  |
    | Claude | Projects | 大容量知識庫＋角色指令 | RAG 檢索增強生成，動態載入相關內容  |
    | Gemini | Gems | 自訂 AI 角色與行為風格 | 系統指令塑造 + 模型驅動切換  |
    | Perplexity | Spaces | 搜尋整合型協作研究空間 | 網路搜尋 + 文件知識庫 + 多人協作  |
    | 千問 | 分組功能 | 對話分類管理（輕量型） | 標籤式資料夾分組  |
    | Manus | Projects | 自主代理任務型永久工作區 | 檔案系統作為記憶體（Filesystem as Memory） |
    | DeepSeek | 無原生工作區 | 僅 Session 內記憶 | 無跨對話持久化機制  |

# 三、免費版功能詳細比較

- 付費版與免費版差異，還需要查證
    
    
    | 平台 | 免費版可用？ | 記憶/情境持久性 | 文件上傳 | 自訂指令 | 協作功能 | 使用次數限制 |
    | --- | --- | --- | --- | --- | --- | --- |
    | ChatGPT | ⚠️ 極輕量 | 可查看舊記憶，**不儲存新記憶** | 有限 | ❌ | ❌ | 有使用頻率限制  |
    | Claude | ❌ 完全無法使用 | 僅 Session 內 | ❌ | ❌ | ❌ | 免費版無 Projects [[datastudios](https://www.datastudios.org/post/claude-pricing-2025-full-guide-to-free-pro-team-and-max-plans-with-updated-limits)] |
    | Gemini | ✅ 可建立 Gems | ❌ 無跨對話記憶 | ⚠️ 有限 | ✅ 基本 | ❌ | 使用 Flash 模型（較弱）[[gadgets360](https://www.gadgets360.com/ai/features/gemini-free-vs-paid-features-plans-9125732)] |
    | Perplexity | ✅ 基本 Spaces | ⚠️ 部分 | ⚠️ 極少量 | ✅ 基本 | ⚠️ 有限 | 搜尋次數受限 [[perplexity](https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you)] |
    | 千問 | ✅ 完整 | ❌ 無跨對話 | ❌ | ❌ | ❌ | 無限制（網頁版）[[microfusion](https://www.microfusion.cloud/news/alicloud-what-is-qwen/)] |
    | Manus | ✅ 有限 | ✅ Projects 可用 | ✅ 支援 | ✅ 支援 | ❌ | **每日 300 積分**，1 個並行任務 [[lindy](https://www.lindy.ai/blog/manus-ai-pricing)] |
    | DeepSeek | — | ❌ 完全無持久記憶 | ❌ | ❌ | ❌ | 無限制（網頁版）[[byteplus](https://www.byteplus.com/en/topic/383442?title=deepseek-free-vs-paid-features-pricing-comparison-2025)] |

# 四、付費方案功能詳細比較

- **4-1 付費方案層級與月費**
    
    
    | 平台 | 入門付費方案 | 中階方案 | 頂級方案 |
    | --- | --- | --- | --- |
    | ChatGPT | Plus **$20/月** | — | Pro **$200/月**  |
    | Claude | Pro **$20/月** | Max **$100+/月** | Enterprise（另議） |
    | Gemini | Advanced **$19.99/月**（Google One AI Premium） | — | Enterprise（另議） |
    | Perplexity | Pro **$20/月** | — | Max **$200/月**  |
    | 千問 | 無個人付費版 | — | API 另計 |
    | Manus | Basic/Standard **$19~20/月** | Plus **$39~40/月** | Pro **$199~200/月** spectrumailab+1 |
    | DeepSeek | 無個人付費版 | — | API 另計 |
- **4-2 付費版關鍵功能數據比較**
    
    
    | 平台 | 記憶/情境容量 | 文件上傳上限 | 最大 Context Window | 自訂指令 | 協作人數 |
    | --- | --- | --- | --- | --- | --- |
    | ChatGPT Plus | ~1,400 字記憶上限（已較免費版擴大 25%） | 25 檔/專案，80 檔/3hr [[cu](https://customgpt.ai/chatgpt-plus-limits-2026/) | 256K tokens（Thinking 模式） | ✅ | ❌ |
    | Claude Pro | 200K tokens 情境視窗 | 20 檔/對話，專案知識庫無上限  | 200K tokens | ✅ | ✅（Team 版） |
    | Gemini Advanced | Gemini 2.5 Pro 驅動 | ✅ 更多容量 | 1M tokens | ✅ | ❌ |
    | Perplexity Pro | 每 Space 最多 50 份文件 | 50 檔/Space  | 依模型 | ✅ | ✅ |
    | Manus Plus/Pro | 無限 Projects，跨任務記憶 | ✅ Google Drive 整合 | 依任務 | ✅ | ✅（Team 版） |
    | Claude Enterprise | 500K tokens 情境視窗  | 企業級大量 | 500K tokens | ✅ | ✅ 多人 |

# 五、Manus 積分制度詳細說明

- Manus 採用特殊的**積分制**，與其他平台月費制邏輯不同，需特別理解 ：
    
    
    | 方案 | 月費 | 月費積分 | 每日免費積分 | 並行任務數 | 備註 |
    | --- | --- | --- | --- | --- | --- |
    | Free | $0 | 1,000（入門一次性） | 300 | 1 | 無需信用卡 [[lindy](https://www.lindy.ai/blog/manus-ai-pricing)] |
    | Basic/Standard | $19~20 | 1,900~4,000 | 300 | 20 | 月底積分歸零，不滾存 [[spectrumailab](https://spectrumailab.com/blog/manus-ai-pricing-plans-cost-guide-2026)] |
    | Plus/Customizable | $39~40 | 3,900~8,000 | 300 | 20 | 建議中度使用者 |
    | Pro/Extended | $199~200 | 19,900~40,000 | 300 | 20 | 高頻代理任務使用 |

> ⚠️ **重要提醒**：Manus 每個任務消耗積分不固定，複雜任務單次可消耗 500–900 積分，且無法預先估算 。
> 

---

## 六、費用效益（CP 值）綜合評分

- **綜合比較**
    
    
    | 平台 | 免費版 CP 值 | 付費版 CP 值 | 適合對象 | 評分（⭐1–5） |
    | --- | --- | --- | --- | --- |
    | ChatGPT | ⭐⭐ | ⭐⭐⭐ | 需要長期個人化記憶的一般用戶 | ⭐⭐⭐ |
    | Claude | ⭐（無工作區） | ⭐⭐⭐⭐⭐ | 大量文件知識庫、研究型用戶 | ⭐⭐⭐⭐ |
    | Gemini | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 需要多角色助手、整合 Google 工作流 | ⭐⭐⭐⭐ |
    | Perplexity | ⭐⭐⭐ | ⭐⭐⭐⭐ | 研究型、需搜尋整合的學習者 | ⭐⭐⭐⭐ |
    | 千問 | ⭐⭐⭐（完全免費） | — | 輕量中文使用、預算為零 | ⭐⭐⭐ |
    | Manus | ⭐⭐⭐（每日 300 積分） | ⭐⭐⭐（積分制風險高） | 自動化代理任務、進階 AI 工作流 | ⭐⭐⭐ |
    | DeepSeek | ⭐⭐（功能強但無工作區） | — | 推理分析、開發者、預算為零 | ⭐⭐ |

# 七、情境選擇建議指南

- 根據不同使用需求，建議如下：
    
    
    | 使用需求 | 最佳推薦 | 次選 | 說明 |
    | --- | --- | --- | --- |
    | **預算為零，想試用** | Gemini Gems 免費版 | 千問分組 | Gemini 免費可建立自訂助手，千問完全無限制  |
    | **大量文件知識庫** | Claude Pro $20 | Perplexity Pro $20 | Claude 200K 情境最強，Perplexity 具搜尋整合  |
    | **需要跨對話記憶** | ChatGPT Plus $20 | Manus Basic $19 | ChatGPT 記憶功能最純熟，Manus 有 Projects 支援  |
    | **自主代理多步驟任務** | Manus Plus $39 | — | Manus 是七平台中唯一真正 AI Agent 工作區  |
    | **整合 Google 生態系** | Gemini Advanced $19.99 | — | 深度整合 Gmail、Docs、Drive  |
    | **純研究搜尋協作** | Perplexity Pro $20 | — | 搜尋整合最強，支援多人 Space  |
    | **開源/推理能力優先** | DeepSeek（免費） | 千問（免費） | 個人化功能弱，但推理效能強  |

# 八、總結建議

- 對於您規劃的 **AI 學苑**，建議將此報告整理為「AI 工具選擇決策樹」頁面，以三個問題引導：
    - **預算**：是否有付費意願？→ 篩選免費 vs 付費平台
    - **使用目的**：記憶、知識庫、自動化任務、還是搜尋研究？→ 對應最佳平台
    - **使用語言**：以中文為主？→ 優先推薦千問、Gemini 或 ChatGPT
- 目前七大平台中，**Claude Projects（付費）+ Gemini Gems（免費）+ Perplexity Spaces（搜尋研究）** 的組合，是個人化情境管理功能最完整的黃金三角配置 。