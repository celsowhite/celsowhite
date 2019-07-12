import { getPosts, getMenus } from '../../services/wordpress/rest-api';

/*----------------------------
State
---
Root state object that holds the global state for the site.
----------------------------*/

const state = {
  websites: [],
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
    const [websiteContent, menus] = await Promise.all([
      getPosts('website'),
      getMenus(),
    ]);
    commit('setWebsiteData', websiteContent);
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
