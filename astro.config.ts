// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

import pageInsight from "astro-page-insight";

import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
	site: "https://teaclient.net",
	redirects: {
		"/discord": "https://discord.gg/nCSPd7XeWh",
		"/github": "https://github.com/TeaClientMC",
		"/twitter": "https://twitter.com/@TeaClientMC",
	},
	integrations: [
		starlight({
			title: "TeaClient",
			logo: {
				src: "./public/icon_clear.webp",
			},
			disable404Route: true,
			tableOfContents: true,
			lastUpdated: true,
			social: [
				{
					icon: "discord",
					label: "Discord",
					href: "/discord",
				},
				{
					icon: "github",
					label: "GitHub",
					href: "/github",
				},
			],
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
		sitemap(),
		pageInsight(),
		metaTags(),
	],
	vite: {
		resolve: {
			alias: {
				"@/*": "src/*",
			},
		},
		build: {
			minify: true,
			sourcemap: "hidden",
		},
		plugins: [tailwindcss()],
	},
});
