import { shallowMount } from "@vue/test-utils";

import HelloWorld from "../HelloWorld.vue";

describe("it renders correctly", () => {
	it("renders prop msg when passed", () => {
		const msg = "new message";
		const wrapper = shallowMount(HelloWorld, {
			props: { msg },
		});
		expect(wrapper.text()).toMatch(msg);
	});
});
