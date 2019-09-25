import Vue from 'vue'
import Vuex from 'vuex'
import { FETCH_PROJECTS, FETCH_ASSOS_ID, LOGIN, REGISTER, LOGOUT } from './actions'
import mutations from './mutations'
// import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    jwt: null
  },
  actions: {
    FETCH_PROJECTS,
    FETCH_ASSOS_ID,
    LOGIN,
    REGISTER,
    LOGOUT
  },
  mutations,
  getters: {
    getJwt: state => state.jwt
  }
})
