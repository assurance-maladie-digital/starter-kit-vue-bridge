import { shallowMount } from '@vue/test-utils'

import Maintenance from '../Maintenance.vue'
import { vuetify } from '../../../tests/unit/setup'
import {describe, it, expect} from 'vitest'


describe('Maintenance.vue', () => {
	it('renders MaintenancePage component', () => {
		const wrapper = shallowMount(Maintenance, {
			global: {
				plugins: [vuetify],
			},
		})
		expect(wrapper.findComponent({ name: 'MaintenancePage' })).toBeTruthy()
	})
})
