let saberJson = require('../assets/data/sabers.json')
export const saberStore = {
  namespaced: true,
  state: {
    sabers: []
  },
  mutations: {
    setSabers (state, sabers) {
      state.sabers = sabers
    },
    setSaberQuantity (state, payload) {
      let activeSaber = state.sabers.filter(saber => {
        return saber.id === payload.id
      })
      let index = state.sabers.indexOf(activeSaber[0])
      state.sabers[index].available = payload.value
    },
    addSaber (state, saber) {
      state.sabers.push(saber)
    }
  },
  actions: {
    fetchSabers ({ state, commit }) {
      !state.sabers.length && commit('setSabers', saberJson.sabers)
    }
  }
}
