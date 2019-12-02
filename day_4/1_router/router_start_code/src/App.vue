<template>
  <div id="app">
    <nav> below adds to nave bar
        <router-link </router-link> to then we put in route or path we want to go to ie HOME - remeber to close-  classnotes are different
          need to add antoehr for about page<router-link :to="{ name: '', params: {} }"></router-link>


above: this adds to the vave link???
you can target and style header links using # tags below
    </nav>

    just white screen - we need to add router view
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="css" scoped>

nav {
  display: flex;
  justify-content: center;
  width: 50vw;
  margin: 0 auto;
}

#view {
  width: 50vw;
  margin: 0 auto;
}

a{
  margin: 0 20px;
}

</style>
