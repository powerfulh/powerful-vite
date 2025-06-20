import { reactive } from 'vue'
import { Initializable, initializableList } from '.'

type RowStat = 'N' | 'C' | 'U' | 'D'
type FinalField<T extends Array<Col>> = {
	[K in keyof T]: T[K]['name'] extends infer S extends string ? S : never | T[K]['child'] extends infer C extends Array<Col> ? FinalField<C> : never
}[number]

export interface Col {
	name: string // data key
	label?: string // 없으면 name
	child?: Array<Col>
}
interface DefinedCol extends Col {
	colspan: number
}
export interface Table {
	header: Array<Array<Col>>
	finalCols: Array<Col>
}
interface Row {
	_status: RowStat
	_origin: number
}
export interface GridView<T> {
	init: (...d: Array<T>) => void
	data: Initializable<T & Row>
}

export function makeTable(t: Array<Col>, depth: number, { header, finalCols }: Table) {
	t.forEach((item: DefinedCol) => {
		if (header[depth] == undefined) header.push([])
		header[depth].push(item)
		if (item.child) {
			makeTable(item.child, depth + 1, { header, finalCols })
			item.colspan = item.child.reduce((r, childItem: DefinedCol) => r + childItem.colspan, 0)
		} else {
			item.colspan = 1
			finalCols.push(item)
		}
	})
}
function cols(...c: Array<Col>) {
	return reactive(c)
}
function getGridView<T>() {
	const gv = reactive({ data: initializableList() }) as GridView<T>
	gv.init = (...d: Array<T>) => {
		gv.data.init(...d.map((item, i) => ({ ...item, _status: 'N' as const, _origin: i })))
	}
	return gv
}
export function getGrid<const T extends Array<Col>>(...c: T) {
	return {
		cols: cols(...c),
		gridView: getGridView<{ [K in FinalField<typeof c>]: any }>(),
	}
}
