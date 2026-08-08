import { rm } from "node:fs/promises";
import { resolve } from "node:path";

const demoDirectory = resolve("dist-v2/assets/demos");

await rm(demoDirectory, { recursive: true, force: true });
console.log(`Removed V2 demo media: ${demoDirectory}`);
