<template>
  <div>
    <PageHeader :title="title" :excerpt="excerpt" />
    <div class="main_content">
      <div class="panel">
        <div class="large_container">
          <div class="row">
            <div class="column_1_2">
              <div class="profile-image"></div>
            </div>
            <div class="column_1_2">
              <div v-html="content"></div>
              <h3>Clients</h3>
              <LogoList :logos="clientLogos" alignment="left" />
              <h3>Social</h3>
              <SocialList :socials="socialProfiles" alignment="left" />
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
      socialProfiles: [],
      clientLogos: [],
      title: '',
      excerpt: '',
      content: '',
    };
  },
  components: {
    PageHeader,
    SocialList,
    LogoList,
  },
  mounted: function() {
    this.loading = true;
    this.$store.dispatch('global/setColorScheme', {
      colorScheme: 'light',
    });

    // Get the page info.
    getPage('about').then(pageData => {
      this.loading = false;
      this.title = pageData.title;
      this.excerpt = pageData.excerpt;
      this.content = pageData.content;
      this.socialProfiles = pageData.socialProfiles;
      this.clientLogos = pageData.clientLogos;
      /*----------------------
      Profile Image Animation
      ----------------------*/

      var profileImageAnimation = new imageHoverEffect({
        parent: document.querySelector('.profile-image'),
        intensity1: 0.1,
        intensity2: 0.1,
        speedIn: 3,
        speedOut: 3,
        angle2: Math.PI / 2,
        image1: pageData.featuredImageLarge,
        image2: pageData.featuredImageLarge,
        displacementImage: '/static/img/about/displacement-1.jpg',
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
    });
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
