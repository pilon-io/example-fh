<template>
  <div id="app">
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
  created() {
    this.$store.dispatch('tryAuthFromLocalStorage');
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

  /* ----- BUTTONS ----- */
  .btn:link,
  .btn:visited,
  input[type=submit] {
    display: inline-block;
    padding: 10px 30px;
    font-weight: 300;
    text-decoration: none;
    border-radius: 200px;
    -webkit-transition: background-color 0.2s, border 0.2s, color 0.2s;
    transition: background-color 0.2s, border 0.2s, color 0.2s;
  }

  .btn-full:link,
  .btn-full:visited,
  input[type=submit] {
    background-color: #b77d64;
    border: 1px solid #b77d64;
    color: #fff;
    margin-right: 15px;
  }

  .btn-ghost:link,
  .btn-ghost:visited {
    border: 1px solid #b77d64;
    color: #b77d64;
  }

  .btn:hover,
  .btn:active,
  input[type=submit]:hover,
  input[type=submit]:active {
    background-color: #b77d64;
  }

  .btn-full:hover,
  .btn-full:active {
    border: 1px solid #b77d64;
  }

  .btn-ghost:hover,
  .btn-ghost:active {
    border: 1px solid #b77d64;
    color: #fff;
  }
</style>
