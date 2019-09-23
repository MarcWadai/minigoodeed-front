import Vue from 'vue'
import Vuex from 'vuex'
import { FETCH_PROJECTS } from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: []
  },
  actions: {
    FETCH_PROJECTS
  },
  mutations,
  getters
})
