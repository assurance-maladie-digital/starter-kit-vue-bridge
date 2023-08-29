import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld', () => {
	test('renders greeting when passed props', () => {
		const greeting = 'Hello, world!';
		const wrapper = mount(HelloWorld, {
			propsData: { greeting },
		});
		expect(wrapper.text()).toContain(greeting);
	});
});
