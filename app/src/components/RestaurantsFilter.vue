<template>
  <div>
    <b-icon icon="filter" @click.native="showFilters">
    </b-icon>
    <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-content">
        <p class="title is-4">Types:</p>
        <div class="field" v-for="item in types" :key="item">
        <b-checkbox v-model="filters"
                    :native-value="item"
                    >
          {{item}}
        </b-checkbox>
        </div>
      </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import { types } from '../helpers/consts'

	export default {
		name: "RestaurantsFilter.vue",
    data: () => ({
			isCardModalActive: false,
			types,
      filters: []
    }),
    methods: {
			showFilters: function() {
				console.log('triggered')
        this.isCardModalActive = !this.isCardModalActive
      }
    }
	}
</script>

<style scoped>

</style>