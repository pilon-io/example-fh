<template>
  <div class="product-list">
    <Header/>
    <div class="container">
      <div class="product-list-content">
        <h1>All Products</h1>
        <div class="product-list-items">
          <ProductListItem
              v-for="product in products"
              v-bind:key="product.id"
              v-bind:productData="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ProductListItem from '@/components/ProductListItem.vue';
import config from '../config';

export default {
  name: 'ProductList',
  components: {
    Header,
    ProductListItem,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {},
  mounted() {
    // Get a public token
    config.pilonApi
      .post('/token', {
        token_scope: 'public',
        environment_id: config.environmentId,
      })
      .then(resToken => {
        config.pilonApi
          .get('/products', {
            headers: {
              Authorization: `Bearer ${resToken.data.token}`,
              Accept: 'application/json',
            },
          })
          .then(res => {
            console.log(res.data);
            this.products = res.data;
          });
      });
  },
};
</script>

<style scoped lang="scss">
.product-list-content {
  margin-top: 80px;
  min-height: 360px;
}
.product-list-items {
  display: flex;
}
</style>
