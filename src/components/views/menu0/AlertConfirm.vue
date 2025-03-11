<script setup lang="ts">
import { reactive, ref } from 'vue'

const modal = reactive({
	basic: false,
})
const confirmAnswer = ref(false)

function onClickCommonInfo() {
	globalMode.info(123)
}
function onClickCommonConfirm() {
	globalMode.getCf('Confirm', res => (confirmAnswer.value = res))
}
</script>

<template>
	<main>
		<h1>공통 모달 예제</h1>
		<button @click="modal.basic = true">일반 모달</button>
		<button @click="onClickCommonInfo">공통 알림</button>
		<button @click="onClickCommonConfirm">공통 확인</button>
		공통 확인 결과: {{ confirmAnswer }}

		<c-m v-if="modal.basic" title="공통 일반 모달" @close="modal.basic = false"> 다양하게 공통으로 쓸 모달 </c-m>
	</main>
</template>
