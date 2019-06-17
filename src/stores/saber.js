let saberJson = require('../assets/data/sabers.json')
export const saberStore = {
  namespaced: true,
  state: {
    sabers: []
  },
  mutations: {
    setSabers (state, sabers) {
      state.sabers = sabers
    }
  },
  actions: {
    fetchSabers ({ commit }) {
      commit('setSabers', saberJson.sabers)
    }
  }
}
