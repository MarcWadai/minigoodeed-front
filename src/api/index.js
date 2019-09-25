import axios from 'axios'

const config = {
  headers: {
    'x-api-key': process.env.VUE_APP_API_KEY
  }
}
const uri = process.env.VUE_APP_ROOT_API
// const uri = 'https://api-goodeed.positiveactions.co'

export const fetchProjects = () => {
  return axios.get(uri + 'dev/Project', config)
}

export const fetchAssosById = (id) => {
  return axios.get(uri + `dev/Association/${id}`, config).then(data => {
    return Promise.resolve(data.data)
  })
}

export const fetchAssos = () => {
  return axios.get(uri + `dev/Association`, config).then(data => {
    return Promise.resolve(data.data)
  })
}

export const fetchAdCampaign = () => {
  return axios.get(uri + `dev/AdCampaign`, config).then(data => {
    return Promise.resolve(data.data)
  })
}

export const postDonation = ({ projectId, campaignId }) => {
  config.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`
  return axios.post(uri + `dev/Donation`, { project_id: projectId, campaign_id: campaignId }, config).then(data => {
    return Promise.resolve(data.data)
  }).catch(err => Promise.reject(err))
}
export const login = ({ email, password }) => {
  return axios.post(uri + `dev/login`, { email, password }, config)
}

export const register = ({ email, password }) => {
  return axios.post(uri + `dev/register`, { email, password }, config)
}

export const donation = (id) => {
  return axios.post(uri + 'dev/Donation', config)
}
