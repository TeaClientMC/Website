import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    host: true
  },
  cacheDir: "./src/pages/*",
  integrations: [tailwind(), svelte(), mdx(), vue()],
});