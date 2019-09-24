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
  return axios.get(`dev/Association/${id}`, config)
}
