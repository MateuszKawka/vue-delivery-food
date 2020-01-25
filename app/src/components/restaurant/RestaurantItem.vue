<template>
  <div class="mt-2 box" @click="addToCard">
    <p class="is-size-5">Big mac</p>
    <p class="mt-2">11, 99zł</p>
  </div>
</template>

<script>
	export default {
		name: "RestaurantItem",
    methods: {
			addToCard: function () {
					this.$buefy.snackbar.open({
            message : `Dodano do koszyka`,
            duration: 1500,
						actionText: null
          })
			}
    }
	}
</script>

<style scoped>

</style>