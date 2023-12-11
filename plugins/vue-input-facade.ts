import InputFacade from 'vue-input-facade'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(InputFacade)
})
