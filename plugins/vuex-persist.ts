import VuexPersistence from 'vuex-persist';
import store from '~/store';

export default defineNuxtPlugin((nuxtApp) => {
	new VuexPersistence({
		/* your options */
	}).plugin(store);
});
