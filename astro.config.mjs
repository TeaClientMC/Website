import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://teaclient.net',
  server: {
    port: 7053,
  },
  integrations: [mdx(), tailwind()],
  experimental: {},
});
