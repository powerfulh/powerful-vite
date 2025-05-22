<script setup lang="ts">
import { reactive, ref } from 'vue'

const v = ref('')
const v2 = ref('')
const v3 = ref('')
const v4 = ref('')
const l = reactive([
	{
		code: 'opt0',
		text: 'First',
	},
	{
		code: 'opt2',
		text: 'Second',
	},
	{
		code: 'opt3',
		text: 'Third',
	},
])
const fetchedList = reactive([])

// 서버에서 옵션 가져온다는 상황으로 옵션 비동기 재설정
setTimeout(() => {
	fetchedList.push(...l)
}, 2000)
</script>

<template>
	<main>
		<h1>파워풀 셀렉트 예제</h1>
		<!-- 내가 만들고 기억이 안 나지만 기본적으로 1번 옵션 자동 세팅인 듯 하다 -->
		하드 코드 옵션 구성
		<c-s v-model="v" :list="l"></c-s>
		<br />
		서버에서 받은 옵션 구성
		<c-s v-model="v2" :list="fetchedList"></c-s>
		<br />
		멀티 셀렉트
		<!-- 멀티는 자동 세팅이 아닌 듯 하다 -->
		<c-s v-model="v3" :list="l" multi></c-s>
		<br />
		키보드 입력
		<c-s v-model="v4" :list="l" auto></c-s>
	</main>
</template>
