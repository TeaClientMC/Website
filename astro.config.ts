import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const site = "https://teaclient.net";

// https://astro.build/config
export default defineConfig({
	site: site,
	server: {
		port: 7053,
	},
	integrations: [
		metaTags(),
		sitemap({
			filter: (page) =>
				page !== `${import.meta.env.SITE}/staffhandbook-13-4-24`,
			customPages: ["docs.teaclient.net"],
		}),
		tailwind({
			nesting: true,
			applyBaseStyles: true,
		}),
		starlight({
			title: "TeaClient",
			disable404Route: true,
			tableOfContents: true,
			social: {
				discord: site + "/discord",
				github: site + "/github",
			},
			sidebar: [
				{
					label: "Home",
					link: "wiki/index",
				},
				{
					label: "Players",
					autogenerate: {
						directory: "wiki/players",
						collapsed: false,
					},
				},
				{
					label: "Developers",
					autogenerate: {
						directory: "wiki/developers",
						collapsed: true,
					},
				}
			],
			editLink: {
				baseUrl: "https://github.com/teaclientmc/website",
			},
		}),
		mdx(),
	],
	redirects: {
		"/discord": "https://discord.gg/ejFTe4Hfnc",
		"/github": "https://github.com/TeaClientMC",
		"/roadmap": "https://github.com/orgs/TeaClientMC/projects/3",
		"/dropps": "https://discord.gg/qFarXHT32J",
		"/klaas": "https://klaas.tiiny.site/",
	},
	vite: {
		resolve: {
			alias: {
				"@": "src/",
			},
		},
		build: {
			minify: true,
			sourcemap: false,
		},
	},
});
