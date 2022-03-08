import { createStore } from 'vuex'

interface defaultState {
  count: number
}

export default createStore({
  state(): defaultState {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state: defaultState) {
      state.count++
    },
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
  },
  getters: {
    double(state: defaultState) {
      return 2 * state.count
    },
  },
})
