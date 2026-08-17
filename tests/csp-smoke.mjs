import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const componentsDir = join(root, "src/components");
const componentFiles = readdirSync(componentsDir).filter((file) => file.endsWith(".astro"));
const inlineStyles = componentFiles.flatMap((file) => {
  const source = readFileSync(join(componentsDir, file), "utf8");
  return /\bstyle\s*=/.test(source) ? [file] : [];
});

assert.deepEqual(
  inlineStyles,
  [],
  `components must not depend on CSP-blocked inline styles: ${inlineStyles.join(", ")}`,
);

const headers = readFileSync(join(root, "public/_headers"), "utf8");
assert.doesNotMatch(headers, /style-src-attr\s+'unsafe-inline'/, "the site should not need unsafe inline styles");
