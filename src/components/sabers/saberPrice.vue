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
      {{ price }}
      <img
        v-if="isPriceApplicable"
        class="star-wars-credit"
        src="../../assets/images/credit.svg"
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { crystalConfig } from '../../assets/maps/crystal'
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
      return this.forcePower < 180
    },
    crystalStats () {
      return crystalConfig(this.crystal)
    },
    powerUsage () {
      return this.isPriceApplicable ? parseFloat((this.forcePower * this.crystalStats.powerMultiplier * 100) / 100).toFixed(2) : 'Not applicable'
    },
    price () {
      return this.isPriceApplicable ? parseFloat((this.powerUsage * this.crystalStats.priceMultiplier * 100) / 100).toFixed(2) : 'Not applicable'
    }
  }
}
</script>

<style scoped>
  .star-wars-credit {
    width: 9px;
  }
</style>
