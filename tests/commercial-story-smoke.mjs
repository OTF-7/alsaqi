import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const files = [
  "src/components/MarketRunway.astro",
  "src/components/ValuesOrbit.astro",
  "src/components/ResponsibilityMatrix.astro",
  "src/components/GrowthModel.astro",
  "src/components/PartnerInvitation.astro",
  "src/scripts/market-runway.ts",
];

for (const file of files) assert.ok(existsSync(join(root, file)), `${file} must exist`);

const components = files.slice(0, 5).map((file) => readFileSync(join(root, file), "utf8")).join("\n");
const page = readFileSync(join(root, "src/pages/index.astro"), "utf8");
const data = readFileSync(join(root, "src/data/alsaqi.ts"), "utf8");
const script = readFileSync(join(root, "src/scripts/market-runway.ts"), "utf8");

for (const phase of ["launch", "establish", "expand"]) {
  assert.match(components, new RegExp(`data-market-phase=["'{]+${phase}`), `missing ${phase} market phase`);
}

for (const claim of [
  "Reliable product + intelligent pricing + effective distribution = successful brand",
  "Purity to trust. Opportunity to invest.",
  "الساقي… نقاء يُوثق، وفرصة تُستثمر.",
]) assert.ok(data.includes(claim), `missing commercial claim: ${claim}`);

assert.equal((data.match(/advantages: \[/g) ?? []).length, 1, "market advantages must be present");
assert.equal((data.match(/title: \{ en:/g) ?? []).length >= 12, true, "institutional values must remain mapped");
assert.equal((data.match(/responsibilityPillars/g) ?? []).length, 1, "responsibility pillars must be present");
assert.equal((data.match(/growthOpportunities/g) ?? []).length, 1, "growth opportunities must be present");
assert.match(components, /data-value-card/g);
assert.match(components, /data-responsibility-pillar/g);
assert.match(components, /data-growth-opportunity/g);
assert.match(components, /data-growth-model/g);
assert.match(components, /data-partner-invitation/g);

for (const component of ["MarketRunway", "ValuesOrbit", "ResponsibilityMatrix", "GrowthModel", "PartnerInvitation"]) {
  assert.match(page, new RegExp(component), `${component} must be mounted on the homepage`);
}

assert.match(script, /--market-progress/);
assert.match(script, /prefers-reduced-motion/);
