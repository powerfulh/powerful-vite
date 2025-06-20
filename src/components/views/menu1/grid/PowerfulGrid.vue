<script setup lang="ts">
import { Col, GridView, makeTable, Table } from '@/util/grid'
import { computed } from 'vue'

const props = defineProps<{
	cols: Array<Col>
	gridView: GridView<any>
}>()

const table = computed(() => {
	const result: Table = {
		header: [[]],
		finalCols: [],
	}
	makeTable(props.cols, 0, result)
	return result
})
</script>

<template>
	<!-- 패이징은 제외, 필요하면 레비 참고 -->
	<table class="powerful-grid">
		<!-- <colgroup></colgroup> -->
		<thead>
			<tr v-for="(item, i) in table.header" :key="i">
				<!-- <th>상태</th> -->
				<th v-for="(th, ii) in item" :key="ii">{{ th.label || th.name }}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item, i) in gridView.data" :key="i">
				<td v-for="(td, ii) in table.finalCols" :key="ii" :class="`col-${td.name}`">{{ item[td.name] }}</td>
			</tr>
		</tbody>
	</table>
</template>

<style lang="scss" scoped>
table {
	border-collapse: collapse;
}
th,
td {
	border: 1px solid;
}
</style>
