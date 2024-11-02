import starlightPlugin from "@astrojs/starlight-tailwind";

const accent = {
	200: "#c8c8c8",
	600: "#4e4e4e",
	900: "#323232",
	950: "#242424",
};
const gray = {
	100: "#f6f6f6",
	200: "#eeeeee",
	300: "#c2c2c2",
	400: "#8b8b8b",
	500: "#585858",
	700: "#383838",
	800: "rgba(0, 0, 0, 0.212)",
	900: "#181818",
};

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: { accent, gray },
			animation: {
				tabgroup_transisiton: "transition: background-color 0.3s",
			},
		},
	},
	plugins: [starlightPlugin()],
};
