<template>
  <div class="home">
    <HomeHeader/>
    <div class="container">
      <div class="home-content">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import HomeHeader from '@/components/HomeHeader.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    HomeHeader,
  },
};
</script>

<style scoped lang="scss">
  .home-content {
    text-align: center;
    padding-top: 20px;
  }
</style>
