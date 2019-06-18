export const accountStore = {
  namespaced: true,
  state: {
    isJedi: false,
    padawanAge: null,
    errorMessage: ''
  },
  mutations: {
    setJediStatus (state, status) {
      state.isJedi = status
    },
    setPadawanAge (state, age) {
      state.padawanAge = age
    },
    setErrorMessage (state, text) {
      state.errorMessage = text
    }
  },
  actions: {
    logout ({ commit }) {
      commit('setJediStatus', false)
      commit('setPadawanAge', null)
    },
    validate ({ state, commit }, data) {
      let errorMessage = ''
      if (data.password && data.password !== 'asdasd') {
        errorMessage = 'The Force does not agree with your password'
      }
      if (data.age && data.age > 140) {
        errorMessage = 'You should be dead, you know...'
      }
      commit('setErrorMessage', errorMessage)
    },
    clearForm ({ commit }) {
      commit('setErrorMessage', '')
    }
  }
}
