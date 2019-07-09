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
---
Operations that are responsible for mutating the state.
Each mutation handler gets the entire state tree as the
first argument, followed by additional payload arguments.
Mutations must be synchronous and can be recorded by plugins for debugging purposes.
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
---
Functions that cause side effects and can involve asynchronous operations.
Actions are normally responsible for committing mutations.
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
---
Functions that can grab, alter and return data from state.
These are reactive. When the state changes these values will change.
----------------------------*/

const getters = {
  /**
   * Featured Homepage Websites
   */

  featuredHomepageWebsites(state) {},
};

/*----------------------------
Cart Vuex Data
---
Export state, getters, actions and mutations so they can be used by vue instances and components.
----------------------------*/

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
