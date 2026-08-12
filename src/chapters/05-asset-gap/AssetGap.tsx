import type { ChapterStepProps } from "../../registry/types";
import "./AssetGap.css";

const focusCopy = [
  ["用户已有成熟经营资产", "官网 · 商品图 · 视频 · 卖点信息"],
  ["用户知道经营上下文", "产品定位 · 目标人群 · 经营目标"],
  ["平台知道内容规律", "方向 · 结构 · 叙事 · 元素 · 热点趋势"],
  ["缺的是中间的转换能力", "把用户已知与平台已知，映射成可执行内容计划"],
  ["目标是原生经营结果", "曝光 / VV · 互动 / 涨粉 · 原生转化"],
];

export default function AssetGap({ step }: ChapterStepProps) {
  void step;
  const active = focusCopy.length - 1;
  const focus = focusCopy[active]!;
  return (
    <section className={`ag-scene ag-active-${active}`}>
      <header className="ag-header">
        <p className="mono">SCENE ABSTRACTION · KNOWLEDGE GAP</p>
        <h1 className="serif-cn">两边都知道很多，<br /><em>缺的是中间这座桥。</em></h1>
      </header>

      <aside className="ag-focus">
        <span className="mono">CURRENT FOCUS · 0{active + 1}/05</span>
        <strong>{focus[0]}</strong>
        <p key={active}>{focus[1]}</p>
      </aside>

      <div className="ag-board card">
        <div className={`ag-dataflow ${active >= 3 ? "is-visible" : ""}`} aria-hidden="true"><span /><span /><span /></div>
        <svg className={`ag-flowmap ${active >= 3 ? "is-visible" : ""}`} viewBox="0 0 1000 820" aria-hidden="true">
          <path d="M250 330 C250 430 430 430 500 485" /><path d="M750 330 C750 430 570 430 500 485" />
          <path d="M500 560 C500 640 190 625 190 715" /><path d="M500 560 V715" /><path d="M500 560 C500 640 810 625 810 715" />
        </svg>
        <div className={`ag-knowledge ag-knowledge--merchant ${active >= 0 ? "is-visible" : ""}`}>
          <span className="mono">MERCHANT KNOWS</span>
          <strong>用户已有</strong>
          <div className={`ag-knowledge__group ${active === 0 ? "is-current" : ""}`}>
            <b>成熟经营资产</b><p>官网 · 商品图 / 视频<br />商品信息 · 卖点</p>
          </div>
          <div className={`ag-knowledge__group ${active >= 1 ? "is-visible" : ""} ${active === 1 ? "is-current" : ""}`}>
            <b>经营上下文</b><p>产品定位 · 目标人群<br />经营目标</p>
          </div>
        </div>

        <div className={`ag-knowledge ag-knowledge--platform ${active >= 2 ? "is-visible" : ""} ${active === 2 ? "is-current" : ""}`}>
          <span className="mono">PLATFORM KNOWS</span>
          <strong>平台已知</strong>
          <p>什么内容方向、结构、叙事和元素，在不同地区与类目下表现更好。</p>
          <div className="ag-platform__signals mono"><span>EXPOSURE</span><span>ENGAGEMENT</span><span>CONVERSION</span><span>TRENDS</span></div>
        </div>

        <div className={`ag-bridge ${active >= 3 ? "is-visible" : ""} ${active === 3 ? "is-current" : ""}`}>
          <span className="mono">THE MISSING BRIDGE</span>
          <strong>转换能力</strong>
          <p>WHAT · HOW · WHEN</p>
        </div>

        <div className={`ag-outcomes ${active >= 4 ? "is-visible" : ""}`}>
          <span><i /><small className="mono">01 · REACH</small><strong>曝光 · VV</strong></span>
          <span><i /><small className="mono">02 · GROWTH</small><strong>互动 · 涨粉</strong></span>
          <span><i /><small className="mono">03 · BUSINESS</small><strong>原生转化</strong></span>
        </div>
      </div>
    </section>
  );
}
