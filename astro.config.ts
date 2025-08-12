// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import pageInsight from "astro-page-insight";
import metaTags from "astro-meta-tags";
import robots from "astro-robots";
import { defaultMeta } from "./src/config";

// https://astro.build/config
export default defineConfig({
	site: "https://teaclient.com",
	redirects: {
		"/discord": "https://discord.gg/YKR36BuRba",
		"/github": "https://github.com/TeaClientMC",
		"/twitter": "https://twitter.com/@TeaClientMC",
		"/download": "/",
	},
	experimental: {
		csp: {
			styleDirective: {
				resources: [
					"'self'",
					"https://cdn.cloudflare.com/"
				]
			}
		}
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
			routeMiddleware: ["src/routeData.ts"],
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
			head: [
				{
					tag: "meta",
					attrs: {
						name: "themecolor",
						content: defaultMeta.extend.meta[0].content,
					},
				},
			],
			editLink: {
				baseUrl: "https://github.com/teaclientmc/website",
			},
		}),
		sitemap({
			filter: (page) =>
				page !== `${import.meta.env.SITE}/staffhandbook-13-4-24`,
		}),
		pageInsight(),
		metaTags(),
		robots({
			host: import.meta.env.SITE,
			sitemap: true,
			policy: [
				{
					userAgent: [
						"Applebot",
						"Googlebot",
						"bingbot",
						"Yandex",
						"Yeti",
						"Baiduspider",
						"360Spider",
						"*",
					],
					allow: ["/", "/wiki"],
					disallow: ["/landing"],
				},
			],
		}),
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
