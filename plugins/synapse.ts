import * as synapse from '@cnamts/synapse-bridge';
import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin((nuxtApp) => {
	for (const component in synapse) {
		nuxtApp.vueApp.component(component, synapse[component]);
	}
});
