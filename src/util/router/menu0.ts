const r: routeMenu = {
	path: '/menu0',
	sub: [
		{
			name: 'TestView',
			path: '/test-view',
			component: () => import('@/views/menu0/TestView.vue'),
		},
	],
	name: 'Menu0',
}

export default r
