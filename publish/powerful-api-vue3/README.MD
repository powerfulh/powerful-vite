# powerful-api-vue3

```sh
npm i powerful-api-vue3
```

## 필수 필요 조건
- import @ 문법이 지원되어야 함
- `@/api/operation` 경로에 operation.js 또는 operation.ts 를 정의해야 함

## operation 입력 룰
`src\components\views\menu1\powerful-api\Index.vue`
예제 참고

```ts
export default {
	Test_Noparam_Res: {
		type: 'get',
		url: 'https://official-joke-api.appspot.com/random_joke',
	} as ApiOperation<Joke>,
}
```

## 버전 기록
- 1.0.1: 더 이상 파라미터 정의되지 않은 오퍼래이션이 고장나지 않는다