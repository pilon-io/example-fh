<template>
  <div class="about">
    <Header/>
    <div class="container">
      <div class="about-content">
        <h1>This is an about page</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'about',
  components: {
    Header,
  },
};
</script>

<style scoped lang="scss">
  .about-content {
    margin-top: 80px;
    min-height: 360px;
  }
</style>
