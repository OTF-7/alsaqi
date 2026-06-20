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

for (const size of ["330", "750", "1200"]) {
  assert.match(data, new RegExp(`id: "${size}"`));
}
assert.match(component, /data-product-option=\{product\.id\}/);
assert.match(component, /data-product-stage/);
assert.match(component, /alsaqiImages\.productFamily/);
assert.match(component, /aria-selected/);
assert.match(script, /\[data-product-option\]/);
assert.match(script, /dataset\.product/);
assert.match(script, /aria-selected/);
assert.match(script, /keydown/);
