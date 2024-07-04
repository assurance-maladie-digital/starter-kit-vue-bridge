import { createStore } from 'vuex'

const counter = createStore({
	state: () => ({
		count: 0,
	}),
	mutations: {
		increment(state) {
			state.count++
		},
		decrement(state) {
			state.count--
		},
		reset(state) {
			state.count = 0
		},
	},
	actions: {
		increment({ commit }) {
			commit('increment')
		},
		decrement({ commit }) {
			commit('decrement')
		},
		reset({ commit }) {
			commit('reset')
		},
	},
})

export default counter
