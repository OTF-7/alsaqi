import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const componentPath = join(root, "src/components/ProductTheatre.astro");
const scriptPath = join(root, "src/scripts/product-theatre.ts");

assert.ok(existsSync(componentPath), "ProductTheatre must use real product photography");
assert.ok(existsSync(scriptPath), "product theatre must have a focused interaction module");

const component = readFileSync(componentPath, "utf8");
const script = readFileSync(scriptPath, "utf8");
const data = readFileSync(join(root, "src/data/alsaqi.ts"), "utf8");
const page = readFileSync(join(root, "src/pages/index.astro"), "utf8");

assert.match(page, /<ProductTheatre \/>/, "ProductTheatre must be mounted on the homepage");

/* The three sizes are the product line. */
for (const size of ["330", "750", "1200"]) {
  assert.match(data, new RegExp(`id: "${size}"`), `product ${size} must exist in the content model`);
  assert.ok(
    existsSync(join(root, `src/assets/alsaqi/cutouts/bottle-${size}.png`)),
    `the ${size} bottle cutout must exist`,
  );
  assert.match(component, new RegExp(`cutouts/bottle-${size}\\.png`), `the ${size} cutout must be imported`);
}

/* Selector wiring: tabs, images, and copy are all keyed by product id. */
assert.match(component, /data-product-stage/);
assert.match(component, /data-product-option=\{product\.id\}/);
assert.match(component, /data-product-image=\{product\.id\}/);
assert.match(component, /data-product-copy=\{product\.id\}/);
assert.match(component, /role="tablist"/);
assert.match(component, /aria-selected/);

/* Size labels stay bilingual. */
assert.match(component, /data-en=\{product\.size\.en\}/);
assert.match(component, /data-ar=\{product\.size\.ar\}/);

assert.match(script, /\[data-product-option\]/);
assert.match(script, /dataset\.productOption/);
assert.match(script, /aria-selected/);
assert.match(script, /keydown/);
/* Arrow keys must follow reading direction, which flips with the language. */
assert.match(script, /dir === "rtl"/, "keyboard navigation must be direction-aware");
