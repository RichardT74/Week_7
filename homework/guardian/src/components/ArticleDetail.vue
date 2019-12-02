<template lang="html">
  <div v-if="article !== null">
    <h3>{{article.sectionName}}</h3>
    <h3>{{article.type}}</h3>
    <h3>{{article.webUrl}}</h3>

  </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  name: 'article-detail',
  props: ['article']
}
// props is what has been passed in by app.vue from articel detail :article
</script>

<style lang="css" scoped>
</style>
