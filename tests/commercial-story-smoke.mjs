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
];

for (const file of files) assert.ok(existsSync(join(root, file)), `${file} must exist`);

const [market, values, responsibility, growth, partners] = files.map((file) =>
  readFileSync(join(root, file), "utf8"),
);
const page = readFileSync(join(root, "src/pages/index.astro"), "utf8");
const data = readFileSync(join(root, "src/data/alsaqi.ts"), "utf8");

for (const component of ["MarketRunway", "ValuesOrbit", "ResponsibilityMatrix", "GrowthModel", "PartnerInvitation"]) {
  assert.match(page, new RegExp(`<${component} />`), `${component} must be mounted on the homepage`);
}

/* The PDF's core equation: reliable product + intelligent pricing + effective
   distribution = successful brand. It renders as separate terms, not one string. */
for (const term of ["Reliable product", "Intelligent pricing", "Effective distribution", "Successful brand"]) {
  assert.ok(data.includes(term), `missing equation term: ${term}`);
}
assert.match(market, /data-equation/, "the equation must be observable for its reveal");
assert.match(market, /market\.equationParts\.map/, "equation terms must render from the content model");
assert.match(market, /market\.advantages\.map/, "market advantages must render from the content model");
assert.equal((data.match(/advantages: \[/g) ?? []).length, 1, "market advantages must be present");

/* The three market phases. */
for (const phase of ["launch", "establish", "expand"]) {
  assert.match(data, new RegExp(`^  ${phase}: \\{`, "m"), `missing ${phase} market phase`);
}
assert.match(market, /marketPhases\.launch, marketPhases\.establish, marketPhases\.expand/, "all three phases must render in order");

/* The closing claim, in both languages. */
assert.ok(data.includes("الساقي… نقاء يُوثق، وفرصة تُستثمر."), "Arabic closing claim must be verbatim");
assert.ok(data.includes("Al Saqi… purity to trust, and opportunity to invest."), "English closing claim must be present");
assert.match(partners, /partners\.final\.ar/, "the closing claim must render in the partner invitation");

/* Institutional values, responsibility pillars, and growth opportunities all
   render from the content model rather than being hardcoded in markup. */
assert.match(values, /values\.map/, "institutional values must render from the content model");
assert.match(responsibility, /responsibility\.pillars\.map/, "responsibility pillars must render from the content model");
assert.match(growth, /growth\.opportunities\.map/, "growth opportunities must render from the content model");
assert.match(growth, /growth\.model\.map/, "the business model must render from the content model");
assert.match(partners, /partners\.invitation\.map/, "the partner invitation must render from the content model");

assert.equal((data.match(/^export const values = \[/m) ?? []).length, 1, "institutional values must be present");
assert.equal((data.match(/^export const responsibility = \{/m) ?? []).length, 1, "responsibility must be present");
assert.equal((data.match(/^export const growth = \{/m) ?? []).length, 1, "growth must be present");
