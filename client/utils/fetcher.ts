import axios, { axiosPrivate } from '../utils/axios'

export const privateFetcher = async <T>(url: string): Promise<T | null> => {
  try {
    const { data } = await axiosPrivate.get<T>(url)
    return data
  } catch (error) {
    throw new Error('Network response not ok.', { cause: error })
  }
}

export const publicFetcher = async <T>(url: string): Promise<T | null> => {
  try {
    const { data } = await axios.get<T>(url)
    return data
  } catch (error) {
    throw new Error('Network response not ok.', { cause: error })
  }
}
