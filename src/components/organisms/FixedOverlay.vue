<template>
  <div class="fixed_overlay" :class="[{ nav_open: navIsOpen }, colorScheme]">
    <div class="logo">
      <router-link to="/">Celso</router-link>
    </div>
    <div class="menu_button_container" :class="{ nav_open: navIsOpen }">
      <div class="menu_button" @click="toggleNav">
        <button>Menu</button>
        <span class="menu_icon"></span>
      </div>
      <nav class="main_navigation">
        <ul>
          <li v-for="item in menus.main_menu" :key="item.title">
            <router-link
              :to="`/${item.slug}`"
              @click.native="toggleNav"
              exact
              >{{ item.title }}</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="contact" v-if="options.email">
      <p>
        <a :href="`mailto:${options.email}`">{{ options.email }}</a>
      </p>
      <span class="line"></span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'FixedOverlay',
  methods: {
    ...mapActions('global', ['toggleNav']),
  },
  computed: {
    ...mapState('global', {
      colorScheme: state => state.colorScheme,
      navIsOpen: state => state.navIsOpen,
    }),
    ...mapState('content', {
      menus: state => state.menus,
      options: state => state.options,
    }),
  },
};
</script>

<style scoped lang="scss">
/*==================================
Logo
==================================*/

.logo {
  font-family: 'jaapokki';
  text-transform: uppercase;
  color: $white;
  position: fixed;
  bottom: 80px;
  left: 80px;
  font-size: 30px;
  letter-spacing: 0.6px;
  transition: color 0.3s ease-in-out;
  @include z-index('overlay');

  @include tablet {
    font-size: 25px;
    position: absolute;
    top: 35px;
    left: 20px;
    bottom: auto;
  }
}

.fixed_overlay.light .logo {
  color: $black;
}

.fixed_overlay.light.nav_open .logo {
  @include tablet {
    color: $white;
  }
}

/*==================================
    Contact
    ==================================*/

.fixed_overlay .contact {
  position: fixed;
  bottom: 0;
  right: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include z-index('overlay');

  @include tablet {
    position: relative;
    right: 0;
    width: 100%;
  }
}

.fixed_overlay .contact p {
  color: $white;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  font-size: 12px;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
}

.fixed_overlay .contact span.line {
  width: 1px;
  height: 30px;
  margin: 0 auto;
  background: $white;
  display: block;
  transition: all 0.3s ease-in-out;
}

.fixed_overlay.light {
  .contact p {
    color: $black;
  }
  span.line {
    background: $black;
  }
}

/*==================================
    Menu Button
    ==================================*/

.menu_button_container {
  position: fixed;
  right: 0;
  top: 30px;
  @include z-index('overlay');
}

.menu_button {
  position: relative;
  z-index: 13;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.menu_button button {
  color: $white;
  text-transform: uppercase;
  padding: 0 10px 0 0;
  font-weight: 400;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.nav_open .menu_button button {
  opacity: 0;
}

// Menu Icon

.menu_icon {
  position: relative;
  width: 30px;
  height: 1px;
  background: $white;
  display: inline-block;
  transition: all 0.3s ease-in-out;

  &:before,
  &:after {
    display: block;
    content: '';
    height: 1px;
    width: 40px;
    background: $white;
    position: absolute;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }

  &:before {
    top: 6px;
  }
  &:after {
    top: -6px;
  }
}

.nav_open .menu_icon {
  background: transparent;

  &:before,
  &:after {
    width: 20px;
    top: 0;
  }

  &:before {
    transform: rotate(-45deg);
  }

  &:after {
    transform: rotate(45deg);
  }
}

// --- White Header Adjustments

.fixed_overlay.light .menu_button button {
  color: $black;
}

.fixed_overlay.light .menu_icon {
  background: $black;

  &:before,
  &:after {
    background: $black;
  }
}

.fixed_overlay.light.nav_open .menu_icon {
  @include tablet {
    background: $white;

    &:before,
    &:after {
      background: $white;
    }
  }
}

.fixed_overlay.light .nav_open .menu_icon {
  background: transparent;
}

/*==================================
    Main Navigation
    ==================================*/

nav.main_navigation {
  position: absolute;
  right: -50px;
  opacity: 0;
  top: 0;
  z-index: 9;

  @include tablet {
    display: none;
  }
}

nav.main_navigation {
  transition: all 0.3s ease-in-out;
}

// When Menu is Active then Show Navigation

.nav_open .main_navigation {
  opacity: 1;
  right: 50px;
  z-index: 20;
}

// Navigation List

.main_navigation ul {
  list-style: none;
  display: flex;
}

.main_navigation ul li {
  display: inline-block;
  color: $white;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.1em;
  transform: translateX(20px);
  opacity: 0;
  transition: all 0.2s ease-in-out;
  // @include staggered_transition($start:-5, $items:-1, $initial:0, $step:.1);
}

.main_navigation ul li:last-child:after {
  content: '';
  padding: 0px;
}

.main_navigation ul li:after {
  content: '/';
  padding: 0px 10px;
}

.nav_open .main_navigation ul li {
  transform: translateX(0);
  opacity: 1;
}

.fixed_overlay.light .main_navigation ul li {
  color: $black;
}

/*=== Menu Item Strikethrough ===*/

.main_navigation ul li a {
  position: relative;
}

.main_navigation ul li a:after {
  content: '';
  position: absolute;
  top: 6px;
  width: 100%;
  height: 1px;
  background: $white;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.main_navigation ul li a.router-link-active:after {
  transform: scaleX(1);
}

.main_navigation ul li a:hover:after {
  transform: scaleX(1);
}

// --- White Header Adjustments

.fixed_overlay.light .main_navigation ul li a:after {
  background: $black;
}
</style>
