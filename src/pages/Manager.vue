<template>
  <layout-default>
    <page-title
      :title="'Lightsaber manager'"
      :icon="'Star_Wars_R2D2'"
    />
    <div class="clear-float">
      <div
        v-for="saber in sabers"
        :key="saber.id"
        class="xs12 s6 m4 l3 float-left pa-m box-sizing-border"
      >
        <saber-data
          :saber="saber"
        />
      </div>
    </div>
    <div class="overflow-hidden">
      <custom-button
        :button-type="'button'"
        :button-text="buttonText"
        class="float-right clear-float"
        @clicked="toggleSaberForm()"
      >
        <img
          slot="button-icon"
          src="../assets/images/star-wars-svg/Star_Wars_BB8.svg"
          alt="falcon icon"
          align="middle"
          class="mr-l star-wars-icon"
        >
      </custom-button>
    </div>
    <div
      class="saber-form mt-m overflow-hidden"
      :class="{ 'active': showSaberForm }"
    >
      <form @submit.prevent="add">
        <input
          v-model="saberForm.crystal.name"
          type="text"
          name="crystalName"
          required
          class="xs12 text-color__black"
          placeholder="Crystal Name"
        >
        <input
          v-model="saberForm.crystal.color"
          type="text"
          name="crystalColor"
          required
          class="xs12 text-color__black"
          placeholder="Crystal Color"
        >
        <input
          v-model="saberForm.crystal.planet"
          type="text"
          name="crystalPlanet"
          required
          class="xs12 text-color__black"
          placeholder="Crystal Planet"
        >
        <input
          v-model="saberForm.name"
          type="text"
          name="saberName"
          required
          class="xs12 text-color__black"
          placeholder="Lightsaber Name"
        >
        <input
          v-model="saberForm.available"
          type="text"
          name="saberAvailable"
          required
          class="xs12 text-color__black"
          placeholder="Available amount"
        >
        <div>
          <button
            type="submit"
            class="float-right"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  </layout-default>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import LayoutDefault from '../layouts/LayoutDefault'
import SaberData from '../components/sabers/saberData'
import PageTitle from '../components/common/pageTitle'
import CustomButton from '../components/common/customButton'

export default {
  name: 'Manager',
  components: {
    CustomButton,
    PageTitle,
    SaberData,
    LayoutDefault
  },
  data () {
    return {
      showSaberForm: false,
      saberForm: {
        name: '',
        crystal: {
          name: '',
          color: '',
          planet: ''
        },
        available: ''
      }
    }
  },
  computed: {
    ...mapState('saber', ['sabers']),
    buttonText () {
      return this.showSaberForm ? 'Close form' : 'Add a lightsaber'
    }
  },
  methods: {
    ...mapMutations('saber', ['addSaber']),
    toggleSaberForm () {
      this.showSaberForm = !this.showSaberForm
    },
    add () {
      this.addSaber(this.saberForm)
    }
  }
}
</script>

<style lang="scss" scoped>
  .saber-form {
    transition: all 0.3s ease;
    max-height: 0;

    &.active {
      max-height: 500px;
    }
  }
</style>
