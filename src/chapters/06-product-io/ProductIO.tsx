import type { ChapterStepProps } from "../../registry/types";
import "./ProductIO.css";

const outcomes = [
  { code: "VV", title: "曝光", detail: "持续获得原生流量" },
  { code: "ENG", title: "互动", detail: "评论 · 关注 · 涨粉" },
  { code: "CVR", title: "转化", detail: "承接原生经营结果" },
];

const loop = [
  ["资产置入", "Shopify 商品与素材"],
  ["内容生成", "Carousel · Caption"],
  ["计划编排", "时间 · 频次 · Hashtag"],
  ["发布闭环", "确认 · 发布 · 持续经营"],
];

export default function ProductIO({ step }: ChapterStepProps) {
  void step;
  const active = 4;
  return (
    <section className={`pio-scene pio-step-${active}`}>
      <header className="pio-header">
        <p className="mono">PRODUCT VISION → MVP</p>
        <h1 className="serif-cn">终态是经营托管，<br /><em>MVP 从一个闭环开始。</em></h1>
      </header>

      <div className="pio-vision card">
        <div className="pio-inputs is-visible">
          <span className="mono">USER INPUT</span>
          <div className="pio-input-card"><i className="mono">01</i><strong>已有经营资产</strong><p>商品 · 图片 · 卖点 · 价格</p></div>
          <div className="pio-input-card"><i className="mono">02</i><strong>引导表达目标</strong><p>想卖什么 · 卖给谁 · 要什么结果</p></div>
        </div>

        <div className={`pio-managed ${active >= 1 ? "is-visible" : ""}`}>
          <span className="mono">MANAGED OPERATION</span>
          <strong>系统消化复杂度</strong>
          <div className="pio-orbit" aria-hidden="true"><i /><i /><i /></div>
          <p>内容方向 · 创意生产 · 发布节奏 · 持续优化</p>
        </div>

        <div className={`pio-outcomes ${active >= 2 ? "is-visible" : ""}`}>
          <span className="mono">BUSINESS OUTCOME</span>
          <div>{outcomes.map((item) => <article key={item.code}><i className="mono">{item.code}</i><strong>{item.title}</strong><p>{item.detail}</p></article>)}</div>
        </div>
      </div>

      <div className={`pio-mvp ${active >= 3 ? "is-visible" : ""}`}>
        <div className="pio-mvp__scope">
          <span className="mono">SCOPE · 聚焦</span>
          <strong>一个用户 × 一类资产 × 一个场景</strong>
          <div className="pio-mvp__ones">
            <article><i className="hero-num">1</i><div><b>用户</b><p>OLE Shopify 商家</p></div></article>
            <article><i className="hero-num">1</i><div><b>资产</b><p>商品素材 · 卖点详情 · 价格折扣</p></div></article>
            <article><i className="hero-num">1</i><div><b>场景</b><p>内容经营冷启</p></div></article>
          </div>
        </div>
        <div className={`pio-mvp__loop ${active >= 4 ? "is-visible" : ""}`}>
          <span className="mono">E2E · 场景闭环</span>
          <strong>从经营资产置入，到内容发布完成</strong>
          <div>{loop.map(([title, detail], index) => <article key={title}><i className="mono">0{index + 1}</i><strong>{title}</strong><p>{detail}</p></article>)}</div>
        </div>
      </div>
    </section>
  );
}
