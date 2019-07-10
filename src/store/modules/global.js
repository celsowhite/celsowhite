/*----------------------------
State
---
Root state object that holds the global state for the site.
----------------------------*/

const state = {
  colorScheme: 'dark',
  navIsOpen: false,
};

/*----------------------------
Mutations
----------------------------*/

const mutations = {
  /**
   * Set Color Scheme
   */

  setColorScheme(state, payload) {
    state.colorScheme = payload.colorScheme;
  },

  /**
   * Toggle Nav
   */

  toggleNav(state, payload) {
    state.navIsOpen = !state.navIsOpen;
  },
};

/*----------------------------
Actions
----------------------------*/

const actions = {
  // Set Color Scheme

  setColorScheme({ commit }, payload) {
    commit('setColorScheme', payload);
  },

  // Toggle Nav

  toggleNav({ commit }) {
    commit('toggleNav');
  },
};

/*----------------------------
Getters
----------------------------*/

const getters = {};

/*----------------------------
Cart Vuex Data
----------------------------*/

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
