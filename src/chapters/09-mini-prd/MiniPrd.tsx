import type { ChapterStepProps } from "../../registry/types";
import NarrativeChapter from "../../components/NarrativeChapter";
import "./MiniPrd.css";

const beats = [
  { code: "VISION", title: "一句 Vision", detail: "连接 Shopify，把经营资产变成 TikTok 内容", meta: "ONE SENTENCE" },
  { code: "CONTEXT", title: "业务材料汇入", detail: "用户、场景、约束与既有证据", meta: "READ BEFORE WRITE" },
  { code: "SKELETON", title: "决策骨架", detail: "范围 · 风险 · 指标 · Roadmap · DoD", meta: "REVIEWABLE" },
  { code: "875 → 559", title: "压缩三分之一", detail: "正文只保留需要共同决策的信息", meta: "EDIT, NOT EXPAND" },
  { code: "APPENDIX", title: "细节分层", detail: "页面、埋点、实验与非功能要求进入附录", meta: "ONE SOURCE OF TRUTH" },
];

export default function MiniPrd({ step }: ChapterStepProps) {
  return <NarrativeChapter step={step} kicker="MINI PRD" title="从一句 Vision，" accent="走到可验收产品。" beats={beats} kind="document" rootClass="mprd-scene" footer="每次修改，沿着上一次决策继续" />;
}
