/* eslint-env node */
module.exports = {
	root: true,
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
	},
	plugins: ['vue', 'prettier', '@typescript-eslint'],
	rules: {
		'prettier/prettier': [
			'warn',
			{
				useTabs: true,
				tabWidth: 4,
				endOfLine: 'auto',
				singleQuote: true,
				semi: false,
				arrowParens: 'avoid',
				printWidth: 160,
			},
		],
		'vue/multi-word-component-names': [
			'error',
			{
				ignores: ['Index'],
			},
		],
		'no-console': 'warn',
		'no-debugger': 'error',
		'no-alert': 'warn',
	},
	overrides: [
		{
			files: ['*.ts'],
			rules: {
				// TS ESLint 공문에 따르면 타입스크립트에서 잘 찾으니 ESLint가 찾게 하지 마라
				'no-undef': 'off',
				// 함수 타입 선언시 인자를 안쓴다고 징징거리는데 타입선언에선 당연히 안쓰는게 맞다
				'no-unused-vars': 'off',
				// 대신 인터패이스 같은걸 선언해놓고 안쓰는건 방지해야 하므로 타스용 룰을 따로 적용
				'@typescript-eslint/no-unused-vars': ['error'],
			},
		},
		{
			files: 'App.vue',
			rules: {
				'no-console': 'off',
				'no-alert': 'off',
			},
		},
	],
	globals: {
		globalMode: true,
	},
}
