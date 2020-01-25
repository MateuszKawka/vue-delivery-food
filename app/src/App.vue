<template>
  <main class="container">
    <TopBar />
    <AddressInfo/>
    <router-view/>
  </main>
</template>

<script>
  import TopBar from '@/components/UI/TopBar'
  import AddressInfo
		from "./components/AddressInfo";
    export default  {
  	  name: 'App',
      components: {
				TopBar,
				AddressInfo
      }
  }
</script>