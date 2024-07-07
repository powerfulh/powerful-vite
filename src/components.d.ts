import CommonModal from './components/CommonModal.vue'
import CommonSelect from './components/CommonSelect.vue'

declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		CM: typeof CommonModal
		CS: typeof CommonSelect
	}
}
// https://github.com/vuejs/language-tools/issues/4503
