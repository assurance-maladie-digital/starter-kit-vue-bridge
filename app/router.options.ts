/**
 * This file is used to use a vue-router configuration file to define the routes
 * of the application. If you want to only use the nuxt default routing system,
 * you can remove this file.
 */
import type { RouterConfig } from "@nuxt/schema";
import routes from "../src/router"; // Update to match your router configuration file path

export default <RouterConfig>{
	// https://router.vuejs.org/api/interfaces/routeroptions.html#routes
	routes: (_routes) => routes,

	/**
	 * If you want to use the Nuxt default routing system in addition to the
	 * vue-router configuration, you can use the following code:
	 * ```
	 * routes: (_routes) => {
	 * 	return [
	 * 		..._routes,
	 * 		...routes
	 * 	]
	 * }
	 * ```
	 */
};
