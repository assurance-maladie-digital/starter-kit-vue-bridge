import { mount } from "@vue/test-utils";

import Home from "../Home.vue";
import { vuetify } from "../../../tests/unit/setup";

describe("home page should render", () => {
	it("renders title when config is provided", () => {
		const wrapper = mount(Home, {
			global: {
				plugins: [vuetify],
			},
			data() {
				return {
					config: {
						title: "Accueil",
						message: "Bienvenue",
						theme: "Vuetify",
					},
				};
			},
		});

		expect(wrapper.html()).toMatchSnapshot();

		const h1Text = wrapper.find("h1").text();
		expect(h1Text).toContain("Accueil");
	});

	it("renders default title when config is not provided", () => {
		const wrapper = mount(Home, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();

		const h1Text = wrapper.find("h1").text();
		expect(h1Text).toContain("Accueil");
	});

	it("renders message from config when provided", () => {
		const wrapper = mount(Home, {
			global: {
				plugins: [vuetify],
			},
			data() {
				return {
					config: {
						title: "Accueil",
						message: "Bienvenue",
						theme: "Vuetify",
					},
				};
			},
		});

		expect(wrapper.html()).toMatchSnapshot();

		const h1Text = wrapper.find("h1").text();
		expect(h1Text).toContain("Accueil");
	});

	it("renders default message when config is not provided", () => {
		const wrapper = mount(Home, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();

		const h1Text = wrapper.find("h1").text();
		expect(h1Text).toContain("Accueil");
	});

	it("increments counter", async () => {
		const mockCommit = jest.fn();
		const wrapper = mount(Home, {
			global: {
				plugins: [vuetify],
			},
			data() {
				return {
					counter: {
						state: {
							count: 0,
						},
						commit: mockCommit,
					},
				};
			},
		});
		const incrementButton = wrapper.find(".increment");
		await incrementButton.trigger("click");
		expect(mockCommit).toHaveBeenCalledWith("increment");
	});
	it("decrements counter", async () => {
		const mockCommit = jest.fn();
		const wrapper = mount(Home, {
			global: {
				plugins: [vuetify],
			},
			data() {
				return {
					counter: {
						state: {
							count: 0,
						},
						commit: mockCommit,
					},
				};
			},
		});
		const incrementButton = wrapper.find(".decrement");
		await incrementButton.trigger("click");
		expect(mockCommit).toHaveBeenCalledWith("decrement");
	});
	it("reset counter", async () => {
		const mockCommit = jest.fn();
		const wrapper = mount(Home, {
			global: {
				plugins: [vuetify],
			},
			data() {
				return {
					counter: {
						state: {
							count: 0,
						},
						commit: mockCommit,
					},
				};
			},
		});
		const incrementButton = wrapper.find(".reset");
		await incrementButton.trigger("click");
		expect(mockCommit).toHaveBeenCalledWith("reset");
	});
});
