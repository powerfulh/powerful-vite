<script setup>
import { reactive, ref } from 'vue'

const testList = reactive([
	{
		code: 1,
		text: 'a',
	},
	{
		code: 2,
		text: 'b',
	},
])
const testList1 = reactive([
	{
		code: 1,
		text: 'a',
	},
	{
		code: 2,
		text: 'b',
	},
	{
		code: 3,
		text: 'c',
	},
])
const testList2 = reactive([
	{
		code: 1,
		text: 'aa',
	},
	{
		code: 2,
		text: 'bb',
	},
	{
		code: 3,
		text: 'cc',
	},
	{
		code: 4,
		text: 'def',
	},
	{
		code: 5,
		text: 'ee',
	},
])
const selVal = ref('')
const selVal1 = ref('')
const selVal2 = ref('')
const confirmVal = ref(0)
const modal = ref(false)
const alertModal = ref(false)
const confirmModal = ref(false)

function whenConfirm(c) {
	if (c) confirmVal.value++
	else confirmVal.value--
}
</script>

<template>
	<main>
		<h1>Home</h1>
		<c-s v-model="selVal" :list="testList"></c-s>
		selVal: {{ selVal }}
		<br />
		<input type="text" placeholder="Other input" />
		<br />
		<c-s v-model="selVal1" :list="testList1" multi></c-s>
		selVal1: {{ selVal1 }}
		<br />
		<button @click="modal = true">Open modal</button>
		<button @click="alertModal = true">Open alert</button>
		<br />
		<button @click="confirmModal = true">Open Confirm</button>
		Confirm val: {{ confirmVal }}

		<c-m v-if="modal" title="Test title" @close="modal = false">
			<div class="modal-content">
				I am modal content
				<br />
				<c-s v-model="selVal2" :list="testList2" auto></c-s>
				<br />
				<input type="text" placeholder="Other input1" />
			</div>
		</c-m>
		<c-m v-if="alertModal" alert="Test alert" @close="alertModal = false"></c-m>
		<c-m v-if="confirmModal" alert="Test Confirm" :confirm="whenConfirm" @close="confirmModal = false"></c-m>
	</main>
</template>
