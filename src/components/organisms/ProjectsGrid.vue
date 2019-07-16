<template>
  <div class="projects_grid_contaner">
    <div class="row">
      <div v-for="project in projects" :key="project.title" class="column_1_2">
        <ThumbnailCard
          :isBlurred="false"
          :isOverlayed="true"
          cardType="medium"
          :content="project.content"
          :title="project.title"
          :image="project.featuredImageMedium"
          :imageFocus="project.featuredImageSmallFocus"
          :isExternalLink="true"
          :link="project.link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ThumbnailCard from '../atoms/ThumbnailCard';
import { mapState } from 'vuex';

export default {
  name: 'ProjectsGrid',
  components: {
    ThumbnailCard,
  },
  computed: {
    ...mapState('content', {
      projects: state => state.projects,
    }),
  },
};
</script>

<style scoped lang="scss"></style>
