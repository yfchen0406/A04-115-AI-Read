const promptsData = [
  {
    id: 1,
    title: "插畫版帥照~1",
    category: "Portrait",
    image: "./images/P02-Portrait/P001-1.webp",
    prompt:
      "生成一張你想象中的「我」的插圖、日系插畫風、角色特徵鮮明、情緒自然表情、半身構圖、動態姿態、服裝細節精緻、手繪塗鴉風、潑墨筆觸、隨性線條、粉彩與墨色混合、漫畫草稿質感、白色簡約背景、周圍符號化元素點綴、氛圍感強、高細節、高品質。",
    date: "2026-04-30",
    url: "",
  },
  {
    id: 2,
    title: "插畫版帥照~1",
    category: "Portrait",
    image: "./images/P02-Portrait/P001-2.webp",
    prompt:
      "生成一張你想象中的「我」的插圖、日系插畫風、角色特徵鮮明、情緒自然表情、半身構圖、動態姿態、服裝細節精緻、手繪塗鴉風、潑墨筆觸、隨性線條、粉彩與墨色混合、漫畫草稿質感、白色簡約背景、周圍符號化元素點綴、氛圍感強、高細節、高品質。",
    date: "2026-04-30",
    url: "",
  },
  {
    id: 3,
    title: "整個城市都在我身邊",
    category: "Scene",
    image: "./images/S01-Scene/S001-1.webp",
    prompt:
      "【城市名稱】Taipei（台北）/n請務必使用上傳圖片中的人物作為唯一主體。/n【⚠️ 絕對規則（最重要）】/n/n- 人物臉部絕對不可修改/n* 臉部結構、眼睛、鼻子、嘴巴、表情需完全一致/n* 禁止美化、風格化、重新詮釋/n* 服裝必須維持原樣（顏色、材質、版型不可變）/n* 視線需維持看向鏡頭/n/n⸻/n/n【構圖】/ntiny planet 小行星構圖（球形全景）/n超廣角魚眼鏡頭（fisheye）/n自拍視角/n一隻手向鏡頭延伸（拿相機）/n從上往下俯視的立體視角/n/n⸻/n/n【城市設定】/n/n將 Taipei（台北）的實際地標環繞排列成一顆小行星/n/n地標列表：/n/n- 台北101/n* 象山步道／山稜線/n* 中正紀念堂/n* 西門町街區/n* 淡水河岸/n/n👉 規則：/n/n- 至少包含 3～5 個核心地標/n* 必須讓人一眼辨識為「台北」/n* 地標需依真實比例呈現，不可誇張變形/n/n⸻/n/n【風格】/n超現實但接近真實照片的寫實風格/n自然光（晴天藍天白雲）/n柔和陰影/n城市細節高精細（建築、街道、環境清楚）/n整體呈現真實旅遊照片感/n/n⸻/n/n【人物比例】/n頭部僅微幅放大（約 1.05～1.1 倍）/n身體維持自然比例**1**/**2**/n",
    date: "2026-04-30",
    url: "",
  },
  {
    id: 4,
    title: "雜誌封面~1",
    category: "Portrait",
    image: "./images/P02-Portrait/P001-3.webp",
    prompt:
      "請幫我生成一張 背景為夜晚咖啡廳或柔和場景。 色調： 柔和的橘色至米色調。 表情與姿勢調整自然的看桌上物品表情與姿勢並保持真實感。 禁止重新設計臉部或變成另一張臉，需讓人一眼看出是原照片中的人物。 日常生活的物件（如：咖啡、蛋糕、筆記本、平板、手機等）。 雜誌排版： 雜誌風的佈局設計。 【視覺元素】 底片感質地： 膠捲相機般的質感（帶有輕微顆粒感）。 讓迷你版的人物圍繞著他/她栩栩如生。 迷你角色創建 - 關鍵訊息根據本人創建多個“迷你角色” 風格：可愛的 3D SD 角色（可採用 Roblox / 像素風格） 精確還原臉部、頭髮和服裝不同。 [迷你角色特色]尺寸小巧（掌心大小）可建立多個角色（約 3~5個） [迷你角色動作 - 重要] 每個角色都必須有動作。 範例：邊跳邊玩，揮手，模仿本人，坐在物體上，爬到本人的肩膀/頭上。 [放置方向] 自然地放置在桌上/旁邊/包包/肩膀/地板/手上等位置。 有些在人物前方，有些在人物後方 → 營造空間感 添加陰影使其看起來更真實. [禁止事項]禁止修改臉部 禁止角色形像不協調 整體風格為日/韓系奶油白、淡粉色夢幻追星風格 尺寸為IG直式4:5",
    date: "2026-04-30",
    url: "",
  },
  {
    id: 5,
    title: "雜誌封面~2",
    category: "Portrait",
    image: "./images/P02-Portrait/P001-4.webp",
    prompt:
      "用我上傳的照片製作「高質感旅遊雜誌封面」。 【重要要求】 ・保留原照片人物五官與畫面（不可改臉） ・只做「排版設計＋文字＋色調微調」 ・整體風格像日系高質感旅遊雜誌（類似 anan / Popeye 風格） ・中英雙語排版 【版面設計】 ・大標題：英文雜誌名（例如：TRAVELER / VOYAGE / JOURNAL） ・風格：乾淨、留白、有設計感（每次版型可變化，不要固定） ・配色：依照片調整（海邊＝藍色系 / 城市＝暖色系 / 山景＝自然綠） 【內容設定】 👉 地點：日本關西京阪神 👉 左上角日期：115年6月（例如：2024 年 9 月） 👉 主標題（中文）：例：日本關西六日遊 👉 副標（英文）：例：Japan Kansai Six-Day Tour 【雜誌小標】（中英對照增加真實感） ・必訪景點 Must-Visit Destinations ・在地生活 Local Lifestyle ・經典路線 Classic Itineraries ・私房景點 Hidden Gems 【右下角金句】（一句旅行金句，三選一風格） ・勇氣類：勇敢出發，世界會為你讓路 ・文青類：走得越遠，越靠近自己 ・英文：Travel changes you before you realize it. 【風格要求】 ・高級感、乾淨、雜誌排版 不要過度花俏 ・字體有層次（標題大、副標小） ・可加入圓形標籤（國家名稱）",
    date: "2026-04-30",
    url: "",
  },
  {
    id: 6,
    title: "Line貼圖~思考、旅遊",
    category: "Line",
    image: "./images/L01-Line/L001-1.webp",
    prompt:
      "請依照提供的人物形象，設計一組 16張風格一致的專屬似顏繪貼圖。角色設定為「你的身分」，整體採用可愛精緻的Q版風格（chibi），保留人物五官特色與辨識度。/n貼圖需具備：/n• 表情豐富、情緒明確（開心、思考、驚訝、專注、加油等）/n• 動作自然生動（揮手、比讚、旅行中、爬山中、靈感發想等）/n• 搭配旅行情境元素（國外、國內、爬山、海島、古蹟等）/n整體風格要求：/n• 色彩乾淨、柔和且具設計感/n• 風格統一、角色比例一致/n• 適用於簡報、社群貼文與數位內容創作/n• 具有個人品牌識別度與專業形象/n貼圖內容可包含簡短文字（中英皆可），提升實用性與互動感。/n最終呈現需：/n👉 一整套16張貼圖完整排列/n👉 每張獨立可用，亦可整體輸出/n👉 高解析度、適合數位應用與分享/n",
    date: "2026-04-30",
    url: "",
  },
  {
    id: 7,
    title: "Line貼圖-家事篇~1",
    category: "Line",
    image: "./images/L01-Line/L001-2.webp",
    prompt:
      "設計一套16張可愛Q版貼圖，主角為同一位帥氣的台灣中年退休男老師，短黑髮，戴深色大框太陽眼鏡，穿深藍色Polo衫。(以附件圖片為主) 每張貼圖主題各不相同，皆為在家認真完成家務的場景，並附上中英文雙語手寫風格標題文字。16個場景如下：1. 認真拖地，揮汗如雨，文字「拖地中！Mopping!」2. 彎腰擦地板，表情專注，文字「擦地板！Scrubbing!」3. 手持掃把大力掃地，文字「掃地中！Sweeping!」4. 認真洗碗，泡泡四濺，文字「洗碗中！Doing Dishes!」5. 站在廚房炒菜，鍋中火花四射，文字「煮飯中！Cooking!」6. 用力搓洗衣服，汗流浹背，文字「洗衣服！Laundry!」7. 晾衣服，踮起腳尖掛衣架，文字「晾衣服！Hang it up!」8. 拿著吸塵器認真吸地毯，文字「吸塵中！Vacuuming!」9. 整理書架，擦書本，戴著手套，文字「整理書架！Organizing!」10. 彎腰清理馬桶，表情無奈但認真，文字「刷馬桶！Scrub it!」11. 站在窗邊認真擦玻璃，文字「擦窗戶！Cleaning Windows!」12. 認真倒垃圾，拎著大袋垃圾，文字「倒垃圾！Taking Out Trash!」13. 蹲下來整理冰箱，東西堆滿一地，文字「整理冰箱！Fridge Time!」14. 澆花，拿著澆水壺對著盆栽，文字「澆花中！Watering!」15. 做完所有家務，癱坐在沙發上喝茶，冒出愛心，文字「完成啦！Done!」16. 雙手叉腰，環顧整潔的家，得意表情，文字「家事王！Home Hero!」風格要求：Q版卡通、半寫實插畫、乾淨線條、色彩鮮豔、白色背景、4x4格局貼圖排列、中文手寫風格標題搭配小字英文副標。",
    date: "2026-04-30",
    url: "",
  },
  {
    id: 8,
    title: "Line貼圖-家事篇~2",
    category: "Line",
    image: "./images/L01-Line/L001-3.webp",
    prompt:
      "設計一套16張可愛Q版貼圖，主角為同一位帥氣的台灣中年退休男老師，短黑髮，戴深色大框太陽眼鏡，穿深藍色Polo衫。(以附件圖片為主) 每張貼圖主題各不相同，皆為在家認真完成家務的場景，並附上中英文雙語手寫風格標題文字。16個場景如下：1. 認真拖地，揮汗如雨，文字「拖地中！Mopping!」2. 彎腰擦地板，表情專注，文字「擦地板！Scrubbing!」3. 手持掃把大力掃地，文字「掃地中！Sweeping!」4. 認真洗碗，泡泡四濺，文字「洗碗中！Doing Dishes!」5. 站在廚房炒菜，鍋中火花四射，文字「煮飯中！Cooking!」6. 用力搓洗衣服，汗流浹背，文字「洗衣服！Laundry!」7. 晾衣服，踮起腳尖掛衣架，文字「晾衣服！Hang it up!」8. 拿著吸塵器認真吸地毯，文字「吸塵中！Vacuuming!」9. 整理書架，擦書本，戴著手套，文字「整理書架！Organizing!」10. 彎腰清理馬桶，表情無奈但認真，文字「刷馬桶！Scrub it!」11. 站在窗邊認真擦玻璃，文字「擦窗戶！Cleaning Windows!」12. 認真倒垃圾，拎著大袋垃圾，文字「倒垃圾！Taking Out Trash!」13. 蹲下來整理冰箱，東西堆滿一地，文字「整理冰箱！Fridge Time!」14. 澆花，拿著澆水壺對著盆栽，文字「澆花中！Watering!」15. 做完所有家務，癱坐在沙發上喝茶，冒出愛心，文字「完成啦！Done!」16. 雙手叉腰，環顧整潔的家，得意表情，文字「家事王！Home Hero!」風格要求：Q版卡通、半寫實插畫、乾淨線條、色彩鮮豔、白色背景、4x4格局貼圖排列、中文手寫風格標題搭配小字英文副標。",
    date: "2026-04-30",
    url: "",
  },

  {
    id: 9,
    title: "Life-耍廢篇~1~Q版卡通",
    category: "Life",
    image: "./images/L02-Life/L001-1.webp",
    prompt:
      "以使用者上傳照片中的人物為基礎，完整保留臉型、五官比例、神韻與辨識度，<span class='yf33'>轉換為高精緻Q版卡通擬真角色</span>（大頭小身比例，約1:3）。 人物呈現放鬆狀態，躺在柔軟的床墊或沙發上，四肢自然攤開，表情療癒、放空或微閉眼。 整體場景為溫暖居家風格，色調以奶油色、米色、淺棕色為主，柔和光線，舒適療癒氛圍，帶有高級質感與細膩材質（布料、絨毛、玻璃）。 【AI自動生成元素（隨機）】 - 周邊物件：AI隨機生成（如：飲料、甜點、零食、3C產品、書本、玩偶、耳機等） - 擺放方式自然圍繞人物 - 至少包含 5–8 個生活感物件 【AI自動生成手寫文字（重點）】 - 風格：手寫塗鴉風（咖啡色線條） - 主標題（畫面上方）：AI自動生成一句療癒/厭世/放鬆語句 - 周圍氣泡文字：AI隨機生成5-7句短句（例：今天辛苦了、先躺再說、明天再努力等） - 搭配小圖案：愛心、星星、箭頭、曲線 每次生成時： - 隨機更換主題（如：下班、週末、追劇、熬夜、放空、耍廢日） - 隨機變化配件風格（療癒系 / 科技感 / 美食系 / 文青風） - 隨機改變人物姿勢（躺平、側躺、抱枕、滑手機）",
    date: "2026-05-06",
    url: "",
  },
  {
    id: 10,
    title: "Life-耍廢篇~2~Q版3D~好像沒差",
    category: "Life",
    image: "./images/L02-Life/L001-2.webp",
    prompt:
      "以使用者上傳照片中的人物為基礎，完整保留臉型、五官比例、神韻與辨識度，<span class='yf33'>轉換為高精緻Q版3D擬真角色</span>（大頭小身比例，約1:3）。 人物呈現放鬆狀態，躺在柔軟的床墊或沙發上，四肢自然攤開，表情療癒、放空或微閉眼。 整體場景為溫暖居家風格，色調以奶油色、米色、淺棕色為主，柔和光線，舒適療癒氛圍，帶有高級質感與細膩材質（布料、絨毛、玻璃）。 【AI自動生成元素（隨機）】 - 周邊物件：AI隨機生成（如：飲料、甜點、零食、3C產品、書本、玩偶、耳機等） - 擺放方式自然圍繞人物 - 至少包含 5–8 個生活感物件 【AI自動生成手寫文字（重點）】 - 風格：手寫塗鴉風（咖啡色線條） - 主標題（畫面上方）：AI自動生成一句療癒/厭世/放鬆語句 - 周圍氣泡文字：AI隨機生成5–7句短句（例：今天辛苦了、先躺再說、明天再努力等） - 搭配小圖案：愛心、星星、箭頭、曲線 每次生成時： - 隨機更換主題（如：下班、週末、追劇、熬夜、放空、耍廢日） - 隨機變化配件風格（療癒系 / 科技感 / 美食系 / 文青風） - 隨機改變人物姿勢（躺平、側躺、抱枕、滑手機）",
    date: "2026-05-06",
    url: "",
  },
  {
    id: 11,
    title: "Life-認真篇~1",
    category: "Life",
    image: "./images/L02-Life/L001-4.webp",
    prompt:
      "請根據我上傳的照片，將主角轉換成一位「Q版退休教師」角色，保留照片中的臉型特徵、髮型輪廓、神情氣質與整體辨識度，但以可愛的 Q 版公仔比例呈現，頭大身小、表情溫和、充滿學習感與親切感。請創作一張橫式 16:9 的高細節微縮場景海報，整體風格延續桌面模型、3D 公仔、暖色電影光、淺景深、豐富道具、資訊圖表式視覺敘事的感覺。畫面主題是「退休後努力學習的每日生活」，要呈現真實、豐富、忙碌但有秩序的退休學習日常。 畫面中央是一位 Q 版退休教師主角，站在木質桌面場景中，身穿日常休閒但有精神的服裝，手上可拿書本、咖啡杯、筆記本或手機，姿態自然，像一位正在學習與整理知識的人。整個場景要分成多個工作區塊，每個區塊都有明確主題標籤，像一張退休學習生活總覽圖。 左上區塊是「每日英文」角落，擺放單字卡、英文筆記本、耳機、手機聽力 App、閱讀書頁與螢光筆，旁邊有小標語：「單字、句型、聽力、閱讀，天天都要碰一點」。 左中區塊是「每日閱讀」角落，擺放 5 分鐘或 10 分鐘閱讀中的書籍、書籤、便條紙、重點整理卡片，內容偏認知思維、心理學、策略思維、人生智慧類書籍。 中間區塊是「AI 學苑」學習桌，擺放筆電、Obsidian 筆記畫面、提示詞卡片、AI 工具分類頁、搜尋框、卡片式網站首頁、資料夾、便利貼與流程圖，呈現你正在建置個人 AI 學苑網站的狀態。 右中區塊是「Vibe Coding / AI Agent」工作區，畫面上有程式碼螢幕、HTML/CSS 片段、AI 代理流程圖、元件庫、網站導覽列設計稿、圖示庫、卡片排版草圖，呈現學習前後端與 AI 工具整合的氛圍。 右上區塊是「每日 AI 新知」角落，放有 AI 工具網站、提示詞筆記、模型比較表、圖片生成範例、影片生成範例、免費工具收藏清單，旁邊可有小標示：「免費工具優先，持續學習最新技術」。 下方可加入一條「每日一目標」儀表板，使用可愛但清楚的圖示來表現：英文、閱讀、網頁、AI、走路、健康管理。走路部分可畫一條小步道、鞋印、手機步數顯示，寫著「2000 步以上」。健康部分可畫飲食紀錄、水杯、少糖飲食、小秤或餐盤。 右下角可安排一個小角落，呈現「幫兒子職場建議」的家庭陪伴感，像是父親在桌邊寫下提醒卡片、職場筆記、溝通備忘錄，氣氛溫暖但不誇張。 整體畫面要像一張「退休生活學習全景圖」，同時呈現知識、紀律、好奇心、家庭關懷與日常實作。風格要溫暖、真實、細節豐富、幽默但不浮誇，像高質感的社群宣傳海報與個人學習紀錄封面。背景可加入書架、綠植、茶杯、文具、平板、手機、手寫便條、檯燈、日光灑落的窗邊感，讓畫面有居家學習的真實溫度。 請在畫面上方加入繁體中文主標題：「退休後的每日學習日常」。 請在畫面中央或右上加入副標題：「英文、閱讀、網頁、AI、走路，讓生活持續長出新能力」。 請在底部加入一句溫暖收尾：「退休不是停止，而是把人生重新整理成自己喜歡的樣子。」 請使用繁體中文文字，字體像手寫標牌與溫柔的海報字，畫面中的所有標示都要自然可讀，不要出現英文標題，除非是螢幕中的工具介面需要保留少量英文名詞。畫面請保持高密度但不混亂，像一張充滿故事的退休學習桌面總覽圖。",
    date: "2026-05-06",
    url: "",
  },
  {
    id: 12,
    title: "Life-認真篇~1",
    category: "Life",
    image: "./images/L02-Life/L001-3.webp",
    prompt:
      "請根據我上傳的照片，將主角轉換成一位「Q版卡通退休教師」角色，保留照片中的臉型特徵、髮型輪廓、神情氣質與整體辨識度，但以可愛的 Q 版公仔比例呈現，頭大身小、表情溫和、充滿學習感與親切感。請創作一張橫式 16:9 的高細節微縮場景海報，整體風格延續桌面模型、3D 公仔、暖色電影光、淺景深、豐富道具、資訊圖表式視覺敘事的感覺。畫面主題是「退休後努力學習的每日生活」，要呈現真實、豐富、忙碌但有秩序的退休學習日常。 畫面中央是一位 Q 版退休教師主角，站在木質桌面場景中，身穿日常休閒但有精神的服裝，手上可拿書本、咖啡杯、筆記本或手機，姿態自然，像一位正在學習與整理知識的人。整個場景要分成多個工作區塊，每個區塊都有明確主題標籤，像一張退休學習生活總覽圖。 左上區塊是「每日英文」角落，擺放單字卡、英文筆記本、耳機、手機聽力 App、閱讀書頁與螢光筆，旁邊有小標語：「單字、句型、聽力、閱讀，天天都要碰一點」。 左中區塊是「每日閱讀」角落，擺放 5 分鐘或 10 分鐘閱讀中的書籍、書籤、便條紙、重點整理卡片，內容偏認知思維、心理學、策略思維、人生智慧類書籍。 中間區塊是「AI 學苑」學習桌，擺放筆電、Obsidian 筆記畫面、提示詞卡片、AI 工具分類頁、搜尋框、卡片式網站首頁、資料夾、便利貼與流程圖，呈現你正在建置個人 AI 學苑網站的狀態。 右中區塊是「Vibe Coding / AI Agent」工作區，畫面上有程式碼螢幕、HTML/CSS 片段、AI 代理流程圖、元件庫、網站導覽列設計稿、圖示庫、卡片排版草圖，呈現學習前後端與 AI 工具整合的氛圍。 右上區塊是「每日 AI 新知」角落，放有 AI 工具網站、提示詞筆記、模型比較表、圖片生成範例、影片生成範例、免費工具收藏清單，旁邊可有小標示：「免費工具優先，持續學習最新技術」。 下方可加入一條「每日一目標」儀表板，使用可愛但清楚的圖示來表現：英文、閱讀、網頁、AI、走路、健康管理。走路部分可畫一條小步道、鞋印、手機步數顯示，寫著「2000 步以上」。健康部分可畫飲食紀錄、水杯、少糖飲食、小秤或餐盤。 右下角可安排一個小角落，呈現「幫兒子職場建議」的家庭陪伴感，像是父親在桌邊寫下提醒卡片、職場筆記、溝通備忘錄，氣氛溫暖但不誇張。 整體畫面要像一張「退休生活學習全景圖」，同時呈現知識、紀律、好奇心、家庭關懷與日常實作。風格要溫暖、真實、細節豐富、幽默但不浮誇，像高質感的社群宣傳海報與個人學習紀錄封面。背景可加入書架、綠植、茶杯、文具、平板、手機、手寫便條、檯燈、日光灑落的窗邊感，讓畫面有居家學習的真實溫度。 請在畫面上方加入繁體中文主標題：「退休後的每日學習日常」。 請在畫面中央或右上加入副標題：「英文、閱讀、網頁、AI、走路，讓生活持續長出新能力」。 請在底部加入一句溫暖收尾：「退休不是停止，而是把人生重新整理成自己喜歡的樣子。」 請使用繁體中文文字，字體像手寫標牌與溫柔的海報字，畫面中的所有標示都要自然可讀，不要出現英文標題，除非是螢幕中的工具介面需要保留少量英文名詞。畫面請保持高密度但不混亂，像一張充滿故事的退休學習桌面總覽圖。",
    date: "2026-05-06",
    url: "",
  },
  {
    id: 13,
    title: "Life-一家3口",
    category: "Life",
    image: "./images/L02-Life/L001-5.webp",
    prompt:
      "生成一張你想象中的「一家3口」的插圖、韓系插畫風、角色特徵鮮明、情緒自然表情、全身構圖、動態姿態、服裝細節精緻、手繪塗鴉風、潑墨筆觸、隨性線條、粉彩與墨色混合、漫畫草稿質感、自然簡約背景、周圍符號化元素點綴、氛圍感強、高細節、高品質。臉的細節要細緻一點 .原圖人像不變",
    date: "2026-05-06",
    url: "",
  },
  {
    id: 14,
    title: "迷你分身~第1版",
    category: "Mini",
    image: "./images/M02-Mini/M002-1.webp",
    prompt:
      "以我上傳的人物照片為基礎，生成一張 16:9 橫幅、具有 Instagram 氛圍感與故事感的「我日常中的小小分身們」圖片。保留原始人物的臉部、髮型、姿勢、服裝、五官比例與整體辨識度，不要更改人物本體。將原始人物去背後放在畫面中央，或稍微偏前方的位置，加入自然陰影，人物外圍加上細細的白色描邊，呈現貼紙感，但不要太厚。畫面主題是退休教師的安靜日常，包含閱讀、學習 AI、新知記錄、寫筆記、整理網頁、喝茶、在窗邊思考、散步後休息的感覺。在主角周圍生成 3 到 7 個迷你分身角色，尺寸像手掌般小巧。這些迷你分身要以原人物為基礎延伸，臉部、髮型、服裝特徵都要忠實反映原人物，風格為可愛的 3D SD 角色，可帶有 Roblox 或像素感。每個迷你分身都必須正在做動作，不能靜止不動。動作可以包含翻書、抱書、拿筆記本、拿筆寫字、滑平板、看 AI 畫面、整理網頁、喝茶、揮手、坐在書本上、爬到肩膀上、躺在包包上、在手上互動、彼此對話、在窗邊休息。迷你分身像是你一天中的小幫手與小夥伴，陪你一起學習與生活，形成有故事的小劇場。畫面中的角色要自然地分布在書本上、桌面上、包包上、肩膀上、手上、地板上、窗邊、筆電旁，部分角色在人物前方，部分角色在人物後方，讓構圖有層次感。整體氛圍要溫暖、療癒、細膩，帶一點幽默感與人情味，像是退休後安靜而充實的一天。背景簡潔、有生活感，光線柔和，細節清楚，主角與迷你分身是畫面焦點。不要多餘文字、不要水印、不要額外人物、不要改變原人物臉部與姿勢。",
    date: "2026-05-07",
    url: "",
  },
  {
    id: 15,
    title: "LINE貼圖~正芬姐~1/3",
    category: "Line",
    image: "./images/L01-LINE/L002-1.webp",
    prompt:
      "<span class='yf3'>步驟1(產生貼圖提示詞)~產出GPT Image2.0 line貼圖的提示詞，用附件圖片人物做主角，搭配下列動作，用4X4產出三張，貼圖開心活潑充滿朝氣，人物為圖片Q版造型，分三份提示詞呈現 謝謝/吃飯沒/有空嗎/在幹嘛/ok/早安/再見/開會中/快到了/再說啦/沒空啦/准/集合/約起來/讚/ YA/哭哭/？/哈哈哈/辛苦了/加油/收到/拜託/太感謝了/生日快樂/💗/Hello/No/+1/忙錄中/ 暈倒/晚安/不好意思/早點休息/</span><br><span class='yf11'>步驟2(產生圖片)~Create a 4x4 grid of 16 LINE sticker panels. The main character is a chibi Q-version of the person in the attached photo — big round head, small body, chubby cheeks, expressive eyes, cute proportions, wearing casual clothing consistent with the reference image. Each panel shows the character in a different lively and joyful pose with a bold Traditional Chinese label in a cute rounded bubble font clearly placed at the bottom of each panel. The overall style is bright, energetic, cheerful, and full of vitality — like a premium kawaii LINE sticker set. White background for each panel with soft rounded corners. The 16 panels in order are:【謝謝】— character bowing deeply with both hands clasped, big smile, sparkles around【吃飯沒】— character holding a bowl of rice and chopsticks, eyes sparkling, mouth watering expression【有空嗎】— character leaning forward curiously with hand raised asking, big hopeful eyes【在幹嘛】— character peeking sideways with a magnifying glass, curious and playful expression【OK】— character giving a big thumbs up with confident grin, fist pumped【早安】— character stretching arms up yawning with sunrise behind, sleepy but cheerful【再見】— character waving both hands enthusiastically with big smile, small hearts floating【開會中】— character sitting at tiny desk with laptop open, serious focused face, finger to lips 'shhh' gesture【快到了】— character running at full speed with speed lines, one arm stretched forward, sweating slightly【再說啦】— character waving dismissively with a cheeky grin, one eye winking【沒空啦】— character surrounded by floating tasks and clocks, arms crossed, overwhelmed but cute【准】— character stamping a big red approval seal with confident smile and thumbs up【集合】— character blowing a bugle/whistle and pointing forward energetically【約起來】— character holding up a calendar/phone with excited jumping pose, stars around【讚】— character flashing a huge double thumbs up with glowing aura and big grin【YA】— character jumping in the air with both arms raised in V-sign, confetti explodingAll text labels must be in Traditional Chinese with rounded cute font. No English text. Keep all 16 panels clean, vibrant, and consistent in character design.",
    date: "2026-05-09",
    url: "",
  },
  {
    id: 16,
    title: "LINE貼圖~正芬姐~2/3",
    category: "Line",
    image: "./images/L01-LINE/L002-2.webp",
    prompt:
      "<span class='yf3'>步驟1(產生貼圖提示詞)~產出GPT Image2.0 line貼圖的提示詞，用附件圖片人物做主角，搭配下列動作，用4X4產出三張，貼圖開心活潑充滿朝氣，人物為圖片Q版造型，分三份提示詞呈現 謝謝/吃飯沒/有空嗎/在幹嘛/ok/早安/再見/開會中/快到了/再說啦/沒空啦/准/集合/約起來/讚/ YA/哭哭/？/哈哈哈/辛苦了/加油/收到/拜託/太感謝了/生日快樂/💗/Hello/No/+1/忙錄中/ 暈倒/晚安/不好意思/早點休息/</span><br><span class='yf11'>步驟2(產生圖片)~Create a 4x4 grid of 16 LINE sticker panels. The main character is a chibi Q-version of the person in the attached photo — big round head, small body, chubby cheeks, expressive eyes, cute proportions, casual clothing matching the reference. Each panel features the character with a bold Traditional Chinese (or symbolic) label in cute rounded bubble font at the bottom. Style is bright, joyful, kawaii, full of energy. White background, soft rounded corners per panel. The 16 panels in order are:【哭哭】— character crying dramatically with big tears, pouty face, tissue in hand, cute and exaggerated【？】— character scratching head with a giant question mark floating above, confused tilted head【哈哈哈】— character laughing with mouth wide open, tears of joy, rolling slightly, super jolly【辛苦了】— character patting air gently with warm caring smile, soft glowing aura of warmth【加油】— character cheering with fist raised high, energetic pose, fire and stars around【收到】— character giving an OK salute gesture, eyes bright, military-style acknowledgement cute pose【拜託】— character clasping hands together in begging pose, big pleading puppy eyes, sparkles【太感謝了】— character bowing repeatedly with joy tears, golden thank-you sparkles floating【生日快樂】— character holding a birthday cake with candles, party hat on, confetti everywhere【💗】— character hugging a giant glowing pink heart, eyes closed in bliss, soft pink aura【Hello】— character waving cheerfully with big open smile, small stars around the hand【No】— character shaking head with both hands crossed in an X, firm but cute expression【+1】— character pointing upward holding a '+1' sign, smiling and nodding in agreement【忙碌中】— character spinning surrounded by tasks, calendar, phone, emails swirling around【暈倒】— character fainting dramatically with swirl eyes, falling backward, small birds circling head【晚安】— character in pajamas yawning, holding a pillow, crescent moon and stars background, sleepy smileAll text labels in Traditional Chinese with rounded cute font. Use heart emoji 💗 for panel 10. No extra English. Consistent character design across all 16 panels.",
    date: "2026-05-09",
    url: "",
  },
  {
    id: 17,
    title: "LINE貼圖~正芬姐~3/3",
    category: "Line",
    image: "./images/L01-LINE/L002-3.webp",
    prompt:
      "<span class='yf3'>步驟1(產生貼圖提示詞)~產出GPT Image2.0 line貼圖的提示詞，用附件圖片人物做主角，搭配下列動作，用4X4產出三張，貼圖開心活潑充滿朝氣，人物為圖片Q版造型，分三份提示詞呈現 謝謝/吃飯沒/有空嗎/在幹嘛/ok/早安/再見/開會中/快到了/再說啦/沒空啦/准/集合/約起來/讚/ YA/哭哭/？/哈哈哈/辛苦了/加油/收到/拜託/太感謝了/生日快樂/💗/Hello/No/+1/忙錄中/ 暈倒/晚安/不好意思/早點休息/</span><br><span class='yf11'>步驟2(產生圖片)~Create a 1x4 row (or 2x2 grid) of 4 LINE sticker panels. The main character is a chibi Q-version of the person in the attached photo — big round head, small body, chubby cheeks, expressive eyes, cute proportions, casual clothing. Each panel has a bold Traditional Chinese label in cute rounded bubble font at the bottom. Bright, cheerful, kawaii LINE sticker style, white background, soft rounded corners. The 4 panels are:【不好意思】— character blushing with hand behind head, embarrassed grin, little sweat drop, rosy cheeks【早點休息】— character in cozy sweater pointing at a clock showing bedtime, warm caring expression, moon and stars【打氣中】— character inflating a giant motivational balloon, cheerful flying pose, energy lines【繼續加油】— character running on a treadmill or track with determination, sweat flying, fire emoji auraAll text in Traditional Chinese rounded cute font. Consistent character style matching the previous sticker panels.",
    date: "2026-05-09",
    url: "",
  },
  {
    id: 18,
    title: "LINE貼圖~崇拜大哥篇",
    category: "Line",
    image: "./images/L01-LINE/L002-4.webp",
    prompt:
      "Create a 4x4 grid of 16 LINE sticker panels. There are TWO characters: Character A is a chibi Q-version of the person in attached photo 1 (the worshipper/follower) — big round head, small body, cute proportions. Character B is a chibi Q-version of the person in attached photo 2 (the admired 'Big Bro') — also chibi style but with a slightly more confident, cool, and charismatic aura. Both characters maintain facial likeness to their respective reference photos. The overall theme is 'worshipping Big Bro' — Character A adores, follows, and admires Character B with funny, lively, and heartwarming expressions. Style is bright kawaii LINE sticker, vibrant colors, white background, soft rounded corners per panel. Each panel has a bold Traditional Chinese label in cute rounded bubble font at the bottom. The 16 panels in order are:【大哥威武】— Character B stands heroically with cape and glowing aura, Character A beside pumping fist in awe【跟著大哥走】— Character A happily trotting behind Character B with stars in eyes, arms swinging, both walking forward【大哥最強】— Character A holding up a giant championship trophy presenting it to Character B who looks cool and modest【佩服佩服】— Character A bowing repeatedly with both thumbs up, eyes sparkling with total admiration【大哥說了算】— Character B pointing forward with authority, Character A nodding vigorously with eager smile【大哥請喝茶】— Character A presenting a steaming cup of tea with both hands to Character B, sweet respectful smile【拜大哥】— Character A in full dramatic bow pose prostrating in worship, sparkles around Character B【大哥罩我】— Character B standing protectively with arms spread wide shielding Character A who peeks out safely from behind【跟緊大哥】— Character A grabbing Character B's sleeve tightly while running, determined face, speed lines【大哥英明】— Character A clapping enthusiastically while Character B strikes a wise thoughtful pose with a light bulb above【太崇拜了】— Character A fainting dramatically with heart eyes, seeing Character B surrounded by golden sparkle aura【大哥加油】— Character A waving pom-poms cheering for Character B who is flexing muscles confidently【大哥我愛你】— Character A holding a giant heart sign pointing at Character B, blushing face, shy but bold【大哥請指示】— Character A standing at attention like a soldier saluting Character B who is pointing at a map/plan【有大哥真好】— Both characters laughing together happily, Character A leaning on Character B, warm sunshine background【永遠跟著大哥】— Character A and Character B walking side by side into the sunset, Character A giving a big thumbs up, friendship vibes, warm golden glowAll text labels must be in Traditional Chinese with rounded cute bubble font. Both characters must maintain consistent facial likeness to their respective reference photos throughout all 16 panels. Keep the mood funny, warm, lively, and full of admiration energy. No extra English text. Clean, vibrant, high-quality kawaii LINE sticker aesthetic.",
    date: "2026-05-09",
    url: "",
  },
  {
    id: 19,
    title: "迷你分身~退休負面篇-1",
    category: "Mini",
    image: "./images/M02-Mini/M003-1.webp",
    prompt:
      "16:9寬屏比例，根據附圖人物造型進行創作：一位戴眼鏡、短黑髮、穿深藍色上衣的中年退休男性，保留照片中沉穩、內斂的氣質，轉化成可愛Q版卡通風格。畫面主題是「退休後負面心情分身圖」，人物正中央是一位大主角，旁邊圍繞多個迷你分身，每個分身用誇張又幽默的動作，分別呈現退休後的負面詞句：身形走樣、體重增加、智力下降、記憶退化、地位低落、家事繁重、病痛增加、孤獨自閉、人生無趣、心境空虛、百事無成、失落茫然、消沉低迷、心灰意冷、意興闌珊、孤寂無依。每個迷你分身旁邊加上清楚易讀的中文字標籤，像漫畫海報一樣排列整齊。整體風格要可愛、幽默、療癒，避免悲傷感，背景用溫暖居家客廳或柔和漸層背景，色彩明亮，細節豐富，構圖平衡，適合社群分享。",
    date: "2026-05-12",
    url: "",
  },
  {
    id: 20,
    title: "迷你分身~退休負面篇-2",
    category: "Mini",
    image: "./images/M02-Mini/M003-2.webp",
    prompt:
      "16:9寬屏比例，Q版可愛卡通風格圖片，主角是根據附圖人物造型進行創作：一位戴眼鏡、短黑髮、穿深藍色上衣的中年退休男性，保留照片中沉穩、內斂的氣質，轉化成可愛Q版卡通風格、表情無奈但萌翻天。畫面為溫馨客廳背景，暖黃燈光，分成13個迷你可愛分身泡泡場景，每個分身用誇張動作呈現退休負面詞句，旁邊用手寫體大字標註詞句文字，幽默療癒不悲傷，整體有趣像漫畫海報。 - 身形走樣：分身變大肚腩抱枕頭吃薯片，標「身形走樣」。 - 體重增加：分身秤上彈跳超重，標「體重增加」。 - 智力下降：分身抓頭忘記鑰匙在哪，標「智力下降」。 - 記憶退化：分身看相簿認不出自己，標「記憶退化」。 - 地位低落：分身孤單坐沙發無人問津，標「地位低落」。 - 家事繁重：分身淹沒衣山裡洗衣，標「家事繁重」。 - 病痛增加：分身揉腰咳嗽戴護膝，標「病痛增加」。 - 孤獨自閉：分身抱膝躲沙發角，標「孤獨自閉」。 - 人生無趣：分身盯牆發呆吹泡泡，標「人生無趣」。 - 心境空虛：分身心口空洞風吹過，標「心境空虛」。 - 百事無成：分身看空獎盃架灰塵，標「百事無成」。 - 失落茫然：分身低頭小淚眼汪汪，標「失落茫然」。 - 消沉低迷：分身癱地板無力翻身，標「消沉低迷」。 - 心灰意冷：分身吹灰轉心形煙霧，標「心灰意冷」。 - 意興闌珊：分身半途丟書畫筆，標「意興闌珊」。 - 孤寂無依：分身望窗外雨景孤單，標「孤寂無依」。 構圖橫向排列分身，中央大分身統領，色彩鮮豔可愛，Pixar風格細節豐富，高解析度。",
    date: "2026-05-12",
    url: "",
  },
  {
    id: 21,
    title: "迷你分身~退休負面篇-3",
    category: "Mini",
    image: "./images/M02-Mini/M003-3.webp",
    prompt:
      "16:9寬屏比例，根據附圖人物造型進行創作：一位戴眼鏡、短黑髮、穿深藍色上衣的中年退休男性，保留照片中沉穩、內斂的氣質，轉化成可愛Q版卡通風格。畫面主題是「退休後負面心情分身圖」，人物正中央是一位大主角，旁邊圍繞多個迷你分身，每個分身用誇張又幽默的動作，分別呈現退休後的負面詞句：身形走樣、體重增加、智力下降、記憶退化、地位低落、家事繁重、病痛增加、孤獨自閉、人生無趣、心境空虛、百事無成、失落茫然、消沉低迷、心灰意冷、意興闌珊、孤寂無依。每個迷你分身旁邊加上清楚易讀的中文字標籤，像漫畫海報一樣排列整齊。整體風格要可愛、幽默、療癒，避免悲傷感，背景用溫暖居家客廳或柔和漸層背景，色彩明亮，細節豐富，構圖平衡，適合社群分享。",
    date: "2026-05-12",
    url: "",
  },
  {
    id: 22,
    title: "迷你分身~退休負面篇-4",
    category: "Mini",
    image: "./images/M02-Mini/M003-4.webp",
    prompt:
      "16:9寬屏比例，根據附圖人物造型進行創作：一位戴眼鏡、短黑髮、穿深藍色上衣的中年退休男性，保留照片中沉穩、內斂的氣質，轉化成可愛Q版卡通風格。畫面主題是「退休後悲慘心情」，人物正中央是一位大主角，旁邊圍繞多個迷你分身，每個分身用誇張又幽默的動作，分別呈現退休後的負面詞句：身形走樣、體重增加、智力下降、記憶退化、地位低落、家事繁重、病痛增加、孤獨自閉、人生無趣、心境空虛、百事無成、失落茫然、消沉低迷、心灰意冷、意興闌珊、孤寂無依。每個迷你分身旁邊加上清楚易讀的中文字標籤，像漫畫海報一樣排列整齊。整體風格要可愛、幽默、療癒，避免悲傷感，背景用溫暖居家客廳或柔和漸層背景，色彩明亮，細節豐富，構圖平衡，適合社群分享。",
    date: "2026-05-12",
    url: "",
  },
  {
    id: 23,
    title: "迷你分身~正面積極篇-1",
    category: "Mini",
    image: "./images/M02-Mini/M004-1.webp",
    prompt:
      "16:9寬屏比例，Q版可愛卡通風格圖片，主角根據附圖人物造型進行創作：一位戴眼鏡、短黑髮、穿深藍色上衣的中年退休男性，保留照片中沉穩、內斂、親切的氣質，轉化成可愛Q版卡通風格，表情從容、自信、愉快。畫面為溫馨明亮的客廳或書房背景，暖色燈光，分成16個迷你可愛分身泡泡場景，每個分身用生動動作表現退休後的正面狀態，旁邊用清楚易讀的中文字標註詞句文字，整體幽默療癒、充滿希望、像一本退休快樂生活漫畫海報，色彩鮮豔但柔和，高解析度，構圖整齊平衡。 身形結實：分身精神飽滿地做伸展運動，標「身形結實」。 體態輕盈：分身輕快地散步微笑，標「體態輕盈」。 智慧提升：分身閱讀書本、靈光一閃，標「智慧提升」。 記憶清晰：分身整理筆記、條理分明，標「記憶清晰」。 地位受敬：分身被大家圍繞致意，標「地位受敬」。 家務有序：分身整理家居、井井有條，標「家務有序」。 身體康健：分身神清氣爽、活力十足，標「身體康健」。 獨處自在：分身安靜喝茶、享受閱讀，標「獨處自在」。 生活有趣：分身畫畫、種花、玩樂器，標「生活有趣」。 心境充實：分身胸口發光、神情安定，標「心境充實」。 事事有成：分身完成作品、比出勝利手勢，標「事事有成」。 心情明朗：分身抬頭看光、露出笑容，標「心情明朗」。 積極向上：分身元氣滿滿地向前走，標「積極向上」。 熱情依舊：分身手捧愛好作品、充滿幹勁，標「熱情依舊」。 興致盎然：分身興高采烈參與學習與活動，標「興致盎然」。 逍遙自在：分身望著窗外風景悠然微笑，標「逍遙自在」。 構圖橫向排列分身，中央大分身統領全場，周圍各迷你分身以泡泡或漫畫框形式分布，像是一張退休後幸福生活的主題海報。整體風格可愛、溫暖、明亮、充滿正能量，人物保持附圖中的外型特徵但卡通化處理，細節豐富，適合社群分享與收藏。",
    date: "2026-05-12",
    url: "",
  },
  {
    id: 24,
    title: "迷你分身~正面積極篇-1",
    category: "Mini",
    image: "./images/M02-Mini/M004-2.webp",
    prompt:
      "16:9寬屏比例，Q版可愛卡通風格圖片，主角根據附圖人物造型進行創作：一位戴眼鏡、短黑髮、穿深藍色上衣的中年退休男性，保留照片中沉穩、內斂、親切的氣質，轉化成可愛Q版卡通風格，表情從容、自信、愉快。畫面為溫馨明亮的客廳或書房背景，暖色燈光，分成16個迷你可愛分身泡泡場景，每個分身用生動動作表現退休後的正面狀態，旁邊用清楚易讀的中文字標註詞句文字，整體幽默療癒、充滿希望、像一本退休快樂生活漫畫海報，色彩鮮豔但柔和，高解析度，構圖整齊平衡。身形結實：分身精神飽滿地做伸展運動，標「身形結實」。體態輕盈：分身輕快地散步微笑，標「體態輕盈」。智慧提升：分身閱讀書本、靈光一閃，標「智慧提升」。記憶清晰：分身整理筆記、條理分明，標「記憶清晰」。地位受敬：分身被大家圍繞致意，標「地位受敬」。家務有序：分身整理家居、井井有條，標「家務有序」。身體康健：分身神清氣爽、活力十足，標「身體康健」。獨處自在：分身安靜喝茶、享受閱讀，標「獨處自在」。生活有趣：分身畫畫、種花、玩樂器，標「生活有趣」。心境充實：分身胸口發光、神情安定，標「心境充實」。事事有成：分身完成作品、比出勝利手勢，標「事事有成」。心情明朗：分身抬頭看光、露出笑容，標「心情明朗」。積極向上：分身元氣滿滿地向前走，標「積極向上」。熱情依舊：分身手捧愛好作品、充滿幹勁，標「熱情依舊」。興致盎然：分身興高采烈參與學習與活動，標「興致盎然」。逍遙自在：分身望著窗外風景悠然微笑，標「逍遙自在」。構圖橫向排列分身，中央大分身統領全場，周圍各迷你分身以泡泡或漫畫框形式分布，像是一張退休後幸福生活的主題海報。整體風格可愛、溫暖、明亮、充滿正能量，人物保持附圖中的外型特徵但卡通化處理，細節豐富，適合社群分享與收藏。",
    date: "2026-05-12",
    url: "",
  },
  {
    id: 25,
    title: "個人目標~網站宣傳-1",
    category: "Personal",
    image: "./images/P04-Personal/P001-1.webp",
    prompt:
      "根據以下網站網址，幫我生成一張網頁詳細的介紹海報，以附件人物Q版造型當做主角 https://yfchen-115.netlify.app/",
    date: "2026-05-12",
    url: "",
  },
  {
    id: 26,
    title: "個人目標~網站宣傳-2",
    category: "Personal",
    image: "./images/P04-Personal/P001-2.webp",
    prompt:
      "根據以下網站網址，幫我生成一張網頁詳細的介紹海報，以附件人物Q版造型當做主角 https://yfchen-https://yfchen-115.netlify.app/b01-book/f06-0-2026-note-new",
    date: "2026-05-12",
    url: "",
  },
  {
    id: 27,
    title: "AI工具~字體提示詞-1",
    category: "AI",
    image: "./images/A02-AI/AI51-Font-1.webp",
    prompt: "提示詞使用~當提示詞當中需要字體說明時，可以參考",
    date: "2026-05-12",
    url: "",
  },
  {
    id: 27,
    title: "AI工具~字體提示詞-1",
    category: "AI",
    image: "./images/A02-AI/AI51-Font-2.webp",
    prompt: "提示詞使用~當提示詞當中需要字體說明時，可以參考",
    date: "2026-05-12",
    url: "",
  },
  {
    id: 28,
    title: "LINE貼圖~生氣篇-1",
    category: "Line",
    image: "./images/L01-LINE/L004-angry-1.webp",
    prompt:
      "做一張貼圖，以附件1圖片為架構，用圖件二人物Q版造型做主角，產出4X4貼圖，所有動作以附件一做參考，不需要文字，以動作表情為主，都是以生氣不滿為主，可以誇張一點，貼圖可愛詼諧有趣",
    date: "2026-05-12",
    url: "",
  },
  {
    id: 29,
    title: "LINE貼圖~生氣篇-2",
    category: "Line",
    image: "./images/L01-LINE/L004-angry-2.webp",
    prompt:
      "做一張貼圖，以附件1圖片為架構，用圖件二人物Q版造型做主角，產出4X4貼圖，所有動作以附件一做參考，不需要文字，以動作表情為主，貼圖可愛詼諧有趣",
    date: "2026-05-12",
    url: "",
  },
  {
    id: 30,
    title: "yfchen咖啡店海報",
    category: "Product",
    image: "./images/P01-Product/P01-01-coffee.webp",
    prompt:
      "Claude~優化提示詞~A premium coffee shop marketing advertisement for [悅風 YFChen Café]. The brand logo (as provided in the reference image) is placed prominently in the upper-left corner against a dark background with clean contrast and adequate padding — do not alter or distort the logo.The shop name [悅風 YFChen Café] is rendered as the hero typographic element in expressive Traditional Chinese steel-pen calligraphy (鋼筆字體) — fluid ink brushstroke style with fine nib precision, combining elegant Chinese characters with refined Latin letterforms in the same calligraphic hand.Layout: rich dark espresso-brown background with warm amber and ivory accents. Ten signature coffees are arranged in a high-end editorial grid, each served in premium ceramic cups with professional food photography lighting — soft directional shadows, rising steam wisps, and glossy surface highlights.The ten coffees with bilingual labels:1. 義式濃縮 Espresso2. 美式咖啡 Americano3. 卡布奇諾 Cappuccino4. 拿鐵 Latte5. 馥芮白 Flat White6. 摩卡 Mocha7. 瑪奇朵 Macchiato 8. 冷萃咖啡 Cold Brew9. 冰拿鐵 Iced Latte10. 季節限定 Seasonal SpecialEach coffee name displayed in Traditional Chinese steel-pen calligraphy with small elegant serif Latin subtitle beneath. Price tags optional in subtle gold ink.Overall mood: upscale third-wave café, sophisticated and aspirational, suitable for print and social media. Aspect ratio 4:5. Photorealistic render with rich depth of field.",
    date: "2026-05-14",
    url: "",
  },
  {
    id: 31,
    title: "yfchen咖啡店吧檯",
    category: "Product",
    image: "./images/P01-Product/P01-02-coffee.webp",
    prompt:
      "Claude~優化提示詞~A photorealistic interior photograph of an upscale Japanese-style specialty coffee shop, 16:9 widescreen ratio, no people present.SPACE LAYOUT:A central espresso bar runs across the middle ground — dark walnut wood counter with professional La Marzocco or Slayer espresso machine, tamper station, precise pour-over drip setup, neatly arranged ceramic cups and brewing tools. Behind the bar: open shelving displaying single-origin coffee bags, glassware, and small potted moss arrangements. In front of the bar: 4-6 individual seats with Japanese crafted wooden stools and cushions in muted linen or indigo fabric, each with a small side table.INTERIOR DESIGN:Japanese wabi-sabi minimalism meets refined café warmth. Materials: aged hinoki cypress wood paneling, textured plaster walls in warm greige, raw concrete flooring with dark wood accents, soft pendant lighting (Edison filament bulbs in smoked glass shades). Natural light streaming from frosted shoji-style side windows. Potted bonsai or small matcha-green plants as décor accents. Color palette: deep espresso brown, warm ivory, muted gold, soft charcoal.POSTER / SIGNAGE:On the main back wall or near the entrance: a framed A2-size vertical poster of [悅風 YFChen Café] in Traditional Chinese steel-pen calligraphy, gold ink on dark kraft paper, displayed in a thin black lacquered wooden frame. The poster design should visually reference the aesthetic of the provided menu image — same dark background, gold calligraphic lettering, premium café branding. A secondary smaller framed print nearby reads: 「一杯好咖啡・悅風陪伴每個美好時刻」in delicate brushstroke script.ATMOSPHERE & LIGHTING:Moody, intimate, dramatic — cinematic depth of field with shallow focus on the espresso machine in the midground. Warm tungsten tones mixed with cool ambient fill. Steam wisps rising from the machine. The overall atmosphere evokes a high-end Tokyo third-wave coffee bar in Daikanyama or Nakameguro district.Photorealistic, architectural interior photography style, 16:9 aspect ratio, no humans.",
    date: "2026-05-14",
    url: "",
  },
  {
    id: 32,
    title: "yfchen咖啡店逐主角角拍廣告",
    category: "Product",
    image: "./images/P01-Product/P01-03-coffee.webp",
    prompt:
      "Claude~優化提示詞~一個電影感十足的室內場景參考(附件圖片1)，背景設定在一間優雅的中日融合咖啡館，配有溫暖的琥珀色燈光、深色木製吧台，以及氛圍深邃的氛圍。前景中央，有兩個優雅的人物：女子(附件圖片2)：穿著貼身深藍色絲綢旗袍，繡有細緻的花卉圖案，站姿優雅。她擁有精緻的東亞特徵、高顴骨、優雅的姿態，頭髮以玉簪輕輕盤起。男子(附件圖片3)：穿著剪裁合身的黑色西部西裝，打著領結，修剪整齊的鬍鬚和鬍鬚。他擁有學術且卓越的東亞特質——既有知識分子也有沉著的特質。圍繞著他們的是一群文學知識分子、作家和藝術家，身著1930年代共和時代服裝，邊喝咖啡邊低聲交談。氛圍優雅、精緻且親密。咖啡館背景：日式紙紗窗、發光的愛迪生燈泡、中文菜單板、檯面上的盆栽、義式咖啡機冒出的蒸氣。風格：電影攝影、淺景深、85mm 人像鏡頭、溫暖的明暗對比光影、超寫實、8K 畫質。",
    date: "2026-05-16",
    url: "",
  },
];
