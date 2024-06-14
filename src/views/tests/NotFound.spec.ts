import { shallowMount } from '@vue/test-utils';

import NotFound from '../NotFound.vue';
import { vuetify } from '../../../tests/unit/setup';

describe('not found page should render', () => {
	it('should render', () => {
		const wrapper = shallowMount(NotFound,{
			global: {
				plugins: [
					vuetify,
				],
			},
		});
		expect(wrapper.html()).toMatchSnapshot();

		const h2Text = wrapper.find('h2').text();
		expect(h2Text).toContain('Page non trouvée');
	});
});
