<template>
  <header>
    <Nav useSticky="true"/>
  </header>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: 'Header',
  components: {
    Nav,
  },
};
</script>

<style scoped lang="scss">
</style>
