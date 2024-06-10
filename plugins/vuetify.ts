import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { colorTheme, colorBootstrapTheme } from '@cnamts/design-tokens/src/colors';
export default defineNuxtPlugin(async (nuxtApp) => {
	const theme = await $fetch<Record<string, string>>('/json/config.env.json').then((res) => res.theme);
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
					colors: theme === 'bootstrap' ? colorBootstrapTheme : colorTheme,
				},
			},
		},
	});

	if (theme === 'bootstrap') {
		document.body.classList.add('bootstrap');
	}

	nuxtApp.vueApp.use(vuetify);
});
