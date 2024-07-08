import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { state } from './state'

export const Config = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}
