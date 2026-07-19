import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
for (const path of ["src/components/FactoryConveyor.astro", "src/components/QualityGate.astro"]) {
  assert.ok(existsSync(join(root, path)), `${path} must exist`);
}

const factory = readFileSync(join(root, "src/components/FactoryConveyor.astro"), "utf8");
const quality = readFileSync(join(root, "src/components/QualityGate.astro"), "utf8");
const data = readFileSync(join(root, "src/data/alsaqi.ts"), "utf8");
const page = readFileSync(join(root, "src/pages/index.astro"), "utf8");
const joined = [factory, quality, data].join("\n");

for (const component of ["FactoryConveyor", "QualityGate"]) {
  assert.match(page, new RegExp(`<${component} />`), `${component} must be mounted on the homepage`);
}

/* Production and quality claims, verbatim from the PDF. */
for (const claim of [
  "automated production lines",
  "PLC / HMI",
  "quality monitoring",
  "Reduced waste",
  "food-safety systems",
  "health specifications",
  "Periodic quality testing",
  "Working toward ISO and HACCP certifications",
]) {
  assert.ok(joined.includes(claim), `missing industrial claim: ${claim}`);
}

/* The lab sheet enumerates the PDF's quality checks. */
for (const check of [
  "Physical test: color, taste, odor, turbidity",
  "Salts and minerals (TDS): calcium and magnesium",
  "Acidity (pH): neutral",
  "Heavy metals: lead, arsenic, mercury",
  "Microbiological test: bacteria, germs",
  "Chemical substances: nitrates, sulfates, fluoride",
  "Packaging safety: bottles, closure, date",
]) {
  assert.ok(data.includes(check), `missing quality check: ${check}`);
}

assert.match(factory, /id="factory"/);
assert.match(factory, /factory\.capabilities\.map/, "capabilities must render from the content model");
assert.match(factory, /factory\.methodology\.map/, "the operating methodology must render from the content model");
assert.match(quality, /id="quality"/);
assert.match(quality, /data-quality-sheet/, "the lab sheet must be observable for its check animation");
assert.match(quality, /quality\.checks\.map/, "lab checks must render from the content model");
assert.match(quality, /quality\.pillars\.map/, "quality pillars must render from the content model");

/* The factory is working toward certification and must never claim to hold it. */
assert.doesNotMatch(joined, /ISO.{0,20}certified|HACCP.{0,20}certified/i);
