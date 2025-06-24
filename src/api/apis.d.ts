import { Method } from 'axios'

interface Api<R = void> {
	type: Method
	url: string
	res?: R
	param?: Array<{
		name: string
	}>
}
