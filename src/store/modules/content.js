import { getWebsiteContent, getMenus } from '../../services/wordpress/rest-api';

/*----------------------------
State
---
Root state object that holds the global state for the site.
----------------------------*/

const state = {
  websites: [],
  menus: [],
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
      getWebsiteContent(),
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
  /**
   * Featured Homepage Websites
   */

  featuredHomepageWebsites(state) {},
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
