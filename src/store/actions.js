import { fetchProjects } from '../api'

export const FETCH_PROJECTS = ({ commit, dispatch, state }) => {
  return fetchProjects()
    .then(projects => {
      console.log('projects', projects)
      return commit('SET_PROJECTS', { projects: projects.data })
    })
}
