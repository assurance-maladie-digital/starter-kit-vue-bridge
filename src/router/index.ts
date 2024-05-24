const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/HomePage.vue')
	},
	{
		path: '/test-inva',
		name: 'Test Inva',
		component: () => import('@/views/TestInva.vue')
	},
	{
		path: '/header',
		name: 'header',
		component: () => import('@/views/headers/HeadersPage.vue')
	},
	{
		path: '/error',
		name: 'error',
		component: () => import('@/views/error/ErrorPage.vue')
	},
	{
		path: '/maintenance',
		name: 'maintenance',
		component: () => import('@/views/maintenance/MaintenancePage.vue')
	},
	{
		path: '/not-found',
		name: 'not-found',
		component: () => import('@/views/notFound/NotFoundPage.vue')
	},
	{
		path: '/user-menu-btn',
		name: 'user-menu-btn',
		component: () => import('@/views/userMenuBtn/UserMenuBtnPage.vue')
	},
	{
		path: '/dialog-box',
		name: 'dialog-box',
		component: () => import('@/views/dialogBox/DialogBoxPage.vue')
	},
	{
		path: '/nirfield',
		name: 'nirfield',
		component: () => import('@/views/nirfield/NirfieldPage.vue')
	},
	{
		path: '/notification-bar',
		name: 'notification-bar',
		component: () => import('@/views/notificationBar/NotificationBarPage.vue')
	},
	{
		path: '/period-field',
		name: 'period-field',
		component: () => import('@/views/periodField/PeriodFieldPage.vue')
	},
	{
		path: '/date-picker',
		name: 'date-picker',
		component: () => import('@/views/datePicker/DatePickerPage.vue')
	},
];

export default routes;
