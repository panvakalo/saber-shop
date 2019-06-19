<template>
  <layout-default>
    <page-title :title="'Planetary Details'" :icon="'Star_Wars_Death_Star'" />
    <div
      class="planet-data overflow-hidden"
    >
      <div v-if="loading" class="text-align__center">
        <i class="material-icons align-vertical__bottom">hourglass_empty</i>
        <span>Loading...</span>
        <i class="material-icons align-vertical__bottom">hourglass_empty</i>
      </div>
      <div v-if="dataFetched">
        <planet-data
          :data-label="'Name: '"
          :data-value="planetData.name"
          :icon="'Storm-Trooper-3'"
        />
        <planet-data
          :data-label="'Population: '"
          :data-value="planetData.population"
          :icon="'Boba Fett'"
        />
        <planet-data
          :data-label="'Diameter: '"
          :data-value="planetData.diameter + ' km'"
          :icon="'BB8'"
        />
        <planet-data
          :data-label="'Rotation Period: '"
          :data-value="planetData.rotation_period + ' days'"
          :icon="'Falcon'"
        />
      </div>
      <div v-if="errorMessage" class="text-align__center">
        <img
          src="../assets/images/star-wars-svg/Star_Wars_Darth_Vader.svg"
          alt="darth-vader-image"
        >
        <p>
          Planetary scanner returns no result to your request.
        </p>
        <p>
          Planet either doesn't exist or a Death Star has destroyed it in the meantime.
        </p>
      </div>
      <button
        class="float-right"
        @click="goBack()"
      >
        Back
      </button>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault'
import PageTitle from '../components/common/pageTitle'
import planetService from '../services/planets.service'
import PlanetData from '../components/planets/planetData'

export default {
  name: 'PlanetPage',
  components: {
    PlanetData,
    LayoutDefault,
    PageTitle
  },
  data () {
    return {
      planetData: {},
      dataFetched: false,
      errorMessage: false,
      loading: false
    }
  },
  async created () {
    const planetId = this.$route.params.planetId
    await this.getPlanetData(planetId)
  },
  methods: {
    async getPlanetData (planetId) {
      this.loading = true
      try {
        this.planetData = await planetService.fetchPlanetData(planetId)
        this.dataFetched = true
        this.loading = false
      } catch (error) {
        this.errorMessage = true
        this.loading = false
      }
    },
    goBack () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/partials/colors';

  .planet-data {
    padding: 10px;
    margin-top: 20px;
    background-color: $gray-light;
    border-radius: 5px;

    img {
      width: 40px;
      vertical-align: middle;
    }
  }
</style>
