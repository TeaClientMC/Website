import { defineCollection, reference, z } from "astro:content";

const news = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		desc: z.string(),
		pubDate: z.coerce.date(),
		banner: z.string(),
		bannerSize: z.number(),
		author: reference("authors"),
	}),
});

const authors = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		role: z.string(),
		img: z.string(),
		socials: z
			.object({
				github: z.string().optional(),
				discordServer: z.string().optional(),
			})
			.optional(),
	}),
});

const wiki = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
	}),
});

export const collections = { news, wiki, authors };
