import type { ChapterStepProps } from "../../registry/types";
import NarrativeChapter from "../../components/NarrativeChapter";
import WorkflowStepRail from "../../components/WorkflowStepRail";
import "./TestingUat.css";

const beats = [
  { code: "REGRESSION", title: "回归与负向用例", detail: "非 Shopify URL · 重复图片 · 虚构折扣 · 错误 CTA", meta: "FAILURE FIRST" },
  { code: "SMOKE 01", title: "Pura Vida", detail: "常规 Shopify 店铺 smoke test", meta: "STANDARD STORE" },
  { code: "SMOKE 02", title: "Hiut Denim", detail: "Hydrogen / Headless fallback", meta: "HEADLESS" },
  { code: "E2E", title: "12 → 7", detail: "12 张媒体 · 1 个 package · 7 张 slides", meta: "REAL OUTPUT" },
  { code: "FIXTURE", title: "问题写回回归", detail: "jewelry 误判 → fashion_apparel taxonomy", meta: "LEARN ONCE" },
];

export default function TestingUat({ step }: ChapterStepProps) {
  return <><NarrativeChapter step={step} kicker="STEP 06 · TESTING & UAT" title="真实店铺，" accent="才会暴露真实问题。" beats={beats} kind="evidence" rootClass="tu-scene" footer="fixture → smoke → E2E → regression" /><WorkflowStepRail current={5} /></>;
}
