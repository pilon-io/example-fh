<template>
  <footer>
    <div class="container">
      <div class="nav-container">
        <div class="nav-box">
          <p class="nav-title">Products</p>
          <ul class="nav">
            <li><a href="#">vue</a></li>
            <li><a href="#">vue</a></li>
            <li><a href="#">vue</a></li>
            <li><a href="#">vue</a></li>
            <li><a href="#">vue</a></li>
          </ul>
        </div>
        <div class="nav-box">
          <p class="nav-title">About</p>
          <ul class="nav">
            <li><a href="#">vue</a></li>
            <li><a href="#">vue</a></li>
            <li><a href="#">vue</a></li>
          </ul>
        </div>
        <div class="nav-box">
          <p class="nav-title">Products</p>
          <ul class="nav">
            <li><a href="#">vue</a></li>
            <li><a href="#">vue</a></li>
          </ul>
        </div>
        <div class="nav-box">
          <p class="nav-title">Products</p>
          <ul class="nav">
            <li><a href="#">vue</a></li>
            <li><a href="#">vue</a></li>
            <li><a href="#">vue</a></li>
            <li><a href="#">vue</a></li>
          </ul>
        </div>
        <div class="nav-box nav-box-image">
          <img width="140px" height="140px" src="../assets/fh_white_188_188.png"/>
        </div>
      </div>
      <div class="copyright-container">
        <ul class="nav">
          <li class="item">
            <small>&copy; Copyright 2018-2020. All Rights Reserved. Facial Hair Inc.</small>
          </li>
          <li class="item"><small><a href="#">Privacy</a></small></li>
          <li class="item"><small><a href="#">Terms</a></small></li>
          <li class="item"><small><a href="#">Cookies</a></small></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {},
};
</script>

<style scoped lang="scss">
footer {
  color: #fff;
  background-color: #232e39;
  padding: 30px 0 20px 0;
  .nav {
    list-style: none;
    padding: 0;
    a {
      -o-transition: 0.2s;
      -ms-transition: 0.2s;
      -moz-transition: 0.2s;
      -webkit-transition: 0.2s;
      transition: 0.2s;
    }
    a:link,
    a:visited {
      text-decoration: none;
      color: #fff;
    }
    a:hover,
    a:active {
      color: #b77d64;
    }
  }
  .nav-container {
    display: flex;
    .nav-box {
      margin: 0 30px;
      .nav-title {
        border-bottom: 1px solid rgba(86, 95, 103, 0.53);
        padding-bottom: 10px;
        text-transform: uppercase;
      }
    }
    .nav-box-image {
      margin: 0 40px 0 auto;
      align-self: center;
    }
  }
  .copyright-container {
    color: #565f67;
    padding: 20px 0 40px 0;
    border-top: 1px solid rgba(86, 95, 103, 0.53);
    .nav {
      display: flex;
      .item {
        display: block;
        margin: 20px;
        a:link,
        a:visited {
          color: #565f67;
        }
        a:hover,
        a:active {
          color: #b77d64;
        }
      }
    }
  }
  small {
    font-size: 12px;
  }
}
</style>
