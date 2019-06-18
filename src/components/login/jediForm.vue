<template>
  <div>
    <form @submit.prevent="auth">
      <input
        v-model="jediForm[formData.name]"
        :type="formData.inputType"
        :name="formData.name"
        required
        class="xs12 text-color__black"
        :placeholder="formData.placeholder"
      >
      <error-message
        v-if="errorMessage.length"
        :error-message="errorMessage"
      />
      <div>
        <button
          type="submit"
          class="float-right"
        >
          Login with the Force
        </button>
      </div>
    </form>
    <button
      type="button"
      class="float-left"
      @click="goBack"
    >
      Back
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import errorMessage from '../common/errorMessage'
export default {
  name: 'jediForm',
  components: {
    errorMessage
  },
  props: {
    isJedi: {
      type: Boolean,
      default: function () {
        return false
      },
      required: true
    },
    formData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      jediForm: {
        password: '',
        age: ''
      }
    }
  },
  computed: {
    ...mapState('account', ['wrongPassword', 'errorMessage'])
  },
  mounted () {
    this.clearForm()
  },
  methods: {
    ...mapActions('account', ['validate', 'clearForm']),
    auth (e) {
      e.preventDefault()
      this.validate(this.jediForm)
      !this.errorMessage.length && this.$emit('login')
    },
    goBack () {
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>

</style>
