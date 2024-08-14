import notifications from '../notifications'
import {describe, beforeEach, test, expect} from 'vitest'

describe('Notifications Store', () => {
	let store: any

	beforeEach(() => {
		store = notifications
	})

	test('initial state', () => {
		expect(store.state.notificationPayload).toBe(null)
	})
})
