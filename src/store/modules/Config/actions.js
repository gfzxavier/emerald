export const actions = {
  pressing({ commit }, event) {
    if (event.key !== 'Tab') {
      commit('SET_PRESSED_BUTTON', event.key.toLowerCase())
    }
  },
  stopPressing({ commit }) {
    commit('SET_PRESSED_BUTTON', '')
  }
}
