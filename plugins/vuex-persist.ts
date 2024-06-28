import { VuexPersistence } from 'vuex-persist';
import store from '../src/store';

export default defineNuxtPlugin(() => {
	new VuexPersistence().plugin(store);
});
