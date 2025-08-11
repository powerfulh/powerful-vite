import { defineStore } from 'pinia'
import { ApiOption } from './powerful-api-vue3'

export default defineStore('PowerfulApi', {
	state: () => ({
		loadingStack: 0,
		globalOption: {} as ApiOption,
	}),
})
