<template>
  <div
    class="footer"
    v-if="!loading"
    :class="[{ nav_open: navIsOpen }, colorScheme]"
  >
    <div class="contact">
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
  name: 'Footer',
  methods: {
    ...mapActions('settings', ['toggleNav']),
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState('settings', {
      colorScheme: state => state.colorScheme,
      navIsOpen: state => state.navIsOpen,
    }),
    ...mapState('content', {
      menus: state => state.menus,
      options: state => state.options,
    }),
  },
  mounted: function() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  },
};
</script>

<style scoped lang="scss">
/*==================================
  Contact
  ==================================*/

.footer .contact {
  position: relative;
  text-align: center;
  display: none;

  @include tablet {
    display: block;
  }
}

.footer .contact p {
  color: $white;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  font-size: 12px;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
}

.footer .contact span.line {
  width: 1px;
  height: 30px;
  margin: 0 auto;
  background: $white;
  display: block;
  transition: all 0.3s ease-in-out;
}

.footer.light {
  .contact p {
    color: $black;
  }
  span.line {
    background: $black;
  }
}
</style>
