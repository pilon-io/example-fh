<template>
  <nav v-bind:class="{ sticky: useSticky }">
    <div class="container">
      <router-link to="/">
        <img src="../assets/fh_white_188_188.png" alt="FH Logo" class="logo">
        <img src="../assets/fh_black_310_310.png" alt="FH Logo" class="logo-black">
      </router-link>
      <ul class="main-nav js--main-nav">
        <li><a href="#">Shop</a></li>
        <li><a href="#">How it works</a></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/my-account">My Account</router-link></li>
        <li v-if="!isAuthenticated"><router-link to="/login">Login</router-link></li>
        <li v-if="!isAuthenticated"><a href="#">Sign up</a></li>
        <li v-if="isAuthenticated"><a href="#" @click="onLogout">Logout</a></li>
      </ul>
      <a class="mobile-nav-icon js--nav-icon"><i class="fas fa-bars"></i></a>
      <div style="clear: both;"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  components: {
  },
  props: {
    useSticky: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style scoped lang="scss">
  .logo {
    cursor: pointer;
    height: 100px;
    width: auto;
    float: left;
    margin-top: 20px;
  }

  .logo-black {
    cursor: pointer;
    display: none;
    height: 50px;
    width: auto;
    float: left;
    margin: 5px 0;
  }

  .main-nav {
    float: right;
    list-style: none;
    margin-top: 55px;
  }

  .main-nav li {
    display: inline-block;
    margin-left: 40px;
  }

  .main-nav li a,
  .main-nav li a:link,
  .main-nav li a:visited {
    padding: 8px 0;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
    border-bottom: 2px solid transparent;
    -webkit-transition: border-bottom 0.2s;
    transition: border-bottom 0.2s;
  }

  .main-nav li a:hover,
  .main-nav li a:active {
    border-bottom: 2px solid #b77d64;
  }

  .sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 2px #efefef;
    z-index: 9999;
  }

  .sticky .main-nav { margin-top: 18px; }

  .sticky .main-nav li a:link,
  .sticky .main-nav li a:visited {
    padding: 16px 0;
    color: #555;
  }

  .sticky .logo { display: none; }
  .sticky .logo-black { display: block; }

  .mobile-nav-icon {
    float: right;
    margin-top: 30px;
    cursor: pointer;
    display: none;
  }

  .mobile-nav-icon i {
    font-size: 200%;
    color: #fff;
  }

  /* Small phones to small tablets: from 481px to 767px */
  @media only screen and (max-width: 767px) {
    .main-nav { display: none; }
    .mobile-nav-icon {display: inline-block;}

    .main-nav {
      float: left;
      margin-top: 30px;
      margin-left: 25px;
    }

    .main-nav li {
      display: block;
    }

    .main-nav li a:link,
    .main-nav li a:visited {
      display: block;
      border: 0;
      padding: 10px 0;
      font-size: 100%;
    }

    .sticky .main-nav { margin-top: 10px; }

    .sticky .main-nav li a:link,
    .sticky .main-nav li a:visited { padding: 10px 0; }
    .sticky .mobile-nav-icon { margin-top: 10px; }
    .sticky .mobile-nav-icon i { color: #555; }
  }
</style>
