export const defaultMeta = {
	title: "Home | TeaClient Website",
	description: "A QOL Minecraft Client for modern versions of Minecraft",
	openGraph: {
		basic: {
			title: "Home | TeaClient Website",
			type: "website",
			image: "/banner.webp",
		},
		optional: {
			description: "A QOL Minecraft Client for modern versions of Minecraft",
			siteName: "TeaClient",
		},
	},
	twitter: {
		card: "summary_large_image",
		title: "Home | TeaClient Website",
		description: "A QOL Minecraft Client for modern versions of Minecraft",
		image: "/banner.webp",
	},
	extend: {
		link: [
			{ rel: "icon", href: "/icon.webp" },
			{ rel: "apple-touch-icon", type: "image/x-icon", href: "/icon.webp" },
			{ rel: "sitemap", href: "/sitemap-index.xml" },
		],
		meta: [
			{ name: "theme-color", content: "#410A6B" },
			{ name: "darkreader-lock" },
			{
				httpEquiv: "Content-Security-Policy",
				content: "Content-Security-Policy: default-src 'none'; script-src 'self'; ...",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1.0, shrink-to-fit=yes, viewport-fit=cover",
			},
		],
	},
};


