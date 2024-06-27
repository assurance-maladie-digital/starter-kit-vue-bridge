import notifications from '../notifications';

describe('Notifications Store', () => {
	let store;

	beforeEach(() => {
		store = notifications;
	});

	test('initial state', () => {
		expect(store.state.notifications).toEqual([]);
	});

})
