<template>
  <div class="my-account">
    <Header/>
    <div class="container">
      <div class="my-account-content">
        <h1>My Account</h1>
        <h2>Customer Information</h2>
        <p>
          ID #{{ currentCustomer.id }}<br/>
          {{ currentCustomer.first_name }} {{ currentCustomer.last_name }}<br/>
          {{ currentCustomer.email }}
        </p>
        <h2>Current Security Token</h2>
        <p class="security-info">
          <strong>Pilon Environment ID:</strong> {{ authInfo.environmentId }}<br/><br/>
          <strong>Token Expires At:</strong> {{ authInfo.expiration }}<br/><br/>
          <strong>Auth Token:</strong><br/>
          <small>{{ authInfo.token }}</small><br/><br/>
        </p>
        <div></div>
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
  computed: {
    currentCustomer() {
      return this.$store.getters.currentCustomer;
    },
    authInfo() {
      return this.$store.state.auth;
    },
  },
};
</script>

<style scoped lang="scss">
  .my-account-content {
    margin-top: 80px;
    min-height: 360px;
  }
  p.security-info {
    word-wrap: break-word;
    small {
      font-size: 10px;
    }
  }
</style>
