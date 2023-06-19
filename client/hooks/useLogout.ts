import { useRouter } from 'next/router'
import { axiosPrivate } from '../utils/axios'

const useLogout = () => {
  const router = useRouter()
  const logout = async () => {
    try {
      const response = await axiosPrivate.delete('/sign_out')
      localStorage.removeItem('zenn_clone_current_user')
      if (response.status === 204) {
        // router.reload()
        // redirect('/')
        window.location.href = '/'
      }
    } catch (err) {
      console.error('Error logging out', err)
    }
  }
  return logout
}

export default useLogout
