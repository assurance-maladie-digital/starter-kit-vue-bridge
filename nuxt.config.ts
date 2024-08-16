import { colorTheme } from '@cnamts/design-tokens/src/colors'
import { cnamLightTheme } from '@cnamts/design-system-v3/designTokens/index'
import Components from 'unplugin-vue-components/vite'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	ssr: false,
	runtimeConfig: {
		public: {
			title: process.env.TITLE,
			message: process.env.MESSAGE,
			theme: process.env.THEME,
		},
	},
	devtools: { enabled: true },
	modules: [
		'vuetify-nuxt-module',
		'dayjs-nuxt',
		'@nuxt/eslint',
	],
	plugins: [
		'~/plugins/vuex.ts',
		'~/plugins/axios.ts',
		{ src: '~/plugins/vuex-persist', mode: 'client' },
		{ src: '~/plugins/vue-input-facade', mode: 'client' },
	],
	vuetify: {
		vuetifyOptions: {
			icons: {
				defaultSet: 'mdi-svg',
			},
			theme: {
				defaultTheme: 'light',
				themes: {
					light: {
						colors: cnamLightTheme,
					},
				},
			},
		},
	},
	build: {
		transpile: [
			'vuetify',
			'@cnamts/synapse-bridge',
			'@cnamts/design-tokens',
		],
	},
	vite: {
		plugins: [
			// change the component dirs to match our project layout
			Components({ dts: true, dirs: ['~/components', 'src/components'] }),
		],
	},
	css: [
		'@cnamts/design-system-v3/assets/tokens.scss',
		'~/assets/settings.scss'
	],
	dayjs: {
		locales: ['fr'],
		plugins: ['relativeTime', 'utc', 'timezone'],
		defaultLocale: 'fr',
		defaultTimezone: 'Europe/Paris',
	},
	alias: {
		'@': '/src',
	},
})
