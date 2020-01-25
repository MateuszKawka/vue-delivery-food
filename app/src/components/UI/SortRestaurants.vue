<template>
  <div>
    <b-dropdown aria-role="list">
      <b-button class="button is-primary" slot="trigger" icon-left="sort-variant" icon-right="menu-down" size="is-small">
       Sort by
      </b-button>

      <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
	export default {
		name: "Sort"
	}
</script>

<style scoped>

</style>