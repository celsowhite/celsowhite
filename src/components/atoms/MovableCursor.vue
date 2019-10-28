<template>
  <div
    class="cursor"
    :class="[colorScheme, { waiting: hoveringOnLink }, { nav_open: navIsOpen }]"
    :style="{ left: cursorPosition[0] + 'px', top: cursorPosition[1] + 'px' }"
  ></div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MovableCursor',
  props: {
    cursorPosition: Array,
    hoveringOnLink: Boolean,
  },
  computed: {
    ...mapState('settings', {
      colorScheme: state => state.colorScheme,
      navIsOpen: state => state.navIsOpen,
    }),
  },
};
</script>

<style scoped lang="scss">
.cursor {
  position: absolute;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  top: -100px;
  left: -100px;
  pointer-events: none;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  @media (any-hover: none) {
    display: none;
  }
}

.cursor:before {
  position: absolute;
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

// Black Cursor

.cursor.light {
  background: black;
}

.cursor.light:before {
  background: white;
}

.cursor.light.waiting {
  animation: pulse-black 2s infinite;
}

@keyframes pulse-black {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

// White Cursor

.cursor.dark {
  background: white;
}

.cursor.dark:before {
  background: black;
}

.cursor.dark.waiting {
  animation: pulse-white 2s infinite;
}

// Cursor when nav is open on tablet/mobile

.cursor.nav_open {
  @include tablet {
    background: white;
  }
}

.cursor.nav_open:before {
  @include tablet {
    background: black;
  }
}

.cursor.nav_open.waiting {
  @include tablet {
    animation: pulse-white 2s infinite;
  }
}

@keyframes pulse-white {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}
</style>
