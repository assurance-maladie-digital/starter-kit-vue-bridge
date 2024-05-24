const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/HomePage.vue')
	},
	{
		path: '/test-inva',
		name: 'about',
		component: () => import('@/views/TestInva.vue')
	},
];

export default routes;
