<template>
  <navbar></navbar>
  <router-view/>
</template>


<script>
import Navbar from './components/Navbar.vue';
export default {
  components :{
    Navbar
  }
}
</script>


<style>
#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  max-width: 800px;
  margin: 0 auto;
  color: #2c3e50;
  
}


</style>
