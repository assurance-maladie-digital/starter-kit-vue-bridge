import { shallowMount } from '@vue/test-utils';

import TestInva from '../testinva.vue';
import { vuetify } from '../../../tests/unit/setup';

describe('test inva page should render', () => {
	it('should render', () => {
		const wrapper = shallowMount(TestInva,{
			global: {
				plugins: [
					vuetify,
				],
			},
		});
		expect(wrapper.html()).toMatchSnapshot();

		const h1Text = wrapper.find('h1').text();
		expect(h1Text).toContain('Accueil');
	});
});
