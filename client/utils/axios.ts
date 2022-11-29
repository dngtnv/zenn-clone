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
// create axios interceptor for refresh access token action
axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config
    if (error?.response?.status === 403 && !prevRequest.sent) {
      prevRequest.sent = true
      const newAccessToken = await axiosPrivate.get('/sessions/refresh')
      prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
      return axiosPrivate({ method: prevRequest.method, url: prevRequest.url })
    }
    return Promise.reject(error)
  }
)
