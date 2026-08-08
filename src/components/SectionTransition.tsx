import "./SectionTransition.css";

interface SectionTransitionProps {
  eyebrow: string;
  title: string;
  accent: string;
  note: string;
  leftLabel: string;
  rightLabel: string;
}

export default function SectionTransition({ eyebrow, title, accent, note, leftLabel, rightLabel }: SectionTransitionProps) {
  return <section className="section-transition">
    <div className="section-transition__side section-transition__side--left"><span className="mono">{leftLabel}</span><i /></div>
    <div className="section-transition__side section-transition__side--right"><span className="mono">{rightLabel}</span><i /></div>
    <div className="section-transition__copy">
      <p className="mono">{eyebrow}</p>
      <h1 className="serif-cn">{title}<br /><em>{accent}</em></h1>
      <div />
      <span>{note}</span>
    </div>
  </section>;
}
