import type { VuetifyOptions } from 'vuetify/types'

declare module '@nuxt/types' {
	interface NuxtConfig {
		vuetify?: VuetifyOptions
	}
}
