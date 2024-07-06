<script setup>
import { reactive, ref } from 'vue';
import CS from '@/components/CommonSelect.vue';

const testList = reactive([
	{
		code: 1,
		text: 'a'
	},
	{
		code: 2,
		text: 'b'
	},
])
const testList1 = reactive([
	{
		code: 1,
		text: 'a'
	},
	{
		code: 2,
		text: 'b'
	},
	{
		code: 3,
		text: 'c'
	},
])
const selVal = ref('')
const selVal1 = ref('')
</script>

<template>
	<main>
		<h1>Home</h1>
		<c-s v-model="selVal" :list="testList"></c-s>
		selVal: {{ selVal }}
		<br>
		<input type="text" placeholder="Other input">
		<br>
		<c-s v-model="selVal1" :list="testList1" multi></c-s>
		selVal1: {{ selVal1 }}
	</main>
</template>