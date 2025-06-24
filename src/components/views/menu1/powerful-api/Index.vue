<script setup lang="ts">
import { injectApi } from '@/api'
import { ref } from 'vue'

const api = injectApi()

const v = ref({})
const p = ref({} as any)

function test1() {
	api.load('Test_Noparam_Res')
		.setWhenSuccess(res => (v.value = res))
		.fire()
}
function test2() {
	api.load('Test_Noparam_Res2')
		.setWhenSuccess(res => (v.value = res))
		.fire()
}
function test3() {
	api.load('Test_Noparam_Nores')
		.setWhenSuccess(res => globalMode.info(res))
		.fire()
}
function test4(postId: string) {
	p.value.postId = postId
	api.load('Test_param_res')
		.setParameter(p)
		.setWhenSuccess(res => (v.value = res[0]))
		.fire()
}
</script>

<template>
	<main>
		<h1>Powerful API 예제</h1>
		<button @click="test1">Test 1</button>
		<button @click="test2">Test 2</button>
		<button @click="test3">Test 3</button>
		<button @click="test4('3')">Test 4</button>
		<button @click="test4('2')">Test 5</button>
		{{ v }}
	</main>
</template>
