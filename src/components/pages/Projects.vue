<template>
  <div v-if="!loading">
    <PageHeader :title="title" :excerpt="excerpt" />
    <div class="main_content">
      <div class="panel">
        <div class="large_container">
          <ProjectsGrid />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../organisms/PageHeader';
import ProjectsGrid from '../organisms/ProjectsGrid';
import { getPage } from '../../services/wordpress/rest-api';

export default {
  name: 'Projects',
  metaInfo: {
    title: 'Projects',
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
    ProjectsGrid,
  },
  mounted: function() {
    this.loading = true;
    this.$store.dispatch('global/setColorScheme', {
      colorScheme: 'light',
    });
    getPage('projects').then(pageData => {
      this.title = pageData.title;
      this.excerpt = pageData.excerpt;
      this.loading = false;
    });
  },
};
</script>

<style scoped lang="scss"></style>
