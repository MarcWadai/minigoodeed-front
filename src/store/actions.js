import { fetchProjects, fetchAssosById, login, register } from '../api'

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

export const LOGIN = ({ commit, dispatch, state }, { email, password }) => {
  return login({ email, password })
    .then(resp => {
      console.log('data', resp.data)
      localStorage.setItem('jwt', resp.data.token)
      // commit('SET_JWT', resp.data.token)
    })
}

export const REGISTER = ({ commit, dispatch, state }, { email, password }) => {
  return register({ email, password })
    .then(resp => {
      localStorage.setItem('jwt', resp.data.token)
      // commit('SET_JWT', resp.data.token)
    })
}

export const LOGOUT = ({ commit, dispatch, state }) => {
  console.log('iam logging out')
  localStorage.removeItem('jwt')
  // commit('SET_JWT', null)
}
