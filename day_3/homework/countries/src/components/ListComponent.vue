<template lang="html">
  <li v-on:click="handleClikck">{{country.name}}</li>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: 'list-item',
  props: ['country'],
  methods: {
    handleClikck(){
      eventBus.$emit('country-selected', this.country)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
