export const narrations = [
  "前端部署在 Vercel，长任务和渲染后端部署在 Render，前端通过统一后端地址代理 API。",
  "后端用 api healthz 暴露健康状态，异步 job 暴露运行进度。",
  "部署时发现本地 Swift AppKit renderer 只能运行在 macOS，Render 的 Linux 环境无法使用。",
  "于是补充 Python 和 Pillow renderer，并处理线上旧 Pillow 版本兼容。",
  "最后在线验证 healthz、URL、异步任务和 image png 输出。本地成功和线上成功是两个不同验收节点。",
];
