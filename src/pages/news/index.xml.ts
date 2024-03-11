import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
	return rss({
		title: "TeaClient News/Updates",
		description: "Update your self on the latest news.",
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob("./*.{md,mdx}")),
		customData: "<language>en-us</language>",
		trailingSlash: false,
		stylesheet: "./feed.xsl",
	});
}
