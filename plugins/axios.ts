import axios from 'axios'
import { defineNuxtPlugin } from 'nuxt/app'
export default defineNuxtPlugin(() => {
	return {
		provide: {
			axios,
		},
	}
})
