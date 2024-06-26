import { createStore } from 'vuex';

const counter = createStore({
  state: () => ({
	count: 0
  }),
  mutations: {
	  increment(state) {
		  state.count++;
	  },
	  decrement(state) {
		  state.count--;
	  }
  },
	actions: {
	  		increment({commit}) {
			commit('increment');
		},
		decrement({commit}) {
			commit('decrement');
		}
	}
})

export default counter;

