<template>
  <div v-if="websites.length > 0">
    <div class="home_content_container">
      <!-- Content -->

      <div class="home_content">
        <div class="container">
          <ul class="featured_project_list">
            <li
              v-for="website in websites"
              v-if="website.homepageFeatured"
              :key="website.title"
              :class="[
                activeBackgroundImage && activeBackgroundImage !== website.title
                  ? 'blur'
                  : '',
              ]"
              @mouseover="showBackground(website.title)"
              @mouseleave="showBackground('')"
            >
              <router-link :to="'/websites/' + getSlug(website.title)">{{
                website.title
              }}</router-link>
            </li>
          </ul>
          <h3>
            <router-link to="websites" class="featured_link"
              >View All Websites</router-link
            >
          </h3>
        </div>
      </div>
    </div>

    <!-- Background Images -->

    <div class="home_background_container">
      <div
        v-for="website in websites"
        v-if="website.homepageFeatured"
        :key="website.title"
        class="home_background_image"
        :class="[activeBackgroundImage == website.title ? 'active' : '']"
        :style="{ backgroundImage: 'url(' + website.featuredImageLarge + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import getSlugMixin from '../../mixins/getSlug';

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home',
  },
  data() {
    return {
      activeBackgroundImage: '',
    };
  },
  mixins: [getSlugMixin],
  methods: {
    showBackground(imageName) {
      this.activeBackgroundImage = imageName;
    },
  },
  mounted: function() {
    this.$store.dispatch('global/setColorScheme', {
      colorScheme: 'dark',
    });
  },
  computed: {
    ...mapState('content', {
      websites: state => state.websites,
    }),
  },
};
</script>

<style scoped lang="scss">
// Structure

.home_content_container {
  width: 100%;
  height: 100vh;
  color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
}

// Content

.home_content {
  text-align: center;
  padding-top: 100px;
  @include z-index('priority-content');
}

ul.featured_project_list {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin-bottom: 100px;
}

ul.featured_project_list li {
  padding: 0 10px;
  margin-bottom: 13px;
  font-family: 'SweetSans';
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  transition: filter 0.3s ease-in-out;

  &.blur {
    filter: blur(2px);
  }
}

// Background

.home_background_container {
  background: $black;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.home_background_image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  &.active {
    opacity: 1;
  }
}

.home_background_image:after {
  @include overlay(rgba($black, 0));
}

/*--- 
    Homepage Route Animation
    ---*/

// Enter/Appear

.router_anim-enter-active {
  .home_background_container {
    transition: all 0.8s cubic-bezier(0.895, 0.03, 0.685, 0.22);
  }
  ul.featured_project_list li {
    transition: all 0.5s ease-in-out;
    @include staggered_transition(
      $start: 0,
      $items: 10,
      $initial: 0,
      $step: 0.1
    );
  }
}

.router_anim-enter,
.router_anim-leave-to {
  .home_background_container {
    height: 0%;
  }
  ul.featured_project_list li {
    opacity: 0;
    transform: translateX(-40px);
  }
}

.router_anim-leave-active {
  .home_background_container {
    transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  ul.featured_project_list li {
    transition: all 0.5s ease-in-out;
    @include staggered_transition(
      $start: 0,
      $items: 10,
      $initial: 0,
      $step: 0.1
    );
  }
}
</style>
