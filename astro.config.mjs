import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://alsaqiwater.com",
  compressHTML: true,
  build: {
    /* keep all CSS external so the CSP never needs style-src 'unsafe-inline' */
    inlineStylesheets: "never",
  },
  /* astro preview builds its own Vite config (configFile: false) and only
     reads the top-level `server` option — vite.preview.* is ignored */
  server: {
    allowedHosts: ["alsaqi.omartaha.net", "alsaqiwater.com", "www.alsaqiwater.com"],
  },
});
