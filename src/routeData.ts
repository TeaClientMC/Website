import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

const downloadPagePaginationLink = {
	type: "link",
	label: "Download",
	href: "/download/",
	badge: undefined,
	isCurrent: false,
	attrs: {},
} as const;

export const onRequest = defineRouteMiddleware((context) => {
	const { starlightRoute } = context.locals;

	if (starlightRoute.id === "wiki/players") {
		starlightRoute.pagination.next = downloadPagePaginationLink;
	}

	// TODO: Next page
	// else if (starlightRoute.id === "next_download") {
	// 	starlightRoute.pagination.prev = downloadPagePaginationLink;
	// }

	starlightRoute.sidebar = starlightRoute.sidebar.map((item) => {
		if (item.type === "link") return item;
		if (item.label !== "Players") return item;
		return {
			...item,
			entries: [...item.entries, downloadPagePaginationLink],
		};
	});
});
