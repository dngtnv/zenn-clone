import axios from 'axios'

/* const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default fetcher */
const fetcher = async <T>(url: string, headers = {}): Promise<T | null> => {
  try {
    const { data } = await axios.get<T>(url, {
      headers,
      withCredentials: true,
    })
    return data
  } catch (error) {
    return null
  }
}

export default fetcher
