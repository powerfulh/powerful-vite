import { Api } from '@/api/apis'

export default {
	Test_Noparam_Res: {
		type: 'get',
		url: 'https://official-joke-api.appspot.com/random_joke',
	} as Api<Joke>,
}
