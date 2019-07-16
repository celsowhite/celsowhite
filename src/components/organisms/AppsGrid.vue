<template>
  <div class="apps_grid_contaner">
    <div class="row">
      <div v-for="app in apps" :key="app.title" class="column_1_2">
        <ThumbnailCard
          :isBlurred="false"
          :isOverlayed="false"
          cardType="medium"
          :content="app.content"
          :title="app.title"
          :image="app.featuredImageSmall"
          :imageFocus="app.featuredImageSmallFocus"
          :color="app.color"
          :isExternalLink="true"
          :link="app.link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ThumbnailCard from '../atoms/ThumbnailCard';
import { mapState } from 'vuex';

export default {
  name: 'AppsGrid',
  components: {
    ThumbnailCard,
  },
  computed: {
    ...mapState('content', {
      apps: state => state.apps,
    }),
  },
};
</script>

<style scoped lang="scss"></style>
