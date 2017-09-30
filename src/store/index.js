import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registers: {
      A: 0,
      X: 0,
      Y: 0
    },
    controls: {
      SP: 0,
      SR: 0,
      PC: 0
    },
    MEM: Array(1024).fill(0),
    ROM: Array(1024).fill(0)
  },
  getters :{
    registers: function (state) {
      return state.registers
    },
    controls: function (state) {
      return state.controls
    },
    ROM: function (state) {
      return state.ROM
    }
  },
  mutations: {
    initialize (state, payload) {
      state.controls.PC = 0
      state.ROM = payload.ROM
    },
    LDA (state, payload) {
      state.registers.A = payload.value
    },
    LDX (state, payload) {
      state.registers.X = payload.value
    },
    LDY (state, payload) {
      state.registers.Y = payload.value
    },
    CYCLE (state) {
      // read instruction at PC
      // increment PC
      // perform instruction at PC
      console.log(state.ROM, state.controls.PC)
      var instruction = state.ROM[state.controls.PC]
      if(machine_code_lut[instruction] === 'BRK'){
        return
      }
      console.log('instruction', instruction)
      this.commit(machine_code_lut[instruction], {value: state.ROM[state.controls.PC+1] })
      state.controls.PC+=2
      this.commit('CYCLE')
    }
  }
})

var machine_code_lut = [
  'NOP',
  'BRK',
  'LDA',
  'LDX',
  'LDY',
]
