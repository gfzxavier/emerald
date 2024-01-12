import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state () {
    return {
      button: '',
      timesPressed: 0,
      isPressing: false
    }
  },
  mutations: {
    setPressedButton(state, button) {
      state.button = button

      setTimeout(()=> {
        state.button = ''
      }, 180)
    },
  },
  getters:{
    getPressedButton(state){
      return state.button
    },
  }
})