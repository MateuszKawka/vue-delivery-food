<template>
  <div>
    <Menu />
    <router-view/>
  </div>
</template>

<script>
  import Menu from '@/components/UI/Menu'

    export default  {
  	  name: 'App',
      components: {
  		  Menu
      }
  }
</script>