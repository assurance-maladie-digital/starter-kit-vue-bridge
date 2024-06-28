import { VuexPersistence } from 'vuex-persist';
import store from '../src/stores';

export default defineNuxtPlugin(() => {
	new VuexPersistence().plugin(store);
});
