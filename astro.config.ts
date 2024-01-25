import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import postcssImport from 'postcss-import';
import tailwindcssNesting from 'tailwindcss/nesting';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwind from '@astrojs/tailwind';

import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  site: 'https://teaclient.net',
  server: {
    port: 7053
  },
  integrations: [mdx(), tailwind(), metaTags()],
  experimental: {},
  redirects: {
    '/discord': 'https://discord.gg/ejFTe4Hfnc'
  },
  vite: {
    resolve: {
      alias: {
        '@assets': '/src/assets/'
      }
    },
    css: {
      postcss: {
        plugins: [postcssImport(), tailwindcssNesting(), tailwindcss(), autoprefixer()]
      }
    }
  }
});