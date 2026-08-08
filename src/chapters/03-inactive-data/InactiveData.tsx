import type { CSSProperties } from "react";
import type { ChapterStepProps } from "../../registry/types";
import SectionTransition from "../../components/SectionTransition";
import "./InactiveData.css";

const BA = { total: 61_579_175, noPublish30d: 37_084_375, rate: 60.22, website: 4_381_265 };
const VBA = { total: 3_692_199, noPublish30d: 2_572_488, rate: 69.67, website: 1_233_972, websiteShare: 47.97 };

function SourceCue() {
  return <div className="id-source mono">SOURCE · BA / vBA PUBLISHING WINDOW · 30D</div>;
}

function StepZero() {
  return (
    <section className="id-scene id-zero">
      <SourceCue />
      <header>
        <p className="mono">OBJECTIVE DATA · BUSINESS ACCOUNT</p>
        <h1 className="serif-cn">先看账号池，<br />再看<span>沉默的部分。</span></h1>
      </header>
      <div className="id-area">
        <div className="id-area__total card">
          <div className="id-area__meta"><span>BA TOTAL</span><strong>61,579,175</strong></div>
          <div className="id-area__inactive" style={{ "--share": `${BA.rate}%` } as CSSProperties}>
            <span className="mono">NO PUBLISH · 30D</span>
            <strong>37,084,375</strong>
          </div>
        </div>
        <aside>
          <span className="serif-it">01</span>
          <p>未发文账号不是边缘集合，<br />它占据了账号池的大部分。</p>
        </aside>
      </div>
    </section>
  );
}

function StepOne() {
  return (
    <section className="id-scene id-one">
      <SourceCue />
      <div className="id-one__number hero-num">60.22<span>%</span></div>
      <div className="id-one__copy">
        <p className="mono">BA · NO PUBLISH · 30 DAYS</p>
        <h1 className="serif-cn">每十个账号，<br /><em>约六个没有发文。</em></h1>
        <div className="id-scale"><i style={{ "--share": `${BA.rate}%` } as CSSProperties} /></div>
        <span>37,084,375 / 61,579,175 accounts</span>
      </div>
    </section>
  );
}

function StepTwo() {
  const webShare = (BA.website / BA.noPublish30d) * 100;
  return (
    <section className="id-scene id-two">
      <SourceCue />
      <header>
        <p className="mono">AN ASSET SIGNAL INSIDE THE SILENCE</p>
        <h1 className="serif-cn">但其中，<br /><span>438 万</span>已有网站链接。</h1>
      </header>
      <div className="id-nested card">
        <div className="id-nested__inactive">
          <p className="mono">37,084,375 · NO PUBLISH</p>
          <div className="id-nested__web" style={{ "--share": `${webShare}%` } as CSSProperties}>
            <span className="mono">WEBSITE LINK</span>
            <strong>4,381,265</strong>
          </div>
        </div>
        <div className="id-nested__legend">
          <strong className="serif-it">11.81%</strong>
          <span>未发文 BA 中<br />已有 website link</span>
        </div>
      </div>
      <p className="id-two__note">他们并非完全没有经营阵地；经营资产只是还没有变成 TikTok 内容。</p>
    </section>
  );
}

function StepThree() {
  return (
    <section className="id-scene id-three">
      <SourceCue />
      <header>
        <p className="mono">VERIFIED BUSINESS ACCOUNT</p>
        <h1 className="serif-cn">vBA 的信号，<span>更明显。</span></h1>
      </header>
      <div className="id-compare">
        <article className="id-stat card">
          <span className="mono">NO PUBLISH · 30D</span>
          <strong className="hero-num">69.67%</strong>
          <div className="id-stat__bar"><i style={{ "--share": `${VBA.rate}%` } as CSSProperties} /></div>
          <p>{VBA.noPublish30d.toLocaleString()} / {VBA.total.toLocaleString()}</p>
        </article>
        <article className="id-stat card">
          <span className="mono">WEBSITE LINK · WITHIN NO PUBLISH</span>
          <strong className="hero-num">47.97%</strong>
          <div className="id-stat__bar"><i style={{ "--share": `${VBA.websiteShare}%` } as CSSProperties} /></div>
          <p>{VBA.website.toLocaleString()} accounts</p>
        </article>
      </div>
    </section>
  );
}

function StepFour() {
  return (
    <section className="id-scene id-four">
      <SourceCue />
      <div className="id-evidence">
        <div><strong>60.22%</strong><span>BA 未发文</span></div>
        <div><strong>438 万</strong><span>已有 website link</span></div>
        <div><strong>69.67%</strong><span>vBA 未发文</span></div>
      </div>
      <div className="id-four__statement">
        <p className="mono">FROM DATA TO USER VOICE</p>
        <h1 className="serif-cn">下一步，<br /><span>听听用户怎么说。</span></h1>
        <div className="id-four__line" />
        <p>数据说明“发生了什么”；商家访谈，补上“为什么”。</p>
      </div>
    </section>
  );
}

export default function InactiveData({ step }: ChapterStepProps) {
  if (step === 0) return <SectionTransition eyebrow="CHAPTER 02 · DEFINE THE PROBLEM" title="先定义问题，" accent="第一步看看客观数据。" note="先确认问题有多大，再判断机会在哪里。" leftLabel="BUSINESS QUESTION" rightLabel="OBJECTIVE DATA" />;
  if (step === 1) return <StepZero />;
  if (step === 2) return <StepOne />;
  if (step === 3) return <StepTwo />;
  if (step === 4) return <StepThree />;
  if (step === 5) return <StepFour />;
  return null;
}
