import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import { localVue } from './test-utils';

describe('HelloWorld', () => {
	test('renders greeting when passed props', () => {
		const greeting = 'Hello, world!';
		const wrapper = mount(HelloWorld, {
			localVue,
			propsData: { greeting },
		});
		expect(wrapper.text()).toContain(greeting);
	});
});
