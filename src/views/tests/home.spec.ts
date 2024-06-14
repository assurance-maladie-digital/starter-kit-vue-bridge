import { shallowMount } from '@vue/test-utils';

import Home from '../home.vue';
import { vuetify } from '../../../tests/unit/setup';

describe('home page should render', () => {
	it('renders prop msg when passed', () => {
		const msg = 'new message';
		const wrapper = shallowMount(Home, {
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
