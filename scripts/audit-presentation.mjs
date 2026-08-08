import { chromium } from "/Users/bytedance/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";
import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = "http://127.0.0.1:4174/";
const outputDir = path.resolve("review");
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true, executablePath: chrome });
const viewportResults = [];

for (const viewport of [{ width: 1920, height: 1080 }, { width: 1440, height: 810 }]) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  const errors = [];
  await page.emulateMedia({ reducedMotion: "reduce" });
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
  });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.evaluate(() => localStorage.removeItem("shopify-carousel-talk-v8"));
  await page.reload({ waitUntil: "networkidle" });

  const seen = [];
  const overflow = [];
  const screenshots = new Map([
    [0, "00-opening-theme.png"],
    [1, "01-profile-transition.png"],
    [2, "02-profile-svc.png"],
    [3, "02-profile-rpa.png"],
    [4, "02-profile-deep-learning.png"],
    [5, "02-profile-magiccut-abstraction.png"],
    [6, "02-profile-magiccut-system.png"],
    [7, "02-profile-magiccut-metrics.png"],
    [8, "02-profile-evolution.png"],
    [9, "03-problem-transition.png"],
    [10, "03-inactive-data-start.png"],
    [14, "03-inactive-data.png"],
    [15, "04-merchant-voice-01.png"],
    [19, "04-merchant-voice-05.png"],
    [20, "05-asset-gap-01.png"],
    [24, "05-asset-gap-05.png"],
    [25, "06-product-io-vision-input.png"],
    [28, "06-product-io-mvp-focus.png"],
    [29, "06-product-io-mvp-e2e.png"],
    [30, "07-high-level-vision-url.png"],
    [31, "07-high-level-vision-product-facts.png"],
    [32, "07-high-level-vision-carousel.png"],
    [33, "07-high-level-vision-caption.png"],
    [34, "07-high-level-vision-schedule.png"],
    [35, "08-delivery-transition.png"],
    [36, "08-ai-native-01.png"],
    [40, "08-ai-native-05.png"],
    [41, "09-demo-journey.png"],
    [42, "09-demo-automation.png"],
    [43, "09-demo-in-loop.png"],
    [44, "09-demo-trust.png"],
    [45, "09-demo-constraints.png"],
    [46, "09-demo-prd-ui.png"],
    [47, "09-demo-real.png"],
    [48, "10-design-critic-human.png"],
    [52, "10-design-critic-contract.png"],
    [57, "11-feasibility.png"],
    [58, "12-skills-intro.png"],
    [63, "12-modular-skills.png"],
    [70, "13-architecture.png"],
    [75, "14-integration.png"],
    [80, "15-testing-uat.png"],
    [85, "16-deployment.png"],
    [89, "17-reflection.png"],
    [96, "18-future-roadmap.png"],
  ]);
  for (let globalStep = 0; globalStep < 97; globalStep += 1) {
    await page.waitForTimeout(35);
    const sceneClass = await page.locator(".scene > *").first().getAttribute("class");
    seen.push(sceneClass ?? "missing");
    const issues = await page.locator(".scene").evaluate((root) => {
      const stage = root.closest(".stage-frame").getBoundingClientRect();
      return [...root.querySelectorAll("h1,h2,h3,p,strong,span,small,article,figure,img,video")]
        .filter((node) => {
          const style = getComputedStyle(node);
          return style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity) > 0.02;
        })
        .map((node) => {
          const box = node.getBoundingClientRect();
          const outside = box.left < stage.left - 2 || box.right > stage.right + 2 || box.top < stage.top - 2 || box.bottom > stage.bottom + 2;
          const style = getComputedStyle(node);
          const clipsX = ["hidden", "clip", "auto", "scroll"].includes(style.overflowX);
          const clipsY = ["hidden", "clip", "auto", "scroll"].includes(style.overflowY);
          const clipped = (clipsX && node.scrollWidth > node.clientWidth + 2) || (clipsY && node.scrollHeight > node.clientHeight + 2);
          return outside || clipped ? { tag: node.tagName, cls: node.className, outside, clipped } : null;
        })
        .filter(Boolean);
    });
    if (issues.length) overflow.push({ globalStep, issues });
    if (screenshots.has(globalStep) && viewport.width === 1920) {
      await page.waitForTimeout(650);
      await page.locator(".stage-frame").screenshot({ path: path.join(outputDir, screenshots.get(globalStep)) });
    }
    if (globalStep < 96) await page.keyboard.press("ArrowRight");
  }

  const stageBox = await page.locator(".stage-frame").boundingBox();
  await page.keyboard.press("ArrowLeft");
  const afterBack = JSON.parse(await page.evaluate(() => localStorage.getItem("shopify-carousel-talk-v8")));
  viewportResults.push({
    viewport: `${viewport.width}x${viewport.height}`,
    stageRatio: Number((stageBox.width / stageBox.height).toFixed(4)),
    seenSteps: seen.length,
    chapterRoots: [...new Set(seen.map((item) => item.split(" ")[0]))],
    afterBack,
    overflow,
    errors,
  });
  await page.close();
}

await browser.close();
console.log(JSON.stringify(viewportResults, null, 2));

const failed = viewportResults.some((result) => result.stageRatio !== 1.7778 || result.seenSteps !== 97 || result.overflow.length > 0 || result.errors.length > 0 || result.afterBack.chapter !== 17 || result.afterBack.step !== 5);
if (failed) process.exit(1);
