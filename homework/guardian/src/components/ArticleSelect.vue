<template lang="html">
<select @change = "selectedArticle">
<option selected disabled></option>

<option v-for="(article, index) in orange" :value="index"> {{article.webTitle}} </option><!-- v for is a loop, using vue -->

</select>
</template>

<script>


import { eventBus } from '@/main.js'


export default {
  name: 'article-select',
  props: ['orange'],
	methods: {
		selectedArticle(event) {
			const selectedIndex = event.target.value;
			eventBus.$emit('-', selectedIndex);
		}
	}
  }
</script>
<style>

</style>
