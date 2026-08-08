import type { ChapterStepProps } from "../../registry/types";
import "./ColdOpen.css";

const productScreen = (filename: string) => `${import.meta.env.BASE_URL}assets/product-screens/${filename}`;

const pipeline = [
  ["01", "商品事实", "PRODUCT FACTS"],
  ["02", "Carousel Variance", "VISUAL OPTIONS"],
  ["03", "Caption · Hashtags", "TONE & SELLING POINT"],
  ["04", "发布时间与节奏", "REGION · CATEGORY · AUDIENCE"],
];

function UrlCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`cd-url card ${compact ? "cd-url--compact" : ""}`}>
      <span className="cd-url__protocol mono">https://</span>
      <span className="cd-url__value mono">hiutdenim.co.uk/products/denim-revival-spray</span>
      {!compact && <span className="cd-url__caret" aria-hidden="true" />}
    </div>
  );
}

function StepZero() {
  return (
    <section className="cd-scene cd-zero">
      <div className="cd-zero__copy">
        <p className="cd-kicker mono">ONE PUBLIC LINK</p>
        <h1 className="serif-cn">给系统一个<br /><em>Shopify 链接。</em></h1>
      </div>
      <UrlCard />
    </section>
  );
}

function ProductFacts() {
  return (
    <div className="cd-shot cd-shot--product">
      <img src={productScreen("01-product-import.png")} alt="Imported Shopify product facts and media" />
      <aside>
        <span className="mono">01 · VERIFIED INPUT</span>
        <strong className="serif-cn">先确认，<br />系统拿到了什么。</strong>
        <p>商品名与价格<br />描述与核心卖点<br />图片 / 视频资产<br />来源与质量检查</p>
      </aside>
    </div>
  );
}

function CarouselVariance() {
  return (
    <div className="cd-shot cd-shot--carousel">
      <img src={productScreen("02-carousel-preview.png")} alt="TikTok native carousel preview" />
      <aside>
        <span className="mono">02 · PREVIEW READY</span>
        <strong className="serif-cn">不是抽象结果，<br />直接在原生场景预览。</strong>
        <p>Lifestyle Hook<br />Detail Story<br />Gift Angle</p>
      </aside>
    </div>
  );
}

function CaptionOutput() {
  return (
    <div className="cd-shot cd-shot--caption">
      <img src={productScreen("03-caption-variance.png")} alt="Generated carousel variance, caption and hashtags" />
      <aside>
        <span className="mono">03 · GENERATED COPY</span>
        <strong className="serif-cn">每个创意角度，<br />都有匹配文案。</strong>
        <p>店铺调性 × 商品卖点<br />价格语境 × 目标人群<br />Caption × Hashtags</p>
      </aside>
    </div>
  );
}

function ScheduleOutput() {
  return (
    <div className="cd-shot cd-shot--schedule">
      <img src={productScreen("04-publish-options.png")} alt="Recommended TikTok publishing schedule" />
      <aside>
        <span className="mono">04 · SCHEDULE READY</span>
        <strong className="serif-cn">系统生成未来一周，<br />可直接确认的发布计划。</strong>
        <p>账号地区 × 商品类目 × 目标人群<br />发布时间 × 发布频次<br />Caption × Hashtags</p>
      </aside>
    </div>
  );
}

function PipelineScene({ active }: { active: number }) {
  const titles = [
    ["先把网页，", "变成可信商品事实。"],
    ["再把商品，", "变成可预览的 Carousel。"],
    ["同一份事实，", "生成文案与 Hashtags。"],
    ["最后生成，", "未来一周发布计划。"],
  ];
  return (
    <section className={`cd-scene cd-pipeline cd-pipeline--${active}`}>
      <header className="cd-pipeline__header">
        <p className="mono">SHOPIFY → TIKTOK · 0{active}/04</p>
        <h1 className="serif-cn">{titles[active - 1][0]}<br /><span>{titles[active - 1][1]}</span></h1>
      </header>
      <div className="cd-pipeline__rail">
        {pipeline.map(([num, title, meta], index) => (
          <div className={`${index + 1 <= active ? "is-visible" : ""} ${index + 1 === active ? "is-current" : ""}`} key={num}>
            <i className="serif-it">{num}</i><strong>{title}</strong><span className="mono">{meta}</span>
          </div>
        ))}
      </div>
      <div className="cd-pipeline__visual">
        {active === 1 && <ProductFacts />}
        {active === 2 && <CarouselVariance />}
        {active === 3 && <CaptionOutput />}
        {active === 4 && <ScheduleOutput />}
      </div>
    </section>
  );
}

export function OpeningTheme() {
  return (
    <section className="cd-scene cd-three">
      <div className="cd-collapse cd-collapse--left"><span className="mono">ONE PERSON</span><div className="rule" /></div>
      <div className="cd-collapse cd-collapse--right"><span className="mono">AI NATIVE WORKFLOW</span><div className="rule" /></div>
      <div className="cd-three__question">
        <p className="mono">A PRACTICE, NOT A CONCEPT</p>
        <h1 className="serif-cn">一个人，如何用 AI Native<br /><em>做出可上线产品？</em></h1>
        <div className="cd-three__rule" />
        <span>一次从业务问题、产品设计到开发测试与上线闭环的实践分享。</span>
      </div>
    </section>
  );
}

export default function ColdOpen({ step }: ChapterStepProps) {
  if (step === 0) return <StepZero />;
  if (step === 1) return <PipelineScene active={1} />;
  if (step === 2) return <PipelineScene active={2} />;
  if (step === 3) return <PipelineScene active={3} />;
  if (step === 4) return <PipelineScene active={4} />;
  return null;
}
