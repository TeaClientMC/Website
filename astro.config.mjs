import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import react from "@astrojs/react";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 7053
  },
  cacheDir: "./src/*",
  integrations: [mdx(),  react(), svelte(), vue(), solidJs()]
});