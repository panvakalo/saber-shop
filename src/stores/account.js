export const accountStore = {
  namespaced: true,
  state: {
    isMasterJedi: false,
    padawanAge: null,
    errorMessage: '',
    forcePower: ''
  },
  mutations: {
    setJediStatus (state, status) {
      state.isMasterJedi = status
    },
    setPadawanAge (state, age) {
      state.padawanAge = age
    },
    setErrorMessage (state, text) {
      state.errorMessage = text
    },
    setForcePower (state, age) {
      if (age < 18) {
        state.forcePower = age * 10
      } else {
        state.forcePower = 'unlimited'
      }
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
      if (data.age) {
        if (data.age < 140 || data.age < 0) {
          commit('setPadawanAge', data.age)
          commit('setForcePower', data.age)
        } else {
          errorMessage = 'You should be dead, you know...'
        }
      }
      commit('setErrorMessage', errorMessage)
    },
    clearForm ({ commit }) {
      commit('setErrorMessage', '')
    }
  }
}
