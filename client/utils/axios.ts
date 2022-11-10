import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'

// create instance axios config
export default axios.create({
  baseURL: BASE_URL,
  timeout: 3 * 1000, //miliseconds
  headers: {
    'Content-Type': 'application/json',
  },
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  timeout: 3 * 1000, //miliseconds
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
