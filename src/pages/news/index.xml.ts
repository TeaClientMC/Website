import rss, {
	pagesGlobToRssItems,
	type RSSFeedItem,
	type RSSOptions,
} from "@astrojs/rss";

export async function GET(context: RSSOptions) {
	return rss({
		title: "TeaClient News/Updates",
		description: "Update your self on the latest news.",
		site: context.site,
		items: (await pagesGlobToRssItems(
			import.meta.glob("./*/*.{md,mdx}"),
		)) as RSSFeedItem[],
		customData: "<language>en-us</language>",
		trailingSlash: false,
	});
}
