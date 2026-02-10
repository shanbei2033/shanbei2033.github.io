// 配置文件路径
const CONFIG_URL = 'config.json';

// 默认配置（用于本地文件打开时）
const DEFAULT_CONFIG = {
    "pageTitle": "shanbei2033 - SB33.tech Pages",
    "heading": {
        "mainTitle": "SB33.tech Pages",
        "subTitle": "Blogger"
    },
    "name": "shanbei2033",
    "displayName": "SB33",
    "bio": "Vibe coding lover | Blogger",
    "url": "https://www.sb33.tech",
    "seo": {
        "description": "shanbei2033 的个人主页 - Vibe coding lover | Blogger。分享技术博客、开源项目和编程心得。",
        "keywords": "shanbei2033, SB33, 技术博客, 开源, Vibe Coding, 编程, 开发者",
        "author": "shanbei2033",
        "twitter": "@sea60988321"
    },
    "github": {
        "username": "shanbei2033",
        "showContributions": true
    },
    "socials": [
        {
            "name": "X (Twitter)",
            "icon": "x",
            "url": "https://x.com/sea60988321",
            "enabled": true
        },
        {
            "name": "GitHub",
            "icon": "github",
            "url": "https://github.com/shanbei2033",
            "enabled": true
        },
        {
            "name": "Email",
            "icon": "email",
            "url": "mailto:lhb363363@foxmail.com",
            "enabled": true
        },
        {
            "name": "Blog",
            "icon": "blog",
            "url": "https://blog.sb33.tech",
            "enabled": true
        }
    ],
    "hitokoto": {
        "enabled": true,
        "customQuotes": []
    },
    "site": {
        "startDate": "2024-01-01"
    },
    "theme": {
        "mode": "dark",
        "primaryColor": "#6366f1",
        "backgroundColor": "#0f0f0f",
        "cardBackground": "#1a1a1a",
        "textColor": "#ffffff"
    }
};

// 本地语录库 - 从 quotes.json 加载
let localQuotes = [];

// SVG图标定义
const icons = {
    x: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    
    telegram: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
    
    github: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    
    email: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
    
    website: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
    
    blog: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`,
    
    youtube: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    
    instagram: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    
    linkedin: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    
    discord: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>`
};

// 打字机效果变量
let typewriterInterval = null;

// 从 quotes.json 加载语录
async function loadQuotesFromFile() {
    try {
        const response = await fetch('quotes.json');
        if (response.ok) {
            const quotes = await response.json();
            if (Array.isArray(quotes) && quotes.length > 0) {
                localQuotes = quotes.map(quote => ({
                    content: quote.content || quote.text || '',
                    author: quote.author || quote.from || 'Unknown'
                })).filter(quote => quote.content);
            }
        } else {
            console.log('quotes.json 加载失败，使用空语录库');
        }
    } catch (error) {
        console.log('加载 quotes.json 失败:', error);
    }
}

// 合并自定义语录到本地语录库
function mergeCustomQuotes(customQuotes) {
    if (!Array.isArray(customQuotes) || customQuotes.length === 0) return;
    
    // 将自定义语录添加到本地语录数组开头
    const formattedQuotes = customQuotes.map(quote => ({
        content: quote.content || quote.text || '',
        author: quote.author || quote.from || 'Unknown'
    })).filter(quote => quote.content);
    
    localQuotes = [...formattedQuotes, ...localQuotes];
}

// 打字机效果函数
function typeWriterEffect(element, text, speed = 50) {
    // 清除之前的动画
    if (typewriterInterval) {
        clearInterval(typewriterInterval);
    }
    
    // 完全重置元素内容
    element.innerHTML = '<span class="typewriter-text"></span>';
    const textSpan = element.querySelector('.typewriter-text');
    
    let i = 0;
    typewriterInterval = setInterval(() => {
        if (i < text.length) {
            textSpan.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typewriterInterval);
            typewriterInterval = null;
        }
    }, speed);
}

// 获取一言（使用打字机效果）
function fetchHitokoto() {
    const hitokotoText = document.getElementById('hitokoto-text');
    const hitokotoFrom = document.getElementById('hitokoto-from');
    
    // 随机选择一条语录
    const randomIndex = Math.floor(Math.random() * localQuotes.length);
    const quote = localQuotes[randomIndex];
    
    // 先显示作者（不需要打字机效果）
    hitokotoFrom.textContent = `— ${quote.author}`;
    hitokotoFrom.style.opacity = '0';
    setTimeout(() => {
        hitokotoFrom.style.transition = 'opacity 0.5s ease';
        hitokotoFrom.style.opacity = '1';
    }, 100);
    
    // 使用打字机效果显示内容（速度40ms/字符，更快）
    typeWriterEffect(hitokotoText, quote.content, 40);
}

// 生成社交链接
function generateSocialLinks(socials) {
    const container = document.getElementById('socials-container');
    container.innerHTML = '';
    
    socials.forEach(social => {
        if (!social.enabled) return;
        
        const iconSvg = icons[social.icon] || icons.website;
        
        const link = document.createElement('a');
        link.href = social.url;
        link.className = 'social-link';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = `
            ${iconSvg}
            <span class="tooltip">${social.name}</span>
        `;
        
        // 创建外部容器，包含图标和名称
        const wrapper = document.createElement('div');
        wrapper.className = 'social-wrapper';
        wrapper.appendChild(link);
        
        // 添加名称标签（在按钮外部下方）
        const nameLabel = document.createElement('span');
        nameLabel.className = 'social-name';
        nameLabel.textContent = social.name;
        wrapper.appendChild(nameLabel);
        
        container.appendChild(wrapper);
    });
}

// 更新 SEO Meta 标签
function updateSEOMeta(config) {
    const seo = config.seo || {};
    const name = config.name || 'shanbei2033';
    const displayName = config.displayName || 'SB33';
    const bio = config.bio || 'Vibe coding lover | Blogger';
    const url = config.url || 'https://www.sb33.tech';
    
    // 更新基本 meta
    const description = seo.description || `${name} 的个人主页 - ${bio}`;
    const keywords = seo.keywords || `${name}, ${displayName}, 技术博客, 开源`;
    
    // 更新或创建 meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = description;
    
    // 更新或创建 meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) metaKeywords.content = keywords;
    
    // 更新或创建 meta author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (metaAuthor) metaAuthor.content = seo.author || name;
    
    // 更新 Open Graph 标签
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = `${name} - ${config.title}`;
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = bio;
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = url;
    
    const ogProfile = document.querySelector('meta[property="profile:username"]');
    if (ogProfile) ogProfile.content = name;
    
    // 更新 Twitter Card 标签
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.content = `${name} - ${config.title}`;
    
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.content = bio;
    
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.content = url;
    
    const twitterCreator = document.querySelector('meta[property="twitter:creator"]');
    if (twitterCreator && seo.twitter) twitterCreator.content = seo.twitter;
    
    // 更新 Schema.org 结构化数据
    updateStructuredData(config);
}

// 更新 Schema.org 结构化数据
function updateStructuredData(config) {
    const name = config.name || 'shanbei2033';
    const displayName = config.displayName || 'SB33';
    const bio = config.bio || '';
    const url = config.url || 'https://www.sb33.tech';
    
    // 构建 sameAs 数组
    const sameAs = [];
    if (config.socials && Array.isArray(config.socials)) {
        config.socials.forEach(social => {
            if (social.enabled && social.url) {
                sameAs.push(social.url);
            }
        });
    }
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Person",
            "name": name,
            "alternateName": displayName,
            "description": bio,
            "url": url,
            "sameAs": sameAs,
            "jobTitle": "Developer",
            "knowsAbout": ["Programming", "Web Development", "Open Source", "Vibe Coding"]
        }
    };
    
    // 查找并更新现有的结构化数据脚本
    let scriptTag = document.getElementById('schema-data');
    if (scriptTag) {
        scriptTag.textContent = JSON.stringify(structuredData);
    }
}

// 计算并显示网站运行时间
function initRuntime(startDate) {
    const runtimeDisplay = document.getElementById('runtime-display');
    if (!runtimeDisplay || !startDate) return;
    
    const start = new Date(startDate);
    
    function updateRuntime() {
        const now = new Date();
        const diff = now - start;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        runtimeDisplay.innerHTML = `
            <span class="runtime-label">本站已运行</span>
            <span class="runtime-value">${days}</span><span class="runtime-unit">天</span>
            <span class="runtime-value">${hours}</span><span class="runtime-unit">小时</span>
            <span class="runtime-value">${minutes}</span><span class="runtime-unit">分</span>
            <span class="runtime-value">${seconds}</span><span class="runtime-unit">秒</span>
        `;
    }
    
    updateRuntime();
    setInterval(updateRuntime, 1000);
}

// 骨架屏管理
let skeletonMinDisplayTime = 800; // 最小显示时间（毫秒）
let skeletonStartTime = Date.now();
let skeletonHidden = false;

// 隐藏骨架屏
function hideSkeletonScreen() {
    if (skeletonHidden) return;
    
    const skeleton = document.getElementById('skeleton-screen');
    if (!skeleton) return;
    
    const elapsedTime = Date.now() - skeletonStartTime;
    const remainingTime = Math.max(0, skeletonMinDisplayTime - elapsedTime);
    
    // 确保至少显示最小时间，让用户看到效果
    setTimeout(() => {
        skeleton.classList.add('hidden');
        skeletonHidden = true;
        // 完全移除元素
        setTimeout(() => {
            skeleton.style.display = 'none';
        }, 500);
    }, remainingTime);
}

// 应用配置到页面
function applyConfig(config) {
    // 设置页面标题（浏览器标签页）
    const pageTitle = config.pageTitle || `${config.name || 'shanbei2033'} - ${config.heading?.mainTitle || 'SB33 Tech Pages'}`;
    document.title = pageTitle;
    document.getElementById('page-title').textContent = pageTitle;
    
    // 设置主标题和副标题
    const mainTitle = config.heading?.mainTitle || config.title || 'SB33 Tech Pages';
    const subTitle = config.heading?.subTitle || '';
    document.getElementById('main-title').textContent = mainTitle;
    
    // 设置个人介绍（如果有副标题，拼接显示）
    const bioText = config.bio || '';
    const displayBio = subTitle ? `${subTitle}${bioText ? ' | ' + bioText : ''}` : bioText;
    document.getElementById('user-bio').textContent = displayBio;
    
    // 更新 SEO Meta 标签
    updateSEOMeta(config);
    
    // 获取一言
    const hitokotoEnabled = config.hitokoto?.enabled !== false;
    const hitokotoWrapper = document.querySelector('.hitokoto-wrapper');
    
    if (hitokotoEnabled) {
        // 从 quotes.json 加载语录
        loadQuotesFromFile().then(() => {
            // 如果有自定义语录，合并到本地语录中
            if (config.hitokoto?.customQuotes && config.hitokoto.customQuotes.length > 0) {
                mergeCustomQuotes(config.hitokoto.customQuotes);
            }
            fetchHitokoto();
        });
        hitokotoWrapper.style.display = 'block';
    } else {
        // 隐藏一言区域
        hitokotoWrapper.style.display = 'none';
    }
    
    // 生成社交链接
    if (config.socials && Array.isArray(config.socials)) {
        generateSocialLinks(config.socials);
    }
    
    // 加载GitHub贡献图
    const githubUsername = config.github?.username || config.name || 'shanbei2033';
    const showContributions = config.github?.showContributions !== false;
    loadGitHubContributions(githubUsername, showContributions);
    
    // 应用主题颜色（如果配置中有）
    if (config.theme) {
        applyTheme(config.theme);
    }
    
    // 初始化运行时间显示
    if (config.site && config.site.startDate) {
        initRuntime(config.site.startDate);
    }
    
    // 标记配置加载完成
    configLoaded = true;
    checkAllLoaded();
}

// 加载配置并初始化页面
async function loadConfig() {
    // 检测是否在本地文件系统打开（file:// 协议）
    const isFileProtocol = window.location.protocol === 'file:';
    
    if (isFileProtocol) {
        console.log('检测到本地文件打开，使用默认配置');
        applyConfig(DEFAULT_CONFIG);
        return;
    }
    
    try {
        const response = await fetch(CONFIG_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const config = await response.json();
        applyConfig(config);
    } catch (error) {
        console.error('加载配置失败，使用默认配置:', error);
        applyConfig(DEFAULT_CONFIG);
    }
}

// 应用主题颜色
function applyTheme(theme) {
    const root = document.documentElement;
    if (theme.primaryColor) {
        document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
    }
}

// 初始化主题
document.addEventListener('DOMContentLoaded', () => {
    // 记录骨架屏开始显示时间
    skeletonStartTime = Date.now();
    
    loadConfig();
    initTheme();
    initParticleTrail();
    initBackground();
    initTouchGestures();
    
    // 设置最大等待时间（5秒），防止骨架屏一直显示
    setTimeout(() => {
        if (!skeletonHidden) {
            console.log('骨架屏超时，强制隐藏');
            hideSkeletonScreen();
        }
    }, 5000);
});

// 主题切换功能（已禁用）
function initTheme() {
    // 主题切换功能已移除，保持默认深色模式
}

// 背景图片管理
function initBackground() {
    const bgLockBtn = document.getElementById('bg-lock');
    const unlockIcon = document.getElementById('unlock-icon');
    const lockIcon = document.getElementById('lock-icon');
    
    // 从localStorage读取锁定状态
    const isLocked = localStorage.getItem('bgLocked') === 'true';
    const savedBgUrl = localStorage.getItem('bgImageUrl');
    
    // 更新锁定按钮状态
    updateLockButtonState(isLocked);
    
    // 加载背景图片
    if (isLocked && savedBgUrl) {
        // 如果已锁定，使用保存的图片
        setBackgroundImage(savedBgUrl);
    } else {
        // 未锁定，随机加载新图片
        loadRandomBackground();
    }
    
    // 开始预加载下一张图片
    preloadNextBackground();
    
    // 绑定锁定按钮点击事件
    bgLockBtn.addEventListener('click', () => {
        const currentLocked = localStorage.getItem('bgLocked') === 'true';
        const newLocked = !currentLocked;
        
        // 保存锁定状态
        localStorage.setItem('bgLocked', newLocked);
        
        // 如果锁定，保存当前图片URL
        if (newLocked) {
            const currentBg = document.querySelector('.bg-image-layer');
            if (currentBg) {
                localStorage.setItem('bgImageUrl', currentBg.style.backgroundImage.slice(5, -2));
            }
        }
        
        // 更新按钮状态
        updateLockButtonState(newLocked);
    });
}

// 更新锁定按钮状态
function updateLockButtonState(isLocked) {
    const bgLockBtn = document.getElementById('bg-lock');
    const unlockIcon = document.getElementById('unlock-icon');
    const lockIcon = document.getElementById('lock-icon');
    
    if (isLocked) {
        bgLockBtn.classList.add('locked');
        unlockIcon.classList.add('hidden');
        lockIcon.classList.remove('hidden');
        bgLockBtn.title = '背景已锁定 - 点击解锁';
    } else {
        bgLockBtn.classList.remove('locked');
        unlockIcon.classList.remove('hidden');
        lockIcon.classList.add('hidden');
        bgLockBtn.title = '背景未锁定 - 点击锁定当前图片';
    }
}

// 世界各地风景图列表（使用 Unsplash 的高质量风景图）
const landscapeImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', // 山景
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&q=80', // 瀑布
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80', // 晨雾森林
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1920&q=80', // 森林道路
    'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920&q=80', // 湖泊山景
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1920&q=80', // 绿色山丘
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80', // 阳光森林
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80', // 自然风光
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1920&q=80', // 山地湖泊
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80', // 湖边小屋
    'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1920&q=80', // 金色田野
    'https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=1920&q=80', // 海岸风景
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80', // 高山云海
    'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80', // 海滩日落
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80', // 瑞士山水
    'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=1920&q=80', // 红色峡谷
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80', // 雪山星空
    'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&q=80', // 雪山全景
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1920&q=80', // 阿尔卑斯山
    'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=1920&q=80', // 田野日落
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=80', // 森林河流
    'https://images.unsplash.com/photo-1490730141103-6cac27abb38f?w=1920&q=80', // 云雾山谷
    'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1920&q=80', // 热带雨林
    'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1920&q=80', // 瀑布森林
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80', // 金门大桥
    'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1920&q=80', // 秋日森林
    'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1920&q=80', // 雪山湖泊
    'https://images.unsplash.com/photo-1434725039720-aaad6dd3272c?w=1920&q=80', // 金色山脉
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1920&q=80', // 极光
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80', // 森林晨雾
    'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1920&q=80', // 沙漠
    'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1920&q=80', // 海边悬崖
    'https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=1920&q=80', // 梯田
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80', // 湖光山色
    'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?w=1920&q=80', // 星空山脉
    'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=1920&q=80', // 草原
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', // 阿尔卑斯
    'https://images.unsplash.com/photo-1434725039720-aaad6dd3272c?w=1920&q=80', // 峡谷
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80', // 地球星空
    'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&q=80', // 太空地球
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80', // 森林
    'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=1920&q=80', // 日落
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&q=80', // 瀑布
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80', // 山谷
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80', // 森林阳光
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80', // 山脉
    'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80', // 海岸
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80', // 山水
    'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=1920&q=80'  // 峡谷
];

// 加载随机背景图片
function loadRandomBackground() {
    // 从风景图列表中随机选择
    const randomIndex = Math.floor(Math.random() * landscapeImages.length);
    const imageUrl = landscapeImages[randomIndex];
    
    setBackgroundImage(imageUrl);
}

// 预加载下一张背景图片
let nextBgUrl = null;

function preloadNextBackground() {
    const randomIndex = Math.floor(Math.random() * landscapeImages.length);
    nextBgUrl = landscapeImages[randomIndex];
    const img = new Image();
    img.src = nextBgUrl;
}

// 背景图片加载状态
let bgImageLoaded = false;
let configLoaded = false;

// 检查是否所有内容都加载完成
function checkAllLoaded() {
    if (bgImageLoaded && configLoaded) {
        hideSkeletonScreen();
    }
}

// 设置背景图片
function setBackgroundImage(url) {
    // 移除旧的背景层
    const oldBg = document.querySelector('.bg-image-layer');
    if (oldBg) {
        oldBg.remove();
    }
    
    // 创建新的背景层
    const bgLayer = document.createElement('div');
    bgLayer.className = 'bg-image-layer';
    bgLayer.style.backgroundImage = `url('${url}')`;
    bgLayer.style.opacity = '0';
    
    // 插入到body的最开始
    document.body.insertBefore(bgLayer, document.body.firstChild);
    
    // 图片加载完成后淡入
    const img = new Image();
    img.onload = () => {
        bgLayer.style.opacity = '1';
        bgImageLoaded = true;
        checkAllLoaded();
        // 预加载下一张图片
        setTimeout(preloadNextBackground, 1000);
    };
    img.onerror = () => {
        // 如果加载失败，尝试加载另一张
        console.log('背景图片加载失败，尝试加载其他图片');
        loadRandomBackground();
    };
    img.src = url;
}

// 粒子轨迹效果
function initParticleTrail() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    document.body.appendChild(particleContainer);
    
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let lastX = mouseX;
    let lastY = mouseY;
    let isMoving = false;
    let moveTimeout;
    let frameCount = 0;
    
    // 监听鼠标移动
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        isMoving = true;
        
        // 清除之前的停止定时器
        clearTimeout(moveTimeout);
        
        // 鼠标停止移动后，停止生成粒子
        moveTimeout = setTimeout(() => {
            isMoving = false;
        }, 150);
    });
    
    // 使用 requestAnimationFrame 持续生成粒子
    function animate() {
        frameCount++;
        
        // 每2帧生成一个粒子，确保连续
        if (isMoving && frameCount % 2 === 0) {
            // 在两点之间插值，创建平滑轨迹
            const distance = Math.sqrt(Math.pow(mouseX - lastX, 2) + Math.pow(mouseY - lastY, 2));
            const steps = Math.max(1, Math.floor(distance / 5)); // 每5像素一个粒子
            
            for (let i = 0; i < steps; i++) {
                const t = (i + 1) / steps;
                const x = lastX + (mouseX - lastX) * t;
                const y = lastY + (mouseY - lastY) * t;
                createParticle(x, y);
            }
        }
        
        lastX = mouseX;
        lastY = mouseY;
        
        requestAnimationFrame(animate);
    }
    
    // 开始动画循环
    animate();
    
    // 创建粒子
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // 随机大小
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // 设置位置（居中显示）
        particle.style.left = `${x - size/2}px`;
        particle.style.top = `${y - size/2}px`;
        
        particleContainer.appendChild(particle);
        
        // 动画结束后移除粒子
        requestAnimationFrame(() => {
            particle.style.opacity = '0';
            particle.style.transform = `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 + 15}px) scale(0)`;
        });
        
        setTimeout(() => {
            particle.remove();
        }, 800);
    }
}

// 触摸手势管理
function initTouchGestures() {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    let touchStartTime = 0;
    let lastTapTime = 0;
    let isSwiping = false;
    
    const container = document.body;
    const bgLockBtn = document.getElementById('bg-lock');
    
    // 触摸开始
    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
        touchStartTime = Date.now();
        isSwiping = false;
    }, { passive: true });
    
    // 触摸移动 - 检测滑动
    container.addEventListener('touchmove', (e) => {
        if (!touchStartX || !touchStartY) return;
        
        const touchX = e.changedTouches[0].screenX;
        const touchY = e.changedTouches[0].screenY;
        const diffX = touchStartX - touchX;
        const diffY = touchStartY - touchY;
        
        // 如果水平滑动距离大于垂直滑动，认为是水平滑动
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
            isSwiping = true;
        }
    }, { passive: true });
    
    // 触摸结束
    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        const touchEndTime = Date.now();
        const touchDuration = touchEndTime - touchStartTime;
        
        handleSwipe(e);
        handleDoubleTap(touchEndTime);
        
        // 重置
        touchStartX = 0;
        touchStartY = 0;
    }, { passive: true });
    
    // 处理滑动
    function handleSwipe(e) {
        const swipeThreshold = 80; // 滑动阈值
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;
        
        // 检查是否在锁定按钮上滑动
        if (e && e.target && (e.target.closest('#bg-lock') || e.target.closest('.bg-lock'))) {
            return;
        }
        
        // 水平滑动切换背景
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
            const isLocked = localStorage.getItem('bgLocked') === 'true';
            
            if (!isLocked) {
                if (diffX > 0) {
                    // 向左滑动 - 下一张
                    showSwipeFeedback('left');
                    loadRandomBackground();
                } else {
                    // 向右滑动 - 上一张（通过预加载实现）
                    showSwipeFeedback('right');
                    if (nextBgUrl) {
                        setBackgroundImage(nextBgUrl);
                    } else {
                        loadRandomBackground();
                    }
                }
            } else {
                // 如果已锁定，显示提示
                showToast('背景已锁定，无法切换');
            }
        }
    }
    
    // 处理双击
    function handleDoubleTap(touchTime) {
        const doubleTapDelay = 300; // 双击间隔
        
        if (touchTime - lastTapTime < doubleTapDelay) {
            // 双击检测到
            const isLocked = localStorage.getItem('bgLocked') === 'true';
            
            if (!isLocked) {
                showToast('刷新背景...');
                loadRandomBackground();
            } else {
                showToast('背景已锁定');
            }
        }
        
        lastTapTime = touchTime;
    }
    
    // 长按锁定按钮显示菜单
    let longPressTimer;
    bgLockBtn.addEventListener('touchstart', (e) => {
        longPressTimer = setTimeout(() => {
            showLockMenu();
        }, 600);
    }, { passive: true });
    
    bgLockBtn.addEventListener('touchend', () => {
        clearTimeout(longPressTimer);
    }, { passive: true });
    
    bgLockBtn.addEventListener('touchmove', () => {
        clearTimeout(longPressTimer);
    }, { passive: true });
}

// 显示滑动反馈
function showSwipeFeedback(direction) {
    const feedback = document.createElement('div');
    feedback.className = `swipe-feedback swipe-${direction}`;
    feedback.innerHTML = direction === 'left' ? '→' : '←';
    document.body.appendChild(feedback);
    
    // 触发动画
    requestAnimationFrame(() => {
        feedback.classList.add('show');
    });
    
    // 移除
    setTimeout(() => {
        feedback.remove();
    }, 500);
}

// 显示Toast提示
function showToast(message) {
    // 移除已有的toast
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // 触发动画
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    // 自动隐藏
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// 显示锁定菜单
function showLockMenu() {
    const isLocked = localStorage.getItem('bgLocked') === 'true';
    
    // 创建菜单
    const menu = document.createElement('div');
    menu.className = 'touch-menu';
    menu.innerHTML = `
        <div class="touch-menu-item" data-action="toggle-lock">
            <span class="menu-icon">${isLocked ? '🔓' : '🔒'}</span>
            <span>${isLocked ? '解锁背景' : '锁定背景'}</span>
        </div>
        <div class="touch-menu-item" data-action="refresh-bg">
            <span class="menu-icon">🔄</span>
            <span>刷新背景</span>
        </div>
        <div class="touch-menu-item" data-action="copy-url">
            <span class="menu-icon">📋</span>
            <span>复制图片链接</span>
        </div>
    `;
    
    document.body.appendChild(menu);
    
    // 点击外部关闭
    const closeMenu = (e) => {
        if (!menu.contains(e.target)) {
            menu.remove();
            document.removeEventListener('touchstart', closeMenu);
            document.removeEventListener('click', closeMenu);
        }
    };
    
    setTimeout(() => {
        document.addEventListener('touchstart', closeMenu);
        document.addEventListener('click', closeMenu);
    }, 100);
    
    // 菜单项点击事件
    menu.querySelectorAll('.touch-menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const action = item.dataset.action;
            
            switch(action) {
                case 'toggle-lock':
                    document.getElementById('bg-lock').click();
                    showToast(isLocked ? '背景已解锁' : '背景已锁定');
                    break;
                case 'refresh-bg':
                    if (!isLocked) {
                        loadRandomBackground();
                        showToast('已刷新背景');
                    } else {
                        showToast('背景已锁定，无法刷新');
                    }
                    break;
                case 'copy-url':
                    const currentBg = document.querySelector('.bg-image-layer');
                    if (currentBg) {
                        const url = currentBg.style.backgroundImage.slice(5, -2);
                        navigator.clipboard.writeText(url).then(() => {
                            showToast('图片链接已复制');
                        });
                    }
                    break;
            }
            
            menu.remove();
        });
    });
}

// 加载GitHub贡献图
function loadGitHubContributions(username, showContributions = true) {
    const contributionsSection = document.querySelector('.contributions-section');
    const contributionsImg = document.getElementById('github-contributions');
    const loadingElement = document.getElementById('contributions-loading');
    const usernameElement = document.querySelector('.contributions-username');
    
    // 如果不显示贡献图，隐藏整个区域
    if (!showContributions) {
        if (contributionsSection) {
            contributionsSection.style.display = 'none';
        }
        return;
    }
    
    // 显示贡献图区域
    if (contributionsSection) {
        contributionsSection.style.display = 'block';
    }
    
    if (!contributionsImg || !username) return;
    
    // 更新用户名显示
    if (usernameElement) {
        usernameElement.textContent = username;
    }
    
    // 更新GitHub链接
    const contributionsLink = document.querySelector('.contributions-link');
    if (contributionsLink) {
        contributionsLink.href = `https://github.com/${username}`;
    }
    
    // 使用 ghchart.rshah.org 服务生成贡献图
    // 该服务返回SVG格式的贡献图
    const chartUrl = `https://ghchart.rshah.org/${username}`;
    
    contributionsImg.src = chartUrl;
    contributionsImg.style.opacity = '0';
    
    // 图片加载完成后显示图片并隐藏加载动画
    contributionsImg.onload = function() {
        if (loadingElement) {
            loadingElement.style.display = 'none';
        }
        contributionsImg.style.display = 'block';
        contributionsImg.style.transition = 'opacity 0.5s ease';
        contributionsImg.style.opacity = '1';
    };
    
    // 如果加载失败，显示错误信息
    contributionsImg.onerror = function() {
        if (loadingElement) {
            loadingElement.innerHTML = `
                <span class="contributions-loading-text" style="color: #ef4444;">
                    加载失败，点击前往 GitHub
                </span>
            `;
        }
        console.log('GitHub贡献图加载失败，可能是用户名不存在或网络问题');
    };
}
