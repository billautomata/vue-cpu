var Vue = require('vue')

module.exports = {
  namespaced: true,
  state: {
    ROM: Array(64).fill(0)
  },
  getters: {
    ROM: function (state) {
      return state.ROM
    }
  },
  mutations: {
    WRITE: function (state, payload) {
      var self = this
      payload.values.forEach(function(v,i) {
        Vue.set(state.ROM, i, v)
        // state.ROM[i] = v
      })
    }
  }
}
