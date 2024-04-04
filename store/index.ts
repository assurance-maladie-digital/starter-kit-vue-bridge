import { createStore } from 'vuex';
import { notification } from '@cnamts/synapse-bridge/modules/notification';
import VuexPersistence from 'vuex-persist';

import { RootState } from './types';

const vuexLocal = new VuexPersistence<RootState>({
	storage: window.sessionStorage,
});

const store = createStore({
	state: {},
	modules: {
		notification
	},
	plugins: [
		vuexLocal.plugin
	]
});

export default store;
