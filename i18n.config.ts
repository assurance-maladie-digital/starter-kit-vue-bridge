export default defineI18nConfig(() => ({
	legacy: false,
	globalInjection: true,
	locale: 'fr',
	messages: {
		fr: {
			welcome: 'Bienvenue',
		},
		en: {
			welcome: 'Welcome',
		},
	},
}));
