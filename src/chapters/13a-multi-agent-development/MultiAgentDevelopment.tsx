import type { ChapterStepProps } from "../../registry/types";
import WorkflowStepRail from "../../components/WorkflowStepRail";
import "./MultiAgentDevelopment.css";

const moduleAgents = [
  { code: "A1", title: "Post Agent", module: "product-to-social-post", output: "draft · quality" },
  { code: "A2", title: "Carousel Agent", module: "product-pic-to-carousel", output: "plan · manifest" },
  { code: "A3", title: "Skill Orchestration Agent", module: "shopify-to-tiktok-carousel-post", output: "variance · schedule" },
];

export default function MultiAgentDevelopment({ step }: ChapterStepProps) {
  const active = Math.min(step, 5);
  return (
    <section className={`ma-scene ma-step-${active}`}>
      <header className="ma-title">
        <p className="mono">STEP 05B · MULTI-AGENT DEVELOPMENT</p>
        <h1 className="serif-cn">并行开发，<br /><em>集成、验收、再修正。</em></h1>
        <span>六个 Agent 不同时修改同一块代码：先各自交付，再联调集成，最后由 QA 对照原始定义验收。</span>
      </header>

      <div className="ma-board card">
        <section className={`ma-band ma-build ${active >= 1 ? "is-visible" : ""}`}>
          <header className="ma-band__label">
            <span className="mono">01 · PARALLEL BUILD</span>
            <strong>三个模块，同时开发</strong>
          </header>
          <div className="ma-module-agents">
            {moduleAgents.map((agent) => (
              <article key={agent.code}>
                <i className="mono">{agent.code}</i>
                <strong>{agent.title}</strong>
                <p>{agent.module}</p>
                <small className="mono">DELIVER · {agent.output}</small>
              </article>
            ))}
          </div>
          <div className="ma-collab-map" aria-label="三个模块产物并行汇入集成联调">
            <svg viewBox="0 0 900 64" preserveAspectRatio="none" aria-hidden="true">
              <path id="ma-route-left" d="M150 0 V28 H450 V62" />
              <path id="ma-route-mid" d="M450 0 V62" />
              <path id="ma-route-right" d="M750 0 V28 H450 V62" />
              <circle r="4"><animateMotion dur="3.8s" repeatCount="indefinite" path="M150 0 V28 H450 V62" /></circle>
              <circle r="4"><animateMotion begin=".55s" dur="3.8s" repeatCount="indefinite" path="M450 0 V62" /></circle>
              <circle r="4"><animateMotion begin="1.1s" dur="3.8s" repeatCount="indefinite" path="M750 0 V28 H450 V62" /></circle>
            </svg>
            <span className="mono">ARTIFACTS · MERGE FOR INTEGRATION</span>
          </div>
        </section>

        <section className={`ma-band ma-integrate ${active >= 2 ? "is-visible" : ""}`}>
          <header className="ma-band__label">
            <span className="mono">02 · INTEGRATE & CONNECT</span>
            <strong>后端串联，前端接入</strong>
          </header>
          <div className="ma-integration-pair">
            <article>
              <i className="mono">A4 · BACKEND</i>
              <strong>Backend Architecture Agent</strong>
              <p>Orchestrator · Job Service · 状态与重试</p>
            </article>
            <div className="ma-api-link"><span className="mono">STABLE API</span><b>⇄</b><small>联调</small></div>
            <article>
              <i className="mono">A5 · FRONTEND</i>
              <strong>Frontend Agent</strong>
              <p>输入 · 进度 · 预览 · 选择 · 错误反馈</p>
            </article>
          </div>
        </section>

        <section className={`ma-band ma-verify ${active >= 4 ? "is-visible" : ""}`}>
          <header className="ma-band__label">
            <span className="mono">03 · E2E ACCEPTANCE</span>
            <strong>QA 按最初定义验收</strong>
          </header>
          <article className="ma-qa-card">
            <i className="mono">A6 · QA / REGRESSION</i>
            <strong>Demo · mini PRD · DoD</strong>
            <p>功能、状态、异常与完整用户动线</p>
          </article>
          <div className="ma-feedback mono"><b>↺</b><span>FAIL · 定向返回责任 Agent 修改，再集成、再验收</span></div>
        </section>

        <section className={`ma-delivery ${active >= 5 ? "is-visible" : ""}`}>
          <span className="mono">PASS · TWO DELIVERABLES</span>
          <div><strong>完整线上应用</strong><i>+</i><strong>可复用底层 Skills</strong></div>
        </section>
      </div>
      <WorkflowStepRail current={4} />
    </section>
  );
}
