<script setup>
import { reactive, ref } from 'vue';
import { PS } from "powerful-select";

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
const selVal = ref('')
</script>

<template>
	<main>
		<h1>Home</h1>
		<p-s v-model="selVal" :list="testList"></p-s>
		selVal: {{ selVal }}
		<br>
		<input type="text" placeholder="Other input">
	</main>
</template>