import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const contentPath = join(root, "src/data/alsaqi.ts");
const assetsPath = join(root, "src/data/assets.ts");

assert.ok(existsSync(contentPath), "src/data/alsaqi.ts must map the complete PDF content");
assert.ok(existsSync(assetsPath), "src/data/assets.ts must map all PDF photography");

const content = readFileSync(contentPath, "utf8");
const assets = readFileSync(assetsPath, "utf8");

for (const chapter of [
  "hero",
  "manifesto",
  "products",
  "audiences",
  "factory",
  "quality",
  "market",
  "responsibility",
  "growth",
]) {
  assert.match(content, new RegExp(`${chapter}:`), `missing ${chapter} chapter`);
}

for (const token of [
  "qualityFirst",
  "trust",
  "commercialValue",
  "operationalEfficiency",
  "innovation",
  "sustainability",
  "consumer",
  "trader",
  "investor",
  "launch",
  "establish",
  "expand",
  "environment",
  "health",
  "community",
  "economy",
  "newMarkets",
  "privateLabel",
  "retailChains",
  "beverageExpansion",
]) {
  assert.match(content, new RegExp(`${token}:`), `missing PDF source token ${token}`);
}

for (const literal of [
  "330 ml",
  "750 ml",
  "1200 ml",
  "PLC / HMI",
  "779779630",
  "info@alsaqiwater.com",
  "www.alsaqiwater.com",
  "الساقي… اختيارك الراقي",
  "الساقي… نقاء يُوثق، وفرصة تُستثمر.",
  "working toward ISO and HACCP certification",
]) {
  assert.match(content, new RegExp(literal.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `missing ${literal}`);
}

assert.doesNotMatch(content, /ISO.{0,20}certified|HACCP.{0,20}certified/i);
assert.equal((assets.match(/sourcePage:/g) ?? []).length, 19, "asset manifest must contain 19 source images");
assert.equal((assets.match(/alt:/g) ?? []).length, 19, "every source image must have bilingual alt text");
