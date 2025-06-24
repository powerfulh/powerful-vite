import { Method } from 'axios'
import test1 from './test1.json'

export interface Loaded {
	readonly type: Method
	readonly url: string
	readonly param?: Array<{
		name: string
		required?: boolean
	}>
	readonly res?: keyof Dto
}

type Api<T extends string> = {
	[key in T]: Loaded
}

const a = {
	apis: {
		...(test1 as Api<keyof typeof test1>),
	},
}

export default a
