<template>
  <div class="my-account">
    <Header/>
    <div class="container">
      <div class="my-account-content">
        <h1>My Account</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'MyAccount',
  components: {
    Header,
  },
};
</script>

<style scoped lang="scss">
  .my-account-content {
    margin-top: 80px;
    min-height: 360px;
  }
</style>
