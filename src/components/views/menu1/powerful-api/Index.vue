<script setup lang="ts">
import { getApiStore, injectApi } from 'powerful-api-vue3'
import { ref } from 'vue'

const api = injectApi()
const apiStore = getApiStore()

const v = ref({})
const p = ref({} as any)
const v2 = ref(0)
const anyParam = ref('')

function test1() {
	api.load('setCookieTest')
		.setParameter(ref({ id: 'test', pw: anyParam.value }))
		.setWhenSuccess(res => (v.value = res))
		.fire()
}
function test2() {
	api.load('getPowerfulApi')
		.setWhenSuccess(res => (v.value = res))
		.setWhenError(({ response }) => globalMode.info(response))
		.setWhenFinally(() => v2.value++)
		.fire()
}
function test3() {
	api.load('postPowerfulApi')
		.setWhenSuccess(res => globalMode.info(res))
		.fire()
}
function test4() {
	p.value = {
		name: 'test',
		data: anyParam.value,
	}
	api.load('putPowerfulApi')
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
function testPost() {
	api.load('postTest')
		.setParameter(ref({ id: '1', pw: '1' }))
		.setWhenSuccess(res => (v.value = res))
		.setWhenError(e => (v.value = e))
		.fire()
}
function testCloud() {
	api.load('Test_cloud')
		.setWhenSuccess(res => (v.value = res))
		.fire()
}
</script>

<template>
	<main>
		<h1>Powerful API 예제</h1>
		<input v-model="anyParam" placeholder="Any params" />
		<button @click="test1">Cookie test</button>
		<button @click="test2">Get api with authentication</button>
		<button @click="test3">Make my data</button>
		<button @click="test4">Update my data</button>
		<button @click="testPath">Test 6</button>
		<button @click="testPost">testPost</button>
		<button @click="testCloud">Test cloud</button>
		{{ v }}
		<template v-if="apiStore.loadingStack">로딩중~~</template>
		{{ v2 }}
	</main>
</template>
