import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export new Vuex.Store({
  state: {
    A: 0,
    X: 0,
    Y: 0,
    P: 0,
    S: 0,
    PC: 0,
    MEM: Array(1024)
  },
  mutations: {
    LDA (state, payload) {
      state.A = payload.value
    }
  }
})
