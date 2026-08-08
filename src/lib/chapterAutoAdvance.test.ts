import assert from "node:assert/strict";
import test from "node:test";
import { getChapterAutoAdvanceDelay } from "./chapterAutoAdvance";

const chapter = {
  id: "example",
  title: "Example",
  narrations: ["a", "b", "c", "d"],
  Component: () => null,
  autoAdvance: { delayMs: 3200, throughStep: 2, excludedSteps: [1] },
};

test("returns the configured delay for an eligible chapter-local step", () => {
  assert.equal(getChapterAutoAdvanceDelay(chapter, 0, false), 3200);
});

test("does not advance excluded steps", () => {
  assert.equal(getChapterAutoAdvanceDelay(chapter, 1, false), null);
});

test("does not advance beyond the configured chapter-local range", () => {
  assert.equal(getChapterAutoAdvanceDelay(chapter, 3, false), null);
});

test("does not compete with narrated auto mode", () => {
  assert.equal(getChapterAutoAdvanceDelay(chapter, 0, true), null);
});

test("chapters without metadata remain manual", () => {
  assert.equal(
    getChapterAutoAdvanceDelay({ ...chapter, autoAdvance: undefined }, 0, false),
    null,
  );
});

test("shares one reveal budget across eligible in-frame steps", () => {
  const sequenced = {
    ...chapter,
    narrations: ["a", "b", "c", "d", "e"],
    autoAdvance: {
      delayMs: 3200,
      totalDurationMs: 4200,
      sequenceStartStep: 1,
      throughStep: 3,
    },
  };
  assert.equal(getChapterAutoAdvanceDelay(sequenced, 0, false), null);
  assert.equal(getChapterAutoAdvanceDelay(sequenced, 1, false), 1400);
  assert.equal(getChapterAutoAdvanceDelay(sequenced, 3, false), 1400);
  assert.equal(getChapterAutoAdvanceDelay(sequenced, 4, false), null);
});
