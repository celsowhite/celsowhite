import Vue from 'vue';
import Vuex from 'vuex';
import content from './modules/content';
import settings from './modules/settings';

Vue.use(Vuex);

/*----------------------------
Vuex Instance w/ our store modules
---
Export state, getters, actions and mutations so they can be used by vue instances and components.
----------------------------*/

export default new Vuex.Store({
  modules: {
    content,
    settings,
  },
});
