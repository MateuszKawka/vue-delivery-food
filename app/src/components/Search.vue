<template>
  <b-field label="Filter">
    <b-input v-model="search"/>
  </b-field>
</template>

<script>
	export default {
		name: "Search.vue",
    data: () => ({
			search: ''
    })
	}
</script>

<style scoped>

</style>