import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Auth/Login.vue';
import About from './views/About.vue';
import MyAccount from './views/MyAccount.vue';
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
  ],
});

/*
 * Protect my account, require auth
 */
router.beforeEach((to, from, next) => {
  // Does this route require auth?
  if (to.meta.requiresAuth) {
    // Check auth
    if (!store.getters.isAuthenticated) {
      // Not authenticated
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    }
  }

  // Otherwise allow route
  next();
});

export default router;
