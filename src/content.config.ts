import { defineCollection, z, reference } from "astro:content";
import { glob } from "astro/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { docsLoader } from "@astrojs/starlight/loaders";

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	authors: defineCollection({
		loader: glob({ pattern: "[^_]*.json", base: "./src/content/authors/" }),
		schema: z.object({
			name: z.string(),
			image: z.string().url(),
			namemc: z.string().optional(),
			discord: z.string().optional(),
			github: z.string().optional(),
		}),
	}),
	news: defineCollection({
		type: "content",
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				pubDate: z.coerce.date(),
				author: reference("authors"),
				description: z.string(),
				banner: image(),
			}),
	}),
	legal: defineCollection({
		loader: glob({ pattern: "[^_]*.{mdx, md}", base: "./src/content/legal/" }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			lastUpdated: z.coerce.date(),
		}),
	}),
};
