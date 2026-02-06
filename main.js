// main.js - 主页面脚本

// 首页的双语文本数据
const indexTranslations = {
    en: {
        // 导航
        "citySelection": "City Selection",
        "howItWorks": "How It Works",
        "collections": "Collections",
        "aboutUs": "About Us",
        
        // 英雄区域
        "heroTitle": "City Memory · Personalized Fragrance",
        "heroSubtitle": "Choose a city, begin your unique olfactory memory journey",
        "heroTech": "Based on Neuroscience × City Impressions × AI Perfumery Technology",
        
        // 技术标签
        "tech1": "Neuroscience Customization",
        "tech2": "City Memory Mapping",
        "tech3": "AI Perfumery Technology",
        
        // 城市选择
        "chooseCity": "Choose Your City Memory",
        "citySubtitle": "First five cities in China: Each has unique cultural DNA and olfactory memory",
        
        // 城市卡片 - 上海
        "shanghai": "Shanghai",
        "shanghaiStatus": "Available",
        "shanghaiDesc": "Alleyway coffee and Shikumen memories, olfactory imprint of Hai-pai culture",
        "shanghaiTag1": "Eileen Chang Literature",
        "shanghaiTag2": "Shikumen",
        "shanghaiTag3": "The Bund Memory",
        "testTime": "3-min test",
        "giftText": "Gift scent card/diffuser stone",
        
   // 城市卡片 - 纽约（原深圳）
        "newyork": "New York",
        "newyorkStatus": "Available",
        "newyorkDesc": "Urban energy and multicultural fusion, the city that never sleeps",
        "newyorkTag1": "Broadway Dreams",
        "newyorkTag2": "Central Park",
        "newyorkTag3": "Urban Fusion",
        
        // 城市卡片 - 香港
        "hongkong": "Hong Kong",
        "hongkongStatus": "Coming Soon",
        "hongkongDesc": "Victoria Harbour night and old tea restaurants, romantic imprint of Love in a Fallen City",
        "hongkongTag1": "Eileen Chang's Love in a Fallen City",
        "hongkongTag2": "Hong Kong Nostalgia",
        "hongkongTag3": "East-West Fusion",
        
        // 工作原理
        "howItWorksTitle": "How It Works",
        "howItWorksSubtitle": "Three steps to unlock your city-exclusive fragrance",
        "step1Title": "Choose City",
        "step1Desc": "Select the city memory you want to explore from the three launch cities, each with unique cultural DNA and test questions.",
        "step2Title": "Personality Test",
        "step2Desc": "Through 5 carefully designed questions, analyze your memory preferences, emotional connections and personality traits in this city.",
        "step3Title": "Get Recommendation",
        "step3Desc": "Based on test results, AI algorithm recommends the most matching city fragrance, with customizable bottle engraving and limited gifts.",
        
        // 技术特色
        "featuresTitle": "Technical Features",
        "feature1Title": "Neuroscience Customization",
        "feature1Desc": "Based on collective memory and emotional connections of city residents, capturing each city's unique olfactory imprint.",
        "feature2Title": "City Cultural DNA",
        "feature2Desc": "Deep exploration of each city's cultural DNA, from literature, architecture, cuisine to lifestyle.",
        "feature3Title": "Personalized Matching",
        "feature3Desc": "Combining your selection preferences to recommend city fragrances most suitable for your personality and memories.",
        "feature4Title": "Limited City Gifts",
        "feature4Desc": "During promotion, each city has exclusive limited gifts to enhance emotional connection value.",
        
        // 页脚
        "projectTitle": "L'Oréal City Memory Project",
        "projectDesc1": "Personalized fragrance customization based on neuroscience, cultural research and AI technology.",
        "projectDesc2": "First three cities: Shanghai, New York, Hong Kong",
        "partnersTitle": "Technology Partners",
        "partner1": "L'Oréal Neuroscience Lab",
        "partner2": "Modiface AR Technology",
        "partner3": "YSL Scent-Sation System",
        "partner4": "City Memory Research Institute",
        "brandstormTitle": "Brandstorm 2023",
        "brandstormDesc": "L'Oréal Global Student Innovation Competition Entry",
        "copyright": "© 2023 L'Oréal Group All Rights Reserved",
        "demoNote": "This demo showcases concept and interface design, actual product subject to L'Oréal official release."
    },
    
    zh: {
        // 导航
        "citySelection": "城市选择",
        "howItWorks": "工作原理",
        "collections": "产品系列",
        "aboutUs": "关于我们",
        
        // 英雄区域
        "heroTitle": "城市记忆 · 个性香氛",
        "heroSubtitle": "选择一座城市，开启专属的嗅觉记忆之旅",
        "heroTech": "基于神经科学 × 城市印象 × AI调香技术",
        
        // 技术标签
        "tech1": "神经科学定制",
        "tech2": "城市记忆图谱",
        "tech3": "AI调香技术",
        
        // 城市选择
        "chooseCity": "选择您的城市记忆",
        "citySubtitle": "国内首发五城：每座城市都有独特的文化基因与嗅觉记忆",
        
        // 城市卡片 - 上海
        "shanghai": "上海",
        "shanghaiStatus": "已上线",
        "shanghaiDesc": "弄堂咖啡与石库门时光，海派文化的嗅觉记忆",
        "shanghaiTag1": "张爱玲文学",
        "shanghaiTag2": "石库门",
        "shanghaiTag3": "外滩记忆",
        "testTime": "3分钟测试",
        "giftText": "赠香片/扩香石",
        
      // 城市卡片 - 纽约（原深圳）
        "newyork": "纽约",
        "newyorkStatus": "已上线",
        "newyorkDesc": "都市活力与多元文化融合，不眠之城的嗅觉记忆",
        "newyorkTag1": "百老汇梦想",
        "newyorkTag2": "中央公园",
        "newyorkTag3": "都市融合",
        
        // 城市卡片 - 香港
        "hongkong": "香港",
        "hongkongStatus": "即将上线",
        "hongkongDesc": "维港夜色与老茶餐厅，倾城之恋的浪漫印记",
        "hongkongTag1": "张爱玲《倾城之恋》",
        "hongkongTag2": "港式情怀",
        "hongkongTag3": "中西合璧",
        
        // 工作原理
        "howItWorksTitle": "工作原理",
        "howItWorksSubtitle": "三步骤，解锁您的城市专属香氛",
        "step1Title": "选择城市",
        "step1Desc": "从首发城市中选择您想要探索的城市记忆，每座城市都有独特的文化基因和测试题目。",
        "step2Title": "个性测试",
        "step2Desc": "通过5道精心设计的题目，分析您在这座城市中的记忆偏好、情感连接和个性特征。",
        "step3Title": "获得推荐",
        "step3Desc": "基于测试结果，AI算法为您推荐最匹配的城市香氛，并可定制瓶身刻字和选择限量赠礼。",
        
        // 技术特色
        "featuresTitle": "技术特色",
        "feature1Title": "神经科学定制",
        "feature1Desc": "基于城市居民的集体记忆与情感联结，捕捉每座城市独特的嗅觉印记。",
        "feature2Title": "城市文化基因",
        "feature2Desc": "深度挖掘每座城市的文化DNA，从文学、建筑、饮食到生活方式。",
        "feature3Title": "个性化匹配",
        "feature3Desc": "结合您的选择偏好，推荐最适合您性格和记忆的城市香氛。",
        "feature4Title": "限量城市赠礼",
        "feature4Desc": "推广期间，每座城市都有专属的限量赠品，增加情感联结价值。",
        
        // 页脚
        "projectTitle": "欧莱雅城市记忆项目",
        "projectDesc1": "基于神经科学、文化研究与AI技术的个性化香氛定制方案。",
        "projectDesc2": "首发三城：上海、纽约、香港",
        "partnersTitle": "技术合作伙伴",
        "partner1": "欧莱雅神经科学实验室",
        "partner2": "Modiface AR技术",
        "partner3": "YSL Scent-Sation系统",
        "partner4": "城市记忆研究机构",
        "brandstormTitle": "Brandstorm 2023",
        "brandstormDesc": "欧莱雅全球大学生创新大赛参赛方案",
        "copyright": "© 2023 欧莱雅集团 版权所有",
        "demoNote": "本演示展示方案概念与交互界面，实际产品以欧莱雅官方发布为准"
    }
};

// 全局变量
let currentLang = 'en'; // 默认英文

// 语言切换函数
function toggleLanguage() {
    // 切换语言
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    
    // 更新语言切换按钮文本
    updateLanguageToggle();
    
    // 更新所有带data-lang属性的元素
    updatePageText();
    
    // 保存语言偏好到localStorage
    localStorage.setItem('siteLanguage', currentLang);
}

// 在main.js中添加更新语言切换按钮文本的函数
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
    if (currentLang === 'en') {
        document.title = "Maison Margiela · City Memory Fragrance Customization";
    } else {
        document.title = "梅森马吉拉 · 城市记忆香氛定制";
    }
    
    // 更新所有带data-lang属性的元素
    document.querySelectorAll('[data-lang]').forEach(element => {
        const langKey = element.getAttribute('data-lang');
        if (langKey === currentLang) {
            element.style.display = element.tagName === 'SPAN' ? 'inline' : 'block';
            if (element.tagName === 'A' && element.parentElement.tagName === 'LI') {
                // 导航链接特殊处理
                element.style.display = 'inline';
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
}

// 初始化语言
function initLanguage() {
    // 检查保存的语言偏好
    const savedLang = localStorage.getItem('siteLanguage');
    if (savedLang) {
        currentLang = savedLang;
    }
    
    // 初始语言设置
    updateLanguageToggle();
    updatePageText();
}

// 简单的初始化函数
function initMain() {
    // 初始化语言
    initLanguage();
    
    // 绑定语言切换按钮
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 城市卡片悬停效果
    document.querySelectorAll('.city-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.12)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        });
    });
    
    console.log('L\'Oréal City Memory Fragrance Customization - Main page loaded');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initMain);