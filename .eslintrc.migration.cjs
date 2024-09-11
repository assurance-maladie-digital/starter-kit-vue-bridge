module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	extends: [
		//'@nuxtjs/eslint-config-typescript',
		'plugin:vue/base',
		'plugin:vuetify/base',
	],
	plugins: [],
	ignorePatterns: ['**/*.json'],
	rules: {
		semi: ['error', 'always'],

		// Disable style rules
		indent: 0,
		'no-tabs': 0,
		quotes: 0,
		'quote-props': 0,
		'comma-dangle': 0,
		'vue/html-indent': 0,
	},
}
