<template>
  <div class="page-title clear-float">
    <img
      :src="iconSrc"
      alt="page-title"
      class="star-wars-icon float-left mr-m text__white"
    >
    <h2 class="ma-none float-left mt-s">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'pageTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconSrc () {
      return require(`@/assets/images/star-wars-svg/${this.icon}.svg`)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/partials/colors.scss';

  .page-title {
    color: $white;

    .star-wars-icon {
      background-color: white;
      border-radius: 100%;
      padding: 5px;
    }
  }

</style>
