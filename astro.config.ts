import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import metaTags from "astro-meta-tags";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://teaclient.net",
	server: {
		port: 7053,
	},
	integrations: [
		mdx(),
		metaTags(),
		sitemap(),
		tailwind({ nesting: true, applyBaseStyles: true }),
	],
	redirects: {
		"/discord": "https://discord.gg/ejFTe4Hfnc",
		"/klaas": "https://klaas.tiiny.site/",
		"/github": "https://github.com/TeaClientMC",
		"/roadmap": "https://github.com/orgs/TeaClientMC/projects/3",
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
			sourcemap: false,
		},
	},
});
