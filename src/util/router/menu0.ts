const r: routeMenu = {
	path: '/menu0',
	sub: [
		{
			name: 'TestView',
			path: '/test-view',
			component: () => import('@/components/views/menu0/home/TestView.vue'),
		},
		{
			path: '/alertconfirm',
			name: 'AlertConfirm',
			component: () => import('@/components/views/menu0/alert-confirm/Index.vue'),
		},
		{
			path: '/testps',
			name: 'PowerfulSelectSample',
			component: () => import('@/components/views/menu0/PowerfulSelect.vue'),
		},
	],
	name: 'Menu0',
}

export default r
