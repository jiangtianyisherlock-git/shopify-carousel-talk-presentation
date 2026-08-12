import type { ChapterStepProps } from "../../registry/types";
import WorkflowStepRail from "../../components/WorkflowStepRail";
import "./Feasibility.css";

const domains = [
  { code: "01 · INGEST", title: "Shopify 资产识别", input: "公开 URL", work: "高清素材 · 价格折扣 · 描述 · 公司 · 地区", output: "类目 · 卖点 · 价格特征 · 客群 · 地域", proof: "API 覆盖 · Headless fallback · 缺失字段" },
  { code: "02 · CREATE", title: "Carousel Engine", input: "商品事实 + 素材", work: "规格 · 模板 · 文案 · 排序 · CTA", output: "1–3 组 Variance", proof: "1080×1920 · 渲染稳定 · 质量校验" },
  { code: "03 · READY", title: "发布就绪计划", input: "类目 · 客群 · 时区", work: "黄金时间 · Caption · Hashtags", output: "Organic Post Payload", proof: "权限 · Payload 字段 · 失败状态" },
];

export default function Feasibility({ step }: ChapterStepProps) {
  void step;
  const active = 4;
  return <section className={`fs-scene fs-step-${active}`}>
    <header><p className="mono">STEP 03–04 · ARCHITECTURE → FEASIBILITY</p><h1 className="serif-cn">Fail Small,<br /><em>Fail Early</em></h1><span>根据 Demo 的体验，反推底层核心能力。</span></header>
    <div className="fs-board card">
      <div className="fs-flow"><span>SHOPIFY URL</span><i>→</i><span>SHARED FACTS</span><i>→</i><span>CONTENT ASSETS</span><i>→</i><span>PUBLISH READY</span></div>
      <div className="fs-domains">{domains.map((item, index) => <article className={active >= index + 1 ? "is-visible" : ""} key={item.code}><span className="mono">{item.code}</span><strong>{item.title}</strong><dl><div><dt>INPUT</dt><dd>{item.input}</dd></div><div><dt>CAPABILITY</dt><dd>{item.work}</dd></div><div><dt>OUTPUT</dt><dd>{item.output}</dd></div></dl><b className="mono">PROVE · {item.proof}</b></article>)}</div>
      <div className={`fs-go ${active >= 4 ? "is-visible" : ""}`}><span className="mono">EVIDENCE PASSED</span><strong>进入正式开发</strong><i>→</i></div>
    </div>
    <WorkflowStepRail current={active < 4 ? 2 : 3} />
  </section>;
}
