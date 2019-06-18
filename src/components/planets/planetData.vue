<template>
  <div class="mb-m">
    <img :src="iconSrc" class="mr-m">
    <span class="bold">
      {{ dataLabel }}
    </span>
    <span>
      {{ dataValue }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'planetData',
  props: {
    dataLabel: {
      type: String,
      required: true
    },
    dataValue: {
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
      return require(`@/assets/images/star-wars-svg/Star_Wars_${this.icon}.svg`)
    }
  }
}
</script>

<style scoped>

</style>
