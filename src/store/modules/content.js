import { getPosts, getMenus } from '../../services/wordpress/rest-api';

/*----------------------------
State
---
Root state object that holds the global state for the site.
----------------------------*/

const state = {
  websites: [],
  apps: [],
  menus: [],
  page: {},
};

/*----------------------------
Mutations
----------------------------*/

const mutations = {
  /**
   * Set Website Data
   */

  setWebsiteData(state, websites) {
    state.websites = websites;
  },

  /**
   * Set App Data
   */

  setAppData(state, apps) {
    state.apps = apps;
  },

  /**
   * Set Menus
   */

  setMenus(state, menus) {
    state.menus = menus;
  },
};

/*----------------------------
Actions
----------------------------*/

const actions = {
  // Get Initial Data

  async getInitialData({ commit }) {
    const [websiteContent, appContent, menus] = await Promise.all([
      getPosts('website'),
      getPosts('app'),
      getMenus(),
    ]);
    commit('setWebsiteData', websiteContent);
    commit('setAppData', appContent);
    commit('setMenus', menus);
  },
};

/*----------------------------
Getters
----------------------------*/

const getters = {
  // Website Categories

  websiteCategories(state, getters) {
    const allCategories = state.websites
      .map(website => website.categories)
      .reduce((a, b) => a.concat(b), []);
    const uniqueCategories = [...new Set(allCategories)];
    return uniqueCategories;
  },
};

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
