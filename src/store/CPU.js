module.exports = {
  namespaced: true,
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
    interrupts: {
      RESET: 0
    }
  },
  getters :{
    registers: function (state) {
      return state.registers
    },
    controls: function (state) {
      return state.controls
    }
  },
  actions: {
    initialize (context) {
      console.log('x-platform RAM', this.getters['mem/MEM'])
      console.log('x-platform ROM', this.getters['rom/ROM'])
      context.commit('RESET')
    }
  },
  mutations: {
    RESET (state, payload) {
      state.interrupts.RESET = 1
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
      // check interrupts if any perform that task and return
      if(state.interrupts.RESET === 1){
        state.interrupts.RESET = 0
        state.PC = 0
        return
      }
      // read instruction at PC
      // increment PC
      // perform instruction at PC
      // console.log('PC', state.controls.PC)
      var instruction = this.getters['rom/ROM'][state.controls.PC]
      if(machine_code_lut[instruction] === 'BRK'){
        return
      }
      this.commit('cpu/'+machine_code_lut[instruction], {value: this.getters['rom/ROM'][state.controls.PC+1] })
      state.controls.PC+=2
    }
  }
}

var machine_code_lut = [
  'NOP',
  'BRK',
  'LDA',
  'LDX',
  'LDY',
]
