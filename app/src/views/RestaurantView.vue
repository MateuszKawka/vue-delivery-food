<template>
  <section class="section">
    <div class="container">
      <RestaurantInfo />
      <CategoriesTabs/>
      <RestaurantItemList />
    </div>
  </section>
</template>

<script>
  import RestaurantItemList
		from "../components/restaurant/RestaurantItemList";
  import RestaurantInfo
		from "../components/restaurant/RestaurantInfo";
import CategoriesTabs
	from "../components/restaurant/CategoriesTabs";

	export default {
		name: "RestaurantView",
    components: {
			RestaurantItemList,
			RestaurantInfo,
			CategoriesTabs
    }
	}
</script>

<style scoped>

</style>