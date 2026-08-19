import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), "utf8");
const hero = read("src/components/HeroCurrent.astro");
const siteCss = read("src/styles/site.css");

/* The hero should stay focused on the products without a decorative falling
   droplet or its landing ripple returning later. */
for (const removedEffect of ["hero-drop-track", "hero-drop", "hero-landing-ring", "hero-drop-fall", "hero-ripple"]) {
  assert.ok(!hero.includes(removedEffect), `${removedEffect} must not appear in the hero markup`);
  assert.ok(!siteCss.includes(removedEffect), `${removedEffect} must not appear in the hero styles`);
}

/* Phone bottles are bounded by the product stage so their intrinsic image
   ratios cannot make them protrude upward over the calls to action. */
assert.match(siteCss, /\.hero-bottle \{ align-items: flex-end; height: 100%; \}/);
assert.match(siteCss, /\.hero-bottle img \{ height: 100%; max-width: 100%; object-fit: contain; width: auto; \}/);

/* Alexandria paints the final Arabic dots below its reported line box at wide
   sizes, so the following paragraph needs a desktop-only optical gap. */
assert.match(
  siteCss,
  /@media \(min-width: 761px\)\s*\{\s*html\[dir="rtl"\] \.hero-support \{ margin-top: clamp\(3\.5rem, 4vw, 4\.5rem\); \}\s*\}/,
  "Arabic desktop hero copy must clear the headline's below-baseline dots",
);

/* The quality checklist belongs to the dark Al Saqi palette, not a white paper
   surface that visually breaks away from the surrounding section. */
assert.match(siteCss, /\.lab-sheet \{ background: linear-gradient\(/);
assert.match(siteCss, /\.lab-sheet h3 \{ color: var\(--site-aqua\)/);
assert.ok(!siteCss.includes("background: #eef6f2"), "the white checklist surface must not return");
