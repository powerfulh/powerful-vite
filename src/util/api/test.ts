import { Api } from '@/api/apis'

export default {
	Test_Noparam_Res2: {
		type: 'GET',
		url: 'https://jsonplaceholder.typicode.com/todos/2',
	} as Api<Placeholder>,
}
