<template>


    <div id="app">

  <h1>Guardian Articles</h1>
  <article-select :orange ="banana"/> <!-- written like html but vue. ie view components, refer to ArticleSelect.vue and render it-->
  <article-detail :article ="selectedArticle"></article-detail>
  <!-- this selects 1 from the article select array above -->

  </div>
</template>
<script>
import { eventBus } from '@/main.js'
import ArticleSelect from '@/components/ArticleSelect.vue';
import ArticleDetail from '@/components/ArticleDetail.vue';


export default {
  data(){
    return {
      banana: [],
      selectedArticle: null}
  },
  components: {
    'article-select': ArticleSelect,
      'article-detail': ArticleDetail
},
// think radio always emitting, the link via the app. gets details first, and can then find specifics

  mounted(){

    eventBus.$on('article-selected', (selectedIndex) => {
      this.selectedArticle = this.articles[selectedIndex];
    });
    // once html loaded, and once view has mounted onto that. ie don't start before html is ready

    fetch('https://content.guardianapis.com/search?q=brexit&format=json&api-key=test')
    .then(res => res.json())
    .then(resjson => this.banana = resjson.response.results);
  }
// api going external
}
// three parts to this, template html, script java script, styple css. see fetch for link and this.articles with article [] in data above.
</script>

/* <style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> */
