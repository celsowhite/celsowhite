<template>
  <div v-if="!loading">
    <PageHeader :title="title" :excerpt="excerpt" />
    <div class="main_content">
      <div class="panel">
        <div class="large_container">
          <div class="row">
            <div class="column_1_2">
              <div class="profile-image" ref="profileImage"></div>
            </div>
            <div class="column_1_2">
              <div v-html="content"></div>
              <h3>Clients</h3>
              <LogoList :logos="clientLogos" alignment="left" />
              <h3>Social</h3>
              <SocialList :socials="options.socialProfiles" alignment="left" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../organisms/PageHeader';
import SocialList from '../atoms/SocialList';
import LogoList from '../atoms/LogoList';
import { getPage } from '../../services/wordpress/rest-api';
import { mapState } from 'vuex';

// Libraries

import imageHoverEffect from 'hover-effect';

export default {
  name: 'About',
  metaInfo: {
    title: 'About',
  },
  data() {
    return {
      loading: false,
      clientLogos: [],
      title: '',
      excerpt: '',
      content: '',
      featuredImage: '',
      displacementImage: '',
    };
  },
  components: {
    PageHeader,
    SocialList,
    LogoList,
  },
  mounted: function() {
    this.loading = true;
    this.$store.dispatch('settings/setColorScheme', {
      colorScheme: 'light',
    });

    // Get the page info.
    getPage('about').then(pageData => {
      // Set the page data in state.
      this.title = pageData.title;
      this.excerpt = pageData.excerpt;
      this.content = pageData.content;
      this.socialProfiles = pageData.socialProfiles;
      this.clientLogos = pageData.clientLogos;
      this.featuredImage = pageData.featuredImageLarge;
      this.displacementImage = pageData.displacementImage.sizes.large;
      // Indicate that we are done loading data.
      this.loading = false;
    });
  },
  updated() {
    // Once the data is loaded then we can see the image ref node and interact with it.
    if (!this.loading) {
      /*----------------------
      Profile Image Animation
      ----------------------*/

      var profileImageAnimation = new imageHoverEffect({
        parent: this.$refs.profileImage,
        intensity1: 0.1,
        intensity2: 0.1,
        speedIn: 3,
        speedOut: 3,
        angle2: Math.PI / 2,
        image1: this.featuredImage,
        image2: this.featuredImage,
        displacementImage: this.displacementImage,
        hover: false,
      });

      // Automatically alternate the profile images in the three js scene.

      let currentImage = 'first';

      (function transitionImage() {
        if (currentImage === 'first') {
          profileImageAnimation.next();
          currentImage = 'second';
        } else {
          profileImageAnimation.previous();
          currentImage = 'first';
        }
        setTimeout(transitionImage, 3000);
      })();
    }
  },
  computed: {
    ...mapState('content', {
      options: state => state.options,
    }),
  },
};
</script>

<style lang="scss">
// Responsive profile image container to place three js canvas within.

.profile-image {
  position: relative;
}

.profile-image canvas {
  position: absolute;
}

.profile-image:after {
  content: '';
  display: block;
  padding-bottom: 130%;
}
</style>
