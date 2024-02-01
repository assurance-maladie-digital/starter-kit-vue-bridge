/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	testEnvironment: "jsdom",
	testEnvironmentOptions: {
		customExportConditions: ["node", "node-addons"],
	},
	testMatch: [
		"<rootDir>/**/tests/*.spec.ts",
		"<rootDir>/tests/unit/**/*.spec.ts",
	],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
	transform: {
		"^.+\\.(js)$": "babel-jest",
		// "^.+\\.(ts)$": "ts-jest",
		"^.+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
		"^.+\\.(vue)$": "@vue/vue3-jest",
		// '^.+\\.[tj]sx?$': 'ts-jest',
		// '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				useESM: true,
				verbatimModuleSyntax: true,
			},
		],
	},
	coverageReporters: ["text", "html", "lcov", "text-summary"],
	coverageDirectory: "<rootDir>/tests/unit/coverage",
	collectCoverage: true,
	collectCoverageFrom: [
		"**/*.{ts,vue}",
		"!**/node_modules/**",
		"!**/*.d.ts",
		"!**/*.config.ts",
		"!**/decorators.ts",
		"!**/constants/**",
		"!**/router/**",
		"!**/main.ts",
		"!**/theme/**",
		"!**/plugins/**",
		"!**/i18n.ts",
		"!**/store/**",
		"!**/services/**",
		"!**/tests/**",
		"!**/translations/**",
	],
	extensionsToTreatAsEsm: [".ts"],
	globals: {
		API_URL: "http://localhost:8080",
	},
};
