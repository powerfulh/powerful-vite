declare interface routeMeta {
	login?: Boolean
	// popup?: Boolean
}
declare interface routeItem {
	path: string
	name?: String
	meta?: routeMeta
	component?: () => Promise<typeof import('*.vue')>
	redirect?: String
	children?: Array<routeItem>
}
declare interface routeMenu {
	path: string
	sub: Array<routeItem | routeMenu>
	name: String
	meta?: routeMeta
}
