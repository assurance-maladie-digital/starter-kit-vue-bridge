import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { colorTheme, colorBoostrapTheme } from '@cnamts/design-tokens/src/colors';

const theme = await $fetch<Record<string, string>>('/json/config.env.json').then((res) => res.theme);
console.log(theme);

export default defineNuxtPlugin(async (nuxtApp) => {
	const vuetify = createVuetify({
		ssr: true,
		icons: {
			defaultSet: 'mdi',
			aliases,
			sets: {
				mdi
			}
		},
		theme: {
			defaultTheme: 'light',
			themes: {
				light: {
					colors: theme === 'bootstrap' ? colorBoostrapTheme : colorTheme,
				},
			},
		},
	});

	nuxtApp.vueApp.use(vuetify);
});
