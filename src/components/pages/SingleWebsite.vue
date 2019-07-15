<template>
  <div v-if="activeWebsite">
    <PageHeader :title="activeWebsite.title" :excerpt="activeWebsite.excerpt" />
    <div class="main_content wysiwyg">
      <div class="panel">
        <div class="small_container">
          <video autoplay muted playsinline loop v-if="activeWebsite.video">
            <source :src="activeWebsite.video" type="video/mp4" />
          </video>
          <div v-html="activeWebsite.content"></div>
          <ul class="credit_list no_bullets">
            <CreditList :credits="activeWebsite.credits" />
          </ul>
        </div>
      </div>
    </div>
    <div class="panel padding_bottom" v-if="relatedWebsites.length > 0">
      <div class="large_container">
        <h3>More {{ primaryCategory }}</h3>
        <div class="row">
          <div
            v-for="relatedWebsite in relatedWebsites"
            :key="relatedWebsite.title"
            class="column_1_3"
          >
            <ThumbnailCard
              :title="relatedWebsite.title"
              :isOverlayed="true"
              :image="relatedWebsite.featuredImageMedium"
              :imageFocus="relatedWebsite.featuredImageFocus"
              :link="'/websites/' + relatedWebsite.slug"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="panel padding_bottom">
      <div class="large_container text_alignment_center">
        <h3>
          <router-link to="/websites" class="featured_link black"
            >View All Websites</router-link
          >
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PageHeader from '../organisms/PageHeader';
import CreditList from '../atoms/CreditList';
import ThumbnailCard from '../atoms/ThumbnailCard';

export default {
  name: 'SingleWebsite',
  components: {
    PageHeader,
    ThumbnailCard,
    CreditList,
  },
  mounted: function() {
    this.$store.dispatch('settings/setColorScheme', {
      colorScheme: 'light',
    });
  },
  computed: {
    // All Websites Data
    ...mapState('content', {
      websites: state => state.websites,
    }),
    // Active Website (Based on slug)
    activeWebsite: function() {
      return this.websites.find(website => {
        return website.slug == this.$route.params.slug;
      });
    },
    // Primary Category
    primaryCategory: function() {
      return this.activeWebsite.categories[1];
    },
    // Related websites to the active website.
    relatedWebsites: function() {
      return this.websites.filter(website => {
        return (
          website.categories.includes(this.primaryCategory) &&
          website.title !== this.activeWebsite.title
        );
      });
    },
  },
};
</script>

<style scoped lang="scss">
// Videos

video {
  margin-bottom: 20px;
  box-shadow: rgba($black, 0.3) 0 2px 8px;
}
</style>
