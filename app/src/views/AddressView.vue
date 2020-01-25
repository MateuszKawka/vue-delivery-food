<template>
  <section class="section address-view">
    <AddressForm/>
  </section>
</template>

<script>
  import AddressForm
		from "../components/shared/AddressForm";

	export default {
		name: "AddressView",
    components: {
			AddressForm
    }
	}
</script>

<style lang="scss" scoped>
.address-view {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: url("~@/assets/blob.svg") center no-repeat;
  background-size: cover;
}
</style>