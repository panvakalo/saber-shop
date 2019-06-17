<template>
  <div>
    <saber-item
      v-for="saber in sabers"
      :key="saber.id"
      :saber="saber"
    />
  </div>
</template>

<script>
import SaberItem from './saberItem'
export default {
  name: 'sabersList',
  components: { SaberItem },
  props: {
    sabers: {
      type: Array,
      default: function () {
        return []
      },
      required: true
    }
  }
}
</script>

<style scoped>

</style>
