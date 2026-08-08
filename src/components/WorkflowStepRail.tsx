import "./WorkflowStepRail.css";

const steps = [
  ["Demo", "体验蓝图"], ["UI Critic", "可继承 Demo"], ["能力架构", "模块边界"], ["可行性", "能力证据"],
  ["模块开发", "结构化产物"], ["集成测试", "E2E 结果"], ["打包部署", "可运行版本"], ["复盘迭代", "可复现交付"],
];

export default function WorkflowStepRail({ current }: { current: number }) {
  return <nav className="wf-rail" aria-label="AI Native workflow steps">{steps.map(([label, artifact], index) => <span className={index === current ? "is-current" : index < current ? "is-done" : ""} key={label}><i className="mono">{String(index + 1).padStart(2, "0")}</i><b>{label}</b><small>{index === current ? `当前 · ${artifact}` : index === current - 1 ? `上一步产物 · ${artifact}` : index === current + 1 ? `下一步目标 · ${artifact}` : artifact}</small></span>)}</nav>;
}
