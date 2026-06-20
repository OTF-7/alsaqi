import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
for (const path of [
  "src/components/FactoryConveyor.astro",
  "src/components/QualityGate.astro",
  "src/scripts/factory-conveyor.ts",
]) {
  assert.ok(existsSync(join(root, path)), `${path} must exist`);
}

const factory = readFileSync(join(root, "src/components/FactoryConveyor.astro"), "utf8");
const quality = readFileSync(join(root, "src/components/QualityGate.astro"), "utf8");
const script = readFileSync(join(root, "src/scripts/factory-conveyor.ts"), "utf8");
const data = readFileSync(join(root, "src/data/alsaqi.ts"), "utf8");
const joined = [factory, quality, data].join("\n");

for (const claim of [
  "automated production lines",
  "PLC / HMI",
  "quality monitoring",
  "Reduced waste",
  "food-safety systems",
  "health specifications",
  "periodic quality testing",
  "working toward ISO and HACCP certification",
]) {
  assert.match(joined, new RegExp(claim.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
}

assert.match(factory, /data-factory-root/);
assert.match(factory, /data-factory-stage/);
assert.match(quality, /data-certification-direction/);
assert.match(script, /--factory-progress/);
assert.match(script, /prefers-reduced-motion/);
assert.doesNotMatch(joined, /ISO.{0,20}certified|HACCP.{0,20}certified/i);
