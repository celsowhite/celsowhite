<template>
  <div id="app" @mousemove="updateCursorPosition" @mouseleave="hideCursor" @mouseenter="showCursor">
    <MobileNavigation />
    <FixedOverlay />
    <transition
      name="router_anim"
      appear
      mode="out-in"
      :duration="{ enter: 1300, leave: 1000 }"
    >
      <router-view :key="$route.fullPath" />
    </transition>
    <MovableCursor
      :hoveringOnLink="hoveringOnLink"
    />
  </div>
</template>

<script>
import "./styles/main.scss";
import { gsap } from "gsap";
import FixedOverlay from "./components/organisms/FixedOverlay";
import MobileNavigation from "./components/organisms/MobileNavigation";
import MovableCursor from "./components/atoms/MovableCursor";

export default {
  name: "App",
  metaInfo: {
    title: "Celso White",
    titleTemplate: "%s | Celso White"
  },
  data() {
    return {
      hoveringOnLink: false
    };
  },
  components: {
    FixedOverlay,
    MobileNavigation,
    MovableCursor
  },
  mounted: function() {
    // Mousemove
    window.addEventListener("mouseover", e => {
      // If hovering over a link or button then indicate it so we can let our other components know.
      if (e.target.closest("a") || e.target.closest("button")) {
        this.hoveringOnLink = true;
      } else {
        this.hoveringOnLink = false;
      }
    });
  },
  methods: {
    // Update Cursor Position
    updateCursorPosition: function(e) {
      gsap.to(".cursor", {
        left: e.clientX - 13,
        top: e.clientY - 13
      });
    },

    // Hide cursor
    hideCursor: function() {
      gsap.to(".cursor", {
        opacity: 0,
        duration: 0.3
      });
    },

    // Show cursor
    showCursor: function() {
      gsap.to(".cursor", {
        opacity: 1,
        duration: 0.3
      });
    }
  }
};
</script>

<style lang="scss">
body {
  // cursor: none !important;
}
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
