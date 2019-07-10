<template>
  <div>
    <PageHeader
      title="Websites"
      excerpt="I specialize in building custom websites in Wordpress and Shopify."
    />
    <div class="main_content">
      <div class="panel">
        <div class="large_container">
          <WebsiteGrid />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../organisms/PageHeader';
import WebsiteGrid from '../organisms/WebsiteGrid';

export default {
  name: 'Websites',
  metaInfo: {
    title: 'Websites',
  },
  data() {
    return {};
  },
  components: {
    PageHeader,
    WebsiteGrid,
  },
  mounted: function() {
    this.$store.dispatch('global/setColorScheme', {
      colorScheme: 'light',
    });
  },
};
</script>

<style scoped lang="scss"></style>
