import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const files = ["src/scripts/language.ts", "src/scripts/reveal.ts", "src/scripts/living-current.ts"];
for (const file of files) assert.ok(existsSync(join(root, file)), `${file} must exist`);

const language = readFileSync(join(root, files[0]), "utf8");
const reveal = readFileSync(join(root, files[1]), "utf8");
const current = readFileSync(join(root, files[2]), "utf8");
const main = readFileSync(join(root, "src/scripts/main.ts"), "utf8");

assert.match(language, /data-alt-en/);
assert.match(language, /setAttribute\("alt"/);
assert.match(language, /documentElement/);
assert.match(language, /localStorage/);
assert.match(reveal, /IntersectionObserver/);
assert.match(reveal, /prefers-reduced-motion/);
assert.match(current, /requestAnimationFrame/);
assert.match(current, /--current-progress/);
assert.match(current, /prefers-reduced-motion/);
for (const initializer of ["initLanguage", "initReveal", "initLivingCurrent"]) {
  assert.match(main, new RegExp(initializer), `${initializer} must be initialized`);
}
