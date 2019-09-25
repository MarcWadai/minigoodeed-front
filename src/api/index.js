import axios from 'axios'

const config = {
  headers: {
    'x-api-key': 'IjGRwrFJnK50JSYUnLqIq3G1C0xed66L3erR0BlM'
  }
}

export const fetchProjects = () => {
  return axios.get('dev/Project', config)
}

export const fetchAssosById = (id) => {
  return axios.get(`dev/Association/${id}`, config).then(data => {
    return Promise.resolve(data.data)
  })
}

export const fetchAdCampaign = () => {
  return axios.get(`dev/AdCampaign`, config).then(data => {
    return Promise.resolve(data.data)
  })
}

export const postDonation = ({ projectId, campaignId }) => {
  config.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`
  return axios.post(`dev/Donation`, { project_id: projectId, campaign_id: campaignId }, config).then(data => {
    return Promise.resolve(data.data)
  }).catch(err => Promise.reject(err))
}
export const login = ({ email, password }) => {
  return axios.post(`dev/login`, { email, password }, config)
}

export const register = ({ email, password }) => {
  return axios.post(`dev/register`, { email, password }, config)
}

export const donation = (id) => {
  return axios.post('dev/Donation', config)
}
