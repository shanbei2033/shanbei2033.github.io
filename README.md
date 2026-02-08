# SB33 Tech Pages

这是我的个人主页项目，部署在 GitHub Pages 上。

## 功能特性

- 大标题展示
- 一言模块（每次刷新显示不同的名言）
- 社交媒体图标链接
- 通过配置文件自定义内容
- 响应式设计

## 快速开始

1. Fork 这个仓库
2. 修改 `config.json` 文件来自定义你的个人信息
3. 启用 GitHub Pages（Settings -> Pages -> Source 选择 main 分支）
4. 访问你的个人主页

## 配置说明

编辑 `config.json` 文件来自定义页面内容：

```json
{
  "title": "页面标题",
  "name": "用户名（用于SEO）",
  "displayName": "显示名称",
  "bio": "个人简介",
  "url": "网站URL",
  "seo": {
    "description": "SEO描述（搜索引擎结果中显示）",
    "keywords": "关键词，用逗号分隔",
    "author": "作者名",
    "twitter": "Twitter用户名（如@username）"
  },
  "socials": [
    {
      "name": "显示名称",
      "icon": "图标类型",
      "url": "链接地址",
      "enabled": true
    }
  ],
  "hitokoto": {
    "enabled": true,
    "mode": "local"
  }
}
```

### SEO 配置

项目已内置完整的 SEO 优化，包括：

- **基础 Meta 标签**: description, keywords, author, robots
- **Open Graph**: Facebook/微信等社交平台分享时的预览信息
- **Twitter Card**: Twitter 分享卡片
- **Schema.org 结构化数据**: 帮助搜索引擎理解页面内容
- **Canonical URL**: 避免重复内容问题

只需在 `config.json` 中配置 `seo` 部分，所有标签会自动更新。

### 网站运行时间

在 `config.json` 中配置网站启动日期，页脚会自动显示运行时间：

```json
{
  "site": {
    "startDate": "2024-01-01"
  }
}
```

运行时间会实时更新，显示天、小时、分钟和秒数。

### 支持的图标类型

- `x` - X (Twitter)
- `telegram` - Telegram
- `github` - GitHub
- `email` - Email
- `website` - 网站
- `blog` - 博客
- `youtube` - YouTube
- `instagram` - Instagram
- `linkedin` - LinkedIn
- `discord` - Discord

## 自定义主题

在 `config.json` 中可以自定义主题颜色：

```json
{
  "theme": {
    "primaryColor": "#6366f1"
  }
}
```

## 部署

本项目使用 GitHub Pages 部署，完全免费。

## 许可证

MIT