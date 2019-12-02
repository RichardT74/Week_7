<template lang="html">
<li>
  <p :class="{'purchased': item.purchased}">{{ item.name }}</p>
<button v-if="!item.purchased" v-on:click="purchase">Purchase</button>

</li>
</template>

<script>
export default {
  name: 'new-shopping-list-item',
  props: ['item'],
  methods: {
    purchase() {
      this.item.purchased = true;
    }
  }
}
</script>

<style lang="css" scoped>
p {
  background-color: yellow;
}
li {
list-style: none;
}

.purchased {
  text-decoration: line-through;
  background-color: tomato;
}
</style>
