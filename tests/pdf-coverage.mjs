import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const contentPath = join(root, "src/data/alsaqi.ts");

assert.ok(existsSync(contentPath), "src/data/alsaqi.ts must map the complete PDF content");

const content = readFileSync(contentPath, "utf8");

/* Every chapter of the company profile has a home in the content model. */
for (const chapter of [
  "contact",
  "hero",
  "about",
  "vision",
  "products",
  "productSection",
  "audiences",
  "valueSection",
  "factory",
  "quality",
  "marketPhases",
  "market",
  "values",
  "responsibility",
  "growth",
  "partners",
]) {
  assert.match(content, new RegExp(`^export const ${chapter}\\b`, "m"), `missing ${chapter} chapter`);
}

/* The PDF's three audiences and three market phases keep their keys. */
for (const key of ["consumer", "trader", "investor", "launch", "establish", "expand"]) {
  assert.match(content, new RegExp(`^  ${key}: \\{`, "m"), `missing PDF source key ${key}`);
}

/* Contact details, pinned to their field so a change to one cannot hide behind
   the same digits appearing in another. */
for (const field of [
  'phone: "775757572"',
  'whatsapp: "+967 775757572"',
  'email: "info@alsaqiwater.com"',
  'website: "www.alsaqiwater.com"',
]) {
  assert.ok(content.includes(field), `missing contact detail: ${field}`);
}

/* Copy that must stay verbatim: taglines and the specification claims. */
for (const literal of [
  "330 ml",
  "750 ml",
  "1200 ml",
  "PLC / HMI",
  "الساقي… اختيارك الراقي",
  "الساقي… نقاء يُوثق، وفرصة تُستثمر.",
  "Al Saqi… purity to trust, and opportunity to invest.",
  "Working toward ISO and HACCP certifications",
]) {
  assert.ok(content.includes(literal), `missing verbatim PDF copy: ${literal}`);
}

/* The six institutional values from the PDF. */
for (const value of [
  "Quality first",
  "Trust and credibility",
  "Commercial value",
  "Operational efficiency",
  "Innovation and development",
  "Sustainability",
]) {
  assert.ok(content.includes(value), `missing institutional value: ${value}`);
}

/* The four social-responsibility pillars. */
for (const pillar of ["Environment", "Health", "Community", "Economy"]) {
  assert.match(content, new RegExp(`t\\("${pillar}"`), `missing responsibility pillar: ${pillar}`);
}

/* The four growth opportunities. */
for (const opportunity of [
  "Expansion into beverages (carbonated and flavored)",
  "Entering new markets",
  "Third-party manufacturing (Private Label)",
  "Strategic partnerships with retail chains",
]) {
  assert.ok(content.includes(opportunity), `missing growth opportunity: ${opportunity}`);
}

/* The factory is working toward certification and must never claim to hold it. */
assert.doesNotMatch(content, /ISO.{0,20}certified|HACCP.{0,20}certified/i);

/* Every string in the content model is bilingual by construction. */
assert.match(content, /const t = \(en: string, ar: string\): Localized/, "the bilingual helper must gate all copy");

/* The 19 photographs lifted from the PDF stay in the repo. */
const photos = readdirSync(join(root, "src/assets/alsaqi")).filter((file) => /^\d{2}-.+\.webp$/.test(file));
assert.equal(photos.length, 19, "all 19 PDF source photographs must remain available");
