<script setup lang="ts">
import { getGrid } from '@/util/grid'
import PowerfulGrid from './PowerfulGrid.vue'

const { cols, gridView } = getGrid(
	{
		name: 'name',
	},
	{
		name: 'price',
		type: 'number',
	},
	{
		name: 'brand',
	},
)
let ti = 0

function insertTestData() {
	gridView.init(
		{
			name: 'water' + ti,
			price: 100 * ti,
			brand: '삼다수',
		},
		{
			name: 'snack' + ti,
			price: 120 * ti++,
			brand: '쫄병 스낵',
		},
	)
}
function toggleAdditionalCol() {
	if (cols.length == 2)
		cols.push({
			name: 'brand',
		})
	else cols.length = 2
}
</script>

<template>
	<main>
		<h1>반응형 헤더와 데이타</h1>
		<button @click="insertTestData">Data</button>
		<button @click="toggleAdditionalCol">Col</button>
		<PowerfulGrid :cols="cols" :grid-view="gridView" readonly />

		<h1>편집 가능한 데이타</h1>
		<PowerfulGrid :cols="cols" :grid-view="gridView" />
	</main>
</template>
