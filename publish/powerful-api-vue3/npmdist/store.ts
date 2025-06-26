import { defineStore } from 'pinia'

export default defineStore('PowerfulApi', {
	state: () => ({
		loadingStack: 0,
	}),
})
