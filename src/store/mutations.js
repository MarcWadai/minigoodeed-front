import Vue from 'vue'

export default {

  SET_PROJECTS: (state, { projects }) => {
    console.log('SET_PROJECTS', projects)
    // projects.forEach(item => {
    //   if (item) {
    //     Vue.set(state.projects, item._id, item)
    //   }
    // })
    state.projects = [...projects]
  },

  SET_USER: (state, { id, user }) => {
    Vue.set(state.users, id, user || false) /* false means user not found */
  }
}
