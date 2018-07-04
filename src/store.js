import Vue from 'vue';
import Vuex from 'vuex';
import config from './config';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      token: null,
      customerId: null,
      expiration: null,
      redirectAfterLogin: null,
    },
  },
  mutations: {
    authenticateUser(state, authState) {
      // vue-cli should take of not making this a lint error, but it doesn't
      // eslint-disable-next-line
      state.auth = {
        ...state.auth,
        token: authState.token,
        customerId: authState.customerId,
        expiration: authState.expiration,
      };
    },
    clearAuthenticatedUser(state) {
      // vue-cli should take of not making this a lint error, but it doesn't
      // eslint-disable-next-line
      state.auth = {
        ...state.auth,
        token: null,
        customerId: null,
        expiration: null,
        redirectAfterLogin: null,
      };
    },
    setRedirectAfterLogin(state, redirectTo) {
      // vue-cli should take of not making this a lint error, but it doesn't
      // eslint-disable-next-line
      state.auth = {
        ...state.auth,
        redirectAfterLogin: redirectTo,
      };
    }
  },
  actions: {
    login({ commit, dispatch }, authData) {
      config.pilonApi.post('/token', {
        token_scope: 'customer',
        environment_id: config.environmentId,
        customer_email: authData.email,
        password: authData.password,
      })
        .then((res) => {
          console.log(res);
          // Calculate expiration times
          const now = new Date();
          const expirationDate = new Date(now.getTime() + (res.data.expires_in * 1000));
          // Build authData
          const authState = {
            token: res.data.token,
            customerId: res.data.customer_id,
            expiration: expirationDate.toString(),
          };
          // Save to local storage
          localStorage.setItem('auth.token', authState.token);
          localStorage.setItem('auth.customerId', authState.customerId);
          localStorage.setItem('auth.expiration', authState.expiration);
          // Commit auth to state
          commit('authenticateUser', authState);
          // Set timer for auto-logout
          dispatch('setAutoLogoutTimer', res.data.expires_in);
          // Redirect
          const redirectTo = typeof authData.redirectTo === 'string' ? authData.redirectTo : '/';
          router.push(redirectTo);
        })
        .catch(error => console.log(error));
    },
    logout({ commit }) {
      // Clear auth from state
      commit('clearAuthenticatedUser');
      // Clear auth from local storage
      localStorage.removeItem('auth.token');
      localStorage.removeItem('auth.customerId');
      localStorage.removeItem('auth.expiration');
      // Redirect home if we're on a secured page
      if (router.currentRoute.meta.requiresAuth) {
        router.push('/');
      }
    },
    tryAuthFromLocalStorage({ commit }) {
      const token = localStorage.getItem('auth.token');
      if (!token) {
        return;
      }
      const expirationDate = new Date(localStorage.getItem('auth.expiration'));
      const now = new Date();
      if (now >= expirationDate) {
        return;
      }
      const customerId = localStorage.getItem('auth.customerId');
      commit('authenticateUser', {
        token,
        customerId,
        expiration: expirationDate.toString(),
      });
    },
    setAutoLogoutTimer({ dispatch }, expirationTime) {
      setTimeout(() => {
        dispatch('logout');
      }, expirationTime * 1000);
    },
  },
  getters: {
    customerId(state) {
      return state.auth.customerId;
    },
    isAuthenticated(state) {
      return state.auth.token !== null;
    },
  },
});
