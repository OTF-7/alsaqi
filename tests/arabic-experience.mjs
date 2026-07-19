import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), "utf8");

const heroPath = join(root, "src/components/HeroCurrent.astro");
const manifestoPath = join(root, "src/components/Manifesto.astro");
const visionPath = join(root, "src/components/VisionMission.astro");

assert.ok(existsSync(heroPath), "HeroCurrent must be the hero");
assert.ok(existsSync(manifestoPath), "Manifesto must carry the executive summary");
assert.ok(existsSync(visionPath), "VisionMission must carry the vision and mission");

const index = read("src/pages/index.astro");
const layout = read("src/layouts/Base.astro");
const header = read("src/components/Header.astro");
const hero = read("src/components/HeroCurrent.astro");
const language = read("src/scripts/language.ts");
const globalCss = read("src/styles/global.css");
const siteCss = read("src/styles/site.css");
const data = read("src/data/alsaqi.ts");

assert.match(index, /import HeroCurrent/);
assert.match(index, /import Manifesto/);
assert.match(index, /import VisionMission/);

/* The site is Arabic-first: the page ships lang="ar" dir="rtl" and Arabic text nodes. */
assert.match(index, /lang="ar"/, "the homepage must render Arabic first");
assert.match(index, /dir="rtl"/, "the homepage must render right-to-left");
assert.match(layout, /<html lang=\{lang\} dir=\{dir\}>/, "the layout must honour lang and dir");
assert.match(hero, /\{hero\.title\.ar\}/, "the hero must render its Arabic title as the default text node");
assert.ok(data.includes("الساقي… اختيارك الراقي"), "Arabic tagline must be verbatim");
assert.ok(data.includes("مصنع الساقي للمياه المعدنية"), "Arabic factory name must be verbatim");

/* Hero CTAs reach the two sections the PDF funnels toward. */
assert.match(hero, /href="#products"/);
assert.match(hero, /href="#partners"/);

/* The language switch and its runtime. */
assert.match(header, /data-lang="en"/);
assert.match(header, /data-lang="ar"/);
assert.match(language, /\[data-en\]\[data-ar\]/, "translation must be driven by paired text attributes");
assert.match(language, /\[data-aria-en\]\[data-aria-ar\]/, "aria labels must translate");
assert.match(language, /img\[data-alt-en\]\[data-alt-ar\]/, "image alt text must translate");

/* Every bilingual attribute is paired: an English value without its Arabic
   counterpart (or the reverse) silently drops copy when the language flips. */
const componentDir = join(root, "src/components");
for (const file of readdirSync(componentDir).filter((name) => name.endsWith(".astro"))) {
  const source = readFileSync(join(componentDir, file), "utf8");
  for (const [en, ar] of [
    ["data-en=", "data-ar="],
    ["data-aria-en=", "data-aria-ar="],
    ["data-alt-en=", "data-alt-ar="],
  ]) {
    const enCount = source.split(en).length - 1;
    const arCount = source.split(ar).length - 1;
    assert.equal(enCount, arCount, `${file} must pair every ${en} with a ${ar}`);
  }
}

/* Arabic typography. */
assert.match(globalCss, /--font-ar-display/);
assert.match(globalCss, /--font-ar-body/);
assert.match(globalCss, /html\[dir="rtl"\]/);

/* Arabic is a joined script, so RTL rules must never introduce tracking. */
const rtlBlocks = [...`${globalCss}\n${siteCss}`.matchAll(/html\[dir="rtl"\][^{]*\{([^}]*)\}/g)].map((match) => match[1]);
assert.ok(rtlBlocks.length > 0, "there must be RTL-specific styling to check");
for (const block of rtlBlocks) {
  const spacing = block.match(/letter-spacing:\s*([^;]+)/)?.[1]?.trim();
  if (spacing !== undefined) assert.equal(spacing, "0", "RTL typography must not use tracking");
}
