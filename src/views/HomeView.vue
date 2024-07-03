<script setup>
import { reactive } from 'vue';
import PS from 'powerful-select';
import VDP from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const list = reactive([
	{
		code: 1,
		text: 'a'
	}
])
</script>

<template>
	<main>
		<h1>Home</h1>
		<p-s :list="list"></p-s>
		<v-d-p></v-d-p>
	</main>
</template>
