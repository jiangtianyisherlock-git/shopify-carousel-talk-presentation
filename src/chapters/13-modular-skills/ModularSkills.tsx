import type { ChapterStepProps } from "../../registry/types";
import WorkflowStepRail from "../../components/WorkflowStepRail";
import "./ModularSkills.css";

const skills = [
  { code: "01", name: "product-to-social-post", role: "可信事实 → 文案", input: "verified product facts", output: "draft · quality" },
  { code: "02", name: "product-pic-to-carousel", role: "商品素材 → 轮播", input: "facts · media", output: "plan · manifest · validation" },
  { code: "03", name: "shopify-to-tiktok-carousel-post", role: "发现、编排与排期", input: "Shopify URL · goal", output: "variance · schedule · payload" },
];

export default function ModularSkills({ step }: ChapterStepProps) {
  void step;
  const active = 4;
  return <section className={`ms-scene ms-step-${active}`}>
    <header><p className="mono">STEP 05A · MODULAR SKILLS</p><h1 className="serif-cn">结构化定义，<br /><em>独立封装核心模块。</em></h1><span>三个 Skill 分别明确输入、输出、校验与失败表达，再通过结构化产物协同。</span></header>
    <div className="ms-board card">
      <div className="ms-facts"><span className="mono">SHARED FACTS</span><strong>同一份可信商品事实</strong><div><b>VERIFIED</b><b>DERIVED</b><b>INFERRED</b><b>UNKNOWN</b></div></div>
      <div className="ms-skills">{skills.map((item, index) => <article className={active >= index ? "is-visible" : ""} key={item.name}><i className="mono">{item.code}</i><strong>{item.name}</strong><em>{item.role}</em><p><span>IN</span>{item.input}</p><p><span>OUT</span>{item.output}</p><b className="mono">INDEPENDENT · VERSIONED</b></article>)}</div>
      <div className={`ms-handoff ${active >= 3 ? "is-visible" : ""}`}><span>facts</span><span>draft</span><span>plan</span><span>manifest</span><span>validation</span><strong>结构化产物交接</strong></div>
      <div className={`ms-orchestrate ${active >= 4 ? "is-visible" : ""}`}><span className="mono">MAIN SKILL</span><strong>发现 → 分发 → 汇合 → 校验 → 排期</strong><p>单个 Skill 可独立升级；失败只返回对应模块。</p></div>
    </div>
    <WorkflowStepRail current={4} />
  </section>;
}
