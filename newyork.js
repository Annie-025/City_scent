// newyork.js - 纽约记忆香氛定制（二维人格系统 + 双语支持 + 百老汇文化元素）

// 双语文本数据
const newYorkTranslations = {
    en: {
        // 导航和标题
        "backToCities": "Back to Cities",
        "home": "Home",
        "newyorkTest": "New York Test",
        "perfumes": "Perfumes",
        "customize": "Customize",
        "languageToggle": "中",
        
        // 页面标题
        "pageTitle": "New York Memory · Grid Dreams | L'Oréal City Series",
        "cityTitle": "New York Memory Fragrance Customization",
        "citySubtitle": "Discover your New York scent story through 5 questions",
        "testTitle": "New York Grid Dreams",
        "testSubtitle": "5 questions to decode your unique connection with this city that never sleeps",
        
        // 测试说明
        "testInstructionsTitle": "Test Instructions",
        "testInstructions1": "Test based on spatial order and dream resonance in New York",
        "testInstructions2": "Each choice maps your personal grid in the steel forest",
        "testInstructions3": "Results will match you with a unique urban olfactory memory",
        "testInstructions4": "Discover other L'Oréal fragrances that might resonate with you",
        
        // 人格类型描述
        "historical_surveyor": {
            "name": "Historical Surveyor",
            "description": "Mapping the city's rational skeleton through grids and scales, measuring the pulse of urban development with architectural precision.",
            "quote": "Like the Manhattan grid plan itself, finding order in the chaos of urban evolution."
        },
        "soul_archaeologist": {
            "name": "Soul Archaeologist",
            "description": "Delving beneath the glittering surface to excavate forgotten immigrant stories, underground cultures, and the city's collective subconscious.",
            "quote": "In the basements of old tenements, the city whispers its secrets to those who listen."
        },
        "eternal_wanderer": {
            "name": "Eternal Wanderer",
            "description": "Finding home in perpetual transit, carrying the world in a suitcase through ports, stations, and the spaces between cultures.",
            "quote": "The subway's rumbling rhythm is the city's heartbeat, and my constant companion."
        },
        "dreamweaver": {
            "name": "Dreamweaver",
            "description": "Overlaying reality with Broadway spotlights and Gatsby-esque fantasies, constructing parallel New Yorks where dreams never fade.",
            "quote": "Every corner of this city is a stage, waiting for its story to be told."
        },
        
        // 香水描述
        "perfume1_desc": "For Historical Surveyors. Capturing the precision of the Manhattan grid with quill ink, parchment, and the scent of upturned earth where dreams were first planned.",
        "perfume2_desc": "For Soul Archaeologists. Excavating the layered memories of Five Points: old brick soaked with rain, basement whiskey, and the enduring scent of hope.",
        "perfume3_desc": "For Eternal Wanderers. The misty anticipation of Ellis Island, leather suitcases, multilingual whispers, and the warm breath of new beginnings.",
        "perfume4_desc": "For Dreamweavers. The morning dew on Gatsby's lawn, champagne bubbles, freshly cut grass, and the lingering melancholy of a party that never truly ends.",
        
        // 按钮文本
        "prevQuestion": "Previous",
        "nextQuestion": "Next",
        "viewResults": "View Results",
        "arButton": "AR Experience",
        "shareButton": "Share My Scent",
        "addToCart": "Add to Cart",
        
        // 其他
        "recommendedForYou": "✓ Recommended for you",
        "matchScore": "Match Score",
        "personalization": "Personalization",
        "engravingHint": "e.g.: NYC Dreams",
        "yourCityExplorerType": "Your City Explorer Type:",
        "forYou": "For you:"
    },
    
    zh: {
        // 导航和标题
        "backToCities": "返回城市选择",
        "home": "首页",
        "newyorkTest": "纽约测试",
        "perfumes": "纽约香氛",
        "customize": "定制购买",
        "languageToggle": "EN",
        
        // 页面标题
        "pageTitle": "纽约记忆·网格梦想 | 欧莱雅城市系列",
        "cityTitle": "纽约记忆香氛定制",
        "citySubtitle": "通过5道题了解您与纽约的独特联结，推荐专属香氛",
        "testTitle": "纽约网格梦想",
        "testSubtitle": "5道场景题，解码您与这座不眠之城的独特联结",
        
        // 测试说明
        "testInstructionsTitle": "测试说明",
        "testInstructions1": "基于纽约的空间秩序与梦想共鸣",
        "testInstructions2": "每个选择都在钢铁森林中描绘您的个人网格",
        "testInstructions3": "测试结果将为您匹配专属的都市嗅觉记忆",
        "testInstructions4": "同时发现欧莱雅旗下可能触动您的其他香气",
        
        // 人格类型描述
        "historical_surveyor": {
            "name": "历史测绘者",
            "description": "通过网格与尺度绘制城市的理性骨架，用建筑的精准度测量城市发展的脉搏。",
            "quote": "如同曼哈顿的网格规划，在城市的进化混沌中寻找秩序。"
        },
        "soul_archaeologist": {
            "name": "心灵考古者",
            "description": "深入光鲜表面之下，挖掘被遗忘的移民故事、地下文化和这座城市的集体潜意识。",
            "quote": "在老式公寓的地下室里，城市向倾听者低语它的秘密。"
        },
        "eternal_wanderer": {
            "name": "永恒漂泊者",
            "description": "在永续的流动中找到归宿，通过港口、车站和文化之间的空间，将世界装进行李箱。",
            "quote": "地铁的隆隆节奏是这座城市的心跳，也是我永恒的伴侣。"
        },
        "dreamweaver": {
            "name": "旧时梦境师",
            "description": "用百老汇的聚光灯和盖茨比式的幻想覆盖现实，构筑梦想永不褪色的平行纽约。",
            "quote": "这座城市的每个角落都是一个舞台，等待着它的故事被讲述。"
        },
        
        // 香水描述
        "perfume1_desc": "为历史测绘者而生。用鹅毛笔、羊皮纸和规划之初翻起的泥土气息，捕捉曼哈顿网格的精准。",
        "perfume2_desc": "为心灵考古者定制。挖掘五点区的层积记忆：雨水浸泡的老砖墙、地下室的威士忌酒渍，以及希望的不灭气息。",
        "perfume3_desc": "为永恒漂泊者准备。埃利斯岛的雾色期待、皮革行李箱、多语言的低语呢喃，与新开始的温暖呼吸。",
        "perfume4_desc": "为旧时梦境师创造。盖茨比草坪上的晨露、香槟气泡、新鲜修剪的草香，以及一场永不真正结束的派对的淡淡怅惘。",
        
        // 按钮文本
        "prevQuestion": "上一题",
        "nextQuestion": "下一题",
        "viewResults": "查看结果",
        "arButton": "AR试香体验",
        "shareButton": "分享我的香气",
        "addToCart": "加入购物车",
        
        // 其他
        "recommendedForYou": "✓ 为您推荐",
        "matchScore": "共鸣度",
        "personalization": "个性化定制",
        "engravingHint": "例如：纽约梦想",
        "yourCityExplorerType": "您的城市漫游者类型：",
        "forYou": "为您推荐："
    }
};

// 纽约专属测试问题 - 5道题，基于二维人格系统，融入百老汇、汉密尔顿、中央公园等文化元素
const newyorkQuestions = {
    en: [
        {
            id: 1,
            text: "When experiencing New York's theater district, what draws you most?",
            hint: "Broadway reflects different aspects of the city's soul",
            options: [
                { 
                    text: "The historical architecture and precise stage mechanics of classic theaters", 
                    icon: "🏛️",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "Appreciating the structural integrity and historical engineering behind the spectacle"
                },
                { 
                    text: "The raw emotion and untold immigrant stories in shows like 'Hamilton'", 
                    icon: "🎭",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "Drawn to the revolutionary spirit and layered narratives of America's founding"
                },
                { 
                    text: "The backstage chaos and touring lifestyle of traveling productions", 
                    icon: "🎪",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "Fascinated by the transient nature and nomadic reality of theater life"
                },
                { 
                    text: "The glittering fantasy and transformative power of musical theater", 
                    icon: "✨",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "Captivated by the escapism and romantic possibilities of Broadway dreams"
                }
            ]
        },
        {
            id: 2,
            text: "In Central Park, where do you find your perfect New York moment?",
            hint: "The park is a microcosm of the city's contrasts",
            options: [
                { 
                    text: "Studying the Frederick Law Olmsted's original park plans at the Conservatory Garden", 
                    icon: "🗺️",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "Analyzing the intentional design of America's first landscaped public park"
                },
                { 
                    text: "Finding quiet corners where the city's history whispers through old trees", 
                    icon: "🌳",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "Listening to the park's hidden stories in its oldest, most tranquil spaces"
                },
                { 
                    text: "Watching the constant flow of joggers, carriages, and tourists at Bethesda Terrace", 
                    icon: "🚶‍♀️",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "Observing the park as a crossroads of endless human movement and stories"
                },
                { 
                    text: "Imagining romantic movie scenes and fictional encounters at Bow Bridge", 
                    icon: "💖",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "Seeing the park through a cinematic lens of romantic possibilities"
                }
            ]
        },
        {
            id: 3,
            text: "How do you navigate the Manhattan grid?",
            hint: "The city's layout reflects different ways of moving through life",
            options: [
                { 
                    text: "By exact coordinates - cross streets, subway lines, and efficient routes", 
                    icon: "📍",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "Mastering the mathematical precision of New York's most famous feature"
                },
                { 
                    text: "By neighborhood histories and ethnic enclaves - Little Italy, Chinatown, etc.", 
                    icon: "🏙️",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "Navigating through layers of immigrant history embedded in the grid"
                },
                { 
                    text: "By following crowds, intuition, and unexpected discoveries off the main avenues", 
                    icon: "🧭",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "Embracing the spontaneous flow of the city beyond its rigid structure"
                },
                { 
                    text: "By emotional landmarks - a favorite bookstore, a memorable restaurant, a view", 
                    icon: "❤️",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "Mapping the city through personal connections rather than coordinates"
                }
            ]
        },
        {
            id: 4,
            text: "What aspect of New York's immigrant history resonates most with you?",
            hint: "The city's soul is built on layers of arrival and reinvention",
            options: [
                { 
                    text: "The architectural legacy and infrastructure built by immigrant labor", 
                    icon: "🏗️",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "Admiring the tangible achievements that transformed the skyline"
                },
                { 
                    text: "The personal diaries and letters from Ellis Island arrivals", 
                    icon: "✉️",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "Touched by intimate stories of hope, fear, and new beginnings"
                },
                { 
                    text: "The preservation of cultural traditions in ethnic neighborhoods", 
                    icon: "🌍",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "Valuing the systematic maintenance of heritage within the urban fabric"
                },
                { 
                    text: "The constant reinvention of self that defines the New York experience", 
                    icon: "🦋",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "Relating to the perpetual transformation inherent to the city's identity"
                }
            ]
        },
        {
            id: 5,
            text: "When do you feel most connected to New York's energy?",
            hint: "The city's pulse beats differently in different moments",
            options: [
                { 
                    text: "During morning rush hour in Grand Central Terminal", 
                    icon: "🕗",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "Feeling the city's organized chaos and precise timing at its peak efficiency"
                },
                { 
                    text: "Late at night in a jazz club in Greenwich Village", 
                    icon: "🎷",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "Connecting with the city's artistic soul in its most intimate, underground spaces"
                },
                { 
                    text: "At sunset on the Staten Island Ferry, watching the skyline recede", 
                    icon: "⛴️",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "Experiencing the bittersweet beauty of temporary departure and return"
                },
                { 
                    text: "At dawn in Times Square after the crowds have thinned", 
                    icon: "🌅",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "Seeing the city's most famous spectacle transformed by morning light and quiet"
                }
            ]
        }
    ],
    zh: [
        {
            id: 1,
            text: "体验纽约剧院区时，什么最吸引您？",
            hint: "百老汇反映了城市灵魂的不同面向",
            options: [
                { 
                    text: "经典剧院的历史建筑和精确的舞台机械", 
                    icon: "🏛️",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "欣赏奇观背后的结构完整性和历史工程"
                },
                { 
                    text: "《汉密尔顿》等剧中原始的情感和未讲述的移民故事", 
                    icon: "🎭",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "被美国建国的革命精神和层叠叙事所吸引"
                },
                { 
                    text: "巡演制作的后台混乱和旅行生活方式", 
                    icon: "🎪",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "着迷于戏剧生活的短暂本质和游牧现实"
                },
                { 
                    text: "音乐剧的璀璨幻想和变革力量", 
                    icon: "✨",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "被百老汇梦想的逃避主义和浪漫可能性所吸引"
                }
            ]
        },
        {
            id: 2,
            text: "在中央公园，您在哪里找到完美的纽约时刻？",
            hint: "公园是城市对比的缩影",
            options: [
                { 
                    text: "在温室花园研究弗雷德里克·劳·奥姆斯特德的原始公园规划", 
                    icon: "🗺️",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "分析美国第一个景观公共公园的刻意设计"
                },
                { 
                    text: "在老树间城市历史低语的安静角落", 
                    icon: "🌳",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "在最古老、最宁静的空间倾听公园隐藏的故事"
                },
                { 
                    text: "在贝塞斯达露台观察跑步者、马车和游客的持续流动", 
                    icon: "🚶‍♀️",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "将公园视为无尽人流和故事的十字路口"
                },
                { 
                    text: "在弓桥上想象浪漫电影场景和虚构邂逅", 
                    icon: "💖",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "通过浪漫可能性的电影镜头看公园"
                }
            ]
        },
        {
            id: 3,
            text: "您如何导航曼哈顿的网格？",
            hint: "城市布局反映了穿越生活的不同方式",
            options: [
                { 
                    text: "精确坐标 - 交叉街道、地铁线路和高效路线", 
                    icon: "📍",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "掌握纽约最著名特征的数学精度"
                },
                { 
                    text: "社区历史和民族聚居区 - 小意大利、唐人街等", 
                    icon: "🏙️",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "通过网格中嵌入的移民历史层进行导航"
                },
                { 
                    text: "跟随人群、直觉和主要大道之外的意外发现", 
                    icon: "🧭",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "拥抱城市超越其刚性结构的自发流动"
                },
                { 
                    text: "情感地标 - 最喜欢的书店、难忘的餐厅、风景", 
                    icon: "❤️",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "通过个人连接而非坐标来绘制城市地图"
                }
            ]
        },
        {
            id: 4,
            text: "纽约移民历史的哪个方面最能引起您的共鸣？",
            hint: "城市的灵魂建立在到达和重塑的层叠之上",
            options: [
                { 
                    text: "移民劳动留下的建筑遗产和基础设施", 
                    icon: "🏗️",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "欣赏改变了天际线的有形成就"
                },
                { 
                    text: "埃利斯岛抵达者的个人日记和信件", 
                    icon: "✉️",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "被希望、恐惧和新开始的亲密故事所触动"
                },
                { 
                    text: "民族社区文化传统的保存", 
                    icon: "🌍",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "珍视城市结构中遗产的系统性维护"
                },
                { 
                    text: "定义纽约体验的自我不断重塑", 
                    icon: "🦋",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "与城市身份内在的持续转变产生共鸣"
                }
            ]
        },
        {
            id: 5,
            text: "您什么时候最能感受到与纽约能量的连接？",
            hint: "城市的脉搏在不同时刻以不同方式跳动",
            options: [
                { 
                    text: "中央车站早高峰期间", 
                    icon: "🕗",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "在城市组织混乱和精确计时达到顶峰效率时感受它"
                },
                { 
                    text: "深夜在格林威治村的爵士俱乐部", 
                    icon: "🎷",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "在最亲密、地下的空间连接城市的艺术灵魂"
                },
                { 
                    text: "日落时分在史坦顿岛渡轮上，看着天际线逐渐远去", 
                    icon: "⛴️",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "体验暂时离开和返回的苦乐参半之美"
                },
                { 
                    text: "黎明时分人群稀少后的时代广场", 
                    icon: "🌅",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "看到城市最著名的奇观被晨光和宁静所改变"
                }
            ]
        }
    ]
};

// 纽约城市香水数据 - 4款，对应4种新人格类型（双语香调）
const newyorkPerfumes = [
    {
        id: 1,
        name: "GRID PLAN MANUSCRIPT",
        chineseName: "网格计划手稿",
        personalityType: "historical_surveyor",
        personalityTags: {
            en: ["Urban Planning", "Structural Precision", "Architectural Blueprint", "Ordered Chaos"],
            zh: ["城市规划", "结构精确", "建筑蓝图", "有序混沌"]
        },
        icon: "fas fa-drafting-compass",
        notes: {
            top: {
                en: ["Quill pen ink", "Yellowed parchment paper"],
                zh: ["鹅毛笔墨水", "泛黄羊皮纸"]
            },
            middle: {
                en: ["Freshly upturned earth", "Wild grasses of untouched land"],
                zh: ["新翻起的泥土", "未开发土地的野草"]
            },
            base: {
                en: ["Aged leather", "Sandstone", "Urban ambition"],
                zh: ["陈年皮革", "砂岩", "都市野心"]
            }
        },
        description: {
            en: "For Historical Surveyors. Capturing the precision of the Manhattan grid with quill ink, parchment, and the scent of upturned earth where dreams were first planned.",
            zh: "为历史测绘者而生。用鹅毛笔、羊皮纸和规划之初翻起的泥土气息，捕捉曼哈顿网格的精准。"
        },
        literaryReference: {
            en: "Like the Manhattan grid plan itself, finding order in the chaos of urban evolution.",
            zh: "如同曼哈顿的网格规划，在城市的进化混沌中寻找秩序。"
        },
        intensity: {
            en: "Medium-high",
            zh: "中等偏上"
        },
        longevity: {
            en: "8-10 hours",
            zh: "8-10小时"
        },
        price: 699
    },
    {
        id: 2,
        name: "FIVE POINTS ECHO",
        chineseName: "五点区回响",
        personalityType: "soul_archaeologist",
        personalityTags: {
            en: ["Urban Archaeology", "Immigrant Memory", "Layered History", "Subterranean Echo"],
            zh: ["都市考古", "移民记忆", "层叠历史", "地下回响"]
        },
        icon: "fas fa-excavator",
        notes: {
            top: {
                en: ["Old brick soaked with rain", "Damp cellar air"],
                zh: ["雨水浸泡的老砖墙", "潮湿的地窖空气"]
            },
            middle: {
                en: ["Basement whiskey", "Cheap perfume", "Hope"],
                zh: ["地下室威士忌", "廉价香水", "希望"]
            },
            base: {
                en: ["Time-worn cobblestone", "Tarnished copper", "Enduring spirit"],
                zh: ["时光磨损的鹅卵石", "失去光泽的铜", "不屈精神"]
            }
        },
        description: {
            en: "For Soul Archaeologists. Excavating the layered memories of Five Points: old brick soaked with rain, basement whiskey, and the enduring scent of hope.",
            zh: "为心灵考古者定制。挖掘五点区的层积记忆：雨水浸泡的老砖墙、地下室的威士忌酒渍，以及希望的不灭气息。"
        },
        literaryReference: {
            en: "In the basements of old tenements, the city whispers its secrets to those who listen.",
            zh: "在老式公寓的地下室里，城市向倾听者低语它的秘密。"
        },
        intensity: {
            en: "Deep and complex",
            zh: "深邃复杂"
        },
        longevity: {
            en: "10-12 hours",
            zh: "10-12小时"
        },
        price: 699
    },
    {
        id: 3,
        name: "ELLIS ISLAND FOG",
        chineseName: "埃利斯岛迷雾",
        personalityType: "eternal_wanderer",
        personalityTags: {
            en: ["Immigrant Journey", "Threshold State", "New Beginnings", "Multilingual Dreams"],
            zh: ["移民旅程", "阈限状态", "新的开始", "多语梦想"]
        },
        icon: "fas fa-ship",
        notes: {
            top: {
                en: ["Cold mist over water", "Leather suitcase"],
                zh: ["水上的冷雾", "皮革行李箱"]
            },
            middle: {
                en: ["Multilingual whispers", "Warm breath of anticipation"],
                zh: ["多语言的低语", "期待的温暖呼吸"]
            },
            base: {
                en: ["Distant ocean salt", "Newspaper print", "Dreams unspoken"],
                zh: ["远洋的盐分", "报纸油墨", "未说出的梦想"]
            }
        },
        description: {
            en: "For Eternal Wanderers. The misty anticipation of Ellis Island, leather suitcases, multilingual whispers, and the warm breath of new beginnings.",
            zh: "为永恒漂泊者准备。埃利斯岛的雾色期待、皮革行李箱、多语言的低语呢喃，与新开始的温暖呼吸。"
        },
        literaryReference: {
            en: "The subway's rumbling rhythm is the city's heartbeat, and my constant companion.",
            zh: "地铁的隆隆节奏是这座城市的心跳，也是我永恒的伴侣。"
        },
        intensity: {
            en: "Light and ethereal",
            zh: "轻盈空灵"
        },
        longevity: {
            en: "6-8 hours",
            zh: "6-8小时"
        },
        price: 699
    },
    {
        id: 4,
        name: "GATSBY'S LAWN DEW",
        chineseName: "盖茨比晨露",
        personalityType: "dreamweaver",
        personalityTags: {
            en: ["Golden Age Dreams", "Morning After", "Broken Crystal", "Unfinished Parties"],
            zh: ["黄金时代梦想", "翌日清晨", "破碎水晶", "未竟派对"]
        },
        icon: "fas fa-champagne-glasses",
        notes: {
            top: {
                en: ["Morning dew on grass", "Shattered champagne bubbles"],
                zh: ["草上的晨露", "破碎的香槟气泡"]
            },
            middle: {
                en: ["Freshly cut lawn", "Fading gardenia"],
                zh: ["新修剪的草坪", "渐渐消散的栀子花"]
            },
            base: {
                en: ["Linen sheets", "Lost pearl", "Morning melancholy"],
                zh: ["亚麻床单", "遗失的珍珠", "晨间怅惘"]
            }
        },
        description: {
            en: "For Dreamweavers. The morning dew on Gatsby's lawn, champagne bubbles, freshly cut grass, and the lingering melancholy of a party that never truly ends.",
            zh: "为旧时梦境师创造。盖茨比草坪上的晨露、香槟气泡、新鲜修剪的草香，以及一场永不真正结束的派对的淡淡怅惘。"
        },
        literaryReference: {
            en: "Every corner of this city is a stage, waiting for its story to be told.",
            zh: "这座城市的每个角落都是一个舞台，等待着它的故事被讲述。"
        },
        intensity: {
            en: "Soft and lingering",
            zh: "柔和持久"
        },
        longevity: {
            en: "4-6 hours",
            zh: "4-6小时"
        },
        price: 699
    }
];

// 欧莱雅旗下香水推荐（根据新人格类型，双语香调）
const lorealPerfumesByPersonality = {
    // 历史测绘者（理性+归属）
    "historical_surveyor": {
        en: [
            {
                brand: "YSL",
                name: "Libre",
                description: "Exquisite balance of lavender and orange blossom, showcasing independent confident rational aesthetics",
                icon: "fas fa-spa",
                price: 850,
                notes: {
                    en: ["Lavender", "Orange Blossom", "Vanilla"],
                    zh: ["薰衣草", "橙花", "香草"]
                },
                matchReason: "Matches your appreciation for precision and structural beauty"
            },
            {
                brand: "GIORGIO ARMANI",
                name: "Si",
                description: "Elegant combination of blackcurrant and rose, embodying precise taste and sense of order",
                icon: "fas fa-feather-alt",
                price: 780,
                notes: {
                    en: ["Blackcurrant", "Rose", "Vanilla"],
                    zh: ["黑醋栗", "玫瑰", "香草"]
                },
                matchReason: "Aligns with your methodical approach to urban exploration"
            }
        ],
        zh: [
            {
                brand: "YSL",
                name: "自由之水",
                description: "薰衣草与橙花的精妙平衡，展现独立自信的理性美学",
                icon: "fas fa-spa",
                price: 850,
                notes: {
                    en: ["Lavender", "Orange Blossom", "Vanilla"],
                    zh: ["薰衣草", "橙花", "香草"]
                },
                matchReason: "与您对精确度和结构美的欣赏相匹配"
            },
            {
                brand: "GIORGIO ARMANI",
                name: "挚爱",
                description: "黑醋栗与玫瑰的优雅组合，体现精准品味与秩序感",
                icon: "fas fa-feather-alt",
                price: 780,
                notes: {
                    en: ["Blackcurrant", "Rose", "Vanilla"],
                    zh: ["黑醋栗", "玫瑰", "香草"]
                },
                matchReason: "符合您系统性的城市探索方法"
            }
        ]
    },
    // 心灵考古者（感性+归属）
    "soul_archaeologist": {
        en: [
            {
                brand: "LANCÔME",
                name: "Miracle",
                description: "Fresh romance of lychee and freesia, excavating deep emotional memories",
                icon: "fas fa-crown",
                price: 720,
                notes: {
                    en: ["Lychee", "Freesia", "Jasmine"],
                    zh: ["荔枝", "小苍兰", "茉莉"]
                },
                matchReason: "Echoes your archaeological exploration of deep emotions and memories"
            },
            {
                brand: "VALENTINO",
                name: "Born in Roma",
                description: "Passionate sensuality of bergamot and jasmine, recreating ancient emotional imprints",
                icon: "fas fa-gem",
                price: 690,
                notes: {
                    en: ["Bergamot", "Jasmine", "Sandalwood"],
                    zh: ["佛手柑", "茉莉", "檀香"]
                },
                matchReason: "Matches your emotional depth in excavating urban subconscious"
            }
        ],
        zh: [
            {
                brand: "LANCÔME",
                name: "奇迹香水",
                description: "荔枝与小苍兰的清新浪漫，挖掘深层的情感记忆",
                icon: "fas fa-crown",
                price: 720,
                notes: {
                    en: ["Lychee", "Freesia", "Jasmine"],
                    zh: ["荔枝", "小苍兰", "茉莉"]
                },
                matchReason: "呼应您对深层情感和记忆的考古探索"
            },
            {
                brand: "VALENTINO",
                name: "Born in Roma",
                description: "佛手柑与茉莉的热烈感性，重现古老情感印记",
                icon: "fas fa-gem",
                price: 690,
                notes: {
                    en: ["Bergamot", "Jasmine", "Sandalwood"],
                    zh: ["佛手柑", "茉莉", "檀香"]
                },
                matchReason: "匹配您挖掘城市潜意识的情感深度"
            }
        ]
    },
    // 永恒漂泊者（感性+探索）
    "eternal_wanderer": {
        en: [
            {
                brand: "MAISON MARGIELA",
                name: "Lazy Sunday Morning",
                description: "Fresh comfort of pear and lily of the valley, suitable for souls always traveling",
                icon: "fas fa-cloud",
                price: 950,
                notes: {
                    en: ["Pear", "Lily of the Valley", "Musk"],
                    zh: ["梨子", "铃兰", "麝香"]
                },
                matchReason: "Suits your free-spirited traits as an eternal wanderer"
            },
            {
                brand: "VERSACE",
                name: "Bright Crystal",
                description: "Vibrant freshness of pomegranate and yuzu, symbolizing flowing scenery",
                icon: "fas fa-gem",
                price: 650,
                notes: {
                    en: ["Pomegranate", "Yuzu", "Magnolia"],
                    zh: ["石榴", "柚子", "木兰"]
                },
                matchReason: "Echoes your vitality and exploration spirit as an eternal wanderer"
            }
        ],
        zh: [
            {
                brand: "MAISON MARGIELA",
                name: "慵懒周日",
                description: "梨子与铃兰的清新舒适，适合永在旅途的灵魂",
                icon: "fas fa-cloud",
                price: 950,
                notes: {
                    en: ["Pear", "Lily of the Valley", "Musk"],
                    zh: ["梨子", "铃兰", "麝香"]
                },
                matchReason: "适合您作为永恒漂泊者的自由随性特质"
            },
            {
                brand: "VERSACE",
                name: "晶钻女士",
                description: "石榴与柚子的活力清新，象征流动的风景",
                icon: "fas fa-gem",
                price: 650,
                notes: {
                    en: ["Pomegranate", "Yuzu", "Magnolia"],
                    zh: ["石榴", "柚子", "木兰"]
                },
                matchReason: "呼应您作为永恒漂泊者的活力与探索精神"
            }
        ]
    },
    // 旧时梦境师（理性+探索）
    "dreamweaver": {
        en: [
            {
                brand: "CHANEL",
                name: "N°5 L'EAU",
                description: "Modern interpretation of classic aldehydes, overlaying reality with soft-focus filter",
                icon: "fas fa-star",
                price: 980,
                notes: {
                    en: ["Aldehydes", "Citrus", "Ylang-ylang"],
                    zh: ["醛香", "柑橘", "依兰"]
                },
                matchReason: "Aligns with your imagination constructing parallel realities"
            },
            {
                brand: "DIOR",
                name: "J'adore",
                description: "Luxurious classic of sambac jasmine and ylang-ylang, weaving golden dreams",
                icon: "fas fa-venus",
                price: 920,
                notes: {
                    en: ["Sambac Jasmine", "Ylang-ylang", "Vanilla"],
                    zh: ["沙巴茉莉", "依兰", "香草"]
                },
                matchReason: "Matches your romantic construction ability as a dreamweaver"
            }
        ],
        zh: [
            {
                brand: "CHANEL",
                name: "N°5 清新之水",
                description: "经典醛香的现代演绎，为现实覆上柔光滤镜",
                icon: "fas fa-star",
                price: 980,
                notes: {
                    en: ["Aldehydes", "Citrus", "Ylang-ylang"],
                    zh: ["醛香", "柑橘", "依兰"]
                },
                matchReason: "符合您构筑平行现实的想象力"
            },
            {
                brand: "DIOR",
                name: "真我",
                description: "沙巴茉莉与依兰的奢华经典，编织金色梦境",
                icon: "fas fa-venus",
                price: 920,
                notes: {
                    en: ["Sambac Jasmine", "Ylang-ylang", "Vanilla"],
                    zh: ["沙巴茉莉", "依兰", "香草"]
                },
                matchReason: "匹配您作为旧时梦境师的浪漫构筑能力"
            }
        ]
    }
};

// 全局变量
let currentQuestion = 0;
let userSelections = [];
let userScores = {
    connection: 0,  // 情感连接深度：正值=归属导向，负值=探索导向
    interaction: 0  // 互动方式：正值=理性系统，负值=感性沉浸
};
let userPersonality = "";
let currentLang = 'en'; // 默认英文

// DOM元素
const questionTextEl = document.getElementById('questionText');
const questionHintEl = document.getElementById('questionHint');
const optionsContainerEl = document.getElementById('optionsContainer');
const progressBarEl = document.getElementById('progressBar');
const progressTextEl = document.getElementById('progressText');
const prevBtnEl = document.getElementById('prevBtn');
const nextBtnEl = document.getElementById('nextBtn');
const questionContainerEl = document.getElementById('questionContainer');
const resultsContainerEl = document.getElementById('resultsContainer');
const profileTagsEl = document.getElementById('profileTags');
const userPersonalityEl = document.getElementById('userPersonality');
const matchScoreEl = document.getElementById('matchScore');
const resultTitleEl = document.getElementById('resultTitle');
const resultSubtitleEl = document.getElementById('resultSubtitle');
const resultDescriptionEl = document.getElementById('personalityDescription');
const resultPerfumeNameEl = document.getElementById('resultPerfumeName');
const newyorkPerfumesEl = document.getElementById('newyorkPerfumes');
const productGridEl = document.getElementById('productGrid');
const engravingTextEl = document.getElementById('engravingText');
const engravingTextZHEl = document.getElementById('engravingTextZH');
const engravingPreviewEl = document.getElementById('engravingPreview');
const arButtonEl = document.getElementById('arButton');
const addToCartButtonEl = document.getElementById('addToCartButton');
const shareModalEl = document.getElementById('shareModal');
const sharePerfumeNameEl = document.getElementById('sharePerfumeName');
const sharePerfumeDescEl = document.getElementById('sharePerfumeDesc');
const sharePersonalityEl = document.getElementById('sharePersonality');
const shareTagsEl = document.getElementById('shareTags');

// 语言切换函数
function toggleLanguage() {
    // 切换语言
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    
    // 更新语言切换按钮文本
    updateLanguageToggle();
    
    // 更新所有带data-lang属性的元素
    updatePageText();
    
    // 更新动态内容（如果测试已进行到某一步）
    updateDynamicContent();
    
    // 保存语言偏好到localStorage
    localStorage.setItem('newyorkLanguage', currentLang);
}

// 更新语言切换按钮
function updateLanguageToggle() {
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
        // 切换按钮内的文本
        const spans = toggleBtn.querySelectorAll('span[data-lang]');
        spans.forEach(span => {
            if (span.getAttribute('data-lang') === currentLang) {
                span.style.display = 'inline';
            } else {
                span.style.display = 'none';
            }
        });
    }
}

// 更新页面静态文本
function updatePageText() {
    // 更新页面标题
    document.title = newYorkTranslations[currentLang].pageTitle;
    
    // 更新所有带data-lang属性的元素
    document.querySelectorAll('[data-lang]').forEach(element => {
        const langKey = element.getAttribute('data-lang');
        if (langKey === currentLang) {
            element.style.display = element.tagName === 'SPAN' ? 'inline' : 'block';
            // 特殊处理输入框
            if (element.tagName === 'INPUT') {
                element.style.display = 'block';
            }
        } else {
            element.style.display = 'none';
        }
    });
    
    // 特殊处理导航中的span元素
    document.querySelectorAll('nav li span[data-lang]').forEach(span => {
        if (span.getAttribute('data-lang') === currentLang) {
            span.style.display = 'inline';
        } else {
            span.style.display = 'none';
        }
    });
    
    // 更新城市标签容器中的span元素
    document.querySelectorAll('.city-tags span[data-lang]').forEach(span => {
        if (span.getAttribute('data-lang') === currentLang) {
            span.style.display = 'inline-block';
        } else {
            span.style.display = 'none';
        }
    });
    
    // 更新赠礼标签
    document.querySelectorAll('.gift-tag[data-lang]').forEach(tag => {
        if (tag.getAttribute('data-lang') === currentLang) {
            tag.style.display = 'inline-block';
        } else {
            tag.style.display = 'none';
        }
    });
    
    // 更新分享平台按钮文本
    document.querySelectorAll('.share-platform span[data-lang]').forEach(span => {
        if (span.getAttribute('data-lang') === currentLang) {
            span.style.display = 'inline';
        } else {
            span.style.display = 'none';
        }
    });
    
    // 更新测试进度文本
    updateProgressText();
    
    // 更新按钮文本
    updateButtonTexts();
    
    // 更新刻字预览
    updateEngravingPreview();
}

// 更新测试进度文本
function updateProgressText() {
    if (progressTextEl) {
        const totalQuestions = newyorkQuestions[currentLang].length;
        if (currentLang === 'en') {
            progressTextEl.textContent = `Question ${currentQuestion + 1}/${totalQuestions}`;
        } else {
            progressTextEl.textContent = `第${currentQuestion + 1}/${totalQuestions}题`;
        }
    }
}

// 更新按钮文本
function updateButtonTexts() {
    if (prevBtnEl) {
        const prevSpans = prevBtnEl.querySelectorAll('span[data-lang]');
        prevSpans.forEach(span => {
            if (span.getAttribute('data-lang') === currentLang) {
                span.style.display = 'inline';
            } else {
                span.style.display = 'none';
            }
        });
    }
    
    if (nextBtnEl) {
        const nextSpans = nextBtnEl.querySelectorAll('span[data-lang]');
        nextSpans.forEach(span => {
            if (span.getAttribute('data-lang') === currentLang) {
                span.style.display = 'inline';
            } else {
                span.style.display = 'none';
            }
        });
        
        // 更新下一题按钮文本
        const totalQuestions = newyorkQuestions[currentLang].length;
        if (currentQuestion === totalQuestions - 1) {
            const viewResultsText = currentLang === 'en' ? 'View Results' : '查看结果';
            nextBtnEl.innerHTML = `<span data-lang="${currentLang}">${viewResultsText}</span>`;
        } else {
            const nextText = currentLang === 'en' ? 'Next' : '下一题';
            nextBtnEl.innerHTML = `<span data-lang="${currentLang}">${nextText}</span>`;
        }
    }
    
    // 更新AR按钮文本
    if (arButtonEl) {
        const arSpans = arButtonEl.querySelectorAll('span[data-lang]');
        arSpans.forEach(span => {
            if (span.getAttribute('data-lang') === currentLang) {
                span.style.display = 'inline';
            } else {
                span.style.display = 'none';
            }
        });
    }
    
    // 更新分享按钮文本
    const shareButton = document.getElementById('shareButton');
    if (shareButton) {
        const shareSpans = shareButton.querySelectorAll('span[data-lang]');
        shareSpans.forEach(span => {
            if (span.getAttribute('data-lang') === currentLang) {
                span.style.display = 'inline';
            } else {
                span.style.display = 'none';
            }
        });
    }
    
    // 更新购物车按钮文本
    if (addToCartButtonEl) {
        const cartSpans = addToCartButtonEl.querySelectorAll('span[data-lang]');
        cartSpans.forEach(span => {
            if (span.getAttribute('data-lang') === currentLang) {
                span.style.display = 'inline';
            } else {
                span.style.display = 'none';
            }
        });
    }
}

// 更新动态内容（测试问题、结果等）
function updateDynamicContent() {
    // 如果当前正在显示问题，更新问题
    if (questionContainerEl && questionContainerEl.style.display !== 'none') {
        showQuestion();
    }
    
    // 如果当前正在显示结果，更新结果
    if (resultsContainerEl && resultsContainerEl.style.display !== 'none') {
        updateResultsForLanguage();
    }
}

// 更新结果页面的语言
function updateResultsForLanguage() {
    if (!userPersonality) return;
    
    // 获取当前人格信息
    const personalityInfo = newYorkTranslations[currentLang][userPersonality];
    
    // 更新人格描述
    if (resultDescriptionEl && personalityInfo) {
        resultDescriptionEl.innerHTML = `
            <p>${personalityInfo.description}</p>
            <p class="personality-quote">${personalityInfo.quote}</p>
        `;
    }
    
    // 更新推荐香水信息
    const recommendedPerfume = getRecommendedNewYorkPerfume(userPersonality);
    if (recommendedPerfume) {
        // 更新结果标题中的香水名
        if (resultPerfumeNameEl) {
            const perfumeName = currentLang === 'en' ? recommendedPerfume.name : recommendedPerfume.chineseName;
            resultPerfumeNameEl.textContent = perfumeName;
        }
        
        // 更新人格类型显示
        if (userPersonalityEl) {
            userPersonalityEl.textContent = personalityInfo.name;
        }
        
        // 更新副标题文本
        if (resultSubtitleEl) {
            const subtitleSpans = resultSubtitleEl.querySelectorAll('span[data-lang]');
            subtitleSpans.forEach(span => {
                if (span.getAttribute('data-lang') === currentLang) {
                    span.style.display = 'inline';
                } else {
                    span.style.display = 'none';
                }
            });
        }
        
        // 更新个人资料标签
        updateProfileTags(personalityInfo, recommendedPerfume);
        
        // 重新显示纽约香水
        displayNewYorkPerfumes(recommendedPerfume);
        
        // 重新显示欧莱雅推荐香水
        displayLorealRecommendations(userPersonality);
    }
}

// 初始化函数
function initNewYork() {
    // 检查保存的语言偏好
    const savedLang = localStorage.getItem('newyorkLanguage');
    if (savedLang) {
        currentLang = savedLang;
    }
    
    // 初始语言设置
    updateLanguageToggle();
    updatePageText();
    
    // 显示第一个问题
    showQuestion();
    
    // 绑定事件监听器
    prevBtnEl.addEventListener('click', prevQuestion);
    nextBtnEl.addEventListener('click', nextQuestion);
    arButtonEl.addEventListener('click', tryAR);
    addToCartButtonEl.addEventListener('click', addToCart);
    
    // 绑定语言切换按钮
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // 绑定刻字预览 - 为两个刻字框都绑定事件
    if (engravingTextEl) {
        engravingTextEl.addEventListener('input', updateEngravingPreview);
    }
    
    if (engravingTextZHEl) {
        engravingTextZHEl.addEventListener('input', updateEngravingPreview);
    }
    
    // 绑定赠礼选择
    document.querySelectorAll('.gift-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.gift-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });
    
    // 绑定分享功能
    initShareFunctionality();
    
    // 初始化刻字预览
    updateEngravingPreview();
}

// 初始化分享功能
function initShareFunctionality() {
    const shareButton = document.getElementById('shareButton');
    const closeModal = document.querySelector('.close-modal');
    const shareModal = document.getElementById('shareModal');
    
    if (shareButton) {
        shareButton.addEventListener('click', function() {
            shareModal.classList.add('show');
            updateShareModal();
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            shareModal.classList.remove('show');
        });
    }
    
    // 点击模态框外部关闭
    shareModal.addEventListener('click', function(e) {
        if (e.target === shareModal) {
            shareModal.classList.remove('show');
        }
    });
    
    // 绑定分享平台按钮
    document.querySelectorAll('.share-platform').forEach(platform => {
        platform.addEventListener('click', function() {
            const platformType = this.getAttribute('data-platform');
            handleShare(platformType);
        });
    });
    
    // 绑定复制文案按钮
    const copyTextBtn = document.getElementById('copyTextBtn');
    if (copyTextBtn) {
        copyTextBtn.addEventListener('click', copyShareText);
    }
}

// 更新分享模态框内容
function updateShareModal() {
    if (!userPersonality) return;
    
    const personalityInfo = newYorkTranslations[currentLang][userPersonality];
    const recommendedPerfume = getRecommendedNewYorkPerfume(userPersonality);
    
    if (personalityInfo && recommendedPerfume) {
        // 更新人格类型
        if (sharePersonalityEl) {
            sharePersonalityEl.textContent = personalityInfo.name;
        }
        
        // 更新香水名
        if (sharePerfumeNameEl) {
            const perfumeName = currentLang === 'en' ? recommendedPerfume.name : recommendedPerfume.chineseName;
            sharePerfumeNameEl.textContent = perfumeName;
        }
        
        // 更新香水描述
        if (sharePerfumeDescEl) {
            sharePerfumeDescEl.textContent = recommendedPerfume.description[currentLang];
        }
        
        // 更新分享标签
        updateShareTags(recommendedPerfume);
    }
}

// 更新分享标签
function updateShareTags(perfume) {
    if (!shareTagsEl) return;
    
    shareTagsEl.innerHTML = '';
    
    // 添加人格标签
    const personalityTag = document.createElement('span');
    personalityTag.className = 'share-tag';
    const personalityInfo = newYorkTranslations[currentLang][userPersonality];
    personalityTag.textContent = personalityInfo.name;
    shareTagsEl.appendChild(personalityTag);
    
    // 添加香水人格标签
    if (perfume.personalityTags && perfume.personalityTags[currentLang]) {
        perfume.personalityTags[currentLang].forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'share-tag';
            tagElement.textContent = tag;
            shareTagsEl.appendChild(tagElement);
        });
    }
}

// 处理分享
function handleShare(platform) {
    let message = '';
    const personalityInfo = newYorkTranslations[currentLang][userPersonality];
    const recommendedPerfume = getRecommendedNewYorkPerfume(userPersonality);
    const perfumeName = currentLang === 'en' ? recommendedPerfume.name : recommendedPerfume.chineseName;
    
    if (currentLang === 'en') {
        message = `Discover my New York fragrance: ${perfumeName} (${personalityInfo.name}). Explore grid dreams and personalized scents with L'Oréal City Series!`;
    } else {
        message = `发现我的纽约香气：${perfumeName}（${personalityInfo.name}）。快来体验欧莱雅城市系列，探索网格梦想与个性香氛！`;
    }
    
    switch(platform) {
        case 'copy':
            // 复制链接到剪贴板
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                alert(currentLang === 'en' ? 'Link copied to clipboard!' : '链接已复制到剪贴板！');
            });
            break;
        case 'wechat':
        case 'moments':
        case 'weibo':
            // 在实际应用中，这里会调用各平台的分享API
            alert(currentLang === 'en' ? `Sharing to ${platform} (simulated)` : `分享到${platform === 'wechat' ? '微信好友' : platform === 'moments' ? '朋友圈' : '微博'}（模拟）`);
            break;
    }
    
    // 关闭模态框
    document.getElementById('shareModal').classList.remove('show');
}

// 复制分享文案
function copyShareText() {
    const shareTextArea = document.getElementById('shareText');
    const shareTextAreaZH = document.getElementById('shareTextZH');
    
    let textToCopy = '';
    if (currentLang === 'en' && shareTextArea) {
        textToCopy = shareTextArea.value;
    } else if (currentLang === 'zh' && shareTextAreaZH) {
        textToCopy = shareTextAreaZH.value;
    }
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert(currentLang === 'en' ? 'Text copied to clipboard!' : '文案已复制到剪贴板！');
    });
}

// 更新测试进度
function updateProgress() {
    const totalQuestions = newyorkQuestions[currentLang].length;
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    progressBarEl.style.width = `${progress}%`;
    
    // 更新进度文本
    updateProgressText();
    
    // 更新按钮文本
    updateButtonTexts();
    
    // 显示/隐藏上一题按钮
    prevBtnEl.style.display = currentQuestion > 0 ? "block" : "none";
}

// 显示当前问题
function showQuestion() {
    const questions = newyorkQuestions[currentLang];
    const question = questions[currentQuestion];
    
    if (!question) {
        console.error('Question not found for current language');
        return;
    }
    
    questionTextEl.textContent = question.text;
    questionHintEl.textContent = question.hint;
    
    // 清空选项容器
    optionsContainerEl.innerHTML = "";
    
    // 生成选项
    question.options.forEach((option, index) => {
        const isSelected = userSelections[currentQuestion] === index;
        
        const optionElement = document.createElement('div');
        optionElement.className = `option-card ${isSelected ? 'selected' : ''}`;
        optionElement.dataset.index = index;
        
        optionElement.innerHTML = `
            <div class="option-icon">${option.icon}</div>
            <div>
                <div>${option.text}</div>
                <div class="question-explanation">${option.explanation}</div>
            </div>
        `;
        
        // 绑定点击事件
        optionElement.addEventListener('click', () => selectOption(index));
        
        optionsContainerEl.appendChild(optionElement);
    });
    
    updateProgress();
}

// 选择选项
function selectOption(index) {
    // 移除之前的选择
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // 标记当前选择
    const selectedCard = document.querySelector(`.option-card[data-index="${index}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    
    // 记录选择
    userSelections[currentQuestion] = index;
    
    // 更新二维分数
    const questions = newyorkQuestions[currentLang];
    const question = questions[currentQuestion];
    const option = question.options[index];
    
    // 如果之前有选择，先移除之前的分数
    if (userSelections[currentQuestion] !== undefined && userSelections[currentQuestion] !== index) {
        const prevIndex = userSelections[currentQuestion];
        const prevOption = question.options[prevIndex];
        userScores.connection -= prevOption.score.connection;
        userScores.interaction -= prevOption.score.interaction;
    }
    
    // 应用新选择的分数
    userScores.connection += option.score.connection;
    userScores.interaction += option.score.interaction;
    
    // 更新选择记录
    userSelections[currentQuestion] = index;
}

// 计算最终人格类型
function calculatePersonality() {
    let personality = "";
    
    // 基于二维分数判断
    const connectionType = userScores.connection >= 0 ? "belonging" : "exploration";
    const interactionType = userScores.interaction >= 0 ? "rational" : "emotional";
    
    // 映射到4种人格
    if (connectionType === "belonging" && interactionType === "rational") {
        personality = "historical_surveyor";
    } else if (connectionType === "belonging" && interactionType === "emotional") {
        personality = "soul_archaeologist";
    } else if (connectionType === "exploration" && interactionType === "emotional") {
        personality = "eternal_wanderer";
    } else {
        personality = "dreamweaver";
    }
    
    return personality;
}

// 下一题
function nextQuestion() {
    const questions = newyorkQuestions[currentLang];
    
    if (userSelections[currentQuestion] === undefined) {
        alert(currentLang === 'en' ? "Please select an option" : "请选择一个选项");
        return;
    }
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        // 测试完成，显示结果
        showResults();
    }
}

// 上一题
function prevQuestion() {
    if (currentQuestion > 0) {
        // 移除上一题的影响
        const prevIndex = userSelections[currentQuestion - 1];
        if (prevIndex !== undefined) {
            const questions = newyorkQuestions[currentLang];
            const prevQuestion = questions[currentQuestion - 1];
            const prevOption = prevQuestion.options[prevIndex];
            
            // 从二维分数中移除
            userScores.connection -= prevOption.score.connection;
            userScores.interaction -= prevOption.score.interaction;
        }
        
        // 清除选择记录
        userSelections[currentQuestion - 1] = undefined;
        
        currentQuestion--;
        showQuestion();
    }
}

// 计算匹配度
function calculateMatchScore(selections, personality) {
    const questions = newyorkQuestions[currentLang];
    let consistentChoices = 0;
    let totalChoices = 0;
    
    // 统计选择中与最终人格一致的选项数量
    selections.forEach((selection, index) => {
        if (selection !== undefined) {
            totalChoices++;
            const question = questions[index];
            const option = question.options[selection];
            if (option.personality === personality) {
                consistentChoices++;
            }
        }
    });
    
    if (totalChoices === 0) return 70;
    
    // 计算匹配度百分比
    const baseScore = 70; // 基础分
    const consistencyBonus = (consistentChoices / totalChoices) * 30; // 一致性加分
    
    return Math.min(98, Math.round(baseScore + consistencyBonus));
}

// 确定推荐的纽约香水
function getRecommendedNewYorkPerfume(personalityType) {
    return newyorkPerfumes.find(perfume => perfume.personalityType === personalityType) || newyorkPerfumes[0];
}

// 获取欧莱雅推荐香水
function getLorealPerfumeRecommendations(personalityType) {
    const recommendations = lorealPerfumesByPersonality[personalityType];
    if (recommendations && recommendations[currentLang]) {
        return recommendations[currentLang];
    }
    return lorealPerfumesByPersonality["historical_surveyor"][currentLang] || [];
}

// 显示结果
function showResults() {
    // 计算人格类型
    userPersonality = calculatePersonality();
    
    // 获取推荐的纽约香水
    const recommendedPerfume = getRecommendedNewYorkPerfume(userPersonality);
    
    // 计算匹配度
    const matchScore = calculateMatchScore(userSelections, userPersonality);
    
    // 隐藏测试部分
    questionContainerEl.style.display = 'none';
    prevBtnEl.style.display = 'none';
    nextBtnEl.style.display = 'none';
    
    // 显示结果部分
    resultsContainerEl.style.display = 'block';
    
    // 更新结果信息
    updateResultInfo(userPersonality, matchScore, recommendedPerfume);
    
    // 显示纽约香水选择
    displayNewYorkPerfumes(recommendedPerfume);
    
    // 显示欧莱雅其他香水推荐
    displayLorealRecommendations(userPersonality);
    
    // 滚动到结果
    resultsContainerEl.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// 更新结果信息
function updateResultInfo(personality, matchScore, recommendedPerfume) {
    const personalityInfo = newYorkTranslations[currentLang][personality];
    
    // 更新DOM元素
    if (userPersonalityEl) userPersonalityEl.textContent = personalityInfo.name;
    if (matchScoreEl) matchScoreEl.textContent = matchScore;
    
    // 根据语言显示香水名
    const displayName = currentLang === 'en' ? recommendedPerfume.name : recommendedPerfume.chineseName;
    if (resultPerfumeNameEl) resultPerfumeNameEl.textContent = displayName;
    
    // 更新人格描述
    if (resultDescriptionEl) {
        resultDescriptionEl.innerHTML = `
            <p>${personalityInfo.description}</p>
            <p class="personality-quote">${personalityInfo.quote}</p>
        `;
    }
    
    // 更新个人资料标签
    updateProfileTags(personalityInfo, recommendedPerfume);
}

// 更新个人资料标签
function updateProfileTags(personalityInfo, recommendedPerfume) {
    if (!profileTagsEl) return;
    
    profileTagsEl.innerHTML = "";
    
    // 添加人格类型标签
    const personalityTag = document.createElement('span');
    personalityTag.className = 'profile-tag';
    personalityTag.textContent = `${currentLang === 'en' ? 'Explorer Type:' : '漫游者类型:'} ${personalityInfo.name}`;
    profileTagsEl.appendChild(personalityTag);
    
    // 添加香水人格标签
    if (recommendedPerfume.personalityTags && recommendedPerfume.personalityTags[currentLang]) {
        recommendedPerfume.personalityTags[currentLang].forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'profile-tag';
            tagElement.textContent = tag;
            profileTagsEl.appendChild(tagElement);
        });
    }
}

// 显示纽约香水
function displayNewYorkPerfumes(recommendedPerfume) {
    if (!newyorkPerfumesEl) return;
    
    newyorkPerfumesEl.innerHTML = "";
    
    newyorkPerfumes.forEach(perfume => {
        const isRecommended = perfume.id === recommendedPerfume.id;
        
        const perfumeCard = document.createElement('div');
        perfumeCard.className = `city-perfume-card ${isRecommended ? 'recommended' : ''}`;
        
        if (isRecommended) {
            perfumeCard.style.border = '2px solid var(--loreal-gold)';
            perfumeCard.style.boxShadow = '0 0 0 2px rgba(198, 167, 118, 0.2)';
        }
        
        // 根据语言选择显示的香水名
        const displayName = currentLang === 'en' ? perfume.name : perfume.chineseName;
        
        // 构建香调标签 - 使用当前语言的香调
        const topNotes = perfume.notes.top[currentLang].slice(0, 2).join(" · ");
        const middleNotes = perfume.notes.middle[currentLang].slice(0, 2).join(" · ");
        const baseNotes = perfume.notes.base[currentLang].slice(0, 2).join(" · ");
        
        // 获取当前语言的标签
        const personalityTags = perfume.personalityTags && perfume.personalityTags[currentLang] 
            ? perfume.personalityTags[currentLang] 
            : [];
        
        perfumeCard.innerHTML = `
            <div class="perfume-header">
                <div class="perfume-icon">
                    <i class="${perfume.icon}"></i>
                </div>
                <h3>${displayName}</h3>
                <div class="perfume-mbti-tag">${currentLang === 'en' ? 'For' : '适合'}: ${newYorkTranslations[currentLang][perfume.personalityType].name}</div>
                ${isRecommended ? `<div class="perfume-mbti-tag" style="background-color: rgba(76, 175, 80, 0.2); color: var(--loreal-green);">${newYorkTranslations[currentLang].recommendedForYou}</div>` : ''}
                
                <div class="perfume-notes">
                    <div class="perfume-note">${currentLang === 'en' ? 'Top:' : '前调:'} ${topNotes}</div>
                    <div class="perfume-note">${currentLang === 'en' ? 'Middle:' : '中调:'} ${middleNotes}</div>
                    <div class="perfume-note">${currentLang === 'en' ? 'Base:' : '后调:'} ${baseNotes}</div>
                </div>
            </div>
            
            <div class="perfume-description">
                <p>${perfume.description[currentLang]}</p>
                <div class="literary-quote">${perfume.literaryReference[currentLang]}</div>
                <p><strong>${currentLang === 'en' ? 'Fragrance Profile:' : '香型特点:'}</strong> ${perfume.intensity[currentLang]}${currentLang === 'en' ? ' intensity' : '强度'} · ${currentLang === 'en' ? 'Longevity:' : '留香'}${perfume.longevity[currentLang]}</p>
                <p><strong>${currentLang === 'en' ? 'Price:' : '价格:'}</strong> ¥ ${perfume.price}</p>
            </div>
        `;
        
        // 添加点击事件，让用户可以选择另一款
        if (!isRecommended) {
            perfumeCard.addEventListener('click', function() {
                // 切换推荐状态
                document.querySelectorAll('.city-perfume-card').forEach(card => {
                    card.style.border = 'none';
                    card.style.boxShadow = 'var(--shadow)';
                });
                
                this.style.border = '2px solid var(--loreal-gold)';
                this.style.boxShadow = '0 0 0 2px rgba(198, 167, 118, 0.2)';
                
                // 更新推荐信息
                const newMatchScore = calculateMatchScore(userSelections, perfume.personalityType);
                const personalityInfo = newYorkTranslations[currentLang][perfume.personalityType];
                updateResultInfo(perfume.personalityType, newMatchScore, perfume);
                updateProfileTags(personalityInfo, perfume);
            });
        }
        
        newyorkPerfumesEl.appendChild(perfumeCard);
    });
}

// 显示欧莱雅推荐香水
function displayLorealRecommendations(personalityType) {
    if (!productGridEl) return;
    
    const recommendations = getLorealPerfumeRecommendations(personalityType);
    productGridEl.innerHTML = "";
    
    recommendations.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // 构建香调标签 - 使用当前语言的香调
        const noteTags = product.notes[currentLang].map(note => 
            `<span class="note-tag">${note}</span>`
        ).join("");
        
        productCard.innerHTML = `
            <div class="product-image">
                <i class="${product.icon}"></i>
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-notes">
                    ${noteTags}
                </div>
                <p class="product-description">${product.description}</p>
                <div class="match-reason" style="font-size: 12px; color: #666; margin: 10px 0;">
                    <i class="fas fa-check-circle" style="color: var(--loreal-green);"></i> ${product.matchReason}
                </div>
                <div class="product-meta">
                    <span class="product-price">¥ ${product.price}</span>
                    <button class="btn" style="padding: 8px 16px; font-size: 12px;">${currentLang === 'en' ? 'Details' : '查看详情'}</button>
                </div>
            </div>
        `;
        
        productGridEl.appendChild(productCard);
    });
}

// 更新刻字预览
function updateEngravingPreview() {
    if (!engravingPreviewEl) return;
    
    // 获取当前语言的刻字文本
    let text = '';
    if (currentLang === 'en' && engravingTextEl) {
        text = engravingTextEl.value || "NYC Dreams";
    } else if (currentLang === 'zh' && engravingTextZHEl) {
        text = engravingTextZHEl.value || "纽约梦想";
    }
    
    // 更新预览文本
    const spans = engravingPreviewEl.querySelectorAll('span[data-lang]');
    spans.forEach(span => {
        if (span.getAttribute('data-lang') === currentLang) {
            span.textContent = text;
            span.style.display = 'inline';
        } else {
            span.style.display = 'none';
        }
    });
}

// AR试香体验
function tryAR() {
    const selectedPerfumeCard = document.querySelector('.city-perfume-card.recommended') || document.querySelector('.city-perfume-card');
    let selectedPerfume = "New York Memory Fragrance";
    
    if (selectedPerfumeCard) {
        const perfumeNameElement = selectedPerfumeCard.querySelector('h3');
        if (perfumeNameElement) {
            selectedPerfume = perfumeNameElement.textContent;
        }
    }
    
    alert(currentLang === 'en' 
        ? `AR Fragrance Experience Starting...\n\n"${selectedPerfume}" virtual experience will begin shortly.` 
        : `AR试香功能启动中...\n\n即将为您呈现"${selectedPerfume}"的虚拟试香体验。`);
    
    // 模拟AR体验
    const arModal = document.createElement('div');
    arModal.style.position = 'fixed';
    arModal.style.top = '0';
    arModal.style.left = '0';
    arModal.style.width = '100%';
    arModal.style.height = '100%';
    arModal.style.backgroundColor = 'rgba(0,0,0,0.9)';
    arModal.style.zIndex = '1000';
    arModal.style.display = 'flex';
    arModal.style.flexDirection = 'column';
    arModal.style.justifyContent = 'center';
    arModal.style.alignItems = 'center';
    arModal.style.color = 'white';
    arModal.style.textAlign = 'center';
    arModal.style.padding = '20px';
    
    arModal.innerHTML = currentLang === 'en' ? `
        <div style="margin-bottom: 30px;">
            <div style="font-size: 40px; margin-bottom: 20px;"><i class="fas fa-vr-cardboard"></i></div>
            <div style="font-size: 28px; margin-bottom: 10px;">AR Fragrance Experience</div>
            <div style="font-size: 20px; margin-bottom: 30px; color: #C6A776;">${selectedPerfume}</div>
        </div>
        <div style="font-size: 18px; margin-bottom: 20px;">Point your camera at your wrist</div>
        <div style="font-size: 16px; margin-bottom: 40px; color: #aaa; max-width: 500px;">
            In the actual app, Modiface AR technology will be used to simulate fragrance application on your wrist through the phone camera, showing fragrance evolution animations.
        </div>
        <div style="font-size: 14px; color: #999;">Click anywhere to close AR experience</div>
    ` : `
        <div style="margin-bottom: 30px;">
            <div style="font-size: 40px; margin-bottom: 20px;"><i class="fas fa-vr-cardboard"></i></div>
            <div style="font-size: 28px; margin-bottom: 10px;">AR试香体验</div>
            <div style="font-size: 20px; margin-bottom: 30px; color: #C6A776;">${selectedPerfume}</div>
        </div>
        <div style="font-size: 18px; margin-bottom: 20px;">请将摄像头对准您的手腕</div>
        <div style="font-size: 16px; margin-bottom: 40px; color: #aaa; max-width: 500px;">
            在实际小程序中，将调用Modiface AR技术，通过手机摄像头在您的手腕上模拟喷香水效果，并显示香调变化动画。
        </div>
        <div style="font-size: 14px; color: #999;">点击任意位置关闭AR体验</div>
    `;
    
    arModal.addEventListener('click', () => {
        document.body.removeChild(arModal);
    });
    
    document.body.appendChild(arModal);
}

// 加入购物车
function addToCart() {
    const selectedPerfumeCard = document.querySelector('.city-perfume-card[style*="border: 2px solid"]') || document.querySelector('.city-perfume-card');
    let selectedPerfume = "New York Memory Fragrance";
    
    if (selectedPerfumeCard) {
        const perfumeNameElement = selectedPerfumeCard.querySelector('h3');
        if (perfumeNameElement) {
            selectedPerfume = perfumeNameElement.textContent;
        }
    }
    
    // 获取当前语言的刻字文本
    let engravingText = "";
    if (currentLang === 'en' && engravingTextEl) {
        engravingText = engravingTextEl.value;
    } else if (currentLang === 'zh' && engravingTextZHEl) {
        engravingText = engravingTextZHEl.value;
    }
    
    const selectedGift = document.querySelector('.gift-option.selected');
    let giftName = currentLang === 'en' ? "Not selected" : "未选择";
    
    if (selectedGift) {
        const giftTitle = selectedGift.querySelector('h5');
        if (giftTitle) {
            const giftSpans = giftTitle.querySelectorAll('span[data-lang]');
            giftSpans.forEach(span => {
                if (span.getAttribute('data-lang') === currentLang) {
                    giftName = span.textContent;
                }
            });
        }
    }
    
    const personalityInfo = newYorkTranslations[currentLang][userPersonality];
    
    let message = currentLang === 'en' 
        ? `"${selectedPerfume}" has been added to cart!\n\n`
        : `"${selectedPerfume}" 已添加到购物车！\n\n`;
    
    message += currentLang === 'en' 
        ? `- Explorer Type: ${personalityInfo.name}\n`
        : `- 漫游者类型：${personalityInfo.name}\n`;
    
    message += currentLang === 'en' 
        ? `- Engraving: ${engravingText || "None"}\n`
        : `- 瓶身刻字：${engravingText || "无"}\n`;
    
    message += currentLang === 'en' 
        ? `- Gift Selection: ${giftName}\n`
        : `- 赠品选择：${giftName}\n`;
    
    message += currentLang === 'en' 
        ? `- Price: ¥ 699 (Promotional Price)\n\n`
        : `- 价格：¥ 699（推广价）\n\n`;
    
    message += currentLang === 'en' 
        ? `In the actual mini-program, this will sync to L'Oréal's official shopping cart system.`
        : `在实际小程序中，将同步到欧莱雅官方购物车系统。`;
    
    alert(message);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initNewYork);