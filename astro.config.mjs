import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import preact from "@astrojs/preact";


// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  cacheDir: "./src/*",
  integrations: [
      tailwind(),
      svelte(),
      mdx(),
      vue(), 
      react(),
      ],
});