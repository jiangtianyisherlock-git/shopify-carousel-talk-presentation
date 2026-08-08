import "./NarrativeChapter.css";

export type NarrativeBeat = {
  code: string;
  title: string;
  detail: string;
  meta?: string;
};

type Props = {
  step: number;
  kicker: string;
  title: string;
  accent: string;
  beats: NarrativeBeat[];
  kind: "flow" | "split" | "document" | "matrix" | "ladder" | "loop" | "deploy" | "evidence";
  rootClass: string;
  footer?: string;
};

export default function NarrativeChapter({ step, kicker, title, accent, beats, kind, rootClass, footer }: Props) {
  const active = Math.min(step, beats.length - 1);
  const current = beats[active]!;
  return (
    <section className={`nc-scene nc-kind-${kind} nc-active-${active} ${rootClass}`}>
      <header className="nc-header">
        <p className="mono">{kicker}</p>
        <h1 className="serif-cn">{title}<br /><em>{accent}</em></h1>
      </header>

      <div className="nc-visual card">
        <div className="nc-visual__spine" />
        <div className="nc-beats">
          {beats.map((beat, index) => (
            <article
              className={`nc-beat ${index <= active ? "is-visible" : ""} ${index === active ? "is-current" : ""}`}
              style={{ "--i": index, "--count": beats.length } as React.CSSProperties}
              key={beat.code}
            >
              <i className="mono">{beat.code}</i>
              <strong>{beat.title}</strong>
              <span>{beat.detail}</span>
              {beat.meta && <small className="mono">{beat.meta}</small>}
            </article>
          ))}
        </div>
      </div>

      <aside className="nc-focus">
        <span className="mono">CURRENT FOCUS</span>
        <strong>{current.title}</strong>
        <p>{current.detail}</p>
        {footer && <span className="nc-focus__context">{footer}</span>}
      </aside>
    </section>
  );
}
