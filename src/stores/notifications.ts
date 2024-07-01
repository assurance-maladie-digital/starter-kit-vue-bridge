import { createStore } from 'vuex';
import { notification } from '@cnamts/synapse-bridge/modules/notification';
import VuexPersistence from 'vuex-persist';

import { RootState } from './types';

const vuexLocal = new VuexPersistence<RootState>({
	storage: window.sessionStorage,
});

const notifications = createStore({
	state: {
		notificationPayload: null,
	},
	modules: {
		notification
	},
	plugins: [
		vuexLocal.plugin
	]
});

export default notifications;
