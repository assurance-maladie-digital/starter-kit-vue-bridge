import Vue from 'vue';
import { config } from '@vue/test-utils';

// Set up the Vue test utils config
config.stubs = {};

// Set up the global Vue instance
Vue.config.productionTip = false;
