import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var cpu = require('./CPU.js')
var mem = require('./MEM.js')
var rom = require('./ROM.js')

export default new Vuex.Store({
  modules: {
    cpu: cpu,
    mem: mem,
    rom: rom,
  }
})
