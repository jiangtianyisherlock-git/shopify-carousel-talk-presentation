import type { ChapterStepProps } from "../../registry/types";
import WorkflowStepRail from "../../components/WorkflowStepRail";
import "./Reflection.css";

const pipeline = ["Lock Inputs", "Reproduce", "Execute", "Verify", "Fix & Retry", "Package Evidence"];

export default function Reflection({ step }: ChapterStepProps) {
  const active = Math.min(step, 3);
  return <section className={"rf-scene rf-step-" + active}>
    <header><p className="mono">STEP 08 · REPRODUCIBLE DELIVERY</p><h1 className="serif-cn">稳定，意味着离开创建者，<br /><em>仍然可以复现与验证。</em></h1><span>跨 Agent × 跨环境 × 可验证交付</span></header>
    <div className="rf-board card">
      <div className="rf-risks"><article><span className="mono">AGENT × AGENT</span><strong>同一任务，不同执行</strong><p>模型 · 代码版本 · 工作目录 · Skill 依赖 · 协议理解</p></article><article><span className="mono">ENV × ENV</span><strong>这里能跑，不等于处处能跑</strong><p>Local / Container · Runtime · 字体 · 工具 · 网络 · 权限</p></article></div>
      <div className={"rf-pipeline " + (active >= 1 ? "is-visible" : "")}>{pipeline.map((item, index) => <article key={item}><i className="mono">{String(index + 1).padStart(2, "0")}</i><strong>{item}</strong>{item === "Verify" && <b>FAIL ↓<br />PASS →</b>}</article>)}<svg viewBox="0 0 650 92" aria-hidden="true"><path d="M420 20 C420 78 535 78 535 20"/><text x="448" y="86">FAILED → FIX → VERIFY AGAIN</text></svg></div>
      <div className={"rf-accountability " + (active >= 2 ? "is-visible" : "")}><span className="mono">AI-NATIVE ACCOUNTABILITY LOOP</span><article><b>HUMAN</b><strong>定义目标 · 权限边界 · 验收标准</strong></article><i>⇄</i><article><b>AI</b><strong>规划 · 执行 · 验证 · 修复 · 留证</strong></article><p>人给出意图与边界；AI 对执行、验证、失败修复和证据负责，结果再回到人验收。</p></div>
      <div className={"rf-delivery " + (active >= 3 ? "is-visible" : "")}><span className="mono">REPRODUCIBLE DELIVERY</span><div><b>Cross-Agent</b><b>Cross-Environment</b><b>Verifiable</b></div><section><article><i>01</i><strong>Skill Bundle</strong><small>主 Skill + 依赖 + lockfile</small></article><article><i>02</i><strong>Version Evidence</strong><small>manifest + checksum</small></article><article><i>03</i><strong>Test Evidence</strong><small>logs + smoke + E2E</small></article><article><i>04</i><strong>Result Samples</strong><small>review + payload + images</small></article></section></div>
    </div>
    <WorkflowStepRail current={7} />
  </section>;
}
