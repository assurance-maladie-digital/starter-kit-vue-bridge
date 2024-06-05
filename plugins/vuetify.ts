import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { colorTheme, colorBoostrapTheme } from '@cnamts/design-tokens/src/colors';
export default defineNuxtPlugin(async (nuxtApp) => {
	const theme = await $fetch<Record<string, string>>('/json/config.env.json').then((res) => res.theme);
	const fontTheme = 'Source_Sans_3, sans-serif';
	const fontBoostrapTheme =  'Calibri, sans-serif';
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
	document.body.style.fontFamily = theme === 'bootstrap' ? fontBoostrapTheme : fontTheme;
	nuxtApp.vueApp.use(vuetify);
});
