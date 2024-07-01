import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import { colorTheme } from "@cnamts/design-tokens/src/colors";
export default defineNuxtPlugin(async (nuxtApp) => {
	const vuetify = createVuetify({
		ssr: true,
		icons: {
			defaultSet: "mdi",
			aliases,
			sets: {
				mdi,
			},
		},
		theme: {
			defaultTheme: "light",
			themes: {
				light: {
					colors: colorTheme,
				},
			},
		},
	});

	nuxtApp.vueApp.use(vuetify);
});
