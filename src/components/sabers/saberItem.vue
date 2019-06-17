<template>
  <span class="pa-m xs12 s6 m4 l3 float-left box-sizing-border">
    <div
      class="lightsaber-wrapper pl-xl pb-xl pointer"
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
      <div class="lightsaber-data pa-s bg__gray-dark">
        <div>
          <span class="bold">
            Name:
          </span>
          {{ saber.crystal.name }}</div>
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
          {{ saber.available }}
        </div>
        <div>
          <span class="bold">
            Crystal color:
          </span>
          {{ saber.crystal.color }}
        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: 'saberItem',
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
    crystalColor () {
      return 'crystal-' + this.saber.crystal.color
    }
  },
  methods: {
    toggleCheck (e) {
      e.preventDefault()
      e.target.checked = !e.target.checked
    },
    test (e) {
      let state = e.target.children[0].children[1].checked
      console.log(state)
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
        border: 1px solid $gray-light
      }
    }
  }
</style>
