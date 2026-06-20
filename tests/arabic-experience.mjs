import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const heroPath = join(root, "src/components/HeroCurrent.astro");
const manifestoPath = join(root, "src/components/Manifesto.astro");

assert.ok(existsSync(heroPath), "HeroCurrent must replace the generic hero");
assert.ok(existsSync(manifestoPath), "Manifesto must contain executive summary, vision, and mission");

const read = (path) => readFileSync(join(root, path), "utf8");
const index = read("src/pages/index.astro");
const layout = read("src/layouts/Base.astro");
const header = read("src/components/Header.astro");
const hero = read("src/components/HeroCurrent.astro");
const manifesto = read("src/components/Manifesto.astro");
const css = read("src/styles/global.css");
const data = read("src/data/alsaqi.ts");
const joined = [index, layout, header, hero, manifesto, css, data].join("\n");

assert.match(index, /import HeroCurrent/);
assert.match(index, /import Manifesto/);
assert.match(hero, /alsaqiImages\.heroFamily/);
assert.match(hero, /href="#products"/);
assert.match(hero, /href="#partners"/);
assert.match(joined, /الساقي… اختيارك الراقي/);
assert.match(joined, /مصنع الساقي للمياه المعدنية/);
assert.match(header, /data-nav-order/);
assert.match(css, /--font-ar-display/);
assert.match(css, /--font-ar-body/);
assert.match(css, /html\[dir="rtl"\]/);
assert.match(css, /--flow-direction:\s*-1/);
assert.match(css, /\.ar-break/);

const rtlBlocks = [...css.matchAll(/html\[dir="rtl"\][^{]*\{([^}]*)\}/g)].map((match) => match[1]);
for (const block of rtlBlocks) {
  const spacing = block.match(/letter-spacing:\s*([^;]+)/)?.[1]?.trim();
  if (spacing !== undefined) assert.equal(spacing, "0", "RTL typography must not use tracking");
}
