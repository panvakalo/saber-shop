<template>
  <div class="lightsaber-data pa-s bg__gray-dark border-radius__medium">
    <div>
      <span class="bold">
        Name:
      </span>
      {{ saber.crystal.name }}
    </div>
    <div>
      <span class="bold">
        Type:
      </span>
      {{ saber.name }}
    </div>
    <div>
      <span class="bold">
        Available:
      </span>
      <span v-if="!isManagerActive">{{ saber.available }}</span>
      <input
        v-else
        v-model="updatedValue"
        type="text"
        class="small"
        :placeholder="saber.available"
        @blur="checkValue"
      >
    </div>
    <div>
      <span class="bold">
        Crystal color:
      </span>
      {{ saber.crystal.color }}
    </div>
    <saber-price :crystal="saber.crystal.color" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import SaberPrice from './saberPrice'
export default {
  name: 'saberData',
  components: { SaberPrice },
  props: {
    saber: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      updatedValue: null
    }
  },
  computed: {
    isManagerActive () {
      return this.$route.name === 'manager'
    }
  },
  methods: {
    ...mapMutations('saber', ['setSaberQuantity']),
    checkValue () {
      if (this.updatedValue !== null && parseInt(this.updatedValue) !== this.saber.available) {
        this.setSaberQuantity({ id: this.saber.id, value: parseInt(this.updatedValue) })
      }
    }
  }
}
</script>

<style scoped>
  .lightsaber-data {
    box-sizing: border-box;
  }
</style>
