<template>
  <span
    v-if="saber.available"
    class="pa-m xs12 s6 m4 l3 float-left box-sizing-border"
  >
    <div
      class="lightsaber-wrapper pl-xl pb-xl"
      @mouseover="onHover = true"
      @mouseleave="onHover = false"
    >
      <div class="lightsaber">
        <label :for="saber.id"></label>
        <input
          :id="saber.id"
          type="checkbox"
          :checked="onHover"
        >
        <div class="switch"></div>
        <div
          class="plasma"
          :class="crystalColor"
        ></div>
      </div>
      <saber-data :saber="saber" />
      <i
        v-if="onHover && !orderIsPlaced && !isMasterJedi"
        class="material-icons shopping text__white"
        @click="constructOrder(saber)"
      >
        shopping_cart
      </i>
    </div>
  </span>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SaberData from './saberData'
export default {
  name: 'saberItem',
  components: { SaberData },
  props: {
    saber: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      onHover: false
    }
  },
  computed: {
    ...mapState('saber', ['orderIsPlaced']),
    ...mapState('account', ['isMasterJedi']),
    crystalColor () {
      return 'crystal-' + this.saber.crystal.color
    }
  },
  methods: {
    ...mapActions('saber', ['constructOrder']),
    toggleCheck (e) {
      e.preventDefault()
      e.target.checked = !e.target.checked
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/styles/partials/colors.scss';
  .lightsaber-wrapper {
    padding-top: 325px;
    box-sizing: border-box;
    position: relative;

    &:hover {
      box-shadow: 0 3px 1px -2px rgba(255,255,255,0.2), 0 2px 2px 0 rgba(255,255,255,0.14), 0 1px 5px 0 rgba(255,255,255,0.12);

      .lightsaber-data {
        background-color: $gray-light;
      }
    }

    .lightsaber {
      &-data {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
  }

  .shopping {
    position: absolute;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
  }
</style>
