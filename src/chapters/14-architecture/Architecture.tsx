import type { CSSProperties } from "react";
import type { ChapterStepProps } from "../../registry/types";
import WorkflowStepRail from "../../components/WorkflowStepRail";
import "./Architecture.css";

const flowStyle = (index: number) => ({ "--flow-index": index } as CSSProperties);

const Arrow = ({ label, flowIndex }: { label?: string; flowIndex: number }) => (
  <span className="ar-arrow" aria-hidden="true" style={flowStyle(flowIndex)}>
    {label && <b className="mono">{label}</b>}
    <i>→</i>
    <span className="ar-arrow-signal" />
  </span>
);

const RuntimeStep = ({
  kind = "service",
  eyebrow,
  title,
  detail,
  className = "",
  flowIndex,
}: {
  kind?: "service" | "action" | "artifact";
  eyebrow: string;
  title: string;
  detail: string;
  className?: string;
  flowIndex: number;
}) => (
  <article className={`ar-runtime-step ar-kind-${kind} ${className}`} style={flowStyle(flowIndex)}>
    <span className="mono">{eyebrow}</span>
    <strong>{title}</strong>
    <p>{detail}</p>
  </article>
);

export default function Architecture({ step }: ChapterStepProps) {
  void step;
  const active = 6;

  return (
    <section className={`ar-scene ar-step-${active}`}>
      <header>
        <p className="mono">STEP 05C · JOB / SKILL ARCHITECTURE</p>
        <h1 className="serif-cn">一次 Job，<br /><em>编排多个 Skill。</em></h1>
        <span>Job 管理一次执行；Skill 提供可复用能力；Artifact 连接各个阶段。</span>
        <div className="ar-equation mono">ONE JOB → MULTIPLE SKILL RUNS → ONE VALIDATED DELIVERY</div>
      </header>

      <div className="ar-board card">
        <section className={`ar-library ${active >= 1 ? "is-visible" : ""}`}>
          <div className="ar-section-label">
            <span className="mono">01 · REUSABLE CAPABILITY</span>
            <strong>Skill Library</strong>
            <p>能力定义可被不同 Job 重复调用；内部可升级，输入输出保持稳定。</p>
          </div>
          <div className="ar-skill-definitions">
            <article className="ar-skill-definition">
              <span className="mono">SKILL DEFINITION</span>
              <strong>product-to-social-post</strong>
              <p><b>IN</b> facts <i>→</i> <b>OUT</b> draft</p>
              <small className="ar-skill-call mono">INVOKE</small>
            </article>
            <article className="ar-skill-definition">
              <span className="mono">SKILL DEFINITION</span>
              <strong>product-pic-to-carousel</strong>
              <p><b>IN</b> facts + media <i>→</i> <b>OUT</b> plan + manifest</p>
              <small className="ar-skill-call mono">INVOKE</small>
            </article>
            <article className="ar-skill-definition">
              <span className="mono">SKILL DEFINITION</span>
              <strong>shopify-to-tiktok-carousel-post</strong>
              <p><b>IN</b> product URL <i>→</i> <b>OUT</b> variance + schedule</p>
              <small className="ar-skill-call mono">INVOKE</small>
            </article>
          </div>
          <div className="ar-library-note mono">NO JOB_ID · NO PROGRESS · NO RUNTIME STATE</div>
        </section>

        <section className={`ar-runtime ${active >= 2 ? "is-visible" : ""}`}>
          <div className="ar-runtime-head">
            <div>
              <span className="mono">02 · JOB RUNTIME</span>
              <strong>Job Runtime <em>#job_id</em></strong>
            </div>
            <div className="ar-job-state mono">
              <span>STATUS <b>RUNNING</b></span>
              <span>PROGRESS <b>{active >= 5 ? "100%" : active >= 4 ? "72%" : active >= 3 ? "36%" : "08%"}</b></span>
              <span>RETRY_COUNT <b>{active >= 6 ? "1" : "0"}</b></span>
              <span>RESULT / ERROR</span>
            </div>
          </div>

          <div className="ar-runtime-flow">
            <RuntimeStep eyebrow="REQUEST" title="用户请求" detail="Shopify URL" flowIndex={0} />
            <Arrow flowIndex={0} />
            <RuntimeStep eyebrow="SERVICE" title="Job Service / API" detail="验证 · 创建 job_id · 查询状态" flowIndex={1} />
            <Arrow flowIndex={1} />
            <RuntimeStep eyebrow="EXECUTION" title="Orchestrator" detail="计划 · 并行 · 重试 · 回流" flowIndex={2} />
            <Arrow flowIndex={2} />
            <RuntimeStep eyebrow="ACTION" kind="action" title="Build / Extract Facts" detail="识别店铺 · 商品 · 媒体" className={active >= 3 ? "is-visible" : ""} flowIndex={3} />
            <Arrow flowIndex={3} />
            <RuntimeStep eyebrow="ARTIFACT" kind="artifact" title="Shared Facts" detail="shop · product · media" className={active >= 3 ? "is-visible" : ""} flowIndex={4} />
            <Arrow label="PARALLEL" flowIndex={4} />
            <div className={`ar-skill-runs ${active >= 4 ? "is-visible" : ""}`}>
              <span className="ar-invoke mono">INVOKED IN THIS JOB</span>
              <article style={flowStyle(5)}><b className="mono">RUN A</b><strong>product-to-social-post</strong><p>facts → draft</p></article>
              <article style={flowStyle(5)}><b className="mono">RUN B</b><strong>product-pic-to-carousel</strong><p>facts + media → plan + manifest</p></article>
              <article style={flowStyle(5)}><b className="mono">RUN C</b><strong>shopify-to-tiktok-carousel-post</strong><p>product URL → variance + schedule</p></article>
            </div>
            <Arrow flowIndex={5} />
            <RuntimeStep eyebrow="EXECUTION" title="Assemble & Validate" detail="schema · completeness · validation" className={active >= 5 ? "is-visible" : ""} flowIndex={6} />
            <Arrow flowIndex={6} />
            <RuntimeStep eyebrow="ARTIFACT" kind="artifact" title="Delivery Artifact" detail="facts · draft · plan · manifest · validation" className={active >= 5 ? "is-visible" : ""} flowIndex={7} />
          </div>

          <div className={`ar-retry ${active >= 6 ? "is-visible" : ""}`}>
            <span className="mono">SAME JOB_ID · RETRY_COUNT + 1</span>
            <b>事实失败 → Build Facts</b>
            <b>文案失败 → Copy Skill Run</b>
            <b>渲染失败 → Carousel Skill Run</b>
          </div>
        </section>

        <section className={`ar-governance ${active >= 5 ? "is-visible" : ""}`}>
          <div className="ar-section-label">
            <span className="mono">03 · GOVERNANCE & DELIVERY</span>
            <strong>验证通过，才进入发布。</strong>
          </div>
          <div className="ar-governance-flow">
            <article className="ar-mini-artifact" style={flowStyle(8)}><span className="mono">FROM JOB</span><strong>Delivery Artifact</strong></article>
            <Arrow flowIndex={8} />
            <article className="ar-human" style={flowStyle(9)}><i>◉</i><span className="mono">HUMAN</span><strong>Human Review</strong><p>选择 · 编辑 · 确认</p></article>
            <Arrow flowIndex={9} />
            <article className="ar-gate" style={flowStyle(10)}><div><span className="mono">DECISION</span><strong>Publish Gate</strong><p>内容 · Bio Link · 授权 · 可访问性</p></div></article>
            <div className="ar-gate-outcomes">
              <b className="ar-pass" style={flowStyle(11)}>PASS → SCHEDULE / PUBLISH</b>
              <span>FAIL → 按原因返回审核或对应 Skill Run</span>
            </div>
          </div>
        </section>

        <footer className={`ar-legend ${active >= 6 ? "is-visible" : ""}`}>
          <strong className="mono">SERVICE ≠ SKILL ≠ JOB ≠ ARTIFACT</strong>
          <span><i className="is-service" />Service / Step</span>
          <span><i className="is-skill" />Skill Definition</span>
          <span><i className="is-artifact" />Artifact</span>
          <span><i className="is-gate" />Decision Gate</span>
          <b>Skill 是可复用能力；Job 是调用这些能力的一次运行。</b>
        </footer>
      </div>
      <WorkflowStepRail current={4} />
    </section>
  );
}
