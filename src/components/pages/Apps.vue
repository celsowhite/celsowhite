<template>
  <div>
    <PageHeader
      title="Apps"
      excerpt="I enjoy building fullstack apps using javascript."
    />
    <div class="main_content">
      <div class="panel">
        <div class="large_container">
          <AppsGrid />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../organisms/PageHeader';
import AppsGrid from '../organisms/AppsGrid';

export default {
  name: 'Apps',
  metaInfo: {
    title: 'Apps',
  },
  data() {
    return {};
  },
  components: {
    PageHeader,
    AppsGrid,
  },
  mounted: function() {
    this.$store.dispatch('global/setColorScheme', {
      colorScheme: 'light',
    });
  },
};
</script>

<style scoped lang="scss"></style>
