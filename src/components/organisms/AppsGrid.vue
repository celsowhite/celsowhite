<template>
  <div class="apps_grid_contaner">
    <div class="row">
      <div v-for="app in apps" :key="app.title" class="column_1_2">
        <ThumbnailCard
          :isBlurred="false"
          :isOverlayed="false"
          cardType="medium"
          :summary="app.summary"
          :title="app.title"
          :image="app.featuredImageSmall"
          :imageFocus="app.featuredImageSmallFocus"
          :primaryColor="app.primaryColor"
          :isExternalLink="true"
          :link="app.link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ThumbnailCard from '../atoms/ThumbnailCard';
import { apps } from '../../data/apps';
import getSlugMixin from '../../mixins/getSlug';

export default {
  name: 'AppsGrid',
  data() {
    return {
      apps,
    };
  },
  mixins: [getSlugMixin],
  components: {
    ThumbnailCard,
  },
};
</script>

<style scoped lang="scss"></style>
