import InputFacade from 'vue-input-facade'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(InputFacade)
})
