import "./UserProblemLesson.css";

const stages = [
  {
    no: "01",
    label: "HACKATHON · MCP",
    title: "先体验新能力",
    detail: "拿到题目与工具，第一反应是探索“它能做什么”。",
  },
  {
    no: "02",
    label: "FIRST TRY",
    title: "山寨版 TTAM",
    detail: "功能可以成立，但没有回答任何真实用户问题。",
  },
  {
    no: "03",
    label: "REFRAME",
    title: "回到用户问题",
    detail: "从不发文账号与商家访谈中，重新定义内容冷启难题。",
  },
  {
    no: "04",
    label: "REAL PROJECT",
    title: "Shopify → Carousel",
    detail: "把已有经营资产，转成可发布内容与完整发布计划。",
  },
] as const;

export default function UserProblemLesson() {
  return <section className="upl-scene">
    <header>
      <p className="mono">LESSON · USER PROBLEM FIRST</p>
      <h1 className="serif-cn">发现并解决用户问题，<br /><em>才是关键。</em></h1>
      <span>工具与速度只会放大方向；方向错了，做得越快，离价值越远。</span>
    </header>

    <div className="upl-board card">
      <div className="upl-context">
        <span className="mono">FROM TOOL EXPLORATION</span>
        <i>→</i>
        <span className="mono">TO PROBLEM SOLVING</span>
      </div>

      <div className="upl-journey">
        {stages.map((stage, index) => <article className={`upl-stage upl-stage--${index + 1}`} key={stage.no}>
          <div><i className="mono">{stage.no}</i><span className="mono">{stage.label}</span></div>
          <strong>{stage.title}</strong>
          <p>{stage.detail}</p>
          {index < stages.length - 1 && <b aria-hidden="true">→</b>}
        </article>)}
      </div>

      <div className="upl-turn">
        <span className="mono">THE TURNING POINT</span>
        <strong>从“我能用它做什么”，转向“用户为什么需要它”。</strong>
      </div>

      <div className="upl-result">
        <span className="mono">FUNCTION ≠ VALUE</span>
        <p>功能模仿只能证明技术可行；<br />具体、真实、值得解决的问题，才会产生产品价值。</p>
      </div>
    </div>
  </section>;
}
