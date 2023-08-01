import { InputFacade, facade, filter } from 'vue-input-facade'

export default defineNuxtPlugin((nuxtApp) => {
	return {
		provide: {
			InputFacade,
			facade,
			filter
		},
	};
});
