const routes = [
	{
		name: "index",
		path: "/",
		component: () => import("@/views/Home.vue"),
	},
	{
		name: "home",
		path: "/home",
		component: () => import("@/views/Home.vue"),
	},
	{
		name: "tokens",
		path: "/tokens",
		component: () => import("@/views/Tokens.vue"),
	},
	{
		name: "maintenance",
		path: "/maintenance",
		component: () => import("@/views/Maintenance.vue"),
	},
	{
		name: "not-found",
		path: "/not-found",
		component: () => import("@/views/NotFound.vue"),
	},
];

export default routes;
