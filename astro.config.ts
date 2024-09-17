import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import fs from "node:fs";
import { defineConfig } from "astro/config";

// import pageInsight from "astro-page-insight";
import astroExpressiveCode, {
	ExpressiveCodeTheme,
} from "astro-expressive-code";

const customStyle = fs.readFileSync(
	new URL("./src/styles/codeTheme.jsonc", import.meta.url),
	"utf8",
);
const customTheme = ExpressiveCodeTheme.fromJSONString(customStyle);

// https://astro.build/config
export default defineConfig({
	site: "https://teaclient.net",
	server: {
		port: 7053,
	},
	integrations: [
		astroExpressiveCode({
			themes: [customTheme],
		}),
		mdx(),
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
		// pageInsight(),
	],
	redirects: {
		// Resources
		"/discord": "https://discord.gg/ejFTe4Hfnc",
		"/github": "https://github.com/TeaClientMC",
		"/roadmap": "https://github.com/orgs/TeaClientMC/projects/3",
		// Partner Networks
		"/dropps": "https://discord.gg/qFarXHT32J",
		// Easter-Eggs
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
