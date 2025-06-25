import { ApiOperation } from 'powerful-api-vue3/dist/apis'

export default {
	Test_Noparam_Res: {
		type: 'get',
		url: 'https://official-joke-api.appspot.com/random_joke',
	} as ApiOperation<Joke>,
}
