<template>
  <b-field>
    <b-input v-model="search" aria-placeholder="Search" type="search"
             icon="magnify"/>
  </b-field>
</template>

<script>
	export default {
		name: "Search.vue",
    data: () => ({
			search: ''
    }),
    methods: {
			searchEvent: function () {
				this.$emit('search', this.search);
        console.log('event')
			}
    },
    watch: {
			search: function () {
        this.searchEvent()
			}
    }
	}
</script>

<style scoped>

</style>