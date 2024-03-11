import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://teaclient.net",
	server: {
		port: 7053,
	},
	integrations: [
		mdx(),
		metaTags(),
		tailwind({
			nesting: true,
		}),
		sitemap({
			customPages: ["https://teaclient.net/docs"],
		}),
	],
	redirects: {
		"/discord": "https://discord.gg/ejFTe4Hfnc",
		"/klaas": "https://klaas.tiiny.site/",
		"/github": "https://github.com/TeaClientMC",
	},
	vite: {
		resolve: {
			alias: {
				"@layout": "src/layouts",
				"@component": "src/components",
				"@scripts": "src/scripts",
				"@styles": "src/styles",
				"@assets": "src/assets",
			},
		},
		build: {
			minify: true,
			sourcemap: true,
		},
	},
});
