export const arr_article = [
  {
    title_id: "n1",
    title: "一、報告總覽與核心定義",
    t1: [
      {
        d1: "「<strong>個人化情境工作區</strong>」（Personalized AI Context Workspace）是指 AI 平台能夠<strong>跨對話持久保存用戶偏好、知識文件與任務背景</strong>，讓每次互動不需從零開始的功能集合。",
      },
      { d1: "這是目前 AI 工具進化最快的核心競爭領域之一。" },
      {
        d1: "本報告針對七大主流 AI 平台，從功能本質、免費與付費差異、限制數據、費用效益四個維度進行系統性比對。",
        col: "col-sm-4",
        p2: [
          { pic1: "./images/P001-0A.webp", dec2: "" },
          { pic1: "./images/P001-2.webp", dec2: "" },
          { pic1: "./images/P001-3.webp", dec2: "" },
          { pic1: "./images/P001-4-1.webp", dec2: "" },
          { pic1: "./images/P001-4-2.webp", dec2: "" },
          { pic1: "./images/P001-5.webp", dec2: "" },
          { pic1: "./images/P001-6.webp", dec2: "" },
          { pic1: "./images/P001-7.webp", dec2: "" },
          { pic1: "./images/P001-8.webp", dec2: "" },
        ],
      },
    ],
  },
  {
    title_id: "n2",
    title: "二、七大平台功能本質速覽",
    t1: [
      {
        d1: "各平台功能",
        headers: [
          { label: "平台", width: "20%" },
          { label: "功能名稱", width: "20%" },
          { label: "功能核心定位", width: "30%" },
          { label: "技術機制", width: "30%" },
        ],
        rows: [
          [
            "ChatGPT",
            "記憶功能",
            "長期個人化記憶累積",
            "儲存記憶 + 聊天歷程雙軌學習",
          ],
          [
            "Claude",
            "Projects",
            "大容量知識庫＋角色指令",
            "RAG 檢索增強生成，動態載入相關內容",
          ],
          [
            "Gemini",
            "Gems",
            "自訂 AI 角色與行為風格",
            "系統指令塑造 + 模型驅動切換",
          ],
          [
            "Perplexity",
            "Spaces",
            "搜尋整合型協作研究空間",
            "網路搜尋 + 文件知識庫 + 多人協作",
          ],
          ["千問", "分組功能", "對話分類管理（輕量型）", "標籤式資料夾分組"],
          [
            "Manus",
            "Projects",
            "自主代理任務型永久工作區",
            "檔案系統作為記憶體（Filesystem as Memory）",
          ],
          [
            "DeepSeek",
            "無原生工作區",
            "僅 Session 內記憶",
            "無跨對話持久化機制",
          ],
        ],
      },
      {
        d1: "<br>",
        col: "col-sm-12",
        p2: [
          {
            pic1: "./images/P001-2.webp",
            dec2: "功能速覽~各平台功能本質一眼看懂",
          },
        ],
      },
    ],
  },
  {
    title_id: "n3",
    title: "三、免費版功能詳細比較",
    t1: [
      {
        d1: "付費版與免費版差異，還需要查證",
        headers: [
          { label: "平台", width: "15%" },
          { label: "免費版可用？", width: "15%" },
          { label: "記憶/情境持久性", width: "15%" },
          { label: "文件上傳", width: "10%" },
          { label: "自訂指令", width: "10%" },
          { label: "協作功能", width: "10%" },
          { label: "使用次數限制", width: "25%" },
        ],
        rows: [
          [
            "ChatGPT",
            "⚠️ 極輕量",
            "可查看舊記憶，不儲存新記憶",
            "有限",
            "❌",
            "❌",
            "有使用頻率限制",
          ],
          [
            "Claude",
            "❌ 完全無法使用",
            "僅 Session 內",
            "❌",
            "❌",
            "❌",
            "免費版無 Projects",
          ],
          [
            "Gemini",
            "✅ 可建立 Gems",
            "❌ 無跨對話記憶",
            "⚠️ 有限",
            "✅ 基本",
            "❌",
            "使用 Flash 模型（較弱）",
          ],
          [
            "👍👍<span class='yf4'>Perplexity(Pro版)",
            "✅ 基本 Spaces",
            "⚠️ 部分",
            "⚠️ 極少量",
            "✅ 基本",
            "⚠️ 有限",
            "搜尋次數受限",
          ],
          [
            "千問",
            "✅ 完整",
            "❌ 無跨對話",
            "❌",
            "❌",
            "❌",
            "無限制（網頁版）",
          ],
          [
            "Manus",
            "✅ 有限",
            "✅ Projects 可用",
            "✅ 支援",
            "✅ 支援",
            "❌",
            "每日 300 積分，1 個並行任務",
          ],
          [
            "DeepSeek",
            "—",
            "❌ 完全無持久記憶",
            "❌",
            "❌",
            "❌",
            "無限制（網頁版）",
          ],
        ],
      },
      {
        d1: "<br>",
        col: "col-sm-12",
        p2: [
          {
            pic1: "./images/P001-3.webp",
            dec2: "付費方案月費~免費版哪家強？熱力圖告訴你",
          },
        ],
      },
    ],
  },
  {
    title_id: "n4",
    title: "四、付費方案功能詳細比較",
    t1: [
      {
        d1: "<strong>4-1 付費方案層級與月費</strong>",
        headers: [
          { label: "平台", width: "25%" },
          { label: "入門付費方案", width: "25%" },
          { label: "中階方案", width: "25%" },
          { label: "頂級方案", width: "25%" },
        ],
        rows: [
          ["ChatGPT", "Plus $20/月", "—", "Pro $200/月"],
          ["Claude", "Pro $20/月", "Max $100+/月", "Enterprise（另議）"],
          ["Gemini", "Advanced $19.99/月", "—", "Enterprise（另議）"],
          ["Perplexity", "Pro $20/月", "—", "Max $200/月"],
          ["千問", "無個人付費版", "—", "API 另計"],
          [
            "Manus",
            "Basic/Standard $19~20/月",
            "Plus $39~40/月",
            "Pro $199~200/月",
          ],
          ["DeepSeek", "無個人付費版", "—", "API 另計"],
        ],
      },
      {
        d1: "<br>",
        col: "col-sm-12",
        p2: [
          {
            pic1: "./images/P001-4-1.webp",
            dec2: "付費方案月費~每月要花多少？付費方案一覽",
          },
        ],
      },
      {
        d1: "<strong>4-2 付費版關鍵功能數據比較</strong>",
        headers: [
          { label: "平台", width: "20%" },
          { label: "記憶/情境容量", width: "20%" },
          { label: "文件上傳上限", width: "20%" },
          { label: "Context Window", width: "20%" },
          { label: "自訂指令", width: "10%" },
          { label: "協作人數", width: "10%" },
        ],
        rows: [
          [
            "ChatGPT Plus",
            "~1,400 字記憶上限",
            "25 檔/專案",
            "256K tokens",
            "✅",
            "❌",
          ],
          [
            "Claude Pro",
            "200K tokens",
            "專案知識庫無上限",
            "200K tokens",
            "✅",
            "✅",
          ],
          [
            "Gemini Advanced",
            "Gemini 2.5 Pro 驅動",
            "✅ 更多容量",
            "1M tokens",
            "✅",
            "❌",
          ],
          [
            "Perplexity Pro",
            "每 Space 最多 50 份",
            "50 檔/Space",
            "依模型",
            "✅",
            "✅",
          ],
          [
            "Manus Plus/Pro",
            "無限 Projects",
            "✅ Google Drive 整合",
            "依任務",
            "✅",
            "✅",
          ],
          [
            "Claude Enterprise",
            "500K tokens",
            "企業級大量",
            "500K tokens",
            "✅",
            "✅",
          ],
        ],
      },
      {
        d1: "<br>",
        col: "col-sm-12",
        p2: [
          {
            pic1: "./images/P001-4-2.webp",
            dec2: "付費功能數據~付費版關鍵功能深度比較",
          },
        ],
      },
    ],
  },
  {
    title_id: "n5",
    title: "五、Manus 積分制度詳細說明",
    t1: [
      {
        d1: "Manus 採用特殊的<strong>積分制</strong>，與其他平台月費制邏輯不同，需特別理解 ：",
        headers: [
          { label: "方案", width: "15%" },
          { label: "月費", width: "15%" },
          { label: "月費積分", width: "20%" },
          { label: "每日免費積分", width: "15%" },
          { label: "並行任務數", width: "15%" },
          { label: "備註", width: "20%" },
        ],
        rows: [
          ["Free", "$0", "1,000（一次性）", "300", "1", "無需信用卡"],
          ["Basic/Standard", "$19~20", "1,900~4,000", "300", "20", "不滾存"],
          ["Plus", "$39~40", "3,900~8,000", "300", "20", "建議中度使用者"],
          [
            "Pro/Extended",
            "$199~200",
            "19,900~40,000",
            "300",
            "20",
            "高頻代理任務",
          ],
        ],
      },
      {
        d1: "<blockquote>⚠️ <strong>重要提醒</strong>：Manus 每個任務消耗積分不固定，複雜任務單次可消耗 500–900 積分，且無法預先估算 。</blockquote>",
      },
      {
        d1: "<br>",
        col: "col-sm-12",
        p2: [
          {
            pic1: "./images/P001-5.webp",
            dec2: "",
          },
        ],
      },
    ],
  },
  {
    title_id: "n6",
    title: "六、費用效益（CP 值）綜合評分",
    t1: [
      {
        d1: "<strong>綜合比較</strong>",
        headers: [
          { label: "平台", width: "20%" },
          { label: "免費版 CP 值", width: "20%" },
          { label: "付費版 CP 值", width: "20%" },
          { label: "適合對象", width: "25%" },
          { label: "評分", width: "15%" },
        ],
        rows: [
          ["ChatGPT", "⭐⭐", "⭐⭐⭐", "一般用戶", "⭐⭐⭐"],
          ["Claude", "⭐", "⭐⭐⭐⭐⭐", "研究型用戶", "⭐⭐⭐⭐"],
          ["Gemini", "⭐⭐⭐⭐", "⭐⭐⭐⭐", "Google 工作流", "⭐⭐⭐⭐"],
          ["Perplexity", "⭐⭐⭐", "⭐⭐⭐⭐", "搜尋研究者", "⭐⭐⭐⭐"],
          ["千問", "⭐⭐⭐", "—", "預算為零", "⭐⭐⭐"],
          ["Manus", "⭐⭐⭐", "⭐⭐⭐", "進階 AI 工作流", "⭐⭐⭐"],
          ["DeepSeek", "⭐⭐", "—", "推理分析", "⭐⭐"],
        ],
      },
      {
        d1: "<br>",
        col: "col-sm-12",
        p2: [
          {
            pic1: "./images/P001-6.webp",
            dec2: "CP值雷達圖~費用效益評比：誰最划算？",
          },
        ],
      },
    ],
  },
  {
    title_id: "n7",
    title: "七、情境選擇建議指南",
    t1: [
      {
        d1: "根據不同使用需求，建議如下：",
        headers: [
          { label: "使用需求", width: "25%" },
          { label: "最佳推薦", width: "25%" },
          { label: "次選", width: "20%" },
          { label: "說明", width: "30%" },
        ],
        rows: [
          ["預算為零", "Gemini Gems 免費版", "千問分組", "Gemini 可自訂助手"],
          [
            "大量文件知識庫",
            "Claude Pro $20",
            "Perplexity Pro $20",
            "Claude 200K 情境",
          ],
          [
            "跨對話記憶",
            "ChatGPT Plus $20",
            "Manus Basic $19",
            "ChatGPT 最純熟",
          ],
          ["自主代理任務", "Manus Plus $39", "—", "唯一真正 Agent 工作區"],
          ["整合 Google", "Gemini Advanced", "—", "深度整合 Gmail/Drive"],
          ["純研究搜尋", "Perplexity Pro $20", "—", "搜尋整合最強"],
          ["開源/推理優先", "DeepSeek", "千問", "個人化弱但推理強"],
        ],
      },
      {
        d1: "<br>",
        col: "col-sm-12",
        p2: [
          {
            pic1: "./images/P001-7.webp",
            dec2: "需求推薦圖~依需求找最佳AI平台",
          },
        ],
      },
    ],
  },
  {
    title_id: "n8",
    title: "八、總結建議",
    t1: [
      {
        d1: "對於您規劃的 <strong>AI 學苑</strong>，建議將此報告整理為「AI 工具選擇決策樹」頁面，以三個問題引導：",
        c2s: [
          {
            d1: "<strong>預算</strong>：是否有付費意願？→ 篩選免費 vs 付費平台",
          },
          {
            d1: "<strong>使用目的</strong>：記憶、知識庫、自動化任務、還是搜尋研究？→ 對應最佳平台",
          },
          {
            d1: "<strong>使用語言</strong>：以中文為主？→ 優先推薦千問、Gemini 或 ChatGPT",
          },
        ],
      },
      {
        d1: "目前七大平台中，<strong>Claude Projects（付費）+ Gemini Gems（免費）+ Perplexity Spaces（搜尋研究）</strong> 的組合，是個人化情境管理功能最完整的黃金三角配置 。",
      },
      {
        d1: "<br>",
        col: "col-sm-12",
        p2: [
          {
            pic1: "./images/P001-8.webp",
            dec2: "決策樹~我該選哪個AI？三步驟決策指引",
          },
        ],
      },
    ],
  },
];
