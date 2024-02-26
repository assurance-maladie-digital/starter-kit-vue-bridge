import vuetify from 'vite-plugin-vuetify'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
	ssr: false,
	modules: [
		'dayjs-nuxt',
		'@nuxtjs/i18n'
	],
	plugins: [
		'~/plugins/vuex.ts',
		'~/plugins/axios.ts',
		{ src: '~/plugins/vuex-persist', mode: 'client' },
		{ src: '~/plugins/vue-input-facade', mode: 'client' }
	],
	build: {
		transpile: ['vuetify']
	},
	vite: {
		plugins: [
			vuetify(),
			// change the component dirs to match our project layout
			Components({dts: true, dirs: ['~/components', 'src/components']})
		]
	},
	css: [
		'~/assets/styles/index.scss'
	],
	dayjs: {
		locales: ['fr'],
		plugins: ['relativeTime', 'utc', 'timezone'],
		defaultLocale: 'fr',
		defaultTimezone: 'Europe/Paris'
	},
	devtools: {
		enabled: true
	},
	alias: {
		'@': '/src'
	},
})
