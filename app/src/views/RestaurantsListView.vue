<template>
  <section class="section">
    <div class="container">
    <div class="columns is-mobile">
      <div class="column is-10">
        <Search/>
      </div>
      <div class="column is-2 is-flex">
        <RestaurantsFilter/>
      </div>
    </div>
    <p v-if="filters.length">Active filters:</p>
    <b-taglist>
      <b-tag type="is-primary" class="has-text-weight-medium"  v-for="(filter, index) in filters" :key="filter" closable
             aria-close-label="Close tag"
             @close="removeTag(index)">{{filter}}</b-tag>
    </b-taglist>
    <SortRestaurants />
    <transition-group name="fade" tag="div">
      <RestaurantPreview v-for="item in restaurants" :restaurant="item" :key="item.name" />
    </transition-group>
    </div>
  </section>
</template>

<script>
  import RestaurantPreview
		from "../components/RestaurantPreview";
  import Search
		from "../components/shared/Search";
  import RestaurantsFilter
		from "../components/RestaurantsFilter";

  import SortRestaurants from "../components/UI/SortRestaurants"
import { REMOVE_FILTER } from "../store/modules/filters/filters-mutations.types";
import { GET_RESTAURANTS_LIST } from "../store/modules/restaurants/restaurants-actions.types";

  export default {
		name: "RestaurantsListView",
    components: {
			RestaurantPreview,
			Search,
			RestaurantsFilter,
			SortRestaurants
    },
    data: () => ({
			mocks: ['american', 'pizza']
    }),
    computed: {
			restaurants: function() {
				return this.$store.getters[`restaurants/filteredRestaurants`]
      },
        filters: function () {
        return this.$store.state.filters.activeFilters
		}
    },
    methods: {
			removeTag: function (index) {
				this.$store.commit(`filters/${REMOVE_FILTER }`, index)
			}
    },
      beforeMount() {
			this.$store.dispatch(`restaurants/${GET_RESTAURANTS_LIST}`)
	  }
  }
</script>

<style scoped>

</style>