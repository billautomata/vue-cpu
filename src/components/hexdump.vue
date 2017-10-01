<template>
  <div id='hexdump'>
    <div class='hex-element' :style="index === highlight ? 'background-color: rgb(66,128,255)': 'background-color: white;'"
      v-for="(value,index) in block"
      v-bind:value="value"
      v-bind:index="index">
      {{Number(value).toString(10).toUpperCase()}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'hexdump',
  props: [ 'name', 'highlight' ],
  data () {
    return {}
  },
  computed: {
    block: function () {
      return this.$store.getters[this.$props.name]
    }
  },
  updated () {}
}
</script>
<style>
#hexdump {
  display: block;
  padding-bottom: 20px;
}
#hexdump div.hex-element:nth-of-type(8n+1) {
  /*background-color: green;*/
  clear: both;
}
#hexdump div.hex-element:nth-of-type(2n+1) {
  margin-left: 10px;
}
.hex-element {
  float: left;
  width: 30px;
  height: 18px;
  font-family: monospace;
  font-size: 14px;
  outline: 0.5px solid rgba(0,0,0,0.03);
}
</style>
