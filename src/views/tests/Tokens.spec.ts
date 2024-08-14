import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Tokens from '../Tokens.vue'
import { vuetify } from '../../../tests/unit/setup'
import { VApp } from 'vuetify/lib/components/index.mjs'

describe('tokens page',
	() => {
		it('mount correctly',
			()=>{
				const wrapper = mount({
					components: {
						VApp,
						Tokens
					},
					template: `
						<VApp><Tokens /></VApp>
					`
				}, {
					global: {
						plugins: [vuetify]
					}
				})

				expect(wrapper.html()).toMatchSnapshot()
			}
		)
	}
)
