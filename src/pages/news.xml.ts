import { getCollection } from "astro:content";
import rss, { type RSSOptions } from "@astrojs/rss";

export async function GET(context: RSSOptions) {
	const posts = (await getCollection("news")).map((post) => ({
		title: post.data.title,
		description: post.data.description,
		author: post.data.author.id || "Unknown Author",
		banner: post.data.banner,
		pubDate: post.data.pubDate,
		link: `${context.site}/${post.slug}`,
	}));
	return rss({
		title: "TeaClient News/Updates",
		description: "Update your self on the latest news.",
		site: context.site,
		items: posts,
		customData: "<language>en-us</language>",
		trailingSlash: false,
	});
}
