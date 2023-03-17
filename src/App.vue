<template>
  <div>
    <NavBar/>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view/>
  </div>
  
</template>

<script>
import {defineAsyncComponent} from 'vue'
//import NavBar from './modules/shared/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar : defineAsyncComponent( ()=> import(/*webpackChunkName: "NavBar"*/'@/modules/shared/components/NavBar') )
  // NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
