import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: false,
	modules: [
		'@invictus.codes/nuxt-vuetify',
		'dayjs-nuxt'
	],

	vuetify: {
		/* vuetify options */
		vuetifyOptions: {
			icons: {
				defaultSet: 'mdi',
				aliases,
				sets: {
					mdi,
				},
			},
		},

		moduleOptions: {
			/* nuxt-vuetify module options */
			treeshaking: true,
			useIconCDN: true,

			/* vite-plugin-vuetify options */
			styles: true,
			autoImport: true,
			importLabComponents: true,
		},
	},

	css: ['~/assets/styles/index.scss'],

	dayjs: {
		locales: ['en', 'fr'],
		plugins: ['relativeTime', 'utc', 'timezone'],
		defaultLocale: 'fr',
		defaultTimezone: 'Europe/Paris',
	},

	i18n: {
		vueI18n: './i18n.config.ts'
	},

	plugins: [
		'~/plugins/axios.ts',
		'~/plugins/vuex.ts',
		'@nuxtjs/i18n',
		{ src: '~/plugins/vuex-persist', ssr: false },
	],
});
