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

	plugins: [
    '~/plugins/axios.ts',
    '~/plugins/vuex.ts',
  ],
});
