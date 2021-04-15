<template>
   <div id="app">
<router-link to="/">Go to Home</router-link>
    <router-link to="/login">Go to Login</router-link>
    <div>
      <h1>this is home page</h1>
    </div>
    
  </div>
  <router-view />
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>