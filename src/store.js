import Vue from 'vue'
import Vuex from 'vuex'
import { accountStore } from './stores/account'
import { saberStore } from './stores/saber'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    paths: ['account', 'saber']
  })],
  modules: {
    account: accountStore,
    saber: saberStore
  }
})
