module.exports = {
  namespaced: true,
  state: {
    registers: {
      A: 0,
      X: 0,
      Y: 0,
      S: 0,
      D: 0
    },
    controls: {
      SP: 0,
      SR: 0,
      PC: 0
    },
    interrupts: {
      RESET: 0
    },
    COUNTS: {
      CYCLE: 0,
      DELAY_UNTIL: 0
    }
  },
  getters :{
    registers: function (state) {
      return state.registers
    },
    controls: function (state) {
      return state.controls
    },
    interrupts: function (state) {
      return state.interrupts
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
    NOPN (state, payload) {
      // none
    },
    LDAI (state, payload) {
      state.registers.A = payload.value
    },
    LDAA (state, payload) {
      state.registers.A = payload.value
    },
    LDX (state, payload) {
      state.registers.X = payload.value
    },
    LDY (state, payload) {
      state.registers.Y = payload.value
    },

    CYCLE (state) {
      var instruction = this.getters['rom/ROM'][state.controls.PC]
      console.log('instruction', instruction, state.COUNTS.CYCLE)
      if(instruction === undefined){
        return
      }
      state.COUNTS.CYCLE += 1
      // check interrupts if any perform that task and return
      if(state.COUNTS.CYCLE < state.COUNTS.DELAY_UNTIL){
        return
      } else if (state.COUNTS.CYCLE === state.COUNTS.DELAY_UNTIL){
        // actually execute the operation
        // increment the PC
        if(machine_code_lut[instruction] === 'BRK'){
          return
        } else {
          this.commit('cpu/'+machine_code_lut[instruction].name+machine_code_lut[instruction].mode, {value: this.getters['rom/ROM'][state.controls.PC+1] })
          state.controls.PC+=machine_code_lut[instruction].instruction_length
        }
      } else if (state.COUNTS.CYCLE > state.COUNTS.DELAY_UNTIL) {
        // read instruction at PC
        // set the delay_until
        state.COUNTS.DELAY_UNTIL += machine_code_lut[instruction].cycles
      }
    }
  }
}

var machine_code_lut = require('./INSTRUCTIONS.js')

// var machine_code_lut = [
//   'NOP',
//   'BRK',
//   'LDA',
//   'LDX',
//   'LDY',
// ]
