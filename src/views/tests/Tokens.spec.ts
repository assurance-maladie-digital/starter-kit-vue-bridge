import { shallowMount } from '@vue/test-utils';

import Tokens from '../Tokens.vue';
import { vuetify } from '../../../tests/unit/setup';

describe('tokens page should render', () => {
	it('should render', () => {
		const wrapper = shallowMount(Tokens,{
			global: {
				plugins: [
					vuetify,
				],
			},
		});
		expect(wrapper.html()).toMatchSnapshot();

		const h1Text = wrapper.find('h1').text();
		expect(h1Text).toContain('Tokens');
	});
});
