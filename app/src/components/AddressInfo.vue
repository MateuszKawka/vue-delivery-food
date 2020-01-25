<template>
    <div class="level" v-if="showAddressInfo">
      <div class="level-left">
        <div class="level-item">
          <p class="has-text-centered">Pilotów 12b 20</p>
          <p class="has-text-centered">Gdańsk</p>
        </div>

      </div>
      <div class="level-right">
        <div class="level-item">
      <b-button tag="router-link" to="/">Change address</b-button>
        </div>
    </div>
    </div>
</template>

<script>
	export default {
		name: "AddressInfo",
    computed: {
			showAddressInfo: function () {
        return true;
			}
    }

	}
</script>

<style scoped>

</style>