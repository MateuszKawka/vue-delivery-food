<template>
  <div>
    <b-icon icon="cart" @click.native="cartBind">
    </b-icon>
    <b-modal :active.sync="showCart">
      <p class="image is-4by3">
        <img src="/static/img/placeholder-1280x960.png">
      </p>
    </b-modal>
  </div>
</template>

<script>
	export default {
		name: "Cart",
    data: () => ({
      showCart: false
    }),
    methods: {
			cartBind: function () {
          this.showCart = !this.showCart
			}
    }
	}
</script>

<style scoped>

</style>