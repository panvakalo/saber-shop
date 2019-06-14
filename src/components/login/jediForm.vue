<template>
  <div>
    <form @submit.prevent="auth">
      <input
        v-if="isJedi"
        v-model="jediForm.password"
        type="password"
        name="password"
        required
        class="xs12 text-color__black"
        placeholder="Forcefull password"
      >
      <input
        v-if="!isJedi"
        v-model="jediForm.age"
        type="number"
        name="age"
        required
        class="xs12 text-color__black"
        placeholder="Fill in your age"
      >
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
export default {
  name: 'jediForm',
  props: {
    isJedi: {
      type: Boolean,
      default: function () {
        return false
      },
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
  methods: {
    auth (e) {
      e.preventDefault()
      this.$emit('auth', this.jediForm)
    },
    goBack () {
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>

</style>
