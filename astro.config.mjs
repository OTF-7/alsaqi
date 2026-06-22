import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://alsaqiwater.com",
  compressHTML: true,
  trailingSlash: "always",
  build: {
    /* keep all CSS external so the CSP never needs style-src 'unsafe-inline' */
    inlineStylesheets: "never",
  },
  vite: {
    preview: {
      allowedHosts: ["alsaqi.alromanaads.com", "alsaqi.omartaha.net", "alsaqiwater.com", "www.alsaqiwater.com"]
    }
  },
  /* astro preview builds its own Vite config (configFile: false) and only
     reads the top-level `server` option — vite.preview.* is ignored */
  server: {
    allowedHosts: ["alsaqi.alromanaads.com", "alsaqi.omartaha.net", "alsaqiwater.com", "www.alsaqiwater.com"],
  },
});
