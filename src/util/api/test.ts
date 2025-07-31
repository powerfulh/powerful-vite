import { ApiOperation } from 'powerful-api-vue3/npmdist/apis'

export default {
	Test_Noparam_Res2: {
		type: 'GET',
		url: 'https://jsonplaceholder.typicode.com/todos/2',
	} as ApiOperation<Placeholder>,
	Test_Noparam_Nores: {
		type: 'GET',
		url: 'https://jsonplaceholder.typicode.com/todos/1',
	} as ApiOperation,
	Test_param_res: {
		type: 'get',
		url: 'https://jsonplaceholder.typicode.com/comments',
		param: [
			{
				name: 'postId',
			},
		],
	} as ApiOperation<Array<Comment1>>,
	Test_pathParam_res: {
		type: 'get',
		url: 'https://jsonplaceholder.typicode.com/posts/{id}',
		param: [
			{
				name: 'id',
				path: true,
			},
		],
	} as ApiOperation<Posts>,
	postTest: {
		type: 'post',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/powerful/authenticate',
		param: [{ name: 'id' }, { name: 'pw' }],
	} as ApiOperation<boolean>,
	Test_cloud: {
		type: 'get',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/api/curtain',
	} as ApiOperation<Array<Curtain>>,
	setCookieTest: {
		type: 'post',
		url: 'http://localhost:8080/authentication',
		param: [{ name: 'id' }, { name: 'pw' }],
	} as ApiOperation<boolean>,
}
