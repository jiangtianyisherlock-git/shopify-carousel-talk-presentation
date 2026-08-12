import type { ChapterDef } from "./types";
import ColdOpen, { OpeningTheme } from "../chapters/01-coldopen/ColdOpen";
import { narrations as coldOpenNarrations, openingNarrations } from "../chapters/01-coldopen/narrations";
import Profile from "../chapters/02-profile/Profile";
import { narrations as profileNarrations } from "../chapters/02-profile/narrations";
import InactiveData from "../chapters/03-inactive-data/InactiveData";
import { narrations as inactiveDataNarrations } from "../chapters/03-inactive-data/narrations";
import MerchantVoice from "../chapters/04-merchant-voice/MerchantVoice";
import { narrations as merchantVoiceNarrations } from "../chapters/04-merchant-voice/narrations";
import AssetGap from "../chapters/05-asset-gap/AssetGap";
import { narrations as assetGapNarrations } from "../chapters/05-asset-gap/narrations";
import ProductIO from "../chapters/06-product-io/ProductIO";
import { narrations as productIONarrations } from "../chapters/06-product-io/narrations";
import DemoFlow from "../chapters/07-demo-flow/DemoFlow";
import { narrations as demoFlowNarrations } from "../chapters/07-demo-flow/narrations";
import AiNative from "../chapters/08-ai-native/AiNative";
import { narrations as aiNativeNarrations } from "../chapters/08-ai-native/narrations";
import MockLoop from "../chapters/10-mock-loop/MockLoop";
import { narrations as mockLoopNarrations } from "../chapters/10-mock-loop/narrations";
import Feasibility from "../chapters/11-feasibility/Feasibility";
import { narrations as feasibilityNarrations } from "../chapters/11-feasibility/narrations";
import ModularSkills from "../chapters/13-modular-skills/ModularSkills";
import { narrations as modularSkillsNarrations } from "../chapters/13-modular-skills/narrations";
import MultiAgentDevelopment from "../chapters/13a-multi-agent-development/MultiAgentDevelopment";
import { narrations as multiAgentDevelopmentNarrations } from "../chapters/13a-multi-agent-development/narrations";
import Architecture from "../chapters/14-architecture/Architecture";
import { narrations as architectureNarrations } from "../chapters/14-architecture/narrations";
import Integration from "../chapters/15-integration/Integration";
import { narrations as integrationNarrations } from "../chapters/15-integration/narrations";
import TestingUat from "../chapters/16-testing-uat/TestingUat";
import { narrations as testingUatNarrations } from "../chapters/16-testing-uat/narrations";
import Deployment from "../chapters/18-deployment/Deployment";
import { narrations as deploymentNarrations } from "../chapters/18-deployment/narrations";
import ReflectionTransition from "../chapters/19a-reflection-transition/ReflectionTransition";
import { narrations as reflectionTransitionNarrations } from "../chapters/19a-reflection-transition/narrations";
import UserProblemLesson from "../chapters/19b-user-problem-lesson/UserProblemLesson";
import { narrations as userProblemLessonNarrations } from "../chapters/19b-user-problem-lesson/narrations";
import FutureRoadmap from "../chapters/20-future-roadmap/FutureRoadmap";
import { narrations as futureRoadmapNarrations } from "../chapters/20-future-roadmap/narrations";

const IN_FRAME_REVEAL_MS = 4200;
const reveal = (sequenceStartStep = 0, throughStep?: number) => ({
  delayMs: IN_FRAME_REVEAL_MS,
  totalDurationMs: IN_FRAME_REVEAL_MS,
  sequenceStartStep,
  throughStep,
});

export const CHAPTERS: ChapterDef[] = [
  {
    id: "opening",
    title: "一个人如何用 AI Native 落地产品",
    narrations: openingNarrations,
    Component: OpeningTheme,
  },
  {
    id: "profile",
    title: "我的 AI 路径：从认知到技能",
    narrations: profileNarrations,
    Component: Profile,
  },
  {
    id: "inactive-data",
    title: "六成账号没有发文",
    narrations: inactiveDataNarrations,
    Component: InactiveData,
  },
  { id: "merchant-voice", title: "听听用户卡在哪里", narrations: merchantVoiceNarrations, Component: MerchantVoice, autoAdvance: reveal() },
  { id: "asset-gap", title: "两边都知道，缺一座转换桥", narrations: assetGapNarrations, Component: AssetGap, autoAdvance: reveal() },
  { id: "product-io", title: "经营托管终态与 MVP 闭环", narrations: productIONarrations, Component: ProductIO, autoAdvance: reveal() },
  { id: "coldopen", title: "High-level vision：一个 Shopify 链接", narrations: coldOpenNarrations, Component: ColdOpen },
  { id: "ai-native", title: "实践一条 E2E AI Native 工作流", narrations: aiNativeNarrations, Component: AiNative },
  // Auto-reveal the opening experience states, then hold before the document flow.
  // Every PRD → Demo reveal is manual; Critic starts in the next chapter.
  { id: "demo-flow", title: "从用户体验生成 MVP Demo", narrations: demoFlowNarrations, Component: DemoFlow, autoAdvance: reveal(0, 2) },
  // Keep the embedded Demo video on a manual page; only the critic board reveals in-frame.
  { id: "mock-loop", title: "Human + AI Design Critic", narrations: mockLoopNarrations, Component: MockLoop, autoAdvance: reveal(1) },
  { id: "feasibility", title: "先拆不确定性", narrations: feasibilityNarrations, Component: Feasibility, autoAdvance: reveal() },
  // Reveal the module chain automatically, then hold before the full-screen Demo overlay.
  { id: "modular-skills", title: "三个 Skill，一条流水线", narrations: modularSkillsNarrations, Component: ModularSkills, autoAdvance: reveal(0, 3) },
  { id: "multi-agent-development", title: "六个 Agent 按边界协作", narrations: multiAgentDevelopmentNarrations, Component: MultiAgentDevelopment, autoAdvance: reveal() },
  { id: "integration", title: "模块完成后再串联", narrations: integrationNarrations, Component: Integration, autoAdvance: reveal() },
  { id: "architecture", title: "能力模块如何协同", narrations: architectureNarrations, Component: Architecture, autoAdvance: reveal() },
  { id: "testing-uat", title: "从回归到真实商家", narrations: testingUatNarrations, Component: TestingUat, autoAdvance: reveal() },
  { id: "deployment", title: "本地能跑不等于线上能跑", narrations: deploymentNarrations, Component: Deployment, autoAdvance: reveal() },
  { id: "reflection-transition", title: "说说心得和后续计划", narrations: reflectionTransitionNarrations, Component: ReflectionTransition },
  { id: "future-roadmap", title: "每个模块都可以独立迭代", narrations: futureRoadmapNarrations, Component: FutureRoadmap, autoAdvance: reveal() },
  { id: "user-problem-lesson", title: "用户问题才是起点", narrations: userProblemLessonNarrations, Component: UserProblemLesson },
];
