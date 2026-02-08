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
  "name": "你的名字",
  "bio": "个人简介",
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
    "api": "一言API地址"
  }
}
```

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