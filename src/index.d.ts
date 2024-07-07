declare namespace globalMode {
	function log(...v: any): void
	function warn(...v: any): void
	function err(...v: any): void
	function info(...v: any): void
	function getCf(msg?: String): Boolean
}

declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}
