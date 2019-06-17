<template>
  <section class="full__width header-wrapper bg__gray-light vertical-middle">
    <div class="vertical-middle__inner">
      <div class="wrapper">
        <section class="logo float-left">
          <img src="../../assets/images/star_wars_logo.png" alt="Page logo" class="float-left">
        </section>
        <section class="float-right">
          <button
            v-if="isJedi"
            class="display-inline header-button"
            @click="goToPage(buttonData.routeName)"
          >
            {{ buttonData.text }}
          </button>
          <button
            class="display-inline header-button ml-m"
            @click="goToPage('login')"
          >
            Logout
          </button>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'AppHeader',
  computed: {
    ...mapState('account', ['isJedi']),
    buttonData () {
      return {
        text: !this.$route.name || this.$route.name === 'home' ? 'Manage Sabers' : 'Go back',
        routeName: !this.$route.name || this.$route.name === 'home' ? 'manager' : 'home'
      }
    }
  },
  methods: {
    ...mapMutations('account', ['setJediStatus', 'logout']),
    goToPage (routeName) {
      routeName === 'logout' && this.logout()
      this.$router.push({ name: routeName })
    },
    logout () {
      this.logout()
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    &-wrapper {
      height: 60px;

      .logo img {
        height: 40px;
      }
    }
  }
</style>
