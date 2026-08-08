import type { ChapterStepProps } from "../../registry/types";
import WorkflowStepRail from "../../components/WorkflowStepRail";
import SectionTransition from "../../components/SectionTransition";
import "./AiNative.css";

const stages = [["01", "Demo", "先定义理想体验"], ["02", "UI Critic", "人 + AI 打磨"], ["03", "能力架构", "从体验反推能力"], ["04", "可行性", "开发前先验证"], ["05", "模块开发", "独立实现与测试"], ["06", "集成测试", "异步服务与 UAT"], ["07", "打包部署", "可运行版本与证据"], ["08", "复盘迭代", "可复现交付"]];

export default function AiNative({ step }: ChapterStepProps) {
  if (step === 0) return <SectionTransition eyebrow="CHAPTER 03 · FROM VISION TO DELIVERY" title="想清楚之后，" accent="如何真正落地？" note="从体验定义开始，把不确定性拆成可以验证和继承的步骤。" leftLabel="HIGH-LEVEL VISION" rightLabel="AI NATIVE DELIVERY" />;
  const active = Math.min(step - 1, 4);
  return <section className={`ain-scene ain-step-${active}`}>
    <header><p className="mono">AI NATIVE PRACTICE · E2E</p><h1 className="serif-cn">不是让 AI 做完一次开发，<br /><em>而是跑通一条完整工作流。</em></h1><span>每一步产生可继承的上下文与产物，下一步直接继续。</span></header>
    <div className="ain-map card">
      {stages.map(([code, title, detail], index) => <article className={index === 0 && active >= 2 ? "is-current" : active >= 1 ? "is-visible" : ""} style={{ "--ain-i": index } as React.CSSProperties} key={code}><i className="mono">{code}</i><strong>{title}</strong><span>{detail}</span></article>)}
      <div className={`ain-goal ${active >= 3 ? "is-visible" : ""}`}>
        <div className="ain-goal__title"><span className="mono">PROJECT GOAL</span><strong>交付两类完整产物</strong></div>
        <section className="ain-goal__deliverable ain-goal__deliverable--app">
          <span className="mono">DELIVERABLE · 01</span>
          <strong>一个完整的线上应用</strong>
          <p>从 Shopify URL 输入，到内容生成、计划与发布闭环</p>
        </section>
        <section className={`ain-goal__deliverable ain-goal__deliverable--skill ${active >= 4 ? "is-visible" : ""}`}>
          <span className="mono">DELIVERABLE · 02</span>
          <strong>一套可复用的底层能力 Skill</strong>
          <p>可独立调用、组合测试，并支持跨 Agent 环境交付</p>
        </section>
      </div>
    </div>
    <WorkflowStepRail current={0} />
  </section>;
}
