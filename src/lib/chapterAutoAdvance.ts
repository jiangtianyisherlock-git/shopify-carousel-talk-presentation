import type { ChapterDef } from "../registry/types";

export function getChapterAutoAdvanceDelay(
  chapter: ChapterDef,
  step: number,
  playbackModeActive: boolean,
): number | null {
  const config = chapter.autoAdvance;
  if (!config || playbackModeActive) return null;
  const lastInternalStep = chapter.narrations.length - 2;
  const throughStep = Math.min(config.throughStep ?? lastInternalStep, lastInternalStep);
  const sequenceStartStep = Math.max(0, config.sequenceStartStep ?? 0);
  if (step < sequenceStartStep || step > throughStep) return null;
  if (config.excludedSteps?.includes(step)) return null;

  if (config.totalDurationMs) {
    const excluded = new Set(config.excludedSteps ?? []);
    let eligibleSteps = 0;
    for (let current = sequenceStartStep; current <= throughStep; current += 1) {
      if (!excluded.has(current)) eligibleSteps += 1;
    }
    if (eligibleSteps > 0) return config.totalDurationMs / eligibleSteps;
  }
  return config.delayMs;
}
