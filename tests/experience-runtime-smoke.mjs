import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const files = [
  "src/scripts/main.ts",
  "src/scripts/language.ts",
  "src/scripts/audience-lens.ts",
  "src/scripts/product-theatre.ts",
];
for (const file of files) assert.ok(existsSync(join(root, file)), `${file} must exist`);

const [main, language] = files.map((file) => readFileSync(join(root, file), "utf8"));
const layout = readFileSync(join(root, "src/layouts/Base.astro"), "utf8");

assert.match(layout, /scripts\/main\.ts/, "the layout must mount the runtime entry point");

/* Language switching rewrites text, aria labels, and alt text, and remembers the choice. */
assert.match(language, /data-alt-en/);
assert.match(language, /setAttribute\("alt"/);
assert.match(language, /documentElement/);
assert.match(language, /localStorage/);
assert.match(language, /root\.dir = language === "ar" \? "rtl" : "ltr"/, "switching language must flip direction");

/* Entrance animation is progressive enhancement: reduced motion and a missing
   IntersectionObserver both fall back to showing everything. */
assert.match(main, /IntersectionObserver/);
assert.match(main, /prefers-reduced-motion/);
assert.match(main, /requestAnimationFrame/);
assert.match(main, /showEverything/, "there must be a fallback that reveals all content");

for (const initializer of ["initLanguage", "initProductTheatre", "initAudienceLens"]) {
  assert.match(main, new RegExp(initializer), `${initializer} must be initialized`);
}
