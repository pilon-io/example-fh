import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Auth/Login.vue';
import Register from './views/Auth/Register.vue';
import About from './views/About.vue';
import MyAccount from './views/MyAccount.vue';
import ProductList from './views/ProductList.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
      meta: {
        requiresAnon: true,
      },
    },
    {
      path: '/register',
      component: Register,
      meta: {
        requiresAnon: true,
      },
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/my-account',
      component: MyAccount,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/shop',
      name: 'ProductList',
      component: ProductList,
    },
  ],
});

/*
 * Protect my account, require auth
 */
router.beforeEach((to, from, next) => {
  // Does this route require authenticated user?
  if (to.meta.requiresAuth) {
    // Check auth
    if (!store.getters.isAuthenticated) {
      // Also check local storage, in case this is a page reload
      if (typeof localStorage.getItem('auth.token') !== 'string') {
        // Not authenticated
        next({
          path: '/login',
          query: { redirect: to.fullPath },
        });
      }
    }
  }

  // Otherwise allow route
  next();
});

export default router;
