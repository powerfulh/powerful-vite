import CommonModal from './components/CommonModal.vue'
import CommonSelect from './components/CommonSelect.vue'

// https://github.com/vuejs/language-tools/issues/4503
declare module 'vue' {
	export interface GlobalComponents {
		CM: typeof CommonModal
		CS: typeof CommonSelect
	}
}
