<template>
  <div>
    <section id="burgers">
      <p class="mt-2 is-size-4">Burgery</p>
      <RestaurantItem />
      <RestaurantItem />
      <RestaurantItem />
    </section>

  <section id="wraps">
    <p class="mt-2 is-size-4">Wrapy</p>
    <RestaurantItem />
    <RestaurantItem />
    <RestaurantItem />
  </section>
    <RestaurantItem />
    <RestaurantItem />
    <RestaurantItem />
  </div>
</template>

<script>
  import RestaurantItem
		from "./RestaurantItem";

	export default {
		name: "RestaurantItemList",
    components: {
			RestaurantItem
    }
	}
</script>

<style scoped>

</style>