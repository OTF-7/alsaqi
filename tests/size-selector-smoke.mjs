import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url);
const read = (path) => readFileSync(join(root.pathname, path), "utf8");

const range = read("src/components/Range.astro");
const script = read("src/scripts/main.ts");

assert.match(range, /data-size-option="330"/);
assert.match(range, /data-size-option="750"/);
assert.match(range, /data-size-option="1200"/);
assert.match(range, /id="size-stage"/);
assert.match(range, /id="size-readout"/);
assert.match(script, /\[data-size-option\]/);
assert.match(script, /dataset\.size/);
assert.match(script, /aria-selected/);
