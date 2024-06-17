import { mount } from '@vue/test-utils';
import NotFound from '../NotFound.vue';
import {PageContainer, NotFoundPage} from "@cnamts/synapse-bridge";
import { vuetify } from '../../../tests/unit/setup';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: NotFound,
		},
	],
});

describe('NotFound.vue', () => {
	it('should render', async () => {
		const wrapper = mount(NotFound,{
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

	it('should render NotFoundPage component', () => {
		const wrapper = mount(NotFound,{
			global: {
				plugins: [
					vuetify,
				],
				mocks: {
					PageContainer,
					NotFoundPage
				}
			},
		});
		expect(wrapper.findComponent({ name: 'NotFoundPage' })).toBeTruthy();
	});

});
