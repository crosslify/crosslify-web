# Crosslify Web

外贸多平台 AI 上架工具的官网/原型。

**线上**：https://crosslify.com

## 部署

仓库已接入 Vercel Git 集成（项目 `xinyao-s-projects/crosslify`）：

- `git push origin main` → 自动部署到 https://crosslify.com
- 其他分支 push → Vercel 自动给独立预览 URL
- Pull Request → 评论里附预览链接

手动部署（应急）：
```
npx vercel --prod
```

## 仓库结构

```
index.html      单文件 React + Tailwind 原型（"PuTu" 生成器 UI）
vercel.json     cleanUrls + www → apex 308 重定向
.gitignore      node_modules / .env / .vercel
```

## 相关仓库

- 这个仓（公开）：营销/官网/docs
- `xinyaoxp/crosslify-app`（私有）：真产品，部署到 `app.crosslify.com`
