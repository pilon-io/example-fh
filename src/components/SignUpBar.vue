<template>
  <div class="sign-up">
    <div class="container">
      <div class="sign-up-items">
        <div class="item-left">
          <p>Sign up for wonderful content from Facial Hair</p>
        </div>
        <div class="item-right">
          <a class="button" href="#">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpBar',
  props: {},
};
</script>

<style scoped lang="scss">
  .sign-up {
    background-color: #b77d64;
    color: #fff;
    font-size: 30px;
    padding: 60px 0 60px 0;
    .sign-up-items {
      display: flex;
      align-items: center;
      justify-items: center;
      .item-left {
        margin: 30px;
      }
      .item-right {
        margin: 30px;
      }
    }
    .button {
      width: 170px;
      border: 1px solid #fff;
      background-color: transparent;
      transition:
          background .1s cubic-bezier(.55,.09,.68,.53),
          color .1s cubic-bezier(.55,.09,.68,.53);
      position: relative;
      outline: 0;
      color: #fff;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      border-radius: 50px;
      padding: 12px 30px;
      font-size: 16px;
      line-height: 16px;
      cursor: pointer;
    }
    a.button:hover, a.button:active {
      background-color: #fff;
      color: #b77d64;
    }
  }
</style>
