const r: routeMenu = {
	path: '/menu0',
	sub: [
		{
			name: 'TestView',
			path: '/test-view',
			component: () => import('@/views/menu0/TestView.vue'),
		},
		{
			path: '/alertconfirm',
			name: 'AlertConfirm',
			component: () => import('@/views/AlertConfirm.vue'),
		},
	],
	name: 'Menu0',
}

export default r
