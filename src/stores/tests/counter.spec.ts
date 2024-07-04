import counter from '../counter'

describe('Counter Store', () => {
	let store: any

	beforeEach(() => {
		store = counter
	})

	test('initial state', () => {
		expect(store.state.count).toBe(0)
	})

	test('increment mutation', () => {
		store.commit('increment')
		expect(store.state.count).toBe(1)
	})

	test('decrement mutation', () => {
		store.commit('increment')
		store.commit('decrement')
		expect(store.state.count).toBe(1)
	})

	test('reset mutation', () => {
		store.commit('increment')
		store.commit('reset')
		expect(store.state.count).toBe(0)
	})

	test('increment action', async () => {
		await store.dispatch('increment')
		expect(store.state.count).toBe(1)
	})

	test('decrement action', async () => {
		await store.dispatch('increment')
		await store.dispatch('decrement')
		expect(store.state.count).toBe(1)
	})

	test('reset action', async () => {
		await store.dispatch('increment')
		await store.dispatch('reset')
		expect(store.state.count).toBe(0)
	})
})
