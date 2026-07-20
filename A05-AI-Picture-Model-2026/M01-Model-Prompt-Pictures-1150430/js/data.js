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
    id: 28,
    title: "AI工具~字體提示詞-1",
    category: "AI",
    image: "./images/A02-AI/AI51-Font-2.webp",
    prompt: "提示詞使用~當提示詞當中需要字體說明時，可以參考",
    date: "2026-05-12",
    url: "",
  },
  {
    id: 29,
    title: "LINE貼圖~生氣篇-1",
    category: "Line",
    image: "./images/L01-LINE/L004-angry-1.webp",
    prompt:
      "做一張貼圖，以附件1圖片為架構，用圖件二人物Q版造型做主角，產出4X4貼圖，所有動作以附件一做參考，不需要文字，以動作表情為主，都是以生氣不滿為主，可以誇張一點，貼圖可愛詼諧有趣",
    date: "2026-05-12",
    url: "",
  },
  {
    id: 30,
    title: "LINE貼圖~生氣篇-2",
    category: "Line",
    image: "./images/L01-LINE/L004-angry-2.webp",
    prompt:
      "做一張貼圖，以附件1圖片為架構，用圖件二人物Q版造型做主角，產出4X4貼圖，所有動作以附件一做參考，不需要文字，以動作表情為主，貼圖可愛詼諧有趣",
    date: "2026-05-12",
    url: "",
  },
  {
    id: 31,
    title: "yfchen咖啡店海報",
    category: "Product",
    image: "./images/P01-Product/P01-01-coffee.webp",
    prompt:
      "Claude~優化提示詞~A premium coffee shop marketing advertisement for [悅風 YFChen Café]. The brand logo (as provided in the reference image) is placed prominently in the upper-left corner against a dark background with clean contrast and adequate padding — do not alter or distort the logo.The shop name [悅風 YFChen Café] is rendered as the hero typographic element in expressive Traditional Chinese steel-pen calligraphy (鋼筆字體) — fluid ink brushstroke style with fine nib precision, combining elegant Chinese characters with refined Latin letterforms in the same calligraphic hand.Layout: rich dark espresso-brown background with warm amber and ivory accents. Ten signature coffees are arranged in a high-end editorial grid, each served in premium ceramic cups with professional food photography lighting — soft directional shadows, rising steam wisps, and glossy surface highlights.The ten coffees with bilingual labels:1. 義式濃縮 Espresso2. 美式咖啡 Americano3. 卡布奇諾 Cappuccino4. 拿鐵 Latte5. 馥芮白 Flat White6. 摩卡 Mocha7. 瑪奇朵 Macchiato 8. 冷萃咖啡 Cold Brew9. 冰拿鐵 Iced Latte10. 季節限定 Seasonal SpecialEach coffee name displayed in Traditional Chinese steel-pen calligraphy with small elegant serif Latin subtitle beneath. Price tags optional in subtle gold ink.Overall mood: upscale third-wave café, sophisticated and aspirational, suitable for print and social media. Aspect ratio 4:5. Photorealistic render with rich depth of field.",
    date: "2026-05-14",
    url: "",
  },
  {
    id: 32,
    title: "yfchen咖啡店吧檯",
    category: "Product",
    image: "./images/P01-Product/P01-02-coffee.webp",
    prompt:
      "Claude~優化提示詞~A photorealistic interior photograph of an upscale Japanese-style specialty coffee shop, 16:9 widescreen ratio, no people present.SPACE LAYOUT:A central espresso bar runs across the middle ground — dark walnut wood counter with professional La Marzocco or Slayer espresso machine, tamper station, precise pour-over drip setup, neatly arranged ceramic cups and brewing tools. Behind the bar: open shelving displaying single-origin coffee bags, glassware, and small potted moss arrangements. In front of the bar: 4-6 individual seats with Japanese crafted wooden stools and cushions in muted linen or indigo fabric, each with a small side table.INTERIOR DESIGN:Japanese wabi-sabi minimalism meets refined café warmth. Materials: aged hinoki cypress wood paneling, textured plaster walls in warm greige, raw concrete flooring with dark wood accents, soft pendant lighting (Edison filament bulbs in smoked glass shades). Natural light streaming from frosted shoji-style side windows. Potted bonsai or small matcha-green plants as décor accents. Color palette: deep espresso brown, warm ivory, muted gold, soft charcoal.POSTER / SIGNAGE:On the main back wall or near the entrance: a framed A2-size vertical poster of [悅風 YFChen Café] in Traditional Chinese steel-pen calligraphy, gold ink on dark kraft paper, displayed in a thin black lacquered wooden frame. The poster design should visually reference the aesthetic of the provided menu image — same dark background, gold calligraphic lettering, premium café branding. A secondary smaller framed print nearby reads: 「一杯好咖啡・悅風陪伴每個美好時刻」in delicate brushstroke script.ATMOSPHERE & LIGHTING:Moody, intimate, dramatic — cinematic depth of field with shallow focus on the espresso machine in the midground. Warm tungsten tones mixed with cool ambient fill. Steam wisps rising from the machine. The overall atmosphere evokes a high-end Tokyo third-wave coffee bar in Daikanyama or Nakameguro district.Photorealistic, architectural interior photography style, 16:9 aspect ratio, no humans.",
    date: "2026-05-14",
    url: "",
  },
  {
    id: 33,
    title: "yfchen咖啡店逐主角角拍廣告",
    category: "Product",
    image: "./images/P01-Product/P01-03-coffee.webp",
    prompt:
      "Claude~優化提示詞~一個電影感十足的室內場景參考(附件圖片1)，背景設定在一間優雅的中日融合咖啡館，配有溫暖的琥珀色燈光、深色木製吧台，以及氛圍深邃的氛圍。前景中央，有兩個優雅的人物：女子(附件圖片2)：穿著貼身深藍色絲綢旗袍，繡有細緻的花卉圖案，站姿優雅。她擁有精緻的東亞特徵、高顴骨、優雅的姿態，頭髮以玉簪輕輕盤起。男子(附件圖片3)：穿著剪裁合身的黑色西部西裝，打著領結，修剪整齊的鬍鬚和鬍鬚。他擁有學術且卓越的東亞特質——既有知識分子也有沉著的特質。圍繞著他們的是一群文學知識分子、作家和藝術家，身著1930年代共和時代服裝，邊喝咖啡邊低聲交談。氛圍優雅、精緻且親密。咖啡館背景：日式紙紗窗、發光的愛迪生燈泡、中文菜單板、檯面上的盆栽、義式咖啡機冒出的蒸氣。風格：電影攝影、淺景深、85mm 人像鏡頭、溫暖的明暗對比光影、超寫實、8K 畫質。",
    date: "2026-05-16",
    url: "",
  },
  {
    id: 34,
    title: "中美大和解咖啡-休閒服",
    category: "Product",
    image: "./images/P01-Product/P01-04-coffee.webp",
    prompt:
      "提示詞很簡單~~以咖啡廳為背景三人合照，戴墨鏡男生站中間，圖片3(有川普也有習近平)當中左側二位站戴墨鏡男生兩邊",
    date: "2026-05-18",
    url: "",
  },
  {
    id: 35,
    title: "中美大和解咖啡-黑色西裝",
    category: "Product",
    image: "./images/P01-Product/P01-05-coffee.webp",
    prompt:
      "提示詞很簡單~~幫中間墨鏡男生換上黑色帥氣西裝，藍色領帶，依然戴墨鏡",
    date: "2026-05-18",
    url: "",
  },
  {
    id: 36,
    title: "中美大和解咖啡-深藍色西裝",
    category: "Product",
    image: "./images/P01-Product/P01-06-coffee.webp",
    prompt:
      "提示詞很簡單~~中間黑色墨鏡男生換上深藍色西裝，藍色領帶，依然戴墨鏡",
    date: "2026-05-18",
    url: "",
  },
  {
    id: 37,
    title: "大和解咖啡-皮夾克(Jensen Huang)",
    category: "Product",
    image: "./images/P01-Product/P01-07-coffee.webp",
    prompt:
      "提示詞很簡單~~幫中間黑色墨鏡男生換上黑色皮夾克(如圖片2)整體造型，依然帶上墨鏡",
    date: "2026-05-18",
    url: "",
  },
  {
    id: 38,
    title: "家訓~1~Nano Banana",
    category: "Personal",
    image: "./images/P04-Personal/Home-01.webp",
    prompt:
      "標題：千錯萬錯皆他過，我身清白似清風畫面設定為16:9橫式構圖，整體風格為東方幽默家訓資訊圖表設計，背景為淡雅水墨山水庭院風格，帶有輕微宣紙紋理質感，主色調為米白、墨黑與淡青色。畫面中央呈現一位Q版人物，造型參考附件人物風格，頭身比例可愛圓潤，戴黑色墨鏡，表情自信微笑，雙手抱胸站立，營造「自認無錯」的幽默感。人物服裝為簡約中式服飾（長衫風格），線條柔和。畫面左右設計為傳統對聯形式：右側直排文字：千錯萬錯皆他過左側直排文字：我身清白似清風橫批置於畫面上方中央：清風無錯文字全部使用繁體中文，字體為鋼筆手寫風，筆觸流暢自然，略帶幽默感但仍保有書法氣質。資訊圖表元素以「幽默解讀家訓」呈現，在人物周圍加入簡單圖示輔助說明：例如小圖標（對話框、箭頭）指向外界，象徵「都是別人的錯」；另一側用清風線條表現「自我清白」，形成視覺對比。整體構圖平衡，標題在上、人物居中、對聯左右對稱，風格融合傳統文化與現代趣味插畫感，畫面乾淨不擁擠，不出現英文（AI除外但本圖不使用），呈現輕鬆幽默又帶諷刺意味的家訓資訊圖表。",
    date: "2026-05-21",
    url: "",
  },
  {
    id: 39,
    title: "家訓~2~GPT Image2.0",
    category: "Personal",
    image: "./images/P04-Personal/Home-02.webp",
    prompt:
      "標題：千錯萬錯皆他過，我身清白似清風畫面設定為16:9橫式構圖，整體風格為東方幽默家訓資訊圖表設計，背景為淡雅水墨山水庭院風格，帶有輕微宣紙紋理質感，主色調為米白、墨黑與淡青色。畫面中央呈現一位Q版人物，造型參考附件人物風格，頭身比例可愛圓潤，戴黑色墨鏡，表情自信微笑，雙手抱胸站立，營造「自認無錯」的幽默感。人物服裝為簡約中式服飾（長衫風格），線條柔和。畫面左右設計為傳統對聯形式：右側直排文字：千錯萬錯皆他過左側直排文字：我身清白似清風橫批置於畫面上方中央：清風無錯文字全部使用繁體中文，字體為鋼筆手寫風，筆觸流暢自然，略帶幽默感但仍保有書法氣質。資訊圖表元素以「幽默解讀家訓」呈現，在人物周圍加入簡單圖示輔助說明：例如小圖標（對話框、箭頭）指向外界，象徵「都是別人的錯」；另一側用清風線條表現「自我清白」，形成視覺對比。整體構圖平衡，標題在上、人物居中、對聯左右對稱，風格融合傳統文化與現代趣味插畫感，畫面乾淨不擁擠，不出現英文（AI除外但本圖不使用），呈現輕鬆幽默又帶諷刺意味的家訓資訊圖表。",
    date: "2026-05-21",
    url: "",
  },
  {
    id: 40,
    title: "淡江大橋~工程藍圖",
    category: "Scene",
    image: "./images/S01-Scene/S002-1.webp",
    prompt:
      "製作一張 16:9 寬幅資訊圖表，主題為「新北市淡江大橋」。以真實橋梁空拍照片為底圖，疊加藍圖美學的白色線條技術圖，呈現工程藍圖風格。 圖面包含：①主橋全長 920 公尺、主跨 450 公尺標示線；②世界最長單塔不對稱斜張橋說明標籤；③橋塔側視結構圖與截面圖；④負載流向箭頭；⑤建材數量與工法說明框；⑥設計單位「札哈·哈蒂建築師事務所」來源標記；⑦左上角設標題框「淡江大橋 工程藍圖解析」。 所有文字以繁體中文清晰呈現，字體銳利無模糊，數字與單位保留英數格式。風格：白色粉筆線稿疊加於真實影像，技術製圖 × 教育資訊圖表，藍色底調，高對比度，專業工程美學。",
    date: "2026-05-25",
    url: "",
  },
  {
    id: 41,
    title: "課題分離",
    category: "Principle",
    image: "./images/P04-principle/Pr001-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~就是先解釋課題分離後貼上空間",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 42,
    title: "1.扶爛泥、2.滾死豬、3.翻鹹魚、4.雕朽木",
    category: "Principle",
    image: "./images/P04-principle/Pr001-2.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~有4件事情別想要改變別人\
      1.扶爛泥、2.滾死豬、3.翻鹹魚、4.雕朽木",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 43,
    title: "1.扶爛泥、2.滾死豬、3.翻鹹魚、4.雕朽木",
    category: "Principle",
    image: "./images/P04-principle/Pr001-3.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~有4件事情別想要改變別人\
      1.扶爛泥、2.滾死豬、3.翻鹹魚、4.雕朽木",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 44,
    title: "1.扶爛泥、2.滾死豬、3.翻鹹魚、4.雕朽木",
    category: "Principle",
    image: "./images/P04-principle/Pr001-4.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~有4件事情別想要改變別人\
      1.扶爛泥、2.滾死豬、3.翻鹹魚、4.雕朽木",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 45,
    title: "1.扶爛泥、2.滾死豬、3.翻鹹魚、4.雕朽木",
    category: "Principle",
    image: "./images/P04-principle/Pr001-5.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~有4件事情別想要改變別人\
      1.扶爛泥、2.滾死豬、3.翻鹹魚、4.雕朽木",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 46,
    title: "鐵達尼號",
    category: "Art",
    image: "./images/A03-Art/Art001-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~將附件人物類似鐵達尼號一樣站在船頭",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 47,
    title: "鐵達尼號~雙人",
    category: "Art",
    image: "./images/A03-Art/Art001-2.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~將附件中二個人物類似鐵達尼號一樣站在船頭",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 48,
    title: "赴大陸廈門旅遊資訊",
    category: "Map",
    image: "./images/M01-Map/M001-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~赴大陸旅遊資訊直接貼",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 49,
    title: "好市多金卡事件1~虛構",
    category: "Fun",
    image: "./images/F01-Fun/F001-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~前往好市多，被趕出來，因為手持普卡不是黑卡不能在10:前進去，非常生氣，去辦卡櫃檯大吵大鬧，準備抵制好市多",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 50,
    title: "好市多金卡事件1~虛構",
    category: "Fun",
    image: "./images/F01-Fun/F001-2.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~前往好市多，被趕出來，因為手持普卡不是黑卡不能在10:前進去，非常生氣，去辦卡櫃檯大吵大鬧，準備抵制好市多",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 51,
    title: "防詐須知1~老婆收到不明電子郵件",
    category: "Knowledge",
    image: "./images/K01-Knowledge/K001-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~老婆收到不明電子郵件後AI產生的防詐需知內如",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 52,
    title: "防詐須知2~老婆收到不明電子郵件",
    category: "Knowledge",
    image: "./images/K01-Knowledge/K001-2.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~老婆收到不明電子郵件後AI產生的防詐需知內如",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 53,
    title: "好市多金卡事件3~虛構",
    category: "Fun",
    image: "./images/F01-Fun/F002-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~在好市多大賣場準備購物，因為手持普卡無法進入，因為黑卡才能在10:前進去，非常生氣，默默在站在門口等到十點才可進去購物，心情非常沮喪",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 54,
    title: "好市多金卡事件4~虛構",
    category: "Fun",
    image: "./images/F01-Fun/F002-2.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~在好市多大賣場準備購物，因為手持普卡無法進入，因為黑卡才能在10:前進去，非常生氣，默默在站在門口等到十點才可進去購物，心情非常沮喪",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 55,
    title: "好市多金卡事件4~虛構",
    category: "Fun",
    image: "./images/F01-Fun/F002-3.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~在好市多大賣場準備購物，因為手持普卡無法進入，因為黑卡才能在10:前進去，非常生氣，默默在站在門口等到十點才可進去購物，心情非常沮喪",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 56,
    title: "好市多金卡事件6~虛構",
    category: "Fun",
    image: "./images/F01-Fun/F002-4.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~在好市多大賣場準備購物，因為手持普卡無法進入，因為黑卡才能在10:前進去，非常生氣，默默在站在門口等到十點才可進去購物，心情非常沮喪",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 57,
    title: "川普與川哥-1~虛構",
    category: "Fun",
    image: "./images/F01-Fun/F003-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~川普與川哥在白宮圓形辦公室討論伊朗停戰事宜",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 58,
    title: "川普與川哥-1~虛構",
    category: "Fun",
    image: "./images/F01-Fun/F003-2.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~川普與川哥在白宮圓形辦公室討論伊朗停戰事宜",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 59,
    title: "說謊~1",
    category: "Principle",
    image: "./images/P04-principle/Pr002-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~「我們知道他們在說謊，他們也知道自己是說謊，\
      他們也知道我們知道他們在說謊，我們也知道他們知道我們知道他們說謊，但是他們依然在說謊。」--蘇聯作家、諾貝爾獎得主索忍尼辛",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 60,
    title: "說謊~2",
    category: "Principle",
    image: "./images/P04-principle/Pr002-2.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~「我們知道他們在說謊，他們也知道自己是說謊，\
      他們也知道我們知道他們在說謊，我們也知道他們知道我們知道他們說謊，但是他們依然在說謊。」--蘇聯作家、諾貝爾獎得主索忍尼辛",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 61,
    title: "說謊~3",
    category: "Principle",
    image: "./images/P04-principle/Pr002-3.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~「我們知道他們在說謊，他們也知道自己是說謊，\
      他們也知道我們知道他們在說謊，我們也知道他們知道我們知道他們說謊，但是他們依然在說謊。」--蘇聯作家、諾貝爾獎得主索忍尼辛",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 62,
    title: "說謊~4",
    category: "Principle",
    image: "./images/P04-principle/Pr002-4.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~「我們知道他們在說謊，他們也知道自己是說謊，\
      他們也知道我們知道他們在說謊，我們也知道他們知道我們知道他們說謊，但是他們依然在說謊。」--蘇聯作家、諾貝爾獎得主索忍尼辛",
    date: "2026-06-03",
    url: "",
  },
  {
    id: 63,
    title: "大阪城~軟粉彩科學",
    category: "Map",
    image: "./images/M01-Map/M002-3.webp",
    prompt:
      "2.軟粉彩科學根據「大阪城」生成高品質的垂直科普百科圖像。使用柔和的粉彩科學板風格,有清晰美麗的主視覺、幾個細節特寫,以及圓形模組化的資訊部分,以乾淨的網格排列。包括強烈的標題階級、強調標籤、簡潔的百科全書事實,以及友善視覺評分的前五大摘要模組。使用明亮的光線背景、粉彩調色盤、細微的陰影、細緻的小圖示、圓潤的資訊盒、整潔的平衡布局。讓它看起來像一張高級收藏教育卡,資訊密集但寬敞、優雅、高度可分享。垂直9:16 構圖,柔和,現代,平易近人,視覺",
    date: "2026-06-05",
    url: "",
  },
  {
    id: 64,
    title: "關西大阪旅遊資訊",
    category: "Map",
    image: "./images/M01-Map/M002-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~附件圖片人物Q版墨鏡造型，坐在家裡客廳如附件，手上拿著滿滿的萬元日幣，四周圍繞著一圈日本關西著名景點如下~[AI產生資訊]",
    date: "2026-06-05",
    url: "",
  },
  {
    id: 65,
    title: "關西大阪旅遊資訊",
    category: "Map",
    image: "./images/M01-Map/M002-2.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~附件圖片人物Q版墨鏡造型，手中拿滿滿的萬元日幣，準備在基隆港搭船，，四周圍繞著一圈此趟遊輪滿滿的行程如下~~[AI榮耀號設施：兩大海上巡航日的玩樂指南相關資訊]",
    date: "2026-06-05",
    url: "",
  },
  {
    id: 66,
    title: "詣超赴日旅遊前拜拜-1",
    category: "Map",
    image: "./images/M01-Map/M003-01.webp",
    prompt:
      "<span class='yf3'>利用Claude，將以下內容拆成四張提示詞</span>~詣超出發日本前夕，先去找媽祖祈求平安明天詣超就要出發去日本了。預計 6 月 10 日前往關西地區，行程以大阪、京都為主，我想應該順道也打算去奈良走走。\
      既然是出遠門，當然要先到關渡宮拜拜，請媽祖保佑一路平安。簡單但誠心的儀式關渡宮的拜拜其實不複雜，流程乾淨俐落。投了香油錢，拿了兩包乖乖、一疊紙錢，再點了四炷香，四個香爐祭拜完畢就這樣完成了整個祭拜儀式。\
      簡單，但心意到了。最有趣的事，發生在回程拜完出來，走在回程路上，我悄悄「偷買」了四瓶沙士。立刻用LINE發照片通知老婆，「這個沙士，是媽祖允許的。」\
      後來逛到好市多，看到可樂就放在眼前，再發LINE尋習照片：「好市多可樂，應該也是媽祖允許的吧。」這話說完，我自己也覺得很有趣。媽祖的「核准範圍」，今天悄悄擴大了不少。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 67,
    title: "詣超赴日旅遊前拜拜-2",
    category: "Map",
    image: "./images/M01-Map/M003-02.webp",
    prompt: "同#66~第二段",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 68,
    title: "詣超赴日旅遊前拜拜-3",
    category: "Map",
    image: "./images/M01-Map/M003-03.webp",
    prompt: "同#66~第二段",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 69,
    title: "詣超赴日旅遊前拜拜-4",
    category: "Map",
    image: "./images/M01-Map/M003-04.webp",
    prompt: "同#66~第二段",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 70,
    title: "關西大阪旅遊資訊-5",
    category: "Map",
    image: "./images/M01-Map/M003-05.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~附件圖片人物Q版墨鏡造型，赴日前夕，先拜媽祖求平安明天（6月10日）詣超就要出發去日本了！這次行程以關西地區為主，重點放在大阪與京都，順道也打算去奈良走走。既然是出遠門，當然要先到關渡宮拜拜，請媽祖保佑一路平安。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 71,
    title: "關西大阪旅遊資訊-6",
    category: "Map",
    image: "./images/M01-Map/M003-06.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~附件圖片人物Q版墨鏡造型，簡單卻誠心的祭拜流程\
關渡宮的拜拜其實不複雜，整個流程乾淨俐落：投了香油錢，拿了兩包乖乖和一疊紙錢，再點四炷香，依序祭拜四個香爐，就完成了整套儀式。雖然簡單，但心意十足。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 72,
    title: "關西大阪旅遊資訊-7",
    category: "Map",
    image: "./images/M01-Map/M003-07.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~附件圖片人物Q版墨鏡造型，回程路上的小插曲\
拜完出來，走在回程路上，我悄悄「偷買」了四瓶沙士。立刻用 LINE 發照片通知老婆：「這個沙士，是媽祖允許的。」",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 73,
    title: "關西大阪旅遊資訊-8",
    category: "Map",
    image: "./images/M01-Map/M003-08.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~附件圖片人物Q版墨鏡造型，媽祖的「核准範圍」悄悄擴大\
後來逛到好市多，看到可樂就在眼前，又馬上拍下照片傳給老婆問：「好市多可樂，應該也是媽祖允許的吧？」話一說出口，連我自己都覺得好笑——看來今天媽祖的「核准範圍」，不知不覺擴大了不少。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 74,
    title: "A1.墨菲定律",
    category: "Law",
    image: "./images/L03-Law/A01-01.webp",
    prompt:
      "請生成一張16:9橫幅手繪插畫風知識圖卡，主題是「墨菲定律」。以附件人物的Q版墨鏡造型作為主角，整體風格可愛、清楚、幽默、易懂。畫面上方置中放繁體中文標題「墨菲定律」，字體使用鋼筆字體，畫面中所有文字都只能是繁體中文，不要出現任何英文。畫面內容用簡單圖像說明「越擔心出錯，越容易出錯」：主角正在準備重要事情，卻同時發生文件掉落、咖啡打翻、電池沒電、門卡住等小意外，讓觀眾一眼就能理解定律。背景採簡潔生活桌面或辦公場景，線條像手繪筆觸，色彩溫和，構圖乾淨，重點清楚。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 75,
    title: "A2.二八法則",
    category: "Law",
    image: "./images/L03-Law/A01-02.webp",
    prompt:
      "請生成一張16:9橫幅手繪插畫風知識圖卡，主題是「二八法則」。以附件人物的Q版墨鏡造型作為主角，整體風格可愛、清楚、資訊圖表感強。畫面上方置中放繁體中文標題「二八法則」，字體使用鋼筆字體，所有文字只能使用繁體中文，不要出現英文。畫面用清楚簡單的圖像呈現「少數關鍵帶來大多數成果」：例如主角正在整理一堆任務，其中少數幾個關鍵任務發光、被放大展示，旁邊有很多次要任務以較淡的方式呈現，讓人立刻看懂重點集中在少部分。背景簡潔，像手繪教材插圖，畫面留白適當，層次清楚。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 76,
    title: "A3.蝴蝶效應",
    category: "Law",
    image: "./images/L03-Law/A01-03.webp",
    prompt:
      "請生成一張16:9橫幅手繪插畫風知識圖卡，主題是「蝴蝶效應」。以附件人物的Q版墨鏡造型作為主角，風格要溫暖、清楚、帶有連鎖反應的視覺感。畫面上方置中放繁體中文標題「蝴蝶效應」，字體使用鋼筆字體，畫面中所有文字都只能用繁體中文，不要出現英文。畫面用連續圖像表現「一個小變化引發巨大結果」：例如一隻蝴蝶輕拍翅膀，導致紙張飄動、路牌變化、交通轉向、最後影響到遠方的大事件，形成由小到大的連鎖畫面。主角可站在一側驚訝地觀察，讓畫面既有故事性又容易理解。背景乾淨，線條手繪感明顯，構圖像知識漫畫。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 77,
    title: "A4.木桶定律",
    category: "Law",
    image: "./images/L03-Law/A01-04.webp",
    prompt:
      "請生成一張16:9橫幅手繪插畫風知識圖卡，主題是「木桶定律」。以附件人物的Q版墨鏡造型作為主角，畫風可愛、簡單、教育感明確。畫面上方置中放繁體中文標題「木桶定律」，字體使用鋼筆字體，畫面中所有文字都要是繁體中文，不要出現英文。畫面用木桶的視覺概念清楚呈現「最短的木板決定容量」：主角指著一個木桶，桶身由多塊木板組成，其中一塊明顯比較短，導致水位無法升高。可加上主角正在補強短木板的動作，讓觀眾理解短板的重要性。背景簡潔，畫面乾淨，重點集中，像課堂講義插畫。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 78,
    title: "A5.帕金森定律",
    category: "Law",
    image: "./images/L03-Law/A01-05.webp",
    prompt:
      "請生成一張16:9橫幅手繪插畫風知識圖卡，主題是「帕金森定律」。以附件人物的Q版墨鏡造型作為主角，整體風格要有輕鬆但具警示意味。畫面上方置中放繁體中文標題「帕金森定律」，字體使用鋼筆字體，所有文字只能使用繁體中文，不要出現英文。畫面用簡單圖像表達「工作會膨脹到填滿可用時間」：例如主角原本只要做一件小事，卻被越堆越多的文件、時鐘、便條紙包圍，最後時間被拉長、事情越拖越多。畫面可以加入倒數時鐘與逐漸變多的工作紙張，讓定律一眼可懂。背景以簡單桌面或辦公環境呈現，保持手繪插畫感。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 79,
    title: "A6.鱷魚法則",
    category: "Law",
    image: "./images/L03-Law/A01-06.webp",
    prompt:
      "請生成一張16:9橫幅手繪插畫風知識圖卡，主題是「鱷魚法則」。以附件人物的Q版墨鏡造型作為主角，畫風清楚、帶有風險警示感但不恐怖。畫面上方置中放繁體中文標題「鱷魚法則」，字體使用鋼筆字體，畫面中所有文字都只能用繁體中文，不要出現英文。畫面用直觀圖像說明「越虧損越要立刻處理」：例如主角站在河岸邊，前方有一隻象徵虧損的鱷魚慢慢逼近，旁邊有止損提醒的圖示，主角正在果斷收回資源、停止錯誤決策。畫面要讓人感受到拖延會更危險，因此必須立即行動。背景簡潔，重點清楚，像教學海報。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 80,
    title: "A7.羊群效應",
    category: "Law",
    image: "./images/L03-Law/A01-07.webp",
    prompt:
      "請生成一張16:9橫幅手繪插畫風知識圖卡，主題是「羊群效應」。以附件人物的Q版墨鏡造型作為主角，風格可愛、清楚、具群體動態感。畫面上方置中放繁體中文標題「羊群效應」，字體使用鋼筆字體，畫面中所有文字都必須是繁體中文，不要出現英文。畫面用圖像呈現「人們容易跟著大多數做決定」：例如主角站在十字路口，看見一群小羊往同一方向跑，大家也跟著往前，只有少數人停下思考。畫面要讓觀眾看出盲從、跟風、群體影響的概念。背景簡潔，角色動作明顯，畫面像手繪教科書插圖。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 81,
    title: "A8.刺蝟法則",
    category: "Law",
    image: "./images/L03-Law/A01-08.webp",
    prompt:
      "請生成一張16:9橫幅手繪插畫風知識圖卡，主題是「刺蝟法則」。以附件人物的Q版墨鏡造型作為主角，整體風格溫暖、簡單、具人際距離感的表現。畫面上方置中放繁體中文標題「刺蝟法則」，字體使用鋼筆字體，畫面中所有文字都只能使用繁體中文，不要出現英文。畫面用圖像清楚說明「人際關係需要適當距離，太近會刺傷彼此」：例如兩隻可愛刺蝟想靠近取暖，但太近時會被彼此的刺碰到，主角在旁邊示範剛剛好的距離最舒服。背景可用簡單寒冷夜晚或溫暖角落，營造親近但不過度的感覺。畫面要讓人一眼理解關係距離的重要性。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 82,
    title: "A9.破窗理論",
    category: "Law",
    image: "./images/L03-Law/A01-09.webp",
    prompt:
      "請生成一張16:9橫幅手繪插畫風知識圖卡，主題是「破窗理論」。以附件人物的Q版墨鏡造型作為主角，風格要清楚、具警示性、容易理解。畫面上方置中放繁體中文標題「破窗理論」，字體使用鋼筆字體，畫面中所有文字都只能用繁體中文，不要出現英文。畫面用直觀方式呈現「小破壞若不修補，會引發更多破壞」：例如一扇窗戶先出現裂痕，接著牆面塗鴉、垃圾增加、秩序變亂，主角站在旁邊提醒要及時修補。畫面要有前後對比，左側是整潔，右側是逐漸失序，讓觀眾立刻看懂。背景簡單，像社區街景或校園一角。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 83,
    title: "A10.馬太效應",
    category: "Law",
    image: "./images/L03-Law/A01-10.webp",
    prompt:
      "請生成一張16:9橫幅手繪插畫風知識圖卡，主題是「馬太效應」。以附件人物的Q版墨鏡造型作為主角，整體風格清楚、帶有累積與差距擴大的視覺效果。畫面上方置中放繁體中文標題「馬太效應」，字體使用鋼筆字體，所有文字都只能用繁體中文，不要出現英文。畫面用圖像表現「強者越強、弱者越弱」：例如主角站在兩條路上，一條路上的資源、成就、掌聲越來越多，另一條路上的資源越來越少，形成明顯差距。可以用堆疊的獎盃、書本、星星或成長箭頭來表示累積效果。背景簡潔，構圖左右對比鮮明，方便理解。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 84,
    title: "A11.吸引力定律",
    category: "Law",
    image: "./images/L03-Law/A01-11.webp",
    prompt:
      "請生成一張16:9橫幅手繪插畫風知識圖卡，主題是「吸引力定律」。以附件人物的Q版墨鏡造型作為主角，風格要明亮、積極、溫暖，充滿正向能量。畫面上方置中放繁體中文標題「吸引力定律」，字體使用鋼筆字體，畫面中所有文字都只能是繁體中文，不要出現英文。畫面用簡單圖像說明「專注在什麼，就更容易吸引什麼」：例如主角手中有一顆發光的心願球，周圍聚集書本、機會、笑臉、星星等象徵正向結果的元素，呈現目標、專注、行動與吸引的關係。背景可用柔和光芒、上升箭頭與簡潔空間，讓整體感覺充滿希望。畫面要像勵志手繪海報。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 85,
    title: "A12.彼得原理",
    category: "Law",
    image: "./images/L03-Law/A01-12.webp",
    prompt:
      "請生成一張16:9橫幅手繪插畫風知識圖卡，主題是「彼得原理」。以附件人物的Q版墨鏡造型作為主角，整體風格清楚、帶有職場教育意味。畫面上方置中放繁體中文標題「彼得原理」，字體使用鋼筆字體，畫面中所有文字都只能使用繁體中文，不要出現英文。畫面用直觀圖像說明「人會被升到不適合的位置」：例如主角原本在基礎位置表現很好，隨著職位層層上升，來到更高處後變得手忙腳亂、冒汗、拿著不熟悉的工具。畫面可以用階梯、職位階梯、不同層級辦公桌來表達，讓人理解能力與職位不一定同步。背景簡潔，重點在人物與階梯變化。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 86,
    title: "A13.羅森塔爾效應",
    category: "Law",
    image: "./images/L03-Law/A01-13.webp",
    prompt:
      "請生成一張16:9橫幅手繪插畫風知識圖卡，主題是「羅森塔爾效應」。以附件人物的Q版墨鏡造型作為主角，風格要溫暖、鼓勵性強、具有教育情境。畫面上方置中放繁體中文標題「羅森塔爾效應」，字體使用鋼筆字體，畫面中所有文字都只能用繁體中文，不要出現英文。畫面用圖像清楚說明「期待會影響表現」：例如老師或引導者用鼓勵的眼神看著主角，主角逐漸從不自信變得越來越有精神、越來越努力，旁邊以光芒、上升箭頭、進步曲線呈現。畫面要傳達正向期待能提升表現，適合做教育類知識圖卡。背景乾淨溫馨，像教室場景。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 87,
    title: "A4.奥卡姆剃刀定律",
    category: "Law",
    image: "./images/L03-Law/A01-14.webp",
    prompt:
      "請生成一張16:9橫幅手繪插畫風知識圖卡，主題是「奥卡姆剃刀定律」。以附件人物的Q版墨鏡造型作為主角，整體風格簡潔、理性、清楚、具思考感。畫面上方置中放繁體中文標題「奥卡姆剃刀定律」，字體使用鋼筆字體，畫面中所有文字都只能使用繁體中文，不要出現英文。畫面用直觀圖像說明「在多個解釋中，選擇最簡單有效的那一個」：例如主角面對一團複雜糾結的線條與多種過度設計的方案，最後用一把簡潔的剃刀符號把多餘部分修整掉，只留下最核心、最有效的方案。畫面要有前後對比，左邊複雜混亂，右邊簡潔明確，讓觀眾快速理解定律。背景保持乾淨，風格像哲學與思考類手繪教材。",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 88,
    title: "All.14個著名定律",
    category: "Law",
    image: "./images/L03-Law/A01-all.webp",
    prompt:
      "1.墨菲定律、2.二八法則、3.蝴蝶效應、4.木桶定律、5.帕金森定律、6.鱷魚法則、7.羊群效應、8.刺蝟法則、9.破窗理論、10.馬太效應、11吸引力定律、12.彼得原理、13.羅森塔爾效應、14.奥卡姆剃刀定律",
    date: "2026-06-09",
    url: "",
  },
  {
    id: 89,
    title: "詣超關西六日行規劃篇-1",
    category: "Map",
    image: "./images/M01-Map/M004-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~幫我產生一個GPT Image2.0提示詞，\
以附件圖片人物為主角，使用手繪插畫風格呈現，周圍務必要有一個台灣桃園機場，加上以日本關西各重要景點圍繞，並且解釋每一景點，人物在中間呈現，格式16:9，所有文字以繁體中文呈現，字體務必以鋼筆字體為主，標題為[日本關西六日遊]",
    date: "2026-06-12",
    url: "",
  },
  {
    id: 90,
    title: "詣超關西六日行規劃篇-2",
    category: "Map",
    image: "./images/M01-Map/M004-2.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~幫我產生一個GPT Image2.0提示詞，\
以附件圖片人物為主角，使用手繪插畫風格呈現，周圍務必要有一個台灣桃園機場，加上以日本關西各重要景點圍繞，並且解釋每一景點，人物在中間呈現，格式16:9，所有文字以繁體中文呈現，字體務必以鋼筆字體為主，標題為[日本關西六日遊]",
    date: "2026-06-12",
    url: "",
  },
  {
    id: 91,
    title: "仿貼圖-貓爪抓-散步抓-1",
    category: "Line",
    image: "./images/L01-Line/GPT007-1.webp",
    prompt:
      "<span class='yf3'>-仿貓爪抓-散步抓</span>~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-12",
    url: "",
  },
  {
    id: 92,
    title: "仿貼圖-貓爪抓-散步抓-2",
    category: "Line",
    image: "./images/L01-Line/GPT007-2.webp",
    prompt:
      "<span class='yf3'>-仿貓爪抓-散步抓</span>~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-12",
    url: "",
  },
  {
    id: 93,
    title: "仿貼圖-貓爪抓-散步抓-3",
    category: "Line",
    image: "./images/L01-Line/GPT007-3.webp",
    prompt:
      "<span class='yf3'>-仿貓爪抓-散步抓</span>~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-12",
    url: "",
  },
  {
    id: 94,
    title: "仿貼圖-胸毛公寓的猴子朋友2",
    category: "Line",
    image: "./images/L01-Line/GPT007-4.webp",
    prompt:
      "<span class='yf3'>-仿胸毛公寓的猴子朋友2</span>~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-12",
    url: "",
  },
  {
    id: 95,
    title: "仿貼圖-貓爪抓-大字好好抓-1",
    category: "Line",
    image: "./images/L01-Line/GPT007-5.webp",
    prompt:
      "<span class='yf3'>-仿貓爪抓-大字好好抓</span>~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-12",
    url: "",
  },
  {
    id: 96,
    title: "仿貼圖-貓爪抓-大字好好抓-2",
    category: "Line",
    image: "./images/L01-Line/GPT007-6.webp",
    prompt:
      "<span class='yf3'>-仿貓爪抓-大字好好抓</span>~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-12",
    url: "",
  },
  {
    id: 97,
    title: "3D微型城市~神戶北野異人館-1",
    category: "3D",
    image: "./images/A01-3D/3D001-1.webp",
    prompt:
      "<span class='yf3'>透過Claude優化提示詞，下列提示詞在Claude會轉英文版</span>~~幫我修飾下列提示詞，為3D low poly 微型城市，主題為神戶北野異人館，相關周遭著名景點幫我補上，產生一段完整可以立刻使用的GPT Image2.0提示詞Please use GPT Image 2.0 model to generate images 3D low poly 微型城市，主題為「神戶北野異人館」，45度俯視等距視角，isometric game map style，像桌面上的精緻城市沙盤模型。 中央是 {北野異人館}，周圍有 {各類洋式建築}、街道、樹木、路燈、迷你車輛、小行人、商店、攤位與城市生活細節。 整體為低多邊形 3D 建模風格，造型可愛簡化但辨識度高，乾淨俐落，像遊戲場景與玩具模型。 配色以 {紅色與白色} 為主，搭配 {綠色}，營造 {舒適可愛}。 柔和日光或夕陽光，乾淨陰影，空間層次清楚，高解析度，精緻細節。 避免真實攝影風、過度寫實、雜亂背景、模糊、文字錯誤、水印、建築嚴重變形",
    date: "2026-06-12",
    url: "",
  },
  {
    id: 98,
    title: "3D微型城市~神戶北野異人館-2",
    category: "3D",
    image: "./images/A01-3D/3D001-2.webp",
    prompt:
      "<span class='yf3'>透過Claude優化提示詞，下列提示詞在Claude會轉英文版</span>~~幫我修飾下列提示詞，為3D low poly 微型城市，主題為神戶北野異人館，相關周遭著名景點幫我補上，產生一段完整可以立刻使用的GPT Image2.0提示詞Please use GPT Image 2.0 model to generate images 3D low poly 微型城市，主題為「神戶北野異人館」，45度俯視等距視角，isometric game map style，像桌面上的精緻城市沙盤模型。 中央是 {北野異人館}，周圍有 {各類洋式建築}、街道、樹木、路燈、迷你車輛、小行人、商店、攤位與城市生活細節。 整體為低多邊形 3D 建模風格，造型可愛簡化但辨識度高，乾淨俐落，像遊戲場景與玩具模型。 配色以 {紅色與白色} 為主，搭配 {綠色}，營造 {舒適可愛}。 柔和日光或夕陽光，乾淨陰影，空間層次清楚，高解析度，精緻細節。 避免真實攝影風、過度寫實、雜亂背景、模糊、文字錯誤、水印、建築嚴重變形",
    date: "2026-06-12",
    url: "",
  },
  {
    id: 99,
    title: "3D微型城市~神戶北野異人館動畫-1",
    category: "Video",
    image: "./images/A01-3D/3D001-1.webp",
    prompt: '<a href="./images/V01-video/3D001-1V.mp4">影片製作連結</a>',
    date: "2026-06-12",
    url: "",
  },
  {
    id: 100,
    title: "3D微型城市~神戶北野異人館動畫-2",
    category: "Video",
    image: "./images/A01-3D/3D001-2.webp",
    prompt: '<a href="./images/V01-video/3D001-2V.mp4">影片製作連結</a>',
    date: "2026-06-12",
    url: "",
  },
  {
    id: 101,
    title: "老婆貼圖-1",
    category: "Line",
    image: "./images/L01-Line/GPT008-1.webp",
    prompt:
      "<span class='yf3'>仿貓爪抓-上班族來抓</span>~提示詞很簡單~將女生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-13",
    url: "",
  },
  {
    id: 102,
    title: "老婆貼圖-2",
    category: "Line",
    image: "./images/L01-Line/GPT008-2.webp",
    prompt:
      "<span class='yf3'>仿貓爪抓-大字好好抓</span>~提示詞很簡單~將女生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-13",
    url: "",
  },
  {
    id: 103,
    title: "老婆貼圖-3",
    category: "Line",
    image: "./images/L01-Line/GPT008-3.webp",
    prompt:
      "<span class='yf3'>仿貓爪抓-大字好好抓</span>~提示詞很簡單~將女生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-13",
    url: "",
  },
  {
    id: 104,
    title: "老婆貼圖-1",
    category: "Line",
    image: "./images/L01-Line/GPT008-4.webp",
    prompt:
      "<span class='yf3'>仿貓爪抓-上班族來抓</span>~提示詞很簡單~將女生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-13",
    url: "",
  },
  {
    id: 105,
    title: "老婆貼圖-5",
    category: "Line",
    image: "./images/L01-Line/GPT008-5.webp",
    prompt:
      "<span class='yf3'>仿貓爪抓-上班族來抓</span>~提示詞很簡單~將女生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-13",
    url: "",
  },
  {
    id: 106,
    title: "KUGA坐船要去日本",
    category: "Map",
    image: "./images/M01-Map/M005-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~附件圖片人物Q版墨鏡造型開車KUGA(附件1)從基隆碼頭上船(榮耀號)，從日本九州佐世堡下車，然後開車到京都伏見大荷看千鳥居",
    date: "2026-06-13",
    url: "",
  },
  {
    id: 107,
    title: "個人貼圖-9-1",
    category: "Line",
    image: "./images/L01-Line/GPT009-1.webp",
    prompt:
      "<span class='yf3'>仿貓爪抓-特效爪抓</span>~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-13",
    url: "",
  },
  {
    id: 108,
    title: "個人貼圖-9-2",
    category: "Line",
    image: "./images/L01-Line/GPT009-2.webp",
    prompt:
      "<span class='yf3'>仿貓爪抓-特效爪抓</span>~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-13",
    url: "",
  },
  {
    id: 109,
    title: "個人貼圖-9-3",
    category: "Line",
    image: "./images/L01-Line/GPT009-3.webp",
    prompt:
      "<span class='yf3'>仿貓爪抓 -禮貌大字抓</span>~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-13",
    url: "",
  },
  {
    id: 110,
    title: "個人貼圖-9-4",
    category: "Line",
    image: "./images/L01-Line/GPT009-4.webp",
    prompt:
      "<span class='yf3'>仿貓爪抓 -禮貌大字抓</span>~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-13",
    url: "",
  },
  {
    id: 111,
    title: "個人貼圖-9-5",
    category: "Line",
    image: "./images/L01-Line/GPT009-5.webp",
    prompt:
      "<span class='yf3'>仿貓爪抓-爪抓人生</span>~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-13",
    url: "",
  },
  {
    id: 112,
    title: "個人貼圖-9-6",
    category: "Line",
    image: "./images/L01-Line/GPT009-6.webp",
    prompt:
      "<span class='yf3'>仿貓爪抓-爪抓人生</span>~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-13",
    url: "",
  },
  {
    id: 113,
    title: "小小兵貼圖-9-7",
    category: "Line",
    image: "./images/L01-Line/GPT009-7.webp",
    prompt:
      "<span class='yf3'>仿貓爪抓-禮貌大字抓</span>~提示詞很簡單~將Minions，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-13",
    url: "",
  },
  {
    id: 114,
    title: "小小兵貼圖-9-8",
    category: "Line",
    image: "./images/L01-Line/GPT009-8.webp",
    prompt:
      "<span class='yf3'>仿貓爪抓-禮貌大字抓</span>~提示詞很簡單~將Minions，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-13",
    url: "",
  },
  {
    id: 115,
    title: "正芬姐出國幫忙澆花~1",
    category: "Life",
    image: "./images/L02-Life/L002-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~正芬姐出發前特地交代，她搭榮耀號去日韓玩的那幾天（6/13–6/18），家裡的陽台盆栽就拜託我了。說真的，我接下任務時可是拍胸脯保證「沒問題，包在我身上」。 她出門後，我總共去了兩趟。每次進門，第一件事就是直奔陽台，拿起澆花壺，仔仔細細地替那幾盆綠植補水——葉面噴霧、根部澆透，一套標準動作行雲流水，認真到我覺得自己簡直是專業園藝師。不過老實說，從開水龍頭到收工，真的不到一分鐘，因為花盆就那幾盆，再怎麼拖也拖不出花樣來。 但重點來了——澆完花，我照例打開她家的冰箱，冷凍庫裡躺著那盒好市多巧克力雪糕，簡直像在對我招手。第一趟我吃了一支，第二趟又忍不住再來一支。雪糕外層的脆皮巧克力咬下去「喀嚓」作響，裡頭的香草冰淇淋濃郁滑順，邊吃邊站在陽台吹風，看著剛澆過水的葉子在陽光下閃閃發亮，覺得這任務實在太值得了。 於是，澆花耗時不到六十秒，但坐在客廳慢慢享用那支雪糕，少說也花了五分鐘以上。說真的，我對正芬姐的花很盡責，但對她家的雪糕……更是問心無愧啊。等她回來，我一定會老實跟她說：花顧得很好，雪糕也顧得很好（進了肚子）。徵鮮明、情緒自然表情、全身構圖、動態姿態、服裝細節精緻、手繪塗鴉風、潑墨筆觸、隨性線條、粉彩與墨色混合、漫畫草稿質感、自然簡約背景、周圍符號化元素點綴、氛圍感強、高細節、高品質。臉的細節要細緻一點 .原圖人像不變",
    date: "2026-06-17",
    url: "",
  },
  {
    id: 116,
    title: "正芬姐出國幫忙澆花~2",
    category: "Life",
    image: "./images/L02-Life/L002-2.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~正芬姐出發前特地交代，她搭榮耀號去日韓玩的那幾天（6/13–6/18），家裡的陽台盆栽就拜託我了。說真的，我接下任務時可是拍胸脯保證「沒問題，包在我身上」。 她出門後，我總共去了兩趟。每次進門，第一件事就是直奔陽台，拿起澆花壺，仔仔細細地替那幾盆綠植補水——葉面噴霧、根部澆透，一套標準動作行雲流水，認真到我覺得自己簡直是專業園藝師。不過老實說，從開水龍頭到收工，真的不到一分鐘，因為花盆就那幾盆，再怎麼拖也拖不出花樣來。 但重點來了——澆完花，我照例打開她家的冰箱，冷凍庫裡躺著那盒好市多巧克力雪糕，簡直像在對我招手。第一趟我吃了一支，第二趟又忍不住再來一支。雪糕外層的脆皮巧克力咬下去「喀嚓」作響，裡頭的香草冰淇淋濃郁滑順，邊吃邊站在陽台吹風，看著剛澆過水的葉子在陽光下閃閃發亮，覺得這任務實在太值得了。 於是，澆花耗時不到六十秒，但坐在客廳慢慢享用那支雪糕，少說也花了五分鐘以上。說真的，我對正芬姐的花很盡責，但對她家的雪糕……更是問心無愧啊。等她回來，我一定會老實跟她說：花顧得很好，雪糕也顧得很好（進了肚子）。徵鮮明、情緒自然表情、全身構圖、動態姿態、服裝細節精緻、手繪塗鴉風、潑墨筆觸、隨性線條、粉彩與墨色混合、漫畫草稿質感、自然簡約背景、周圍符號化元素點綴、氛圍感強、高細節、高品質。臉的細節要細緻一點 .原圖人像不變",
    date: "2026-05-17",
    url: "",
  },
  {
    id: 117,
    title: "小胖週五到家裡聊天前的LINE通話",
    category: "Life",
    image: "./images/L02-Life/L003-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~週五一早，陳文銅(附件1圖片Q版造型)滑著手機，突然發現那天竟然是國定假日，心裡不禁一驚。原本和峰哥(附件2圖片Q版造型)約好要去家裡坐坐，現在放假日全家都在，會不會打擾到人家休息？他趕緊在群組裡發訊息詢問：「我剛看到星期五放假，這樣會不會打擾到峰哥家人休息？還是改到下星期上班日再去比較好？」沒多久，峰哥回了句：「沒關係啦。」接著又補上一句：「小白(附件3圖片Q版造型)在家。」陳文銅愣了一下，忍不住問：「你兒子嗎？」峰哥回答，小白雖然上班，但可以叫他煮東西給文銅吃。說完之後，他話鋒一轉，帶著幾分得意地問：「那你看看我在家裡的地位怎麼樣？」陳文銅沒有正面接話，反倒問了一句：「董呆(附件ˋ圖片Q版造型)可以嗎？」峰哥立刻回得斬釘截鐵：「無可撼動。」還不忘再補一句：「那你看看什麼叫做一家之主？」語氣裡滿是自信與驕傲。不過，峰哥隨即又提到「川哥(附件4圖片Q版造型)就比較不好說了」，似乎暗示家裡還有另一位更不好招惹的人物。陳文銅半信半疑，回說：「最好是啦，星期五我當面問她。」峰哥哈哈一笑，接著說：「那你瞧瞧什麼叫家風——陳氏家風。」甚至還特地傳來一張寫著「陳氏家風」的圖片，彷彿是在宣示自家獨特的氣勢。就在大家你一言我一語之際，群組裡突然跳出董呆本人的回應，只有兩個字：「狗屎。」峰哥見狀連忙緩頰，說：「真的，怎麼這樣說？」陳文銅則趁勢追問：「董呆星期五可以嗎？」這回峰哥的語氣明顯收斂了些，回說：「川董的家庭地位就不好說，不要太勉強他。」言下之意，似乎真正說了算的，恐怕不是峰哥自己，而是那位「川董」。一場原本只是討論拜訪日期的小插曲，就這樣在峰哥的自我加碼、董呆的神來一筆吐槽中，變得格外有趣。陳文銅最後只回了一句「拭目以待」，心裡也開始期待，到了星期五，究竟能不能親眼見識這所謂的「陳氏家風」到底有多厲害。",
    date: "2026-05-17",
    url: "",
  },
  {
    id: 118,
    title: "韓劇【鐵拳教育】跟風~1",
    category: "Fun",
    image: "./images/F01-Fun/F004-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~附件圖片人物Q版墨鏡造型目前韓國戲劇【鐵拳教育】火紅，我想用該劇海報或宣傳照做一張自己學校的鐵拳教育，我的學校是光啟高中，主角就是我，配角學生會有三個附件這片，幫我產生這樣一段圖片的畫面提示詞",
    date: "2026-06-18",
    url: "",
  },
  {
    id: 119,
    title: "韓劇【鐵拳教育】~海報風格版",
    category: "Fun",
    image: "./images/F01-Fun/F004-2.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~附件圖片人物Q版墨鏡造型目前韓國戲劇【鐵拳教育】火紅，我想用該劇海報或宣傳照做一張自己學校的鐵拳教育，我的學校是光啟高中，主角就是我，配角學生會有三個附件這片，幫我產生這樣一段圖片的畫面提示詞",
    date: "2026-06-18",
    url: "",
  },
  {
    id: 120,
    title: "韓劇【鐵拳教育】~寫實版",
    category: "Fun",
    image: "./images/F01-Fun/F004-3.webp",
    prompt:
      "<span class='yf3'>利用Claude產出~內容</span>~/prompt-master，我想優化提示詞，主要內容如下，目前韓國戲劇【鐵拳教育】火紅，我想用該劇海報或宣傳照做一張自己學校的鐵拳教育，我的學校是光啟高中，主角就是我，配角學生會有三個附件這片，幫我產生這樣一段圖片的畫面提示詞",
    date: "2026-06-18",
    url: "",
  },
  {
    id: 121,
    title: "端午節海報-1",
    category: "Festival",
    image: "./images/F02-Festival/F001-1.webp",
    prompt:
      "<span class='yf3'>直接使用</span>~~~Please use GPT Image 2.0 model to generate image/資訊圖表，16:9格式，鋼筆字體繁體中文，標題置於上方，畫面無英文專業縮寫外。/創意端午佳節拼貼海報風格，傳統與現代結合，棕葉設計融合手作元素。/中央主人物：Q版墨鏡造型人物，被巨大手作端午香包壓垮，表情誇張搞笑，雙手推著香包，身體被壓彎，展現哭笑不得樣子。/巨大香包：手作端午香包，棕葉設計，傳統紋樣，色彩鮮豔（紅、綠、金），尺寸比人物還大，壓在人物身上。/一旁美味粽子：多個熱氣騰騰粽子擺放旁邊，蛋黃肉粽、豆沙粽等，色澤誘人，與香包形成對比。/左側配角特寫：一個人物蹲在地上，表情驚訝，雙手張開，眼睛瞪大看香包。/右側配角特寫：一個人物坐在地上，表情無奈，雙手抱頭，嘴巴張大嘆氣。/上方配角特寫：一個人物站在香包頂端，表情開心，雙手舉高歡呼，腳踩香包。/下方配角特寫：一個人物爬在粽子堆裡，表情滿足，嘴角沾糯米，雙手抱粽子。/背景：棕葉紋樣、傳統祥雲、艾草元素，營造端午節慶氛圍。/文字位置：畫面頂部預留標題位置「端午佳節」，所有文字以鋼筆字體繁體中文呈現。/風格：拼貼海報風格，多層次構圖，人物姿勢表情各異，色彩鮮明熱鬧，細節豐富創意十足。/",
    date: "2026-06-18",
    url: "",
  },
  {
    id: 122,
    title: "端午節海報-1",
    category: "Festival",
    image: "./images/F02-Festival/F001-2.webp",
    prompt:
      "<span class='yf3'>直接使用</span>~~~資訊圖表，16:9格式，鋼筆字體繁體中文，標題置於上方，畫面無英文。/海報核心概念：主題「粽橫四海，你最出粽」，新中式插畫混搭美式卡通風格。/中央主角：Q版墨鏡造型人物身穿改良式漢服，服飾加入粽葉綠與艾草元素，英姿颯爽站在龍舟船頭，手指前方指揮全局，周圍環繞光暈、粽葉飄帶與祥雲，凸顯主角氣場。/左側配角：一隻亮黃色Minion雙手吃力抱著比他還大的粽子，表情猙獰搞笑，額頭冒汗。/右側配角：一隻亮黃色Minion戴著龍舟造型帽子，手拿迷你船槳，興奮豎大拇指比讚。/下方配角：一隻亮黃色Minion偷偷伸手想偷吃桌上粽子，被抓包後露出尷尬表情。/背景氛圍：遠景青山河流、龍舟競渡剪影；中景飄動粽葉、艾草、香包；點綴祥雲、旭日、飄落糯米粒。/色彩：國風山水色調搭配亮黃色Minions製造反差萌，整體歡樂溫馨。",
    date: "2026-06-18",
    url: "",
  },
  {
    id: 123,
    title: "老婆公司加班Q版-1",
    category: "Q-ver",
    image: "./images/Q01-Q-ver/Q001-1.webp",
    prompt:
      "<span class='yf3'>直接使用</span>~~~建立高級 3D 微型 diorama 風格圖像。/主題為「忙碌的銀行授信中心上班族」。/顯示為一個收藏品公仔擺放在寫實的辦公桌上。/使用白色/奶油底色搭配寶藍色調（寶藍色用於銀行標誌、文件夾、座椅靠墊等點綴）。/在中央，放置一個疲憊但可愛的上班族女性公仔(造型參考附件圖片)——她身穿合身的寶藍色西裝外套與白色襯衫，戴著細框眼鏡，坐在迷你辦公椅上，右手托腮，左手輕按滑鼠，眼神略顯倦意但仍帶著微笑，桌上電腦螢幕顯示信用評分圖表和貸款申請進度。/以精緻的方式安排符合主題的小物件：堆疊的授信案件卷宗、打開的計算機、冒著熱氣的馬克杯（杯身有銀行Logo）、紅色印章、幾支原子筆、一部復古電話、以及幾份攤開的「貸款審核表」。/背景為上海商業銀行的辦公室內景，牆上隱約可見銀行標誌和「授信中心」字樣（以模糊方式呈現）。/放置一個有手寫感的中文標題：「授信日常」或「辛苦的審查員」，字體為毛筆手寫風格，置於畫面左上角。/自然地加上手寫註記和箭頭，例如：在電腦螢幕旁標註「又加班😅」、在咖啡杯旁畫箭頭寫「續命」、在文件堆上加「待審」字樣。/16:9 的比例，自然光從側面柔和照射，營造溫暖辦公氛圍，構圖乾淨清晰，細節豐富，微距景深效果。",
    date: "2026-06-18",
    url: "",
  },
  {
    id: 124,
    title: "老婆公司加班Q版-2",
    category: "Q-ver",
    image: "./images/Q01-Q-ver/Q001-2.webp",
    prompt:
      "<span class='yf3'>直接使用</span>~~~右上角上海商銀logo字樣，改為附件圖片樣式，另外最左邊電話改為按鍵式電話，桌上咖啡杯改為星巴克外帶杯，其餘都不要改變",
    date: "2026-06-18",
    url: "",
  },
  {
    id: 125,
    title: "個人手繪風~星巴克喝咖啡看書-1",
    category: "Life",
    image: "./images/L02-Life/L004-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~1 附件人物Q版墨鏡造型 認真在星巴克咖啡廳閱讀，看電腦，周遭氣氛營鑿適合閱讀的感受，",
    date: "2026-06-18",
    url: "",
  },
  {
    id: 126,
    title: "個人手繪風~星巴克喝咖啡看書-2",
    category: "Life",
    image: "./images/L02-Life/L004-2.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~1 附件人物Q版墨鏡造型 認真在星巴克咖啡廳閱讀，看電腦，周遭氣氛營鑿適合閱讀的感受，",
    date: "2026-06-18",
    url: "",
  },
  {
    id: 127,
    title: "個人Q版~星巴克喝咖啡看書-2",
    category: "Life",
    image: "./images/L02-Life/L004-3.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~1 附件人物Q版墨鏡造型 認真在星巴克咖啡廳閱讀，看電腦，周遭氣氛營鑿適合閱讀的感受，",
    date: "2026-06-18",
    url: "",
  },
  {
    id: 128,
    title: "個人Q版~今天下打雷下雨~害怕",
    category: "Life",
    image: "./images/L02-Life/L004-4.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~1/附件人物Q版墨鏡造型/目前外面正在閃電打雷，平常壞事做多的我，難免心中有點擔心害怕，目前11樓客廳坐在書桌旁邊的位置，非常擔心閃電和打雷對我造成影響，心中忐忑不安",
    date: "2026-06-18",
    url: "",
  },
  {
    id: 129,
    title: "端午節祝賀海報-1",
    category: "Festival",
    image: "./images/F02-Festival/F002-1.webp",
    prompt:
      "<span class='yf3'>直接使用</span>~~~Please use GPT Image 2.0 model to generate image 請製作一張 16:9 端午節賀卡，整體風格溫暖、喜氣、節慶感明確，適合送給親友祝福。畫面主視覺包含粽子、龍舟、香包、艾草、五彩繩與端午節氛圍元素，構圖清楚、層次分明，帶有傳統節日儀式感。畫面中加入一位 Q版墨鏡造型人物 作為配角，角色風格可愛、親切、帶有祝福感，參考附件照片特徵但以 Q 版呈現，位置可放在右下角或左下角。卡片上的所有文字請使用 繁體中文，字體以鋼筆字體為主，第一行標題放在上方，標題請寫「端午安康」，其餘可加入簡短祝福語，例如「粽香傳情，平安喜樂」。整體畫面要像高質感節慶賀卡，色彩以綠色、金色、紅色為主，畫面乾淨、不要英文、不要複雜背景，保留足夠留白讓文字清晰可讀。",
    date: "2026-06-19",
    url: "",
  },
  {
    id: 130,
    title: "詣超日本關西旅遊-1",
    category: "Line",
    image: "./images/L01-Line/GPT0010-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~幫我優化LINE貼圖提示詞以附件人物Q版造型為主角，做一個大阪旅遊第一天4X4的16張貼圖需包括以下地點，桃園機場出發，星宇航空搭機，關西機場抵達，心齋橋住宿，力丸燒肉、心齋橋、道頓掘、金龍拉麵，大阪藥妝店，合力他命，道頓掘[跑跑人]、大阪神座拉麵等，其餘自行補足16個",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 131,
    title: "詣超日本關西旅遊-2",
    category: "Line",
    image: "./images/L01-Line/GPT0010-2.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~幫我優化LINE貼圖提示詞以附件人物Q版造型為主角，做一個大阪旅遊第一天4X4的16張貼圖需包括以下地點，桃園機場出發，星宇航空搭機，關西機場抵達，心齋橋住宿，力丸燒肉、心齋橋、道頓掘、金龍拉麵，大阪藥妝店，合力他命，道頓掘[跑跑人]、大阪神座拉麵等，其餘自行補足16個",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 132,
    title: "詣超日本關西旅遊-3",
    category: "Line",
    image: "./images/L01-Line/GPT0010-3.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~幫我優化LINE貼圖提示詞以附件人物Q版造型為主角，做一個大阪旅遊第一天4X4的16張貼圖需包括以下地點，桃園機場出發，星宇航空搭機，關西機場抵達，心齋橋住宿，力丸燒肉、心齋橋、道頓掘、金龍拉麵，大阪藥妝店，合力他命，道頓掘[跑跑人]、大阪神座拉麵等，其餘自行補足16個",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 133,
    title: "詣超日本關西旅遊-4",
    category: "Line",
    image: "./images/L01-Line/GPT0010-4.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~幫我優化LINE貼圖提示詞以附件人物Q版造型為主角，做一個大阪旅遊第一天4X4的16張貼圖需包括以下地點，桃園機場出發，星宇航空搭機，關西機場抵達，心齋橋住宿，力丸燒肉、心齋橋、道頓掘、金龍拉麵，大阪藥妝店，合力他命，道頓掘[跑跑人]、大阪神座拉麵等，其餘自行補足16個",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 134,
    title: "詣超日本關西旅遊-5",
    category: "Line",
    image: "./images/L01-Line/GPT0010-5.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~幫我優化LINE貼圖提示詞以附件人物Q版造型為主角，做一個大阪旅遊第一天4X4的16張貼圖需包括以下地點，桃園機場出發，星宇航空搭機，關西機場抵達，心齋橋住宿，力丸燒肉、心齋橋、道頓掘、金龍拉麵，大阪藥妝店，合力他命，道頓掘[跑跑人]、大阪神座拉麵等，其餘自行補足16個",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 135,
    title: "個人Q版貼圖",
    category: "Line",
    image: "./images/L01-Line/GPT0011-1.webp",
    prompt:
      "<span class='yf3'>仿LINE貼圖</span>~~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 136,
    title: "個人Q版貼圖",
    category: "Line",
    image: "./images/L01-Line/GPT0011-2.webp",
    prompt:
      "<span class='yf3'>仿LINE貼圖</span>~~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 137,
    title: "個人Q版貼圖",
    category: "Line",
    image: "./images/L01-Line/GPT0011-3.webp",
    prompt:
      "<span class='yf3'>仿LINE貼圖</span>~~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 138,
    title: "老婆Q版貼圖",
    category: "Line",
    image: "./images/L01-Line/GPT0011-4.webp",
    prompt:
      "<span class='yf3'>仿LINE貼圖</span>~~提示詞很簡單~將附件女生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 139,
    title: "老婆Q版貼圖",
    category: "Line",
    image: "./images/L01-Line/GPT0011-5.webp",
    prompt:
      "<span class='yf3'>仿LINE貼圖</span>~~提示詞很簡單~將附件女生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 140,
    title: "老婆Q版貼圖",
    category: "Line",
    image: "./images/L01-Line/GPT0011-6.webp",
    prompt:
      "<span class='yf3'>仿LINE貼圖</span>~~提示詞很簡單~將附件女生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 141,
    title: "詣超關西旅遊-Q版",
    category: "Line",
    image: "./images/L01-Line/GPT0012-01-Q版.webp",
    prompt: "<span class='yf3'>同前關西旅遊~Q版風格",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 142,
    title: "詣超關西旅遊-手繪插畫風",
    category: "Line",
    image: "./images/L01-Line/GPT0012-02-手繪插畫風.webp",
    prompt: "<span class='yf3'>同前關西旅遊~手繪插畫風",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 143,
    title: "詣超關西旅遊-韓系 ins風",
    category: "Line",
    image: "./images/L01-Line/GPT0012-03-韓系 ins風.webp",
    prompt: "<span class='yf3'>同前關西旅遊~韓系 ins風",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 144,
    title: "詣超關西旅遊-浮世繪旅圖風",
    category: "Line",
    image: "./images/L01-Line/GPT0012-04-浮世繪旅圖風.webp",
    prompt: "<span class='yf3'>同前關西旅遊~浮世繪旅圖風",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 145,
    title: "詣超關西旅遊-簡約現代 flat風",
    category: "Line",
    image: "./images/L01-Line/GPT0012-05-簡約現代 flat風.webp",
    prompt: "<span class='yf3'>同前關西旅遊~簡約現代 flat風",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 146,
    title: "詣超關西旅遊-歐美復古航海地圖風",
    category: "Line",
    image: "./images/L01-Line/GPT0012-06-歐美復古航海地圖風.webp",
    prompt: "<span class='yf3'>同前關西旅遊~歐美復古航海地圖風",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 147,
    title: "詣超關西旅遊-京都古都地圖風",
    category: "Line",
    image: "./images/L01-Line/GPT0012-07- 京都古都地圖風.webp",
    prompt: "<span class='yf3'>同前關西旅遊~京都古都地圖風",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 148,
    title: "詣超關西旅遊-動漫風",
    category: "Line",
    image: "./images/L01-Line/GPT0012-08- 動漫風.webp",
    prompt: "<span class='yf3'>同前關西旅遊~動漫風",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 149,
    title: "詣超關西旅遊-3D 卡通風",
    category: "Line",
    image: "./images/L01-Line/GPT0012-09-3D 卡通風.webp",
    prompt: "<span class='yf3'>同前關西旅遊~3D 卡通風",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 150,
    title: "詣超關西旅遊-吉卜力水彩風",
    category: "Line",
    image: "./images/L01-Line/GPT0012-10-吉卜力水彩風.webp",
    prompt: "<span class='yf3'>同前關西旅遊~吉卜力水彩風",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 151,
    title: "詣超關西旅遊-吉卜力手繪風",
    category: "Line",
    image: "./images/L01-Line/GPT0012-11-吉卜力手繪風.webp",
    prompt: "<span class='yf3'>同前關西旅遊~吉卜力手繪風",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 152,
    title: "詣超關西旅遊-吉卜力動畫風",
    category: "Line",
    image: "./images/L01-Line/GPT0012-12-吉卜力動畫風.webp",
    prompt: "<span class='yf3'>同前關西旅遊~吉卜力動畫風",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 153,
    title: "個人Q版貼圖~端午節",
    category: "Line",
    image: "./images/L01-Line/GPT0013-1.webp",
    prompt:
      "<span class='yf3'>仿LINE貼圖</span>~~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 154,
    title: "個人Q版貼圖~端午節+Totoro",
    category: "Line",
    image: "./images/L01-Line/GPT0013-2.webp",
    prompt:
      "<span class='yf3'>仿LINE貼圖</span>~~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 155,
    title: "個人Q版貼圖~夏天",
    category: "Line",
    image: "./images/L01-Line/GPT0013-3.webp",
    prompt:
      "<span class='yf3'>仿LINE貼圖</span>~~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 156,
    title: "個人Q版貼圖~夏天",
    category: "Line",
    image: "./images/L01-Line/GPT0013-4.webp",
    prompt:
      "<span class='yf3'>仿LINE貼圖</span>~~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-06-20",
    url: "",
  },
  {
    id: 157,
    title: "個人Q版~2026世足賽~A-D組~claude",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A01-1.webp",
    prompt:
      "<span class='yf2'>利用claude的/prompt-master，優化提示詞，自己寫的提示詞如下</span>~~產生一組貼圖提示詞，用附件人物Q版墨鏡造型和2026世界盃足球賽下面四組的國家國旗和國家名稱當做貼圖，加上一句問候語，製作4X4 16組貼圖，日常問候語每個國家都不同，問候或關心話語都可以,再產生下一張4X4的16個貼圖提示詞，國家名稱用繁體中文呈現",
    date: "2026-06-22",
    url: "",
  },

  {
    id: 158,
    title: "個人Q版~2026世足賽~E-H組~claude",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A01-2.webp",
    prompt:
      "<span class='yf2'>利用claude的/prompt-master，優化提示詞，自己寫的提示詞如下</span>~~產生一組貼圖提示詞，用附件人物Q版墨鏡造型和2026世界盃足球賽下面四組的國家國旗和國家名稱當做貼圖，加上一句問候語，製作4X4 16組貼圖，日常問候語每個國家都不同，問候或關心話語都可以,再產生下一張4X4的16個貼圖提示詞，國家名稱用繁體中文呈現",
    date: "2026-06-22",
    url: "",
  },
  {
    id: 159,
    title: "個人Q版~2026世足賽~I-L組~claude",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A01-3.webp",
    prompt:
      "<span class='yf2'>利用claude的/prompt-master，優化提示詞，自己寫的提示詞如下</span>~~產生一組貼圖提示詞，用附件人物Q版墨鏡造型和2026世界盃足球賽下面四組的國家國旗和國家名稱當做貼圖，加上一句問候語，製作4X4 16組貼圖，日常問候語每個國家都不同，問候或關心話語都可以,再產生下一張4X4的16個貼圖提示詞，國家名稱用繁體中文呈現",
    date: "2026-06-22",
    url: "",
  },

  {
    id: 160,
    title: "個人Q版~2026世足賽~A-D組",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A02-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~~產生三張貼圖提示詞(一張有四組16個國家)，每組用附件人物Q版墨鏡造型和2026世界盃足球賽下面每四個小組的國家國旗和國家名稱當做貼圖，國籍不要當背景，，日常問候語每個國家都不同，問候或關心話語都可以,再產生下一張4X4的16個貼圖提示詞，國家名稱用繁體中文鋼筆字體呈現~貼上A-D組國家",
    date: "2026-06-22",
    url: "",
  },
  {
    id: 161,
    title: "個人Q版~2026世足賽~E-H組",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A02-3.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~~產生三張貼圖提示詞(一張有四組16個國家)，每組用附件人物Q版墨鏡造型和2026世界盃足球賽下面每四個小組的國家國旗和國家名稱當做貼圖，國籍不要當背景，，日常問候語每個國家都不同，問候或關心話語都可以,再產生下一張4X4的16個貼圖提示詞，國家名稱用繁體中文鋼筆字體呈現~貼上E-H組國家",
    date: "2026-06-22",
    url: "",
  },
  {
    id: 162,
    title: "個人Q版~2026世足賽~I-L組",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A02-3.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>~~產生三張貼圖提示詞(一張有四組16個國家)，每組用附件人物Q版墨鏡造型和2026世界盃足球賽下面每四個小組的國家國旗和國家名稱當做貼圖，國籍不要當背景，，日常問候語每個國家都不同，問候或關心話語都可以,再產生下一張4X4的16個貼圖提示詞，國家名稱用繁體中文鋼筆字體呈現~貼上I-K組國家",
    date: "2026-06-22",
    url: "",
  },
  {
    id: 163,
    title: "個人Q版~2026世足賽~A-D組~claude(另一組)",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A03-1.webp",
    prompt:
      "<span class='yf2'>利用claude的/prompt-master，優化提示詞，自己寫的提示詞如下</span>~~產生一組貼圖提示詞，用附件人物Q版墨鏡造型和2026世界盃足球賽下面四組的國家國旗和國家名稱當做貼圖，加上一句問候語，製作4X4 16組貼圖，日常問候語每個國家都不同，問候或關心話語都可以,再產生下一張4X4的16個貼圖提示詞，國家名稱用繁體中文呈現",
    date: "2026-06-22",
    url: "",
  },
  {
    id: 164,
    title: "個人Q版~2026世足賽~E-H組~claude(另一組)",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A03-2.webp",
    prompt:
      "<span class='yf2'>利用claude的/prompt-master，優化提示詞，自己寫的提示詞如下</span>~~產生一組貼圖提示詞，用附件人物Q版墨鏡造型和2026世界盃足球賽下面四組的國家國旗和國家名稱當做貼圖，加上一句問候語，製作4X4 16組貼圖，日常問候語每個國家都不同，問候或關心話語都可以,再產生下一張4X4的16個貼圖提示詞，國家名稱用繁體中文呈現",
    date: "2026-06-22",
    url: "",
  },
  {
    id: 165,
    title: "個人Q版~2026世足賽~I-L組~claude(另一組)",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A03-3.webp",
    prompt:
      "<span class='yf2'>利用claude的/prompt-master，優化提示詞，自己寫的提示詞如下</span>~~產生一組貼圖提示詞，用附件人物Q版墨鏡造型和2026世界盃足球賽下面四組的國家國旗和國家名稱當做貼圖，加上一句問候語，製作4X4 16組貼圖，日常問候語每個國家都不同，問候或關心話語都可以,再產生下一張4X4的16個貼圖提示詞，國家名稱用繁體中文呈現",
    date: "2026-06-22",
    url: "",
  },
  {
    id: 166,
    title: "個人Q版~2026世足賽~A-D組~claude(這一組我最喜歡)",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A04-1.webp",
    prompt:
      "<span class='yf2'>利用claude的/prompt-master，優化提示詞，自己寫的提示詞如下</span>~~產生一組貼圖提示詞，用附件人物Q版墨鏡造型和2026世界盃足球賽下面四組的國家國旗和國家名稱當做貼圖，加上一句問候語，製作4X4 16組貼圖，日常問候語每個國家都不同，問候或關心話語都可以,再產生下一張4X4的16個貼圖提示詞，國家名稱用繁體中文呈現",
    date: "2026-06-22",
    url: "",
  },
  {
    id: 167,
    title: "個人Q版~2026世足賽~E-H組~claude(這一組我最喜歡)",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A04-2.webp",
    prompt:
      "<span class='yf2'>利用claude的/prompt-master，優化提示詞，自己寫的提示詞如下</span>~~以附件圖片風隔為範例主題，人物可以參照範例，也可以參考附件圖片人物Q版墨鏡造型，另外背後需要放各個國家主要代表型風景或建築，球衣為藍色底，完成✅E-H 組 提示詞",
    date: "2026-06-22",
    url: "",
  },
  {
    id: 168,
    title: "個人Q版~2026世足賽~I-L組~claude(這一組我最喜歡)",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A04-3.webp",
    prompt:
      "<span class='yf2'>利用claude的/prompt-master，優化提示詞，自己寫的提示詞如下</span>~~以附件圖片風隔為範例主題，人物可以參照範例，也可以參考附件圖片人物Q版墨鏡造型，另外背後需要放各個國家主要代表型風景或建築，球衣為藍色底，完成✅I-L 組 提示詞",
    date: "2026-06-22",
    url: "",
  },
  {
    id: 169,
    title: "個人Q版~2026世足賽~A-D組(各國隊服)~claude",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A05-1.webp",
    prompt:
      "<span class='yf2'>利用claude的/prompt-master，優化提示詞，自己寫的提示詞如下</span>~~以附件圖片風隔為範例主題，人物可以參照範例，也可以參考附件圖片人物Q版墨鏡造型，另外背後需要放各個國家主要代表型風景或建築，球衣為要換成各國2026世界盃足球賽傳統出賽隊服，完成以下✅A-D 組 提示詞",
    date: "2026-06-22",
    url: "",
  },
  {
    id: 170,
    title: "個人Q版~2026世足賽~E-H組(各國隊服)~claude",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A05-2.webp",
    prompt:
      "<span class='yf2'>利用claude的/prompt-master，優化提示詞，自己寫的提示詞如下</span>~~以附件圖片風隔為範例主題，人物可以參照範例，也可以參考附件圖片人物Q版墨鏡造型，另外背後需要放各個國家主要代表型風景或建築，球衣為要換成各國2026世界盃足球賽傳統出賽隊服，完成以下✅E-H 組 提示詞",
    date: "2026-06-22",
    url: "",
  },
  {
    id: 171,
    title: "個人Q版~2026世足賽~I-L組(各國隊服)~claude",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A05-3.webp",
    prompt:
      "<span class='yf2'>利用claude的/prompt-master，優化提示詞，自己寫的提示詞如下</span>~~以附件圖片風隔為範例主題，人物可以參照範例，也可以參考附件圖片人物Q版墨鏡造型，另外背後需要放各個國家主要代表型風景或建築，球衣為要換成各國2026世界盃足球賽傳統出賽隊服，完成以下✅I-L 組 提示詞",
    date: "2026-06-22",
    url: "",
  },
  {
    id: 172,
    title: "個人Q版~2026世足賽~A-D組(這組只生16隊~要補上另外32隊)~claude",
    category: "Line",
    image: "./images/L01-Line/GPT0014-A06-1.webp",
    prompt:
      "<span class='yf2'>利用claude的/prompt-master，優化提示詞，自己寫的提示詞如下</span>~~以附件圖片風隔為範例主題，人物可以參照範例，也可以參考附件圖片人物Q版墨鏡造型，另外背後需要放各個國家主要代表型風景或建築，球衣為要換成各國2026世界盃足球賽傳統出賽隊服，完成以下✅I-L 組 提示詞",
    date: "2026-06-22",
    url: "",
  },
  {
    id: 173,
    title: "個人Q版~早餐後假牙脫落-1",
    category: "Life",
    image: "./images/L02-Life/L005-2.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>16:9橫式資訊圖表，主題標題置頂「早餐、拖地，還有一場假牙小插曲」，畫面主角為附件人物圖片轉Q版戴墨鏡造型，保持人物面部特徵與附件圖片完全一致，風格輕鬆幽默的生活感手繪插畫，配色以溫暖米黃、淡橘與柔和綠色為主，文字全部使用繁體中文鋼筆字體；內容採早晨流程型構圖，由左至右呈現三個區塊：第一區「備餐」呈現電鍋蒸地瓜包、水煮蛋、切洋蔥的廚房小場景，第二區「家事」呈現拖地板的俐落動作，第三區「插曲」呈現主角咬下地瓜包後假牙掉落的誇張Q版表情，旁邊加上哭笑表情符號與「掃興！」小標籤；底部補充說明區塊寫「下週植牙前，這週儘量吃軟的」，附上軟食圖示如稀飯、蒸蛋、嫩豆腐；整體氛圍輕鬆自嘲、可愛幽默、生活溫度十足，畫面乾淨活潑，無英文文字。",
    date: "2026-06-24",
    url: "",
  },
  {
    id: 174,
    title: "個人Q版~早餐後假牙脫落-2",
    category: "Life",
    image: "./images/L02-Life/L005-3.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P002~整段文章產生資訊圖表提示詞~產出後到Arena網站生圖~內容</span>~回來先準備早餐，用電鍋蒸地瓜包，配一顆水煮蛋。蒸地瓜包的時候順便切青蔥、拖一拖地板，把工作都完成，就準備開心吃早餐了。誰知道地瓜包咬下去沒幾口，假牙就掉下來，真的有點掃興。下週植牙裝上去前，看來這週得好好節制一下，儘量吃軟的東西，免得又鬧出狀況。",
    date: "2026-06-24",
    url: "",
  },
  {
    id: 175,
    title: "老婆Q版~老婆公司工作-1",
    category: "Life",
    image: "./images/L02-Life/L005-1.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>以資訊圖表風格呈現，16:9 構圖，整體為辦公室場景分區式圖解：上方標題「附件圖片Q版女性」，字體為鋼筆手寫風。主視覺為授信中心辦公區，一名員工坐在辦公桌前，頭戴亮橘色安全帽，表情淡定微笑；旁邊女性課長以誇張Q版女性角色作為配角，手持細棍敲擊安全帽，動作連續以小圖分格呈現（敲擊節奏以圖示表現）。右側用流程箭頭呈現「課長情緒升高」→「敲擊頻率增加」→「員工毫無影響」；左側用圖示標註「防護裝備：安全帽」與「心理狀態：穩定」。底部加入同事群像小插圖，以眼神交流的圖標表現「困惑」。整體色彩明亮帶幽默感，線條簡潔，資訊圖表式標註清楚，所有文字為繁體中文，無英文，強調輕鬆荒謬的職場情境。",
    date: "2026-06-24",
    url: "",
  },
  {
    id: 176,
    title: "個人Q版~幫老婆同事好市多採買",
    category: "Life",
    image: "./images/L02-Life/L005-4.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>十點多，開車去好市多，幫老婆公司的同事買葉黃素。資訊圖表設計，16:9橫式構圖，上方置中標題使用鋼筆字體；畫面主軸以「時間流程＋決策變化」資訊圖表呈現：分成上午購買、價格差異、同事決定、下午退貨、運動收穫五個節點，以箭頭串聯；價格區塊以對比圖呈現899與1229差異並標示「貴200多元」；加入簡單人物情境插圖輔助理解（開車購物、電話告知、退貨櫃檯、步行）；右下角配置「附件人物圖片Q版墨鏡造型」作為陪襯角色，風格可愛不搶主視覺；整體配色溫和生活感，圖文清楚、層次分明，所有文字皆為繁體中文、鋼筆字體呈現。",
    date: "2026-06-24",
    url: "",
  },
  {
    id: 177,
    title: "個人Q版~大雨中送兒子上班~1",
    category: "Life",
    image: "./images/L02-Life/L006-1.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>上傳照片時請註明「第一張是爸爸、第二張是兒子(改為運動背心加上後背包造型)、第三張是阿嬤」。Q 版可愛插圖風格，16:9 橫式資訊圖表，溫暖柔和色調、略帶卡通感，室內溫馨氛圍與窗外暴風雨形成強烈對比，線條乾淨、背景簡潔；以三位角色的參考照片為基礎，完整保留各自外貌特徵並轉換為 Q 版呈現。畫面主題為「颱風天早晨送兒子上班並順路採買」，採用時間軸式資訊圖表構圖，上方置中標題使用鋼筆字體；依序呈現九點二十分兒子準備出門、阿嬤提議同行、爸爸立刻答應開車、沿途大雨與特報簡訊、公司門口放下兒子、前往家樂福採買丸龜拉麵、吐司、愛文芒果、牛奶與優酪乳、最後平安回家。第二張角色請改為運動背心加上後背包造型，其他角色維持參考照片特徵；所有文字皆使用繁體中文，不出現英文，並以資訊圖表方式清楚分區、圖示化呈現。",
    date: "2026-06-25",
    url: "",
  },
  {
    id: 178,
    title: "個人Q版~大雨中送兒子上班~2",
    category: "Life",
    image: "./images/L02-Life/L006-2.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>上傳照片時請註明「第一張是爸爸、第二張是兒子(改為運動背心加上後背包造型)、第三張是阿嬤」。Q 版可愛插圖風格，16:9 橫式資訊圖表，溫暖柔和色調、略帶卡通感，室內溫馨氛圍與窗外暴風雨形成強烈對比，線條乾淨、背景簡潔；以三位角色的參考照片為基礎，完整保留各自外貌特徵並轉換為 Q 版呈現。畫面主題為「颱風天早晨送兒子上班並順路採買」，採用時間軸式資訊圖表構圖，上方置中標題使用鋼筆字體；依序呈現九點二十分兒子準備出門、阿嬤提議同行、爸爸立刻答應開車、沿途大雨與特報簡訊、公司門口放下兒子、前往家樂福採買丸龜拉麵、吐司、愛文芒果、牛奶與優酪乳、最後平安回家。第二張角色請改為運動背心加上後背包造型，其他角色維持參考照片特徵；所有文字皆使用繁體中文，不出現英文，並以資訊圖表方式清楚分區、圖示化呈現。",
    date: "2026-06-25",
    url: "",
  },
  {
    id: 179,
    title: "老婆股票神操作~1",
    category: "Life",
    image: "./images/L02-Life/L007-1.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>「請製作一張 16:9 橫式資訊圖表，標題：『太座神操作！4天賺27萬，藥華藥短線獲利大解析』（鋼筆字體，置頂）；左側以時間軸呈現 2026/06/22 買入 → 2026/06/25 賣出，標注股數 2,000 股；右側以兩欄比較數據：情境 A：買價 1,060 元、賣價 1,185 元、毛利 約 25 萬；情境 B：買價 1,027.5 元、賣價 1,162.5 元、毛利 約 27 萬；下方顯示投資報酬率區間 11.8%–13.1%；畫面加入向上箭頭、藥劑小圖示與利多標籤『FDA 核准』（保留縮寫 FDA），並在圖說以小字註明來源與日期；右下角放『附件人物Q版造型』作為陪襯，保留外貌特徵，風格 Q 版可愛、溫暖柔和色調、線條乾淨、背景簡潔；所有文字為繁體中文（不出現英文，專業縮寫例外），輸出 PNG 解析度至少 1920×1080。」",
    date: "2026-06-26",
    url: "",
  },
  {
    id: 180,
    title: "老婆股票神操作~2",
    category: "Life",
    image: "./images/L02-Life/L007-2.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>「請製作一張 16:9 橫式資訊圖表，標題：『太座神操作！4天賺27萬，藥華藥短線獲利大解析』（鋼筆字體，置頂）；左側以時間軸呈現 2026/06/22 買入 → 2026/06/25 賣出，標注股數 2,000 股；右側以兩欄比較數據：情境 A：買價 1,060 元、賣價 1,185 元、毛利 約 25 萬；情境 B：買價 1,027.5 元、賣價 1,162.5 元、毛利 約 27 萬；下方顯示投資報酬率區間 11.8%–13.1%；畫面加入向上箭頭、藥劑小圖示與利多標籤『FDA 核准』（保留縮寫 FDA），並在圖說以小字註明來源與日期；右下角放『附件人物Q版造型』作為陪襯，保留外貌特徵，風格 Q 版可愛、溫暖柔和色調、線條乾淨、背景簡潔；所有文字為繁體中文（不出現英文，專業縮寫例外），輸出 PNG 解析度至少 1920×1080。」",
    date: "2026-06-26",
    url: "",
  },
  {
    id: 181,
    title: "老婆股票操作~保守預估-1",
    category: "Life",
    image: "./images/L02-Life/L007-3.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>「請製作一張 16:9 橫式資訊圖表，標題為『就算買在高點、賣在低點，還是穩賺18萬！』，標題置頂並使用鋼筆字體。整體風格為 Q 版可愛插圖風格，色調溫暖柔和、略帶卡通感，線條乾淨、背景簡潔；請以附件人物圖片為基礎保留外貌特徵，轉換成 Q 版造型作為陪襯。畫面主題為『最保守情境下的核心重點摘要』，以資訊圖表方式呈現：左側用時間軸表示 2026 年 6 月 22 日買入藥華藥（6446）2,000 股、6 月 25 日全數賣出；中間以大數字卡顯示買在週一最高價 1,060 元、賣在週四最低價 1,160 元；右側用成本與獲利總結卡呈現已扣除券商手續費 0.1425% 與證券交易稅 0.3% 後，最低仍可穩賺 186,713 元新台幣，投資報酬率約 8.8%。下方再用兩個重點框整理：『不論實際操作如何，只要在這段期間進出，至少有 18.6 萬以上的淨利』與『受惠於 FDA 利多帶動的強勁漲勢，短線交易風險低、獲利穩固』。畫面可加入向上箭頭、勝率高、獲利穩固等視覺元素，並在角落加上小字註記『依題述估算』與『交易成本已計入』。所有文字一律使用繁體中文，畫面不要出現英文，專業縮寫如 FDA 可保留；整體要求清楚易讀、分區明確、數字醒目，輸出為高解析 PNG。」",
    date: "2026-06-26",
    url: "",
  },
  {
    id: 182,
    title: "老婆股票操作~保守預估-2",
    category: "Life",
    image: "./images/L02-Life/L007-4.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>「請製作一張 16:9 橫式資訊圖表，標題為『就算買在高點、賣在低點，還是穩賺18萬！』，標題置頂並使用鋼筆字體。整體風格為 Q 版可愛插圖風格，色調溫暖柔和、略帶卡通感，線條乾淨、背景簡潔；請以附件人物圖片為基礎保留外貌特徵，轉換成 Q 版造型作為陪襯。畫面主題為『最保守情境下的核心重點摘要』，以資訊圖表方式呈現：左側用時間軸表示 2026 年 6 月 22 日買入藥華藥（6446）2,000 股、6 月 25 日全數賣出；中間以大數字卡顯示買在週一最高價 1,060 元、賣在週四最低價 1,160 元；右側用成本與獲利總結卡呈現已扣除券商手續費 0.1425% 與證券交易稅 0.3% 後，最低仍可穩賺 186,713 元新台幣，投資報酬率約 8.8%。下方再用兩個重點框整理：『不論實際操作如何，只要在這段期間進出，至少有 18.6 萬以上的淨利』與『受惠於 FDA 利多帶動的強勁漲勢，短線交易風險低、獲利穩固』。畫面可加入向上箭頭、勝率高、獲利穩固等視覺元素，並在角落加上小字註記『依題述估算』與『交易成本已計入』。所有文字一律使用繁體中文，畫面不要出現英文，專業縮寫如 FDA 可保留；整體要求清楚易讀、分區明確、數字醒目，輸出為高解析 PNG。」",
    date: "2026-06-26",
    url: "",
  },
  {
    id: 183,
    title: "個人Q版~二選一",
    category: "Life",
    image: "./images/L02-Life/L007-5.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>「請製作一張 16:9 橫式資訊圖，白色乾淨背景。中央是一位附件人物圖片的 Q 版造型老師，手拿題目板，保留人物外貌特徵並呈現可愛卡通感。左側放一個大型綠色圓形按鈕，內有醒目的數字『①』，旁邊加上綠色勾勾與文字『正確』；右側放一個大型紅色圓形按鈕，內有醒目的數字『②』，旁邊加上紅色叉叉與文字『錯誤』。老師的手指清楚指向兩個按鈕，讓觀眾一秒看懂操作方式。下方以粗體寫上：『請依您的判斷作答：正確請按【1】　錯誤請按【2】』。整體配色以綠／紅高對比為主，數字①、②是畫面最醒目的元素，版面清楚、簡潔、易讀，全部文字使用繁體中文，不出現英文。」",
    date: "2026-06-26",
    url: "",
  },
  {
    id: 184,
    title: "個人Q版~二選一",
    category: "Life",
    image: "./images/L02-Life/L007-6.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>「請製作一張 16:9 橫式資訊圖，白色乾淨背景。中央是一位附件人物圖片的 Q 版造型老師，手拿題目板，保留人物外貌特徵並呈現可愛卡通感。左側放一個大型綠色圓形按鈕，內有醒目的數字『①』，旁邊加上綠色勾勾與文字『正確』；右側放一個大型紅色圓形按鈕，內有醒目的數字『②』，旁邊加上紅色叉叉與文字『錯誤』。老師的手指清楚指向兩個按鈕，讓觀眾一秒看懂操作方式。下方以粗體寫上：『請依您的判斷作答：正確請按【1】　錯誤請按【2】』。整體配色以綠／紅高對比為主，數字①、②是畫面最醒目的元素，版面清楚、簡潔、易讀，全部文字使用繁體中文，不出現英文。」",
    date: "2026-06-26",
    url: "",
  },
  {
    id: 185,
    title: "個人Q版~二選一~法官版",
    category: "Life",
    image: "./images/L02-Life/L007-7.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>請製作一張 16:9 橫式資訊圖，白色乾淨背景，畫面中央是一位 Q 版法官，手拿法槌，保留附件人物圖片的外貌特徵並轉換為可愛卡通風格。左邊放一個綠色印章樣式區塊，內容清楚寫「✔ 正確」與「按【1】」；右邊放一個紅色印章樣式區塊，內容清楚寫「✘ 錯誤」與「按【2】」。整體畫面像法庭宣判，辨識度高、對比強烈、視覺直覺，讓人一眼知道該按哪個按鈕。配色以綠色與紅色高對比為主，中央法官角色最醒目，印章圖樣要有正式裁定感。所有文字皆使用繁體中文，不出現英文，版面簡潔清楚，適合快速判讀與互動操作。",
    date: "2026-06-26",
    url: "",
  },
  {
    id: 186,
    title: "個人Q版~二選一~寶箱版",
    category: "Life",
    image: "./images/L02-Life/L007-8.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>請製作一張 16:9 橫式資訊圖，白色乾淨背景，整體像益智遊戲選擇畫面，風格可愛、清楚、直覺。中央放兩個寶箱，並以附件人物圖片的 Q 版造型作為畫面陪襯元素，保留外貌特徵並轉換成卡通風格。左邊寶箱打開，冒出綠色光芒與 ✓，旁邊清楚標示「① 正確」；右邊寶箱冒出紅色煙霧與 ✗，旁邊清楚標示「② 錯誤」。左側用綠色、右側用紅色，強化高對比辨識度；數字 ①、② 要做得最大、最醒目，並加入遊戲式發光效果與簡單陰影。整體畫面要像解謎遊戲中的寶箱選擇介面，讓人一眼看懂哪個是正確選項。所有文字使用繁體中文，不出現英文，版面簡潔、清楚、童趣感強。",
    date: "2026-06-26",
    url: "",
  },
  {
    id: 187,
    title: "老婆11月南九州團體行-1",
    category: "Map",
    image: "./images/M01-Map/M007-1.webp",
    prompt:
      "<span class='yf3'>提示詞是從雄獅旅遊團行程轉下來的~</span><a class='yf11' href='https://tour.lifetour.com.tw/detail?mg=KOJT5CI26002&sg=KOJ05CI26N14T01&_gl=1*100pqtj*_gcl_au*MTU0NjgwMzY4Ny4xNzgxMDU1Mzk5*_ga*MTA0NDc0NjcwNi4xNzgxMDU1Mzk5*_ga_2JSQLVRTMW*czE3ODMwNTI4ODAkbzQkZzAkdDE3ODMwNTI4ODAkajYwJGwwJGgw' >雄獅旅行社11/14日出發南九州五日行程，鹿兒島進，福岡出</a>",
    date: "2026-07-03",
    url: "",
  },
  {
    id: 188,
    title: "老婆11月南九州團體行-2",
    category: "Map",
    image: "./images/M01-Map/M007-2.webp",
    prompt:
      "<span class='yf3'>提示詞是從雄獅旅遊團行程轉下來的~</span><a class='yf11' href='https://tour.lifetour.com.tw/detail?mg=KOJT5CI26002&sg=KOJ05CI26N14T01&_gl=1*100pqtj*_gcl_au*MTU0NjgwMzY4Ny4xNzgxMDU1Mzk5*_ga*MTA0NDc0NjcwNi4xNzgxMDU1Mzk5*_ga_2JSQLVRTMW*czE3ODMwNTI4ODAkbzQkZzAkdDE3ODMwNTI4ODAkajYwJGwwJGgw' >雄獅旅行社11/14日出發南九州五日行程，鹿兒島進，福岡出</a>",
    date: "2026-07-03",
    url: "",
  },
  {
    id: 189,
    title: "老婆11月南九州團體行-3",
    category: "Map",
    image: "./images/M01-Map/M007-3.webp",
    prompt:
      "<span class='yf3'>提示詞是從雄獅旅遊團行程轉下來的~</span><a class='yf11' href='https://tour.lifetour.com.tw/detail?mg=KOJT5CI26002&sg=KOJ05CI26N14T01&_gl=1*100pqtj*_gcl_au*MTU0NjgwMzY4Ny4xNzgxMDU1Mzk5*_ga*MTA0NDc0NjcwNi4xNzgxMDU1Mzk5*_ga_2JSQLVRTMW*czE3ODMwNTI4ODAkbzQkZzAkdDE3ODMwNTI4ODAkajYwJGwwJGgw' >雄獅旅行社11/14日出發南九州五日行程，鹿兒島進，福岡出</a>",
    date: "2026-07-03",
    url: "",
  },
  {
    id: 190,
    title: "老婆11月南九州團體行-4",
    category: "Map",
    image: "./images/M01-Map/M007-4.webp",
    prompt:
      "<span class='yf3'>提示詞是從雄獅旅遊團行程轉下來的~</span><a class='yf11' href='https://tour.lifetour.com.tw/detail?mg=KOJT5CI26002&sg=KOJ05CI26N14T01&_gl=1*100pqtj*_gcl_au*MTU0NjgwMzY4Ny4xNzgxMDU1Mzk5*_ga*MTA0NDc0NjcwNi4xNzgxMDU1Mzk5*_ga_2JSQLVRTMW*czE3ODMwNTI4ODAkbzQkZzAkdDE3ODMwNTI4ODAkajYwJGwwJGgw' >雄獅旅行社11/14日出發南九州五日行程，鹿兒島進，福岡出</a>",
    date: "2026-07-03",
    url: "",
  },
  {
    id: 191,
    title: "老婆11月南九州團體行-5",
    category: "Map",
    image: "./images/M01-Map/M007-5.webp",
    prompt:
      "<span class='yf3'>提示詞是從雄獅旅遊團行程轉下來的~</span><a class='yf11' href='https://tour.lifetour.com.tw/detail?mg=KOJT5CI26002&sg=KOJ05CI26N14T01&_gl=1*100pqtj*_gcl_au*MTU0NjgwMzY4Ny4xNzgxMDU1Mzk5*_ga*MTA0NDc0NjcwNi4xNzgxMDU1Mzk5*_ga_2JSQLVRTMW*czE3ODMwNTI4ODAkbzQkZzAkdDE3ODMwNTI4ODAkajYwJGwwJGgw' >雄獅旅行社11/14日出發南九州五日行程，鹿兒島進，福岡出</a>",
    date: "2026-07-03",
    url: "",
  },
  {
    id: 192,
    title: "老婆11月南九州團體行-6",
    category: "Map",
    image: "./images/M01-Map/M007-6.webp",
    prompt:
      "<span class='yf3'>提示詞是從雄獅旅遊團行程轉下來的~</span><a class='yf11' href='https://tour.lifetour.com.tw/detail?mg=KOJT5CI26002&sg=KOJ05CI26N14T01&_gl=1*100pqtj*_gcl_au*MTU0NjgwMzY4Ny4xNzgxMDU1Mzk5*_ga*MTA0NDc0NjcwNi4xNzgxMDU1Mzk5*_ga_2JSQLVRTMW*czE3ODMwNTI4ODAkbzQkZzAkdDE3ODMwNTI4ODAkajYwJGwwJGgw' >雄獅旅行社11/14日出發南九州五日行程，鹿兒島進，福岡出</a>",
    date: "2026-07-03",
    url: "",
  },
  {
    id: 193,
    title: "老婆11月南九州團體行-7",
    category: "Map",
    image: "./images/M01-Map/M007-7.webp",
    prompt:
      "<span class='yf3'>提示詞是從雄獅旅遊團行程轉下來的~</span><a class='yf11' href='https://tour.lifetour.com.tw/detail?mg=KOJT5CI26002&sg=KOJ05CI26N14T01&_gl=1*100pqtj*_gcl_au*MTU0NjgwMzY4Ny4xNzgxMDU1Mzk5*_ga*MTA0NDc0NjcwNi4xNzgxMDU1Mzk5*_ga_2JSQLVRTMW*czE3ODMwNTI4ODAkbzQkZzAkdDE3ODMwNTI4ODAkajYwJGwwJGgw' >雄獅旅行社11/14日出發南九州五日行程，鹿兒島進，福岡出</a>",
    date: "2026-07-03",
    url: "",
  },
  {
    id: 194,
    title: "老婆11月南九州團體行-8",
    category: "Map",
    image: "./images/M01-Map/M007-8.webp",
    prompt:
      "<span class='yf3'>提示詞是從雄獅旅遊團行程轉下來的~</span><a class='yf11' href='https://tour.lifetour.com.tw/detail?mg=KOJT5CI26002&sg=KOJ05CI26N14T01&_gl=1*100pqtj*_gcl_au*MTU0NjgwMzY4Ny4xNzgxMDU1Mzk5*_ga*MTA0NDc0NjcwNi4xNzgxMDU1Mzk5*_ga_2JSQLVRTMW*czE3ODMwNTI4ODAkbzQkZzAkdDE3ODMwNTI4ODAkajYwJGwwJGgw' >雄獅旅行社11/14日出發南九州五日行程，鹿兒島進，福岡出</a>",
    date: "2026-07-03",
    url: "",
  },
  {
    id: 195,
    title: "老婆11月南九州團體行-9",
    category: "Map",
    image: "./images/M01-Map/M007-9.webp",
    prompt:
      "<span class='yf3'>提示詞是從雄獅旅遊團行程轉下來的~</span><a class='yf11' href='https://tour.lifetour.com.tw/detail?mg=KOJT5CI26002&sg=KOJ05CI26N14T01&_gl=1*100pqtj*_gcl_au*MTU0NjgwMzY4Ny4xNzgxMDU1Mzk5*_ga*MTA0NDc0NjcwNi4xNzgxMDU1Mzk5*_ga_2JSQLVRTMW*czE3ODMwNTI4ODAkbzQkZzAkdDE3ODMwNTI4ODAkajYwJGwwJGgw' >雄獅旅行社11/14日出發南九州五日行程，鹿兒島進，福岡出</a>",
    date: "2026-07-03",
    url: "https://tour.lifetour.com.tw/detail?mg=KOJT5CI26002&sg=KOJ05CI26N14T01&_gl=1*100pqtj*_gcl_au*MTU0NjgwMzY4Ny4xNzgxMDU1Mzk5*_ga*MTA0NDc0NjcwNi4xNzgxMDU1Mzk5*_ga_2JSQLVRTMW*czE3ODMwNTI4ODAkbzQkZzAkdDE3ODMwNTI4ODAkajYwJGwwJGgw",
  },
  {
    id: 196,
    title: "日本旅遊地圖~北海道-全覽",
    category: "Map",
    image: "./images/M01-Map/M006-1.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>",
    date: "2026-07-03",
    url: "",
  },
  {
    id: 197,
    title: "日本旅遊地圖~北海道-道南",
    category: "Map",
    image: "./images/M01-Map/M006-2.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>",
    date: "2026-07-03",
    url: "",
  },
  {
    id: 198,
    title: "日本旅遊地圖~北海道-道央",
    category: "Map",
    image: "./images/M01-Map/M006-3.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>",
    date: "2026-07-03",
    url: "",
  },
  {
    id: 199,
    title: "日本旅遊地圖~北海道-道北",
    category: "Map",
    image: "./images/M01-Map/M006-4.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>",
    date: "2026-07-03",
    url: "",
  },
  {
    id: 200,
    title: "日本旅遊地圖~北海道-道東",
    category: "Map",
    image: "./images/M01-Map/M006-5.webp",
    prompt:
      "<span class='yf3'>利用Perplexity空間~P001-產生文章的資訊圖表提示詞產出後到Arena網站生圖~內容</span>",
    date: "2026-07-03",
    url: "",
  },
  {
    id: 201,
    title: "AI廈門旅遊~鼓浪嶼-1",
    category: "Portrait",
    image: "./images/P02-Portrait/P002-1.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件三張照片人物合照以下中國大陸廈門重要旅遊景點\
      為背景的GPT Image2.0提示詞~合照風格~休閒季節以春天為主，三位超過40年以上好友，先以下面四個地點為背景\
      🏯 鼓浪嶼 — 騎樓建築、歐式風情⛩️ 南普陀寺 — 寺廟建築、文化氛圍 環島路 — 海濱風景、日落🏮 朝聖門",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 202,
    title: "AI廈門旅遊~鼓浪嶼-2",
    category: "Portrait",
    image: "./images/P02-Portrait/P002-3.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件三張照片人物合照以下中國大陸廈門重要旅遊景點\
      為背景的GPT Image2.0提示詞~合照風格~休閒季節以春天為主，三位超過40年以上好友，先以下面四個地點為背景\
      🏯 鼓浪嶼 — 騎樓建築、歐式風情⛩️ 南普陀寺 — 寺廟建築、文化氛圍 環島路 — 海濱風景、日落🏮 朝聖門",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 203,
    title: "AI廈門旅遊~普陀寺-1",
    category: "Portrait",
    image: "./images/P02-Portrait/P002-2.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件三張照片人物合照以下中國大陸廈門重要旅遊景點\
      為背景的GPT Image2.0提示詞~合照風格~休閒季節以春天為主，三位超過40年以上好友，先以下面四個地點為背景\
      🏯 鼓浪嶼 — 騎樓建築、歐式風情⛩️ 南普陀寺 — 寺廟建築、文化氛圍 環島路 — 海濱風景、日落🏮 朝聖門",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 204,
    title: "AI廈門旅遊~普陀寺-2",
    category: "Portrait",
    image: "./images/P02-Portrait/P002-4.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件三張照片人物合照以下中國大陸廈門重要旅遊景點\
      為背景的GPT Image2.0提示詞~合照風格~休閒季節以春天為主，三位超過40年以上好友，先以下面四個地點為背景\
      🏯 鼓浪嶼 — 騎樓建築、歐式風情⛩️ 南普陀寺 — 寺廟建築、文化氛圍 環島路 — 海濱風景、日落🏮 朝聖門",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 205,
    title: "AI廈門旅遊~環島路 — 海濱風景、日落 ",
    category: "Portrait",
    image: "./images/P02-Portrait/P002-5.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件三張照片人物合照以下中國大陸廈門重要旅遊景點\
      為背景的GPT Image2.0提示詞~合照風格~休閒季節以春天為主，三位超過40年以上好友，先以下面四個地點為背景\
      🏯 鼓浪嶼 — 騎樓建築、歐式風情⛩️ 南普陀寺 — 寺廟建築、文化氛圍 環島路 — 海濱風景、日落🏮 朝聖門",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 206,
    title: "AI廈門旅遊~朝聖門",
    category: "Portrait",
    image: "./images/P02-Portrait/P002-6.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件三張照片人物合照以下中國大陸廈門重要旅遊景點\
      為背景的GPT Image2.0提示詞~合照風格~休閒季節以春天為主，三位超過40年以上好友，先以下面四個地點為背景\
      🏯 鼓浪嶼 — 騎樓建築、歐式風情⛩️ 南普陀寺 — 寺廟建築、文化氛圍 環島路 — 海濱風景、日落🏮 朝聖門",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 207,
    title: "AI北海道道南~函館山夜景",
    category: "Portrait",
    image: "./images/P02-Portrait/P002-7.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件三張照片人物合照以下北海道道南重要旅遊景點的10個提示詞",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 208,
    title: "AI北海道道南~五稜郭",
    category: "Portrait",
    image: "./images/P02-Portrait/P002-8.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件三張照片人物合照以下北海道道南重要旅遊景點的10個提示詞",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 209,
    title: "AI北海道道南~大沼公園",
    category: "Portrait",
    image: "./images/P02-Portrait/P002-9.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件三張照片人物合照以下北海道道南重要旅遊景點的10個提示詞",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 210,
    title: "AI北海道道南~金森倉崮",
    category: "Portrait",
    image: "./images/P02-Portrait/P002-10.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件三張照片人物合照以下北海道道南重要旅遊景點的10個提示詞",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 211,
    title: "北海道道央~機票與住宿規劃",
    category: "Map",
    image: "./images/M01-Map/M008-1.webp",
    prompt:
      "16:9 構圖，資訊圖表風格，標題置頂「北海道道央自由行~機票與住宿規劃」，鋼筆字體，繁體中文，全畫面無英文（僅保留AI等專業縮寫例外），主視覺為附件人物圖片轉換成Q版墨鏡造型角色，置於左側作為旅遊規劃引導者；版面採「左右分區資訊圖」設計，左側呈現機票三方案，右側呈現住宿三地點；機票區塊以飛機圖示連結三種選擇：傳統航空（班次多、行李完善）、廉價航空（票價實惠）、機加酒套裝（一次搞定）；住宿區塊以床鋪／建築圖示呈現札幌、小樽、富良野三地各三種飯店選擇及其特色（交通便利、購物方便、溫泉景觀）；整體配色採沉穩旅遊風（雪白、深藍、木質棕），搭配細線地圖與圖示連結，呈現規劃清晰、選擇多元的視覺風格。",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 212,
    title: "北海道道央~交通方式與行程規劃",
    category: "Map",
    image: "./images/M01-Map/M008-2.webp",
    prompt:
      "16:9 構圖，資訊圖表風格，標題置頂「北海道道央自由行~交通方式與行程規劃」，鋼筆字體，繁體中文，全畫面無英文（僅保留AI等專業縮寫例外），主視覺為附件人物圖片轉換成Q版墨鏡造型角色，置於左側作為行程導覽者；版面採「上下雙區塊」設計，上方呈現三種交通方式（JR周遊券、租車自駕、單程購票+市區交通），以鐵路、車輛、地鐵圖示表示；下方以時間軸呈現兩種五天行程方案：方案一（札幌、小樽、富良野經典路線）與方案二（札幌、登別溫泉、小樽療癒路線），每日行程以節點串聯呈現重點景點與住宿地；整體配色採清爽旅遊風（淺藍、白、綠），搭配路線圖與時間軸線條，呈現行程規劃一目了然的視覺風格。",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 213,
    title: "北海道道央~餐食與採購推薦",
    category: "Map",
    image: "./images/M01-Map/M008-3.webp",
    prompt:
      "16:9 構圖，資訊圖表風格，標題置頂「北海道道央自由行~餐食與採購推薦」，鋼筆字體，繁體中文，全畫面無英文（僅保留AI等專業縮寫例外），主視覺為附件人物圖片轉換成Q版墨鏡造型角色，置於左側作為美食與購物導覽者；版面採「左右分區資訊圖」設計，左側呈現餐食推薦：拉麵、海鮮、烤肉、湯咖哩、甜點、便利商店，以食物圖示呈現代表美食；右側呈現伴手禮與購物地點：白色戀人、六花亭、LeTAO、Royce、Calbee等品牌，以及狸小路、堺町通商店街、機場免稅店等購物地點；整體配色採溫馨美食風（奶油白、暖橘、深棕），搭配食物與商品圖示，呈現豐富美食與購物指南的視覺風格。",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 214,
    title: "北海道道央~實用提醒與旅遊須知",
    category: "Map",
    image: "./images/M01-Map/M008-4.webp",
    prompt:
      "16:9 構圖，資訊圖表風格，標題置頂「北海道道央自由行~實用提醒與旅遊須知」，鋼筆字體，繁體中文，全畫面無英文（僅保留AI等專業縮寫例外），主視覺為附件人物圖片轉換成Q版墨鏡造型角色，置於畫面中央偏下，象徵貼心提醒與行前準備的引導者；版面採「六大提醒放射圖」設計，中間主核心為「旅遊須知」，向外延伸六個模組並以圖示標示：最佳季節（花田／雪祭）、語言標示、網路SIM卡、插座規格、退稅規則、冬季自駕注意事項；整體配色採沉穩實用風（深藍、米白、灰），搭配放射線條與提醒圖示，呈現清晰易懂、行前準備完整的視覺風格。",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 215,
    title: "地圖版~北海道道央~機票與住宿規劃",
    category: "Map",
    image: "./images/M01-Map/M008-5.webp",
    prompt:
      "16:9 構圖，資訊圖表風格，標題置頂「北海道道央自由行~機票與住宿地圖」，鋼筆字體，繁體中文，全畫面無英文（僅保留AI等專業縮寫例外），主視覺為附件人物圖片轉換成Q版墨鏡造型角色，置於左側作為旅遊地圖導覽者；版面採「地圖式區域配置」設計，背景以北海道輪廓與交通節點呈現，左上角為台灣桃園到新千歲機場的航線箭頭，右側以札幌、小樽、富良野三大住宿區塊標示住宿選擇；機票區塊用飛機與票券圖示整理傳統航空、廉價航空、機加酒三方案與參考票價；住宿區塊以地標釘選方式標示札幌車站周邊、市中心、小樽運河旁、富良野溫泉等飯店位置與特色；整體配色採旅遊地圖風（雪白、淺藍、深藍），搭配路線箭頭與地圖座標感，呈現清楚易讀的行程規劃視覺。",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 216,
    title: "地圖版~北海道道央~交通方式與行程規劃",
    category: "Map",
    image: "./images/M01-Map/M008-6.webp",
    prompt:
      "16:9 構圖，資訊圖表風格，標題置頂「北海道道央自由行~交通與行程路線圖」，鋼筆字體，繁體中文，全畫面無英文（僅保留AI等專業縮寫例外），主視覺為附件人物圖片轉換成Q版墨鏡造型角色，置於左側作為行程導航者；版面採「地圖路線規劃」設計，以北海道區域地圖為底，札幌、小樽、富良野、美瑛、登別、新千歲機場等景點以節點標示，路線以箭頭串聯；上方以交通方式分區呈現JR北海道周遊券、租車自駕、單程購票＋市區交通三種選擇，並用鐵路、車輛、地鐵圖示表示；下方以兩條不同顏色路線標示兩種五天行程方案，一條為「札幌－小樽－富良野/美瑛經典線」，另一條為「札幌－登別溫泉－小樽療癒線」，每日停靠站以日期標籤顯示；整體配色採清爽旅遊地圖風（淺藍、白、綠），搭配等高線、路線箭頭與地標符號，呈現一眼看懂的路線規劃圖。",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 217,
    title: "地圖版~北海道道央~餐食與採購推薦",
    category: "Map",
    image: "./images/M01-Map/M008-7.webp",
    prompt:
      "16:9 構圖，資訊圖表風格，標題置頂「北海道道央自由行~餐食與採購購物地圖」，鋼筆字體，繁體中文，全畫面無英文（僅保留AI等專業縮寫例外），主視覺為附件人物圖片轉換成Q版墨鏡造型角色，置於左側作為美食與購物導覽者；版面採「地圖標點式配置」，以札幌、小樽、新千歲機場為三大購物與餐食中心，餐食區以碗、火鍋、烤肉、甜點圖示標示拉麵、海鮮、成吉思汗烤肉、湯咖哩、甜點與便利商店等推薦；採購區以禮盒、商店、百貨圖示標示白色戀人、六花亭、LeTAO、Royce、Calbee等伴手禮品牌，並以地圖釘點標示狸小路、堺町通商店街、機場免稅店等購物地點；整體配色採溫馨美食地圖風（奶油白、暖橘、深棕），搭配小圖標與區域連線，呈現美食與購物分布清楚的視覺風格。",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 218,
    title: "地圖版~北海道道央~實用提醒與旅遊須知",
    category: "Map",
    image: "./images/M01-Map/M008-8.webp",
    prompt:
      "16:9 構圖，資訊圖表風格，標題置頂「北海道道央自由行~實用提醒旅遊地圖」，鋼筆字體，繁體中文，全畫面無英文（僅保留AI等專業縮寫例外），主視覺為附件人物圖片轉換成Q版墨鏡造型角色，置於畫面中央偏下，象徵貼心提醒與行前準備的引導者；版面採「北海道旅行資訊地圖」設計，中央以地圖圓盤或指南針為核心，向外放射六個提醒節點：最佳旅遊季節、語言標示、網路SIM卡、插座規格、退稅規則、冬季自駕注意事項，並搭配季節、對話框、訊號、插座、標章、雪胎等圖示；整體配色採實用地圖風（深藍、米白、灰、淡金），搭配方位箭頭與圖示標籤，呈現資訊完整、旅遊前準備清晰的視覺風格。",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 219,
    title: "川董~大溪漁港",
    category: "Life",
    image: "./images/L02-Life/L008-1.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>🎣 大溪漁港（頭城鎮）— 新手首選！16:9資訊圖表提示詞：Q版人物釣魚風格插畫，場景為宜蘭大溪漁港碼頭與防波堤，主角為可愛Q版人物手持釣竿拋竿，背景加入漁港、人群與魚市場元素，整體風格明亮活潑；上方放標題「大溪漁港（頭城鎮）— 新手首選！」，內容分區呈現：釣魚方式（碼頭、防波堤拋竿）、目標魚種（黑鯛、白帶魚、小鱸魚、金線魚）、餌料（沙蠶、蝦肉）、優點（安全平坦、魚市、停車方便、廁所遮蔭）、交通（台2線、頭城火車站10分鐘），加入小圖示輔助說明；整體使用繁體中文，鋼筆字體，色彩清新海洋風，畫面乾淨易讀，無英文文字。",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 220,
    title: "川董~烏石漁港",
    category: "Life",
    image: "./images/L02-Life/L008-2.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>🎣 烏石漁港（頭城鎮）— 礁石釣黑鯛聖地16:9資訊圖表提示詞：Q版人物釣魚風格插畫，場景為烏石漁港礁石與防波堤，主角為穿防滑鞋的Q版釣客在礁石平台釣魚，加入海浪與礁石縫隙元素，風格略帶挑戰感；上方放標題「烏石漁港（頭城鎮）— 礁石釣黑鯛聖地」，內容分區呈現：釣法（防波堤外側、礁石沉底釣）、裝備（鉛墜、子線、千又3號鉤、沙蠶）、黃金時間（漲潮中後期）、注意事項（防滑鞋、避開大浪）、特色（黑鯛、石斑藏身礁石）、附近景點（蘭陽博物館），搭配圖示呈現；全圖繁體中文鋼筆字體，色調偏海藍與岩石灰，資訊清楚分區，無英文文字。",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 221,
    title: "川董~南方澳漁港-1",
    category: "Life",
    image: "./images/L02-Life/L008-3.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>南方澳漁港（蘇澳鎮）— 多樣釣點任你選：16:9橫幅資訊圖表，Q版人物海釣主題插畫，主角為附件人物圖片的Q版角色，作為配角站在畫面中央偏前方，穿著輕便漁港服裝、手持釣竿、表情開心，背景為南方澳漁港與海岸釣點導覽風格，整體畫面分成三個清楚區塊，左側呈現內埤海灘，搭配沙灘與遠投釣竿圖示，文字寫「內埤海灘：沙灘遠投，目標魚：馬鮫、鰆魚」，中間呈現南天宮旁防波堤，搭配防波堤與海面圖示，文字寫「南天宮旁防波堤：水深流緩，常釣黑鯛、鸚哥魚」，右側呈現豆腐岬，搭配礁石與磯釣圖示，文字寫「豆腐岬：知名磯釣點，魚種豐富，新手建議遠觀」，下方再加入優勢資訊區塊，文字寫「漁具店、餌料、租裝備一應俱全，還有海鮮餐廳現煮現吃」，最下方加入適合對象區塊，文字寫「適合：想一次體驗多種釣法、順便吃海鮮的人」，整體使用繁體中文，所有文字以鋼筆字體呈現，標題放在最上方且保持不變，色調以海洋藍、沙色、橘色、綠色為主，畫面乾淨、明亮、資訊清楚、圖文分明，無英文文字，專業英文縮寫除外，符合 Nano Banana Pro 生圖規則。",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 222,
    title: "川董~梗枋漁港-1",
    category: "Life",
    image: "./images/L02-Life/L008-4.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>梗枋漁港（頭城鎮）— 小而美，人少好停車：16:9橫幅資訊圖表，Q版人物海釣主題插畫，主角為附件人物圖片的Q版角色，作為配角坐在碼頭邊休息，旁邊放著釣具箱與咖啡杯，表情放鬆愉快，背景為梗枋漁港的小型碼頭與海景步道，整體畫面分成三個簡潔區塊，左側呈現漁港碼頭與近岸海面，搭配釣竿與魚影圖示，文字寫「碼頭短但水深夠，拋竿不用太遠就有魚」，中間呈現常見魚種區塊，搭配魚類圖示，文字寫「常見魚種：黑鯛、赤鯮、小石斑」，右側呈現休憩與便利設施區塊，搭配咖啡廳、步道、停車圖示，文字寫「人少好停車，旁邊有咖啡廳和海景步道，釣累了可休息看海」，下方加入氛圍文字區，文字寫「小而美、安靜舒適、適合輕鬆釣魚」，整體使用繁體中文，所有文字以鋼筆字體呈現，標題放在最上方且保持不變，色調以柔和海灰、淺木色、淡藍色為主，畫面乾淨、寧靜、資訊分區明確，無英文文字，專業英文縮寫除外，符合 Nano Banana Pro 生圖規則。",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 223,
    title: "川董~南方澳漁港-2",
    category: "Life",
    image: "./images/L02-Life/L008-5.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>南方澳漁港（蘇澳鎮）— 多樣釣點任你選：16:9橫幅資訊圖表，Q版人物海釣主題插畫，主角為附件人物圖片的Q版角色，作為配角站在畫面中央偏前方，穿著輕便漁港服裝、手持釣竿、表情開心，背景為南方澳漁港與海岸釣點導覽風格，整體畫面分成三個清楚區塊，左側呈現內埤海灘，搭配沙灘與遠投釣竿圖示，文字寫「內埤海灘：沙灘遠投，目標魚：馬鮫、鰆魚」，中間呈現南天宮旁防波堤，搭配防波堤與海面圖示，文字寫「南天宮旁防波堤：水深流緩，常釣黑鯛、鸚哥魚」，右側呈現豆腐岬，搭配礁石與磯釣圖示，文字寫「豆腐岬：知名磯釣點，魚種豐富，新手建議遠觀」，下方再加入優勢資訊區塊，文字寫「漁具店、餌料、租裝備一應俱全，還有海鮮餐廳現煮現吃」，最下方加入適合對象區塊，文字寫「適合：想一次體驗多種釣法、順便吃海鮮的人」，整體使用繁體中文，所有文字以鋼筆字體呈現，標題放在最上方且保持不變，色調以海洋藍、沙色、橘色、綠色為主，畫面乾淨、明亮、資訊清楚、圖文分明，無英文文字，專業英文縮寫除外，符合 Nano Banana Pro 生圖規則。",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 224,
    title: "川董~梗枋漁港-2",
    category: "Life",
    image: "./images/L02-Life/L008-6.webp",
    prompt:
      "<span class='yf3'>直接複製使用~</span>梗枋漁港（頭城鎮）— 小而美，人少好停車：16:9橫幅資訊圖表，Q版人物海釣主題插畫，主角為附件人物圖片的Q版角色，作為配角坐在碼頭邊休息，旁邊放著釣具箱與咖啡杯，表情放鬆愉快，背景為梗枋漁港的小型碼頭與海景步道，整體畫面分成三個簡潔區塊，左側呈現漁港碼頭與近岸海面，搭配釣竿與魚影圖示，文字寫「碼頭短但水深夠，拋竿不用太遠就有魚」，中間呈現常見魚種區塊，搭配魚類圖示，文字寫「常見魚種：黑鯛、赤鯮、小石斑」，右側呈現休憩與便利設施區塊，搭配咖啡廳、步道、停車圖示，文字寫「人少好停車，旁邊有咖啡廳和海景步道，釣累了可休息看海」，下方加入氛圍文字區，文字寫「小而美、安靜舒適、適合輕鬆釣魚」，整體使用繁體中文，所有文字以鋼筆字體呈現，標題放在最上方且保持不變，色調以柔和海灰、淺木色、淡藍色為主，畫面乾淨、寧靜、資訊分區明確，無英文文字，專業英文縮寫除外，符合 Nano Banana Pro 生圖規則。",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 225,
    title: "詣超選購",
    category: "Life",
    image: "./images/L02-Life/L009-1.webp",
    prompt:
      "<span class='yf3'>直接複製使用~手機ChatGPT Image 2.0~~~</span>幫我列出上班族適合的通勤機車規格、性能、價格",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 226,
    title: "詣超選購",
    category: "Life",
    image: "./images/L02-Life/L009-2.webp",
    prompt:
      "<span class='yf3'>直接複製使用~手機ChatGPT Image 2.0~~~</span>不要超過七萬的，再重新建議機車規格、性能和價格",
    date: "2026-07-06",
    url: "",
  },
  {
    id: 227,
    title: "老婆公司工作問題-1",
    category: "Life",
    image: "./images/L02-Life/L010-1.webp",
    prompt:
      "請你用鋼筆手繪風格製作一張資訊圖表，主題為「優秀的枷鎖」，解釋當一個人被稱讚「優秀」後，為了符合這個標籤而產生的心理困境。畫面16:9橫向構圖，背景為淺米色羊皮紙質感，所有文字（除AI等專業英文縮寫外）皆以繁體中文呈現，字體全部採用鋼筆手寫字體風格。\
標題「優秀的枷鎖」置於畫面最上方正中央，字體加粗放大。畫面主體以循環箭頭圖（Cycle Diagram）呈現心理循環，分為四個階段依序連接：「被稱讚優秀」→「努力符合期待」→「過度在意他人眼光」→「不敢言所當言、害怕突出」，每個階段搭配一個簡約鋼筆線描小圖示（如獎章、鏡子、緊閉的嘴、縮小的人影）。\
畫面中央或角落可放入附件人物Q版角色作為配角，以鋼筆線描風格呈現，表情呈現略帶壓力、若有所思的樣子，姿態微微蜷縮，象徵「不敢突出」的心理狀態，人物需與整體羊皮紙鋼筆插畫風格一致。四個階段之間以手繪箭頭連接成一個封閉迴圈，象徵這是一個難以跳脫的心理循環。\
整體排版精緻且有架構，圖示與文字均衡分布，畫面不要出現任何英文文字（除「AI」等專業縮寫外），構圖比例16:9。",
    date: "2026-07-08",
    url: "",
  },
  {
    id: 228,
    title: "老婆公司工作問題-2",
    category: "Life",
    image: "./images/L02-Life/L010-2.webp",
    prompt:
      "請你用鋼筆手繪風格製作一張資訊圖表，主題為「優秀的枷鎖」，解釋當一個人被稱讚「優秀」後，為了符合這個標籤而產生的心理困境。畫面16:9橫向構圖，背景為淺米色羊皮紙質感，所有文字（除AI等專業英文縮寫外）皆以繁體中文呈現，字體全部採用鋼筆手寫字體風格。\
標題「優秀的枷鎖」置於畫面最上方正中央，字體加粗放大。畫面主體以循環箭頭圖（Cycle Diagram）呈現心理循環，分為四個階段依序連接：「被稱讚優秀」→「努力符合期待」→「過度在意他人眼光」→「不敢言所當言、害怕突出」，每個階段搭配一個簡約鋼筆線描小圖示（如獎章、鏡子、緊閉的嘴、縮小的人影）。\
畫面中央或角落可放入附件人物Q版角色作為配角，以鋼筆線描風格呈現，表情呈現略帶壓力、若有所思的樣子，姿態微微蜷縮，象徵「不敢突出」的心理狀態，人物需與整體羊皮紙鋼筆插畫風格一致。四個階段之間以手繪箭頭連接成一個封閉迴圈，象徵這是一個難以跳脫的心理循環。\
整體排版精緻且有架構，圖示與文字均衡分布，畫面不要出現任何英文文字（除「AI」等專業縮寫外），構圖比例16:9。",
    date: "2026-07-08",
    url: "",
  },
  {
    id: 229,
    title: "校事會議-光啟應該沒有",
    category: "Life",
    image: "./images/L02-Life/L011-1.webp",
    prompt: "",
    date: "2026-07-08",
    url: "",
  },
  {
    id: 230,
    title: "五專同學聚會",
    category: "Life",
    image: "./images/L02-Life/L012-1.webp",
    prompt:
      "16:9資訊圖表風格插畫，主題為「超過四十年的五專同學再度光臨，今日中午準簡單炒飯和可樂和大家度過下午美好時光」，畫面上方置中為鋼筆字體標題，整體為溫馨手繪感資訊圖表，Q版人物風格呈現附件人物，人物圍坐餐桌開心聚會，表情溫暖懷舊。畫面分區呈現炒飯食材資訊圖：中央主視覺為一盤金黃色炒飯，周圍以圖示標示食材與比例，包括白飯（主角）、四顆雞蛋、一比一豬肉、蝦仁（好市多風格包裝簡化圖示）、洋蔥、蒜頭、蔥花、辣椒、高麗菜、胡椒。每個食材搭配簡短手寫標籤說明。右側加入「料理步驟流程小圖」：爆香→下肉→加蛋→拌飯→加入配料→調味完成。底部加入可樂與餐桌情境小插圖，營造午後輕鬆氛圍。整體配色溫暖偏橘黃與木質色調，線條柔和，字體統一為鋼筆手寫字，畫面無英文（AI除外），呈現懷舊同學情誼與家常料理的幸福感。",
    date: "2026-07-08",
    url: "",
  },
  {
    id: 231,
    title: "個人Q版~颱風防颱",
    category: "Line",
    image: "./images/L01-Line/GPT0015-1.webp",
    prompt:
      "<span class='yf2'>利用claude的/prompt-master，優化提示詞，自己寫的提示詞如下</span>~~我要用我的個人附件圖片做一個LINE貼圖，主題是關於颱風的相關表情貼，是一個4X4的貼圖",
    date: "2026-07-10",
    url: "",
  },
  {
    id: 232,
    title: "個人Q版~颱風防颱",
    category: "Line",
    image: "./images/L01-Line/GPT0015-2.webp",
    prompt:
      "<span class='yf2'>利用claude的/prompt-master，優化提示詞，自己寫的提示詞如下</span>~~我要用我的個人附件圖片做一個LINE貼圖，主題是關於颱風的相關表情貼，是一個4X4的貼圖",
    date: "2026-07-10",
    url: "",
  },
  {
    id: 233,
    title: "個人Q版-地震",
    category: "Line",
    image: "./images/L01-Line/GPT0015-3.webp",
    prompt:
      "<span class='yf3'>仿LINE貼圖</span>~~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-07-10",
    url: "",
  },
  {
    id: 234,
    title: "個人Q版-颱風",
    category: "Line",
    image: "./images/L01-Line/GPT0015-4.webp",
    prompt:
      "<span class='yf3'>仿LINE貼圖</span>~~提示詞很簡單~將墨鏡男生照片，以Q版樣式，仿照附件貼圖格式[12]個，生成圖像",
    date: "2026-07-10",
    url: "",
  },
  {
    id: 235,
    title: "日本系列-北海道道北-1N-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-1N.webp",
    prompt:
      "Please use GPT Image 2.0 model to generate image\請以附件1的Q版人物為角色基礎，設計一張日本北海道旅遊主題的4X4貼圖拼圖，共16格。人物的臉型、髮型、五官比例、服裝風格與整體Q版可愛感，請盡量維持與附件1一致，並保留原本角色的辨識度。\每一格都要呈現「旅遊中、開心出發、愉快遊玩」的感覺，動作可以是揮手、比讚、拿相機拍照、跳躍、張開雙手歡呼、看著美景驚喜、坐車出遊、輕鬆散步等，整體表情要活潑、可愛、討喜、帶有旅行的幸福感。\每一格的背景都必須清楚呈現對應地點的著名地標或代表性景色，背景不要過於複雜，但一定要讓人一眼看出是哪個景點。畫面中也要加入中文地點名稱文字，文字清楚、可讀、與整體貼圖風格一致，文字可放在下方、上方或角落，但不要遮住主角與地標。\整體風格請做成可愛Q版、貼圖感、插畫感、色彩明亮、線條乾淨、比例圓潤、表情豐富、視覺吸睛的設計。每一格都要有白邊或留白，方便之後裁切成獨立貼圖。背景可以是簡化插畫風，不要做成照片寫實感。請輸出為適合貼圖使用的高解析度圖片，並保持畫面整潔、統一、可愛。\ 16個地點請依序加入以下主題：\富良野薰衣草田：夏季盛開的紫色薰衣草花海，北海道代表性美景。\美瑛拼布之路：丘陵農田如拼布般多彩，風景優美。\青池：夢幻藍色池水，帶有神秘感。\四季彩之丘：色彩繽紛的花田，像彩色地毯一樣。\旭山動物園：可愛動物與特色展示，充滿親近感。\大雪山國立公園：壯麗山景與自然生態。\層雲峽：峽谷、溫泉、紅葉景色。\旭岳：北海道高山主峰，適合登山與雪景。\天人峽：瀑布與溫泉的自然景觀。\宗谷岬：日本本土最北端地標，臨海景色。\白色道路：筆直延伸的知名兜風道路。\利尻富士：形狀像富士山的標誌性山峰。\禮文島：高山花卉與海島風景。\雲海平台：壯觀雲海景觀與高空視角。\美瑛聖誕樹：田野中孤獨的一棵樹，冬季雪景。\國稀釀酒廠：歷史悠久的酒廠建築與酒文化氛圍。\請讓每一格都像一張獨立的旅行貼圖，角色表情要生動，動作要有變化，背景地標要明確，整體感覺要像一套可直接使用的北海道旅行紀念貼圖。請加入清楚的中文地名標示，例如「富良野薰衣草田」、「青池」、「宗谷岬」等，文字請保持端正易讀，不要變形或糊掉。\負面提示詞不要照片寫實風，不要模糊，不要低解析度，不要文字錯亂，不要英文亂碼，不要背景雜亂，不要多餘人物，不要手腳比例錯誤，不要臉部崩壞，不要裁切到角色，不要水印，不要標誌，不要過暗，不要風格不一致。",
    date: "2026-07-10",
    url: "",
  },
  {
    id: 236,
    title: "日本系列-北海道道北-1N-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-1NX.webp",
    prompt:
      "Please use GPT Image 2.0 model to generate image\請以附件1的Q版人物為角色基礎，設計一張日本北海道旅遊主題的4X4貼圖拼圖，共16格。人物的臉型、髮型、五官比例、服裝風格與整體Q版可愛感，請盡量維持與附件1一致，並保留原本角色的辨識度。\每一格都要呈現「旅遊中、開心出發、愉快遊玩」的感覺，動作可以是揮手、比讚、拿相機拍照、跳躍、張開雙手歡呼、看著美景驚喜、坐車出遊、輕鬆散步等，整體表情要活潑、可愛、討喜、帶有旅行的幸福感。\每一格的背景都必須清楚呈現對應地點的著名地標或代表性景色，背景不要過於複雜，但一定要讓人一眼看出是哪個景點。畫面中也要加入中文地點名稱文字，文字清楚、可讀、與整體貼圖風格一致，文字可放在下方、上方或角落，但不要遮住主角與地標。\整體風格請做成可愛Q版、貼圖感、插畫感、色彩明亮、線條乾淨、比例圓潤、表情豐富、視覺吸睛的設計。每一格都要有白邊或留白，方便之後裁切成獨立貼圖。背景可以是簡化插畫風，不要做成照片寫實感。請輸出為適合貼圖使用的高解析度圖片，並保持畫面整潔、統一、可愛。\ 16個地點請依序加入以下主題：\富良野薰衣草田：夏季盛開的紫色薰衣草花海，北海道代表性美景。\美瑛拼布之路：丘陵農田如拼布般多彩，風景優美。\青池：夢幻藍色池水，帶有神秘感。\四季彩之丘：色彩繽紛的花田，像彩色地毯一樣。\旭山動物園：可愛動物與特色展示，充滿親近感。\大雪山國立公園：壯麗山景與自然生態。\層雲峽：峽谷、溫泉、紅葉景色。\旭岳：北海道高山主峰，適合登山與雪景。\天人峽：瀑布與溫泉的自然景觀。\宗谷岬：日本本土最北端地標，臨海景色。\白色道路：筆直延伸的知名兜風道路。\利尻富士：形狀像富士山的標誌性山峰。\禮文島：高山花卉與海島風景。\雲海平台：壯觀雲海景觀與高空視角。\美瑛聖誕樹：田野中孤獨的一棵樹，冬季雪景。\國稀釀酒廠：歷史悠久的酒廠建築與酒文化氛圍。\請讓每一格都像一張獨立的旅行貼圖，角色表情要生動，動作要有變化，背景地標要明確，整體感覺要像一套可直接使用的北海道旅行紀念貼圖。請加入清楚的中文地名標示，例如「富良野薰衣草田」、「青池」、「宗谷岬」等，文字請保持端正易讀，不要變形或糊掉。\負面提示詞不要照片寫實風，不要模糊，不要低解析度，不要文字錯亂，不要英文亂碼，不要背景雜亂，不要多餘人物，不要手腳比例錯誤，不要臉部崩壞，不要裁切到角色，不要水印，不要標誌，不要過暗，不要風格不一致。",
    date: "2026-07-10",
    url: "",
  },
  {
    id: 237,
    title: "日本系列-北海道道央-1W-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-1W.webp",
    prompt:
      "請以附件1圖片中的Q版角色為基礎，設計一張日本北海道旅遊主題的4X5貼圖拼圖，共20格。角色的臉型、髮型、五官比例、服裝風格、整體Q版可愛感，請盡量維持與附件1一致，並保留角色的辨識度與可愛感。\每一格都要呈現「旅遊開心愉快出發」的氛圍，角色動作可以是揮手、比讚、拿行李、拿相機拍照、雙手張開歡呼、跳躍、開心出門、看風景驚喜、輕鬆散步、坐車出遊等，表情要活潑、生動、討喜，整體感覺要像一套可直接使用的旅遊貼圖。\每一格的背景都必須明確呈現對應地點的著名地標或代表性景色，背景可以是簡化插畫風，但一定要讓人看得出是哪個景點。每一格都要顯示中文地點名稱文字，文字需清楚、易讀、端正，並且和整體貼圖風格一致，文字可以放在下方、上方或角落，但不要遮住主角與主要地標。\整體風格請做成可愛Q版、貼圖感強、插畫風、色彩明亮、線條乾淨、表情豐富、畫面整潔、視覺吸睛的設計。每一格都要保留白邊或留白，方便之後裁切成單張貼圖。背景不要做得太複雜，不要寫實照片感，請以乾淨的旅遊插畫表現。請輸出高解析度圖片，適合貼圖使用。20個地點請依序加入以下主題：\大通公園：札幌市中心地標，冬季札幌雪祭主要會場。\札幌電視塔：位於大通公園內，可從展望台俯瞰札幌市景。\北海道神宮：位於圓山公園內，是北海道代表性神社。\二條市場：札幌的廚房，可品嘗新鮮海鮮。\狸小路商店街：札幌知名拱廊商店街，適合買伴手禮。\時計台：札幌市標誌性歷史建築。\北海道大學：校園廣闊，銀杏並木道是秋季名景。\小樽運河：浪漫運河與復古倉庫群，是小樽代表景點。\小樽音樂盒堂：懷舊氛圍濃厚的音樂盒專賣店。\堺町通：小樽主要商店街，玻璃工藝與甜點店林立。\登別地獄谷：火山地熱景觀獨特，煙霧與岩地特色明顯。\登別溫泉：北海道代表性溫泉鄉之一。\洞爺湖：美麗的火山口湖，可見湖景與遊覽船。\昭和新山：仍在成長的活火山，景觀特殊。\定山溪溫泉：札幌近郊著名溫泉與賞楓勝地。\豐平峽大壩：壯觀水壩景觀，秋季紅葉特別美。\支笏湖：湖水清澈、風景優美的不凍湖。\千歲市：新千歲機場所在地，可加入機場與主題樂園元素。\二世古：世界級滑雪勝地，也適合夏季登山與騎行。\羊蹄山：形似富士山，是二世古地區的象徵。\請讓每一格都像一張獨立的小貼圖，角色表情要豐富、動作要有變化、背景地標要明確、文字要清楚可讀，整體感覺要像一套北海道旅遊紀念貼圖。請以高解析度、乾淨排版、可愛插畫風完成，並保持整體風格一致。\負面提示詞\
不要照片寫實風，不要模糊，不要低解析度，不要文字錯亂，不要英文亂碼，不要背景雜亂，不要多餘人物，不要手腳比例錯誤，不要臉部崩壞，不要裁切到角色，不要水印，不要標誌，不要過暗，不要風格不一致，不要畫面太擁擠。",
    date: "2026-07-10",
    url: "",
  },
  {
    id: 238,
    title: "日本系列-北海道道央-1W-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-1WX.webp",
    prompt:
      "請以附件1圖片中的Q版角色為基礎，設計一張日本北海道旅遊主題的4X5貼圖拼圖，共20格。角色的臉型、髮型、五官比例、服裝風格、整體Q版可愛感，請盡量維持與附件1一致，並保留角色的辨識度與可愛感。\每一格都要呈現「旅遊開心愉快出發」的氛圍，角色動作可以是揮手、比讚、拿行李、拿相機拍照、雙手張開歡呼、跳躍、開心出門、看風景驚喜、輕鬆散步、坐車出遊等，表情要活潑、生動、討喜，整體感覺要像一套可直接使用的旅遊貼圖。\每一格的背景都必須明確呈現對應地點的著名地標或代表性景色，背景可以是簡化插畫風，但一定要讓人看得出是哪個景點。每一格都要顯示中文地點名稱文字，文字需清楚、易讀、端正，並且和整體貼圖風格一致，文字可以放在下方、上方或角落，但不要遮住主角與主要地標。\整體風格請做成可愛Q版、貼圖感強、插畫風、色彩明亮、線條乾淨、表情豐富、畫面整潔、視覺吸睛的設計。每一格都要保留白邊或留白，方便之後裁切成單張貼圖。背景不要做得太複雜，不要寫實照片感，請以乾淨的旅遊插畫表現。請輸出高解析度圖片，適合貼圖使用。20個地點請依序加入以下主題：\大通公園：札幌市中心地標，冬季札幌雪祭主要會場。\札幌電視塔：位於大通公園內，可從展望台俯瞰札幌市景。\北海道神宮：位於圓山公園內，是北海道代表性神社。\二條市場：札幌的廚房，可品嘗新鮮海鮮。\狸小路商店街：札幌知名拱廊商店街，適合買伴手禮。\時計台：札幌市標誌性歷史建築。\北海道大學：校園廣闊，銀杏並木道是秋季名景。\小樽運河：浪漫運河與復古倉庫群，是小樽代表景點。\小樽音樂盒堂：懷舊氛圍濃厚的音樂盒專賣店。\堺町通：小樽主要商店街，玻璃工藝與甜點店林立。\登別地獄谷：火山地熱景觀獨特，煙霧與岩地特色明顯。\登別溫泉：北海道代表性溫泉鄉之一。\洞爺湖：美麗的火山口湖，可見湖景與遊覽船。\昭和新山：仍在成長的活火山，景觀特殊。\定山溪溫泉：札幌近郊著名溫泉與賞楓勝地。\豐平峽大壩：壯觀水壩景觀，秋季紅葉特別美。\支笏湖：湖水清澈、風景優美的不凍湖。\千歲市：新千歲機場所在地，可加入機場與主題樂園元素。\二世古：世界級滑雪勝地，也適合夏季登山與騎行。\羊蹄山：形似富士山，是二世古地區的象徵。\請讓每一格都像一張獨立的小貼圖，角色表情要豐富、動作要有變化、背景地標要明確、文字要清楚可讀，整體感覺要像一套北海道旅遊紀念貼圖。請以高解析度、乾淨排版、可愛插畫風完成，並保持整體風格一致。\負面提示詞\
不要照片寫實風，不要模糊，不要低解析度，不要文字錯亂，不要英文亂碼，不要背景雜亂，不要多餘人物，不要手腳比例錯誤，不要臉部崩壞，不要裁切到角色，不要水印，不要標誌，不要過暗，不要風格不一致，不要畫面太擁擠。",
    date: "2026-07-10",
    url: "",
  },
  {
    id: 239,
    title: "日本系列-北海道道南-1S-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-1S.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：\函館山：百萬夜景與纜車登頂視角。\五稜郭：星形城郭與五稜郭塔俯瞰景色。\函館元町：西洋建築、坂道與異國情調街景。\金森紅磚倉庫：港邊紅磚倉庫群與商場餐廳氛圍。\函館朝市：海鮮丼、帝王蟹與熱鬧市場感。\大沼國定公園：湖泊、島嶼與駒岳遠景。\湯之川溫泉：海景溫泉與放鬆療癒氛圍。\香雪園：日式庭園與秋季賞楓景色。\道南漁火鐵道：沿海鐵道與津輕海峽景觀。\森町：花枝飯與噴火灣海產特色。\松前城：城堡與春季櫻花盛開景象。\惠山：火山山體與眺望津輕海峽。\函館市熱帶植物園：冬季猴子泡溫泉的可愛畫面。\特拉皮斯汀修道院：寧靜優美的修道院建築與庭園。\八幡坂：代表性坡道直通海邊的經典視角。\北斗市：草莓採摘與農場樂趣。\\",
    date: "2026-07-10",
    url: "",
  },
  {
    id: 240,
    title: "日本系列-北海道道南-1S-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-1SX.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：\函館山：百萬夜景與纜車登頂視角。\五稜郭：星形城郭與五稜郭塔俯瞰景色。\函館元町：西洋建築、坂道與異國情調街景。\金森紅磚倉庫：港邊紅磚倉庫群與商場餐廳氛圍。\函館朝市：海鮮丼、帝王蟹與熱鬧市場感。\大沼國定公園：湖泊、島嶼與駒岳遠景。\湯之川溫泉：海景溫泉與放鬆療癒氛圍。\香雪園：日式庭園與秋季賞楓景色。\道南漁火鐵道：沿海鐵道與津輕海峽景觀。\森町：花枝飯與噴火灣海產特色。\松前城：城堡與春季櫻花盛開景象。\惠山：火山山體與眺望津輕海峽。\函館市熱帶植物園：冬季猴子泡溫泉的可愛畫面。\特拉皮斯汀修道院：寧靜優美的修道院建築與庭園。\木古內町：北海道新幹線終點站與轉乘道南漁火鐵道的場景。\上磯郡：自然景觀、海岸與歷史遺跡的代表性畫面。\\",
    date: "2026-07-10",
    url: "",
  },
  {
    id: 241,
    title: "日本系列-北海道道東-1E-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-1E.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：\知床半島：原始森林與野生動物的世界自然遺產景色。\知床五湖：五個湖泊與森林步道的徒步景觀。\羅臼町：海面上的鯨魚與海鳥觀賞場景。\網走流冰：鄂霍次克海破冰船與流冰景象。\摩周湖：透明度極高的藍色火山口湖。\神之子池：清澈湛藍的小池水景。\阿寒湖：綠球藻與愛努文化風情湖景。\屈斜路湖：遼闊火山口湖與冬季天鵝畫面。\弟子屈町：道東旅遊樞紐的城鎮氛圍。\釧路濕原國立公園：廣闊濕地與丹頂鶴棲息景象。\塘路湖：湖泊與獨木舟活動場景。\霧多布濕原：根室濕地保護區的自然景色。\釧路市：霧都氛圍與港灣城市景觀。\根室市：日本最東端城市的代表景色。\納沙布岬：日本本土最東端與曙光美景。\厚岸町：牡蠣養殖與新鮮海產的漁港風情。",
    date: "2026-07-10",
    url: "",
  },
  {
    id: 242,
    title: "日本系列-北海道道東-1E-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-1EX.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：\知床半島：原始森林與野生動物的世界自然遺產景色。\知床五湖：五個湖泊與森林步道的徒步景觀。\羅臼町：海面上的鯨魚與海鳥觀賞場景。\網走流冰：鄂霍次克海破冰船與流冰景象。\摩周湖：透明度極高的藍色火山口湖。\神之子池：清澈湛藍的小池水景。\阿寒湖：綠球藻與愛努文化風情湖景。\屈斜路湖：遼闊火山口湖與冬季天鵝畫面。\弟子屈町：道東旅遊樞紐的城鎮氛圍。\釧路濕原國立公園：廣闊濕地與丹頂鶴棲息景象。\塘路湖：湖泊與獨木舟活動場景。\霧多布濕原：根室濕地保護區的自然景色。\釧路市：霧都氛圍與港灣城市景觀。\十勝牧場：白樺林蔭大道與廣闊牧場風光。\開陽台：360度眺望知床半島與野付半島的展望景色。\野付半島：獨特沙嘴地形與冷杉枯木林景觀。",
    date: "2026-07-10",
    url: "",
  },
  {
    id: 243,
    title: "日本系列-東北地方~青森縣-2-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-2.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1白神山地 (世界自然遺產，擁有世界上最大的山毛櫸原始林)\ 2十二湖（青池） (白神山地內的33座湖沼群，其中青池的藍色水面如夢似幻)\ 3十和田湖 (美麗的破火山口湖，湖面如鏡般倒映天空與群山)\ 4奧入瀨溪流 (全長約14公里的溪流，沿途瀑布與急流交錯，是東北最具代表性的自然景觀之一)\ 5蔦沼 (秋季清晨的「朝燒」絕景，湖面如鏡般倒映染紅的山林)\ 6城倉大橋 (日本最長的拱橋之一，可眺望八甲田山的壯麗景色)\ 7弘前公園（弘前城） (日本百名城之一，春季約2,600株櫻花盛開，是東北賞櫻第一名所)\ 8睡魔之家 WA・RASSE (位於青森站旁，可近距離欣賞睡魔祭的花燈，感受祭典的熱鬧氛圍)\ 9青森縣立美術館 (展示青森出身藝術家奈良美智的代表作「青森犬」)\ 10八甲田纜車 (10分鐘即可抵達山頂，四季景色各異，冬季的樹冰奇景尤為壯觀)\ 11酸湯溫泉 (八甲田山中的秘湯，以混浴大浴場聞名)\ 12淺蟲溫泉 (青森市郊的溫泉鄉，可一邊泡湯一邊欣賞陸奧灣的海景)\ 13三內丸山遺跡 (日本最大規模的繩文時代聚落遺跡，已被登錄為世界文化遺產)\ 14恐山 (日本三大靈場之一，火山地熱景觀獨特，被稱為「死者之山」)\ 15佛浦 (下北半島的海岸絕景，奇岩怪石林立，被譽為「日本海的阿爾卑斯」)\ 16龍飛崎 (津輕半島最北端，可眺望津輕海峽與北海道的景色)\ 17高山稻荷神社 (擁有千本鳥居的絕景神社，是青森縣的隱藏版景點)\ 18八食中心 (八戶市的海鮮市場，可品嚐新鮮漁獲與烤海鮮)",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 244,
    title: "日本系列-東北地方~青森縣-2-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-2X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1白神山地 (世界自然遺產，擁有世界上最大的山毛櫸原始林)\ 2十二湖（青池） (白神山地內的33座湖沼群，其中青池的藍色水面如夢似幻)\ 3十和田湖 (美麗的破火山口湖，湖面如鏡般倒映天空與群山)\ 4奧入瀨溪流 (全長約14公里的溪流，沿途瀑布與急流交錯，是東北最具代表性的自然景觀之一)\ 5蔦沼 (秋季清晨的「朝燒」絕景，湖面如鏡般倒映染紅的山林)\ 6城倉大橋 (日本最長的拱橋之一，可眺望八甲田山的壯麗景色)\ 7弘前公園（弘前城） (日本百名城之一，春季約2,600株櫻花盛開，是東北賞櫻第一名所)\ 8睡魔之家 WA・RASSE (位於青森站旁，可近距離欣賞睡魔祭的花燈，感受祭典的熱鬧氛圍)\ 9青森縣立美術館 (展示青森出身藝術家奈良美智的代表作「青森犬」)\ 10八甲田纜車 (10分鐘即可抵達山頂，四季景色各異，冬季的樹冰奇景尤為壯觀)\ 11酸湯溫泉 (八甲田山中的秘湯，以混浴大浴場聞名)\ 12淺蟲溫泉 (青森市郊的溫泉鄉，可一邊泡湯一邊欣賞陸奧灣的海景)\ 13三內丸山遺跡 (日本最大規模的繩文時代聚落遺跡，已被登錄為世界文化遺產)\ 14恐山 (日本三大靈場之一，火山地熱景觀獨特，被稱為「死者之山」)\ 15佛浦 (下北半島的海岸絕景，奇岩怪石林立，被譽為「日本海的阿爾卑斯」)\ 16龍飛崎 (津輕半島最北端，可眺望津輕海峽與北海道的景色)\ 17高山稻荷神社 (擁有千本鳥居的絕景神社，是青森縣的隱藏版景點)\ 18八食中心 (八戶市的海鮮市場，可品嚐新鮮漁獲與烤海鮮)",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 245,
    title: "日本系列-東北地方~岩手縣-3-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-3.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1中尊寺 (位於平泉的世界文化遺產，寺內的金色堂以金箔裝飾，是平安時代佛教美術的寶庫)\ 2毛越寺 (平泉的世界遺產之一，平安時代淨土庭園的代表作)\ 3江刺藤原之鄉 (重現平安時代歷史的大型主題園區，可體驗古代文化)\ 4猊鼻溪 (搭乘船夫撐篙的平底船順流而下，欣賞溪谷的奇岩美景，秋季紅葉尤其迷人)\ 5嚴美溪 (被譽為「日本第一溪流美」，奇岩與急流交織的溪谷景觀令人讚嘆)\ 6龍泉洞 (日本三大鐘乳洞之一，擁有美麗的地底湖，湖水呈現神秘的藍色)\ 7安家洞 (岩手三大鐘乳洞之一，洞內空間廣闊如迷宮)\ 8瀧觀洞 (北上山地的鐘乳洞之一，洞內有震撼力十足的地下瀑布)\ 9淨土之濱 (三陸海岸的代表性景點，白色岩石與清澈海水形成如極樂淨土般的美景)\ 10三陸海岸 (擁有里亞斯式海岸的壯麗海景，可搭乘三陸鐵道沿線欣賞)\ 11盛岡城跡公園（岩手公園） (盛岡城的遺址，春季約250棵櫻花盛開，是市區的賞櫻名所)\ 12北上展勝地 (與弘前、角館並列「東北三大賞櫻名所」，櫻花隧道與北上川相映成趣)\ 13小岩井農場 (日本最大的民營農場，佔地廣闊，以岩手山為背景的牧場風光十分療癒)\ 14八幡平 (夏季是登山避暑勝地，春季的「雪之迴廊」與夏季的「龍眼沼」絕景令人驚艷)\ 15宮澤賢治紀念館 (紀念《銀河鐵道之夜》作者宮澤賢治的博物館，展示其文學與科學成就)\ 16宮澤賢治童話村 (以宮澤賢治作品世界為主題的公園，充滿童話氛圍)\ 17花卷溫泉 (岩手縣代表性的溫泉鄉，也是宮澤賢治的故鄉)\ 18盛岡八幡宮 (縣內第一大神社，朱紅色的社殿莊嚴氣派)\ ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 246,
    title: "日本系列-東北地方~岩手縣-3-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-3X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1中尊寺 (位於平泉的世界文化遺產，寺內的金色堂以金箔裝飾，是平安時代佛教美術的寶庫)\ 2毛越寺 (平泉的世界遺產之一，平安時代淨土庭園的代表作)\ 3江刺藤原之鄉 (重現平安時代歷史的大型主題園區，可體驗古代文化)\ 4猊鼻溪 (搭乘船夫撐篙的平底船順流而下，欣賞溪谷的奇岩美景，秋季紅葉尤其迷人)\ 5嚴美溪 (被譽為「日本第一溪流美」，奇岩與急流交織的溪谷景觀令人讚嘆)\ 6龍泉洞 (日本三大鐘乳洞之一，擁有美麗的地底湖，湖水呈現神秘的藍色)\ 7安家洞 (岩手三大鐘乳洞之一，洞內空間廣闊如迷宮)\ 8瀧觀洞 (北上山地的鐘乳洞之一，洞內有震撼力十足的地下瀑布)\ 9淨土之濱 (三陸海岸的代表性景點，白色岩石與清澈海水形成如極樂淨土般的美景)\ 10三陸海岸 (擁有里亞斯式海岸的壯麗海景，可搭乘三陸鐵道沿線欣賞)\ 11盛岡城跡公園（岩手公園） (盛岡城的遺址，春季約250棵櫻花盛開，是市區的賞櫻名所)\ 12北上展勝地 (與弘前、角館並列「東北三大賞櫻名所」，櫻花隧道與北上川相映成趣)\ 13小岩井農場 (日本最大的民營農場，佔地廣闊，以岩手山為背景的牧場風光十分療癒)\ 14八幡平 (夏季是登山避暑勝地，春季的「雪之迴廊」與夏季的「龍眼沼」絕景令人驚艷)\ 15宮澤賢治紀念館 (紀念《銀河鐵道之夜》作者宮澤賢治的博物館，展示其文學與科學成就)\ 16宮澤賢治童話村 (以宮澤賢治作品世界為主題的公園，充滿童話氛圍)\ 17花卷溫泉 (岩手縣代表性的溫泉鄉，也是宮澤賢治的故鄉)\ 18盛岡八幡宮 (縣內第一大神社，朱紅色的社殿莊嚴氣派)\ ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 247,
    title: "日本系列-東北地方~宮城縣-4-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-4.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1中尊寺 (位於平泉的世界文化遺產，寺內的金色堂以金箔裝飾，是平安時代佛教美術的寶庫) 2毛越寺 (平泉的世界遺產之一，平安時代淨土庭園的代表作) 3江刺藤原之鄉 (重現平安時代歷史的大型主題園區，可體驗古代文化) 4猊鼻溪 (搭乘船夫撐篙的平底船順流而下，欣賞溪谷的奇岩美景，秋季紅葉尤其迷人) 5嚴美溪 (被譽為「日本第一溪流美」，奇岩與急流交織的溪谷景觀令人讚嘆) 6龍泉洞 (日本三大鐘乳洞之一，擁有美麗的地底湖，湖水呈現神秘的藍色) 7安家洞 (岩手三大鐘乳洞之一，洞內空間廣闊如迷宮) 8瀧觀洞 (北上山地的鐘乳洞之一，洞內有震撼力十足的地下瀑布) 9淨土之濱 (三陸海岸的代表性景點，白色岩石與清澈海水形成如極樂淨土般的美景) 10三陸海岸 (擁有里亞斯式海岸的壯麗海景，可搭乘三陸鐵道沿線欣賞) 11盛岡城跡公園（岩手公園） (盛岡城的遺址，春季約250棵櫻花盛開，是市區的賞櫻名所) 12北上展勝地 (與弘前、角館並列「東北三大賞櫻名所」，櫻花隧道與北上川相映成趣) 13小岩井農場 (日本最大的民營農場，佔地廣闊，以岩手山為背景的牧場風光十分療癒) 14八幡平 (夏季是登山避暑勝地，春季的「雪之迴廊」與夏季的「龍眼沼」絕景令人驚艷) 15宮澤賢治紀念館 (紀念《銀河鐵道之夜》作者宮澤賢治的博物館，展示其文學與科學成就) 16宮澤賢治童話村 (以宮澤賢治作品世界為主題的公園，充滿童話氛圍) 17花卷溫泉 (岩手縣代表性的溫泉鄉，也是宮澤賢治的故鄉) 18盛岡八幡宮 (縣內第一大神社，朱紅色的社殿莊嚴氣派)",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 248,
    title: "日本系列-東北地方~宮城縣-4-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-4X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1中尊寺 (位於平泉的世界文化遺產，寺內的金色堂以金箔裝飾，是平安時代佛教美術的寶庫) 2毛越寺 (平泉的世界遺產之一，平安時代淨土庭園的代表作) 3江刺藤原之鄉 (重現平安時代歷史的大型主題園區，可體驗古代文化) 4猊鼻溪 (搭乘船夫撐篙的平底船順流而下，欣賞溪谷的奇岩美景，秋季紅葉尤其迷人) 5嚴美溪 (被譽為「日本第一溪流美」，奇岩與急流交織的溪谷景觀令人讚嘆) 6龍泉洞 (日本三大鐘乳洞之一，擁有美麗的地底湖，湖水呈現神秘的藍色) 7安家洞 (岩手三大鐘乳洞之一，洞內空間廣闊如迷宮) 8瀧觀洞 (北上山地的鐘乳洞之一，洞內有震撼力十足的地下瀑布) 9淨土之濱 (三陸海岸的代表性景點，白色岩石與清澈海水形成如極樂淨土般的美景) 10三陸海岸 (擁有里亞斯式海岸的壯麗海景，可搭乘三陸鐵道沿線欣賞) 11盛岡城跡公園（岩手公園） (盛岡城的遺址，春季約250棵櫻花盛開，是市區的賞櫻名所) 12北上展勝地 (與弘前、角館並列「東北三大賞櫻名所」，櫻花隧道與北上川相映成趣) 13小岩井農場 (日本最大的民營農場，佔地廣闊，以岩手山為背景的牧場風光十分療癒) 14八幡平 (夏季是登山避暑勝地，春季的「雪之迴廊」與夏季的「龍眼沼」絕景令人驚艷) 15宮澤賢治紀念館 (紀念《銀河鐵道之夜》作者宮澤賢治的博物館，展示其文學與科學成就) 16宮澤賢治童話村 (以宮澤賢治作品世界為主題的公園，充滿童話氛圍) 17花卷溫泉 (岩手縣代表性的溫泉鄉，也是宮澤賢治的故鄉) 18盛岡八幡宮 (縣內第一大神社，朱紅色的社殿莊嚴氣派)",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 249,
    title: "日本系列-東北地方~秋田縣-5-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-5.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1角館武家屋敷 (被稱為「陸奧小京都」，保存完好的江戶時代武士宅邸群，春季櫻花尤其美麗)2千秋公園 (秋田城遺址改建的公園，春季櫻花與秋季紅葉皆美)3田澤湖 (日本最深的湖泊，湖水透明度極高，湖畔的金色辰子雕像為代表性景觀)4乳頭溫泉鄉 (秋田代表性的秘湯，擁有7座不同泉質的溫泉，可購買「溫泉巡迴帖」一次體驗)5後生掛溫泉 (八幡平地區的秘湯，以天然泥湯聞名)6川原毛地獄 (秋田縣的火山地熱景觀，與登別地獄谷相似)7男鹿半島 (以「生剝鬼（Namahage）」文化聞名，寒風山迴轉展望台可眺望日本海)8仁賀保高原 (可360度眺望鳥海山與日本海的絕景展望台)9象潟・九十九島 (世界罕見的步行環島景點，曾是松尾芭蕉《奧之細道》的造訪地)10八郎潟 (日本第二大湖，湖畔的夕陽美景十分動人)11大曲花火大會 (日本三大花火大會之一，每年8月最後一個週六舉辦，花火職人齊聚競技)12缺13白神山地 (世界自然遺產，秋田縣側亦有入口，可探索原始山毛櫸林)14鳥海山 (秋田縣與山形縣交界處的活火山，被稱為「出羽富士」，登山健行的熱門地點)15秋田美術館 (由建築大師安藤忠雄設計，建築本身即為藝術品)16鈴木酒造店 (百年歷史的釀酒廠，可參觀清酒釀造過程並試飲)17秋田竿燈祭 (東北三大祭之一，每年8月3日至6日舉辦，以撐起竿燈祈求五穀豐收)",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 250,
    title: "日本系列-東北地方~秋田縣-5-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-5X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1角館武家屋敷 (被稱為「陸奧小京都」，保存完好的江戶時代武士宅邸群，春季櫻花尤其美麗)2千秋公園 (秋田城遺址改建的公園，春季櫻花與秋季紅葉皆美)3田澤湖 (日本最深的湖泊，湖水透明度極高，湖畔的金色辰子雕像為代表性景觀)4乳頭溫泉鄉 (秋田代表性的秘湯，擁有7座不同泉質的溫泉，可購買「溫泉巡迴帖」一次體驗)5後生掛溫泉 (八幡平地區的秘湯，以天然泥湯聞名)6川原毛地獄 (秋田縣的火山地熱景觀，與登別地獄谷相似)7男鹿半島 (以「生剝鬼（Namahage）」文化聞名，寒風山迴轉展望台可眺望日本海)8仁賀保高原 (可360度眺望鳥海山與日本海的絕景展望台)9象潟・九十九島 (世界罕見的步行環島景點，曾是松尾芭蕉《奧之細道》的造訪地)10八郎潟 (日本第二大湖，湖畔的夕陽美景十分動人)11大曲花火大會 (日本三大花火大會之一，每年8月最後一個週六舉辦，花火職人齊聚競技)12缺13白神山地 (世界自然遺產，秋田縣側亦有入口，可探索原始山毛櫸林)14鳥海山 (秋田縣與山形縣交界處的活火山，被稱為「出羽富士」，登山健行的熱門地點)15秋田美術館 (由建築大師安藤忠雄設計，建築本身即為藝術品)16鈴木酒造店 (百年歷史的釀酒廠，可參觀清酒釀造過程並試飲)17秋田竿燈祭 (東北三大祭之一，每年8月3日至6日舉辦，以撐起竿燈祈求五穀豐收)",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 251,
    title: "日本系列-東北地方~山形縣-6-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-6.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1藏王樹冰 (冬季藏王連峰上的「雪怪」奇景，是世界罕見的自然現象，可搭乘纜車欣賞)2藏王溫泉滑雪場 (東北知名的滑雪勝地，冬季可同時享受滑雪與樹冰美景)3藏王溫泉(藏王溫泉街)4銀山溫泉 (大正浪漫風格的溫泉街，復古木造建築沿河而立，冬季雪景如童話世界)5立石寺（山寺） (松尾芭蕉《奧之細道》中造訪的名寺，登上1015級石階可眺望絕景)6最上川舟遊 (搭乘傳統木舟順流而下，欣賞最上川兩岸的四季美景)7山居倉庫 (酒田市的歷史倉庫群，白牆黑瓦的景觀充滿懷舊風情)8日和山公園 (酒田市的展望公園，可眺望日本海與最上川的景色)9鶴岡市立加茂水族館 (以水母展示聞名，擁有世界最大直徑5公尺的「水母夢幻劇場」)10致道博物館 (鶴岡市的博物館，展示莊內地區的歷史與文化)11烏帽子山八幡宮 (日本櫻花百選之一，擁有全日本最大的無接縫石鳥居)12文翔館 (山形市的文藝復興風格建築，為重要文化財，曾是縣廳與縣議會的所在地)13霞城公園 (山形城遺址改建的公園，約1,500株櫻花盛開時是市區的賞櫻名所)14山形美術館 (收藏畢卡索、莫內等西方藝術作品，以及江戶時期的日本畫作)15羽黑山五重塔 (出羽三山之一的羽黑山上的國寶五重塔，被原始森林環繞)16丸池樣 (山形縣的湧水名所，水質清澈，被選為日本名水百選之一)17天童溫泉 (山形縣的溫泉鄉，以將棋棋子產地聞名)18高畠葡萄酒廠 (山形縣的葡萄酒知名產地，可參觀釀造過程與試飲)",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 252,
    title: "日本系列-東北地方~山形縣-6-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-6X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1藏王樹冰 (冬季藏王連峰上的「雪怪」奇景，是世界罕見的自然現象，可搭乘纜車欣賞)2藏王溫泉滑雪場 (東北知名的滑雪勝地，冬季可同時享受滑雪與樹冰美景)3藏王溫泉(藏王溫泉街)4銀山溫泉 (大正浪漫風格的溫泉街，復古木造建築沿河而立，冬季雪景如童話世界)5立石寺（山寺） (松尾芭蕉《奧之細道》中造訪的名寺，登上1015級石階可眺望絕景)6最上川舟遊 (搭乘傳統木舟順流而下，欣賞最上川兩岸的四季美景)7山居倉庫 (酒田市的歷史倉庫群，白牆黑瓦的景觀充滿懷舊風情)8日和山公園 (酒田市的展望公園，可眺望日本海與最上川的景色)9鶴岡市立加茂水族館 (以水母展示聞名，擁有世界最大直徑5公尺的「水母夢幻劇場」)10致道博物館 (鶴岡市的博物館，展示莊內地區的歷史與文化)11烏帽子山八幡宮 (日本櫻花百選之一，擁有全日本最大的無接縫石鳥居)12文翔館 (山形市的文藝復興風格建築，為重要文化財，曾是縣廳與縣議會的所在地)13霞城公園 (山形城遺址改建的公園，約1,500株櫻花盛開時是市區的賞櫻名所)14山形美術館 (收藏畢卡索、莫內等西方藝術作品，以及江戶時期的日本畫作)15羽黑山五重塔 (出羽三山之一的羽黑山上的國寶五重塔，被原始森林環繞)16丸池樣 (山形縣的湧水名所，水質清澈，被選為日本名水百選之一)17天童溫泉 (山形縣的溫泉鄉，以將棋棋子產地聞名)18高畠葡萄酒廠 (山形縣的葡萄酒知名產地，可參觀釀造過程與試飲)",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 253,
    title: "日本系列-東北地方~福島縣-7-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-7.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1會津若松城（鶴城） (日本唯一的紅瓦天守閣，春季約1,000株櫻花盛開，是福島最具代表性的歷史地標)  2飯盛山 (會津戰爭的舞台之一，螺旋堂（會津さざえ堂）的獨特建築值得一看)  3會津武家屋敷 (重現江戶時代武士宅邸的主題園區，可體驗會津的歷史文化)  4東山溫泉 (會津若松市郊的溫泉鄉，歷史超過1,300年)  5大內宿 (保留江戶時代宿場町風貌的茅草屋建築群，被列為重要傳統建造物群保存地區)  6五色沼 (裏磐梯的湖沼群，湖水顏色會隨氣候與角度變化，是福島最著名的自然絕景)  7豬苗代湖 (日本第四大湖，湖水透明度極高，被稱為「天鏡湖」)  8磐梯山 (日本百名山之一，山頂可360度俯瞰豬苗代湖與吾妻連山)  9磐梯吾妻Sky Line (貫穿吾妻連峰的山岳道路，沿途可欣賞壯麗的火山景觀)  10只見線 (被譽為「日本最美的鐵道線」，第一只見川橋梁的景色是攝影愛好者的聖地)  11霧幻峽 (只見川沿岸的峽谷，清晨時常出現夢幻般的霧氣)  12大志集落 (只見川沿岸的集落，從對岸眺望的景色被譽為「日本的原始風景」)  13三春瀧櫻 (日本三大櫻花之一，樹齡超過1,000年的巨型垂枝櫻，春季極為壯觀)  14日中線紀念自行車步道 (廢線鐵道改建的自行車道，春季垂枝櫻並木極為美麗)  15喜多方 (與札幌、博多並列日本三大拉麵之城，可品嚐喜多方拉麵)  16阿武隈洞 (福島縣代表性的鐘乳洞，洞內鐘乳石景觀豐富)  17夏威夷溫泉度假村 (福島縣的溫泉主題樂園，擁有日本最大的室內溫泉泳池) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 254,
    title: "日本系列-東北地方~福島縣-7-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-7X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1會津若松城（鶴城） (日本唯一的紅瓦天守閣，春季約1,000株櫻花盛開，是福島最具代表性的歷史地標)  2飯盛山 (會津戰爭的舞台之一，螺旋堂（會津さざえ堂）的獨特建築值得一看)  3會津武家屋敷 (重現江戶時代武士宅邸的主題園區，可體驗會津的歷史文化)  4東山溫泉 (會津若松市郊的溫泉鄉，歷史超過1,300年)  5大內宿 (保留江戶時代宿場町風貌的茅草屋建築群，被列為重要傳統建造物群保存地區)  6五色沼 (裏磐梯的湖沼群，湖水顏色會隨氣候與角度變化，是福島最著名的自然絕景)  7豬苗代湖 (日本第四大湖，湖水透明度極高，被稱為「天鏡湖」)  8磐梯山 (日本百名山之一，山頂可360度俯瞰豬苗代湖與吾妻連山)  9磐梯吾妻Sky Line (貫穿吾妻連峰的山岳道路，沿途可欣賞壯麗的火山景觀)  10只見線 (被譽為「日本最美的鐵道線」，第一只見川橋梁的景色是攝影愛好者的聖地)  11霧幻峽 (只見川沿岸的峽谷，清晨時常出現夢幻般的霧氣)  12大志集落 (只見川沿岸的集落，從對岸眺望的景色被譽為「日本的原始風景」)  13三春瀧櫻 (日本三大櫻花之一，樹齡超過1,000年的巨型垂枝櫻，春季極為壯觀)  14日中線紀念自行車步道 (廢線鐵道改建的自行車道，春季垂枝櫻並木極為美麗)  15喜多方 (與札幌、博多並列日本三大拉麵之城，可品嚐喜多方拉麵)  16阿武隈洞 (福島縣代表性的鐘乳洞，洞內鐘乳石景觀豐富)  17夏威夷溫泉度假村 (福島縣的溫泉主題樂園，擁有日本最大的室內溫泉泳池) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 255,
    title: "日本系列-東北地方~茨城縣-8-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-8.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1袋田瀑布：日本三大名瀑之一，高120公尺、分四段傾瀉，冬季可能結成冰瀑。  2大子（奧久慈）：以奧久慈軍雞與自然溪谷聞名的地區。  3龍神大吊橋：橫跨龍神峽的步行吊橋，景色壯觀。  4花貫溪谷：以溪谷美景與紅葉聞名的自然景點。  5國營常陸海濱公園：春季的粉蝶花海與秋季的掃帚草是絕景，四季花卉繽紛。  6日立車站（日立市）：由建築師妹島和世設計的「漂浮在玻璃建築中的車站」，可眺望太平洋。  7海洋世界茨城縣大洗水族館：關東地區規模最大的水族館之一，飼育約580種海洋生物。  8大洗磯前神社：以矗立於太平洋上的「海上鳥居」聞名，日出時分尤為壯觀。  9茨城縣立歷史館：展示茨城縣從古代至現代的歷史與文化。  10常陸風土記之丘：可欣賞粉蝶花與大波斯菊的賞花景點。  11偕樂園（水戶）：日本三大名園之一，以超過3000株梅花聞名。  12弘道館（水戶）：江戶時代最大的藩校，為國家重要文化財。  13水戶藝術館：由建築師磯崎新設計的標誌性建築，其100公尺高的塔樓可俯瞰市景。  14牛久大佛：金氏世界紀錄認證的世界最高青銅製立佛像，高120公尺。  15筑波山：被稱為「西有富士、東有筑波」的知名山峰，可搭乘纜車登山。  16筑波實驗植物園：隸屬於國立科學博物館的植物園，展示多樣化的植物。  17霞浦湖：日本第二大湖，可乘船遊湖、欣賞夕陽美景。  18鹿島神宮：日本全國鹿島神社的總本宮，歷史悠久，是武運與勝運的信仰中心。  19水鄉潮來（潮來市）：以水鄉風情與菖蒲花季聞名的地區。  20笠間燒（笠間市）：日本知名的陶器產地，可體驗陶藝製作。   ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 256,
    title: "日本系列-東北地方~茨城縣-8-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-8X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1袋田瀑布：日本三大名瀑之一，高120公尺、分四段傾瀉，冬季可能結成冰瀑。  2大子（奧久慈）：以奧久慈軍雞與自然溪谷聞名的地區。  3龍神大吊橋：橫跨龍神峽的步行吊橋，景色壯觀。  4花貫溪谷：以溪谷美景與紅葉聞名的自然景點。  5國營常陸海濱公園：春季的粉蝶花海與秋季的掃帚草是絕景，四季花卉繽紛。  6日立車站（日立市）：由建築師妹島和世設計的「漂浮在玻璃建築中的車站」，可眺望太平洋。  7海洋世界茨城縣大洗水族館：關東地區規模最大的水族館之一，飼育約580種海洋生物。  8大洗磯前神社：以矗立於太平洋上的「海上鳥居」聞名，日出時分尤為壯觀。  9茨城縣立歷史館：展示茨城縣從古代至現代的歷史與文化。  10常陸風土記之丘：可欣賞粉蝶花與大波斯菊的賞花景點。  11偕樂園（水戶）：日本三大名園之一，以超過3000株梅花聞名。  12弘道館（水戶）：江戶時代最大的藩校，為國家重要文化財。  13水戶藝術館：由建築師磯崎新設計的標誌性建築，其100公尺高的塔樓可俯瞰市景。  14牛久大佛：金氏世界紀錄認證的世界最高青銅製立佛像，高120公尺。  15筑波山：被稱為「西有富士、東有筑波」的知名山峰，可搭乘纜車登山。  16筑波實驗植物園：隸屬於國立科學博物館的植物園，展示多樣化的植物。  17霞浦湖：日本第二大湖，可乘船遊湖、欣賞夕陽美景。  18鹿島神宮：日本全國鹿島神社的總本宮，歷史悠久，是武運與勝運的信仰中心。  19水鄉潮來（潮來市）：以水鄉風情與菖蒲花季聞名的地區。  20笠間燒（笠間市）：日本知名的陶器產地，可體驗陶藝製作。   ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 257,
    title: "日本系列-東北地方~栃木縣-9-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-9.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1日光東照宮：世界文化遺產，祭祀德川家康的華麗神社，雕刻精細。  2日光二荒山神社：世界文化遺產，歷史悠久的古老神社，以結緣聞名。  3日光山輪王寺：世界文化遺產，是天台宗在關東的重要寺院。  4神橋（連接山中聖城的朱紅橋樑）  5中禪寺湖：日本海拔最高的天然湖泊，由火山熔岩形成，湖光山色優美。  6華嚴瀑布：日本三大名瀑之一，落差約97公尺，氣勢恢宏。  7明智平展望台：可搭乘纜車前往，眺望中禪寺湖與華嚴瀑布的絕佳地點。  8伊呂波坂：通往中禪寺湖的著名山道，擁有48個彎道，秋季紅葉極美。  9戰場之原：日光國立公園內的高山濕原，傳說為眾神爭奪中禪寺湖的戰場。  10龍頭瀑布：日光代表性的瀑布之一，因形似龍頭而得名。  11湯之湖：日光湯元溫泉區的寧靜湖泊，周邊設有完善的散步道。  12霧降瀑布：日光「四十八瀑」之一，可從不同角度感受瀑布魅力。  13鬼怒川溫泉：沿著鬼怒川溪谷發展的溫泉鄉，是知名的溫泉度假勝地。  14龍王峽：鬼怒川沿岸的溪谷景觀，奇岩與急流交織。  15那須高原：廣闊的高原度假區，擁有動物王國、牧場與溫泉。  16那須動物王國與牧場：與動物親近互動的樂園與牧場。  17宇都宮（餃子之城）：以餃子聞名的城市，擁有眾多餃子專賣店。  18足利花卉公園：以「日本三大燈飾」聞名，春季的紫藤花瀑布是絕景。  19大谷資料館：由地下採石場改建而成的獨特空間，是電影與MV的熱門拍攝地。  20若山農場（金色竹林）：擁有珍貴金色竹林的農場，是知名的電影拍攝地。  21栃木市（藏造老街）：保留濃濃江戶風情的古老街區，適合漫步。  22日光江戶村：重現江戶時代街景與文化的主題樂園。  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 258,
    title: "日本系列-東北地方~栃木縣-9-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-9X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1日光東照宮：世界文化遺產，祭祀德川家康的華麗神社，雕刻精細。  2日光二荒山神社：世界文化遺產，歷史悠久的古老神社，以結緣聞名。  3日光山輪王寺：世界文化遺產，是天台宗在關東的重要寺院。  4神橋（連接山中聖城的朱紅橋樑）  5中禪寺湖：日本海拔最高的天然湖泊，由火山熔岩形成，湖光山色優美。  6華嚴瀑布：日本三大名瀑之一，落差約97公尺，氣勢恢宏。  7明智平展望台：可搭乘纜車前往，眺望中禪寺湖與華嚴瀑布的絕佳地點。  8伊呂波坂：通往中禪寺湖的著名山道，擁有48個彎道，秋季紅葉極美。  9戰場之原：日光國立公園內的高山濕原，傳說為眾神爭奪中禪寺湖的戰場。  10龍頭瀑布：日光代表性的瀑布之一，因形似龍頭而得名。  11湯之湖：日光湯元溫泉區的寧靜湖泊，周邊設有完善的散步道。  12霧降瀑布：日光「四十八瀑」之一，可從不同角度感受瀑布魅力。  13鬼怒川溫泉：沿著鬼怒川溪谷發展的溫泉鄉，是知名的溫泉度假勝地。  14龍王峽：鬼怒川沿岸的溪谷景觀，奇岩與急流交織。  15那須高原：廣闊的高原度假區，擁有動物王國、牧場與溫泉。  16那須動物王國與牧場：與動物親近互動的樂園與牧場。  17宇都宮（餃子之城）：以餃子聞名的城市，擁有眾多餃子專賣店。  18足利花卉公園：以「日本三大燈飾」聞名，春季的紫藤花瀑布是絕景。  19大谷資料館：由地下採石場改建而成的獨特空間，是電影與MV的熱門拍攝地。  20若山農場（金色竹林）：擁有珍貴金色竹林的農場，是知名的電影拍攝地。  21栃木市（藏造老街）：保留濃濃江戶風情的古老街區，適合漫步。  22日光江戶村：重現江戶時代街景與文化的主題樂園。  ",
    date: "2026-07-11",
    url: "",
  },

  {
    id: 259,
    title: "日本系列-東北~群馬縣-10-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-10.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1草津溫泉：日本三大名湯之一，湯畑是溫泉街的中心地標。  2四萬溫泉：以乳白色「四萬藍」溫泉聞名的秘湯，積善館據說是《神隱少女》的靈感來源。  3積善館：神隱少女場景靈感  4伊香保溫泉：位於榛名山半山腰的溫泉鄉，以「黃金之湯」與「白銀之湯」聞名，石段街是其特色。  5榛名神社：創建於6世紀的古老神社，被譽為「群馬最強的能量景點」。  6谷川岳：日本百名山之一，可搭乘纜車輕鬆欣賞壯麗山景。  7水上溫泉郷：由水上十八湯組成的溫泉區，夏季可泛舟、冬季可滑雪。  8吹割瀑布：被譽為「東洋的尼加拉瀑布」，氣勢磅礡。  9尾瀨國立公園（尾瀨原）：日本最大的高層濕原，春季的水芭蕉與秋季的草紅葉是絕景。  10富岡製絲廠：世界文化遺產，建於1872年，是日本近代工業發展的象徵。  11碓冰峠鐵道文化村：展示舊鐵道與車輛的博物館，鐵道迷必訪。  12眼鏡橋（碓冰第三橋樑）：群馬縣的紅磚拱橋，是著名的鐵道遺產。  13少林山達磨寺：被認為是「開運達摩」的故鄉，寺內展示大量達摩不倒翁。  14高崎（達摩不倒翁市）：日本最大的達摩不倒翁產地，可體驗彩繪達摩。  15群馬野生動物園：可搭乘叢林巴士近距離觀賞動物的野生動物園。  16蒟蒻樂園（甘樂町）：可免費試吃與體驗蒟蒻製作的主題設施。  17群馬花卉公園：四季花卉盛開的廣闊公園。  18奧四萬湖：以鈷藍色湖水聞名的美麗湖泊。  19軽井澤玩具王國：位於群馬與長野交界的大型遊樂園。",
    date: "2026-07-11",
    url: "",
  },

  {
    id: 260,
    title: "日本系列-東北~群馬縣-10-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-10X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1草津溫泉：日本三大名湯之一，湯畑是溫泉街的中心地標。  2四萬溫泉：以乳白色「四萬藍」溫泉聞名的秘湯，積善館據說是《神隱少女》的靈感來源。  3積善館：神隱少女場景靈感  4伊香保溫泉：位於榛名山半山腰的溫泉鄉，以「黃金之湯」與「白銀之湯」聞名，石段街是其特色。  5榛名神社：創建於6世紀的古老神社，被譽為「群馬最強的能量景點」。  6谷川岳：日本百名山之一，可搭乘纜車輕鬆欣賞壯麗山景。  7水上溫泉郷：由水上十八湯組成的溫泉區，夏季可泛舟、冬季可滑雪。  8吹割瀑布：被譽為「東洋的尼加拉瀑布」，氣勢磅礡。  9尾瀨國立公園（尾瀨原）：日本最大的高層濕原，春季的水芭蕉與秋季的草紅葉是絕景。  10富岡製絲廠：世界文化遺產，建於1872年，是日本近代工業發展的象徵。  11碓冰峠鐵道文化村：展示舊鐵道與車輛的博物館，鐵道迷必訪。  12眼鏡橋（碓冰第三橋樑）：群馬縣的紅磚拱橋，是著名的鐵道遺產。  13少林山達磨寺：被認為是「開運達摩」的故鄉，寺內展示大量達摩不倒翁。  14高崎（達摩不倒翁市）：日本最大的達摩不倒翁產地，可體驗彩繪達摩。  15群馬野生動物園：可搭乘叢林巴士近距離觀賞動物的野生動物園。  16蒟蒻樂園（甘樂町）：可免費試吃與體驗蒟蒻製作的主題設施。  17群馬花卉公園：四季花卉盛開的廣闊公園。  18奧四萬湖：以鈷藍色湖水聞名的美麗湖泊。  19軽井澤玩具王國：位於群馬與長野交界的大型遊樂園。",
    date: "2026-07-11",
    url: "",
  },

  {
    id: 261,
    title: "日本系列-東北~埼玉縣-11-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-11.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1羊山公園（秩父）：春季約40萬株芝櫻盛開，將山坡染成粉紅色花毯。  2秩父神社：擁有2000年以上歷史的神社，本殿雕刻精美。  3長瀞川（長瀞）：以「岩畳」奇景與川下り（遊船）聞名，可欣賞溪谷美景。  4寶登山神社（長瀞）：位於寶登山山頂的神社，可搭乘纜車前往。  5行田市（古代蓮之里）：夏季可欣賞超過40萬株古代蓮花盛開的壯觀景象。  6小川町（和紙體驗）：可體驗日本傳統手抄和紙製作。  7武甲山（秩父）：秩父地區的象徵山峰，被指定為國家地質公園。  8寺坂棚田：保留傳統景觀的梯田，四季皆有不同風貌。  9鐵道博物館（大宮）：日本最大的鐵道博物館之一，展示從蒸汽火車到新幹線的實物車輛。  10大宮公園：歷史悠久的市區公園，內有日式庭園、動物園與博物館。  11大宮盆栽美術館：世界首座以盆栽為主題的公立美術館，展示精美的盆栽藝術。  12川越（藏造老街）：被稱為「小江戶」，保存大量江戶時期的藏造建築與鐘樓。  13冰川神社（川越）：擁有超過1500年歷史的古老神社，其「繪馬隧道」是著名打卡景點。  14埼玉超級體育館：日本最大的多功能體育場館之一，常舉辦大型演唱會與體育賽事。  15嚕嚕米主題公園（姆明谷公園）：北歐童話風的主題樂園，重現姆明谷的世界。  16角川武藏野博物館：由建築師隈研吾設計的複合文化設施，外觀由花崗岩打造，極具視覺衝擊。  17缺  18見沼代用水（櫻花迴廊）：沿著見沼代用水綿延約20公里的櫻花並木，春季美不勝收。  19東武動物公園：結合動物園、遊樂園與泳池的大型休閒設施。  20西武巨蛋：日本職棒埼玉西武獅隊的主場，也是大型演唱會場地。",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 262,
    title: "日本系列-東北~埼玉縣-11-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-11X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1羊山公園（秩父）：春季約40萬株芝櫻盛開，將山坡染成粉紅色花毯。  2秩父神社：擁有2000年以上歷史的神社，本殿雕刻精美。  3長瀞川（長瀞）：以「岩畳」奇景與川下り（遊船）聞名，可欣賞溪谷美景。  4寶登山神社（長瀞）：位於寶登山山頂的神社，可搭乘纜車前往。  5行田市（古代蓮之里）：夏季可欣賞超過40萬株古代蓮花盛開的壯觀景象。  6小川町（和紙體驗）：可體驗日本傳統手抄和紙製作。  7武甲山（秩父）：秩父地區的象徵山峰，被指定為國家地質公園。  8寺坂棚田：保留傳統景觀的梯田，四季皆有不同風貌。  9鐵道博物館（大宮）：日本最大的鐵道博物館之一，展示從蒸汽火車到新幹線的實物車輛。  10大宮公園：歷史悠久的市區公園，內有日式庭園、動物園與博物館。  11大宮盆栽美術館：世界首座以盆栽為主題的公立美術館，展示精美的盆栽藝術。  12川越（藏造老街）：被稱為「小江戶」，保存大量江戶時期的藏造建築與鐘樓。  13冰川神社（川越）：擁有超過1500年歷史的古老神社，其「繪馬隧道」是著名打卡景點。  14埼玉超級體育館：日本最大的多功能體育場館之一，常舉辦大型演唱會與體育賽事。  15嚕嚕米主題公園（姆明谷公園）：北歐童話風的主題樂園，重現姆明谷的世界。  16角川武藏野博物館：由建築師隈研吾設計的複合文化設施，外觀由花崗岩打造，極具視覺衝擊。  17缺  18見沼代用水（櫻花迴廊）：沿著見沼代用水綿延約20公里的櫻花並木，春季美不勝收。  19東武動物公園：結合動物園、遊樂園與泳池的大型休閒設施。  20西武巨蛋：日本職棒埼玉西武獅隊的主場，也是大型演唱會場地。",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 263,
    title: "日本系列-東北~千葉縣-12-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-12.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1東京迪士尼樂園・迪士尼海洋：亞洲最受歡迎的主題樂園，實際位於千葉縣舞濱。  2成田山新勝寺：擁有千年歷史的古寺，通往寺廟的參道兩旁商店林立。  3香取神宮：日本最古老的神社之一，擁有超過2600年歷史。  4佐原（小江戶）：被稱為「小江戶」的水鄉古鎮，保留江戶時期的街景與運河風光。  5母親牧場：可與動物互動、欣賞花卉與牧場風光的親子景點。  6東京德國村：重現德國鄉村風情的主題公園，夜晚的燈飾極具浪漫氛圍。  7船橋安徒生公園：以丹麥童話作家安徒生命名的公園，擁有廣闊花園與遊樂設施。  8鴨川海洋世界：以虎鯨表演聞名的大型水族館，飼養超過800種海洋生物。  9九十九里濱：千葉縣代表性海岸線，適合漫步沙灘、欣賞海景。  10銚子（犬吠埼燈塔）：關東地區最東端的燈塔，是欣賞日出的著名地點。  11屏風浦（銚子）：由太平洋海浪侵蝕形成的壯麗斷崖景觀。  12原岡海岸（南房總）：以夕陽美景與奇岩海岸聞名的景點。  13房總之村：重現江戶時代房總地區生活樣貌的主題設施，可體驗傳統工藝。  14小湊鐵道：穿越田園與溪谷的復古觀光鐵道，春季可欣賞油菜花與櫻花。  15幕張海濱公園：鄰近幕張展覽館的海濱公園，適合散步與欣賞海景。  16養老溪谷：房總半島的溪谷秘境，秋季紅葉與瀑布景色優美。  17千葉市動物公園：飼育多種動物的市立動物園。  18千葉都市單軌電車：世界最長的懸掛式單軌電車，可從空中遊覽市區。  19木更津（三井OUTLET PARK）：位於木更津的大型購物中心，可遠眺東京灣景色。 ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 264,
    title: "日本系列-東北~千葉縣-12-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-12X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1東京迪士尼樂園・迪士尼海洋：亞洲最受歡迎的主題樂園，實際位於千葉縣舞濱。  2成田山新勝寺：擁有千年歷史的古寺，通往寺廟的參道兩旁商店林立。  3香取神宮：日本最古老的神社之一，擁有超過2600年歷史。  4佐原（小江戶）：被稱為「小江戶」的水鄉古鎮，保留江戶時期的街景與運河風光。  5母親牧場：可與動物互動、欣賞花卉與牧場風光的親子景點。  6東京德國村：重現德國鄉村風情的主題公園，夜晚的燈飾極具浪漫氛圍。  7船橋安徒生公園：以丹麥童話作家安徒生命名的公園，擁有廣闊花園與遊樂設施。  8鴨川海洋世界：以虎鯨表演聞名的大型水族館，飼養超過800種海洋生物。  9九十九里濱：千葉縣代表性海岸線，適合漫步沙灘、欣賞海景。  10銚子（犬吠埼燈塔）：關東地區最東端的燈塔，是欣賞日出的著名地點。  11屏風浦（銚子）：由太平洋海浪侵蝕形成的壯麗斷崖景觀。  12原岡海岸（南房總）：以夕陽美景與奇岩海岸聞名的景點。  13房總之村：重現江戶時代房總地區生活樣貌的主題設施，可體驗傳統工藝。  14小湊鐵道：穿越田園與溪谷的復古觀光鐵道，春季可欣賞油菜花與櫻花。  15幕張海濱公園：鄰近幕張展覽館的海濱公園，適合散步與欣賞海景。  16養老溪谷：房總半島的溪谷秘境，秋季紅葉與瀑布景色優美。  17千葉市動物公園：飼育多種動物的市立動物園。  18千葉都市單軌電車：世界最長的懸掛式單軌電車，可從空中遊覽市區。  19木更津（三井OUTLET PARK）：位於木更津的大型購物中心，可遠眺東京灣景色。 ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 265,
    title: "日本系列-東北~東京都-13-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-13.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1高尾山：距都心約1小時車程的自然景點，多條登山路線適合健行，可遠眺富士山。  2三鷹之森吉卜力美術館：由宮崎駿設計，展示吉卜力工作室的動畫世界與手稿。  3上野公園（上野恩賜公園）：東京著名的文化與休憩場所，春季是賞櫻勝地，園內有博物館、美術館與動物園。  4東京晴空塔：全球第二高的觀景塔，高634公尺，天氣好時能遠眺富士山。  5淺草寺（雷門）：東京最古老的寺廟，穿過巨大的雷門燈籠、漫步仲見世通商店街是經典行程。  6井之頭恩賜公園：吉祥寺地區的公園，可划船與散步，秋季紅葉迷人。  7新宿御苑：位於市中心的廣闊庭園，融合日式、法式與英式風格，是賞櫻與賞楓名所。  8明治神宮：供奉明治天皇與昭憲皇太后的神社，擁有東京市中心最大規模的森林。  9皇居（東御苑）：日本天皇的居所，部分區域定期開放參觀，可感受江戶城遺址的歷史氛圍。  10神樂坂：保留石板路與小巷弄風情的區域，充滿懷舊氛圍與法式小店。  11兩國國技館：東京的相撲聖地，可觀賞相撲比賽與體驗相撲文化。  12秋葉原：全球知名的電器與動漫聖地，各種電子產品、模型與女僕咖啡廳林立。  13築地場外市場：即使市場搬遷，場外市場仍充滿活力，可品嚐新鮮海鮮與道地小吃。  14六本木新城（森大廈展望台）：從52樓的展望台可360度欣賞東京全景，包括東京鐵塔。  15國立新美術館：由建築師黑川紀章設計，波浪狀的外觀是其特色，館內空間寬敞。  16東京鐵塔：東京的永恆象徵，從觀景台可欣賞璀璨的都市全景。  17代官山（蔦屋書店）：時尚與文化的街區，被譽為「世界最美書店」之一的蔦屋書店是其地標。  18澀谷十字路口：世界最繁忙的十字路口，忠犬八公像是著名的會面點。  19目黑川：春季賞櫻的絕佳地點，兩岸約800株櫻花盛開時形成粉色隧道。  20台場：東京灣的人工島，擁有彩虹大橋、富士電視台與大型購物中心，是娛樂與夜景勝地。 ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 266,
    title: "日本系列-東北~東京都-13-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-13X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1高尾山：距都心約1小時車程的自然景點，多條登山路線適合健行，可遠眺富士山。  2三鷹之森吉卜力美術館：由宮崎駿設計，展示吉卜力工作室的動畫世界與手稿。  3上野公園（上野恩賜公園）：東京著名的文化與休憩場所，春季是賞櫻勝地，園內有博物館、美術館與動物園。  4東京晴空塔：全球第二高的觀景塔，高634公尺，天氣好時能遠眺富士山。  5淺草寺（雷門）：東京最古老的寺廟，穿過巨大的雷門燈籠、漫步仲見世通商店街是經典行程。  6井之頭恩賜公園：吉祥寺地區的公園，可划船與散步，秋季紅葉迷人。  7新宿御苑：位於市中心的廣闊庭園，融合日式、法式與英式風格，是賞櫻與賞楓名所。  8明治神宮：供奉明治天皇與昭憲皇太后的神社，擁有東京市中心最大規模的森林。  9皇居（東御苑）：日本天皇的居所，部分區域定期開放參觀，可感受江戶城遺址的歷史氛圍。  10神樂坂：保留石板路與小巷弄風情的區域，充滿懷舊氛圍與法式小店。  11兩國國技館：東京的相撲聖地，可觀賞相撲比賽與體驗相撲文化。  12秋葉原：全球知名的電器與動漫聖地，各種電子產品、模型與女僕咖啡廳林立。  13築地場外市場：即使市場搬遷，場外市場仍充滿活力，可品嚐新鮮海鮮與道地小吃。  14六本木新城（森大廈展望台）：從52樓的展望台可360度欣賞東京全景，包括東京鐵塔。  15國立新美術館：由建築師黑川紀章設計，波浪狀的外觀是其特色，館內空間寬敞。  16東京鐵塔：東京的永恆象徵，從觀景台可欣賞璀璨的都市全景。  17代官山（蔦屋書店）：時尚與文化的街區，被譽為「世界最美書店」之一的蔦屋書店是其地標。  18澀谷十字路口：世界最繁忙的十字路口，忠犬八公像是著名的會面點。  19目黑川：春季賞櫻的絕佳地點，兩岸約800株櫻花盛開時形成粉色隧道。  20台場：東京灣的人工島，擁有彩虹大橋、富士電視台與大型購物中心，是娛樂與夜景勝地。 ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 267,
    title: "日本系列-東北~神奈川縣-14-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-14.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1橫濱港未來21：橫濱的現代化港灣區，地標摩天輪與夜景迷人。  2橫濱紅磚倉庫：歷史悠久的紅磚建築群，現為文創與商業設施。  3橫濱中華街：日本最大的中華街，充滿異國風情與美食。  4山下公園：橫濱的海濱公園，可欣賞港灣景色與豪華客船。  5橫濱海洋塔：橫濱的標誌性建築，可360度俯瞰港灣景色。  6杯麵博物館（安藤百福發明紀念館）：位於橫濱，可體驗製作專屬的杯麵。  7八景島海島樂園：日本規模最大的水族館之一，結合遊樂園與購物設施。  8大涌谷（箱根）：火山活動旺盛的景觀區，可品嚐以溫泉蒸煮的「黑玉子」。  9鎌倉大佛（高德院）：鎌倉的象徵，高約13.35公尺的青銅佛像，莊嚴肅穆。  10鶴岡八幡宮：鎌倉最重要的神社之一，是賞櫻與感受歷史的絕佳場所。  11長谷寺（鎌倉）：以四季花卉與觀音信仰聞名的古寺。  12小田原城：戰國時代北條氏的居城，天守閣是重要的歷史遺跡。  13江之島：湘南海岸的代表性景點，島上有神社、展望台與海鮮餐廳。  14葉山（一色海岸）：可同時眺望燈塔與海上鳥居的絕美海灘。  15箱根溫泉：日本知名的溫泉度假勝地，可遠眺富士山並享受各種泉質。  16蘆之湖（箱根）：箱根火山口湖，天氣晴朗時可欣賞富士山倒映湖面的美景。  17湘南海岸：以衝浪文化與悠閒海灘聞名的海岸線，也是日劇常見場景。  18YOKOHAMA AIR CABIN：連接港未來21地區與櫻木町的都市空中纜車。  19三崎港：位於三浦半島最南端，以新鮮鮪魚料理聞名的漁港。  20川崎（藤子・F・不二雄博物館）：展示《哆啦A夢》等作品原畫與資料的博物館。 ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 268,
    title: "日本系列-東北~神奈川縣-14-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-14X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1橫濱港未來21：橫濱的現代化港灣區，地標摩天輪與夜景迷人。  2橫濱紅磚倉庫：歷史悠久的紅磚建築群，現為文創與商業設施。  3橫濱中華街：日本最大的中華街，充滿異國風情與美食。  4山下公園：橫濱的海濱公園，可欣賞港灣景色與豪華客船。  5橫濱海洋塔：橫濱的標誌性建築，可360度俯瞰港灣景色。  6杯麵博物館（安藤百福發明紀念館）：位於橫濱，可體驗製作專屬的杯麵。  7八景島海島樂園：日本規模最大的水族館之一，結合遊樂園與購物設施。  8大涌谷（箱根）：火山活動旺盛的景觀區，可品嚐以溫泉蒸煮的「黑玉子」。  9鎌倉大佛（高德院）：鎌倉的象徵，高約13.35公尺的青銅佛像，莊嚴肅穆。  10鶴岡八幡宮：鎌倉最重要的神社之一，是賞櫻與感受歷史的絕佳場所。  11長谷寺（鎌倉）：以四季花卉與觀音信仰聞名的古寺。  12小田原城：戰國時代北條氏的居城，天守閣是重要的歷史遺跡。  13江之島：湘南海岸的代表性景點，島上有神社、展望台與海鮮餐廳。  14葉山（一色海岸）：可同時眺望燈塔與海上鳥居的絕美海灘。  15箱根溫泉：日本知名的溫泉度假勝地，可遠眺富士山並享受各種泉質。  16蘆之湖（箱根）：箱根火山口湖，天氣晴朗時可欣賞富士山倒映湖面的美景。  17湘南海岸：以衝浪文化與悠閒海灘聞名的海岸線，也是日劇常見場景。  18YOKOHAMA AIR CABIN：連接港未來21地區與櫻木町的都市空中纜車。  19三崎港：位於三浦半島最南端，以新鮮鮪魚料理聞名的漁港。  20川崎（藤子・F・不二雄博物館）：展示《哆啦A夢》等作品原畫與資料的博物館。 ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 269,
    title: "日本系列-東北~新潟縣-15-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-15.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1清津峽溪谷隧道 (日本三大溪谷之一，隧道內的「光之隧道」與鏡池倒影是藝術與自然結合的打卡聖地)  2星峠梯田 (入選「日本之里百選」的美麗梯田，清晨時水田如鏡，倒映天空，被稱為「水鏡」絕景)  3美人林 (位於十日町市的山毛櫸林，樹木筆直優美，四季皆有不同的風貌)  4奧只見湖 (位於奧只見水庫的人工湖，被群山環繞，秋季紅葉與湖面倒影如詩如畫)  5佐渡島 (新潟縣外海的島嶼，以盆舟體驗、佐渡金山與宿根木傳統建築群聞名)  6彌彥神社 (新潟縣地位最高的神社，被譽為「越後第一神社」，坐落於彌彥山腳下)  7彌彥山Sky Line (可駕車或搭乘纜車登頂的山岳道路，從山頂可一望日本海與佐渡島)  8阿賀野川 (新潟縣的主要河川，可搭乘遊覽船欣賞溪谷美景與豐富的自然生態)  9越後湯澤 (日本知名的滑雪與溫泉勝地，也是川端康成小說《雪國》的舞台)  10GALA湯澤滑雪場 (JR車站直通的滑雪場，交通便利，是東京出發最方便的滑雪度假村之一)  11苗場滑雪場 (新潟縣最具代表性的滑雪場之一，擁有多條滑雪道與日本最長的「龍纜車」)  12高田公園 (日本三大夜櫻名所之一，春季約4,000棵櫻花盛開，夜間點燈極為壯觀)  13月岡溫泉 (新潟縣代表性的溫泉鄉，以「美白之湯」聞名，泉質優良)  14北方文化博物館 (展示越後地區歷史與文化的博物館，豪農的宅邸建築本身即為珍貴文化財)  15清酒博物館「PONSHU館」 (位於新潟車站內，可試飲新潟縣內所有酒廠的日本酒，是酒迷的天堂)  16燕三條 (日本著名的金屬加工產地，可參觀工廠與選購高品質的刀具、鍋具等工藝品)  17長岡花火大會 (日本三大花火大會之一，每年8月舉辦，規模盛大，震撼力十足)  18佐渡金山 (江戶時代日本最大的金銀礦山，可參觀礦坑遺跡並體驗淘金)  19小木盆舟 (佐渡島的傳統交通工具，乘坐橢圓形木舟在海上搖擺，是獨特的觀光體驗)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 270,
    title: "日本系列-東北~新潟縣-15-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-15X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1清津峽溪谷隧道 (日本三大溪谷之一，隧道內的「光之隧道」與鏡池倒影是藝術與自然結合的打卡聖地)  2星峠梯田 (入選「日本之里百選」的美麗梯田，清晨時水田如鏡，倒映天空，被稱為「水鏡」絕景)  3美人林 (位於十日町市的山毛櫸林，樹木筆直優美，四季皆有不同的風貌)  4奧只見湖 (位於奧只見水庫的人工湖，被群山環繞，秋季紅葉與湖面倒影如詩如畫)  5佐渡島 (新潟縣外海的島嶼，以盆舟體驗、佐渡金山與宿根木傳統建築群聞名)  6彌彥神社 (新潟縣地位最高的神社，被譽為「越後第一神社」，坐落於彌彥山腳下)  7彌彥山Sky Line (可駕車或搭乘纜車登頂的山岳道路，從山頂可一望日本海與佐渡島)  8阿賀野川 (新潟縣的主要河川，可搭乘遊覽船欣賞溪谷美景與豐富的自然生態)  9越後湯澤 (日本知名的滑雪與溫泉勝地，也是川端康成小說《雪國》的舞台)  10GALA湯澤滑雪場 (JR車站直通的滑雪場，交通便利，是東京出發最方便的滑雪度假村之一)  11苗場滑雪場 (新潟縣最具代表性的滑雪場之一，擁有多條滑雪道與日本最長的「龍纜車」)  12高田公園 (日本三大夜櫻名所之一，春季約4,000棵櫻花盛開，夜間點燈極為壯觀)  13月岡溫泉 (新潟縣代表性的溫泉鄉，以「美白之湯」聞名，泉質優良)  14北方文化博物館 (展示越後地區歷史與文化的博物館，豪農的宅邸建築本身即為珍貴文化財)  15清酒博物館「PONSHU館」 (位於新潟車站內，可試飲新潟縣內所有酒廠的日本酒，是酒迷的天堂)  16燕三條 (日本著名的金屬加工產地，可參觀工廠與選購高品質的刀具、鍋具等工藝品)  17長岡花火大會 (日本三大花火大會之一，每年8月舉辦，規模盛大，震撼力十足)  18佐渡金山 (江戶時代日本最大的金銀礦山，可參觀礦坑遺跡並體驗淘金)  19小木盆舟 (佐渡島的傳統交通工具，乘坐橢圓形木舟在海上搖擺，是獨特的觀光體驗)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 271,
    title: "日本系列-中部~富山縣-16-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-16.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1立山黑部阿爾卑斯山脈路線 (世界頂級的山岳觀光路線之一，貫穿日本北阿爾卑斯山，春季的「雪之大谷」是經典絕景)  2黑部水壩 (日本最大的拱形水壩，氣勢宏偉，是立山黑部路線上的重要景點)  3黑部峽谷 (日本最深的V字形峽谷，可搭乘黑部峽谷鐵道觀光小火車深入溪谷，欣賞紅葉與原始森林美景)  4宇奈月溫泉 (位於黑部峽谷入口處的溫泉鄉，是峽谷觀光的起點，以優質泉質聞名)  5雨晴海岸 (可隔海眺望立山連峰壯麗景色的絕美海岸線，冬季晴朗時山巒與海景交織如畫)  6翡翠海岸 (位於朝日町，綿延約4公里的天然海岸，因翡翠綠色的美麗海灘而得名，獲選為「日本百大海岸」)  7五箇山合掌造聚落（相倉・菅沼） (世界文化遺產，與白川鄉齊名的合掌造民家聚落，冬季雪景如童話世界)  8富山城跡 (富山市中心的歷史地標，周邊的城址公園是市民休憩與賞櫻名所)  9高岡古城公園 (日本百大名城之一「高岡城」的遺址公園，春季約1,800株櫻花盛開，是北陸賞櫻名所)  10高岡大佛 (與奈良、鐮倉大佛並稱日本三大佛之一，是高岡市的象徵)  11瑞龍寺 (位於高岡市的曹洞宗名剎，被列為國寶，建築風格優美莊嚴)  12富山市玻璃美術館 (由建築大師隈研吾設計的現代美術館，建築本身極具藝術感，是富山工藝之都的象徵)  13富岩運河環水公園 (位於富山車站旁的廣闊公園，擁有「世界最美星巴克」之一，夜晚點燈後氛圍浪漫)  14松川遊船 (沿著富山市中心的松川，春季可搭乘遊船欣賞兩岸櫻花隧道美景)  15礪波鬱金香博覽會 (春季舉辦的盛大花卉慶典，百萬株鬱金香同時綻放，五彩繽紛)  16螢火蟲魷魚博物館 (位於滑川市，展示富山灣神秘的螢火魷生態，春季是觀賞螢火魷的最佳季節)  17魚津埋沒林博物館 (展示約2,000年前因地殼變動而被埋沒的古代森林遺跡)  18肖米奧瀑布 (日本最高的瀑布，雄偉壯觀，春夏秋季皆適合造訪) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 272,
    title: "日本系列-中部~富山縣-16-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-16X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1立山黑部阿爾卑斯山脈路線 (世界頂級的山岳觀光路線之一，貫穿日本北阿爾卑斯山，春季的「雪之大谷」是經典絕景)  2黑部水壩 (日本最大的拱形水壩，氣勢宏偉，是立山黑部路線上的重要景點)  3黑部峽谷 (日本最深的V字形峽谷，可搭乘黑部峽谷鐵道觀光小火車深入溪谷，欣賞紅葉與原始森林美景)  4宇奈月溫泉 (位於黑部峽谷入口處的溫泉鄉，是峽谷觀光的起點，以優質泉質聞名)  5雨晴海岸 (可隔海眺望立山連峰壯麗景色的絕美海岸線，冬季晴朗時山巒與海景交織如畫)  6翡翠海岸 (位於朝日町，綿延約4公里的天然海岸，因翡翠綠色的美麗海灘而得名，獲選為「日本百大海岸」)  7五箇山合掌造聚落（相倉・菅沼） (世界文化遺產，與白川鄉齊名的合掌造民家聚落，冬季雪景如童話世界)  8富山城跡 (富山市中心的歷史地標，周邊的城址公園是市民休憩與賞櫻名所)  9高岡古城公園 (日本百大名城之一「高岡城」的遺址公園，春季約1,800株櫻花盛開，是北陸賞櫻名所)  10高岡大佛 (與奈良、鐮倉大佛並稱日本三大佛之一，是高岡市的象徵)  11瑞龍寺 (位於高岡市的曹洞宗名剎，被列為國寶，建築風格優美莊嚴)  12富山市玻璃美術館 (由建築大師隈研吾設計的現代美術館，建築本身極具藝術感，是富山工藝之都的象徵)  13富岩運河環水公園 (位於富山車站旁的廣闊公園，擁有「世界最美星巴克」之一，夜晚點燈後氛圍浪漫)  14松川遊船 (沿著富山市中心的松川，春季可搭乘遊船欣賞兩岸櫻花隧道美景)  15礪波鬱金香博覽會 (春季舉辦的盛大花卉慶典，百萬株鬱金香同時綻放，五彩繽紛)  16螢火蟲魷魚博物館 (位於滑川市，展示富山灣神秘的螢火魷生態，春季是觀賞螢火魷的最佳季節)  17魚津埋沒林博物館 (展示約2,000年前因地殼變動而被埋沒的古代森林遺跡)  18肖米奧瀑布 (日本最高的瀑布，雄偉壯觀，春夏秋季皆適合造訪) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 273,
    title: "日本系列-中部~石川縣-17-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-17.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1兼六園 (日本三名園之首，以「宏大、幽邃、人力、蒼古、水泉、眺望」六勝聞名)  2金澤城 (加賀藩前田家的居城，日本百名城之一)  3武家屋敷遺跡（長町） (金澤市區內保存完好的武士宅邸區)  4東茶屋街 (金澤最大的茶屋街，充滿江戶風情的木造建築，可體驗金箔工藝)  5金澤車站 (曾被選為世界最美車站之一，鼓門與接待圓頂極為壯觀)  6金澤21世紀美術館 (以現代藝術聞名的美術館，建築本身即為藝術品)  7石川縣立美術館 (收藏加賀藩相關美術品與傳統工藝品)  8近江町市場 (金澤的廚房，可品嚐新鮮海鮮與加賀料理)  9箔一本店（箔巧館） (可體驗金箔貼附工藝的設施)  10妙立寺（忍者寺） (外觀為普通寺廟，內部卻充滿陷阱與機關的「忍者寺」)  11能登半島 (擁有千里濱海岸、白米千枚田等絕景)  12白米千枚田 (能登半島的梯田景觀，被列為世界農業遺產)  13千里濱海岸 (可將汽車行駛在沙灘上的獨特海岸)  14能登金剛（巖門） (能登半島的海蝕洞與奇岩景觀)  15鴨浦岩岸 (能登半島的私房景點，壯麗的岩岸景觀)  16輪島朝市 (日本三大朝市之一，可購買新鮮海產與輪島塗漆器)  17加賀溫泉鄉 (由山代、山中、片山津等溫泉組成的千年古湯)  18白山白川鄉白色公路 (連結石川縣與岐阜縣的山岳觀光道路) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 274,
    title: "日本系列-中部~石川縣-17-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-17X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1兼六園 (日本三名園之首，以「宏大、幽邃、人力、蒼古、水泉、眺望」六勝聞名)  2金澤城 (加賀藩前田家的居城，日本百名城之一)  3武家屋敷遺跡（長町） (金澤市區內保存完好的武士宅邸區)  4東茶屋街 (金澤最大的茶屋街，充滿江戶風情的木造建築，可體驗金箔工藝)  5金澤車站 (曾被選為世界最美車站之一，鼓門與接待圓頂極為壯觀)  6金澤21世紀美術館 (以現代藝術聞名的美術館，建築本身即為藝術品)  7石川縣立美術館 (收藏加賀藩相關美術品與傳統工藝品)  8近江町市場 (金澤的廚房，可品嚐新鮮海鮮與加賀料理)  9箔一本店（箔巧館） (可體驗金箔貼附工藝的設施)  10妙立寺（忍者寺） (外觀為普通寺廟，內部卻充滿陷阱與機關的「忍者寺」)  11能登半島 (擁有千里濱海岸、白米千枚田等絕景)  12白米千枚田 (能登半島的梯田景觀，被列為世界農業遺產)  13千里濱海岸 (可將汽車行駛在沙灘上的獨特海岸)  14能登金剛（巖門） (能登半島的海蝕洞與奇岩景觀)  15鴨浦岩岸 (能登半島的私房景點，壯麗的岩岸景觀)  16輪島朝市 (日本三大朝市之一，可購買新鮮海產與輪島塗漆器)  17加賀溫泉鄉 (由山代、山中、片山津等溫泉組成的千年古湯)  18白山白川鄉白色公路 (連結石川縣與岐阜縣的山岳觀光道路) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 275,
    title: "日本系列-中部~福井縣-18-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-18.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1福井縣立恐龍博物館 (世界頂尖的恐龍博物館之一，展示眾多恐龍化石與標本，是福井最具代表性的景點)  2勝山恐龍森林 (恐龍博物館周邊的戶外體驗區，可與恐龍模型互動，適合親子同遊)  3永平寺 (日本曹洞宗的大本山，由道元禪師於1244年創立，是日本最具代表性的禪宗寺院之一)  4一乘谷朝倉氏遺跡 (戰國大名朝倉氏的城下町遺跡，被埋沒約400年後發掘出土，重現戰國時代的風貌)  5福井城遺址 (福井市的歷史地標，城址公園內有石垣與護城河遺跡)  6丸岡城 (日本最古老的現存天守，別名「霞城」，木造天守閣充滿古意盎然的風情)  7越前大野城 (位於大野市的古城，被稱為「天空之城」，春秋季節雲海出現時宛如漂浮在空中)  8東尋坊 (綿延約1公里的柱狀節理斷崖絕壁，高達20-30公尺的岩壁被日本海波濤沖刷，景色震撼)  9越前海岸 (以越前蟹聞名的海岸線，冬季是品嚐越前蟹的最佳季節)  10越前松島 (擁有里亞斯式海岸的美麗景觀，奇岩與松林交織，風景如畫)  11敦賀港 (歷史悠久的港口城市，敦賀鐵道資料館（舊敦賀港車站）是懷舊的紅磚建築景點)  12氣比神宮 (北陸地區地位最高的神社之一，擁有巨大的朱紅色鳥居，為國家重要文化財)  13三方五湖 (由五個湖泊組成的風景名勝區，湖水顏色各異，可從梅丈岳山頂公園一覽全景)  14彩虹線山頂公園 (位於三方五湖上方，可搭乘纜車登頂，欣賞五湖與日本海的壯闊景色)  15蘆原溫泉 (福井縣代表性的溫泉鄉，以「關西的奧座敷」聞名，適合放鬆身心)  16白山 (日本三大靈山之一，橫跨石川與福井，是登山與信仰的聖地)  17平泉寺白山神社 (位於山區的古老神社，境內覆蓋著青苔，氛圍神秘而莊嚴)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 276,
    title: "日本系列-中部~福井縣-18-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-18X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1福井縣立恐龍博物館 (世界頂尖的恐龍博物館之一，展示眾多恐龍化石與標本，是福井最具代表性的景點)  2勝山恐龍森林 (恐龍博物館周邊的戶外體驗區，可與恐龍模型互動，適合親子同遊)  3永平寺 (日本曹洞宗的大本山，由道元禪師於1244年創立，是日本最具代表性的禪宗寺院之一)  4一乘谷朝倉氏遺跡 (戰國大名朝倉氏的城下町遺跡，被埋沒約400年後發掘出土，重現戰國時代的風貌)  5福井城遺址 (福井市的歷史地標，城址公園內有石垣與護城河遺跡)  6丸岡城 (日本最古老的現存天守，別名「霞城」，木造天守閣充滿古意盎然的風情)  7越前大野城 (位於大野市的古城，被稱為「天空之城」，春秋季節雲海出現時宛如漂浮在空中)  8東尋坊 (綿延約1公里的柱狀節理斷崖絕壁，高達20-30公尺的岩壁被日本海波濤沖刷，景色震撼)  9越前海岸 (以越前蟹聞名的海岸線，冬季是品嚐越前蟹的最佳季節)  10越前松島 (擁有里亞斯式海岸的美麗景觀，奇岩與松林交織，風景如畫)  11敦賀港 (歷史悠久的港口城市，敦賀鐵道資料館（舊敦賀港車站）是懷舊的紅磚建築景點)  12氣比神宮 (北陸地區地位最高的神社之一，擁有巨大的朱紅色鳥居，為國家重要文化財)  13三方五湖 (由五個湖泊組成的風景名勝區，湖水顏色各異，可從梅丈岳山頂公園一覽全景)  14彩虹線山頂公園 (位於三方五湖上方，可搭乘纜車登頂，欣賞五湖與日本海的壯闊景色)  15蘆原溫泉 (福井縣代表性的溫泉鄉，以「關西的奧座敷」聞名，適合放鬆身心)  16白山 (日本三大靈山之一，橫跨石川與福井，是登山與信仰的聖地)  17平泉寺白山神社 (位於山區的古老神社，境內覆蓋著青苔，氛圍神秘而莊嚴)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 277,
    title: "日本系列-中部~山梨縣-19-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-19.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1本栖湖 (五湖中透明度最高的湖泊，能完美映照富士山。日本千圓紙鈔背面的圖案正是本栖湖與富士山)  2精進湖 (五湖中最小、最靜謐的湖泊，帶有遺世獨立的靜謐感)  3西湖 (戶外活動愛好者的樂園，可釣魚、划獨木舟、露營等)  4河口湖 (富士五湖中最受歡迎的湖泊，以拍攝「逆富士」（富士山倒影）而聞名。可搭乘天上山纜車或遊覽船，從不同角度欣賞富士山美景)  5山中湖 (富士五湖中面積最大，也是距離富士山最近的湖泊。可搭乘河馬水陸兩用船、騎自行車環湖，或在冬季欣賞「鑽石富士」的壯麗景象)  6昇仙峽 (被譽為「日本第一美溪谷」，以奇岩怪石、清澈溪流與仙娥瀑布（日本百瀑之一）聞名)  7忍野八海 (由富士山融雪滲入地下後湧出形成的八個清澈泉池，水質純淨，被列為天然紀念物，景色古樸)  8大石公園 (位於河口湖北岸的熱門景點，可欣賞隨季節變換的花田（如夏季薰衣草、秋季掃帚草）與富士山同框的美景)  9河口湖音樂森林美術館 (歐式童話風格的主題美術館，展示珍貴的音樂盒與自動演奏樂器，並有定時音樂演奏)  10新倉富士淺間神社 (可將富士山、五重塔與櫻花（春季）一同入鏡的經典拍攝地)  11武田神社 (供奉戰國名將武田信玄的神社，位於其居館遺址上，是著名的「勝運」能量景點)  12河口淺間神社 (建於西元865年，擁有超過千年歷史的世界文化遺產。位於神社後方山坡上的「遙拜所」，有「天空鳥居」的美譽，是能眺望富士山與河口湖的絕景之地)  13惠林寺（建於1330年，是戰國名將武田信玄的菩提寺，歷史悠久）  14甲州夢小路 (位於甲府車站旁的復古建築群，重現明治至昭和初期甲府城下町風情的懷舊購物區)  15富士急樂園 (以多項金氏世界紀錄級的雲霄飛車（如FUJIYAMA、高飛車）而聞名的主題樂園)  16石和溫泉 (山梨縣最大規模的溫泉鄉，以「青空溫泉」為起源，周邊盛產桃子和葡萄)  17Hottarakashi溫泉（置之不理溫泉） (位於海拔700公尺高地的日歸溫泉，以能一邊泡湯、一邊欣賞富士山與甲府盆地絕景而聞名)  18猿橋 (日本三大奇橋之一，以其獨特的不設橋墩結構聞名)  19富岳風穴・鳴澤冰穴 (由富士山火山噴發形成的天然熔岩洞穴。即使在盛夏，洞內溫度也維持在0°C左右，是天然的地下冰箱與消暑勝地)  20北口本宮富士淺間神社 (擁有逾一千九百年歷史的富士山信仰聖地)  21甲府城 (曾是統治甲斐國的重要根據地，可從天守台眺望甲府市景與遠方的富士山)  22清里高原 (位於八岳山麓的高原度假勝地，以廣闊的自然景觀和「清里露台」展望台而聞名)  23勝沼葡萄之丘 (日本葡萄酒的發源地，可在地下葡萄酒酒窖試飲多達數百種葡萄酒)   ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 278,
    title: "日本系列-中部~山梨縣-19-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-19X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1本栖湖 (五湖中透明度最高的湖泊，能完美映照富士山。日本千圓紙鈔背面的圖案正是本栖湖與富士山)  2精進湖 (五湖中最小、最靜謐的湖泊，帶有遺世獨立的靜謐感)  3西湖 (戶外活動愛好者的樂園，可釣魚、划獨木舟、露營等)  4河口湖 (富士五湖中最受歡迎的湖泊，以拍攝「逆富士」（富士山倒影）而聞名。可搭乘天上山纜車或遊覽船，從不同角度欣賞富士山美景)  5山中湖 (富士五湖中面積最大，也是距離富士山最近的湖泊。可搭乘河馬水陸兩用船、騎自行車環湖，或在冬季欣賞「鑽石富士」的壯麗景象)  6昇仙峽 (被譽為「日本第一美溪谷」，以奇岩怪石、清澈溪流與仙娥瀑布（日本百瀑之一）聞名)  7忍野八海 (由富士山融雪滲入地下後湧出形成的八個清澈泉池，水質純淨，被列為天然紀念物，景色古樸)  8大石公園 (位於河口湖北岸的熱門景點，可欣賞隨季節變換的花田（如夏季薰衣草、秋季掃帚草）與富士山同框的美景)  9河口湖音樂森林美術館 (歐式童話風格的主題美術館，展示珍貴的音樂盒與自動演奏樂器，並有定時音樂演奏)  10新倉富士淺間神社 (可將富士山、五重塔與櫻花（春季）一同入鏡的經典拍攝地)  11武田神社 (供奉戰國名將武田信玄的神社，位於其居館遺址上，是著名的「勝運」能量景點)  12河口淺間神社 (建於西元865年，擁有超過千年歷史的世界文化遺產。位於神社後方山坡上的「遙拜所」，有「天空鳥居」的美譽，是能眺望富士山與河口湖的絕景之地)  13惠林寺（建於1330年，是戰國名將武田信玄的菩提寺，歷史悠久）  14甲州夢小路 (位於甲府車站旁的復古建築群，重現明治至昭和初期甲府城下町風情的懷舊購物區)  15富士急樂園 (以多項金氏世界紀錄級的雲霄飛車（如FUJIYAMA、高飛車）而聞名的主題樂園)  16石和溫泉 (山梨縣最大規模的溫泉鄉，以「青空溫泉」為起源，周邊盛產桃子和葡萄)  17Hottarakashi溫泉（置之不理溫泉） (位於海拔700公尺高地的日歸溫泉，以能一邊泡湯、一邊欣賞富士山與甲府盆地絕景而聞名)  18猿橋 (日本三大奇橋之一，以其獨特的不設橋墩結構聞名)  19富岳風穴・鳴澤冰穴 (由富士山火山噴發形成的天然熔岩洞穴。即使在盛夏，洞內溫度也維持在0°C左右，是天然的地下冰箱與消暑勝地)  20北口本宮富士淺間神社 (擁有逾一千九百年歷史的富士山信仰聖地)  21甲府城 (曾是統治甲斐國的重要根據地，可從天守台眺望甲府市景與遠方的富士山)  22清里高原 (位於八岳山麓的高原度假勝地，以廣闊的自然景觀和「清里露台」展望台而聞名)  23勝沼葡萄之丘 (日本葡萄酒的發源地，可在地下葡萄酒酒窖試飲多達數百種葡萄酒)   ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 279,
    title: "日本系列-中部~長野縣-20-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-20.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1松本城 (日本國寶，現存最古老的五重六階天守，黑色外牆極具震懾力)  2上田城 (戰國名將真田幸村的居城，真田粉絲必訪)  3上高地 (北阿爾卑斯的玄關，擁有清澈梓川與穗高連峰的絕景)  4白馬八方尾根 (1998年長野冬季奧運會場，日本頂級滑雪勝地)  5志賀高原 (日本最大的滑雪區域之一，夏季也是登山避暑勝地)  6缺  7輕井澤 (日本首屈一指的避暑勝地，歐風別墅與購物中心林立)  8雲場池 (輕井澤的代表性景點，被稱為「天鵝湖」的寧靜湖泊)  9舊輕井澤銀座通 (輕井澤最熱鬧的商店街)  10御射鹿池 (因《你的名字》聖地巡禮而聞名的夢幻湖泊)  11諏訪大社 (日本最古老的神社之一，全國諏訪神社的總本社)  12善光寺 (擁有約1400年歷史的無教派佛寺，本堂為國寶)  13戶隱神社 (坐落於千年杉林中的古老神社，被視為能量聖地)  14小布施町 (以栗子點心與葛飾北齋畫作聞名的小鎮)  15地獄谷野猿公苑 (可觀賞野生日本獼猴在雪中泡溫泉的奇景)  16白骨溫泉 (長野縣的秘湯，乳白色的溫泉水極為獨特)  17野澤溫泉 (日本知名的滑雪與溫泉勝地)  18缺  19阿智村 (被譽為「日本最美星空」的村莊) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 280,
    title: "日本系列-中部~長野縣-20-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-20X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1松本城 (日本國寶，現存最古老的五重六階天守，黑色外牆極具震懾力)  2上田城 (戰國名將真田幸村的居城，真田粉絲必訪)  3上高地 (北阿爾卑斯的玄關，擁有清澈梓川與穗高連峰的絕景)  4白馬八方尾根 (1998年長野冬季奧運會場，日本頂級滑雪勝地)  5志賀高原 (日本最大的滑雪區域之一，夏季也是登山避暑勝地)  6缺  7輕井澤 (日本首屈一指的避暑勝地，歐風別墅與購物中心林立)  8雲場池 (輕井澤的代表性景點，被稱為「天鵝湖」的寧靜湖泊)  9舊輕井澤銀座通 (輕井澤最熱鬧的商店街)  10御射鹿池 (因《你的名字》聖地巡禮而聞名的夢幻湖泊)  11諏訪大社 (日本最古老的神社之一，全國諏訪神社的總本社)  12善光寺 (擁有約1400年歷史的無教派佛寺，本堂為國寶)  13戶隱神社 (坐落於千年杉林中的古老神社，被視為能量聖地)  14小布施町 (以栗子點心與葛飾北齋畫作聞名的小鎮)  15地獄谷野猿公苑 (可觀賞野生日本獼猴在雪中泡溫泉的奇景)  16白骨溫泉 (長野縣的秘湯，乳白色的溫泉水極為獨特)  17野澤溫泉 (日本知名的滑雪與溫泉勝地)  18缺  19阿智村 (被譽為「日本最美星空」的村莊) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 281,
    title: "日本系列-中部~岐阜縣-21-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-21.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1白川鄉合掌造聚落 (世界文化遺產，獨特的合掌造茅草屋建築，冬季點燈如童話世界)  2飛驒之里 (移建合掌造民家的野外博物館，可體驗飛驒傳統生活)  3飛驒高山（高山老街） (被稱為「飛驒的小京都」，保留江戶時代木造町屋的城下町風情)  4郡上八幡 (以郡上舞聞名的城下町，保留白牆土藏與清澈水路)  5馬籠宿 (中山道上的宿場町，石板坡道與木造建築充滿江戶風情)  6美濃市（卯建房屋街道） (以美濃和紙聞名，街道兩旁是江戶時代的町家建築)  7下呂溫泉 (與草津、有馬並列「日本三名泉」，以「美人湯」聞名)  8奧飛驒溫泉鄉 (由平湯、福地、新平湯等五個溫泉地組成的秘湯群)  9岐阜城（金華山） (織田信長「天下布武」的根據地，可搭乘纜車登頂俯瞰長良川)  10長良川鵜飼 (夏夜在長良川上觀賞傳統鵜鶘捕魚，已有1300年歷史)  11關原古戰場 (決定日本天下的關原之戰舞台，歷史迷必訪)  12伊奈波神社 (擁有超過1900年歷史的古老神社)  13上高地 (被譽為「神的故鄉」，擁有壯麗的山岳景觀與清澈梓川)  14新穗高纜車 (日本唯一的雙層纜車，可欣賞北阿爾卑斯山的壯麗全景)  15乘鞍岳 (日本百名山之一，夏季可登山，秋季紅葉絕美)  16蛭野高原 (冬季滑雪、夏季高原避暑的度假勝地)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 282,
    title: "日本系列-中部~岐阜縣-21-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-21X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1白川鄉合掌造聚落 (世界文化遺產，獨特的合掌造茅草屋建築，冬季點燈如童話世界)  2飛驒之里 (移建合掌造民家的野外博物館，可體驗飛驒傳統生活)  3飛驒高山（高山老街） (被稱為「飛驒的小京都」，保留江戶時代木造町屋的城下町風情)  4郡上八幡 (以郡上舞聞名的城下町，保留白牆土藏與清澈水路)  5馬籠宿 (中山道上的宿場町，石板坡道與木造建築充滿江戶風情)  6美濃市（卯建房屋街道） (以美濃和紙聞名，街道兩旁是江戶時代的町家建築)  7下呂溫泉 (與草津、有馬並列「日本三名泉」，以「美人湯」聞名)  8奧飛驒溫泉鄉 (由平湯、福地、新平湯等五個溫泉地組成的秘湯群)  9岐阜城（金華山） (織田信長「天下布武」的根據地，可搭乘纜車登頂俯瞰長良川)  10長良川鵜飼 (夏夜在長良川上觀賞傳統鵜鶘捕魚，已有1300年歷史)  11關原古戰場 (決定日本天下的關原之戰舞台，歷史迷必訪)  12伊奈波神社 (擁有超過1900年歷史的古老神社)  13上高地 (被譽為「神的故鄉」，擁有壯麗的山岳景觀與清澈梓川)  14新穗高纜車 (日本唯一的雙層纜車，可欣賞北阿爾卑斯山的壯麗全景)  15乘鞍岳 (日本百名山之一，夏季可登山，秋季紅葉絕美)  16蛭野高原 (冬季滑雪、夏季高原避暑的度假勝地)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 283,
    title: "日本系列-中部~靜岡縣-22-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-22.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1富士山 (日本第一高峰，世界文化遺產，靜岡縣側可欣賞其雄偉姿態)  2富士山本宮淺間大社 (全日本淺間神社的總本宮，富士山信仰的中心)  3靜岡縣富士山世界遺產中心 (展示富士山信仰與文化的現代建築)  4三島天空步道 (日本最長的步行吊橋，可眺望富士山與駿河灣)  5日本平 (可將富士山與清水港盡收眼底的絕景展望台)  6久能山東照宮 (德川家康的長眠之地，華麗的社殿為國寶)  7靜岡淺間神社 (靜岡市區的古老神社，與德川家康淵源深厚)  8濱松城 (德川家康年輕時居住的城池，別名「出世城」)  9夢之吊橋 (被譽為「世界最想去的吊橋」之一，橫跨大井川)  10大井川鐵道 (行駛SL蒸汽火車與湯瑪士小火車的觀光鐵道)  11濱名湖 (日本第十大湖，以鰻魚養殖與花卉公園聞名)  12御殿場PREMIUM OUTLET (日本最大的購物中心之一，可同時眺望富士山)  13櫻桃小丸子樂園 (以小丸子為主題的主題樂園，位於清水)  14靜岡MOA美術館 (位於熱海，收藏東洋美術品的美術館)  15伊豆半島 (日本知名的溫泉度假勝地，擁有白濱海岸與修善寺等景點)  16修善寺溫泉 (伊豆半島歷史最悠久的溫泉鄉)  17城崎海岸 (伊豆東海岸的熔岩海岸，有吊橋與奇岩景觀) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 284,
    title: "日本系列-中部~靜岡縣-22-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-22X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1富士山 (日本第一高峰，世界文化遺產，靜岡縣側可欣賞其雄偉姿態)  2富士山本宮淺間大社 (全日本淺間神社的總本宮，富士山信仰的中心)  3靜岡縣富士山世界遺產中心 (展示富士山信仰與文化的現代建築)  4三島天空步道 (日本最長的步行吊橋，可眺望富士山與駿河灣)  5日本平 (可將富士山與清水港盡收眼底的絕景展望台)  6久能山東照宮 (德川家康的長眠之地，華麗的社殿為國寶)  7靜岡淺間神社 (靜岡市區的古老神社，與德川家康淵源深厚)  8濱松城 (德川家康年輕時居住的城池，別名「出世城」)  9夢之吊橋 (被譽為「世界最想去的吊橋」之一，橫跨大井川)  10大井川鐵道 (行駛SL蒸汽火車與湯瑪士小火車的觀光鐵道)  11濱名湖 (日本第十大湖，以鰻魚養殖與花卉公園聞名)  12御殿場PREMIUM OUTLET (日本最大的購物中心之一，可同時眺望富士山)  13櫻桃小丸子樂園 (以小丸子為主題的主題樂園，位於清水)  14靜岡MOA美術館 (位於熱海，收藏東洋美術品的美術館)  15伊豆半島 (日本知名的溫泉度假勝地，擁有白濱海岸與修善寺等景點)  16修善寺溫泉 (伊豆半島歷史最悠久的溫泉鄉)  17城崎海岸 (伊豆東海岸的熔岩海岸，有吊橋與奇岩景觀) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 285,
    title: "日本系列-中部~愛知縣-23-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-23.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1名古屋城 (日本百名城之一，由德川家康下令建造，天守閣上的金鯱是著名標誌)  2熱田神宮 (供奉日本三神器之一的「草薙劍」，是地位極高的古老神社)  3犬山城 (日本現存最古老的木造天守閣之一，國寶級名城，可眺望木曾川美景)  4清洲城 (織田信長統一天下的起點，歷史意義深遠)  5岡崎城 (德川家康的出生地，岡崎公園內有家康銅像與歷史資料館)  6吉卜力公園 (重現吉卜力工作室動畫世界的夢幻主題園區，包含魔女之谷等五大區域)  7日本樂高樂園 (亞洲第二座樂高主題樂園，適合親子同遊)  8愛・地球博紀念公園（Moricoro Park） (2005年萬博會場改建的公園)  9豐田產業技術紀念館 (由豐田集團舊廠房改建，展示豐田從紡織到汽車的發展史)  10磁浮·鐵道館 (展示東海道新幹線與磁浮列車的鐵道博物館)  11名古屋市科學館 (擁有世界最大級別的星象儀)  12名古屋港水族館 (擁有殺人鯨與海豚表演的大型水族館)  13東山動植物園 (結合動物園與植物園的綜合公園)  14大須觀音與大須商店街 (名古屋的千年古寺與熱鬧商店街，被稱為「日本第一活力商店街」)  15香嵐溪 (愛知縣最具代表性的賞楓名所，秋季約4,000株楓樹染紅溪谷)  16博物館「明治村」 (移建保存明治時代建築的野外博物館)  17常滑陶瓷器散步道 (常滑是日本六大古窯之一，散步道可欣賞陶器與招財貓)  18Laguna Ten Bosch (位於蒲郡市的複合式度假村，有遊樂園與溫泉)",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 286,
    title: "日本系列-中部~愛知縣-23-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-23X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1名古屋城 (日本百名城之一，由德川家康下令建造，天守閣上的金鯱是著名標誌)  2熱田神宮 (供奉日本三神器之一的「草薙劍」，是地位極高的古老神社)  3犬山城 (日本現存最古老的木造天守閣之一，國寶級名城，可眺望木曾川美景)  4清洲城 (織田信長統一天下的起點，歷史意義深遠)  5岡崎城 (德川家康的出生地，岡崎公園內有家康銅像與歷史資料館)  6吉卜力公園 (重現吉卜力工作室動畫世界的夢幻主題園區，包含魔女之谷等五大區域)  7日本樂高樂園 (亞洲第二座樂高主題樂園，適合親子同遊)  8愛・地球博紀念公園（Moricoro Park） (2005年萬博會場改建的公園)  9豐田產業技術紀念館 (由豐田集團舊廠房改建，展示豐田從紡織到汽車的發展史)  10磁浮·鐵道館 (展示東海道新幹線與磁浮列車的鐵道博物館)  11名古屋市科學館 (擁有世界最大級別的星象儀)  12名古屋港水族館 (擁有殺人鯨與海豚表演的大型水族館)  13東山動植物園 (結合動物園與植物園的綜合公園)  14大須觀音與大須商店街 (名古屋的千年古寺與熱鬧商店街，被稱為「日本第一活力商店街」)  15香嵐溪 (愛知縣最具代表性的賞楓名所，秋季約4,000株楓樹染紅溪谷)  16博物館「明治村」 (移建保存明治時代建築的野外博物館)  17常滑陶瓷器散步道 (常滑是日本六大古窯之一，散步道可欣賞陶器與招財貓)  18Laguna Ten Bosch (位於蒲郡市的複合式度假村，有遊樂園與溫泉)",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 287,
    title: "日本系列-近畿~三重縣-24-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-24.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1伊勢神宮 (日本地位最高的神社，供奉天照大神，被譽為「日本心靈的故鄉」)  2御袚町與御蔭橫丁 (伊勢神宮前的參道商店街，重現江戶與明治風情)  3夫婦岩（二見興玉神社） (海中的大小兩塊岩石以注連繩相連，是祈求姻緣的聖地)  4鳥羽水族館 (日本飼養種類最多的水族館)  5伊賀流忍者博物館 (可體驗忍者屋敷的機關與欣賞忍者秀)  6西班牙村（Parque España） (以西班牙為主題的主題樂園)  7鈴鹿賽道 (日本最具代表性的國際賽車場，賽車迷聖地)  8長島溫泉樂園 (擁有日本最長雲霄飛車的大型遊樂園)  9VISON (三重縣的大型複合度假設施，結合美食、溫泉與體驗)  10熊野古道（伊勢路） (世界遺產，古時通往熊野三山的參拜道)  11鬼城（世界遺產） (熊野地區的海岸奇岩景觀，被登錄為世界遺產)  12御在所岳 (鈴鹿山脈的代表山峰，纜車可欣賞四季美景)  13赤目四十八瀑布 (被選為「日本瀑布百選」之一，沿溪谷健行可欣賞大小瀑布)  14關宿 (東海道五十三次的宿場町，保留江戶時代街景)  15松阪 (松阪牛的故鄉，可品嚐頂級和牛)  16英虞灣遊船 (志摩半島的里亞斯式海岸，可乘船欣賞珍珠養殖筏與夕陽) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 288,
    title: "日本系列-近畿~三重縣-24-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-24X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1伊勢神宮 (日本地位最高的神社，供奉天照大神，被譽為「日本心靈的故鄉」)  2御袚町與御蔭橫丁 (伊勢神宮前的參道商店街，重現江戶與明治風情)  3夫婦岩（二見興玉神社） (海中的大小兩塊岩石以注連繩相連，是祈求姻緣的聖地)  4鳥羽水族館 (日本飼養種類最多的水族館)  5伊賀流忍者博物館 (可體驗忍者屋敷的機關與欣賞忍者秀)  6西班牙村（Parque España） (以西班牙為主題的主題樂園)  7鈴鹿賽道 (日本最具代表性的國際賽車場，賽車迷聖地)  8長島溫泉樂園 (擁有日本最長雲霄飛車的大型遊樂園)  9VISON (三重縣的大型複合度假設施，結合美食、溫泉與體驗)  10熊野古道（伊勢路） (世界遺產，古時通往熊野三山的參拜道)  11鬼城（世界遺產） (熊野地區的海岸奇岩景觀，被登錄為世界遺產)  12御在所岳 (鈴鹿山脈的代表山峰，纜車可欣賞四季美景)  13赤目四十八瀑布 (被選為「日本瀑布百選」之一，沿溪谷健行可欣賞大小瀑布)  14關宿 (東海道五十三次的宿場町，保留江戶時代街景)  15松阪 (松阪牛的故鄉，可品嚐頂級和牛)  16英虞灣遊船 (志摩半島的里亞斯式海岸，可乘船欣賞珍珠養殖筏與夕陽) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 289,
    title: "日本系列-近畿~滋賀縣-25-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-25.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1琵琶湖：日本最大的淡水湖，佔據滋賀縣六分之一的面積，湖畔騎單車、觀光船遊湖與夏季煙火大會皆為經典體驗。  2彥根城：日本國寶，現存12座原始天守之一，別名「金龜城」，從天守閣可眺望琵琶湖美景。  3安土城遺址：織田信長建造的天下名城遺址，石垣與本丸遺跡仍可遙想當年的雄偉。  4長濱城歷史博物館：位於琵琶湖畔的復古城堡，館內展示豐臣秀吉與長濱的歷史淵源。  5黑壁廣場（長濱市）：由老倉庫群改建的文創聚落，以玻璃工藝為主題，適合漫步與手作體驗。  6海津大崎：琵琶湖畔的賞櫻名所，約800株櫻花沿湖岸盛開，被譽為「關西的吉野山」。  7白鬚神社（湖中鳥居）：琵琶湖西岸的古老神社，朱紅色的鳥居矗立於湖中，日出時分景色如夢似幻。  8浮御堂（滿月寺）：琵琶湖畔的經典風景，祠堂建於湖上，被選為「近江八景」之一。  9水杉林蔭大道（高島市）：全長約2.4公里的水杉並木，四季景色各異，秋季金黃色的林蔭大道美不勝收。  10琵琶湖露台（琵琶湖Valley）：標高1,100公尺的絕景展望台，可將琵琶湖全景盡收眼底。  11瀨田唐橋：被譽為「近江八景」之一的「瀨田之夕照」，古老木橋與夕陽交織出絕美畫面。  12石山寺：與紫式部《源氏物語》淵源深厚的古寺，也是著名的賞楓名所。  13信樂陶藝之里：信樂燒的發源地，可參觀陶藝工坊並體驗手作陶器。  14美秀美術館（MIHO MUSEUM）：建築大師貝聿銘設計的山中美術館，穿越隧道與吊橋如入桃花源。  15近江八幡（八幡堀）：保留江戶時代風貌的水鄉古鎮，乘船漫遊八幡堀運河，兩岸白牆土藏林立。  16日牟禮八幡宮：近江八幡的總鎮守，歷史悠久的古老神社。  17La Collina 近江八幡：由老字號甜點商TANEYA打造的童話風複合設施，建築與自然融為一體。  18比叡山延曆寺：世界文化遺產，日本佛教天台宗的總本山，被譽為「日本佛教的母山」。  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 290,
    title: "日本系列-近畿~滋賀縣-25-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-25X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1琵琶湖：日本最大的淡水湖，佔據滋賀縣六分之一的面積，湖畔騎單車、觀光船遊湖與夏季煙火大會皆為經典體驗。  2彥根城：日本國寶，現存12座原始天守之一，別名「金龜城」，從天守閣可眺望琵琶湖美景。  3安土城遺址：織田信長建造的天下名城遺址，石垣與本丸遺跡仍可遙想當年的雄偉。  4長濱城歷史博物館：位於琵琶湖畔的復古城堡，館內展示豐臣秀吉與長濱的歷史淵源。  5黑壁廣場（長濱市）：由老倉庫群改建的文創聚落，以玻璃工藝為主題，適合漫步與手作體驗。  6海津大崎：琵琶湖畔的賞櫻名所，約800株櫻花沿湖岸盛開，被譽為「關西的吉野山」。  7白鬚神社（湖中鳥居）：琵琶湖西岸的古老神社，朱紅色的鳥居矗立於湖中，日出時分景色如夢似幻。  8浮御堂（滿月寺）：琵琶湖畔的經典風景，祠堂建於湖上，被選為「近江八景」之一。  9水杉林蔭大道（高島市）：全長約2.4公里的水杉並木，四季景色各異，秋季金黃色的林蔭大道美不勝收。  10琵琶湖露台（琵琶湖Valley）：標高1,100公尺的絕景展望台，可將琵琶湖全景盡收眼底。  11瀨田唐橋：被譽為「近江八景」之一的「瀨田之夕照」，古老木橋與夕陽交織出絕美畫面。  12石山寺：與紫式部《源氏物語》淵源深厚的古寺，也是著名的賞楓名所。  13信樂陶藝之里：信樂燒的發源地，可參觀陶藝工坊並體驗手作陶器。  14美秀美術館（MIHO MUSEUM）：建築大師貝聿銘設計的山中美術館，穿越隧道與吊橋如入桃花源。  15近江八幡（八幡堀）：保留江戶時代風貌的水鄉古鎮，乘船漫遊八幡堀運河，兩岸白牆土藏林立。  16日牟禮八幡宮：近江八幡的總鎮守，歷史悠久的古老神社。  17La Collina 近江八幡：由老字號甜點商TANEYA打造的童話風複合設施，建築與自然融為一體。  18比叡山延曆寺：世界文化遺產，日本佛教天台宗的總本山，被譽為「日本佛教的母山」。  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 291,
    title: "日本系列-近畿~京都府-26-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-26.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1嵐山（渡月橋、竹林小徑）：京都的後花園，渡月橋橫跨桂川，竹林小徑光影交錯，四季皆美。  2金閣寺（鹿苑寺）：以金箔覆蓋的舍利殿倒映在鏡湖池中，是京都最經典的風景之一。  3銀閣寺（慈照寺）：與金閣寺齊名，以枯山水庭園與質樸的禪意美學聞名。  4貴船神社：京都知名的戀愛神社，擁有獨特的「水占卜」，夏季的川床料理與流水素麵是季節限定體驗。  5哲學之道：沿著琵琶湖疏水道而建的散步小徑，春季櫻花盛開時美不勝收。  6天龍寺：嵐山的世界遺產，擁有由夢窗疏石設計的絕美曹源池庭園。  7龍安寺：以世界知名的枯山水石庭聞名，15塊石頭的配置充滿禪意。  8京都御所：日本天皇遷都東京前的皇居，可預約參觀體驗皇室風采。  9平安神宮：為紀念平安遷都1100年而建，朱紅色的社殿與廣闊的庭園極為壯觀。  10錦市場：被稱為「京都的廚房」，擁有400多年歷史，可品嚐京野菜、漬物與各種地道小吃。  11清水寺：京都最具代表性的寺院，世界文化遺產。本堂前方的清水舞台採用傳統工法、未用一根釘子搭建，春季櫻花與秋季紅葉皆為絕景。  12祇園（花見小路）：京都最知名的藝妓區，石板路與木造茶屋充滿古都風情，傍晚常有舞妓身影。  13二條城：德川家康在京都的居城，國寶級建築，內部「鶯聲地板」會發出鳥鳴般的聲響。  14三十三間堂：以供奉1,001尊千手觀音立像而聞名，是日本最長的木造建築之一。  15東寺（教王護國寺）：擁有日本現存最高的五重塔，是京都的象徵性地標之一。  16伏見稻荷大社：以「千本鳥居」聞名，數千座朱紅色鳥居綿延至稻荷山頂，是日本最具代表性的神社之一。  17南禪寺：京都五大禪寺之首，三門、方丈庭園與水路閣皆為經典。  18京都國立博物館：收藏大量日本與東洋美術品的國立博物館，建築本身亦為重要文化財。",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 292,
    title: "日本系列-近畿~京都府-26-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-26X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1嵐山（渡月橋、竹林小徑）：京都的後花園，渡月橋橫跨桂川，竹林小徑光影交錯，四季皆美。  2金閣寺（鹿苑寺）：以金箔覆蓋的舍利殿倒映在鏡湖池中，是京都最經典的風景之一。  3銀閣寺（慈照寺）：與金閣寺齊名，以枯山水庭園與質樸的禪意美學聞名。  4貴船神社：京都知名的戀愛神社，擁有獨特的「水占卜」，夏季的川床料理與流水素麵是季節限定體驗。  5哲學之道：沿著琵琶湖疏水道而建的散步小徑，春季櫻花盛開時美不勝收。  6天龍寺：嵐山的世界遺產，擁有由夢窗疏石設計的絕美曹源池庭園。  7龍安寺：以世界知名的枯山水石庭聞名，15塊石頭的配置充滿禪意。  8京都御所：日本天皇遷都東京前的皇居，可預約參觀體驗皇室風采。  9平安神宮：為紀念平安遷都1100年而建，朱紅色的社殿與廣闊的庭園極為壯觀。  10錦市場：被稱為「京都的廚房」，擁有400多年歷史，可品嚐京野菜、漬物與各種地道小吃。  11清水寺：京都最具代表性的寺院，世界文化遺產。本堂前方的清水舞台採用傳統工法、未用一根釘子搭建，春季櫻花與秋季紅葉皆為絕景。  12祇園（花見小路）：京都最知名的藝妓區，石板路與木造茶屋充滿古都風情，傍晚常有舞妓身影。  13二條城：德川家康在京都的居城，國寶級建築，內部「鶯聲地板」會發出鳥鳴般的聲響。  14三十三間堂：以供奉1,001尊千手觀音立像而聞名，是日本最長的木造建築之一。  15東寺（教王護國寺）：擁有日本現存最高的五重塔，是京都的象徵性地標之一。  16伏見稻荷大社：以「千本鳥居」聞名，數千座朱紅色鳥居綿延至稻荷山頂，是日本最具代表性的神社之一。  17南禪寺：京都五大禪寺之首，三門、方丈庭園與水路閣皆為經典。  18京都國立博物館：收藏大量日本與東洋美術品的國立博物館，建築本身亦為重要文化財。",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 293,
    title: "日本系列-近畿~大阪府-27-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-27.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1日本環球影城（USJ） (世界級的主題樂園，擁有「超級任天堂世界」等多元主題園區，是闔家歡樂的首選)  2梅田藍天大廈（空中庭園展望台） (可360度欣賞大阪市區全景的絕佳展望台，夜景尤其浪漫)  3天神橋筋商店街 (日本最長的商店街，全長約2.6公里，充滿在地生活氣息)  4萬博紀念公園（太陽之塔） (1970年萬國博覽會場址，岡本太郎設計的太陽之塔為標誌)  5中之島 (大阪的行政與文化中心，公園綠地與古典建築交織，是都市中的綠洲)  6大阪天滿宮 (供奉學問之神，夏季的「天神祭」是日本三大祭典之一)  7大阪城（天守閣） (日本三大名城之一，由豐臣秀吉建造，天守閣內為歷史博物館，春季櫻花季尤為壯觀)  8海遊館 (世界級規模的水族館，以太平洋生態為主題，鯨鯊是鎮館之寶)  9大阪港（天保山摩天輪） (曾是日本最大級的摩天輪，可同時欣賞港灣與城市景觀)  10心齋橋商店街 (大阪最知名的購物街，從時尚服飾到藥妝雜貨應有盡有，是血拼天堂)  11道頓堀 (大阪美食與娛樂的心臟地帶，格力高跑者招牌與蟹道樂大螃蟹是經典地標，運河兩側霓虹閃爍，越夜越美麗)  12黑門市場 (被稱為「大阪的廚房」，可品嚐新鮮海鮮、和牛與各種地道小吃)  13難波八阪神社 (以巨大的獅子頭造型「獅子殿」聞名，是祈求勝運的能量景點)  14通天閣與新世界 (大阪的復古象徵，新世界街區充滿懷舊下町風情，串炸與居酒屋林立)  15天王寺動物園 (位於天王寺公園內，歷史悠久的動物園，適合親子同遊)  16四天王寺 (日本最早正式引入佛教的寺院，歷史超過1,400年)  17阿倍野HARUKAS展望台 (日本最高大樓的展望台，300公尺高空的視野極為震撼)  18住吉大社 (日本全國住吉神社的總本社，擁有獨特的「住吉造」建築樣式) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 294,
    title: "日本系列-近畿~大阪府-27-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-27X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1日本環球影城（USJ） (世界級的主題樂園，擁有「超級任天堂世界」等多元主題園區，是闔家歡樂的首選)  2梅田藍天大廈（空中庭園展望台） (可360度欣賞大阪市區全景的絕佳展望台，夜景尤其浪漫)  3天神橋筋商店街 (日本最長的商店街，全長約2.6公里，充滿在地生活氣息)  4萬博紀念公園（太陽之塔） (1970年萬國博覽會場址，岡本太郎設計的太陽之塔為標誌)  5中之島 (大阪的行政與文化中心，公園綠地與古典建築交織，是都市中的綠洲)  6大阪天滿宮 (供奉學問之神，夏季的「天神祭」是日本三大祭典之一)  7大阪城（天守閣） (日本三大名城之一，由豐臣秀吉建造，天守閣內為歷史博物館，春季櫻花季尤為壯觀)  8海遊館 (世界級規模的水族館，以太平洋生態為主題，鯨鯊是鎮館之寶)  9大阪港（天保山摩天輪） (曾是日本最大級的摩天輪，可同時欣賞港灣與城市景觀)  10心齋橋商店街 (大阪最知名的購物街，從時尚服飾到藥妝雜貨應有盡有，是血拼天堂)  11道頓堀 (大阪美食與娛樂的心臟地帶，格力高跑者招牌與蟹道樂大螃蟹是經典地標，運河兩側霓虹閃爍，越夜越美麗)  12黑門市場 (被稱為「大阪的廚房」，可品嚐新鮮海鮮、和牛與各種地道小吃)  13難波八阪神社 (以巨大的獅子頭造型「獅子殿」聞名，是祈求勝運的能量景點)  14通天閣與新世界 (大阪的復古象徵，新世界街區充滿懷舊下町風情，串炸與居酒屋林立)  15天王寺動物園 (位於天王寺公園內，歷史悠久的動物園，適合親子同遊)  16四天王寺 (日本最早正式引入佛教的寺院，歷史超過1,400年)  17阿倍野HARUKAS展望台 (日本最高大樓的展望台，300公尺高空的視野極為震撼)  18住吉大社 (日本全國住吉神社的總本社，擁有獨特的「住吉造」建築樣式) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 295,
    title: "日本系列-近畿~兵庫縣-28-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-28.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1竹田城跡：被稱為「天空之城」，秋冬清晨雲海環繞時如漂浮空中。  2城崎溫泉：擁有超過1,300年歷史的溫泉鄉，七座外湯巡禮是經典體驗。  3出石城跡：被稱為「但馬的小京都」，城下町的古老街景與出石蕎麥麵遠近馳名。  4寶塚大劇場：寶塚歌劇團的根據地，全女性演員的華麗舞台表演風靡全球。  5姬路城：日本首座世界文化遺產，擁有超過400年歷史，雪白的天守閣如白鷺展翅，被譽為「日本第一名城」。  6好古園：姬路城旁的日本庭園，借景姬路城，四季花卉與池泉回遊式庭園優美動人。  7神戶布引香草園：可搭乘纜車上山，欣賞廣闊的香草花園與神戶全景。  8六甲山：可將神戶市區與大阪灣盡收眼底，山頂的夜景與函館、長崎並列「日本三大夜景」。  9摩耶山：從掬星台欣賞的「百萬夜景」被譽為日本三大夜景之一。  10北野異人館街：神戶開港時期外國人居住的西洋建築群，風見雞館是最具代表性的建築。  11生田神社：神戶最古老的神社之一，創建於西元201年，是著名的結緣聖地。  12神戶港塔與美利堅公園：神戶港的標誌性建築，2024年重新開放後新增空中甲板，可360度眺望港灣與六甲山景。  13神戶動物王國：可與水豚、小貓熊等動物近距離互動，鳥類表演精彩，適合親子同遊。  14明石海峽大橋：世界最長的吊橋之一，全長3,911公尺，可登頂體驗「舞子海上步道」。  15淡路島（淡路夢舞台、鳴門漩渦）：安藤忠雄設計的夢舞台花園壯麗繽紛，鳴門海峽的漩渦奇景令人震撼。  16須磨浦公園：神戶西部的海濱公園，可欣賞明石海峽大橋與瀨戶內海的絕美海景。  17有馬溫泉：日本三大古湯之一，以金黃色的「金泉」與無色透明的「銀泉」聞名，歷史超過千年。  18二次元之森：位於淡路島的動漫主題樂園，以《火影忍者》《哥吉拉》等作品為主題。",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 296,
    title: "日本系列-近畿~兵庫縣-28-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-28X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1竹田城跡：被稱為「天空之城」，秋冬清晨雲海環繞時如漂浮空中。  2城崎溫泉：擁有超過1,300年歷史的溫泉鄉，七座外湯巡禮是經典體驗。  3出石城跡：被稱為「但馬的小京都」，城下町的古老街景與出石蕎麥麵遠近馳名。  4寶塚大劇場：寶塚歌劇團的根據地，全女性演員的華麗舞台表演風靡全球。  5姬路城：日本首座世界文化遺產，擁有超過400年歷史，雪白的天守閣如白鷺展翅，被譽為「日本第一名城」。  6好古園：姬路城旁的日本庭園，借景姬路城，四季花卉與池泉回遊式庭園優美動人。  7神戶布引香草園：可搭乘纜車上山，欣賞廣闊的香草花園與神戶全景。  8六甲山：可將神戶市區與大阪灣盡收眼底，山頂的夜景與函館、長崎並列「日本三大夜景」。  9摩耶山：從掬星台欣賞的「百萬夜景」被譽為日本三大夜景之一。  10北野異人館街：神戶開港時期外國人居住的西洋建築群，風見雞館是最具代表性的建築。  11生田神社：神戶最古老的神社之一，創建於西元201年，是著名的結緣聖地。  12神戶港塔與美利堅公園：神戶港的標誌性建築，2024年重新開放後新增空中甲板，可360度眺望港灣與六甲山景。  13神戶動物王國：可與水豚、小貓熊等動物近距離互動，鳥類表演精彩，適合親子同遊。  14明石海峽大橋：世界最長的吊橋之一，全長3,911公尺，可登頂體驗「舞子海上步道」。  15淡路島（淡路夢舞台、鳴門漩渦）：安藤忠雄設計的夢舞台花園壯麗繽紛，鳴門海峽的漩渦奇景令人震撼。  16須磨浦公園：神戶西部的海濱公園，可欣賞明石海峽大橋與瀨戶內海的絕美海景。  17有馬溫泉：日本三大古湯之一，以金黃色的「金泉」與無色透明的「銀泉」聞名，歷史超過千年。  18二次元之森：位於淡路島的動漫主題樂園，以《火影忍者》《哥吉拉》等作品為主題。",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 297,
    title: "日本系列-近畿~奈良縣-29-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-29.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1東大寺（大佛殿）：世界文化遺產，擁有世界最大的木造建築，內置高達14.98公尺的「奈良大佛」，氣勢磅礴。  2奈良公園：佔地超過500公頃，園內東大寺、春日大社、興福寺等文化遺產林立，野生鹿群自由漫步是其代表性風景。  3春日大社：世界文化遺產，以朱紅色的社殿與數千盞石燈籠聞名，是奈良最重要的神社之一。  4興福寺（五重塔）：世界文化遺產，國寶五重塔與東金堂為代表性建築，阿修羅像被譽為天平佛雕的傑作。  5平城宮跡：世界文化遺產，奈良時代平城京的宮殿遺址，朱雀門與大極殿已部分復原。  6奈良國立博物館：收藏大量奈良時代的佛教美術品，是日本最重要的佛教藝術博物館之一。  7奈良町：保留江戶至明治時期町家建築的古樸街區，老屋改建的咖啡廳與雜貨店遍布。  8法隆寺：世界文化遺產，被認為是世界上最古老的木造建築群，飛鳥時代的建築傑作。  9藥師寺：世界文化遺產，以「藥師三尊像」與東塔聞名，是白鳳時代佛教藝術的瑰寶。  10唐招提寺：世界文化遺產，由唐朝鑑真和尚創建，保留濃厚的唐代建築風格。  11吉野山：日本首屈一指的賞櫻名所，春季約3萬株櫻花覆蓋整座山，被譽為「一目千本」。  12室生寺：被稱為「女人高野」，是少數允許女性參拜的寺院，五重塔為國寶。  13長谷寺：以十一面觀音立像與四季花卉聞名，春季的牡丹與秋季的紅葉尤為美麗。  14談山神社：建於山腰的朱紅色神社，秋季楓紅與多寶塔相映成趣。  15飛鳥寺：日本最古老的佛教寺院，供奉日本最古老的佛像「飛鳥大佛」。  16橿原神宮：建於日本初代天皇神武天皇的即位之地，是皇室信仰的重要據點。  17今井町：保留完整江戶時代町家建築的傳統聚落，被列為重要傳統建造物群保存地區。  18若草山：奈良公園內的小山丘，可俯瞰奈良市區，每年1月的「若草山燒山」是傳統盛事。",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 298,
    title: "日本系列-近畿~奈良縣-29-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-29X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1東大寺（大佛殿）：世界文化遺產，擁有世界最大的木造建築，內置高達14.98公尺的「奈良大佛」，氣勢磅礴。  2奈良公園：佔地超過500公頃，園內東大寺、春日大社、興福寺等文化遺產林立，野生鹿群自由漫步是其代表性風景。  3春日大社：世界文化遺產，以朱紅色的社殿與數千盞石燈籠聞名，是奈良最重要的神社之一。  4興福寺（五重塔）：世界文化遺產，國寶五重塔與東金堂為代表性建築，阿修羅像被譽為天平佛雕的傑作。  5平城宮跡：世界文化遺產，奈良時代平城京的宮殿遺址，朱雀門與大極殿已部分復原。  6奈良國立博物館：收藏大量奈良時代的佛教美術品，是日本最重要的佛教藝術博物館之一。  7奈良町：保留江戶至明治時期町家建築的古樸街區，老屋改建的咖啡廳與雜貨店遍布。  8法隆寺：世界文化遺產，被認為是世界上最古老的木造建築群，飛鳥時代的建築傑作。  9藥師寺：世界文化遺產，以「藥師三尊像」與東塔聞名，是白鳳時代佛教藝術的瑰寶。  10唐招提寺：世界文化遺產，由唐朝鑑真和尚創建，保留濃厚的唐代建築風格。  11吉野山：日本首屈一指的賞櫻名所，春季約3萬株櫻花覆蓋整座山，被譽為「一目千本」。  12室生寺：被稱為「女人高野」，是少數允許女性參拜的寺院，五重塔為國寶。  13長谷寺：以十一面觀音立像與四季花卉聞名，春季的牡丹與秋季的紅葉尤為美麗。  14談山神社：建於山腰的朱紅色神社，秋季楓紅與多寶塔相映成趣。  15飛鳥寺：日本最古老的佛教寺院，供奉日本最古老的佛像「飛鳥大佛」。  16橿原神宮：建於日本初代天皇神武天皇的即位之地，是皇室信仰的重要據點。  17今井町：保留完整江戶時代町家建築的傳統聚落，被列為重要傳統建造物群保存地區。  18若草山：奈良公園內的小山丘，可俯瞰奈良市區，每年1月的「若草山燒山」是傳統盛事。",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 299,
    title: "日本系列-近畿~和歌山縣-30-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-30.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1熊野古道（世界文化遺產，千年來無數人徒步朝聖的參拜道  2熊野三山（熊野本宮大社、熊野速玉大社、熊野那智大社合稱「熊野三山」）  3那智瀑布：日本落差最大的瀑布（133公尺），與熊野那智大社相鄰，被視為神聖的能量景點。  4  5龍神溫泉：被譽為「日本天下第一美人湯」的秘湯，泉質滑順，深受女性喜愛。  6高野山（奧之院、金剛峯寺）：弘法大師空海開創的日本佛教聖地，奧之院為大師入定之處，氣氛莊嚴肅穆。  7和歌山城：日本百名城之一，與松山城、姬路城並列「日本三大連立式平山城」。  8紀三井寺：和歌山市的代表性古寺，以「紀三井」名水與春季櫻花聞名。  9和歌浦：自平安時代以來被文人墨客詠讚的絕景海岸，古老神社與奇岩海岸交織。  10友島：被稱為「日本的軍艦島」，曾是軍事要塞，廢墟景觀與自然風光交織。  11白濱溫泉（圓月島）：與有馬、道後並列日本三大古湯，圓月島的海蝕洞是白濱的標誌性景觀。  12圓月島（夕陽從園洞落入海中，絕景地標）  13冒險大世界（Adventure World）：日本飼養熊貓數量最多的動物園，同時也是遊樂園與水族館的複合設施。  14串本（橋杭岩）：紀伊半島最南端，奇岩如橋墩般排列於海中，日出時分尤為壯觀。  15潮岬：本州最南端的海岬，白色燈塔與太平洋的遼闊海景令人心曠神怡。  16太地町（鯨魚博物館）：日本傳統捕鯨文化的發源地，可了解鯨魚生態與歷史。  17根來寺：以豐臣秀吉「根來攻め」的歷史舞台聞名，擁有日本最大的多寶塔。  18歐羅巴港（和歌山遊艇城）：重現中世紀歐洲街景的主題園區，充滿異國風情。  19貓咪電車（貴志川線）：以貓站長「小玉」聞名的特色鐵道，列車有貓咪造型，可愛療癒。  20生石高原：和歌山縣的草原台地，可360度眺望紀伊山地與太平洋，秋季芒草如金色波浪。  21湯峰溫泉：隱身於熊野山中的秘境溫泉，據傳擁有超過1,800年歷史，是日本最古老的溫泉之一。",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 300,
    title: "日本系列-近畿~和歌山縣-30-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-30X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1熊野古道（世界文化遺產，千年來無數人徒步朝聖的參拜道  2熊野三山（熊野本宮大社、熊野速玉大社、熊野那智大社合稱「熊野三山」）  3那智瀑布：日本落差最大的瀑布（133公尺），與熊野那智大社相鄰，被視為神聖的能量景點。  4  5龍神溫泉：被譽為「日本天下第一美人湯」的秘湯，泉質滑順，深受女性喜愛。  6高野山（奧之院、金剛峯寺）：弘法大師空海開創的日本佛教聖地，奧之院為大師入定之處，氣氛莊嚴肅穆。  7和歌山城：日本百名城之一，與松山城、姬路城並列「日本三大連立式平山城」。  8紀三井寺：和歌山市的代表性古寺，以「紀三井」名水與春季櫻花聞名。  9和歌浦：自平安時代以來被文人墨客詠讚的絕景海岸，古老神社與奇岩海岸交織。  10友島：被稱為「日本的軍艦島」，曾是軍事要塞，廢墟景觀與自然風光交織。  11白濱溫泉（圓月島）：與有馬、道後並列日本三大古湯，圓月島的海蝕洞是白濱的標誌性景觀。  12圓月島（夕陽從園洞落入海中，絕景地標）  13冒險大世界（Adventure World）：日本飼養熊貓數量最多的動物園，同時也是遊樂園與水族館的複合設施。  14串本（橋杭岩）：紀伊半島最南端，奇岩如橋墩般排列於海中，日出時分尤為壯觀。  15潮岬：本州最南端的海岬，白色燈塔與太平洋的遼闊海景令人心曠神怡。  16太地町（鯨魚博物館）：日本傳統捕鯨文化的發源地，可了解鯨魚生態與歷史。  17根來寺：以豐臣秀吉「根來攻め」的歷史舞台聞名，擁有日本最大的多寶塔。  18歐羅巴港（和歌山遊艇城）：重現中世紀歐洲街景的主題園區，充滿異國風情。  19貓咪電車（貴志川線）：以貓站長「小玉」聞名的特色鐵道，列車有貓咪造型，可愛療癒。  20生石高原：和歌山縣的草原台地，可360度眺望紀伊山地與太平洋，秋季芒草如金色波浪。  21湯峰溫泉：隱身於熊野山中的秘境溫泉，據傳擁有超過1,800年歷史，是日本最古老的溫泉之一。",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 301,
    title: "日本系列-中國~鳥取縣-31-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-31.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1鳥取砂丘 (日本最大的觀光砂丘，綿延約16公里，已被指定為國家天然紀念物)  2砂之美術館 (全球首個室內砂雕美術館，每年邀請世界各地的藝術家創作不同主題的砂雕)  3浦富海岸 (擁有裡亞斯式海岸的絕景，海水清澈見底，被譽為「山陰的松島」)  4白兔神社 (與神話「因幡的白兔」有關，是著名的戀愛結緣神社)  5柯南小鎮（北榮町） (《名偵探柯南》作者青山剛昌的故鄉，到處是漫畫角色的雕塑和銅像)  6水木茂之路（境港市） (《鬼太郎》作者水木茂的故鄉，街道兩旁立滿了妖怪銅像)  7大山 (中國地區的最高峰，擁有壯麗的山景，四季皆宜)  8大鹿瀑布 (落差24米的瀑布，被列為「諸鹿七瀑」之一)  9皆生溫泉 (面向日本海的溫泉鄉，可一邊泡湯一邊欣賞海景)  10三朝溫泉 (以高濃度氡元素而聞名的溫泉，是世界罕見的放射性溫泉)  11倉吉白壁土藏群 (保留著白牆倉庫和古老街景的建築群，充滿復古風情)  12植田正治美術館 (為紀念著名攝影師植田正治而建的美術館，建築本身也是藝術品)  13二十世紀梨博物館 (以鳥取縣特產「二十世紀梨」為主題的博物館)  14鳥取港海鮮賀露市場 (可品嘗到鳥取縣特產「紅楚蟹」等新鮮海鮮)  15高濱咖啡廳 (由建築大師隈研吾設計的咖啡廳，是鳥取市的新興打卡地)  16若櫻鐵道 (行駛在鄉間的觀光小火車，可欣賞沿途田園風光) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 302,
    title: "日本系列-中國~鳥取縣-31-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-31X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1鳥取砂丘 (日本最大的觀光砂丘，綿延約16公里，已被指定為國家天然紀念物)  2砂之美術館 (全球首個室內砂雕美術館，每年邀請世界各地的藝術家創作不同主題的砂雕)  3浦富海岸 (擁有裡亞斯式海岸的絕景，海水清澈見底，被譽為「山陰的松島」)  4白兔神社 (與神話「因幡的白兔」有關，是著名的戀愛結緣神社)  5柯南小鎮（北榮町） (《名偵探柯南》作者青山剛昌的故鄉，到處是漫畫角色的雕塑和銅像)  6水木茂之路（境港市） (《鬼太郎》作者水木茂的故鄉，街道兩旁立滿了妖怪銅像)  7大山 (中國地區的最高峰，擁有壯麗的山景，四季皆宜)  8大鹿瀑布 (落差24米的瀑布，被列為「諸鹿七瀑」之一)  9皆生溫泉 (面向日本海的溫泉鄉，可一邊泡湯一邊欣賞海景)  10三朝溫泉 (以高濃度氡元素而聞名的溫泉，是世界罕見的放射性溫泉)  11倉吉白壁土藏群 (保留著白牆倉庫和古老街景的建築群，充滿復古風情)  12植田正治美術館 (為紀念著名攝影師植田正治而建的美術館，建築本身也是藝術品)  13二十世紀梨博物館 (以鳥取縣特產「二十世紀梨」為主題的博物館)  14鳥取港海鮮賀露市場 (可品嘗到鳥取縣特產「紅楚蟹」等新鮮海鮮)  15高濱咖啡廳 (由建築大師隈研吾設計的咖啡廳，是鳥取市的新興打卡地)  16若櫻鐵道 (行駛在鄉間的觀光小火車，可欣賞沿途田園風光) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 303,
    title: "日本系列-中國~島根縣-32-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-32.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1出雲大社 (日本最古老、地位最高的神社之一，以供奉「大國主大神」和巨型「注連繩」聞名)  2島根縣立古代出雲歷史博物館 (展示出雲地區歷史和文化的博物館，緊鄰出雲大社)  3日御碕神社 (位於出雲市的海邊神社，與出雲大社齊名)  4出雲日御碕燈塔 (矗立在懸崖上的白色燈塔，是島根縣的標誌性景觀之一)  5松江城 (山陰地區現存唯一完整保存的天守閣，為國寶，別稱「千鳥城」)  6宍道湖 (日本第七大湖，以入選「日本夕陽百選」的絕美日落景色聞名)  7足立美術館 (以擁有頂級的日本庭園而聞名，庭園在雜誌評選中常獲高分)  8由志園 (大根島上的傳統回游式日本庭園，以牡丹花聞名)  9玉造溫泉 (歷史悠久的溫泉鄉，泉水有「美肌之湯」的美譽)  10石見銀山 (亞洲首個被列入世界遺產的礦山遺址)  11溫泉津溫泉 (位於石見銀山附近的溫泉，曾是銀山從業者的療養地)  12三瓶山 (中國地區僅有的兩座活火山之一，是登山和戶外活動的熱門地點)  13隱岐諸島 (被認定為聯合國教科文組織世界地質公園，擁有壯麗的自然景觀)  14津和野 (保留著古老街道風貌的城下町，有「山陰的小京都」之稱)  15八重垣神社 (知名的結緣神社，與出雲神話有關)  16安來節演藝館 (可欣賞傳統藝術「安來節」的表演場館)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 304,
    title: "日本系列-中國~島根縣-32-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-32X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1出雲大社 (日本最古老、地位最高的神社之一，以供奉「大國主大神」和巨型「注連繩」聞名)  2島根縣立古代出雲歷史博物館 (展示出雲地區歷史和文化的博物館，緊鄰出雲大社)  3日御碕神社 (位於出雲市的海邊神社，與出雲大社齊名)  4出雲日御碕燈塔 (矗立在懸崖上的白色燈塔，是島根縣的標誌性景觀之一)  5松江城 (山陰地區現存唯一完整保存的天守閣，為國寶，別稱「千鳥城」)  6宍道湖 (日本第七大湖，以入選「日本夕陽百選」的絕美日落景色聞名)  7足立美術館 (以擁有頂級的日本庭園而聞名，庭園在雜誌評選中常獲高分)  8由志園 (大根島上的傳統回游式日本庭園，以牡丹花聞名)  9玉造溫泉 (歷史悠久的溫泉鄉，泉水有「美肌之湯」的美譽)  10石見銀山 (亞洲首個被列入世界遺產的礦山遺址)  11溫泉津溫泉 (位於石見銀山附近的溫泉，曾是銀山從業者的療養地)  12三瓶山 (中國地區僅有的兩座活火山之一，是登山和戶外活動的熱門地點)  13隱岐諸島 (被認定為聯合國教科文組織世界地質公園，擁有壯麗的自然景觀)  14津和野 (保留著古老街道風貌的城下町，有「山陰的小京都」之稱)  15八重垣神社 (知名的結緣神社，與出雲神話有關)  16安來節演藝館 (可欣賞傳統藝術「安來節」的表演場館)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 305,
    title: "日本系列-中國~岡山縣-33-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-33.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1岡山後樂園 (日本三大名園之一，是一座精緻的回游式庭園)  2岡山城 (日本百名城之一，因黑色外牆而被稱為「烏城」)  3倉敷美觀地區 (白牆倉庫與運河交織的古老街區，充滿大正浪漫風情)  4大原美術館 (位於倉敷，是日本第一家西洋美術館，收藏豐富)  5吉備津神社 (與桃太郎傳說有關的神社，擁有長長的回廊)  6最上稻荷 (日本三大稻荷之一，是岡山著名的能量景點)  7備中松山城 (日本百名城之一，是現存天守閣中海拔最高的山城)  8吹屋故鄉村 (保留著江戶時代銅礦小鎮風貌的傳統建築群)  9湯原溫泉 (「美作三湯」之一，是西日本知名的溫泉鄉)  10奧津溫泉 (「美作三湯」之一，以優美的溪谷景色聞名)  11湯鄉溫泉 (「美作三湯」之一，歷史悠久)  12神庭瀑布 (被選入「日本瀑布百選」和「日本百景」的著名瀑布)  13蒜山高原 (位於岡山縣北部的高原度假勝地，可體驗戶外活動)  14GREENable HIRUZEN (位於蒜山的可持續性旅遊設施，設計現代)  15黑島金星路 (位於瀨戶內市的沿海公路，日落時分景色迷人)  16岡山南村 (充滿南歐風情的農業公園)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 306,
    title: "日本系列-中國~岡山縣-33-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-33X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1岡山後樂園 (日本三大名園之一，是一座精緻的回游式庭園)  2岡山城 (日本百名城之一，因黑色外牆而被稱為「烏城」)  3倉敷美觀地區 (白牆倉庫與運河交織的古老街區，充滿大正浪漫風情)  4大原美術館 (位於倉敷，是日本第一家西洋美術館，收藏豐富)  5吉備津神社 (與桃太郎傳說有關的神社，擁有長長的回廊)  6最上稻荷 (日本三大稻荷之一，是岡山著名的能量景點)  7備中松山城 (日本百名城之一，是現存天守閣中海拔最高的山城)  8吹屋故鄉村 (保留著江戶時代銅礦小鎮風貌的傳統建築群)  9湯原溫泉 (「美作三湯」之一，是西日本知名的溫泉鄉)  10奧津溫泉 (「美作三湯」之一，以優美的溪谷景色聞名)  11湯鄉溫泉 (「美作三湯」之一，歷史悠久)  12神庭瀑布 (被選入「日本瀑布百選」和「日本百景」的著名瀑布)  13蒜山高原 (位於岡山縣北部的高原度假勝地，可體驗戶外活動)  14GREENable HIRUZEN (位於蒜山的可持續性旅遊設施，設計現代)  15黑島金星路 (位於瀨戶內市的沿海公路，日落時分景色迷人)  16岡山南村 (充滿南歐風情的農業公園)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 307,
    title: "日本系列-中國~廣島縣-34-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-34.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1嚴島神社（宮島） (世界文化遺產，日本三景之一，以建在海上的「浮起」大鳥居而聞名)  2原爆圓頂館 (世界文化遺產，原子彈爆炸後倖存下來的建築遺跡，是和平的象徵)  3廣島和平紀念公園 (為祈求和平而建的公園，園內有和平紀念資料館、原爆之子像等)  4廣島城 (別名「鯉城」，是日本百大名城之一)  5廣島紙鶴塔 (毗鄰原爆圓頂館，可登塔眺望和平紀念公園的展望台)  6廣島市環境局中工廠 (由建築大師谷口吉生設計的垃圾焚化廠，是美學與實用性的結合)  7大久野島 (島上棲息著數百隻野生兔子，也被稱為「兔子島」)  8耕三寺 (位於生口島，是一座色彩鮮豔的寺廟)  9未來心之丘 (位於耕三寺旁，由白色大理石打造的現代藝術庭園)  10鞆之浦 (保留著古老街道的港口小鎮，風景如畫)  11御手洗老街 (位於吳市，曾是繁榮的港口，保留著許多歷史建築)  12尾道 (充滿風情的山坡小城，以千光寺和「貓之細道」聞名)  13千光寺 (位於尾道的山頂寺廟，可俯瞰瀨戶內海的海景)  14貓之細道(擺設有許多貓咪裝飾的散策小道)  15三段峽 (日本五大名峽之一，被原始森林環繞的峽谷，秋季紅葉尤為壯觀)  16世羅町 (以廣闊的薰衣草田和藝術空間聞名)  17瀨戶內海 (散佈著眾多島嶼，風景優美，可乘船遊覽) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 308,
    title: "日本系列-中國~廣島縣-34-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-34X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1嚴島神社（宮島） (世界文化遺產，日本三景之一，以建在海上的「浮起」大鳥居而聞名)  2原爆圓頂館 (世界文化遺產，原子彈爆炸後倖存下來的建築遺跡，是和平的象徵)  3廣島和平紀念公園 (為祈求和平而建的公園，園內有和平紀念資料館、原爆之子像等)  4廣島城 (別名「鯉城」，是日本百大名城之一)  5廣島紙鶴塔 (毗鄰原爆圓頂館，可登塔眺望和平紀念公園的展望台)  6廣島市環境局中工廠 (由建築大師谷口吉生設計的垃圾焚化廠，是美學與實用性的結合)  7大久野島 (島上棲息著數百隻野生兔子，也被稱為「兔子島」)  8耕三寺 (位於生口島，是一座色彩鮮豔的寺廟)  9未來心之丘 (位於耕三寺旁，由白色大理石打造的現代藝術庭園)  10鞆之浦 (保留著古老街道的港口小鎮，風景如畫)  11御手洗老街 (位於吳市，曾是繁榮的港口，保留著許多歷史建築)  12尾道 (充滿風情的山坡小城，以千光寺和「貓之細道」聞名)  13千光寺 (位於尾道的山頂寺廟，可俯瞰瀨戶內海的海景)  14貓之細道(擺設有許多貓咪裝飾的散策小道)  15三段峽 (日本五大名峽之一，被原始森林環繞的峽谷，秋季紅葉尤為壯觀)  16世羅町 (以廣闊的薰衣草田和藝術空間聞名)  17瀨戶內海 (散佈著眾多島嶼，風景優美，可乘船遊覽) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 309,
    title: "日本系列-中國~山口縣-35-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-35.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1角島大橋 (全長約1780米的跨海大橋，是廣告和日劇的熱門取景地，被譽為「一生必看的風景」)  2日和山公園 (可眺望日本海和角島大橋絕景的公園)  3元乃隅神社 (123座紅色鳥居沿著斷崖面向日本海延綿，被CNN評為「日本最美31個景點」之一)  4別府弁天池 (有著透明藍色池水的秘境，被列為日本名水百選之一)  5秋芳洞 (日本三大鐘乳洞之一，位於秋吉台國定公園地下100米處，洞內景觀令人歎為觀止)  6秋吉台(日本最大的克斯特高原)  7錦帶橋 (日本三大名橋之一，是一座有五段拱形的木造橋樑，橫跨錦川，四季景色宜人)  8萩城下町 (保存完好的武士宅邸和石板街道，可體驗江戶時代風情，感受「西之京都」的韻味)  9唐戶市場 (下關市的廚房，以新鮮的海鮮和河豚料理聞名)  10仙崎廚房 (緊鄰漁港的公路休息站，可品嘗漁港直送的海鮮美食)  11長門湯本溫泉 (山口縣五大名湯之一，歷史悠久的溫泉小鎮)  12湯田溫泉 (同樣知名的溫泉鄉，適合放鬆身心)  13雲林寺 (被昵稱為「貓寺」，寺內有超過600件貓主題的木雕和擺飾)  14巖流島 (著名的歷史舞臺，是宮本武藏與佐佐木小次郎決鬥之地)  15菜香亭 (可體驗穿和服並拍照留念的日式料亭)  16下關 (河豚的重要產地，可在此品嘗頂級的河豚料理)  17瑠璃光寺五重塔 (位於山口市的國寶，是室町時代建築的代表作)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 310,
    title: "日本系列-中國~山口縣-35-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-35X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1角島大橋 (全長約1780米的跨海大橋，是廣告和日劇的熱門取景地，被譽為「一生必看的風景」)  2日和山公園 (可眺望日本海和角島大橋絕景的公園)  3元乃隅神社 (123座紅色鳥居沿著斷崖面向日本海延綿，被CNN評為「日本最美31個景點」之一)  4別府弁天池 (有著透明藍色池水的秘境，被列為日本名水百選之一)  5秋芳洞 (日本三大鐘乳洞之一，位於秋吉台國定公園地下100米處，洞內景觀令人歎為觀止)  6秋吉台(日本最大的克斯特高原)  7錦帶橋 (日本三大名橋之一，是一座有五段拱形的木造橋樑，橫跨錦川，四季景色宜人)  8萩城下町 (保存完好的武士宅邸和石板街道，可體驗江戶時代風情，感受「西之京都」的韻味)  9唐戶市場 (下關市的廚房，以新鮮的海鮮和河豚料理聞名)  10仙崎廚房 (緊鄰漁港的公路休息站，可品嘗漁港直送的海鮮美食)  11長門湯本溫泉 (山口縣五大名湯之一，歷史悠久的溫泉小鎮)  12湯田溫泉 (同樣知名的溫泉鄉，適合放鬆身心)  13雲林寺 (被昵稱為「貓寺」，寺內有超過600件貓主題的木雕和擺飾)  14巖流島 (著名的歷史舞臺，是宮本武藏與佐佐木小次郎決鬥之地)  15菜香亭 (可體驗穿和服並拍照留念的日式料亭)  16下關 (河豚的重要產地，可在此品嘗頂級的河豚料理)  17瑠璃光寺五重塔 (位於山口市的國寶，是室町時代建築的代表作)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 311,
    title: "日本系列-四國~德島縣-36-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-36.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1鳴門漩渦 (世界三大漩渦之一，因鳴門海峽潮位差產生，最大直徑可超過20公尺。可從大鳴門橋上的「渦之道」或搭乘觀潮船近距離觀賞)  2大塚國際美術館 (將超過1000幅世界名畫以陶板畫重現的美術館，可近距離觸摸欣賞)  3大步危・小步危 (吉野川歷經2億年沖積而成的溪谷，長約8公里，奇岩峭壁景致優美，被列為國家指定天然紀念物。可搭乘觀光遊覽船體驗秘境絕景)  4祖谷藤蔓橋 (日本三大奇橋之一，全長45公尺的藤蔓編織橋梁橫跨祖谷溪，走在橋上搖晃驚險)  5小便小僧 (位於祖谷峽谷高200公尺崖上的小僧雕像，是德島出身的雕塑家河崎良行於1968年創作)  6奧祖谷二重藤蔓橋 (位於奧祖谷的兩座藤蔓橋並列，又被稱為「男橋」與「女橋」)  7落合集落 (與白川鄉並列日本三大秘境的茅草屋聚落)  8脇町卯建街道 (保留江戶時代建築的街道，以「卯建」防火牆建築聞名)  9阿波舞會館 (全年可觀賞德島傳統藝能「阿波舞」的公演)  10眉山纜車 (可從眉山頂眺望德島市區與吉野川的夜景)  11藥王寺 (四國八十八所遍路的第23號札所，歷史悠久的古寺)  12藍之館 (可體驗德島傳統「阿波藍」染色的設施)  13KURUKURU鳴門 (以鳴門金時地瓜為主題的互動式美食主題樂園)  14葫蘆島夜間遊船 (德島市區的夜間遊船，可欣賞運河夜景)  15竹島海底公園 (可在海中展望塔觀察海底生態的設施)  16劍山 (德島縣最高峰，登山與賞楓的熱門地點)  17祖谷溫泉 (位於祖谷溪畔的秘湯溫泉，可一邊泡湯一邊欣賞溪谷美景)  18大川原高原 (夏季可欣賞繡球花海的高原景點) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 312,
    title: "日本系列-四國~德島縣-36-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-36X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1鳴門漩渦 (世界三大漩渦之一，因鳴門海峽潮位差產生，最大直徑可超過20公尺。可從大鳴門橋上的「渦之道」或搭乘觀潮船近距離觀賞)  2大塚國際美術館 (將超過1000幅世界名畫以陶板畫重現的美術館，可近距離觸摸欣賞)  3大步危・小步危 (吉野川歷經2億年沖積而成的溪谷，長約8公里，奇岩峭壁景致優美，被列為國家指定天然紀念物。可搭乘觀光遊覽船體驗秘境絕景)  4祖谷藤蔓橋 (日本三大奇橋之一，全長45公尺的藤蔓編織橋梁橫跨祖谷溪，走在橋上搖晃驚險)  5小便小僧 (位於祖谷峽谷高200公尺崖上的小僧雕像，是德島出身的雕塑家河崎良行於1968年創作)  6奧祖谷二重藤蔓橋 (位於奧祖谷的兩座藤蔓橋並列，又被稱為「男橋」與「女橋」)  7落合集落 (與白川鄉並列日本三大秘境的茅草屋聚落)  8脇町卯建街道 (保留江戶時代建築的街道，以「卯建」防火牆建築聞名)  9阿波舞會館 (全年可觀賞德島傳統藝能「阿波舞」的公演)  10眉山纜車 (可從眉山頂眺望德島市區與吉野川的夜景)  11藥王寺 (四國八十八所遍路的第23號札所，歷史悠久的古寺)  12藍之館 (可體驗德島傳統「阿波藍」染色的設施)  13KURUKURU鳴門 (以鳴門金時地瓜為主題的互動式美食主題樂園)  14葫蘆島夜間遊船 (德島市區的夜間遊船，可欣賞運河夜景)  15竹島海底公園 (可在海中展望塔觀察海底生態的設施)  16劍山 (德島縣最高峰，登山與賞楓的熱門地點)  17祖谷溫泉 (位於祖谷溪畔的秘湯溫泉，可一邊泡湯一邊欣賞溪谷美景)  18大川原高原 (夏季可欣賞繡球花海的高原景點) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 313,
    title: "日本系列-四國~香川縣-37-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-37.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1栗林公園 (四國唯一被指定為「特別名勝」的日本庭園，獲得米其林觀光指南三星評價。園內約有1400棵松樹)  2高松城（玉藻公園） (日本三大水城之一，護城河直接引入海水，可體驗「城舟」遊覽)  3丸龜城 (現存十二天守之一，以石垣高度日本第一聞名)  4金刀比羅宮 (被譽為「日本人一生必去一次」的神社，需登上1368級石階才能到達本宮)  5高屋神社 (位於稻積山山頂的「天空鳥居」，是祈求財運的能量景點)  6直島 (國際當代藝術聖地，有安藤忠雄設計的「地中美術館」與草間彌生的「紅南瓜」等作品)  7男木島・女木島 (充滿島嶼風情的瀨戶內海小島，有藝術作品與悠閒氛圍)  8小豆島 (被稱為「日本地中海」，以橄欖公園、天使之路、寒霞溪聞名)  9天使之路（天使的散步道） (一天僅出現兩次的沙洲，連接小豆島與余島，據說牽手走過的戀人能永遠在一起)  10寒霞溪 (小豆島的國立公園，可搭乘纜車欣賞溪谷與瀨戶內海的絕景)  11橄欖公園 (《魔女宅急便》真人電影拍攝場景，希臘風格的公園可眺望瀨戶內海)  12紫雲出山 (春季櫻花與瀨戶內海同框的絕景名所)  13父母之濱 (退潮時可拍出「天空之鏡」絕美倒影的熱門打卡景點)  14屋島 (源平合戰的古戰場，從山頂可眺望瀨戶內海與高松市景)  15新屋島水族館 (位於屋島山頂的水族館，可同時欣賞海景)  16四國水族館 (展示四國海域豐富海洋生物的水族館)  17國營讚岐滿濃公園 (四國唯一的國營公園，四季花卉繽紛)  18二十四瞳電影村 (小豆島上重現電影《二十四瞳》拍攝場景的主題園區) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 314,
    title: "日本系列-四國~香川縣-37-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-37X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1栗林公園 (四國唯一被指定為「特別名勝」的日本庭園，獲得米其林觀光指南三星評價。園內約有1400棵松樹)  2高松城（玉藻公園） (日本三大水城之一，護城河直接引入海水，可體驗「城舟」遊覽)  3丸龜城 (現存十二天守之一，以石垣高度日本第一聞名)  4金刀比羅宮 (被譽為「日本人一生必去一次」的神社，需登上1368級石階才能到達本宮)  5高屋神社 (位於稻積山山頂的「天空鳥居」，是祈求財運的能量景點)  6直島 (國際當代藝術聖地，有安藤忠雄設計的「地中美術館」與草間彌生的「紅南瓜」等作品)  7男木島・女木島 (充滿島嶼風情的瀨戶內海小島，有藝術作品與悠閒氛圍)  8小豆島 (被稱為「日本地中海」，以橄欖公園、天使之路、寒霞溪聞名)  9天使之路（天使的散步道） (一天僅出現兩次的沙洲，連接小豆島與余島，據說牽手走過的戀人能永遠在一起)  10寒霞溪 (小豆島的國立公園，可搭乘纜車欣賞溪谷與瀨戶內海的絕景)  11橄欖公園 (《魔女宅急便》真人電影拍攝場景，希臘風格的公園可眺望瀨戶內海)  12紫雲出山 (春季櫻花與瀨戶內海同框的絕景名所)  13父母之濱 (退潮時可拍出「天空之鏡」絕美倒影的熱門打卡景點)  14屋島 (源平合戰的古戰場，從山頂可眺望瀨戶內海與高松市景)  15新屋島水族館 (位於屋島山頂的水族館，可同時欣賞海景)  16四國水族館 (展示四國海域豐富海洋生物的水族館)  17國營讚岐滿濃公園 (四國唯一的國營公園，四季花卉繽紛)  18二十四瞳電影村 (小豆島上重現電影《二十四瞳》拍攝場景的主題園區) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 315,
    title: "日本系列-四國~愛媛縣-38-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-38.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1道後溫泉本館 (日本三古湯之一，擁有3000年歷史，是夏目漱石《少爺》的舞台，木造建築充滿復古風情)  2松山城 (日本現存十二天守之一，建於1602年，可搭乘纜車登頂眺望松山市景)  3石手寺 (四國八十八所遍路第51號札所，歷史悠久的古寺)  4伊佐爾波神社 (建於海岸旁的古老神社，擁有美麗的朱紅社殿)  5島波海道 (全長70公里的海上自行車道，連接愛媛今治市與廣島尾道市，途經六座瀨戶內海大橋)  6來島海峽大橋 (世界首座三連吊橋，可登頂眺望「日本三大急流」之一的來島海峽潮汐)  7下灘站 (日本距離海邊最近的無人車站，從月台可一望瀨戶內海，夕陽時分如動畫場景)  8宇和島城 (位於高台上的原始木造天守，可眺望宇和島港的海景)  9大洲城 (復元天守與城下町風情)  10臥龍山莊 (大洲市的著名日式庭園與茶室，被譽為「愛媛的桂離宮」)  11大洲紅磚館 (1901年建造的紅磚建築，原為大洲商業銀行，現為伴手禮與藝文空間)  12萬翠莊 (國家重要文化財，大正時代建造的西洋風格建築)  13坂上之雲博物館 (由建築大師安藤忠雄設計的博物館，展示司馬遼太郎小說《坂上之雲》的相關資料)  14石鎚山 (西日本最高峰，日本百名山之一，可搭乘纜車登山，是信仰與登山勝地)  15四國喀斯特 (橫跨愛媛與高知的高原台地，可欣賞壯闊的牧場風光)  16能島城跡 (瀨戶內海上的海中城堡遺跡，是日本南北朝時期的水軍據點)  17霧之森菓子工房 (以抹茶大福聞名的人氣甜點店，經常大排長龍)",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 316,
    title: "日本系列-四國~愛媛縣-38-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-38X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1道後溫泉本館 (日本三古湯之一，擁有3000年歷史，是夏目漱石《少爺》的舞台，木造建築充滿復古風情)  2松山城 (日本現存十二天守之一，建於1602年，可搭乘纜車登頂眺望松山市景)  3石手寺 (四國八十八所遍路第51號札所，歷史悠久的古寺)  4伊佐爾波神社 (建於海岸旁的古老神社，擁有美麗的朱紅社殿)  5島波海道 (全長70公里的海上自行車道，連接愛媛今治市與廣島尾道市，途經六座瀨戶內海大橋)  6來島海峽大橋 (世界首座三連吊橋，可登頂眺望「日本三大急流」之一的來島海峽潮汐)  7下灘站 (日本距離海邊最近的無人車站，從月台可一望瀨戶內海，夕陽時分如動畫場景)  8宇和島城 (位於高台上的原始木造天守，可眺望宇和島港的海景)  9大洲城 (復元天守與城下町風情)  10臥龍山莊 (大洲市的著名日式庭園與茶室，被譽為「愛媛的桂離宮」)  11大洲紅磚館 (1901年建造的紅磚建築，原為大洲商業銀行，現為伴手禮與藝文空間)  12萬翠莊 (國家重要文化財，大正時代建造的西洋風格建築)  13坂上之雲博物館 (由建築大師安藤忠雄設計的博物館，展示司馬遼太郎小說《坂上之雲》的相關資料)  14石鎚山 (西日本最高峰，日本百名山之一，可搭乘纜車登山，是信仰與登山勝地)  15四國喀斯特 (橫跨愛媛與高知的高原台地，可欣賞壯闊的牧場風光)  16能島城跡 (瀨戶內海上的海中城堡遺跡，是日本南北朝時期的水軍據點)  17霧之森菓子工房 (以抹茶大福聞名的人氣甜點店，經常大排長龍)",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 317,
    title: "日本系列-四國~高知縣-39-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-39.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1高知城 (日本現存十二天守之一，別稱「鷹城」，完整保留江戶時代樣貌，為國家重要文化財)  2桂濱 (高知最具代表性的海濱，擁有巨大的坂本龍馬銅像與美麗的太平洋海景)  3坂本龍馬紀念館 (展示幕末維新志士坂本龍馬相關資料的紀念館，提供繁體中文導覽)  4弘人市場 (被稱為「高知人的廚房」，可品嚐炙燒鰹魚等在地美食，氣氛熱鬧)  5播磨屋橋 (高知市中心的朱紅色小橋地標，承載著一段動人的悲戀傳說)  6四萬十川 (被譽為「日本最後的清流」，全長196公里，可體驗泛舟、獨木舟等水上活動)  7仁淀川 (以「仁淀藍」的清澈水色聞名，安居溪谷與水晶淵是代表性景點)  8足摺岬 (四國最南端的海岬，有白色燈塔與壯闊的太平洋景觀)  9室戶岬 (面向太平洋的海岬，被列為室戶阿南海岸國定公園)  10龍河洞 (日本三大鐘乳洞之一，全長約4公里，可欣賞鐘乳石與地底湖)  11高知縣立野市動物公園 (被TripAdvisor選為日本動物園排行冠軍的大型動物園)  12西島園藝團地 (可體驗採草莓、品嚐哈密瓜的農園設施)  13雲之上的圖書館 (由建築大師隈研吾設計的美麗圖書館，位於梼原町)  14能島城跡（水軍據點、海中之城）  15四國喀斯特 (高知與愛媛交界處的高原台地，可欣賞草原與牧場風光)  16柏島 (高知縣的潛水勝地，擁有透明度極高的海水與豐富的海洋生態)  17日曜市 (高知市每週日舉辦的露天市場，是日本最大的路邊市場之一)  18鳴無神社 (擁有浮在海上鳥居的神秘神社，被稱為「高知的嚴島」)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 318,
    title: "日本系列-四國~高知縣-39-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-39X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1高知城 (日本現存十二天守之一，別稱「鷹城」，完整保留江戶時代樣貌，為國家重要文化財)  2桂濱 (高知最具代表性的海濱，擁有巨大的坂本龍馬銅像與美麗的太平洋海景)  3坂本龍馬紀念館 (展示幕末維新志士坂本龍馬相關資料的紀念館，提供繁體中文導覽)  4弘人市場 (被稱為「高知人的廚房」，可品嚐炙燒鰹魚等在地美食，氣氛熱鬧)  5播磨屋橋 (高知市中心的朱紅色小橋地標，承載著一段動人的悲戀傳說)  6四萬十川 (被譽為「日本最後的清流」，全長196公里，可體驗泛舟、獨木舟等水上活動)  7仁淀川 (以「仁淀藍」的清澈水色聞名，安居溪谷與水晶淵是代表性景點)  8足摺岬 (四國最南端的海岬，有白色燈塔與壯闊的太平洋景觀)  9室戶岬 (面向太平洋的海岬，被列為室戶阿南海岸國定公園)  10龍河洞 (日本三大鐘乳洞之一，全長約4公里，可欣賞鐘乳石與地底湖)  11高知縣立野市動物公園 (被TripAdvisor選為日本動物園排行冠軍的大型動物園)  12西島園藝團地 (可體驗採草莓、品嚐哈密瓜的農園設施)  13雲之上的圖書館 (由建築大師隈研吾設計的美麗圖書館，位於梼原町)  14能島城跡（水軍據點、海中之城）  15四國喀斯特 (高知與愛媛交界處的高原台地，可欣賞草原與牧場風光)  16柏島 (高知縣的潛水勝地，擁有透明度極高的海水與豐富的海洋生態)  17日曜市 (高知市每週日舉辦的露天市場，是日本最大的路邊市場之一)  18鳴無神社 (擁有浮在海上鳥居的神秘神社，被稱為「高知的嚴島」)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 319,
    title: "日本系列-九州~福岡縣-40-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-40.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1太宰府天滿宮 (供奉學問之神，是福岡最具代表性的神社，以梅花聞名)  2福岡塔 (高234米，由8,000片半反射鏡覆蓋，可眺望海濱美景)  3櫛田神社 (博多總鎮守，歷史悠久，是博多祇園山笠祭的舉辦地)  4大濠公園 (圍繞福岡城護城河而建的公園，造型仿杭州西湖，是賞櫻名所)  5舞鶴公園 (以福岡城遺址為象徵的公園，四季自然風光秀麗)  6博多運河城 (大型複合式購物中心，運河與現代建築結合，晚上有水舞表演)  7天神地下街 (福岡最繁華的購物區，地下街商鋪林立)  8中洲屋台街 (福岡代表性的屋台（路邊攤）集中地，可品嚐地道美食)  9海洋世界海之中道 (展示九州外海生態的水族館，海豚表演精彩)  10海之中道海濱公園 (佔地廣闊，四季花卉綻放，適合親子同遊)  11柳川遊船 (被譽為「水鄉之城」，可乘船遊覽護城河，體驗水鄉風情)  12小倉城 (位於北九州市的歷史名城，城內有庭園與資料館)  13門司港懷舊區 (充滿大正浪漫風情的港口，保存許多西洋建築)  14宗像大社 (歷史悠久的神社，周邊海域被列為世界文化遺產)  15宮地嶽神社 (以壯觀的夕陽與「光之道」聞名)  16南藏院 (以世界最大青銅臥佛聞名的佛寺)  17九州國立博物館 (展示亞洲歷史文化交流的國立博物館)  18福岡城（舞鶴城） (由黑田長政建造的歷史遺跡，現為遺址公園)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 320,
    title: "日本系列-九州~福岡縣-40-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-40X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1太宰府天滿宮 (供奉學問之神，是福岡最具代表性的神社，以梅花聞名)  2福岡塔 (高234米，由8,000片半反射鏡覆蓋，可眺望海濱美景)  3櫛田神社 (博多總鎮守，歷史悠久，是博多祇園山笠祭的舉辦地)  4大濠公園 (圍繞福岡城護城河而建的公園，造型仿杭州西湖，是賞櫻名所)  5舞鶴公園 (以福岡城遺址為象徵的公園，四季自然風光秀麗)  6博多運河城 (大型複合式購物中心，運河與現代建築結合，晚上有水舞表演)  7天神地下街 (福岡最繁華的購物區，地下街商鋪林立)  8中洲屋台街 (福岡代表性的屋台（路邊攤）集中地，可品嚐地道美食)  9海洋世界海之中道 (展示九州外海生態的水族館，海豚表演精彩)  10海之中道海濱公園 (佔地廣闊，四季花卉綻放，適合親子同遊)  11柳川遊船 (被譽為「水鄉之城」，可乘船遊覽護城河，體驗水鄉風情)  12小倉城 (位於北九州市的歷史名城，城內有庭園與資料館)  13門司港懷舊區 (充滿大正浪漫風情的港口，保存許多西洋建築)  14宗像大社 (歷史悠久的神社，周邊海域被列為世界文化遺產)  15宮地嶽神社 (以壯觀的夕陽與「光之道」聞名)  16南藏院 (以世界最大青銅臥佛聞名的佛寺)  17九州國立博物館 (展示亞洲歷史文化交流的國立博物館)  18福岡城（舞鶴城） (由黑田長政建造的歷史遺跡，現為遺址公園)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 321,
    title: "日本系列-九州~佐賀縣-41-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-41.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1有田町 (日本瓷器的發源地，被譽為「日本景德鎮」，可參觀陶藝老鋪與博物館)  2伊萬里大川內山 (伊萬里燒的發源地，群山環繞的陶藝之里)  3陶山神社 (供奉陶瓷之神的神社，鳥居由陶器製成)  4武雄溫泉 (擁有1300年歷史的溫泉鄉，樓門是象徵性地標)  5嬉野溫泉 (被譽為「美肌之湯」，水質滑順，可品嚐溫泉豆腐)  6御船山樂園 (武雄領主鍋島茂義建造的別莊，以四季花卉和夜間點燈聞名)  7慧洲園 (純日本庭園，為國家登錄紀念物)  8唐津城 (位於唐津灣畔的歷史名城，可眺望虹之松原與海景)  9虹之松原 (日本三大松原之一，長約4.5公里的帶狀松林)  10鏡山展望台 (可居高臨下眺望虹之松原與唐津灣全景)  11佐賀城公園 (佐賀城遺址公園，春季櫻花盛開)  12大魚神社的海中鳥居 (退潮時才會出現的海中鳥居，景色夢幻)  13吉野里歷史公園 (日本最大的彌生時代遺跡，重現古代村落)  14呼子朝市 (日本三大朝市之一，可品嚐新鮮活烏賊)  15鳥栖Outlets (九州最大的暢貨中心，適合購物)  16武雄市圖書館 (結合蔦屋書店的複合式圖書館，設計新穎)  17祐德稻荷神社 (日本三大稻荷神社之一，朱紅色的建築依山而建，十分壯觀)  18七釜 (位於玄海國立公園內的海蝕洞，被指定為國家天然紀念物)   ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 322,
    title: "日本系列-九州~佐賀縣-41-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-41X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1有田町 (日本瓷器的發源地，被譽為「日本景德鎮」，可參觀陶藝老鋪與博物館)  2伊萬里大川內山 (伊萬里燒的發源地，群山環繞的陶藝之里)  3陶山神社 (供奉陶瓷之神的神社，鳥居由陶器製成)  4武雄溫泉 (擁有1300年歷史的溫泉鄉，樓門是象徵性地標)  5嬉野溫泉 (被譽為「美肌之湯」，水質滑順，可品嚐溫泉豆腐)  6御船山樂園 (武雄領主鍋島茂義建造的別莊，以四季花卉和夜間點燈聞名)  7慧洲園 (純日本庭園，為國家登錄紀念物)  8唐津城 (位於唐津灣畔的歷史名城，可眺望虹之松原與海景)  9虹之松原 (日本三大松原之一，長約4.5公里的帶狀松林)  10鏡山展望台 (可居高臨下眺望虹之松原與唐津灣全景)  11佐賀城公園 (佐賀城遺址公園，春季櫻花盛開)  12大魚神社的海中鳥居 (退潮時才會出現的海中鳥居，景色夢幻)  13吉野里歷史公園 (日本最大的彌生時代遺跡，重現古代村落)  14呼子朝市 (日本三大朝市之一，可品嚐新鮮活烏賊)  15鳥栖Outlets (九州最大的暢貨中心，適合購物)  16武雄市圖書館 (結合蔦屋書店的複合式圖書館，設計新穎)  17祐德稻荷神社 (日本三大稻荷神社之一，朱紅色的建築依山而建，十分壯觀)  18七釜 (位於玄海國立公園內的海蝕洞，被指定為國家天然紀念物)   ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 323,
    title: "日本系列-九州~長崎縣-42-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-42.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1稻佐山展望台 (可欣賞被評為「世界新三大夜景」之一的長崎百萬夜景)  2長崎百萬夜景 (稻佐山展望台的長崎百萬夜景)  3哥拉巴園 (以活躍於長崎的英國商人哥拉巴故居為中心的庭園，充滿異國風情)  4大浦天主堂 (日本現存最古老的哥德式教堂，被列為國寶)  5出島 (江戶時代的荷蘭商館遺跡，重現當時的貿易場景)  6新地中華街 (日本三大中華街之一，可品嚐長崎什錦麵等美食)  7眼鏡橋 (長崎最具代表性的石橋，倒映在水面形似眼鏡)  8長崎原爆資料館 (展示原子彈爆炸的歷史與資料，傳達和平的重要性)  9平和公園 (為祈願和平而建的公園，園內有和平祈念像)  10豪斯登堡 (日本最大的主題樂園，重現荷蘭風情，夜晚燈光秀「光之王國」極具震撼力)  11九十九島 (由約208個島嶼組成的群島，可乘船遊覽，欣賞多島美景)  12軍艦島（端島） (曾繁榮一時的煤礦島，現為無人廢墟，獨特景觀吸引眾多遊客)  13雲仙地獄 (高溫蒸氣與硫磺噴出的溫泉地帶，景觀獨特)  14島原城 (歷史名城，城內有基督教歷史資料館)  15平戶城 (位於平戶島的歷史名城，可眺望海景)  16鎮西大社諏訪神社 (長崎規模最大的神社，秋季例大祭「長崎祭典」聞名)  17壹岐島 (擁有豐富自然景觀與歷史遺跡的離島)  18五島列島 (擁有美麗海灘與天主堂群，自然與歷史交織) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 324,
    title: "日本系列-九州~長崎縣-42-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-42X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1稻佐山展望台 (可欣賞被評為「世界新三大夜景」之一的長崎百萬夜景)  2長崎百萬夜景 (稻佐山展望台的長崎百萬夜景)  3哥拉巴園 (以活躍於長崎的英國商人哥拉巴故居為中心的庭園，充滿異國風情)  4大浦天主堂 (日本現存最古老的哥德式教堂，被列為國寶)  5出島 (江戶時代的荷蘭商館遺跡，重現當時的貿易場景)  6新地中華街 (日本三大中華街之一，可品嚐長崎什錦麵等美食)  7眼鏡橋 (長崎最具代表性的石橋，倒映在水面形似眼鏡)  8長崎原爆資料館 (展示原子彈爆炸的歷史與資料，傳達和平的重要性)  9平和公園 (為祈願和平而建的公園，園內有和平祈念像)  10豪斯登堡 (日本最大的主題樂園，重現荷蘭風情，夜晚燈光秀「光之王國」極具震撼力)  11九十九島 (由約208個島嶼組成的群島，可乘船遊覽，欣賞多島美景)  12軍艦島（端島） (曾繁榮一時的煤礦島，現為無人廢墟，獨特景觀吸引眾多遊客)  13雲仙地獄 (高溫蒸氣與硫磺噴出的溫泉地帶，景觀獨特)  14島原城 (歷史名城，城內有基督教歷史資料館)  15平戶城 (位於平戶島的歷史名城，可眺望海景)  16鎮西大社諏訪神社 (長崎規模最大的神社，秋季例大祭「長崎祭典」聞名)  17壹岐島 (擁有豐富自然景觀與歷史遺跡的離島)  18五島列島 (擁有美麗海灘與天主堂群，自然與歷史交織) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 325,
    title: "日本系列-九州~熊本縣-43-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-43.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1熊本城 (日本三大名城之一，由加藤清正建造，別名「銀杏城」)  2櫻之馬場城彩苑 (熊本城下的復古街區，可體驗美食與文化)  3熊本熊部長辦公室 (熊本熊的活動基地，可觀賞部長表演)  4阿蘇山 (世界屈指可數的活火山，中岳火山口可近距離感受火山活動)  5草千里 (阿蘇山腳下的廣闊草原，可眺望火山，夏季牛馬成群)  6大觀峰 (可眺望阿蘇五嶽與壯觀雲海的展望台)  7黑川溫泉 (米其林二星推薦的溫泉鄉，保留傳統日式風情)  8菊池溪谷 (避暑勝地，擁有清澈溪流與豐富自然景觀)  9鍋瀑布 (可由瀑布內側觀賞的「裏見瀑布」，景色清幽)  10阿蘇神社 (擁有2500年歷史的古老神社，為阿蘇地區的信仰中心)  11上色見熊野座神社 (《螢火之森》的取景地，充滿神秘氛圍)  12白川水源 (被選為日本名水百選之一，水質清澈)  13御輿來海岸 (可欣賞夕陽美景的絕佳地點)  14三角西港 (明治時代的西洋式港口，充滿懷舊風情)  15崎津天主教堂 (天草地區的隱世教堂，融合和洋風格)  16水前寺成趣園 (以阿蘇山為背景的迴遊式庭園，景色優雅) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 326,
    title: "日本系列-九州~熊本縣-43-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-43X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1熊本城 (日本三大名城之一，由加藤清正建造，別名「銀杏城」)  2櫻之馬場城彩苑 (熊本城下的復古街區，可體驗美食與文化)  3熊本熊部長辦公室 (熊本熊的活動基地，可觀賞部長表演)  4阿蘇山 (世界屈指可數的活火山，中岳火山口可近距離感受火山活動)  5草千里 (阿蘇山腳下的廣闊草原，可眺望火山，夏季牛馬成群)  6大觀峰 (可眺望阿蘇五嶽與壯觀雲海的展望台)  7黑川溫泉 (米其林二星推薦的溫泉鄉，保留傳統日式風情)  8菊池溪谷 (避暑勝地，擁有清澈溪流與豐富自然景觀)  9鍋瀑布 (可由瀑布內側觀賞的「裏見瀑布」，景色清幽)  10阿蘇神社 (擁有2500年歷史的古老神社，為阿蘇地區的信仰中心)  11上色見熊野座神社 (《螢火之森》的取景地，充滿神秘氛圍)  12白川水源 (被選為日本名水百選之一，水質清澈)  13御輿來海岸 (可欣賞夕陽美景的絕佳地點)  14三角西港 (明治時代的西洋式港口，充滿懷舊風情)  15崎津天主教堂 (天草地區的隱世教堂，融合和洋風格)  16水前寺成趣園 (以阿蘇山為背景的迴遊式庭園，景色優雅) ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 327,
    title: "日本系列-九州~大分縣-44-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-44.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1別府溫泉（地獄巡禮） (別府溫泉的代表，包括海地獄、血池地獄等獨特景觀)  2明礬溫泉湯之花小屋 (可參觀湯之花製作過程，並享受溫泉)  3由布院溫泉 (充滿文藝氣息的溫泉小鎮，金鱗湖是代表性景點)  4金鱗湖 (由布院的象徵，湖底湧出溫泉與冷水，晨霧景色夢幻)  5九重「夢」大吊橋 (日本最高的步行專用吊橋，可眺望壯麗峽谷)  6久住花公園 (西日本最大的花卉公園，四季花海繽紛)  7原尻瀑布 (被稱為「東洋的尼加拉瀑布」，氣勢磅礴)  8志高湖 (阿蘇九重國立公園內的美麗湖泊)  9大分縣立美術館（OPAM） (由普立茲克獎建築師坂茂設計，建築本身即為藝術)  10大分海洋宮殿水族館「海之卵」 (展示豐富海洋生物，親子旅遊首選)  11九州自然動物園 (可搭乘叢林巴士近距離觀賞野生動物)  12三麗鷗和諧樂園 (以三麗鷗角色為主題的主題樂園)  13真玉海岸 (擁有美麗夕陽景觀的海岸線)  14西寒多神社 (歷史悠久的神社，氛圍寧靜)  15由布院之森觀光列車 (行駛於博多與由布院之間的特色列車，車窗風景優美)",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 328,
    title: "日本系列-九州~大分縣-44-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-44X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1別府溫泉（地獄巡禮） (別府溫泉的代表，包括海地獄、血池地獄等獨特景觀)  2明礬溫泉湯之花小屋 (可參觀湯之花製作過程，並享受溫泉)  3由布院溫泉 (充滿文藝氣息的溫泉小鎮，金鱗湖是代表性景點)  4金鱗湖 (由布院的象徵，湖底湧出溫泉與冷水，晨霧景色夢幻)  5九重「夢」大吊橋 (日本最高的步行專用吊橋，可眺望壯麗峽谷)  6久住花公園 (西日本最大的花卉公園，四季花海繽紛)  7原尻瀑布 (被稱為「東洋的尼加拉瀑布」，氣勢磅礴)  8志高湖 (阿蘇九重國立公園內的美麗湖泊)  9大分縣立美術館（OPAM） (由普立茲克獎建築師坂茂設計，建築本身即為藝術)  10大分海洋宮殿水族館「海之卵」 (展示豐富海洋生物，親子旅遊首選)  11九州自然動物園 (可搭乘叢林巴士近距離觀賞野生動物)  12三麗鷗和諧樂園 (以三麗鷗角色為主題的主題樂園)  13真玉海岸 (擁有美麗夕陽景觀的海岸線)  14西寒多神社 (歷史悠久的神社，氛圍寧靜)  15由布院之森觀光列車 (行駛於博多與由布院之間的特色列車，車窗風景優美)",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 329,
    title: "日本系列-九州~宮崎縣-45-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-45.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1高千穗峽 (因阿蘇山火山活動形成的峽谷，真名井瀑布是代表性景觀)  2高千穗神社 (高千穗地區的古老神社，本殿為國家重要文化財)  3天岩戶神社 (供奉天照大神的神社，與日本神話淵源深厚)  4日南海岸 (擁有壯麗海景與奇岩怪石的海岸線，被譽為「日本復活島」)  5青島神社 (位於青島的神社，周圍有「鬼之洗衣板」奇景)  6鵜戶神宮 (建於海邊洞窟內的神社，以祈求姻緣、安產聞名)  7日南太陽花園（Sun Messe日南） (以復活節島摩艾石像為主題的公園)  8西都原古墳群 (日本最大的古墳群之一，可感受古代浪漫氣息)  9飫肥城跡 (歷史悠久的城下町，保留著江戶時代的風貌)  10都井岬 (可觀賞野生馬「御崎馬」悠閒漫步)  11日向岬 (擁有壯麗海景與燈塔的景點)  12天城公園 (春季賞櫻名所，約1200株櫻花盛開)  13宮崎縣立美術館 (展示國內外藝術作品的美術館)  14韓國岳 (位於霧島連峰，是宮崎縣的最高峰)  15綾照葉大吊橋 (位於照葉林中的吊橋，可欣賞壯闊的自然景觀)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 330,
    title: "日本系列-九州~宮崎縣-45-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-45X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1高千穗峽 (因阿蘇山火山活動形成的峽谷，真名井瀑布是代表性景觀)  2高千穗神社 (高千穗地區的古老神社，本殿為國家重要文化財)  3天岩戶神社 (供奉天照大神的神社，與日本神話淵源深厚)  4日南海岸 (擁有壯麗海景與奇岩怪石的海岸線，被譽為「日本復活島」)  5青島神社 (位於青島的神社，周圍有「鬼之洗衣板」奇景)  6鵜戶神宮 (建於海邊洞窟內的神社，以祈求姻緣、安產聞名)  7日南太陽花園（Sun Messe日南） (以復活節島摩艾石像為主題的公園)  8西都原古墳群 (日本最大的古墳群之一，可感受古代浪漫氣息)  9飫肥城跡 (歷史悠久的城下町，保留著江戶時代的風貌)  10都井岬 (可觀賞野生馬「御崎馬」悠閒漫步)  11日向岬 (擁有壯麗海景與燈塔的景點)  12天城公園 (春季賞櫻名所，約1200株櫻花盛開)  13宮崎縣立美術館 (展示國內外藝術作品的美術館)  14韓國岳 (位於霧島連峰，是宮崎縣的最高峰)  15綾照葉大吊橋 (位於照葉林中的吊橋，可欣賞壯闊的自然景觀)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 331,
    title: "日本系列-九州~鹿兒島縣-46-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-46.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1櫻島 (世界上最活躍的火山之一，鹿兒島的象徵，可搭乘渡輪前往)  2城山公園展望台 (可一覽櫻島、錦江灣與鹿兒島市區全景)  3鹿兒島城（鶴丸城） (島津家的居城遺跡，現為歷史公園)  4仙巖園 (薩摩藩主島津家的別邸，借景櫻島的日式庭園，世界文化遺產)  5鹿兒島天文館 (鹿兒島市中心最熱鬧的商業街區，購物、美食集中地)  6鹿兒島水族館 (展示錦江灣與南九州海域的生態，可看到櫻島)  7屋久島 (被列為世界自然遺產，擁有千年以上的屋久杉與苔蘚森林)  8奄美大島 (洋溢南國風情，擁有獨特的自然與文化)  9指宿溫泉（砂浴溫泉） (鹿兒島獨特的熱砂浴，將身體埋入溫熱的砂中)  10霧島神宮 (位於霧島連峰，朱紅色的社殿莊嚴華麗)  11知覽武家屋敷庭園 (保存完好的武士宅邸群，被稱為「薩摩的小京都」)  12西鄉隆盛銅像 (位於城山公園，紀念明治維新的重要人物)  13開聞岳 (被稱為「薩摩富士」的優美山岳)  14曾木瀑布 (被稱為「東洋的尼加拉瀑布」，氣勢宏偉)     ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 332,
    title: "日本系列-九州~鹿兒島縣-46-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-46X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1櫻島 (世界上最活躍的火山之一，鹿兒島的象徵，可搭乘渡輪前往)  2城山公園展望台 (可一覽櫻島、錦江灣與鹿兒島市區全景)  3鹿兒島城（鶴丸城） (島津家的居城遺跡，現為歷史公園)  4仙巖園 (薩摩藩主島津家的別邸，借景櫻島的日式庭園，世界文化遺產)  5鹿兒島天文館 (鹿兒島市中心最熱鬧的商業街區，購物、美食集中地)  6鹿兒島水族館 (展示錦江灣與南九州海域的生態，可看到櫻島)  7屋久島 (被列為世界自然遺產，擁有千年以上的屋久杉與苔蘚森林)  8奄美大島 (洋溢南國風情，擁有獨特的自然與文化)  9指宿溫泉（砂浴溫泉） (鹿兒島獨特的熱砂浴，將身體埋入溫熱的砂中)  10霧島神宮 (位於霧島連峰，朱紅色的社殿莊嚴華麗)  11知覽武家屋敷庭園 (保存完好的武士宅邸群，被稱為「薩摩的小京都」)  12西鄉隆盛銅像 (位於城山公園，紀念明治維新的重要人物)  13開聞岳 (被稱為「薩摩富士」的優美山岳)  14曾木瀑布 (被稱為「東洋的尼加拉瀑布」，氣勢宏偉)     ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 333,
    title: "日本系列-九州~沖繩縣-47-1",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-47.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1今歸仁城遺址 (建於14世紀的琉球時代，擁有雄偉的石牆，是能俯瞰沖繩北部壯麗景色的世界遺產)  2美麗海水族館 (位於海洋博公園內，擁有世界第二大的「黑潮之海」水槽，可以近距離觀賞巨大的鯨鯊)  3備瀨福木林道 (位於海洋博公園內，由高大福木形成的綠色隧道，陽光灑落時光影交錯，氣氛療癒)  4首里城 (琉球王國的政治與文化中心，雖經歷火災重建，但其獨特的中日混合建築風格與「守禮門」仍是必訪之地)  5波上宮 (建築於珊瑚礁斷崖上的沖繩第一神社，是那霸市區的信仰中心)  6國際通 (那霸市最繁華的街道，匯集了美食、伴手禮與藥妝店，是體驗沖繩熱鬧氛圍的必去之地)  7齋場御嶽 (琉球王國時期最神聖的祈禱場所，被登錄為世界遺產，是了解琉球古老信仰的核心地點)  8知念岬公園 (位於南城市，擁有能一望無際太平洋的絕佳視野，也是知名的夜間觀星地點)  9玉泉洞 (全長約5公里的巨大鐘乳石洞，是東亞最大的地下鐘乳石洞之一，景觀令人驚嘆)  10勝連城跡 (利用自然丘陵地形建造的階梯式古城遺跡，已被列為世界遺產)  11古宇利大橋 (連接古宇利島與本島的跨海大橋，行駛其上可飽覽兩側的蒂芬妮藍海景，島上的心形岩也是熱門景點)  12古宇利島 (由古宇利大橋連接，島上有古宇利海洋塔，能一覽大橋與整片大海的絕景)  13名護鳳梨園 (位於名護市，可以搭乘可愛的鳳梨車遊園，並品嚐各式鳳梨製品與鳳梨酒)  14JUNGLIA叢林樂園 (位於今歸仁村的恐龍主題新樂園，主打叢林探險與無邊際浴池等設施)  15琉球村 (一個可以體驗沖繩傳統文化與生活型態的主題公園，保留了許多百年以上的古民家)  16萬座毛 (位於恩納村的珊瑚斷崖，因外觀像象鼻而聞名，是俯瞰壯闊海景的絕佳地點)  17殘波岬 (以壯麗的斷崖和絕美日落聞名的公園，是欣賞夕陽的熱門地點)  18美國村 (位於北谷町，充滿美式異國風情的購物與娛樂休閒勝地)  19DMM Kariyushi水族館 (位於豐見城市的新型態水族館，結合了最新光影技術與藝術裝置)  20中城城跡 (同樣被登錄為世界遺產的「琉球王國的城堡及相關遺產群」之一，能深刻體驗琉球的歷史魅力)  21瀨長島 (距離那霸機場僅約30分鐘車程，擁有純白建築群與無敵海景，被譽為「沖繩小希臘」)  22沖繩Outlet Mall ASHIBINAA (距離那霸機場極近的大型暢貨中心，集結了上百家國際精品與品牌)  23座間味島 (慶良間群島中的熱門島嶼，以高透明度的海水和美麗的海灘聞名，適合進行水上活動)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 334,
    title: "日本系列-九州~沖繩縣-47-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-47X.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>16個地點請依序加入以下主題：1今歸仁城遺址 (建於14世紀的琉球時代，擁有雄偉的石牆，是能俯瞰沖繩北部壯麗景色的世界遺產)  2美麗海水族館 (位於海洋博公園內，擁有世界第二大的「黑潮之海」水槽，可以近距離觀賞巨大的鯨鯊)  3備瀨福木林道 (位於海洋博公園內，由高大福木形成的綠色隧道，陽光灑落時光影交錯，氣氛療癒)  4首里城 (琉球王國的政治與文化中心，雖經歷火災重建，但其獨特的中日混合建築風格與「守禮門」仍是必訪之地)  5波上宮 (建築於珊瑚礁斷崖上的沖繩第一神社，是那霸市區的信仰中心)  6國際通 (那霸市最繁華的街道，匯集了美食、伴手禮與藥妝店，是體驗沖繩熱鬧氛圍的必去之地)  7齋場御嶽 (琉球王國時期最神聖的祈禱場所，被登錄為世界遺產，是了解琉球古老信仰的核心地點)  8知念岬公園 (位於南城市，擁有能一望無際太平洋的絕佳視野，也是知名的夜間觀星地點)  9玉泉洞 (全長約5公里的巨大鐘乳石洞，是東亞最大的地下鐘乳石洞之一，景觀令人驚嘆)  10勝連城跡 (利用自然丘陵地形建造的階梯式古城遺跡，已被列為世界遺產)  11古宇利大橋 (連接古宇利島與本島的跨海大橋，行駛其上可飽覽兩側的蒂芬妮藍海景，島上的心形岩也是熱門景點)  12古宇利島 (由古宇利大橋連接，島上有古宇利海洋塔，能一覽大橋與整片大海的絕景)  13名護鳳梨園 (位於名護市，可以搭乘可愛的鳳梨車遊園，並品嚐各式鳳梨製品與鳳梨酒)  14JUNGLIA叢林樂園 (位於今歸仁村的恐龍主題新樂園，主打叢林探險與無邊際浴池等設施)  15琉球村 (一個可以體驗沖繩傳統文化與生活型態的主題公園，保留了許多百年以上的古民家)  16萬座毛 (位於恩納村的珊瑚斷崖，因外觀像象鼻而聞名，是俯瞰壯闊海景的絕佳地點)  17殘波岬 (以壯麗的斷崖和絕美日落聞名的公園，是欣賞夕陽的熱門地點)  18美國村 (位於北谷町，充滿美式異國風情的購物與娛樂休閒勝地)  19DMM Kariyushi水族館 (位於豐見城市的新型態水族館，結合了最新光影技術與藝術裝置)  20中城城跡 (同樣被登錄為世界遺產的「琉球王國的城堡及相關遺產群」之一，能深刻體驗琉球的歷史魅力)  21瀨長島 (距離那霸機場僅約30分鐘車程，擁有純白建築群與無敵海景，被譽為「沖繩小希臘」)  22沖繩Outlet Mall ASHIBINAA (距離那霸機場極近的大型暢貨中心，集結了上百家國際精品與品牌)  23座間味島 (慶良間群島中的熱門島嶼，以高透明度的海水和美麗的海灘聞名，適合進行水上活動)  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 335,
    title: "AI北海道道北~富良野",
    category: "Portrait",
    image: "./images/P02-Portrait/P003-1.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件三張照片人物合照以下日本北海道重要旅遊景點 為背景的GPT Image2.0提示詞~合照風格~休閒季節以春天為主，三位超過40年以上好友，先以下面四個地點為背景   1富良野薰衣草田 (夏季盛開的紫色花海，是北海道最具代表性的景色之一) 2美瑛拼布之路 (丘陵上的農田如拼布般多彩，景色優美) 3青池 (美瑛的夢幻景點，因礦物質使池水呈現神秘的藍色) 4四季彩之丘 (美瑛的花田公園，可欣賞到各種花卉組成的彩色地毯) ",
    date: "2026-07-14",
    url: "",
  },
  {
    id: 336,
    title: "AI北海道道北~四季彩之丘",
    category: "Portrait",
    image: "./images/P02-Portrait/P003-2.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件三張照片人物合照以下日本北海道重要旅遊景點 為背景的GPT Image2.0提示詞~合照風格~休閒季節以春天為主，三位超過40年以上好友，先以下面四個地點為背景   1富良野薰衣草田 (夏季盛開的紫色花海，是北海道最具代表性的景色之一) 2美瑛拼布之路 (丘陵上的農田如拼布般多彩，景色優美) 3青池 (美瑛的夢幻景點，因礦物質使池水呈現神秘的藍色) 4四季彩之丘 (美瑛的花田公園，可欣賞到各種花卉組成的彩色地毯) ",
    date: "2026-07-14",
    url: "",
  },
  {
    id: 337,
    title: "侏羅紀~1",
    category: "Portrait",
    image: "./images/P02-Portrait/P003-3.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件三張照片人物合照以侏羅紀公園電影場景為背景的GPT Image2.0提示詞~照片中人物各自逃命~畫面中恐龍追著照片人物跑幫我產生暴龍和迅猛龍為主的二張圖片",
    date: "2026-07-14",
    url: "",
  },
  {
    id: 338,
    title: "侏羅紀~1",
    category: "Portrait",
    image: "./images/P02-Portrait/P003-4.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件三張照片人物合照以侏羅紀公園電影場景為背景的GPT Image2.0提示詞~照片中人物各自逃命~畫面中恐龍追著照片人物跑幫我產生暴龍和迅猛龍為主的二張圖片",
    date: "2026-07-14",
    url: "",
  },
  {
    id: 339,
    title: "日本系列-九州~沖繩縣-47-2",
    category: "Line",
    image: "./images/L01-Line/A03-Retire/GPT0017-1.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>產生一組貼圖提示詞，用附件人物Q版墨鏡造型和關渡地區如陽明峰匯，好市多，淡江大橋等關渡著名景點為背景，以退休三年，好久不見得問候或關心話語都可以,再產生下一張4X4的16個貼圖提示詞，名稱用繁體中文鋼筆字體呈現   1.	好久不見！   2.	退休三年，一切安好～   3.	好久沒聯絡，學校還好嗎？   4.	最近好嗎？   5.	出來喝咖啡吧   6.	別來無恙   7.	這陣子在忙什麼呀？   8.	保重身體   9.	有空來我這邊坐坐   10.	有空來關渡走走   11.	一起去好市多   12.	下次來關渡走走   13.	天氣涼了，注意保暖   14.	加油，我挺你   15.	隨時歡迎來訪   16.	保持聯絡喔  ",
    date: "2026-07-11",
    url: "",
  },
  {
    id: 340,
    title: "日本九州~別府溫泉",
    category: "Portrait",
    image: "./images/P02-Portrait/P004-1.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件張照片人物合照以下日本福岡車站往別府專車的要旅遊景點 為背景的GPT Image2.0提示詞~合照風格~休閒季節以春天為主~福岡→別府經典組合(由布院金鳞湖＋由布院植物花园＋別府地獄巍湯)",
    date: "2026-07-16",
    url: "",
  },
  {
    id: 341,
    title: "日本九州~金麟湖",
    category: "Portrait",
    image: "./images/P02-Portrait/P004-2.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件張照片人物合照以下日本福岡車站往別府專車的要旅遊景點 為背景的GPT Image2.0提示詞~合照風格~休閒季節以春天為主~福岡→別府經典組合(由布院金鳞湖＋由布院植物花园＋別府地獄巍湯)",
    date: "2026-07-16",
    url: "",
  },
  {
    id: 342,
    title: "日本九州~由布院~歐洲村落",
    category: "Portrait",
    image: "./images/P02-Portrait/P004-3.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>將附件張照片人物合照以下日本福岡車站往別府專車的要旅遊景點 為背景的GPT Image2.0提示詞~合照風格~休閒季節以春天為主~福岡→別府經典組合(由布院金鳞湖＋由布院植物花园＋別府地獄巍湯)",
    date: "2026-07-16",
    url: "",
  },
  {
    id: 343,
    title: "個人帥氣手繪風格~1",
    category: "Portrait",
    image: "./images/P02-Portrait/P005-1.webp",
    prompt:
      "生成一張你想象中我這個「蘋果仁」的樣子、韓系插畫風、角色特徵鮮明、情緒自然表情、半身構圖、動態姿態、服裝細節精緻、手繪塗鴉風、潑墨筆觸、隨性線條、粉彩與墨色混合、漫畫草稿質感、白色簡約背景、周圍科學化元素點綴、氛圍感強、高細節、高品質。臉的細節要細緻一點",
    date: "2026-07-17",
    url: "",
  },
  {
    id: 344,
    title: "個人帥氣手繪風格~吐槽篇",
    category: "Portrait",
    image: "./images/P02-Portrait/P005-2.webp",
    prompt:
      "將社群帳號截圖製作成紙張列印效果，畫面帶輕微陰影與紙張紋理。使用紅色原子筆手寫風格，在圖片上加入大量中文吐槽批註與塗鴉。包含箭頭、圈選、底線、放大重點、驚嘆號、問號、情緒表情（無語、翻白眼、問號臉）。風格像朋友或老師在旁邊邊看邊吐槽，語氣幽默、誇張、帶一點毒但不惡意攻擊。畫面稍亂但有重點，像隨手亂畫但其實很好笑的那種。",
    date: "2026-07-17",
    url: "",
  },
  {
    id: 345,
    title: "個人帥氣手繪風格~1",
    category: "Portrait",
    image: "./images/P02-Portrait/P005-3.webp",
    prompt:
      "生成一張你想象中我這個老師的樣子、韓系插畫風、角色特徵鮮明、情緒自然表情、半身構圖、動態姿態、服裝細節精緻、手繪塗鴉風、潑墨筆觸、隨性線條、粉彩與墨色混合、漫畫草稿質感、白色簡約背景、周圍AI工具類元素點綴、氛圍感強、高細節、高品質。臉的細節要細緻一點",
    date: "2026-07-17",
    url: "",
  },
  {
    id: 346,
    title: "小胖和川哥的韓系風格~1",
    category: "Portrait",
    image: "./images/P02-Portrait/P006-1.webp",
    prompt:
      "生成一張附件圖片、韓系插畫風、角色特徵鮮明、情緒自然表情、半身構圖、動態姿態、服裝細節精緻、手繪塗鴉風、潑墨筆觸、隨性線條、粉彩與墨色混合、漫畫草稿質感、白色簡約背景、周圍AI工具類元素點綴、氛圍感強、高細節、高品質。臉的細節要細緻一點",
    date: "2026-07-17",
    url: "",
  },
  {
    id: 347,
    title: "小胖和川哥的韓系風格~2",
    category: "Portrait",
    image: "./images/P02-Portrait/P006-2.webp",
    prompt:
      "以附件圖片為列印效果，畫面帶輕微陰影與紙張紋理。使用紅色原子筆手寫風格，在圖片上加入大量中文吐槽批註與塗鴉。包含箭頭、圈選、底線、放大重點、驚嘆號、問號、情緒表情（無語、翻白眼、問號臉）。風格像朋友或老師在旁邊邊看邊吐槽，語氣幽默、誇張、帶一點毒但不惡意攻擊。畫面稍亂但有重點，像隨手亂畫但其實很好笑的那種。",
    date: "2026-07-17",
    url: "",
  },
  {
    id: 348,
    title: "小胖和川哥的韓系風格~2",
    category: "Portrait",
    image: "./images/P02-Portrait/P006-3.webp",
    prompt:
      "請觀察照片中的元素，並為每個物件加上有意義的手繪風註解。      【畫面內容】   ・請填寫照片中的物品（例：冰奶茶、甜甜圈）      【描寫規則】   ・使用像白色筆畫的細手繪線條   ・一筆畫風格，隨性、略帶不均勻感   ・沿著物件外圍加上描邊輪廓   ・用箭頭或虛線做出視線引導      【文字規則】   ・手寫風格字體（偏日系可愛感,但要中文字）   ・句子簡短，像自言自語的小碎念   ・語氣偏日記感、帶一點情緒      【註解生成規則】   ・飲料 → 味道、溫度、心情（例：清爽、微甜、剛剛好）   ・食物 → 口感、好吃程度（例：鬆軟、超好吃）   ・空間 → 氛圍（例：很放鬆、喜歡這種感覺）   ・整體 → 一句總結（例：今天有點幸福～）      【裝飾】   ・適度加入熱氣、閃光、愛心、小表情等元素   ・不要過多，保留一些留白      【完成風格】   ・像 Instagram 限時動態、雜誌隨手筆記風   ・自然、有質感、帶點慵懶感   ",
    date: "2026-07-17",
    url: "",
  },
  {
    id: 349,
    title: "英雄本色~港式經典風格",
    category: "Portrait",
    image: "./images/P02-Portrait/P006-4.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>幫我優畫一張圖片的提示詞，有三個人物照片附件，幫我產出一張香港著名電影【英雄本色】的劇照帥氣圖",
    date: "2026-07-17",
    url: "",
  },
  {
    id: 350,
    title: "英雄本色~現代改編都市版",
    category: "Portrait",
    image: "./images/P02-Portrait/P006-5.webp",
    prompt:
      "<span class='yf1'>利用Claude的prompt-master~</span>幫我優畫一張圖片的提示詞，有三個人物照片附件，幫我產出一張香港著名電影【英雄本色】的劇照帥氣圖",
    date: "2026-07-17",
    url: "",
  },
  {
    id: 351,
    title: "英雄本色~現代改編都市版",
    category: "Portrait",
    image: "./images/P02-Portrait/V001-1.mp4",
    prompt:
      "<span class='yf1'>使用編號349照片~</span>Three middle-aged Asian men in black leather trench coats and sunglasses stand in a rain-soaked Hong Kong-style alley at night, neon signs glowing on both sides. Static wide shot, slight slow dolly-in toward the group. Heavy rain falls continuously, droplets splashing on the wet reflective pavement. The center man exhales cigarette smoke slowly drifting upward and to the side. Subtle wind moves their coat collars and hair. All three blink naturally and shift weight slightly, maintaining a calm, intimidating stillness. Neon signs on the left flicker faintly. Background string lights sway gently in the wind. Cinematic film noir lighting, warm neon highlights against cool blue rain-shadow, shallow depth of field keeping the three men sharp while background alley blurs slightly. Duration 5 seconds, realistic physics, no camera shake.",
    date: "2026-07-17",
    url: "",
  },
];

