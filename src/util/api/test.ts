import { Api } from '@/api/apis'

export default {
	Test_Noparam_Res2: {
		type: 'GET',
		url: 'https://jsonplaceholder.typicode.com/todos/2',
	} as Api<Placeholder>,
	Test_Noparam_Nores: {
		type: 'GET',
		url: 'https://jsonplaceholder.typicode.com/todos/1',
	} as Api,
	Test_param_res: {
		type: 'get',
		url: 'https://jsonplaceholder.typicode.com/comments',
		param: [
			{
				name: 'postId',
			},
		],
	} as Api<Array<Comment1>>,
	Test_pathParam_res: {
		type: 'get',
		url: 'https://jsonplaceholder.typicode.com/posts/{id}',
		param: [
			{
				name: 'id',
				path: true,
			},
		],
	} as Api<Posts>,
}
