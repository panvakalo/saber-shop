<template>
  <div class="full__width full__height vertical-middle bg__black">
    <div class="vertical-middle__inner text-align__center pa-s">
      <div class="m-auto l4 m6 s10 xs12 text-color__black">
        <section class="bg__gray overflow-hidden login-header">
          <img src="../assets/images/star_wars_logo.png" class="pt-xl pb-xl">
        </section>
        <section class="pa-l bg__gray-lighter login-content overflow-hidden">
          <div v-if="!isChoiceGiven">
            <custom-button
              :button-type="'button'"
              :button-text="'I am a Jedi Master'"
              class="xs12 mb-xl"
              @clicked="setChoice(true, true)"
            >
              <img
                slot="button-icon"
                src="../assets/images/star-wars-svg/Star_Wars_Falcon.svg"
                alt="falcon icon"
                align="middle"
                class="mr-l star-wars-icon"
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
                class="mr-l star-wars-icon"
              >
            </custom-button>
          </div>
          <div v-if="isChoiceGiven">
            <jedi-form
              :is-jedi="isJedi"
              :form-data="formData"
              @clicked="setChoice(false, false)"
              @login="login"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
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
    formData () {
      if (this.isJedi) {
        return {
          inputType: 'password',
          placeholder: 'Forceful password',
          name: 'password'
        }
      } else {
        return {
          inputType: 'text',
          placeholder: 'Type your age',
          name: 'age'
        }
      }
    }
  },
  beforeDestroy () {
    this.$off('login')
    this.$off('clicked')
  },
  methods: {
    ...mapMutations('account', ['setJediStatus', 'setPadawanAge']),
    setChoice (jediStatus, choiceStatus) {
      this.setJediStatus(jediStatus)
      this.isChoiceGiven = choiceStatus
    },
    login () {
      this.$router.push({ name: 'home' })
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
    }
  }

  .login-content {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>
