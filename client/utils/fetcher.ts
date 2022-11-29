import { axiosPrivate } from '../utils/axios'

export const privateFetcher = async <T>(url: string): Promise<T | null> => {
  try {
    const { data } = await axiosPrivate.get<T>(url)
    return data
  } catch (error) {
    return null
  }
}
