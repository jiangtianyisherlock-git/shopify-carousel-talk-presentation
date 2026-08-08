import type { ChapterStepProps } from "../../registry/types";
import NarrativeChapter from "../../components/NarrativeChapter";
import WorkflowStepRail from "../../components/WorkflowStepRail";
import "./MockLoop.css";

const beats = [
  { code: "HUMAN JUDGMENT", title: "人判断体验方向", detail: "意图 · 清晰度 · 信任 · 取舍", meta: "PRODUCT TASTE" },
  { code: "AI DESIGN CRITIC", title: "AI 系统检查", detail: "状态 · 约束 · 一致性 · 可访问性", meta: "SYSTEMATIC REVIEW" },
  { code: "BROWSER COMMENT", title: "评论锚定真实节点", detail: "页面问题直接对应组件和代码位置", meta: "NODE → CODE" },
  { code: "ITERATE", title: "打磨交互与表达", detail: "URL 归一化 · 状态减法 · 预览分区", meta: "COPY + INTERACTION" },
  { code: "FRONTEND CONTRACT", title: "验证后沉淀契约", detail: "页面、状态与行为成为后续集成依据", meta: "TRACEABLE LOOP" },
];

const useDemoPlaceholders = import.meta.env.VITE_DEMO_PLACEHOLDERS === "1";

export default function MockLoop({ step }: ChapterStepProps) {
  if (step === 0) return <section className="ml-demo">
    <header><p className="mono">STEP 01 · EXPERIENCE → DEMO</p><h1 className="serif-cn">Demo <em>演示</em></h1><span>理想体验，最终成为可点击产品。</span></header>
    <div className="ml-demo__player card">
      {useDemoPlaceholders
        ? <div className="ml-demo__placeholder" role="img" aria-label="App Demo 视频占位">
            <span className="ml-demo__placeholder-mark">▶</span>
            <p className="mono">APP DEMO PLACEHOLDER</p>
            <strong>现场演示 · 约 20 秒</strong>
            <small>V2 轻量版未内嵌视频</small>
          </div>
        : <video data-no-advance controls muted preload="metadata" src={`${import.meta.env.BASE_URL}assets/demos/Shopify-to-carousel-app-demo.mp4#t=0,20`} />}
      <div className="ml-demo__copy"><span className="mono">REAL APP DEMO · 0–20s</span><strong>从经营资产开始</strong><p>真实 Shopify 输入、验证和导入，把核心旅程变成可以点击、可以讨论、可以验收的产品。</p></div>
    </div>
    <WorkflowStepRail current={0} />
  </section>;
  return <><NarrativeChapter step={step} kicker="STEP 02 · HUMAN + AI DESIGN CRITIC" title="人工判断与 AI Critic，" accent="一起打磨产品体验。" beats={beats} kind="split" rootClass="ml-scene" footer="Validated demo mock → Frontend contract" /><WorkflowStepRail current={1} /></>;
}
