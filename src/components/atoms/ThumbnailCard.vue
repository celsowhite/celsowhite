<template>
  <div class="thumbnail_card_container">
    <a
      v-if="isExternalLink"
      :href="link"
      target="_blank"
      class="thumbnail_card"
      :class="[{ blur: isBlurred }, cardType]"
    >
      <div
        class="thumbnail_card_image"
        :class="[{ overlayed: isOverlayed }]"
        :style="{
          backgroundImage: 'url(' + image + ')',
          backgroundPosition: imageFocus,
          backgroundColor: color,
        }"
      >
        <h3>{{ title }}</h3>
      </div>
      <div class="thumbnail_card_content" v-if="content" v-html="content"></div>
    </a>

    <router-link
      v-else
      :to="link"
      class="thumbnail_card"
      :class="[{ blur: isBlurred }, cardType]"
    >
      <div
        class="thumbnail_card_image"
        :class="[{ overlayed: isOverlayed }]"
        :style="{
          backgroundImage: 'url(' + image + ')',
          backgroundPosition: imageFocus,
          backgroundColor: color,
        }"
      >
        <h3>{{ title }}</h3>
      </div>
      <div class="thumbnail_card_content" v-if="content" v-html="content"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ThumbnailCard',
  props: {
    cardType: String,
    isBlurred: Boolean,
    isOverlayed: Boolean,
    image: String,
    imageFocus: String,
    color: String,
    title: String,
    link: String,
    isExternalLink: Boolean,
    content: String,
  },
};
</script>

<style scoped lang="scss">
// Structure

.thumbnail_card_container {
  display: block;
  height: 100%;
}

.thumbnail_card {
  display: block;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba($black, 0.12);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 10px 0 rgba($black, 0.18);
  }
}

// Image

.thumbnail_card_image {
  position: relative;
  display: block;
  color: $white;
  padding: 20px;
  text-align: center;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease-in-out;
}

.thumbnail_card.medium .thumbnail_card_image {
  padding: 60px 20px;
}

.thumbnail_card_image.overlayed:after {
  transition: all 0.3s ease-in-out;
  @include overlay(rgba($black, 0.3));
}

.thumbnail_card:hover .thumbnail_card_image.overlayed::after {
  @include overlay(rgba($black, 0.1));
}

.thumbnail_card_image h3 {
  position: relative;
  margin-bottom: 0;
  font-size: 12px;
  transition: all 0.3s ease-in-out;
  @include z-index('priority-content');
}

// Blurred

.thumbnail_card.blur .thumbnail_card_image:after {
  @include overlay(rgba($black, 1));
}

.thumbnail_card.blur h3 {
  filter: blur(2px);
}

// Content

.thumbnail_card_content {
  padding: 20px;
}

.thumbnail_card_content h3 {
  margin-bottom: 10px;
}
</style>
