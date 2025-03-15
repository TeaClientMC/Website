import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import metaTags from "astro-meta-tags";
import icon from "astro-icon";
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
		starlight({
			title: "TeaClient Docs",
			disable404Route: true,
			tableOfContents: true,
			lastUpdated: true,
			favicon: "/Favicon.png",
			logo: {
				src: "./public/icon.webp",
			},
			social: {
				discord: site + "/discord",
				github: site + "/github",
			},
			customCss: ["./src/styles/starlight.css"],
			sidebar: [
				{
					label: "Home",
					link: "wiki",
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
				},
			],
			editLink: {
				baseUrl: "https://github.com/teaclientmc/website",
			},
		}),
		mdx(),
		icon(),
	],
	redirects: {
		"/discord": "https://discord.gg/ejFTe4Hfnc",
		"/github": "https://github.com/TeaClientMC",
		"/eveeifyeve": "https://eveeifyeve.pages.dev",
		"/klaasa": "https://klaas.tiiny.site/",
	},
	vite: {
		resolve: {
			alias: {
				"@": "src/",
			},
		},
		plugins: [tailwindcss()],
		build: {
			minify: true,
			sourcemap: false,
		},
	},
});
