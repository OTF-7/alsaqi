import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), "utf8");
const headers = read("public/_headers");
const product = read("src/components/ProductTheatre.astro");
const audience = read("src/components/AudienceLens.astro");
const runtime = read("src/scripts/main.ts");
const css = read("src/styles/site.css");

/* Layout and animation data are expressed through attributes and stylesheet
   selectors, so the deployed CSP can reject all inline style attributes. */
assert.doesNotMatch(headers, /style-src-attr\s+'unsafe-inline'/);
assert.doesNotMatch(headers, /style-src [^;]*'unsafe-inline'/);
assert.doesNotMatch(audience, /\bstyle\s*=/);

/* Every tab declares its controlled panel, and every panel points back to the
   tab that labels it. */
for (const component of [product, audience]) {
  assert.match(component, /role="tab"[^>]*aria-controls=/);
  assert.match(component, /role="tabpanel"[^>]*aria-labelledby=/);
}

/* A mobile menu cannot trap the document or survive into desktop layout. */
assert.match(css, /body\.menu-open \{ overflow: hidden; \}/);
assert.match(runtime, /matchMedia\("\(min-width: 1121px\)"\)/);
assert.match(runtime, /if \(event\.matches\) closeMenu\(\)/);
