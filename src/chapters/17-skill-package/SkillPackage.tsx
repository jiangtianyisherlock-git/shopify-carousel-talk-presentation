import type { ChapterStepProps } from "../../registry/types";
import NarrativeChapter from "../../components/NarrativeChapter";
import "./SkillPackage.css";

const beats = [
  { code: "BUNDLE", title: "三个 Skill 一起交付", detail: "主 Skill + 两个依赖 Skill", meta: "COMPLETE PACKAGE" },
  { code: "EVIDENCE", title: "版本证据", detail: "Installer · README · Manifest · SHA-256", meta: "REPRODUCIBLE" },
  { code: "HUMAN", title: "review.html", detail: "预览、文案、排期、校验与 warnings", meta: "HUMAN FIRST" },
  { code: "MACHINE", title: "机器 Payload", detail: "TikTok · creative · asset · validation · schedule", meta: "SYSTEM READY" },
  { code: "REPLY", title: "Agent Reply Contract", detail: "标准结果优先，额外叙述在后", meta: "EXPECTED OUTPUT" },
];

export default function SkillPackage({ step }: ChapterStepProps) {
  return <NarrativeChapter step={step} kicker="SKILL PACKAGE" title="能在我的对话里跑，" accent="不等于别人拿走也能跑。" beats={beats} kind="document" rootClass="sp-scene" footer="可交付 · 可理解 · 可复现" />;
}
