<template>
  <div
    type="buttonType"
    class="custom-button vertical-middle"
    @click="clickButton"
  >
    <div class="text-align__center vertical-middle__inner">
      <slot name="button-icon"></slot>
      <span class="">{{ buttonText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customButton',
  props: {
    buttonType: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  },
  methods: {
    clickButton () {
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>

</style>
