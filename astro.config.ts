// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import pageInsight from "astro-page-insight";
import metaTags from "astro-meta-tags";
import robots from "astro-robots";
import { defaultMeta, redirects, starlightSocials } from "./src/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://teaclient.com",
	output: "server",
	redirects,
	experimental: {
		csp: {
			styleDirective: {
				resources: ["'self'", "https://cdn.cloudflare.com/"],
			},
		},
	},
	env: {
		schema: {
			TWITCH_CLIENT_ID: envField.string({
				context: "server",
				access: "public",
			}),
			TWITCH_CLIENT_SECRET: envField.string({
				context: "server",
				access: "secret",
			}),
		},
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
			social: starlightSocials,
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
						content: defaultMeta.theme_color,
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
		cloudflare({
			imageService: "cloudflare",
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
		ssr: {
			noExternal: ["simple-icons-astro"],
		},
		build: {
			minify: true,
			sourcemap: "hidden",
		},
		plugins: [tailwindcss() as any],
	},

	adapter: cloudflare(),
});
