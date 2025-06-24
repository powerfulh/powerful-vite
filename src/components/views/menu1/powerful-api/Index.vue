<script setup lang="ts">
import { injectApi } from '@/api'
import { ref } from 'vue'

const api = injectApi()

const v = ref({})

function test1() {
	api.load('Test_Noparam_Res')
		.setWhenSuccess(res => (v.value = res))
		.fire()
}
// function test2() {
// 	api.load('Test_Noparam_NoRes')
// 		.setWhenSuccess(res => (v.value = res))
// 		.fire()
// }
// function test3() {
// 	api.load('Test_Noparam_Res2')
// 		.setWhenSuccess(res => (v.value = res))
// 		.fire()
// }
</script>

<template>
	<main>
		<h1>Powerful API 예제</h1>
		<button @click="test1">Test 1</button>
		<!-- <button @click="test2">Test 2</button>
		<button @click="test3">Test 2</button> -->
		{{ v }}
	</main>
</template>
