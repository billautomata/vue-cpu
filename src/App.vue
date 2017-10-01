<template>
  <div id="app">
    <p>.A - {{registers.A}}</p>
    <p>.X - {{registers.X}}</p>
    <p>.Y - {{registers.Y}}</p>
    <p>PC - {{controls.PC}}</p>
    <p>RS - {{interrupts.RESET}}</p>
    <div style='clear: both;'>
      <p style='font-weight: 900'>ROM</p>
      <div style='padding-left: 20px;'>
        <hexdump v-bind:highlight="this.$store.getters['cpu/controls'].PC" v-bind:name="'rom/ROM'"></hexdump>
      </div>
    </div>
    <div style='clear: both;'></div>
    <div style='clear: both;'>
      <p style='font-weight: 900'>MEM</p>
      <div style='padding-left: 20px;'>
        <hexdump v-bind:name="'mem/MEM'"></hexdump>
      </div>
    </div>
  </div>
</template>

<script>
import HexDump from './components/hexdump.vue'

export default {
  name: 'app',
  components: {
    'hexdump': HexDump
  },
  data () {
    return {}
  },
  mounted () {
    this.$store.commit('rom/WRITE', { values: [2,100,3,101,4,101,1] })
    this.$store.dispatch('mem/INIT')
    this.$store.dispatch('cpu/initialize')

    setInterval(() => {
      this.$store.commit('cpu/CYCLE')
    },30)

    setInterval(() => {
      this.$store.commit('cpu/RESET')
    },301)

  },
  computed: {
    registers: function () {
      return this.$store.getters['cpu/registers']
    },
    controls: function () {
      return this.$store.getters['cpu/controls']
    },
    interrupts: function () {
      return this.$store.getters['cpu/interrupts']
    },
    ROM: function () {
      return this.$store.getters['rom/ROM']
    },
    MEM: function () {
      return this.$store.getters['mem/MEM']
    }
  }
}
</script>

<style>
#app {
  font-family: monospace;
}
</style>
