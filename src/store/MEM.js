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
  mutations: {
    INIT: function (state) {
      Vue.set(state.MEM, 0, 32)
    }
  }
}
