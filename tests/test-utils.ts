import { createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);

export { localVue };
