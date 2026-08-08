import type { ChapterStepProps } from "../../registry/types";
import NarrativeChapter from "../../components/NarrativeChapter";
import WorkflowStepRail from "../../components/WorkflowStepRail";
import "./Deployment.css";

const beats = [
  { code: "TOPOLOGY", title: "Vercel + Render", detail: "静态前端与代理 / 长任务与渲染后端", meta: "FULL_BACKEND_URL" },
  { code: "SIGNAL", title: "线上运行信号", detail: "/api/healthz + async job", meta: "HEALTH + PROGRESS" },
  { code: "FAIL", title: "AppKit 失效", detail: "Swift renderer 只能运行在 macOS", meta: "OS BOUNDARY" },
  { code: "FALLBACK", title: "Pillow 接管", detail: "Python renderer + 旧版本兼容", meta: "LINUX READY" },
  { code: "E2E", title: "线上验收", detail: "URL 200 · job complete · image/png", meta: "PRODUCTION PROOF" },
];

export default function Deployment({ step }: ChapterStepProps) {
  return <><NarrativeChapter step={step} kicker="STEP 07 · PACKAGE & DEPLOY" title="本地能跑，" accent="不等于线上能跑。" beats={beats} kind="deploy" rootClass="dp-scene" footer="环境差异也是产品链路的一部分" /><WorkflowStepRail current={6} /></>;
}
