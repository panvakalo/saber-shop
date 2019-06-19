<template>
  <layout-default>
    <page-title
      :title="'Orders manager'"
      :icon="'Star_Wars_Storm-Trooper'"
    />
    <div
      v-if="!orderedSabers.length"
      class="bg__gray-light pa-m mt-xl xs6 border-radius__medium"
    >
      There are no orders active. You have time to meditate.
    </div>
    <div class="clear-float">
      <div
        v-for="saber in orderedSabers"
        :key="saber.id"
        class="xs12 s6 m4 l3 float-left pa-m box-sizing-border"
      >
        <saber-data
          :saber="saber"
        />
      </div>
    </div>
  </layout-default>
</template>

<script>
import { mapState } from 'vuex'
import LayoutDefault from '../layouts/LayoutDefault'
import PageTitle from '../components/common/pageTitle'
import saberData from '../components/sabers/saberData'
export default {
  name: 'OrdersPage',
  components: {
    PageTitle,
    LayoutDefault,
    saberData
  },
  computed: {
    ...mapState('saber', ['orderedSabers'])
  }
}
</script>

<style scoped>

</style>
