export const narrations = [
  "正式集成把直接运行 Python 脚本升级为 Job-based 异步任务服务，并明确前端与后端两条职责泳道。",
  "前端调用 POST /api/generate 创建任务，后端立即返回唯一的 job id。",
  "后台以 generate_carousel_posts.py 为 Python Orchestrator，依次 Analyze、Plan、Generate 和 Package。",
  "前端持续调用 GET /api/jobs/{job_id} 轮询状态，读取 pending、running、progress、result 或 error。",
  "任务完成后前端展示结果；超时则 retry 或返回降级结果。前后端只通过稳定 API 和结构化结果衔接。",
];
