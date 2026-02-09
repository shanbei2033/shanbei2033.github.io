# SB33 Tech Pages

这是我的个人主页项目，部署在 GitHub Pages 上。

## 功能特性

- **大标题展示**: 醒目的渐变标题效果
- **打字机名言**: 每次刷新显示不同的英文励志名言，带打字机动画效果
- **社交媒体图标**: 支持 X、GitHub、Email、Blog 等社交平台
- **随机风景壁纸**: 每次刷新自动加载 Unsplash 高质量风景图片
- **壁纸锁定**: 右上角锁定按钮，可锁定喜欢的壁纸
- **鼠标粒子效果**: 鼠标移动时产生渐变粒子轨迹
- **网站运行时间**: 实时显示网站已运行天数
- **GitHub 贡献图**: 展示 GitHub 贡献热力图
- **响应式设计**: 完美适配桌面和移动端
- **配置化**: 通过 JSON 配置文件自定义所有内容

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
  "name": "用户名（用于GitHub和SEO）",
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
  },
  "site": {
    "startDate": "2024-01-01"
  },
  "theme": {
    "primaryColor": "#6366f1"
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

### 壁纸锁定功能

页面右上角有一个锁定按钮，可以锁定当前喜欢的壁纸：

- **未锁定状态**: 每次刷新页面会随机更换壁纸
- **锁定状态**: 壁纸保持不变，刷新后仍显示同一张
- **状态记忆**: 锁定状态会自动保存，下次访问仍然生效

锁定壁纸后，如果想要更换，只需点击解锁按钮，然后刷新页面即可。

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

## 自定义主题色

在 `config.json` 中可以自定义主题强调色（用于悬停效果等）：

```json
{
  "theme": {
    "primaryColor": "#6366f1"
  }
}
```

注意：本项目使用固定深色主题，所有文字为白色，背景为全屏风景图片配合半透明遮罩。

## 技术栈

- **纯前端**: HTML5 + CSS3 + Vanilla JavaScript
- **无框架依赖**: 零依赖，轻量快速
- **图片源**: Unsplash 高质量风景图片
- **部署**: GitHub Pages

## 部署

本项目使用 GitHub Pages 部署，完全免费。

1. Fork 这个仓库
2. 修改 `config.json` 文件来自定义你的个人信息
3. 启用 GitHub Pages（Settings -> Pages -> Source 选择 main 分支）
4. （可选）配置自定义域名：修改 `CNAME` 文件
5. 访问你的个人主页

## 开发文档

详细的开发文档请参考 [DEVELOPMENT.md](./DEVELOPMENT.md)，包含：
- 完整的功能清单
- 代码架构说明
- CSS 样式结构
- JavaScript 函数文档

## 许可证

MIT