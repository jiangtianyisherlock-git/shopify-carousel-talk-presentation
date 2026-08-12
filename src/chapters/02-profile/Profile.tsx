import type { ChapterStepProps } from "../../registry/types";
import SectionTransition from "../../components/SectionTransition";
import "./Profile.css";

const career = [
  ["同济", "运筹 · 仿真"], ["康奈尔", "系统工程 · ML"], ["PwC", "数字化 · 自动化"],
  ["飞书", "产品"], ["抖音商业化", "MagicCut"], ["TikTok GMPT", "Business Account"],
];

function CareerRail({ active }: { active: number }) {
  return <div className="pf-career"><span className="mono">BACKGROUND · CAREER TRACK</span><div>{career.map(([title, detail], index) => <article className={index === active ? "is-current" : ""} style={{ "--career-i": index } as React.CSSProperties} key={title}><i /><strong>{title}</strong><small>{detail}</small></article>)}</div></div>;
}

function CaseFrame({ code, title, accent, note, children }: { code: string; title: string; accent: string; note: string; children: React.ReactNode }) {
  return <section className="pf-scene pf-case"><header><p className="mono">{code}</p><h1 className="serif-cn">{title}<br /><em>{accent}</em></h1><span>{note}</span></header><div className="pf-case__visual card">{children}</div></section>;
}

function OcrVisual() {
  const cells = "111110001110000100011110".split("");
  return <div className="pf-ocr"><div className="pf-ocr__scan"><div>{cells.map((cell, index) => <i className={cell === "1" ? "on" : ""} key={index} />)}</div><span /></div><div className="pf-ocr__features mono">PIXEL FEATURES<br />EDGE · DENSITY · ZONE</div><div className="pf-ocr__boundary"><span className="mono">SVC</span><strong>分类边界</strong></div><div className="pf-ocr__result hero-num">5</div></div>;
}

function RpaVisual() {
  const nodes = [["01", "Month-end", "扫描 Email"], ["02", "Invoice / Receipt", "OCR 提取"], ["03", "ERP", "自动录入"], ["04", "AP / AR", "完成入账"]];
  return <div className="pf-rpa"><div>{nodes.map(([num, title, detail], index) => <div className="pf-rpa__unit" style={{ "--rpa-i": index } as React.CSSProperties} key={num}><article><i className="serif-it">{num}</i><strong>{title}</strong><span>{detail}</span></article>{index < nodes.length - 1 && <b aria-hidden="true">→</b>}</div>)}</div><p><span className="mono">RPA WORKFLOW</span><strong>把 Accountant 从重复录入中释放出来</strong></p></div>;
}

function GridModelVisual() {
  const candidates = ["MODEL A", "MODEL B", "MODEL C"];
  return <div className="pf-dl">
    <div className="pf-dl__source"><span className="mono">NATIONAL GRID</span><strong>设备数据流</strong><small>时序 · 状态 · 标签</small></div>
    <div className="pf-dl__split"><span className="mono">DATASET</span><strong>Train · Val · Test</strong><small>清洗 · 切分</small></div>
    <div className="pf-dl__models"><span className="mono">MULTI-MODEL</span>{candidates.map((item) => <i key={item}>{item}</i>)}<small>训练 · 调参 · 测试</small></div>
    <div className="pf-dl__compare"><span className="mono">COMPARE</span><strong>指标对比</strong><small>准确性 · 稳定性 · 成本</small></div>
    <div className="pf-dl__select"><span className="mono">SELECT</span><strong>最佳模型</strong><small>版本化 · 回滚</small></div>
    <div className="pf-dl__workflow"><span className="mono">WORKFLOW</span><strong>Anomaly detection</strong><strong>Defect classification</strong><small>识别 → 预测 → 处置</small></div>
  </div>;
}

function MagicCloud({ compact = false, children }: { compact?: boolean; children: React.ReactNode }) {
  return <strong className={`pf-magic__cloud ${compact ? "pf-magic__cloud--small" : ""}`}>
    <svg viewBox="0 0 550 160" aria-hidden="true" preserveAspectRatio="none">
      <path d="M93 137C55 137 30 118 34 91c4-25 29-42 61-40 12-27 47-41 80-29 24-20 63-19 86 3 29-20 73-15 91 12 31-18 74-8 87 21 38-5 72 15 76 43 3 23-22 38-57 38H93Z" />
    </svg>
    <span>{children}</span>
  </strong>;
}

function MagicCutScene() {
  const arrow = <i className="pf-magic__arrow">→</i>;
  return <section className="pf-scene pf-magic pf-magic--2">
    <header className="pf-magic__header">
      <p className="mono">AI CASE · 04 / MAGICCUT</p>
      <h1 className="serif-cn">从商家经营资产，<em>到可投放 AIGC 成片。</em></h1>
      <span>0→1 抖音商业化 AIGC 一键成片工具 MagicCut</span>
    </header>
    <div className="pf-magic__diagram card">
      <div className="pf-magic__vision-row">
        <div className="pf-magic__row-label"><strong>终态愿景</strong></div>
        <article>用户定义人、货、场</article>{arrow}
        <MagicCloud>MagicCut<small>批量成片并自动投放</small></MagicCloud>{arrow}
        <article>商品成交</article>
      </div>

      <div className="pf-magic__current-row is-visible">
        <div className="pf-magic__row-label"><strong>现阶段主流程</strong><small>中短期必要</small></div>
        <article>用户定义人、货、场</article>{arrow}<article>上传原始视频素材</article>{arrow}
        <MagicCloud compact>MagicCut<small>批量成片</small></MagicCloud>{arrow}
        <article>选择满意的成片</article>{arrow}<article>投放</article>{arrow}<article>商品成交</article>
      </div>

      <div className="pf-magic__branches is-visible">
        <div className="pf-magic__row-label"><strong>分支流程</strong><small>非必要</small></div>
        <div className="pf-magic__module"><span>需要自主输入信息</span><strong>基础信息自定义</strong><i>卖点输入</i><i>营销节点</i><i>脚本文案</i></div>
        <div className="pf-magic__module"><span>原始素材不足</span><strong>素材资产中心</strong><i>自有资产</i><i>平台版权、采购资产</i><i>AIGC/派生素材</i></div>
        <div className="pf-magic__module"><span>需要自定义生产</span><strong>策略控制台</strong><i>文案预览/采购</i><i>脚本模板预览/采购</i><i>生产策略配比</i></div>
        <div className="pf-magic__module"><span>成片单点微调</span><strong>微量编辑器</strong><i>风格、元素微调</i><i>话术、调性微调</i><i>自然语言反馈</i></div>
        <div className="pf-magic__editor-link"><span>需要更大<br />自由度编辑</span><b>→</b><article>编辑器产品<br />（剪映）</article></div>
      </div>

      <div className="pf-magic__braces is-visible">
        <span>使用转化率</span><span>成片采纳率</span><span>投放效果</span>
      </div>
    </div>
  </section>;
}

function EvolutionScene() {
  const stages = [["ML", "识别"], ["DL", "预测"], ["LLM", "理解与生成"], ["AGENT", "执行任务"], ["CODING AGENT", "构建产品"]];
  const loop = [["IDEATION", "业务问题"], ["DESIGN", "PRD · Demo"], ["BUILD", "开发 · 测试"], ["LAUNCH", "部署 · 上线"]];
  return <section className="pf-scene pf-evolution"><header><p className="mono">FROM COGNITION TO SKILL</p><h1 className="serif-cn">模型从“认知”走向“技能”，<br /><em>Coding Agent 把技能接入产品生产。</em></h1></header><div className="pf-evolution__bands"><span>认知 · COGNITION</span><span>技能 · SKILL</span></div><div className="pf-evolution__track">{stages.map(([code, label], index) => <article key={code}><i className="mono">0{index + 1}</i><strong>{code}</strong><span>{label}</span></article>)}</div><div className="pf-evolution__loop">{loop.map(([code, label]) => <article key={code}><small className="mono">{code}</small><strong>{label}</strong></article>)}</div></section>;
}

export default function Profile({ step }: ChapterStepProps) {
  if (step === 0) return <SectionTransition eyebrow="CHAPTER 01 · THE PERSON" title="先看看，" accent="这个人有什么。" note="履历是背景，AI 与模型经历才是接下来要讲的主线。" leftLabel="ONE PERSON" rightLabel="AI EXPERIENCE" />;
  const contentStep = step - 1;
  const activeCareer = contentStep === 0 ? 1 : contentStep <= 2 ? 2 : contentStep === 3 ? 4 : 5;
  let scene: React.ReactNode = null;
  if (contentStep === 0) scene = <CaseFrame code="AI CASE · 01 / SVC + OCR" title="早期用 SVC，" accent="低成本手搓 OCR。" note="先把一个边界清楚的识别问题，做成具体、可交付的能力。"><OcrVisual /></CaseFrame>;
  else if (contentStep === 1) scene = <CaseFrame code="AI CASE · 02 / RPA WORKFLOW" title="从识别一张票据，" accent="走到财务流程自动化。" note="Month-end 自动扫描、识别、录入与入账，直接降低重复人工成本。"><RpaVisual /></CaseFrame>;
  else if (contentStep === 2) scene = <CaseFrame code="AI CASE · 03 / DEEP LEARNING" title="多模型训练与选择，" accent="最后接入业务 Workflow。" note="National Grid 设备数据：不止训练模型，还要调参、测试、比较与上线。"><GridModelVisual /></CaseFrame>;
  else if (contentStep === 3) scene = <MagicCutScene />;
  else if (contentStep === 4) scene = <EvolutionScene />;
  return <>{scene}{contentStep !== 3 && <CareerRail active={activeCareer} />}</>;
}
