import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url);

function read(path) {
  return readFileSync(join(root.pathname, path), "utf8");
}

const files = {
  packageJson: read("package.json"),
  index: read("src/pages/index.astro"),
  layout: read("src/layouts/Base.astro"),
  hero: read("src/components/Hero.astro"),
  range: read("src/components/Range.astro"),
  cta: read("src/components/Cta.astro"),
  footer: read("src/components/WaterFooter.astro"),
  whatsapp: read("src/components/WhatsApp.astro"),
  css: read("src/styles/global.css"),
};

const joined = Object.values(files).join("\n");

assert.match(files.packageJson, /"name": "alsaqi-water"/);
assert.match(files.index, /Al Saqi Mineral Water Factory/);
assert.match(joined, /مصنع الساقي للمياه المعدنية/);
assert.match(joined, /الساقي… اختيارك الراقي/);
assert.match(joined, /Your refined choice/);
assert.match(joined, /info@alsaqiwater\.com/);
assert.match(joined, /779779630/);
assert.match(joined, /www\.alsaqiwater\.com/);
assert.match(joined, /330 ml/);
assert.match(joined, /750 ml/);
assert.match(joined, /1200 ml/);
assert.doesNotMatch(joined, /Novan Water/);
assert.match(files.css, /--saqi-blue/);
assert.match(files.css, /--saqi-green/);
assert.match(files.layout, /href="\/alsaqi-mark\.svg"/);
assert.doesNotMatch(files.layout, /favicon-512/);
