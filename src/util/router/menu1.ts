const r: routeMenu = {
	path: '/menu1',
	sub: [
		{
			name: 'PowerfulGridSample',
			path: '/test-grid',
			component: () => import('@/components/views/menu1/grid/Index.vue'),
		},
		{
			name: 'PowerfulApiSample',
			path: '/test-api',
			component: () => import('@/components/views/menu1/powerful-api/Index.vue'),
		},
	],
	name: 'Menu1',
}

export default r
