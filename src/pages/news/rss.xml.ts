import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'TeaClient News',
    description: 'The news for TeaClient',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./*.{md,mdx}')),
    customData: `<language>en-us</language>`,
  });
}