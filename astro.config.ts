import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import tailwindcssNesting from 'tailwindcss/nesting';

import metaTags from 'astro-meta-tags';

// https://astro.build/config
export default defineConfig({
  site: 'https://teaclient.net',
  server: {
    port: 7053,
  },
  integrations: [mdx(), tailwind(), metaTags()],
  experimental: {},
  redirects: {
    '/discord': 'https://discord.gg/ejFTe4Hfnc',
    '/klaas': 'https://klaas.tiiny.site/',
  },
  vite: {
    resolve: {
      alias: {
        '@assets': '/src/assets/',
      },
    },
    build: {
      minify: true,
      sourcemap: true,
    },
    css: {
      postcss: {
        plugins: [
          postcssImport(),
          tailwindcssNesting(),
          tailwindcss(),
          autoprefixer(),
        ],
      },
    },
  },
});
