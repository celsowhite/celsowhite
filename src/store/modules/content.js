import { getWebsiteContent } from '../../services/wordpress/rest-api';

/*----------------------------
State
---
Root state object that holds the global state for the site.
----------------------------*/

const state = {
  websites: [],
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
};

/*----------------------------
Actions
----------------------------*/

const actions = {
  // Get Initial Data

  async getInitialData({ commit }) {
    const [websiteContent] = await Promise.all([getWebsiteContent()]);
    commit('setWebsiteData', websiteContent);
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
