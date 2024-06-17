import { mount } from '@vue/test-utils';

import Tokens from '../Tokens.vue';
import { vuetify } from '../../../tests/unit/setup';

describe('tokens page should render', () => {
	it('should render', () => {
		const wrapper = mount(Tokens,{
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

	it('should contain h1 with text Tokens', () => {
		const wrapper = mount(Tokens,{
			global: {
				plugins: [
					vuetify,
				],
			},
		});
		const h1Text = wrapper.find('h1').text();
		expect(h1Text).toContain('Tokens');
	});

	it('should return true for dark color', () => {
		const wrapper = mount(Tokens,{
			global: {
				plugins: [
					vuetify,
				],
			},
		});
		const darkColor = wrapper.vm.isDarkColor('#000000');
		expect(darkColor).toBeTruthy();
	})

	it('should return true for light color', () => {
		const wrapper = mount(Tokens,{
			global: {
				plugins: [
					vuetify,
				],
			},
		});
		const darkColor = wrapper.vm.isDarkColor('#ffffff');
		expect(darkColor).toBeFalsy();
	})

});
