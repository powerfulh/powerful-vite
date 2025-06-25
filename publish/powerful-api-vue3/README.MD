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
- 1.0.4: 더 이상 한번 설정된 파이날 콜백이 다른 호출에서도 여전히 실행되지 않는다
- 1.0.3: 이제 파이널리 콜백을 사용할 수 있다
- 1.0.2: 스토어를 내보내서 공통 로딩 표현에 활용할 수 있게 된다
- 1.0.1: 더 이상 파라미터 정의되지 않은 오퍼래이션이 고장나지 않는다