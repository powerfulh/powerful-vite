import { Method } from 'axios'

interface ApiOperation<R = void> {
	type: Method
	url: string
	res?: R
	param?: Array<{
		name: string
		path?: boolean
	}>
}
