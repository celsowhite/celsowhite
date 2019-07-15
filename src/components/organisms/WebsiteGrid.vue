<template>
  <div class="website_grid_contaner">
    <ul class="filter_list">
      <li
        v-for="category in websiteCategories"
        :key="category"
        :class="[activeCategory == category ? 'active' : '']"
        @click="setActiveCategory(category)"
      >
        {{ category }}
      </li>
    </ul>
    <div class="row">
      <div v-for="website in websites" :key="website.title" class="column_1_3">
        <ThumbnailCard
          :isBlurred="!website.categories.includes(activeCategory)"
          :isOverlayed="true"
          :title="website.title"
          :image="website.featuredImageMedium"
          :imageFocus="website.featuredImageFocus"
          :link="'/websites/' + website.slug"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import ThumbnailCard from '../atoms/ThumbnailCard';

export default {
  name: 'WebsiteGrid',
  data() {
    return {
      activeCategory: 'All',
    };
  },
  computed: {
    ...mapState('content', {
      websites: state => state.websites,
    }),
    ...mapGetters('content', ['websiteCategories']),
  },
  mounted: function() {},
  components: {
    ThumbnailCard,
  },
  methods: {
    setActiveCategory(category) {
      this.activeCategory = category;
    },
  },
};
</script>

<style scoped lang="scss">
// Filter

ul.filter_list {
  display: flex;
  margin-bottom: 30px;
}

ul.filter_list li {
  cursor: pointer;
  margin-right: 20px;
  text-transform: uppercase;

  &.active {
    font-weight: 700;
  }

  @include mobile_landscape {
    margin-right: 10px;
    font-size: 11px;
  }
}
</style>
