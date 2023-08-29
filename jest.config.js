module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testEnvironmentOptions: {
		customExportConditions: ['node', 'node-addons'],
	},
	moduleFileExtensions: ['js', 'json', 'vue', 'ts', 'tsx'],
	moduleNameMapper: {
		'^@/(.*)': '<rootDir>/$1',
		'#app': '<rootDir>/node_modules/nuxt3/dist/app/index.mjs',
	},
	transform: {
		'^.+\\.(js|jsx|mjs)$': 'babel-jest',
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
		'.*\\.(vue)$': '@vue/vue3-jest',
	},
	transformIgnorePatterns: ['node_modules/(?!(nuxt3|unenv))'],
	testMatch: ['<rootDir>/tests/*.spec.ts'],
};
