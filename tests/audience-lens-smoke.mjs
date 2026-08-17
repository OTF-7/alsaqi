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
const page = readFileSync(join(root, "src/pages/index.astro"), "utf8");

assert.match(page, /<AudienceLens \/>/, "AudienceLens must be mounted on the homepage");

/* The PDF frames value from three angles; each gets a lens and its own photograph. */
for (const audience of ["consumer", "trader", "investor"]) {
  assert.match(component, new RegExp(`id: "${audience}"`), `${audience} lens must exist`);
}
assert.equal(
  (data.match(/values: \[/g) ?? []).length,
  3,
  "each of the three audiences must keep its value list",
);

for (const photo of ["10-consumer-shelf.webp", "08-trader-store.webp", "09-investor-desk.webp"]) {
  assert.ok(existsSync(join(root, "src/assets/alsaqi", photo)), `${photo} must exist`);
  assert.ok(component.includes(photo), `${photo} must be imported`);
}

/* Lens wiring: tabs and panels are keyed by audience id. */
assert.match(component, /data-audience-root/);
assert.match(component, /data-audience-option=\{lens\.id\}/);
assert.match(component, /data-audience-panel=\{lens\.id\}/);
assert.match(component, /role="tablist"/);
assert.match(component, /aria-selected/);

/* The consumer and trader lenses close on an equation; the investor lens does not,
   so the component must render it conditionally rather than assume it. */
assert.match(component, /"equation" in lens\.data/, "the equation must stay optional");

assert.match(script, /\[data-audience-option\]/);
assert.match(script, /dataset\.audienceOption/);
assert.match(script, /aria-selected/);
assert.match(script, /keydown/);
/* Arrow keys must follow reading direction, which flips with the language. */
assert.match(script, /dir === "rtl"/, "keyboard navigation must be direction-aware");
