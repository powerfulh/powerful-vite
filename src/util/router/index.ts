import { RouteRecordRaw } from 'vue-router'
import admin from './admin'
import company from './company'
import item from './item'
import mileup from './mileup'
import mileuse from './mileuse'
import partner from './partner'
import person from './person'
import star from './star'
import statistic from './statistic'

const list: Array<routeItem | routeMenu> = [
	{
		path: '/',
		// redirect: '/login',
		redirect: '/nac/view/person/manage/Member_DetailInfo',
		name: 'Base url',
	},
	{
		path: '/login',
		component: () => import('@/views/group/main/AcLogin.vue'),
		name: 'Login',
		meta: {
			login: true,
		},
	},
	{
		path: '/bg',
		component: () => import('@/views/common/BackGround.vue'),
		name: 'BackGround',
	},
	{
		path: '/nac/view',
		name: 'nac-view',
		sub: [admin, company, item, mileup, mileuse, partner, person, star, statistic],
	},
]

const routes: Array<RouteRecordRaw> = []

function isItem(target: routeItem | routeMenu): target is routeItem {
	return (target as routeItem).component !== undefined || (target as routeItem).redirect !== undefined || (target as routeItem).children !== undefined
}
function makeRoutes(l: Array<routeItem | routeMenu>, p: string): void {
	l.forEach(item => {
		if (isItem(item)) {
			item.path = p + item.path
			if (item.children && item.children.length) {
				item.children.forEach(child => {
					if (child.path) {
						child.meta = Object.assign(
							{
								depth4: true,
							},
							child.meta,
						)
					}
				})
			}
			routes.push(item as RouteRecordRaw)
		} else makeRoutes(item.sub, p + item.path)
	})
}

makeRoutes(list, '')

export default {
	list,
	routes,
}
