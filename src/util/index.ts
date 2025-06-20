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
