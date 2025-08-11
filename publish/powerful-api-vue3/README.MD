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
- 1.1.1: fire 옵션보다 덜 우선적인 전역용 스토어 옵션
- 1.1.0: Get 이외의 요청 추가
- 1.0.8: 실패 시 콜백 `setWhenError` 추가
- 1.0.7: 확인 창 없는 옵션을 통해 부분적으로 포스트 기능
- 1.0.6: 호환 문제가 발견되기 전까지는 피니아 호환 버전을 느슨하게 조정 `>=2.1.7`
- 1.0.5: 소스 진입점 경로 변경 `npmdist`
- 1.0.4: 더 이상 한번 설정된 파이날 콜백이 다른 호출에서도 여전히 실행되지 않는다
- 1.0.3: 이제 파이널리 콜백을 사용할 수 있다
- 1.0.2: 스토어를 내보내서 공통 로딩 표현에 활용할 수 있게 된다
- 1.0.1: 더 이상 파라미터 정의되지 않은 오퍼래이션이 고장나지 않는다