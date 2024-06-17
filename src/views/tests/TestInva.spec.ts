import { shallowMount } from '@vue/test-utils';
import TestInva from '../TestInva.vue';
import { vuetify } from '../../../tests/unit/setup';

describe('TestInva.vue', () => {

it('should render VBtn with color info', () => {
  const wrapper = shallowMount(TestInva, {
   global: {
    plugins: [vuetify],
   },
  });
  const infoButton = wrapper.findComponent({ name: 'v-btn', props: { color: 'info' } });
  expect(infoButton.exists()).toBe(true);
});

it('should not render VBtn with color info and incorrect text', () => {
  const wrapper = shallowMount(TestInva, {
   global: {
    plugins: [vuetify],
   },
  });
  const infoButton = wrapper.findComponent({ name: 'v-btn', props: { color: 'info' } });
  expect(infoButton.text()).not.toBe('Incorrect Text');
});




	it('should render correct color for each VBtn', () => {
		const wrapper = shallowMount(TestInva, {
			global: {
				plugins: [vuetify],
			},
		});
		const buttons = wrapper.findAllComponents({ name: 'v-btn' });
		const colors = [
			'primary',
			'secondary',
			'info',
			'success',
			'warning',
			'error',
			'accent',
			'light',
			'dark',
			'risquePro',
			]
		buttons.forEach((button, index) => {
			expect(button.props('color')).toBe(colors[index]);
		});
	});

	it('should render v-alert component with correct type', () => {
		const wrapper = shallowMount(TestInva, {
			global: {
				plugins: [vuetify],
			},
		});
		const alert = wrapper.findComponent({ name: 'v-alert' });
		expect(alert.props('type')).toBe('success');
	});

	it('should render correct text for h2', () => {
		const wrapper = shallowMount(TestInva, {
			global: {
				plugins: [vuetify],
			},
		});
		expect(wrapper.find('h2').text()).toBe('Test font color scss');
	});
});
