import type { StarlightIcon } from "@astrojs/starlight/types";

export const defaultMeta = {
	title: "Home | TeaClient Website",
	description: "A QOL Minecraft Client for modern versions of Minecraft",
	image: "/banner.webp",
	image_alt: "TeaClient Default Banner",
	theme_color: "#410A6B",
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
		title: "Tiktok",
		link: "https://www.tiktok.com/@teaclientmc",
		starlightIcon: "tiktok",
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
	href: info.link,
}));
