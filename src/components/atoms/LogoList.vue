<template>
  <ul :class="['logo_list', alignment]">
    <li v-for="logo in logos" :key="logo.title">
      <img :src="logo.image" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LogoList',
  props: {
    logos: Array,
    alignment: String,
  },
};
</script>

<style scoped lang="scss">
ul.logo_list {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 20px;
}

ul.logo_list li {
  width: 14%;
  margin: 0 5px 10px;
  filter: grayscale(100%);

  @include mobile_landscape {
    width: 20%;
  }
}

ul.logo_list.left li:first-child {
  margin: 0 5px 0 0;
}

ul.logo_list.right {
  text-align: right;

  li:last-child {
    margin: 0 0 0 5px;
  }
}
</style>
