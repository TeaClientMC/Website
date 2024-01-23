import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import postcssImport from 'postcss-import';
import tailwindcssNesting from 'tailwindcss/nesting';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer'
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://teaclient.net',
  server: {
    port: 7053,
  },
  integrations: [mdx(), tailwind()],
  experimental: {},
  redirects: {
    '/discord': 'https://discord.gg/ejFTe4Hfnc',
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          postcssImport(),
          tailwindcssNesting(),
          tailwindcss(),
          autoprefixer()
        ]
      }
    }
  }
});
