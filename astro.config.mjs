import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://teaclient.net",
  server: {
    port: 7053
  },
  cacheDir: "./src/*",
  integrations: [mdx()]
});