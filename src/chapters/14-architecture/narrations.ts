export const narrations = [
  "这张图先区分三个概念：Job 是一次具体执行，Skill 是可以复用的能力定义，Artifact 是阶段之间传递的结构化产物。",
  "上方是 Skill Library。Copy Skill 和 Carousel Skill 可以被不同 Job 反复调用，本身没有 job_id、进度和运行状态。",
  "用户提交 Shopify URL 后，Job Service 创建唯一 job_id；Job Runtime 保留状态、进度、重试次数以及结果或错误。",
  "Orchestrator 在这个 Job 内先构建事实。Build Facts 是执行动作，Shared Facts 是动作生成的可信数据产物。",
  "Orchestrator 再调用上方能力库，在当前 Job 内生成 Copy Skill Run 和 Carousel Skill Run，两个实例并行执行。",
  "两个 Skill Run 的结构化输出汇合并自动验证，形成 Delivery Artifact；随后才进入人工审核与发布闸门。",
  "失败不会新建 Job：事实、文案和渲染问题定向返回对应步骤，保留同一个 job_id，并让 retry_count 加一后重新验证。",
];
