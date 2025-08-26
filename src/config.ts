import type { StarlightIcon } from "@astrojs/starlight/types";

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
				content:
					"Content-Security-Policy: default-src 'none'; script-src 'self'; ...",
			},
			{
				name: "viewport",
				content:
					"width=device-width, initial-scale=1.0, shrink-to-fit=yes, viewport-fit=cover",
			},
		],
	},
};

export const socials: Array<{
	title: string;
	link: string;
	starlightIcon: StarlightIcon;
}> = [
	{
		title: "Discord",
		link: "https://discord.gg/YKR36BuRba",
		starlightIcon: "discord",
	},
	{
		title: "Youtube",
		link: "https://youtube.com/@TeaClientMC",
		starlightIcon: "youtube",
	},
	{
		title: "Twitch",
		link: "https://twitch.tv/teaclient",
		starlightIcon: "twitch",
	},
	{
		title: "Bluesky",
		link: "https://bsky.app/profile/teaclient.bsky.social",
		starlightIcon: "blueSky",
	},
	{
		title: "X",
		link: "https://x.com/@TeaClientMC",
		starlightIcon: "x.com",
	},
	{
		title: "Github",
		link: "https://github.com/TeaClientMC",
		starlightIcon: "github",
	},
];

export const redirects = {
	"/download": "/",
	...Object.fromEntries(
		socials.map((info) => [`/${info.title.toLowerCase()}`, info.link]),
	),
};

export const starlightSocials = socials.map((info) => ({
	icon: info.starlightIcon,
	label: info.title,
	href: `/${info.title.toLowerCase()}`,
}));
