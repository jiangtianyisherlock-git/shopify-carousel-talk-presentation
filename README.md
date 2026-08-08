# 一个人，如何用 AI Native 做出可上线产品？

这是 Shopify to Carousel 项目的原始完整版网页演示，包含两个 Demo 视频。演示采用 16:9 点击驱动形式，页面切换由演讲者手动控制，页面内元素按设计节奏呈现。

## 在线观看

GitHub Pages：<https://jiangtianyisherlock-git.github.io/shopify-carousel-talk-presentation/>

## 本地运行

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

## 构建

```bash
# 原始完整版
pnpm build

# GitHub Pages / 可移动相对路径版本
pnpm build:github

# 不包含两个 Demo 视频的轻量占位版本
pnpm build:v2
```

原始视频位于 `public/assets/demos/`。GitHub Pages 工作流会构建并发布完整版。
