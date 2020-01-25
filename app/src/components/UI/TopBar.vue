<template>
    <div class="columns is-mobile is-vcentered">
      <div class="column is-10">
        <h1 class="has-text-primary has-text-weight-semibold">Food app</h1>
      </div>
      <div class="column is-2">
        <Cart />
      </div>
    </div>
</template>

<script>
import Cart from '../Cart';

 export default {
   components: {
		 Cart
   }
 }

</script>