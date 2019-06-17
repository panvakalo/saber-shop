<template>
  <layout-default>
    home
  </layout-default>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    LayoutDefault
  },
  data () {
    return {
      index: 0
    }
  },
  computed: {
    ...mapState('account', ['isJedi'])
  },
  methods: {}
}
</script>

<style lang="scss">
</style>
