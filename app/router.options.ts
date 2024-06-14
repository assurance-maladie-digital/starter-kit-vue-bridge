import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
	// https://router.vuejs.org/api/interfaces/routeroptions.html#routes
	routes: (_routes) => [
		{
			name: 'index',
			path: '/',
			component: () => import('~/src/views/Home.vue').then(r => r.default || r)
		},
		{
			name: 'home',
			path: '/home',
			component: () => import('~/src/views/Home.vue').then(r => r.default || r)
		},
		{
			name: 'tokens',
			path: '/tokens',
			component: () => import('~/src/views/Tokens.vue').then(r => r.default || r)
		},
		{
			name: 'maintenance',
			path: '/maintenance',
			component: () => import('~/src/views/Maintenance.vue').then(r => r.default || r)
		},
		{
			name: 'not-found',
			path: '/not-found',
			component: () => import('~/src/views/NotFound.vue').then(r => r.default || r)
		},
		{
			name: 'test-inva',
			path: '/test-inva',
			component: () => import('~/src/views/TestInva.vue').then(r => r.default || r)
		},
	],
}
