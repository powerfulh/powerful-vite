<script setup lang="ts">
import { getApiStore, injectApi } from 'powerful-api-vue3'
import { ref } from 'vue'

const api = injectApi()
const apiStore = getApiStore()

const v = ref({})
const p = ref({} as any)
const v2 = ref(0)

function test1() {
	api.load('Test_Noparam_Res')
		.setWhenSuccess(res => (v.value = res))
		.fire()
}
function test2() {
	api.load('Test_Noparam_Res2')
		.setWhenSuccess(res => (v.value = res))
		.setWhenFinally(() => v2.value++)
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
function testPath() {
	p.value.id = '1'
	api.load('Test_pathParam_res')
		.setParameter(p)
		.setWhenSuccess(res => (v.value = res))
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
		<button @click="testPath">Test 6</button>
		{{ v }}
		<template v-if="apiStore.loadingStack">로딩중~~</template>
		{{ v2 }}
	</main>
</template>
