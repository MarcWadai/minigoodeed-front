import { fetchProjects, fetchAssosById } from '../api'

export const FETCH_PROJECTS = ({ commit, dispatch, state }) => {
  return fetchProjects()
    .then(projects => {
      console.log('projects', projects)
      return commit('SET_PROJECTS', { projects: projects.data })
    })
}

export const FETCH_ASSOS_ID = ({ commit, dispatch, state }, { id }) => {
  return fetchAssosById(id)
    .then(asso => {
      console.log('asso', asso)
      return commit('SET_ASSOCIATION', { asso })
    })
}
