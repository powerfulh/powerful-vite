<script setup>
import { computed, isProxy, provide, reactive, toRaw } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import api from '@/util/api'
import TopHeader from './components/app/TopHeader.vue'

const router = useRouter()
const route = useRoute()

const d = import.meta.env.MODE == 'development'
const alertModal = reactive({
	info: '',
	err: '',
	cf: '',
	confirm: null,
	// prompt 구현 안함
})
const devCommandCenter = {
	R: () => router.replace(route.path + '_refresh'),
}

const openAlertModal = computed(() => alertModal.info || alertModal.err || alertModal.cf)

function devCommand() {
	if (d) {
		const command = prompt() || ''
		devCommandCenter[command.toUpperCase()]()
	}
}
function initAlert() {
	alertModal.cf = ''
	alertModal.err = ''
	alertModal.info = ''
	if (alertModal.then) {
		alertModal.then()
		delete alertModal.then
	}
	alertModal.confirm = null
}
function getCf(msg, callback) {
	alertModal.cf = msg
	alertModal.confirm = callback
	return {
		// cf에서의 then은 뭘 누르건 실행된다.
		then(cb) {
			alertModal.then = cb
		},
	}
}

globalMode = d
	? {
			log: (...v) => {
				const logList = [...v].map(item => {
					if (isProxy(item)) return toRaw(item)
					else return item
				})
				console.groupCollapsed(...logList)
				console.trace()
				console.groupEnd()
			},
			warn: (...v) => {
				console.warn(...v)
			},
			err: (...v) => {
				console.error(...v)
				alertModal.err = v[0]
				return {
					then(cb) {
						alertModal.then = cb
					},
				}
			},
			info: (...v) => {
				globalMode.log(...v)
				alertModal.info = v[0]
				return {
					then(cb) {
						alertModal.then = cb
					},
				}
			},
			getCf,
		}
	: {
			log() {},
			warn() {},
			err: (...v) => {
				alertModal.err = v[0]
				return {
					then(cb) {
						alertModal.then = cb
					},
				}
			},
			info: (...v) => {
				alertModal.info = v[0]
				return {
					then(cb) {
						alertModal.then = cb
					},
				}
			},
			getCf,
		}
provide('api', api.getLauncher())
provide('dcc', devCommandCenter)
</script>

<template>
	<template v-if="d">
		<!-- @contextmenu.prevent="devCommand" -->
		<span id="represent-dev" @click.ctrl.exact="devCommand">Now Dev</span>
	</template>

	<TopHeader />

	<RouterView />

	<c-m v-if="openAlertModal" :alert="openAlertModal" :confirm="alertModal.confirm" @close="initAlert"></c-m>
</template>

<style scoped>
#represent-dev {
	position: absolute;
	opacity: 0.3;
	z-index: 10001;
	color: darkcyan;
	background-color: aquamarine;
	user-select: none;
}
</style>
