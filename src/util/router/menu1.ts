const r: routeMenu = {
	path: '/menu1',
	sub: [
		{
			name: 'PowerfulGridSample',
			path: '/test-grid',
			component: () => import('@/components/views/menu1/grid/Index.vue'),
		},
	],
	name: 'Menu1',
}

export default r
