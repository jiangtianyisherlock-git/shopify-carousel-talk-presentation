import type { ChapterStepProps } from "../../registry/types";
import "./MerchantVoice.css";

const pains = [
  { code: "01", title: "创意从哪里来？", quote: "我不知道该创作什么内容，也经常没有灵感。", tag: "DIRECTION · INSPIRATION" },
  { code: "02", title: "什么适合 TikTok？", quote: "我不知道什么内容方向、结构和表达，更容易在 TikTok 获得流量。", tag: "TIKTOK NATIVE" },
  { code: "03", title: "什么时候发？", quote: "我不知道什么时间、什么频率发布，才能获得更多曝光。", tag: "TIME · CADENCE" },
  { code: "04", title: "怎么持续生产？", quote: "做一条不难，但持续做内容，制作成本太高。", tag: "PRODUCTION COST" },
  { code: "05", title: "怎么测试和优化？", quote: "每个方向都要反复试，测试和优化的成本也很高。", tag: "TEST · LEARN · ITERATE" },
];

function ListeningWave({ active }: { active: number }) {
  return (
    <div className="mv-recorder" aria-label="User interview recording waveform">
      <div className="mv-recorder__status"><span><i /> REC</span><b className="mono">00:0{active + 3}</b></div>
      <div className="mv-wave">
        {Array.from({ length: 42 }, (_, index) => (
          <i style={{ "--i": index, "--h": 14 + ((index * 5 + active * 3) % 8) * 6 } as React.CSSProperties} key={index} />
        ))}
        <span className="mv-wave__playhead" />
      </div>
    </div>
  );
}

export default function MerchantVoice({ step }: ChapterStepProps) {
  const active = Math.min(step, pains.length - 1);
  const current = pains[active]!;
  return (
    <section className={`mv-scene mv-active-${active}`}>
      <header className="mv-header">
        <p className="mono">MERCHANT VOICE · LISTEN FIRST</p>
        <h1 className="serif-cn">先不急着定义方案，<br /><em>听听用户卡在哪里。</em></h1>
      </header>

      <div className="mv-quote">
        <span className="mono">INTERVIEW EXCERPT · 0{active + 1}/05</span>
        <blockquote className="serif-cn" key={current.code}>“{current.quote}”</blockquote>
        <ListeningWave active={active} />
        <p className="mono">MERCHANTS OPERATING VIA GOOGLE · META · D2C</p>
      </div>

      <div className="mv-painmap card">
        <p className="mono">PAIN MAP · FROM START TO SUSTAIN</p>
        <div className="mv-painmap__line" />
        {pains.map((pain, index) => (
          <article className={`${index <= active ? "is-visible" : ""} ${index === active ? "is-current" : ""}`} key={pain.code}>
            <i className="serif-it">{pain.code}</i>
            <strong>{pain.title}</strong>
            <span className="mono">{pain.tag}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
