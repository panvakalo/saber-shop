import { crystalConfig } from '../assets/maps/crystal'

let saberJson = require('../assets/data/sabers.json')
export const saberStore = {
  namespaced: true,
  state: {
    sabers: [],
    orderIsPlaced: false,
    orderedSabers: []
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
    },
    addToOrderedSabers (state, saber) {
      state.orderedSabers.push(saber)
      console.log(state.orderedSabers)
    },
    setOrderStatus (state, status) {
      state.orderIsPlaced = status
    }
  },
  actions: {
    fetchSabers ({ state, commit }) {
      !state.sabers.length && commit('setSabers', saberJson.sabers)
    },
    constructOrder ({ commit, rootState }, saber) {
      const padawanForce = rootState.account.padawanAge * 10
      const crystalStats = crystalConfig(saber.crystal.color)
      const saberPower = getTwoDigits(padawanForce * crystalStats.powerMultiplier)
      saber.price = getTwoDigits(saberPower * crystalStats.priceMultiplier)
      commit('setOrderStatus', true)
      commit('addToOrderedSabers', saber)
    }
  }
}

function getTwoDigits (number) {
  return parseFloat((number * 100) / 100).toFixed(2)
}
