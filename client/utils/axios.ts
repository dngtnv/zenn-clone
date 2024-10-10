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
// axiosPrivate.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const prevRequest = error?.config
//     if (error?.response?.status === 403 && !prevRequest.sent) {
//       prevRequest.sent = true
//       const newAccessToken = await axiosPrivate.get('/sessions/refresh')
//       prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
//       return axiosPrivate({
//         method: prevRequest.method,
//         url: prevRequest.url,
//         data: prevRequest.data,
//       })
//     }
//     return Promise.reject(error)
//   }
// )

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const response = await axiosPrivate.get('/sessions/refresh')
        const newAccessToken = response.data.accessToken

        // Update the Authorization header with the new token
        axiosPrivate.defaults.headers[
          'Authorization'
        ] = `Bearer ${newAccessToken}`

        // Retry the original request with the new token
        return axiosPrivate(originalRequest)
      } catch (refreshError) {
        // Handle refresh token error, e.g., redirect to login page
        console.error('Failed to refresh access token:', refreshError)
        // Redirect to login page or handle the error in your application's way
        // For example, you can redirect the user to the login page:
        // window.location.href = '/login';
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)
