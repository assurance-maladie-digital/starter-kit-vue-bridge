import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
	test: {
		environment: 'nuxt',
		coverage: {
			enabled: true,
			provider: 'istanbul',
			reportsDirectory: './tests/unit/coverage',
			include: [
				'src/**/*.{js,vue,ts}',
			],
			exclude: [
				'src/App.vue',
				'src/stores/index.ts',
				'src/stores/**/*.d.ts',
				'src/**/*.spec.{js,vue,ts}',
				'src/**/*.d.ts',
				'src/**/*.config.{ts,js}',
				'src/**/decorators.ts',
				'src/**/constants/**',
				'src/**/router/**',
				'src/**/main.ts',
				'src/**/theme/**',
				'src/**/plugins/**',
				'src/**/i18n.config.ts',
				'src/**/services/**',
				'src/**/tests/**',
				'src/**/translations/**',
				'node_modules/**',
			],
			thresholds: {
				branches: 80,
				functions: 80,
				lines: 80,
				statements: 80,
			},
		},
		server: {
			deps: {
				inline: [/vuetify.*/],
			},
		},
		silent: true,
		setupFiles: ['./tests/unit/setup.ts'],
	},
})
