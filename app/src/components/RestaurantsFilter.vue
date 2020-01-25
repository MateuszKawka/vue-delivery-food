<template>
  <div>
    <b-icon icon="filter" @click.native="showFilters">
    </b-icon>
    <b-modal :active.sync="isCardModalActive" has-modal-card full-screen scroll="keep" :can-cancel="false">
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="card-header-title">
            Filters
          </p>
        </header>
        <section class="modal-card-body">
        <p class="title is-6">Types:</p>
          <b-field class="field" v-for="item in types" :key="item">
            <b-checkbox v-model="filters"
                    :native-value="item"
                    >
                {{item}}
            </b-checkbox>
          </b-field>
          <p class="title is-6">Distance:</p>
          <b-field>
            <b-radio v-model="filters"
                     native-value="all"
            >
              all
            </b-radio>
          </b-field>
          <b-field v-for="item in distances" :key="item">

          <b-radio v-model="filters"
                      :native-value="item"
          >
             {{ item }} km
          </b-radio>
        </b-field>
      </section>
        <footer class="modal-card-foot">
          <b-button type="is-primary" class="card-foot-item" @click="resetFilters">Reset</b-button>
          <b-button type="is-primary" class="card-foot-item" @click="showFilters">Close</b-button>
          <b-button type="is-primary" class="card-foot-item" @click="saveFilter">Save</b-button>
        </footer>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import { types, distances } from '../helpers/consts'
import { SET_FILTERS } from "../store/modules/filters/filters-mutations.types";

  export default {
		name: "RestaurantsFilter.vue",
    data: () => ({
			isCardModalActive: false,
			types,
			distances,
      filters: []
    }),
    methods: {
			showFilters: function() {
        this.isCardModalActive = !this.isCardModalActive
      },
      resetFilters: function() {
				this.filters = []
      },

      saveFilter: function () {
        this.$store.commit(`filters/${SET_FILTERS}`, this.filters);
				this.isCardModalActive = false
			}
    }
	}
</script>
<style scoped>

</style>