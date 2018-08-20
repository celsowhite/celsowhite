<template>
  <div id="app">
    <FixedOverlay />
    <transition name="router_anim" appear mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<script>
      
  // Imports
  
  import { store } from "./store/store.js";
  import './styles/main.scss';
  import FixedOverlay from './components/FixedOverlay';
  import MainFooter from './components/MainFooter';
  
  export default {
    name: 'App',
    metaInfo: {
      title: 'Celso White',
      titleTemplate: '%s | Celso White'
    },
    components: {
      FixedOverlay
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
    
    &.main_content {
      transition: all 1s ease-in-out;
    }
  }
  
  .router_anim-enter, .router_anim-leave-to {
    &.main_content {
      opacity: 0;
      transform: translateY(30px);
    }
  }
    
  // Leave
  
  .router_anim-leave-active {
    transition: all .5s ease-in-out;
    
    &.main_content {
      transition: all .5s ease-in-out;
    }
  }
            
</style>
