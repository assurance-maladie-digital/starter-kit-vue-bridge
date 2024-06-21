import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import ResizeObserver from 'resize-observer-polyfill';

export const vuetify = createVuetify({
	components,
	directives,
});

global.ResizeObserver = ResizeObserver;
