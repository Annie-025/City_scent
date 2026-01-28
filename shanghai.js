// shanghai.js - 上海记忆香氛定制（MBTI优化版）

// 上海专属测试问题 - 5道题，结合MBTI和上海城市偏好
const shanghaiQuestions = [
    {
        id: 1,
        text: "在上海的一个周末下午，您更倾向于如何度过？",
        hint: "城市中的休憩方式，折射出不同的生命节奏",
        options: [
            { 
                text: "参加艺术展览开幕酒会，与策展人和艺术家交流", 
                icon: "🎨", 
                mbtiScore: { E: 2, I: -1, S: 0, N: 1, T: 0, F: 1, J: 0, P: 0 },
                explanation: "在艺术气息与人群的低语中，感受文化脉搏的跳动"
            },
            { 
                text: "在安静的咖啡馆阅读，偶尔观察窗外的行人", 
                icon: "📖", 
                mbtiScore: { E: -1, I: 2, S: 0, N: 1, T: 0, F: 0, J: 0, P: 0 },
                explanation: "窗边的一隅，书页与咖啡香交织成安静的诗篇"
            },
            { 
                text: "探索弄堂里的隐藏小店，发现独特的本地设计", 
                icon: "🔍", 
                mbtiScore: { E: 0, I: 1, S: 1, N: 1, T: 0, F: 0, J: -1, P: 1 },
                explanation: "深入城市肌理，在隐秘处发现独特的纹理与故事"
            },
            { 
                text: "与朋友在外滩露台聚会，享受城市天际线", 
                icon: "👥", 
                mbtiScore: { E: 2, I: -2, S: 1, N: 0, T: 0, F: 1, J: 0, P: 1 },
                explanation: "在高处与友同享，让天际线成为欢聚的背景画"
            }
        ]
    },
    {
        id: 2,
        text: "当您听到'上海味道'时，脑海中首先浮现的是什么？",
        hint: "嗅觉记忆如老照片，有些定格瞬间，有些展开长卷",
        options: [
            { 
                text: "清晨弄堂里飘出的咖啡香和油条味", 
                icon: "☕", 
                mbtiScore: { E: 0, I: 0, S: 2, N: -1, T: 0, F: 1, J: 0, P: 0 },
                explanation: "晨间弄堂飘出的烟火气，是这座城市最真实的体温"
            },
            { 
                text: "石库门里时光沉淀的木质香气和故事感", 
                icon: "🏛️", 
                mbtiScore: { E: 0, I: 1, S: 0, N: 2, T: 0, F: 1, J: 0, P: 0 },
                explanation: "时光在木纹中沉淀，香气里藏着未完待续的往事"
            },
            { 
                text: "外滩江风带来的清新空气与现代感", 
                icon: "💨", 
                mbtiScore: { E: 0, I: 0, S: 1, N: 1, T: 0, F: 0, J: 0, P: 1 },
                explanation: "江风带来的不仅是清新，还有新旧交替的呼吸感"
            },
            { 
                text: "法租界梧桐树下混合的花香与咖啡香", 
                icon: "🌳", 
                mbtiScore: { E: 0, I: 0, S: 1, N: 1, T: 0, F: 1, J: 0, P: 0 },
                explanation: "梧桐树下，花香与咖啡香交织成一首没有词的小调"
            }
        ]
    },
    {
        id: 3,
        text: "在规划上海旅行路线时，您更倾向于哪种方式？",
        hint: "有人欢喜按图索骥，有人欢喜信马由缰，各有各的惬意",
        options: [
            { 
                text: "功课做足，几点到哪搭，转几号线，连餐厅都预先订好位子", 
                icon: "📋", 
                mbtiScore: { E: 0, I: 0, S: 1, N: 0, T: 1, F: 0, J: 2, P: -2 },
                explanation: "判断型倾用精确的线条勾勒旅途，让每个时刻都恰如其分"
            },
            { 
                text: "大方向有数，细节随缘，留白的地方常有意外惊喜", 
                icon: "🧭", 
                mbtiScore: { E: 0, I: 0, S: 0, N: 1, T: 0, F: 0, J: -1, P: 2 },
                explanation: "留白处常有惊喜，让脚步跟随直觉的牵引"
            },
            { 
                text: "研究历史文化背景，按主题规划路线", 
                icon: "📚", 
                mbtiScore: { E: 0, I: 1, S: 0, N: 2, T: 1, F: 0, J: 1, P: -1 },
                explanation: "沿着历史与文化的经纬，编织有深度的探索"
            },
            { 
                text: "询问当地朋友推荐，跟随直觉走", 
                icon: "💡", 
                mbtiScore: { E: 1, I: 0, S: 0, N: 1, T: 0, F: 1, J: -1, P: 1 },
                explanation: "从当地人的眼光中，捕捉城市最鲜活的侧面"
            }
        ]
    },
    {
        id: 4,
        text: "当您需要为朋友选择上海纪念品时，更看重什么？",
        hint: "伴手礼选得灵不灵，看侬懂不懂朋友，也看侬懂不懂上海",
        options: [
            { 
                text: "产品的实用性、质量和设计美学", 
                icon: "🎁", 
                mbtiScore: { E: 0, I: 0, S: 1, N: 0, T: 2, F: -1, J: 1, P: 0 },
                explanation: "经得起时间凝视的设计，以永恒之美承载心意"
            },
            { 
                text: "纪念品蕴含的情感价值和独特故事", 
                icon: "❤️", 
                mbtiScore: { E: 0, I: 0, S: 0, N: 1, T: -1, F: 2, J: 0, P: 0 },
                explanation: "器物背后的温度与故事，比器物本身更值得珍藏"
            },
            { 
                text: "是否体现上海特色和文化代表性", 
                icon: "🏮", 
                mbtiScore: { E: 0, I: 0, S: 1, N: 1, T: 1, F: 1, J: 0, P: 0 },
                explanation: "能承载一座城市精神气质的，方为真正的纪念"
            },
            { 
                text: "朋友的个人喜好和个性匹配度", 
                icon: "👤", 
                mbtiScore: { E: 0, I: 0, S: 0, N: 1, T: 0, F: 2, J: 0, P: 1 },
                explanation: "最珍贵的礼物，是懂一个人如懂一首诗"
            }
        ]
    },
    {
        id: 5,
        text: "您希望在什么样的场景使用这款香氛",
        hint: "香气如亲密的伴侣，在不同场景里讲述不同的故事",
        options: [
            { 
                text: "工作辰光，在陆家嘴写字楼里，保持清醒与专注的时刻", 
                icon: "🏙️", 
                mbtiScore: { E: 1, I: -1, S: 1, N: 0, T: 1, F: 0, J: 1, P: -1 },
                explanation:  "如同陆家嘴清晨第一杯手冲，香气是理性思维的经纬，在办公桌前织就专注的网"
            },
            { 
                text: "居家休息，在思南公馆附近的老公寓里，读书或听音乐的时候", 
                icon: "🕰️", 
                mbtiScore: { E: -1, I: 1, S: 0, N: 2, T: -1, F: 2, J: 0, P: 1 },
                explanation: "思南公馆的老窗格过滤午后阳光，香气是翻动书页时的呼吸，温柔标记着私人时光的折痕"
            },
            { 
                text: "社交场合，在武康路或安福路的小店，与朋友相聚聊天", 
                icon: "🌉", 
                mbtiScore: { E: 0, I: 0, S: 0, N: 2, T: 0, F: 1, J: 0, P: 0 },
                explanation: "武康路咖啡馆的轻声细语间，香气是未说出口的潜台词，在杯沿与目光交错处轻轻流淌"
            },
            { 
                text: "深夜独处，在自家书房或卧室，反思或创作的私人时光", 
                icon: "🌿", 
                mbtiScore: { E: -2, I: 2, S: 0, N: 1, T: -1, F: 2, J: 0, P: 0 },
                explanation: "深夜书房的台灯光晕里，香气是思绪的罗盘，引导灵感在静谧中寻到自己的流向"
            }
        ]
    }
];

// 上海城市香水数据 - 2款，对应不同MBTI类型
const shanghaiPerfumes = [
    {
        id: 1,
        name: "外滩晨雾",
        mbtiTypes: ["ENTJ", "ESTJ", "INTJ", "ISTJ"], // 思考判断型
        mbtiTags: ["理性之美", "经纬分明", "现代诗篇", "有序和谐"],
        icon: "fas fa-building",
        notes: {
            top: ["绿茶", "佛手柑", "清晨空气"],
            middle: ["小苍兰", "海洋调", "金属感"],
            base: ["雪松", "琥珀", "麝香"]
        },
        description: "捕捉上海作为国际都市的现代气息与理性结构，适合思维清晰、注重效率的性格类型。",
        literaryReference: "如同张爱玲笔下那些冷静观察都市变迁的眼睛，既保持距离又深刻理解。",
        intensity: "中等",
        longevity: "6-8小时",
        price: 699
    },
    {
        id: 2,
        name: "石库门时光",
        mbtiTypes: ["INFP", "ENFP", "INFJ", "ENFJ"], // 直觉情感型
        mbtiTags: ["感性", "怀旧", "文艺", "情感"],
        icon: "fas fa-home",
        notes: {
            top: ["桂花", "旧书页", "木质调"],
            middle: ["白玉兰", "檀木", "温暖香料"],
            base: ["琥珀", "麝香", "苔藓"]
        },
        description: "重现石库门里的岁月沉香与情感记忆，适合感性细腻、注重情感连接的性格类型。",
        literaryReference: "宛若王安忆《长恨歌》中上海弄堂的温柔与坚韧，藏着无数普通人的情感史诗。",
        intensity: "温和",
        longevity: "8-10小时",
        price: 699
    }
];

// 欧莱雅旗下香水推荐（根据MBTI类型）
const lorealPerfumesByMBTI = {
    // 思考判断型 (TJ)
    "TJ": [
        {
            brand: "YSL",
            name: "自由之水 Libre",
            description: "薰衣草与橙花的精妙平衡，展现独立自信",
            icon: "fas fa-spa",
            price: 850,
            notes: ["薰衣草", "橙花", "香草"],
            matchReason: "与您的理性决策和结构化思维相匹配"
        },
        {
            brand: "GIORGIO ARMANI",
            name: "Si挚爱",
            description: "黑醋栗与玫瑰的优雅组合，体现精准品味",
            icon: "fas fa-feather-alt",
            price: 780,
            notes: ["黑醋栗", "玫瑰", "香草"],
            matchReason: "符合您对品质和美学的严谨要求"
        }
    ],
    // 直觉情感型 (NF)
    "NF": [
        {
            brand: "LANCÔME",
            name: "奇迹香水",
            description: "荔枝与小苍兰的清新浪漫，充满希望",
            icon: "fas fa-crown",
            price: 720,
            notes: ["荔枝", "小苍兰", "茉莉"],
            matchReason: "呼应您的感性特质和情感深度"
        },
        {
            brand: "VALENTINO",
            name: "Born in Roma",
            description: "佛手柑与茉莉的罗马风情，热烈感性",
            icon: "fas fa-gem",
            price: 690,
            notes: ["佛手柑", "茉莉", "檀香"],
            matchReason: "匹配您的艺术感知和情感表达"
        }
    ],
    // 实感感知型 (SP)
    "SP": [
        {
            brand: "MAISON MARGIELA",
            name: "慵懒周日",
            description: "梨子与铃兰的清新舒适，自在随性",
            icon: "fas fa-cloud",
            price: 950,
            notes: ["梨子", "铃兰", "麝香"],
            matchReason: "适合您灵活适应和享受当下的特质"
        },
        {
            brand: "VERSACE",
            name: "晶钻女士",
            description: "石榴与柚子的活力清新，热情奔放",
            icon: "fas fa-gem",
            price: 650,
            notes: ["石榴", "柚子", "木兰"],
            matchReason: "呼应您的活力与即兴探索精神"
        }
    ],
    // 实感判断型 (SJ)
    "SJ": [
        {
            brand: "CHANEL",
            name: "N°5",
            description: "经典醛香与花香的永恒优雅，值得信赖",
            icon: "fas fa-star",
            price: 980,
            notes: ["醛香", "依兰", "香草"],
            matchReason: "符合您对传统、可靠和品质的重视"
        },
        {
            brand: "DIOR",
            name: "真我",
            description: "沙巴茉莉与依兰的奢华经典，自信从容",
            icon: "fas fa-venus",
            price: 920,
            notes: ["沙巴茉莉", "依兰", "香草"],
            matchReason: "匹配您的责任感和对经典的欣赏"
        }
    ]
};

// 全局变量
let currentQuestion = 0;
let userSelections = [];
let userMbtiScores = {
    E: 0, I: 0,  // 外向/内向
    S: 0, N: 0,  // 实感/直觉
    T: 0, F: 0,  // 思考/情感
    J: 0, P: 0   // 判断/感知
};
let userMBTI = "";

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
const userMBTIEl = document.getElementById('userMBTI');
const matchScoreEl = document.getElementById('matchScore');
const resultTitleEl = document.getElementById('resultTitle');
const resultSubtitleEl = document.getElementById('resultSubtitle');
const shanghaiPerfumesEl = document.getElementById('shanghaiPerfumes');
const productGridEl = document.getElementById('productGrid');
const engravingTextEl = document.getElementById('engravingText');
const engravingPreviewEl = document.getElementById('engravingPreview');
const arButtonEl = document.getElementById('arButton');
const addToCartButtonEl = document.getElementById('addToCartButton');
const mbtiProgressEl = document.getElementById('mbtiProgress');
const eiBarEl = document.getElementById('eiBar');
const snBarEl = document.getElementById('snBar');
const tfBarEl = document.getElementById('tfBar');
const jpBarEl = document.getElementById('jpBar');

// 初始化函数
function initShanghai() {
    // 显示第一个问题
    showQuestion();
    
    // 绑定事件监听器
    prevBtnEl.addEventListener('click', prevQuestion);
    nextBtnEl.addEventListener('click', nextQuestion);
    arButtonEl.addEventListener('click', tryAR);
    addToCartButtonEl.addEventListener('click', addToCart);
    
    // 绑定刻字预览
    if (engravingTextEl) {
        engravingTextEl.addEventListener('input', updateEngravingPreview);
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
}

// 更新MBTI进度条显示
function updateMbtiProgress() {
    // 计算每个维度的百分比
    // E vs I: 如果E>I，偏向E，否则偏向I
    const eiTotal = Math.abs(userMbtiScores.E) + Math.abs(userMbtiScores.I);
    const eiPercent = eiTotal > 0 ? 
        ((userMbtiScores.E > 0 ? userMbtiScores.E : -userMbtiScores.I) / eiTotal * 50 + 50) : 50;
    eiBarEl.style.width = `${eiPercent}%`;
    
    // S vs N
    const snTotal = Math.abs(userMbtiScores.S) + Math.abs(userMbtiScores.N);
    const snPercent = snTotal > 0 ? 
        ((userMbtiScores.S > 0 ? userMbtiScores.S : -userMbtiScores.N) / snTotal * 50 + 50) : 50;
    snBarEl.style.width = `${snPercent}%`;
    
    // T vs F
    const tfTotal = Math.abs(userMbtiScores.T) + Math.abs(userMbtiScores.F);
    const tfPercent = tfTotal > 0 ? 
        ((userMbtiScores.T > 0 ? userMbtiScores.T : -userMbtiScores.F) / tfTotal * 50 + 50) : 50;
    tfBarEl.style.width = `${tfPercent}%`;
    
    // J vs P
    const jpTotal = Math.abs(userMbtiScores.J) + Math.abs(userMbtiScores.P);
    const jpPercent = jpTotal > 0 ? 
        ((userMbtiScores.J > 0 ? userMbtiScores.J : -userMbtiScores.P) / jpTotal * 50 + 50) : 50;
    jpBarEl.style.width = `${jpPercent}%`;
}

// 更新测试进度
function updateProgress() {
    const progress = ((currentQuestion + 1) / shanghaiQuestions.length) * 100;
    progressBarEl.style.width = `${progress}%`;
    progressTextEl.textContent = `第${currentQuestion + 1}/${shanghaiQuestions.length}题`;
    
    // 更新按钮文本
    if (currentQuestion === shanghaiQuestions.length - 1) {
        nextBtnEl.textContent = "查看结果";
    } else {
        nextBtnEl.textContent = "下一题";
    }
    
    // 显示/隐藏上一题按钮
    prevBtnEl.style.display = currentQuestion > 0 ? "block" : "none";
}

// 显示当前问题
function showQuestion() {
    const question = shanghaiQuestions[currentQuestion];
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
    updateMbtiProgress();
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
    
    // 更新MBTI分数
    const question = shanghaiQuestions[currentQuestion];
    const option = question.options[index];
    
    // 应用MBTI分数
    for (const dimension in option.mbtiScore) {
        userMbtiScores[dimension] += option.mbtiScore[dimension];
    }
    
    // 更新进度条
    updateMbtiProgress();
}

// 计算最终MBTI类型
function calculateMBTI() {
    let mbti = "";
    
    // E vs I
    mbti += userMbtiScores.E >= userMbtiScores.I ? "E" : "I";
    
    // S vs N
    mbti += userMbtiScores.S >= userMbtiScores.N ? "S" : "N";
    
    // T vs F
    mbti += userMbtiScores.T >= userMbtiScores.F ? "T" : "F";
    
    // J vs P
    mbti += userMbtiScores.J >= userMbtiScores.P ? "J" : "P";
    
    return mbti;
}

// 获取MBTI类型描述
function getMBTIDescription(mbtiType) {
    const descriptions = {
        "INTJ": "城市建筑师 - 以理性经纬，编织未来的蓝图",
        "INTP": "思想漫游者 - 在概念的星空中，寻找新大陆",
        "ENTJ": "愿景领航者 - 带领众人，驶向明日的港湾",
        "ENTP": "灵感探险家 - 在可能性的丛林中，开辟新径",
        "INFJ": "心灵诗人 - 在寂静处，倾听世界的心跳",
        "INFP": "梦想织造者 - 用想象的丝线，编织温柔宇宙",
        "ENFJ": "情感联结者 - 在人群间，搭建理解的桥梁",
        "ENFP": "生命礼赞者 - 每个瞬间，都值得热烈庆祝",
        "ISTJ": "时光守护者 - 在秩序中，守护珍贵的传承",
        "ISFJ": "温暖庇护者 - 用细致的关怀，筑起安心的巢",
        "ESTJ": "现实建筑师 - 以行动为砖，构建坚固的当下",
        "ESFJ": "和谐编织者 - 在人际关系中，创造温暖节律",
        "ISTP": "当下体验者 - 在具体世界中，感受生命纹理",
        "ISFP": "美感知音 - 用感官作画，记录流动的瞬间",
        "ESTP": "即兴舞者 - 在现实舞台，演绎灵动的篇章",
        "ESFP": "欢乐使者 - 每个相遇，都是一场小型庆典"
    };
    
    return descriptions[mbtiType] || `${mbtiType} - 独特的个性类型`;
}

// 根据MBTI类型获取大类分组
function getMBTIGroup(mbtiType) {
    // TJ: 思考判断型
    if (mbtiType.endsWith("TJ")) return "TJ";
    // NF: 直觉情感型
    if (mbtiType.endsWith("NF")) return "NF";
    // SP: 实感感知型
    if (mbtiType[1] === "S" && mbtiType[3] === "P") return "SP";
    // SJ: 实感判断型
    if (mbtiType[1] === "S" && mbtiType[3] === "J") return "SJ";
    // 其他情况，根据中间两个字母判断
    if (mbtiType[1] === "N" && mbtiType[2] === "F") return "NF";
    if (mbtiType[1] === "S" && mbtiType[2] === "T") return "ST";
    return "NF"; // 默认
}

// 下一题
function nextQuestion() {
    if (userSelections[currentQuestion] === undefined) {
        alert("请选择一个选项");
        return;
    }
    
    if (currentQuestion < shanghaiQuestions.length - 1) {
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
        const prevOptionIndex = userSelections[currentQuestion - 1];
        const prevQuestion = shanghaiQuestions[currentQuestion - 1];
        const prevOption = prevQuestion.options[prevOptionIndex];
        
        // 从MBTI分数中移除
        for (const dimension in prevOption.mbtiScore) {
            userMbtiScores[dimension] -= prevOption.mbtiScore[dimension];
        }
        
        // 清除选择记录
        userSelections[currentQuestion - 1] = undefined;
        
        currentQuestion--;
        showQuestion();
    }
}

// 计算匹配度
function calculateMatchScore(userMBTI, recommendedPerfume) {
    // 如果用户MBTI在推荐香水的MBTI列表中，匹配度高
    if (recommendedPerfume.mbtiTypes.includes(userMBTI)) {
        return 90 + Math.floor(Math.random() * 9); // 90-98%
    }
    
    // 检查MBTI大类是否匹配
    const userGroup = getMBTIGroup(userMBTI);
    const perfumeGroups = recommendedPerfume.mbtiTypes.map(type => getMBTIGroup(type));
    
    if (perfumeGroups.includes(userGroup)) {
        return 80 + Math.floor(Math.random() * 10); // 80-89%
    }
    
    // 基础匹配度
    return 70 + Math.floor(Math.random() * 10); // 70-79%
}

// 确定推荐的上海香水
function getRecommendedShanghaiPerfume(userMBTI) {
    // 检查是否有完全匹配的MBTI类型
    for (const perfume of shanghaiPerfumes) {
        if (perfume.mbtiTypes.includes(userMBTI)) {
            return perfume;
        }
    }
    
    // 按MBTI大类匹配
    const userGroup = getMBTIGroup(userMBTI);
    
    if (userGroup === "TJ" || userGroup === "SJ") {
        return shanghaiPerfumes[0]; // 外滩晨雾，适合思考判断型
    } else {
        return shanghaiPerfumes[1]; // 石库门时光，适合直觉情感型
    }
}

// 获取欧莱雅推荐香水
function getLorealPerfumeRecommendations(userMBTI) {
    const userGroup = getMBTIGroup(userMBTI);
    return lorealPerfumesByMBTI[userGroup] || lorealPerfumesByMBTI["NF"];
}

// 显示结果
function showResults() {
    // 计算MBTI类型
    userMBTI = calculateMBTI();
    
    // 获取推荐的上海香水
    const recommendedPerfume = getRecommendedShanghaiPerfume(userMBTI);
    
    // 计算匹配度
    const matchScore = calculateMatchScore(userMBTI, recommendedPerfume);
    
    // 隐藏测试部分
    questionContainerEl.style.display = 'none';
    prevBtnEl.style.display = 'none';
    nextBtnEl.style.display = 'none';
    
    // 显示结果部分
    resultsContainerEl.style.display = 'block';
    
    // 更新结果信息
    updateResultInfo(userMBTI, matchScore, recommendedPerfume);
    
    // 显示上海香水选择
    displayShanghaiPerfumes(recommendedPerfume);
    
    // 显示欧莱雅其他香水推荐
    displayLorealRecommendations(userMBTI);
    
    // 滚动到结果
    resultsContainerEl.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// 更新结果信息
function updateResultInfo(userMBTI, matchScore, recommendedPerfume) {
    userMBTIEl.textContent = userMBTI;
    matchScoreEl.textContent = matchScore;
    
    resultTitleEl.textContent = `为您推荐：${recommendedPerfume.name}`;
    resultSubtitleEl.textContent = `您的MBTI类型：${userMBTI} - ${getMBTIDescription(userMBTI)}`;
    
    // 更新个人资料标签
    updateProfileTags(userMBTI, recommendedPerfume);
}

// 更新个人资料标签
function updateProfileTags(userMBTI, recommendedPerfume) {
    profileTagsEl.innerHTML = "";
    
    // 添加MBTI类型标签
    const mbtiTag = document.createElement('span');
    mbtiTag.className = 'profile-tag';
    mbtiTag.textContent = `MBTI: ${userMBTI}`;
    profileTagsEl.appendChild(mbtiTag);
    
    // 添加香水MBTI标签
    recommendedPerfume.mbtiTags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'profile-tag';
        tagElement.textContent = tag;
        profileTagsEl.appendChild(tagElement);
    });
    
    // 添加匹配度标签
    const matchTag = document.createElement('span');
    matchTag.className = 'profile-tag';
    matchTag.textContent = `共鸣度: ${matchScore}%`;
    profileTagsEl.appendChild(matchTag);
}

// 显示上海香水
function displayShanghaiPerfumes(recommendedPerfume) {
    shanghaiPerfumesEl.innerHTML = "";
    
    shanghaiPerfumes.forEach(perfume => {
        const isRecommended = perfume.id === recommendedPerfume.id;
        
        const perfumeCard = document.createElement('div');
        perfumeCard.className = `city-perfume-card ${isRecommended ? 'recommended' : ''}`;
        
        if (isRecommended) {
            perfumeCard.style.border = '2px solid var(--loreal-gold)';
            perfumeCard.style.boxShadow = '0 0 0 2px rgba(198, 167, 118, 0.2)';
        }
        
        // 构建香调标签
        const topNotes = perfume.notes.top.slice(0, 2).join(" · ");
        const middleNotes = perfume.notes.middle.slice(0, 2).join(" · ");
        const baseNotes = perfume.notes.base.slice(0, 2).join(" · ");
        
        perfumeCard.innerHTML = `
            <div class="perfume-header">
                <div class="perfume-icon">
                    <i class="${perfume.icon}"></i>
                </div>
                <h3>${perfume.name}</h3>
                <div class="perfume-mbti-tag">适合: ${perfume.mbtiTypes.join(", ")}</div>
                ${isRecommended ? '<div class="perfume-mbti-tag" style="background-color: rgba(76, 175, 80, 0.2); color: var(--loreal-green);">✓ 为您推荐</div>' : ''}
                
                <div class="perfume-notes">
                    <div class="perfume-note">前调: ${topNotes}</div>
                    <div class="perfume-note">中调: ${middleNotes}</div>
                    <div class="perfume-note">后调: ${baseNotes}</div>
                </div>
            </div>
            
            <div class="perfume-description">
                <p>${perfume.description}</p>
                <div class="literary-quote">${perfume.literaryReference}</div>
                <p><strong>香型特点:</strong> ${perfume.intensity}强度 · 留香${perfume.longevity}</p>
                <p><strong>价格:</strong> ¥ ${perfume.price}</p>
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
                updateResultInfo(userMBTI, calculateMatchScore(userMBTI, perfume), perfume);
                updateProfileTags(userMBTI, perfume);
            });
        }
        
        shanghaiPerfumesEl.appendChild(perfumeCard);
    });
}

// 显示欧莱雅推荐香水
function displayLorealRecommendations(userMBTI) {
    const recommendations = getLorealPerfumeRecommendations(userMBTI);
    productGridEl.innerHTML = "";
    
    recommendations.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // 构建香调标签
        const noteTags = product.notes.map(note => 
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
                    <button class="btn" style="padding: 8px 16px; font-size: 12px;">查看详情</button>
                </div>
            </div>
        `;
        
        productGridEl.appendChild(productCard);
    });
}

// 更新刻字预览
function updateEngravingPreview() {
    const text = engravingTextEl.value || "上海记忆";
    engravingPreviewEl.innerHTML = `<span>${text}</span>`;
}

// AR试香体验
function tryAR() {
    const selectedPerfume = document.querySelector('.city-perfume-card.recommended h3')?.textContent || 
                           document.querySelector('.city-perfume-card h3')?.textContent;
    
    alert(`AR试香功能启动中...\n\n即将为您呈现"${selectedPerfume}"的虚拟试香体验。`);
    
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
    
    arModal.innerHTML = `
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
    const selectedPerfume = document.querySelector('.city-perfume-card[style*="border: 2px solid"] h3')?.textContent || 
                           document.querySelector('.city-perfume-card h3')?.textContent;
    const engravingText = engravingTextEl.value;
    const selectedGift = document.querySelector('.gift-option.selected')?.getAttribute('data-gift');
    const giftName = selectedGift === 'scent-card' ? '石库门香片' : '外滩扩香石';
    
    let message = `"${selectedPerfume}" 已添加到购物车！\n\n`;
    message += `- 瓶身刻字：${engravingText || "无"}\n`;
    message += `- 赠品选择：${giftName || "未选择"}\n`;
    message += `- MBTI匹配：${userMBTI}\n`;
    message += `- 价格：¥ 699（推广价）\n\n`;
    message += `在实际小程序中，将同步到欧莱雅官方购物车系统。`;
    
    alert(message);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initShanghai);