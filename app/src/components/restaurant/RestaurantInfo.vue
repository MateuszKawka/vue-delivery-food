<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-5by3">
        <img :src="restaurant.image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{restaurant.name}}</p>
          <p class="subtitle is-6">{{restaurant.address}}</p>
        </div>
        <div class="media-right">
          <p class="is-size-6 has-text-primary has-text-weight-medium">{{restaurant.rating}}/5</p>
        </div>
      </div>
      <div class="content">
        <div class="columns is-mobile">
          <div class="column is-4 has-text-centered">
            <p class="is-size-7 has-text-weight-medium">Min kwota</p>
            <p class="is-size-6 has-text-primary has-text-weight-medium">25 zł</p>
          </div>
          <div class="column is-4 has-text-centered">
            <p class="is-size-7 has-text-weight-medium">Koszt dostawy</p>
            <p class="is-size-6 has-text-primary has-text-weight-medium">9 zł</p>
          </div>
          <div class="column is-4 has-text-centered">
            <p class="is-size-7 has-text-weight-medium">Odległość</p>
            <p class="is-size-6 has-text-primary has-text-weight-medium" >1.4km</p>
          </div>
        </div>
        <b-taglist>
          <b-tag type="is-primary" class="has-text-weight-medium"  v-for="type in restaurant.types" :key="type">{{$t(`types.${type}`)}}</b-tag>
        </b-taglist>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "RestaurantInfo",
    computed: {
			restaurant: function () {
        return {
					name: 'McDonald',
					address: 'Grunwaldzka 249',
					image: 'https://cdn.galleries.smcloud.net/t/galleries/gf-1y8X-q6rp-7H9N_mcdonalds-przyjedzie-do-ciebie-664x442-nocrop.jpg',
					id: '1337',
					types: ['fastFood', 'american', 'burger'],  // max 7
					rating: 4.7
				}
			}
    }
	}
</script>

<style scoped>

</style>