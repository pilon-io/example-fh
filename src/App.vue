<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <SignUpBar/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import SignUpBar from '@/components/SignUpBar.vue';

export default {
  components: {
    Footer,
    SignUpBar,
  },
};
</script>

<style lang="scss">
  body {
    margin: 0 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*color: #2c3e50;*/
    color: #4a4a4a;
  }

  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .container {
    margin: 0 auto;
    max-width: 1330px;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
