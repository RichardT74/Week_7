<template lang="html">

  <div class="">
  <h1>My Shopping List</h1>
  <new-shopping-list-item v-for="(item, index) in items" :key="index" :item="item"></new-shopping-list-item>
  </div>

</template>

<script>
import ShoppingListItem from './components/ShoppingListItem.vue';
export default {
  name: 'app',
  data() {
    return {
      items: [
        {name: 'Milk', purchased: true},
        {name: 'Cheese', purchased: false},
        {name: 'Beans', purchased: false}
      ]
    };
  },
  components: {
    'new-shopping-list-item': ShoppingListItem
  }
}
</script>

<style lang="css" scoped>
</style>
