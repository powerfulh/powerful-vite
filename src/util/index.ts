import numeral from 'numeral-es6'

export interface Initializable<T = any> extends Array<T> {
	init: (...item: Array<T>) => void
}

export function initializableList() {
	const l = [] as Initializable
	l.init = function (...item) {
		this.length = 0
		this.push(...item)
	}
	return l
}
export function numberFormat(n: any) {
	if (typeof n == 'number') return numeral(n).format(Number.isInteger(n) ? '0,0' : '0.00')
	return n
}
