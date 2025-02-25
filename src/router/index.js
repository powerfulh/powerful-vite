import { createRouter, createWebHistory } from 'vue-router'
import routerUtil from '@/util/router'
import HomeView from '@/components/views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		...routerUtil.routes,
	],
})

router.afterEach((to, from) => {
	// 유효하지 않은 라우트는 이전 라우트로 이동 => 동 라우트 새로 고침으로도 활용
	if (to.name == undefined) router.replace(from.fullPath)
})

export default router
