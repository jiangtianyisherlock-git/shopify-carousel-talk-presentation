import type { ChapterStepProps } from "../../registry/types";
import "./FutureRoadmap.css";

const branches = [
  ["templates", "类目模板", "高表现素材特征", 2],
  ["quality", "质量调优", "构图 · 商品占比 · 卖点 · CTA", 3],
  ["video", "Video 生成", "脚本 · 镜头 · 渲染", 4],
  ["sources", "更多输入", "D2C 平台 · 普通官网", 5],
  ["industries", "更多行业", "律所 · 教培 · 本地服务", 6],
] as const;

export default function FutureRoadmap({ step }: ChapterStepProps) {
  const active = Math.min(step + 1, 7);
  return (
    <section className={`fr-scene fr-step-${active}`}>
      <header>
        <p className="mono">WHAT'S NEXT</p>
        <h1 className="serif-cn">每个模块，<br /><em>都可以独立迭代。</em></h1>
      </header>
      <div className="fr-board card">
        <svg viewBox="0 0 1080 700" aria-hidden="true">
          <path className={active >= 2 ? "is-visible" : ""} d="M540 350 C430 250 360 160 230 120" />
          <path className={active >= 3 ? "is-visible" : ""} d="M540 350 C430 330 340 330 190 350" />
          <path className={active >= 4 ? "is-visible" : ""} d="M540 350 C440 470 360 535 230 585" />
          <path className={active >= 5 ? "is-visible" : ""} d="M540 350 C660 250 760 160 880 120" />
          <path className={active >= 6 ? "is-visible" : ""} d="M540 350 C670 430 760 530 880 585" />
        </svg>
        <div className={`fr-core ${active >= 1 ? "is-visible" : ""}`}><span className="mono">STABLE INPUT / OUTPUT</span><strong>模块独立升级</strong><p>上层流程无需整体重做</p></div>
        {branches.map(([id, title, detail, threshold]) => (
          <article className={`fr-branch fr-branch--${id} ${active >= threshold ? "is-visible" : ""} ${active === threshold ? "is-current" : ""}`} key={id}>
            <strong>{title}</strong><p>{detail}</p>
          </article>
        ))}
      </div>
      {active >= 7 && (
        <div className="fr-method">
          {['经营资产', '结构化事实', '内容资产', '发布计划'].map((item, index) => <span key={item}>{item}{index < 3 && <i>→</i>}</span>)}
          <strong>可复用的 AI Native 方法</strong>
        </div>
      )}
    </section>
  );
}
