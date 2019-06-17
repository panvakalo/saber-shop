<template>
  <div class="mt-xs mb-xl text__red">
    {{ errorMessage }}
  </div>
</template>

<script>
export default {
  name: 'errorMessage',
  props: {
    errorMessage: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
