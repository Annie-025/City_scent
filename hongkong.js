// hongkong.js - 香港记忆香氛定制（二维人格系统 + 双语支持 + 香港文化元素）

// 双语文本数据
const hongKongTranslations = {
    en: {
        // 导航和标题
        "backToCities": "Back to Cities",
        "home": "Home",
        "hongkongTest": "Hong Kong Test",
        "perfumes": "Perfumes",
        "customize": "Customize",
        "languageToggle": "中",
        
        // 页面标题
        "pageTitle": "Hong Kong Memory · Neon Depths | L'Oréal City Series",
        "cityTitle": "Hong Kong Memory Fragrance Customization",
        "citySubtitle": "Discover your Hong Kong scent story through 5 questions",
        "testTitle": "Hong Kong Neon Depths",
        "testSubtitle": "5 questions to decode your unique connection with this vertical city",
        
        // 测试说明
        "testInstructionsTitle": "Test Instructions",
        "testInstructions1": "Test based on vertical density and cultural compression in Hong Kong",
        "testInstructions2": "Each choice explores your relationship with compressed spaces and neon dreams",
        "testInstructions3": "Results will match you with a unique olfactory memory of Hong Kong",
        "testInstructions4": "Discover other L'Oréal fragrances that might resonate with you",
        
        // 人格类型描述
        "historical_surveyor": {
            "name": "Historical Surveyor",
            "description": "Mapping the vertical city from strategic heights, measuring the pulse of Hong Kong's compressed spaces through precise observation and calculated perspectives.",
            "quote": "From the Peak, the city unfolds like a living map - every light a story, every density a history."
        },
        "soul_archaeologist": {
            "name": "Soul Archaeologist",
            "description": "Excavating the memories of Kowloon Walled City, where damp concrete meets incense ash, and new light penetrates the densest spaces.",
            "quote": "In Hong Kong's compressed history, every demolition reveals another layer waiting to be remembered."
        },
        "eternal_wanderer": {
            "name": "Eternal Wanderer",
            "description": "Finding home in the rhythm of cargo and tides in Kowloon godowns, where salt-stained burlap holds the scent of distant ports and perpetual waiting.",
            "quote": "Hong Kong was built on arrivals and departures - its soul is written in shipping schedules and tide tables."
        },
        "dreamweaver": {
            "name": "Dreamweaver",
            "description": "Overlaying Hong Kong's vertical reality with moonlit legends of Victoria Peak, where night orchids bloom in mountain dew, and the city's lights become a kingdom of dreams below.",
            "quote": "In Hong Kong's vertical dreams, every skyscraper is a castle, every peak a throne of imagination."
        },
        
        // 香水描述
        "perfume1_desc": "For Historical Surveyors. The commanding perspective from Victoria Peak, where old telescope leather meets morning mist, and the city's hum rises with the dawn.",
        "perfume2_desc": "For Soul Archaeologists. Excavating the memories of Kowloon Walled City, where damp concrete meets incense ash, and new light penetrates the densest spaces.",
        "perfume3_desc": "For Eternal Wanderers. The rhythm of cargo and tides in Kowloon godowns, where salt-stained burlap holds the scent of distant ports and perpetual waiting.",
        "perfume4_desc": "For Dreamweavers. Moonlit legends of Victoria Peak, where night orchids bloom in mountain dew, and the city's lights become a kingdom of dreams below.",
        
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
        "engravingHint": "e.g.: HK Memories",
        "yourCityExplorerType": "Your City Explorer Type:",
        "forYou": "For you:"
    },
    
    zh: {
        // 导航和标题
        "backToCities": "返回城市选择",
        "home": "首页",
        "hongkongTest": "香港测试",
        "perfumes": "香港香氛",
        "customize": "定制购买",
        "languageToggle": "EN",
        
        // 页面标题
        "pageTitle": "香港记忆·霓虹深处 | 欧莱雅城市系列",
        "cityTitle": "香港记忆香氛定制",
        "citySubtitle": "通过5道题了解您与香港的独特联结，推荐专属香氛",
        "testTitle": "香港霓虹深处",
        "testSubtitle": "5道场景题，解码您与这座垂直城市的独特联结",
        
        // 测试说明
        "testInstructionsTitle": "测试说明",
        "testInstructions1": "基于香港垂直密度与文化压缩的测试",
        "testInstructions2": "每个选择探索您与压缩空间和霓虹梦想的关系",
        "testInstructions3": "测试结果将为您匹配独特的香港嗅觉记忆",
        "testInstructions4": "同时发现欧莱雅旗下可能触动您的其他香气",
        
        // 人格类型描述
        "historical_surveyor": {
            "name": "历史测绘者",
            "description": "从战略高度绘制垂直城市，通过精确观察和计算视角测量香港压缩空间的脉搏。",
            "quote": "从山顶望去，城市展开如同一幅活地图——每盏灯都是一个故事，每个密度都是一段历史。"
        },
        "soul_archaeologist": {
            "name": "心灵考古者",
            "description": "挖掘九龙城寨的记忆，潮湿混凝土遇见香灰，新光穿透最密集的空间。",
            "quote": "在香港压缩的历史中，每一次拆除都揭示另一层等待被铭记的往事。"
        },
        "eternal_wanderer": {
            "name": "永恒漂泊者",
            "description": "九龙货仓中货物与潮汐的节奏，盐渍粗麻布承载着远方港口和永恒等待的气息。",
            "quote": "香港建立在到达与离开之上——它的灵魂写在船期表和潮汐表中。"
        },
        "dreamweaver": {
            "name": "旧时梦境师",
            "description": "太平山的月光传奇，夜兰在山露中绽放，城市灯火在下方成为梦境王国。",
            "quote": "在香港的垂直梦境中，每座摩天大楼都是一座城堡，每个山顶都是想象的王座。"
        },
        
        // 香水描述
        "perfume1_desc": "为历史测绘者而生。太平山顶的指挥视角，旧望远镜皮革遇见晨雾，城市的嗡鸣随黎明升起。",
        "perfume2_desc": "为心灵考古者定制。挖掘九龙城寨的记忆，潮湿混凝土遇见香灰，新光穿透最密集的空间。",
        "perfume3_desc": "为永恒漂泊者准备。九龙货仓中货物与潮汐的节奏，盐渍粗麻布承载着远方港口和永恒等待的气息。",
        "perfume4_desc": "为旧时梦境师创造。太平山的月光传奇，夜兰在山露中绽放，城市灯火在下方成为梦境王国。",
        
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
        "engravingHint": "例如：香港记忆",
        "yourCityExplorerType": "您的城市漫游者类型：",
        "forYou": "为您推荐："
    }
};

// 香港专属测试问题 - 5道题，基于二维人格系统，融入垂直密度、山海张力、霓虹湿度等香港主题
const hongkongQuestions = {
    en: [
        {
            id: 1,
            text: "In Hong Kong's vertical landscape, where do you feel most at home?",
            hint: "The city's density creates unique spatial experiences",
            options: [
                { 
                    text: "High-rise apartments with panoramic harbor views from Victoria Peak", 
                    icon: "🏙️",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "Finding clarity in elevated perspectives above the urban density"
                },
                { 
                    text: "Traditional tenement buildings in Mong Kok backstreets with layered histories", 
                    icon: "🏮",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "Immersed in the ground-level texture and stories of old Hong Kong"
                },
                { 
                    text: "Moving spaces like the Star Ferry or double-decker trams crossing the harbor", 
                    icon: "🚋",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "Finding home in transit between island and peninsula"
                },
                { 
                    text: "Neon-lit night markets and Temple Street after dark", 
                    icon: "🌃",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "Drawn to the cinematic glow of Hong Kong nights"
                }
            ]
        },
        {
            id: 2,
            text: "When navigating Hong Kong's compressed spaces, what guides your path?",
            hint: "Movement through density requires different navigation styles",
            options: [
                { 
                    text: "MTR maps and efficient route planning through the underground network", 
                    icon: "🗺️",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "Mastering the mathematical precision of Hong Kong's most efficient transport"
                },
                { 
                    text: "Following the scent trails of dai pai dongs and hidden food stalls", 
                    icon: "🍜",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "Navigating by olfactory memories and culinary heritage"
                },
                { 
                    text: "The natural flow of crowds in Mong Kok and Causeway Bay", 
                    icon: "👥",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "Moving with the city's rhythm like water finding its course"
                },
                { 
                    text: "Chasing cinematic locations from Wong Kar-wai films", 
                    icon: "🎬",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "Following the visual poetry of Hong Kong cinema"
                }
            ]
        },
        {
            id: 3,
            text: "What aspect of Hong Kong's cultural layering resonates most with you?",
            hint: "The city's soul is written in its cultural compression",
            options: [
                { 
                    text: "The architectural fusion of colonial and modern skyscrapers", 
                    icon: "🏛️",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "Admiring the visual dialogue between historical and contemporary design"
                },
                { 
                    text: "The preserved traditions in temples next to shopping malls", 
                    icon: "🛕",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "Touched by the persistence of tradition in hyper-modern spaces"
                },
                { 
                    text: "The systematic coexistence of multiple languages and scripts", 
                    icon: "🔤",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "Appreciating the organized multilingual reality of the city"
                },
                { 
                    text: "The fluid identity of being both Chinese and global simultaneously", 
                    icon: "🌏",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "Relating to the hybrid identity inherent to Hong Kong's position"
                }
            ]
        },
        {
            id: 4,
            text: "How do you experience the tension between Hong Kong's mountains and sea?",
            hint: "The city exists in the compression between natural forces",
            options: [
                { 
                    text: "Through hiking trails that offer measured views of the urban-sea interface", 
                    icon: "🥾",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "Calculating the precise relationship between natural and urban landscapes"
                },
                { 
                    text: "In fishing villages where old ways meet reclamation projects", 
                    icon: "🐟",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "Witnessing the layered history of land-sea relationships"
                },
                { 
                    text: "On ferries that trace the moving boundary between land and water", 
                    icon: "⛴️",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "Experiencing the fluid threshold between mountain and sea"
                },
                { 
                    text: "At sunset when the Peak's shadow stretches across the harbor", 
                    icon: "🌅",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "Seeing the daily drama of light between vertical and horizontal"
                }
            ]
        },
        {
            id: 5,
            text: "What defines Hong Kong's energy for you?",
            hint: "The city's pulse beats in its unique rhythms",
            options: [
                { 
                    text: "The precision timing of the MTR and business district efficiency", 
                    icon: "🕐",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "Feeling the city's organized rhythm at its most efficient"
                },
                { 
                    text: "The humid nights in Chungking Mansions with global travelers", 
                    icon: "🏨",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "Connecting with the city's multicultural underground energy"
                },
                { 
                    text: "The constant arrival and departure of ships and planes", 
                    icon: "✈️",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "Feeling the city's identity as a perpetual transit point"
                },
                { 
                    text: "The neon glow transforming ordinary streets into cinematic sets", 
                    icon: "💡",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "Seeing the city's most ordinary moments become extraordinary through light"
                }
            ]
        }
    ],
    zh: [
        {
            id: 1,
            text: "在香港的垂直景观中，您在哪里感到最自在？",
            hint: "城市的密度创造了独特的空间体验",
            options: [
                { 
                    text: "太平山顶拥有全景海景的高层公寓", 
                    icon: "🏙️",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "在城市密度之上的高处视角中找到清晰"
                },
                { 
                    text: "旺角后街带有层叠历史的传统唐楼", 
                    icon: "🏮",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "沉浸在地面香港的纹理和老故事中"
                },
                { 
                    text: "天星小轮或双层电车等穿越港口的移动空间", 
                    icon: "🚋",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "在岛屿与半岛之间的过渡中找到家"
                },
                { 
                    text: "霓虹灯照亮的夜市和夜幕下的庙街", 
                    icon: "🌃",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "被香港夜晚的电影般光芒所吸引"
                }
            ]
        },
        {
            id: 2,
            text: "在导航香港的压缩空间时，什么指引您的路径？",
            hint: "穿越密度需要不同的导航风格",
            options: [
                { 
                    text: "地铁地图和通过地下网络的高效路线规划", 
                    icon: "🗺️",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "掌握香港最有效交通工具的数学精度"
                },
                { 
                    text: "跟随大牌档和隐藏小吃摊的香气轨迹", 
                    icon: "🍜",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "通过嗅觉记忆和烹饪遗产进行导航"
                },
                { 
                    text: "旺角和铜锣湾人群的自然流动", 
                    icon: "👥",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "像水找到自己的路线一样随城市节奏移动"
                },
                { 
                    text: "追寻王家卫电影中的电影场景", 
                    icon: "🎬",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "追随香港电影中的视觉诗意"
                }
            ]
        },
        {
            id: 3,
            text: "香港文化层次的哪个方面最能引起您的共鸣？",
            hint: "城市的灵魂写在它的文化压缩中",
            options: [
                { 
                    text: "殖民建筑与现代摩天大楼的建筑融合", 
                    icon: "🏛️",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "欣赏历史与当代设计之间的视觉对话"
                },
                { 
                    text: "寺庙在购物中心旁边保存的传统", 
                    icon: "🛕",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "被超现代空间中传统的持久性所触动"
                },
                { 
                    text: "多种语言和文字的系统性共存", 
                    icon: "🔤",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "欣赏城市有组织的多语言现实"
                },
                { 
                    text: "同时具有中国性和全球性的流动身份", 
                    icon: "🌏",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "与香港位置固有的混合身份产生共鸣"
                }
            ]
        },
        {
            id: 4,
            text: "您如何体验香港山与海之间的张力？",
            hint: "城市存在于自然力量之间的压缩中",
            options: [
                { 
                    text: "通过提供城市-海界面精确视图的远足径", 
                    icon: "🥾",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "计算自然与城市景观之间的精确关系"
                },
                { 
                    text: "在旧方式遇见填海工程的渔村中", 
                    icon: "🐟",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "见证陆地-海洋关系的层叠历史"
                },
                { 
                    text: "在追溯陆地与水之间移动边界的渡轮上", 
                    icon: "⛴️",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "体验山与海之间的流动门槛"
                },
                { 
                    text: "日落时分太平山的阴影横跨港口时", 
                    icon: "🌅",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "看到垂直与水平之间光的日常戏剧"
                }
            ]
        },
        {
            id: 5,
            text: "对您来说，什么定义了香港的能量？",
            hint: "城市的脉搏以其独特的节奏跳动",
            options: [
                { 
                    text: "地铁的精确时间和商业区的效率", 
                    icon: "🕐",
                    score: { connection: 1, interaction: 1 },
                    personality: "historical_surveyor",
                    explanation: "感受城市在最有效率时的有组织节奏"
                },
                { 
                    text: "重庆大厦中与全球旅行者共度的潮湿夜晚", 
                    icon: "🏨",
                    score: { connection: 1, interaction: -1 },
                    personality: "soul_archaeologist",
                    explanation: "与城市的多文化地下能量连接"
                },
                { 
                    text: "船只和飞机的不断到达与离开", 
                    icon: "✈️",
                    score: { connection: -1, interaction: -1 },
                    personality: "eternal_wanderer",
                    explanation: "感受城市作为永久过渡点的身份"
                },
                { 
                    text: "将普通街道转变为电影场景的霓虹光芒", 
                    icon: "💡",
                    score: { connection: -1, interaction: 1 },
                    personality: "dreamweaver",
                    explanation: "通过光看到城市最普通的时刻变得非凡"
                }
            ]
        }
    ]
};

// 香港城市香水数据 - 4款，对应4种人格类型（双语香调）
const hongkongPerfumes = [
    {
        id: 1,
        name: "VICTORIA PEAK ALTITUDE",
        chineseName: "维多利亚制高点",
        personalityType: "historical_surveyor",
        personalityTags: {
            en: ["Urban Surveyor", "Vertical Mapper", "Panoramic Observer", "Strategic Heights"],
            zh: ["都市测绘师", "垂直绘图师", "全景观察者", "战略高度"]
        },
        icon: "fas fa-mountain",
        notes: {
            top: {
                en: ["Old telescope leather", "Morning mist"],
                zh: ["旧望远镜皮革", "晨雾"]
            },
            middle: {
                en: ["Camphorwood", "Distant city hum"],
                zh: ["樟木", "远处城市嗡鸣"]
            },
            base: {
                en: ["Cold stone", "Rising dawn warmth"],
                zh: ["冷石", "升起的黎明暖意"]
            }
        },
        description: {
            en: "For Historical Surveyors. The commanding perspective from Victoria Peak, where old telescope leather meets morning mist, and the city's hum rises with the dawn.",
            zh: "为历史测绘者而生。太平山顶的指挥视角，旧望远镜皮革遇见晨雾，城市的嗡鸣随黎明升起。"
        },
        literaryReference: {
            en: "Every city has its vantage points, but Hong Kong's are written in gradients of mist and ambition.",
            zh: "每座城市都有其制高点，但香港的制高点写在雾霭和野心的渐变中。"
        },
        intensity: {
            en: "Crisp & Elevated",
            zh: "清爽高扬"
        },
        longevity: {
            en: "8-10 hours",
            zh: "8-10小时"
        },
        price: 699
    },
    {
        id: 2,
        name: "NEO-LIGHT IN WALLED CITY",
        chineseName: "城寨新光",
        personalityType: "soul_archaeologist",
        personalityTags: {
            en: ["Urban Archaeology", "Compressed Memory", "Density Explorer", "New Light"],
            zh: ["都市考古", "压缩记忆", "密度探索者", "新光"]
        },
        icon: "fas fa-layer-group",
        notes: {
            top: {
                en: ["Damp concrete", "Incense ash"],
                zh: ["潮湿混凝土", "香灰"]
            },
            middle: {
                en: ["Night-blooming jasmine", "Steamed rice"],
                zh: ["夜来香", "蒸饭香气"]
            },
            base: {
                en: ["Flickering neon", "Morning dew"],
                zh: ["闪烁霓虹", "晨露"]
            }
        },
        description: {
            en: "For Soul Archaeologists. Excavating the memories of Kowloon Walled City, where damp concrete meets incense ash, and new light penetrates the densest spaces.",
            zh: "为心灵考古者定制。挖掘九龙城寨的记忆，潮湿混凝土遇见香灰，新光穿透最密集的空间。"
        },
        literaryReference: {
            en: "In Hong Kong's compressed history, every demolition reveals another layer waiting to be remembered.",
            zh: "在香港压缩的历史中，每一次拆除都揭示另一层等待被铭记的往事。"
        },
        intensity: {
            en: "Complex & Atmospheric",
            zh: "复杂空灵"
        },
        longevity: {
            en: "10-12 hours",
            zh: "10-12小时"
        },
        price: 699
    },
    {
        id: 3,
        name: "KOWLOON GODOWN TIDES",
        chineseName: "九龙货仓潮汐",
        personalityType: "eternal_wanderer",
        personalityTags: {
            en: ["Cargo Rhythm", "Tidal Waiting", "Port Memory", "Perpetual Transit"],
            zh: ["货物节奏", "潮汐等待", "港口记忆", "永续过渡"]
        },
        icon: "fas fa-anchor",
        notes: {
            top: {
                en: ["Salt-stained burlap", "Teak wood"],
                zh: ["盐渍粗麻布", "柚木"]
            },
            middle: {
                en: ["Dried spices", "Harbor fog"],
                zh: ["干香料", "港口雾"]
            },
            base: {
                en: ["Distant diesel", "Ocean patience"],
                zh: ["远处柴油", "海洋的耐心"]
            }
        },
        description: {
            en: "For Eternal Wanderers. The rhythm of cargo and tides in Kowloon godowns, where salt-stained burlap holds the scent of distant ports and perpetual waiting.",
            zh: "为永恒漂泊者准备。九龙货仓中货物与潮汐的节奏，盐渍粗麻布承载着远方港口和永恒等待的气息。"
        },
        literaryReference: {
            en: "Hong Kong was built on arrivals and departures - its soul is written in shipping schedules and tide tables.",
            zh: "香港建立在到达与离开之上——它的灵魂写在船期表和潮汐表中。"
        },
        intensity: {
            en: "Salty & Textured",
            zh: "咸味质感"
        },
        longevity: {
            en: "6-8 hours",
            zh: "6-8小时"
        },
        price: 699
    },
    {
        id: 4,
        name: "MOONCASTLE OF TAIPING",
        chineseName: "太平山月堡",
        personalityType: "dreamweaver",
        personalityTags: {
            en: ["Moonlit Legends", "Vertical Dreams", "Imagination Throne", "Night Kingdom"],
            zh: ["月光传奇", "垂直梦境", "想象王座", "夜间王国"]
        },
        icon: "fas fa-moon",
        notes: {
            top: {
                en: ["Night orchid", "Mountain dew"],
                zh: ["夜兰", "山露"]
            },
            middle: {
                en: ["Legendary tiger musk (patchouli/amber)"],
                zh: ["传说虎啸（广藿香/琥珀）"]
            },
            base: {
                en: ["City lights below", "Lonely reverie"],
                zh: ["山下城市灯火", "孤独遐想"]
            }
        },
        description: {
            en: "For Dreamweavers. Moonlit legends of Victoria Peak, where night orchids bloom in mountain dew, and the city's lights become a kingdom of dreams below.",
            zh: "为旧时梦境师创造。太平山的月光传奇，夜兰在山露中绽放，城市灯火在下方成为梦境王国。"
        },
        literaryReference: {
            en: "In Hong Kong's vertical dreams, every skyscraper is a castle, every peak a throne of imagination.",
            zh: "在香港的垂直梦境中，每座摩天大楼都是一座城堡，每个山顶都是想象的王座。"
        },
        intensity: {
            en: "Ethereal & Dreamy",
            zh: "空灵梦幻"
        },
        longevity: {
            en: "4-6 hours",
            zh: "4-6小时"
        },
        price: 699
    }
];

// 欧莱雅旗下香水推荐（根据人格类型，双语香调）
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
const hongkongPerfumesEl = document.getElementById('hongkongPerfumes');
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
    localStorage.setItem('hongkongLanguage', currentLang);
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
    document.title = hongKongTranslations[currentLang].pageTitle;
    
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
        const totalQuestions = hongkongQuestions[currentLang].length;
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
        const totalQuestions = hongkongQuestions[currentLang].length;
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
    const personalityInfo = hongKongTranslations[currentLang][userPersonality];
    
    // 更新人格描述
    if (resultDescriptionEl && personalityInfo) {
        resultDescriptionEl.innerHTML = `
            <p>${personalityInfo.description}</p>
            <p class="personality-quote">${personalityInfo.quote}</p>
        `;
    }
    
    // 更新推荐香水信息
    const recommendedPerfume = getRecommendedHongKongPerfume(userPersonality);
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
        
        // 重新显示香港香水
        displayHongKongPerfumes(recommendedPerfume);
        
        // 重新显示欧莱雅推荐香水
        displayLorealRecommendations(userPersonality);
    }
}

// 初始化函数
function initHongKong() {
    // 检查保存的语言偏好
    const savedLang = localStorage.getItem('hongkongLanguage');
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
    
    const personalityInfo = hongKongTranslations[currentLang][userPersonality];
    const recommendedPerfume = getRecommendedHongKongPerfume(userPersonality);
    
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
    const personalityInfo = hongKongTranslations[currentLang][userPersonality];
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
    const personalityInfo = hongKongTranslations[currentLang][userPersonality];
    const recommendedPerfume = getRecommendedHongKongPerfume(userPersonality);
    const perfumeName = currentLang === 'en' ? recommendedPerfume.name : recommendedPerfume.chineseName;
    
    if (currentLang === 'en') {
        message = `Discover my Hong Kong fragrance: ${perfumeName} (${personalityInfo.name}). Explore vertical density and personalized scents with L'Oréal City Series!`;
    } else {
        message = `发现我的香港香气：${perfumeName}（${personalityInfo.name}）。快来体验欧莱雅城市系列，探索垂直密度与个性香氛！`;
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
    const totalQuestions = hongkongQuestions[currentLang].length;
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
    const questions = hongkongQuestions[currentLang];
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
    const questions = hongkongQuestions[currentLang];
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
    const questions = hongkongQuestions[currentLang];
    
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
            const questions = hongkongQuestions[currentLang];
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
    const questions = hongkongQuestions[currentLang];
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

// 确定推荐的香港香水
function getRecommendedHongKongPerfume(personalityType) {
    return hongkongPerfumes.find(perfume => perfume.personalityType === personalityType) || hongkongPerfumes[0];
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
    
    // 获取推荐的香港香水
    const recommendedPerfume = getRecommendedHongKongPerfume(userPersonality);
    
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
    
    // 显示香港香水选择
    displayHongKongPerfumes(recommendedPerfume);
    
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
    const personalityInfo = hongKongTranslations[currentLang][personality];
    
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

// 显示香港香水
function displayHongKongPerfumes(recommendedPerfume) {
    if (!hongkongPerfumesEl) return;
    
    hongkongPerfumesEl.innerHTML = "";
    
    hongkongPerfumes.forEach(perfume => {
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
                <div class="perfume-mbti-tag">${currentLang === 'en' ? 'For' : '适合'}: ${hongKongTranslations[currentLang][perfume.personalityType].name}</div>
                ${isRecommended ? `<div class="perfume-mbti-tag" style="background-color: rgba(76, 175, 80, 0.2); color: var(--loreal-green);">${hongKongTranslations[currentLang].recommendedForYou}</div>` : ''}
                
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
                const personalityInfo = hongKongTranslations[currentLang][perfume.personalityType];
                updateResultInfo(perfume.personalityType, newMatchScore, perfume);
                updateProfileTags(personalityInfo, perfume);
            });
        }
        
        hongkongPerfumesEl.appendChild(perfumeCard);
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
        text = engravingTextEl.value || "HK Memories";
    } else if (currentLang === 'zh' && engravingTextZHEl) {
        text = engravingTextZHEl.value || "香港记忆";
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
    let selectedPerfume = "Hong Kong Memory Fragrance";
    
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
    let selectedPerfume = "Hong Kong Memory Fragrance";
    
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
    
    const personalityInfo = hongKongTranslations[currentLang][userPersonality];
    
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
document.addEventListener('DOMContentLoaded', initHongKong);