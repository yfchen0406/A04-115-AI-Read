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
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>116個地點請依序加入以下主題：\知床半島：原始森林與野生動物的世界自然遺產景色。\知床五湖：五個湖泊與森林步道的徒步景觀。\羅臼町：海面上的鯨魚與海鳥觀賞場景。\網走流冰：鄂霍次克海破冰船與流冰景象。\摩周湖：透明度極高的藍色火山口湖。\神之子池：清澈湛藍的小池水景。\阿寒湖：綠球藻與愛努文化風情湖景。\屈斜路湖：遼闊火山口湖與冬季天鵝畫面。\弟子屈町：道東旅遊樞紐的城鎮氛圍。\釧路濕原國立公園：廣闊濕地與丹頂鶴棲息景象。\塘路湖：湖泊與獨木舟活動場景。\霧多布濕原：根室濕地保護區的自然景色。\釧路市：霧都氛圍與港灣城市景觀。\根室市：日本最東端城市的代表景色。\納沙布岬：日本本土最東端與曙光美景。\厚岸町：牡蠣養殖與新鮮海產的漁港風情。",
    date: "2026-07-10",
    url: "",
  },
  {
    id: 242,
    title: "日本系列-北海道道東-1E-2",
    category: "Line",
    image: "./images/L01-Line/A02-japan-tour/GPT0016-1EX.webp",
    prompt:
      "<span class='yf3'>只列出著名景點，其餘參看前面四張圖~</span>116個地點請依序加入以下主題：\知床半島：原始森林與野生動物的世界自然遺產景色。\知床五湖：五個湖泊與森林步道的徒步景觀。\羅臼町：海面上的鯨魚與海鳥觀賞場景。\網走流冰：鄂霍次克海破冰船與流冰景象。\摩周湖：透明度極高的藍色火山口湖。\神之子池：清澈湛藍的小池水景。\阿寒湖：綠球藻與愛努文化風情湖景。\屈斜路湖：遼闊火山口湖與冬季天鵝畫面。\弟子屈町：道東旅遊樞紐的城鎮氛圍。\釧路濕原國立公園：廣闊濕地與丹頂鶴棲息景象。\塘路湖：湖泊與獨木舟活動場景。\霧多布濕原：根室濕地保護區的自然景色。\釧路市：霧都氛圍與港灣城市景觀。\十勝牧場：白樺林蔭大道與廣闊牧場風光。\開陽台：360度眺望知床半島與野付半島的展望景色。\野付半島：獨特沙嘴地形與冷杉枯木林景觀。",
    date: "2026-07-10",
    url: "",
  },
];

