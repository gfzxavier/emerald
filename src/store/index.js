import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state () {
    return {
      button: ''
    }
  },
  mutations: {
    setPressedButton (state, button) {
      state.button = button
    }
  },
  getters:{
    getPressedButton(state){
      return state.button
    }
  }
})