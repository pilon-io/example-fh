import Vue from 'vue';
import Vuex from 'vuex';
import config from './config';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      token: null,
      environmentId: null,
      customerId: null,
      expiration: null,
      redirectAfterLogin: null,
      customer: {},
    },
  },
  mutations: {
    authenticateUser(state, authState) {
      // vue-cli should take of not making this a lint error, but it doesn't
      // eslint-disable-next-line
      state.auth = {
        ...state.auth,
        ...authState,
      };
    },
    clearAuthenticatedUser(state) {
      // vue-cli should take of not making this a lint error, but it doesn't
      // eslint-disable-next-line
      state.auth = {
        ...state.auth,
        token: null,
        environmentId: null,
        customerId: null,
        expiration: null,
        redirectAfterLogin: null,
      };
    },
    setAuthenticatedCustomer(state, customer) {
      // vue-cli should take of not making this a lint error, but it doesn't
      // eslint-disable-next-line
      state.auth.customer = {
        ...state.auth.customer,
        ...customer,
      };
    },
  },
  actions: {
    register({ dispatch }, customerData) {
      // Get a public token
      config.pilonApi.post('/token', {
        token_scope: 'public',
        environment_id: config.environmentId,
      })
        .then((resToken) => {
          config.pilonApi.post('/customers', {
            environment: `/api/environments/${config.environmentId}`,
            first_name: customerData.firstName,
            last_name: customerData.lastName,
            email: customerData.email,
            password: customerData.password,
          }, {
            headers: {
              Authorization: `Bearer ${resToken.data.token}`,
            },
          })
            .then(() => {
              dispatch('login', {
                email: customerData.email,
                password: customerData.password,
              });
            })
            .catch(error => console.log(error));
        });
    },
    login({ commit, dispatch }, authData) {
      config.pilonApi.post('/token', {
        token_scope: 'customer',
        environment_id: config.environmentId,
        customer_email: authData.email,
        password: authData.password,
      })
        .then((res) => {
          // Calculate expiration times
          const now = new Date();
          const expirationDate = new Date(now.getTime() + (res.data.expires_in * 1000));
          // Build authData
          const authState = {
            token: res.data.token,
            environmentId: res.data.environment_id,
            customerId: res.data.customer_id,
            expiration: expirationDate.toString(),
          };
          // Save to local storage
          localStorage.setItem('auth.token', authState.token);
          localStorage.setItem('auth.environmentId', authState.environmentId);
          localStorage.setItem('auth.customerId', authState.customerId);
          localStorage.setItem('auth.expiration', authState.expiration);
          // Commit auth to state
          commit('authenticateUser', authState);
          // Set timer for auto-logout
          dispatch('setAutoLogoutTimer', res.data.expires_in);
          // Fetch customer
          dispatch('fetchCustomerDetails', authState.customerId);
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
      localStorage.removeItem('auth.environmentId');
      localStorage.removeItem('auth.customerId');
      localStorage.removeItem('auth.expiration');
      // Redirect home if we're on a secured page
      if (router.currentRoute.meta.requiresAuth) {
        router.push('/');
      }
    },
    tryAuthFromLocalStorage({ commit, dispatch }) {
      const token = localStorage.getItem('auth.token');
      if (!token) {
        return;
      }
      const expirationDate = new Date(localStorage.getItem('auth.expiration'));
      const now = new Date();
      if (now >= expirationDate) {
        return;
      }
      const expiresIn = expirationDate - now;
      const customerId = localStorage.getItem('auth.customerId');
      const environmentId = localStorage.getItem('auth.environmentId');
      commit('authenticateUser', {
        token,
        environmentId,
        customerId,
        expiration: expirationDate,
      });
      // Set timer for auto-logout
      dispatch('setAutoLogoutTimer', expiresIn);
      // Fetch customer
      dispatch('fetchCustomerDetails', customerId);
    },
    setAutoLogoutTimer({ dispatch }, expirationTime) {
      setTimeout(() => {
        dispatch('logout');
      }, expirationTime * 1000);
    },
    fetchCustomerDetails({ commit, state }, customerId) {
      config.pilonApi.get(`/customers/${customerId}`, {
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
        },
      })
        .then((res) => {
          commit('setAuthenticatedCustomer', res.data);
        });
    },
  },
  getters: {
    currentCustomerId(state) {
      return state.auth.customerId;
    },
    currentCustomer(state) {
      return state.auth.customer;
    },
    isAuthenticated(state) {
      return state.auth.token !== null;
    },
    authInfo(state) {
      return state.auth;
    },
  },
});
