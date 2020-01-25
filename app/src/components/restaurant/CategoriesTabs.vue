<template>
  <div class="tabs is-centered" v-scroll-reveal.reset="{ delay: 250 }">
    <ul>
      <li class="is-active"><a href="#burgers" v-smooth-scroll>Burgery</a></li>
      <li><a href="#wraps" v-smooth-scroll>Wrapy</a></li>
      <li><a v-smooth-scroll>Zestawy</a></li>
      <li><a v-smooth-scroll>Napoje</a></li>
    </ul>
  </div>
</template>

<script>
	export default {
		name: "CategoriesTabs",
    computed: {
			showCategories: function () {
        return true
			}
    }
	}
</script>

<style scoped>
.tabs {

}
</style>