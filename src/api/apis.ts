import { Method } from 'axios'
import dto from './dto.json'
import test1 from './test1.json'

export interface Loaded {
	readonly type: Method
	readonly url: string
	readonly param?: Array<{
		name: string
		required?: boolean
	}>
}
type Api<T extends string> = {
	[key in T]: Loaded
}

const a = {
	dtos: {
		...dto,
	},
	apis: {
		...(test1 as Api<keyof typeof test1>),
	},
}

export default a
