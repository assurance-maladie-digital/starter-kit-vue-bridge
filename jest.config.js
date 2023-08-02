module.exports = {
	preset: 'ts-jest',
	moduleFileExtensions: [
		'js',
		'json',
		'vue',
		'ts',
		'tsx',
	],
	transform: {
		// process `*.vue` files with `vue-jest`
		'^.+\\.vue$': 'vue-jest',
		// process TypeScript with `ts-jest`
		'\\.(ts|tsx)$': 'ts-jest',
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
			'jest-transform-stub',
	},
	testMatch: [
		'<rootDir>/src/**/tests/*.spec.ts',
	],
	setupFiles: [
		'<rootDir>/tests/setup-jest.ts',
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
	},
};
