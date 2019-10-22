<template>
  <div v-if="!loading">
    <PageHeader :title="title" :excerpt="excerpt" />
    <div class="main_content">
      <div class="panel">
        <div class="large_container">
          <AppsGrid />
        </div>
      </div>
    </div>
    <Footer :loading="loading" />
  </div>
</template>

<script>
import PageHeader from '../organisms/PageHeader';
import AppsGrid from '../organisms/AppsGrid';
import Footer from '../organisms/Footer';
import { getPage } from '../../services/wordpress/rest-api';

export default {
  name: 'Apps',
  metaInfo: {
    title: 'Apps',
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
    AppsGrid,
    Footer,
  },
  mounted: function() {
    this.loading = true;
    // Set the color scheme.
    this.$store.dispatch('settings/setColorScheme', {
      colorScheme: 'light',
    });
    // Get the page info.
    getPage('apps').then(pageData => {
      this.title = pageData.title;
      this.excerpt = pageData.excerpt;
      this.loading = false;
    });
  },
};
</script>

<style scoped lang="scss"></style>
