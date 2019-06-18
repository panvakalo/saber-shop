<template>
  <div>
    <div>
      <span class="bold">
        Saber Power:
      </span>
      {{ powerUsage }}
    </div>
    <div>
      <span class="bold">
        Price:
      </span>
      {{ price }}Cr
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'saberPrice',
  props: {
    crystal: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState('account', ['forcePower']),
    isPriceApplicable () {
      return this.forcePower <= 180
    },
    crystalConfig () {
      if (this.crystal === 'red') {
        return {
          powerMultiplier: 0.2,
          priceMultiplier: 101
        }
      } else if (this.crystal === 'blue') {
        return {
          powerMultiplier: 0.19,
          priceMultiplier: 10
        }
      } else {
        return {
          powerMultiplier: 0.22,
          priceMultiplier: 37
        }
      }
    },
    powerUsage () {
      return this.forcePower * this.crystalConfig.powerMultiplier
    },
    price () {
      return this.powerUsage * this.crystalConfig.priceMultiplier
    }
  }
}
</script>

<style scoped>

</style>
