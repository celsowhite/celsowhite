// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import { mapActions } from 'vuex';
import VueAnalytics from 'vue-analytics';

Vue.use(VueAnalytics, {
  id: 'UA-36564362-1',
  router,
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  methods: {
    ...mapActions('content', ['getInitialData']),
  },
  mounted: function() {
    this.getInitialData();
  },
});
