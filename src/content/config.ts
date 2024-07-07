import { defineCollection, z } from 'astro:content';

const news = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(),
        authorBlog: z.object({
            name: z.string(),
            role: z.string(),
            socials: z.object({
                github: z.string().optional(),
            })
        })
	}),
});


const wiki = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
    }),
})

export const collections = { news, wiki };