<script setup lang="ts">
import { reactive, ref } from 'vue'

const v = ref('')
const l = reactive([
	{
		code: 'opt0',
		text: 'First',
	},
	{
		code: 'opt2',
		text: 'Second',
	},
])
</script>

<template>
	<main>
		<h1>파워풀 셀렉트 예제</h1>
		<c-s v-model="v" :list="l"></c-s>
		<br />
		여러 예제 만들고 나면 홈뷰에서 셀렉트 걷어내기 todo 홈 뷰의 존재의의가 필요 없다면 삭제 고려
	</main>
</template>
