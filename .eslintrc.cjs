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
			},
		},
	],
}
