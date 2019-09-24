import Vue from 'vue'
import Vuex from 'vuex'
import { FETCH_PROJECTS, FETCH_ASSOS_ID } from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    assos: {}
  },
  actions: {
    FETCH_PROJECTS,
    FETCH_ASSOS_ID
  },
  mutations,
  getters
})
