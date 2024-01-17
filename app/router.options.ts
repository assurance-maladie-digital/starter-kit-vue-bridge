import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
	// https://router.vuejs.org/api/interfaces/routeroptions.html#routes
	routes: (_routes) => [
		{
			name: "home",
			path: "/",
			component: () =>
				import("~/pages/index.vue").then((r) => r.default || r),
		},
		{
			name: "about",
			path: "/a-propos",
			component: () =>
				import("~/views/About.vue").then((r) => r.default || r),
		},
		{
			name: "maintenance",
			path: "/maintenance",
			component: () =>
				import("~/views/Maintenance.vue").then((r) => r.default || r),
		}
	],
};
