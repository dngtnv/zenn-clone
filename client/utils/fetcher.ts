import { axiosPrivate } from '../utils/axios'

export const privateFetcher = async <T>(url: string): Promise<T | null> => {
  axiosPrivate.interceptors.response.use(
    (response) => response,
    async (error) => {
      const prevRequest = error?.config
      if (error?.response?.status === 403 && !prevRequest.sent) {
        prevRequest.sent = true
        const newAccessToken = await axiosPrivate.get('/sessions/refresh')
        prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
        return axiosPrivate(prevRequest)
      }
      return Promise.reject(error)
    }
  )
  try {
    const { data } = await axiosPrivate.get<T>(url)
    return data
  } catch (error) {
    return null
  }
}
