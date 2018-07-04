<template>
  <div class="item">
    <img width="200" height="200" src="https://www.theartofshaving.com/dw/image/v2/AADV_PRD/on/demandware.static/-/Sites-taos-master-catalog/default/v1530590471076/images/productimages/00670535725015.png?sw=490&sh=490"/>
    <h2>{{ productData.name }}</h2>
    <p>{{ productData.short_desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductListItem',
  components: {
  },
  props: {
    productData: {
      type: Object,
      default: function() {
        return {
          id: '',
          sku: '',
          name: '',
          short_desc: '',
          long_desc: '',
        };
      },
    },
  },
};
</script>

<style scoped lang="scss">
  .item {
    width: 20%;
  }
</style>
