import type { ChapterStepProps } from "../../registry/types";
import WorkflowStepRail from "../../components/WorkflowStepRail";
import "./DemoFlow.css";

const journey = ["资产置入", "表达目标", "验证导入", "生成内容", "选择方案", "预览确认", "智能排期", "发布托管"];
const automation = new Set([2, 3, 6, 7]);
const inLoop = new Set([0, 1, 4, 5]);
const trust = [["VERIFIED", "展示来源与素材可用性"], ["PROGRESS", "生成过程与失败状态可见"], ["PREVIEW", "发布前看到真实 TikTok 效果"], ["WHY THIS TIME", "解释推荐时间与节奏"]];
const constraints = [["VARIANCE", "每商品 1–3 个方案"], ["WINDOW", "首期 7 天发布周期"], ["SOURCE", "公开 Shopify URL"], ["QUALITY", "素材不足时阻断并反馈"]];
export default function DemoFlow({ step }: ChapterStepProps) {
  const active = Math.min(step, 7);
  const docflowStep = active >= 4 && active <= 7 ? active - 4 : -1;
  const visualStep = active >= 4 ? 5 : active;
  const titles = ["先定义用户 E2E 核心体验。", "不需要用户操心的，极致自动化。", "必须由用户判断的，留在 Loop 里。", "关键节点给反馈，建立信任。", "旅程变成 mini PRD，再变成 Demo。", "理想体验，最终成为可点击产品。"];
  return <section className={`df-scene df-step-${active}`}>
    <header><p className="mono">STEP 01 · EXPERIENCE → DEMO</p><h1 className="serif-cn">Keep your user's<br /><em>experience in mind.</em></h1><span>{titles[visualStep]}</span></header>

    {visualStep <= 4 && <div className="df-canvas card">
      <div className="df-stage-groups" aria-label="journey groups">
        <article className="df-group-source"><span className="mono">SOURCE · 01–03</span><strong>资产与目标进入</strong><small>商品 · 素材 · 经营目标</small></article>
        <article className="df-group-content"><span className="mono">CONTENT · 04–06</span><strong>形成可运营内容</strong><small>生成 · 选择 · 预览</small></article>
        <article className="df-group-outcome"><span className="mono">OUTCOME · 07–08</span><strong>进入发布托管</strong><small>排期 · 持续发布</small></article>
      </div>
      <div className="df-route">{journey.map((item, index) => <article className={`${visualStep >= 1 && automation.has(index) ? "is-auto" : ""} ${visualStep >= 2 && inLoop.has(index) ? "is-loop" : ""}`} key={item}><i className="mono">0{index + 1}</i><strong>{item}</strong><span>{automation.has(index) ? "SYSTEM" : "HUMAN"}</span></article>)}</div>
      <div className={`df-legend ${visualStep >= 1 ? "is-visible" : ""}`}><span><i />SYSTEM · 自动完成</span><span><i />HUMAN · IN LOOP</span></div>

      {visualStep >= 3 && <div className="df-insight-groups">
        <section className={`df-insight-group df-insight-group--trust ${visualStep === 3 ? "is-focus" : ""}`}>
          <header><span className="mono">TRUST SIGNALS</span><strong>信任反馈</strong></header>
          <div>{trust.map(([code, detail]) => <article key={code}><span className="mono">{code}</span><strong>{detail}</strong></article>)}</div>
        </section>
        <section className={`df-insight-group df-insight-group--constraints ${visualStep === 4 ? "is-focus" : ""}`}>
          <header><span className="mono">OPERATING CONSTRAINTS</span><strong>运行约束</strong></header>
          <div>{constraints.map(([code, detail]) => <article key={code}><span className="mono">{code}</span><strong>{detail}</strong></article>)}</div>
        </section>
      </div>}
    </div>}

    {visualStep === 5 && <div className="df-docflow card">
      <article className={docflowStep >= 0 ? "is-visible" : ""}><span className="mono">CORE JOURNEY</span><strong>用户 E2E 体验</strong><p>自动化 · in-loop · 信任反馈 · 约束</p></article>
      <i className={docflowStep >= 1 ? "is-visible" : ""}>→</i>
      <article className={docflowStep >= 1 ? "is-visible" : ""}><span className="mono">MINI PRD</span><strong>可评审决策骨架</strong><p>范围 · 状态 · DoD · 风险</p></article>
      <i className={docflowStep >= 2 ? "is-visible" : ""}>→</i>
      <article className={docflowStep >= 2 ? "is-visible" : ""}><span className="mono">UI SPEC</span><strong>界面与交互规范</strong><p>布局 · 文案 · 组件 · 边界状态</p></article>
      <i className={docflowStep >= 3 ? "is-visible" : ""}>→</i>
      <article className={`is-final ${docflowStep >= 3 ? "is-visible" : ""}`}><span className="mono">CLICKABLE</span><strong>MVP Demo</strong><p>逼近理想态的前端体验</p></article>
    </div>}

    <div className="df-progress"><span style={{ width: `${((active + 1) / 8) * 100}%` }} /></div>
    <WorkflowStepRail current={0} />
  </section>;
}
