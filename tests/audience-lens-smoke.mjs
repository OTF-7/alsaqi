import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const componentPath = join(root, "src/components/AudienceLens.astro");
const scriptPath = join(root, "src/scripts/audience-lens.ts");

assert.ok(existsSync(componentPath), "AudienceLens must expose the three PDF value systems");
assert.ok(existsSync(scriptPath), "audience lens must have a focused interaction module");

const component = readFileSync(componentPath, "utf8");
const script = readFileSync(scriptPath, "utf8");
const data = readFileSync(join(root, "src/data/alsaqi.ts"), "utf8");

for (const audience of ["consumer", "trader", "investor"]) {
  assert.match(component, new RegExp(`id: "${audience}"`));
}
assert.match(component, /data-audience-option=\{audience\.id\}/);
assert.match(component, /data-audience-panel=\{audience\.id\}/);
assert.match(component, /alsaqiImages\.consumerShelf/);
assert.match(component, /alsaqiImages\.traderStore/);
assert.match(component, /alsaqiImages\.investorDesk/);
assert.match(component, /aria-selected/);
assert.match(script, /\[data-audience-option\]/);
assert.match(script, /dataset\.audience/);
assert.match(script, /keydown/);
assert.equal((data.match(/values:\s*\[/g) ?? []).length >= 3, true);
