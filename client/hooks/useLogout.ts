import { axiosPrivate } from '../utils/axios'

const useLogout = () => {
  const logout = async () => {
    try {
      await axiosPrivate.delete('/sign_out')
      localStorage.removeItem('zenn_clone_current_user')
    } catch (err) {
      console.error(err)
    }
  }
  return logout
}

export default useLogout
