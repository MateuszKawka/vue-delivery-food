<template>
  <div>
  <b-field :label="$t(`ui.addressLabel`)" custom-class="has-text-white	">
    <b-input v-model="address"></b-input>
  </b-field>
    <b-button tag="router-link" data-cy="go-button"
              to="/restaurants">{{$t(`ui.showRestaurants`)}}</b-button>
  </div>
</template>

<script>
	export default {
		name: "AddressForm.vue",
    data: () => ({
      address: ''
    })
	}
</script>

<style scoped>

</style>