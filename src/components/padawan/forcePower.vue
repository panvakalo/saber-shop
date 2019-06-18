<template>
  <span>
    <img
      class="star-wars-icon"
      src="../../assets/images/star-wars-svg/Star_Wars_Darth_Vader.svg"
      alt="darth vader icon"
    >
    <span class="bold">
      Force Power:
    </span>
    <span :class="{'text__red': isUnlimited}">
      {{ forcePower }}
    </span>
    <span class="bold">
       | Order Title:
    </span>
    {{ title }}
  </span>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'forcePower',
  computed: {
    ...mapState('account', ['forcePower']),
    isUnlimited () {
      return typeof this.forcePower === 'string'
    },
    title () {
      return this.forcePower >= 93.2 ? 'Jedi' : 'Padawan'
    }
  }
}
</script>

<style scoped>

</style>
