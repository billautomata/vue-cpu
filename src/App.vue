<template>
  <div id="app">
    <p>A - {{registers.A}}</p>
    <p>X - {{registers.X}}</p>
    <p>Y - {{registers.Y}}</p>
    <p>PC - {{controls.PC}}</p>
    <div>
      <span v-for="(mem,index) in ROM" v-bind:mem="mem">{{mem}} - </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  },
  mounted () {
    this.$store.commit('initialize', { ROM: [2,100,3,101,4,101,1]})
    this.$store.commit('CYCLE')
    //this.$store.commit('LDA', {value: 2})
  },
  computed: {
    registers: function () {
      return this.$store.getters.registers
    },
    controls: function () {
      return this.$store.getters.controls
    },
    ROM: function () {
      return this.$store.getters.ROM
    }
  }
}
</script>

<style>
#app {
  font-family: monospace;
}
</style>
