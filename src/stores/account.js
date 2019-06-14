export const accountStore = {
  namespaced: true,
  state: {
    isJedi: false
  },
  mutations: {
    setJediStatus (state, status) {
      state.isJedi = status
    }
  },
  actions: {}
}
