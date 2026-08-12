import type { ChapterStepProps } from "../../registry/types";
import WorkflowStepRail from "../../components/WorkflowStepRail";
import "./Integration.css";

const contractFields = [
  ["REQUEST", "url · task_type · product_info"],
  ["JOB", "job_id"],
  ["STATUS", "pending · running · completed · failed"],
  ["RESULT", "progress · result · error"],
];

export default function Integration({ step }: ChapterStepProps) {
  void step;
  const active = 4;
  return <section className={`it-scene it-step-${active}`}>
    <header>
      <p className="mono">STEP 06 · JOB-BASED API</p>
      <h1 className="serif-cn">异步生成服务：<br /><em>一次请求，一条清晰链路。</em></h1>
      <span>前端负责发起与呈现，后端负责执行；中间只交换稳定、可读的任务状态。</span>
    </header>

    <div className="it-board card">
      <div className="it-lane-label it-lane-label--front"><b className="mono">FRONTEND</b><span>输入 · 进度 · 结果呈现</span></div>
      <div className="it-lane-label it-lane-label--back"><b className="mono">BACKEND</b><span>任务 · 执行 · 异常降级</span></div>

      <div className="it-flow">
        <article className="it-node it-node--input is-live"><b className="it-owner mono">FRONTEND</b><i>01</i><strong>输入任务</strong><small>URL / 参数</small></article>
        <span className={`it-arrow ${active >= 1 ? "is-live" : ""}`}><b>POST</b></span>
        <article className={`it-node it-node--job ${active >= 1 ? "is-live" : ""}`}><b className="it-owner mono">BACKEND</b><i>02</i><strong>创建 Job</strong><small>返回 <code>job_id</code></small></article>
        <span className={`it-arrow ${active >= 2 ? "is-live" : ""}`}><b>START</b></span>
        <article className={`it-node it-node--worker ${active >= 2 ? "is-live" : ""}`}>
          <b className="it-owner mono">BACKEND</b><i>03</i><strong>Python Orchestrator</strong><small>generate_carousel_posts.py</small>
          <div className="it-phases"><span>Analyze</span><span>Plan</span><span>Generate</span><span>Package</span></div>
        </article>
        <span className={`it-arrow ${active >= 3 ? "is-live" : ""}`}><b>STATUS</b></span>
        <article className={`it-node it-node--status ${active >= 3 ? "is-live" : ""}`}>
          <b className="it-owner mono">FRONTEND ↔ API</b><i>04–05</i><strong>轮询任务状态</strong><small>GET /api/jobs/{`{job_id}`}</small>
          <div className="it-meter"><span /><b>0 → 40 → 75 → 100%</b></div>
          <div className="it-poll-loop"><span>持续 POLLING</span></div>
        </article>
        <span className={`it-arrow ${active >= 4 ? "is-live" : ""}`}><b>RESULT</b></span>
        <article className={`it-node it-node--result ${active >= 4 ? "is-live" : ""}`}><b className="it-owner mono">FRONTEND</b><i>06</i><strong>展示结果</strong><small>result / error</small></article>
      </div>

      <section className={`it-contract ${active >= 1 ? "is-live" : ""}`}>
        <header><b className="mono">STABLE API &amp; OUTPUT CONTRACT</b><span>一个稳定边界，支持前后端独立演进</span></header>
        <div>{contractFields.map(([label, value]) => <article key={label}><b className="mono">{label}</b><span>{value}</span></article>)}</div>
      </section>

      <div className={`it-fallback ${active >= 4 ? "is-live" : ""}`}><b className="mono">FALLBACK</b><span>timeout → retry → degraded result</span></div>
    </div>
    <WorkflowStepRail current={5} />
  </section>;
}
