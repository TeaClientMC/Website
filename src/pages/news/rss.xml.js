import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'TeaClient News Rss Feed',
    description: 'The Feed RSS feed for TeaClient news',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./*.{md,mdx}')),
    customData: `<language>en-us</language>`,
  });
}