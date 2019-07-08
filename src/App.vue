<template>
  <div id="app">
    <MobileNavigation />
    <transition
      name="router_anim"
      appear
      mode="out-in"
      :duration="{ enter: 1300, leave: 1000 }"
    >
      <router-view :key="$route.fullPath" />
    </transition>
    <FixedOverlay />
  </div>
</template>

<script>
// Imports

import { store } from './store/store.js';
import './styles/main.scss';
import FixedOverlay from './components/organisms/FixedOverlay';
import MobileNavigation from './components/organisms/MobileNavigation';

export default {
  name: 'App',
  metaInfo: {
    title: 'Celso White',
    titleTemplate: '%s | Celso White',
  },
  components: {
    FixedOverlay,
    MobileNavigation,
  },
  data() {
    return {
      storeState: store.state,
    };
  },
  mounted: function() {},
};
</script>

<style lang="scss">
/*--- 
  Router Animation
  ---*/

// Enter/Appear

.router_anim-enter-active {
  .main_content {
    transition: all 0.5s 0.3s ease-in-out;
  }
}

.router_anim-enter,
.router_anim-leave-to {
  .main_content {
    opacity: 0;
    transform: scale(0.95);
  }
}

// Leave

.router_anim-leave-active {
  .main_content {
    transition: all 0.5s ease-in-out;
  }
}
</style>
