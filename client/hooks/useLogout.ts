import axios from '../utils/axios'

const useLogout = () => {
  const logout = async () => {
    try {
      const response = await axios.delete('/sign_out', {
        withCredentials: true,
      })
    } catch (err) {
      console.error(err)
    }
  }
  return logout
}

export default useLogout
