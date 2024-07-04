import notifications from '../notifications'

describe('Notifications Store', () => {
	let store: any

	beforeEach(() => {
		store = notifications
	})

	test('initial state', () => {
		expect(store.state.notificationPayload).toBe(null)
	})
})
