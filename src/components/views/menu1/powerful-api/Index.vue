<script setup lang="ts">
import { injectApi } from '@/api'
import { ref } from 'vue'

const api = injectApi()

const v = ref({})

function test1() {
	api.load('Test1')
		.setWhenSuccess(res => (v.value = res))
		.fire()
}
</script>

<template>
	<main>
		<h1>Powerful API 예제</h1>
		<button @click="test1">Test 1</button>
		{{ v }}
	</main>
</template>
