var Vue = require('vue')

module.exports = {
  namespaced: true,
  state: {
    MEM: Array(64).fill(0)
  },
  getters: {
    MEM: function (state) {
      return state.MEM
    }
  },
  actions: {
    INIT: function (context) {
      context.commit('WRITE', { index: 0, value: 24 })
    },
  },
  mutations: {
    WRITE: function (state, payload) {
      // payload.index
      // payload.value
      Vue.set(state.MEM, payload.index, payload.value)
    }
  }
}
