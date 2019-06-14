<template>
  <div class="full__width full__height vertical-middle bg__blue-gray">
    <div class="vertical-middle__inner text-align__center pa-s">
      <div class="m-auto l4 m6 s10 xs12 text-color__black">
        <section class="bg__gray overflow-hidden login-header">
          <img src="../assets/images/star_wars_logo.png">
        </section>
        <section class="pa-l bg__gray-lighter login-content overflow-hidden">
          <div v-if="!isChoiceGiven">
            <custom-button
              :button-type="'button'"
              :button-text="'I am a Jedi'"
              class="xs12 mb-xl"
              @clicked="setChoice(true, true)"
            >
              <img
                slot="button-icon"
                src="../assets/images/star-wars-svg/Star_Wars_Falcon.svg"
                alt="falcon icon"
                align="middle"
                class="mr-l"
              >
            </custom-button>
            <custom-button
              :button-type="'button'"
              :button-text="'I am a Padawan'"
              class="xs12"
              @clicked="setChoice(false, true)"
            >
              <img
                slot="button-icon"
                src="../assets/images/star-wars-svg/Star_Wars_Battle Droid.svg"
                alt="falcon icon"
                align="middle"
                class="mr-l"
              >
            </custom-button>
          </div>
          <div v-if="isChoiceGiven">
            <jedi-form
              :is-jedi="isJedi"
              @clicked="setChoice(false, false)"
              @auth="login"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import customButton from '../components/common/customButton'
import JediForm from '../components/login/jediForm'
export default {
  name: 'Login',
  components: {
    JediForm,
    customButton
  },
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      isChoiceGiven: false
    }
  },
  computed: {
    ...mapState('account', ['isJedi']),
    jediClicked () {
      return this.isChoiceGiven && this.isJedi
    },
    padawanClicked () {
      return this.isChoiceGiven && !this.isJedi
    }
  },
  beforeDestroy () {
    this.$off('auth')
    this.$off('clicked')
  },
  methods: {
    ...mapActions('customer', ['login']),
    ...mapMutations('account', ['setJediStatus']),
    setChoice (jediStatus, choiceStatus) {
      this.setJediStatus(jediStatus)
      this.isChoiceGiven = choiceStatus
    },
    async login (formData) {
      console.log(formData)
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-header {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    img {
      width: 200px;
      padding: 10px 0;
    }
  }

  .login-content {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>
