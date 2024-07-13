interface ModalCallback {
	then: Function
}

declare namespace globalMode {
	function log(...v: any): void
	function warn(...v: any): void
	function err(...v: any): ModalCallback
	function info(...v: any): ModalCallback
	function getCf(msg: String, callback: Function): ModalCallback
}

declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}
