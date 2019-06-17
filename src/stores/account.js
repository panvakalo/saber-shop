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
    validate ({ commit }, data) {
      console.log('password given: ' + data)
      // TODO: add validation
      commit('setErrorMessage', 'wrong password')
    },
    clearForm ({ commit }) {
      commit('setErrorMessage', '')
    }
  }
}
