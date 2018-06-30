import Vue from 'vue';
import VueWaypoint from 'vue-waypoint';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Waypoint plugin
Vue.use(VueWaypoint);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
