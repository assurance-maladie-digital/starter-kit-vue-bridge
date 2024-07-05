// essential for the proper functioning of the datePicker

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(() => {
	return {
		provide: {
			customParseFormat,
		}
	}
})


