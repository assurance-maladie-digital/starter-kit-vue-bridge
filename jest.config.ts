import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testEnvironmentOptions: {
		customExportConditions: ['node', 'node-addons'],
	},
	testMatch: [
		'<rootDir>/**/tests/*.spec.ts',
		'<rootDir>/tests/unit/**/*.spec.ts',
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^vuetify/lib$': 'vuetify',
		'^@cnamts/synapse-bridge/modules/notification/(.*)$':
			'<rootDir>/node_modules/@cnamts/synapse-bridge/src/modules/notification/$1',
	},
	transform: {
		'^.+\\.(mjs|js|jsx)$': 'babel-jest',
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
		'^.+\\.(vue)$': '@vue/vue3-jest',
	},
	// empty to avoid ignoring default files
	transformIgnorePatterns: ['<rootDir>/node_modules/@cnamts/synapse-bridge'],
	coverageReporters: ['text', 'html', 'lcov', 'text-summary'],
	coverageDirectory: '<rootDir>/tests/unit/coverage',
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.{js,vue,ts}',
		'!src/stores/index.ts',
		'!src/stores/**/*.d.ts',
		'!src/**/*.spec.{js,vue,ts}',
		'!src/**/*.d.ts',
		'!src/**/*.config.{ts,js}',
		'!src/**/decorators.ts',
		'!src/**/constants/**',
		'!src/**/router/**',
		'!src/**/main.ts',
		'!src/**/theme/**',
		'!src/**/plugins/**',
		'!src/**/i18n.config.ts',
		'!src/**/services/**',
		'!src/**/tests/**',
		'!src/**/translations/**',
		'!node_modules/**',
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	globals: {
		API_URL: 'http://localhost:8080',
	},
	setupFilesAfterEnv: ['<rootDir>/tests/unit/setup.ts'],
}

export default config
