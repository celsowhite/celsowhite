import {
  getPosts,
  getMenus,
  getOptions,
} from '../../services/wordpress/rest-api';

/*----------------------------
State
---
Root state object that holds the global state for the site.
----------------------------*/

const state = {
  websites: [],
  apps: [],
  projects: [],
  menus: [],
  page: {},
  options: {},
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
   * Set Project Data
   */

  setProjectData(state, projects) {
    state.projects = projects;
  },

  /**
   * Set Menus
   */

  setMenus(state, menus) {
    state.menus = menus;
  },

  /**
   * Set Options
   */

  setOptions(state, options) {
    state.options = options;
  },
};

/*----------------------------
Actions
----------------------------*/

const actions = {
  // Get Initial Data

  async getInitialData({ commit }) {
    // Get data from REST api
    const [
      websiteContent,
      appContent,
      projectContent,
      menus,
      options,
    ] = await Promise.all([
      getPosts('website'),
      getPosts('app'),
      getPosts('project'),
      getMenus(),
      getOptions(),
    ]);

    // Set data

    commit('setWebsiteData', websiteContent);
    commit('setAppData', appContent);
    commit('setProjectData', projectContent);
    commit('setMenus', menus);
    commit('setOptions', options);
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
