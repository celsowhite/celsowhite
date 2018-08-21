<template>
  <div id="app">
    <MobileNavigation />
    <transition name="router_anim" appear mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
    <FixedOverlay />
  </div>
</template>

<script>
      
  // Imports
  
  import { store } from "./store/store.js";
  import './styles/main.scss';
  import FixedOverlay from './components/FixedOverlay';
  import MobileNavigation from './components/MobileNavigation';
  
  export default {
    name: 'App',
    metaInfo: {
      title: 'Celso White',
      titleTemplate: '%s | Celso White'
    },
    components: {
      FixedOverlay,
      MobileNavigation
    },
    data() {
      return {
        storeState: store.state
      }
    }
  }
  
</script>

<style lang="scss">
      
  /*--- 
  Router Animation
  ---*/
      
  // Enter/Appear
      
  .router_anim-enter-active {
    transition: all 2s ease-in-out;
    
    .main_content {
      transition: all .5s .3s ease-in-out;
    }
  }
  
  .router_anim-enter, .router_anim-leave-to {
    .main_content {
      opacity: 0;
      transform: scale(.95);
    }
  }
    
  // Leave
  
  .router_anim-leave-active {
    transition: all .8s ease-in-out;
    
    .main_content {
      transition: all .3s ease-in-out;
    }
  }
            
</style>
