import { VuexPersistence } from "vuex-persist";
import store from "~/store";

export default defineNuxtPlugin(() => {
	new VuexPersistence().plugin(store);
});
