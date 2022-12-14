import { axiosPrivate } from '../utils/axios'

const useLogout = () => {
  const logout = async () => {
    try {
      await axiosPrivate.delete('/sign_out')
    } catch (err) {
      console.error(err)
    }
  }
  return logout
}

export default useLogout
