<template>
  <section class="section">
    <div class="columns is-mobile">
      <div class="column is-10">
        <Search/>
      </div>
      <div class="column is-flex">
        <RestaurantsFilter/>
      </div>
    </div>
    <p>Active filters:</p>
    <b-taglist>
      <b-tag type="is-primary" class="has-text-weight-medium"  v-for="filter in mocks" :key="filter" closable
             aria-close-label="Close tag"
             @close="removeTag(filter)">{{filter}}</b-tag>
    </b-taglist>
    <RestaurantPreview v-for="item in restaurants" :restaurant="item" :key="item.name" />
  </section>
</template>

<script>
  import RestaurantPreview
		from "../components/RestaurantPreview";
  import Search
		from "../components/Search";
  import RestaurantsFilter
		from "../components/RestaurantsFilter";

	export default {
		name: "RestaurantsListView",
    components: {
			RestaurantPreview,
			Search,
			RestaurantsFilter
    },
    data: () => ({
			mocks: ['american', 'pizza']
    }),
    computed: {
			restaurants: function() {
				return [
          {
          	name: 'McDonald',
            address: 'Grunwaldzka 249',
            image: 'https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2017/07/mcdonalds-ubereats-1180x541.jpg',
            id: '1337',
            types: ['fastFood', 'american', 'burger'],  // max 7
            rating: 4.7
          },
					{
						name: 'Burger King',
						address: 'Grunwaldzka 248',
            image: 'https://pliki.portalspozywczy.pl/i/07/02/40/070240_r0_940.jpg',
						id: '2137',
						types: ['fastFood', 'american', 'burger'],  // max 7
						rating: 4.3
					}
        ]
      }
    },
    methods: {
			removeTag: function (filter) {
				console.log(this.mocks.findIndex(item => item === filter))
        this.mocks.splice(this.mocks.findIndex(item => item === filter), 1)
			}
    }
	}
</script>

<style scoped>

</style>