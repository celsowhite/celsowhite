<template>
  <nav class="mobile_navigation" :class="{ nav_open: navIsOpen }">
    <ul>
      <li v-for="item in menus.main_menu" :key="item.title">
        <router-link
          :to="item.slug === 'home' ? '/' : item.slug"
          @click.native="toggleNav"
          exact
          >{{ item.title }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MobileNavigation',
  computed: {
    ...mapState('global', {
      navIsOpen: state => state.navIsOpen,
    }),
    ...mapState('content', {
      menus: state => state.menus,
    }),
  },
  methods: {
    ...mapActions('global', ['toggleNav']),
  },
};
</script>

<style scoped lang="scss">
// Structure

nav.mobile_navigation {
  position: fixed;
  height: 100vh;
  background: $black;
  color: $white;
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  @include z-index('hidden');
  transition: opacity 0.3s ease-in-out, z-index 0s 0.5s ease-in-out;

  &.nav_open {
    z-index: 29;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }

  @include tablet {
    display: flex;
  }
}

// List

nav.mobile_navigation ul li {
  text-transform: uppercase;
  margin-bottom: 10px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease-in-out;
  @include staggered_transition($start: 1, $items: 5, $initial: 0, $step: 0.1);
}

nav.mobile_navigation.nav_open ul li {
  opacity: 1;
  transform: translateY(0);
}
</style>
