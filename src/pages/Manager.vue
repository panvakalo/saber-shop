<template>
  <layout-default>
    <saber-data
      v-for="saber in sabers"
      :key="saber.id"
      :saber="saber"
      class="mt-m"
    />
  </layout-default>
</template>

<script>
import { mapState } from 'vuex'
import LayoutDefault from '../layouts/LayoutDefault'
import SaberData from '../components/sabers/saberData'

export default {
  name: 'Manager',
  components: {
    SaberData,
    LayoutDefault
  },
  computed: {
    ...mapState('saber', ['sabers'])
  }
}
</script>

<style scoped>

</style>
