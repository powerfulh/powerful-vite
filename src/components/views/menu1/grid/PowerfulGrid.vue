<script setup lang="ts">
import { numberFormat } from '@/util'
import { Col, GridView, makeTable, Table } from '@/util/grid'
import { computed } from 'vue'

const props = defineProps<{
	cols: Array<Col>
	gridView: GridView<{}>
	readonly?: boolean
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
				<th v-if="readonly != true && i == 0" :rowspan="table.header.length > 1 ? table.header.length : null">상태</th>
				<th v-for="(th, ii) in item" :key="ii">{{ th.label || th.name }}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item, i) in gridView.data" :key="i">
				<td v-if="readonly != true">{{ item._status }}</td>
				<td v-for="(td, ii) in table.finalCols" :key="ii" :class="`col-${td.name}`">
					<template v-if="readonly">{{ numberFormat(item[td.name]) }}</template>
					<!-- 현재는 타입이 인풋 타입에 호환되는 종류만 있지만 후에 추가 시 변경의 여지가 있음 250623 -->
					<input v-else v-model="item[td.name]" :type="td.type || 'text'" @input="gridView.set(item)" />
				</td>
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
