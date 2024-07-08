import { createStore } from 'vuex'

import { Config } from './modules/Config'

// Create a new store instance.
export default createStore({
  modules: {
    Config
  }
})
