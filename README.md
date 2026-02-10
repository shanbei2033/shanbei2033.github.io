# Simpages

一个简洁、美观、高度可配置的个人主页模板，纯前端实现，无需后端支持。

## ✨ 特性

- 🎨 **精美设计** - 深色主题 + Unsplash 随机风景背景
- 📱 **完美适配** - 响应式布局，支持桌面和移动端
- ⚡ **骨架屏加载** - 提升首屏体验，流畅过渡
- 🖼️ **背景管理** - 支持锁定/切换壁纸，移动端手势操作
- ✍️ **语录展示** - 打字机效果展示励志名言
- 📊 **GitHub 贡献图** - 自动展示 GitHub 活跃情况
- 🔧 **完全可配置** - 只需修改 `config.json` 即可自定义
- 🚀 **零依赖** - 纯 HTML/CSS/JavaScript，无需构建工具

## 🚀 快速开始

### 1. Fork 项目

点击 GitHub 右上角的 **"Fork"** 按钮。

### 2. 修改配置

1. 复制 `config.example.json` 为 `config.json`
2. 编辑 `config.json`，修改以下内容：

```json
{
  "pageTitle": "你的名字 - 个人主页",
  "heading": {
    "mainTitle": "Welcome",
    "subTitle": "你好，我是 XXX"
  },
  "name": "your_username",
  "displayName": "Your Name",
  "bio": "Developer | Dreamer",
  "url": "https://yourdomain.com",
  "github": {
    "username": "your_github_username",
    "showContributions": true
  },
  "socials": [
    {
      "name": "GitHub",
      "icon": "github",
      "url": "https://github.com/your_username",
      "enabled": true
    }
  ]
}
```

### 3. 部署到 GitHub Pages

1. 进入仓库 **Settings** → **Pages**
2. **Source** 选择 "Deploy from a branch"
3. **Branch** 选择 "main"，文件夹选择 "/ (root)"
4. 点击 **Save**，等待几分钟后即可访问

### 4. 自定义域名（可选）

1. 修改 `CNAME` 文件内容为你的域名
2. 在域名 DNS 中添加 CNAME 记录指向 `yourusername.github.io`

## 📁 文件结构

```
├── index.html              # 主页面
├── styles.css              # 样式文件
├── script.js               # JavaScript 逻辑
├── config.json             # 配置文件（需修改）
├── config.example.json     # 配置示例
├── quotes.json             # 语录文件
├── CNAME                   # 自定义域名配置
└── README.md               # 本文件
```

## 🔧 完整配置说明

### 页面标题

```json
{
  "pageTitle": "浏览器标签页标题"
}
```

### 首页标题

```json
{
  "heading": {
    "mainTitle": "首页大标题",
    "subTitle": "副标题（显示在个人简介前）"
  }
}
```

### 个人简介

```json
{
  "bio": "Developer | Dreamer | Open Source Enthusiast"
}
```

### GitHub 贡献图

```json
{
  "github": {
    "username": "GitHub用户名",
    "showContributions": true
  }
}
```

### 社交链接

支持以下图标：
- `x` - X (Twitter)
- `github` - GitHub
- `email` - Email
- `blog` - 博客
- `telegram` - Telegram
- `youtube` - YouTube
- `instagram` - Instagram
- `linkedin` - LinkedIn
- `discord` - Discord
- `website` - 通用网站

```json
{
  "socials": [
    {
      "name": "显示名称",
      "icon": "github",
      "url": "链接地址",
      "enabled": true
    }
  ]
}
```

### 一言语录

```json
{
  "hitokoto": {
    "enabled": true,
    "customQuotes": [
      {
        "content": "语录内容",
        "author": "作者名"
      }
    ]
  }
}
```

- `enabled`: `false` 隐藏一言区域
- `customQuotes`: 自定义语录（优先显示）

### 语录文件

所有语录存储在 `quotes.json` 文件中：

```json
[
  {
    "content": "语录内容",
    "author": "作者名"
  }
]
```

直接编辑此文件即可添加、删除或修改语录。

### SEO 配置

```json
{
  "seo": {
    "description": "页面描述",
    "keywords": "关键词1, 关键词2",
    "author": "作者名",
    "twitter": "@你的Twitter"
  }
}
```

### 主题色

```json
{
  "theme": {
    "primaryColor": "#6366f1"
  }
}
```

### 网站启动时间

```json
{
  "site": {
    "startDate": "2024-01-01"
  }
}
```

用于显示"本站已运行 X 天 X 小时 X 分 X 秒"。

## 🖼️ 背景图片操作

### 桌面端
- 点击右上角锁定按钮：锁定/解锁当前背景

### 移动端
- **左右滑动**：切换背景图片
- **双击**：刷新背景图片
- **长按锁定按钮**：显示快捷菜单（锁定/刷新/复制链接）

## 📝 完整配置示例

参考 `config.example.json` 文件。

## 🔧 本地开发

直接打开 `index.html` 即可预览（使用默认配置）。

## 📄 许可证

MIT License - 可自由使用和修改。

---

[English Version](./README_en.md)
