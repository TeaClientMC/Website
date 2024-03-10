import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import metaTags from 'astro-meta-tags';

// https://astro.build/config
export default defineConfig({
  site: 'https://teaclient.net',
  server: {
    port: 7053,
  },
  integrations: [mdx(), metaTags()],
  experimental: {},
  redirects: {
    '/discord': 'https://discord.gg/ejFTe4Hfnc',
    '/klaas': 'https://klaas.tiiny.site/',
    '/github': 'https://github.com/TeaClientMC'
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
    plugins: [tailwindcss()],
    css: {
      transformer: 'lightningcss'
    }
  },
});
