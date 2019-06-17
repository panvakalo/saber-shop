<template>
  <layout-default>
    <sabers-list
      :sabers="sabers"
    />
  </layout-default>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault'
import { mapState, mapActions } from 'vuex'
import SabersList from '../components/sabers/sabersList'

export default {
  name: 'Home',
  components: {
    SabersList,
    LayoutDefault
  },
  data () {
    return {
      index: 0
    }
  },
  computed: {
    ...mapState('account', ['isJedi']),
    ...mapState('saber', ['sabers'])
  },
  mounted () {
    // in a real world example, I would use asyncData vuejs hook
    // but since this example app is not async, I can just use mounted hook
    this.fetchSabers()
  },
  methods: {
    ...mapActions('saber', ['fetchSabers'])
  }
}
</script>

<style lang="scss">
</style>
