<script setup lang="ts">
import { reactive } from 'vue'

const modal = reactive({
	basic: false,
})
</script>

<template>
	<main>
		<h1>공통 모달 예제</h1>
		<button @click="modal.basic = true">일반 모달</button>

		<c-m v-if="modal.basic" title="공통 일반 모달" @close="modal.basic = false"> 다양하게 공통으로 쓸 모달 </c-m>
	</main>
</template>
