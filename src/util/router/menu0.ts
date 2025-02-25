const r: routeMenu = {
	path: '/menu0',
	sub: [
		{
			name: 'TestView',
			path: '/test-view',
			component: () => import('@/components/views/menu0/TestView.vue'),
		},
		{
			path: '/alertconfirm',
			name: 'AlertConfirm',
			component: () => import('@/components/views/menu0/AlertConfirm.vue'),
		},
	],
	name: 'Menu0',
}

export default r
