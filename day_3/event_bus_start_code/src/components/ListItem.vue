<template lang="html">
  <li v-on:click="handleClikck">{{munro.name}}</li>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: 'list-item',
  props: ['munro'],
  methods: {
    handleClikck(){
      eventBus.$emit('munro-selected', this.munro)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
