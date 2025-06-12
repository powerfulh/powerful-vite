<script setup lang="ts">
import { ref } from 'vue'
import ChildModel from './ChildModel.vue'

const textData = ref('')
</script>

<template>
	<main>
		<h1>3.4 부터 권장한다는 defineModel 써보기</h1>
		<ChildModel v-model="textData" />
		{{ textData }}
		<!-- 존나 편해졌다 -->
	</main>
</template>
