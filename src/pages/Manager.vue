<template>
  <layout-default>
    <page-title
      :title="'Lightsaber manager'"
      :icon="'Star_Wars_R2D2'"
    />
    <div
      v-for="saber in sabers"
      :key="saber.id"
      class="xs12 s6 m4 l3 float-left pa-m box-sizing-border"
    >
      <saber-data
        :saber="saber"
      />
    </div>
  </layout-default>
</template>

<script>
import { mapState } from 'vuex'
import LayoutDefault from '../layouts/LayoutDefault'
import SaberData from '../components/sabers/saberData'
import PageTitle from '../components/common/pageTitle'

export default {
  name: 'Manager',
  components: {
    PageTitle,
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
