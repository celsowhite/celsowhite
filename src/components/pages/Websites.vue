<template>
  <div v-if="!loading">
    <PageHeader :title="title" :excerpt="excerpt" />
    <div class="main_content">
      <div class="panel">
        <div class="large_container">
          <WebsiteGrid />
        </div>
      </div>
    </div>
    <Footer :loading="loading" />
  </div>
</template>

<script>
import PageHeader from '../organisms/PageHeader';
import WebsiteGrid from '../organisms/WebsiteGrid';
import Footer from '../organisms/Footer';
import { getPage } from '../../services/wordpress/rest-api';

export default {
  name: 'Websites',
  metaInfo: {
    title: 'Websites',
  },
  data() {
    return {
      loading: false,
      title: '',
      excerpt: '',
    };
  },
  components: {
    PageHeader,
    WebsiteGrid,
    Footer,
  },
  mounted: function() {
    this.loading = true;
    // Set this pages color scheme.
    this.$store.dispatch('settings/setColorScheme', {
      colorScheme: 'light',
    });
    // Get website page data.
    getPage('websites').then(pageData => {
      this.title = pageData.title;
      this.excerpt = pageData.excerpt;
      this.loading = false;
    });
  },
};
</script>

<style scoped lang="scss"></style>
