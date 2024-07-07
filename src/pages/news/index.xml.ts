import rss, {
	pagesGlobToRssItems,
	type RSSFeedItem,
	type RSSOptions,
} from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: RSSOptions) {
	const posts = await getCollection("news");
	return rss({
		title: "TeaClient News/Updates",
		description: "Update your self on the latest news.",
		site: context.site,
		items:  posts.map((post) => ({
			...post.data,
			link: `/news/${post.slug}/`,
		}))
		customData: "<language>en-us</language>",
		trailingSlash: false,
	});
}
