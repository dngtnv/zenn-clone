import { axiosPrivate } from '../utils/axios'

const useRefreshToken = () => {
  const refresh = async () => {
    await axiosPrivate.get('/sessions/refresh')
  }
  return refresh
}

export default useRefreshToken
