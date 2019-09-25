// import Vue from 'vue'

export default {

  SET_PROJECTS: (state, { projects }) => {
    // projects.forEach(item => {
    //   if (item) {
    //     Vue.set(state.projects, item._id, item)
    //   }
    // })
    state.projects = [...projects]
  },
  SET_ASSOCIATION: (state, { asso }) => {

  },
  SET_JWT: (state, { jwt }) => {
    state.jwt = jwt
  }
}
